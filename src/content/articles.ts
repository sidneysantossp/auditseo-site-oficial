export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; id?: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; text: string };

export type ArticleSource = {
  label: string;
  url: string;
  note: string;
};

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  author: string;
  authorUrl: string;
  directAnswer: string;
  takeaways: string[];
  blocks: ArticleBlock[];
  sources: ArticleSource[];
  relatedServices: Array<[string, string]>;
};

const googleHelpful = "https://developers.google.com/search/docs/fundamentals/creating-helpful-content";
const googleAi = "https://developers.google.com/search/docs/appearance/ai-features";
const googleOrganization = "https://developers.google.com/search/docs/appearance/structured-data/organization";
const googleProfile = "https://developers.google.com/search/docs/appearance/structured-data/profile-page";
const googleSpam = "https://developers.google.com/search/docs/essentials/spam-policies";
const googleRobots = "https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec";
const openAiSearch = "https://help.openai.com/pt-br/articles/9237897-chatgpt-search";
const openAiPublishers = "https://help.openai.com/pt-br/articles/12627856-publishers-and-developers-faq";

export const articles: Record<string, Article> = {
  "o-que-e-search-intelligence": {
    slug: "o-que-e-search-intelligence",
    title: "O que é Search Intelligence? A disciplina que conecta busca, autoridade e decisão",
    metaTitle: "O que é Search Intelligence? Definição e Framework | AUDITSEO",
    description:
      "Entenda o que a AUDITSEO chama de Search Intelligence, como a disciplina conecta SEO, intenção, entidades, autoridade, AI Search e conversão, e quando ela é útil.",
    eyebrow: "FUNDAMENTO AUDITSEO",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "10 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Search Intelligence é o nome que a AUDITSEO usa para a disciplina de transformar sinais de busca, intenção, conteúdo, autoridade, reputação, entidades e conversão em decisões coordenadas. Não é um recurso oficial do Google nem uma substituição do SEO: é uma camada estratégica que organiza diferentes frentes em torno do problema empresarial que precisa ser resolvido.",
    takeaways: [
      "SEO continua sendo uma base técnica e editorial essencial.",
      "Search Intelligence começa pelo diagnóstico do gargalo, não por uma lista fixa de táticas.",
      "A unidade de análise deixa de ser apenas a página e passa a incluir entidade, jornada, fontes, especialistas e sinais externos.",
      "AI Search entra como mais uma interface de descoberta e validação, não como um canal mágico separado.",
      "O objetivo final é ligar presença de busca a consideração e resultado comercial mensurável.",
    ],
    blocks: [
      { type: "heading", text: "Por que criar uma camada acima das táticas de SEO?" },
      { type: "paragraph", text: "Em muitas empresas, SEO técnico, conteúdo, reputação, páginas de serviço, dados estruturados, relações públicas, busca local e mensuração são administrados por equipes diferentes. Cada área pode executar tarefas corretas isoladamente e, ainda assim, o sistema completo continuar sem direção." },
      { type: "paragraph", text: "Search Intelligence nasce desse problema de coordenação. A pergunta deixa de ser “qual é a próxima tarefa de SEO?” e passa a ser “o que está impedindo esta empresa de ser encontrada, compreendida, validada ou considerada nesta jornada de decisão?”" },
      { type: "paragraph", text: "Isso muda a ordem do trabalho. Em vez de partir da solução — publicar conteúdo, adicionar schema, conseguir links ou otimizar para IA — primeiro se define o gargalo. Só depois as disciplinas necessárias entram no roadmap." },

      { type: "heading", text: "O framework operacional da AUDITSEO" },
      { type: "paragraph", text: "A AUDITSEO organiza Search Intelligence como uma cadeia de dependências. Uma empresa não chega à consideração de forma sustentável se as etapas anteriores estão quebradas." },
      { type: "list", items: [
        "Crawl: os sistemas conseguem acessar a informação?",
        "Index: a informação elegível entra nos índices e bases de recuperação relevantes?",
        "Retrieve: a página ou fonte consegue ser recuperada para uma pergunta ou intenção?",
        "Understand: fica claro qual entidade, serviço, problema e contexto a informação representa?",
        "Trust: existem sinais suficientes para sustentar confiança e reduzir ambiguidade?",
        "Citability: a informação é específica, verificável, bem atribuída e útil o suficiente para funcionar como fonte?",
        "Traffic / consideration: a presença gera descoberta, comparação e consideração?",
        "Conversion: a jornada produz ação comercial mensurável?",
      ] },
      { type: "callout", title: "Importante", text: "Esse encadeamento é um framework de trabalho da AUDITSEO. Ele não deve ser apresentado como uma lista oficial de fatores de ranking do Google, OpenAI ou qualquer outra plataforma." },

      { type: "heading", text: "Search Intelligence substitui SEO?" },
      { type: "paragraph", text: "Não. O próprio Google continua recomendando fundamentos de SEO para que conteúdo seja descoberto e compreendido e afirma que essas boas práticas permanecem relevantes também para recursos de IA na Pesquisa. Search Intelligence usa essa base e adiciona coordenação entre disciplinas, sinais e objetivos de negócio." },
      { type: "paragraph", text: "SEO continua cuidando de problemas reais: rastreamento, indexação, arquitetura, conteúdo, links, performance e representação. O que muda é que nem todo problema de visibilidade pode ser resolvido olhando apenas para o domínio ou para rankings." },

      { type: "heading", text: "A entidade importa porque o site não é a única fonte de interpretação" },
      { type: "paragraph", text: "Uma empresa é descrita pelo próprio site, mas também por perfis, fundadores, especialistas, avaliações, matérias, diretórios, parceiros, redes, bases públicas e outras fontes. Quando esses sinais entram em conflito, a interpretação da marca se torna menos precisa." },
      { type: "paragraph", text: "Por isso Search Intelligence observa a organização como entidade, não apenas como domínio. O site continua sendo a principal fonte controlada pela empresa, mas precisa se conectar de forma coerente às evidências que existem fora dele." },

      { type: "heading", text: "Onde entram GEO e AI Search" },
      { type: "paragraph", text: "GEO é um termo de mercado usado para descrever esforços de preparação para mecanismos generativos. Na prática da AUDITSEO, ele é tratado como parte de Search Intelligence, porque os fundamentos continuam passando por acesso, conteúdo útil, contexto, fontes, autoridade e capacidade de recuperação." },
      { type: "paragraph", text: "Isso também ajuda a evitar hype. O Google informa que não existem requisitos adicionais ou otimizações especiais obrigatórias para aparecer em AI Overviews ou AI Mode além das boas práticas relevantes de SEO. A OpenAI, por sua vez, informa que permitir o OAI-SearchBot é importante para elegibilidade na busca do ChatGPT, mas não garante posicionamento." },

      { type: "heading", text: "O que muda no planejamento de conteúdo" },
      { type: "paragraph", text: "Conteúdo deixa de ser um calendário de palavras-chave e passa a ser parte de um grafo de intenção e entidade. Cada página precisa ter uma pergunta central, uma função na jornada, entidades explícitas, relação com serviços e uma razão para existir que vá além de captar tráfego." },
      { type: "paragraph", text: "Isso é compatível com a orientação pública do Google para conteúdo útil: originalidade, profundidade, autoria clara, experiência demonstrável, propósito principal do site e valor que vai além de resumir outras fontes." },

      { type: "heading", text: "Quando uma empresa precisa de Search Intelligence" },
      { type: "list", items: [
        "quando existem muitas ações de marketing, mas pouca clareza sobre o gargalo orgânico",
        "quando SEO, conteúdo, reputação e desenvolvimento trabalham sem um roadmap único",
        "quando a empresa tem experiência real, mas não é reconhecida nos temas em que atua",
        "quando o tráfego estagnou e repetir a rotina não cria novas frentes de crescimento",
        "quando existe pressão para 'fazer GEO', mas ninguém definiu baseline, perguntas ou critérios de medição",
        "quando o negócio precisa ligar visibilidade a leads, reuniões e receita em vez de avaliar apenas posição e sessões",
      ] },

      { type: "heading", text: "Como a AUDITSEO aplica isso" },
      { type: "paragraph", text: "O método S.I.G.N.A.L. transforma a disciplina em operação: Search Diagnosis, Intent Mapping, Generative Search Readiness, Narrative & Entity Authority, Action Roadmap e Learning Loop. O valor não está na sigla em si, mas na disciplina de registrar diagnóstico, hipótese, prioridade, responsável, evidência e aprendizado." },
      { type: "paragraph", text: "Search Intelligence, portanto, não é uma promessa de controlar Google ou IA. É um sistema para reduzir decisões fragmentadas e aumentar a capacidade da empresa de construir presença de busca com método." },
    ],
    sources: [
      { label: "Google Search Central — Creating helpful, reliable, people-first content", url: googleHelpful, note: "Critérios públicos sobre originalidade, autoria, experiência, propósito e conteúdo people-first." },
      { label: "Google Search Central — AI features and your website", url: googleAi, note: "O Google afirma que boas práticas de SEO continuam relevantes e que não há requisitos especiais adicionais para AI Overviews/AI Mode." },
      { label: "OpenAI — Busca do ChatGPT", url: openAiSearch, note: "Documentação pública sobre busca, citações e elegibilidade de sites." },
    ],
    relatedServices: [["Generative Search Readiness", "/solucoes/geo-ia-readiness"], ["Entity Authority", "/solucoes/autoridade-de-entidade"], ["Organic Evolution Cycle", "/solucoes/evolucao-organica"]],
  },

  "autoridade-de-entidade-o-que-e": {
    slug: "autoridade-de-entidade-o-que-e",
    title: "Autoridade de entidade: o que é, o que não é e como fortalecer sinais verificáveis",
    metaTitle: "Autoridade de Entidade: Guia Prático para Busca e IA | AUDITSEO",
    description:
      "Entenda autoridade de entidade sem hype: identidade, especialistas, serviços, provas, consistência, structured data e fontes externas para busca e AI Search.",
    eyebrow: "ENTIDADE E CONFIANÇA",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "12 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Autoridade de entidade é o termo que usamos para descrever a força e a consistência dos sinais que permitem verificar quem é uma organização ou pessoa, em quais temas ela atua e quais evidências sustentam sua legitimidade. Não é um único fator de ranking oficial nem algo criado apenas com schema: envolve conteúdo, autoria, reputação, provas, relações e fontes internas e externas.",
    takeaways: [
      "Entidade é uma identidade interpretável; autoridade exige evidência, não apenas declaração.",
      "Structured data ajuda a explicitar informação, mas não cria reputação nem prova experiência.",
      "Pessoas e especialistas precisam estar conectados à organização e aos conteúdos que assinam.",
      "Consistência entre site e fontes externas reduz ambiguidade.",
      "Não existe garantia de Knowledge Panel, ranking ou citação por IA como resultado automático desse trabalho.",
    ],
    blocks: [
      { type: "heading", text: "Primeiro: 'autoridade de entidade' não é um botão do Google" },
      { type: "paragraph", text: "É importante separar linguagem de mercado de documentação oficial. O Google documenta structured data para organizações e páginas de perfil, incentiva autoria clara e descreve confiança como parte importante da avaliação de qualidade. Isso não significa que exista uma métrica pública chamada 'Entity Authority Score' controlando ranking." },
      { type: "paragraph", text: "Na AUDITSEO, o termo funciona como modelo operacional para organizar identidade, contexto e evidência. Ele ajuda a transformar um problema abstrato — 'a marca não é reconhecida' — em um conjunto auditável de sinais." },

      { type: "heading", text: "Quais componentes formam uma entidade empresarial clara?" },
      { type: "list", items: [
        "identidade oficial: nome, domínio, marca e descrição coerente",
        "categoria e oferta: o que a organização faz e em quais mercados atua",
        "pessoas: fundadores, especialistas, autores, executivos e profissionais relevantes",
        "serviços e produtos: páginas canônicas que explicam cada oferta importante",
        "localização e área de atuação quando isso participa da decisão",
        "provas: cases, números, certificações, metodologia, pesquisas, avaliações e resultados verificáveis",
        "relações externas: parceiros, matérias, perfis, diretórios e fontes independentes legítimas",
      ] },

      { type: "heading", text: "Qual é o papel do structured data?" },
      { type: "paragraph", text: "O Google oferece documentação específica para Organization structured data e ProfilePage. Esses formatos podem ajudar a representar informações de organização e pessoa de forma estruturada, desde que o markup corresponda ao conteúdo visível e à realidade da página." },
      { type: "paragraph", text: "O erro comum é confundir representação com autoridade. Declarar `sameAs`, fundador, cargo ou serviço não torna a afirmação verdadeira nem faz uma plataforma confiar nela. Structured data funciona melhor quando formaliza uma realidade que também é demonstrada pelo conteúdo e por outras fontes." },

      { type: "heading", text: "Autoria e especialistas fazem parte da arquitetura" },
      { type: "paragraph", text: "A documentação do Google sobre conteúdo útil recomenda deixar claro quem criou o conteúdo, usar bylines quando esperado e permitir que o leitor encontre informações adicionais sobre o autor. Isso é importante porque confiança não deve depender de um texto anônimo que afirma possuir experiência." },
      { type: "paragraph", text: "Para empresas intensivas em conhecimento, páginas de autores e especialistas não deveriam ser apenas bios institucionais. Elas podem funcionar como hubs conectando experiência, áreas de atuação, artigos, serviços, pesquisas e evidências." },

      { type: "heading", text: "O que são provas de autoridade?" },
      { type: "paragraph", text: "Prova é aquilo que reduz a distância entre uma afirmação e sua verificabilidade. Uma empresa dizer que é especialista tem valor limitado. Publicar metodologia, estudos, dados próprios, histórico profissional, cases documentados, fontes e trabalhos assinados oferece mais contexto para pessoas e sistemas avaliarem a afirmação." },
      { type: "list", items: [
        "pesquisa proprietária com metodologia publicada",
        "cases com cenário, intervenção e resultado claramente delimitados",
        "autoria de especialistas com histórico verificável",
        "avaliações e reputação em ambientes pertinentes ao negócio",
        "menções e referências editoriais legítimas",
        "documentação técnica e materiais originais que terceiros tenham motivo para citar",
      ] },

      { type: "heading", text: "Consistência não significa repetir a mesma descrição em todos os lugares" },
      { type: "paragraph", text: "Consistência significa evitar conflitos sobre fatos centrais. Um perfil pode ser curto e uma página institucional longa, mas ambos deveriam concordar sobre nome, serviços, localização, especialistas e identidade. A repetição artificial de textos idênticos não é o objetivo." },

      { type: "heading", text: "Autoridade de entidade e IA" },
      { type: "paragraph", text: "Sistemas generativos podem usar busca, índices, fontes externas e mecanismos próprios de recuperação. Tornar uma entidade clara e verificável melhora a qualidade da informação disponível, mas não oferece controle sobre quais fontes um modelo usará ou qual empresa será recomendada." },
      { type: "callout", title: "Regra da AUDITSEO", text: "Não tratamos autoridade de entidade como promessa de 'ensinar uma IA a recomendar sua marca'. O trabalho é organizar sinais reais e medir como a representação da empresa muda ao longo do tempo." },

      { type: "heading", text: "Checklist de uma Entity Home" },
      { type: "list", items: [
        "definição direta de quem é a organização",
        "serviços e mercados claramente relacionados",
        "fundador e especialistas com páginas próprias quando relevante",
        "links para provas, estudos, cases e políticas editoriais",
        "dados de contato e identificação consistentes",
        "structured data compatível com o conteúdo visível",
        "links para perfis oficiais realmente mantidos pela organização",
        "data e responsabilidade editorial em conteúdos de conhecimento",
      ] },
    ],
    sources: [
      { label: "Google Search Central — Organization structured data", url: googleOrganization, note: "Documentação oficial sobre representação estruturada de organizações." },
      { label: "Google Search Central — ProfilePage structured data", url: googleProfile, note: "Documentação oficial para páginas cujo foco principal é uma pessoa ou organização." },
      { label: "Google Search Central — Creating helpful, reliable, people-first content", url: googleHelpful, note: "Orientação sobre autoria, expertise, sourcing e confiança." },
    ],
    relatedServices: [["Entity Authority", "/solucoes/autoridade-de-entidade"], ["Intent Content Architecture", "/solucoes/conteudo-por-intencao"], ["Generative Search Readiness", "/solucoes/geo-ia-readiness"]],
  },

  "geo-o-que-e-o-que-nao-garante": {
    slug: "geo-o-que-e-o-que-nao-garante",
    title: "GEO: o que é, o que realmente muda e o que nenhuma consultoria deveria garantir",
    metaTitle: "GEO: O que é e o que não garante em AI Search | AUDITSEO",
    description:
      "Guia sem hype sobre Generative Engine Optimization: relação com SEO, AI Overviews, ChatGPT Search, crawlers, conteúdo, fontes e limites de controle.",
    eyebrow: "GEO SEM HYPE",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "13 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "GEO (Generative Engine Optimization) é um termo de mercado usado para agrupar práticas que buscam tornar conteúdo e entidades mais recuperáveis, compreensíveis e citáveis em experiências de busca generativa. Ele não substitui SEO e não oferece garantia de aparecer no ChatGPT, Gemini, AI Overviews ou qualquer outra plataforma.",
    takeaways: [
      "O Google afirma que as boas práticas de SEO continuam válidas para AI Overviews e AI Mode e que não há requisitos especiais adicionais.",
      "A OpenAI informa que OAI-SearchBot precisa ter acesso para que conteúdo possa ser incluído em resumos/snippets da busca do ChatGPT; isso não garante posição.",
      "GEO útil começa em crawl/indexação, conteúdo, entidade, fontes e confiança — não em truques para modelos.",
      "Medição precisa usar prompts fixos, datas e contexto, porque respostas generativas variam.",
      "Manipular respostas de IA generativa na Pesquisa Google pode cair nas políticas de spam do Google.",
    ],
    blocks: [
      { type: "heading", text: "Por que o termo GEO ganhou força" },
      { type: "paragraph", text: "A busca deixou de ser apresentada apenas como dez links azuis. Google AI Overviews, AI Mode, ChatGPT Search e outras interfaces podem resumir informações, sugerir fontes e responder diretamente a perguntas. Isso criou uma demanda legítima: entender como marcas e conteúdos aparecem nessas experiências." },
      { type: "paragraph", text: "O problema começa quando a mudança de interface é vendida como se tivesse apagado todos os fundamentos anteriores. A documentação pública das próprias plataformas indica uma realidade mais sóbria." },

      { type: "heading", text: "O que o Google diz sobre otimização para recursos de IA" },
      { type: "paragraph", text: "Na documentação para proprietários de sites, o Google afirma que as práticas recomendadas de SEO continuam relevantes para AI Overviews e AI Mode e que não há requisitos adicionais nem 'otimizações especiais' necessárias para aparecer nessas experiências." },
      { type: "paragraph", text: "Isso não significa que nada mudou. Significa que criar uma lista paralela de hacks para 'SEO de IA' sem resolver rastreamento, conteúdo, relevância e qualidade é uma inversão de prioridade." },

      { type: "heading", text: "O que a OpenAI diz sobre ChatGPT Search" },
      { type: "paragraph", text: "A OpenAI informa que a busca do ChatGPT pode citar fontes e que sites públicos podem aparecer nos resultados. Para ajudar o conteúdo a ser descoberto e incluído em resumos e snippets, o publisher deve permitir o OAI-SearchBot. A própria documentação ressalta que posicionamento não é garantido." },
      { type: "paragraph", text: "A OpenAI também separa OAI-SearchBot de GPTBot. O primeiro está relacionado à descoberta para busca; GPTBot é o user-agent associado a possível uso para treinamento. Essa distinção é importante para políticas de robots conscientes." },

      { type: "heading", text: "Então o que faz sentido chamar de GEO?" },
      { type: "list", items: [
        "garantir que mecanismos relevantes possam acessar o conteúdo que deveria ser público",
        "estruturar páginas com respostas claras e informação verificável",
        "reduzir ambiguidade sobre organização, especialistas, serviços e contexto",
        "publicar conteúdo original e fontes que realmente acrescentem algo ao ecossistema",
        "fortalecer evidências e menções externas legítimas",
        "medir como a marca aparece em um conjunto de prompts representativo do negócio",
        "comparar fontes citadas, concorrentes e contexto em vez de olhar apenas para presença binária",
      ] },

      { type: "heading", text: "O que GEO não deveria prometer" },
      { type: "list", items: [
        "garantia de aparecer no ChatGPT",
        "garantia de entrar em AI Overviews",
        "controle sobre a redação da resposta de um modelo",
        "posição estável em uma resposta generativa",
        "que schema, FAQ ou llms.txt isoladamente criarão autoridade",
        "que produzir centenas de artigos com IA fará a marca ser citada",
      ] },
      { type: "paragraph", text: "Essas promessas confundem elegibilidade com seleção e presença com controle. Sistemas generativos mudam, usam diferentes fontes e podem responder de maneiras diferentes ao mesmo prompt." },

      { type: "heading", text: "A linha entre otimização e manipulação" },
      { type: "paragraph", text: "O Google atualizou suas políticas de spam para deixar explícito que técnicas destinadas a manipular respostas de IA generativa na Pesquisa também podem ser consideradas spam. A mesma página trata como abuso de conteúdo em escala a criação de grandes volumes de conteúdo não original e de pouco valor, inclusive quando IA generativa é usada para isso." },
      { type: "callout", title: "Princípio editorial", text: "A melhor defesa contra 'GEO spam' é simples: produzir informação que teria valor mesmo se não existisse nenhuma IA para citá-la." },

      { type: "heading", text: "Como medir GEO de forma responsável" },
      { type: "paragraph", text: "Uma medição útil precisa congelar parte do experimento. Defina prompts, intenção, idioma, localização quando relevante, plataforma, data e método de coleta. Depois registre menção, citação, posição relativa, fontes e contexto." },
      { type: "paragraph", text: "O objetivo não é transformar uma amostra pequena em verdade universal. É construir um baseline replicável para observar mudanças e formular hipóteses." },

      { type: "heading", text: "GEO dentro de Search Intelligence" },
      { type: "paragraph", text: "Na AUDITSEO, GEO é tratado como Generative Search Readiness: uma camada do sistema de busca. O diagnóstico continua começando por crawl, indexação, intenção, conteúdo, entidade e evidência. Depois medimos como essas bases estão se refletindo nas novas interfaces." },
    ],
    sources: [
      { label: "Google Search Central — AI features and your website", url: googleAi, note: "Boas práticas de SEO continuam relevantes; sem requisitos especiais adicionais para AI Overviews/AI Mode." },
      { label: "OpenAI — Editores e desenvolvedores — FAQ", url: openAiPublishers, note: "OAI-SearchBot, GPTBot, descoberta e rastreamento para publishers." },
      { label: "OpenAI — Busca do ChatGPT", url: openAiSearch, note: "Busca, fontes, citações, elegibilidade e ausência de garantia de posicionamento." },
      { label: "Google Search Central — Spam policies", url: googleSpam, note: "Políticas sobre manipulação, abuso de conteúdo em escala e IA generativa." },
    ],
    relatedServices: [["Generative Search Readiness", "/solucoes/geo-ia-readiness"], ["Entity Authority", "/solucoes/autoridade-de-entidade"], ["Intent Content Architecture", "/solucoes/conteudo-por-intencao"]],
  },

  "como-ias-encontram-e-citam-fontes": {
    slug: "como-ias-encontram-e-citam-fontes",
    title: "Como ChatGPT e Google com IA encontram fontes: crawl, recuperação, elegibilidade e citação",
    metaTitle: "Como ChatGPT e Google IA Encontram e Citam Fontes | AUDITSEO",
    description:
      "Entenda o que é documentado sobre OAI-SearchBot, GPTBot, Googlebot, AI Overviews, robots.txt, indexação, recuperação e por que citação nunca é garantida.",
    eyebrow: "AI SEARCH TÉCNICO",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "14 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Não existe um único processo universal de 'como uma IA encontra fontes'. ChatGPT Search e os recursos de IA do Google possuem arquiteturas e políticas próprias. O que pode ser documentado com segurança é que acesso do crawler, elegibilidade, recuperação e seleção de fonte são etapas diferentes — e permitir rastreamento não garante citação.",
    takeaways: [
      "robots.txt controla acesso de crawlers específicos, não 'visibilidade em IA' como um todo.",
      "OAI-SearchBot e GPTBot têm funções distintas segundo a OpenAI.",
      "Google AI Overviews/AI Mode fazem parte do ecossistema de Search e seguem fundamentos de SEO já documentados.",
      "Uma URL pode ser rastreável e ainda não ser recuperada ou escolhida como fonte.",
      "Para ser citável, conteúdo precisa combinar acesso, relevância, clareza, valor e verificabilidade.",
    ],
    blocks: [
      { type: "heading", text: "1. Crawl não é citação" },
      { type: "paragraph", text: "Crawling é acesso automatizado a URLs. É uma condição importante para muitos fluxos de descoberta, mas não diz que a página será indexada, recuperada para uma pergunta ou usada como fonte." },
      { type: "paragraph", text: "O robots.txt é uma política de acesso. Na documentação do Google, crawlers baixam e interpretam o arquivo antes de rastrear o site. As regras valem por host, protocolo e porta. O efeito exato depende do user-agent e da plataforma." },

      { type: "heading", text: "2. OAI-SearchBot e GPTBot não são a mesma coisa" },
      { type: "paragraph", text: "A OpenAI orienta publishers a permitir OAI-SearchBot quando desejam que conteúdo possa ser descoberto e incluído em resumos e snippets da busca do ChatGPT. Em documentação separada no mesmo FAQ, GPTBot é o user-agent que publishers podem bloquear quando não desejam que determinadas páginas sejam usadas para potencial treinamento." },
      { type: "callout", title: "Implicação prática", text: "Uma política de robots para OpenAI deveria ser decidida por objetivo. Bloquear ou permitir todos os bots sem distinguir função pode produzir um resultado diferente do que a empresa realmente quer." },

      { type: "heading", text: "3. ChatGPT Search pode usar busca e citar fontes" },
      { type: "paragraph", text: "A documentação da OpenAI explica que a busca pode usar informações atuais da web, trabalhar com provedores de busca, reescrever consultas e apresentar citações e painel de fontes. Também informa que sites públicos podem aparecer e que placement não é garantido." },
      { type: "paragraph", text: "Isso mostra por que a discussão não pode ser reduzida a 'o modelo conhece minha marca?'. Em experiências com busca, existe uma etapa de recuperação de informação atual que pode selecionar fontes da web." },

      { type: "heading", text: "4. Google AI Overviews e AI Mode continuam ligados aos fundamentos de Search" },
      { type: "paragraph", text: "O Google afirma que as melhores práticas de SEO continuam relevantes para recursos de IA da Pesquisa e que não existem requisitos adicionais especiais para aparecer nessas experiências. Portanto, criar uma estratégia separada que ignore indexabilidade, conteúdo útil e arquitetura é difícil de justificar pela documentação oficial." },

      { type: "heading", text: "5. Retrieve: a etapa esquecida entre indexação e citação" },
      { type: "paragraph", text: "Mesmo quando uma página está disponível, ela precisa ser considerada relevante para a pergunta atual. É nessa camada que intenção, linguagem, entidade, contexto e cobertura temática se tornam decisivos para a estratégia." },
      { type: "paragraph", text: "Uma página pode falar sobre um assunto sem responder a pergunta que o sistema está tentando resolver. Pode também usar linguagem ambígua, esconder a resposta em excesso de texto ou não oferecer detalhes capazes de diferenciá-la de dezenas de fontes equivalentes." },

      { type: "heading", text: "6. O que torna um conteúdo mais citável?" },
      { type: "paragraph", text: "Não existe uma fórmula pública de 'citation score'. Mas podemos trabalhar com propriedades editoriais defensáveis: precisão, resposta direta, autoria, fonte, originalidade, dados, contexto, atualização e estrutura clara." },
      { type: "list", items: [
        "uma afirmação central que possa ser identificada rapidamente",
        "definições explícitas e entidades nomeadas sem ambiguidade",
        "dados ou observações originais com metodologia disponível",
        "autoria e responsabilidade editorial",
        "fontes primárias para afirmações externas",
        "datas e atualização quando o tema muda com frequência",
        "links internos que conectam conceito, serviço, pessoa e evidência",
      ] },

      { type: "heading", text: "7. Como auditar acesso sem confundir bots" },
      { type: "list", items: [
        "listar user-agents relevantes para os objetivos da empresa",
        "revisar robots.txt e regras específicas por bot",
        "confirmar se CDN/WAF não bloqueia IPs documentados pela plataforma",
        "verificar status HTTP, canonical e noindex nas páginas estratégicas",
        "monitorar logs quando houver acesso ao servidor",
        "separar bot de busca, bot de treinamento e agentes acionados por usuário quando a plataforma documentar essa diferença",
      ] },

      { type: "heading", text: "8. A cadeia completa" },
      { type: "paragraph", text: "Para fins de diagnóstico, a AUDITSEO usa a sequência Crawl → Index/eligibility → Retrieve → Understand → Trust → Citability. É uma forma de organizar perguntas técnicas e editoriais, não uma descrição oficial do pipeline interno de Google ou OpenAI." },
      { type: "paragraph", text: "Essa distinção é essencial. O objetivo de um framework é melhorar nossas decisões sem fingir acesso a mecanismos proprietários que as plataformas não publicam." },
    ],
    sources: [
      { label: "OpenAI — Editores e desenvolvedores — FAQ", url: openAiPublishers, note: "Diretrizes para OAI-SearchBot, GPTBot e publishers." },
      { label: "OpenAI — Busca do ChatGPT", url: openAiSearch, note: "Descrição da busca na web, fontes, citações e elegibilidade." },
      { label: "Google Crawling Infrastructure — robots.txt specification", url: googleRobots, note: "Como o Google interpreta regras de robots.txt." },
      { label: "Google Search Central — AI features and your website", url: googleAi, note: "Relação entre fundamentos de SEO e AI Overviews/AI Mode." },
    ],
    relatedServices: [["Generative Search Readiness", "/solucoes/geo-ia-readiness"], ["Search Foundation", "/solucoes/projetos-comecando-do-zero"], ["Entity Authority", "/solucoes/autoridade-de-entidade"]],
  },
};

export const articleList = Object.values(articles);
