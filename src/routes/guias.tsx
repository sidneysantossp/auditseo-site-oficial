import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/guias")({
  beforeLoad: () => {
    throw redirect({ to: "/blog", statusCode: 308 });
  },
});
