#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const ledgerPath = path.join(root, "docs", "research", "case-study-001-evidence-ledger.csv");
const rulesPath = path.join(root, "docs", "research", "case-study-001-evidence-maturity-rules.md");
const failures = [];

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (quoted && next === '"') {
        field += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }

    if (char === "," && !quoted) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(field);
      if (row.some((value) => value.length)) rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  if (field.length || row.length) {
    row.push(field);
    if (row.some((value) => value.length)) rows.push(row);
  }

  return rows;
}

if (!fs.existsSync(ledgerPath)) {
  failures.push("Evidence Ledger ausente");
} else {
  const rows = parseCsv(fs.readFileSync(ledgerPath, "utf8"));
  const header = rows[0] || [];
  const requiredColumns = [
    "evidence_id",
    "date",
    "layer",
    "action",
    "hypothesis",
    "expected_signal",
    "primary_source",
    "status",
    "observed_result",
    "polarity",
    "evidence_maturity",
    "causal_language_allowed",
    "artifact_ref",
  ];

  for (const column of requiredColumns) {
    if (!header.includes(column)) failures.push(`Evidence Ledger sem coluna obrigatória: ${column}`);
  }

  const index = Object.fromEntries(header.map((name, i) => [name, i]));
  const ids = new Set();
  const allowedPolarity = new Set(["positive", "negative", "neutral", "inconclusive"]);
  const allowedMaturity = new Set(["PRE", "M0", "M1", "M2", "M3", "M4"]);

  for (const row of rows.slice(1)) {
    const id = row[index.evidence_id];
    if (!id) {
      failures.push("Evidence Ledger contém linha sem evidence_id");
      continue;
    }
    if (ids.has(id)) failures.push(`Evidence Ledger contém evidence_id duplicado: ${id}`);
    ids.add(id);

    const polarity = row[index.polarity];
    if (!allowedPolarity.has(polarity)) failures.push(`${id}: polarity inválida: ${polarity}`);

    const maturity = row[index.evidence_maturity];
    if (!allowedMaturity.has(maturity)) failures.push(`${id}: evidence_maturity inválida: ${maturity}`);

    const date = row[index.date];
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date || "")) failures.push(`${id}: date deve usar YYYY-MM-DD`);

    if (!row[index.hypothesis] || !row[index.expected_signal] || !row[index.primary_source]) {
      failures.push(`${id}: hipótese, sinal esperado e fonte primária são obrigatórios`);
    }

    if (maturity === "PRE" && !["prepared", "blocked"].includes(row[index.status])) {
      failures.push(`${id}: PRE deve estar com status prepared ou blocked`);
    }
  }

  if (!ids.has("E001")) failures.push("Evidence Ledger perdeu o baseline E001");
  if (!ids.has("E003")) failures.push("Evidence Ledger perdeu o gate técnico E003");
}

if (!fs.existsSync(rulesPath)) {
  failures.push("Evidence Maturity Rules ausente");
} else {
  const rules = fs.readFileSync(rulesPath, "utf8");
  const requiredMarkers = [
    "## Estado PRE",
    "### M0 — Baseline",
    "### M1 — Sinal inicial",
    "### M2 — Tendência emergente",
    "### M3 — Evidência operacional",
    "### M4 — Evidência comercial",
    "## Regra para falar de prazo",
    "## Uso no briefing diário das 9h",
    "Resultado negativo nunca deve ser removido do histórico",
  ];

  for (const marker of requiredMarkers) {
    if (!rules.includes(marker)) failures.push(`Evidence Maturity Rules perdeu marcador obrigatório: ${marker}`);
  }

  if (!rules.includes("Em 30 dias sua empresa estará sendo citada pelo ChatGPT")) {
    failures.push("Evidence Maturity Rules perdeu o exemplo explícito de promessa proibida");
  }
}

if (failures.length) {
  console.error(`AUDITSEO case-study lint: ${failures.length} falha(s).`);
  for (const failure of failures) console.error(`FAIL  ${failure}`);
  process.exit(1);
}

console.log("AUDITSEO case-study lint aprovado: ledger, PRE/M0-M4, polaridade e regras de prazo coerentes.");
