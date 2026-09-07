import { createFileRoute } from "@tanstack/react-router";
import BlogHubPage from "@/components/BlogHubPage";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () =>
    createSeoHead({
      path: "/blog",
      title: "Biblioteca AUDITSEO | Search Intelligence, SEO e AI Search",
      description:
        "Pesquisa, guias e análises sobre Search Intelligence, SEO, autoridade de entidade, GEO e AI Search com fontes primárias, autoria e critérios editoriais explícitos.",
    }),
  component: BlogHubPage,
});
