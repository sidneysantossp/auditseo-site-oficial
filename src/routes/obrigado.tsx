import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/obrigado")({
  head: () =>
    createSeoHead({
      path: "/obrigado",
      title: "Obrigado | AUDITSEO",
      description: "Solicitação recebida pela AUDITSEO.",
      robots: "noindex,follow",
    }),
  component: App,
});
