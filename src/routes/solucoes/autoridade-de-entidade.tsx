import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solucoes/autoridade-de-entidade")({
  beforeLoad: () => {
    throw redirect({ to: "/solucoes", statusCode: 308 });
  },
});
