import { createFileRoute } from "@tanstack/react-router";
import FounderPage from "@/components/FounderPage";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/autor/sidney-santos")({
  head: () => ({
    ...createSeoHead({
      path: "/autor/sidney-santos",
      title: "Sidney Santos — Especialista em SEO e Search Intelligence | AUDITSEO",
      description:
        "Sidney Santos atua com busca desde 2009 e é fundador da AUDITSEO, consultoria de Search Intelligence orientada por diagnóstico, evidência e mensuração.",
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
          jobTitle: "Fundador da AUDITSEO e especialista em SEO e Search Intelligence",
          description:
            "Sidney Santos atua no mercado de busca desde 2009 e é fundador da AUDITSEO, consultoria de Search Intelligence.",
          worksFor: {
            "@id": "https://www.auditseo.com.br/#organization",
          },
          knowsAbout: [
            "SEO técnico",
            "Search Intelligence",
            "Search AI",
            "Autoridade de entidade",
            "Dados estruturados",
            "GEO",
          ],
        }),
      },
    ],
  }),
  component: FounderPage,
});
