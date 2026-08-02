import SiteFooter from "./SiteFooter";
import AuthorBio from "./AuthorBio";

interface Action {
  label: string;
  href?: string;
  targetId?: string;
}

interface Card {
  title: string;
  text?: string;
  tag?: string;
  href?: string;
  items?: string[];
}

interface Section {
  eyebrow?: string;
  title: string;
  text?: string;
  tone?: "dark" | "beige";
  cards?: Card[];
  items?: string[];
  split?: Card[];
}

interface ContentPageData {
  eyebrow: string;
  title: string;
  subheadline: string;
  support?: string;
  actions?: Action[];
  sections: Section[];
  finalCta?: {
    eyebrow?: string;
    title: string;
    text: string;
    actions: Action[];
  };
  centeredHero?: boolean;
}

interface ContentPageProps {
  path: string;
  onNavigate: (targetId: string) => void;
}

const editorialContentPaths = new Set([
  "/guias",
  "/estudos-busca-ia",
  "/guias/geo-readiness",
  "/guias/narrativa-semantica",
  "/guias/search-intelligence",
]);

const pages: Record<string, ContentPageData> = {
  "/guias": {
    eyebrow: "BIBLIOTECA AUDITSEO",
    title: "Guias técnicos",
    subheadline:
      "Materiais estratégicos para ajudar agências a entenderem e posicionarem SEO, GEO, IA, autoridade e inteligência de busca para seus clientes.",
    support:
      "A nova busca exige mais do que execução. Exige clareza conceitual, critério estratégico e capacidade de transformar temas complexos em propostas que o cliente entende.",
    sections: [
      {
        eyebrow: "Guias principais",
        title: "Três fundamentos para vender busca com mais maturidade",
        cards: [
          {
            title: "GEO Readiness",
            text: "Como preparar marcas para ambientes generativos, mecanismos de resposta e nova busca.",
            href: "/guias/geo-readiness",
            tag: "Guia",
          },
          {
            title: "Narrativa Semântica",
            text: "Como organizar entidade, contexto, autoridade e conteúdo para tornar marcas mais compreensíveis.",
            href: "/guias/narrativa-semantica",
            tag: "Guia",
          },
          {
            title: "Search Intelligence",
            text: "Como conectar SEO, GEO, dados, autoridade e decisão em uma entrega estratégica para agências.",
            href: "/guias/search-intelligence",
            tag: "Guia",
          },
        ],
      },
      {
        eyebrow: "Aplicação",
        title: "Como usar esses guias",
        tone: "beige",
        cards: [
          {
            title: "Para educar o cliente",
            text: "Transforme dúvidas sobre SEO, IA e autoridade em uma conversa mais madura sobre presença, confiança e decisão.",
          },
          {
            title: "Para estruturar propostas",
            text: "Use os conceitos como base para posicionar diagnósticos, roadmaps, GEO Readiness e autoridade de entidade.",
          },
          {
            title: "Para evoluir contratos",
            text: "Mostre próximos passos estratégicos quando a entrega orgânica precisa deixar de parecer rotina.",
          },
        ],
      },
    ],
    finalCta: {
      title: "Quer aplicar esses guias na carteira da sua agência?",
      text: "A AUDITSEO ajuda a transformar conceito em diagnóstico, priorização e entrega white-label.",
      actions: [{ label: "Avaliar parceria estratégica", targetId: "diagnostico" }],
    },
  },
  "/estudos-busca-ia": {
    eyebrow: "AI SEARCH STUDIES",
    title: "Estudos de busca com IA",
    subheadline:
      "Análises sobre como respostas generativas, mecanismos de IA e novas experiências de busca estão impactando descoberta, consideração e autoridade digital.",
    support:
      "A AUDITSEO acompanha a evolução da busca para ajudar agências a transformar mudanças em leitura estratégica, não em reação tardia.",
    sections: [
      {
        eyebrow: "O que observamos",
        title: "Sinais da mudança na busca",
        cards: [
          {
            title: "Respostas antes do clique",
            text: "A decisão começa a ser influenciada por resumos, respostas e comparações antes da visita ao site.",
          },
          {
            title: "Entidades mais importantes que palavras isoladas",
            text: "Marcas precisam ser compreendidas dentro de contexto, categoria, reputação e intenção.",
          },
          {
            title: "Autoridade distribuída",
            text: "Avaliações, menções, perfis, páginas, backlinks e dados estruturados passam a compor a leitura da marca.",
          },
          {
            title: "Conteúdo explicativo ganha peso",
            text: "Páginas que respondem dúvidas reais com clareza tendem a fortalecer interpretação e confiança.",
          },
          {
            title: "SEO e IA se aproximam",
            text: "A nova busca exige uma visão integrada entre técnica, conteúdo, autoridade, dados e experiência.",
          },
        ],
      },
      {
        eyebrow: "Temas acompanhados",
        title: "Onde a AUDITSEO mantém leitura estratégica",
        tone: "beige",
        items: [
          "AI Overviews",
          "ChatGPT Search",
          "Gemini",
          "Perplexity",
          "Zero-click search",
          "GEO",
          "Dados estruturados",
          "Autoridade de entidade",
          "Busca local com IA",
        ],
      },
      {
        eyebrow: "Aplicação",
        title: "Como isso vira entrega",
        text:
          "A AUDITSEO transforma esses aprendizados em diagnóstico, roadmap, GEO Readiness, autoridade de entidade e inteligência orgânica white-label para agências.",
      },
    ],
    finalCta: {
      title: "Quer entender como isso afeta seus clientes?",
      text: "Vamos avaliar onde a nova busca pode impactar presença, autoridade e evolução orgânica na sua carteira.",
      actions: [{ label: "Avaliar parceria estratégica", targetId: "diagnostico" }],
    },
  },
  "/guias/geo-readiness": {
    eyebrow: "GUIA AUDITSEO",
    title: "GEO Readiness",
    subheadline:
      "Como preparar marcas para serem melhor compreendidas em ambientes generativos, mecanismos de resposta e novas experiências de busca.",
    support:
      "GEO não é tentar manipular uma IA. É organizar sinais para que uma marca seja mais clara, confiável e interpretável em ambientes de busca e resposta.",
    actions: [
      { label: "Conhecer GEO & IA", targetId: "geo-ia" },
      { label: "Avaliar parceria estratégica", targetId: "diagnostico" },
    ],
    sections: [
      {
        eyebrow: "Definição",
        title: "O que é GEO Readiness",
        text:
          "GEO Readiness é a preparação estratégica de uma marca para a nova busca. Envolve clareza de entidade, contexto semântico, conteúdo explicativo, dados estruturados, reputação pública e consistência entre canais.",
      },
      {
        eyebrow: "Camadas",
        title: "O que uma marca precisa organizar",
        tone: "beige",
        cards: [
          { title: "Entidade", text: "Quem é a marca, o que faz, onde atua e para quem é relevante." },
          { title: "Contexto", text: "Com quais temas, serviços, categorias e problemas a marca deve ser associada." },
          { title: "Conteúdo", text: "Páginas e respostas que explicam a oferta com profundidade e clareza." },
          { title: "Dados estruturados", text: "Schema coerente com o conteúdo visível e a realidade da marca." },
          { title: "Autoridade", text: "Provas, especialistas, reputação, menções, avaliações e sinais externos." },
          { title: "Consistência", text: "Site, perfis, diretórios, redes e conteúdos contando a mesma história." },
        ],
      },
      {
        eyebrow: "Limites",
        title: "O que GEO não promete",
        items: [
          "aparecer garantido no ChatGPT",
          "aparecer garantido no Gemini",
          "AI Overviews garantido",
          "tráfego imediato",
          "autoridade automática",
        ],
      },
      {
        eyebrow: "Uso comercial",
        title: "Como agências podem usar",
        tone: "beige",
        text:
          "Agências podem transformar GEO Readiness em diagnóstico, proposta de inovação, roadmap de estruturação e camada de valor para clientes que perguntam sobre IA e nova busca.",
      },
      {
        eyebrow: "Bastidores",
        title: "Como a AUDITSEO entra",
        text:
          "A AUDITSEO estrutura a leitura, identifica lacunas, organiza prioridades e entrega a inteligência white-label para a agência conduzir o cliente.",
      },
    ],
    finalCta: {
      title: "Quer oferecer GEO Readiness aos seus clientes?",
      text: "Estruture uma frente madura de IA e nova busca sem prometer o que ninguém deveria prometer.",
      actions: [{ label: "Avaliar parceria estratégica", targetId: "diagnostico" }],
    },
  },
  "/guias/narrativa-semantica": {
    eyebrow: "GUIA AUDITSEO",
    title: "Narrativa semântica",
    subheadline:
      "Como organizar contexto, entidade, autoridade e conteúdo para que uma marca seja melhor compreendida por buscadores, IAs e clientes.",
    support:
      "Na nova busca, não basta publicar mais páginas. A marca precisa comunicar, de forma consistente, quem é, o que faz, por que é confiável e em quais contextos deve ser considerada.",
    sections: [
      {
        eyebrow: "Definição",
        title: "O que é narrativa semântica",
        text:
          "Narrativa semântica é a forma como a marca organiza seus sinais de significado: posicionamento, serviços, páginas, conteúdo, provas, reputação e entidades relacionadas.",
      },
      {
        eyebrow: "Importância",
        title: "Por que isso importa",
        tone: "beige",
        cards: [
          { title: "Ajuda buscadores a entenderem a marca" },
          { title: "Ajuda IA a interpretar contexto" },
          { title: "Ajuda clientes a confiarem antes da decisão" },
          { title: "Ajuda agências a estruturarem propostas mais estratégicas" },
        ],
      },
      {
        eyebrow: "Elementos",
        title: "Os elementos da narrativa semântica",
        cards: [
          { title: "Entidade principal", text: "A marca como objeto claro de interpretação." },
          { title: "Categoria e mercado", text: "O contexto em que a marca deve ser associada." },
          { title: "Oferta e serviços", text: "O que a marca resolve e para quem." },
          { title: "Provas de confiança", text: "Avaliações, cases, especialistas, reputação e menções." },
          { title: "Conteúdo de sustentação", text: "Páginas e materiais que explicam, educam e validam." },
          { title: "Consistência pública", text: "Alinhamento entre site, perfis, diretórios, redes e menções." },
        ],
      },
      {
        eyebrow: "Riscos",
        title: "Erros comuns",
        tone: "beige",
        items: [
          "falar de tudo sem contexto",
          "publicar conteúdo sem arquitetura",
          "usar schema sem coerência",
          "ignorar reputação",
          "não conectar páginas de serviço com conteúdo",
          "não deixar claro o diferencial da marca",
        ],
      },
      {
        eyebrow: "S.I.G.N.A.L",
        title: "Como a AUDITSEO aplica",
        text:
          "Dentro do S.I.G.N.A.L, a narrativa semântica conecta Intent Mapping, Entity Authority, GEO Readiness e Learning Loop.",
      },
    ],
    finalCta: {
      title: "Quer estruturar autoridade semântica para clientes da sua agência?",
      text: "A AUDITSEO organiza os sinais de contexto, autoridade e confiança nos bastidores da sua entrega.",
      actions: [{ label: "Avaliar parceria estratégica", targetId: "diagnostico" }],
    },
  },
  "/guias/search-intelligence": {
    eyebrow: "GUIA AUDITSEO",
    title: "Search Intelligence",
    subheadline:
      "A camada estratégica que transforma SEO, GEO, dados, autoridade e intenção em decisões melhores para a entrega orgânica da agência.",
    support:
      "Search Intelligence é a evolução do SEO como operação isolada para uma camada de leitura, decisão e evolução orgânica orientada por sinais.",
    sections: [
      {
        eyebrow: "Definição",
        title: "O que é Search Intelligence",
        text:
          "É a disciplina que conecta diagnóstico técnico, intenção de busca, autoridade de entidade, dados estruturados, GEO, concorrência e evolução contínua para orientar decisões estratégicas.",
      },
      {
        eyebrow: "Conexões",
        title: "O que ela conecta",
        tone: "beige",
        cards: [
          { title: "SEO técnico", text: "Base para rastreamento, indexação e interpretação." },
          { title: "Intenção", text: "O que as pessoas buscam antes de confiar e decidir." },
          { title: "Autoridade", text: "Sinais que validam a marca como opção confiável." },
          { title: "Dados", text: "Estrutura que ajuda buscadores a compreenderem páginas e entidades." },
          { title: "GEO & IA", text: "Preparação para mecanismos de resposta e busca generativa." },
          { title: "Evolução", text: "Aprendizados, mensuração e próximos ciclos de ação." },
        ],
      },
      {
        eyebrow: "Agências",
        title: "Por que agências precisam disso",
        text:
          "Agências precisam transformar complexidade técnica em clareza comercial. Search Intelligence ajuda a agência a explicar o que está acontecendo, por que importa e qual próximo passo faz sentido.",
      },
      {
        eyebrow: "Entrega",
        title: "Como isso vira entrega",
        tone: "beige",
        items: [
          "diagnóstico estratégico",
          "roadmap 90 dias",
          "análise de autoridade",
          "GEO readiness",
          "arquitetura de conteúdo",
          "ciclos de evolução",
        ],
      },
      {
        eyebrow: "Bastidores",
        title: "Como a AUDITSEO entra",
        text:
          "A AUDITSEO atua nos bastidores da agência para estruturar essa inteligência em materiais, diagnósticos, roadmaps e orientações white-label.",
      },
    ],
    finalCta: {
      title: "Quer usar Search Intelligence na entrega da sua agência?",
      text: "Transforme busca, autoridade, dados e IA em uma camada estratégica para seus clientes.",
      actions: [{ label: "Avaliar parceria estratégica", targetId: "diagnostico" }],
    },
  },
  "/politica-de-privacidade": {
    eyebrow: "INSTITUCIONAL",
    title: "Política de Privacidade",
    subheadline:
      "Diretrizes sobre uso do site, formulários, canais de contato e informações compartilhadas por agências interessadas em parceria.",
    sections: [
      {
        title: "Introdução",
        text: "A AUDITSEO respeita a privacidade dos visitantes, parceiros e agências interessadas em nossos serviços.",
      },
      {
        title: "Informações que podemos coletar",
        tone: "beige",
        items: [
          "nome",
          "e-mail",
          "telefone ou WhatsApp",
          "nome da agência",
          "site da agência",
          "informações enviadas por formulário",
          "dados técnicos básicos de navegação, se houver analytics",
        ],
      },
      {
        title: "Como usamos as informações",
        items: [
          "responder solicitações",
          "avaliar interesse em parceria",
          "enviar informações relacionadas aos serviços",
          "melhorar a experiência do site",
          "cumprir obrigações legais quando aplicável",
        ],
      },
      {
        title: "Compartilhamento",
        tone: "beige",
        text:
          "A AUDITSEO não vende dados pessoais. Informações podem ser processadas por ferramentas necessárias de operação, hospedagem, formulário, e-mail e analytics, quando aplicável.",
      },
      {
        title: "Segurança",
        text: "Adotamos medidas razoáveis para proteger informações compartilhadas conosco, sem prometer segurança absoluta.",
      },
      {
        title: "Direitos do usuário",
        tone: "beige",
        text: "O usuário pode solicitar correção, exclusão ou informações sobre seus dados pelo e-mail parceria@auditseo.com.br.",
      },
      {
        title: "Contato e atualizações",
        text:
          "Dúvidas podem ser enviadas para parceria@auditseo.com.br. Esta política pode ser atualizada para refletir mudanças no site, nos canais de contato ou nas práticas operacionais.",
      },
    ],
    finalCta: {
      title: "Voltar para a AUDITSEO",
      text: "Conheça como estruturamos Search Intelligence para agências.",
      actions: [{ label: "Voltar para início", targetId: "inicio" }],
    },
  },
  "/termos-de-uso": {
    eyebrow: "INSTITUCIONAL",
    title: "Termos de Uso",
    subheadline:
      "Condições gerais de uso do site AUDITSEO, seus conteúdos, formulários, materiais informativos e canais de contato.",
    sections: [
      {
        title: "Aceitação dos termos",
        text: "Ao acessar o site, o usuário concorda com estes termos de uso.",
      },
      {
        title: "Uso do site",
        tone: "beige",
        text: "O site tem finalidade informativa, comercial e institucional, voltada principalmente a agências interessadas em parceria.",
      },
      {
        title: "Conteúdos",
        text: "Os conteúdos da AUDITSEO são informativos e estratégicos. Eles não garantem resultados específicos, rankings, tráfego ou aparição em ambientes de IA.",
      },
      {
        title: "Formulários e contato",
        tone: "beige",
        text: "Informações enviadas por formulário devem ser verdadeiras e podem ser usadas para retorno comercial e avaliação de parceria.",
      },
      {
        title: "Propriedade intelectual",
        text: "Textos, identidade visual, metodologia, nomes, estruturas e materiais pertencem à AUDITSEO, salvo indicação contrária.",
      },
      {
        title: "Limitações de responsabilidade",
        tone: "beige",
        text:
          "A AUDITSEO não garante que o site esteja livre de falhas, nem promete resultados comerciais ou orgânicos apenas pelo consumo dos conteúdos publicados.",
      },
      {
        title: "Links externos",
        text: "O site pode conter links para terceiros. A AUDITSEO não se responsabiliza pelo conteúdo, disponibilidade ou práticas desses ambientes externos.",
      },
      {
        title: "Alterações e contato",
        tone: "beige",
        text: "Estes termos podem ser alterados. Dúvidas podem ser enviadas para parceria@auditseo.com.br.",
      },
    ],
    finalCta: {
      title: "Voltar para a AUDITSEO",
      text: "Explore a camada estratégica de SEO, GEO e inteligência de busca para agências.",
      actions: [{ label: "Voltar para início", targetId: "inicio" }],
    },
  },
  "/obrigado": {
    eyebrow: "OBRIGADO",
    title: "Recebemos sua solicitação",
    subheadline:
      "Obrigado pelo interesse na AUDITSEO. Nossa equipe irá analisar as informações enviadas e retornar pelo canal informado.",
    support:
      "Enquanto isso, você pode conhecer melhor o Método S.I.G.N.A.L e as soluções white-label para agências.",
    centeredHero: true,
    actions: [
      { label: "Conhecer Método S.I.G.N.A.L", href: "/metodo-signal" },
      { label: "Voltar ao início", href: "/" },
    ],
    sections: [],
  },
};

