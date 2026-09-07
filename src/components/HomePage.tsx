import type { ReactNode } from "react";
import {
  ArrowRight,
  Award,
  Bot,
  CheckCircle2,
  Compass,
  FileText,
  Gauge,
  Globe2,
  Layers3,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import Header from "./Header";
import NeuralSearchBrain from "./NeuralSearchBrain";
import SignalMethod from "./SignalMethod";
import SiteFooter from "./SiteFooter";

const stages = [
  {
    number: "01",
    title: "Ser encontrada",
    text: "Estar presente nas buscas, temas, serviços, localidades e perguntas que realmente participam da jornada de decisão.",
  },
  {
    number: "02",
    title: "Ser compreendida",
    text: "Deixar inequívoco quem é a empresa, o que oferece, para quem é relevante e em quais contextos deve ser considerada.",
  },
  {
    number: "03",
    title: "Ser validada",
    text: "Sustentar a narrativa com especialistas, provas, reputação, dados estruturados, fontes e sinais públicos consistentes.",
  },
  {
    number: "04",
    title: "Ser considerada",
    text: "Entrar no conjunto de opções avaliadas por pessoas, mecanismos de busca e sistemas de resposta generativa.",
  },
  {
    number: "05",
    title: "Ser citável",
    text: "Publicar informação clara, verificável e útil o suficiente para ser recuperada, referenciada e usada como fonte.",
  },
  {
    number: "06",
    title: "Converter",
    text: "Transformar descoberta e confiança em contatos, oportunidades, reuniões, vendas e aprendizado comercial.",
  },
];

const diagnosticLayers: Array<{
  icon: ReactNode;
  title: string;
  text: string;
  items: string[];
}> = [
  {
    icon: <Search size={22} />,
    title: "Descoberta e indexação",
    text: "Primeiro confirmamos se a informação certa pode ser encontrada e recuperada sem fricção.",
    items: ["rastreamento e indexação", "arquitetura e canonicals", "performance e renderização", "cobertura de páginas estratégicas"],
  },
  {
    icon: <Layers3 size={22} />,
    title: "Significado e intenção",
    text: "Depois verificamos se o site comunica com precisão a entidade, os serviços e as intenções que antecedem a decisão.",
    items: ["entidades e relações", "mapa de intenção", "arquitetura temática", "conteúdo e links internos"],
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Autoridade e evidência",
    text: "Por fim avaliamos se existem sinais suficientes para sustentar confiança, reconhecimento e citação.",
    items: ["especialistas e autoria", "provas e reputação", "fontes independentes", "consistência pública da marca"],
  },
];

const scenarios = [
  {
    title: "Projeto começando do zero",
    label: "Search Foundation",
    text: "Para marcas, sites, serviços ou unidades que precisam nascer com uma fundação de busca correta antes de acumular dívida técnica e semântica.",
    href: "/solucoes/projetos-comecando-do-zero",
  },
  {
    title: "Site no ar, mas sem tração",
    label: "Organic Activation",
    text: "Para empresas que publicam, investem e mantêm o site ativo, mas continuam com pouca cobertura, poucas consultas relevantes ou baixa geração de demanda.",
    href: "/solucoes/site-sem-tracao",
  },
  {
    title: "Perda de tráfego e posições",
    label: "Search Recovery",
    text: "Para operações que precisam separar causas técnicas, algorítmicas, competitivas e editoriais antes de tentar recuperar crescimento.",
    href: "/solucoes/recuperacao-organica",
  },
  {
    title: "Autoridade pouco reconhecida",
    label: "Entity Authority",
    text: "Para empresas e especialistas com experiência real, mas com sinais fragmentados ou insuficientes para serem percebidos como referência.",
    href: "/solucoes/autoridade-de-entidade",
  },
  {
    title: "Conteúdo sem direção",
    label: "Intent Content Architecture",
    text: "Para quem já produz conteúdo, mas ainda não conectou páginas, temas e respostas às jornadas que levam à contratação.",
    href: "/solucoes/conteudo-por-intencao",
  },
  {
    title: "Pouca presença em buscas com IA",
    label: "Generative Search Readiness",
    text: "Para empresas que querem medir como são descritas, onde estão ausentes e quais sinais precisam fortalecer sem promessas artificiais de citação.",
    href: "/solucoes/geo-ia-readiness",
  },
  {
    title: "Migração ou reformulação",
    label: "SEO Migration & Risk Control",
    text: "Para proteger URLs, conteúdo, autoridade e demanda durante mudanças de domínio, CMS, design, arquitetura ou estrutura de páginas.",
    href: "/solucoes/migracao-risco-seo",
  },
  {
    title: "Crescimento orgânico estagnado",
    label: "Organic Evolution Cycle",
    text: "Para empresas que já têm base e histórico, mas precisam transformar dados, concorrência e novas intenções em próximos ciclos de crescimento.",
    href: "/solucoes/evolucao-organica",
  },
];

const signalSteps = [
  {
    letter: "S",
    title: "Search Diagnosis",
    subtitle: "Descobrimos o gargalo real.",
    description: "Lemos o cenário técnico, semântico, competitivo, reputacional e comercial antes de prescrever qualquer tática.",
  },
  {
    letter: "I",
    title: "Intent Mapping",
    subtitle: "Mapeamos como a decisão é construída.",
    description: "Organizamos dúvidas, comparações, necessidades, localidades e intenções que levam uma pessoa da descoberta à contratação.",
  },
  {
    letter: "G",
    title: "Generative Search Readiness",
    subtitle: "Avaliamos a presença nas novas interfaces.",
    description: "Verificamos como a empresa é recuperada e representada em ambientes generativos e quais sinais podem melhorar essa leitura.",
  },
  {
    letter: "N",
    title: "Narrative & Entity Authority",
    subtitle: "Consolidamos quem a empresa é.",
    description: "Alinhamos site, especialistas, serviços, provas, reputação e fontes externas em uma narrativa coerente e verificável.",
  },
  {
    letter: "A",
    title: "Action Roadmap",
    subtitle: "Priorizamos o que muda o cenário.",
    description: "Transformamos achados em ações ordenadas por impacto, esforço, dependência, responsável e objetivo de negócio.",
  },
  {
    letter: "L",
    title: "Learning Loop",
    subtitle: "O diagnóstico vira sistema de decisão.",
    description: "Medimos o que mudou, registramos evidências, revisamos hipóteses e atualizamos prioridades a cada ciclo.",
  },
];

const deliverables = [
  ["Diagnóstico fundamentado", "Leitura do cenário com evidências, contexto e separação entre fato, hipótese e recomendação."],
  ["Mapa de gaps", "Inventário dos pontos que limitam descoberta, compreensão, autoridade, citação ou conversão."],
  ["Roadmap priorizado", "Sequência clara de ações, dependências, responsáveis, esforço e impacto esperado."],
  ["Arquitetura de busca", "Mapa de páginas, entidades, intenções, tópicos e relações internas que precisam existir ou evoluir."],
  ["Plano de autoridade", "Especialistas, provas, reputação, fontes, perfis e sinais externos que precisam ser fortalecidos."],
  ["Baseline e aprendizado", "Indicadores iniciais, mudanças observadas, decisões tomadas e próximos ciclos documentados."],
];

const editorialLinks = [
  {
    eyebrow: "GUIA",
    title: "Search Intelligence",
    text: "O que muda quando SEO deixa de ser uma lista de tarefas e passa a ser um sistema de leitura e decisão.",
    href: "/guias/search-intelligence",
  },
  {
    eyebrow: "GUIA",
    title: "GEO Readiness",
    text: "Como preparar uma empresa para ambientes generativos sem vender garantias que nenhuma consultoria controla.",
    href: "/guias/geo-readiness",
  },
  {
    eyebrow: "GUIA",
    title: "Narrativa semântica",
    text: "Como organizar entidade, contexto, conteúdo e provas para tornar a marca mais fácil de interpretar e validar.",
    href: "/guias/narrativa-semantica",
  },
];

const faqs = [
  [
    "A AUDITSEO é uma agência de SEO?",
    "Não. A AUDITSEO é uma consultoria de Search Intelligence. SEO técnico, conteúdo, autoridade de entidade, busca local e preparação para ambientes generativos são frentes que entram no projeto quando o diagnóstico mostra que são necessárias.",
  ],
  [
    "O que vocês fazem de diferente de uma consultoria SEO tradicional?",
    "Não começamos por um pacote de tarefas. Primeiro identificamos o gargalo que impede a empresa de ser encontrada, compreendida, validada ou considerada. A execução nasce desse diagnóstico e pode envolver diferentes equipes e disciplinas.",
  ],
  [
    "Vocês garantem aparecer no ChatGPT, Gemini ou Google AI Overviews?",
    "Não. Nenhuma empresa controla as respostas de plataformas terceiras. O trabalho é fortalecer as condições técnicas, semânticas e de autoridade que tornam a empresa mais recuperável, compreensível e verificável, além de medir como sua presença evolui.",
  ],
  [
    "A AUDITSEO substitui minha equipe de marketing ou desenvolvimento?",
    "Não necessariamente. Podemos atuar como direção estratégica, coordenar fornecedores existentes, orientar times internos ou assumir frentes específicas. O modelo depende do cenário e da capacidade operacional da empresa.",
  ],
  [
    "Quanto tempo leva para observar resultados?",
    "Depende da situação inicial, da concorrência, da autoridade acumulada e da velocidade de implementação. Por isso o projeto começa com baseline, prioridades e critérios de validação, não com uma promessa genérica de prazo.",
  ],
];

function goTo(id: string) {
  if (typeof window === "undefined") return;

  const internal: Record<string, string> = {
    inicio: "inicio",
    signal: "metodologia",
    solucoes: "solucoes-home",
    diagnostico: "form-contato",
  };

  const target = internal[id];
  if (target) {
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({ top: Math.max(0, element.offsetTop - 82), behavior: "smooth" });
      return;
    }
  }

  if (id === "conteudo") window.location.assign("/blog");
  else if (id === "parceria") window.location.assign("/parceria");
  else if (id === "geo-ia") window.location.assign("/geo-ia");
  else window.location.assign("/");
}

