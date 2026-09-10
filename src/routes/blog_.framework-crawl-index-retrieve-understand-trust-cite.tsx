import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { protocolArticles } from "@/content/articlesProtocols";
import { createArticleHead } from "@/lib/articleSeo";

const article = protocolArticles["framework-crawl-index-retrieve-understand-trust-cite"];

export const Route = createFileRoute("/blog/framework-crawl-index-retrieve-understand-trust-cite")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
