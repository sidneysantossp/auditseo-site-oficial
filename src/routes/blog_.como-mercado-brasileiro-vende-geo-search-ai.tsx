import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { geoMarketBenchmarkArticles } from "@/content/articlesGeoMarketBenchmark";
import { createArticleHead } from "@/lib/articleSeo";

const article = geoMarketBenchmarkArticles["como-mercado-brasileiro-vende-geo-search-ai"];

export const Route = createFileRoute("/blog/como-mercado-brasileiro-vende-geo-search-ai")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
