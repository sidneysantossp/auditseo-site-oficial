import type { Article } from "./articles";

const openAiPublishers = "https://help.openai.com/pt-br/articles/12627856-publishers-and-developers-faq";
const openAiSearch = "https://help.openai.com/pt-br/articles/9237897-chatgpt-search";
const googleAi = "https://developers.google.com/search/docs/appearance/ai-features";
const googleUpdates = "https://developers.google.com/search/updates";
const llmsTxtSpec = "https://llmstxt.org/";
const ahrefsLlmsStudy = "https://ahrefs.com/blog/llmstxt-study/";

export const demandArticles: Record<string, Article> = {
  "como-aparecer-no-chatgpt": {
    slug: "como-aparecer-no-chatgpt",
    title: "Como aparecer no ChatGPT: o que sua empresa pode controlar — e o que ninguém pode garantir",
    metaTitle: "Como Aparecer no ChatGPT em 2026 sem Promessas Falsas | AUDITSEO",
    description:
      "Guia para empresas sobre presença no ChatGPT: OAI-SearchBot, conteúdo, entidade, fontes, citações, medição e a diferença entre elegibilidade e garantia de aparecer.",
    eyebrow: "SEARCH AI NA PRÁTICA",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "14 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Para aumentar a capacidade de uma empresa aparecer no ChatGPT Search, o primeiro requisito controlável é permitir que o conteúdo público possa ser descoberto e acessado, incluindo não bloquear o OAI-SearchBot quando a empresa deseja elegibilidade para busca. Depois entram qualidade e clareza do conteúdo, entidade, evidências e presença em fontes relevantes. Nenhuma dessas ações garante que a marca será mencionada, citada ou recomendada em uma pergunta futura.",
    takeaways: [
      "A OpenAI informa que qualquer site público pode aparecer no ChatGPT Search.",
      "Para que conteúdo seja incluído em resumos e snippets, a OpenAI orienta não bloquear o OAI-SearchBot.",
      "Permitir rastreamento cria condição de descoberta; não cria garantia de citação, posição ou recomendação.",
      "Menção de marca, citação do domínio e recomendação comercial são eventos diferentes e devem ser medidos separadamente.",
      "A melhor forma de acompanhar evolução é usar um conjunto fixo de prompts, datas e regras de classificação — não uma pergunta escolhida depois de ver a resposta.",
    ],
    blocks: [
      { type: "heading", text: "Primeiro: o que significa 'aparecer no ChatGPT'?" },
      { type: "paragraph", text: "A expressão mistura situações diferentes. Uma empresa pode ser mencionada sem link, aparecer como opção em uma lista, ter uma página citada como fonte ou receber uma recomendação explícita. Tratar tudo como a mesma métrica produz diagnósticos ruins." },
      { type: "list", items: [
        "menção: a marca aparece no texto da resposta",
        "citação: uma URL ou domínio aparece como fonte observável",
        "recomendação: a marca é apresentada como opção apropriada para o cenário",
        "referral: existe clique identificável do ChatGPT para o site",
        "descrição de entidade: o sistema explica corretamente quem é a empresa, o que faz e em qual contexto é relevante",
      ] },

      { type: "heading", text: "1. Garanta elegibilidade técnica antes de discutir GEO" },
      { type: "paragraph", text: "A documentação atual da OpenAI diz que qualquer site público pode aparecer no ChatGPT Search e orienta publishers que desejam que conteúdo seja descoberto, exibido e claramente citado a não bloquear o OAI-SearchBot." },
      { type: "paragraph", text: "Isso torna robots.txt, status HTTP, CDN, WAF e disponibilidade do conteúdo um ponto de auditoria real. Mas é importante não extrapolar a documentação: permitir o crawler não significa que uma página será escolhida como fonte para uma pergunta específica." },
      { type: "callout", title: "Elegibilidade ≠ garantia", text: "Uma regra Allow pode remover um bloqueio técnico. Ela não obriga um sistema de terceiros a mencionar, citar ou recomendar a empresa." },

      { type: "heading", text: "2. Faça a empresa ser fácil de compreender" },
      { type: "paragraph", text: "Depois do acesso, a informação precisa reduzir ambiguidade. Nome da empresa, serviços, pessoas, localidades, provas e páginas canônicas devem contar a mesma história. Isso não é um 'truque para LLM'; é arquitetura básica de entidade e conteúdo." },
      { type: "list", items: [
        "uma Entity Home clara para a organização",
        "páginas específicas para serviços e contextos de uso",
        "fundadores e especialistas com autoria e credenciais verificáveis",
        "dados estruturados coerentes com o conteúdo visível",
        "informações institucionais consistentes em perfis e fontes externas relevantes",
      ] },

      { type: "heading", text: "3. Publique informação que possa funcionar como fonte" },
      { type: "paragraph", text: "Conteúdo genérico é fácil de substituir. Definições claras, comparações com critérios explícitos, dados com metodologia, exemplos verificáveis, autoria e referências tornam uma página mais útil para pessoas — e também mais adequada para recuperação e citação quando um sistema precisa sustentar uma resposta." },
      { type: "paragraph", text: "A AUDITSEO chama essa propriedade editorial de citabilidade. É um framework nosso, não um fator oficial publicado pela OpenAI." },

      { type: "heading", text: "4. Construa autoridade fora do próprio domínio" },
      { type: "paragraph", text: "Uma empresa não controla todas as fontes que podem participar de uma resposta. Imprensa, diretórios legítimos, avaliações, associações, parceiros, bases públicas e especialistas independentes podem ajudar a validar fatos sobre a entidade." },
      { type: "paragraph", text: "O objetivo não é fabricar menções. É reduzir a distância entre o que a empresa afirma sobre si mesma e o que pode ser verificado em fontes públicas apropriadas." },

      { type: "heading", text: "5. Meça antes de otimizar" },
      { type: "paragraph", text: "Perguntar uma vez 'qual é a melhor empresa de X?' não é um benchmark. Para acompanhar presença em Search AI, congele um conjunto de prompts por intenção, registre data, plataforma, idioma, contexto e repetição, e classifique menção, citação, recomendação, fontes e precisão da descrição." },
      { type: "list", items: [
        "prompts de categoria e descoberta",
        "prompts de comparação",
        "prompts de validação da marca",
        "prompts branded para checar precisão factual",
        "prompts locais quando geografia muda a escolha",
      ] },

      { type: "heading", text: "6. Acompanhe referrals sem confundir clique com influência total" },
      { type: "paragraph", text: "A OpenAI informa que links de referral do ChatGPT podem incluir `utm_source=chatgpt.com`, o que permite observar parte do tráfego em analytics. Ainda assim, uma resposta pode influenciar uma decisão sem gerar clique imediato, então atribuição continuará incompleta." },

      { type: "heading", text: "O que não recomendamos" },
      { type: "list", items: [
        "prometer posição fixa ou citação garantida no ChatGPT",
        "tratar OAI-SearchBot como botão de indexação instantânea",
        "criar centenas de FAQs sem intenção ou evidência",
        "fabricar reviews, listas ou menções externas",
        "usar schema como substituto de conteúdo e prova",
        "selecionar apenas prompts em que a marca já aparece para construir um relatório bonito",
      ] },
      { type: "callout", title: "A pergunta correta", text: "Não é 'qual hack coloca minha empresa no ChatGPT?'. É 'quais condições controláveis estão impedindo descoberta, compreensão, verificabilidade ou consideração — e como vamos medir se isso mudou?'" },
    ],
    sources: [
      { label: "OpenAI — Editores e desenvolvedores — FAQ", url: openAiPublishers, note: "Diretrizes atuais sobre OAI-SearchBot, descoberta de sites, snippets, noindex e referral attribution." },
      { label: "OpenAI — Busca do ChatGPT", url: openAiSearch, note: "Documentação oficial sobre ChatGPT Search, fontes e experiência de busca." },
      { label: "AUDITSEO — Protocolo de benchmark de Search AI", url: "https://www.auditseo.com.br/blog/protocolo-benchmark-search-ai", note: "Metodologia própria para medir presença sem transformar uma amostra em ranking absoluto." },
    ],
    relatedServices: [["Generative Search Readiness", "/solucoes/geo-ia-readiness"], ["Entity Authority", "/solucoes/autoridade-de-entidade"], ["Intent Content Architecture", "/solucoes/conteudo-por-intencao"]],
  },

  "llms-txt-funciona": {
    slug: "llms-txt-funciona",
    title: "llms.txt funciona para SEO ou Search AI? O que a evidência de 2026 realmente permite afirmar",
    metaTitle: "llms.txt Funciona para SEO ou ChatGPT? Evidência 2026 | AUDITSEO",
    description:
      "Entenda o status do llms.txt em 2026: o que Google diz, o objetivo da especificação, dados observacionais de crawlers e quando o arquivo pode ser útil sem ser tratado como fator de ranking.",
    eyebrow: "MITO / EVIDÊNCIA",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "12 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Não há base para tratar llms.txt como requisito de Google Search, fator de ranking ou garantia de citação em ferramentas de IA. O Google declara que não é necessário criar novos arquivos legíveis por máquina ou arquivos de texto de IA para aparecer em AI Overviews ou AI Mode. A especificação llms.txt é uma proposta voltada a fornecer um caminho LLM-friendly para agentes, especialmente útil em documentação. Publicá-la pode ser uma decisão de acessibilidade para agentes; vendê-la como alavanca comprovada de SEO/GEO é outra afirmação — e essa afirmação não é sustentada pela documentação oficial disponível.",
    takeaways: [
      "llms.txt é uma proposta aberta, não um requisito universal das principais plataformas de busca.",
      "O Google afirma que novos arquivos legíveis por máquina ou 'AI text files' não são necessários para seus recursos generativos de Search.",
      "A própria especificação v2 descreve uso por agentes, com forte adoção em documentação de software.",
      "Um estudo observacional da Ahrefs em 137 mil domínios encontrou que a maioria dos llms.txt publicados não recebeu requests no período analisado.",
      "O arquivo pode ser mantido como recurso auxiliar para agentes sem receber crédito por resultados que não foram demonstrados.",
    ],
    blocks: [
      { type: "heading", text: "O erro começa ao misturar três perguntas diferentes" },
      { type: "list", items: [
        "Google Search precisa de llms.txt para AI Overviews ou AI Mode?",
        "ChatGPT Search documenta llms.txt como requisito de descoberta ou citação?",
        "um agente pode usar llms.txt como mapa de documentação quando decide procurar esse arquivo?",
      ] },
      { type: "paragraph", text: "Essas perguntas não têm a mesma resposta. Um formato pode ser útil para agentes em determinados contextos e, ao mesmo tempo, não ser um fator de ranking nem requisito para Google Search." },

      { type: "heading", text: "O que o Google diz" },
      { type: "paragraph", text: "Na documentação de AI features, o Google afirma que as práticas fundamentais de SEO continuam relevantes, que não existem requisitos técnicos adicionais para AI Overviews/AI Mode e que não é necessário criar novos arquivos legíveis por máquina, arquivos de texto para IA ou schema especial para aparecer nessas experiências." },
      { type: "paragraph", text: "Isso é suficiente para rejeitar uma promessa específica: 'adicione llms.txt para melhorar sua elegibilidade no Google AI'. A própria documentação pública do Google não sustenta essa recomendação." },

      { type: "heading", text: "O que a especificação llms.txt diz sobre si mesma" },
      { type: "paragraph", text: "A versão 2 do projeto descreve llms.txt como uma proposta para oferecer informação e links em formato amigável a LLMs e agentes. O texto destaca uso em documentação de software e propõe também versões Markdown das páginas para reduzir ruído e custo de contexto." },
      { type: "paragraph", text: "Isso é uma proposta de interface para agentes. Não é uma declaração de Google, OpenAI ou outra plataforma de que o arquivo é usado como sinal de ranking ou citação." },

      { type: "heading", text: "E o que os logs mostram?" },
      { type: "paragraph", text: "Em 2026, a Ahrefs publicou um estudo observacional usando dados de 137 mil domínios. Entre sites que possuíam llms.txt, a grande maioria dos arquivos não recebeu requests no mês analisado. Esse tipo de estudo não prova que o arquivo nunca será útil, mas é evidência contra a narrativa de que ele já é uma dependência amplamente consumida por crawlers de Search AI." },
      { type: "callout", title: "Hierarquia de evidência", text: "Documentação oficial responde o que uma plataforma declara usar. Logs observacionais mostram comportamento em uma amostra. Nenhum dos dois autoriza transformar correlação ou adoção de mercado em garantia de visibilidade." },

      { type: "heading", text: "Então devo publicar llms.txt?" },
      { type: "paragraph", text: "Pode fazer sentido quando o custo é baixo e existe conteúdo técnico ou documental bem organizado que agentes poderiam consumir melhor em Markdown. Nesse caso, trate o arquivo como uma camada auxiliar de acessibilidade e navegação para agentes — não como prioridade que substitui problemas mais fundamentais." },
      { type: "list", items: [
        "priorize páginas públicas acessíveis e indexáveis",
        "garanta que conteúdo importante exista em texto claro",
        "mantenha sitemap, canonicals e links internos corretos",
        "use structured data coerente com o conteúdo visível",
        "organize Entity Home, autores, serviços e provas",
        "audite bots que as plataformas realmente documentam, como OAI-SearchBot quando relevante",
      ] },

      { type: "heading", text: "Quando llms.txt vira SEO theater" },
      { type: "list", items: [
        "quando é vendido como fator de ranking do Google",
        "quando recebe prioridade antes de corrigir crawl/indexação",
        "quando o arquivo repete marketing genérico sem documentos úteis atrás dos links",
        "quando um relatório atribui aumento de citação ao arquivo sem experimento ou evidência causal",
        "quando a empresa mantém llms.txt impecável e páginas importantes continuam bloqueadas, fracas ou não verificáveis",
      ] },

      { type: "heading", text: "A posição operacional da AUDITSEO" },
      { type: "paragraph", text: "Nós não tratamos presença de llms.txt como score positivo automático de Search AI. Se o arquivo existir, auditamos conteúdo, coerência e utilidade. Se não existir, sua ausência não deve ser apresentada como falha crítica sem uma necessidade concreta de agente que justifique a implementação." },
      { type: "callout", title: "Regra de prioridade", text: "Crawl, Index, Retrieve, Understand e Trust vêm antes de acessórios cuja adoção pelas plataformas ainda é parcial ou não documentada." },
    ],
    sources: [
      { label: "Google Search Central — AI features and your website", url: googleAi, note: "O Google afirma que não são necessários novos arquivos legíveis por máquina, AI text files ou schema especial para AI Overviews/AI Mode." },
      { label: "Google Search Central — documentação atualizada", url: googleUpdates, note: "Registro de atualização da orientação sobre llms.txt em junho de 2026." },
      { label: "llms.txt v2 — proposta", url: llmsTxtSpec, note: "Especificação atual do projeto, seu objetivo, formato e usos propostos para agentes." },
      { label: "Ahrefs — estudo de 137 mil sites", url: ahrefsLlmsStudy, note: "Evidência observacional de requests a llms.txt; útil como dado de comportamento, não como regra oficial de plataforma." },
    ],
    relatedServices: [["Generative Search Readiness", "/solucoes/geo-ia-readiness"], ["Search Foundation", "/solucoes/projetos-comecando-do-zero"], ["Intent Content Architecture", "/solucoes/conteudo-por-intencao"]],
  },
};

export const demandArticleList = Object.values(demandArticles);
