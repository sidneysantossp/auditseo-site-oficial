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

const modules = [
  {
    code: "MÓDULO A",
    title: "Category Visibility",
    text: "Perguntas genéricas de categoria, problema, comparação e decisão. Mede quais marcas aparecem sem serem citadas previamente no prompt.",
    metrics: ["Mention Rate", "Recommendation Rate", "Owned Citation Rate", "External Citation Rate", "Source Share"],
  },
  {
    code: "MÓDULO B",
    title: "Entity Accuracy",
    text: "Perguntas branded para avaliar se a plataforma descreve corretamente identidade, oferta, público/contexto e fatos centrais da marca.",
    metrics: ["identidade", "oferta", "contexto de uso", "desatualização", "fontes oficiais/externas"],
  },
];

const categories = [
  ["01", "CRM e gestão comercial", "Ferramentas para pipeline, processos de vendas e relacionamento comercial."],
  ["02", "ERP e gestão para PME", "Sistemas de gestão financeira, fiscal, estoque e operação empresarial."],
  ["03", "Plataformas de e-commerce", "Infraestrutura para criar, operar e escalar lojas virtuais."],
  ["04", "Automação de marketing", "Plataformas de campanhas, jornadas, segmentação, nutrição e integração com vendas."],
  ["05", "Atendimento omnichannel e help desk", "Soluções para WhatsApp, tickets, chat, e-mail, SLA e operação de suporte."],
];

export default function ResearchProgramPage() {
  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigate} activeSection="conteudo" />

      <section className="px-6 pb-24 pt-[150px] md:pb-32 md:pt-[180px] xl:px-12">
        <div className="mx-auto max-w-[1180px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">AUDITSEO SEARCH AI OBSERVATORY</span>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,6vw,80px)] font-bold leading-[1.02] tracking-[-0.05em]">
            O protocolo vem antes do ranking. E os dados vêm antes da conclusão.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-[1.75] text-[#e0d3c3] md:text-xl">
            O primeiro piloto do Observatory será focado em software B2B com presença no mercado brasileiro. O objetivo é observar como marcas são mencionadas, citadas, recomendadas e descritas em interfaces de Search AI. O estudo ainda não possui resultados publicados.
          </p>

          <div className="mt-10 inline-flex rounded-full border border-[#b28453]/28 bg-[#b28453]/8 px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#e0d3c3]">
            STATUS: ESCOPO + MARCAS + PROMPTS CONGELADOS · COLETA AINDA NÃO EXECUTADA
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              [<Database size={20} />, "5 categorias", "Um único recorte B2B/SaaS para reduzir comparação entre jornadas incompatíveis."],
              [<FileSearch size={20} />, "50 marcas", "10 marcas por categoria; domínios oficiais ainda passam por verificação antes da coleta."],
              [<Beaker size={20} />, "250 prompts", "100 genéricos de categoria + 150 branded de precisão de entidade."],
              [<ShieldCheck size={20} />, "Até 2.000 respostas", "4 interfaces × 2 repetições no desenho-alvo do piloto."],
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

      <section className="border-y border-[#b28453]/10 bg-[#151413] px-6 py-20 md:py-24 xl:px-12">
        <div className="mx-auto max-w-[1180px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">RECORTE DO PILOTO</span>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">State of Search AI Brasil 2026 — Software B2B</h2>
          <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#f8f8f8]/68">
            O primeiro ciclo não pretende representar “todas as empresas brasileiras”. Ele compara cinco categorias de software com forte jornada de pesquisa e shortlist, usando 10 marcas em cada uma.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {categories.map(([number, title, text]) => (
              <article key={number} className="rounded-[20px] border border-[#b28453]/18 bg-[#171614] p-6">
                <span className="font-mono text-[10px] font-bold text-[#b28453]">{number}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-[#e0d3c3]">{title}</h3>
                <p className="mt-3 text-xs leading-[1.7] text-[#f8f8f8]/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-28 xl:px-12">
        <div className="mx-auto max-w-[1180px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">DUAS PERGUNTAS, DUAS MEDIÇÕES</span>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">
            Visibilidade de categoria não é a mesma coisa que precisão sobre a entidade.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#11100f]/70">
            Misturar prompts genéricos e branded em uma única taxa pode criar uma leitura artificialmente favorável. O piloto separa descoberta competitiva da capacidade de descrever corretamente uma marca conhecida pelo nome.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {modules.map((module) => (
              <article key={module.code} className="rounded-[24px] border border-[#11100f]/10 bg-[#f4eee5] p-8 shadow-[0_16px_45px_rgba(17,16,15,0.06)]">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">{module.code}</span>
                <h3 className="mt-5 font-display text-3xl font-bold">{module.title}</h3>
                <p className="mt-5 text-sm leading-[1.75] text-[#11100f]/70">{module.text}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {module.metrics.map((metric) => <span key={metric} className="rounded-full border border-[#11100f]/10 bg-white/50 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.09em] text-[#6f4e30]">{metric}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28 xl:px-12">
        <div className="mx-auto max-w-[1180px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">REGRAS DO PILOTO</span>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">O resultado só será publicável se o processo puder ser explicado.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              ["Amostra congelada", "Categorias, 50 marcas e 250 prompts já estão versionados antes da primeira resposta observada. Mudanças posteriores criam nova versão."],
              ["Domínio oficial verificado", "Citation Rate só pode ser calculada depois de confirmar os domínios oficiais de cada marca em fonte primária."],
              ["Repetição registrada", "Respostas contraditórias não serão descartadas. O piloto prevê duas execuções independentes por prompt."],
              ["Menção ≠ recomendação", "Uma marca citada de forma neutra não entra automaticamente como recomendada."],
              ["Citação observável", "Só contamos fontes visíveis ou recuperáveis no método; não inferimos fontes invisíveis."],
              ["Revisão humana", "Recommendation e Entity Accuracy exigem revisão humana; pelo menos 20% da amostra piloto deve receber segunda revisão."],
              ["Limitações junto aos números", "Variabilidade, mudanças de modelo, contexto de conta, localização e amostra precisam acompanhar qualquer resultado."],
              ["Sem market share inventado", "Competitive Share of Mentions descreve apenas esta amostra de prompts; não é participação de mercado do software."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-[20px] border border-[#b28453]/18 bg-[#171614] p-7">
                <h3 className="font-display text-xl font-bold text-[#e0d3c3]">{title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/66">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-28 xl:px-12">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">SAÍDA PLANEJADA</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">State of Search AI Brasil 2026 — Software B2B</h2>
            <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#11100f]/70">
              Nenhuma porcentagem, ranking por categoria ou conclusão será exibida aqui até a coleta correspondente existir, passar por revisão e ter suas limitações documentadas.
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
            <h3 className="mt-5 font-display text-2xl font-bold">Regra de integridade</h3>
            <p className="mt-5 text-sm leading-[1.75] text-[#f8f8f8]/70">
              O protocolo e os manifestos podem existir antes dos dados. Os dados nunca devem aparecer antes do protocolo. E uma correlação observada não será tratada como causalidade de SEO/GEO sem desenho experimental suficiente.
            </p>
          </aside>
        </div>
      </section>

      <SiteFooter onNavigate={navigate} />
    </main>
  );
}
