import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { protocolArticles } from "@/content/articlesProtocols";
import { createArticleHead } from "@/lib/articleSeo";

const article = protocolArticles["protocolo-benchmark-search-ai"];

export const Route = createFileRoute("/blog/protocolo-benchmark-search-ai")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
