import type { Article } from "./articles";

const SITE_URL = "https://www.auditseo.com.br";
const BLOG_IMAGE_DIR = "/media/blog";

export type ArticleVisual = {
  src: string;
  absoluteUrl: string;
  alt: string;
  width: number;
  height: number;
};

export function getArticleVisual(article: Pick<Article, "slug" | "title">): ArticleVisual {
  const src = `${BLOG_IMAGE_DIR}/${article.slug}.webp`;
  return {
    src,
    absoluteUrl: `${SITE_URL}${src}`,
    alt: `${article.title} — AUDITSEO Search Intelligence`,
    width: 1200,
    height: 630,
  };
}
