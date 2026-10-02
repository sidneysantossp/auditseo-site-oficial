import type { Article } from "./articles";
import { articleList } from "./articles";
import { advancedArticleList } from "./articlesAdvanced";
import { authorityToLeadArticleList } from "./articlesAuthorityToLead";
import { buyerArticleList } from "./articlesBuyer";
import { buyerOpsArticleList } from "./articlesBuyerOps";
import { demandArticleList } from "./articlesDemand";
import { geoMarketBenchmarkArticleList } from "./articlesGeoMarketBenchmark";
import { growthOpsArticleList } from "./articlesGrowthOps";
import { legacyPreservedArticleList } from "./articlesLegacyPreserved";
import { pricingResearchArticleList } from "./articlesPricingResearch";
import { protocolArticleList } from "./articlesProtocols";
import { scenarioArticleList } from "./articlesScenarios";
import { searchAiOpsArticleList } from "./articlesSearchAiOps";
import { chatgptCitationArticleV2 } from "./articleChatgptCitationV2";
import { crawlerArticleV2 } from "./articleCrawlerV2";

const baseArticles: Article[] = [
  ...articleList,
  ...advancedArticleList,
  ...authorityToLeadArticleList,
  ...buyerArticleList,
  ...buyerOpsArticleList,
  ...demandArticleList,
  ...geoMarketBenchmarkArticleList,
  ...growthOpsArticleList,
  ...legacyPreservedArticleList,
  ...pricingResearchArticleList,
  ...protocolArticleList,
  ...scenarioArticleList,
  ...searchAiOpsArticleList,
  chatgptCitationArticleV2,
  crawlerArticleV2,
];

const articleMap = new Map<string, Article>();
for (const article of baseArticles) articleMap.set(article.slug, article);

export const allBlogArticles = Array.from(articleMap.values());
export const articleBySlug: Record<string, Article> = Object.fromEntries(
  allBlogArticles.map((article) => [article.slug, article]),
);

export type EditorialJourney = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  text: string;
  slugs: string[];
};

export const editorialJourneys: EditorialJourney[] = [
  {
    id: "diagnostico-problemas",
    label: "Diagnóstico e problemas",
    eyebrow: "COMECE PELO SINTOMA",
    title: "Quando existe um problema claro e a prioridade é descobrir onde a presença quebra.",
    text: "Quedas, ausência de impressões, concorrentes aparecendo nas IAs e páginas que funcionam no Google mas não são recuperadas em Search AI entram aqui. O objetivo é separar sintoma, hipótese e evidência antes de executar.",
    slugs: [
      "site-indexado-sem-impressoes",
      "queda-trafego-depois-redesign",
      "chatgpt-nao-cita-meu-site",
      "site-indexado-mas-ausente-em-search-ai",
    ],
  },
  {
    id: "search-ai-geo",
    label: "Search AI & GEO",
    eyebrow: "SEARCH AI & GEO",
    title: "Como marcas são encontradas, citadas, comparadas e recomendadas em experiências generativas.",
    text: "Conceitos, acesso técnico, mensuração, schema, crawlers, fontes e recomendação comercial — sempre separando o que é documentado pela plataforma do que continua sendo hipótese de mercado.",
    slugs: [
      "geo-o-que-e-o-que-nao-garante",
      "como-ias-encontram-e-citam-fontes",
      "seo-vs-geo-vs-aeo",
      "como-auditar-crawlers-de-ia",
      "como-medir-visibilidade-em-ia",
      "como-ser-recomendado-pelo-chatgpt-como-fornecedor",
      "como-aparecer-no-chatgpt",
      "llms-txt-funciona",
      "schema-ajuda-aparecer-no-chatgpt",
      "como-medir-se-geo-esta-funcionando",
      "protocolo-benchmark-search-ai",
    ],
  },
  {
    id: "autoridade-entidade",
    label: "Autoridade & entidade",
    eyebrow: "ENTIDADE, EVIDÊNCIA E CONFIANÇA",
    title: "Como tornar a empresa compreensível, verificável e coerente dentro e fora do próprio domínio.",
    text: "Aqui ficam os fundamentos de Search Intelligence, arquitetura de entidade, conteúdo citável, presença local e o framework usado para localizar a etapa quebrada entre descoberta e citação.",
    slugs: [
      "o-que-e-search-intelligence",
      "autoridade-de-entidade-o-que-e",
      "como-estruturar-entidade-empresarial",
      "como-criar-conteudo-citavel",
      "google-meu-negocio-guia-completo",
      "framework-crawl-index-retrieve-understand-trust-cite",
    ],
  },
  {
    id: "seo-conteudo-crescimento",
    label: "SEO, conteúdo e crescimento",
    eyebrow: "OPERAÇÃO ORGÂNICA",
    title: "Arquitetura, auditoria, conteúdo e crescimento para quem já precisa executar com método.",
    text: "Do go-live à revisão de conteúdo e evolução orgânica: documentos para decidir o que corrigir, consolidar, preservar ou priorizar sem transformar SEO em checklist permanente.",
    slugs: [
      "core-web-vitals-guia",
      "checklist-seo-antes-lancar-site",
      "migracao-site-sem-perder-seo",
      "auditoria-seo-o-que-deve-conter",
      "conteudo-sem-trafego-atualizar-consolidar-remover",
      "trafego-organico-estagnado-proxima-oportunidade",
    ],
  },
  {
    id: "decisao-pesquisa",
    label: "Decisão e pesquisa",
    eyebrow: "COMPRA, PROVA E MERCADO",
    title: "Conteúdo para escolher modelo, fornecedor, escopo e investimento com menos assimetria de informação.",
    text: "Guias de contratação, estudo aplicado e benchmarks públicos de preço, promessa, prazo e mensuração ficam juntos para que a comparação comercial não dependa apenas de proposta ou discurso.",
    slugs: [
      "como-escolher-consultoria-seo",
      "agencia-seo-consultoria-ou-time-interno",
      "o-que-consultoria-seo-deve-entregar",
      "auditoria-seo-aplicada-auditseo",
      "como-mercado-brasileiro-vende-geo-search-ai",
      "quanto-custa-consultoria-seo-geo-ia",
    ],
  },
];

