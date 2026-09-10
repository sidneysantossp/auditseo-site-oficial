import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/consultoria")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 308 });
  },
});
