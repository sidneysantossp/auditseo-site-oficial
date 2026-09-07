import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { crawlerArticleV2 } from "@/content/articleCrawlerV2";
import { createArticleHead } from "@/lib/articleSeo";

const article = crawlerArticleV2;

export const Route = createFileRoute("/blog/como-auditar-crawlers-de-ia")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
