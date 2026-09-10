import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { articles } from "@/content/articles";
import { createArticleHead } from "@/lib/articleSeo";

const article = articles["geo-o-que-e-o-que-nao-garante"];

export const Route = createFileRoute("/blog/geo-o-que-e-o-que-nao-garante")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
