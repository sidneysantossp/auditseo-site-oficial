import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/estudos-busca-ia")({
  head: () =>
    createSeoHead({
      path: "/estudos-busca-ia",
      title: "Estudos de Busca com IA | AUDITSEO",
      description:
        "Estudos e análises sobre como IA, AI Search, GEO e mecanismos de resposta estão mudando descoberta, autoridade e decisão digital.",
    }),
  component: App,
});
