import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { pricingResearchArticles } from "@/content/articlesPricingResearch";
import { createArticleHead } from "@/lib/articleSeo";

const article = pricingResearchArticles["quanto-custa-consultoria-seo-geo-ia"];

export const Route = createFileRoute("/blog/quanto-custa-consultoria-seo-geo-ia")({
  head: () =>
    createArticleHead(article, {
      name: "Benchmark de ofertas públicas de SEO + GEO/IA no Brasil — 2026-09-08",
      description:
        "Snapshot de ofertas públicas de consultoria, auditoria, sprint, serviço recorrente e software de SEO + GEO/Search AI observado pela AUDITSEO em 8 de setembro de 2026.",
      contentUrl: "/dados/benchmark-ofertas-seo-geo-ia-2026-09-08.csv",
      snapshotDate: "2026-09-08",
      measurementTechnique:
        "Coleta manual de páginas públicas com classificação por tipo de oferta antes da comparação de preço.",
      variableMeasured: [
        "fornecedor/produto",
        "tipo de oferta",
        "preço público observado",
        "periodicidade",
        "escopo público",
        "URL de origem",
      ],
    }),
  component: () => <ArticlePage article={article} />,
});
