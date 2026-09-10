import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/white-label")({
  beforeLoad: () => {
    throw redirect({ to: "/parceria", statusCode: 308 });
  },
});
