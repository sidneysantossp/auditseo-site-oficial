import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { buyerOpsArticles } from "@/content/articlesBuyerOps";
import { createArticleHead } from "@/lib/articleSeo";

const article = buyerOpsArticles["auditoria-seo-o-que-deve-conter"];

export const Route = createFileRoute("/blog/auditoria-seo-o-que-deve-conter")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
