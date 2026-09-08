import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { geoMarketBenchmarkArticles } from "@/content/articlesGeoMarketBenchmark";
import { createArticleHead } from "@/lib/articleSeo";

const article = geoMarketBenchmarkArticles["como-mercado-brasileiro-vende-geo-search-ai"];

export const Route = createFileRoute("/blog/como-mercado-brasileiro-vende-geo-search-ai")({
  head: () =>
    createArticleHead(article, {
      name: "Benchmark de comunicação pública de GEO/Search AI no Brasil — 2026-09-08",
      description:
        "Snapshot exploratório de 12 páginas públicas de fornecedores de GEO/Search AI classificadas por garantia, prazo, mensuração, método e evidência pública.",
      contentUrl: "/dados/benchmark-comunicacao-geo-search-ai-2026-09-08.csv",
      snapshotDate: "2026-09-08",
      measurementTechnique:
        "Observação manual de páginas públicas descobertas em pesquisas atuais por GEO, SEO para IA e auditoria de visibilidade, com regras de classificação congeladas antes do artigo.",
      variableMeasured: [
        "garantia explícita",
        "declaração explícita de não-garantia",
        "prazo público de diagnóstico",
        "prazo público de resultado",
        "protocolo público de mensuração",
        "método proprietário nomeado",
        "evidência pública observada",
      ],
    }),
  component: () => <ArticlePage article={article} />,
});
