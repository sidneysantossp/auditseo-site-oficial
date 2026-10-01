import { createFileRoute } from "@tanstack/react-router";
import HomePageV2 from "@/components/HomePageV2";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AUDITSEO | Consultoria SEO, GEO e Search Intelligence" },
      {
        name: "google-site-verification",
        content: "uT9b97Zdg7PX0Cc_he99g0aDbxKzDq5K0O4gUa4630c",
      },
      {
        name: "description",
        content:
          "Consultoria SEO, GEO e Search Intelligence em São Paulo, com atendimento a empresas em todo o Brasil, para identificar gargalos antes de priorizar a execução.",
      },
      {
        property: "og:title",
        content: "AUDITSEO | Consultoria SEO, GEO e Search Intelligence",
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
      { property: "og:image", content: "https://www.auditseo.com.br/auditseo-logo.png" },
      { property: "og:image:alt", content: "AUDITSEO — Search Intelligence" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.auditseo.com.br/auditseo-logo.png" },
      {
        name: "twitter:title",
        content: "AUDITSEO | Consultoria SEO, GEO e Search Intelligence",
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
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                telephone: "+55 11 99638-4376",
                availableLanguage: "pt-BR",
                areaServed: "BR",
              },
              location: {
                "@type": "Place",
                name: "São Paulo, SP, Brasil",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "São Paulo",
                  addressRegion: "SP",
                  addressCountry: "BR",
                },
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "São Paulo",
                },
                {
                  "@type": "Country",
                  name: "Brasil",
                },
              ],
              description:
                "Consultoria de Search Intelligence com atuação a partir de São Paulo e atendimento a empresas em todo o Brasil, orientada a diagnosticar onde a presença de busca perde capacidade de ser descoberta, compreendida, validada, citada ou escolhida.",
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
