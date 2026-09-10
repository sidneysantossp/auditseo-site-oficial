import { ArrowRight, Bot, CheckCircle2, Network, Search, ShieldCheck, Sparkles } from "lucide-react";
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

const foundations = [
  ["Entidade clara", "Quem é a empresa, o que oferece, onde atua, para quem é relevante e quais especialistas a representam."],
  ["Conteúdo recuperável", "Informações estruturadas para responder perguntas reais de forma direta, contextual e conectada às páginas comerciais."],
  ["Evidências verificáveis", "Provas, referências, autoria, reputação e sinais externos que sustentam as afirmações da marca."],
  ["Estrutura técnica", "Rastreamento, indexação, canonical, dados estruturados e arquitetura que não criem barreiras à descoberta."],
  ["Consistência pública", "Site, perfis, menções, avaliações e demais fontes representando a empresa de forma coerente."],
  ["Medição responsável", "Baseline de consultas, menções, citações, fontes e tráfego para observar evolução sem transformar IA em promessa."],
];

const method = [
  ["1", "Diagnosticar", "Analisamos como a empresa é encontrada, indexada, compreendida e representada hoje."],
  ["2", "Mapear", "Organizamos entidades, intenções, tópicos, perguntas, concorrentes, fontes e jornadas prioritárias."],
  ["3", "Fortalecer", "Priorizamos melhorias técnicas, editoriais, semânticas, reputacionais e de evidência."],
  ["4", "Medir", "Comparamos a evolução em busca orgânica e em amostras controladas de ambientes generativos."],
];

const limits = [
  "Nenhuma consultoria controla as respostas de ChatGPT, Gemini, Perplexity ou outros sistemas de terceiros.",
  "Não existe marcação ou técnica isolada que garanta citação, menção ou recomendação por uma IA.",
  "GEO não substitui rastreamento, indexação, conteúdo útil, autoridade ou reputação.",
  "Uma medição séria precisa registrar modelo, prompt, período, metodologia e variação das respostas.",
];

export default function CompanyGeoIaPage() {
  return (
    <div className="min-h-screen bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigateTo} activeSection="geo-ia" />
      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-[132px] md:pb-28 md:pt-[160px] xl:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(178,132,83,0.18),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">GENERATIVE SEARCH READINESS</span>
              <h1 className="mt-6 max-w-4xl font-display text-[48px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[62px] md:text-[76px]">
                Prepare sua empresa para ser compreendida na nova busca.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-[#f8f8f8]/72 md:text-xl">
                GEO e AI Search não começam com uma promessa de aparecer em uma resposta. Começam com uma empresa rastreável, clara, consistente, verificável e relevante para as perguntas que antecedem uma decisão.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="/diagnostico" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]">
                  Avaliar presença em busca e IA <ArrowRight size={15} />
                </a>
                <a href="/metodo-signal" className="inline-flex items-center justify-center rounded-full border border-[#b28453]/38 px-7 py-4 text-sm font-bold transition-colors hover:border-[#b28453] hover:text-[#b28453]">
                  Conhecer o método
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[30px] border border-[#b28453]/28 bg-[linear-gradient(145deg,rgba(31,30,28,0.97),rgba(13,13,12,0.99))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    [Search, "Descoberta", "Crawl · Index"],
                    [Network, "Compreensão", "Entidades · Contexto"],
                    [ShieldCheck, "Confiança", "Fontes · Evidências"],
                    [Bot, "IA", "Retrieve · Consider"],
                  ].map(([Icon, title, text]) => {
                    const IconComponent = Icon as typeof Search;
                    return (
                      <div key={String(title)} className="rounded-[20px] border border-[#b28453]/18 bg-white/[0.025] p-5">
                        <IconComponent size={18} className="text-[#b28453]" />
                        <p className="mt-4 font-display text-lg font-bold">{String(title)}</p>
                        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.1em] text-[#f8f8f8]/45">{String(text)}</p>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-6 text-sm leading-[1.7] text-[#e0d3c3]/72">
                  A AUDITSEO trata Search AI como uma extensão do ecossistema de busca — não como um canal separado do SEO, da entidade e da reputação.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="max-w-4xl">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">O QUE PRECISA ESTAR FORTE</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">Seis fundamentos antes de falar em “otimizar para IA”.</h2>
              <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#2a2927]/76 md:text-lg">A preparação generativa é consequência da organização dos sinais que ajudam mecanismos de busca, sistemas de resposta e pessoas a interpretar a empresa.</p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {foundations.map(([title, text], index) => (
                <article key={title} className="rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7 shadow-[0_18px_55px_rgba(17,16,15,0.08)]">
                  <span className="font-mono text-[11px] font-bold text-[#8c613c]">0{index + 1}</span>
                  <h3 className="mt-5 font-display text-2xl font-bold leading-[1.15]">{title}</h3>
                  <p className="mt-4 text-sm leading-[1.72] text-[#2a2927]/76">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] px-6 py-20 md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="text-center">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">S.I.G.N.A.L. APLICADO</span>
              <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] md:text-5xl">Da pergunta “minha marca aparece na IA?” para um plano mensurável.</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {method.map(([number, title, text]) => (
                <article key={number} className="grid gap-5 rounded-[22px] border border-[#b28453]/20 bg-[#171614] p-7 sm:grid-cols-[56px_1fr]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b28453]/42 bg-[#b28453]/10 font-mono text-sm font-bold text-[#b28453]">{number}</span>
                  <div>
                    <h3 className="font-display text-2xl font-bold">{title}</h3>
                    <p className="mt-3 text-sm leading-[1.7] text-[#f8f8f8]/64">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="rounded-[30px] border border-[#11100f]/12 bg-[#11100f] p-8 text-[#f8f8f8] shadow-[0_30px_90px_rgba(17,16,15,0.24)] md:p-11">
              <div className="flex items-start gap-4">
                <Sparkles size={24} className="mt-1 shrink-0 text-[#b28453]" />
                <div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">LIMITES E INTEGRIDADE</span>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-[1.12] md:text-4xl">O que a AUDITSEO não promete.</h2>
                </div>
              </div>
              <div className="mt-9 grid gap-4 md:grid-cols-2">
                {limits.map((item) => (
                  <div key={item} className="flex gap-3 rounded-[18px] border border-[#b28453]/18 bg-white/[0.025] p-5">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#b28453]" />
                    <p className="text-sm leading-[1.7] text-[#e0d3c3]/82">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] px-6 py-20 text-center md:py-28 xl:px-12">
          <div className="mx-auto max-w-[900px]">
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">PRÓXIMO PASSO</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">Descubra quais sinais precisam ser fortalecidos antes de perseguir menções em IA.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.75] text-[#f8f8f8]/66 md:text-lg">O diagnóstico organiza o cenário atual e indica se o gargalo principal está em técnica, intenção, autoridade, conteúdo, reputação ou preparação generativa.</p>
            <a href="/diagnostico" className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]">
              Iniciar avaliação estratégica <ArrowRight size={15} />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter onNavigate={navigateTo} />
    </div>
  );
}
