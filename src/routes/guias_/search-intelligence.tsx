import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/guias/search-intelligence")({
  head: () =>
    createSeoHead({
      path: "/guias/search-intelligence",
      title: "Inteligência de Busca | AUDITSEO",
      description:
        "Inteligência de busca é a camada que conecta dados, intenção, autoridade, conteúdo e decisão em uma estratégia coordenada de presença digital.",
    }),
  component: App,
});
