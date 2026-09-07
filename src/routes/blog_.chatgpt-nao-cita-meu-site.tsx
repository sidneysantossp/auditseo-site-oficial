import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { searchAiOpsArticles } from "@/content/articlesSearchAiOps";
import { createArticleHead } from "@/lib/articleSeo";

const article = searchAiOpsArticles["chatgpt-nao-cita-meu-site"];

export const Route = createFileRoute("/blog/chatgpt-nao-cita-meu-site")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
