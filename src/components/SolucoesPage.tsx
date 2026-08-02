import { useEffect, type ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Compass,
  Layers3,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SiteFooter from "./SiteFooter";

interface SolucoesPageProps {
  onNavigate: (targetId: string) => void;
}

const scenarioNodes = [
  { label: "Zero", x: 28, y: 20 },
  { label: "Estagnado", x: 73, y: 18 },
  { label: "Queda", x: 86, y: 50 },
  { label: "Autoridade", x: 70, y: 82 },
  { label: "GEO", x: 30, y: 82 },
  { label: "Evolução", x: 14, y: 51 },
];

const scenarioCards = [
  {
    title: "Projeto começando do zero",
    text: "O cliente precisa nascer com base orgânica, estrutura e clareza de busca.",
  },
  {
    title: "Site no ar, mas sem tração",
    text: "O projeto existe, mas nunca conseguiu transformar presença em crescimento.",
  },
  {
    title: "Projeto que crescia e despencou",
    text: "O cliente perdeu visibilidade e precisa entender a causa antes de agir.",
  },
  {
    title: "Cliente high-ticket",
    text: "A decisão depende de confiança, autoridade, reputação e validação pública.",
  },
  {
    title: "Conteúdo sem direção",
    text: "Existe produção, mas falta conexão com intenção, jornada e decisão.",
  },
  {
    title: "Marca despreparada para IA/GEO",
    text: "A empresa quer inovação, mas seus sinais ainda são frágeis para a nova busca.",
  },
  {
    title: "Redesign, migração ou expansão",
    text: "Mudanças estruturais podem gerar risco orgânico se não houver governança.",
  },
  {
    title: "Cliente recorrente sem percepção de evolução",
    text: "A conta precisa de ciclos claros de aprendizado, prioridade e próximos passos.",
  },
];

const scenarioCardAnchors = [
  "cenario-novo-projeto",
  "cenario-sem-tracao",
  "cenario-queda",
  "cenario-autoridade",
  "cenario-conteudo",
  "cenario-geo",
  "cenario-migracao",
  "cenario-evolucao",
];

const scenarioSolutions = [
  {
    name: "Search Foundation",
    scenario: "Para projetos começando do zero",
    problem:
      "Começar sem estrutura de SEO, arquitetura, intenção, dados estruturados e clareza de entidade pode fazer o projeto nascer limitado.",
    value:
      "Estruturar a base orgânica desde o início para que o site já comece com direção, contexto e capacidade de evolução.",
    agencySells: "Uma fundação estratégica de busca para projetos digitais novos.",
    backstage:
      "Organizamos a leitura inicial, arquitetura orgânica, estrutura semântica, prioridades técnicas e sinais básicos de autoridade.",
  },
  {
    name: "Organic Activation",
    scenario: "Para sites que estão no ar, mas nunca ganharam tração",
    problem:
      "O projeto existe, mas não cresce porque falta diagnóstico, prioridade, intenção, arquitetura ou autoridade.",
    value:
      "Identificar o que impede o crescimento e transformar um site passivo em uma frente orgânica com direção.",
    agencySells: "Um plano de ativação orgânica para projetos estagnados.",
    backstage:
      "Mapeamos gargalos, oportunidades, lacunas de conteúdo, problemas técnicos e prioridades de ação.",
  },
  {
    name: "Search Recovery",
    scenario: "Para projetos que cresceram e depois despencaram",
    problem:
      "A queda pode estar ligada a técnica, conteúdo, autoridade, intenção, concorrência, updates, mudança de SERP ou perda de confiança da entidade.",
    value:
      "Diagnosticar a causa da queda e reconstruir sinais de relevância, autoridade e confiança.",
    agencySells: "Um plano de recuperação orgânica e reconstrução de autoridade.",
    backstage:
      "Analisamos histórico, perdas, páginas afetadas, concorrentes, sinais técnicos, autoridade e mudanças de intenção/mercado.",
  },
  {
    name: "Entity Authority",
    scenario: "Para clientes que dependem de confiança antes da compra",
    problem:
      "Em mercados high-ticket, não basta aparecer. O cliente pesquisa, compara, valida reputação e procura sinais de autoridade antes de decidir.",
    value:
      "Organizar os sinais que fazem a marca ser compreendida como entidade, associada ao contexto certo e percebida como opção confiável.",
    agencySells: "Uma estratégia de autoridade de entidade e confiança digital.",
    backstage:
      "Estruturamos narrativa, páginas de serviço, reputação, provas, avaliações, menções, dados estruturados e consistência entre canais.",
  },
  {
    name: "Intent Content Architecture",
    scenario: "Para clientes que produzem conteúdo, mas não geram resultado",
    problem:
      "Conteúdo sem intenção vira volume. Volume sem arquitetura não sustenta autoridade, tráfego qualificado nem decisão.",
    value:
      "Reorganizar conteúdo a partir de intenções reais: descoberta, comparação, confiança, objeção e decisão.",
    agencySells: "Uma arquitetura de conteúdo orientada por intenção e jornada.",
    backstage:
      "Mapeamos intenções, clusters, páginas, lacunas e oportunidades conectadas à jornada orgânica.",
  },
  {
    name: "GEO & AI Readiness",
    scenario: "Para marcas que precisam se adaptar à nova busca",
    problem:
      "Muitas empresas querem aparecer em ambientes de IA, mas não possuem clareza semântica, autoridade, dados estruturados, conteúdo explicativo ou consistência pública.",
    value:
      "Preparar a marca para ser melhor compreendida por buscadores, mecanismos de resposta e ambientes generativos.",
    agencySells: "Uma solução de preparação para GEO, IA e nova busca.",
    backstage:
      "Avaliamos entidades, estrutura semântica, perguntas estratégicas, dados estruturados, reputação e clareza de oferta.",
    note:
      "Sem prometer aparição garantida em IA: o trabalho é preparar, organizar sinais, aumentar clareza e melhorar capacidade de interpretação.",
  },
  {
    name: "SEO Migration & Risk Control",
    scenario: "Para redesigns, migrações e expansões de site",
    problem:
      "Muitas perdas orgânicas acontecem porque migração e redesign são tratados como projeto visual ou técnico, sem governança de busca.",
    value:
      "Reduzir risco, preservar sinais existentes e preparar a nova estrutura para crescimento.",
    agencySells: "Uma camada de proteção orgânica para mudanças estruturais.",
    backstage:
      "Mapeamos URLs, arquitetura, indexação, redirects, páginas prioritárias, sinais existentes e riscos de perda orgânica.",
  },
  {
    name: "Organic Evolution Cycle",
    scenario: "Para clientes recorrentes que precisam enxergar evolução",
    problem:
      "Sem uma narrativa de evolução, a entrega orgânica vira relatório, rotina e percepção de estagnação.",
    value:
      "Transformar dados, aprendizados e oportunidades em ciclos claros de evolução estratégica.",
    agencySells: "Uma camada recorrente de inteligência orgânica para retenção e expansão.",
    backstage:
      "Acompanhamos sinais, consultas, páginas, concorrentes, autoridade, aprendizados e próximos movimentos.",
  },
];

const scenarioSolutionAnchors = [
  "search-foundation",
  "organic-activation",
  "search-recovery",
  "entity-authority",
  "intent-content-architecture",
  "geo-ai-readiness",
  "seo-migration-risk-control",
  "organic-evolution-cycle",
];

const offerMap = [
  ["Meu site nunca trouxe resultado.", "Organic Activation"],
  ["Nosso tráfego caiu e ninguém conseguiu recuperar.", "Search Recovery"],
  ["Queremos aparecer melhor no Google e na IA.", "GEO & AI Readiness"],
  ["Produzimos conteúdo, mas não vemos retorno.", "Intent Content Architecture"],
  ["Estamos refazendo o site.", "SEO Migration & Risk Control"],
  ["Preciso justificar a continuidade do contrato.", "Organic Evolution Cycle"],
];

const agencyValueCards = [
  "Mais precisão comercial",
  "Mais clareza de proposta",
  "Mais diferenciação estratégica",
  "Mais argumentos para retenção",
  "Mais oportunidades de expansão",
  "Menos dependência de discurso genérico sobre SEO ou IA",
];

const backstageSteps = [
  "Entendemos o cenário do cliente",
  "Aplicamos a leitura estratégica pelo S.I.G.N.A.L",
  "Estruturamos a solução adequada",
  "Validamos prioridades com critério especializado",
  "Entregamos a inteligência white-label para sua agência conduzir",
];

export default function SolucoesPage({ onNavigate }: SolucoesPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageSchema = "solucoes";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: "Soluções de SEO, GEO e Search Intelligence para Agências | AUDITSEO",
          url: `https://www.auditseo.com.br/solucoes`,
          description:
            "Soluções white-label de SEO, GEO, IA, autoridade de entidade e Search Intelligence para diferentes cenários da carteira de agências.",
        },
        {
          "@type": "Service",
          name: "Soluções white-label para cenários de projetos orgânicos",
          provider: { "@type": "Organization", name: "AUDITSEO" },
          serviceType: "Search Intelligence, SEO, GEO, autoridade e evolução orgânica",
        },
        {
          "@type": "ItemList",
          name: "Soluções por cenário de carteira",
          itemListElement: scenarioSolutions.map((solution, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: solution.name,
            description: solution.scenario,
          })),
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const scrollToScenarios = () => {
    const target = document.getElementById("mapa-cenarios");
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - 82, behavior: "smooth" });
  };

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <style>{`
        @keyframes scenarioNodeFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -9px, 0); }
        }

        @keyframes scenarioCorePulse {
          0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 26px rgba(178,132,83,0.26)); }
          50% { opacity: 1; filter: drop-shadow(0 0 42px rgba(178,132,83,0.40)); }
        }

        @keyframes scenarioParticle {
          0%, 100% { opacity: 0.14; transform: translate3d(0, 0, 0); }
          50% { opacity: 0.44; transform: translate3d(7px, -10px, 0); }
        }

        @keyframes scenarioLine {
          from { stroke-dashoffset: 120; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      <section id="solucoes" className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-[112px] md:pb-20 md:pt-[128px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_35%,rgba(178,132,83,0.17),transparent_35%),linear-gradient(135deg,rgba(224,211,195,0.045),transparent_44%)]" />
        <div className="container relative z-10 mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-12 xl:gap-16">
            <div className="lg:col-span-6">
              <span className="mb-5 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
                SOLUÇÕES PARA CENÁRIOS REAIS DA SUA CARTEIRA
              </span>
              <h1 className="max-w-[760px] font-display text-[clamp(54px,5.4vw,82px)] font-bold leading-[1.02] tracking-[-0.045em] text-[#f8f8f8]">
                Cada projeto orgânico exige uma estratégia diferente
              </h1>
              <p className="mt-8 max-w-[720px] text-[clamp(18px,1.35vw,22px)] leading-[1.55] text-[rgba(248,248,248,0.76)]">
                A AUDITSEO estrutura soluções white-label para diferentes momentos da carteira da sua agência: projetos começando do zero, sites estagnados, quedas de tráfego, baixa autoridade, conteúdo sem direção e clientes que precisam se adaptar à nova busca.
              </p>
              <p className="mt-[22px] max-w-[620px] text-[16px] leading-[1.5] text-[#e0d3c3]/[0.78]">
                O método fica nos bastidores. O que sua agência apresenta é uma solução clara para o momento real de cada cliente.
              </p>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton onClick={() => onNavigate("diagnostico")}>Avaliar parceria estratégica</PrimaryButton>
                <button
                  onClick={scrollToScenarios}
                  className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                >
                  Ver cenários
                </button>
              </div>
              <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.08em] text-[#8c8275]">
                Lançamento · Recuperação · Autoridade · GEO · Conteúdo · Evolução
              </p>
            </div>
            <div className="lg:col-span-6">
              <ScenarioConstellationVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6 xl:px-12">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">VISÃO AUDITSEO</span>
          <h2 className="mt-5 max-w-4xl font-display text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-[#f8f8f8] md:text-[54px]">
            SEO não é mais uma entrega única para todos os clientes
          </h2>
          <div className="mt-10 grid gap-7 text-lg leading-[1.75] text-[#f8f8f8]/70 md:text-xl">
            <p>
              Existem clientes que estão <span className="text-[#b28453]">começando do zero</span>. Outros já têm site, conteúdo e histórico, mas{" "}
              <span className="text-[#b28453]">nunca conseguiram transformar presença orgânica em resultado</span>. Alguns cresceram durante anos e, de repente,{" "}
              <span className="text-[#b28453]">perderam visibilidade</span>. Outros dependem de{" "}
              <span className="text-[#b28453]">confiança, autoridade e validação</span> antes da decisão de compra.
            </p>
            <p>Tratar todos esses cenários com a mesma entrega de SEO é reduzir uma oportunidade estratégica a uma lista de tarefas.</p>
            <p className="font-display text-2xl font-bold leading-[1.4] text-[#e0d3c3]">
              A AUDITSEO estrutura soluções para <span className="text-[#b28453]">cada estágio da carteira</span> da sua agência.
            </p>
          </div>
        </div>
      </section>

      <section id="mapa-cenarios" className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            dark
            center
            eyebrow="Mapa de cenários"
            title="Em qual cenário o cliente da sua agência está hoje?"
            text="Cada cenário pede uma leitura diferente, uma solução diferente e uma narrativa diferente para o cliente final."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {scenarioCards.map((card, index) => (
              <article id={scenarioCardAnchors[index]} key={card.title} className="min-h-[210px] scroll-mt-28 rounded-[22px] border border-[#11100f]/12 bg-[#f8f8f8]/42 p-7 shadow-[0_20px_70px_rgba(17,16,15,0.10)]">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#6d5132]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold leading-[1.12]">{card.title}</h3>
                <p className="mt-5 text-sm leading-[1.7] text-[#11100f]/70">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            eyebrow="Soluções por perfil de projeto"
            title="Soluções criadas para cada momento da carteira"
            text="Em vez de aplicar a mesma entrega para todos os clientes, a AUDITSEO estrutura a solução certa para o estágio, o risco e o objetivo de cada projeto."
          />
          <div className="mt-16 space-y-8">
            {scenarioSolutions.map((solution, index) => (
              <div key={solution.name} id={scenarioSolutionAnchors[index]} className="scroll-mt-28">
                <ScenarioSolutionCard solution={solution} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1180px] px-6 xl:px-12">
          <SectionHeader
            dark
            center
            eyebrow="Do cenário à oferta"
            title="Do problema real à solução certa"
            text="A agência não precisa vender “mais SEO”. Ela pode apresentar uma solução alinhada ao momento do cliente."
          />
          <div className="mt-14 space-y-5">
            {offerMap.map(([quote, offer], index) => (
              <article key={quote} className="grid gap-5 rounded-[22px] border border-[#11100f]/12 bg-[#f8f8f8]/42 p-6 shadow-[0_18px_60px_rgba(17,16,15,0.09)] md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-7">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b28453]/50 bg-[#11100f] font-mono text-xs font-bold text-[#e0d3c3]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#6d5132]">Quando o cliente diz</p>
                    <p className="mt-2 font-display text-xl font-bold leading-[1.35]">“{quote}”</p>
                  </div>
                </div>
                <div className="rounded-[18px] border border-[#b28453]/30 bg-[#11100f] p-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">Oferta indicada</p>
                  <p className="mt-2 font-display text-2xl font-bold text-[#e0d3c3]">{offer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Valor para a agência"
            title="O valor está em reconhecer o cenário antes de vender a solução"
            text="Quando a agência consegue identificar o estágio real do projeto, a conversa muda. A entrega deixa de ser percebida como uma sequência de tarefas e passa a ser apresentada como resposta estratégica para um problema específico do cliente."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agencyValueCards.map((card, index) => (
              <article key={card} className="rounded-[22px] border border-[#b28453]/20 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#b28453]/10 text-[#b28453]">
                  {index === 0 ? <Search size={18} /> : index === 1 ? <Compass size={18} /> : index === 2 ? <Sparkles size={18} /> : index === 3 ? <ShieldCheck size={18} /> : index === 4 ? <Layers3 size={18} /> : <CheckCircle2 size={18} />}
                </div>
                <h3 className="font-display text-2xl font-bold leading-[1.16] text-[#f8f8f8]">{card}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            dark
            eyebrow="Bastidores white-label"
            title="Sua agência identifica a oportunidade. A AUDITSEO estrutura a solução."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {backstageSteps.map((step, index) => (
              <article key={step} className="rounded-[22px] border border-[#11100f]/12 bg-[#f8f8f8]/42 p-6 shadow-[0_20px_70px_rgba(17,16,15,0.10)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/50 bg-[#11100f] font-mono text-xs font-bold text-[#e0d3c3]">
                  {index + 1}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold leading-[1.2]">{step}</h3>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-[22px] border border-[#b28453]/32 bg-[#11100f] p-7 text-center text-lg font-semibold leading-[1.55] text-[#e0d3c3] md:p-9 md:text-2xl">
            O cliente vê a agência como parceira estratégica. A AUDITSEO sustenta a inteligência por trás.
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1080px] rounded-[8px] border border-[#b28453]/35 bg-[#171614] px-7 py-14 text-center shadow-2xl shadow-black/35 md:px-14 md:py-18">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">CENÁRIOS DA CARTEIRA</span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[34px] font-bold leading-[1.08] sm:text-[44px] md:text-[58px]">
            Qual cenário da sua carteira precisa de uma solução agora?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.7] text-[#f8f8f8]/70 md:text-lg">
            Vamos avaliar onde a AUDITSEO pode atuar como braço estratégico para destravar, recuperar ou evoluir projetos orgânicos dos clientes da sua agência.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryButton onClick={() => onNavigate("diagnostico")}>Avaliar parceria estratégica</PrimaryButton>
            <button
              onClick={() => onNavigate("signal")}
              className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
            >
              Conhecer o Método S.I.G.N.A.L
            </button>
          </div>
        </div>
      </section>

      <SiteFooter onNavigate={onNavigate} />
    </main>
  );
}

function PrimaryButton({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#e0d3c3] hover:text-[#11100f]"
    >
      {children}
      <ArrowRight size={16} />
    </button>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{eyebrow}</span>
      <h2 className={`mt-5 font-display text-[36px] font-bold leading-[1.08] tracking-[-0.03em] md:text-[54px] ${dark ? "text-[#11100f]" : "text-[#f8f8f8]"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-6 text-base leading-[1.75] md:text-lg ${dark ? "text-[#11100f]/70" : "text-[#f8f8f8]/66"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

function ScenarioConstellationVisual() {
  return (
    <div className="relative mx-auto flex h-[520px] max-w-[620px] items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(178,132,83,0.14),transparent_32%),radial-gradient(circle_at_30%_20%,rgba(224,211,195,0.08),transparent_22%)]" />
      {[...Array(42)].map((_, index) => (
        <span
          key={index}
          className="pointer-events-none absolute h-[2px] w-[2px] rounded-full bg-[#e0d3c3]/45"
          style={{
            top: `${8 + ((index * 23) % 82)}%`,
            left: `${6 + ((index * 37) % 88)}%`,
            opacity: 0.12 + (index % 5) * 0.07,
            animation: `scenarioParticle ${7 + (index % 6)}s ease-in-out infinite`,
            animationDelay: `${index * 0.18}s`,
          }}
        />
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 600 520" aria-hidden="true">
        <defs>
          <linearGradient id="scenarioLineGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(178,132,83,0.08)" />
            <stop offset="50%" stopColor="rgba(224,211,195,0.42)" />
            <stop offset="100%" stopColor="rgba(178,132,83,0.08)" />
          </linearGradient>
        </defs>
        {scenarioNodes.map((node) => (
          <line
            key={node.label}
            x1="300"
            y1="260"
            x2={(node.x / 100) * 600}
            y2={(node.y / 100) * 520}
            stroke="url(#scenarioLineGradient)"
            strokeWidth="1"
            strokeDasharray="6 10"
            style={{ animation: "scenarioLine 14s linear infinite" }}
          />
        ))}
      </svg>

      <div
        className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#b28453]/42 bg-[radial-gradient(circle_at_35%_30%,rgba(224,211,195,0.22),rgba(178,132,83,0.18),rgba(17,16,15,0.96)_68%)] shadow-[0_0_70px_rgba(178,132,83,0.26)]"
        style={{ animation: "scenarioCorePulse 6s ease-in-out infinite" }}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#11100f]/82">
          <span className="font-display text-lg font-bold tracking-[0.10em] text-[#e0d3c3]">AUDITSEO</span>
        </div>
      </div>

      {scenarioNodes.map((node, index) => (
        <div
          key={node.label}
          className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%`, animation: `scenarioNodeFloat ${8 + index}s ease-in-out infinite`, animationDelay: `${index * 0.35}s` }}
        >
          <div className="rounded-full border border-[#b28453]/32 bg-[#11100f]/86 px-4 py-2 shadow-[0_16px_42px_rgba(0,0,0,0.34)] backdrop-blur-sm">
            <span className="font-display text-sm font-bold text-[#f8f8f8]">{node.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ScenarioSolutionCard({ solution, index }: { solution: (typeof scenarioSolutions)[number]; index: number }) {
  return (
    <article className="relative overflow-hidden rounded-[28px] border border-[#b28453]/24 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_28px_80px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-12">
      <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(178,132,83,0.16),transparent_68%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <div>
          <span className="inline-flex h-14 min-w-14 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#b28453]/10 px-5 font-mono text-sm font-bold text-[#e0d3c3]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-7 font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-[#f8f8f8] md:text-4xl">
            {solution.name}
          </h3>
          <p className="mt-5 text-lg font-semibold leading-[1.45] text-[#e0d3c3]">{solution.scenario}</p>
          <span className="mt-5 inline-flex rounded-full border border-[#b28453]/24 bg-[#b28453]/10 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#e0d3c3]">
            Investimento inicial: a partir de R$ 2.500
          </span>
          {solution.note ? (
            <p className="mt-6 rounded-[16px] border border-[#b28453]/24 bg-[#b28453]/10 px-5 py-4 text-sm leading-[1.65] text-[#e0d3c3]/82">
              {solution.note}
            </p>
          ) : null}
        </div>

        <div className="grid gap-5">
          <DetailPanel title="Problema real" text={solution.problem} icon={<AlertTriangle size={17} />} />
          <div className="grid gap-5 md:grid-cols-2">
            <DetailPanel title="Proposta de valor" text={solution.value} icon={<Sparkles size={17} />} />
            <DetailPanel title="Como a AUDITSEO entra" text={solution.backstage} icon={<RefreshCw size={17} />} />
          </div>
          <div className="rounded-[18px] border-l-2 border-[#b28453] bg-[#e0d3c3]/[0.04] px-5 py-4">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#e0d3c3]">O que sua agência passa a vender</h4>
            <p className="mt-3 text-sm font-semibold leading-[1.7] text-[#f8f8f8]/76">{solution.agencySells}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function DetailPanel({ title, text, icon }: { title: string; text: string; icon: ReactNode }) {
  return (
    <div className="rounded-[18px] border border-[#b28453]/18 bg-white/[0.025] p-5">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#b28453]/10 text-[#b28453]">
        {icon}
      </div>
      <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#b28453]">{title}</h4>
      <p className="mt-3 text-sm leading-[1.7] text-[#f8f8f8]/68">{text}</p>
    </div>
  );
}
