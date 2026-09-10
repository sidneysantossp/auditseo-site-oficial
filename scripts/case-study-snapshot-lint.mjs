#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const frozenLedgerPath = path.join(root, "public", "dados", "case-study-001-evidence-ledger-2026-09-08.csv");
const frozenTimePath = path.join(root, "public", "dados", "case-study-001-time-to-signal-2026-09-08.csv");
const snapshotPath = path.join(root, "public", "dados", "case-study-001-status-2026-09-08.json");
const methodPath = path.join(root, "public", "dados", "case-study-001-metodo-evidencia-prazos-2026-09-08.md");
const factsheetPath = path.join(root, "public", "dados", "auditseo-research-press-factsheet-2026-09-08.md");
const llmsPath = path.join(root, "public", "llms.txt");
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

function toObjects(rows) {
  const header = rows[0] || [];
  return rows.slice(1).map((row) => Object.fromEntries(header.map((key, i) => [key, row[i] ?? ""])));
}

function countBy(items, key, allowed) {
  const counts = Object.fromEntries(allowed.map((value) => [value, 0]));
  for (const item of items) {
    const value = item[key];
    if (!(value in counts)) failures.push(`Valor inesperado em ${key}: ${value}`);
    else counts[value] += 1;
  }
  return counts;
}

for (const required of [frozenLedgerPath, frozenTimePath, snapshotPath, methodPath, factsheetPath, llmsPath]) {
  if (!fs.existsSync(required)) failures.push(`Arquivo obrigatório ausente: ${path.relative(root, required)}`);
}

if (!failures.length) {
  const ledger = toObjects(parseCsv(fs.readFileSync(frozenLedgerPath, "utf8")));
  const milestones = toObjects(parseCsv(fs.readFileSync(frozenTimePath, "utf8")));
  const snapshot = JSON.parse(fs.readFileSync(snapshotPath, "utf8"));

  const maturityOrder = ["PRE", "M0", "M1", "M2", "M3", "M4"];
  const polarityOrder = ["positive", "negative", "neutral", "inconclusive"];
  const ledgerMaturity = countBy(ledger, "evidence_maturity", maturityOrder);
  const ledgerPolarity = countBy(ledger, "polarity", polarityOrder);
  const milestonePending = milestones.filter((item) => item.status === "pending").length;
  const milestoneObserved = milestones.filter((item) => item.status === "observed" || item.status === "completed").length;

  if (snapshot.study !== "AUDITSEO Case Study #001") failures.push("Snapshot perdeu identificador canônico do estudo");
  if (snapshot.snapshotDate !== "2026-09-08") failures.push("Snapshot #001 deve permanecer datado em 2026-09-08");
  if (snapshot.snapshotType !== "pre-release status") failures.push("Snapshot #001 deve permanecer classificado como pre-release status");

  const expectedLedgerUrl = "https://www.auditseo.com.br/dados/case-study-001-evidence-ledger-2026-09-08.csv";
  const expectedTimeUrl = "https://www.auditseo.com.br/dados/case-study-001-time-to-signal-2026-09-08.csv";
  if (snapshot.frozenSources?.evidenceLedger !== expectedLedgerUrl) failures.push("Snapshot não aponta para o Evidence Ledger público congelado");
  if (snapshot.frozenSources?.timeToSignal !== expectedTimeUrl) failures.push("Snapshot não aponta para o Time-to-Signal público congelado");

  if (snapshot.evidenceLedger?.entries !== ledger.length) {
    failures.push(`Snapshot declara ${snapshot.evidenceLedger?.entries} entradas, ledger congelado possui ${ledger.length}`);
  }

  for (const level of maturityOrder) {
    if (snapshot.evidenceLedger?.maturityCounts?.[level] !== ledgerMaturity[level]) {
      failures.push(`Snapshot maturityCounts.${level}=${snapshot.evidenceLedger?.maturityCounts?.[level]} mas ledger congelado=${ledgerMaturity[level]}`);
    }
  }

  for (const polarity of polarityOrder) {
    if (snapshot.evidenceLedger?.directionalResultCounts?.[polarity] !== ledgerPolarity[polarity]) {
      failures.push(`Snapshot directionalResultCounts.${polarity}=${snapshot.evidenceLedger?.directionalResultCounts?.[polarity]} mas ledger congelado=${ledgerPolarity[polarity]}`);
    }
  }

  if (snapshot.timeToSignal?.milestonesDefined !== milestones.length) {
    failures.push(`Snapshot declara ${snapshot.timeToSignal?.milestonesDefined} milestones, tracker congelado possui ${milestones.length}`);
  }
  if (snapshot.timeToSignal?.pending !== milestonePending) {
    failures.push(`Snapshot pending=${snapshot.timeToSignal?.pending} mas tracker congelado=${milestonePending}`);
  }
  if (snapshot.timeToSignal?.observed !== milestoneObserved) {
    failures.push(`Snapshot observed=${snapshot.timeToSignal?.observed} mas tracker congelado=${milestoneObserved}`);
  }

  const e001 = ledger.find((item) => item.evidence_id === "E001");
  if (!e001 || e001.evidence_maturity !== "M0") failures.push("E001 precisa continuar sendo o baseline M0 no snapshot inicial");
  if (snapshot.status?.googleSearch?.maturity !== "M0") failures.push("Snapshot Google Search deve permanecer M0 no snapshot inicial");
  if (snapshot.status?.googleSearch?.impressions !== 0 || snapshot.status?.googleSearch?.clicks !== 0) {
    failures.push("Snapshot inicial deve preservar baseline GSC 0 impressões / 0 cliques");
  }

  if (ledgerMaturity.M1 + ledgerMaturity.M2 + ledgerMaturity.M3 + ledgerMaturity.M4 !== 0) {
    failures.push("Ledger congelado do snapshot #001 não pode conter M1+; um avanço exige novo snapshot datado");
  }
  if (snapshot.status?.release?.state !== "blocked" || snapshot.status?.release?.maturity !== "PRE") {
    failures.push("Snapshot #001 deve preservar release blocked/PRE");
  }
  if (snapshot.timeToSignal?.referenceEventObserved !== false) failures.push("Snapshot #001 não pode marcar release reference event como observado");
  if (!/tied to frozen source files from 2026-09-08/i.test(snapshot.immutabilityNote || "")) {
    failures.push("Snapshot perdeu vínculo explícito com fontes congeladas");
  }

  const publicSnapshotUrl = "https://www.auditseo.com.br/dados/case-study-001-status-2026-09-08.json";
  for (const [label, filePath] of [
    ["método público", methodPath],
    ["press factsheet", factsheetPath],
    ["llms.txt", llmsPath],
  ]) {
    const text = fs.readFileSync(filePath, "utf8");
    if (!text.includes(publicSnapshotUrl)) failures.push(`${label} não referencia o snapshot público #001`);
  }
}

if (failures.length) {
  console.error(`AUDITSEO case-study snapshot lint: ${failures.length} falha(s).`);
  for (const failure of failures) console.error(`FAIL  ${failure}`);
  process.exit(1);
}

console.log("AUDITSEO case-study snapshot lint aprovado: snapshot público #001 corresponde às fontes históricas congeladas, sem bloquear a evolução do ledger vivo.");
