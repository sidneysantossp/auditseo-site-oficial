import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { demandArticles } from "@/content/articlesDemand";
import { createArticleHead } from "@/lib/articleSeo";

const article = demandArticles["llms-txt-funciona"];

export const Route = createFileRoute("/blog/llms-txt-funciona")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
