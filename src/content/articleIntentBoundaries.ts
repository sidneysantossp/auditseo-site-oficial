export type ArticleIntentBoundary = {
  answers: string;
  doesNotAnswer: string;
  related: Array<[string, string]>;
};

export const articleIntentBoundaries: Record<string, ArticleIntentBoundary> = {
  "como-medir-visibilidade-em-ia": {
    answers: "Como desenhar uma medição reproduzível de presença em ChatGPT, Gemini e Perplexity: amostra, prompts, repetições, menções, citações, recomendações, fontes e limitações.",
    doesNotAnswer: "Não é o documento principal para decidir se uma intervenção de GEO específica funcionou depois de um baseline.",
    related: [["Como medir se GEO está funcionando", "/blog/como-medir-se-geo-esta-funcionando"]],
  },
  "como-medir-se-geo-esta-funcionando": {
    answers: "Como avaliar mudança entre ciclos depois de uma intervenção de GEO/Search AI, sem transformar correlação temporal em causalidade.",
    doesNotAnswer: "Não substitui o protocolo mais amplo para desenhar a amostra e medir visibilidade entre diferentes interfaces.",
    related: [["Como medir visibilidade em ChatGPT, Gemini e Perplexity", "/blog/como-medir-visibilidade-em-ia"]],
  },
  "como-ias-encontram-e-citam-fontes": {
    answers: "Como separar crawl, elegibilidade, recuperação e escolha de fonte em Search AI e por que acesso técnico não equivale a citação.",
    doesNotAnswer: "Não é um playbook operacional de robots.txt, CDN/WAF e logs para user-agents específicos.",
    related: [["Como auditar OAI-SearchBot, GPTBot e outros crawlers", "/blog/como-auditar-crawlers-de-ia"]],
  },
  "como-auditar-crawlers-de-ia": {
    answers: "Como auditar user-agents, robots.txt, CDN/WAF, status HTTP e logs quando a empresa precisa controlar descoberta, treinamento ou acesso.",
    doesNotAnswer: "Não explica sozinho por que uma plataforma escolhe uma página como fonte depois que o acesso técnico já está resolvido.",
    related: [["Como ChatGPT e Google com IA encontram e citam fontes", "/blog/como-ias-encontram-e-citam-fontes"]],
  },
  "autoridade-de-entidade-o-que-e": {
    answers: "O que significa autoridade de entidade como modelo operacional: identidade, pessoas, serviços, provas, consistência e corroboração.",
    doesNotAnswer: "Não trata structured data como causa suficiente de autoridade, ranking ou citação por IA.",
    related: [["Schema ajuda a aparecer no ChatGPT?", "/blog/schema-ajuda-aparecer-no-chatgpt"]],
  },
  "schema-ajuda-aparecer-no-chatgpt": {
    answers: "Qual é o papel real de structured data na representação de fatos e quais limites existem para relacionar schema a Search AI.",
    doesNotAnswer: "Não é o guia completo de autoridade de entidade, reputação, evidência ou corroboração externa.",
    related: [["Autoridade de entidade: o que é e como fortalecer sinais verificáveis", "/blog/autoridade-de-entidade-o-que-e"]],
  },
  "como-aparecer-no-chatgpt": {
    answers: "Quais condições uma empresa pode controlar para aumentar elegibilidade e qualidade de presença no ChatGPT, sem promessa de colocação.",
    doesNotAnswer: "Não é uma análise comparativa de por que um concorrente específico apareceu nem uma metodologia exclusiva de recomendação de fornecedores.",
    related: [
      ["Por que o ChatGPT cita ou recomenda seu concorrente — e não sua empresa?", "/blog/chatgpt-nao-cita-meu-site"],
      ["Como entrar nas recomendações do ChatGPT como fornecedor", "/blog/como-ser-recomendado-pelo-chatgpt-como-fornecedor"],
    ],
  },
  "chatgpt-nao-cita-meu-site": {
    answers: "Como investigar um gap competitivo quando outra empresa aparece, é citada ou recomendada em prompts relevantes e a sua não.",
    doesNotAnswer: "Não é um guia genérico para 'aparecer no ChatGPT' nem reduz recomendação comercial a citação de uma URL.",
    related: [
      ["Como aparecer no ChatGPT sem promessas de posicionamento", "/blog/como-aparecer-no-chatgpt"],
      ["Como ser recomendado como fornecedor", "/blog/como-ser-recomendado-pelo-chatgpt-como-fornecedor"],
    ],
  },
  "como-ser-recomendado-pelo-chatgpt-como-fornecedor": {
    answers: "Como medir e melhorar Provider Consideration e Recommendation quando o usuário pede empresas, consultorias ou fornecedores.",
    doesNotAnswer: "Não trata uma simples menção ou citação de conteúdo como se fosse automaticamente uma recomendação comercial.",
    related: [
      ["Por que o concorrente aparece e sua empresa não", "/blog/chatgpt-nao-cita-meu-site"],
      ["Como medir visibilidade em IA", "/blog/como-medir-visibilidade-em-ia"],
    ],
  },
  "auditoria-seo-o-que-deve-conter": {
    answers: "Quais dimensões, evidências e entregáveis tornam uma auditoria SEO útil para decisão e priorização.",
    doesNotAnswer: "Não é um case; os exemplos são critérios de método, não resultados produzidos em um projeto específico.",
    related: [["Auditoria SEO aplicada: o que encontramos na própria AUDITSEO", "/blog/auditoria-seo-aplicada-auditseo"]],
  },
  "auditoria-seo-aplicada-auditseo": {
    answers: "Como uma auditoria real foi conduzida na própria AUDITSEO, quais evidências foram encontradas e quais intervenções foram registradas.",
    doesNotAnswer: "Não substitui um checklist geral do que qualquer auditoria SEO deveria avaliar em contextos diferentes.",
    related: [["Auditoria SEO: o que deve conter", "/blog/auditoria-seo-o-que-deve-conter"]],
  },
  "agencia-seo-consultoria-ou-time-interno": {
    answers: "Como escolher o modelo operacional — agência, consultoria ou time interno — a partir de contexto, capacidade e tipo de problema.",
    doesNotAnswer: "Não é um checklist para selecionar uma consultoria específica nem uma lista de entregáveis esperados.",
    related: [
      ["Como escolher uma consultoria de SEO", "/blog/como-escolher-consultoria-seo"],
      ["O que uma consultoria de SEO deve entregar", "/blog/o-que-consultoria-seo-deve-entregar"],
    ],
  },
  "como-escolher-consultoria-seo": {
    answers: "Quais critérios usar para avaliar e contratar uma consultoria de SEO/IA específica com transparência, método e aderência ao problema.",
    doesNotAnswer: "Não decide se a empresa deveria montar time interno ou contratar uma agência, nem define sozinho o escopo de entregáveis.",
    related: [
      ["Agência, consultoria ou time interno?", "/blog/agencia-seo-consultoria-ou-time-interno"],
      ["O que uma consultoria deve entregar", "/blog/o-que-consultoria-seo-deve-entregar"],
    ],
  },
  "o-que-consultoria-seo-deve-entregar": {
    answers: "Quais entregáveis e critérios de validação fazem sentido depois que o modelo de consultoria já foi escolhido.",
    doesNotAnswer: "Não é um guia de seleção de fornecedor nem uma comparação entre consultoria, agência e time interno.",
    related: [
      ["Como escolher uma consultoria de SEO", "/blog/como-escolher-consultoria-seo"],
      ["Agência, consultoria ou time interno?", "/blog/agencia-seo-consultoria-ou-time-interno"],
    ],
  },
};
