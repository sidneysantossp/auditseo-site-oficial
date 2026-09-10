import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/como-escolher-agencia-seo")({
  beforeLoad: () => {
    throw redirect({ to: "/blog/agencia-seo-consultoria-ou-time-interno", statusCode: 308 });
  },
});
