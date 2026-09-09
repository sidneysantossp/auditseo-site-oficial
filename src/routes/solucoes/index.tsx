import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/solucoes/")({
  head: () =>
    createSeoHead({
      path: "/solucoes",
      title: "Soluções de Inteligência de Busca e Autoridade | AUDITSEO",
      description:
        "Conheça as soluções da AUDITSEO para lançar, recuperar e fortalecer a presença da sua empresa no Google e nas plataformas de inteligência artificial.",
    }),
  component: App,
});
