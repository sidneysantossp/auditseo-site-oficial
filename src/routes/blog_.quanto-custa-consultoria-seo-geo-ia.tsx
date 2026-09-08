import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { pricingResearchArticles } from "@/content/articlesPricingResearch";
import { createArticleHead } from "@/lib/articleSeo";

const article = pricingResearchArticles["quanto-custa-consultoria-seo-geo-ia"];

export const Route = createFileRoute("/blog/quanto-custa-consultoria-seo-geo-ia")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
