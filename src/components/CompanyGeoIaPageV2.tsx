import { ArrowRight, Bot, CheckCircle2, FileSearch2, Network, Search, ShieldCheck, Sparkles, Target } from "lucide-react";
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

const scenarios = [
  ["Seu concorrente aparece e você não", "A IA cita, menciona ou recomenda concorrentes quando seus compradores fazem perguntas relevantes — e sua empresa fica fora da resposta."],
  ["Sua empresa é descrita de forma errada", "Serviços, especialidades, pessoas ou contexto aparecem incompletos, desatualizados ou inconsistentes nas respostas."],
  ["Google funciona, Search AI não", "O site já possui indexação ou tráfego, mas essa presença não se traduz em recuperação, citação ou consideração nas interfaces generativas testadas."],
  ["Você não sabe o que medir", "Existem prints e testes avulsos, mas nenhum baseline fixo para separar menção, citação, recomendação, precisão da entidade e referral."],
];

const deliverables = [
  ["Baseline Search AI", "Conjunto congelado de prompts por intenção, plataforma, data, idioma e regras de classificação para estabelecer o ponto zero."],
  ["Auditoria de elegibilidade", "OAI-SearchBot quando relevante, robots.txt, status HTTP, CDN/WAF, renderização e barreiras que podem impedir descoberta."],
  ["Mapa de entidade", "Organização, especialistas, serviços, categorias, localidades, provas e inconsistências que afetam a representação pública da marca."],
  ["Gap de intenção e fontes", "Perguntas de descoberta, comparação e decisão que ainda não possuem uma resposta forte — e fontes que hoje sustentam concorrentes ou o mercado."],
  ["Roadmap de evidência", "Casos, autoria, metodologia, dados, páginas e validações externas que precisam existir para sustentar afirmações reais da empresa."],
  ["Learning Loop", "Critérios para repetir a medição, registrar mudanças e separar melhoria observada de causalidade inventada."],
];

const principles = [
  "Não prometemos que uma plataforma de terceiros citará ou recomendará sua marca.",
  "Não tratamos schema, llms.txt ou uma alteração em robots.txt como solução isolada de GEO.",
  "Não transformamos uma pergunta favorável ao cliente em prova de Share of Voice.",
  "Não chamamos um framework da AUDITSEO de fator oficial do Google ou da OpenAI.",
];

const authorityLinks = [
  ["Como entrar nas recomendações do ChatGPT como fornecedor", "/blog/como-ser-recomendado-pelo-chatgpt-como-fornecedor", "Fonte citada e fornecedor considerado são resultados diferentes. Este guia mostra como diagnosticamos essa diferença."],
  ["Por que o ChatGPT mostra seu concorrente e não você?", "/blog/chatgpt-nao-cita-meu-site", "Um playbook competitivo para separar citação, menção, recomendação, entidade, intenção, evidência e fontes externas."],
  ["Como medir se GEO está funcionando", "/blog/como-medir-se-geo-esta-funcionando", "Prompts congelados, repetição e métricas separadas para evitar transformar variabilidade em falsa certeza."],
];

