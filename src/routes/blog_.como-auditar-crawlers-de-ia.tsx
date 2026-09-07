import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { advancedArticles } from "@/content/articlesAdvanced";
import { createArticleHead } from "@/lib/articleSeo";

const article = advancedArticles["como-auditar-crawlers-de-ia"];

export const Route = createFileRoute("/blog/como-auditar-crawlers-de-ia")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
