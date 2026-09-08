import type { Article } from "@/content/articles";
import { createSeoHead } from "./seo";

export type ArticleDatasetSchema = {
  name: string;
  description: string;
  contentUrl: string;
  snapshotDate: string;
  measurementTechnique: string;
  variableMeasured: string[];
};

export function createArticleHead(article: Article, dataset?: ArticleDatasetSchema) {
  const path = `/blog/${article.slug}`;
  const url = `https://www.auditseo.com.br${path}`;
  const base = createSeoHead({
    path,
    title: article.metaTitle,
    description: article.description,
  });

  const scripts = [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${url}#article`,
        headline: article.title,
        description: article.description,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
        },
        author: {
          "@type": "Person",
          "@id": "https://www.auditseo.com.br/autor/sidney-santos#person",
          name: article.author,
          url: `https://www.auditseo.com.br${article.authorUrl}`,
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://www.auditseo.com.br/#organization",
          name: "AUDITSEO",
          logo: {
            "@type": "ImageObject",
            url: "https://www.auditseo.com.br/auditseo-logo.png",
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
          { "@type": "ListItem", position: 1, name: "AUDITSEO", item: "https://www.auditseo.com.br/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.auditseo.com.br/blog" },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      }),
    },
  ];

  if (dataset) {
    const contentUrl = dataset.contentUrl.startsWith("http")
      ? dataset.contentUrl
      : `https://www.auditseo.com.br${dataset.contentUrl}`;

    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dataset",
        "@id": `${url}#dataset`,
        name: dataset.name,
        description: dataset.description,
        url,
        datePublished: dataset.snapshotDate,
        dateModified: article.updatedAt,
        temporalCoverage: dataset.snapshotDate,
        isAccessibleForFree: true,
        creator: {
          "@type": "Person",
          "@id": "https://www.auditseo.com.br/autor/sidney-santos#person",
          name: article.author,
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://www.auditseo.com.br/#organization",
          name: "AUDITSEO",
        },
        measurementTechnique: dataset.measurementTechnique,
        variableMeasured: dataset.variableMeasured.map((name) => ({
          "@type": "PropertyValue",
          name,
        })),
        distribution: {
          "@type": "DataDownload",
          contentUrl,
          encodingFormat: "text/csv",
        },
        isPartOf: {
          "@id": `${url}#article`,
        },
      }),
    });
  }

  return {
    ...base,
    scripts,
  };
}
