import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { growthOpsArticles } from "@/content/articlesGrowthOps";
import { createArticleHead } from "@/lib/articleSeo";

const article = growthOpsArticles["conteudo-sem-trafego-atualizar-consolidar-remover"];

export const Route = createFileRoute("/blog/conteudo-sem-trafego-atualizar-consolidar-remover")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
