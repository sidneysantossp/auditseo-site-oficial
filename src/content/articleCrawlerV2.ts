import type { Article } from "./articles";

const openAiPublishers = "https://help.openai.com/pt-br/articles/12627856-publishers-and-developers-faq";
const openAiSearch = "https://help.openai.com/pt-br/articles/9237897-como-pesquisar-na-web-com-o-chatgpt";
const googleRobots = "https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec";

export const crawlerArticleV2: Article = {
  slug: "como-auditar-crawlers-de-ia",
  title: "OAI-SearchBot vs GPTBot: como auditar crawlers de IA sem confundir busca e treinamento",
  metaTitle: "OAI-SearchBot vs GPTBot: Como Auditar Crawlers de IA | AUDITSEO",
  description:
    "Entenda a diferença entre OAI-SearchBot e GPTBot, como revisar robots.txt, CDN/WAF e logs e por que permitir busca não significa autorizar treinamento nem garantir citação no ChatGPT.",
  eyebrow: "AUDITORIA TÉCNICA",
  publishedAt: "2026-09-07",
  updatedAt: "2026-09-07",
  readTime: "14 min",
  author: "Sidney Santos",
  authorUrl: "/autor/sidney-santos",
  directAnswer:
    "OAI-SearchBot e GPTBot não devem ser tratados como o mesmo crawler. A documentação atual da OpenAI orienta permitir OAI-SearchBot quando o site deseja ser elegível para descoberta e inclusão em resultados da Busca do ChatGPT. Para excluir páginas de possível uso em treinamento, a OpenAI orienta bloquear GPTBot. Essas decisões podem coexistir. Permitir OAI-SearchBot melhora a elegibilidade técnica para busca, mas não garante que uma página será citada, recomendada ou posicionada em uma resposta.",
  takeaways: [
    "OAI-SearchBot está ligado à descoberta para a Busca do ChatGPT; GPTBot é um controle separado relacionado a possível treinamento.",
    "Uma empresa pode permitir OAI-SearchBot e bloquear GPTBot quando essa combinação corresponde à sua política.",
    "robots.txt declara uma política por user-agent; CDN, WAF e respostas HTTP ainda podem bloquear acesso na prática.",
    "A OpenAI informa que posicionamento na Busca do ChatGPT não é garantido mesmo quando o site é elegível.",
    "A auditoria precisa registrar objetivo, regra, infraestrutura, páginas testadas, evidência em logs e data da documentação consultada.",
  ],
  blocks: [
    { type: "heading", text: "O erro que mais causa confusão: 'bot da OpenAI' não é uma única finalidade" },
    { type: "paragraph", text: "Políticas de crawler precisam começar pela finalidade. Se a empresa deseja presença na busca, a decisão é diferente de autorizar ou não possível uso para treinamento. Colocar todos os user-agents em uma mesma regra pode produzir exatamente o efeito contrário ao desejado." },

    { type: "heading", text: "OAI-SearchBot: descoberta para a Busca do ChatGPT" },
    { type: "paragraph", text: "A OpenAI orienta publishers que desejam que conteúdo possa ser encontrado, exibido, citado e vinculado na Busca do ChatGPT a não bloquear o OAI-SearchBot. A página de ajuda sobre Busca do ChatGPT também diz que, para elegibilidade, o host ou CDN precisa permitir tráfego dos endereços IP publicados do robô de busca." },
    { type: "callout", title: "Elegibilidade não é colocação garantida", text: "A própria OpenAI afirma que a classificação usa múltiplos fatores e que não existe garantia de posicionamento. Liberar OAI-SearchBot remove uma barreira técnica; não compra uma citação." },

    { type: "heading", text: "GPTBot: um controle separado para possível treinamento" },
    { type: "paragraph", text: "Na FAQ atual para publishers, a OpenAI orienta bloquear o user-agent GPTBot nos sites e páginas que o publisher deseja excluir de possível treinamento. Isso mostra que busca e treinamento possuem controles distintos e não devem ser tratados como a mesma permissão." },
    { type: "paragraph", text: "Portanto, uma política pode permitir OAI-SearchBot e bloquear GPTBot. A escolha depende da política de dados da organização, não de uma suposta pontuação de SEO." },

    { type: "heading", text: "Uma matriz simples para decidir" },
    { type: "list", items: [
      "quero elegibilidade para Busca do ChatGPT → revisar acesso do OAI-SearchBot",
      "não quero permitir possível uso para treinamento → revisar regra do GPTBot",
      "quero bloquear completamente descoberta pelo meu domínio → avaliar robots.txt e noindex conforme o efeito desejado e a documentação atual",
      "quero saber se o bot realmente chega às páginas → validar CDN/WAF e logs, não apenas o arquivo robots.txt",
    ] },

    { type: "heading", text: "robots.txt não conta a história inteira" },
    { type: "paragraph", text: "Uma regra Allow pode estar correta enquanto a infraestrutura devolve 403, 429 ou desafio de bot. Por isso a auditoria precisa testar o caminho completo entre crawler e conteúdo." },
    { type: "list", items: [
      "robots.txt no host e protocolo corretos",
      "firewall e bot management",
      "CDN e allowlist de IP quando documentada",
      "status HTTP das URLs prioritárias",
      "autenticação, CAPTCHA e desafios JavaScript",
      "conteúdo principal disponível no HTML recebido",
      "logs de edge ou servidor quando disponíveis",
    ] },

    { type: "heading", text: "Por que noindex e robots.txt não são equivalentes" },
    { type: "paragraph", text: "A FAQ da OpenAI observa que, para um crawler ler uma meta tag noindex, ele precisa ter permissão para rastrear a página. Isso é um lembrete importante: bloquear crawl e pedir ao crawler que leia uma diretiva dentro da página são ações diferentes." },
    { type: "paragraph", text: "A documentação atual também observa que, em certos cenários, um URL bloqueado conhecido por outra fonte pode ter apenas link e título apresentados. A política deve ser desenhada a partir do efeito desejado, não de uma regra copiada de outro site." },

    { type: "heading", text: "O que testar além da homepage" },
    { type: "list", items: [
      "home e páginas institucionais que definem a entidade",
      "páginas de serviço e produto",
      "artigos e documentos que podem funcionar como fonte",
      "páginas de autores e especialistas",
      "estudos, metodologia, cases e documentos de prova",
      "subdomínios relevantes quando possuem robots.txt próprio",
    ] },

    { type: "heading", text: "Como usar logs sem extrapolar o que eles provam" },
    { type: "paragraph", text: "Logs podem demonstrar requests diretos ao seu domínio: user-agent, URL, status, timestamp e frequência. Eles são ótimos para confirmar bloqueios operacionais. A ausência de request, porém, não prova que a plataforma desconhece a informação, porque respostas podem usar outros mecanismos e fontes." },

    { type: "heading", text: "Não transforme crawler policy em 'GEO score'" },
    { type: "paragraph", text: "Permitir um bot adequado é uma condição técnica que pode ser necessária ao objetivo. Não existe base para transformar a presença de uma regra Allow em um percentual de autoridade, prontidão de IA ou probabilidade de citação. A etapa seguinte continua sendo conteúdo, intenção, entidade, confiança e citabilidade." },

    { type: "heading", text: "Checklist de auditoria" },
    { type: "list", items: [
      "definir objetivo de busca e política de treinamento separadamente",
      "confirmar user-agent e finalidade em documentação oficial atual",
      "registrar a regra efetiva do robots.txt",
      "testar CDN/WAF e status HTTP das páginas estratégicas",
      "validar conteúdo recebido e meta robots quando aplicável",
      "consultar logs quando disponíveis",
      "documentar data, evidência, responsável e próxima revisão",
    ] },
    { type: "callout", title: "Princípio AUDITSEO", text: "Crawler policy é governança de acesso. Ela entra no estágio Crawl do diagnóstico. Search AI ainda depende das etapas seguintes: Retrieve → Understand → Trust → Cite." },
  ],
  sources: [
    { label: "OpenAI — Editores e desenvolvedores — FAQ", url: openAiPublishers, note: "Fonte oficial atual para distinção entre OAI-SearchBot, descoberta na busca e GPTBot como controle relacionado a possível treinamento." },
    { label: "OpenAI — Como pesquisar na web com o ChatGPT", url: openAiSearch, note: "Fonte oficial sobre elegibilidade via OAI-SearchBot, IPs publicados e ausência de garantia de posicionamento." },
    { label: "Google Crawling Infrastructure — robots.txt specification", url: googleRobots, note: "Referência técnica pública sobre interpretação do robots.txt e regras por user-agent." },
  ],
  relatedServices: [["Generative Search Readiness", "/solucoes/geo-ia-readiness"], ["Search Foundation", "/solucoes/projetos-comecando-do-zero"], ["SEO Migration & Risk Control", "/solucoes/migracao-risco-seo"]],
};
