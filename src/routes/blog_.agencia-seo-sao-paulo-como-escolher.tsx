import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { buyerArticles } from "@/content/articlesBuyer";
import { createArticleHead } from "@/lib/articleSeo";

const article = buyerArticles["agencia-seo-sao-paulo-como-escolher"];

export const Route = createFileRoute("/blog/agencia-seo-sao-paulo-como-escolher")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
