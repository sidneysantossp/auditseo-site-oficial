import type { Article } from "./articles";

const googleSeoStarter = "https://developers.google.com/search/docs/fundamentals/seo-starter-guide";
const googleHelpful = "https://developers.google.com/search/docs/fundamentals/creating-helpful-content";
const googleAi = "https://developers.google.com/search/docs/appearance/ai-features";
const googleRobots = "https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec";
const googleOrganization = "https://developers.google.com/search/docs/appearance/structured-data/organization";
const googleProfile = "https://developers.google.com/search/docs/appearance/structured-data/profile-page";
const openAiSearch = "https://help.openai.com/pt-br/articles/9237897-chatgpt-search";
const openAiPublishers = "https://help.openai.com/pt-br/articles/12627856-publishers-and-developers-faq";

export const advancedArticles: Record<string, Article> = {
  "seo-vs-geo-vs-aeo": {
    slug: "seo-vs-geo-vs-aeo",
    title: "SEO vs GEO vs AEO: o que realmente muda — e onde as siglas mais confundem do que ajudam",
    metaTitle: "SEO vs GEO vs AEO: Diferenças Práticas sem Hype | AUDITSEO",
    description:
      "Compare SEO, GEO e AEO sem hype: o que cada termo tenta resolver, quais fundamentos se sobrepõem e por que a estratégia deve começar pelo problema, não pela sigla.",
    eyebrow: "CONCEITOS DE MERCADO",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "12 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "SEO é a disciplina consolidada de melhorar a presença de conteúdo e sites em mecanismos de busca. GEO e AEO são termos de mercado usados para enfatizar, respectivamente, experiências generativas e mecanismos de resposta. Na prática, eles compartilham grande parte dos mesmos fundamentos: acesso, conteúdo útil, clareza, intenção, estrutura e autoridade. A diferença mais útil está na interface e na forma de medir, não na ideia de abandonar SEO para adotar uma sigla nova.",
    takeaways: [
      "SEO continua sendo a base de descoberta e compreensão em mecanismos de busca.",
      "GEO e AEO não são categorias oficiais universais com um conjunto único de fatores publicados pelas plataformas.",
      "O Google afirma que boas práticas de SEO continuam relevantes para AI Overviews e AI Mode e que não há otimizações especiais adicionais obrigatórias.",
      "A OpenAI documenta requisitos próprios de elegibilidade para ChatGPT Search, como acesso do OAI-SearchBot, sem garantir posicionamento.",
      "A melhor estratégia escolhe a tática pela jornada e pelo gargalo, não pela popularidade da sigla.",
    ],
    blocks: [
      { type: "heading", text: "Por que existe tanta confusão entre SEO, GEO e AEO?" },
      { type: "paragraph", text: "Quando a interface de busca muda, o mercado cria novos nomes para descrever o que precisa ser otimizado. Isso é natural: respostas diretas, AI Overviews, AI Mode e ChatGPT Search mudam a experiência do usuário e exigem novas formas de observação." },
      { type: "paragraph", text: "O problema aparece quando o nome da interface vira uma promessa de disciplina totalmente separada. Uma empresa pode contratar 'GEO' e continuar com páginas não indexáveis, entidade confusa, conteúdo commodity e nenhuma evidência pública. Nesse caso, a nova sigla não corrige o problema básico." },

      { type: "heading", text: "SEO: a base de descoberta, relevância e experiência" },
      { type: "paragraph", text: "O Google define SEO de forma prática como ajudar mecanismos de busca a entender conteúdo e ajudar usuários a encontrar um site e decidir se devem visitá-lo. Essa definição continua ampla o suficiente para incluir técnica, conteúdo, arquitetura e experiência." },
      { type: "paragraph", text: "SEO não se resume a 'rankear dez links'. Rastreamento, indexação, intenção, páginas canônicas, conteúdo útil, links e representação estruturada continuam sendo dependências para várias experiências de descoberta." },

      { type: "heading", text: "GEO: preparação e medição para experiências generativas" },
      { type: "paragraph", text: "Generative Engine Optimization ganhou uso no mercado para descrever esforços voltados a respostas generativas. Na AUDITSEO, preferimos tratar essa frente como Generative Search Readiness porque a palavra 'optimization' frequentemente cria uma expectativa de controle que não existe." },
      { type: "paragraph", text: "A documentação do Google é especialmente útil para calibrar expectativas: para AI Overviews e AI Mode, a empresa afirma que as práticas tradicionais de SEO continuam relevantes e que não existem requisitos adicionais ou otimizações especiais obrigatórias." },

      { type: "heading", text: "AEO: otimizar para respostas não é o mesmo que controlar a resposta" },
      { type: "paragraph", text: "Answer Engine Optimization é outra expressão de mercado. Ela costuma enfatizar respostas diretas, estrutura, perguntas e entidades. Esses elementos podem melhorar a clareza editorial, mas não existe um protocolo universal chamado AEO que seja aplicado de forma idêntica por Google, ChatGPT, Gemini ou outras plataformas." },
      { type: "paragraph", text: "É mais seguro pensar em AEO como um objetivo editorial: tornar a informação fácil de localizar, interpretar, validar e usar em uma resposta. Isso não elimina a necessidade de páginas robustas nem significa escrever tudo em formato de FAQ." },

      { type: "heading", text: "O que realmente muda entre as três abordagens" },
      { type: "list", items: [
        "interface: página de resultados, resposta direta ou experiência generativa",
        "métrica: posição e clique versus menção, citação, contexto e share of voice observado",
        "fonte de dados: Search Console e analytics versus amostras de prompts e fontes citadas",
        "variabilidade: respostas generativas podem mudar mesmo sem alteração do site",
        "atribuição: tráfego pode existir, mas parte da influência acontece antes do clique",
      ] },

      { type: "heading", text: "O que não muda" },
      { type: "list", items: [
        "uma informação bloqueada ou inacessível continua tendo menor capacidade de descoberta",
        "conteúdo genérico continua sendo fácil de substituir por outra fonte",
        "uma entidade mal descrita continua gerando ambiguidade",
        "claims sem prova continuam sendo claims sem prova",
        "conteúdo sem relação com intenção e jornada continua tendo pouco valor estratégico",
        "nenhuma sigla transforma uma plataforma de terceiros em canal controlável pela empresa",
      ] },

      { type: "heading", text: "Uma matriz mais útil: problema → disciplina → métrica" },
      { type: "paragraph", text: "Em vez de escolher entre SEO, GEO ou AEO como se fossem planos concorrentes, a AUDITSEO começa pelo problema. Se o site não é rastreado, o trabalho é técnico. Se a empresa não cobre uma intenção, o trabalho é arquitetural e editorial. Se a marca não é verificável, entra autoridade de entidade. Se o objetivo é entender presença em respostas generativas, entra um benchmark de Search AI." },
      { type: "callout", title: "Regra de decisão", text: "Se a tática é escolhida antes de sabermos qual etapa da jornada está quebrada, a chance de executar atividade correta no problema errado aumenta." },

      { type: "heading", text: "Como avaliar uma proposta comercial de GEO ou AEO" },
      { type: "list", items: [
        "a consultoria separa elegibilidade de garantia de presença?",
        "existe baseline de prompts, plataformas e datas?",
        "as recomendações resolvem crawl, conteúdo, entidade e evidência quando necessário?",
        "o fornecedor explica quais afirmações são documentação oficial e quais são hipóteses próprias?",
        "há metodologia para repetir a medição?",
        "o plano conecta visibilidade à jornada e ao resultado comercial?",
      ] },
    ],
    sources: [
      { label: "Google Search Central — SEO Starter Guide", url: googleSeoStarter, note: "Definição prática e fundamentos públicos de SEO." },
      { label: "Google Search Central — AI features and your website", url: googleAi, note: "O Google afirma que práticas de SEO continuam relevantes e que não há otimizações especiais adicionais para seus recursos de IA." },
      { label: "OpenAI — Busca do ChatGPT", url: openAiSearch, note: "Documentação sobre busca, citações, fontes e elegibilidade no ChatGPT Search." },
    ],
    relatedServices: [["Generative Search Readiness", "/solucoes/geo-ia-readiness"], ["Search Foundation", "/solucoes/projetos-comecando-do-zero"], ["Intent Content Architecture", "/solucoes/conteudo-por-intencao"]],
  },

  "como-auditar-crawlers-de-ia": {
    slug: "como-auditar-crawlers-de-ia",
    title: "Como auditar crawlers de IA sem confundir busca, treinamento e agentes acionados pelo usuário",
    metaTitle: "Como Auditar Crawlers de IA e robots.txt | AUDITSEO",
    description:
      "Guia técnico para auditar acesso de crawlers de IA: robots.txt, OAI-SearchBot, GPTBot, Googlebot, CDN/WAF, logs, status HTTP e objetivos de cada user-agent.",
    eyebrow: "AUDITORIA TÉCNICA",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "13 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Auditar crawlers de IA significa verificar quais user-agents a empresa deseja permitir ou bloquear, qual função cada um possui segundo a documentação do fornecedor e se robots.txt, CDN, WAF, autenticação e respostas HTTP permitem o comportamento pretendido. O erro mais comum é tratar todos os bots de uma empresa como se fossem equivalentes.",
    takeaways: [
      "robots.txt é uma política de acesso por user-agent; não é uma chave universal de 'SEO para IA'.",
      "A OpenAI documenta OAI-SearchBot e GPTBot com finalidades distintas.",
      "Permitir um crawler pode criar elegibilidade de descoberta sem garantir indexação, citação ou posição.",
      "CDN, WAF e autenticação podem bloquear um bot mesmo quando robots.txt permite acesso.",
      "Logs do servidor são a melhor evidência de que um user-agent realmente tentou acessar URLs quando estão disponíveis.",
    ],
    blocks: [
      { type: "heading", text: "1. Comece pelo objetivo, não pelo nome do bot" },
      { type: "paragraph", text: "Antes de editar robots.txt, defina o que a empresa quer: ser elegível para busca, permitir ou não uso para treinamento, possibilitar acesso de agentes acionados por usuários ou bloquear coleta totalmente. Sem essa decisão, a configuração vira tentativa e erro." },
      { type: "paragraph", text: "Diferentes fornecedores podem separar essas funções em user-agents distintos. A própria OpenAI documenta OAI-SearchBot para descoberta em busca e GPTBot como crawler associado a potencial uso para treinamento." },

      { type: "heading", text: "2. Faça um inventário de user-agents com fonte oficial" },
      { type: "paragraph", text: "Não copie uma lista de bots de um artigo antigo e trate como verdade permanente. User-agents e políticas mudam. Registre o nome do bot, fornecedor, finalidade declarada, URL da documentação e data em que a informação foi verificada." },
      { type: "list", items: [
        "user-agent exato",
        "empresa/plataforma responsável",
        "finalidade documentada",
        "comportamento desejado pela sua política",
        "regra atual no robots.txt",
        "evidência de acesso em logs, quando disponível",
        "data da última revisão",
      ] },

      { type: "heading", text: "3. Audite robots.txt por objetivo" },
      { type: "paragraph", text: "O Robots Exclusion Protocol permite regras específicas por user-agent. Uma política pode permitir um crawler de busca e bloquear outro associado a treinamento, desde que a plataforma documente agentes distintos e respeite essas diretivas." },
      { type: "paragraph", text: "Também é preciso lembrar que regras são específicas ao host e protocolo onde o arquivo é servido. Ambientes com subdomínios, staging, CDN ou múltiplas propriedades podem ter políticas diferentes sem perceber." },

      { type: "heading", text: "4. robots.txt não é o único ponto de bloqueio" },
      { type: "list", items: [
        "firewall ou bot management bloqueando o request antes da aplicação",
        "desafio JavaScript ou CAPTCHA incompatível com crawler",
        "autenticação obrigatória",
        "restrição geográfica ou de IP",
        "status 401, 403, 429 ou 5xx",
        "timeouts e falhas de DNS",
        "HTML disponível apenas após comportamento de navegador que o crawler não executa",
      ] },
      { type: "paragraph", text: "Por isso uma auditoria deve combinar política declarada com comportamento observado. robots.txt pode dizer 'Allow' enquanto a borda da infraestrutura devolve 403." },

      { type: "heading", text: "5. Verifique as páginas que realmente importam" },
      { type: "paragraph", text: "Não basta testar a homepage. A lista deve incluir páginas institucionais, serviços, artigos, autores, documentos de prova e qualquer URL que a empresa espera ver recuperada em respostas ou buscas." },
      { type: "list", items: [
        "HTTP status esperado",
        "robots/meta robots",
        "canonical",
        "conteúdo disponível no HTML",
        "links internos",
        "structured data quando aplicável",
        "cache/CDN e comportamento por user-agent quando o stack diferencia bots",
      ] },

      { type: "heading", text: "6. Use logs para separar teoria de acesso real" },
      { type: "paragraph", text: "Quando há acesso a logs de servidor ou edge, filtre user-agent, IP quando documentado, URL, status, timestamp e volume. Isso permite saber quais páginas estão sendo acessadas e onde ocorrem falhas." },
      { type: "paragraph", text: "A ausência de logs não prova que a plataforma nunca conhece o conteúdo; mecanismos podem obter informação por outras fontes ou provedores. Mas logs são evidência forte sobre requests diretos ao seu domínio." },

      { type: "heading", text: "7. OAI-SearchBot: busca não é garantia de citação" },
      { type: "paragraph", text: "A OpenAI orienta sites que desejam aparecer em ChatGPT Search a não bloquear OAI-SearchBot. A mesma documentação afirma que posicionamento não é garantido. Isso ilustra a diferença entre permitir descoberta e ser escolhido como fonte para uma resposta específica." },

      { type: "heading", text: "8. Crie uma política de revisão" },
      { type: "paragraph", text: "Crawlers de IA são um tema dinâmico. A auditoria deve possuir responsável e periodicidade. Mudanças na documentação do fornecedor, no WAF ou na estratégia de dados da empresa precisam acionar revisão da política." },
      { type: "callout", title: "Checklist mínimo", text: "Objetivo definido → user-agent confirmado em fonte oficial → robots.txt revisado → infraestrutura testada → URLs estratégicas verificadas → logs analisados quando possível → política datada e documentada." },
    ],
    sources: [
      { label: "OpenAI — Editores e desenvolvedores — FAQ", url: openAiPublishers, note: "Documentação para OAI-SearchBot, GPTBot e políticas de publishers." },
      { label: "OpenAI — Busca do ChatGPT", url: openAiSearch, note: "Elegibilidade de sites e ausência de garantia de posicionamento." },
      { label: "Google Crawling Infrastructure — robots.txt specification", url: googleRobots, note: "Especificação pública de interpretação do robots.txt pelo Google." },
    ],
    relatedServices: [["Generative Search Readiness", "/solucoes/geo-ia-readiness"], ["Search Foundation", "/solucoes/projetos-comecando-do-zero"], ["SEO Migration & Risk Control", "/solucoes/migracao-risco-seo"]],
  },

  "como-medir-visibilidade-em-ia": {
    slug: "como-medir-visibilidade-em-ia",
    title: "Como medir visibilidade em IA sem transformar uma amostra de prompts em uma falsa métrica absoluta",
    metaTitle: "Como Medir Menções e Citações em IA | AUDITSEO",
    description:
      "Metodologia para medir menções, citações, share of voice e contexto em ChatGPT e outras interfaces de IA com prompts fixos, datas, amostra e limitações explícitas.",
    eyebrow: "MENSURAÇÃO SEARCH AI",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "15 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Visibilidade em IA deve ser medida como um experimento amostral, não como um ranking universal. A AUDITSEO recomenda congelar prompts, intenção, idioma, localização quando relevante, plataforma, data e método; depois registrar presença da marca, citações, posição relativa, fontes, concorrentes e contexto da resposta. O resultado vale para aquela amostra e deve ser repetido com a mesma metodologia para acompanhar mudança.",
    takeaways: [
      "Não existe uma posição única e estável equivalente a um ranking tradicional para todas as respostas generativas.",
      "Mention Rate e Citation Rate só fazem sentido quando a amostra de prompts é definida e publicada.",
      "Resposta, citação e contexto devem ser analisados separadamente.",
      "Mudança de modelo, busca, data ou localização pode alterar respostas sem qualquer mudança no site.",
      "A métrica precisa estar conectada a intenções comerciais e não apenas a prompts escolhidos para produzir um resultado bonito.",
    ],
    blocks: [
      { type: "heading", text: "Por que 'minha marca aparece no ChatGPT?' é uma pergunta incompleta" },
      { type: "paragraph", text: "Uma marca pode aparecer em uma pergunta e sumir em outra quase idêntica. Pode ser mencionada sem link, citada como fonte, listada como alternativa ou aparecer em contexto negativo. Reduzir tudo a 'sim/não' perde a maior parte da informação estratégica." },
      { type: "paragraph", text: "Além disso, respostas generativas são variáveis. Ferramentas podem usar busca atual, fontes distintas, contexto de sessão e versões diferentes do sistema. Por isso a medição precisa controlar o que for possível e documentar o restante." },

      { type: "heading", text: "1. Defina a unidade de análise: o prompt" },
      { type: "paragraph", text: "O benchmark começa por um conjunto de prompts que representem jornadas reais. Eles devem ser escolhidos antes da coleta, não depois de vermos onde a marca aparece." },
      { type: "list", items: [
        "perguntas de categoria: 'quais empresas oferecem X?'",
        "perguntas de comparação: 'X ou Y para este cenário?'",
        "perguntas de validação: 'a empresa Z é confiável/adequada para...?'",
        "perguntas de problema: 'como resolver...?'",
        "perguntas locais quando a geografia altera a decisão",
        "perguntas branded para avaliar precisão da descrição da própria marca",
      ] },

      { type: "heading", text: "2. Congele o contexto do benchmark" },
      { type: "list", items: [
        "texto exato do prompt",
        "plataforma e produto utilizados",
        "data e horário da coleta",
        "idioma",
        "localização ou mercado quando controlável",
        "conta/logado ou não, quando isso fizer parte do método",
        "número de repetições",
        "se houve busca/web ativada ou evidência de recuperação de fontes",
      ] },

      { type: "heading", text: "3. Separe as métricas" },
      { type: "subheading", text: "Mention Rate" },
      { type: "paragraph", text: "Percentual de prompts da amostra em que a marca é mencionada. Sem o tamanho e a composição da amostra, o número não deve ser tratado como indicador absoluto de mercado." },
      { type: "subheading", text: "Citation Rate" },
      { type: "paragraph", text: "Percentual de prompts em que uma URL ou domínio da marca aparece como fonte/citação observável. Menção e citação são eventos diferentes." },
      { type: "subheading", text: "Competitive Share of Voice" },
      { type: "paragraph", text: "Participação relativa das marcas observadas no mesmo conjunto de prompts. É útil para comparar movimento, desde que o universo de prompts permaneça estável." },
      { type: "subheading", text: "Source Share" },
      { type: "paragraph", text: "Quais domínios são citados com maior frequência na amostra — sites das marcas, imprensa, diretórios, fóruns, documentos oficiais ou outras fontes." },
      { type: "subheading", text: "Context Quality" },
      { type: "paragraph", text: "Classificação manual ou assistida sobre como a marca é descrita: correta, incompleta, incorreta, positiva, neutra, negativa, recomendada ou apenas mencionada." },

      { type: "heading", text: "4. Por que repetir o mesmo prompt" },
      { type: "paragraph", text: "Uma única resposta não mostra variabilidade. Para perguntas prioritárias, repetições ajudam a distinguir presença recorrente de uma ocorrência isolada. O número de repetições deve ser escolhido antes do teste e mantido entre ciclos comparáveis." },

      { type: "heading", text: "5. Não misture correlação com causalidade" },
      { type: "paragraph", text: "Se uma marca passa de 10% para 20% de Mention Rate após uma campanha, isso não prova que a campanha causou a mudança. O modelo pode ter sido atualizado, novas fontes podem ter entrado no índice ou a variabilidade natural pode explicar parte do movimento." },
      { type: "callout", title: "Princípio de pesquisa", text: "Um benchmark serve para observar e formular hipóteses. Atribuir causalidade exige desenho experimental mais forte do que um antes/depois simples." },

      { type: "heading", text: "6. Ligue Search AI a dados comerciais" },
      { type: "paragraph", text: "A medição ganha valor quando prompts são conectados a categorias, serviços e jornadas que importam para a empresa. Também vale acompanhar referrals identificáveis, branded search, páginas citadas e leads que declaram ter descoberto a marca em uma ferramenta de IA." },
      { type: "paragraph", text: "A OpenAI informa que referrals de ChatGPT podem incluir `utm_source=chatgpt.com`, o que ajuda a separar parte do tráfego observável. Mesmo assim, influência sem clique continuará existindo e deve ser tratada como uma limitação de atribuição." },

      { type: "heading", text: "7. Um exemplo de relatório responsável" },
      { type: "list", items: [
        "amostra: 100 prompts definidos e publicados internamente",
        "plataformas: produtos e versões observados na data do teste",
        "Mention Rate da marca e de cinco concorrentes",
        "Citation Rate por domínio",
        "top fontes externas citadas",
        "erros factuais sobre a entidade",
        "prompts em que concorrentes dominam a resposta",
        "mudanças desde o ciclo anterior",
        "hipóteses de ação — separadas das conclusões observadas",
      ] },
    ],
    sources: [
      { label: "OpenAI — Busca do ChatGPT", url: openAiSearch, note: "A busca do ChatGPT pode apresentar citações e fontes; a documentação também descreve elegibilidade e limitações de posicionamento." },
      { label: "OpenAI — Editores e desenvolvedores — FAQ", url: openAiPublishers, note: "Informações sobre descoberta, OAI-SearchBot e atribuição de referrals do ChatGPT." },
      { label: "Google Search Central — AI features and your website", url: googleAi, note: "Contexto oficial sobre AI Overviews/AI Mode e relação com fundamentos de SEO." },
    ],
    relatedServices: [["Generative Search Readiness", "/solucoes/geo-ia-readiness"], ["Organic Evolution Cycle", "/solucoes/evolucao-organica"], ["Entity Authority", "/solucoes/autoridade-de-entidade"]],
  },

  "como-estruturar-entidade-empresarial": {
    slug: "como-estruturar-entidade-empresarial",
    title: "Como estruturar uma entidade empresarial para busca: Organization, pessoas, serviços, provas e fontes",
    metaTitle: "Como Estruturar uma Entidade Empresarial para Busca | AUDITSEO",
    description:
      "Passo a passo para estruturar entidade empresarial: Entity Home, Organization schema, fundadores, especialistas, serviços, provas, consistência e fontes externas.",
    eyebrow: "ENTITY ARCHITECTURE",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "14 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Estruturar uma entidade empresarial para busca significa criar uma fonte canônica e coerente sobre quem é a organização e conectá-la às pessoas, serviços, localidades, provas e fontes que sustentam essa identidade. Organization structured data ajuda a formalizar parte dessas relações, mas o trabalho começa no conteúdo visível e na consistência dos fatos.",
    takeaways: [
      "A empresa precisa de uma página canônica que funcione como Entity Home, não apenas de schema.",
      "Fundadores e especialistas relevantes devem possuir relações explícitas com organização, serviços e conteúdos.",
      "Páginas de serviço são parte do grafo da entidade porque explicam em quais contextos a empresa deve ser considerada.",
      "Provas e fontes externas reduzem a distância entre uma afirmação institucional e sua verificabilidade.",
      "sameAs deve apontar para perfis realmente oficiais e mantidos; não é uma lista para acumular links aleatórios.",
    ],
    blocks: [
      { type: "heading", text: "1. Defina a Entity Home da organização" },
      { type: "paragraph", text: "A Entity Home é o documento principal controlado pela empresa para explicar sua identidade. Em muitos casos será a homepage ou uma página institucional forte. O ponto importante é existir uma URL canônica capaz de responder, sem ambiguidade, quem é a organização, o que faz e como verificar informações centrais." },
      { type: "list", items: [
        "nome oficial e marca",
        "descrição direta do negócio",
        "categorias e serviços principais",
        "área de atuação e localidades quando relevantes",
        "fundador e especialistas",
        "provas, pesquisa, cases ou credenciais",
        "contato e links para perfis oficiais",
      ] },

      { type: "heading", text: "2. Use Organization structured data como representação, não como substituto do conteúdo" },
      { type: "paragraph", text: "O Google documenta Organization structured data para fornecer informações administrativas e organizacionais, como nome, endereço, contatos e identificadores. O markup deve representar fatos que também fazem sentido para o usuário e para a página." },
      { type: "paragraph", text: "O erro é criar um grafo riquíssimo no JSON-LD enquanto a página visível quase não explica a empresa. Dados estruturados ajudam máquinas a interpretar; não devem carregar sozinhos uma narrativa que o conteúdo não sustenta." },

      { type: "heading", text: "3. Conecte pessoas à organização" },
      { type: "paragraph", text: "Empresas de conhecimento, saúde, serviços profissionais e B2B frequentemente dependem de especialistas reais. Páginas de pessoa devem explicar experiência, função, áreas de conhecimento e conteúdos produzidos, e a relação com a organização deve ser explícita." },
      { type: "paragraph", text: "ProfilePage structured data pode ser usado quando a página tem como foco principal uma pessoa ou organização. Mais uma vez, o markup representa o documento; a credibilidade vem da qualidade e verificabilidade da informação." },

      { type: "heading", text: "4. Serviços são relações semânticas importantes" },
      { type: "paragraph", text: "A entidade 'empresa' precisa ser conectada aos serviços que realmente oferece. Uma página de serviço forte explica cenário, problema, público, método, entregáveis e provas. Essa clareza ajuda pessoas e sistemas a entender em quais contextos a empresa deve ser recuperada." },

      { type: "heading", text: "5. Organize provas por afirmação" },
      { type: "paragraph", text: "Em vez de criar uma seção genérica de 'somos líderes', associe evidência à afirmação. Se a empresa diz possuir uma metodologia, documente-a. Se afirma experiência, conecte pessoas, histórico e casos. Se publica pesquisa, apresente método e data." },
      { type: "list", items: [
        "cases com contexto e limites",
        "pesquisa original com metodologia",
        "autoria identificável",
        "certificações e credenciais verificáveis",
        "avaliações em ambientes relevantes",
        "matérias e referências editoriais legítimas",
        "documentos técnicos e ferramentas próprias",
      ] },

      { type: "heading", text: "6. Alinhe perfis externos sem transformar consistência em copy-paste" },
      { type: "paragraph", text: "Perfis oficiais não precisam repetir o mesmo parágrafo. Eles precisam concordar sobre fatos centrais: nome, identidade, serviço, localização, pessoas e posicionamento. Descrições adaptadas ao canal continuam consistentes quando a realidade representada é a mesma." },

      { type: "heading", text: "7. sameAs com parcimônia" },
      { type: "paragraph", text: "Links `sameAs` devem representar páginas que identificam a mesma entidade em fontes ou perfis apropriados. Adicionar dezenas de URLs irrelevantes apenas para criar um grafo maior não aumenta a qualidade da entidade." },

      { type: "heading", text: "8. Faça auditoria de conflitos" },
      { type: "list", items: [
        "nomes e variações antigas ainda indexadas",
        "endereços ou telefones divergentes",
        "serviços que não existem mais",
        "perfis de fundador sem relação explícita com a organização",
        "bios profissionais com datas ou cargos contraditórios",
        "schema que declara fatos ausentes ou desatualizados no conteúdo",
      ] },

      { type: "heading", text: "9. Entidade é um sistema vivo" },
      { type: "paragraph", text: "Empresas mudam. Pessoas entram e saem, serviços são criados, unidades abrem, pesquisas são publicadas. A arquitetura de entidade precisa de governança para que site, schema e fontes oficiais permaneçam coerentes ao longo do tempo." },
      { type: "callout", title: "Objetivo final", text: "Uma pessoa ou sistema deveria conseguir responder 'quem é esta empresa, o que ela faz, quem responde por sua expertise e quais evidências sustentam isso?' sem encontrar contradições importantes." },
    ],
    sources: [
      { label: "Google Search Central — Organization structured data", url: googleOrganization, note: "Documentação oficial para informações estruturadas de organizações." },
      { label: "Google Search Central — ProfilePage structured data", url: googleProfile, note: "Documentação oficial para páginas cujo foco é uma pessoa ou organização." },
      { label: "Google Search Central — Creating helpful, reliable, people-first content", url: googleHelpful, note: "Orientação pública sobre autoria, experiência, sourcing e confiança." },
    ],
    relatedServices: [["Entity Authority", "/solucoes/autoridade-de-entidade"], ["Search Foundation", "/solucoes/projetos-comecando-do-zero"], ["Intent Content Architecture", "/solucoes/conteudo-por-intencao"]],
  },
};

export const advancedArticleList = Object.values(advancedArticles);
