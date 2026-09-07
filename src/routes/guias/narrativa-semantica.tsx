import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/guias/narrativa-semantica")({
  head: () =>
    createSeoHead({
      path: "/guias/narrativa-semantica",
      title: "Narrativa Semântica e Autoridade de Entidade | AUDITSEO",
      description:
        "Entenda como narrativa semântica, entidade, contexto e autoridade ajudam marcas a serem melhor compreendidas por buscadores e IA.",
    }),
  component: App,
});
