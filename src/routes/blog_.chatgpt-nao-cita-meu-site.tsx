import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/components/ArticlePage";
import { chatgptCitationArticleV2 } from "@/content/articleChatgptCitationV2";
import { createArticleHead } from "@/lib/articleSeo";

const article = chatgptCitationArticleV2;

export const Route = createFileRoute("/blog/chatgpt-nao-cita-meu-site")({
  head: () => createArticleHead(article),
  component: () => <ArticlePage article={article} />,
});
