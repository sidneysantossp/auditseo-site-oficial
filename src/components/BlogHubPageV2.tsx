import {
  ArrowRight,
  BookOpen,
  Bot,
  CalendarDays,
  Clock3,
  FileText,
  Network,
  Search,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import type { Article } from "@/content/articles";
import { getArticleVisual } from "@/content/articleVisuals";
import {
  allBlogArticles,
  articlesForJourney,
  editorialJourneys,
  getServicePresentation,
  problemEntrypoints,
} from "@/content/editorialArchitecture";
import Header from "./Header";
import SiteFooter from "./SiteFooter";

function navigate(sectionId: string) {
  if (typeof window === "undefined") return;
  const routes: Record<string, string> = {
    inicio: "/",
    signal: "/metodo-signal",
    solucoes: "/solucoes",
    conteudo: "/blog",
    diagnostico: "/diagnostico",
    parceria: "/parceria",
    "geo-ia": "/geo-ia",
  };
  window.location.assign(routes[sectionId] || "/");
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

function ArticleCard({ article }: { article: Article }) {
  const [primaryLabel, primaryHref] = article.relatedServices[0] || [];
  const primaryService = primaryHref ? getServicePresentation(primaryLabel, primaryHref) : null;
  const visual = getArticleVisual(article);

  return (
    <a
      href={`/blog/${article.slug}`}
      className="group flex min-h-[350px] flex-col overflow-hidden rounded-[24px] border border-[#b28453]/22 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.99))] transition-all hover:-translate-y-1 hover:border-[#b28453]/55"
    >
      <div className="overflow-hidden border-b border-[#b28453]/14 bg-[#0f0e0d]">
        <img
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          loading="lazy"
          decoding="async"
          className="aspect-[1200/630] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{article.eyebrow}</span>
        <span className="inline-flex items-center gap-2 text-[11px] text-[#f8f8f8]/45"><Clock3 size={13} /> {article.readTime}</span>
      </div>
      <h3 className="mt-6 font-display text-[28px] font-bold leading-[1.14] tracking-[-0.02em] text-[#f8f8f8]">{article.title}</h3>
      <p className="mt-5 text-sm leading-[1.75] text-[#f8f8f8]/64">{article.description}</p>
      {primaryService ? (
        <div className="mt-6 border-t border-[#b28453]/12 pt-5">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#f8f8f8]/38">CONECTA A</span>
          <span className="ml-2 text-xs font-semibold text-[#e0d3c3]">{primaryService.label}</span>
        </div>
      ) : null}
      <div className="mt-auto flex items-center justify-between gap-4 pt-8">
        <span className="inline-flex items-center gap-2 text-[11px] text-[#f8f8f8]/42"><CalendarDays size={13} /> {formatDate(article.publishedAt)}</span>
        <span className="inline-flex items-center gap-2 text-sm font-bold text-[#e0d3c3] group-hover:text-[#b28453]">Ler diagnóstico <ArrowRight size={14} /></span>
      </div>
      </div>
    </a>
  );
}

function Collection({
  id,
  eyebrow,
  title,
  text,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  items: Article[];
}) {
  return (
    <section id={id} className="scroll-mt-28 px-6 py-20 md:py-28 xl:px-12">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-4xl">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{eyebrow}</span>
          <h2 className="mt-5 font-display text-[38px] font-bold leading-[1.07] tracking-[-0.035em] md:text-[54px]">{title}</h2>
          <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#f8f8f8]/68 md:text-lg">{text}</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </div>
    </section>
  );
}

function ProblemIcon({ id }: { id: string }) {
  const className = "h-5 w-5";
  if (id === "trafego-caiu") return <TrendingDown className={className} />;
  if (id === "concorrente-aparece-ia") return <Bot className={className} />;
  if (id === "estruturar-autoridade") return <Network className={className} />;
  return <Search className={className} />;
}

export default function BlogHubPageV2() {
  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigate} activeSection="conteudo" />

      <section className="relative overflow-hidden px-6 pb-16 pt-[142px] md:pb-20 md:pt-[176px] xl:px-12">
        <div className="pointer-events-none absolute right-[-8%] top-[4%] h-[560px] w-[560px] rounded-full bg-[#b28453]/10 blur-[160px]" />
        <div className="relative mx-auto max-w-[1240px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.17em] text-[#b28453]">BIBLIOTECA AUDITSEO</span>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,6vw,82px)] font-bold leading-[1.01] tracking-[-0.05em]">
            Encontre primeiro o problema. Depois aprofunde o diagnóstico, a evidência e a solução.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-[1.75] text-[#e0d3c3] md:text-xl">
            A biblioteca da AUDITSEO organiza Search Intelligence pela jornada de decisão: sintomas, Search AI/GEO, autoridade, operação orgânica e contratação. Cada documento se conecta à frente comercial que trata aquele problema.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              `${allBlogArticles.length} documentos`,
              "5 jornadas",
              "Fontes primárias",
              "Pesquisa proprietária",
              "Sem garantias de IA",
            ].map((item) => (
              <span key={item} className="rounded-full border border-[#b28453]/24 bg-[#b28453]/8 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#e0d3c3]">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Mapa da Biblioteca" className="sticky top-[72px] z-20 border-y border-[#b28453]/12 bg-[#151413]/96 px-6 py-4 backdrop-blur xl:px-12">
        <div className="mx-auto flex max-w-[1240px] flex-wrap gap-2">
          <a href="#comece-pelo-problema" className="rounded-full border border-[#b28453]/35 bg-[#b28453]/10 px-4 py-2 text-xs font-semibold text-[#e0d3c3] transition-colors hover:border-[#b28453]/65 hover:text-[#b28453]">
            Comece pelo problema
          </a>
          {editorialJourneys.map((journey) => (
            <a key={journey.id} href={`#${journey.id}`} className="rounded-full border border-[#b28453]/24 px-4 py-2 text-xs font-semibold text-[#e0d3c3] transition-colors hover:border-[#b28453]/55 hover:text-[#b28453]">
              {journey.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="comece-pelo-problema" className="scroll-mt-28 bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-24 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">O QUE VOCÊ PRECISA RESOLVER?</span>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">
            Entre pelo sintoma — não pela sigla.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#11100f]/68 md:text-lg">
            Se você ainda não sabe se o problema é técnico, editorial, de autoridade ou de Search AI, comece pelo cenário que mais se aproxima do que está acontecendo.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {problemEntrypoints.map((problem, index) => (
              <article key={problem.id} className="rounded-[26px] border border-[#11100f]/10 bg-[#f4eee5] p-8 shadow-[0_18px_50px_rgba(17,16,15,0.06)]">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#11100f] text-[#b28453]"><ProblemIcon id={problem.id} /></span>
                  <span className="font-mono text-[10px] font-bold text-[#8c613c]">0{index + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold leading-[1.12]">{problem.title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-[#11100f]/68">{problem.text}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={`/blog/${problem.articleSlug}`} className="inline-flex items-center gap-2 rounded-full bg-[#11100f] px-5 py-3 text-xs font-bold text-white hover:bg-[#6d5132]">
                    Ver diagnóstico <ArrowRight size={13} />
                  </a>
                  <a href={problem.serviceHref} className="inline-flex items-center gap-2 rounded-full border border-[#11100f]/15 px-5 py-3 text-xs font-bold hover:bg-white/55">
                    {problem.serviceLabel} <ArrowRight size={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 xl:px-12">
        <div className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-3">
          {[
            [<ShieldCheck size={20} />, "Evidência antes da afirmação", "Documentação primária sustenta afirmações sobre plataformas; limitações permanecem explícitas."],
            [<Search size={20} />, "Pergunta antes da palavra-chave", "O documento nasce de um problema, decisão ou pergunta real — não de um calendário editorial."],
            [<BookOpen size={20} />, "Conteúdo ligado à operação", "Cada artigo aponta para uma frente da AUDITSEO que trata o problema, sem transformar conteúdo informativo em página comercial disfarçada."],
          ].map(([icon, title, text]) => (
            <article key={String(title)} className="rounded-[22px] border border-[#b28453]/16 bg-[#171614] p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#e0d3c3] text-[#11100f]">{icon}</span>
              <h2 className="mt-5 font-display text-xl font-bold">{title}</h2>
              <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/64">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {editorialJourneys.map((journey, index) => (
        <div key={journey.id} className={index % 2 === 1 ? "border-y border-[#b28453]/10 bg-[#151413]" : ""}>
          <Collection
            id={journey.id}
            eyebrow={journey.eyebrow}
            title={journey.title}
            text={journey.text}
            items={articlesForJourney(journey)}
          />
        </div>
      ))}

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-28 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">PESQUISA PROPRIETÁRIA</span>
          <h2 className="mt-5 max-w-5xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">Dados públicos antes da narrativa — e snapshots que não mudam depois do resultado.</h2>
          <p className="mt-6 max-w-4xl text-base leading-[1.75] text-[#11100f]/70">
            A AUDITSEO publica datasets congelados antes das conclusões. O objetivo é tornar preço, promessa, método e mensuração verificáveis. O Search AI Observatory está em coleta, com prompts, interfaces, repetições e regras definidos antes das observações.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <a href="/blog/quanto-custa-consultoria-seo-geo-ia" className="group rounded-[24px] border border-[#11100f]/10 bg-[#11100f] p-8 text-[#f8f8f8] transition-transform hover:-translate-y-1">
              <FileText size={20} className="text-[#b28453]" />
              <span className="mt-6 block font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">SNAPSHOT 08/09/2026</span>
              <h3 className="mt-4 font-display text-2xl font-bold leading-[1.15]">Benchmark de preços e formatos de SEO + GEO/IA</h3>
              <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/64">10 fornecedores/produtos, 23 ofertas e separação entre sessão, auditoria, sprint, retainer e software.</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#b28453]">Ver estudo <ArrowRight size={14} /></span>
            </a>

            <a href="/blog/como-mercado-brasileiro-vende-geo-search-ai" className="group rounded-[24px] border border-[#11100f]/10 bg-[#11100f] p-8 text-[#f8f8f8] transition-transform hover:-translate-y-1">
              <ShieldCheck size={20} className="text-[#b28453]" />
              <span className="mt-6 block font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">SNAPSHOT 08/09/2026</span>
              <h3 className="mt-4 font-display text-2xl font-bold leading-[1.15]">Benchmark de promessa, prazo e mensuração em GEO</h3>
              <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/64">12 páginas públicas classificadas por garantia, prazo, protocolo de medição, método e evidência.</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#b28453]">Ver estudo <ArrowRight size={14} /></span>
            </a>

            <a href="/blog/protocolo-benchmark-search-ai" className="group rounded-[24px] border border-[#11100f]/10 bg-[#11100f] p-8 text-[#f8f8f8] transition-transform hover:-translate-y-1">
              <Search size={20} className="text-[#b28453]" />
              <span className="mt-6 block font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">COLETA EM ANDAMENTO</span>
              <h3 className="mt-4 font-display text-2xl font-bold leading-[1.15]">AUDITSEO Search AI Observatory</h3>
              <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/64">Prompts, marcas, interfaces e regras foram congelados antes da coleta; bloqueios e resultados negativos permanecem no histórico.</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#b28453]">Acompanhar protocolo <ArrowRight size={14} /></span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter onNavigate={navigate} />
    </main>
  );
}
