import { createFileRoute } from "@tanstack/react-router";
import ResearchProgramPage from "@/components/ResearchProgramPage";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/estudos-busca-ia")({
  head: () =>
    createSeoHead({
      path: "/estudos-busca-ia",
      title: "Programa de Pesquisa em Search AI | AUDITSEO",
      description:
        "Programa de pesquisa da AUDITSEO para futuros benchmarks e experimentos sobre busca com IA, com metodologia, amostra e limitações publicadas junto aos resultados.",
      robots: "noindex,follow",
    }),
  component: ResearchProgramPage,
});
