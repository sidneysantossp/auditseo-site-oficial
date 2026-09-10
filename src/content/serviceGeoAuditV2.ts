import type { ServicePageData } from "./services";

export const geoAuditService: ServicePageData = {
  slug: "/solucoes/geo-ia-readiness",
  code: "GENERATIVE SEARCH READINESS",
  name: "Auditoria GEO & Search AI",
  title: "Auditoria GEO e de visibilidade em IA: descubra onde sua marca desaparece, quem aparece no lugar e o que precisa mudar.",
  metaTitle: "Auditoria GEO e Visibilidade em IA | AUDITSEO",
  metaDescription:
    "Auditoria GEO e Search AI para medir menções, citações, recomendações, concorrentes, fontes, entidade e elegibilidade em ChatGPT, Gemini e outras interfaces de IA.",
  eyebrow: "DIAGNÓSTICO DE VISIBILIDADE EM IA",
  lead:
    "Antes de investir em conteúdo, schema ou qualquer iniciativa de GEO, a empresa precisa saber o que está acontecendo hoje. A auditoria cria um baseline reproduzível de presença em Search AI, mostra quais concorrentes e fontes aparecem nas perguntas importantes e separa ausência técnica, lacuna de intenção, ambiguidade de entidade e falta de evidência.",
  directAnswer:
    "A Auditoria GEO & Search AI da AUDITSEO é um diagnóstico de Generative Search Readiness. Ela mede como a marca aparece em um conjunto fixo de perguntas, distingue menção, citação e recomendação, analisa concorrentes e fontes e transforma os gaps observados em um backlog priorizado. A auditoria não promete que uma plataforma passará a citar ou recomendar a empresa.",
  problemTitle: "Sem baseline, GEO vira uma coleção de opiniões sobre respostas que mudam.",
  problemText: [
    "Uma empresa pode estar ausente porque o conteúdo não está acessível à plataforma, porque não existe uma página adequada à intenção, porque a entidade está pouco clara, porque faltam evidências públicas ou simplesmente porque outra fonte é mais adequada à pergunta observada.",
    "Misturar todas essas situações em um único score ou começar pela tática impede saber o que realmente precisa ser corrigido. O diagnóstico precisa registrar a observação primeiro e só depois formular hipóteses de intervenção.",
  ],
  warningSignals: [
    "concorrentes aparecem em perguntas comerciais relevantes e sua empresa não",
    "a marca é descrita de forma incorreta, incompleta ou inconsistente",
    "o site é citado como fonte, mas a empresa não entra na consideração como fornecedora",
    "relatórios de IA usam um score sem explicar prompts, plataforma, data ou classificação",
    "a estratégia de GEO começa por schema, llms.txt ou FAQs antes de existir baseline",
    "ninguém sabe quais fontes externas estão sustentando as respostas observadas",
  ],
  fit: [
    "empresas que querem medir presença em ChatGPT, Gemini e outras interfaces de Search AI",
    "marcas que já perceberam concorrentes aparecendo em seu lugar",
    "times que precisam de um baseline antes de investir em GEO",
    "operações que querem conectar visibilidade em IA a intenção e aquisição",
  ],
  notFit: [
    "quem exige garantia de citação, recomendação ou posição fixa",
    "empresas buscando manipular respostas ou fabricar consenso externo",
    "quem deseja apenas um print pontual sem protocolo de repetição",
  ],
  diagnosticQuestion:
    "Quando compradores fazem as perguntas que antecedem uma decisão no seu mercado, sua empresa é mencionada, citada ou recomendada? Quem aparece no lugar, quais fontes sustentam a resposta e qual é a primeira dependência observável que precisa ser investigada?",
  approach: [
    { title: "Definição do universo de prompts", text: "Congelamos perguntas por intenção — descoberta, problema, comparação, validação e contratação — antes de observar a performance da marca." },
    { title: "Baseline por interface", text: "Registramos plataforma, data, idioma, contexto e repetição e classificamos menção, citação, recomendação e precisão da entidade." },
    { title: "Mapa competitivo e de fontes", text: "Identificamos quais empresas entram na resposta, quais domínios são usados como fonte e em quais intenções a diferença aparece." },
    { title: "Auditoria de elegibilidade e entidade", text: "Verificamos acesso técnico quando documentado pela plataforma, páginas existentes, clareza da organização, serviços, especialistas e consistência pública." },
    { title: "Hipóteses e backlog", text: "Transformamos cada gap em hipótese técnica, editorial, de entidade ou autoridade e priorizamos pelo valor da intenção, evidência disponível e dependências." },
    { title: "Protocolo de repetição", text: "Definimos como a mesma amostra será repetida para observar mudança sem selecionar apenas respostas favoráveis." },
  ],
  deliverables: [
    ["Prompt set congelado", "Perguntas por intenção e estágio de decisão definidas antes do baseline."],
    ["Baseline de visibilidade", "Registro de menções, citações, recomendações, precisão de entidade e concorrentes por interface observada."],
    ["Mapa de concorrentes", "Empresas que aparecem no lugar da marca e em quais tipos de pergunta isso acontece."],
    ["Mapa de fontes", "Domínios e tipos de evidência usados nas respostas, com gaps do ecossistema da empresa."],
    ["Auditoria de elegibilidade e entidade", "Acesso documentado por plataforma quando aplicável, clareza de páginas, organização, serviços, pessoas e relações."],
    ["Backlog GEO / Search AI", "Ações priorizadas com hipótese, evidência, dependência e critério de reavaliação."],
  ],
  measurement: [
    "mention rate no prompt set",
    "citation rate",
    "recommendation rate",
    "branded entity accuracy",
    "share of voice observado na amostra",
    "fontes e domínios citados",
    "referrals identificáveis de Search AI quando disponíveis",
    "leads atribuídos quando a jornada permitir observação",
  ],
  faqs: [
    { question: "Auditoria GEO é a mesma coisa que uma auditoria SEO?", answer: "Não. Há sobreposição em técnica, conteúdo e entidade, mas a auditoria de Search AI adiciona um protocolo de prompts e observa menções, citações, recomendações, concorrentes, fontes e precisão da marca por interface. Os dois diagnósticos podem se complementar." },
    { question: "Vocês garantem que minha empresa passará a aparecer no ChatGPT?", answer: "Não. Podemos medir a situação, identificar gaps controláveis, implementar ou orientar melhorias e repetir o protocolo. A resposta final pertence a sistemas de terceiros e não pode ser garantida pela AUDITSEO." },
    { question: "Quantas perguntas são usadas?", answer: "Não existe um número universal. O conjunto precisa representar as intenções relevantes do negócio e ser pequeno o suficiente para permanecer reproduzível. A amostra, as plataformas e as repetições são documentadas antes da comparação." },
    { question: "A auditoria mede apenas o nosso site?", answer: "Não. Ela observa a marca como entidade e compara as respostas com concorrentes e fontes externas. Uma empresa pode ser recomendada sem o próprio domínio ser citado, e um domínio pode ser citado sem a empresa ser recomendada." },
    { question: "O que acontece depois da auditoria?", answer: "Os achados viram um backlog de Search Intelligence. Dependendo do gargalo, a prioridade pode ser técnica, conteúdo por intenção, autoridade de entidade, reputação, fontes externas ou simplesmente uma medição melhor antes de alterar o site." },
  ],
};
