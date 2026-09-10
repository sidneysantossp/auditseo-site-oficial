import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/parceria")({
  head: () =>
    createSeoHead({
      path: "/parceria",
      title: "Parceria White-Label para Agências | AUDITSEO",
      description:
        "Parceria white-label de SEO, GEO, IA e Search Intelligence para agências ampliarem portfólio, retenção e evolução orgânica sem montar time interno.",
      robots: "noindex,follow",
    }),
  component: App,
});
