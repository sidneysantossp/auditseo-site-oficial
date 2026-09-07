import { ArrowRight, BookOpen, CalendarDays, Clock3, FileText, Search, ShieldCheck } from "lucide-react";
import { articleList } from "@/content/articles";
import { advancedArticleList } from "@/content/articlesAdvanced";
import { buyerArticleList } from "@/content/articlesBuyer";
import { demandArticleList } from "@/content/articlesDemand";
import { protocolArticleList } from "@/content/articlesProtocols";
import type { Article } from "@/content/articles";
import Header from "./Header";
import SiteFooter from "./SiteFooter";

function navigate(sectionId: string) {
  if (typeof window === "undefined") return;
  const routes: Record<string, string> = { inicio: "/", signal: "/metodo-signal", solucoes: "/solucoes", conteudo: "/blog", diagnostico: "/diagnostico", parceria: "/parceria", "geo-ia": "/geo-ia" };
  window.location.assign(routes[sectionId] || "/");
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <a href={`/blog/${article.slug}`} className="group flex min-h-[330px] flex-col rounded-[24px] border border-[#b28453]/22 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.99))] p-8 transition-all hover:-translate-y-1 hover:border-[#b28453]/55">
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
  );
}

function Collection({ eyebrow, title, text, items }: { eyebrow: string; title: string; text: string; items: Article[] }) {
  return (
    <section className="px-6 py-20 md:py-28 xl:px-12">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-4xl">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{eyebrow}</span>
          <h2 className="mt-5 font-display text-[38px] font-bold leading-[1.07] tracking-[-0.035em] md:text-[54px]">{title}</h2>
          <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#f8f8f8]/68 md:text-lg">{text}</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">{items.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
      </div>
    </section>
  );
}

export default function BlogHubPageV2() {
  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigate} activeSection="conteudo" />

      <section className="relative overflow-hidden px-6 pb-20 pt-[142px] md:pb-28 md:pt-[176px] xl:px-12">
        <div className="pointer-events-none absolute right-[-8%] top-[4%] h-[560px] w-[560px] rounded-full bg-[#b28453]/10 blur-[160px]" />
        <div className="relative mx-auto max-w-[1240px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.17em] text-[#b28453]">BIBLIOTECA AUDITSEO</span>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,6vw,82px)] font-bold leading-[1.01] tracking-[-0.05em]">Search Intelligence documentada — conceitos, técnica, decisões e método.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-[1.75] text-[#e0d3c3] md:text-xl">Esta biblioteca existe para tornar o raciocínio da AUDITSEO verificável antes da contratação. Quando uma afirmação depende de plataforma, priorizamos fonte primária. Quando um método é nosso, ele é identificado como método nosso.</p>
          <div className="mt-10 flex flex-wrap gap-3">{["Biblioteca em expansão", "Fontes primárias", "Autoria", "Metodologia pública", "Sem garantias de IA"].map((item) => <span key={item} className="rounded-full border border-[#b28453]/24 bg-[#b28453]/8 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#e0d3c3]">{item}</span>)}</div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-16 text-[#11100f] md:py-20 xl:px-12">
        <div className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-3">
          {[
            [<ShieldCheck size={20} />, "Evidência antes da afirmação", "Se existe documentação oficial, ela sustenta a afirmação externa. Se existe incerteza, o texto precisa dizer isso."],
            [<Search size={20} />, "Pergunta antes da palavra-chave", "O documento nasce de uma pergunta real, de uma decisão ou de um problema que precisa ser explicado com profundidade."],
            [<BookOpen size={20} />, "Método antes do número", "Benchmarks, métricas e estudos devem publicar amostra, protocolo e limitações antes de usar percentuais como prova de autoridade."],
          ].map(([icon, title, text]) => <article key={String(title)} className="rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7"><span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#11100f] text-[#b28453]">{icon}</span><h2 className="mt-5 font-display text-xl font-bold">{title}</h2><p className="mt-4 text-sm leading-[1.7] text-[#11100f]/68">{text}</p></article>)}
        </div>
      </section>

      <Collection eyebrow="FUNDAMENTOS" title="Os conceitos que definem como a AUDITSEO enxerga a busca." text="Comece aqui para entender Search Intelligence, autoridade de entidade, GEO sem hype e como fontes entram em experiências de busca com IA." items={articleList} />

      <div className="border-y border-[#b28453]/10 bg-[#151413]">
        <Collection eyebrow="TÉCNICA E MENSURAÇÃO" title="Documentos para transformar conceitos em diagnóstico observável." text="Crawlers, arquitetura de entidade, diferenças entre SEO/GEO/AEO e medição de visibilidade em IA com amostra e limitações explícitas." items={advancedArticleList} />
      </div>

      <Collection eyebrow="PROTOCOLOS AUDITSEO" title="Metodologias proprietárias publicadas antes dos resultados." text="Esses documentos explicam como avaliamos citabilidade, como localizamos a etapa quebrada da cadeia de busca e como o benchmark de Search AI deve ser coletado e classificado." items={protocolArticleList} />

      <div className="border-y border-[#b28453]/10 bg-[#151413]">
        <Collection eyebrow="PERGUNTAS DO MERCADO" title="Temas populares respondidos com mais restrição do que promessa." text="Aqui entram dúvidas com alta intenção prática, como aparecer no ChatGPT e o papel de llms.txt. O objetivo é separar o que a plataforma documenta, o que a evidência observa e o que continua incerto." items={demandArticleList} />
      </div>

      <Collection eyebrow="DECISÃO DE CONTRATAÇÃO" title="Conteúdo para empresas que estão escolhendo como operar SEO." text="Critérios para avaliar consultorias, agências, times internos e modelos híbridos sem transformar o processo de compra em uma comparação superficial de pacotes e promessas." items={buyerArticleList} />

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-28 xl:px-12">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">PRÓXIMO ATIVO DE PROVA</span>
            <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">Pesquisa proprietária sobre o próprio mercado de Search Intelligence.</h2>
            <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#11100f]/70">O primeiro piloto do Observatory observa prestadores de SEO e Search Intelligence no Brasil. O protocolo, o universo e os prompts são definidos antes da coleta; nenhum percentual será publicado antes de existir dado revisado.</p>
          </div>
          <div className="rounded-[24px] border border-[#11100f]/10 bg-[#11100f] p-8 text-[#f8f8f8]">
            <FileText size={20} className="text-[#b28453]" />
            <h3 className="mt-5 font-display text-2xl font-bold">AUDITSEO Search AI Observatory</h3>
            <ul className="mt-6 space-y-4 text-sm leading-[1.7] text-[#f8f8f8]/70">
              <li>20 prestadores do mercado de SEO/Search Intelligence;</li>
              <li>prompts genéricos e branded congelados antes da coleta;</li>
              <li>regras públicas para menção, citação, recomendação e precisão de entidade;</li>
              <li>AUDITSEO incluída sob a mesma régua, com conflito de interesse declarado;</li>
              <li>repetições, revisão humana e limitações junto com os resultados.</li>
            </ul>
            <a href="/blog/protocolo-benchmark-search-ai" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#b28453] hover:text-[#e0d3c3]">Ler protocolo antes dos dados <ArrowRight size={14} /></a>
          </div>
        </div>
      </section>

      <SiteFooter onNavigate={navigate} />
    </main>
  );
}
