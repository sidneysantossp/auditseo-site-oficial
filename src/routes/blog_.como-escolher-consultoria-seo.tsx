import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { buyerArticles } from "@/content/articlesBuyer";
import { createArticleHead } from "@/lib/articleSeo";

const article = buyerArticles["como-escolher-consultoria-seo"];

export const Route = createFileRoute("/blog/como-escolher-consultoria-seo")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
