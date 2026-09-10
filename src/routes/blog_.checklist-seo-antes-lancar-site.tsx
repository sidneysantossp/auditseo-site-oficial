import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { scenarioArticles } from "@/content/articlesScenarios";
import { createArticleHead } from "@/lib/articleSeo";

const article = scenarioArticles["checklist-seo-antes-lancar-site"];

export const Route = createFileRoute("/blog/checklist-seo-antes-lancar-site")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
