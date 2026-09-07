import type { ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  FileText,
  Gauge,
  Network,
  Search,
  ShieldCheck,
  Target,
} from "lucide-react";
import Header from "./Header";
import NeuralSearchBrain from "./NeuralSearchBrain";
import SignalMethod from "./SignalMethod";
import SiteFooter from "./SiteFooter";

const chain = [
  ["01", "Crawl", "A informação pode ser acessada?"],
  ["02", "Index", "A página certa entra na base de recuperação?"],
  ["03", "Retrieve", "Ela é recuperada para a intenção certa?"],
  ["04", "Understand", "Fica claro quem é a empresa e por que ela é relevante?"],
  ["05", "Trust", "Existem provas e sinais suficientes para sustentar confiança?"],
  ["06", "Cite", "A informação é específica e verificável o bastante para funcionar como fonte?"],
  ["07", "Convert", "Descoberta e confiança se transformam em oportunidade comercial?"],
];

const diagnosticPillars: Array<{ icon: ReactNode; title: string; text: string; items: string[] }> = [
  {
    icon: <Search size={21} />,
    title: "Acesso e recuperação",
    text: "Confirmamos se as páginas certas podem ser rastreadas, indexadas e recuperadas sem fricção.",
    items: ["status HTTP e renderização", "canonicals e indexação", "arquitetura e links internos", "cobertura de páginas críticas"],
  },
  {
    icon: <Target size={21} />,
    title: "Intenção e significado",
    text: "Verificamos se a estrutura do site representa as perguntas, serviços e contextos que realmente antecedem a decisão.",
    items: ["mapa de intenção", "entidades e relações", "páginas ausentes ou sobrepostas", "clareza de oferta e contexto"],
  },
  {
    icon: <ShieldCheck size={21} />,
    title: "Autoridade e citabilidade",
    text: "Avaliamos se a empresa possui evidências suficientes para ser interpretada como fonte legítima e opção confiável.",
    items: ["autoria e especialistas", "provas e reputação", "fontes independentes", "consistência pública da entidade"],
  },
  {
    icon: <Gauge size={21} />,
    title: "Decisão e resultado",
    text: "Ligamos visibilidade a páginas, jornadas e ações comerciais para separar presença útil de métricas sem consequência.",
    items: ["consultas e landing pages", "comportamento e conversão", "AI referrals quando observáveis", "baseline e aprendizado por ciclo"],
  },
];

const scenarios = [
  ["Search Foundation", "Projeto começando do zero", "Arquitetura, intenção, entidades e medição antes que decisões de lançamento virem dívida.", "/solucoes/projetos-comecando-do-zero"],
  ["Organic Activation", "Site no ar, mas sem tração", "Diagnóstico para descobrir por que um site indexado ainda não constrói cobertura, demanda ou oportunidades.", "/solucoes/site-sem-tracao"],
  ["Search Recovery", "Perda de tráfego ou posições", "Investigação causal antes de executar correções em uma operação que já teve desempenho orgânico.", "/solucoes/recuperacao-organica"],
  ["Entity Authority", "Autoridade pouco reconhecida", "Organização de empresa, especialistas, provas e fontes para reduzir ambiguidade e fortalecer confiança.", "/solucoes/autoridade-de-entidade"],
  ["Intent Content Architecture", "Conteúdo sem direção", "Transformação de páginas isoladas em uma arquitetura conectada às perguntas que levam à contratação.", "/solucoes/conteudo-por-intencao"],
  ["Generative Search Readiness", "Pouca presença em Search AI", "Medição responsável de menções, citações e fontes antes de definir o que realmente precisa ser fortalecido.", "/solucoes/geo-ia-readiness"],
  ["SEO Migration & Risk Control", "Migração ou reformulação", "Proteção de URLs, conteúdo, autoridade e demanda durante mudanças de domínio, CMS, design ou arquitetura.", "/solucoes/migracao-risco-seo"],
  ["Organic Evolution Cycle", "Crescimento estagnado", "Ciclos contínuos para transformar dados, concorrência e novas intenções em próximos movimentos de crescimento.", "/solucoes/evolucao-organica"],
];

