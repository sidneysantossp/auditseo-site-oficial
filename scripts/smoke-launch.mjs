#!/usr/bin/env node

const rawBase = process.argv[2] || process.env.BASE_URL;

if (!rawBase) {
  console.error("Uso: npm run smoke:launch -- https://preview.example.com");
  process.exit(2);
}

const baseUrl = rawBase.replace(/\/$/, "");

const INDEXABLE = [
  ["/", "https://www.auditseo.com.br/"],
  ["/metodo-signal", "https://www.auditseo.com.br/metodo-signal"],
  ["/solucoes", "https://www.auditseo.com.br/solucoes"],
  ["/geo-ia", "https://www.auditseo.com.br/geo-ia"],
  ["/diagnostico", "https://www.auditseo.com.br/diagnostico"],
  ["/blog", "https://www.auditseo.com.br/blog"],
  ["/autor/sidney-santos", "https://www.auditseo.com.br/autor/sidney-santos"],
  ["/guias", "https://www.auditseo.com.br/guias"],
  ["/estudos-busca-ia", "https://www.auditseo.com.br/estudos-busca-ia"],
  ["/guias/geo-readiness", "https://www.auditseo.com.br/guias/geo-readiness"],
  ["/guias/narrativa-semantica", "https://www.auditseo.com.br/guias/narrativa-semantica"],
  ["/guias/search-intelligence", "https://www.auditseo.com.br/guias/search-intelligence"],
  ["/politica-de-privacidade", "https://www.auditseo.com.br/politica-de-privacidade"],
  ["/termos-de-uso", "https://www.auditseo.com.br/termos-de-uso"],
  ["/solucoes/projetos-comecando-do-zero", "https://www.auditseo.com.br/solucoes/projetos-comecando-do-zero"],
];

const REDIRECTS = [
  ["/consultoria", "/"],
  ["/sidney-santos", "/autor/sidney-santos"],
  ["/white-label", "/parceria"],
  ["/para-agencias", "/parceria"],
  ["/seo-para-agencias", "/parceria"],
  ["/proposta/dr-felipe-barao", "/propostas/dr-felipe-barao"],
  ["/solucoes/site-sem-tracao", "/solucoes"],
  ["/solucoes/recuperacao-organica", "/solucoes"],
  ["/solucoes/autoridade-de-entidade", "/solucoes"],
  ["/solucoes/conteudo-por-intencao", "/solucoes"],
  ["/solucoes/geo-ia-readiness", "/solucoes"],
  ["/solucoes/migracao-risco-seo", "/solucoes"],
  ["/solucoes/evolucao-organica", "/solucoes"],
];

function pick(html, pattern) {
  return html.match(pattern)?.[1]?.trim() || "";
}

function count(html, pattern) {
  return [...html.matchAll(pattern)].length;
}

function normalizeLocation(location) {
  if (!location) return "";
  try {
    const url = new URL(location, baseUrl);
    return `${url.pathname}${url.search}`;
  } catch {
    return location;
  }
}

async function fetchManual(path) {
  return fetch(`${baseUrl}${path}`, {
    redirect: "manual",
    headers: {
      "user-agent": "AUDITSEO-Launch-Smoke/1.0 (+https://www.auditseo.com.br)",
      accept: "text/html,application/xhtml+xml",
    },
  });
}

async function testIndexable(path, expectedCanonical) {
  const response = await fetchManual(path);
  const html = await response.text();
  const title = pick(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const canonical = pick(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i)
    || pick(html, /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["'][^>]*>/i);
  const robots = pick(html, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["'][^>]*>/i)
    || pick(html, /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']robots["'][^>]*>/i);
  const h1Count = count(html, /<h1\b[^>]*>/gi);
  const canonicalCount = count(html, /<link\b[^>]*rel=["']canonical["'][^>]*>/gi);

  const failures = [];
  if (response.status !== 200) failures.push(`status=${response.status}`);
  if (!title) failures.push("title ausente no HTML SSR");
  if (canonical !== expectedCanonical) failures.push(`canonical=${canonical || "ausente"}`);
  if (canonicalCount !== 1) failures.push(`canonicals=${canonicalCount}`);
  if (/noindex/i.test(robots)) failures.push(`robots=${robots}`);
  if (h1Count !== 1) failures.push(`h1=${h1Count}`);

  return { path, ok: failures.length === 0, failures };
}

async function testRedirect(path, expectedPath) {
  const response = await fetchManual(path);
  const location = normalizeLocation(response.headers.get("location"));
  const failures = [];
  if (![301, 308].includes(response.status)) failures.push(`status=${response.status}`);
  if (location !== expectedPath) failures.push(`location=${location || "ausente"}`);
  return { path, ok: failures.length === 0, failures };
}

async function testNotFound() {
  const path = "/__auditseo-smoke-not-found-7f41b9";
  const response = await fetchManual(path);
  const html = await response.text();
  const robots = pick(html, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["'][^>]*>/i)
    || pick(html, /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']robots["'][^>]*>/i);
  const canonicalCount = count(html, /<link\b[^>]*rel=["']canonical["'][^>]*>/gi);
  const failures = [];
  if (response.status !== 404) failures.push(`status=${response.status}`);
  if (!/noindex/i.test(robots)) failures.push(`robots=${robots || "ausente"}`);
  if (canonicalCount !== 0) failures.push(`canonicals=${canonicalCount}`);
  return { path, ok: failures.length === 0, failures };
}

async function testInfrastructure(path, expectedStatus = 200) {
  const response = await fetch(`${baseUrl}${path}`, { redirect: "manual" });
  return {
    path,
    ok: response.status === expectedStatus,
    failures: response.status === expectedStatus ? [] : [`status=${response.status}`],
  };
}

const results = [];

for (const [path, canonical] of INDEXABLE) {
  try {
    results.push(await testIndexable(path, canonical));
  } catch (error) {
    results.push({ path, ok: false, failures: [String(error)] });
  }
}

for (const [path, destination] of REDIRECTS) {
  try {
    results.push(await testRedirect(path, destination));
  } catch (error) {
    results.push({ path, ok: false, failures: [String(error)] });
  }
}

try {
  results.push(await testNotFound());
} catch (error) {
  results.push({ path: "404 probe", ok: false, failures: [String(error)] });
}

for (const path of ["/robots.txt", "/sitemap.xml"]) {
  try {
    results.push(await testInfrastructure(path));
  } catch (error) {
    results.push({ path, ok: false, failures: [String(error)] });
  }
}

console.log(`\nAUDITSEO launch smoke — ${baseUrl}\n`);
for (const result of results) {
  const marker = result.ok ? "PASS" : "FAIL";
  console.log(`${marker.padEnd(4)}  ${result.path}${result.ok ? "" : ` — ${result.failures.join("; ")}`}`);
}

const failed = results.filter((result) => !result.ok);
console.log(`\n${results.length - failed.length}/${results.length} checks passed.`);

if (failed.length) {
  console.error(`Release bloqueado: ${failed.length} check(s) falharam.`);
  process.exit(1);
}

console.log("Release gate HTTP/SEO aprovado.");
