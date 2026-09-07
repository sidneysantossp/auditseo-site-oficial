import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solucoes/conteudo-por-intencao")({
  beforeLoad: () => {
    throw redirect({ to: "/solucoes", statusCode: 308 });
  },
});
