import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/guias")({
  head: () =>
    createSeoHead({
      path: "/guias",
      title: "Guias Técnicos AUDITSEO | GEO, Busca e Autoridade",
      description:
        "Guias técnicos e estratégicos sobre GEO, narrativa semântica, autoridade de entidade e inteligência de busca.",
    }),
  component: App,
});
