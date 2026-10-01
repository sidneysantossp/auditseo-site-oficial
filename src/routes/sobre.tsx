import { createFileRoute } from "@tanstack/react-router";
import AboutAuditseoPage from "@/components/AboutAuditseoPage";
import { createSeoHead } from "@/lib/seo";

const url = "https://www.auditseo.com.br/sobre";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    ...createSeoHead({
      path: "/sobre",
      title: "Sobre a AUDITSEO | Consultoria SEO e Search Intelligence",
      description:
        "Conheça a AUDITSEO, consultoria brasileira de SEO, GEO e Search Intelligence: método, serviços, pesquisa pública, autoria e princípios de evidência.",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": `${url}#webpage`,
              url,
              name: "Sobre a AUDITSEO",
              mainEntity: { "@id": "https://www.auditseo.com.br/#organization" },
              isPartOf: { "@id": "https://www.auditseo.com.br/#website" },
            },
            {
              "@type": "Organization",
              "@id": "https://www.auditseo.com.br/#organization",
              name: "AUDITSEO",
              url: "https://www.auditseo.com.br/",
              email: "contato@auditseo.com.br",
              logo: {
                "@type": "ImageObject",
                url: "https://www.auditseo.com.br/auditseo-logo.png",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                telephone: "+55 11 99638-4376",
                availableLanguage: "pt-BR",
                areaServed: "BR",
              },
              founder: { "@id": "https://www.auditseo.com.br/autor/sidney-santos#person" },
              knowsAbout: [
                "Search Intelligence",
                "SEO técnico",
                "Generative Engine Optimization (GEO)",
                "Search AI",
                "Autoridade de entidade",
                "Arquitetura de conteúdo por intenção",
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: AboutAuditseoPage,
});
