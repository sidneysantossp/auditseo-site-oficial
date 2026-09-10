import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/proposta/dr-felipe-barao")({
  beforeLoad: () => {
    throw redirect({ to: "/propostas/dr-felipe-barao", statusCode: 308 });
  },
});
