import { createFileRoute } from "@tanstack/react-router";
import AboutAuditseoPage from "@/components/AboutAuditseoPage";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () =>
    createSeoHead({
      path: "/sobre",
      title: "Sobre a AUDITSEO | Consultoria SEO e Search Intelligence",
      description:
        "Conheça a AUDITSEO, consultoria brasileira de SEO, GEO e Search Intelligence: método, serviços, pesquisa pública, autoria e princípios de evidência.",
    }),
  component: AboutAuditseoPage,
});
