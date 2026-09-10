import { createFileRoute } from "@tanstack/react-router";
import AuditseoCaseStudyPage from "@/components/AuditseoCaseStudyPage";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/case-study/auditseo-search-intelligence")({
  head: () =>
    createSeoHead({
      path: "/case-study/auditseo-search-intelligence",
      title: "Case Study AUDITSEO: Construindo Search Intelligence do Zero",
      description:
        "Acompanhe o Case Study #001 da AUDITSEO: baseline real, hipóteses, intervenções, métricas e evolução de Google, Search AI, autoridade e leads sem reescrever o ponto zero.",
    }),
  component: AuditseoCaseStudyPage,
});
