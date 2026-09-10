import type { Article } from "./articles";

const googleHireSeo = "https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=pt-BR";
const googleThirdParty = "https://developers.google.com/search/docs/fundamentals/third-party-seo?hl=pt-br";
const googleStarter = "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br";

export const buyerArticles: Record<string, Article> = {
  "como-escolher-consultoria-seo": {
    slug: "como-escolher-consultoria-seo",
    title: "Como escolher uma consultoria de SEO em 2026: critérios que realmente importam",
    metaTitle: "Como Escolher uma Consultoria de SEO em 2026 | AUDITSEO",
    description:
      "Critérios práticos para avaliar consultorias e agências de SEO: método, diagnóstico, provas, transparência, execução, mensuração e sinais de alerta antes da contratação.",
    eyebrow: "DECISÃO DE CONTRATAÇÃO",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "13 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Uma boa consultoria de SEO deve conseguir explicar o problema que pretende resolver, como chegou ao diagnóstico, quais evidências sustentam a recomendação, o que será executado, como o trabalho será medido e quais resultados não podem ser garantidos. Desconfie de fornecedores que começam por pacotes genéricos, escondem o método ou prometem primeira posição. O próprio Google recomenda avaliar trabalhos anteriores, referências, transparência sobre mudanças e o interesse real do profissional pelo seu negócio.",
    takeaways: [
      "Comece pelo diagnóstico, não pela quantidade de entregas incluídas no pacote.",
      "Peça exemplos de trabalhos anteriores, referências e explicação do raciocínio por trás das recomendações.",
      "Ninguém pode garantir primeira posição no Google; o Google recomenda cautela com esse tipo de promessa.",
      "Uma auditoria útil precisa priorizar impacto, esforço e risco — não apenas listar erros.",
      "A melhor escolha depende da sua capacidade interna de implementação: consultoria, agência ou modelo híbrido podem fazer sentido em cenários diferentes.",
    ],
    blocks: [
      { type: "heading", text: "1. Pergunte qual problema será resolvido antes de perguntar quantas entregas estão incluídas" },
      { type: "paragraph", text: "Uma proposta pode parecer robusta porque contém dezenas de itens — auditoria, palavras-chave, conteúdo, backlinks, schema, relatórios — e ainda assim não responder à pergunta principal: qual gargalo está impedindo crescimento e por que essas tarefas seriam a melhor resposta?" },
      { type: "paragraph", text: "Uma consultoria madura deve conseguir separar sintoma de causa. Pouco tráfego pode nascer de indexação, cobertura de intenção, arquitetura, autoridade, concorrência, conteúdo fraco ou baixa capacidade de conversão. Prescrever tudo ao mesmo tempo dificulta saber o que realmente funcionou." },

      { type: "heading", text: "2. Avalie o método de diagnóstico" },
      { type: "list", items: [
        "quais dados entram na análise",
        "como o fornecedor diferencia hipótese de evidência",
        "como páginas e consultas são segmentadas",
        "como mudanças técnicas e editoriais são priorizadas",
        "como concorrência, intenção e negócio entram no raciocínio",
        "como o diagnóstico vira um roadmap executável",
      ] },
      { type: "callout", title: "Um relatório não é um diagnóstico", text: "Encontrar 300 problemas em um crawler é fácil. O valor está em dizer quais poucos problemas merecem ser resolvidos primeiro, por quê e como validar o efeito." },

      { type: "heading", text: "3. Peça evidências, mas não aceite apenas prints impressionantes" },
      { type: "paragraph", text: "Cases podem ajudar a avaliar experiência, mas precisam de contexto. Pergunte qual era o ponto de partida, período analisado, papel da consultoria, mudanças paralelas, métricas de negócio e limitações do case." },
      { type: "paragraph", text: "O Google recomenda pedir exemplos de trabalhos anteriores e referências de clientes. A ideia não é procurar uma promessa de repetição do mesmo crescimento, e sim verificar se existe método, transparência e capacidade de explicar o que foi feito." },

      { type: "heading", text: "4. Teste a transparência técnica" },
      { type: "paragraph", text: "O Google também orienta que profissionais de SEO expliquem claramente as mudanças que pretendem fazer. Isso é especialmente importante quando há acesso a CMS, código, Search Console, redirects, robots, canonical ou infraestrutura." },
      { type: "list", items: [
        "a recomendação vem com justificativa?",
        "há registro de antes/depois?",
        "é possível saber quem implementou cada mudança?",
        "há rollback ou plano de mitigação quando existe risco?",
        "o cliente mantém acesso aos próprios dados e contas?",
      ] },

      { type: "heading", text: "5. Observe se o fornecedor quer entender o negócio" },
      { type: "paragraph", text: "Uma das recomendações mais úteis do guia do Google é simples: o SEO deveria demonstrar interesse pela empresa, concorrentes, diferenciais e forma como clientes encontram o negócio. Sem isso, a estratégia tende a otimizar métricas isoladas em vez de decisões comerciais." },
      { type: "list", items: [
        "quais produtos ou serviços mais importam?",
        "quais páginas participam da receita?",
        "quais mercados e regiões são prioritários?",
        "qual é a capacidade real de desenvolvimento e conteúdo?",
        "que tipo de lead ou venda tem valor para a empresa?",
      ] },

      { type: "heading", text: "6. Desconfie de garantias que o fornecedor não controla" },
      { type: "paragraph", text: "O Google é explícito: ninguém pode garantir classificação em primeiro lugar. A mesma lógica vale para respostas de IA. Nenhuma consultoria controla diretamente se ChatGPT, Gemini, Claude, Perplexity ou AI Overviews citarão uma marca em uma pergunta futura." },
      { type: "list", items: [
        "garantia de posição fixa",
        "garantia de aparecer no ChatGPT",
        "suposto relacionamento privilegiado com Google",
        "métricas proprietárias apresentadas como se fossem dados internos do buscador",
        "prazo exato de resultado sem explicar variáveis e dependências",
      ] },

      { type: "heading", text: "7. Avalie a capacidade de implementação, não apenas a estratégia" },
      { type: "paragraph", text: "Uma recomendação correta que nunca chega ao ar não gera resultado. Antes de contratar, defina quem fará desenvolvimento, conteúdo, PR, design, analytics e revisão. A consultoria pode executar, coordenar ou trabalhar com o time existente — mas a responsabilidade precisa estar clara." },

      { type: "heading", text: "8. Combine as métricas com o problema original" },
      { type: "paragraph", text: "Nem todo projeto deve ser avaliado pelo mesmo KPI. Migração exige paridade e controle de regressão. Site sem tração precisa ganhar cobertura e consultas relevantes. Search AI exige baseline de prompts, menções, citações e precisão. Conteúdo precisa provar cobertura, assistência comercial e manutenção da qualidade." },

      { type: "heading", text: "Checklist antes de contratar" },
      { type: "list", items: [
        "o fornecedor consegue explicar seu diagnóstico em linguagem clara?",
        "há metodologia e priorização, não apenas lista de tarefas?",
        "cases têm contexto e não só percentuais?",
        "mudanças técnicas são documentadas?",
        "dados permanecem acessíveis ao cliente?",
        "há clareza sobre quem executa?",
        "o modelo de comunicação combina com a operação da empresa?",
        "as métricas respondem ao objetivo de negócio?",
        "as limitações são faladas antes da assinatura?",
      ] },
      { type: "callout", title: "Critério final", text: "A melhor consultoria não é a que promete fazer mais coisas. É a que consegue demonstrar por que determinadas ações merecem ser feitas agora — e quais podem esperar." },
    ],
    sources: [
      { label: "Google Search Central — Você precisa de SEO?", url: googleHireSeo, note: "Guia oficial atualizado sobre contratação de SEO, perguntas a fazer, referências, transparência e promessas de ranking." },
      { label: "Google Search Central — Serviços e conselhos de SEO de terceiros", url: googleThirdParty, note: "Orientação oficial para avaliar ferramentas, previsões e afirmações de fornecedores externos." },
      { label: "Google Search Central — Guia de SEO para iniciantes", url: googleStarter, note: "Referência oficial sobre fundamentos de SEO, rastreamento, compreensão e ausência de garantias automáticas de ranking." },
    ],
    relatedServices: [["Search Foundation", "/solucoes/projetos-comecando-do-zero"], ["Organic Activation", "/solucoes/site-sem-tracao"], ["Organic Evolution Cycle", "/solucoes/evolucao-organica"]],
  },

  "agencia-seo-consultoria-ou-time-interno": {
    slug: "agencia-seo-consultoria-ou-time-interno",
    title: "Agência de SEO, consultoria ou time interno: qual modelo faz sentido para sua empresa?",
    metaTitle: "Agência SEO vs Consultoria vs Time Interno | AUDITSEO",
    description:
      "Compare agência de SEO, consultoria estratégica e equipe interna por maturidade, execução, governança, velocidade, especialização e custo de coordenação.",
    eyebrow: "MODELO OPERACIONAL",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    readTime: "11 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Agência, consultoria e time interno resolvem problemas diferentes. Agência tende a fazer mais sentido quando a empresa precisa terceirizar execução recorrente; consultoria, quando já existe capacidade interna ou fornecedores e falta diagnóstico, priorização e governança; time interno, quando SEO é estratégico o suficiente para exigir conhecimento contínuo do negócio e volume constante de implementação. Em operações maduras, o melhor desenho muitas vezes é híbrido.",
    takeaways: [
      "Escolha o modelo pela lacuna operacional, não pela nomenclatura do fornecedor.",
      "Ter estratégia sem capacidade de implementação cria backlog; ter execução sem direção cria volume sem prioridade.",
      "Consultoria funciona melhor quando existe alguém capaz de implementar ou coordenar as decisões.",
      "Equipe interna ganha contexto e velocidade, mas pode precisar de especialistas externos para temas de alta complexidade ou auditorias independentes.",
      "Modelos híbridos costumam funcionar bem quando responsabilidades e critérios de decisão estão documentados.",
    ],
    blocks: [
      { type: "heading", text: "O erro é escolher o modelo antes de entender a lacuna" },
      { type: "paragraph", text: "Empresas frequentemente perguntam se devem contratar uma agência ou consultoria como se o nome determinasse a qualidade do trabalho. A pergunta mais útil é: o que está faltando hoje — conhecimento, direção, execução, capacidade técnica, conteúdo, governança ou velocidade?" },

      { type: "heading", text: "Quando uma agência de SEO tende a fazer sentido" },
      { type: "list", items: [
        "a empresa precisa terceirizar grande parte da execução",
        "há demanda recorrente de conteúdo, on-page, links, relatórios e acompanhamento",
        "o time interno é pequeno ou inexistente",
        "o fornecedor consegue operar com SLA e cadência clara",
        "o escopo tem processos relativamente repetíveis",
      ] },
      { type: "paragraph", text: "O principal risco é transformar recorrência em piloto automático: tarefas continuam sendo entregues porque fazem parte do pacote, mesmo quando já não são a prioridade do negócio." },

      { type: "heading", text: "Quando uma consultoria tende a fazer sentido" },
      { type: "list", items: [
        "já existem desenvolvedores, redatores, marketing ou fornecedores capazes de executar",
        "falta alguém para diagnosticar, priorizar e coordenar",
        "o cenário envolve decisões de alto risco, como migração ou recuperação",
        "a empresa precisa integrar SEO, entidade, conteúdo, reputação e Search AI",
        "há necessidade de auditoria independente sobre uma operação existente",
      ] },
      { type: "paragraph", text: "Consultoria sem capacidade de execução do lado do cliente pode virar um backlog sofisticado que nunca é implementado. Por isso o modelo precisa prever responsáveis, dependências e validação." },

      { type: "heading", text: "Quando construir um time interno" },
      { type: "list", items: [
        "o canal orgânico é parte estrutural da aquisição",
        "há volume de páginas, conteúdo e experimentos suficiente para trabalho contínuo",
        "conhecimento do produto e das áreas internas influencia muito as decisões",
        "a velocidade de implementação depende de presença diária com produto, engenharia e conteúdo",
        "a empresa consegue contratar e desenvolver profissionais especializados",
      ] },
      { type: "paragraph", text: "A vantagem do time interno é contexto acumulado. O risco é isolamento: a equipe pode normalizar problemas, repetir o mesmo playbook ou não ter experiência suficiente em eventos raros, como migrações complexas, incidentes de indexação ou novas interfaces de busca." },

      { type: "heading", text: "O modelo híbrido" },
      { type: "paragraph", text: "Muitas operações maduras combinam liderança interna, especialistas externos e fornecedores de execução. O ponto central é evitar sobreposição. Cada frente precisa de um dono e cada decisão precisa de um critério." },
      { type: "list", items: [
        "time interno: contexto, produto, prioridades e execução próxima ao negócio",
        "consultoria: diagnóstico, arquitetura, priorização, auditoria e governança",
        "agência/fornecedor: capacidade adicional de produção ou implementação",
        "especialistas pontuais: migração, JavaScript SEO, dados, PR, local ou Search AI quando necessário",
      ] },

      { type: "heading", text: "Como decidir em cinco perguntas" },
      { type: "list", items: [
        "temos pessoas para implementar o que for recomendado?",
        "nosso problema é falta de direção ou falta de mão de obra?",
        "SEO exige contexto diário do produto ou pode ser operado externamente?",
        "quais decisões apresentam risco suficiente para exigir revisão especializada?",
        "quem será responsável por medir se a hipótese funcionou?",
      ] },

      { type: "heading", text: "Exemplos de desenho" },
      { type: "subheading", text: "Empresa pequena sem equipe" },
      { type: "paragraph", text: "Uma agência com boa capacidade de execução pode ser mais eficiente, desde que o escopo não seja genérico e exista clareza sobre o que será priorizado." },
      { type: "subheading", text: "Empresa média com marketing e desenvolvimento" },
      { type: "paragraph", text: "Consultoria estratégica costuma funcionar bem quando o time consegue executar recomendações, mas precisa de direção, arquitetura e validação externa." },
      { type: "subheading", text: "Empresa grande ou plataforma complexa" },
      { type: "paragraph", text: "É comum combinar liderança interna de SEO com consultores especializados e fornecedores para frentes específicas, mantendo governança central dentro da empresa." },

      { type: "heading", text: "Não existe modelo universalmente superior" },
      { type: "paragraph", text: "O Google reconhece que empresas podem recorrer a profissionais de SEO para análise de estrutura, aconselhamento técnico, conteúdo, pesquisa, treinamento e otimização para IA generativa. O formato organizacional é uma decisão de operação. O que deve permanecer constante é transparência, responsabilidade e capacidade de explicar o raciocínio." },
      { type: "callout", title: "Regra prática", text: "Se a empresa não consegue executar, compre capacidade. Se consegue executar mas não sabe o que priorizar, compre direção. Se SEO é crítico todos os dias, construa conhecimento interno e use externos como alavanca especializada." },
    ],
    sources: [
      { label: "Google Search Central — Você precisa de SEO?", url: googleHireSeo, note: "Descrição oficial de tipos de trabalho que profissionais de SEO podem oferecer e critérios para avaliar contratação." },
      { label: "Google Search Central — Serviços e conselhos de SEO de terceiros", url: googleThirdParty, note: "Orientação para avaliar promessas, ferramentas e serviços externos sem confundir previsão com garantia." },
    ],
    relatedServices: [["Organic Evolution Cycle", "/solucoes/evolucao-organica"], ["Search Recovery", "/solucoes/recuperacao-organica"], ["SEO Migration & Risk Control", "/solucoes/migracao-risco-seo"]],
  },
};

export const buyerArticleList = Object.values(buyerArticles);
