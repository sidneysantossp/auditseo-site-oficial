import { createFileRoute } from "@tanstack/react-router";
import FounderPage from "@/components/FounderPage";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/autor/sidney-santos")({
  head: () => ({
    ...createSeoHead({
      path: "/autor/sidney-santos",
      title: "Sidney Santos — Especialista em SEO, Search AI e GEO | AUDITSEO",
      description:
        "Sidney Santos atua com busca desde 2009 e é fundador da AUDITSEO. Especialista em SEO, Search AI, GEO, autoridade de entidade e Search Intelligence orientada por diagnóstico e evidência.",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://www.auditseo.com.br/autor/sidney-santos#person",
          name: "Sidney Santos",
          url: "https://www.auditseo.com.br/autor/sidney-santos",
          jobTitle: "Fundador da AUDITSEO e especialista em SEO, Search AI e Search Intelligence",
          description:
            "Sidney Santos atua no mercado de busca desde 2009 e é fundador da AUDITSEO, consultoria de Search Intelligence com atuação em SEO, Search AI, GEO e autoridade de entidade.",
          worksFor: {
            "@id": "https://www.auditseo.com.br/#organization",
          },
          knowsAbout: [
            "SEO técnico",
            "Search Intelligence",
            "Search AI",
            "Generative Engine Optimization (GEO)",
            "Autoridade de entidade",
            "Dados estruturados",
            "Arquitetura de conteúdo por intenção",
          ],
        }),
      },
    ],
  }),
  component: FounderPage,
});
