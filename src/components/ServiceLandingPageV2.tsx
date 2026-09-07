import { ArrowRight, CheckCircle2, Compass, FileText, Search, ShieldCheck, Target, XCircle } from "lucide-react";
import type { ServicePageData } from "@/content/services";
import { serviceArticleRelations } from "@/content/serviceArticleRelations";
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

function Heading({ eyebrow, title, text, dark = true, center = false }: { eyebrow: string; title: string; text?: string; dark?: boolean; center?: boolean }) {
  return (
    <div className={`${center ? "mx-auto items-center text-center" : "items-start text-left"} flex max-w-4xl flex-col`}>
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{eyebrow}</span>
      <h2 className={`mt-5 font-display text-[36px] font-bold leading-[1.06] tracking-[-0.035em] md:text-[52px] ${dark ? "text-[#f8f8f8]" : "text-[#11100f]"}`}>{title}</h2>
      {text ? <p className={`mt-6 max-w-3xl text-base leading-[1.75] md:text-lg ${dark ? "text-[#f8f8f8]/70" : "text-[#11100f]/70"}`}>{text}</p> : null}
    </div>
  );
}

export default function ServiceLandingPageV2({ data }: { data: ServicePageData }) {
  const authorityLinks = serviceArticleRelations[data.slug] || [];

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigate} activeSection="solucoes" />

      <section className="relative overflow-hidden px-6 pb-24 pt-[142px] md:pb-32 md:pt-[176px] xl:px-12">
        <div className="pointer-events-none absolute right-[-8%] top-[8%] h-[560px] w-[560px] rounded-full bg-[#b28453]/10 blur-[150px]" />
        <div className="relative mx-auto max-w-[1240px]">
          <a href="/solucoes" className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453] hover:text-[#e0d3c3]">← Todas as soluções</a>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#a69580]">{data.eyebrow}</span>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(46px,5.5vw,78px)] font-bold leading-[1.01] tracking-[-0.05em]">{data.title}</h1>
              <p className="mt-8 max-w-3xl text-lg leading-[1.7] text-[#e0d3c3] md:text-xl">{data.lead}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/diagnostico" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]">Avaliar se este é o meu cenário <ArrowRight size={15} /></a>
                <a href="#evidencia-publica" className="inline-flex items-center justify-center rounded-full border border-[#b28453]/38 px-7 py-4 text-sm font-bold hover:bg-[#b28453]/10">Ver a base pública da solução</a>
              </div>
            </div>

            <aside className="rounded-[26px] border border-[#b28453]/30 bg-[linear-gradient(145deg,rgba(31,30,28,0.97),rgba(13,13,12,0.99))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">RESPOSTA DIRETA</span>
              <p className="mt-5 text-base leading-[1.8] text-[#f8f8f8]/82">{data.directAnswer}</p>
              <div className="mt-7 border-t border-[#b28453]/16 pt-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#f8f8f8]/45">PERGUNTA QUE DECIDE O DIAGNÓSTICO</span>
                <p className="mt-3 font-display text-xl font-bold leading-[1.4] text-[#e0d3c3]">{data.diagnosticQuestion}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <Heading dark={false} eyebrow="O PROBLEMA" title={data.problemTitle} />
          <div className="mt-9 max-w-4xl space-y-5 text-base leading-[1.8] text-[#11100f]/74 md:text-lg">
            {data.problemText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-14 rounded-[26px] border border-[#11100f]/10 bg-[#f4eee5] p-8 shadow-[0_18px_60px_rgba(17,16,15,0.08)] md:p-10">
            <div className="flex items-center gap-3"><Search size={20} className="text-[#8c613c]" /><h3 className="font-display text-2xl font-bold">Sinais que justificam investigação</h3></div>
            <p className="mt-3 max-w-3xl text-sm leading-[1.7] text-[#11100f]/62">Eles não provam a causa isoladamente. Servem para indicar que este cenário merece ser testado antes de escolher uma solução.</p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {data.warningSignals.map((item) => <div key={item} className="flex gap-3 rounded-[16px] border border-[#11100f]/8 bg-white/35 p-4 text-sm leading-[1.6] text-[#11100f]/76"><Target size={16} className="mt-0.5 shrink-0 text-[#8c613c]" /><span>{item}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <Heading eyebrow="FIT / NÃO-FIT" title="Uma boa solução também precisa dizer quando não deve ser vendida." text="Classificar corretamente o cenário evita tratar sintomas parecidos como se tivessem a mesma causa." />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[24px] border border-[#b28453]/26 bg-[#171614] p-8">
              <div className="flex items-center gap-3 text-[#e0d3c3]"><CheckCircle2 size={20} /><h3 className="font-display text-2xl font-bold">Faz sentido quando</h3></div>
              <ul className="mt-7 space-y-4">{data.fit.map((item) => <li key={item} className="flex gap-3 text-sm leading-[1.7] text-[#f8f8f8]/70"><CheckCircle2 size={16} className="mt-1 shrink-0 text-[#b28453]" /><span>{item}</span></li>)}</ul>
            </div>
            <div className="rounded-[24px] border border-[#f8f8f8]/10 bg-[#151413] p-8">
              <div className="flex items-center gap-3 text-[#f8f8f8]/70"><XCircle size={20} /><h3 className="font-display text-2xl font-bold">Provavelmente não é a frente certa quando</h3></div>
              <ul className="mt-7 space-y-4">{data.notFit.map((item) => <li key={item} className="flex gap-3 text-sm leading-[1.7] text-[#f8f8f8]/62"><XCircle size={16} className="mt-1 shrink-0 text-[#f8f8f8]/38" /><span>{item}</span></li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section id="como-trabalhamos" className="scroll-mt-24 bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <Heading dark={false} eyebrow="COMO TRABALHAMOS" title="A execução nasce de uma hipótese defensável, não de uma lista pronta de tarefas." text="O escopo final depende da evidência encontrada, mas esta é a lógica que organiza a solução." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.approach.map((step, index) => <article key={step.title} className="rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7 shadow-[0_14px_45px_rgba(17,16,15,0.06)]"><span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">ETAPA_{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3><p className="mt-4 text-sm leading-[1.75] text-[#11100f]/68">{step.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <Heading eyebrow="ENTREGÁVEIS" title="O projeto precisa deixar ativos que outra pessoa consiga entender, executar e validar." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.deliverables.map(([title, text]) => <article key={title} className="rounded-[22px] border border-[#b28453]/20 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7"><FileText size={18} className="text-[#b28453]" /><h3 className="mt-5 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-[1.7] text-[#f8f8f8]/66">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-32 xl:px-12">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Heading dark={false} eyebrow="COMO MEDIMOS" title="O sucesso precisa responder ao problema original." text="Os indicadores variam por solução. O importante é declarar antes quais sinais serão usados para validar, enfraquecer ou rejeitar a hipótese." />
          <div className="grid gap-4 sm:grid-cols-2">{data.measurement.map((item) => <div key={item} className="flex items-center gap-3 rounded-[18px] border border-[#11100f]/10 bg-[#f4eee5] p-5 text-sm font-semibold text-[#11100f]/76"><Compass size={16} className="shrink-0 text-[#8c613c]" /><span>{item}</span></div>)}</div>
        </div>
      </section>

      {authorityLinks.length ? (
        <section id="evidencia-publica" className="scroll-mt-24 px-6 py-24 md:py-32 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <Heading eyebrow="BASE PÚBLICA DA SOLUÇÃO" title="Você pode revisar parte do raciocínio antes de contratar." text="Estes documentos explicam conceitos, limites e protocolos que sustentam esta solução. Eles não substituem o diagnóstico da empresa, mas permitem avaliar como a AUDITSEO pensa." />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {authorityLinks.map((item) => <a key={item.href} href={item.href} className="group rounded-[22px] border border-[#b28453]/22 bg-[#171614] p-7 transition-all hover:-translate-y-1 hover:border-[#b28453]/52"><span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{item.eyebrow}</span><h3 className="mt-5 font-display text-xl font-bold">{item.title}</h3><p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/66">{item.text}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#e0d3c3] group-hover:text-[#b28453]">Ler documento <ArrowRight size={14} /></span></a>)}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[980px]">
          <Heading eyebrow="PERGUNTAS FREQUENTES" title={`Dúvidas sobre ${data.name}`} />
          <div className="mt-12 space-y-4">{data.faqs.map((faq) => <details key={faq.question} className="rounded-[18px] border border-[#b28453]/18 bg-[#171614] px-6 py-5 open:border-[#b28453]/45"><summary className="cursor-pointer list-none font-display text-lg font-bold">{faq.question}</summary><p className="mt-4 border-t border-[#b28453]/12 pt-4 text-sm leading-[1.75] text-[#f8f8f8]/68">{faq.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="px-6 pb-28 pt-4 xl:px-12">
        <div className="mx-auto max-w-[1040px] rounded-[28px] border border-[#b28453]/30 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.99))] p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.35)] md:p-12">
          <ShieldCheck size={24} className="mx-auto text-[#b28453]" />
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.12] md:text-4xl">Antes de contratar {data.name}, confirme se o problema realmente pertence a esta frente.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.75] text-[#f8f8f8]/68">A avaliação estratégica existe para separar sintoma de causa, classificar o cenário e decidir se há uma hipótese de trabalho que justifique o investimento.</p>
          <a href="/diagnostico" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#b28453] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]">Avaliar meu cenário <ArrowRight size={15} /></a>
        </div>
      </section>

      <SiteFooter onNavigate={navigate} />
    </main>
  );
}
