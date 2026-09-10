import { CheckCircle2, ArrowRight } from "lucide-react";
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

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigateTo} activeSection="" />

      <main>
        <section className="relative flex min-h-[78vh] items-center overflow-hidden px-6 pb-20 pt-[142px] md:pb-28 md:pt-[166px] xl:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(178,132,83,0.17),transparent_38%)]" />
          <div className="relative mx-auto w-full max-w-[980px] text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#b28453]/12 shadow-[0_0_60px_rgba(178,132,83,0.14)]">
              <CheckCircle2 size={38} className="text-[#b28453]" />
            </div>

            <span className="mt-8 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
              SOLICITAÇÃO CONFIRMADA
            </span>

            <h1 className="mx-auto mt-6 max-w-4xl font-display text-[46px] font-bold leading-[1.03] tracking-[-0.04em] text-[#f8f8f8] sm:text-[58px] md:text-[72px]">
              Recebemos suas informações.
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-[1.7] text-[#f8f8f8]/72 md:text-xl">
              Vamos analisar o contexto informado antes de retornar pelo canal de contato enviado. A primeira conversa é para entender o cenário, as prioridades e se a AUDITSEO pode contribuir de forma estratégica.
            </p>

            <div className="mx-auto mt-10 max-w-3xl rounded-[22px] border border-[#b28453]/24 bg-[#171614] p-7 text-left shadow-[0_24px_70px_rgba(0,0,0,0.24)] md:p-8">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">PRÓXIMO PASSO</p>
              <p className="mt-4 text-[15px] leading-[1.75] text-[#e0d3c3]/82 md:text-base">
                Enquanto analisamos sua solicitação, você pode conhecer o Método S.I.G.N.A.L. e as soluções de Inteligência de Busca e Autoridade de Entidade que orientam nossa atuação.
              </p>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/metodo-signal"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]"
              >
                Conhecer o método S.I.G.N.A.L. <ArrowRight size={15} />
              </a>
              <a
                href="/solucoes"
                className="inline-flex items-center justify-center rounded-full border border-[#b28453]/38 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:border-[#b28453] hover:text-[#b28453]"
              >
                Ver soluções
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter onNavigate={navigateTo} />
    </div>
  );
}
