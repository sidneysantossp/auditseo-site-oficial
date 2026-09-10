#!/usr/bin/env node

const baseUrl = (process.argv[2] || process.env.BASE_URL || "").replace(/\/$/, "");
const bypassSecret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

if (!baseUrl) {
  console.error("Uso: node scripts/smoke-lead-delivery.mjs https://preview-host");
  process.exit(2);
}

const runId = new Date().toISOString().replace(/[:.]/g, "-");
const qaEmail = `release-qa+${runId}@auditseo.com.br`;

const cases = [
  {
    label: "consultation",
    payload: {
      kind: "consultation",
      nome: "[RELEASE-QA] Consulta",
      empresa: "AUDITSEO Release QA",
      email: qaEmail,
      whatsapp: "+5511000000000",
      site: "https://www.auditseo.com.br",
      sourcePath: "/#contato-direto",
      referrer: "release-qa",
      utm: { utm_source: "release-qa", utm_medium: "ci", utm_campaign: "p0-lead-delivery" },
      context: "[RELEASE-QA] Payload automatizado de Preview. Descartar; não é lead comercial.",
    },
  },
  {
    label: "diagnostic",
    payload: {
      kind: "diagnostic",
      nome: "[RELEASE-QA] Diagnóstico",
      empresa: "AUDITSEO Release QA",
      email: qaEmail,
      whatsapp: "+5511000000000",
      sourcePath: "/diagnostico?cenario=geo",
      referrer: "release-qa",
      utm: { utm_source: "release-qa", utm_medium: "ci", utm_campaign: "p0-lead-delivery" },
      context: "[RELEASE-QA] Payload automatizado de Preview. Descartar; não é lead comercial.",
    },
  },
  {
    label: "newsletter",
    payload: {
      kind: "newsletter",
      email: qaEmail,
      sourcePath: "/blog",
      referrer: "release-qa",
      utm: { utm_source: "release-qa", utm_medium: "ci", utm_campaign: "p0-lead-delivery" },
      context: "[RELEASE-QA] Payload automatizado de Preview. Descartar; não é inscrição real.",
    },
  },
];

const failures = [];

for (const testCase of cases) {
  const headers = { "Content-Type": "application/json" };
  if (bypassSecret) headers["x-vercel-protection-bypass"] = bypassSecret;

  let response;
  let body;

  try {
    response = await fetch(`${baseUrl}/api/leads`, {
      method: "POST",
      headers,
      body: JSON.stringify(testCase.payload),
      redirect: "manual",
    });
    body = await response.json().catch(() => null);
  } catch (error) {
    failures.push(`${testCase.label}: request failed (${error instanceof Error ? error.message : String(error)})`);
    continue;
  }

  if (response.status !== 200 || body?.success !== true) {
    failures.push(`${testCase.label}: HTTP ${response.status}; success=${String(body?.success)}; error=${body?.error || "-"}`);
    console.error(`FAIL  ${testCase.label} — HTTP ${response.status} — ${body?.error || "resposta inesperada"}`);
    continue;
  }

  console.log(`PASS  ${testCase.label} — entrega confirmada pelo backend`);
}

if (failures.length) {
  console.error(`\nLead delivery gate bloqueado: ${failures.length} falha(s).`);
  for (const failure of failures) console.error(`FAIL  ${failure}`);
  process.exit(1);
}

console.log("\nLead delivery gate aprovado: consultation, diagnostic e newsletter receberam confirmação server-side de entrega.");
