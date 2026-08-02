import { useState } from "react";
import { ArrowRight, BookOpen, BriefcaseBusiness, Compass, GraduationCap, Search, Sparkles, UserRound } from "lucide-react";
import SiteFooter from "./SiteFooter";
import AuthorBio from "./AuthorBio";

interface BlogPageProps {
  onNavigate: (targetId: string) => void;
}

const audienceCards = [
  {
    title: "Donos de sites e empresas",
    text: "Para quem quer entender por que o site não gera visibilidade, tráfego qualificado ou oportunidades orgânicas.",
    icon: <BriefcaseBusiness size={20} />,
  },
  {
    title: "Profissionais de marketing",
    text: "Para quem quer evoluir em SEO, conteúdo, dados estruturados, autoridade e inteligência de busca.",
    icon: <UserRound size={20} />,
  },
  {
    title: "Consultores e especialistas",
    text: "Para quem busca aprofundar estratégia, diagnóstico, GEO, autoridade de entidade e nova busca.",
    icon: <Compass size={20} />,
  },
  {
    title: "Agências de marketing",
    text: "Para equipes que precisam aprimorar propostas, entregas, diagnósticos e estratégias para clientes.",
    icon: <Search size={20} />,
  },
  {
    title: "Pessoas em evolução de carreira",
    text: "Para quem quer aprender SEO de forma séria, atualizada e conectada ao futuro da busca.",
    icon: <GraduationCap size={20} />,
  },
];

const learningTracks = [
  {
    title: "Fundamentos de SEO",
    text: "Base para entender rastreamento, indexação, intenção, páginas, autoridade e visibilidade orgânica.",
  },
  {
    title: "SEO técnico",
    text: "Conteúdos sobre estrutura, performance, indexação, arquitetura, headings, metadados, links internos e dados estruturados.",
  },
  {
    title: "Conteúdo e intenção de busca",
    text: "Como criar conteúdos conectados à jornada, intenção, comparação, autoridade e decisão.",
  },
  {
    title: "Autoridade de entidade",
    text: "Como marcas são compreendidas, validadas e associadas a contextos de confiança.",
  },
  {
    title: "GEO & IA",
    text: "Como a busca generativa, AI Search e mecanismos de resposta mudam a forma de pensar SEO.",
  },
  {
    title: "SEO para agências e clientes",
    text: "Como transformar diagnóstico, estratégia e evolução orgânica em entregas mais claras e defensáveis.",
  },
];

const needCards = [
  {
    title: "Quero melhorar o SEO do meu site",
    text: "Aprenda como identificar problemas técnicos, conteúdo fraco, baixa autoridade e falta de clareza orgânica.",
    href: "#biblioteca-estrategica",
  },
  {
    title: "Quero aprender SEO para evoluir na carreira",
    text: "Conteúdos para desenvolver visão estratégica, técnica e prática sobre busca.",
    href: "#trilhas-aprendizado",
  },
  {
    title: "Quero aplicar SEO em clientes",
    text: "Materiais para profissionais e agências que precisam diagnosticar, explicar e entregar melhor.",
    href: "#biblioteca-estrategica",
  },
  {
    title: "Quero entender GEO e IA",
    text: "Aprenda como IA, mecanismos de resposta e nova busca impactam marcas, conteúdos e autoridade.",
    href: "/guias/geo-readiness",
  },
  {
    title: "Quero recuperar queda de tráfego",
    text: "Entenda como analisar queda orgânica sem reduzir tudo a algoritmo.",
    href: "#biblioteca-estrategica",
  },
  {
    title: "Quero criar conteúdo que gere resultado",
    text: "Aprenda a conectar conteúdo com intenção, autoridade e decisão.",
    href: "#biblioteca-estrategica",
  },
];

