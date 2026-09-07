import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { searchAiOpsArticles } from "@/content/articlesSearchAiOps";
import { createArticleHead } from "@/lib/articleSeo";

const article = searchAiOpsArticles["schema-ajuda-aparecer-no-chatgpt"];

export const Route = createFileRoute("/blog/schema-ajuda-aparecer-no-chatgpt")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
