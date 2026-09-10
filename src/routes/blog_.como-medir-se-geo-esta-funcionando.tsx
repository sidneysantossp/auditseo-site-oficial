import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { searchAiOpsArticles } from "@/content/articlesSearchAiOps";
import { createArticleHead } from "@/lib/articleSeo";

const article = searchAiOpsArticles["como-medir-se-geo-esta-funcionando"];

export const Route = createFileRoute("/blog/como-medir-se-geo-esta-funcionando")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
