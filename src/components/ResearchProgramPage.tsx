import { ArrowRight, BarChart3, Beaker, Database, FileSearch, Search, ShieldCheck } from "lucide-react";
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

const researchAssets = [
  {
    eyebrow: "BENCHMARK #001 · 08/09/2026",
    title: "Quanto custa consultoria SEO + GEO/IA?",
    text: "Snapshot de 10 fornecedores/produtos e 23 ofertas públicas, separando sessão, auditoria, sprint, serviço recorrente e software antes de comparar preço.",
    metrics: ["10 fornecedores/produtos", "23 ofertas", "CSV público"],
    href: "/blog/quanto-custa-consultoria-seo-geo-ia",
    dataset: "/dados/benchmark-ofertas-seo-geo-ia-2026-09-08.csv",
  },
  {
    eyebrow: "BENCHMARK #002 · 08/09/2026",
    title: "Como o mercado brasileiro vende GEO e Search AI?",
    text: "Amostra exploratória de 12 páginas públicas classificadas por garantia, prazo, mensuração, método próprio e evidência pública observada.",
    metrics: ["12 páginas", "7 com protocolo mensurável", "CSV público"],
    href: "/blog/como-mercado-brasileiro-vende-geo-search-ai",
    dataset: "/dados/benchmark-comunicacao-geo-search-ai-2026-09-08.csv",
  },
  {
    eyebrow: "CASE STUDY #001 · EM ANDAMENTO",
    title: "Construindo a autoridade da AUDITSEO do zero.",
    text: "O próprio domínio é o primeiro caso público do método: baseline registrado antes do release, hipóteses documentadas e métricas que não poderão ser reescritas depois.",
    metrics: ["GSC: 0 impressões", "GSC: 0 cliques", "40 prompts congelados"],
    href: "/case-study/auditseo-search-intelligence",
    dataset: null,
  },
];

const researchRules = [
  ["Método antes da conclusão", "Amostra, classificação e limitações são congeladas antes de usar o resultado como argumento editorial."],
  ["Snapshot não é reescrito", "Se uma página, preço ou mercado mudar, a nova coleta ganha nova data. O passado permanece verificável."],
  ["Ausência não vira inferência", "Se uma informação não foi observada publicamente, registramos como não observada; não concluímos que ela não existe na operação."],
  ["Resultado não vira causalidade", "Mudança observada em Google ou Search AI não é automaticamente atribuída a uma única implementação."],
];

