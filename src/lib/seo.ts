const SITE_URL = "https://www.auditseo.com.br";

interface SeoHeadOptions {
  path: string;
  title: string;
  description: string;
  robots?: string;
  image?: string;
  imageAlt?: string;
  ogType?: "website" | "article";
}

export function createSeoHead({
  path,
  title,
  description,
  robots = "index,follow",
  image,
  imageAlt = "AUDITSEO — Search Intelligence",
  ogType = "website",
}: SeoHeadOptions) {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  const url = `${SITE_URL}${normalizedPath}`;
  const socialImage = image?.startsWith("http") ? image : `${SITE_URL}${image || "/auditseo-logo.png"}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: robots },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "AUDITSEO" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: socialImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: socialImage },
      { name: "twitter:image:alt", content: imageAlt },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "describedby", href: `${SITE_URL}/llms.txt`, type: "text/markdown" },
    ],
  };
}
