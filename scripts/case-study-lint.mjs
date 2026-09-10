#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const ledgerPath = path.join(root, "docs", "research", "case-study-001-evidence-ledger.csv");
const rulesPath = path.join(root, "docs", "research", "case-study-001-evidence-maturity-rules.md");
const timeToSignalPath = path.join(root, "docs", "research", "case-study-001-time-to-signal.csv");
const leadCapturePath = path.join(root, "src", "components", "LeadCaptureBoundary.tsx");
const leadApiPath = path.join(root, "src", "routes", "api", "leads.ts");
const diagnosticPath = path.join(root, "src", "components", "CompanyDiagnosticPage.tsx");
const legalPath = path.join(root, "src", "components", "LegalPage.tsx");
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
  if (!ids.has("E012")) failures.push("Evidence Ledger perdeu a instrumentação de first-touch E012");
  if (!ids.has("E013")) failures.push("Evidence Ledger perdeu a atribuição declarada E013");
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

if (!fs.existsSync(timeToSignalPath)) {
  failures.push("Time-to-Signal Tracker ausente");
} else {
  const rows = parseCsv(fs.readFileSync(timeToSignalPath, "utf8"));
  const header = rows[0] || [];
  const requiredColumns = [
    "milestone_id",
    "signal",
    "measurement_layer",
    "start_event",
    "start_date",
    "first_observed_at",
    "elapsed_days",
    "status",
    "evidence_maturity",
    "primary_source",
    "evidence_ref",
    "notes",
  ];

  for (const column of requiredColumns) {
    if (!header.includes(column)) failures.push(`Time-to-Signal sem coluna obrigatória: ${column}`);
  }

  const index = Object.fromEntries(header.map((name, i) => [name, i]));
  const ids = new Set();
  const requiredMilestones = ["T001", "T003", "T005", "T006", "T010", "T011", "T013", "T015", "T017", "T019"];

  for (const row of rows.slice(1)) {
    const id = row[index.milestone_id];
    if (!id) {
      failures.push("Time-to-Signal contém linha sem milestone_id");
      continue;
    }
    if (ids.has(id)) failures.push(`Time-to-Signal contém milestone_id duplicado: ${id}`);
    ids.add(id);

    if (!row[index.signal] || !row[index.start_event] || !row[index.primary_source]) {
      failures.push(`${id}: signal, start_event e primary_source são obrigatórios`);
    }

    const maturity = row[index.evidence_maturity];
    if (!["PRE", "M0", "M1", "M2", "M3", "M4"].includes(maturity)) {
      failures.push(`${id}: evidence_maturity inválida no Time-to-Signal: ${maturity}`);
    }
  }

  for (const id of requiredMilestones) {
    if (!ids.has(id)) failures.push(`Time-to-Signal perdeu milestone obrigatório: ${id}`);
  }
}

const attributionFields = ["firstTouchPath", "firstTouchReferrer", "firstTouchUtm", "firstTouchAt"];

if (!fs.existsSync(leadCapturePath)) {
  failures.push("LeadCaptureBoundary ausente para validar first-touch attribution");
} else {
  const client = fs.readFileSync(leadCapturePath, "utf8");
  if (!client.includes('auditseo:first-touch:v1')) failures.push("LeadCaptureBoundary perdeu a chave versionada de first touch");
  if (!client.includes("sessionStorage")) failures.push("LeadCaptureBoundary não persiste first touch em sessionStorage");
  for (const field of attributionFields) {
    if (!client.includes(field)) failures.push(`LeadCaptureBoundary não envia ${field}`);
  }
  if (!client.includes("discoverySource")) failures.push("LeadCaptureBoundary não envia discoverySource declarado");
}

if (!fs.existsSync(leadApiPath)) {
  failures.push("/api/leads ausente para validar attribution");
} else {
  const server = fs.readFileSync(leadApiPath, "utf8");
  for (const field of attributionFields) {
    if (!server.includes(field)) failures.push(`/api/leads não aceita/preserva ${field}`);
  }
  if (!server.includes("discoverySource")) failures.push("/api/leads não aceita/preserva discoverySource");
  if (!server.includes("Primeiro touch AUDITSEO")) failures.push("/api/leads não diferencia primeiro touch nos avisos");
  if (!server.includes("Origem da conversão")) failures.push("/api/leads não diferencia origem da conversão nos avisos");
  if (!server.includes("Como conheceu a AUDITSEO")) failures.push("/api/leads não diferencia descoberta declarada nos avisos");
}

if (!fs.existsSync(diagnosticPath)) {
  failures.push("CompanyDiagnosticPage ausente para validar descoberta declarada");
} else {
  const diagnostic = fs.readFileSync(diagnosticPath, "utf8");
  if (!diagnostic.includes('name="discoverySource"')) failures.push("Diagnóstico perdeu o campo discoverySource");
  for (const option of ["Google", "ChatGPT", "Gemini", "Perplexity", "LinkedIn", "Indicação", "Outro"]) {
    if (!diagnostic.includes(`value="${option}"`)) failures.push(`Diagnóstico perdeu opção de descoberta: ${option}`);
  }
}

if (!fs.existsSync(legalPath)) {
  failures.push("LegalPage ausente para validar transparência de atribuição");
} else {
  const legal = fs.readFileSync(legalPath, "utf8");
  if (!legal.includes("sessionStorage")) failures.push("Política de Privacidade não declara sessionStorage para first touch");
  if (!legal.includes("primeiro contato")) failures.push("Política de Privacidade não explica first-touch attribution");
  if (!legal.includes("origem declarada")) failures.push("Política de Privacidade não explica discovery source declarado");
}

if (failures.length) {
  console.error(`AUDITSEO case-study lint: ${failures.length} falha(s).`);
  for (const failure of failures) console.error(`FAIL  ${failure}`);
  process.exit(1);
}

console.log("AUDITSEO case-study lint aprovado: ledger, PRE/M0-M4, time-to-signal, first-touch e descoberta declarada coerentes.");
