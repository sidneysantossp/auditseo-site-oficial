import { createFileRoute } from "@tanstack/react-router";
import CompanyDiagnosticPage from "@/components/CompanyDiagnosticPage";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/diagnostico")({
  head: () =>
    createSeoHead({
      path: "/diagnostico",
      title: "Avaliação Estratégica de Presença Digital | AUDITSEO",
      description:
        "Avaliação estratégica interativa para identificar o que limita a visibilidade, a compreensão e a autoridade da sua empresa no Google e nas plataformas de IA.",
    }),
  component: CompanyDiagnosticPage,
});
