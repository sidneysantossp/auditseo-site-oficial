import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { growthOpsArticles } from "@/content/articlesGrowthOps";
import { createArticleHead } from "@/lib/articleSeo";

const article = growthOpsArticles["trafego-organico-estagnado-proxima-oportunidade"];

export const Route = createFileRoute("/blog/trafego-organico-estagnado-proxima-oportunidade")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
