import { createFileRoute } from "@tanstack/react-router";
import CompanyGeoIaPageV2 from "@/components/CompanyGeoIaPageV2";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/geo-ia")({
  head: () =>
    createSeoHead({
      path: "/geo-ia",
      title: "Consultoria GEO, Search AI e SEO para IA | AUDITSEO",
      description:
        "Consultoria de Search AI e GEO para empresas: diagnóstico de presença em Google e IA, autoridade de entidade, conteúdo, evidências, fontes e mensuração sem promessas de citação.",
    }),
  component: CompanyGeoIaPageV2,
});
