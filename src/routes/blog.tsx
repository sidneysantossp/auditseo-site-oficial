import { createFileRoute } from "@tanstack/react-router";
import BlogHubPageV2 from "@/components/BlogHubPageV2";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () =>
    createSeoHead({
      path: "/blog",
      title: "Biblioteca AUDITSEO | Search Intelligence, SEO e Search AI",
      description:
        "Biblioteca de Search Intelligence, SEO, Search AI, autoridade de entidade e decisão de contratação: fundamentos, técnica, mensuração, protocolos e guias comerciais com fontes e metodologia pública.",
    }),
  component: BlogHubPageV2,
});
