import { FormEvent, useEffect, useMemo, useRef, useState, type MutableRefObject, type ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  CircleDot,
  Compass,
  Layers3,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SiteFooter from "./SiteFooter";

interface DiagnosticoPageProps {
  onNavigate: (targetId: string) => void;
}

type StepKey = "scenario" | "objective" | "bottlenecks" | "clientPressure" | "urgency";
type Answers = {
  scenario?: string;
  objective?: string;
  bottlenecks: string[];
  clientPressure?: string;
  urgency?: string;
};

const heroNodes = [
  { label: "Cenário", x: 30, y: 18 },
  { label: "Objetivo", x: 72, y: 20 },
  { label: "Gargalo", x: 86, y: 50 },
  { label: "Risco", x: 66, y: 82 },
  { label: "Solução", x: 32, y: 82 },
  { label: "Próximo passo", x: 14, y: 50 },
];

const scenarios = [
  {
    id: "foundation",
    title: "Projeto começando do zero",
    text: "Site novo, marca nova ou presença orgânica ainda inexistente.",
    solution: "Search Foundation",
    resultScenario: "Projeto novo com risco de nascer sem base orgânica clara.",
    opportunity:
      "Criar uma fundação estratégica de busca antes que arquitetura, conteúdo e entidade sejam definidos sem critério.",
    auditseo:
      "Nos bastidores, estruturando leitura inicial, arquitetura orgânica, estrutura semântica, prioridades técnicas e sinais básicos de autoridade.",
  },
  {
    id: "activation",
    title: "Site no ar, mas sem tração",
    text: "O projeto existe, mas nunca conseguiu gerar crescimento orgânico relevante.",
    solution: "Organic Activation",
    resultScenario: "Projeto estagnado com baixa clareza estratégica.",
    opportunity:
      "Reposicionar a conversa com um diagnóstico de ativação orgânica e um roadmap de evolução.",
    auditseo:
      "Nos bastidores, mapeando gargalos, oportunidades, lacunas de conteúdo, problemas técnicos e prioridades de ação.",
  },
  {
    id: "recovery",
    title: "Projeto que crescia e despencou",
    text: "Já houve tráfego ou visibilidade, mas depois aconteceu uma queda difícil de recuperar.",
    solution: "Search Recovery",
    resultScenario: "Projeto em perda de visibilidade com causa ainda pouco clara.",
    opportunity:
      "Transformar a queda em uma conversa técnica e estratégica sobre reconstrução de relevância, autoridade e confiança.",
    auditseo:
      "Nos bastidores, analisando histórico, páginas afetadas, concorrentes, sinais técnicos, autoridade e mudanças de intenção ou mercado.",
  },
  {
    id: "authority",
    title: "Cliente high-ticket",
    text: "A decisão depende de confiança, autoridade, reputação e validação pública.",
    solution: "Entity Authority",
    resultScenario: "Cliente com alto valor de decisão e dependência de confiança antes da compra.",
    opportunity:
      "Criar uma frente de autoridade de entidade para sustentar reputação, contexto e validação pública.",
    auditseo:
      "Nos bastidores, organizando narrativa, páginas de serviço, reputação, provas, avaliações, menções, dados estruturados e consistência entre canais.",
  },
  {
    id: "content",
    title: "Conteúdo sem retorno",
    text: "Existe produção, mas falta conexão com intenção, jornada e decisão.",
    solution: "Intent Content Architecture",
    resultScenario: "Produção orgânica com volume, mas pouca direção estratégica.",
    opportunity:
      "Reposicionar conteúdo como arquitetura de intenção, não como calendário de publicações.",
    auditseo:
      "Nos bastidores, mapeando intenções, clusters, páginas, lacunas e oportunidades conectadas à jornada orgânica.",
  },
  {
    id: "geo",
    title: "Cliente perguntando sobre IA/GEO",
    text: "A empresa quer entender nova busca, ChatGPT, Gemini, AI Overviews ou respostas generativas.",
    solution: "GEO & AI Readiness",
    resultScenario: "Cliente pressionando por IA, mas com sinais de busca ainda pouco organizados.",
    opportunity:
      "Transformar curiosidade sobre IA em uma proposta madura de preparação para nova busca.",
    auditseo:
      "Nos bastidores, avaliando entidades, estrutura semântica, perguntas estratégicas, dados estruturados, reputação e clareza de oferta.",
  },
  {
    id: "migration",
    title: "Redesign, migração ou expansão",
    text: "O site será refeito, migrado ou terá nova estrutura de páginas.",
    solution: "SEO Migration & Risk Control",
    resultScenario: "Mudança estrutural com risco de perda orgânica se não houver governança de busca.",
    opportunity:
      "Criar uma camada de proteção orgânica para preservar sinais existentes e preparar crescimento futuro.",
    auditseo:
      "Nos bastidores, mapeando URLs, arquitetura, indexação, redirects, páginas prioritárias, sinais existentes e riscos de perda orgânica.",
  },
  {
    id: "evolution",
    title: "Cliente recorrente sem percepção de evolução",
    text: "A conta continua ativa, mas precisa de novos argumentos e próximos passos.",
    solution: "Organic Evolution Cycle",
    resultScenario: "Conta recorrente com risco de parecer rotina sem evolução visível.",
    opportunity:
      "Transformar dados, aprendizados e oportunidades em ciclos claros de evolução estratégica.",
    auditseo:
      "Nos bastidores, acompanhando sinais, consultas, páginas, concorrentes, autoridade, aprendizados e próximos movimentos.",
  },
];

const objectives = [
  "Abrir uma nova proposta",
  "Defender uma renovação",
  "Recuperar confiança do cliente",
  "Expandir ticket",
  "Criar uma frente de inovação",
  "Reduzir dependência do time interno",
  "Dar clareza para uma conta estratégica",
  "Reposicionar SEO dentro da entrega",
];

const bottlenecks = [
  "SEO técnico",
  "Arquitetura do site",
  "Conteúdo",
  "Autoridade",
  "Dados estruturados",
  "Reputação",
  "Concorrência",
  "IA/GEO",
  "Migração/redesign",
  "Falta de diagnóstico",
  "Falta de próximos passos claros",
  "Baixa percepção de valor",
];

const clientPressures = [
  "Mais tráfego",
  "Mais leads",
  "Provar resultado",
  "Entender IA",
  "Melhorar autoridade",
  "Superar concorrentes",
  "Recuperar queda",
  "Saber o que fazer agora",
  "Justificar investimento",
  "Ver evolução no contrato",
];

const urgencyOptions = [
  { id: "low", title: "Baixa", text: "ainda é uma oportunidade" },
  { id: "medium", title: "Média", text: "já existe cobrança ou dúvida" },
  { id: "high", title: "Alta", text: "pode impactar renovação ou confiança" },
  { id: "critical", title: "Crítica", text: "a conta está em risco ou travada" },
];

const howItWorks = [
  ["Escolha o cenário", "Identifique o tipo de projeto que está na sua carteira."],
  ["Defina o objetivo", "Informe o que sua agência quer destravar: proposta, retenção, recuperação, expansão ou inovação."],
  ["Aponte os gargalos", "Selecione onde o projeto parece estar travado."],
  ["Receba uma direção", "Veja qual solução AUDITSEO pode fazer sentido para esse cenário."],
];

const trustCards = [
  ["Sem promessa automática", "O diagnóstico não garante resultado, ranking ou aparição em IA."],
  ["Sem exposição do cliente", "A URL do cliente é opcional e pode ser compartilhada apenas se fizer sentido."],
  ["Com leitura estratégica", "A AUDITSEO usa o resultado como ponto de partida para avaliar o cenário com mais profundidade."],
];

export default function DiagnosticoPage({ onNavigate }: DiagnosticoPageProps) {
  const scanRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageSchema = "diagnostico";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: "Diagnóstico Orgânico para Agências | AUDITSEO",
          url: `https://www.auditseo.com.br/diagnostico`,
          description:
            "Diagnóstico interativo para agências identificarem oportunidades de SEO, GEO, autoridade e inteligência de busca na carteira de clientes.",
        },
        {
          "@type": "Service",
          name: "Diagnóstico de oportunidade orgânica para agências",
          provider: { "@type": "Organization", name: "AUDITSEO" },
          serviceType: "Search Intelligence, SEO, GEO e autoridade de entidade",
        },
        {
          "@type": "ItemList",
          name: "Cenários de diagnóstico orgânico",
          itemListElement: scenarios.map((scenario, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: scenario.title,
            description: scenario.solution,
          })),
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const scrollToScan = () => {
    const target = scanRef.current || document.getElementById("organic-opportunity-scan");
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - 82, behavior: "smooth" });
  };

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <style>{`
        @keyframes diagnosticNodeFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -9px, 0); }
        }

        @keyframes diagnosticCorePulse {
          0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 26px rgba(178,132,83,0.24)); }
          50% { opacity: 1; filter: drop-shadow(0 0 44px rgba(178,132,83,0.42)); }
        }

        @keyframes diagnosticParticle {
          0%, 100% { opacity: 0.12; transform: translate3d(0, 0, 0); }
          50% { opacity: 0.42; transform: translate3d(7px, -10px, 0); }
        }

        @keyframes diagnosticLine {
          from { stroke-dashoffset: 120; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      <section id="diagnostico" className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-[112px] md:pb-20 md:pt-[128px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_35%,rgba(178,132,83,0.17),transparent_35%),linear-gradient(135deg,rgba(224,211,195,0.045),transparent_44%)]" />
        <div className="container relative z-10 mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-12 xl:gap-16">
            <div className="lg:col-span-6">
              <span className="mb-5 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
                DIAGNÓSTICO PARA AGÊNCIAS
              </span>
              <h1 className="max-w-[780px] font-display text-[clamp(54px,5.4vw,82px)] font-bold leading-[1.02] tracking-[-0.045em] text-[#f8f8f8]">
                Descubra qual oportunidade orgânica existe na sua carteira
              </h1>
              <p className="mt-8 max-w-[720px] text-[clamp(18px,1.35vw,22px)] leading-[1.55] text-[rgba(248,248,248,0.76)]">
                Responda algumas perguntas rápidas e veja qual cenário seu cliente está enfrentando, qual risco isso cria para a agência e qual solução AUDITSEO pode ser estruturada nos bastidores.
              </p>
              <p className="mt-[22px] max-w-[640px] text-[16px] leading-[1.5] text-[#e0d3c3]/[0.78]">
                Não é um formulário. É uma leitura estratégica para identificar onde sua agência pode destravar, recuperar ou evoluir uma conta.
              </p>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton onClick={scrollToScan}>Iniciar diagnóstico</PrimaryButton>
                <button
                  onClick={() => {
                    const target = document.getElementById("como-funciona-diagnostico");
                    if (target) window.scrollTo({ top: target.offsetTop - 82, behavior: "smooth" });
                  }}
                  className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                >
                  Ver como funciona
                </button>
              </div>
              <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.08em] text-[#8c8275]">
                Leva menos de 3 minutos · Sem compromisso · Pensado para agências
              </p>
            </div>
            <div className="lg:col-span-6">
              <DiagnosticHeroVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6 text-center xl:px-12">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">VISÃO AUDITSEO</span>
          <h2 className="mx-auto mt-5 max-w-5xl font-display text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-[#f8f8f8] md:text-[54px]">
            O problema nem sempre é falta de SEO. Às vezes é falta de{" "}
            <span className="text-[#b28453]">leitura do cenário</span>.
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-7 text-lg leading-[1.75] text-[#f8f8f8]/70 md:text-xl">
            <p>
              Projetos orgânicos podem estar em estágios completamente diferentes. Alguns precisam nascer com a base correta. Outros precisam{" "}
              <span className="text-[#b28453]">destravar tração</span>. Alguns precisam{" "}
              <span className="text-[#b28453]">recuperar visibilidade</span> perdida. Outros precisam{" "}
              <span className="text-[#b28453]">construir autoridade</span> antes da decisão do cliente.
            </p>
            <p>Tratar todos esses casos com a mesma entrega reduz a estratégia a uma lista de tarefas.</p>
            <p className="font-display text-2xl font-bold leading-[1.4] text-[#e0d3c3]">
              O diagnóstico existe para identificar o cenário certo antes de propor a <span className="text-[#b28453]">solução certa</span>.
            </p>
          </div>
        </div>
      </section>

      <section id="como-funciona-diagnostico" className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            dark
            center
            eyebrow="Como funciona"
            title="Como o diagnóstico funciona"
            text="Uma experiência rápida para transformar uma dor genérica em uma hipótese estratégica."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {howItWorks.map(([title, text], index) => (
              <article key={title} className="rounded-[22px] border border-[#11100f]/12 bg-[#f8f8f8]/42 p-7 shadow-[0_20px_70px_rgba(17,16,15,0.10)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/50 bg-[#11100f] font-mono text-xs font-bold text-[#e0d3c3]">
                  {index + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold leading-[1.14]">{title}</h3>
                <p className="mt-5 text-sm leading-[1.7] text-[#11100f]/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <OrganicOpportunityScan refEl={scanRef} />

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1180px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Leitura inicial"
            title="O diagnóstico não substitui uma análise completa. Ele aponta o caminho certo para começar."
            text="O resultado gerado na página é uma leitura inicial baseada nas respostas selecionadas. A análise estratégica completa considera dados, histórico, concorrência, estrutura, autoridade e contexto do cliente."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {trustCards.map(([title, text], index) => (
              <article key={title} className="rounded-[22px] border border-[#b28453]/20 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#b28453]/10 text-[#b28453]">
                  {index === 0 ? <AlertTriangle size={18} /> : index === 1 ? <ShieldCheck size={18} /> : <Compass size={18} />}
                </div>
                <h3 className="font-display text-2xl font-bold leading-[1.14] text-[#f8f8f8]">{title}</h3>
                <p className="mt-5 text-sm leading-[1.7] text-[#f8f8f8]/66">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1080px] rounded-[8px] border border-[#b28453]/35 bg-[#171614] px-7 py-14 text-center shadow-2xl shadow-black/35 md:px-14 md:py-18">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">DIAGNÓSTICO AUDITSEO</span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[34px] font-bold leading-[1.08] sm:text-[44px] md:text-[58px]">
            Quer descobrir onde sua agência pode destravar valor orgânico?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.7] text-[#f8f8f8]/70 md:text-lg">
            Use o diagnóstico para identificar o cenário e entender qual solução AUDITSEO pode ser estruturada nos bastidores.
          </p>
          <div className="mt-10 flex justify-center">
            <PrimaryButton onClick={scrollToScan}>Iniciar diagnóstico</PrimaryButton>
          </div>
        </div>
      </section>

      <SiteFooter onNavigate={onNavigate} />
    </main>
  );
}

function OrganicOpportunityScan({ refEl }: { refEl: MutableRefObject<HTMLElement | null> }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<Answers>({ bottlenecks: [] });
  const [formSent, setFormSent] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    agency: "",
    whatsapp: "",
    email: "",
    agencySite: "",
    clientUrl: "",
    context: "",
  });

  const steps: Array<{
    key: StepKey;
    title: string;
    subtitle?: string;
    multi?: boolean;
    options: Array<{ id: string; title: string; text?: string }>;
  }> = [
    {
      key: "scenario",
      title: "Qual cenário representa melhor esse cliente?",
      subtitle: "Escolha o momento atual do projeto.",
      options: scenarios.map((scenario) => ({ id: scenario.id, title: scenario.title, text: scenario.text })),
    },
    {
      key: "objective",
      title: "Qual é o principal objetivo da sua agência nesse caso?",
      options: objectives.map((objective) => ({ id: objective, title: objective })),
    },
    {
      key: "bottlenecks",
      title: "Qual parece ser o maior gargalo hoje?",
      multi: true,
      options: bottlenecks.map((bottleneck) => ({ id: bottleneck, title: bottleneck })),
    },
    {
      key: "clientPressure",
      title: "O que o cliente mais cobra ou demonstra hoje?",
      options: clientPressures.map((pressure) => ({ id: pressure, title: pressure })),
    },
    {
      key: "urgency",
      title: "Qual é o nível de urgência desse cenário?",
      options: urgencyOptions.map((urgency) => ({ id: urgency.id, title: urgency.title, text: urgency.text })),
    },
  ];

  const activeStep = steps[stepIndex];
  const progress = showResult ? 100 : ((stepIndex + 1) / steps.length) * 100;
  const result = useMemo(() => buildDiagnosticResult(answers), [answers]);

  const canAdvance = useMemo(() => {
    if (activeStep.key === "bottlenecks") return answers.bottlenecks.length > 0;
    return Boolean(answers[activeStep.key]);
  }, [activeStep.key, answers]);

  const updateAnswer = (key: StepKey, value: string) => {
    if (key === "bottlenecks") {
      setAnswers((current) => ({
        ...current,
        bottlenecks: current.bottlenecks.includes(value)
          ? current.bottlenecks.filter((item) => item !== value)
          : [...current.bottlenecks, value],
      }));
      return;
    }

    setAnswers((current) => ({ ...current, [key]: value }));
  };

  const keepScanInView = () => {
    window.setTimeout(() => {
      const target = refEl.current || document.getElementById("organic-opportunity-scan");
      if (!target) return;

      const scanTop = target.getBoundingClientRect().top + window.scrollY - 92;
      if (Math.abs(window.scrollY - scanTop) > 24) {
        window.scrollTo({ top: scanTop, behavior: "smooth" });
      }
    }, 80);
  };

  const goNext = () => {
    if (!canAdvance) return;
    if (stepIndex === steps.length - 1) {
      setShowResult(true);
      window.setTimeout(() => {
        const target = document.getElementById("diagnostic-result");
        if (target) window.scrollTo({ top: target.offsetTop - 100, behavior: "smooth" });
      }, 80);
      return;
    }
    setStepIndex((current) => current + 1);
    keepScanInView();
  };

  const goBack = () => {
    if (showResult) {
      setShowResult(false);
      setStepIndex(steps.length - 1);
      keepScanInView();
      return;
    }
    setStepIndex((current) => Math.max(0, current - 1));
    keepScanInView();
  };

  const resetScan = () => {
    setStepIndex(0);
    setShowResult(false);
    setAnswers({ bottlenecks: [] });
    setFormSent(false);
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="organic-opportunity-scan" ref={refEl} className="relative overflow-hidden bg-[#11100f] py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(178,132,83,0.10),transparent_32%)]" />
      <div className="container relative z-10 mx-auto max-w-[1240px] px-6 xl:px-12">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-4xl">
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Organic Opportunity Scan</span>
            <h2 className="mt-5 font-display text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-[#f8f8f8] md:text-[54px]">
              Faça uma leitura rápida do cenário orgânico do cliente
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-[1.75] text-[#f8f8f8]/66 md:text-lg">
              A experiência entrega uma hipótese estratégica antes de pedir qualquer contato.
            </p>
          </div>
          <div className="rounded-full border border-[#b28453]/25 bg-[#171614] px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#e0d3c3]">
            menos de 3 minutos
          </div>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-[#b28453]/28 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] shadow-[0_30px_90px_rgba(0,0,0,0.40),inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="border-b border-[#b28453]/16 p-6 md:p-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
                  {showResult ? "Resultado gerado" : `Etapa ${stepIndex + 1} de ${steps.length}`}
                </p>
                <p className="mt-2 text-sm leading-[1.6] text-[#f8f8f8]/58">
                  {showResult ? "Você já tem uma direção inicial para conduzir a conversa." : "Selecione a opção que melhor representa o caso."}
                </p>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/8 md:w-[320px]">
                <div className="h-full rounded-full bg-[#b28453] transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>

          {!showResult ? (
            <div className="p-6 md:p-10">
              <div className="min-h-[120px]">
                <h3 className="font-display text-3xl font-bold leading-[1.12] text-[#f8f8f8] md:text-5xl">{activeStep.title}</h3>
                {activeStep.subtitle ? <p className="mt-4 text-base leading-[1.7] text-[#f8f8f8]/64">{activeStep.subtitle}</p> : null}
              </div>

              <div className={`mt-10 grid gap-4 ${activeStep.key === "scenario" ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2 xl:grid-cols-4"}`}>
                {activeStep.options.map((option) => {
                  const selected =
                    activeStep.key === "bottlenecks"
                      ? answers.bottlenecks.includes(option.id)
                      : answers[activeStep.key] === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => updateAnswer(activeStep.key, option.id)}
                      className={`group min-h-[150px] rounded-[22px] border p-5 text-left transition-all duration-300 hover:-translate-y-1 ${
                        selected
                          ? "border-[#b28453]/70 bg-[#b28453]/14 shadow-[0_0_42px_rgba(178,132,83,0.16)]"
                          : "border-[#b28453]/18 bg-white/[0.025] hover:border-[#b28453]/42"
                      }`}
                    >
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <span className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold ${selected ? "border-[#b28453] bg-[#b28453] text-white" : "border-[#b28453]/35 text-[#b28453]"}`}>
                          {selected ? <CheckCircle2 size={16} /> : <CircleDot size={15} />}
                        </span>
                      </div>
                      <h4 className="font-display text-xl font-bold leading-[1.18] text-[#f8f8f8]">{option.title}</h4>
                      {option.text ? <p className="mt-4 text-sm leading-[1.6] text-[#f8f8f8]/60">{option.text}</p> : null}
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={stepIndex === 0}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b28453]/30 px-6 py-3 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ChevronLeft size={16} />
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canAdvance}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-3 text-sm font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f] disabled:cursor-not-allowed disabled:opacity-45"
                >
                  {stepIndex === steps.length - 1 ? "Ver diagnóstico" : "Avançar"}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div id="diagnostic-result" className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-6 md:p-10">
                <div className="rounded-[26px] border border-[#b28453]/30 bg-[#11100f]/72 p-7 md:p-9">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Resultado instantâneo</span>
                  <h3 className="mt-5 font-display text-3xl font-bold leading-[1.1] text-[#f8f8f8] md:text-5xl">{result.solution}</h3>
                  <p className="mt-5 text-base leading-[1.7] text-[#f8f8f8]/66">{result.nextStep}</p>

                  <div className="mt-9 grid gap-5">
                    <ResultBlock title="Cenário identificado" text={result.scenario} icon={<Search size={17} />} />
                    <ResultBlock title="Risco para a agência" text={result.risk} icon={<AlertTriangle size={17} />} />
                    <ResultBlock title="Oportunidade comercial" text={result.opportunity} icon={<Sparkles size={17} />} />
                    <ResultBlock title="Como a AUDITSEO entra" text={result.auditseo} icon={<RefreshCw size={17} />} />
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b28453]/30 px-6 py-3 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                    >
                      <ChevronLeft size={16} />
                      Ajustar respostas
                    </button>
                    <button
                      type="button"
                      onClick={resetScan}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b28453]/30 px-6 py-3 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                    >
                      Refazer diagnóstico
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#b28453]/16 bg-[#0f0f0e] p-6 md:p-10 lg:border-l lg:border-t-0">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Próximo passo</span>
                <h3 className="mt-5 font-display text-3xl font-bold leading-[1.12] text-[#f8f8f8]">
                  Quer avaliar esse cenário com a AUDITSEO?
                </h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/64">
                  Envie o resumo do diagnóstico e vamos analisar se existe oportunidade para atuar nos bastidores da sua agência.
                </p>

                {formSent ? (
                  <div className="mt-8 rounded-[22px] border border-[#b28453]/32 bg-[#b28453]/10 p-6">
                    <CheckCircle2 className="h-9 w-9 text-[#b28453]" />
                    <h4 className="mt-5 font-display text-2xl font-bold text-[#f8f8f8]">Diagnóstico enviado</h4>
                    <p className="mt-3 text-sm leading-[1.7] text-[#f8f8f8]/66">
                      Recebemos o contexto inicial. A primeira conversa é para entender o cenário, não para empurrar uma solução.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="mt-8 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <TextInput label="Nome" value={contact.name} onChange={(value) => setContact((current) => ({ ...current, name: value }))} required />
                      <TextInput label="Agência" value={contact.agency} onChange={(value) => setContact((current) => ({ ...current, agency: value }))} required />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <TextInput label="WhatsApp" value={contact.whatsapp} onChange={(value) => setContact((current) => ({ ...current, whatsapp: value }))} required />
                      <TextInput label="E-mail" value={contact.email} onChange={(value) => setContact((current) => ({ ...current, email: value }))} type="email" required />
                    </div>
                    <TextInput label="Site da agência" value={contact.agencySite} onChange={(value) => setContact((current) => ({ ...current, agencySite: value }))} required />
                    <TextInput label="URL do cliente/projeto, opcional" value={contact.clientUrl} onChange={(value) => setContact((current) => ({ ...current, clientUrl: value }))} />
                    <label className="grid gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">Contexto rápido do caso, opcional</span>
                      <textarea
                        value={contact.context}
                        onChange={(event) => setContact((current) => ({ ...current, context: event.target.value }))}
                        className="min-h-[112px] rounded-[18px] border border-[#b28453]/22 bg-[#11100f] px-5 py-4 text-sm text-[#f8f8f8] outline-none transition-colors placeholder:text-[#f8f8f8]/30 focus:border-[#b28453]/60"
                        placeholder="Conte em poucas linhas o que está acontecendo com essa conta."
                      />
                    </label>
                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]"
                    >
                      Enviar diagnóstico
                      <Send size={15} />
                    </button>
                    <p className="text-center text-xs leading-[1.6] text-[#f8f8f8]/48">
                      A primeira conversa é para entender o cenário, não para empurrar uma solução.
                    </p>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function buildDiagnosticResult(answers: Answers) {
  const scenario = scenarios.find((item) => item.id === answers.scenario) || scenarios[1];
  const urgency = urgencyOptions.find((item) => item.id === answers.urgency);
  const bottleneckText = answers.bottlenecks.length ? ` Os gargalos sinalizados foram ${answers.bottlenecks.join(", ")}.` : "";
  const objectiveText = answers.objective ? ` O objetivo da agência é ${answers.objective.toLowerCase()}.` : "";

  const urgencyRisk =
    urgency?.id === "critical"
      ? "A conta pode estar em risco e a agência precisa transformar incerteza em direção rapidamente."
      : urgency?.id === "high"
        ? "A cobrança já pode afetar confiança, renovação ou percepção de valor."
        : urgency?.id === "medium"
          ? "A dúvida já existe e pode crescer se não houver uma leitura mais clara."
          : "A oportunidade ainda pode ser organizada antes de virar pressão comercial.";

  return {
    solution: scenario.solution,
    scenario: scenario.resultScenario,
    risk: `${urgencyRisk}${objectiveText}${bottleneckText}`,
    opportunity: scenario.opportunity,
    auditseo: scenario.auditseo,
    nextStep: `Próximo passo sugerido: avaliar esse cliente com a AUDITSEO para entender se existe oportunidade real de aplicar ${scenario.solution} nos bastidores da sua agência.`,
  };
}

function ResultBlock({ title, text, icon }: { title: string; text: string; icon: ReactNode }) {
  return (
    <div className="rounded-[18px] border border-[#b28453]/18 bg-white/[0.025] p-5">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#b28453]/10 text-[#b28453]">{icon}</div>
      <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#b28453]">{title}</h4>
      <p className="mt-3 text-sm leading-[1.7] text-[#f8f8f8]/68">{text}</p>
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="rounded-full border border-[#b28453]/22 bg-[#11100f] px-5 py-4 text-sm text-[#f8f8f8] outline-none transition-colors placeholder:text-[#f8f8f8]/30 focus:border-[#b28453]/60"
      />
    </label>
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

function DiagnosticHeroVisual() {
  return (
    <div className="relative mx-auto flex h-[520px] max-w-[620px] items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(178,132,83,0.15),transparent_32%),radial-gradient(circle_at_30%_20%,rgba(224,211,195,0.08),transparent_22%)]" />
      {[...Array(44)].map((_, index) => (
        <span
          key={index}
          className="pointer-events-none absolute h-[2px] w-[2px] rounded-full bg-[#e0d3c3]/45"
          style={{
            top: `${8 + ((index * 23) % 82)}%`,
            left: `${6 + ((index * 37) % 88)}%`,
            opacity: 0.12 + (index % 5) * 0.07,
            animation: `diagnosticParticle ${7 + (index % 6)}s ease-in-out infinite`,
            animationDelay: `${index * 0.18}s`,
          }}
        />
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 600 520" aria-hidden="true">
        <defs>
          <linearGradient id="diagnosticLineGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(178,132,83,0.08)" />
            <stop offset="50%" stopColor="rgba(224,211,195,0.42)" />
            <stop offset="100%" stopColor="rgba(178,132,83,0.08)" />
          </linearGradient>
        </defs>
        {heroNodes.map((node) => (
          <line
            key={node.label}
            x1="300"
            y1="260"
            x2={(node.x / 100) * 600}
            y2={(node.y / 100) * 520}
            stroke="url(#diagnosticLineGradient)"
            strokeWidth="1"
            strokeDasharray="6 10"
            style={{ animation: "diagnosticLine 16s linear infinite" }}
          />
        ))}
      </svg>

      <div
        className="absolute left-1/2 top-1/2 z-20 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#b28453]/42 bg-[radial-gradient(circle_at_35%_30%,rgba(224,211,195,0.24),rgba(178,132,83,0.20),rgba(17,16,15,0.96)_68%)] shadow-[0_0_76px_rgba(178,132,83,0.30)]"
        style={{ animation: "diagnosticCorePulse 6s ease-in-out infinite" }}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#11100f]/82 text-center">
          <span className="font-display text-sm font-bold tracking-[0.08em] text-[#e0d3c3]">DIAGNÓSTICO</span>
        </div>
      </div>

      {heroNodes.map((node, index) => (
        <div
          key={node.label}
          className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%`, animation: `diagnosticNodeFloat ${8 + index}s ease-in-out infinite`, animationDelay: `${index * 0.35}s` }}
        >
          <div className="rounded-full border border-[#b28453]/32 bg-[#11100f]/86 px-4 py-2 shadow-[0_16px_42px_rgba(0,0,0,0.34)] backdrop-blur-sm">
            <span className="font-display text-sm font-bold text-[#f8f8f8]">{node.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
