import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { articles } from "@/content/articles";
import { createArticleHead } from "@/lib/articleSeo";

const article = articles["autoridade-de-entidade-o-que-e"];

export const Route = createFileRoute("/blog/autoridade-de-entidade-o-que-e")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
