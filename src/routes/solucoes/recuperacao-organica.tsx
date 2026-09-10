import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solucoes/recuperacao-organica")({
  beforeLoad: () => {
    throw redirect({ to: "/solucoes", statusCode: 308 });
  },
});
