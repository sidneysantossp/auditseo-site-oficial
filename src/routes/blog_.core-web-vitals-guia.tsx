import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { legacyPreservedArticles } from "@/content/articlesLegacyPreserved";
import { createArticleHead } from "@/lib/articleSeo";

const article = legacyPreservedArticles["core-web-vitals-guia"];

export const Route = createFileRoute("/blog/core-web-vitals-guia")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
