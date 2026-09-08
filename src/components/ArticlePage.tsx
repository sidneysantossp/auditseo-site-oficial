import { ArrowRight, BookOpen, CalendarDays, Clock3, ExternalLink, FileText, Network, Quote, ShieldCheck } from "lucide-react";
import type { Article } from "@/content/articles";
import { articleRelations } from "@/content/articleRelations";
import { researchCitations } from "@/content/researchCitations";
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
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

function slugifyHeading(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

function headingId(text: string, index: number, explicitId?: string) {
  return explicitId || `secao-${index + 1}-${slugifyHeading(text)}`;
}

export default function ArticlePage({ article }: { article: Article }) {
  const relatedArticles = articleRelations[article.slug] || [];
  const researchCitation = researchCitations[article.slug];
  const headingLinks = article.blocks.flatMap((block, index) =>
    block.type === "heading" ? [{ label: block.text, id: headingId(block.text, index, block.id) }] : [],
  );

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigate} activeSection="conteudo" />

      <article>
        <header className="relative overflow-hidden px-6 pb-20 pt-[142px] md:pb-28 md:pt-[172px] xl:px-12">
          <div className="pointer-events-none absolute right-[-8%] top-[5%] h-[520px] w-[520px] rounded-full bg-[#b28453]/10 blur-[150px]" />
          <div className="relative mx-auto max-w-[1120px]">
            <a href="/blog" className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#b28453] hover:text-[#e0d3c3]">
              ← Biblioteca AUDITSEO
            </a>
            <div className="mt-10 max-w-5xl">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.17em] text-[#a69580]">{article.eyebrow}</span>
              <h1 className="mt-6 font-display text-[clamp(44px,5.7vw,76px)] font-bold leading-[1.02] tracking-[-0.05em] text-[#f8f8f8]">{article.title}</h1>
              <p className="mt-8 max-w-4xl text-lg leading-[1.75] text-[#e0d3c3] md:text-xl">{article.description}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#b28453]/16 pt-6 text-xs text-[#f8f8f8]/58">
                <a href={article.authorUrl} className="font-bold text-[#b28453] hover:text-[#e0d3c3]">Por {article.author}</a>
                <span className="inline-flex items-center gap-2"><CalendarDays size={14} /> Publicado em {formatDate(article.publishedAt)}</span>
                <span className="inline-flex items-center gap-2"><Clock3 size={14} /> {article.readTime}</span>
                {article.updatedAt !== article.publishedAt ? <span>Atualizado em {formatDate(article.updatedAt)}</span> : null}
              </div>
            </div>
          </div>
        </header>

        <section className="bg-[#e0d3c3] px-6 py-16 text-[#11100f] md:py-20 xl:px-12">
          <div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[24px] border border-[#11100f]/10 bg-[#f4eee5] p-8 shadow-[0_18px_55px_rgba(17,16,15,0.08)]">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">RESPOSTA DIRETA</span>
              <p className="mt-5 text-lg font-medium leading-[1.8] text-[#11100f]/82">{article.directAnswer}</p>
            </div>
            <div className="rounded-[24px] border border-[#11100f]/10 bg-[#11100f] p-8 text-[#f8f8f8]">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">EM RESUMO</span>
              <ul className="mt-5 space-y-3">
                {article.takeaways.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-[1.65] text-[#f8f8f8]/72">
                    <ShieldCheck size={16} className="mt-1 shrink-0 text-[#b28453]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] px-6 py-20 md:py-28 xl:px-12">
          <div className="mx-auto max-w-[860px]">
            {headingLinks.length > 2 ? (
              <nav aria-label="Neste documento" className="mb-14 rounded-[22px] border border-[#b28453]/20 bg-[#171614] p-7">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">NESTE DOCUMENTO</span>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {headingLinks.map((item, index) => (
                    <a key={item.id} href={`#${item.id}`} className="group flex gap-3 text-sm leading-[1.55] text-[#f8f8f8]/66 hover:text-[#e0d3c3]">
                      <span className="font-mono text-[10px] text-[#b28453]">{String(index + 1).padStart(2, "0")}</span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </nav>
            ) : null}

            {article.blocks.map((block, index) => {
              if (block.type === "heading") {
                return <h2 id={headingId(block.text, index, block.id)} key={`${block.text}-${index}`} className="mt-16 scroll-mt-28 font-display text-[34px] font-bold leading-[1.12] tracking-[-0.03em] text-[#f8f8f8] first:mt-0 md:text-[44px]">{block.text}</h2>;
              }
              if (block.type === "subheading") {
                return <h3 key={`${block.text}-${index}`} className="mt-10 font-display text-2xl font-bold text-[#e0d3c3]">{block.text}</h3>;
              }
              if (block.type === "paragraph") {
                return <p key={`${block.text}-${index}`} className="mt-6 text-[17px] leading-[1.9] text-[#f8f8f8]/74">{block.text}</p>;
              }
              if (block.type === "list") {
                return (
                  <ul key={`list-${index}`} className="mt-7 space-y-4 rounded-[20px] border border-[#b28453]/14 bg-[#171614] p-7">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[16px] leading-[1.75] text-[#f8f8f8]/72">
                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b28453]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <aside key={`${block.title}-${index}`} className="mt-8 rounded-[22px] border border-[#b28453]/30 bg-[#b28453]/8 p-7">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">{block.title}</span>
                  <p className="mt-3 text-[16px] leading-[1.75] text-[#e0d3c3]">{block.text}</p>
                </aside>
              );
            })}
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-24 xl:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">FONTES E CRITÉRIO EDITORIAL</span>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em]">O que sustenta as afirmações externas deste artigo</h2>
                <p className="mt-6 text-sm leading-[1.75] text-[#11100f]/68">Priorizamos documentação primária para afirmações sobre plataformas. Conceitos e frameworks proprietários da AUDITSEO são identificados como tal no texto.</p>
              </div>
              <div className="space-y-4">
                {article.sources.map((source) => (
                  <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="block rounded-[20px] border border-[#11100f]/10 bg-[#f4eee5] p-6 transition-all hover:-translate-y-0.5 hover:border-[#b28453]/45">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="font-display text-lg font-bold">{source.label}</h3>
                        <p className="mt-2 text-sm leading-[1.65] text-[#11100f]/64">{source.note}</p>
                      </div>
                      <ExternalLink size={16} className="mt-1 shrink-0 text-[#8c613c]" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.12em] text-[#11100f]/46">Fontes consultadas e verificadas em {formatDate(article.updatedAt)}.</p>
          </div>
        </section>

        {researchCitation ? (
          <section className="bg-[#f4eee5] px-6 py-20 text-[#11100f] md:py-24 xl:px-12">
            <div className="mx-auto max-w-[1120px]">
              <div className="grid gap-10 rounded-[28px] border border-[#11100f]/10 bg-white/45 p-8 md:p-10 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <div className="flex items-center gap-3"><Quote size={20} className="text-[#8c613c]" /><span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">COMO CITAR ESTA PESQUISA</span></div>
                  <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1]">Reuse os dados com contexto e atribuição verificável</h2>
                  <p className="mt-5 text-sm leading-[1.75] text-[#11100f]/68">Snapshot: {researchCitation.snapshotDate}. A referência abaixo é uma sugestão de atribuição; adapte o estilo editorial sem remover contexto, data ou origem.</p>
                </div>
                <div>
                  <p className="rounded-[18px] border border-[#11100f]/10 bg-[#11100f] p-6 font-mono text-[12px] leading-[1.8] text-[#f8f8f8]/82">{researchCitation.suggestedCitation}</p>
                  <p className="mt-5 text-sm leading-[1.75] text-[#11100f]/68">{researchCitation.reuseNote}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={researchCitation.canonicalUrl} className="inline-flex items-center gap-2 rounded-full bg-[#11100f] px-5 py-3 text-xs font-bold text-white hover:bg-[#6d5132]">URL canônica <ExternalLink size={13} /></a>
                    <a href={researchCitation.datasetUrl} className="inline-flex items-center gap-2 rounded-full border border-[#11100f]/15 px-5 py-3 text-xs font-bold hover:bg-white/45">Baixar CSV <ExternalLink size={13} /></a>
                    <a href="/estudos-busca-ia" className="inline-flex items-center gap-2 rounded-full border border-[#11100f]/15 px-5 py-3 text-xs font-bold hover:bg-white/45">Research Hub <ArrowRight size={13} /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-[#11100f] px-6 py-20 md:py-24 xl:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="rounded-[24px] border border-[#b28453]/24 bg-[#171614] p-8 md:p-10">
              <div className="flex items-center gap-3"><BookOpen size={20} className="text-[#b28453]" /><span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">AUTORIA</span></div>
              <h2 className="mt-5 font-display text-3xl font-bold">{article.author}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-[1.75] text-[#f8f8f8]/68">Especialista em SEO e Search Intelligence e fundador da AUDITSEO. O conteúdo editorial é produzido para documentar método, evidências, limites e aprendizados sobre busca — não para fabricar volume de páginas.</p>
              <a href={article.authorUrl} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#b28453] hover:text-[#e0d3c3]">Ver perfil e metodologia do autor <ArrowRight size={14} /></a>
            </div>
          </div>
        </section>

        {relatedArticles.length ? (
          <section className="bg-[#11100f] px-6 py-20 md:py-24 xl:px-12">
            <div className="mx-auto max-w-[1120px]">
              <div className="flex items-center gap-3"><Network size={20} className="text-[#b28453]" /><span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">CONTINUE A TRILHA</span></div>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#f8f8f8]">Documentos que aprofundam ou sustentam este tema</h2>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {relatedArticles.map(([label, href]) => (
                  <a key={href} href={href} className="group rounded-[20px] border border-[#b28453]/20 bg-[#171614] p-6 transition-all hover:-translate-y-1 hover:border-[#b28453]/50">
                    <BookOpen size={17} className="text-[#b28453]" />
                    <h3 className="mt-4 font-display text-xl font-bold text-[#f8f8f8]">{label}</h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#e0d3c3] group-hover:text-[#b28453]">Ler documento <ArrowRight size={14} /></span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-24 xl:px-12">
          <div className="mx-auto max-w-[1120px]">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">APLICAÇÃO PRÁTICA</span>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em]">Soluções relacionadas a este tema</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {article.relatedServices.map(([label, href]) => (
                <a key={href} href={href} className="group rounded-[20px] border border-[#11100f]/10 bg-[#f4eee5] p-6">
                  <FileText size={17} className="text-[#8c613c]" />
                  <h3 className="mt-4 font-display text-xl font-bold">{label}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#8c613c] group-hover:text-[#11100f]">Entender solução <ArrowRight size={14} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </article>

      <SiteFooter onNavigate={navigate} />
    </main>
  );
}
