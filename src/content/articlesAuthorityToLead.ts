import type { Article } from "./articles";

const openAiPublishers = "https://help.openai.com/pt-br/articles/12627856-publishers-and-developers-faq";
const openAiSearch = "https://help.openai.com/pt-br/articles/9237897-chatgpt-search";

export const authorityToLeadArticles: Record<string, Article> = {
  "como-ser-recomendado-pelo-chatgpt-como-fornecedor": {
    slug: "como-ser-recomendado-pelo-chatgpt-como-fornecedor",
    title: "Como fazer sua empresa entrar nas recomendações do ChatGPT quando alguém procura um fornecedor",
    metaTitle: "Como Ser Recomendado pelo ChatGPT como Fornecedor | AUDITSEO",
    description:
      "Entenda o que sua empresa precisa estruturar para aumentar a chance de entrar na consideração quando alguém pede ao ChatGPT fornecedores, especialistas ou empresas para um problema específico.",
    eyebrow: "RECOMENDAÇÃO COMERCIAL EM SEARCH AI",
    publishedAt: "2026-09-08",
    updatedAt: "2026-09-08",
    readTime: "16 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Não existe um cadastro ou uma fórmula pública que obrigue o ChatGPT a recomendar uma empresa como fornecedor. O que uma empresa pode controlar é a qualidade da sua presença pública: permitir descoberta quando quer ser elegível à busca, deixar claro que problema resolve e para quem, publicar evidências que sustentem essa especialização, reduzir inconsistências sobre a entidade, conquistar validação legítima fora do próprio site e medir repetidamente se a marca entra na consideração em prompts comerciais definidos antes do teste. Ser citada como fonte e ser recomendada como fornecedor são resultados diferentes — e precisam de estratégias e métricas diferentes.",
    takeaways: [
      "Citação de uma página e recomendação de uma empresa não são o mesmo evento.",
      "A OpenAI documenta elegibilidade, crawling, busca e citações, mas não publica uma fórmula de ranking de fornecedores nem garante posicionamento.",
      "Para entrar em uma shortlist comercial, a empresa precisa ser compreensível como entidade e como opção adequada para um contexto específico de compra.",
      "Páginas de serviço, conteúdo por problema, autoria, provas e fontes externas coerentes precisam contar a mesma história.",
      "A forma correta de medir recomendação é por amostra fixa de prompts comerciais, com repetição, data, plataforma e critérios de classificação explícitos.",
    ],
    blocks: [
      {
        type: "heading",
        text: "A pergunta mais valiosa não é 'o ChatGPT cita meu site?'",
      },
      {
        type: "paragraph",
        text: "Imagine um diretor perguntando: 'Encontre uma consultoria de SEO que entenda de inteligência artificial e possa aumentar a presença da minha empresa nas respostas de IA'. Nesse momento, o objetivo comercial não é apenas ter uma URL usada como fonte. O objetivo é a empresa entrar no conjunto de opções consideradas para a decisão.",
      },
      {
        type: "paragraph",
        text: "Essa distinção muda o trabalho. Um artigo pode ser excelente e ser citado para explicar um conceito sem que a empresa que o publicou seja recomendada como prestadora. Da mesma forma, uma marca pode ser mencionada como opção sem que o próprio domínio apareça entre as fontes citadas. Por isso, a AUDITSEO separa Source Visibility de Provider Consideration.",
      },
      {
        type: "callout",
        title: "Fonte ≠ fornecedor",
        text: "Uma resposta pode usar seu conteúdo como fonte e contratar outro fornecedor; também pode recomendar sua empresa usando fontes externas. Otimizar apenas para 'citação' deixa metade do problema de aquisição sem diagnóstico.",
      },

      {
        type: "heading",
        text: "O que a OpenAI realmente documenta — e o que ela não documenta",
      },
      {
        type: "paragraph",
        text: "A documentação atual da OpenAI afirma que qualquer site público pode aparecer na busca do ChatGPT e orienta sites que desejam ser encontrados, exibidos e citados a não bloquear o OAI-SearchBot. A documentação de Search também explica que o ChatGPT pode pesquisar a web, trabalhar com outros provedores de busca e reescrever uma consulta em uma ou mais consultas direcionadas.",
      },
      {
        type: "paragraph",
        text: "Isso sustenta auditorias de acesso, descoberta e recuperação. Mas a mesma documentação deixa claro que posicionamento não é garantido. Ela não publica uma tabela dizendo que avaliações valem X pontos, backlinks Y pontos ou schema Z pontos para decidir quais empresas devem ser recomendadas como fornecedores.",
      },
      {
        type: "callout",
        title: "Regra editorial da AUDITSEO",
        text: "Quando uma plataforma documenta algo, tratamos como fato de plataforma. Quando desenhamos um modelo operacional para diagnosticar o que pode ser melhorado, rotulamos como framework da AUDITSEO — nunca como algoritmo secreto da OpenAI.",
      },

      {
        type: "heading",
        text: "O framework de Consideração Comercial da AUDITSEO",
      },
      {
        type: "paragraph",
        text: "Para investigar por que uma empresa não entra em prompts de compra, usamos seis condições controláveis como estrutura de diagnóstico. Elas não são fatores oficiais do ChatGPT; são perguntas operacionais que ajudam a localizar gaps de presença, entendimento, prova e recuperação.",
      },
      {
        type: "list",
        items: [
          "Eligibility: o conteúdo público relevante está acessível aos mecanismos de busca/crawlers que a empresa deseja atender?",
          "Category clarity: o site deixa inequívoco o que a empresa faz, para quem faz e em quais situações ela é uma escolha plausível?",
          "Intent coverage: existem páginas que respondem às perguntas de decisão que um comprador realmente faria antes de contratar?",
          "Evidence: há casos, metodologia, autoria, experiência, entregáveis, dados ou outras provas públicas proporcionais às afirmações feitas?",
          "Entity consistency: organização, especialistas, serviços e descrições aparecem de forma coerente dentro e fora do domínio?",
          "Measurement: a empresa acompanha presença em um conjunto fixo de prompts comerciais em vez de testar só perguntas escolhidas depois de ver o resultado?",
        ],
      },

      {
        type: "heading",
        text: "1. Seja uma entidade fácil de classificar como opção para o problema",
      },
      {
        type: "paragraph",
        text: "Se o usuário pede 'uma agência de SEO para e-commerce', 'uma consultoria de SEO técnico' ou 'um especialista em SEO e IA', o sistema precisa encontrar informação pública suficiente para relacionar a empresa àquela categoria e ao contexto. Um posicionamento institucional genérico — 'transformamos negócios com inovação' — oferece pouca ajuda para essa tarefa.",
      },
      {
        type: "list",
        items: [
          "H1 e proposta que descrevem a categoria real da empresa, não apenas slogans",
          "páginas independentes para serviços e cenários importantes",
          "descrições claras de ICP, problema, escopo e não-escopo",
          "pessoa/autoria conectada à especialidade que a empresa reivindica",
          "terminologia consistente entre Home, serviços, autor e fontes externas relevantes",
        ],
      },
      {
        type: "paragraph",
        text: "O objetivo não é repetir palavras-chave. É reduzir ambiguidade sobre a relação entre entidade, especialidade, público e problema resolvido.",
      },

      {
        type: "heading",
        text: "2. Crie conteúdo para a pergunta que acontece antes da contratação",
      },
      {
        type: "paragraph",
        text: "Muitas empresas publicam artigos de topo de funil e deixam um vazio justamente nas perguntas que formam a shortlist. O comprador não pergunta apenas 'o que é SEO?'. Ele pergunta 'quem entende desse problema?', 'como eu avalio um fornecedor?', 'o que deve ser entregue?', 'por que meu concorrente aparece e eu não?' e 'como eu provo que isso está funcionando?'.",
      },
      {
        type: "paragraph",
        text: "É por isso que uma arquitetura editorial orientada a autoridade comercial precisa unir páginas de serviço a documentos de problema, comparação, método, prova e decisão. O artigo não substitui a landing page; ele cria a convicção que torna a landing page mais forte.",
      },
      {
        type: "list",
        items: [
          "problema: por que minha empresa não aparece quando alguém pede fornecedores à IA?",
          "método: como diagnosticar acesso, recuperação, entendimento, confiança e citabilidade?",
          "decisão: como escolher uma consultoria que saiba trabalhar SEO e Search AI sem promessas vazias?",
          "prova: quais resultados foram medidos, em qual período e com qual metodologia?",
          "aplicação: o que muda em um caso parecido com o meu?",
        ],
      },

      {
        type: "heading",
        text: "3. Demonstre especialização antes de pedir confiança",
      },
      {
        type: "paragraph",
        text: "A melhor página comercial não é a que diz mais vezes que a empresa é especialista. É a que permite verificar por que essa afirmação faz sentido. Isso pode incluir metodologia publicada, decisões técnicas explicadas, autoria consistente, casos reais, diagnósticos reproduzíveis, fontes primárias e limitações assumidas.",
      },
      {
        type: "paragraph",
        text: "Esse princípio também melhora conversão humana. Um prospect que chega após consumir uma explicação profunda tende a entrar na conversa comercial com perguntas sobre aplicação, não com dúvidas básicas sobre credibilidade.",
      },
      {
        type: "callout",
        title: "O efeito que buscamos",
        text: "'Se eles entregam esse nível de clareza antes de eu ser cliente, quero entender o que conseguem fazer quando analisarem a minha empresa.' Esse é o padrão de autoridade pré-reunião que orienta a biblioteca da AUDITSEO.",
      },

      {
        type: "heading",
        text: "4. Faça suas afirmações sobreviverem fora do próprio site",
      },
      {
        type: "paragraph",
        text: "O domínio próprio é a principal superfície controlada pela empresa, mas não é a única fonte pública que pode descrevê-la. Perfis profissionais, clientes, parceiros, veículos, associações, avaliações legítimas, diretórios relevantes e outras páginas independentes podem confirmar — ou contradizer — fatos sobre a entidade.",
      },
      {
        type: "paragraph",
        text: "O trabalho correto não é fabricar dezenas de citações artificiais. É encontrar inconsistências reais, melhorar as fontes que fazem sentido para o negócio e produzir evidências que outras pessoas tenham motivo legítimo para mencionar.",
      },

      {
        type: "heading",
        text: "5. Meça 'consideração' separadamente de menção e citação",
      },
      {
        type: "paragraph",
        text: "Se a meta é aquisição, o benchmark precisa incluir prompts em que a resposta exige escolher ou comparar fornecedores. Medir apenas quantas vezes o domínio foi citado em perguntas informacionais não responde se a marca está entrando na decisão de compra.",
      },
      {
        type: "list",
        items: [
          "Mention Rate: a marca apareceu em qualquer contexto?",
          "Citation Rate: o domínio/página apareceu como fonte observável?",
          "Recommendation Rate: a empresa foi apresentada como opção apropriada para o cenário?",
          "Consideration Set: em quantas respostas ela entrou na shortlist de alternativas?",
          "Entity Accuracy: a descrição da empresa, especialidade e contexto estavam corretos?",
          "Referral: houve visita mensurável da interface para o site?",
          "Qualified lead attribution: o prospect declarou que descobriu/validou a empresa via busca ou IA?",
        ],
      },
      {
        type: "paragraph",
        text: "Algumas dessas métricas são definições operacionais da AUDITSEO, não métricas oficiais fornecidas pela OpenAI. Elas só são úteis quando prompts, plataforma, idioma, data e regras de classificação são definidos antes da coleta.",
      },

      {
        type: "heading",
        text: "Como testar se sua empresa entra na consideração sem fabricar um case",
      },
      {
        type: "list",
        items: [
          "defina 20 a 50 prompts comerciais que um comprador real faria",
          "separe discovery, comparação, validação e prompts branded",
          "congele o texto dos prompts antes da rodada",
          "registre plataforma, data, idioma e localização/contexto quando aplicável",
          "repita as rodadas para observar variabilidade",
          "classifique menção, citação, recomendação e precisão separadamente",
          "guarde a resposta bruta para auditoria",
          "só depois compare períodos e concorrentes",
        ],
      },
      {
        type: "paragraph",
        text: "Uma pergunta favorável isolada pode render um print bonito, mas não prova que a empresa conquistou presença sistemática. O objetivo do benchmark é tornar a narrativa falsificável: se a marca não aparece, o dado também precisa ser publicado.",
      },

      {
        type: "heading",
        text: "O que estamos fazendo com a própria AUDITSEO",
      },
      {
        type: "paragraph",
        text: "A AUDITSEO está aplicando essa estratégia no próprio domínio como Case Study #001. O ponto de partida foi registrado antes da expansão editorial: no período finalizado de 9 de agosto a 5 de setembro de 2026, a propriedade do Search Console retornou 0 impressões e 0 cliques. Isso não prova ausência de indexação nem explica causa; registra apenas o ponto zero de Search Performance daquele período.",
      },
      {
        type: "paragraph",
        text: "A intenção é acompanhar a evolução sem reescrever o passado: URLs publicadas, impressões, queries, branded search, referências de IA quando mensuráveis, leads qualificados e — principalmente — relatos de descoberta como 'encontrei vocês porque perguntei ao ChatGPT quem entendia de SEO e IA'. Se esse cenário acontecer, ele será registrado como evidência de aquisição, não transformado retroativamente em promessa de algoritmo.",
      },
      {
        type: "callout",
        title: "A prova que realmente importa",
        text: "O melhor case para uma consultoria de Search Intelligence é quando a própria forma de o cliente encontrá-la demonstra o fenômeno que ela vende.",
      },

      {
        type: "heading",
        text: "Checklist para uma empresa que quer entrar na shortlist",
      },
      {
        type: "list",
        items: [
          "o site explica de forma concreta qual categoria, problema e público a empresa atende?",
          "as páginas comerciais conseguem ser acessadas e recuperadas sem bloqueios desnecessários?",
          "existem documentos que respondem às perguntas de compra do cliente com profundidade real?",
          "a especialização é sustentada por autores, metodologia, evidências ou experiência verificável?",
          "fontes externas relevantes descrevem a empresa de forma coerente?",
          "as principais afirmações institucionais são específicas o suficiente para serem verificadas?",
          "há uma rotina de medição para prompts comerciais, não apenas pesquisas branded?",
          "o site transforma autoridade em próximo passo claro — diagnóstico, avaliação ou contato?",
        ],
      },
      {
        type: "paragraph",
        text: "Se várias respostas forem negativas, a prioridade não é 'hackear o ChatGPT'. É construir uma presença que seja mais fácil de descobrir, entender, validar e considerar — e medir se isso começa a mudar nas jornadas que realmente geram negócio.",
      },
    ],
    sources: [
      {
        label: "OpenAI — Editores e desenvolvedores — Perguntas frequentes",
        url: openAiPublishers,
        note: "Documentação oficial sobre descoberta de sites, OAI-SearchBot, snippets, citações e elegibilidade para ChatGPT Search.",
      },
      {
        label: "OpenAI — Busca do ChatGPT",
        url: openAiSearch,
        note: "Documentação oficial sobre busca na web, consultas direcionadas, fontes e ausência de garantia de posicionamento.",
      },
      {
        label: "AUDITSEO — Como aparecer no ChatGPT",
        url: "https://www.auditseo.com.br/blog/como-aparecer-no-chatgpt",
        note: "Pilar sobre elegibilidade, entidade, citabilidade e mensuração; este documento aprofunda especificamente consideração comercial de fornecedores.",
      },
      {
        label: "AUDITSEO — Protocolo de benchmark de Search AI",
        url: "https://www.auditseo.com.br/blog/protocolo-benchmark-search-ai",
        note: "Metodologia própria para amostragem fixa, repetição e classificação separada de menção, citação e recomendação.",
      },
    ],
    relatedServices: [
      ["Generative Search Readiness", "/solucoes/geo-ia-readiness"],
      ["Entity Authority", "/solucoes/autoridade-de-entidade"],
      ["Intent Content Architecture", "/solucoes/conteudo-por-intencao"],
    ],
  },
};

export const authorityToLeadArticleList = Object.values(authorityToLeadArticles);