function SectionHeader({ eyebrow, title, text, center = false, dark = true }: { eyebrow: string; title: string; text?: string; center?: boolean; dark?: boolean }) {
  return (
    <div className={`${center ? "mx-auto items-center text-center" : "items-start text-left"} flex max-w-4xl flex-col`}>
      <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{eyebrow}</span>
      <h2 className={`mt-5 font-display text-[36px] font-bold leading-[1.06] tracking-[-0.035em] md:text-[54px] ${dark ? "text-[#f8f8f8]" : "text-[#11100f]"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-7 max-w-3xl text-base leading-[1.75] md:text-lg ${dark ? "text-[#f8f8f8]/70" : "text-[#11100f]/72"}`}>{text}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={goTo} activeSection="" />

      <section id="inicio" className="relative flex min-h-[850px] items-center overflow-hidden bg-[#11100f] pb-20 pt-[112px] md:pt-[128px]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[90px] z-0 flex items-center justify-center overflow-hidden lg:hidden">
          <div className="aspect-[760/520] w-full max-w-[560px] -translate-y-16 scale-[1.35] opacity-[0.24]">
            <NeuralSearchBrain />
          </div>
        </div>

        <div className="container relative z-10 mx-auto w-full max-w-[1320px] px-6 md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
            <div className="flex flex-col items-start text-left lg:col-span-7">
              <span className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.17em] text-[#a69580]">
                SEARCH INTELLIGENCE PARA EMPRESAS
              </span>
              <h1 className="max-w-[820px] font-display text-[clamp(48px,5vw,76px)] font-bold leading-[0.98] tracking-[-0.05em] text-[#f8f8f8]">
                Sua empresa não precisa apenas aparecer na busca. Precisa entrar na decisão.
              </h1>
              <p className="mt-8 max-w-[760px] text-lg font-medium leading-[1.65] text-[#e0d3c3] md:text-xl">
                A AUDITSEO identifica por que sua marca não é encontrada, compreendida ou considerada no Google e nas plataformas de IA — e transforma esses gaps em um plano coordenado de SEO técnico, conteúdo, autoridade de entidade e presença generativa.
              </p>

              <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <button
                  onClick={() => goTo("diagnostico")}
                  className="rounded-full bg-[#b28453] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]"
                >
                  Descobrir o que está limitando minha empresa
                </button>
                <button
                  onClick={() => document.getElementById("diagnostico-sistema")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  className="rounded-full border border-[#b28453]/45 px-8 py-4 text-base font-semibold text-[#f8f8f8] transition-all hover:bg-[#b28453]/10"
                >
                  Ver como analisamos
                </button>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-2 gap-y-2 font-mono text-[11px] text-[#8c8275]">
                {['SEO técnico', 'Intenção', 'Entidade', 'Conteúdo', 'Evidências', 'Search AI'].map((item, index) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    {index > 0 ? <span className="text-[#b28453]/35">·</span> : null}
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden items-center justify-center lg:col-span-5 lg:flex lg:-translate-x-4 lg:scale-[1.05]">
              <NeuralSearchBrain />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            eyebrow="O PROBLEMA REAL"
            title="Você pode ter site, conteúdo e até boas posições — e ainda estar fora das decisões que importam."
            text="Hoje a percepção de uma empresa é construída em vários lugares ao mesmo tempo: resultados orgânicos, mapas, avaliações, especialistas, vídeos, fontes independentes e respostas geradas por IA. Quando esses sinais são fracos, desconectados ou contraditórios, a marca perde capacidade de ser recuperada, entendida e confiada."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stages.map((stage) => (
              <article key={stage.number} className="min-h-[250px] rounded-[24px] border border-[#b28453]/28 bg-[linear-gradient(145deg,rgba(31,30,28,0.98),rgba(14,14,13,0.98))] p-8 shadow-[0_28px_70px_rgba(0,0,0,0.30)]">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">ETAPA_{stage.number}</span>
                <h3 className="mt-5 font-display text-2xl font-bold text-[#f8f8f8]">{stage.title}</h3>
                <div className="my-5 h-px w-14 bg-gradient-to-r from-[#b28453] to-transparent" />
                <p className="text-sm leading-[1.75] text-[#f8f8f8]/68">{stage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="diagnostico-sistema" className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32 scroll-mt-24">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            dark={false}
            eyebrow="NÃO COMEÇAMOS PELA TÁTICA"
            title="SEO, GEO, conteúdo e reputação são meios. O ponto de partida é descobrir o gargalo."
            text="Adicionar mais páginas, backlinks, schema ou conteúdo sem saber qual camada está falhando pode apenas aumentar a complexidade. A AUDITSEO primeiro investiga o sistema; depois decide quais frentes precisam entrar no plano."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {diagnosticLayers.map((layer) => (
              <article key={layer.title} className="rounded-[24px] border border-[#11100f]/10 bg-[#f4eee5] p-8 shadow-[0_18px_50px_rgba(17,16,15,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#b28453]/22 bg-[#b28453]/12 text-[#7b5836]">
                  {layer.icon}
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold leading-[1.15]">{layer.title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-[#11100f]/70">{layer.text}</p>
                <ul className="mt-6 space-y-3 border-t border-[#11100f]/10 pt-6">
                  {layer.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[#11100f]/72">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#8c613c]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes-home" className="bg-[#11100f] py-24 md:py-32 scroll-mt-24">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="SOLUÇÕES POR CENÁRIO"
              title="O serviço certo depende do problema que a empresa realmente tem."
              text="As soluções da AUDITSEO não são pacotes de tarefas. Cada uma existe para um estágio ou risco específico da operação de busca."
            />
            <a href="/solucoes" className="inline-flex shrink-0 items-center gap-2 font-bold text-[#b28453] transition-colors hover:text-[#e0d3c3]">
              Ver arquitetura completa de soluções <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {scenarios.map((scenario) => (
              <a key={scenario.label} href={scenario.href} className="group rounded-[24px] border border-[#b28453]/22 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-8 transition-all hover:-translate-y-1 hover:border-[#b28453]/55">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{scenario.label}</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-[#f8f8f8]">{scenario.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-[1.75] text-[#f8f8f8]/66">{scenario.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#e0d3c3] transition-colors group-hover:text-[#b28453]">
                  Entender esta solução <ArrowRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div id="metodologia" className="scroll-mt-24">
        <SignalMethod
          onCtaClick={() => goTo("diagnostico")}
          ctaText="Solicitar avaliação estratégica"
          subtitleText="Uma metodologia para transformar sinais dispersos em diagnóstico, prioridade, execução documentada e aprendizado contínuo."
          steps={signalSteps}
          footnote="O objetivo não é produzir mais um relatório. É construir um sistema de decisão que diga o que fazer, por que fazer, quem deve executar e como validar se o cenário mudou."
        />
      </div>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            dark={false}
            eyebrow="EVIDÊNCIAS DO TRABALHO"
            title="Uma consultoria precisa deixar decisões, ativos e provas — não apenas reuniões."
            text="Cada projeto deve tornar visível o raciocínio usado, o que foi priorizado, o que mudou e qual é o próximo ciclo."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map(([title, text], index) => {
              const icons = [<Search size={18} />, <Target size={18} />, <Compass size={18} />, <Network size={18} />, <Award size={18} />, <Gauge size={18} />];
              return (
                <article key={title} className="rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7 shadow-[0_16px_45px_rgba(17,16,15,0.06)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#11100f] text-[#b28453]">{icons[index]}</span>
                  <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-[1.7] text-[#11100f]/68">{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            eyebrow="CONHECIMENTO ABERTO"
            title="Nossa autoridade precisa ser demonstrável antes da primeira reunião."
            text="A AUDITSEO publica conceitos, critérios, limitações e aprendizados para que empresas consigam avaliar nossa forma de pensar antes de contratar a consultoria."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {editorialLinks.map((item) => (
              <a key={item.title} href={item.href} className="group rounded-[24px] border border-[#b28453]/22 bg-[#171614] p-8 transition-all hover:-translate-y-1 hover:border-[#b28453]/52">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{item.eyebrow}</span>
                <h3 className="mt-5 font-display text-2xl font-bold text-[#f8f8f8]">{item.title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/66">{item.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#e0d3c3] group-hover:text-[#b28453]">
                  Ler conteúdo <ArrowRight size={14} />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href="/blog" className="inline-flex items-center gap-2 rounded-full border border-[#b28453]/35 px-6 py-3 text-sm font-bold text-[#f8f8f8] hover:bg-[#b28453]/10">
              Explorar a biblioteca AUDITSEO <FileText size={15} />
            </a>
            <a href="/autor/sidney-santos" className="inline-flex items-center gap-2 text-sm font-bold text-[#b28453] hover:text-[#e0d3c3]">
              Conhecer Sidney Santos <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6 xl:px-12">
          <SectionHeader
            dark={false}
            center
            eyebrow="POR QUE SEARCH INTELLIGENCE"
            title="O canal muda. A obrigação de ser encontrável, compreensível e confiável permanece."
            text="A AUDITSEO não depende de uma sigla específica para justificar sua existência. Google, mapas, mecanismos de resposta e assistentes de IA são interfaces diferentes de um mesmo problema empresarial: como a marca entra na descoberta, na validação e na escolha."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              [<Globe2 size={20} />, "Visão do ecossistema", "O domínio é central, mas não é a única fonte de interpretação. Reputação, especialistas, perfis e fontes externas também fazem parte da leitura."],
              [<Bot size={20} />, "IA sem promessa vazia", "Acompanhamos ambientes generativos como uma nova interface de descoberta e medimos presença sem vender controle sobre sistemas de terceiros."],
              [<Sparkles size={20} />, "Tática subordinada ao diagnóstico", "SEO, conteúdo, PR, schema e outras frentes entram porque resolvem um gap identificado — não porque fazem parte de um pacote padrão."],
            ].map(([icon, title, text]) => (
              <article key={String(title)} className="rounded-[22px] border border-[#11100f]/10 bg-[#f4eee5] p-7 text-left">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#11100f] text-[#b28453]">{icon as ReactNode}</span>
                <h3 className="mt-5 font-display text-xl font-bold">{title as string}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-[#11100f]/68">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[980px] px-6 xl:px-12">
          <SectionHeader center eyebrow="DÚVIDAS FREQUENTES" title="O que precisa estar claro antes de começar" />
          <div className="mt-14 space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-[20px] border border-[#b28453]/20 bg-[#171614] px-6 py-5 open:border-[#b28453]/45">
                <summary className="cursor-pointer list-none pr-8 font-display text-lg font-bold text-[#f8f8f8] marker:hidden">
                  {question}
                </summary>
                <p className="mt-4 border-t border-[#b28453]/12 pt-4 text-sm leading-[1.75] text-[#f8f8f8]/68">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="form-contato" className="relative overflow-hidden bg-[#11100f] py-24 md:py-32 scroll-mt-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b28453]/5 blur-[150px]" />
        <div className="container relative z-10 mx-auto max-w-[820px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="AVALIAÇÃO ESTRATÉGICA"
            title="Antes de decidir o que fazer, descubra o que realmente está limitando sua empresa."
            text="Compartilhe o site e o contexto da empresa. A primeira conversa serve para entender o cenário, identificar o tipo de problema e avaliar se a AUDITSEO é a frente adequada para conduzir o próximo ciclo."
          />

          <form className="mt-12 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Nome completo">
                <input required type="text" placeholder="Seu nome" className={inputClass} />
              </Field>
              <Field label="E-mail corporativo">
                <input required type="email" placeholder="voce@empresa.com.br" className={inputClass} />
              </Field>
              <Field label="WhatsApp com DDD">
                <input required type="tel" placeholder="(11) 99999-9999" className={inputClass} />
              </Field>
              <Field label="Site da empresa">
                <input required type="url" placeholder="https://www.suaempresa.com.br" className={inputClass} />
              </Field>
            </div>
            <Field label="Faturamento médio mensal">
              <select required defaultValue="" className={`${inputClass} appearance-none`}>
                <option value="" disabled>Selecione uma faixa</option>
                <option value="Ate 50k">Até R$ 50 mil</option>
                <option value="50k a 200k">R$ 50 mil a R$ 200 mil</option>
                <option value="Acima de 200k">Acima de R$ 200 mil</option>
              </select>
            </Field>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#b28453] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]">
              Solicitar avaliação estratégica <ArrowRight size={16} />
            </button>
            <p className="text-center text-xs leading-[1.65] text-[#f8f8f8]/48">
              Não usamos a primeira conversa para empurrar um pacote. Ela existe para entender o problema, o contexto e a capacidade de execução da empresa.
            </p>
          </form>
        </div>
      </section>

      <SiteFooter onNavigate={goTo} />
    </main>
  );
}

const inputClass = "w-full rounded-full border border-[#b28453]/22 bg-[#181716] px-5 py-4 text-sm text-[#f8f8f8] outline-none placeholder:text-[#f8f8f8]/30 focus:border-[#b28453]/60";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">{label} *</span>
      {children}
    </label>
  );
}
