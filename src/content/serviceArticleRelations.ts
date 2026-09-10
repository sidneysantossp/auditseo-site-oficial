export type ServiceAuthorityLink = {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
};

export const serviceArticleRelations: Record<string, ServiceAuthorityLink[]> = {
  "/solucoes/projetos-comecando-do-zero": [
    { eyebrow: "PRÉ-LANÇAMENTO", title: "Checklist SEO antes de lançar um site", text: "Arquitetura, HTTP, robots, canonicals, sitemap, conteúdo, entidade, medição e smoke que precisam estar definidos antes do go-live.", href: "/blog/checklist-seo-antes-lancar-site" },
    { eyebrow: "FRAMEWORK", title: "Crawl → Index → Retrieve → Understand → Trust → Cite", text: "A cadeia de dependências usada para definir o que precisa estar correto antes de um novo projeto acumular dívida de busca.", href: "/blog/framework-crawl-index-retrieve-understand-trust-cite" },
    { eyebrow: "ENTITY ARCHITECTURE", title: "Como estruturar uma entidade empresarial", text: "Organização, pessoas, serviços, provas e fontes que precisam ser coerentes desde o início.", href: "/blog/como-estruturar-entidade-empresarial" },
  ],
  "/solucoes/site-sem-tracao": [
    { eyebrow: "DIAGNÓSTICO", title: "Site indexado, mas sem impressões", text: "Como avançar de Index para relevância, intenção, qualidade, arquitetura e autoridade antes de simplesmente publicar mais conteúdo.", href: "/blog/site-indexado-sem-impressoes" },
    { eyebrow: "FUNDAMENTO", title: "O que é Search Intelligence", text: "Como diagnosticar o gargalo antes de transformar baixa tração em uma lista genérica de tarefas.", href: "/blog/o-que-e-search-intelligence" },
    { eyebrow: "FRAMEWORK", title: "Crawl → Index → Retrieve → Understand → Trust → Cite", text: "Um modelo para separar descoberta, recuperação, compreensão e confiança quando o site está no ar, mas não ganha movimento.", href: "/blog/framework-crawl-index-retrieve-understand-trust-cite" },
  ],
  "/solucoes/recuperacao-organica": [
    { eyebrow: "CENÁRIO", title: "Tráfego caiu depois do redesign", text: "Playbook para separar regressões de URL, conteúdo, links, renderização, robots e infraestrutura antes de atribuir causalidade ao redesign.", href: "/blog/queda-trafego-depois-redesign" },
    { eyebrow: "FUNDAMENTO", title: "O que é Search Intelligence", text: "A recuperação começa separando sintoma, hipótese e evidência antes de executar correções.", href: "/blog/o-que-e-search-intelligence" },
    { eyebrow: "FRAMEWORK", title: "Crawl → Index → Retrieve → Understand → Trust → Cite", text: "Use a cadeia para localizar a etapa em que o desempenho perdeu força e evitar tratar toda queda como o mesmo problema.", href: "/blog/framework-crawl-index-retrieve-understand-trust-cite" },
  ],
  "/solucoes/autoridade-de-entidade": [
    { eyebrow: "FUNDAMENTO", title: "Autoridade de entidade: o que é e o que não é", text: "A definição operacional usada pela AUDITSEO sem inventar um score público de autoridade do Google.", href: "/blog/autoridade-de-entidade-o-que-e" },
    { eyebrow: "ENTITY ARCHITECTURE", title: "Como estruturar uma entidade empresarial", text: "Entity Home, Organization, pessoas, serviços, provas, consistência e fontes em uma arquitetura verificável.", href: "/blog/como-estruturar-entidade-empresarial" },
    { eyebrow: "SCHEMA SEM HYPE", title: "Schema ajuda a aparecer no ChatGPT?", text: "O papel real dos dados estruturados: representar fatos e relações sem tratá-los como atalho para autoridade ou citação por IA.", href: "/blog/schema-ajuda-aparecer-no-chatgpt" },
  ],
  "/solucoes/conteudo-por-intencao": [
    { eyebrow: "GOVERNANÇA EDITORIAL", title: "Conteúdo sem tráfego: atualizar, consolidar ou remover?", text: "Um framework para decidir o destino de ativos sem reduzir content strategy a sessões orgânicas ou pruning automático.", href: "/blog/conteudo-sem-trafego-atualizar-consolidar-remover" },
    { eyebrow: "PROTOCOLO EDITORIAL", title: "Como criar conteúdo citável", text: "Conteúdo por intenção precisa resolver perguntas reais e sobreviver ao teste de evidência, não apenas cobrir palavras-chave.", href: "/blog/como-criar-conteudo-citavel" },
    { eyebrow: "FUNDAMENTO", title: "O que é Search Intelligence", text: "Por que a arquitetura editorial deve nascer da jornada e do gargalo, não de um calendário fixo de publicações.", href: "/blog/o-que-e-search-intelligence" },
  ],
  "/solucoes/geo-ia-readiness": [
    { eyebrow: "CONSIDERAÇÃO COMERCIAL", title: "Como entrar nas recomendações do ChatGPT como fornecedor", text: "A diferença entre ser citado como fonte e ser considerado como empresa quando um comprador pede fornecedores, especialistas ou consultorias.", href: "/blog/como-ser-recomendado-pelo-chatgpt-como-fornecedor" },
    { eyebrow: "DIAGNÓSTICO", title: "O ChatGPT não cita meu site: o que auditar?", text: "Playbook para separar acesso, recuperação, entendimento, confiança e citabilidade antes de prescrever uma tática de GEO.", href: "/blog/chatgpt-nao-cita-meu-site" },
    { eyebrow: "MENSURAÇÃO", title: "Como medir se GEO está funcionando", text: "Prompts congelados, repetição e métricas separadas de menção, citação, recomendação e precisão da entidade.", href: "/blog/como-medir-se-geo-esta-funcionando" },
  ],
  "/solucoes/migracao-risco-seo": [
    { eyebrow: "CENÁRIO", title: "Queda depois de redesign ou migração", text: "Como investigar equivalência de URLs, redirects, conteúdo, links, indexação e infraestrutura quando o tráfego cai após uma mudança estrutural.", href: "/blog/queda-trafego-depois-redesign" },
    { eyebrow: "FRAMEWORK", title: "Crawl → Index → Retrieve → Understand → Trust → Cite", text: "Uma migração pode quebrar etapas diferentes da cadeia; o framework ajuda a validar o que precisa sobreviver ao corte.", href: "/blog/framework-crawl-index-retrieve-understand-trust-cite" },
    { eyebrow: "AUDITORIA TÉCNICA", title: "Como auditar crawlers de IA", text: "Útil para projetos em que CDN, WAF, autenticação ou robots podem mudar junto com a infraestrutura.", href: "/blog/como-auditar-crawlers-de-ia" },
  ],
  "/solucoes/evolucao-organica": [
    { eyebrow: "OPPORTUNITY MINING", title: "Tráfego orgânico estagnou: onde buscar a próxima oportunidade?", text: "Como separar estagnação de queda e transformar queries, decay, CTR, demanda e novas intenções em hipóteses de crescimento.", href: "/blog/trafego-organico-estagnado-proxima-oportunidade" },
    { eyebrow: "MENSURAÇÃO", title: "Como medir se GEO está funcionando", text: "Um modelo amostral para incorporar Search AI ao Learning Loop sem transformar variabilidade em falsa certeza.", href: "/blog/como-medir-se-geo-esta-funcionando" },
    { eyebrow: "GOVERNANÇA EDITORIAL", title: "Conteúdo sem tráfego: atualizar, consolidar ou remover?", text: "Como revisar decay e ativos de baixo desempenho antes de aumentar o estoque de URLs.", href: "/blog/conteudo-sem-trafego-atualizar-consolidar-remover" },
  ],
};
