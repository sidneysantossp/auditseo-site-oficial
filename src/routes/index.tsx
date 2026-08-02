import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AUDITSEO | Consultoria de Inteligência de Busca e Autoridade" },
      {
        name: "description",
        content:
          "Identificamos o que limita a presença da sua empresa e coordenamos a estratégia para fortalecer autoridade, visibilidade e reconhecimento no Google e nas plataformas de inteligência artificial.",
      },
      {
        property: "og:title",
        content: "AUDITSEO | Consultoria de Inteligência de Busca e Autoridade",
      },
      {
        property: "og:description",
        content:
          "Identificamos o que limita a presença da sua empresa e coordenamos a estratégia para fortalecer autoridade, visibilidade e reconhecimento no Google e nas plataformas de inteligência artificial.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.auditseo.com.br/" },
      { property: "og:site_name", content: "AUDITSEO" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "AUDITSEO | Consultoria de Inteligência de Busca e Autoridade",
      },
      {
        name: "twitter:description",
        content:
          "Identificamos o que limita a presença da sua empresa e coordenamos a estratégia para fortalecer autoridade, visibilidade e reconhecimento no Google e nas plataformas de IA.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.auditseo.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "AUDITSEO",
          url: "https://www.auditseo.com.br/",
          description:
            "Consultoria de Inteligência de Busca e Autoridade de Entidade. Identificamos o que limita a presença da sua empresa e coordenamos a estratégia para fortalecer autoridade, visibilidade e reconhecimento no Google e nas plataformas de inteligência artificial.",
          areaServed: "BR",
          serviceType: [
            "Consultoria de Inteligência de Busca",
            "Autoridade de Entidade",
            "GEO e presença em plataformas de IA",
          ],
          founder: { "@type": "Person", name: "Sidney Santos" },
        }),
      },
    ],
  }),
  component: App,
});
