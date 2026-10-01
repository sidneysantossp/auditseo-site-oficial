import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { buyerOpsArticles } from "@/content/articlesBuyerOps";
import { createArticleHead } from "@/lib/articleSeo";

const article = buyerOpsArticles["auditoria-seo-aplicada-auditseo"];

export const Route = createFileRoute("/blog/auditoria-seo-aplicada-auditseo")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
