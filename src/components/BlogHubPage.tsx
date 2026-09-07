import { ArrowRight, BookOpen, CalendarDays, Clock3, FileText, Search, ShieldCheck } from "lucide-react";
import { articleList } from "@/content/articles";
import { advancedArticleList } from "@/content/articlesAdvanced";
import Header from "./Header";
import SiteFooter from "./SiteFooter";

const libraryArticles = [...articleList, ...advancedArticleList];

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
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

export default function BlogHubPage() {
  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigate} activeSection="conteudo" />

      <section className="relative overflow-hidden px-6 pb-20 pt-[142px] md:pb-28 md:pt-[176px] xl:px-12">
        <div className="pointer-events-none absolute right-[-8%] top-[4%] h-[560px] w-[560px] rounded-full bg-[#b28453]/10 blur-[160px]" />
        <div className="relative mx-auto max-w-[1240px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.17em] text-[#b28453]">BIBLIOTECA AUDITSEO</span>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,6vw,82px)] font-bold leading-[1.01] tracking-[-0.05em] text-[#f8f8f8]">
            Pesquisa, método e evidências sobre a nova busca.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-[1.75] text-[#e0d3c3] md:text-xl">
            Conteúdo para entender SEO, Search Intelligence, autoridade de entidade e AI Search sem transformar mudança de mercado em hype. Priorizamos fontes primárias, distinção entre evidência e hipótese e aplicações que possam ser auditadas.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Search Intelligence", "SEO técnico", "Entidades", "GEO & AI Search", "Conteúdo", "Crawlers", "Mensuração", "Recuperação"].map((topic) => (
              <span key={topic} className="rounded-full border border-[#b28453]/24 bg-[#b28453]/8 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#e0d3c3]">{topic}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-16 text-[#11100f] md:py-20 xl:px-12">
        <div className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-3">
          {[
            [<ShieldCheck size={20} />, "Fontes primárias", "Para afirmações sobre plataformas, priorizamos documentação oficial e distinguimos claramente o que é interpretação da AUDITSEO."],
            [<Search size={20} />, "Resposta antes do volume", "Cada artigo precisa resolver uma pergunta real. Não publicamos apenas para aumentar o número de URLs do domínio."],
            [<BookOpen size={20} />, "Autoria e atualização", "Conteúdos possuem responsável, data e revisão. Temas que mudam com frequência precisam ser atualizados quando a evidência muda."],
          ].map(([icon, title, text]) => (
            <article key={String(title)} className="rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7 shadow-[0_16px_45px_rgba(17,16,15,0.06)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#11100f] text-[#b28453]">{icon}</span>
              <h2 className="mt-5 font-display text-xl font-bold">{title}</h2>
              <p className="mt-4 text-sm leading-[1.7] text-[#11100f]/68">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-4xl">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">DOCUMENTOS FUNDADORES</span>
            <h2 className="mt-5 font-display text-[38px] font-bold leading-[1.07] tracking-[-0.035em] text-[#f8f8f8] md:text-[54px]">A base conceitual e técnica que sustenta a estratégia da AUDITSEO.</h2>
            <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#f8f8f8]/68 md:text-lg">Os documentos abaixo definem conceitos, métodos e limites. Estudos, experimentos, cases e novos conteúdos devem se conectar a essa base — e também poder corrigi-la quando novas evidências justificarem.</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {libraryArticles.map((article) => (
              <a key={article.slug} href={`/blog/${article.slug}`} className="group flex min-h-[350px] flex-col rounded-[24px] border border-[#b28453]/22 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.99))] p-8 transition-all hover:-translate-y-1 hover:border-[#b28453]/55">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{article.eyebrow}</span>
                  <span className="inline-flex items-center gap-2 text-[11px] text-[#f8f8f8]/45"><Clock3 size={13} /> {article.readTime}</span>
                </div>
                <h3 className="mt-6 font-display text-[28px] font-bold leading-[1.14] tracking-[-0.02em] text-[#f8f8f8]">{article.title}</h3>
                <p className="mt-5 text-sm leading-[1.75] text-[#f8f8f8]/64">{article.description}</p>
                <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                  <span className="inline-flex items-center gap-2 text-[11px] text-[#f8f8f8]/42"><CalendarDays size={13} /> {formatDate(article.publishedAt)}</span>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#e0d3c3] group-hover:text-[#b28453]">Ler documento <ArrowRight size={14} /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-28 xl:px-12">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">POLÍTICA EDITORIAL</span>
            <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">Conteúdo da AUDITSEO precisa sobreviver à pergunta: “qual é a evidência?”</h2>
            <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#11100f]/70">Quando um tema possui documentação oficial, ela deve ser consultada. Quando publicamos um framework próprio, ele deve ser identificado como framework. Quando medimos um experimento, método e data precisam acompanhar o resultado.</p>
          </div>
          <div className="rounded-[24px] border border-[#11100f]/10 bg-[#11100f] p-8 text-[#f8f8f8]">
            <FileText size={20} className="text-[#b28453]" />
            <h3 className="mt-5 font-display text-2xl font-bold">Próxima camada de autoridade</h3>
            <ul className="mt-6 space-y-4 text-sm leading-[1.7] text-[#f8f8f8]/70">
              <li>Framework completo Crawl → Index → Retrieve → Understand → Trust → Cite</li>
              <li>Como transformar conteúdo em uma fonte realmente citável</li>
              <li>Protocolo AUDITSEO para benchmark de Search AI</li>
              <li>Primeiro dataset proprietário e metodologia pública</li>
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter onNavigate={navigate} />
    </main>
  );
}