export default function ResearchProgramPage() {
  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigate} activeSection="conteudo" />

      <section className="relative overflow-hidden px-6 pb-24 pt-[150px] md:pb-32 md:pt-[180px] xl:px-12">
        <div className="pointer-events-none absolute right-[-8%] top-[3%] h-[560px] w-[560px] rounded-full bg-[#b28453]/10 blur-[160px]" />
        <div className="relative mx-auto max-w-[1180px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">AUDITSEO RESEARCH</span>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,6vw,80px)] font-bold leading-[1.02] tracking-[-0.05em]">
            Pesquisa própria para tornar Search Intelligence verificável.
          </h1>
          <p className="mt-8 max-w-4xl text-lg leading-[1.75] text-[#e0d3c3] md:text-xl">
            Benchmarks, datasets, protocolos e um case público construídos com a mesma regra: primeiro registramos como vamos medir; depois publicamos o que os dados realmente permitem concluir.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-[#e0d3c3]">
            <span className="rounded-full border border-[#b28453]/28 bg-[#b28453]/8 px-5 py-2">2 DATASETS PUBLICADOS</span>
            <span className="rounded-full border border-[#b28453]/28 bg-[#b28453]/8 px-5 py-2">CASE STUDY #001 EM ANDAMENTO</span>
            <span className="rounded-full border border-[#b28453]/28 bg-[#b28453]/8 px-5 py-2">SEARCH AI OBSERVATORY PRÉ-REGISTRADO</span>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-28 xl:px-12">
        <div className="mx-auto max-w-[1180px]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">PESQUISA PUBLICADA</span>
          <h2 className="mt-5 max-w-5xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">
            O dado vem antes da narrativa.
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-[1.75] text-[#11100f]/70">
            Cada ativo abaixo possui pergunta própria, snapshot datado, fontes públicas e limitações. Quando existe CSV, o arquivo usado para sustentar a análise fica disponível junto do estudo.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {researchAssets.map((asset, index) => (
              <article key={asset.title} className="flex h-full flex-col rounded-[24px] border border-[#11100f]/10 bg-[#f4eee5] p-8 shadow-[0_18px_55px_rgba(17,16,15,0.06)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#11100f] text-[#b28453]">
                  {index === 0 ? <BarChart3 size={20} /> : index === 1 ? <ShieldCheck size={20} /> : <Search size={20} />}
                </div>
                <span className="mt-6 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#8c613c]">{asset.eyebrow}</span>
                <h3 className="mt-4 font-display text-3xl font-bold leading-[1.1]">{asset.title}</h3>
                <p className="mt-5 text-sm leading-[1.75] text-[#11100f]/68">{asset.text}</p>
                <ul className="mt-6 space-y-2 text-sm font-semibold text-[#11100f]/74">
                  {asset.metrics.map((metric) => <li key={metric}>• {metric}</li>)}
                </ul>
                <div className="mt-auto flex flex-wrap gap-4 pt-8">
                  <a href={asset.href} className="inline-flex items-center gap-2 text-sm font-bold text-[#8c613c] hover:text-[#11100f]">
                    Ver estudo <ArrowRight size={14} />
                  </a>
                  {asset.dataset ? (
                    <a href={asset.dataset} className="inline-flex items-center gap-2 text-sm font-bold text-[#11100f]/62 hover:text-[#11100f]">
                      Abrir CSV <Database size={14} />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28 xl:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-16 grid gap-7 rounded-[26px] border border-[#b28453]/24 bg-[#171614] p-8 md:p-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <FileSearch size={22} className="text-[#b28453]" />
              <span className="mt-5 block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">PRESS & CITATION FACTSHEET</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1]">Dois minutos para entender o que pode — e o que não pode — ser citado.</h2>
            </div>
            <div>
              <p className="text-sm leading-[1.8] text-[#f8f8f8]/68">O factsheet reúne amostra, números, limitações, referências sugeridas, URLs canônicas, CSVs e contato editorial dos dois benchmarks. Ele existe para reduzir atrito de checagem sem transformar um resumo em substituto da metodologia.</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="/dados/auditseo-research-press-factsheet-2026-09-08.md" className="inline-flex items-center gap-2 rounded-full bg-[#b28453] px-6 py-3 text-sm font-bold text-white hover:bg-[#e0d3c3] hover:text-[#11100f]">Abrir factsheet <ArrowRight size={14} /></a>
                <a href="mailto:contato@auditseo.com.br" className="inline-flex items-center gap-2 rounded-full border border-[#b28453]/28 px-6 py-3 text-sm font-bold text-[#e0d3c3] hover:border-[#b28453]/60 hover:text-[#b28453]">Contato editorial</a>
              </div>
            </div>
          </div>

          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">REGRAS DE PUBLICAÇÃO</span>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">
            Uma conclusão vale menos quando o método só aparece depois dela.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {researchRules.map(([title, text], index) => (
              <article key={title} className="rounded-[22px] border border-[#b28453]/22 bg-[#171614] p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b28453]/38 bg-[#b28453]/10 text-[#b28453]">
                  {index % 2 === 0 ? <FileSearch size={17} /> : <ShieldCheck size={17} />}
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/66">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-28 xl:px-12">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">PRÓXIMO CICLO · SEARCH AI OBSERVATORY</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">
              Depois de medir o mercado que vende Search AI, vamos medir quem aparece nas próprias respostas de IA.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#11100f]/70">
              O primeiro ciclo do Observatory observa prestadores de SEO e Search Intelligence com atuação no Brasil. O universo, os prompts e as regras de classificação foram definidos antes da coleta. A AUDITSEO entra na mesma régua, com conflito de interesse declarado.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                ["20 prestadores", "Universo competitivo congelado para o piloto."],
                ["140 prompts únicos", "80 genéricos + 60 branded."],
                ["4 interfaces", "Desenho-alvo multi-interface."],
                ["Até 1.120 respostas", "Duas repetições por prompt/interface."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[20px] border border-[#11100f]/10 bg-[#f4eee5] p-6">
                  <div className="font-display text-2xl font-bold">{title}</div>
                  <p className="mt-2 text-sm leading-[1.65] text-[#11100f]/64">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/blog/protocolo-benchmark-search-ai" className="inline-flex items-center gap-2 rounded-full bg-[#11100f] px-6 py-3 text-sm font-bold text-white hover:bg-[#6d5132]">
                Ler protocolo antes dos dados <ArrowRight size={14} />
              </a>
              <a href="/case-study/auditseo-search-intelligence" className="inline-flex items-center gap-2 rounded-full border border-[#11100f]/15 px-6 py-3 text-sm font-bold hover:bg-white/35">
                Acompanhar Case Study #001 <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <aside className="rounded-[24px] border border-[#11100f]/10 bg-[#11100f] p-8 text-[#f8f8f8]">
            <Beaker size={22} className="text-[#b28453]" />
            <h3 className="mt-5 font-display text-3xl font-bold">Duas medições diferentes</h3>
            <div className="mt-7 space-y-6">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">CATEGORY VISIBILITY</span>
                <p className="mt-3 text-sm leading-[1.72] text-[#f8f8f8]/68">Quem aparece, é mencionado, recomendado ou citado em prompts não-branded do mercado.</p>
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">ENTITY ACCURACY</span>
                <p className="mt-3 text-sm leading-[1.72] text-[#f8f8f8]/68">Quando uma marca é perguntada nominalmente, se identidade, especialidade, contexto e evidências são representados corretamente.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28 xl:px-12">
        <div className="mx-auto max-w-[1080px] rounded-[30px] border border-[#b28453]/24 bg-[#171614] p-8 text-center md:p-12">
          <Database size={24} className="mx-auto text-[#b28453]" />
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08]">A mesma disciplina pode ser aplicada à sua empresa.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.75] text-[#f8f8f8]/66">Se você quer saber como sua marca aparece no Google e nas interfaces de IA, o primeiro passo não é comprar uma promessa. É registrar o ponto de partida, os concorrentes, as fontes e a régua que será usada para medir mudança.</p>
          <a href="/diagnostico?cenario=geo" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white hover:bg-[#e0d3c3] hover:text-[#11100f]">
            Diagnosticar visibilidade em Search AI <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <SiteFooter onNavigate={navigate} />
    </main>
  );
}