export const problemEntrypoints = [
  {
    id: "site-nao-cresce",
    title: "Meu site não cresce",
    text: "Está indexado, mas quase não ganha impressões, tráfego ou novas oportunidades.",
    articleSlug: "site-indexado-sem-impressoes",
    serviceHref: "/solucoes/site-sem-tracao",
    serviceLabel: "Diagnóstico para site sem tração",
  },
  {
    id: "trafego-caiu",
    title: "Meu tráfego caiu",
    text: "A queda veio depois de redesign, migração ou mudança estrutural e a causa ainda não está clara.",
    articleSlug: "queda-trafego-depois-redesign",
    serviceHref: "/solucoes/recuperacao-organica",
    serviceLabel: "Recuperação orgânica",
  },
  {
    id: "concorrente-aparece-ia",
    title: "Meus concorrentes aparecem nas IAs e eu não",
    text: "ChatGPT, Gemini ou Perplexity citam e recomendam outras empresas quando compradores fazem perguntas relevantes.",
    articleSlug: "chatgpt-nao-cita-meu-site",
    serviceHref: "/solucoes/geo-ia-readiness",
    serviceLabel: "Auditoria GEO & Search AI",
  },
  {
    id: "estruturar-autoridade",
    title: "Preciso estruturar autoridade da minha empresa",
    text: "Site, pessoas, serviços e fontes externas existem, mas a entidade ainda aparece ambígua ou pouco corroborada.",
    articleSlug: "como-estruturar-entidade-empresarial",
    serviceHref: "/solucoes/autoridade-de-entidade",
    serviceLabel: "Autoridade de entidade",
  },
] as const;

export type ServicePresentation = {
  eyebrow: string;
  label: string;
  description: string;
};

export const servicePresentation: Record<string, ServicePresentation> = {
  "/auditoria-seo": {
    eyebrow: "AUDITORIA SEO",
    label: "Auditoria SEO",
    description: "Diagnóstico técnico, editorial e de autoridade para transformar sintomas em prioridades verificáveis.",
  },
  "/consultoria-seo": {
    eyebrow: "CONSULTORIA SEO",
    label: "Consultoria SEO",
    description: "Acompanhamento para priorizar, implementar e validar SEO e Search Intelligence ao longo de ciclos.",
  },
  "/geo-ia": {
    eyebrow: "CONSULTORIA GEO & SEARCH AI",
    label: "Consultoria GEO & Search AI",
    description: "Operação contínua para presença em busca generativa com baseline, testes, entidade, conteúdo e mensuração.",
  },
  "/solucoes/geo-ia-readiness": {
    eyebrow: "AUDITORIA GEO & SEARCH AI",
    label: "Auditoria GEO & Search AI",
    description: "Diagnóstico de acesso, recuperação, entidade, citabilidade, fontes e visibilidade nas interfaces de IA.",
  },
  "/solucoes/autoridade-de-entidade": {
    eyebrow: "AUTORIDADE DE ENTIDADE",
    label: "Autoridade de entidade",
    description: "Estrutura site, pessoas, serviços, evidências e corroboração externa para reduzir ambiguidade sobre a empresa.",
  },
  "/solucoes/conteudo-por-intencao": {
    eyebrow: "ARQUITETURA DE CONTEÚDO",
    label: "Conteúdo por intenção",
    description: "Organiza temas, páginas e relações internas a partir de perguntas, jornada e função comercial — não apenas palavras-chave.",
  },
  "/solucoes/evolucao-organica": {
    eyebrow: "EVOLUÇÃO ORGÂNICA",
    label: "Evolução orgânica",
    description: "Ciclos de melhoria para operações que já têm presença e precisam encontrar novas frentes de crescimento.",
  },
  "/solucoes/projetos-comecando-do-zero": {
    eyebrow: "SEARCH FOUNDATION",
    label: "Projetos começando do zero",
    description: "Arquitetura de busca, conteúdo, entidade e mensuração desenhada antes do lançamento para reduzir dívida futura.",
  },
  "/solucoes/migracao-risco-seo": {
    eyebrow: "MIGRAÇÃO & RISCO SEO",
    label: "Migração e risco SEO",
    description: "Planejamento e validação para preservar URLs, sinais, conteúdo, rastreamento e demanda durante mudanças estruturais.",
  },
  "/solucoes/site-sem-tracao": {
    eyebrow: "SITE SEM TRAÇÃO",
    label: "Diagnóstico para site sem tração",
    description: "Investiga por que um site indexado não transforma presença em impressões, tráfego e oportunidades.",
  },
  "/solucoes/recuperacao-organica": {
    eyebrow: "SEARCH RECOVERY",
    label: "Recuperação orgânica",
    description: "Diagnóstico e recuperação para quedas de tráfego ligadas a redesign, migração, conteúdo, indexação ou infraestrutura.",
  },
};

export function getServicePresentation(label: string, href: string): ServicePresentation {
  return servicePresentation[href] || {
    eyebrow: "SOLUÇÃO RELACIONADA",
    label,
    description: "Frente da AUDITSEO relacionada ao problema tratado neste conteúdo.",
  };
}

export function articlesForJourney(journey: EditorialJourney): Article[] {
  return journey.slugs.map((slug) => articleBySlug[slug]).filter(Boolean);
}
