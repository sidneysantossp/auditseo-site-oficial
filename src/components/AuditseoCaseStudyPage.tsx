import { ArrowRight, BarChart3, CheckCircle2, Clock3, FileText, FlaskConical, Search, ShieldCheck, Target } from "lucide-react";
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

const baseline = [
  ["0", "impressões no GSC", "Período finalizado: 09/08/2026 → 05/09/2026"],
  ["0", "cliques no GSC", "Mesmo período finalizado"],
  ["Não coletado", "baseline Search AI", "O protocolo existe; a primeira coleta ainda não será retroativa"],
  ["Não medido", "leads atribuídos à busca", "Atribuição será registrada somente quando existir evidência"],
];

const hypotheses = [
  ["H1", "Categoria e entidade", "Se a AUDITSEO comunicar de forma consistente Search Intelligence, serviços, autoria e provas, sistemas e pessoas terão menos ambiguidade sobre quem somos e quando somos relevantes."],
  ["H2", "Demanda comercial", "Se páginas comerciais e documentos responderem às perguntas que antecedem a contratação, a marca deverá começar a aparecer para consultas e jornadas mais próximas de decisão."],
  ["H3", "Citabilidade", "Se o conteúdo publicar respostas específicas, fontes, método, limitações e evidência original, parte da biblioteca poderá se tornar mais útil como referência e fonte."],
  ["H4", "Authority → Lead", "Se o prospect descobrir a AUDITSEO pela mesma dinâmica de busca que vendemos, a autoridade construída antes da reunião deverá reduzir fricção comercial e elevar a qualidade da conversa."],
];

const interventionLog = [
  ["Fundação técnica de Search", "PREPARADO PARA RELEASE", "SSR de metadata/canonical, 404 real, redirects, sitemap, rotas indexáveis e smoke gate para reduzir problemas básicos antes da expansão."],
  ["Reposicionamento da entidade", "PREPARADO PARA RELEASE", "Home, serviços e schema reorganizados em torno de Search Intelligence, com SEO, Entity Authority e Search AI como disciplinas coordenadas."],
  ["Biblioteca de autoridade", "EM EXPANSÃO", "Fundamentos, protocolos, diagnósticos, buyer content e artigos de alta proximidade comercial — com content lint e grafo de links internos."],
  ["Consultoria Search AI / GEO", "PREPARADO PARA RELEASE", "Página comercial de categoria para capturar demanda direta sem prometer controle sobre plataformas de terceiros."],
  ["Authority → Lead", "EM TESTE", "Nova camada editorial que mede se conteúdo e presença da entidade conseguem levar um prospect de descoberta → confiança → diagnóstico → reunião."],
  ["Search AI Observatory", "PROTOCOLO DEFINIDO", "Metodologia e regras existem antes dos números; nenhum percentual será publicado até a primeira amostra ser realmente coletada e revisada."],
];

const evidenceRules = [
  "Não transformar 0 impressões em '0 URLs indexadas'. São métricas diferentes.",
  "Não preencher retrospectivamente um baseline de IA que não foi coletado na data.",
  "Não atribuir crescimento a uma tática isolada quando várias mudanças ocorreram no mesmo período.",
  "Não usar prints favoráveis como Share of Voice sem prompt set, repetição e regra de classificação.",
  "Não chamar tráfego ou lead de 'originado por IA' sem referral ou relato de descoberta que sustente a atribuição.",
  "Publicar perdas, ausência de efeito e hipóteses rejeitadas quando forem relevantes para a interpretação do estudo.",
];

const metrics = [
  ["Google Search", "Impressões, cliques, queries, páginas, branded/non-branded e evolução por cluster no Search Console."],
  ["Search AI", "Mention Rate, Citation Rate, Recommendation Rate, fontes observadas e Entity Accuracy em amostras congeladas."],
  ["Entidade", "Consistência de organização, autor, serviços e descrições externas verificadas; correções registradas com data."],
  ["Comercial", "Diagnósticos, leads qualificados, reuniões e relatos de descoberta atribuíveis sem forçar causalidade."],
];

