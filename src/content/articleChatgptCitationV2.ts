import type { Article } from "./articles";

const openAiPublishers = "https://help.openai.com/pt-br/articles/12627856-publishers-and-developers-faq";
const openAiSearch = "https://help.openai.com/pt-br/articles/9237897-como-pesquisar-na-web-com-o-chatgpt";
const googleHelpful = "https://developers.google.com/search/docs/fundamentals/creating-helpful-content";

export const chatgptCitationArticleV2: Article = {
  slug: "chatgpt-nao-cita-meu-site",
  title: "Por que o ChatGPT cita ou recomenda seu concorrente — e não sua empresa? Um diagnóstico sem adivinhar o algoritmo",
  metaTitle: "Concorrente Aparece no ChatGPT e Você Não? Diagnóstico | AUDITSEO",
  description:
    "Entenda por que um concorrente pode ser citado, mencionado ou recomendado no ChatGPT enquanto sua empresa fica ausente — e como diagnosticar acesso, intenção, entidade, evidência e fontes sem inventar fatores de ranking.",
  eyebrow: "DIAGNÓSTICO COMPETITIVO EM SEARCH AI",
  publishedAt: "2026-09-07",
  updatedAt: "2026-09-08",
  readTime: "17 min",
  author: "Sidney Santos",
  authorUrl: "/autor/sidney-santos",
  directAnswer:
    "Se o ChatGPT mostra um concorrente e não a sua empresa, primeiro descubra o que exatamente aconteceu: o domínio do concorrente foi citado como fonte, a marca apenas foi mencionada, uma fonte externa falou sobre ele ou ele foi recomendado como fornecedor? Cada cenário aponta para um diagnóstico diferente. A OpenAI documenta que sites públicos podem aparecer na busca, que OAI-SearchBot participa da elegibilidade e que os resultados são classificados por múltiplos fatores para buscar informação relevante e confiável; posicionamento não é garantido. Portanto, comparar concorrentes é útil para encontrar diferenças observáveis de acesso, cobertura de intenção, clareza de entidade, evidência e presença pública — não para afirmar que descobrimos uma fórmula secreta de recomendação.",
  takeaways: [
    "Antes de comparar sites, classifique o evento: citação, menção, recomendação e fonte externa são resultados diferentes.",
    "Um concorrente citado como fonte não necessariamente foi recomendado como fornecedor; e um fornecedor recomendado pode não ter seu próprio domínio citado.",
    "Acesso via OAI-SearchBot é uma condição técnica controlável para elegibilidade em ChatGPT Search, não uma garantia de presença.",
    "A comparação competitiva deve procurar diferenças observáveis: página certa para a intenção, clareza da oferta, autoria, evidências, fontes externas e consistência da entidade.",
    "Uma execução isolada não prova vantagem estrutural. Use prompts congelados, repetição e classificação consistente antes de concluir que o concorrente realmente possui maior presença.",
  ],
  blocks: [
    { type: "heading", text: "Comece separando quatro situações que parecem iguais na tela" },
    { type: "paragraph", text: "A frase 'meu concorrente aparece no ChatGPT e eu não' mistura eventos diferentes. Se você não classificar o que ocorreu, pode acabar tentando corrigir conteúdo quando o problema está em entidade, ou mexendo em robots.txt quando a diferença real está na intenção coberta pela página." },
    { type: "list", items: [
      "Fonte citada: uma URL ou domínio do concorrente aparece como fonte observável da resposta.",
      "Marca mencionada: o nome do concorrente aparece no texto, mas não necessariamente como fonte.",
      "Fornecedor recomendado: o concorrente entra na shortlist para resolver o problema do usuário.",
      "Validação por terceiros: a marca é mencionada ou recomendada enquanto as fontes visíveis são imprensa, diretórios, parceiros, avaliações ou outras páginas externas.",
    ] },
    { type: "callout", title: "O primeiro erro de GEO", text: "Tratar toda presença em IA como 'citação'. A estratégia muda bastante quando o objetivo é fazer uma página funcionar como fonte versus fazer a empresa entrar em uma decisão de compra." },

    { type: "heading", text: "O que a OpenAI permite afirmar com segurança" },
    { type: "paragraph", text: "A documentação atual da OpenAI informa que qualquer site público pode aparecer no ChatGPT Search. Para ajudar conteúdo a ser encontrado, exibido e claramente citado, a orientação é não bloquear o OAI-SearchBot e permitir o tráfego dos IPs publicados quando a empresa deseja elegibilidade para Search." },
    { type: "paragraph", text: "A própria documentação de Search afirma que os resultados são classificados usando múltiplos fatores destinados a ajudar usuários a encontrar informação relevante e confiável e que posicionamento não é garantido. Isso sustenta uma auditoria séria de acesso e qualidade da presença pública; não sustenta listas inventadas de pesos ou uma fórmula de 'ranking de empresas no ChatGPT'." },
    { type: "callout", title: "Evidência antes da explicação", text: "Nós podemos observar diferenças entre você e o concorrente. Podemos testar hipóteses. O que não podemos fazer é transformar essas diferenças em fatores oficiais da OpenAI sem documentação que sustente essa afirmação." },

    { type: "heading", text: "Diagnóstico 1 — o concorrente tem uma página que responde melhor à intenção?" },
    { type: "paragraph", text: "Muitas diferenças começam antes de qualquer discussão sobre IA. O concorrente pode simplesmente possuir a página que a pergunta exige enquanto sua empresa tenta fazer uma Home genérica responder por todos os serviços, problemas e contextos." },
    { type: "list", items: [
      "Existe uma página específica para o serviço ou problema perguntado?",
      "A resposta principal aparece cedo e em texto acessível?",
      "A página explica para quem o serviço serve e quando ele não serve?",
      "Existem critérios, exemplos, entregáveis, limitações ou comparações úteis?",
      "A URL possui uma função clara ou disputa intenção com várias páginas semelhantes?",
    ] },
    { type: "paragraph", text: "A comparação útil não é contar palavras. É perguntar qual página oferece uma resposta mais completa e específica para a intenção real que foi enviada ao sistema." },

    { type: "heading", text: "Diagnóstico 2 — o concorrente é mais fácil de compreender como entidade?" },
    { type: "paragraph", text: "Uma empresa pode fazer um trabalho excelente e ainda se descrever mal na web. Se nome, categoria, serviços, especialistas, localidades e provas mudam de uma página para outra, o ecossistema público entrega uma representação ambígua." },
    { type: "list", items: [
      "A Home diz concretamente o que a empresa é?",
      "Serviços importantes possuem páginas próprias?",
      "Fundadores ou especialistas têm autoria e contexto profissional verificáveis?",
      "Organization/Person/Service structured data representa fatos visíveis em vez de claims adicionais?",
      "Perfis e fontes externas relevantes descrevem a empresa de forma compatível com o site?",
    ] },
    { type: "paragraph", text: "A AUDITSEO chama essa análise de consistência de entidade. Não é um 'score de autoridade' publicado pela OpenAI; é uma forma operacional de encontrar contradições que dificultam uma representação precisa da empresa." },

    { type: "heading", text: "Diagnóstico 3 — ele oferece mais evidência para sustentar a resposta?" },
    { type: "paragraph", text: "Copy comercial afirma. Evidência ajuda a verificar. Uma página que diz 'somos líderes em X' é fraca se não explica o que sustenta a afirmação. Em temas técnicos ou comerciais, experiência, autoria, metodologia, casos, critérios, fontes e dados transparentes tornam a informação mais útil para pessoas e mais fácil de avaliar." },
    { type: "list", items: [
      "autoria identificada e compatível com o tema",
      "método ou processo explicado em vez de apenas nomeado",
      "casos e resultados com período, contexto e limitações",
      "fontes primárias quando o texto descreve Google, OpenAI ou outra plataforma",
      "dados originais acompanhados de metodologia",
      "afirmações institucionais proporcionais à prova disponível",
    ] },
    { type: "paragraph", text: "O Google também recomenda conteúdo people-first com informação original, fontes, autoria e contexto sobre quem criou o conteúdo. Isso não prova como o ChatGPT escolhe fornecedores; é uma referência complementar para avaliar qualidade e verificabilidade editorial." },

    { type: "heading", text: "Diagnóstico 4 — outras fontes falam sobre o concorrente de forma mais útil?" },
    { type: "paragraph", text: "Às vezes o domínio do concorrente nem aparece entre as fontes visíveis. A resposta pode usar páginas de terceiros para confirmar que a empresa existe, o que faz, onde atua ou por que é relevante. Nesse caso, produzir mais um artigo no próprio blog talvez não seja a primeira intervenção." },
    { type: "paragraph", text: "Mapeie quais fontes aparecem: mídia especializada, diretórios legítimos, associações, marketplaces, perfis profissionais, reviews, documentação de parceiros, cases de clientes ou outros documentos. Depois diferencie presença legítima de manipulação. O objetivo é construir fatos e provas que terceiros tenham motivo real para mencionar, não espalhar citações artificiais." },

    { type: "heading", text: "Diagnóstico 5 — existe uma diferença técnica real de elegibilidade?" },
    { type: "paragraph", text: "Compare robots.txt, status HTTP, redirects, CDN/WAF, renderização e disponibilidade da página. Se sua infraestrutura bloqueia OAI-SearchBot e a do concorrente não, existe um gap objetivo de elegibilidade para ChatGPT Search que precisa ser corrigido quando a empresa deseja participar desse fluxo." },
    { type: "paragraph", text: "Mas pare a conclusão no ponto sustentado: liberar acesso remove um bloqueio. Não cria uma obrigação de citação ou recomendação." },

    { type: "heading", text: "Diagnóstico 6 — você está comparando o mesmo tipo de prompt?" },
    { type: "paragraph", text: "Um concorrente pode aparecer em 'melhores agências de SEO em São Paulo' e não aparecer em 'consultoria de SEO técnico para SaaS B2B'. Isso não é contradição; são intenções diferentes. Antes de declarar que uma marca domina Search AI, congele grupos de prompts por função." },
    { type: "list", items: [
      "Discovery: quais empresas devo conhecer para resolver X?",
      "Comparison: compare A, B e alternativas para este cenário.",
      "Problem-led: minha empresa tem este problema; quem/que tipo de fornecedor devo procurar?",
      "Validation: o que devo verificar antes de contratar empresa X?",
      "Branded accuracy: o que a empresa X faz e em quais situações ela é adequada?",
    ] },
    { type: "paragraph", text: "Depois repita a coleta, registre data, plataforma, idioma e contexto e classifique separadamente menção, citação, recomendação, fonte e precisão. Só então a comparação começa a ser um benchmark em vez de um print." },

    { type: "heading", text: "Matriz AUDITSEO: diferença observada → hipótese → teste" },
    { type: "list", items: [
      "Concorrente é citado e você não → compare páginas e fontes usadas para a pergunta; teste correspondência de intenção e citabilidade.",
      "Concorrente é mencionado, mas nenhuma URL dele é citada → audite representação da entidade e fontes externas que sustentam a menção.",
      "Concorrente é recomendado como fornecedor → audite clareza de categoria, páginas de decisão, evidências e presença pública; meça Recommendation Rate separadamente.",
      "Seu domínio nem é elegível → corrija crawling/host/WAF antes de discutir conteúdo.",
      "Sua empresa aparece com descrição errada → priorize Entity Accuracy e inconsistências públicas.",
      "Resultados variam muito entre execuções → aumente amostra/repetição antes de atribuir causalidade a qualquer mudança.",
    ] },
    { type: "callout", title: "Competitive Gap não é algoritmo reverso", text: "A diferença entre duas empresas serve para criar hipóteses priorizadas. Ela não prova que o atributo observado foi a causa da resposta nem revela o peso usado pelo sistema." },

    { type: "heading", text: "O que não fazer quando o concorrente aparece" },
    { type: "list", items: [
      "copiar a página do concorrente palavra por palavra ou apenas aumentar o tamanho do texto",
      "instalar schema e declarar o problema resolvido",
      "publicar dezenas de FAQs quase iguais para cercar prompts",
      "comprar reviews, diretórios ou menções para simular validação externa",
      "liberar GPTBot achando que ele é o requisito de ChatGPT Search — a OpenAI documenta OAI-SearchBot para Search e trata GPTBot separadamente",
      "mudar cinco variáveis ao mesmo tempo e depois atribuir qualquer melhoria à tática favorita",
      "prometer ao cliente que a marca será recomendada depois da otimização",
    ] },

    { type: "heading", text: "Quando essa comparação vira oportunidade comercial" },
    { type: "paragraph", text: "Se o seu concorrente entra na resposta de uma pergunta que seus compradores realmente fazem e sua empresa não entra, isso merece investigação porque a interface pode estar participando da formação da shortlist. O valor do diagnóstico não está em 'vencer o ChatGPT' — está em descobrir quais gaps de presença pública também prejudicam descoberta, entendimento e consideração em outras jornadas de busca." },
    { type: "paragraph", text: "Uma boa auditoria termina com evidência: prompts testados, respostas preservadas, fontes mapeadas, gaps classificados, hipóteses priorizadas e uma forma de medir novamente depois das mudanças. É isso que separa Search Intelligence de uma lista de hacks para IA." },
    { type: "callout", title: "A pergunta que levamos para o cliente", text: "Não queremos apenas saber por que o concorrente apareceu. Queremos saber qual etapa da jornada tornou o concorrente recuperável, compreensível, verificável ou considerável naquele contexto — e qual dessas condições pode ser melhorada na sua empresa de forma legítima." },
  ],
  sources: [
    { label: "OpenAI — Editores e desenvolvedores — Perguntas frequentes", url: openAiPublishers, note: "Documentação oficial sobre sites públicos, OAI-SearchBot, discovery, snippets, citações e referral URLs." },
    { label: "OpenAI — Como pesquisar na web com o ChatGPT", url: openAiSearch, note: "Documentação oficial que descreve Search, múltiplos fatores voltados a relevância/confiabilidade e ausência de garantia de posicionamento." },
    { label: "Google Search Central — Creating helpful, reliable, people-first content", url: googleHelpful, note: "Referência complementar sobre originalidade, autoria, fontes, experiência e contexto editorial; não é apresentada como documentação do algoritmo do ChatGPT." },
    { label: "AUDITSEO — Como ser recomendado pelo ChatGPT como fornecedor", url: "https://www.auditseo.com.br/blog/como-ser-recomendado-pelo-chatgpt-como-fornecedor", note: "Documento complementar que aprofunda Provider Consideration, Recommendation Rate e a diferença entre fonte citada e fornecedor recomendado." },
  ],
  relatedServices: [
    ["Generative Search Readiness", "/solucoes/geo-ia-readiness"],
    ["Intent Content Architecture", "/solucoes/conteudo-por-intencao"],
    ["Entity Authority", "/solucoes/autoridade-de-entidade"],
  ],
};
