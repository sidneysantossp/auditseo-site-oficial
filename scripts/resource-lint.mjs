#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const llmsPath = path.join(root, "public", "llms.txt");
const seoPath = path.join(root, "src", "lib", "seo.ts");
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

if (failures.length) {
  console.error(`AUDITSEO resource lint: ${failures.length} falha(s).`);
  for (const failure of failures) console.error(`FAIL  ${failure}`);
  process.exit(1);
}

console.log("AUDITSEO resource lint aprovado: llms.txt e rel=describedby coerentes com os ativos de pesquisa.");
