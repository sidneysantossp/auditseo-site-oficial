#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const llmsPath = path.join(root, "public", "llms.txt");
const seoPath = path.join(root, "src", "lib", "seo.ts");
const citationsPath = path.join(root, "src", "content", "researchCitations.ts");
const articlePagePath = path.join(root, "src", "components", "ArticlePage.tsx");
const factsheetPath = path.join(root, "public", "dados", "auditseo-research-press-factsheet-2026-09-08.md");
const evidenceMethodPath = path.join(root, "public", "dados", "case-study-001-metodo-evidencia-prazos-2026-09-08.md");
const failures = [];

if (!fs.existsSync(llmsPath)) {
  failures.push("public/llms.txt ausente");
} else {
  const llms = fs.readFileSync(llmsPath, "utf8");

  if (!/^#\s+AUDITSEO\s*$/m.test(llms)) {
    failures.push("llms.txt sem H1 canônico '# AUDITSEO'");
  }

  const requiredUrls = [
    "https://www.auditseo.com.br/estudos-busca-ia",
    "https://www.auditseo.com.br/case-study/auditseo-search-intelligence",
    "https://www.auditseo.com.br/blog/quanto-custa-consultoria-seo-geo-ia",
    "https://www.auditseo.com.br/blog/como-mercado-brasileiro-vende-geo-search-ai",
    "https://www.auditseo.com.br/dados/benchmark-ofertas-seo-geo-ia-2026-09-08.csv",
    "https://www.auditseo.com.br/dados/benchmark-comunicacao-geo-search-ai-2026-09-08.csv",
    "https://www.auditseo.com.br/dados/auditseo-research-press-factsheet-2026-09-08.md",
    "https://www.auditseo.com.br/dados/case-study-001-metodo-evidencia-prazos-2026-09-08.md",
  ];

  for (const url of requiredUrls) {
    if (!llms.includes(url)) failures.push(`llms.txt não referencia ativo obrigatório: ${url}`);
  }

  if (!/não representa garantia de inclusão, citação ou posicionamento/i.test(llms)) {
    failures.push("llms.txt perdeu a ressalva explícita de não-garantia");
  }
}

if (!fs.existsSync(seoPath)) {
  failures.push("src/lib/seo.ts ausente");
} else {
  const seo = fs.readFileSync(seoPath, "utf8");
  if (!seo.includes('rel: "describedby"')) failures.push("createSeoHead sem rel=describedby");
  if (!seo.includes('/llms.txt')) failures.push("createSeoHead não aponta para /llms.txt");
  if (!seo.includes('type: "text/markdown"')) failures.push("rel=describedby sem type=text/markdown");
}

if (!fs.existsSync(citationsPath)) {
  failures.push("src/content/researchCitations.ts ausente");
} else {
  const citations = fs.readFileSync(citationsPath, "utf8");
  const requiredCitationTokens = [
    '"quanto-custa-consultoria-seo-geo-ia"',
    '"como-mercado-brasileiro-vende-geo-search-ai"',
    "benchmark-ofertas-seo-geo-ia-2026-09-08.csv",
    "benchmark-comunicacao-geo-search-ai-2026-09-08.csv",
    "suggestedCitation",
    "reuseNote",
  ];
  for (const token of requiredCitationTokens) {
    if (!citations.includes(token)) failures.push(`metadado de citação obrigatório ausente: ${token}`);
  }
}

if (!fs.existsSync(articlePagePath)) {
  failures.push("src/components/ArticlePage.tsx ausente");
} else {
  const articlePage = fs.readFileSync(articlePagePath, "utf8");
  if (!articlePage.includes("researchCitations")) failures.push("ArticlePage não carrega metadados de citação");
  if (!articlePage.includes("COMO CITAR ESTA PESQUISA")) failures.push("ArticlePage não renderiza bloco de citação da pesquisa");
  if (!articlePage.includes("researchCitation.datasetUrl")) failures.push("bloco de citação não expõe o CSV correspondente");
}

if (!fs.existsSync(factsheetPath)) {
  failures.push("press factsheet público ausente");
} else {
  const factsheet = fs.readFileSync(factsheetPath, "utf8");
  const requiredFactsheetTokens = [
    "# AUDITSEO Research — Press & Citation Factsheet",
    "Benchmark #001",
    "Benchmark #002",
    "benchmark-ofertas-seo-geo-ia-2026-09-08.csv",
    "benchmark-comunicacao-geo-search-ai-2026-09-08.csv",
    "case-study-001-metodo-evidencia-prazos-2026-09-08.md",
    "contato@auditseo.com.br",
    "Não é censo do mercado brasileiro",
    "Amostra pequena e exploratória",
  ];
  for (const token of requiredFactsheetTokens) {
    if (!factsheet.includes(token)) failures.push(`press factsheet perdeu conteúdo obrigatório: ${token}`);
  }
}

if (!fs.existsSync(evidenceMethodPath)) {
  failures.push("método público de evidência/prazos ausente");
} else {
  const method = fs.readFileSync(evidenceMethodPath, "utf8");
  const requiredMethodTokens = [
    "# AUDITSEO Case Study #001 — método de evidência e prazos",
    "## PRE — preparado, ainda sem evidência de efeito",
    "## M0 — baseline",
    "## M1 — sinal inicial",
    "## M2 — tendência emergente",
    "## M3 — evidência operacional",
    "## M4 — evidência comercial",
    "## Time-to-Signal",
    "## Atribuição de lead",
    "## Regra de integridade",
    "Um único caso não vira promessa",
  ];
  for (const token of requiredMethodTokens) {
    if (!method.includes(token)) failures.push(`método público de evidência perdeu conteúdo obrigatório: ${token}`);
  }
}

if (failures.length) {
  console.error(`AUDITSEO resource lint: ${failures.length} falha(s).`);
  for (const failure of failures) console.error(`FAIL  ${failure}`);
  process.exit(1);
}

console.log("AUDITSEO resource lint aprovado: descoberta, citabilidade, factsheet e método público de evidência estão coerentes.");
