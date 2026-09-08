import { createFileRoute } from "@tanstack/react-router";
import ResearchProgramPage from "@/components/ResearchProgramPage";
import { createSeoHead } from "@/lib/seo";

const url = "https://www.auditseo.com.br/estudos-busca-ia";

export const Route = createFileRoute("/estudos-busca-ia")({
  head: () => ({
    ...createSeoHead({
      path: "/estudos-busca-ia",
      title: "Pesquisas, Benchmarks e Datasets de Search AI | AUDITSEO",
      description:
        "Research Hub da AUDITSEO com benchmarks públicos, datasets congelados, metodologia, Case Study #001 e o protocolo do Search AI Observatory.",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DataCatalog",
          "@id": `${url}#catalog`,
          name: "AUDITSEO Research — Search Intelligence e Search AI",
          description:
            "Catálogo público de benchmarks, datasets e estudos da AUDITSEO sobre Search Intelligence, GEO, Search AI e mercado de consultoria SEO.",
          url,
          publisher: {
            "@type": "Organization",
            "@id": "https://www.auditseo.com.br/#organization",
            name: "AUDITSEO",
          },
          dataset: [
            {
              "@type": "Dataset",
              "@id": "https://www.auditseo.com.br/blog/quanto-custa-consultoria-seo-geo-ia#dataset",
              name: "Benchmark de ofertas públicas de SEO + GEO/IA no Brasil — 2026-09-08",
              url: "https://www.auditseo.com.br/blog/quanto-custa-consultoria-seo-geo-ia",
            },
            {
              "@type": "Dataset",
              "@id": "https://www.auditseo.com.br/blog/como-mercado-brasileiro-vende-geo-search-ai#dataset",
              name: "Benchmark de comunicação pública de GEO/Search AI no Brasil — 2026-09-08",
              url: "https://www.auditseo.com.br/blog/como-mercado-brasileiro-vende-geo-search-ai",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "AUDITSEO", item: "https://www.auditseo.com.br/" },
            { "@type": "ListItem", position: 2, name: "Pesquisas e Datasets", item: url },
          ],
        }),
      },
    ],
  }),
  component: ResearchProgramPage,
});
