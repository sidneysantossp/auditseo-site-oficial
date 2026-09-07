import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/metodo-signal")({
  head: () =>
    createSeoHead({
      path: "/metodo-signal",
      title: "Método S.I.G.N.A.L. | Inteligência de Busca e Autoridade",
      description:
        "Conheça o método da AUDITSEO para diagnosticar, planejar, coordenar e acompanhar a construção de autoridade da sua empresa no Google e nas plataformas de inteligência artificial.",
    }),
  component: App,
});