const featuredCards = [
  {
    tag: "NOVA BUSCA",
    title: "A nova busca não começa no clique",
    text: "Por que a decisão do usuário pode começar antes da visita ao site e como isso muda a forma de pensar SEO.",
  },
  {
    tag: "GEO & IA",
    title: "GEO não é promessa de aparecer no ChatGPT",
    text: "Como preparar marcas para serem melhor compreendidas em ambientes de IA e mecanismos de resposta.",
    href: "/guias/geo-readiness",
  },
  {
    tag: "AUTORIDADE",
    title: "Autoridade de entidade: o novo pilar da confiança orgânica",
    text: "Como contexto, reputação, sinais públicos e dados estruturados ajudam uma marca a ser compreendida.",
    href: "/guias/narrativa-semantica",
  },
  {
    tag: "CONTEÚDO",
    title: "Produzir mais conteúdo não significa ter mais estratégia",
    text: "Por que volume sem intenção, arquitetura e autoridade pode não gerar crescimento real.",
  },
];

const articles = [
  {
    tag: "SEO",
    title: "SEO ainda funciona?",
    text: "Uma visão atual sobre por que SEO não morreu, mas deixou de ser apenas tráfego e posição.",
    readTime: "6 min",
  },
  {
    tag: "TÉCNICO",
    title: "Como saber se um site tem problemas técnicos de SEO",
    text: "Sinais técnicos que podem limitar rastreamento, indexação e crescimento orgânico.",
    readTime: "8 min",
  },
  {
    tag: "CONTEÚDO",
    title: "Como criar conteúdo orientado por intenção",
    text: "A diferença entre produzir conteúdo e construir arquitetura de resposta para a jornada do usuário.",
    readTime: "7 min",
  },
  {
    tag: "AUTORIDADE",
    title: "O que é autoridade de entidade",
    text: "Como marcas são interpretadas por buscadores, IAs e usuários a partir de sinais de confiança.",
    readTime: "8 min",
    href: "/guias/narrativa-semantica",
  },
  {
    tag: "GEO & IA",
    title: "Como preparar uma marca para a nova busca com IA",
    text: "Os sinais que ajudam uma marca a ser mais clara, estruturada e interpretável.",
    readTime: "8 min",
    href: "/guias/geo-readiness",
  },
  {
    tag: "ESTRATÉGIA",
    title: "Por que tráfego sozinho não prova valor orgânico",
    text: "Como analisar SEO a partir de intenção, qualidade, autoridade e impacto na decisão.",
    readTime: "7 min",
  },
  {
    tag: "AGÊNCIAS",
    title: "Como explicar SEO para clientes que só cobram resultado rápido",
    text: "Uma abordagem para transformar cobrança em diagnóstico, roadmap e evolução.",
    readTime: "7 min",
    href: "/diagnostico",
  },
  {
    tag: "RECUPERAÇÃO",
    title: "O tráfego caiu. E agora?",
    text: "Como investigar quedas considerando técnica, conteúdo, autoridade, concorrência e mudanças de SERP.",
    readTime: "10 min",
  },
  {
    tag: "DADOS",
    title: "Dados estruturados: quando schema realmente importa",
    text: "Como usar schema de forma coerente para melhorar interpretação, contexto e clareza.",
    readTime: "6 min",
  },
  {
    tag: "CARREIRA",
    title: "O que estudar para se tornar um profissional de SEO mais estratégico",
    text: "Competências essenciais para sair da execução básica e evoluir para visão de Search Intelligence.",
    readTime: "8 min",
  },
];

const whyCards = [
  "Para educar o mercado",
  "Para elevar a conversa sobre SEO",
  "Para conectar técnica, conteúdo, autoridade e IA",
  "Para transformar conhecimento em aplicação prática",
];

const heroNodes = [
  { label: "Técnico", x: 22, y: 22 },
  { label: "Conteúdo", x: 60, y: 13 },
  { label: "Autoridade", x: 84, y: 40 },
  { label: "GEO", x: 74, y: 74 },
  { label: "IA", x: 43, y: 86 },
  { label: "Estratégia", x: 14, y: 62 },
  { label: "Clientes", x: 46, y: 50 },
  { label: "Crescimento", x: 78, y: 26 },
];

const filterTags = ["Todos", "SEO técnico", "Conteúdo", "GEO & IA", "Autoridade", "Estratégia", "Agências"];

