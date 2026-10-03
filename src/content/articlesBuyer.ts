import type { Article } from "./articles";

const googleHireSeo = "https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=pt-BR";
const googleThirdParty = "https://developers.google.com/search/docs/fundamentals/third-party-seo?hl=pt-br";
const googleStarter = "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br";
const googleAi = "https://developers.google.com/search/docs/appearance/ai-features";
const openAiSearch = "https://help.openai.com/pt-br/articles/9237897-como-pesquisar-na-web-com-o-chatgpt";
const openAiPublishers = "https://help.openai.com/pt-br/articles/12627856-publishers-and-developers-faq";

export const buyerArticles: Record<string, Article> = {
  "como-escolher-consultoria-seo": {
    slug: "como-escolher-consultoria-seo",
    title: "Como escolher uma consultoria de SEO que realmente entende de IA em 2026",
    metaTitle: "Como Escolher Consultoria SEO + IA em 2026 | AUDITSEO",
    description:
      "Critérios para avaliar consultorias de SEO, GEO e Search AI: fundamentos técnicos, conhecimento de plataforma, método, provas, mensuração, promessas e perguntas antes de contratar.",
    eyebrow: "DECISÃO DE CONTRATAÇÃO · SEO + IA",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-08",
    readTime: "16 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Para escolher uma consultoria de SEO que realmente entende de IA, não avalie quantas siglas ela usa. Teste se o fornecedor domina os fundamentos de SEO, sabe explicar o que Google e OpenAI documentam de fato, separa menção de citação e recomendação, cria baseline antes de prometer melhoria, apresenta evidências com contexto e consegue ligar Search AI a uma decisão comercial. Uma consultoria madura também deve dizer claramente o que não controla: o Google não permite garantir primeira posição e a OpenAI informa que o posicionamento no ChatGPT Search não é garantido.",
    takeaways: [
      "SEO + IA exige fundamentos de busca antes de qualquer discurso sobre GEO, AEO ou LLMO.",
      "Peça ao fornecedor para separar documentação oficial, observação própria, hipótese e método proprietário.",
      "Menção, citação, recomendação e referral são resultados diferentes e não deveriam ser escondidos em um único score opaco.",
      "Cases precisam mostrar baseline, período, intervenção, limitações e papel real do fornecedor — não apenas prints favoráveis.",
      "Use os mesmos critérios deste guia para avaliar a AUDITSEO; autoridade declarada não substitui evidência.",
    ],
    blocks: [
      { type: "heading", text: "O primeiro teste: tire as siglas da proposta" },
      { type: "paragraph", text: "Em 2026, é comum encontrar fornecedores apresentando SEO, GEO, AEO, LLMO, AI SEO e Search AI como se a quantidade de nomenclaturas demonstrasse profundidade. O teste mais útil é remover as siglas e pedir uma explicação operacional: qual problema da sua empresa está sendo diagnosticado, quais evidências mostram esse problema e o que precisa mudar para medir uma evolução?" },
      { type: "paragraph", text: "Se a resposta continuar clara sem os rótulos, existe uma chance maior de haver método. Se toda a proposta depende de frases como 'otimizar para o algoritmo da IA' sem explicar qual plataforma, qual superfície, qual documentação ou qual medição, o risco de comprar teatro aumenta." },
      { type: "callout", title: "Regra de compra", text: "Não compre GEO porque o mercado passou a falar em GEO. Compre uma solução para um gargalo que foi demonstrado — e exija uma forma de verificar depois se ele mudou." },

      { type: "heading", text: "1. Verifique se a base de SEO continua sólida" },
      { type: "paragraph", text: "Uma consultoria que fala de Search AI precisa continuar sabendo investigar crawl, indexação, canonicalização, renderização, arquitetura, intenção, conteúdo, autoridade e conversão. As novas interfaces de resposta não tornam esses fundamentos irrelevantes." },
      { type: "paragraph", text: "O próprio Google afirma que boas práticas de SEO continuam relevantes para recursos generativos da Pesquisa e que não existe um conjunto mágico de requisitos técnicos adicionais ou schema especial que substitua essa base." },
      { type: "list", items: [
        "o fornecedor consegue localizar problemas de rastreamento e indexação sem depender apenas de uma ferramenta automática?",
        "entende quando uma URL está indexável, canônica, recuperável e realmente adequada à intenção?",
        "sabe diferenciar problema técnico, editorial, competitivo, reputacional e de conversão?",
        "consegue explicar por que determinada mudança merece prioridade agora?",
      ] },

      { type: "heading", text: "2. Peça para explicar o que as plataformas documentam — e o que elas não documentam" },
      { type: "paragraph", text: "Esse é um dos testes mais rápidos de maturidade em Search AI. Para ChatGPT Search, a OpenAI documenta que sites públicos podem aparecer, que permitir OAI-SearchBot é uma condição controlável de elegibilidade e que o ranking usa múltiplos fatores para ajudar usuários a encontrar informação relevante e confiável. A mesma documentação afirma que posicionamento não é garantido." },
      { type: "paragraph", text: "Isso permite auditar acesso, elegibilidade e referrals observáveis. Não permite transformar uma lista de táticas em fórmula oficial de recomendação comercial." },
      { type: "list", items: [
        "OAI-SearchBot é tratado separadamente de GPTBot?",
        "o fornecedor sabe quando está falando de Google AI Overviews, AI Mode, ChatGPT Search ou outra interface?",
        "consegue citar a documentação que sustenta uma afirmação de plataforma?",
        "quando não existe documentação pública, ele chama a conclusão de hipótese ou a apresenta como fato?",
      ] },

      { type: "heading", text: "3. Teste se o fornecedor distingue aparecer, ser citado e ser escolhido" },
      { type: "paragraph", text: "Uma marca pode ser mencionada sem link. Um domínio pode ser citado como fonte sem a empresa ser recomendada como fornecedora. Uma empresa pode ser recomendada com base em fontes de terceiros sem que o seu próprio site apareça como citação. Esses eventos respondem a perguntas comerciais diferentes." },
      { type: "list", items: [
        "menção: a marca aparece na resposta?",
        "citação: o domínio ou uma URL é usado como fonte observável?",
        "recomendação: a marca entra no conjunto de opções apresentadas ao usuário?",
        "precisão de entidade: a plataforma descreve corretamente quem é a empresa e o que ela faz?",
        "referral: existe clique rastreável vindo da experiência de busca?",
        "lead: a interação gerou contato, reunião ou oportunidade?",
      ] },
      { type: "callout", title: "Pergunta que revela maturidade", text: "Peça para o fornecedor mostrar como ele mede separadamente menção, citação e recomendação. Se tudo vira um único 'AI Visibility Score' sem metodologia pública, pergunte exatamente como esse número é calculado." },

      { type: "heading", text: "4. Exija baseline antes de aceitar promessa de evolução" },
      { type: "paragraph", text: "Uma consultoria não deveria escolher os prompts depois de ver em quais perguntas o cliente aparece. O conjunto de teste precisa ser definido antes: intenções, plataformas, idioma, localização quando relevante, data, repetição e regra de classificação." },
      { type: "paragraph", text: "Sem isso, é fácil criar um relatório bonito selecionando apenas perguntas favoráveis. Um benchmark útil precisa permitir que o resultado piore sem que o método seja alterado para esconder a piora." },
      { type: "list", items: [
        "os prompts são congelados antes do baseline?",
        "há repetição para lidar com variabilidade?",
        "o relatório registra plataforma e data?",
        "concorrentes são avaliados sob a mesma régua?",
        "existe regra para manter prompts em que a marca performou mal?",
      ] },

      { type: "heading", text: "5. Peça cases que mostrem o ponto zero, não apenas o ponto alto" },
      { type: "paragraph", text: "Um print de crescimento pode ser verdadeiro e ainda assim ser insuficiente para avaliar competência. Pergunte qual era o baseline, qual período foi analisado, quais mudanças ocorreram, quem executou, que fatores externos estavam presentes e quais métricas comerciais acompanharam o projeto." },
      { type: "paragraph", text: "O Google recomenda pedir exemplos de trabalhos anteriores e referências. O objetivo não é exigir garantia de repetição; é verificar se o fornecedor consegue reconstruir o raciocínio que levou do diagnóstico à decisão." },
      { type: "list", items: [
        "baseline verificável",
        "linha do tempo de mudanças",
        "escopo real do fornecedor",
        "métricas antes e depois",
        "limitações e eventos paralelos",
        "impacto em consultas, páginas, leads ou receita quando mensurável",
      ] },

      { type: "heading", text: "6. Verifique se Search AI está conectada ao negócio" },
      { type: "paragraph", text: "Uma empresa não contrata consultoria para colecionar screenshots de respostas do ChatGPT. Ela quer aumentar a probabilidade de ser descoberta, compreendida, validada e considerada em jornadas que podem terminar em compra, contratação, cadastro ou contato." },
      { type: "paragraph", text: "Por isso a estratégia precisa ligar perguntas de Search AI às páginas comerciais, à entidade, às provas e ao funil. Se a marca ganha menções em perguntas irrelevantes para a receita, existe visibilidade, mas talvez não exista valor comercial." },

      { type: "heading", text: "7. Desconfie de garantias que o fornecedor não controla" },
      { type: "paragraph", text: "O Google é explícito ao alertar que ninguém pode garantir classificação em primeiro lugar. A OpenAI, por sua vez, informa que posicionamento no ChatGPT Search não é garantido. Um fornecedor sério pode assumir responsabilidade por diagnóstico, implementação, método, documentação e qualidade de execução — não por uma resposta futura de um sistema de terceiros." },
      { type: "list", items: [
        "'garantimos sua empresa no ChatGPT'",
        "'colocamos sua marca nas primeiras respostas em X dias'",
        "'schema faz a IA recomendar sua empresa'",
        "'llms.txt é obrigatório para ranquear na IA'",
        "'temos acesso ao algoritmo de recomendação'",
        "'nosso score proprietário é equivalente ao que a plataforma usa'",
      ] },

      { type: "heading", text: "8. Avalie a operação depois da estratégia" },
      { type: "paragraph", text: "Mesmo uma recomendação correta pode morrer no backlog. Antes de contratar, defina quem executa desenvolvimento, conteúdo, autoridade, relações públicas, dados estruturados, analytics e revisão. Consultoria, agência e time interno podem funcionar; o problema é deixar responsabilidade implícita." },
      { type: "list", items: [
        "quem transforma diagnóstico em tickets ou briefs?",
        "quem implementa?",
        "quem revisa tecnicamente?",
        "quem mede o antes e depois?",
        "como decisões e hipóteses ficam documentadas?",
        "o cliente mantém acesso a dados, contas e histórico?",
      ] },

      { type: "heading", text: "12 perguntas para fazer na reunião antes de contratar" },
      { type: "list", items: [
        "Qual é a diferença entre SEO, GEO, AEO e Search AI no seu método?",
        "Que parte do meu problema você já consegue demonstrar e que parte ainda é hipótese?",
        "O que Google ou OpenAI documentam oficialmente sobre as recomendações que você está propondo?",
        "Como vocês diferenciam menção, citação e recomendação?",
        "Como o baseline de Search AI é construído?",
        "Os prompts são definidos antes de medir a marca?",
        "Como vocês lidam com respostas que variam entre execuções?",
        "Mostre um case com baseline e limitações, não apenas o resultado final.",
        "Quais resultados vocês se recusam a garantir?",
        "Quem implementa cada frente depois do diagnóstico?",
        "Como Search AI será ligada a leads, oportunidades ou outra métrica de negócio?",
        "Se o resultado não melhorar, como vocês decidem se a hipótese estava errada?",
      ] },

      { type: "heading", text: "Use este checklist para avaliar a AUDITSEO também" },
      { type: "paragraph", text: "A AUDITSEO não deveria receber uma régua diferente porque publicou este guia. Peça nossas fontes, questione nossos frameworks, verifique se distinguimos método próprio de documentação de plataforma e acompanhe o Case Study #001 para comparar o que declaramos que seria medido com o que realmente acontecer depois do lançamento." },
      { type: "callout", title: "Critério final", text: "A melhor consultoria de SEO + IA não é a que parece saber o futuro. É a que consegue transformar incerteza em diagnóstico, hipótese, implementação e evidência — sem esconder o que ainda não sabe." },
    ],
    sources: [
      { label: "Google Search Central — Você precisa de SEO?", url: googleHireSeo, note: "Guia oficial sobre contratação de SEO, trabalhos anteriores, referências, transparência e alertas sobre garantias." },
      { label: "Google Search Central — Serviços e conselhos de SEO de terceiros", url: googleThirdParty, note: "Orientação oficial para avaliar ferramentas, previsões e afirmações de fornecedores externos." },
      { label: "Google Search Central — AI features and your website", url: googleAi, note: "O Google reforça que boas práticas de SEO continuam relevantes para suas experiências generativas e que não há otimizações técnicas mágicas adicionais." },
      { label: "OpenAI — Como pesquisar na web com o ChatGPT", url: openAiSearch, note: "Documentação atual sobre OAI-SearchBot, múltiplos fatores de ranking e ausência de garantia de posicionamento." },
      { label: "OpenAI — Editores e desenvolvedores — FAQ", url: openAiPublishers, note: "Diretrizes atuais sobre descoberta de sites, OAI-SearchBot, citações e referrals de ChatGPT Search." },
    ],
    relatedServices: [["Consultoria SEO", "/consultoria-seo"], ["Auditoria SEO", "/auditoria-seo"], ["Auditoria GEO e de visibilidade em IA", "/solucoes/geo-ia-readiness"]],
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
    relatedServices: [["Consultoria SEO", "/consultoria-seo"], ["Consultoria SEO contínua", "/solucoes/evolucao-organica"], ["Auditoria SEO", "/auditoria-seo"]],
  },

  "agencia-seo-sao-paulo-como-escolher": {
    slug: "agencia-seo-sao-paulo-como-escolher",
    title: "Agência de SEO em São Paulo: como escolher antes de contratar",
    metaTitle: "Agência de SEO em São Paulo: Como Escolher | AUDITSEO",
    description:
      "Como avaliar agência ou consultoria de SEO em São Paulo: diagnóstico, método, provas, execução, SEO local, Search AI, métricas, promessas e perguntas antes de contratar.",
    eyebrow: "DECISÃO DE CONTRATAÇÃO · SÃO PAULO",
    publishedAt: "2026-10-03",
    updatedAt: "2026-10-03",
    readTime: "17 min",
    author: "Sidney Santos",
    authorUrl: "/autor/sidney-santos",
    directAnswer:
      "Para escolher uma agência de SEO em São Paulo, comece pelo problema que precisa ser resolvido — não pelo tamanho da lista de serviços. Verifique se o fornecedor consegue diagnosticar crawl, indexação, arquitetura, conteúdo, autoridade, SEO local, mensuração e Search AI quando essas frentes forem relevantes; peça evidências com baseline e limitações; entenda quem executa; e rejeite garantia de primeira posição. Agência, consultoria e time interno podem funcionar: a escolha depende principalmente de capacidade de execução, necessidade de direção e complexidade do negócio.",
    takeaways: [
      "Buscar 'agência de SEO em São Paulo' é uma intenção comercial; isso não significa que agência seja automaticamente o melhor modelo para toda empresa.",
      "Peça diagnóstico e hipótese antes de aceitar um pacote mensal de tarefas.",
      "SEO local importa quando São Paulo faz parte do mercado real do negócio; não exige criar páginas artificiais para cada bairro.",
      "Cases precisam mostrar baseline, intervenção, período e limitações — não apenas gráficos positivos.",
      "SEO, GEO e Search AI devem ser conectados ao mesmo objetivo comercial quando fazem parte do mesmo problema.",
    ],
    blocks: [
      { type: "heading", text: "A primeira pergunta não é 'qual é a melhor agência?'" },
      { type: "paragraph", text: "A pergunta mais útil é: que tipo de problema sua empresa precisa resolver? Uma operação sem capacidade de execução pode precisar de agência. Um time que já executa, mas prioriza mal, pode ganhar mais com consultoria. Um negócio em que SEO participa diariamente de produto, tecnologia e conteúdo pode precisar desenvolver liderança interna e usar fornecedores especializados como extensão." },
      { type: "paragraph", text: "A busca por uma agência de SEO em São Paulo é um bom ponto de entrada porque expressa intenção de contratação. O risco é transformar essa intenção em comparação superficial de pacotes, quantidade de artigos, número de backlinks ou promessa de posição." },

      { type: "heading", text: "1. Comece pela capacidade de diagnosticar antes de vender execução" },
      { type: "paragraph", text: "Antes da proposta final, o fornecedor deveria conseguir explicar o que já foi observado, o que continua como hipótese e quais dados seriam necessários para separar causa de sintoma. Uma auditoria inicial não precisa resolver todo o projeto, mas precisa demonstrar método." },
      { type: "list", items: [
        "crawl e indexação estão funcionando como esperado?",
        "as páginas certas representam as intenções certas?",
        "há canibalização ou arquitetura confusa?",
        "o conteúdo responde à decisão do comprador ou apenas cobre palavras-chave?",
        "a empresa é representada de forma coerente como entidade?",
        "há problema de presença local, autoridade, Search AI ou conversão?",
      ] },

      { type: "heading", text: "2. Diferencie agência, consultoria e time interno" },
      { type: "paragraph", text: "Agência normalmente faz mais sentido quando a empresa precisa comprar capacidade de produção e implementação. Consultoria tende a funcionar melhor quando existe time para executar, mas falta priorização, governança, revisão e segunda opinião. Time interno ganha força quando SEO depende de contexto diário do negócio e de integração contínua com produto, engenharia, conteúdo e receita." },
      { type: "callout", title: "Regra prática", text: "Se falta mão de obra, compre capacidade. Se existe capacidade, mas falta direção, compre decisão e governança. Se SEO participa do produto todos os dias, construa conhecimento interno e use especialistas externos de forma complementar." },

      { type: "heading", text: "3. São Paulo é contexto de mercado — não justificativa para doorway pages" },
      { type: "paragraph", text: "Uma empresa que realmente atende São Paulo pode precisar de sinais locais claros: página comercial, Google Business Profile, consistência de entidade, categorias, avaliações, referências externas e conteúdo que responda ao mercado. Isso é diferente de criar dezenas de páginas quase iguais trocando apenas bairro ou cidade." },
      { type: "paragraph", text: "Pergunte como o fornecedor decide quando uma página local merece existir. A resposta deveria envolver intenção específica, oferta, operação real e utilidade para o usuário — não simplesmente a possibilidade de inserir um modificador geográfico." },

      { type: "heading", text: "4. Peça para ver como o fornecedor escolhe prioridades" },
      { type: "paragraph", text: "Um backlog sério precisa explicar por que determinada ação vem antes de outra. Corrigir centenas de avisos de ferramenta pode produzir pouca mudança enquanto um problema de arquitetura, intenção ou owner continua aberto." },
      { type: "list", items: [
        "evidência observada",
        "impacto potencial",
        "proximidade comercial",
        "dependências",
        "esforço",
        "risco",
        "capacidade de validar depois",
      ] },

      { type: "heading", text: "5. Não confunda relatório com prova" },
      { type: "paragraph", text: "Relatórios mostram medições. Prova exige contexto: ponto zero, período, alteração realizada, papel do fornecedor, variáveis paralelas e resultado observado. Um fornecedor pode apresentar métricas verdadeiras e ainda assim deixar incerto o que foi causado pelo trabalho contratado." },
      { type: "list", items: [
        "qual era o baseline?",
        "o que exatamente mudou?",
        "quando a mudança foi publicada?",
        "quem executou?",
        "quais páginas e consultas foram afetadas?",
        "houve mudança de mídia, marca, sazonalidade ou produto no mesmo período?",
        "qual resultado comercial acompanhou a métrica de busca?",
      ] },

      { type: "heading", text: "6. Entenda como SEO local entra no projeto" },
      { type: "paragraph", text: "Quando o negócio depende de demanda geográfica, o fornecedor precisa conectar site, entidade e Google Business Profile. Nome, categoria, serviço, área atendida, avaliações e referências externas precisam ser coerentes com a operação real." },
      { type: "paragraph", text: "SEO local não deveria ficar isolado do restante da arquitetura. A página que representa a oferta em São Paulo ainda precisa estar ligada às páginas de serviço, às provas, ao conteúdo relacionado e à conversão." },

      { type: "heading", text: "7. Pergunte como Search AI será medida" },
      { type: "paragraph", text: "Em 2026, muitos fornecedores adicionaram GEO, AEO ou AI SEO à proposta. Isso só agrega valor quando há uma pergunta mensurável. Menção, citação, recomendação e referral são eventos diferentes e deveriam ser registrados separadamente." },
      { type: "paragraph", text: "O Google documenta que suas boas práticas de SEO continuam relevantes para recursos de IA na Pesquisa. A OpenAI documenta condições controláveis de acesso e elegibilidade para ChatGPT Search, mas não oferece garantia de posicionamento. O fornecedor precisa separar documentação oficial, observação e hipótese." },

      { type: "heading", text: "8. Rejeite promessas que o fornecedor não controla" },
      { type: "paragraph", text: "O Google orienta empresas a terem cautela com quem garante rankings. Um fornecedor pode se comprometer com diagnóstico, implementação, qualidade, QA, documentação e processo de medição. Não pode controlar a posição futura que um mecanismo de busca decide atribuir." },
      { type: "list", items: [
        "garantia de primeira posição",
        "prazo fechado para chegar ao topo",
        "promessa de inclusão em respostas do ChatGPT",
        "pacote de backlinks sem contexto editorial ou risco",
        "produção de páginas locais em massa apenas para capturar variações geográficas",
      ] },

      { type: "heading", text: "9. Perguntas para levar à primeira reunião" },
      { type: "list", items: [
        "Que problema vocês já conseguem observar no meu site?",
        "O que ainda precisa ser medido antes da proposta final?",
        "Quem executa desenvolvimento, conteúdo, autoridade e analytics?",
        "Como vocês priorizam backlog?",
        "Como validam uma implementação depois do deploy?",
        "Como SEO local é integrado ao site e ao Google Business Profile?",
        "Como diferenciam SEO, GEO e Search AI no método?",
        "Quais métricas comerciais acompanham cliques e posições?",
        "O que vocês não garantem?",
        "Que evidência faria vocês mudarem a estratégia?",
      ] },

      { type: "heading", text: "10. Quando a AUDITSEO pode fazer sentido" },
      { type: "paragraph", text: "A AUDITSEO atua como consultoria de Search Intelligence a partir de São Paulo, com atendimento nacional. O modelo é mais aderente quando a empresa precisa descobrir o gargalo, ordenar prioridades, coordenar implementação e validar ciclos entre SEO técnico, conteúdo, autoridade, SEO local e Search AI." },
      { type: "paragraph", text: "Se a necessidade principal é comprar grande volume fixo de produção, uma agência operacional pode ter melhor aderência. Se o problema é decisão, arquitetura, risco e aprendizado contínuo, uma consultoria orientada por diagnóstico tende a ser uma comparação mais relevante." },
    ],
    sources: [
      { label: "Google Search Central — Você precisa de SEO?", url: googleHireSeo, note: "Orientação oficial sobre quando contratar SEO e como avaliar profissionais e fornecedores." },
      { label: "Google Search Central — Serviços e conselhos de SEO de terceiros", url: googleThirdParty, note: "Recomendações oficiais para avaliar terceiros e evitar promessas enganosas." },
      { label: "Google Search Central — Guia de SEO para iniciantes", url: googleStarter, note: "Fundamentos técnicos e editoriais usados para avaliar se uma proposta mantém a base de SEO sólida." },
      { label: "Google Search Central — Recursos de IA e seu site", url: googleAi, note: "Contexto oficial sobre a relação entre fundamentos de SEO e experiências generativas da Pesquisa." },
      { label: "OpenAI — Pesquisa na web com o ChatGPT", url: openAiSearch, note: "Documentação pública sobre ChatGPT Search e uso de fontes da web." },
    ],
    relatedServices: [["SEO em São Paulo", "/seo-sao-paulo"], ["Consultoria SEO", "/consultoria-seo"], ["Auditoria SEO", "/auditoria-seo"]],
  },

};

export const buyerArticleList = Object.values(buyerArticles);
