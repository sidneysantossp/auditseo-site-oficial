import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/diagnostico")({
  head: () =>
    createSeoHead({
      path: "/diagnostico",
      title: "Avaliação Estratégica de Presença Digital | AUDITSEO",
      description:
        "Avaliação estratégica interativa para identificar o que limita a visibilidade, a compreensão e a autoridade da sua empresa no Google e nas plataformas de IA.",
    }),
  component: App,
});
