import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solucoes/evolucao-organica")({
  beforeLoad: () => {
    throw redirect({ to: "/solucoes", statusCode: 308 });
  },
});
