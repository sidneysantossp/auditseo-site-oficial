#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentDir = path.join(root, "src", "content");
const routesDir = path.join(root, "src", "routes");
const sitemapPath = path.join(root, "public", "sitemap.xml");

const articleFiles = fs
  .readdirSync(contentDir)
  .filter((name) => /^articles.*\.ts$/i.test(name))
  .sort();

const articlePattern = /slug:\s*"([^"]+)",[\s\S]*?title:\s*"([^"]+)",[\s\S]*?metaTitle:\s*"([^"]+)",[\s\S]*?description:\s*"([^"]+)",[\s\S]*?eyebrow:/g;

const articles = [];
const warnings = [];
const failures = [];

for (const file of articleFiles) {
  const source = fs.readFileSync(path.join(contentDir, file), "utf8");
  for (const match of source.matchAll(articlePattern)) {
    const [, slug, title, metaTitle, description] = match;
    articles.push({ file, slug, title, metaTitle, description });
  }
}

if (!articles.length) {
  failures.push("nenhum artigo foi detectado em src/content/articles*.ts");
}

function duplicatesBy(field) {
  const groups = new Map();
  for (const article of articles) {
    const value = article[field].trim().toLowerCase();
    if (!groups.has(value)) groups.set(value, []);
    groups.get(value).push(article);
  }
  return [...groups.entries()].filter(([, items]) => items.length > 1);
}

for (const field of ["slug", "metaTitle", "description"]) {
  for (const [value, items] of duplicatesBy(field)) {
    failures.push(`${field} duplicado: ${value} -> ${items.map((item) => `${item.file}:${item.slug}`).join(", ")}`);
  }
}

const sitemap = fs.readFileSync(sitemapPath, "utf8");
for (const article of articles) {
  const canonical = `https://www.auditseo.com.br/blog/${article.slug}`;
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) {
    failures.push(`artigo fora do sitemap: ${article.slug}`);
  }

  const routeFile = path.join(routesDir, `blog_.${article.slug}.tsx`);
  if (!fs.existsSync(routeFile)) {
    failures.push(`artigo sem rota SSR explícita: ${article.slug}`);
  }

  if (article.metaTitle.length > 65) {
    warnings.push(`metaTitle longo (${article.metaTitle.length}): ${article.slug}`);
  }
  if (article.metaTitle.length < 30) {
    warnings.push(`metaTitle curto (${article.metaTitle.length}): ${article.slug}`);
  }
  if (article.description.length > 180) {
    warnings.push(`description longa (${article.description.length}): ${article.slug}`);
  }
  if (article.description.length < 100) {
    warnings.push(`description curta (${article.description.length}): ${article.slug}`);
  }
  if (article.title.length > 100) {
    warnings.push(`H1/título longo (${article.title.length}): ${article.slug}`);
  }
}

const articleSlugs = new Set(articles.map((article) => article.slug));
for (const file of fs.readdirSync(routesDir).filter((name) => /^blog_\..+\.tsx$/.test(name))) {
  const slug = file.replace(/^blog_\./, "").replace(/\.tsx$/, "");
  if (slug && !articleSlugs.has(slug)) {
    warnings.push(`rota de blog sem registro em articles*.ts: ${slug}`);
  }
}

console.log(`AUDITSEO content lint: ${articles.length} artigos em ${articleFiles.length} arquivos editoriais.`);

if (warnings.length) {
  console.log(`\nAvisos (${warnings.length}):`);
  for (const warning of warnings) console.log(`WARN  ${warning}`);
}

if (failures.length) {
  console.error(`\nFalhas (${failures.length}):`);
  for (const failure of failures) console.error(`FAIL  ${failure}`);
  process.exit(1);
}

console.log("\nContent gate aprovado: slugs/metadados únicos, sitemap e rotas SSR coerentes.");
