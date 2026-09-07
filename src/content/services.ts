export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceStep = {
  title: string;
  text: string;
};

export type ServicePageData = {
  slug: string;
  code: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lead: string;
  directAnswer: string;
  problemTitle: string;
  problemText: string[];
  warningSignals: string[];
  fit: string[];
  notFit: string[];
  diagnosticQuestion: string;
  approach: ServiceStep[];
  deliverables: Array<[string, string]>;
  measurement: string[];
  faqs: ServiceFaq[];
};

export const servicePages: Record<string, ServicePageData> = {
  foundation: {
    slug: "/solucoes/projetos-comecando-do-zero",
    code: "SEARCH FOUNDATION",
    name: "Search Foundation",
    title: "Construa a fundação de busca antes de o projeto acumular problemas difíceis de corrigir.",
    metaTitle: "Search Foundation para Novos Sites e Marcas | AUDITSEO",
    metaDescription:
      "Consultoria para novos sites, marcas e serviços: arquitetura, indexação, intenção, entidades, conteúdo, dados estruturados e mensuração antes do lançamento.",
    eyebrow: "PROJETOS COMEÇANDO DO ZERO",
    lead:
      "Quando um site nasce sem arquitetura de busca, mapa de intenção e definição clara de entidades, decisões aparentemente pequenas podem gerar meses de retrabalho. Search Foundation organiza essa base antes que ela vire dívida técnica e semântica.",
    directAnswer:
      "Search Foundation é a solução da AUDITSEO para novos sites, marcas, serviços ou unidades que precisam estruturar desde o início como serão rastreados, compreendidos e associados às intenções relevantes do mercado.",
    problemTitle: "O maior risco de um projeto novo é lançar primeiro e descobrir a estratégia de busca depois.",
    problemText: [
      "Escolhas de URL, CMS, navegação, nomenclatura, templates e conteúdo criam sinais que mecanismos de busca passam a interpretar desde o primeiro rastreamento.",
      "Quando esses sinais não refletem o mercado, a oferta e a estrutura real da empresa, o projeto pode nascer indexável, mas semanticamente fraco; ou visualmente pronto, mas incapaz de cobrir as jornadas que deveriam gerar demanda.",
    ],
    warningSignals: [
      "arquitetura definida apenas pelo design ou organograma interno",
      "páginas de serviço sem mapa de intenção",
      "URLs e templates criados sem política de indexação",
      "conteúdo produzido antes de definir entidades e tópicos prioritários",
      "ausência de baseline, analytics ou critérios de sucesso",
      "migração de conteúdo antigo sem inventário e sem plano de equivalência",
    ],
    fit: [
      "novo site institucional ou comercial",
      "nova marca, unidade ou linha de serviço",
      "reconstrução completa de uma presença digital ainda sem tração",
      "projeto que ainda permite decisões estruturais antes do lançamento",
    ],
    notFit: [
      "projetos que já perderam tráfego e exigem diagnóstico de recuperação",
      "operações maduras que precisam de ciclos contínuos de crescimento",
      "empresas buscando apenas produção de conteúdo avulsa sem abertura para arquitetura",
    ],
    diagnosticQuestion:
      "Se o Google e uma plataforma de IA encontrassem o projeto no primeiro dia, haveria informação suficiente para entender quem é a empresa, o que ela oferece, em quais contextos é relevante e quais páginas devem representar cada intenção?",
    approach: [
      { title: "Arquitetura de descoberta", text: "Definimos o que deve ser rastreável, indexável, canônico e internamente conectado antes de o site ganhar volume." },
      { title: "Mapa de intenção", text: "Ligamos serviços, categorias, dúvidas e jornadas às páginas que precisam existir para cobrir demanda real." },
      { title: "Modelo de entidade", text: "Organizamos empresa, especialistas, serviços, localidades e relações que precisam estar explícitas no site e nos dados estruturados." },
      { title: "Plano editorial inicial", text: "Priorizamos conteúdo que sustenta oferta, comparação, prova e autoridade em vez de começar por um calendário genérico de blog." },
      { title: "Regras de medição", text: "Definimos baseline, eventos, páginas prioritárias, consultas e indicadores para saber se o lançamento está criando presença útil." },
    ],
    deliverables: [
      ["Mapa de arquitetura", "Estrutura de páginas, hierarquia, rotas e relações internas orientadas por intenção."],
      ["Política de indexação", "Critérios para canônicos, redirects, filtros, parâmetros, ambientes e páginas que devem ou não entrar no índice."],
      ["Mapa de entidades", "Empresa, pessoas, serviços, localidades, tópicos e relações que precisam ser comunicados de forma consistente."],
      ["Briefs de páginas críticas", "Objetivo, intenção, entidades, perguntas, provas e CTA das páginas mais importantes para o lançamento."],
      ["Plano de dados estruturados", "Schema coerente com o conteúdo visível e com as entidades reais do negócio."],
      ["Checklist pré-lançamento", "Validação de status HTTP, metadata, canonicals, sitemap, robots, links, schema, analytics e conversão."],
    ],
    measurement: ["cobertura de indexação", "consultas descobertas", "impressões por cluster", "rastreamento das páginas prioritárias", "erros técnicos pós-lançamento", "conversões por landing"],
    faqs: [
      { question: "Search Foundation é só SEO técnico?", answer: "Não. A camada técnica é necessária, mas a solução também cobre intenção, arquitetura de conteúdo, entidades, dados estruturados, medição e critérios de lançamento." },
      { question: "Quando a AUDITSEO deve entrar no projeto?", answer: "Quanto antes houver decisões sobre arquitetura, CMS, URLs, navegação e conteúdo. A maior parte do valor está em evitar retrabalho antes de a estrutura ganhar dependências." },
      { question: "Vocês precisam desenvolver o site?", answer: "Não. Podemos trabalhar com a equipe de desenvolvimento existente, definindo requisitos, validando implementações e priorizando correções." },
    ],
  },

  activation: {
    slug: "/solucoes/site-sem-tracao",
    code: "ORGANIC ACTIVATION",
    name: "Organic Activation",
    title: "Seu site está no ar. Agora precisamos descobrir por que ele ainda não ganhou tração.",
    metaTitle: "Site sem Tráfego ou Tração Orgânica | AUDITSEO",
    metaDescription:
      "Diagnóstico para sites com baixa visibilidade orgânica: indexação, arquitetura, demanda, conteúdo, autoridade, intenção e prioridades para ativar crescimento.",
    eyebrow: "SITE NO AR, MAS SEM TRAÇÃO",
    lead:
      "Publicar mais não resolve automaticamente um site que quase não ganha impressões, consultas relevantes ou oportunidades. Organic Activation identifica qual camada está impedindo o projeto de sair da inércia.",
    directAnswer:
      "Organic Activation é a solução da AUDITSEO para sites que existem e funcionam, mas ainda não transformaram sua presença digital em cobertura de busca, demanda qualificada e sinais consistentes de crescimento.",
    problemTitle: "Baixa tração pode ter muitas causas. Tratar todas como 'falta de conteúdo' costuma desperdiçar tempo.",
    problemText: [
      "Um site pode estar tecnicamente indexável, mas cobrir intenções que quase ninguém procura. Pode ter conteúdo relevante, mas arquitetura fraca. Pode ter boas páginas, mas pouca autoridade externa. Ou pode simplesmente não deixar claro para mecanismos e usuários por que aquela empresa deve entrar na decisão.",
      "O objetivo do diagnóstico é separar esses cenários e identificar o menor conjunto de mudanças capaz de produzir movimento observável.",
    ],
    warningSignals: [
      "poucas impressões mesmo meses após o lançamento",
      "site indexado, mas quase sem consultas não-branded",
      "blog crescendo sem impacto nas páginas comerciais",
      "páginas de serviço muito parecidas ou pouco específicas",
      "autoridade externa quase inexistente",
      "dados e relatórios sem uma hipótese clara sobre o gargalo",
    ],
    fit: ["sites com pelo menos algum histórico de rastreamento e indexação", "empresas que ainda não encontraram um canal orgânico previsível", "operações dispostas a corrigir arquitetura e conteúdo, não apenas publicar mais"],
    notFit: ["quedas bruscas de tráfego após histórico forte", "migrações em andamento", "projetos novos ainda antes do lançamento"],
    diagnosticQuestion:
      "O problema está em ser descoberto, cobrir a demanda certa, comunicar relevância, acumular autoridade ou transformar impressões em entrada comercial?",
    approach: [
      { title: "Baseline de cobertura", text: "Mapeamos o que já é rastreado, indexado, exibido e clicado antes de propor qualquer expansão." },
      { title: "Gap de demanda", text: "Comparamos a superfície atual do site com as intenções e perguntas que realmente existem no mercado." },
      { title: "Gap de página", text: "Identificamos páginas ausentes, sobrepostas, fracas ou desconectadas do funil comercial." },
      { title: "Gap de autoridade", text: "Avaliamos provas, reputação, links, fontes, especialistas e sinais externos que sustentam confiança." },
      { title: "Plano de ativação", text: "Priorizamos as mudanças com maior probabilidade de aumentar descoberta, cobertura e consideração." },
    ],
    deliverables: [
      ["Baseline orgânico", "Mapa de páginas, consultas, cobertura e comportamento atual."],
      ["Matriz de gaps", "Separação entre gargalos técnicos, semânticos, editoriais, competitivos e de autoridade."],
      ["Mapa de demanda", "Intenções existentes no mercado que ainda não possuem uma resposta adequada no site."],
      ["Backlog priorizado", "Correções e novas páginas ordenadas por impacto, dependência e esforço."],
      ["Plano de autoridade", "Sinais externos e provas que precisam evoluir para sustentar crescimento."],
      ["Critérios de ativação", "Indicadores que mostrarão se o projeto saiu da inércia e quais hipóteses precisam ser revistas."],
    ],
    measurement: ["crescimento de impressões não-branded", "novas consultas relevantes", "páginas ganhando cobertura", "CTR em páginas prioritárias", "entradas comerciais orgânicas", "evolução de autoridade por cluster"],
    faqs: [
      { question: "Site sem tráfego sempre precisa de mais conteúdo?", answer: "Não. Às vezes o principal bloqueio é indexação, arquitetura, posicionamento, autoridade ou uma escolha ruim de intenções. Conteúdo só deve ser prescrito quando resolve um gap identificado." },
      { question: "Quanto histórico é necessário?", answer: "Mesmo projetos jovens podem ser analisados, mas quanto mais dados houver de rastreamento, Search Console e comportamento, maior a capacidade de separar hipótese de evidência." },
      { question: "Vocês executam o backlog?", answer: "Podemos orientar a equipe existente, validar a implementação ou assumir frentes específicas conforme o modelo contratado." },
    ],
  },

  recovery: {
    slug: "/solucoes/recuperacao-organica",
    code: "SEARCH RECOVERY",
    name: "Search Recovery",
    title: "Recuperar tráfego começa por entender exatamente o que foi perdido — e por quê.",
    metaTitle: "Recuperação de Tráfego e Queda de SEO | AUDITSEO",
    metaDescription:
      "Diagnóstico de queda orgânica para separar causas técnicas, algorítmicas, competitivas, editoriais e de intenção antes de executar um plano de recuperação.",
    eyebrow: "PERDA DE TRÁFEGO OU POSIÇÕES",
    lead:
      "Queda orgânica raramente se resolve com uma lista genérica de 'melhores práticas'. A primeira tarefa é reconstruir a linha do tempo da perda e descobrir quais páginas, consultas, entidades e sinais realmente mudaram.",
    directAnswer:
      "Search Recovery é a solução da AUDITSEO para empresas que perderam tráfego, rankings, cobertura ou demanda orgânica e precisam de uma investigação causal antes de decidir o que corrigir.",
    problemTitle: "Se a causa estiver errada, a recuperação vira uma sequência cara de tentativas.",
    problemText: [
      "Uma queda pode coincidir com update do Google sem ter sido causada por ele. Pode nascer de uma migração, alteração de template, mudança de intenção, perda de páginas, concorrência, canibalização ou enfraquecimento de autoridade.",
      "Por isso separamos correlação de causalidade e reconstruímos evidências antes de recomendar conteúdo, links, redirects ou mudanças técnicas.",
    ],
    warningSignals: ["queda concentrada em determinadas pastas ou templates", "perda de consultas comerciais enquanto o tráfego total parece estável", "migração ou redesign próximo do início da perda", "páginas historicamente fortes substituídas ou consolidadas", "concorrentes ganhando cobertura para novas intenções", "muitas ações realizadas sem registro de impacto"],
    fit: ["sites com histórico de desempenho", "quedas relevantes de tráfego, impressões ou conversões orgânicas", "empresas que precisam priorizar recuperação antes de expandir"],
    notFit: ["sites que nunca chegaram a ter tração", "projetos ainda em fase de lançamento", "empresas buscando garantia de retorno a uma posição específica"],
    diagnosticQuestion:
      "Qual conjunto de páginas e consultas perdeu visibilidade, em que momento, depois de quais mudanças e para quais concorrentes ou tipos de resultado?",
    approach: [
      { title: "Linha do tempo", text: "Cruzamos perdas com deploys, migrações, mudanças editoriais, updates e movimentos competitivos." },
      { title: "Segmentação da queda", text: "Separamos branded/non-branded, diretórios, templates, países, dispositivos, intenção e páginas de receita." },
      { title: "Hipóteses causais", text: "Criamos hipóteses testáveis em vez de atribuir a queda automaticamente a um algoritmo." },
      { title: "Comparação competitiva", text: "Analisamos quem passou a ocupar a demanda perdida e o que mudou na composição das respostas e SERPs." },
      { title: "Plano de recuperação", text: "Priorizamos correções capazes de recuperar valor comercial, não apenas volume de sessões." },
    ],
    deliverables: [["Linha do tempo da perda", "Eventos técnicos, editoriais e de mercado correlacionados ao início e à evolução da queda."], ["Mapa de impacto", "Páginas, consultas, clusters e conversões mais afetados."], ["Hipóteses priorizadas", "Causas prováveis com evidências, contraprovas e testes recomendados."], ["Plano de correção", "Ações técnicas, editoriais e de autoridade ordenadas por risco e potencial."], ["Protocolo de validação", "Como medir recuperação sem confundir sazonalidade, branded e mudanças externas."], ["Registro de aprendizado", "Documentação para evitar que o mesmo tipo de perda seja reintroduzido." ]],
    measurement: ["recuperação de consultas comerciais", "impressões e cliques por cluster afetado", "cobertura das páginas prioritárias", "conversões recuperadas", "erros técnicos eliminados", "distância competitiva nas intenções perdidas"],
    faqs: [
      { question: "Vocês conseguem dizer se um update do Google causou a queda?", answer: "Podemos avaliar evidências e correlações, mas não devemos afirmar causalidade sem suporte. A análise compara timing, segmentos afetados, mudanças internas e concorrência." },
      { question: "É possível garantir que o tráfego voltará ao nível anterior?", answer: "Não. O mercado, a SERP e a demanda podem ter mudado. O objetivo é recuperar valor viável e construir uma posição mais resiliente, não prometer reconstruir exatamente o passado." },
      { question: "Devemos parar de publicar durante a recuperação?", answer: "Depende do caso. A prioridade é interromper ações que possam ampliar o dano e concentrar esforço nas hipóteses com maior evidência." },
    ],
  },

  authority: {
    slug: "/solucoes/autoridade-de-entidade",
    code: "ENTITY AUTHORITY",
    name: "Entity Authority",
    title: "Transforme experiência real em sinais que Google, IA e clientes consigam verificar.",
    metaTitle: "Autoridade de Entidade para Empresas e Especialistas | AUDITSEO",
    metaDescription:
      "Estruture empresa, especialistas, serviços, provas, reputação, dados e fontes externas para fortalecer compreensão e autoridade de entidade em busca e IA.",
    eyebrow: "AUTORIDADE POUCO RECONHECIDA",
    lead:
      "Uma empresa pode ter anos de experiência e ainda apresentar sinais digitais fragmentados. Entity Authority organiza quem é a entidade, em quais temas ela é relevante e quais evidências sustentam essa afirmação.",
    directAnswer:
      "Entity Authority é a solução da AUDITSEO para empresas e especialistas que precisam tornar sua identidade, especialidade, reputação e evidências mais claras e consistentes em todo o ecossistema digital.",
    problemTitle: "Autoridade não nasce de dizer que a empresa é referência. Ela precisa ser demonstrável.",
    problemText: [
      "Buscadores, sistemas de resposta e clientes encontram a empresa por múltiplas fontes. Quando nome, serviços, especialistas, credenciais, localidades e provas aparecem de forma inconsistente, a interpretação se torna mais fraca.",
      "O trabalho conecta o site — fonte controlada principal — com sinais verificáveis fora dele, evitando transformar 'entity SEO' em mera aplicação de schema.",
    ],
    warningSignals: ["empresa forte offline, mas quase sem menções qualificadas", "especialistas sem páginas próprias ou autoria consistente", "descrições diferentes entre site, perfis e fontes externas", "claims comerciais sem provas acessíveis", "schema declarando informações que o conteúdo visível não sustenta", "marca pouco associada aos temas estratégicos do negócio"],
    fit: ["empresas B2B ou serviços especializados", "marcas lideradas por fundadores ou especialistas", "operações em que confiança e reputação influenciam a contratação", "empresas preparando presença para busca generativa"],
    notFit: ["quem busca apenas criar um Knowledge Panel", "operações que pretendem fabricar credenciais ou menções", "projetos sem disposição para tornar provas e autoria públicas"],
    diagnosticQuestion:
      "Se uma pessoa ou sistema tentasse verificar hoje quem é a empresa, o que ela domina e por que deveria ser confiável, encontraria uma narrativa consistente sustentada por fontes reais?",
    approach: [
      { title: "Entity Home", text: "Definimos as páginas canônicas que explicam empresa, pessoas, serviços e relações." },
      { title: "Grafo de entidades", text: "Mapeamos empresa, fundadores, especialistas, produtos, localidades e tópicos prioritários." },
      { title: "Inventário de provas", text: "Organizamos cases, credenciais, dados, avaliações, estudos, imprensa, perfis e outras evidências verificáveis." },
      { title: "Consistência externa", text: "Identificamos conflitos e lacunas entre o site e fontes públicas relevantes." },
      { title: "Plano de autoridade", text: "Priorizamos quais ativos e relações podem fortalecer reconhecimento temático de forma legítima." },
    ],
    deliverables: [["Mapa de entidade", "Entidades prioritárias, relações e páginas canônicas que devem funcionar como fonte de verdade."], ["Narrativa institucional", "Definições consistentes de quem é a empresa, o que faz e em quais contextos é relevante."], ["Arquitetura de especialistas", "Páginas, autoria, credenciais e relações entre pessoas, conteúdos e serviços."], ["Inventário de evidências", "Provas existentes, lacunas e ativos que precisam ser produzidos ou tornados acessíveis."], ["Plano de consistência externa", "Perfis, diretórios, fontes e menções relevantes que precisam ser alinhados."], ["Schema de entidade", "Dados estruturados coerentes com a realidade e com o conteúdo visível." ]],
    measurement: ["consistência de entidade", "cobertura branded", "menções qualificadas", "associação temática", "presença de especialistas", "menções/citações em amostras de Search AI"],
    faqs: [
      { question: "Autoridade de entidade é o mesmo que link building?", answer: "Não. Links podem participar da autoridade, mas a solução cobre identidade, especialistas, provas, reputação, consistência, conteúdo, fontes e relações semânticas." },
      { question: "Schema sozinho resolve autoridade de entidade?", answer: "Não. Dados estruturados ajudam a explicitar informação, mas não criam credibilidade nem substituem conteúdo, provas e validação externa." },
      { question: "Isso garante citações por IA?", answer: "Não. O objetivo é melhorar clareza e verificabilidade e medir presença. Sistemas de terceiros continuam decidindo o que recuperar e citar." },
    ],
  },

  content: {
    slug: "/solucoes/conteudo-por-intencao",
    code: "INTENT CONTENT ARCHITECTURE",
    name: "Intent Content Architecture",
    title: "Pare de publicar por calendário. Construa conteúdo para as decisões que o mercado realmente toma.",
    metaTitle: "Arquitetura de Conteúdo por Intenção | AUDITSEO",
    metaDescription:
      "Planejamento de conteúdo conectado a intenção, jornada, serviços, entidades, autoridade e conversão. Menos volume isolado; mais cobertura estratégica.",
    eyebrow: "CONTEÚDO SEM DIREÇÃO",
    lead:
      "Conteúdo não cria autoridade apenas porque existe. Ele precisa responder perguntas reais, ocupar um papel na jornada e conectar-se às páginas e entidades que sustentam o negócio.",
    directAnswer:
      "Intent Content Architecture é a solução da AUDITSEO para transformar artigos e páginas isoladas em uma arquitetura de conteúdo orientada por intenção, entidade, serviço, prova e decisão.",
    problemTitle: "Volume editorial sem arquitetura pode aumentar URLs sem aumentar entendimento nem receita.",
    problemText: [
      "Calendários baseados apenas em volume de palavras-chave frequentemente criam sobreposição, canibalização e conteúdos que nunca se conectam à oferta.",
      "A arquitetura por intenção começa pela jornada: o que o público precisa descobrir, comparar, validar e entender antes de escolher — e qual página deve responder a cada etapa.",
    ],
    warningSignals: ["muitos artigos com poucas impressões", "conteúdo informativo sem links para páginas comerciais", "vários textos respondendo praticamente a mesma intenção", "serviços importantes com pouca sustentação temática", "conteúdo genérico que concorrentes poderiam publicar sem alteração", "ausência de autoria, fontes e atualização editorial"],
    fit: ["empresas com blog ou base de conteúdo já existente", "marcas que precisam construir autoridade temática", "operações com múltiplos serviços, públicos ou estágios de decisão", "equipes que desejam escalar conteúdo com governança"],
    notFit: ["quem busca apenas quantidade de artigos", "empresas sem clareza mínima de oferta e público", "projetos que não podem atualizar ou consolidar conteúdo legado"],
    diagnosticQuestion:
      "Cada conteúdo do site possui uma intenção clara, uma entidade central, um papel na jornada e uma relação explícita com as páginas que sustentam a receita?",
    approach: [
      { title: "Mapa de intenção", text: "Organizamos descoberta, problema, comparação, validação, contratação e pós-decisão." },
      { title: "Topic/entity graph", text: "Conectamos tópicos, entidades, serviços, especialistas e relações que precisam ganhar cobertura." },
      { title: "Inventário editorial", text: "Classificamos conteúdo existente: manter, atualizar, consolidar, redirecionar ou remover." },
      { title: "Briefs orientados por evidência", text: "Definimos pergunta central, fontes, experiência necessária, diferenciação, links e CTA antes da redação." },
      { title: "Governança", text: "Criamos critérios de autoria, atualização, revisão, fontes e mensuração para evitar voltar ao conteúdo commodity." },
    ],
    deliverables: [["Mapa de jornada", "Perguntas e intenções organizadas por estágio de decisão."], ["Grafo temático", "Tópicos, entidades e relações que precisam ser cobertos pelo ecossistema editorial."], ["Inventário de conteúdo", "Decisão documentada sobre cada ativo relevante: manter, melhorar, unir, redirecionar ou excluir."], ["Backlog editorial", "Páginas e artigos priorizados por demanda, lacuna estratégica e proximidade comercial."], ["Briefs de produção", "Estrutura de resposta, fontes, diferenciação, autoria, links internos e CTA."], ["Política editorial", "Padrões para revisão, atualização, evidência e uso responsável de IA na produção." ]],
    measurement: ["cobertura de consultas por intenção", "crescimento de páginas relevantes", "links internos para serviços", "conversões assistidas", "atualizações/decay", "menções/citações de conteúdos como fonte"],
    faqs: [
      { question: "Vocês produzem os artigos?", answer: "Podemos estruturar o planejamento, briefs e revisão ou assumir frentes de produção. O ponto obrigatório é preservar qualidade, fontes e experiência real." },
      { question: "Quantos artigos precisamos publicar por mês?", answer: "Não existe um número universal. A prioridade é cobrir lacunas relevantes com qualidade e manter o que já existe atualizado, em vez de perseguir volume fixo." },
      { question: "Conteúdo gerado por IA pode ser usado?", answer: "IA pode apoiar pesquisa, organização e produção, mas não substitui revisão, fontes, experiência, originalidade e responsabilidade editorial." },
    ],
  },

  geo: {
    slug: "/solucoes/geo-ia-readiness",
    code: "GENERATIVE SEARCH READINESS",
    name: "Generative Search Readiness",
    title: "Descubra como sua empresa está sendo interpretada nas novas interfaces de busca — sem promessas mágicas de IA.",
    metaTitle: "GEO e Generative Search Readiness | AUDITSEO",
    metaDescription:
      "Avalie presença, entidade, conteúdo, evidências e fontes para melhorar a preparação da empresa para ChatGPT, Gemini, AI Overviews e outras interfaces generativas.",
    eyebrow: "PREPARAÇÃO PARA BUSCA COM IA",
    lead:
      "A pergunta útil não é 'como hackear o ChatGPT'. É: quando sistemas generativos respondem perguntas relevantes ao seu mercado, sua empresa é compreendida corretamente, aparece quando deveria e possui fontes suficientes para ser verificada?",
    directAnswer:
      "Generative Search Readiness é a solução da AUDITSEO para medir e fortalecer os sinais que influenciam como uma empresa pode ser recuperada, interpretada e eventualmente citada em interfaces generativas de busca.",
    problemTitle: "GEO sem baseline vira opinião. GEO sem fundamentos de busca vira maquiagem.",
    problemText: [
      "Plataformas generativas usam diferentes mecanismos de recuperação, síntese e citação. Nenhuma consultoria controla diretamente as respostas finais.",
      "Por isso a AUDITSEO trata IA como uma interface adicional dentro de Search Intelligence: medimos o que aparece, analisamos as fontes e corrigimos lacunas de entidade, conteúdo, rastreabilidade e autoridade que também melhoram a presença de busca como um todo.",
    ],
    warningSignals: ["marca ausente em prompts importantes", "descrições incorretas ou inconsistentes da empresa", "concorrentes citados onde a empresa possui legitimidade", "poucas fontes externas qualificadas", "conteúdo sem respostas diretas e verificáveis", "GEO tratado apenas como schema ou llms.txt"],
    fit: ["empresas já com alguma presença orgânica", "marcas em mercados de pesquisa e comparação", "operações que desejam baseline de visibilidade em IA", "empresas que precisam organizar entidade e evidências"],
    notFit: ["quem exige garantia de aparecer em uma ferramenta específica", "operações sem conteúdo ou presença básica rastreável", "empresas buscando manipular respostas ou fabricar consenso"],
    diagnosticQuestion:
      "Em um conjunto fixo de perguntas importantes para o negócio, como a empresa é descrita, quais concorrentes aparecem e quais fontes sustentam as respostas?",
    approach: [
      { title: "Prompt benchmark", text: "Definimos um conjunto estável de perguntas representativas da jornada e do mercado." },
      { title: "Baseline multi-interface", text: "Registramos presença, menções, citações e contexto nas plataformas que fizerem sentido para o projeto." },
      { title: "Auditoria das fontes", text: "Mapeamos quais domínios e tipos de evidência estão sustentando as respostas observadas." },
      { title: "Gap de entidade e conteúdo", text: "Identificamos informações ausentes, ambíguas, fracas ou pouco verificáveis no ecossistema da marca." },
      { title: "Plano de readiness", text: "Priorizamos melhorias que reforçam recuperação, clareza e verificabilidade sem depender de truques de curto prazo." },
    ],
    deliverables: [["Prompt set", "Perguntas fixas por intenção, estágio e contexto competitivo."], ["Baseline de presença", "Registro das respostas observadas, menções, citações e concorrentes por interface."], ["Mapa de fontes", "Domínios e evidências usados nas respostas e gaps de cobertura externa."], ["Auditoria de entidade", "Clareza de empresa, serviços, especialistas, categorias, localidades e relações."], ["Backlog GEO/AI Search", "Melhorias técnicas, editoriais e de autoridade priorizadas por hipótese."], ["Protocolo de reavaliação", "Método para repetir medições sem confundir mudanças de modelo com resultado da implementação." ]],
    measurement: ["mention rate no prompt set", "citation rate", "share of voice observado", "correção de descrições", "diversidade/qualidade de fontes", "referrals identificáveis de plataformas de IA"],
    faqs: [
      { question: "Vocês garantem aparecer no ChatGPT?", answer: "Não. A AUDITSEO mede presença e trabalha os fatores que podem melhorar recuperação e confiança, mas não controla a resposta final de sistemas terceiros." },
      { question: "GEO substitui SEO?", answer: "Não. Rastreamento, indexação, conteúdo, autoridade e experiência continuam sendo fundamentos. GEO adiciona uma camada de medição e preparação para interfaces generativas." },
      { question: "llms.txt é suficiente?", answer: "Não. Arquivos auxiliares podem fazer parte de uma implementação, mas não substituem conteúdo acessível, entidade clara, fontes, evidências e autoridade." },
    ],
  },

  migration: {
    slug: "/solucoes/migracao-risco-seo",
    code: "SEO MIGRATION & RISK CONTROL",
    name: "SEO Migration & Risk Control",
    title: "Mude o site sem apagar os sinais orgânicos que a empresa levou anos para construir.",
    metaTitle: "Migração de Site e Controle de Risco SEO | AUDITSEO",
    metaDescription:
      "Planejamento e validação de migração SEO: inventário de URLs, redirects, conteúdo, canonicals, links, indexação, templates e monitoramento pós-release.",
    eyebrow: "MIGRAÇÃO OU REFORMULAÇÃO",
    lead:
      "Trocar domínio, CMS, arquitetura, design ou templates altera como buscadores descobrem e interpretam o site. SEO Migration & Risk Control transforma a migração em um processo verificável, não em uma aposta de lançamento.",
    directAnswer:
      "SEO Migration & Risk Control é a solução da AUDITSEO para preservar e transferir sinais de descoberta, relevância e autoridade durante mudanças estruturais do site.",
    problemTitle: "Uma migração pode parecer perfeita para o usuário e ainda destruir cobertura orgânica nos bastidores.",
    problemText: [
      "URLs desaparecidas, redirects em cadeia, canonicals errados, conteúdo reduzido, links internos quebrados e mudanças de renderização podem remover sinais acumulados por anos.",
      "O controle precisa acontecer antes, durante e depois do release, com inventário, equivalência e monitoramento suficientes para detectar regressões rapidamente.",
    ],
    warningSignals: ["mudança de domínio ou subdomínio", "troca de CMS/framework", "redesign com alteração de conteúdo", "consolidação de categorias e páginas", "mudanças grandes de URL", "lançamento sem crawler/comparação pré e pós"],
    fit: ["sites com tráfego e histórico orgânico relevantes", "projetos de redesign, replatform ou rebranding", "fusões de domínios ou consolidações de arquitetura"],
    notFit: ["projetos novos sem ativos orgânicos a preservar", "sites já migrados e em queda — que exigem Search Recovery", "equipes que não conseguem implementar redirects e correções críticas antes do release"],
    diagnosticQuestion:
      "Para cada URL e sinal importante do site atual, sabemos qual será o equivalente no novo ambiente e como validaremos que a transferência ocorreu corretamente?",
    approach: [
      { title: "Inventário pré-migração", text: "Capturamos URLs, status, canonicals, metadata, conteúdo, links internos e performance orgânica relevante." },
      { title: "Mapa de equivalência", text: "Definimos destino e tratamento de cada ativo: manter, redirecionar, consolidar ou remover." },
      { title: "Requisitos de release", text: "Transformamos riscos SEO em critérios objetivos para desenvolvimento, QA e aprovação." },
      { title: "Smoke pós-release", text: "Comparamos status, redirects, canonicals, sitemap, robots, renderização, links e páginas prioritárias." },
      { title: "Monitoramento de transição", text: "Acompanhamos rastreamento, indexação, consultas e conversões até que o novo ambiente estabilize." },
    ],
    deliverables: [["Inventário de URLs", "Base canônica do ambiente antigo com sinais e importância de cada ativo."], ["Mapa de redirects", "Origem, destino, justificativa e validação de equivalência."], ["Checklist técnico", "Critérios obrigatórios de indexação, canonical, robots, sitemap, templates e renderização."], ["Plano de QA", "Casos de teste para staging e produção antes de liberar a migração."], ["Monitor pós-release", "Indicadores e páginas que precisam ser observados com prioridade."], ["Registro de incidentes", "Problemas encontrados, correções aplicadas e impacto observado durante a estabilização." ]],
    measurement: ["status e redirects corretos", "paridade de indexação", "retenção de consultas prioritárias", "variação de cliques/conversões", "erros 404/5xx", "tempo de estabilização pós-release"],
    faqs: [
      { question: "Toda migração perde tráfego?", answer: "Não necessariamente. Alguma volatilidade pode ocorrer, mas planejamento e equivalência reduzem riscos evitáveis e aceleram a identificação de regressões." },
      { question: "Vocês precisam acessar o código?", answer: "Nem sempre. Podemos trabalhar com staging, crawls, requisitos e validações junto à equipe técnica; acesso adicional depende da arquitetura do projeto." },
      { question: "Quando começar o SEO da migração?", answer: "Antes de URLs, templates e arquitetura estarem congelados. Entrar apenas na semana do lançamento reduz drasticamente a capacidade de prevenção." },
    ],
  },

  evolution: {
    slug: "/solucoes/evolucao-organica",
    code: "ORGANIC EVOLUTION CYCLE",
    name: "Organic Evolution Cycle",
    title: "Quando o básico já funciona, crescimento passa a depender de ciclos melhores de decisão.",
    metaTitle: "Consultoria SEO Contínua e Evolução Orgânica | AUDITSEO",
    metaDescription:
      "Ciclo contínuo de Search Intelligence para empresas maduras: novas intenções, concorrência, conteúdo, autoridade, Search AI, experimentos e roadmap orientado por dados.",
    eyebrow: "CRESCIMENTO ORGÂNICO ESTAGNADO",
    lead:
      "Operações maduras raramente precisam de mais um checklist mensal. Precisam identificar onde ainda existe demanda, quais ativos perderam eficiência e quais hipóteses merecem o próximo investimento.",
    directAnswer:
      "Organic Evolution Cycle é a solução contínua da AUDITSEO para empresas que já possuem base orgânica e precisam transformar dados, mudanças de mercado e novos comportamentos de busca em ciclos priorizados de crescimento.",
    problemTitle: "Depois de certo nível de maturidade, repetir a mesma rotina deixa de produzir o mesmo crescimento.",
    problemText: [
      "Conteúdos envelhecem, concorrentes ocupam novas intenções, SERPs mudam, produtos evoluem e interfaces generativas criam novas formas de descoberta.",
      "O trabalho contínuo precisa aprender com o que aconteceu, interromper tarefas de baixo valor e concentrar recursos nas oportunidades que surgem do próprio mercado e dos dados da empresa.",
    ],
    warningSignals: ["tráfego estável há muitos meses", "mesmos relatórios e tarefas recorrentes", "páginas antigas perdendo cobertura", "novas ofertas sem estratégia de busca", "concorrentes crescendo em clusters adjacentes", "dados de Search AI, local ou conversão desconectados do roadmap"],
    fit: ["operações com histórico e base orgânica", "empresas com time interno ou fornecedores executores", "marcas que desejam governança contínua e priorização", "negócios com múltiplos clusters ou mercados"],
    notFit: ["sites sem fundação mínima", "quedas críticas que precisam primeiro de recuperação", "empresas buscando apenas relatório mensal sem capacidade de implementação"],
    diagnosticQuestion:
      "Com base nos últimos ciclos, sabemos quais iniciativas geraram movimento, quais deixaram de funcionar e onde está a próxima fronteira de demanda e autoridade?",
    approach: [
      { title: "Baseline por ciclo", text: "Registramos o estado atual para que cada rodada tenha comparação e hipótese explícita." },
      { title: "Opportunity mining", text: "Buscamos novas consultas, intents, páginas em ascensão, gaps competitivos e sinais de mudança de mercado." },
      { title: "Content decay e expansão", text: "Identificamos ativos que precisam ser atualizados, consolidados ou ampliados antes de criar novas URLs." },
      { title: "Autoridade e Search AI", text: "Reavaliamos fontes, especialistas, menções, citação e presença generativa conforme o ecossistema muda." },
      { title: "Learning Loop", text: "Cada ciclo termina com decisões documentadas sobre o que manter, interromper, testar e priorizar em seguida." },
    ],
    deliverables: [["Opportunity backlog", "Lista priorizada de novas frentes com evidência e racional de negócio."], ["Mapa de decay", "Conteúdos e páginas que perderam cobertura, precisão ou capacidade de conversão."], ["Radar competitivo", "Movimentos de concorrentes, novas páginas, intenções e formatos relevantes."], ["Roadmap trimestral", "Sequência de iniciativas com hipóteses, responsáveis e métricas."], ["Relatório de aprendizado", "O que mudou, o que não mudou e quais decisões são justificadas pelos dados."], ["Revisão de Search AI", "Repetição do benchmark de prompts e análise de mudanças observadas quando aplicável." ]],
    measurement: ["novas consultas e clusters", "incremento em páginas prioritárias", "conteúdo recuperado de decay", "conversões orgânicas", "share competitivo", "evolução do prompt benchmark"],
    faqs: [
      { question: "Isso é uma mensalidade de SEO tradicional?", answer: "Não. O foco é um ciclo de inteligência, priorização e validação. Tarefas recorrentes só continuam quando ainda resolvem um problema demonstrável." },
      { question: "A AUDITSEO pode trabalhar com nosso time interno?", answer: "Sim. Esse é um dos cenários mais adequados: a consultoria organiza hipóteses, prioridades e validação enquanto o time executa." },
      { question: "Com que frequência o roadmap muda?", answer: "Sempre que novas evidências justificarem. A governança precisa evitar tanto mudanças impulsivas quanto planos congelados que ignoram o mercado." },
    ],
  },
};
