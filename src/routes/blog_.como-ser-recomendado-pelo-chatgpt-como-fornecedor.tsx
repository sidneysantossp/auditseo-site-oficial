import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { authorityToLeadArticles } from "@/content/articlesAuthorityToLead";
import { createArticleHead } from "@/lib/articleSeo";

const article = authorityToLeadArticles["como-ser-recomendado-pelo-chatgpt-como-fornecedor"];

export const Route = createFileRoute("/blog/como-ser-recomendado-pelo-chatgpt-como-fornecedor")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
