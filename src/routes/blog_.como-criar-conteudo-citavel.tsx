import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { protocolArticles } from "@/content/articlesProtocols";
import { createArticleHead } from "@/lib/articleSeo";

const article = protocolArticles["como-criar-conteudo-citavel"];

export const Route = createFileRoute("/blog/como-criar-conteudo-citavel")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
