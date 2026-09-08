import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { legacyPreservedArticles } from "@/content/articlesLegacyPreserved";
import { createArticleHead } from "@/lib/articleSeo";

const article = legacyPreservedArticles["google-meu-negocio-guia-completo"];

export const Route = createFileRoute("/blog/google-meu-negocio-guia-completo")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
