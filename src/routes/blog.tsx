import { createFileRoute } from "@tanstack/react-router";
import BlogHubPageV2 from "@/components/BlogHubPageV2";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () =>
    createSeoHead({
      path: "/blog",
      title: "Biblioteca AUDITSEO | Search Intelligence, SEO e Search AI",
      description:
        "11 documentos sobre Search Intelligence, SEO, autoridade de entidade e Search AI: fundamentos, técnica, mensuração e protocolos proprietários com fontes e metodologia pública.",
    }),
  component: BlogHubPageV2,
});
