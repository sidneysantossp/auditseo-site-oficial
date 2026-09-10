import { ArrowRight, BookOpen, CheckCircle2, FileText, Search, ShieldCheck, Sparkles } from "lucide-react";
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

const expertise = [
  "SEO técnico e arquitetura de busca",
  "Search Intelligence e diagnóstico",
  "Search AI, GEO e presença generativa",
  "Autoridade de entidade",
  "Conteúdo orientado por intenção",
  "Dados estruturados e clareza semântica",
];

const aiExperienceSignals = [
  ["Separa SEO de Search AI sem separá-los artificialmente", "Entende que crawl, indexação, intenção, entidade, conteúdo, autoridade e mensuração continuam conectados quando a interface de descoberta muda."],
  ["Distingue documentação, observação e hipótese", "Não transforma comportamento observado em ChatGPT, Gemini ou AI Overviews em suposto fator oficial sem fonte que sustente a afirmação."],
  ["Mede menção, citação e recomendação separadamente", "Não chama qualquer aparição de 'visibilidade em IA'. Cada resultado precisa ter definição, prompt, plataforma, data e repetição."],
  ["Conecta presença a decisão comercial", "A pergunta final não é apenas se a marca apareceu, mas se a jornada aumentou descoberta, validação, consideração, lead ou oportunidade real."],
];

