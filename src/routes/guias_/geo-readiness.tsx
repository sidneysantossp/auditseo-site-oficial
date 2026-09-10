import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/guias/geo-readiness")({
  head: () =>
    createSeoHead({
      path: "/guias/geo-readiness",
      title: "GEO Readiness | Como preparar marcas para a nova busca | AUDITSEO",
      description:
        "Guia GEO Readiness da AUDITSEO: como preparar marcas para AI Search, respostas generativas, autoridade de entidade e nova busca.",
    }),
  component: App,
});
