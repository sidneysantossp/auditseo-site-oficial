import { ArrowRight, Beaker, Database, FileSearch, ShieldCheck } from "lucide-react";
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

const intentFamilies = [
  ["Provider Selection", "Como empresas escolhem, comparam e validam consultorias e agências de SEO."],
  ["Technical SEO", "Auditoria técnica, indexação, JavaScript, migração, canonical e risco orgânico."],
  ["Search AI / GEO", "Presença em ChatGPT e outras interfaces, mensuração, fontes, menções e citações."],
  ["Entity, Content & Authority", "Entidade, especialistas, conteúdo citável, autoridade temática e sinais públicos."],
];

export default function ResearchProgramPage() {
  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigate} activeSection="conteudo" />

      <section className="px-6 pb-24 pt-[150px] md:pb-32 md:pt-[180px] xl:px-12">
        <div className="mx-auto max-w-[1180px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">AUDITSEO SEARCH AI OBSERVATORY</span>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,6vw,80px)] font-bold leading-[1.02] tracking-[-0.05em]">
            Primeiro vamos medir o nosso próprio mercado.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-[1.75] text-[#e0d3c3] md:text-xl">
            O primeiro piloto do Observatory não será sobre CRM, ERP ou software. Ele observará como prestadores de SEO e Search Intelligence com atuação no Brasil aparecem, são citados, recomendados e descritos nas respostas de IA.
          </p>

          <div className="mt-10 inline-flex rounded-full border border-[#b28453]/28 bg-[#b28453]/8 px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#e0d3c3]">
            STATUS: UNIVERSO + PROMPTS CONGELADOS · COLETA AINDA NÃO EXECUTADA
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              [<Database size={20} />, "20 prestadores", "Incluindo a AUDITSEO, com conflito de interesse declarado e sem tratamento privilegiado."],
              [<FileSearch size={20} />, "80 prompts genéricos", "Perguntas reais de contratação distribuídas em quatro famílias de intenção do nosso próprio mercado."],
              [<Beaker size={20} />, "60 prompts branded", "Três perguntas por prestador para medir precisão de entidade, especialidade e evidência pública."],
              [<ShieldCheck size={20} />, "Até 1.120 respostas", "140 prompts × 4 interfaces × 2 repetições no desenho-alvo do primeiro ciclo."],
            ].map(([icon, title, text]) => (
              <article key={String(title)} className="rounded-[22px] border border-[#b28453]/22 bg-[#171614] p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#b28453]/10 text-[#b28453]">{icon}</span>
                <h2 className="mt-5 font-display text-xl font-bold">{title}</h2>
                <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-28 xl:px-12">
        <div className="mx-auto max-w-[1180px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">RECORTE DO ESTUDO</span>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">
            O Observatory precisa reforçar a categoria que queremos possuir.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#11100f]/70">
            Em vez de ensinar o domínio da AUDITSEO a falar sobre softwares aleatórios, o primeiro estudo concentra a pesquisa em Search Intelligence, SEO técnico, Search AI, autoridade de entidade e conteúdo. O dataset passa a ser extensão direta da nossa tese editorial e comercial.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {intentFamilies.map(([title, text]) => (
              <article key={title} className="rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7">
                <h3 className="font-display text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-[#11100f]/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28 xl:px-12">
        <div className="mx-auto max-w-[1180px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">DUAS MEDIÇÕES DIFERENTES</span>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">
            Aparecer em uma recomendação não é a mesma coisa que ser descrito corretamente.
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[24px] border border-[#b28453]/22 bg-[#171614] p-8">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">MÓDULO A</span>
              <h3 className="mt-5 font-display text-3xl font-bold">Category Visibility</h3>
              <p className="mt-5 text-sm leading-[1.75] text-[#f8f8f8]/68">Observa quais prestadores aparecem sem serem citados previamente no prompt. Mede menção, recomendação, citação de fonte própria, citação externa e distribuição de fontes.</p>
            </article>
            <article className="rounded-[24px] border border-[#b28453]/22 bg-[#171614] p-8">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">MÓDULO B</span>
              <h3 className="mt-5 font-display text-3xl font-bold">Entity Accuracy</h3>
              <p className="mt-5 text-sm leading-[1.75] text-[#f8f8f8]/68">Quando uma marca é perguntada nominalmente, mede se identidade, serviços, especialidade, contexto e evidências públicas são representados corretamente.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-28 xl:px-12">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">REGRA DE INTEGRIDADE</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">A AUDITSEO também entra na régua.</h2>
            <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#11100f]/70">
              Como financiamos o estudo e também somos uma das entidades observadas, esse conflito será declarado. Os prompts, regras e repetições usados para a AUDITSEO serão exatamente os mesmos usados para os demais prestadores. Resultado desfavorável não será removido do dataset.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/blog/protocolo-benchmark-search-ai" className="inline-flex items-center gap-2 rounded-full bg-[#11100f] px-6 py-3 text-sm font-bold text-white hover:bg-[#6d5132]">
                Ler o protocolo de benchmark <ArrowRight size={14} />
              </a>
              <a href="/blog/como-medir-visibilidade-em-ia" className="inline-flex items-center gap-2 rounded-full border border-[#11100f]/15 px-6 py-3 text-sm font-bold hover:bg-white/35">
                Entender as métricas <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <aside className="rounded-[24px] border border-[#11100f]/10 bg-[#11100f] p-8 text-[#f8f8f8]">
            <ShieldCheck size={22} className="text-[#b28453]" />
            <h3 className="mt-5 font-display text-2xl font-bold">Saída planejada</h3>
            <p className="mt-5 text-sm leading-[1.75] text-[#f8f8f8]/70">
              Título de trabalho: “Search AI Visibility Brasil 2026 — Como prestadores de SEO e Search Intelligence aparecem nas respostas de IA”. Nenhuma porcentagem ou ranking será publicado antes da coleta, revisão e documentação das limitações.
            </p>
          </aside>
        </div>
      </section>

      <SiteFooter onNavigate={navigate} />
    </main>
  );
}
