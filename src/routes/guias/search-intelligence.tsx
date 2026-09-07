import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/guias/search-intelligence")({
  beforeLoad: () => {
    throw redirect({ to: "/blog/o-que-e-search-intelligence", statusCode: 308 });
  },
});
