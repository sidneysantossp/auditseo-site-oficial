export type ResearchCitation = {
  label: string;
  snapshotDate: string;
  canonicalUrl: string;
  datasetUrl: string;
  suggestedCitation: string;
  reuseNote: string;
};

export const researchCitations: Record<string, ResearchCitation> = {
  "quanto-custa-consultoria-seo-geo-ia": {
    label: "Benchmark AUDITSEO de ofertas públicas de SEO + GEO/IA",
    snapshotDate: "8 de setembro de 2026",
    canonicalUrl: "https://www.auditseo.com.br/blog/quanto-custa-consultoria-seo-geo-ia",
    datasetUrl: "https://www.auditseo.com.br/dados/benchmark-ofertas-seo-geo-ia-2026-09-08.csv",
    suggestedCitation:
      "AUDITSEO; SANTOS, Sidney. Quanto custa uma consultoria de SEO + GEO/IA em 2026? Benchmark de ofertas públicas no Brasil. Snapshot de 8 de setembro de 2026. AUDITSEO, 2026.",
    reuseNote:
      "Ao reutilizar valores ou faixas, preserve o tipo de oferta, a data do snapshot e a limitação de que a amostra não representa uma média universal do mercado brasileiro.",
  },
  "como-mercado-brasileiro-vende-geo-search-ai": {
    label: "Benchmark AUDITSEO de comunicação pública de GEO/Search AI",
    snapshotDate: "8 de setembro de 2026",
    canonicalUrl: "https://www.auditseo.com.br/blog/como-mercado-brasileiro-vende-geo-search-ai",
    datasetUrl: "https://www.auditseo.com.br/dados/benchmark-comunicacao-geo-search-ai-2026-09-08.csv",
    suggestedCitation:
      "AUDITSEO; SANTOS, Sidney. Como o mercado brasileiro vende GEO e Search AI em 2026: benchmark de promessa, prazo e mensuração. Snapshot de 8 de setembro de 2026. AUDITSEO, 2026.",
    reuseNote:
      "Ao reutilizar proporções da amostra, mantenha o denominador de 12 páginas observadas e não generalize os achados como estimativa representativa de todo o mercado brasileiro.",
  },
};
