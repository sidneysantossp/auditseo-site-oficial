import type { ServicePageData } from "@/content/services";
import { createSeoHead } from "./seo";

export function createServiceHead(data: ServicePageData) {
  const base = createSeoHead({
    path: data.slug,
    title: data.metaTitle,
    description: data.metaDescription,
  });

  const url = `https://www.auditseo.com.br${data.slug}`;

  return {
    ...base,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: data.metaTitle,
          description: data.metaDescription,
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://www.auditseo.com.br/#website",
            url: "https://www.auditseo.com.br/",
            name: "AUDITSEO",
          },
          about: {
            "@type": "Service",
            "@id": `${url}#service`,
            name: data.name,
            description: data.directAnswer,
            areaServed: {
              "@type": "Country",
              name: "Brasil",
            },
            provider: {
              "@type": "Organization",
              "@id": "https://www.auditseo.com.br/#organization",
              name: "AUDITSEO",
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "AUDITSEO",
              item: "https://www.auditseo.com.br/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Soluções",
              item: "https://www.auditseo.com.br/solucoes",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: data.name,
              item: url,
            },
          ],
        }),
      },
    ],
  };
}
