import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { articles } from "@/content/articles";
import { createArticleHead } from "@/lib/articleSeo";

const article = articles["como-ias-encontram-e-citam-fontes"];

export const Route = createFileRoute("/blog/como-ias-encontram-e-citam-fontes")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
