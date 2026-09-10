const SITE_URL = "https://www.auditseo.com.br";

interface SeoHeadOptions {
  path: string;
  title: string;
  description: string;
  robots?: string;
}

export function createSeoHead({
  path,
  title,
  description,
  robots = "index,follow",
}: SeoHeadOptions) {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  const url = `${SITE_URL}${normalizedPath}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: robots },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "AUDITSEO" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "describedby", href: `${SITE_URL}/llms.txt`, type: "text/markdown" },
    ],
  };
}