export default function AuditseoCaseStudyPage() {
  return (
    <div className="min-h-screen bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigateTo} />
      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-[132px] md:pb-28 md:pt-[160px] xl:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(178,132,83,0.2),transparent_34%)]" />
          <div className="relative mx-auto max-w-[1240px]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#b28453]/38 bg-[#b28453]/10 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-[#b28453]">CASE STUDY #001</span>
              <span className="rounded-full border border-[#f8f8f8]/12 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-[#f8f8f8]/55">ESTUDO EM ANDAMENTO</span>
            </div>
            <h1 className="mt-7 max-w-5xl font-display text-[48px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[62px] md:text-[78px]">Construindo a autoridade da AUDITSEO do zero — com o próprio site como prova.</h1>
            <p className="mt-8 max-w-4xl text-lg leading-[1.78] text-[#e0d3c3] md:text-xl">Em vez de apresentar Search Intelligence apenas em slides, estamos aplicando a metodologia na própria AUDITSEO. Este estudo registra o ponto zero, as hipóteses, as mudanças e os resultados — inclusive quando eles não aparecem.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#baseline" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]">Ver o ponto zero <ArrowRight size={15} /></a>
              <a href="/blog/o-que-e-search-intelligence" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b28453]/35 px-7 py-4 text-sm font-bold hover:border-[#b28453] hover:text-[#b28453]">Entender Search Intelligence</a>
            </div>
          </div>
        </section>

        <section id="baseline" className="scroll-mt-28 bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">BASELINE OFICIAL</span>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">Antes de contar a história, registramos onde ela começa.</h2>
                <p className="mt-6 text-base leading-[1.78] text-[#2a2927]/75">O Search Console da propriedade `https://auditseo.com.br/` foi consultado usando um período já finalizado. O dado abaixo é um baseline de Search Performance — não um diagnóstico de indexação.</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {baseline.map(([value, label, note]) => (
                  <article key={label} className="rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7">
                    <p className="font-display text-4xl font-bold tracking-[-0.04em]">{value}</p>
                    <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.05em]">{label}</h3>
                    <p className="mt-3 text-xs leading-[1.65] text-[#2a2927]/60">{note}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-10 rounded-[20px] border border-[#11100f]/10 bg-[#11100f] p-6 text-[#f8f8f8]">
              <p className="text-sm leading-[1.75] text-[#f8f8f8]/72"><strong className="text-[#e0d3c3]">Fonte do baseline:</strong> Google Search Console da AUDITSEO. Período finalizado de 09/08/2026 a 05/09/2026: 0 impressões, 0 cliques e nenhuma top query/top page retornada na consulta. Período anterior comparável também retornou 0/0.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] px-6 py-20 md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="max-w-4xl">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">POR QUE PUBLICAR ANTES DO RESULTADO?</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">Porque um case publicado só depois do sucesso é fácil de editar para parecer inevitável.</h2>
              <p className="mt-6 max-w-3xl text-base leading-[1.8] text-[#f8f8f8]/67 md:text-lg">Nós queremos preservar as hipóteses antes de saber quais vão funcionar. Isso permite mostrar não apenas o resultado final, mas como decisões foram tomadas, quais intervenções não moveram a métrica e quais aprendizados mudaram o roadmap.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {hypotheses.map(([code, title, text]) => (
                <article key={code} className="rounded-[22px] border border-[#b28453]/18 bg-[#171614] p-7">
                  <span className="font-mono text-[10px] font-bold text-[#b28453]">{code}</span>
                  <h3 className="mt-4 font-display text-2xl font-bold">{title}</h3>
                  <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="max-w-4xl">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">LEDGER DE INTERVENÇÕES</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">O que está sendo mudado — com status explícito.</h2>
              <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#2a2927]/74 md:text-lg">“Preparado para release” não significa “já está produzindo resultado”. Separar implementação, publicação, rastreamento e efeito é parte do estudo.</p>
            </div>
            <div className="mt-12 space-y-4">
              {interventionLog.map(([title, status, text], index) => (
                <article key={title} className="grid gap-5 rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7 md:grid-cols-[58px_1fr_auto] md:items-start">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#11100f] font-mono text-[10px] font-bold text-[#b28453]">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3 className="font-display text-2xl font-bold">{title}</h3><p className="mt-3 text-sm leading-[1.72] text-[#2a2927]/72">{text}</p></div>
                  <span className="w-fit rounded-full border border-[#8c613c]/25 bg-[#8c613c]/8 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.08em] text-[#8c613c]">{status}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] px-6 py-20 md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">MÉTRICAS ACEITAS</span>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">O case não será medido por uma única curva de tráfego.</h2>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {metrics.map(([title, text]) => (
                  <article key={title} className="rounded-[22px] border border-[#b28453]/18 bg-[#171614] p-7">
                    <BarChart3 size={19} className="text-[#b28453]" />
                    <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                    <p className="mt-3 text-sm leading-[1.72] text-[#f8f8f8]/64">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">REGRAS DE EVIDÊNCIA</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">O que não aceitaremos como “resultado”.</h2>
              <p className="mt-6 text-base leading-[1.75] text-[#2a2927]/72">Estas regras existem justamente para evitar que o nosso próprio marketing contamine a leitura do experimento.</p>
            </div>
            <div className="space-y-4">
              {evidenceRules.map((item) => (
                <div key={item} className="flex gap-4 rounded-[18px] border border-[#11100f]/10 bg-[#f4eee5] p-5">
                  <ShieldCheck size={18} className="mt-0.5 shrink-0 text-[#8c613c]" />
                  <p className="text-sm leading-[1.72] text-[#2a2927]/75">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] px-6 py-20 md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="max-w-4xl">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">LINHA DO TEMPO</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">Este documento será atualizado, não substituído.</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["08 SET 2026", "Baseline registrado", "GSC 0 impressões / 0 cliques no período finalizado. Arquitetura e hipóteses documentadas antes do release."],
                ["RELEASE", "Aguardando gate", "A nova superfície só passa a contar como intervenção publicada depois do release técnico e da verificação HTTP."],
                ["30 / 60 / 90 DIAS", "Primeiros checkpoints", "Impressões, queries, páginas, prompts fixos e leads serão comparados sem preencher lacunas retrospectivamente."],
                ["180 DIAS", "Leitura do sistema", "O objetivo é entender quais relações entre conteúdo, entidade, Search AI, demanda e aquisição merecem continuar no método."],
              ].map(([time, title, text]) => (
                <article key={time} className="rounded-[22px] border border-[#b28453]/18 bg-[#171614] p-7">
                  <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#b28453]"><Clock3 size={13} /> {time}</div>
                  <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-[1.72] text-[#f8f8f8]/62">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">POR QUE ESTE CASE IMPORTA PARA UM CLIENTE?</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">Porque queremos ser encontrados pelo mesmo sistema que ajudamos nossos clientes a construir.</h2>
              <p className="mt-6 text-base leading-[1.78] text-[#2a2927]/75 md:text-lg">O cenário ideal é simples: uma empresa pergunta ao Google ou a uma IA quem entende de SEO, Search AI ou autoridade de entidade; encontra a AUDITSEO; consome um documento; verifica o método; e chega à reunião querendo discutir aplicação — não credenciais básicas.</p>
            </div>
            <div className="rounded-[24px] border border-[#11100f]/10 bg-[#11100f] p-8 text-[#f8f8f8]">
              <FlaskConical size={22} className="text-[#b28453]" />
              <p className="mt-6 font-display text-2xl font-bold leading-[1.35]">“Se eles entregam esse nível de valor antes de eu ser cliente, imagine o que conseguem fazer quando analisarem a minha empresa.”</p>
              <p className="mt-5 text-sm leading-[1.7] text-[#f8f8f8]/58">Essa não é uma citação de cliente. É a hipótese comercial que orienta o desenho Authority → Lead e que este case pretende testar.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] px-6 py-20 md:py-28 xl:px-12">
          <div className="mx-auto max-w-[980px] text-center">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">APLICAR AO SEU NEGÓCIO</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">Seu site também pode começar por um ponto zero verificável.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.78] text-[#f8f8f8]/67 md:text-lg">O diagnóstico da AUDITSEO separa presença técnica, intenção, conteúdo, entidade, autoridade, Search AI e conversão antes de montar o roadmap.</p>
            <a href="/diagnostico" className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]">Diagnosticar meu cenário <ArrowRight size={15} /></a>
          </div>
        </section>
      </main>
      <SiteFooter onNavigate={navigateTo} />
    </div>
  );
}