const signalSteps = [
  { letter: "S", title: "Search Diagnosis", subtitle: "Localizamos onde a cadeia quebra.", description: "Lemos o cenário técnico, semântico, competitivo, reputacional e comercial antes de prescrever qualquer frente." },
  { letter: "I", title: "Intent Mapping", subtitle: "Mapeamos como a decisão é construída.", description: "Organizamos perguntas, comparações, necessidades, localidades e intenções que conectam descoberta à contratação." },
  { letter: "G", title: "Generative Search Readiness", subtitle: "Observamos as novas interfaces.", description: "Medimos como a empresa aparece, é descrita e é citada em ambientes generativos sem confundir elegibilidade com garantia." },
  { letter: "N", title: "Narrative & Entity Authority", subtitle: "Consolidamos quem a empresa é.", description: "Alinhamos site, especialistas, serviços, provas, reputação e fontes externas em uma narrativa coerente e verificável." },
  { letter: "A", title: "Action Roadmap", subtitle: "Priorizamos o que muda o cenário.", description: "Transformamos achados em ações ordenadas por impacto, esforço, dependência, responsável e objetivo de negócio." },
  { letter: "L", title: "Learning Loop", subtitle: "O diagnóstico vira sistema de decisão.", description: "Medimos o que mudou, registramos evidências, revisamos hipóteses e atualizamos prioridades a cada ciclo." },
];

const evidence = [
  ["Diagnóstico fundamentado", "Fato, evidência, hipótese e recomendação separados para que a decisão possa ser auditada."],
  ["Mapa do gargalo", "A etapa mais cedo da cadeia que limita descoberta, compreensão, confiança, citação ou conversão."],
  ["Roadmap priorizado", "Ações com impacto, esforço, dependências, responsáveis e critério de validação."],
  ["Arquitetura de busca", "Páginas, entidades, intenções, tópicos e relações internas que precisam existir ou evoluir."],
  ["Plano de autoridade", "Especialistas, provas, reputação, fontes e sinais externos que precisam ganhar consistência."],
  ["Baseline e aprendizado", "Indicadores iniciais, mudanças observadas, decisões tomadas e próximos ciclos documentados."],
];

const authorityDocs = [
  ["FUNDAMENTO", "O que é Search Intelligence", "A definição da AUDITSEO para a disciplina que coordena busca, autoridade e decisão.", "/blog/o-que-e-search-intelligence"],
  ["FRAMEWORK", "Crawl → Index → Retrieve → Understand → Trust → Cite", "Nosso modelo de dependências para localizar o primeiro ponto quebrado antes de prescrever uma tática.", "/blog/framework-crawl-index-retrieve-understand-trust-cite"],
  ["PROTOCOLO EDITORIAL", "Como criar conteúdo citável", "Critérios para transformar páginas em fontes mais claras, específicas, atribuíveis e verificáveis.", "/blog/como-criar-conteudo-citavel"],
  ["PROTOCOLO DE PESQUISA", "Benchmark de Search AI", "Metodologia pública para medir menções, citações, recomendações e fontes antes de publicar qualquer percentual proprietário.", "/blog/protocolo-benchmark-search-ai"],
];

const faqs = [
  ["A AUDITSEO é uma agência de SEO?", "Não. A AUDITSEO é uma consultoria de Search Intelligence. SEO técnico, conteúdo, autoridade de entidade, busca local e Search AI entram apenas quando o diagnóstico mostra que são parte do problema ou da solução."],
  ["O que muda em relação a uma consultoria SEO tradicional?", "A principal diferença é a ordem do trabalho. Não começamos por um pacote de tarefas. Primeiro localizamos onde a cadeia de descoberta, compreensão, confiança ou conversão está quebrando. Só depois definimos as disciplinas necessárias."],
  ["Vocês garantem aparecer no ChatGPT, Gemini ou Google AI Overviews?", "Não. Nenhuma consultoria controla as respostas de plataformas terceiras. Podemos auditar elegibilidade, conteúdo, entidade, fontes e presença observada; medir evolução; e fortalecer sinais. Isso não equivale a garantir uma resposta futura."],
  ["A AUDITSEO substitui minha equipe?", "Não necessariamente. Podemos atuar como direção estratégica, coordenar fornecedores e times internos, validar implementação ou assumir frentes específicas conforme o cenário."],
  ["Como sei que o trabalho está avançando?", "Cada projeto parte de um baseline e de hipóteses explícitas. A evolução precisa aparecer em evidências: cobertura, consultas, páginas, autoridade, presença observada em Search AI, comportamento e conversão — sempre no contexto do problema original."],
];

