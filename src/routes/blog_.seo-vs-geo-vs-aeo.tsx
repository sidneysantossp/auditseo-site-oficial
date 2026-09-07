import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { advancedArticles } from "@/content/articlesAdvanced";
import { createArticleHead } from "@/lib/articleSeo";

const article = advancedArticles["seo-vs-geo-vs-aeo"];

export const Route = createFileRoute("/blog/seo-vs-geo-vs-aeo")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
