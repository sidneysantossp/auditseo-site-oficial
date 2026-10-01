import { ArrowRight, BookOpen, CheckCircle2, Search, ShieldCheck, Target } from "lucide-react";
import Header from "./Header";
import SiteFooter from "./SiteFooter";

const routeByNav: Record<string, string> = {
  inicio: "/",
  signal: "/metodo-signal",
  solucoes: "/solucoes",
  conteudo: "/blog",
  diagnostico: "/diagnostico",
  parceria: "/parceria",
  "geo-ia": "/geo-ia",
};

function navigateTo(sectionId: string) {
  if (typeof window === "undefined") return;
  window.location.assign(routeByNav[sectionId] || "/");
}

const principles = [
  "Diagnóstico antes da prescrição: a disciplina entra depois que o gargalo é localizado.",
  "Evidência antes da narrativa: observação, hipótese e recomendação permanecem separadas.",
  "Mensuração antes da atribuição: mudanças são registradas com baseline e janela de validação.",
  "SEO e Search AI no mesmo sistema: GEO não substitui os fundamentos de busca.",
];

const capabilities = [
  ["Consultoria SEO", "Diagnóstico contínuo, priorização, coordenação de implementação, QA e aprendizado por ciclos.", "/consultoria-seo"],
  ["Auditoria SEO", "Investigação pontual de técnica, indexação, intenção, conteúdo, autoridade e performance com roadmap priorizado.", "/auditoria-seo"],
  ["GEO e Search AI", "Baseline, entidade, fontes, prompts, elegibilidade e mensuração de presença em interfaces generativas.", "/geo-ia"],
  ["Pesquisa e metodologia", "Protocolos, benchmarks, limitações e documentos públicos para que o raciocínio possa ser avaliado antes da contratação.", "/estudos-busca-ia"],
];

export default function AboutAuditseoPage() {
  return (
    <div className="min-h-screen bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigateTo} activeSection="" />
      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-[132px] md:pb-28 md:pt-[160px] xl:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(178,132,83,0.16),transparent_34%)]" />
          <div className="relative mx-auto max-w-[1240px]">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">SOBRE A AUDITSEO</span>
            <h1 className="mt-6 max-w-5xl font-display text-[48px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[62px] md:text-[76px]">
              Search Intelligence para transformar sinais de busca em decisões verificáveis.
            </h1>
            <p className="mt-8 max-w-4xl text-lg leading-[1.78] text-[#e0d3c3] md:text-xl">
              A AUDITSEO é uma consultoria de Search Intelligence com atuação a partir de São Paulo e atendimento a empresas em todo o Brasil. Conectamos SEO, conteúdo, autoridade de entidade, GEO, Search AI e mensuração para localizar onde uma empresa perde capacidade de ser descoberta, compreendida, validada, citada ou escolhida.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="/consultoria-seo" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]">
                Conhecer a Consultoria SEO <ArrowRight size={15} />
              </a>
              <a href="/autor/sidney-santos" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b28453]/38 px-7 py-4 text-sm font-bold transition-colors hover:border-[#b28453] hover:text-[#b28453]">
                Conhecer o fundador
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">O QUE SOMOS</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">Uma consultoria de busca, não um pacote fixo de tarefas.</h2>
            </div>
            <div className="space-y-5 text-base leading-[1.82] text-[#2a2927]/78 md:text-lg">
              <p>Com base operacional em São Paulo e atuação nacional, o trabalho começa pelo problema: perda de tráfego, ausência de tração, migração, conteúdo sem direção, autoridade pouco reconhecida, baixa presença em Search AI ou crescimento estagnado.</p>
              <p>Depois, a AUDITSEO escolhe as disciplinas necessárias e transforma os achados em prioridades, responsáveis, critérios de aceite e sinais de validação. Search Intelligence é o nome que usamos para coordenar esse sistema de decisão.</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="max-w-4xl">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">COMO ATUAMOS</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">Serviços reconhecíveis. Método próprio por trás da entrega.</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {capabilities.map(([title, text, href]) => (
                <a key={href} href={href} className="group rounded-[24px] border border-[#b28453]/20 bg-[#171614] p-8 transition-all hover:-translate-y-1 hover:border-[#b28453]/50">
                  <Search size={20} className="text-[#b28453]" />
                  <h3 className="mt-5 font-display text-2xl font-bold">{title}</h3>
                  <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/66">{text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#e0d3c3] group-hover:text-[#b28453]">Entender esta frente <ArrowRight size={14} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">PRINCÍPIOS DE EVIDÊNCIA</span>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">O método precisa continuar válido quando o resultado não é favorável.</h2>
              </div>
              <div className="space-y-4">
                {principles.map((item) => (
                  <div key={item} className="flex gap-4 rounded-[18px] border border-[#11100f]/10 bg-[#f4eee5] p-5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#8c613c]" />
                    <p className="text-sm leading-[1.72] text-[#2a2927]/74">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28 xl:px-12">
          <div className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-3">
            <article className="rounded-[24px] border border-[#b28453]/20 bg-[#171614] p-8">
              <Target size={20} className="text-[#b28453]" />
              <h2 className="mt-5 font-display text-2xl font-bold">Método S.I.G.N.A.L.</h2>
              <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/66">Search Diagnosis, Intent Mapping, Generative Search Readiness, Narrative & Entity Authority, Action Roadmap e Learning Loop organizam o raciocínio da consultoria.</p>
              <a href="/metodo-signal" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#b28453]">Ver o método <ArrowRight size={14} /></a>
            </article>
            <article className="rounded-[24px] border border-[#b28453]/20 bg-[#171614] p-8">
              <BookOpen size={20} className="text-[#b28453]" />
              <h2 className="mt-5 font-display text-2xl font-bold">Pesquisa pública</h2>
              <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/66">A Biblioteca e o hub de estudos documentam critérios, protocolos, fontes, benchmarks e limitações usados no trabalho.</p>
              <a href="/estudos-busca-ia" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#b28453]">Explorar estudos <ArrowRight size={14} /></a>
            </article>
            <article className="rounded-[24px] border border-[#b28453]/20 bg-[#171614] p-8">
              <ShieldCheck size={20} className="text-[#b28453]" />
              <h2 className="mt-5 font-display text-2xl font-bold">Responsabilidade técnica</h2>
              <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/66">A metodologia e o conteúdo editorial têm autoria identificada. A página do fundador registra quem responde publicamente pelo trabalho.</p>
              <a href="/autor/sidney-santos" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#b28453]">Ver autoria <ArrowRight size={14} /></a>
            </article>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1040px] rounded-[30px] bg-[#11100f] p-8 text-[#f8f8f8] md:p-12">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">PRÓXIMO PASSO</span>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] md:text-5xl">Comece pelo problema que precisa ser demonstrado.</h2>
            <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#f8f8f8]/68">Se ainda não sabe se o gargalo é técnico, editorial, de autoridade ou de Search AI, o diagnóstico estratégico existe para classificar o cenário antes da contratação.</p>
            <a href="/diagnostico" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white">Iniciar avaliação estratégica <ArrowRight size={15} /></a>
          </div>
        </section>
      </main>
      <SiteFooter onNavigate={navigateTo} />
    </div>
  );
}