function normalizeFilter(tag: string) {
  if (tag === "TÉCNICO") return "SEO técnico";
  if (tag === "CONTEÚDO") return "Conteúdo";
  if (tag === "AUTORIDADE") return "Autoridade";
  if (tag === "ESTRATÉGIA") return "Estratégia";
  if (tag === "AGÊNCIAS") return "Agências";
  return tag;
}

function SectionHeader({
  eyebrow,
  title,
  text,
  dark = false,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto items-center text-center" : "items-start"} flex max-w-4xl flex-col`}>
      {eyebrow ? <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{eyebrow}</span> : null}
      <h2 className={`mt-4 font-display text-4xl font-bold leading-[1.06] tracking-[-0.03em] md:text-5xl ${dark ? "text-[#11100f]" : "text-[#f8f8f8]"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-6 text-lg leading-[1.7] ${dark ? "text-[#11100f]/70" : "text-[#f8f8f8]/70"}`}>{text}</p> : null}
    </div>
  );
}

function PrimaryButton({ children, onClick }: { children: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0d3c3] hover:text-[#11100f]"
    >
      {children}
      <ArrowRight size={16} />
    </button>
  );
}

function SecondaryLink({ children, href }: { children: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10 hover:text-[#b28453]"
    >
      {children}
    </a>
  );
}

function HeroConstellation() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(178,132,83,0.18),transparent_58%)] blur-xl" />
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id="blogHeroLine" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#b28453" stopOpacity="0.05" />
            <stop offset="55%" stopColor="#e0d3c3" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#b28453" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        {heroNodes.map((node, index) =>
          index < heroNodes.length - 1 ? (
            <line
              key={`${node.label}-${heroNodes[index + 1].label}`}
              x1={node.x}
              y1={node.y}
              x2={heroNodes[index + 1].x}
              y2={heroNodes[index + 1].y}
              stroke="url(#blogHeroLine)"
              strokeWidth="0.45"
            />
          ) : null
        )}
      </svg>

      <div className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#b28453]/36 bg-[#11100f]/88 text-center shadow-[0_0_70px_rgba(178,132,83,0.20)] backdrop-blur">
        <span className="max-w-[104px] font-display text-lg font-bold leading-[1.08] text-[#e0d3c3]">SEO KNOWLEDGE</span>
      </div>

      {heroNodes.map((node, index) => (
        <div
          key={node.label}
          className="absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b28453]/30 bg-[#171614]/86 px-4 py-2 text-xs font-bold text-[#f8f8f8] shadow-[0_18px_45px_rgba(0,0,0,0.32)] backdrop-blur-sm"
          style={{ left: `${node.x}%`, top: `${node.y}%`, animation: `blogNodeFloat ${8 + index}s ease-in-out infinite`, animationDelay: `${index * 0.28}s` }}
        >
          {node.label}
        </div>
      ))}

      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-[#e0d3c3]/50"
          style={{
            left: `${8 + ((index * 23) % 84)}%`,
            top: `${10 + ((index * 31) % 80)}%`,
            opacity: 0.18 + (index % 5) * 0.08,
          }}
        />
      ))}
    </div>
  );
}

