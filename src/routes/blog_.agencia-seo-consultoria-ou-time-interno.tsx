import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { buyerArticles } from "@/content/articlesBuyer";
import { createArticleHead } from "@/lib/articleSeo";

const article = buyerArticles["agencia-seo-consultoria-ou-time-interno"];

export const Route = createFileRoute("/blog/agencia-seo-consultoria-ou-time-interno")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
