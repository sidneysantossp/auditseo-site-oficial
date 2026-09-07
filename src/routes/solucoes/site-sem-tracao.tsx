import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solucoes/site-sem-tracao")({
  beforeLoad: () => {
    throw redirect({ to: "/solucoes", statusCode: 308 });
  },
});
