import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { scenarioArticles } from "@/content/articlesScenarios";
import { createArticleHead } from "@/lib/articleSeo";

const article = scenarioArticles["site-indexado-sem-impressoes"];

export const Route = createFileRoute("/blog/site-indexado-sem-impressoes")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
