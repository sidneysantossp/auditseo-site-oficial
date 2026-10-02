import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { scenarioArticles } from "@/content/articlesScenarios";
import { createArticleHead } from "@/lib/articleSeo";

const article = scenarioArticles["migracao-site-sem-perder-seo"];

export const Route = createFileRoute("/blog/migracao-site-sem-perder-seo")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
