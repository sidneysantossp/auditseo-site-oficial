import { useEffect, type ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Compass,
  EyeOff,
  Layers3,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import SiteFooter from "./SiteFooter";

interface WhiteLabelPageProps {
  onNavigate: (targetId: string) => void;
}

const operationSteps = [
  {
    title: "Sua agência identifica a oportunidade",
    text: "Um cliente precisa de diagnóstico, recuperação, autoridade, GEO, roadmap ou evolução orgânica.",
  },
  {
    title: "A AUDITSEO estrutura a inteligência",
    text: "Aplicamos leitura estratégica, análise técnica e organização de sinais nos bastidores.",
  },
  {
    title: "A entrega é adaptada ao padrão da agência",
    text: "Materiais, argumentos e recomendações podem ser ajustados à linguagem, marca e formato comercial da sua operação.",
  },
  {
    title: "Sua agência conduz o cliente",
    text: "A apresentação, a reunião, o relacionamento e a percepção de valor continuam com sua agência.",
  },
];

const whiteLabelItems = [
  ["Diagnósticos estratégicos", "Leituras de presença orgânica, oportunidades, riscos e próximos passos."],
  ["Roadmaps 90 dias", "Planos de evolução com prioridades, impacto, sequência e justificativa."],
  ["Estudos de autoridade de entidade", "Análises de reputação, contexto, sinais públicos, dados estruturados e confiança digital."],
  ["GEO & AI Readiness", "Preparação estratégica para nova busca, mecanismos de resposta e ambientes generativos."],
  ["Auditorias técnicas e on-page", "Análises de estrutura, indexação, páginas, headings, metadados, arquitetura e performance."],
  ["Arquitetura de conteúdo", "Mapeamento de intenção, clusters, páginas estratégicas e oportunidades de jornada."],
  ["Materiais para reunião", "Argumentos, mapas, insights e direcionamentos para apoiar apresentação ao cliente."],
  ["Ciclos de evolução orgânica", "Acompanhamento recorrente com aprendizados, prioridades e próximos movimentos."],
];

const backstageLevels = [
  {
    title: "Bastidor Invisível",
    text: "A AUDITSEO não aparece para o cliente final. Sua agência recebe a inteligência, adapta a comunicação e conduz tudo.",
    ideal: "agências que querem manter 100% da relação e apresentação.",
  },
  {
    title: "Bastidor Assistido",
    text: "A AUDITSEO apoia sua agência com materiais, argumentos e preparação para reuniões estratégicas, sem contato direto com o cliente.",
    ideal: "contas importantes, renovações, propostas e situações que exigem mais profundidade.",
  },
  {
    title: "Bastidor Consultivo",
    text: "A AUDITSEO pode participar de forma controlada em reuniões específicas, sempre como apoio técnico da agência, quando fizer sentido.",
    ideal: "clientes estratégicos, projetos complexos ou contas que exigem validação especializada.",
  },
];

const deliveryFlow = [
  ["Briefing da conta", "Entendemos o cliente, o histórico, o momento da relação e o objetivo da agência."],
  ["Leitura estratégica", "Mapeamos cenário, riscos, oportunidades e sinais relevantes."],
  ["Estruturação da entrega", "Transformamos análise em diagnóstico, roadmap, orientação ou material white-label."],
  ["Validação e alinhamento", "Ajustamos linguagem, profundidade e formato para o padrão da agência."],
  ["Uso pela agência", "Sua equipe apresenta, conduz, vende, renova ou expande a conta com mais clareza."],
];

const governanceCards = [
  ["Confidencialidade comercial", "A AUDITSEO não disputa relacionamento, proposta ou negociação com o cliente da agência."],
  ["Marca da agência preservada", "Os materiais podem ser adaptados para o padrão visual, verbal e comercial da sua operação."],
  ["Dados com critério", "As análises usam apenas informações necessárias para o escopo definido, com responsabilidade e contexto."],
  ["IA com supervisão", "Tecnologia pode apoiar análise e organização, mas a direção estratégica passa por validação especializada."],
  ["Comunicação controlada", "Qualquer participação externa da AUDITSEO só acontece se a agência desejar e autorizar."],
  ["Protagonismo da agência", "A agência mantém a condução da conta, a relação com o cliente e a percepção de valor."],
];

const agencyControls = [
  "relacionamento com o cliente",
  "apresentação da entrega",
  "narrativa comercial",
  "proposta e precificação",
  "frequência de reuniões",
  "gestão da conta",
  "decisões sobre exposição da AUDITSEO",
];

const auditseoSupports = [
  "análise estratégica",
  "SEO/GEO",
  "autoridade de entidade",
  "dados estruturados",
  "diagnóstico",
  "roadmap",
  "inteligência de busca",
  "recomendações técnicas e estratégicas",
];

const whiteLabelScenarios = [
  ["Cliente pedindo SEO mais estratégico", "Quando a conta exige mais profundidade do que relatórios e ajustes básicos."],
  ["Cliente perguntando sobre IA e nova busca", "Quando a agência quer responder com método, não com discurso genérico."],
  ["Projeto com queda ou estagnação", "Quando é preciso entender causa, prioridade e caminho de recuperação."],
  ["Conta em risco de renovação", "Quando a agência precisa mostrar direção, próximos passos e evolução."],
  ["Agência expandindo portfólio", "Quando o objetivo é oferecer novas soluções sem criar um time interno do zero."],
  ["Proposta para cliente high-ticket", "Quando confiança, autoridade e validação pesam mais do que volume de tráfego."],
];

const faqs = [
  [
    "A AUDITSEO aparece para meu cliente?",
    "Não, se esse for o modelo definido. A parceria pode ser totalmente white-label, com sua agência conduzindo toda a comunicação.",
  ],
  [
    "A AUDITSEO pode disputar meu cliente?",
    "Não. A AUDITSEO atua como retaguarda estratégica da agência. O relacionamento, a negociação e a gestão da conta continuam com sua operação.",
  ],
  [
    "Posso usar os materiais com a marca da minha agência?",
    "Sim. A entrega pode ser adaptada ao padrão visual, verbal e comercial da sua agência, conforme o modelo de parceria.",
  ],
  [
    "Minha equipe precisa executar tudo?",
    "Depende do escopo. A AUDITSEO pode atuar com diagnóstico, estratégia, roadmap, orientação e suporte recorrente. O modelo é definido conforme a necessidade da agência.",
  ],
  [
    "Vocês usam IA nos projetos?",
    "A AUDITSEO utiliza tecnologia e análise assistida para acelerar leitura, organização e priorização, mas a direção estratégica passa por validação especializada.",
  ],
  [
    "Posso começar com apenas um cliente?",
    "Sim. Muitas parcerias podem começar com um diagnóstico, um roadmap ou um projeto específico antes de evoluir para recorrência.",
  ],
  [
    "O cliente final precisa saber que existe a AUDITSEO?",
    "Não necessariamente. Isso depende do nível de bastidor escolhido pela agência.",
  ],
];

export default function WhiteLabelPage({ onNavigate }: WhiteLabelPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageSchema = "white-label";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: "SEO White-Label para Agências | AUDITSEO",
          url: `https://www.auditseo.com.br/white-label`,
          description:
            "Parceria white-label de SEO, GEO e Search Intelligence para agências entregarem inteligência orgânica aos clientes mantendo marca, relacionamento e protagonismo.",
        },
        {
          "@type": "Service",
          name: "SEO, GEO e Search Intelligence white-label para agências",
          provider: { "@type": "Organization", name: "AUDITSEO" },
          serviceType: "Search Intelligence white-label",
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const scrollToHow = () => {
    const target = document.getElementById("white-label-como-funciona");
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - 82, behavior: "smooth" });
  };

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <style>{`
        @keyframes whiteLabelFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -8px, 0); }
        }

        @keyframes whiteLabelPulse {
          0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 26px rgba(178,132,83,0.24)); }
          50% { opacity: 1; filter: drop-shadow(0 0 42px rgba(178,132,83,0.40)); }
        }

        @keyframes whiteLabelParticle {
          0%, 100% { opacity: 0.14; transform: translate3d(0, 0, 0); }
          50% { opacity: 0.42; transform: translate3d(8px, -10px, 0); }
        }

        @keyframes whiteLabelLine {
          from { stroke-dashoffset: 120; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      <section id="white-label" className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-[112px] md:pb-20 md:pt-[128px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_35%,rgba(178,132,83,0.17),transparent_35%),linear-gradient(135deg,rgba(224,211,195,0.045),transparent_44%)]" />
        <div className="container relative z-10 mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-12 xl:gap-16">
            <div className="lg:col-span-6">
              <span className="mb-5 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
                WHITE-LABEL PARA AGÊNCIAS
              </span>
              <h1 className="max-w-[800px] font-display text-[clamp(54px,5.4vw,82px)] font-bold leading-[1.02] tracking-[-0.045em] text-[#f8f8f8]">
                Sua agência na frente. A AUDITSEO nos bastidores.
              </h1>
              <p className="mt-8 max-w-[720px] text-[clamp(18px,1.35vw,22px)] leading-[1.55] text-[rgba(248,248,248,0.76)]">
                Estruturamos SEO, GEO, autoridade e inteligência de busca como uma camada white-label para sua agência entregar mais profundidade, clareza e evolução aos clientes sem expor fornecedores ou ampliar equipe interna.
              </p>
              <p className="mt-[22px] max-w-[620px] text-[16px] leading-[1.5] text-[#e0d3c3]/[0.78]">
                Você conduz o relacionamento. Nós sustentamos a inteligência por trás da entrega.
              </p>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton onClick={() => onNavigate("diagnostico")}>Avaliar parceria white-label</PrimaryButton>
                <button
                  onClick={scrollToHow}
                  className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                >
                  Ver como funciona
                </button>
              </div>
              <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.08em] text-[#8c8275]">
                Confidencialidade · Bastidores · Entrega adaptável · Governança estratégica
              </p>
            </div>
            <div className="lg:col-span-6">
              <WhiteLabelVisual />
            </div>
          </div>
        </div>
      </section>

      <section id="materiais-white-label" className="scroll-mt-28 bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1080px] px-6 text-center xl:px-12">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">VISÃO WHITE-LABEL</span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[34px] font-bold leading-[1.12] tracking-[-0.03em] text-[#f8f8f8] md:text-[52px]">
            White-label não é esconder um fornecedor. É <span className="text-[#b28453]">proteger o protagonismo da agência</span>.
          </h2>
          <div className="mx-auto mt-9 grid max-w-4xl gap-7 text-lg leading-[1.75] text-[#f8f8f8]/70 md:text-xl">
            <p>
              Em uma parceria white-label bem construída, o cliente final não precisa enxergar a estrutura por trás da entrega. Ele precisa perceber{" "}
              <span className="text-[#b28453]">clareza</span>, <span className="text-[#b28453]">direção</span>,{" "}
              <span className="text-[#b28453]">evolução</span> e confiança na agência que conduz a conta.
            </p>
            <p>
              A AUDITSEO atua nessa <span className="text-[#b28453]">camada invisível</span>: organizando inteligência orgânica, estratégia e critérios técnicos para que sua agência entregue mais valor sem abrir mão da{" "}
              <span className="text-[#b28453]">marca</span>, do <span className="text-[#b28453]">relacionamento</span> e da{" "}
              <span className="text-[#b28453]">autoridade comercial</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            dark
            eyebrow="Bastidor estratégico"
            title="Como a AUDITSEO entra sem aparecer para o cliente final"
            text="A parceria é desenhada para fortalecer a entrega da agência, não para substituir sua relação com o cliente."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {operationSteps.map((step, index) => (
              <article key={step.title} className="rounded-[22px] border border-[#11100f]/12 bg-[#f8f8f8]/42 p-7 shadow-[0_20px_70px_rgba(17,16,15,0.10)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b28453]/50 bg-[#11100f] font-mono text-sm font-bold text-[#e0d3c3]">
                  {index + 1}
                </span>
                <h3 className="mt-7 font-display text-2xl font-bold leading-[1.15]">{step.title}</h3>
                <p className="mt-5 text-sm leading-[1.7] text-[#11100f]/70">{step.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-[22px] border border-[#b28453]/32 bg-[#11100f] p-7 text-center text-lg font-semibold leading-[1.55] text-[#e0d3c3] md:p-9 md:text-2xl">
            O cliente final vê a agência como parceira estratégica. A AUDITSEO sustenta a profundidade por trás da entrega.
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            eyebrow="Marca da agência"
            title="O que pode ser entregue com a marca da sua agência"
            text="A AUDITSEO estrutura a inteligência por trás de diferentes formatos de entrega, de diagnósticos pontuais a ciclos recorrentes."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whiteLabelItems.map(([title, text], index) => (
              <article key={title} className="min-h-[245px] rounded-[24px] border border-[#b28453]/20 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-1 hover:border-[#b28453]/44">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#b28453]/10 font-mono text-xs font-bold text-[#e0d3c3]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-7 font-display text-2xl font-bold leading-[1.12] text-[#f8f8f8]">{title}</h3>
                <p className="mt-5 text-sm leading-[1.7] text-[#f8f8f8]/66">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            dark
            center
            eyebrow="Níveis de bastidor"
            title="Níveis de atuação white-label"
            text="A parceria pode ser adaptada ao grau de exposição, envolvimento e suporte que sua agência deseja."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {backstageLevels.map((level, index) => (
              <article key={level.title} className="rounded-[26px] border border-[#11100f]/12 bg-[#f8f8f8]/42 p-8 shadow-[0_20px_70px_rgba(17,16,15,0.10)]">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#6d5132]">0{index + 1}</span>
                <h3 className="mt-5 font-display text-3xl font-bold leading-[1.12]">{level.title}</h3>
                <p className="mt-5 text-sm leading-[1.7] text-[#11100f]/70">{level.text}</p>
                <div className="mt-7 rounded-[18px] border border-[#b28453]/30 bg-[#11100f] p-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">Ideal para</p>
                  <p className="mt-2 text-sm font-semibold leading-[1.6] text-[#e0d3c3]">{level.ideal}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-[1.7] text-[#11100f]/70">
            O nível de atuação é definido caso a caso, respeitando a estratégia comercial da agência.
          </p>
        </div>
      </section>

      <section id="white-label-como-funciona" className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Fluxo de entrega"
            title="Uma operação pensada para não gerar atrito na sua agência"
            text="A AUDITSEO não entra para criar mais complexidade. Entra para organizar inteligência, reduzir incerteza e dar suporte estratégico à entrega."
          />
          <div className="mt-14 space-y-5">
            {deliveryFlow.map(([title, text], index) => (
              <article key={title} className="grid gap-5 rounded-[24px] border border-[#b28453]/20 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-6 md:grid-cols-[88px_0.8fr_1.4fr] md:items-center md:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#b28453]/10 font-mono text-sm font-bold text-[#e0d3c3]">
                  {index + 1}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#f8f8f8]">{title}</h3>
                <p className="text-sm leading-[1.7] text-[#f8f8f8]/66">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] pb-24 md:pb-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Governança"
            title="Governança antes de exposição"
            text="A parceria white-label precisa proteger a relação da agência com o cliente. Por isso, a atuação da AUDITSEO segue critérios claros de confidencialidade, contexto e validação."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {governanceCards.map(([title, text], index) => (
              <article key={title} className="rounded-[22px] border border-[#b28453]/20 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#b28453]/10 text-[#b28453]">
                  {index === 0 ? <LockKeyhole size={18} /> : index === 1 ? <Sparkles size={18} /> : index === 2 ? <ShieldCheck size={18} /> : index === 3 ? <Compass size={18} /> : index === 4 ? <EyeOff size={18} /> : <Users size={18} />}
                </div>
                <h3 className="font-display text-2xl font-bold leading-[1.16] text-[#f8f8f8]">{title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/66">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            dark
            center
            eyebrow="Controle da relação"
            title="Sua agência continua no controle da relação"
            text="O modelo white-label foi pensado para preservar o que mais importa: a confiança entre sua agência e o cliente."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <ControlPanel title="Sua agência controla" items={agencyControls} />
            <ControlPanel title="A AUDITSEO sustenta" items={auditseoSupports} highlighted />
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center font-display text-2xl font-bold leading-[1.35] text-[#11100f]">
            A AUDITSEO não ocupa o lugar da agência. Ela fortalece o que a agência consegue entregar.
          </p>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Quando usar"
            title="Quando o modelo white-label faz mais sentido"
            text="A parceria é especialmente útil quando sua agência enxerga uma oportunidade, mas não quer ou não pode montar uma estrutura interna especializada naquele momento."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whiteLabelScenarios.map(([title, text], index) => (
              <article key={title} className="rounded-[22px] border border-[#b28453]/20 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-display text-2xl font-bold leading-[1.16] text-[#f8f8f8]">{title}</h3>
                <p className="mt-5 text-sm leading-[1.7] text-[#f8f8f8]/66">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1080px] px-6 xl:px-12">
          <SectionHeader dark center eyebrow="Objeções comuns" title="Perguntas comuns sobre a parceria white-label" />
          <div className="mt-12 divide-y divide-[#11100f]/10 overflow-hidden rounded-[18px] border border-[#11100f]/12 bg-[#f8f8f8]/48 shadow-[0_20px_70px_rgba(17,16,15,0.10)]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-6 text-left md:px-8">
                  <h3 className="font-display text-lg font-bold text-[#11100f]">{question}</h3>
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#b28453] transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-6 text-sm leading-[1.7] text-[#11100f]/68 md:px-8">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1080px] rounded-[8px] border border-[#b28453]/35 bg-[#171614] px-7 py-14 text-center shadow-2xl shadow-black/35 md:px-14 md:py-18">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">PARCERIA WHITE-LABEL</span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[34px] font-bold leading-[1.08] sm:text-[44px] md:text-[58px]">
            Quer ter uma retaguarda estratégica sem expor sua operação?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.7] text-[#f8f8f8]/70 md:text-lg">
            Vamos avaliar como a AUDITSEO pode atuar nos bastidores da sua agência em SEO, GEO, autoridade e inteligência de busca.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryButton onClick={() => onNavigate("diagnostico")}>Avaliar parceria white-label</PrimaryButton>
            <button
              onClick={() => onNavigate("solucoes")}
              className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
            >
              Conhecer soluções
            </button>
          </div>
          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.1em] text-[#8c8275]">
            A primeira conversa é para entender sua agência, sua carteira e o nível ideal de bastidor.
          </p>
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

function WhiteLabelVisual() {
  const supportNodes = [
    { label: "Diagnóstico", x: 28, y: 18 },
    { label: "Roadmap", x: 76, y: 22 },
    { label: "GEO", x: 86, y: 52 },
    { label: "Autoridade", x: 68, y: 82 },
    { label: "Schema", x: 28, y: 82 },
    { label: "Governança", x: 14, y: 52 },
  ];

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
            animation: `whiteLabelParticle ${7 + (index % 6)}s ease-in-out infinite`,
            animationDelay: `${index * 0.18}s`,
          }}
        />
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 600 520" aria-hidden="true">
        <defs>
          <linearGradient id="whiteLabelLineGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(178,132,83,0.08)" />
            <stop offset="50%" stopColor="rgba(224,211,195,0.42)" />
            <stop offset="100%" stopColor="rgba(178,132,83,0.08)" />
          </linearGradient>
        </defs>
        {supportNodes.map((node) => (
          <line
            key={node.label}
            x1="300"
            y1="260"
            x2={(node.x / 100) * 600}
            y2={(node.y / 100) * 520}
            stroke="url(#whiteLabelLineGradient)"
            strokeWidth="1"
            strokeDasharray="6 10"
            style={{ animation: "whiteLabelLine 14s linear infinite" }}
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 z-20 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b28453]/18 bg-[#11100f]/20 shadow-[0_0_90px_rgba(178,132,83,0.18)]" />
      <div
        className="absolute left-1/2 top-1/2 z-30 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#b28453]/42 bg-[radial-gradient(circle_at_35%_30%,rgba(224,211,195,0.22),rgba(178,132,83,0.18),rgba(17,16,15,0.96)_68%)] shadow-[0_0_70px_rgba(178,132,83,0.26)]"
        style={{ animation: "whiteLabelPulse 6s ease-in-out infinite" }}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#11100f]/82 text-center">
          <span className="font-display text-base font-bold tracking-[0.10em] text-[#e0d3c3]">SUA MARCA</span>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 items-end justify-center rounded-full border border-[#b28453]/20 pb-7">
        <span className="rounded-full border border-[#b28453]/28 bg-[#11100f]/82 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
          AUDITSEO nos bastidores
        </span>
      </div>

      {supportNodes.map((node, index) => (
        <div
          key={node.label}
          className="absolute z-40 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%`, animation: `whiteLabelFloat ${8 + index}s ease-in-out infinite`, animationDelay: `${index * 0.35}s` }}
        >
          <div className="rounded-full border border-[#b28453]/32 bg-[#11100f]/86 px-4 py-2 shadow-[0_16px_42px_rgba(0,0,0,0.34)] backdrop-blur-sm">
            <span className="font-display text-sm font-bold text-[#f8f8f8]">{node.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ControlPanel({ title, items, highlighted = false }: { title: string; items: string[]; highlighted?: boolean }) {
  return (
    <article className={`rounded-[28px] border p-7 md:p-10 ${highlighted ? "border-[#b28453]/35 bg-[#11100f] text-[#f8f8f8]" : "border-[#11100f]/12 bg-[#f8f8f8]/45 text-[#11100f]"}`}>
      <h3 className="font-display text-3xl font-bold">{title}</h3>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className={`flex gap-3 text-sm leading-[1.65] ${highlighted ? "text-[#f8f8f8]/72" : "text-[#11100f]/72"}`}>
            {highlighted ? <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#b28453]" /> : <CircleDot className="mt-1 h-4 w-4 shrink-0 text-[#6d5132]" />}
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
