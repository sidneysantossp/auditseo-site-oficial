import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/guias/geo-readiness")({
  beforeLoad: () => {
    throw redirect({ to: "/blog/geo-o-que-e-o-que-nao-garante", statusCode: 308 });
  },
});
