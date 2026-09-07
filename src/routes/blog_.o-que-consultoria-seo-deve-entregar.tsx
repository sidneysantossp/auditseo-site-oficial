import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { buyerOpsArticles } from "@/content/articlesBuyerOps";
import { createArticleHead } from "@/lib/articleSeo";

const article = buyerOpsArticles["o-que-consultoria-seo-deve-entregar"];

export const Route = createFileRoute("/blog/o-que-consultoria-seo-deve-entregar")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
