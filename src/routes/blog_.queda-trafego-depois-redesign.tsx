import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { scenarioArticles } from "@/content/articlesScenarios";
import { createArticleHead } from "@/lib/articleSeo";

const article = scenarioArticles["queda-trafego-depois-redesign"];

export const Route = createFileRoute("/blog/queda-trafego-depois-redesign")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
