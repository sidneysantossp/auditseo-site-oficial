import { createFileRoute } from "@tanstack/react-router";
import CompanyGeoIaPage from "@/components/CompanyGeoIaPage";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/geo-ia")({
  head: () =>
    createSeoHead({
      path: "/geo-ia",
      title: "GEO e Presença em Plataformas de IA | AUDITSEO",
      description:
        "Como preparar sua empresa para AI Search: autoridade de entidade, dados estruturados, consistência de sinais e presença responsável nas plataformas generativas.",
    }),
  component: CompanyGeoIaPage,
});
