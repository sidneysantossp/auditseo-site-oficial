import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { searchAiOpsArticles } from "@/content/articlesSearchAiOps";
import { createArticleHead } from "@/lib/articleSeo";

const article = searchAiOpsArticles["site-indexado-mas-ausente-em-search-ai"];

export const Route = createFileRoute("/blog/site-indexado-mas-ausente-em-search-ai")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