export default function CompanyGeoIaPageV2() {
  return (
    <div className="min-h-screen bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigateTo} activeSection="geo-ia" />
      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-[132px] md:pb-28 md:pt-[160px] xl:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(178,132,83,0.2),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">CONSULTORIA DE SEARCH AI + GEO</span>
              <h1 className="mt-6 max-w-4xl font-display text-[46px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[60px] md:text-[74px]">
                Faça sua empresa entrar na busca — e na consideração — sem depender de promessas sobre IA.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-[1.72] text-[#f8f8f8]/74 md:text-xl">
                A AUDITSEO combina SEO, Search Intelligence, autoridade de entidade, conteúdo e mensuração para descobrir por que sua marca não é encontrada, compreendida, citada ou considerada quando clientes pesquisam no Google e nas interfaces generativas.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="/diagnostico?cenario=geo" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]">
                  Diagnosticar presença em Search AI <ArrowRight size={15} />
                </a>
                <a href="/blog/como-ser-recomendado-pelo-chatgpt-como-fornecedor" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b28453]/38 px-7 py-4 text-sm font-bold transition-colors hover:border-[#b28453] hover:text-[#b28453]">
                  Ver como pensamos o problema
                </a>
              </div>
              <p className="mt-5 max-w-2xl text-xs leading-[1.65] text-[#f8f8f8]/46">
                Nenhuma otimização garante menção, citação ou recomendação por ChatGPT, Gemini, AI Overviews ou outra plataforma de terceiros.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[30px] border border-[#b28453]/28 bg-[linear-gradient(145deg,rgba(31,30,28,0.97),rgba(13,13,12,0.99))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">CADEIA DE DIAGNÓSTICO</span>
                <div className="mt-6 space-y-3">
                  {["Crawl", "Index", "Retrieve", "Understand", "Trust", "Cite", "Consider", "Convert"].map((item, index) => (
                    <div key={item} className="flex items-center gap-4 rounded-[16px] border border-[#b28453]/14 bg-white/[0.025] px-4 py-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b28453]/10 font-mono text-[10px] font-bold text-[#b28453]">{String(index + 1).padStart(2, "0")}</span>
                      <span className="font-display text-base font-bold">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-[1.7] text-[#e0d3c3]/70">Framework operacional AUDITSEO. Não representa uma sequência oficial de ranking de Google, OpenAI ou outra plataforma.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">RESPOSTA DIRETA</span>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">O que uma consultoria de GEO e Search AI deveria fazer?</h2>
              </div>
              <div className="space-y-5 text-base leading-[1.82] text-[#2a2927]/78 md:text-lg">
                <p>Ela deveria começar estabelecendo o que a empresa quer conquistar e qual evento está ausente: descoberta, citação de conteúdo, menção da marca, representação correta ou entrada na shortlist de fornecedores.</p>
                <p>Depois, precisa localizar as condições controláveis que podem estar limitando esse resultado — acesso técnico, página inadequada para a intenção, entidade ambígua, falta de evidência, fontes externas inconsistentes ou ausência de mensuração reproduzível.</p>
                <p>Na AUDITSEO, GEO não é um pacote separado do SEO. É uma frente de Search Intelligence aplicada quando interfaces generativas participam da jornada de descoberta e decisão.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] px-6 py-20 md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="max-w-4xl">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">QUANDO ESSA CONSULTORIA FAZ SENTIDO</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">Problemas que não deveriam ser reduzidos a “precisamos fazer GEO”.</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {scenarios.map(([title, text], index) => (
                <article key={title} className="rounded-[24px] border border-[#b28453]/20 bg-[#171614] p-8">
                  <span className="font-mono text-[10px] font-bold text-[#b28453]">0{index + 1}</span>
                  <h3 className="mt-5 font-display text-2xl font-bold leading-[1.15]">{title}</h3>
                  <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="max-w-4xl">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">SE VOCÊ PESQUISOU “AGÊNCIA DE SEO COM GEO”</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">Antes de escolher o fornecedor, descubra qual problema você está realmente comprando a solução.</h2>
              <p className="mt-6 max-w-3xl text-base leading-[1.78] text-[#2a2927]/76 md:text-lg">A expressão “agência de SEO com GEO” descreve uma busca legítima de mercado, mas não define escopo. Duas empresas podem vender GEO e entregar trabalhos completamente diferentes.</p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                [Search, "SEO e descoberta", "Rastreamento, indexação, arquitetura, páginas por intenção, autoridade e demanda orgânica continuam sendo a fundação."],
                [Bot, "Search AI e consideração", "Medição de prompts, elegibilidade, representação da entidade, citações, menções e entrada na shortlist comercial."],
                [Target, "Search Intelligence", "Integra as duas frentes e prioriza o gargalo empresarial antes de prescrever a disciplina ou o canal."],
              ].map(([Icon, title, text]) => {
                const IconComponent = Icon as typeof Search;
                return <article key={String(title)} className="rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7"><IconComponent size={20} className="text-[#8c613c]" /><h3 className="mt-5 font-display text-2xl font-bold">{String(title)}</h3><p className="mt-4 text-sm leading-[1.72] text-[#2a2927]/74">{String(text)}</p></article>;
              })}
            </div>
            <div className="mt-10 rounded-[24px] border border-[#11100f]/10 bg-[#11100f] p-8 text-[#f8f8f8] md:p-10">
              <p className="font-display text-2xl font-bold leading-[1.35] md:text-3xl">A AUDITSEO é uma consultoria de Search Intelligence. Podemos recomendar SEO técnico, arquitetura editorial, Entity Authority ou Generative Search Readiness — mas a disciplina vem depois do diagnóstico.</p>
              <a href="/blog/como-escolher-consultoria-seo" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#b28453] hover:text-[#e0d3c3]">Ver critérios para escolher uma consultoria <ArrowRight size={14} /></a>
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] px-6 py-20 md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">O QUE VOCÊ RECEBE</span>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">Entregáveis que deixam hipótese, evidência e próxima ação visíveis.</h2>
                <p className="mt-6 text-base leading-[1.75] text-[#f8f8f8]/64">O escopo final depende do diagnóstico. Estes são os blocos mais comuns da frente Generative Search Readiness.</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {deliverables.map(([title, text], index) => (
                  <article key={title} className="rounded-[22px] border border-[#b28453]/18 bg-[#171614] p-7">
                    <span className="font-mono text-[10px] font-bold text-[#b28453]">0{index + 1}</span>
                    <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
                    <p className="mt-3 text-sm leading-[1.72] text-[#f8f8f8]/62">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="max-w-4xl">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">BASE PÚBLICA</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">Você pode avaliar nosso raciocínio antes de contratar.</h2>
              <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#2a2927]/74 md:text-lg">A tese comercial precisa sobreviver fora da reunião. Por isso publicamos o método, as limitações e os playbooks que sustentam esta solução.</p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {authorityLinks.map(([title, href, text]) => (
                <a key={href} href={href} className="group rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7 transition-transform hover:-translate-y-1">
                  <FileSearch2 size={20} className="text-[#8c613c]" />
                  <h3 className="mt-5 font-display text-2xl font-bold leading-[1.18]">{title}</h3>
                  <p className="mt-4 text-sm leading-[1.72] text-[#2a2927]/72">{text}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#8c613c]">Ler documento <ArrowRight size={14} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] px-6 py-20 md:py-28 xl:px-12">
          <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">LIMITES E INTEGRIDADE</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">O que não entra na proposta.</h2>
            </div>
            <div className="space-y-4">
              {principles.map((item) => (
                <div key={item} className="flex gap-4 rounded-[18px] border border-[#b28453]/18 bg-[#171614] p-5">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#b28453]" />
                  <p className="text-sm leading-[1.72] text-[#f8f8f8]/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1120px] rounded-[30px] border border-[#11100f]/10 bg-[#11100f] p-8 text-[#f8f8f8] shadow-[0_30px_90px_rgba(17,16,15,0.22)] md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">PRÓXIMO PASSO</span>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">Descubra primeiro onde sua presença quebra.</h2>
                <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#f8f8f8]/68 md:text-lg">Se sua empresa precisa aparecer melhor no Google, ser compreendida nas IAs ou entrar nas respostas em que concorrentes já são considerados, o diagnóstico separa essas situações antes de montar o roadmap.</p>
              </div>
              <div className="flex flex-col gap-4">
                <a href="/diagnostico?cenario=geo" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]">Iniciar diagnóstico Search AI <ArrowRight size={15} /></a>
                <a href="/solucoes/geo-ia-readiness" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b28453]/35 px-7 py-4 text-sm font-bold text-[#e0d3c3] hover:border-[#b28453] hover:text-[#b28453]">Ver Generative Search Readiness</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter onNavigate={navigateTo} />
    </div>
  );
}
