import { ArrowRight, Beaker, FileSearch, ShieldCheck } from "lucide-react";
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

export default function ResearchProgramPage() {
  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigate} activeSection="conteudo" />
      <section className="px-6 pb-24 pt-[150px] md:pb-32 md:pt-[180px] xl:px-12">
        <div className="mx-auto max-w-[1120px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">PROGRAMA DE PESQUISA AUDITSEO</span>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,6vw,80px)] font-bold leading-[1.02] tracking-[-0.05em]">
            Estudos de busca com IA precisam começar por método — não por números decorativos.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-[1.75] text-[#e0d3c3] md:text-xl">
            Esta área será usada para publicar benchmarks, experimentos e dados proprietários da AUDITSEO. Enquanto o primeiro estudo não estiver concluído e documentado, não apresentaremos resultados como se já existissem.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              [<Beaker size={20} />, "Método antes do resultado", "Cada estudo deverá informar amostra, prompts, plataformas, data, critérios de coleta e limitações."],
              [<FileSearch size={20} />, "Dados rastreáveis", "Resultados publicados deverão permitir entender de onde cada conclusão veio e o que não pode ser inferido da amostra."],
              [<ShieldCheck size={20} />, "Sem causalidade inventada", "Mudanças em respostas generativas não serão atribuídas automaticamente a uma intervenção sem evidência suficiente."],
            ].map(([icon, title, text]) => (
              <article key={String(title)} className="rounded-[22px] border border-[#b28453]/22 bg-[#171614] p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#b28453]/10 text-[#b28453]">{icon}</span>
                <h2 className="mt-5 font-display text-xl font-bold">{title}</h2>
                <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/68">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[26px] border border-[#b28453]/28 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.99))] p-8 md:p-10">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">PRIMEIRO PROJETO PLANEJADO</span>
            <h2 className="mt-5 font-display text-3xl font-bold">AUDITSEO Search AI Benchmark Brasil</h2>
            <p className="mt-5 max-w-3xl text-base leading-[1.75] text-[#f8f8f8]/70">
              A proposta é medir menções, citações, fontes e contexto competitivo em um conjunto fixo de perguntas e setores. Amostra e metodologia só serão anunciadas como definitivas quando o desenho do estudo estiver fechado.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/blog/geo-o-que-e-o-que-nao-garante" className="inline-flex items-center gap-2 rounded-full bg-[#b28453] px-6 py-3 text-sm font-bold text-white hover:bg-[#e0d3c3] hover:text-[#11100f]">
                Ler nosso critério sobre GEO <ArrowRight size={14} />
              </a>
              <a href="/blog/como-ias-encontram-e-citam-fontes" className="inline-flex items-center gap-2 rounded-full border border-[#b28453]/35 px-6 py-3 text-sm font-bold text-[#f8f8f8] hover:bg-[#b28453]/10">
                Entender fontes e citação <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter onNavigate={navigate} />
    </main>
  );
}