export default function BlogPage({ onNavigate }: BlogPageProps) {
  const [activeTag, setActiveTag] = useState("Todos");
  const filteredArticles = activeTag === "Todos" ? articles : articles.filter((article) => normalizeFilter(article.tag) === activeTag);

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-16 pt-[116px] md:pb-20 md:pt-[136px] xl:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_36%,rgba(178,132,83,0.16),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(224,211,195,0.06),transparent_28%)]" />
        <div className="relative mx-auto grid w-full max-w-[1360px] items-center gap-14 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">BIBLIOTECA AUDITSEO</span>
            <h1 className="mt-6 max-w-[860px] font-display text-[clamp(52px,5vw,82px)] font-bold leading-[1.04] tracking-[-0.045em] text-[#f8f8f8]">
              Aprenda SEO, GEO e inteligência de busca com profundidade
            </h1>
            <p className="mt-8 max-w-[760px] text-[clamp(18px,1.35vw,22px)] leading-[1.58] text-[#f8f8f8]/76">
              Guias, análises e conteúdos práticos para empresas, profissionais de marketing, consultores e agências entenderem como a busca evoluiu — e como aplicar isso em sites, clientes e estratégias reais.
            </p>
            <p className="mt-6 max-w-[700px] text-base leading-[1.7] text-[#e0d3c3]/78">
              Do SEO técnico à autoridade de entidade. Do conteúdo à IA. Da teoria à decisão estratégica.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton onClick={() => document.getElementById("biblioteca-estrategica")?.scrollIntoView({ behavior: "smooth" })}>
                Explorar conteúdos
              </PrimaryButton>
              <SecondaryLink href="/guias">Ver guias técnicos</SecondaryLink>
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.1em] text-[#f8f8f8]/46">
              SEO técnico · Conteúdo · GEO & IA · Autoridade · Estratégia
            </p>
          </div>

          <HeroConstellation />
        </div>
      </section>

      <section className="bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1080px] text-center">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">LINHA EDITORIAL</span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#f8f8f8] md:text-6xl">
            SEO deixou de ser apenas <span className="text-[#b28453]">tráfego</span>. Agora é <span className="text-[#b28453]">entendimento</span>, <span className="text-[#b28453]">autoridade</span> e <span className="text-[#b28453]">decisão</span>.
          </h2>
          <div className="mx-auto mt-9 max-w-4xl space-y-6 text-lg leading-[1.8] text-[#f8f8f8]/72">
            <p>
              A busca mudou. Hoje, aprender SEO não significa apenas entender palavras-chave, links e posições no Google. Significa compreender como sites são interpretados, como marcas constroem autoridade, como conteúdos respondem intenções reais e como a <span className="text-[#b28453]">IA</span> começa a influenciar descoberta, comparação e decisão.
            </p>
            <p>
              O blog da AUDITSEO existe para organizar esse conhecimento de forma clara, aplicável e estratégica — um <span className="text-[#b28453]">conhecimento aplicável</span> para quem precisa aprender, aplicar e evoluir.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            dark
            eyebrow="Públicos"
            title="Para quem é esta biblioteca"
            text="Conteúdos para quem precisa entender a busca com mais profundidade e aplicar esse conhecimento em contextos reais."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {audienceCards.map((card) => (
              <article key={card.title} className="rounded-[22px] border border-[#11100f]/10 bg-[#11100f] p-6 text-[#f8f8f8] shadow-[0_24px_70px_rgba(17,16,15,0.16)]">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#b28453]/12 text-[#b28453]">{card.icon}</div>
                <h3 className="font-display text-xl font-bold leading-tight">{card.title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/66">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trilhas-aprendizado" className="scroll-mt-28 bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            eyebrow="Trilhas"
            title="Trilhas de aprendizado"
            text="Organizamos os conteúdos por temas para facilitar sua jornada, seja para aprender, aplicar ou evoluir estratégias orgânicas."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {learningTracks.map((track, index) => (
              <article key={track.title} className="rounded-[24px] border border-[#b28453]/20 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_26px_78px_rgba(0,0,0,0.3)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b28453]/40 bg-[#b28453]/10 font-mono text-sm font-bold text-[#e0d3c3]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-[#f8f8f8]">{track.title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/66">{track.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            dark
            eyebrow="Ponto de partida"
            title="Comece pela sua necessidade"
            text="Escolha o ponto de partida mais próximo do seu momento."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {needCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-[22px] border border-[#11100f]/10 bg-[#11100f] p-6 text-[#f8f8f8] shadow-[0_24px_70px_rgba(17,16,15,0.16)] transition-all hover:-translate-y-1 hover:border-[#b28453]/60"
              >
                <BookOpen className="h-5 w-5 text-[#b28453]" />
                <h3 className="mt-5 font-display text-xl font-bold leading-tight">{card.title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/66">{card.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <AuthorBio dark />

      <section className="bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            eyebrow="Destaques"
            title="Leituras essenciais"
            text="Conteúdos para entender a evolução do SEO e aplicar esse conhecimento em sites, clientes e estratégias reais."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {featuredCards.map((card) => {
              const content = (
                <>
                  <span className="rounded-full border border-[#b28453]/28 bg-[#b28453]/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#b28453]">{card.tag}</span>
                  <h3 className="mt-7 font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-[#f8f8f8]">{card.title}</h3>
                  <p className="mt-5 text-sm leading-[1.7] text-[#f8f8f8]/68">{card.text}</p>
                </>
              );

              return card.href ? (
                <a key={card.title} href={card.href} className="rounded-[26px] border border-[#b28453]/22 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_28px_80px_rgba(0,0,0,0.34)] transition-all hover:-translate-y-1 hover:border-[#b28453]/58">
                  {content}
                </a>
              ) : (
                <article key={card.title} className="rounded-[26px] border border-[#b28453]/22 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_28px_80px_rgba(0,0,0,0.34)]">
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="biblioteca-estrategica" className="scroll-mt-28 bg-[#11100f] px-6 pb-24 md:pb-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Biblioteca estratégica"
              title="Biblioteca estratégica"
              text="Artigos organizados para quem quer aprender, aplicar e evoluir estratégias orgânicas com mais clareza."
            />
            <div className="flex max-w-2xl flex-wrap gap-2">
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] transition-colors ${
                    activeTag === tag
                      ? "border-[#b28453] bg-[#b28453] text-white"
                      : "border-[#b28453]/22 bg-[#171614] text-[#f8f8f8]/62 hover:border-[#b28453]/60 hover:text-[#b28453]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {filteredArticles.map((article) => {
              const content = (
                <>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#b28453]/12 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#b28453]">{article.tag}</span>
                    <span className="text-xs font-semibold text-[#f8f8f8]/42">{article.readTime}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold leading-[1.14] text-[#f8f8f8]">{article.title}</h3>
                  <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/66">{article.text}</p>
                </>
              );

              return article.href ? (
                <a
                  key={article.title}
                  href={article.href}
                  className="rounded-[22px] border border-[#b28453]/18 bg-[#171614] p-6 transition-all hover:-translate-y-1 hover:border-[#b28453]/52 hover:bg-[#1d1b18]"
                >
                  {content}
                </a>
              ) : (
                <article key={article.title} className="rounded-[22px] border border-[#b28453]/18 bg-[#171614] p-6">
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            dark
            eyebrow="Por que escrevemos"
            title="Por que a AUDITSEO escreve sobre SEO, GEO e inteligência de busca"
            text="Porque a busca está ficando mais complexa. Empresas, profissionais e agências precisam de uma leitura mais clara sobre o que realmente influencia visibilidade, autoridade e decisão."
          />
          <p className="mt-8 max-w-4xl text-lg leading-[1.75] text-[#11100f]/72">
            A AUDITSEO organiza esse conhecimento para ajudar o mercado a sair de respostas superficiais e evoluir para uma visão mais estratégica da presença orgânica.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyCards.map((item) => (
              <article key={item} className="rounded-[22px] border border-[#11100f]/10 bg-[#11100f] p-6 text-[#f8f8f8]">
                <Sparkles className="h-5 w-5 text-[#b28453]" />
                <h3 className="mt-5 font-display text-xl font-bold leading-tight">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1040px] rounded-[28px] border border-[#b28453]/28 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.36)] md:p-12">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">AUDITSEO</span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-[#f8f8f8] md:text-5xl">
            Quer transformar conhecimento em estratégia aplicada?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.7] text-[#f8f8f8]/68">
            A AUDITSEO atua com SEO, GEO, autoridade e inteligência de busca para ajudar empresas, profissionais e agências a evoluírem sua presença orgânica com mais clareza e método.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <SecondaryLink href="/solucoes">Conhecer soluções</SecondaryLink>
            <PrimaryButton onClick={() => onNavigate("diagnostico")}>Avaliar parceria estratégica</PrimaryButton>
          </div>
        </div>
      </section>

      <SiteFooter onNavigate={onNavigate} />
    </main>
  );
}
