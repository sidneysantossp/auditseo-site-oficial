import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AUDITSEO | Search Intelligence e Autoridade de Entidade" },
      {
        name: "google-site-verification",
        content: "uT9b97Zdg7PX0Cc_he99g0aDbxKzDq5K0O4gUa4630c",
      },
      {
        name: "description",
        content:
          "Descubra por que sua empresa não é encontrada, compreendida ou considerada no Google e nas plataformas de IA. A AUDITSEO conecta SEO técnico, conteúdo, autoridade de entidade e Search AI em um plano orientado por evidências.",
      },
      {
        property: "og:title",
        content: "AUDITSEO | Search Intelligence e Autoridade de Entidade",
      },
      {
        property: "og:description",
        content:
          "Sua empresa não precisa apenas aparecer na busca. Precisa entrar na decisão. Diagnóstico e coordenação de SEO, conteúdo, autoridade de entidade e Search AI.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.auditseo.com.br/" },
      { property: "og:site_name", content: "AUDITSEO" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "AUDITSEO | Search Intelligence e Autoridade de Entidade",
      },
      {
        name: "twitter:description",
        content:
          "Descubra os sinais que impedem sua empresa de ser encontrada, compreendida e considerada no Google e nas plataformas de IA.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.auditseo.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://www.auditseo.com.br/#organization",
          name: "AUDITSEO",
          url: "https://www.auditseo.com.br/",
          logo: "https://www.auditseo.com.br/auditseo-logo.png",
          description:
            "Consultoria de Search Intelligence e Autoridade de Entidade que identifica e coordena os sinais técnicos, semânticos, editoriais e de autoridade que influenciam descoberta, compreensão, validação e consideração de empresas em mecanismos de busca e plataformas de IA.",
          address: {
            "@type": "PostalAddress",
            addressCountry: "BR",
          },
          serviceType: [
            "Search Intelligence",
            "Consultoria de SEO técnico",
            "Autoridade de Entidade",
            "Arquitetura de Conteúdo por Intenção",
            "Generative Search Readiness",
          ],
          founder: {
            "@type": "Person",
            "@id": "https://www.auditseo.com.br/autor/sidney-santos#person",
            name: "Sidney Santos",
            url: "https://www.auditseo.com.br/autor/sidney-santos",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});
