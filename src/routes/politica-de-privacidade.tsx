import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () =>
    createSeoHead({
      path: "/politica-de-privacidade",
      title: "Política de Privacidade | AUDITSEO",
      description:
        "Política de Privacidade da AUDITSEO sobre uso do site, formulários, canais de contato e informações compartilhadas por empresas interessadas na consultoria.",
    }),
  component: App,
});