function navigate(id: string) {
  if (typeof window === "undefined") return;
  const anchors: Record<string, string> = { inicio: "inicio", signal: "metodologia", solucoes: "solucoes-home", diagnostico: "form-contato" };
  const anchor = anchors[id];
  if (anchor) {
    const element = document.getElementById(anchor);
    if (element) {
      window.scrollTo({ top: Math.max(0, element.offsetTop - 82), behavior: "smooth" });
      return;
    }
  }
  const routes: Record<string, string> = { conteudo: "/blog", parceria: "/parceria", "geo-ia": "/geo-ia" };
  window.location.assign(routes[id] || "/");
}

function SectionTitle({ eyebrow, title, text, dark = true, center = false }: { eyebrow: string; title: string; text?: string; dark?: boolean; center?: boolean }) {
  return (
    <div className={`${center ? "mx-auto items-center text-center" : "items-start text-left"} flex max-w-4xl flex-col`}>
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.17em] text-[#b28453]">{eyebrow}</span>
      <h2 className={`mt-5 font-display text-[36px] font-bold leading-[1.06] tracking-[-0.035em] md:text-[54px] ${dark ? "text-[#f8f8f8]" : "text-[#11100f]"}`}>{title}</h2>
      {text ? <p className={`mt-7 max-w-3xl text-base leading-[1.75] md:text-lg ${dark ? "text-[#f8f8f8]/70" : "text-[#11100f]/70"}`}>{text}</p> : null}
    </div>
  );
}

