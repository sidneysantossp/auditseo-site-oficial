import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { articles } from "@/content/articles";
import { createArticleHead } from "@/lib/articleSeo";

const article = articles["o-que-e-search-intelligence"];

export const Route = createFileRoute("/blog/o-que-e-search-intelligence")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
