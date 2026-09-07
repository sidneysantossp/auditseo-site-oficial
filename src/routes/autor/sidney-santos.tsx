import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/autor/sidney-santos")({
  head: () =>
    createSeoHead({
      path: "/autor/sidney-santos",
      title: "Sidney Santos — Especialista em SEO e Search Intelligence | AUDITSEO",
      description:
        "Sidney Santos atua com busca desde 2009 e é fundador da AUDITSEO, consultoria de Inteligência de Busca e Autoridade de Entidade.",
    }),
  component: App,
});
