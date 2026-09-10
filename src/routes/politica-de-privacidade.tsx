import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/LegalPage";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () =>
    createSeoHead({
      path: "/politica-de-privacidade",
      title: "Política de Privacidade | AUDITSEO",
      description:
        "Política de Privacidade da AUDITSEO sobre formulários, diagnósticos, newsletter, campanhas, atribuição e canais de contato.",
    }),
  component: () => <LegalPage kind="privacy" />,
});