export default function HomePageV2() {
  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigate} activeSection="" />

      <section id="inicio" className="relative flex min-h-[850px] items-center overflow-hidden px-6 pb-20 pt-[118px] md:px-12 md:pt-[132px]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[90px] z-0 flex items-center justify-center overflow-hidden lg:hidden">
          <div className="aspect-[760/520] w-full max-w-[560px] -translate-y-16 scale-[1.35] opacity-[0.22]"><NeuralSearchBrain /></div>
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-[1320px] items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.17em] text-[#a69580]">SEARCH INTELLIGENCE PARA EMPRESAS</span>
            <h1 className="mt-6 max-w-[850px] font-display text-[clamp(48px,5vw,76px)] font-bold leading-[0.98] tracking-[-0.05em]">
              Antes de investir em mais SEO, conteúdo ou IA, descubra onde sua presença realmente quebra.
            </h1>
            <p className="mt-8 max-w-[780px] text-lg font-medium leading-[1.7] text-[#e0d3c3] md:text-xl">
              A AUDITSEO investiga em qual etapa sua empresa perde capacidade de ser descoberta, compreendida, validada, citada ou escolhida. Depois transforma a evidência em um roadmap coordenado, com prioridades, responsáveis e critérios de validação.
            </p>
            <p className="mt-4 max-w-[760px] text-sm leading-[1.75] text-[#f8f8f8]/58">
              SEO técnico, conteúdo, autoridade de entidade, reputação e Search AI entram apenas quando o diagnóstico mostra que são parte da causa ou da solução.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => navigate("diagnostico")} className="rounded-full bg-[#b28453] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]">Mapear o gargalo da minha empresa</button>
              <a href="/blog/framework-crawl-index-retrieve-understand-trust-cite" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b28453]/45 px-8 py-4 text-base font-semibold transition-all hover:bg-[#b28453]/10">Ver o framework de diagnóstico <ArrowRight size={15} /></a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[#8c8275]">
              {['Crawl', 'Index', 'Retrieve', 'Understand', 'Trust', 'Cite', 'Convert'].map((item, index) => <span key={item} className="inline-flex items-center gap-2">{index ? <span className="text-[#b28453]/35">→</span> : null}{item}</span>)}
            </div>
          </div>
          <div className="hidden items-center justify-center lg:col-span-5 lg:flex lg:-translate-x-4 lg:scale-[1.05]"><NeuralSearchBrain /></div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1320px]">
          <SectionTitle eyebrow="O SINTOMA NÃO É A CAUSA" title="O problema pode aparecer no ranking e ter começado muito antes dele." text="Um site pode perder tráfego porque páginas deixaram de ser recuperadas, porque a oferta não cobre a intenção certa, porque a entidade ficou ambígua ou porque a empresa não possui evidência suficiente para sustentar confiança. Tratar todos esses cenários como 'falta de SEO' produz atividade, mas não necessariamente correção." />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {chain.map(([number, title, text]) => (
              <article key={title} className="rounded-[20px] border border-[#b28453]/20 bg-[#171614] p-6">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#b28453]">{number}</span>
                <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-xs leading-[1.7] text-[#f8f8f8]/62">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1320px]">
          <SectionTitle dark={false} eyebrow="COMO DIAGNOSTICAMOS" title="Primeiro localizamos a camada que limita o sistema. Depois escolhemos a tática." text="Esse é o ponto central da proposta da AUDITSEO: não vender atividade antes de saber qual problema precisa ser resolvido." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {diagnosticPillars.map((pillar) => (
              <article key={pillar.title} className="rounded-[24px] border border-[#11100f]/10 bg-[#f4eee5] p-8 shadow-[0_18px_50px_rgba(17,16,15,0.06)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#11100f] text-[#b28453]">{pillar.icon}</span>
                <h3 className="mt-6 font-display text-2xl font-bold">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-[#11100f]/70">{pillar.text}</p>
                <ul className="mt-6 grid gap-3 border-t border-[#11100f]/10 pt-6 sm:grid-cols-2">
                  {pillar.items.map((item) => <li key={item} className="flex gap-2 text-sm leading-[1.6] text-[#11100f]/70"><CheckCircle2 size={15} className="mt-1 shrink-0 text-[#8c613c]" />{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes-home" className="scroll-mt-24 px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionTitle eyebrow="SOLUÇÕES POR CENÁRIO" title="Não existe um pacote AUDITSEO. Existe um problema que precisa ser corretamente classificado." text="Cada solução corresponde a um estágio, risco ou tipo de gargalo diferente. O diagnóstico define a frente; o nome da frente não define o diagnóstico." />
            <a href="/solucoes" className="inline-flex shrink-0 items-center gap-2 font-bold text-[#b28453] hover:text-[#e0d3c3]">Ver todas as soluções <ArrowRight size={15} /></a>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {scenarios.map(([label, title, text, href]) => (
              <a key={label} href={href} className="group rounded-[24px] border border-[#b28453]/22 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.99))] p-8 transition-all hover:-translate-y-1 hover:border-[#b28453]/55">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{label}</span>
                <h3 className="mt-4 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/66">{text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#e0d3c3] group-hover:text-[#b28453]">Entender este cenário <ArrowRight size={14} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div id="metodologia" className="scroll-mt-24">
        <SignalMethod onCtaClick={() => navigate("diagnostico")} ctaText="Solicitar avaliação estratégica" subtitleText="S.I.G.N.A.L. transforma sinais dispersos em diagnóstico, decisão, execução documentada e aprendizado contínuo." steps={signalSteps} footnote="O objetivo não é entregar um relatório bonito. É deixar claro o que sabemos, o que ainda é hipótese, o que precisa mudar e como saberemos se mudou." />
      </div>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1320px]">
          <SectionTitle dark={false} eyebrow="EVIDÊNCIA DO TRABALHO" title="O projeto precisa deixar rastros de decisão — não depender da memória das reuniões." text="A qualidade da consultoria precisa aparecer no que foi diagnosticado, priorizado, implementado, validado e aprendido ao longo do ciclo." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {evidence.map(([title, text], index) => {
              const icons = [<Search size={18} />, <Target size={18} />, <Compass size={18} />, <Network size={18} />, <ShieldCheck size={18} />, <Gauge size={18} />];
              return <article key={title} className="rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#11100f] text-[#b28453]">{icons[index]}</span><h3 className="mt-5 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-[1.7] text-[#11100f]/68">{text}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1320px]">
          <SectionTitle eyebrow="PROVA ANTES DA PROPOSTA" title="A metodologia precisa ser pública o suficiente para você avaliar como pensamos antes de contratar." text="A Biblioteca AUDITSEO documenta conceitos, limites, protocolos e critérios. Não tratamos nossa interpretação como regra oficial de plataforma e não publicamos percentual proprietário sem amostra e método." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {authorityDocs.map(([eyebrow, title, text, href]) => (
              <a key={href} href={href} className="group rounded-[24px] border border-[#b28453]/22 bg-[#171614] p-8 transition-all hover:-translate-y-1 hover:border-[#b28453]/52">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{eyebrow}</span>
                <h3 className="mt-5 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/66">{text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#e0d3c3] group-hover:text-[#b28453]">Ler documento <ArrowRight size={14} /></span>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-5">
            <a href="/blog" className="inline-flex items-center gap-2 rounded-full border border-[#b28453]/35 px-6 py-3 text-sm font-bold hover:bg-[#b28453]/10">Explorar a Biblioteca <BookOpen size={15} /></a>
            <a href="/autor/sidney-santos" className="inline-flex items-center gap-2 text-sm font-bold text-[#b28453] hover:text-[#e0d3c3]">Conhecer autoria e metodologia <ArrowRight size={14} /></a>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[980px]">
          <SectionTitle center eyebrow="DÚVIDAS FREQUENTES" title="O que precisa estar claro antes de começar" />
          <div className="mt-12 space-y-4">
            {faqs.map(([question, answer]) => <details key={question} className="rounded-[20px] border border-[#b28453]/20 bg-[#171614] px-6 py-5 open:border-[#b28453]/45"><summary className="cursor-pointer list-none font-display text-lg font-bold">{question}</summary><p className="mt-4 border-t border-[#b28453]/12 pt-4 text-sm leading-[1.75] text-[#f8f8f8]/68">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section id="form-contato" className="relative scroll-mt-24 overflow-hidden px-6 py-24 md:py-32 xl:px-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b28453]/5 blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-[820px]">
          <SectionTitle center eyebrow="AVALIAÇÃO ESTRATÉGICA" title="Não escolha uma solução antes de saber qual problema está comprando." text="Envie o site e o contexto da empresa. A primeira conversa existe para localizar o tipo de gargalo, avaliar evidências iniciais e decidir se há um próximo ciclo que faça sentido para os dois lados." />
          <form className="mt-12 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Nome completo"><input required type="text" placeholder="Seu nome" className={inputClass} /></Field>
              <Field label="E-mail corporativo"><input required type="email" placeholder="voce@empresa.com.br" className={inputClass} /></Field>
              <Field label="WhatsApp com DDD"><input required type="tel" placeholder="(11) 99999-9999" className={inputClass} /></Field>
              <Field label="Site da empresa"><input required type="url" placeholder="https://www.suaempresa.com.br" className={inputClass} /></Field>
            </div>
            <Field label="Faturamento médio mensal"><select required defaultValue="" className={`${inputClass} appearance-none`}><option value="" disabled>Selecione uma faixa</option><option value="Ate 50k">Até R$ 50 mil</option><option value="50k a 200k">R$ 50 mil a R$ 200 mil</option><option value="Acima de 200k">Acima de R$ 200 mil</option></select></Field>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#b28453] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]">Solicitar avaliação estratégica <ArrowRight size={16} /></button>
            <p className="text-center text-xs leading-[1.65] text-[#f8f8f8]/48">A primeira conversa não serve para encaixar sua empresa em um pacote. Serve para classificar o problema e decidir se existe uma hipótese de trabalho defensável.</p>
          </form>
        </div>
      </section>

      <SiteFooter onNavigate={navigate} />
    </main>
  );
}

const inputClass = "w-full rounded-full border border-[#b28453]/22 bg-[#181716] px-5 py-4 text-sm text-[#f8f8f8] outline-none placeholder:text-[#f8f8f8]/30 focus:border-[#b28453]/60";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <label className="grid gap-2"><span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">{label} *</span>{children}</label>;
}
