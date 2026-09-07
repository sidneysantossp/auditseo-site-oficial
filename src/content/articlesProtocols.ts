import type { Article } from "./articles";

const googleSeoStarter = "https://developers.google.com/search/docs/fundamentals/seo-starter-guide";
const googleHelpful = "https://developers.google.com/search/docs/fundamentals/creating-helpful-content";
const googleAi = "https://developers.google.com/search/docs/appearance/ai-features";
const openAiSearch = "https://help.openai.com/pt-br/articles/9237897-chatgpt-search";
const openAiPublishers = "https://help.openai.com/pt-br/articles/12627856-publishers-and-developers-faq";

export const protocolArticles: Record<string, Article> = {
  "como-criar-conteudo-citavel": {
    slug: "como-criar-conteudo-citavel",
    title: "Como criar conteúdo citável: o que transforma uma página em fonte, e não apenas em mais um resultado",
    metaTitle: "Como Criar Conteúdo Citável para Busca e IA | AUDITSEO",
    description:
      "Framework prático para criar conteúdo citável: resposta direta, especificidade, evidência, autoria, fontes, dados originais, estrutura e verificabilidade sem prometer citação em IA.",
    eyebrow: "CITABILITY FRAMEWORK",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "14 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Conteúdo citável é conteúdo que pode ser usado como fonte porque oferece uma resposta clara, específica, verificável e atribuível. Na metodologia da AUDITSEO, citabilidade não é um fator oficial publicado por Google ou OpenAI e não garante citação. É um critério editorial para reduzir a substituibilidade de uma página: quanto mais fácil for identificar o que ela afirma, de onde vem a evidência, quem responde pelo conteúdo e o que existe ali de original, maior sua utilidade como referência.",
    takeaways: [
      "Citabilidade é uma propriedade editorial que a AUDITSEO usa para avaliar se uma página funciona como fonte; não é uma métrica oficial das plataformas.",
      "Uma resposta clara perto do início ajuda pessoas a entender rapidamente o valor da página, mas não substitui profundidade.",
      "Claims importantes precisam de evidência, contexto e atribuição.",
      "Dados, métodos, comparações e exemplos próprios tornam o conteúdo menos commodity quando realmente adicionam informação.",
      "Autoria, atualização e fontes primárias aumentam verificabilidade, mas não criam garantia de ranking ou citação.",
    ],
    blocks: [
      { type: "heading", text: "O que significa 'citável' na metodologia da AUDITSEO" },
      { type: "paragraph", text: "A maior parte do conteúdo publicado na web pode ser resumida sem que a fonte original seja necessária. Se dez páginas dizem exatamente a mesma coisa, sem dados, método, exemplo ou autoria diferenciada, qualquer uma pode ser substituída pela outra." },
      { type: "paragraph", text: "A AUDITSEO chama de citável o conteúdo que possui informação suficientemente clara, específica e verificável para funcionar como referência em uma pesquisa, comparação, decisão ou resposta. Esse conceito é um framework editorial próprio; não deve ser apresentado como um fator oficial de ranking ou seleção de fontes." },

      { type: "heading", text: "1. Responda a pergunta antes de exigir que o leitor atravesse a página" },
      { type: "paragraph", text: "Uma página de referência deve tornar sua proposição central identificável rapidamente. Isso não significa escrever conteúdo raso ou transformar tudo em snippet. Significa declarar com precisão o que a página responde e depois demonstrar por que aquela resposta é defensável." },
      { type: "list", items: [
        "qual é a pergunta central?",
        "qual é a resposta em linguagem direta?",
        "quais limites ou condições mudam essa resposta?",
        "qual parte é evidência externa e qual parte é interpretação própria?",
      ] },

      { type: "heading", text: "2. Reduza claims genéricos e aumente informação específica" },
      { type: "paragraph", text: "Frases como 'conteúdo de qualidade gera autoridade' têm pouca utilidade isoladamente. Uma fonte forte explica qual problema está sendo observado, como ele foi medido, em qual contexto e o que exatamente deve ser feito ou concluído." },
      { type: "paragraph", text: "O Google recomenda conteúdo útil, confiável e feito prioritariamente para pessoas, com sinais claros de experiência, sourcing e autoria quando apropriado. Esse princípio combina com uma regra simples: se uma afirmação relevante poderia ser copiada para qualquer site do setor sem mudar seu sentido, provavelmente ainda está genérica demais." },

      { type: "heading", text: "3. Separe quatro camadas: fato, evidência, interpretação e recomendação" },
      { type: "list", items: [
        "Fato: algo diretamente observável ou documentado.",
        "Evidência: a fonte, dado, teste ou registro que sustenta o fato.",
        "Interpretação: o que a AUDITSEO conclui a partir daquele conjunto de sinais.",
        "Recomendação: a ação sugerida para um cenário específico.",
      ] },
      { type: "paragraph", text: "Misturar essas camadas cria textos que parecem mais certos do que realmente são. Separá-las permite que o leitor audite o raciocínio e reduz o risco de transformar opinião em suposta regra de plataforma." },

      { type: "heading", text: "4. Priorize fontes primárias para claims sobre plataformas" },
      { type: "paragraph", text: "Se uma afirmação descreve como Google Search ou ChatGPT Search funcionam, a primeira referência deve ser a documentação oficial quando ela existir. Estudos de terceiros podem ampliar a leitura, mas não devem substituir uma fonte primária para dizer o que a própria plataforma declara." },
      { type: "callout", title: "Regra editorial AUDITSEO", text: "Documentação oficial explica o que a plataforma declara. Experimentos próprios mostram o que observamos. Estudos de terceiros ajudam a comparar hipóteses. Essas três categorias não devem ser apresentadas como se tivessem o mesmo peso." },

      { type: "heading", text: "5. Crie informação que não existia antes da publicação" },
      { type: "paragraph", text: "A maneira mais forte de reduzir commodity é adicionar informação original. Isso pode vir de um teste reproduzível, uma análise de dataset, um checklist criado a partir de casos reais, uma comparação estruturada, uma metodologia própria ou uma síntese que reorganiza evidências de forma útil." },
      { type: "list", items: [
        "dados proprietários com amostra e método publicados",
        "experimentos com data, ambiente e limitações",
        "frameworks identificados como frameworks da empresa",
        "templates e checklists realmente utilizáveis",
        "exemplos anonimizados com contexto suficiente",
        "comparações que usam critérios explícitos e repetíveis",
      ] },

      { type: "heading", text: "6. Faça autoria significar responsabilidade" },
      { type: "paragraph", text: "Assinar uma página com um nome não é suficiente se o leitor não consegue saber quem é a pessoa, por que ela é adequada para responder aquele tema e quais outros trabalhos sustentam sua experiência. A autoria precisa se conectar a uma Entity Home do especialista e a um histórico coerente de conteúdo." },

      { type: "heading", text: "7. Atualização precisa ser consequência de mudança, não decoração" },
      { type: "paragraph", text: "Alterar a data sem revisar o conteúdo não aumenta a qualidade da fonte. Uma política editorial madura registra data de publicação e atualização e revisa documentos quando a documentação oficial, o produto analisado ou a evidência utilizada realmente muda." },

      { type: "heading", text: "8. Garanta que a página possa ser encontrada e recuperada" },
      { type: "paragraph", text: "Mesmo um excelente documento perde utilidade se está bloqueado, duplicado, sem links internos, com canonical incorreto ou indisponível no HTML que os sistemas conseguem acessar. Citabilidade depende de uma fundação anterior de descoberta e recuperação." },
      { type: "paragraph", text: "O Google afirma que boas práticas tradicionais de SEO continuam relevantes para seus recursos de IA. A OpenAI, por sua vez, orienta publishers que desejam ser descobertos em ChatGPT Search a permitir acesso do OAI-SearchBot. Elegibilidade, porém, não equivale a garantia de seleção ou posição." },

      { type: "heading", text: "Checklist de citabilidade da AUDITSEO" },
      { type: "list", items: [
        "a pergunta central está explícita?",
        "existe resposta direta e defensável?",
        "claims relevantes possuem evidência ou fonte?",
        "fato, interpretação e recomendação estão separados?",
        "há algo original que não existia antes desta página?",
        "a autoria é verificável?",
        "a data de atualização é real?",
        "links internos conectam o documento às entidades e serviços relacionados?",
        "a URL é rastreável, indexável quando desejado e canônica?",
        "o conteúdo continua útil mesmo sem a promessa de ranking ou citação?",
      ] },
    ],
    sources: [
      { label: "Google Search Central — Creating helpful, reliable, people-first content", url: googleHelpful, note: "Orientações públicas sobre conteúdo útil, experiência, autoria, sourcing e confiança." },
      { label: "Google Search Central — AI features and your website", url: googleAi, note: "Contexto oficial sobre AI Overviews/AI Mode e continuidade das boas práticas de SEO." },
      { label: "OpenAI — Publishers and Developers FAQ", url: openAiPublishers, note: "Orientações atuais sobre descoberta, OAI-SearchBot, snippets/citações e referrals de ChatGPT Search." },
      { label: "OpenAI — Busca do ChatGPT", url: openAiSearch, note: "Documentação sobre busca na web e apresentação de fontes/citações." },
    ],
    relatedServices: [["Intent Content Architecture", "/solucoes/conteudo-por-intencao"], ["Entity Authority", "/solucoes/autoridade-de-entidade"], ["Generative Search Readiness", "/solucoes/geo-ia-readiness"]],
  },

  "framework-crawl-index-retrieve-understand-trust-cite": {
    slug: "framework-crawl-index-retrieve-understand-trust-cite",
    title: "Crawl → Index → Retrieve → Understand → Trust → Cite: o framework AUDITSEO para diagnosticar presença em busca",
    metaTitle: "Framework Crawl → Index → Retrieve → Understand → Trust → Cite | AUDITSEO",
    description:
      "Conheça o framework operacional da AUDITSEO para diagnosticar onde a presença digital quebra: crawl, index, retrieve, understand, trust e cite.",
    eyebrow: "FRAMEWORK AUDITSEO",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "16 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Crawl → Index → Retrieve → Understand → Trust → Cite é um framework de diagnóstico criado pela AUDITSEO para organizar dependências da presença em busca. Ele não é uma sequência oficial de fatores de ranking publicada por Google, OpenAI ou outra plataforma. Sua função é impedir que uma equipe tente resolver um problema de citação, autoridade ou conteúdo quando etapas anteriores — como acesso, indexação ou recuperação — ainda estão quebradas.",
    takeaways: [
      "O framework é uma ferramenta de diagnóstico da AUDITSEO, não um algoritmo de ranking.",
      "Cada etapa depende das anteriores, mas sistemas diferentes podem implementar descoberta e recuperação de formas distintas.",
      "A mesma página pode estar indexada e ainda assim não ser recuperada para as intenções que importam.",
      "Compreensão e confiança exigem sinais que vão além de tags técnicas isoladas.",
      "Citação é tratada como resultado observado e probabilístico, nunca como garantia controlável pela empresa.",
    ],
    blocks: [
      { type: "heading", text: "Por que um framework de dependências é útil" },
      { type: "paragraph", text: "Equipes frequentemente começam pela camada mais visível do problema. Se a marca não aparece em uma resposta de IA, tentam 'otimizar para IA'. Se uma página não ranqueia, publicam mais conteúdo. Se o tráfego cai, mudam titles. O risco é agir em uma camada posterior sem confirmar se a dependência anterior funciona." },
      { type: "paragraph", text: "O framework AUDITSEO organiza a investigação em seis perguntas. Ele não tenta descrever a implementação interna de cada mecanismo; serve para ordenar hipóteses e evidências." },

      { type: "heading", text: "1. Crawl — a informação pode ser acessada?" },
      { type: "paragraph", text: "A primeira camada verifica se a infraestrutura permite que o sistema relevante acesse a URL ou conteúdo pretendido. robots.txt, autenticação, CDN/WAF, status HTTP, renderização e disponibilidade entram aqui." },
      { type: "list", items: [
        "robots.txt e políticas por user-agent",
        "status 200/3xx/4xx/5xx",
        "bloqueios de WAF, bot management ou autenticação",
        "conteúdo disponível no HTML esperado",
        "logs de acesso quando disponíveis",
      ] },

      { type: "heading", text: "2. Index — a informação entra em uma base elegível para recuperação?" },
      { type: "paragraph", text: "Para mecanismos que mantêm índices próprios, acesso não significa indexação. No Google Search, por exemplo, canonicalização, noindex, qualidade, duplicação e outros fatores podem influenciar se uma URL é indexada. O diagnóstico separa claramente 'foi rastreado' de 'está indexado'." },
      { type: "paragraph", text: "Nem toda plataforma publica a mesma arquitetura de indexação. Quando não existe documentação pública suficiente, a AUDITSEO registra a limitação em vez de inferir uma implementação específica." },

      { type: "heading", text: "3. Retrieve — o sistema recupera esta fonte para a pergunta certa?" },
      { type: "paragraph", text: "Uma URL pode existir em um índice e ainda não aparecer para a intenção que importa. Retrieval é a etapa em que observamos se o documento entra no conjunto de fontes ou resultados considerados para uma consulta, tema ou prompt." },
      { type: "list", items: [
        "quais consultas recuperam a URL?",
        "quais prompts citam ou usam o domínio?",
        "quais concorrentes entram no conjunto enquanto a marca fica ausente?",
        "qual página do domínio é recuperada para cada intenção?",
      ] },

      { type: "heading", text: "4. Understand — fica claro o que a informação representa?" },
      { type: "paragraph", text: "Aqui avaliamos se o conteúdo deixa inequívocos entidade, serviço, contexto, autor, localização, relação com outras páginas e intenção. Structured data pode ajudar a declarar relações quando apropriado, mas não substitui conteúdo visível coerente." },
      { type: "list", items: [
        "quem é a organização ou pessoa?",
        "qual serviço, produto ou tema está sendo descrito?",
        "para qual público e problema aquela informação é relevante?",
        "como a página se relaciona com outras entidades e documentos do site?",
      ] },

      { type: "heading", text: "5. Trust — existem sinais para sustentar a afirmação?" },
      { type: "paragraph", text: "Trust não é tratado aqui como uma pontuação universal. É uma pergunta de verificabilidade: existem autoria, provas, fontes, reputação, consistência e evidências suficientes para que claims importantes possam ser avaliados?" },
      { type: "paragraph", text: "O Google recomenda conteúdo confiável, com experiência e sourcing claros quando apropriado. Para a AUDITSEO, isso se traduz em uma auditoria de evidência, não em tentativa de inventar um 'trust score do Google'." },

      { type: "heading", text: "6. Cite — a fonte é escolhida e apresentada como referência?" },
      { type: "paragraph", text: "Cite é a camada observável em que um domínio, URL ou documento aparece explicitamente como fonte em uma interface que apresenta citações. Uma página pode ser útil para uma resposta sem receber citação visível, e diferentes produtos podem apresentar fontes de maneiras diferentes." },
      { type: "paragraph", text: "Por isso a AUDITSEO mede Citation Rate apenas dentro de uma amostra de prompts, plataforma, data e método definidos. Não existe uma promessa de 'ser citado' como consequência automática das cinco etapas anteriores." },

      { type: "heading", text: "Como usar o framework em uma auditoria" },
      { type: "list", items: [
        "marque cada hipótese com a etapa mais antiga em que há evidência de falha",
        "não avance para uma solução de camada posterior enquanto a dependência anterior estiver sem evidência",
        "registre URL, consulta/prompt, data, plataforma e evidência observada",
        "separe problemas de propriedade controlada pelo cliente de resultados dependentes de terceiros",
        "transforme cada falha confirmada em ação, responsável e critério de validação",
      ] },

      { type: "heading", text: "Exemplo: marca não aparece para 'melhores consultorias de X'" },
      { type: "paragraph", text: "Em vez de concluir imediatamente que falta GEO, a auditoria pergunta em sequência: as páginas relevantes são acessíveis? Estão indexadas quando isso se aplica? São recuperadas para consultas equivalentes? A entidade e a oferta estão claras? Existem provas e fontes suficientes? Em benchmarks generativos, concorrentes são citados e a marca não? Cada resposta muda o próximo passo." },
      { type: "callout", title: "Princípio central", text: "O framework existe para descobrir onde a cadeia quebra. A solução correta é consequência do diagnóstico, não o ponto de partida." },
    ],
    sources: [
      { label: "Google Search Central — SEO Starter Guide", url: googleSeoStarter, note: "Fundamentos públicos de descoberta e compreensão de conteúdo em Search." },
      { label: "Google Search Central — Creating helpful, reliable, people-first content", url: googleHelpful, note: "Referência para utilidade, confiança, experiência, autoria e sourcing." },
      { label: "Google Search Central — AI features and your website", url: googleAi, note: "O Google mantém as boas práticas fundamentais de SEO como base para AI features." },
      { label: "OpenAI — Publishers and Developers FAQ", url: openAiPublishers, note: "Documentação sobre descoberta por OAI-SearchBot e condições para snippets/citações em ChatGPT Search." },
    ],
    relatedServices: [["Search Foundation", "/solucoes/projetos-comecando-do-zero"], ["Generative Search Readiness", "/solucoes/geo-ia-readiness"], ["Search Recovery", "/solucoes/recuperacao-organica"]],
  },

  "protocolo-benchmark-search-ai": {
    slug: "protocolo-benchmark-search-ai",
    title: "Protocolo AUDITSEO para benchmark de Search AI: como medir marcas sem fabricar precisão",
    metaTitle: "Protocolo de Benchmark Search AI | Metodologia AUDITSEO",
    description:
      "Metodologia AUDITSEO para benchmark de Search AI: seleção de prompts, repetição, coleta, menção, citação, contexto, fontes, versionamento e limitações.",
    eyebrow: "RESEARCH PROTOCOL",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "17 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "O protocolo AUDITSEO para benchmark de Search AI trata respostas generativas como uma amostra experimental variável. Antes da coleta, definimos universo de marcas, prompts, intenção, idioma, localização quando controlável, plataforma, condição de busca, número de repetições e regras de classificação. Depois registramos menções, citações, posição relativa, fontes, contexto e erros factuais. Todo resultado deve carregar amostra, data e método; percentuais sem essas informações não são tratados como métricas absolutas de mercado.",
    takeaways: [
      "O protocolo é uma metodologia de pesquisa da AUDITSEO, não um padrão oficial das plataformas.",
      "Prompts precisam ser definidos antes da coleta para reduzir cherry-picking.",
      "Menção, citação, recomendação e presença de fonte são eventos diferentes.",
      "Repetições ajudam a observar variabilidade, mas não eliminam mudanças de modelo ou contexto.",
      "Toda publicação de resultados deve expor amostra, data, regras de classificação e limitações.",
    ],
    blocks: [
      { type: "heading", text: "Por que publicar o protocolo antes do primeiro grande estudo" },
      { type: "paragraph", text: "Uma empresa que divulga um número como '73% de visibilidade em IA' sem explicar prompts, marcas, plataformas, datas e classificação produz uma aparência de precisão que o leitor não consegue auditar. A AUDITSEO quer inverter essa ordem: primeiro o método público; depois os resultados." },
      { type: "paragraph", text: "Isso também cria disciplina interna. Quando critérios são definidos antes da coleta, fica mais difícil ajustar o método apenas para produzir uma conclusão mais interessante." },

      { type: "heading", text: "1. Defina a pergunta de pesquisa" },
      { type: "paragraph", text: "Todo benchmark começa com uma pergunta operacional. Exemplos: 'quais marcas são mais mencionadas em prompts de comparação de softwares contábeis no Brasil?' ou 'quais domínios aparecem como fonte em perguntas sobre tratamento X?'. Sem uma pergunta clara, a coleta vira inventário de respostas sem conclusão útil." },

      { type: "heading", text: "2. Defina o universo antes de testar" },
      { type: "list", items: [
        "mercado e país",
        "categoria analisada",
        "lista de marcas e regra de inclusão",
        "tipos de intenção",
        "plataformas/produtos",
        "idioma",
        "período de coleta",
      ] },

      { type: "heading", text: "3. Construa prompts por intenção, não por conveniência" },
      { type: "paragraph", text: "A amostra precisa representar jornadas plausíveis. Uma divisão mínima pode incluir descoberta de categoria, problema, comparação, validação de marca, decisão e perguntas branded. Prompts criados apenas porque já sabemos que uma marca aparece neles distorcem o benchmark." },
      { type: "paragraph", text: "O texto exato de cada prompt recebe um identificador imutável dentro daquele ciclo. Alterar palavras significa criar uma nova versão, não sobrescrever silenciosamente a anterior." },

      { type: "heading", text: "4. Registre condições de coleta" },
      { type: "list", items: [
        "plataforma e produto utilizados",
        "data e horário",
        "idioma e mercado",
        "estado de login quando relevante ao método",
        "localização quando controlada ou inferida",
        "busca/web ativa quando observável",
        "número de repetições por prompt",
        "eventuais instruções adicionais usadas na sessão",
      ] },

      { type: "heading", text: "5. Defina o schema de classificação antes da coleta" },
      { type: "subheading", text: "Mention" },
      { type: "paragraph", text: "A marca aparece textualmente na resposta, independentemente de possuir link ou citação?" },
      { type: "subheading", text: "Citation" },
      { type: "paragraph", text: "Uma URL ou domínio ligado à marca aparece explicitamente como fonte/citação observável?" },
      { type: "subheading", text: "Recommendation" },
      { type: "paragraph", text: "A marca é apresentada como opção apropriada/recomendada para o cenário, em vez de apenas mencionada?" },
      { type: "subheading", text: "Source domain" },
      { type: "paragraph", text: "Quais domínios são usados como fontes: marca, imprensa, diretório, fórum, documento oficial ou outra categoria definida?" },
      { type: "subheading", text: "Context accuracy" },
      { type: "paragraph", text: "A descrição da marca está correta, incompleta, ambígua ou contém erro factual?" },

      { type: "heading", text: "6. Use repetição para observar instabilidade" },
      { type: "paragraph", text: "Quando a pergunta é prioritária, executar múltiplas repetições permite medir recorrência dentro daquela janela. Se uma marca aparece em uma de cinco execuções, isso é diferente de aparecer em cinco de cinco. O protocolo registra ambas as situações sem fingir que a resposta é deterministicamente estável." },

      { type: "heading", text: "7. Calcule métricas apenas dentro da amostra declarada" },
      { type: "list", items: [
        "Mention Rate = execuções da amostra com menção / execuções elegíveis",
        "Citation Rate = execuções com citação observável da marca / execuções elegíveis",
        "Recommendation Rate = execuções em que a marca é recomendada / execuções elegíveis",
        "Source Share = frequência relativa de domínios/fontes dentro das citações coletadas",
        "Competitive Share of Voice = presença relativa entre marcas na mesma amostra definida",
      ] },
      { type: "paragraph", text: "Os denominadores precisam acompanhar qualquer número publicado. Uma taxa sem amostra é apenas um percentual descontextualizado." },

      { type: "heading", text: "8. Versione o benchmark" },
      { type: "paragraph", text: "Cada ciclo recebe versão, data, prompts congelados e regras de classificação. Se a plataforma muda significativamente, a comparabilidade pode ser quebrada e isso deve ser registrado. O histórico não é sobrescrito." },

      { type: "heading", text: "9. Faça revisão humana dos casos ambíguos" },
      { type: "paragraph", text: "Automação ajuda a coletar e classificar grandes volumes, mas casos ambíguos precisam de regra de adjudicação. Um revisor deve conseguir abrir a resposta original, entender por que recebeu determinada classe e corrigir um erro sem apagar a trilha de auditoria." },

      { type: "heading", text: "10. Publique limitações junto com resultados" },
      { type: "list", items: [
        "respostas generativas são variáveis",
        "plataformas e modelos podem mudar durante ou depois da coleta",
        "localização, conta e contexto podem afetar respostas",
        "uma amostra de prompts não representa toda a demanda do mercado",
        "correlação temporal não prova que uma ação de SEO/GEO causou a mudança",
        "ausência de citação não significa necessariamente ausência total de influência da fonte",
      ] },

      { type: "heading", text: "Como esse protocolo se conecta ao futuro AUDITSEO Search AI Observatory" },
      { type: "paragraph", text: "O Observatory deve ser a implementação operacional deste protocolo: um conjunto versionado de mercados, marcas, prompts, respostas, fontes e classificações. Só depois de validar coleta, qualidade e reprodutibilidade faz sentido publicar um 'State of Search AI Brasil' com números proprietários." },
      { type: "callout", title: "Compromisso metodológico", text: "A AUDITSEO prefere publicar uma conclusão menor com método auditável do que um número impressionante que não possa ser reproduzido ou explicado." },
    ],
    sources: [
      { label: "OpenAI — Busca do ChatGPT", url: openAiSearch, note: "Documentação atual sobre busca na web, fontes e citações no ChatGPT." },
      { label: "OpenAI — Publishers and Developers FAQ", url: openAiPublishers, note: "Orientações atuais sobre descoberta, OAI-SearchBot e referral attribution." },
      { label: "Google Search Central — AI features and your website", url: googleAi, note: "Contexto oficial sobre recursos de IA no Google Search e continuidade dos fundamentos de SEO." },
      { label: "Google Search Central — Creating helpful, reliable, people-first content", url: googleHelpful, note: "Base para política editorial de conteúdo útil, confiável e verificável." },
    ],
    relatedServices: [["Generative Search Readiness", "/solucoes/geo-ia-readiness"], ["Organic Evolution Cycle", "/solucoes/evolucao-organica"], ["Entity Authority", "/solucoes/autoridade-de-entidade"]],
  },
};

export const protocolArticleList = Object.values(protocolArticles);
