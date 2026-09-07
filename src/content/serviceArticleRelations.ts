export type ServiceAuthorityLink = {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
};

export const serviceArticleRelations: Record<string, ServiceAuthorityLink[]> = {
  "/solucoes/projetos-comecando-do-zero": [
    { eyebrow: "FRAMEWORK", title: "Crawl → Index → Retrieve → Understand → Trust → Cite", text: "A cadeia de dependências usada para definir o que precisa estar correto antes de um novo projeto acumular dívida de busca.", href: "/blog/framework-crawl-index-retrieve-understand-trust-cite" },
    { eyebrow: "ENTITY ARCHITECTURE", title: "Como estruturar uma entidade empresarial", text: "Organização, pessoas, serviços, provas e fontes que precisam ser coerentes desde o início.", href: "/blog/como-estruturar-entidade-empresarial" },
    { eyebrow: "CONCEITOS", title: "SEO vs GEO vs AEO", text: "Por que uma fundação sólida não depende da sigla do momento e quais fundamentos permanecem compartilhados.", href: "/blog/seo-vs-geo-vs-aeo" },
  ],
  "/solucoes/site-sem-tracao": [
    { eyebrow: "FUNDAMENTO", title: "O que é Search Intelligence", text: "Como diagnosticar o gargalo antes de transformar baixa tração em uma lista genérica de tarefas.", href: "/blog/o-que-e-search-intelligence" },
    { eyebrow: "FRAMEWORK", title: "Crawl → Index → Retrieve → Understand → Trust → Cite", text: "Um modelo para separar descoberta, recuperação, compreensão e confiança quando o site está no ar, mas não ganha movimento.", href: "/blog/framework-crawl-index-retrieve-understand-trust-cite" },
    { eyebrow: "PROTOCOLO EDITORIAL", title: "Como criar conteúdo citável", text: "Critérios para elevar a qualidade das páginas que precisam sustentar autoridade e utilidade, não apenas volume editorial.", href: "/blog/como-criar-conteudo-citavel" },
  ],
  "/solucoes/recuperacao-organica": [
    { eyebrow: "FUNDAMENTO", title: "O que é Search Intelligence", text: "A recuperação começa separando sintoma, hipótese e evidência antes de executar correções.", href: "/blog/o-que-e-search-intelligence" },
    { eyebrow: "FRAMEWORK", title: "Crawl → Index → Retrieve → Understand → Trust → Cite", text: "Use a cadeia para localizar a etapa em que o desempenho perdeu força e evitar tratar toda queda como o mesmo problema.", href: "/blog/framework-crawl-index-retrieve-understand-trust-cite" },
    { eyebrow: "CONCEITOS", title: "SEO vs GEO vs AEO", text: "Uma recuperação responsável separa interface, disciplina e métrica em vez de perseguir a sigla mais recente.", href: "/blog/seo-vs-geo-vs-aeo" },
  ],
  "/solucoes/autoridade-de-entidade": [
    { eyebrow: "FUNDAMENTO", title: "Autoridade de entidade: o que é e o que não é", text: "A definição operacional usada pela AUDITSEO sem inventar um score público de autoridade do Google.", href: "/blog/autoridade-de-entidade-o-que-e" },
    { eyebrow: "ENTITY ARCHITECTURE", title: "Como estruturar uma entidade empresarial", text: "Entity Home, Organization, pessoas, serviços, provas, consistência e fontes em uma arquitetura verificável.", href: "/blog/como-estruturar-entidade-empresarial" },
    { eyebrow: "SCHEMA SEM HYPE", title: "Schema ajuda a aparecer no ChatGPT?", text: "O papel real dos dados estruturados: representar fatos e relações sem tratá-los como atalho para autoridade ou citação por IA.", href: "/blog/schema-ajuda-aparecer-no-chatgpt" },
  ],
  "/solucoes/conteudo-por-intencao": [
    { eyebrow: "PROTOCOLO EDITORIAL", title: "Como criar conteúdo citável", text: "Conteúdo por intenção precisa resolver perguntas reais e sobreviver ao teste de evidência, não apenas cobrir palavras-chave.", href: "/blog/como-criar-conteudo-citavel" },
    { eyebrow: "FUNDAMENTO", title: "O que é Search Intelligence", text: "Por que a arquitetura editorial deve nascer da jornada e do gargalo, não de um calendário fixo de publicações.", href: "/blog/o-que-e-search-intelligence" },
    { eyebrow: "SEARCH AI", title: "Como IAs encontram e citam fontes", text: "Como descoberta, fontes e citações se relacionam com qualidade editorial sem criar promessas de presença em IA.", href: "/blog/como-ias-encontram-e-citam-fontes" },
  ],
  "/solucoes/geo-ia-readiness": [
    { eyebrow: "DIAGNÓSTICO", title: "O ChatGPT não cita meu site: o que auditar?", text: "Playbook para separar acesso, recuperação, entendimento, confiança e citabilidade antes de prescrever uma tática de GEO.", href: "/blog/chatgpt-nao-cita-meu-site" },
    { eyebrow: "MENSURAÇÃO", title: "Como medir se GEO está funcionando", text: "Prompts congelados, repetição e métricas separadas de menção, citação, recomendação e precisão da entidade.", href: "/blog/como-medir-se-geo-esta-funcionando" },
    { eyebrow: "AUDITORIA TÉCNICA", title: "Como auditar crawlers de IA", text: "Como separar busca, treinamento e agentes acionados pelo usuário antes de editar robots.txt, CDN ou WAF.", href: "/blog/como-auditar-crawlers-de-ia" },
  ],
  "/solucoes/migracao-risco-seo": [
    { eyebrow: "FRAMEWORK", title: "Crawl → Index → Retrieve → Understand → Trust → Cite", text: "Uma migração pode quebrar etapas diferentes da cadeia; o framework ajuda a validar o que precisa sobreviver ao corte.", href: "/blog/framework-crawl-index-retrieve-understand-trust-cite" },
    { eyebrow: "AUDITORIA TÉCNICA", title: "Como auditar crawlers de IA", text: "Útil para projetos em que CDN, WAF, autenticação ou robots podem mudar junto com a infraestrutura.", href: "/blog/como-auditar-crawlers-de-ia" },
    { eyebrow: "ENTITY ARCHITECTURE", title: "Como estruturar uma entidade empresarial", text: "Mudanças de arquitetura não devem romper relações centrais entre organização, pessoas, serviços e provas.", href: "/blog/como-estruturar-entidade-empresarial" },
  ],
  "/solucoes/evolucao-organica": [
    { eyebrow: "FUNDAMENTO", title: "O que é Search Intelligence", text: "Crescimento contínuo exige um sistema de leitura e decisão, não uma fila infinita de tarefas de SEO.", href: "/blog/o-que-e-search-intelligence" },
    { eyebrow: "MENSURAÇÃO", title: "Como medir se GEO está funcionando", text: "Um modelo amostral para incorporar Search AI ao Learning Loop sem transformar variabilidade em falsa certeza.", href: "/blog/como-medir-se-geo-esta-funcionando" },
    { eyebrow: "PROTOCOLO DE PESQUISA", title: "Benchmark de Search AI", text: "Como manter prompts, regras de classificação e metodologia comparáveis entre ciclos de medição.", href: "/blog/protocolo-benchmark-search-ai" },
  ],
};
