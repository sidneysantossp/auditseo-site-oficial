import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/LegalPage";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/termos-de-uso")({
  head: () =>
    createSeoHead({
      path: "/termos-de-uso",
      title: "Termos de Uso | AUDITSEO",
      description:
        "Termos de Uso do site AUDITSEO, seus conteúdos, diagnósticos, formulários, newsletter, campanhas e canais de contato.",
    }),
  component: () => <LegalPage kind="terms" />,
});
