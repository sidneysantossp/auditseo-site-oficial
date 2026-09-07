import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sidney-santos")({
  beforeLoad: () => {
    throw redirect({ to: "/autor/sidney-santos", statusCode: 308 });
  },
});
