import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/seo-para-agencias")({
  beforeLoad: () => {
    throw redirect({ to: "/parceria", statusCode: 308 });
  },
});
