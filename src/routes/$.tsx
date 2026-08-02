import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";

export const Route = createFileRoute("/$")({
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
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});
