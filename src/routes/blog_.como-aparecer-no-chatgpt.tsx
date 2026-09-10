import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { demandArticles } from "@/content/articlesDemand";
import { createArticleHead } from "@/lib/articleSeo";

const article = demandArticles["como-aparecer-no-chatgpt"];

export const Route = createFileRoute("/blog/como-aparecer-no-chatgpt")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