function ActionButton({ action, index, onNavigate }: { action: Action; index: number; onNavigate: (targetId: string) => void }) {
  const className =
    index === 0
      ? "inline-flex items-center justify-center rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#c99760]"
      : "inline-flex items-center justify-center rounded-full border border-[#b28453]/40 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:border-[#b28453] hover:text-[#b28453]";

  if (action.href) {
    return (
      <a className={className} href={action.href}>
        {action.label}
      </a>
    );
  }

  return (
    <button className={className} onClick={() => onNavigate(action.targetId || "inicio")}>
      {action.label}
    </button>
  );
}

function ContentCard({ card, beige = false }: { card: Card; beige?: boolean }) {
  const cardClass = beige
    ? "rounded-[22px] border border-[#11100f]/10 bg-[#11100f] p-6 text-[#f8f8f8] shadow-[0_24px_70px_rgba(17,16,15,0.18)] transition-all hover:-translate-y-1 hover:border-[#b28453]/45"
    : "rounded-[22px] border border-[#b28453]/20 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.26)] transition-all hover:-translate-y-1 hover:border-[#b28453]/48";
  const content = (
    <>
      {card.tag ? (
        <span className="mb-5 inline-flex rounded-full border border-[#b28453]/28 bg-[#b28453]/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#b28453]">
          {card.tag}
        </span>
      ) : null}
      <h3 className="font-display text-2xl font-bold leading-[1.12] text-inherit">{card.title}</h3>
      {card.text ? <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/68">{card.text}</p> : null}
      {card.items?.length ? (
        <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[#f8f8f8]/70">
          {card.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b28453]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );

  return card.href ? (
    <a className={cardClass} href={card.href}>
      {content}
    </a>
  ) : (
    <article className={cardClass}>{content}</article>
  );
}

function ContentSection({ section }: { section: Section }) {
  const beige = section.tone === "beige";
  return (
    <section className={`${beige ? "bg-[#e0d3c3] text-[#11100f]" : "bg-[#11100f] text-[#f8f8f8]"} px-6 py-24 md:py-32 xl:px-12`}>
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-4xl">
          {section.eyebrow ? (
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{section.eyebrow}</span>
          ) : null}
          <h2 className={`mt-4 font-display text-4xl font-bold leading-[1.08] tracking-[-0.025em] md:text-5xl ${beige ? "text-[#11100f]" : "text-[#f8f8f8]"}`}>
            {section.title}
          </h2>
          {section.text ? <p className={`mt-6 text-lg leading-[1.7] ${beige ? "text-[#11100f]/70" : "text-[#f8f8f8]/70"}`}>{section.text}</p> : null}
        </div>

        {section.cards?.length ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {section.cards.map((card) => (
              <div key={card.title}>
                <ContentCard card={card} beige={beige} />
              </div>
            ))}
          </div>
        ) : null}

        {section.items?.length ? (
          <div className="mt-12 flex flex-wrap gap-3">
            {section.items.map((item) => (
              <span
                key={item}
                className={
                  beige
                    ? "rounded-full border border-[#11100f]/12 bg-[#11100f] px-5 py-3 text-sm font-bold text-[#f8f8f8]"
                    : "rounded-full border border-[#b28453]/24 bg-[#b28453]/10 px-5 py-3 text-sm font-bold text-[#e0d3c3]"
                }
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default function ContentPage({ path, onNavigate }: ContentPageProps) {
  const page = pages[path] || pages["/guias"];

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <section className="relative overflow-hidden px-6 pb-20 pt-[132px] md:pb-28 md:pt-[164px] xl:px-12">
        <div className="pointer-events-none absolute right-[8%] top-[10%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(178,132,83,0.20),transparent_70%)] blur-2xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(224,211,195,0.06),transparent_32%)]" />
        <div className={`relative mx-auto ${page.centeredHero ? "max-w-[900px] text-center" : "max-w-[1240px]"}`}>
          <div
            className={
              page.centeredHero
                ? "rounded-[28px] border border-[#b28453]/28 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] px-7 py-14 shadow-[0_30px_90px_rgba(0,0,0,0.38)] md:px-12"
                : ""
            }
          >
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{page.eyebrow}</span>
            <h1 className={`mt-6 font-display font-bold leading-[1.03] tracking-[-0.04em] text-[#f8f8f8] ${page.centeredHero ? "text-5xl md:text-7xl" : "max-w-5xl text-5xl md:text-7xl"}`}>
              {page.title}
            </h1>
            <p className={`mt-7 text-lg leading-[1.7] text-[#f8f8f8]/74 md:text-xl ${page.centeredHero ? "mx-auto max-w-3xl" : "max-w-3xl"}`}>
              {page.subheadline}
            </p>
            {page.support ? (
              <p className={`mt-6 text-base leading-[1.7] text-[#e0d3c3]/78 ${page.centeredHero ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>{page.support}</p>
            ) : null}
            {page.actions?.length ? (
              <div className={`mt-10 flex flex-col gap-3 sm:flex-row ${page.centeredHero ? "justify-center" : ""}`}>
                {page.actions.map((action, index) => (
                  <div key={action.label}>
                    <ActionButton action={action} index={index} onNavigate={onNavigate} />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {page.sections.map((section) => (
        <div key={`${page.title}-${section.title}`}>
          <ContentSection section={section} />
        </div>
      ))}

      {editorialContentPaths.has(path) ? <AuthorBio dark /> : null}

      {page.finalCta ? (
        <section className="bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
          <div className="mx-auto max-w-[1040px] rounded-[28px] border border-[#b28453]/28 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.36)] md:p-12">
            {page.finalCta.eyebrow ? (
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{page.finalCta.eyebrow}</span>
            ) : null}
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-[#f8f8f8] md:text-5xl">
              {page.finalCta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.7] text-[#f8f8f8]/68">{page.finalCta.text}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              {page.finalCta.actions.map((action, index) => (
                <div key={action.label}>
                  <ActionButton action={action} index={index} onNavigate={onNavigate} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <SiteFooter onNavigate={onNavigate} />
    </main>
  );
}