const principles = [
  ["Documentação antes de opinião", "Separar orientações oficiais de plataformas, observação de mercado, testes e hipóteses."],
  ["Diagnóstico antes da tarefa", "Entender cenário, intenção, limitações, dependências e impacto antes de recomendar implementação."],
  ["Evidência antes da promessa", "Evitar garantias absolutas sobre ranking, tráfego, menções ou respostas de plataformas de terceiros."],
  ["Negócio junto da busca", "Relacionar visibilidade e autoridade a jornadas, oportunidades, conversão e objetivos da empresa."],
];

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigateTo} activeSection="conteudo" />
      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-[132px] md:pb-28 md:pt-[164px] xl:px-12">
          <div className="pointer-events-none absolute right-[-10%] top-[8%] h-[540px] w-[540px] rounded-full bg-[#b28453]/12 blur-[150px]" />
          <div className="relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div className="rounded-[28px] border border-[#b28453]/24 bg-[#171614] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
              <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-[22px] border border-[#b28453]/22 bg-[radial-gradient(circle_at_50%_34%,rgba(178,132,83,0.24),rgba(17,16,15,0.96)_62%)] text-center">
                <span className="font-display text-7xl font-bold text-[#e0d3c3]">SS</span>
                <div className="mt-6 h-px w-20 bg-[#b28453]/45" />
                <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">SIDNEY SANTOS</p>
                <p className="mt-2 max-w-[250px] text-xs leading-[1.6] text-[#f8f8f8]/54">Fundador da AUDITSEO · SEO · Search AI · Search Intelligence</p>
              </div>
            </div>

            <div>
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">AUTOR · FUNDADOR · ESPECIALISTA EM BUSCA</span>
              <h1 className="mt-6 max-w-4xl font-display text-[48px] font-bold leading-[1.03] tracking-[-0.045em] sm:text-[62px] md:text-[76px]">
                Sidney Santos — especialista em SEO, Search AI e Search Intelligence
              </h1>
              <div className="mt-8 max-w-3xl space-y-5 text-lg leading-[1.75] text-[#f8f8f8]/74">
                <p>Sidney Santos atua no mercado de busca desde 2009 e é fundador da AUDITSEO, consultoria de Search Intelligence.</p>
                <p>Seu trabalho conecta SEO técnico, intenção de busca, conteúdo, dados estruturados, autoridade de entidade e Search AI para descobrir por que uma empresa deixa de ser encontrada, compreendida, validada, citada ou considerada.</p>
                <p>Em vez de tratar GEO ou IA como um pacote separado, a abordagem parte do diagnóstico: qual etapa da presença de busca está quebrada, quais evidências sustentam essa conclusão e qual mudança pode ser medida depois da implementação.</p>
              </div>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a href="/geo-ia" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]">
                  Consultoria de Search AI e GEO <ArrowRight size={15} />
                </a>
                <a href="/case-study/auditseo-search-intelligence" className="inline-flex items-center justify-center rounded-full border border-[#b28453]/38 px-7 py-4 text-sm font-bold transition-colors hover:border-[#b28453] hover:text-[#b28453]">Ver o Case Study #001</a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="max-w-4xl">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">ÁREAS DE ATUAÇÃO</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">A busca como sistema, não como uma lista de tarefas.</h2>
              <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#11100f]/70 md:text-lg">SEO, conteúdo, entidade, reputação e Search AI entram no mesmo mapa de decisão. A especialidade não está em acumular siglas, mas em saber quando cada disciplina realmente participa do gargalo.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {expertise.map((item, index) => (
                <article key={item} className="rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7 shadow-[0_18px_55px_rgba(17,16,15,0.07)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b28453]/45 text-[#8c613c]">
                    {index % 3 === 0 ? <Search size={17} /> : index % 3 === 1 ? <Sparkles size={17} /> : <FileText size={17} />}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold leading-[1.2]">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] px-6 py-20 md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="max-w-4xl">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">SEO + IA SEM HYPE</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">Como avaliar se um especialista em SEO realmente entende de Search AI.</h2>
              <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#f8f8f8]/66 md:text-lg">O mercado passou a adicionar GEO, AEO, LLMO e IA a muitas apresentações comerciais. O critério mais útil não é a quantidade de siglas: é observar se o profissional consegue separar o que a plataforma documenta, o que pode ser medido e o que continua sendo hipótese.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {aiExperienceSignals.map(([title, text], index) => (
                <article key={title} className="rounded-[22px] border border-[#b28453]/20 bg-[#171614] p-7">
                  <div className="flex items-start gap-4">
                    {index % 2 === 0 ? <ShieldCheck size={20} className="mt-1 shrink-0 text-[#b28453]" /> : <CheckCircle2 size={20} className="mt-1 shrink-0 text-[#b28453]" />}
                    <div>
                      <h3 className="font-display text-2xl font-bold">{title}</h3>
                      <p className="mt-3 text-sm leading-[1.72] text-[#f8f8f8]/64">{text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/blog/como-escolher-consultoria-seo" className="inline-flex items-center gap-2 text-sm font-bold text-[#b28453] transition-colors hover:text-[#e0d3c3]">Como escolher uma consultoria de SEO <ArrowRight size={15} /></a>
              <a href="/blog/como-ser-recomendado-pelo-chatgpt-como-fornecedor" className="inline-flex items-center gap-2 text-sm font-bold text-[#b28453] transition-colors hover:text-[#e0d3c3]">Como entrar na consideração do ChatGPT <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="max-w-4xl">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">CRITÉRIO EDITORIAL</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">Como as recomendações são construídas.</h2>
              <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#11100f]/70 md:text-lg">Em uma área que muda rapidamente, autoridade depende tanto do que se afirma quanto da capacidade de mostrar de onde veio a afirmação e quais são seus limites.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {principles.map(([title, text], index) => (
                <article key={title} className="rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7">
                  <div className="flex items-start gap-4">
                    {index % 2 === 0 ? <ShieldCheck size={20} className="mt-1 shrink-0 text-[#8c613c]" /> : <CheckCircle2 size={20} className="mt-1 shrink-0 text-[#8c613c]" />}
                    <div>
                      <h3 className="font-display text-2xl font-bold">{title}</h3>
                      <p className="mt-3 text-sm leading-[1.72] text-[#11100f]/66">{text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] px-6 py-20 md:py-24 xl:px-12">
          <div className="mx-auto max-w-[1000px] rounded-[30px] border border-[#b28453]/22 bg-[#171614] p-8 text-center text-[#f8f8f8] shadow-[0_30px_90px_rgba(0,0,0,0.28)] md:p-12">
            <BookOpen size={24} className="mx-auto text-[#b28453]" />
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08]">A AUDITSEO é o primeiro caso público do próprio método.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.75] text-[#f8f8f8]/66">O Case Study #001 registra o ponto zero antes de haver resultado, as mudanças implementadas e as métricas que serão aceitas como evidência. O objetivo é tornar o método auditável — inclusive quando uma hipótese falhar.</p>
            <a href="/case-study/auditseo-search-intelligence" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#b28453] transition-colors hover:text-[#e0d3c3]">Acompanhar o Case Study #001 <ArrowRight size={15} /></a>
          </div>
        </section>
      </main>
      <SiteFooter onNavigate={navigateTo} />
    </div>
  );
}
