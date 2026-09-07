import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/termos-de-uso")({
  head: () =>
    createSeoHead({
      path: "/termos-de-uso",
      title: "Termos de Uso | AUDITSEO",
      description:
        "Termos de Uso do site AUDITSEO, seus conteúdos, formulários, materiais informativos e canais de contato.",
    }),
  component: App,
});
