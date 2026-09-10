import { createFileRoute } from "@tanstack/react-router";
import HomePageV2 from "@/components/HomePageV2";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AUDITSEO | Search Intelligence para Diagnóstico e Autoridade" },
      {
        name: "google-site-verification",
        content: "uT9b97Zdg7PX0Cc_he99g0aDbxKzDq5K0O4gUa4630c",
      },
      {
        name: "description",
        content:
          "Identifique onde sua presença de busca quebra — rastreamento, indexação, intenção, entidade, autoridade, citabilidade ou conversão — antes de investir em mais SEO, conteúdo ou IA.",
      },
      {
        property: "og:title",
        content: "AUDITSEO | Search Intelligence para Diagnóstico e Autoridade",
      },
      {
        property: "og:description",
        content:
          "Antes de investir em mais SEO, conteúdo ou IA, descubra onde sua presença realmente quebra. Diagnóstico, prioridade, execução e validação orientados por evidência.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.auditseo.com.br/" },
      { property: "og:site_name", content: "AUDITSEO" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "AUDITSEO | Search Intelligence para Diagnóstico e Autoridade",
      },
      {
        name: "twitter:description",
        content:
          "Localize o gargalo antes de prescrever a tática: Crawl → Index → Retrieve → Understand → Trust → Cite → Convert.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.auditseo.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.auditseo.com.br/#organization",
              name: "AUDITSEO",
              url: "https://www.auditseo.com.br/",
              logo: {
                "@type": "ImageObject",
                url: "https://www.auditseo.com.br/auditseo-logo.png",
                contentUrl: "https://www.auditseo.com.br/auditseo-logo.png",
              },
              email: "contato@auditseo.com.br",
              description:
                "Consultoria de Search Intelligence que diagnostica onde a presença de busca de uma empresa perde capacidade de ser descoberta, compreendida, validada, citada ou escolhida e transforma os achados em um roadmap coordenado de implementação e mensuração.",
              knowsAbout: [
                "Search Intelligence",
                "SEO técnico",
                "Search AI",
                "Autoridade de entidade",
                "Arquitetura de conteúdo por intenção",
                "Mensuração de busca",
              ],
              founder: {
                "@id": "https://www.auditseo.com.br/autor/sidney-santos#person",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.auditseo.com.br/#website",
              url: "https://www.auditseo.com.br/",
              name: "AUDITSEO",
              inLanguage: "pt-BR",
              publisher: {
                "@id": "https://www.auditseo.com.br/#organization",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: HomePageV2,
});
