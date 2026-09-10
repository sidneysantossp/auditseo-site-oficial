import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/guias/narrativa-semantica")({
  beforeLoad: () => {
    throw redirect({ to: "/blog/autoridade-de-entidade-o-que-e", statusCode: 308 });
  },
});
