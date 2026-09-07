import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { advancedArticles } from "@/content/articlesAdvanced";
import { createArticleHead } from "@/lib/articleSeo";

const article = advancedArticles["como-estruturar-entidade-empresarial"];

export const Route = createFileRoute("/blog/como-estruturar-entidade-empresarial")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
