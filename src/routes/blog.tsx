import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () =>
    createSeoHead({
      path: "/blog",
      title: "Blog AUDITSEO | Inteligência de Busca, GEO e Autoridade",
      description:
        "Guias, análises e conteúdos práticos sobre inteligência de busca, GEO, IA, autoridade de entidade e presença digital de empresas.",
    }),
  component: App,
});
