import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  CircleDollarSign,
  Eye,
  LineChart,
  MessageCircle,
  MousePointerClick,
  Network,
  Search,
  Shield,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";

type ProposalPageProps = {
  onNavigate?: (targetId: string) => void;
};

const startCards = [
  {
    icon: Sparkles,
    title: "Autoridade subutilizada",
    text: "Os sinais de confiança existem, mas ainda não estão organizados para sustentar diferenciação e decisão.",
  },
  {
    icon: Network,
    title: "Demanda fragmentada",
    text: "As páginas atuais não cobrem com clareza os diferentes momentos da pesquisa do paciente.",
  },
  {
    icon: UserRound,
    title: "Experiência sem direção",
    text: "O visitante encontra informação, porém não percorre uma jornada objetiva até o agendamento.",
  },
  {
    icon: BarChart3,
    title: "Medição incompleta",
    text: "A evolução precisa chegar aos números que importam: impressões, cliques, tráfego e contatos.",
  },
];

const growthCards = [
  {
    icon: Search,
    title: "1. Aparecer para mais pesquisas relevantes",
    text: "Reorganizamos o site para ampliar cobertura orgânica sobre sintomas, tratamentos e buscas ligadas à especialidade.",
  },
  {
    icon: MousePointerClick,
    title: "2. Transformar impressões em cliques",
    text: "Melhoramos títulos, propostas e páginas para aumentar a escolha do usuário nos resultados de busca.",
  },
  {
    icon: MessageCircle,
    title: "3. Transformar tráfego em oportunidades",
    text: "A jornada do paciente passa a conduzir com mais clareza até WhatsApp, formulário e contato.",
  },
  {
    icon: Shield,
    title: "4. Consolidar autoridade médica",
    text: "Formação, reputação, tecnologia e produção científica deixam de ser apenas informação e passam a sustentar decisão.",
  },
];

const signalCards: [string, string, string, LucideIcon][] = [
  ["S", "Search Diagnosis", "Mapeamos visibilidade orgânica, lacunas temáticas, concorrentes e oportunidades reais de crescimento no ecossistema de busca.", Search],
  ["I", "Intent Architecture", "Definimos qual página responde a cada intenção e como o paciente avança da dúvida para a decisão.", Target],
  ["G", "Generative Presence", "Preparamos a marca para Google AI Overviews, ChatGPT, Gemini e outras buscas assistidas por IA.", Sparkles],
  ["N", "Notability & Entity", "Consolidamos entidade, credenciais, reputação e sinais externos de autoridade do Dr. Felipe.", Shield],
  ["A", "Action Roadmap", "Priorizamos os movimentos de maior impacto clínico, comercial e orgânico para o momento do projeto.", LineChart],
  ["L", "Learning Loop", "Evoluímos continuamente com base em Search Console, Analytics e sinais reais de conversão.", BarChart3],
];

const metricCards = [
  {
    icon: Search,
    title: "Google Search Console",
    items: ["Impressões orgânicas", "Cliques", "CTR", "Consultas de pesquisa", "Páginas com crescimento"],
  },
  {
    icon: BarChart3,
    title: "Google Analytics",
    items: ["Usuários orgânicos", "Páginas de entrada", "Tráfego qualificado", "Eventos de navegação", "Comportamento por página"],
  },
  {
    icon: Target,
    title: "Conversões",
    items: ["Cliques no WhatsApp", "Cliques em telefone", "Formulários enviados", "Oportunidades de contato", "Indicadores de geração de demanda"],
  },
];

const flowItems: [string, LucideIcon][] = [
  ["Impressões", Eye],
  ["Cliques", MousePointerClick],
  ["Tráfego qualificado", UserRound],
  ["WhatsApp", MessageCircle],
];

const operationItems: [string, LucideIcon][] = [
  ["Atuação contínua e estratégica", LineChart],
  ["Sem reuniões mensais obrigatórias", Calendar],
  ["Comunicação e validações apenas quando necessário", MessageCircle],
  ["Ajustes guiados por Search Console, Analytics e conversões", BarChart3],
];

const investmentItems = [
  ["Investimento mensal", "R$ [VALOR]"],
  ["Prazo inicial recomendado", "[6 ou 12 meses]"],
  ["Início", "após aprovação e liberação dos acessos"],
  ["KPIs acompanhados", "impressões, cliques, tráfego e WhatsApp"],
];

function ProposalTopbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#b28453]/12 bg-[#11100f]/96 backdrop-blur-md">
      <div className="mx-auto flex h-[82px] max-w-[1320px] items-center justify-between px-6 md:px-12">
        <a href="/" className="inline-flex items-center">
          <img
            src="/auditseo-logo.png"
            alt="AUDITSEO - Search Intelligence Partner"
            className="h-[38px] w-auto object-contain md:h-[46px]"
          />
        </a>
        <div className="hidden items-center gap-3 text-right md:flex">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#b28453]">
            Proposta confidencial · Dr. Felipe Barão
          </span>
        </div>
      </div>
    </header>
  );
}

function HeroConstellation() {
  const nodes = [
    "left-[10%] top-[36%]",
    "left-[30%] top-[19%]",
    "right-[28%] top-[26%]",
    "right-[8%] top-[42%]",
    "left-[20%] bottom-[18%]",
    "right-[20%] bottom-[22%]",
    "left-[48%] bottom-[7%]",
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_54%,rgba(178,132,83,0.22),transparent_34%)]" />
      <div className="absolute left-[56%] top-[52%] h-[124px] w-[124px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[8px] border-[#b28453] shadow-[0_0_90px_rgba(178,132,83,0.45)]">
        <div className="absolute bottom-[-36px] right-[-24px] h-14 w-5 rotate-[-42deg] rounded-full bg-[#b28453]" />
        <div className="absolute inset-[30px] rounded-full bg-[#f8f8f8] shadow-[0_0_42px_rgba(248,248,248,0.9)]" />
      </div>
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 540 540" fill="none">
        <path d="M92 202 L166 112 L276 146 L388 104 L498 226 L392 330 L276 496 L112 438 L92 202 Z" stroke="#b28453" strokeOpacity="0.35" />
        <path d="M166 112 L310 278 L498 226 M92 202 L310 278 L112 438 M276 146 L392 330" stroke="#b28453" strokeOpacity="0.22" />
        <circle cx="310" cy="278" r="118" stroke="#b28453" strokeOpacity="0.14" />
        <circle cx="310" cy="278" r="174" stroke="#b28453" strokeOpacity="0.1" />
      </svg>
      {nodes.map((position, index) => (
        <span
          key={position}
          className={`absolute ${position} h-2.5 w-2.5 rounded-full bg-[#f8f8f8] shadow-[0_0_28px_rgba(248,248,248,0.9)]`}
          style={{ opacity: index % 2 === 0 ? 0.95 : 0.68 }}
        />
      ))}
      <span className="absolute right-[16%] top-[15%] h-12 w-12 rounded-full border border-[#b28453]/55 shadow-[0_0_36px_rgba(178,132,83,0.25)]" />
      <span className="absolute bottom-[14%] left-[18%] h-10 w-10 rounded-full border border-[#b28453]/42 shadow-[0_0_32px_rgba(178,132,83,0.22)]" />
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  dark = true,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 max-w-4xl">
      <span className="mb-5 block font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#b28453]">
        {eyebrow}
      </span>
      <h2 className={`font-display text-[38px] font-bold leading-[1.02] tracking-[-0.045em] md:text-[62px] ${dark ? "text-[#f8f8f8]" : "text-[#11100f]"}`}>
        {title}
      </h2>
      <div className="mt-7 h-[2px] w-[86px] bg-[#b28453]" />
      {text && <p className={`mt-7 max-w-3xl text-base leading-[1.75] md:text-lg ${dark ? "text-[#f8f8f8]/72" : "text-[#11100f]/72"}`}>{text}</p>}
    </div>
  );
}

function DarkCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border border-[#b28453]/26 bg-[#11100f] p-6 shadow-[0_22px_70px_rgba(17,16,15,0.2)] ${className}`}
    >
      <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 bg-[radial-gradient(circle,rgba(178,132,83,0.14),transparent_66%)]" />
      {children}
    </div>
  );
}

function IconMedallion({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#b28453]/52 bg-[#b28453]/10 text-[#b28453] shadow-[0_0_28px_rgba(178,132,83,0.16)]">
      {children}
    </div>
  );
}

export default function PropostaDrFelipeBaraoPage({ onNavigate }: ProposalPageProps) {
  const contactMessage = encodeURIComponent("Olá, Sidney. Li a proposta do Dr. Felipe Barão e quero avançar na avaliação.");

  return (
    <main className="min-h-screen bg-[#11100f] text-[#f8f8f8]">
      <ProposalTopbar />

      <section className="relative min-h-screen overflow-hidden bg-[#11100f] pt-[132px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(178,132,83,0.18),transparent_34%),radial-gradient(circle_at_14%_18%,rgba(224,211,195,0.06),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,#e0d3c3_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-132px)] max-w-[1320px] grid-cols-1 items-center gap-10 px-6 pb-20 md:px-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="mb-7 block font-mono text-[11px] font-bold uppercase tracking-[0.19em] text-[#b28453]">
              Proposta confidencial · Dr. Felipe Barão
            </span>
            <h1 className="font-display text-[48px] font-black uppercase leading-[1.02] tracking-[-0.055em] text-[#f8f8f8] md:text-[78px]">
              Proposta de crescimento orgânico <span className="text-[#b28453]">e autoridade digital</span>
            </h1>
            <div className="mt-8 h-[2px] w-[118px] bg-[#b28453]" />
            <p className="mt-9 max-w-xl text-lg leading-[1.65] text-[#f8f8f8]/78 md:text-xl">
              Uma nova operação de busca para transformar autoridade médica em visibilidade, tráfego qualificado e oportunidades de consulta.
            </p>
            <div className="mt-11 flex flex-col gap-4 sm:flex-row">
              <a
                href="#modelo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b28453]/55 bg-[#11100f]/75 px-7 py-4 text-base font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453] hover:text-white"
              >
                Metodologia S.I.G.N.A.L
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <HeroConstellation />
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 h-px w-[82%] -translate-x-1/2 bg-gradient-to-r from-[#b28453]/0 via-[#b28453]/80 to-[#e0d3c3]/0" />
      </section>

      <section className="bg-[#e0d3c3] py-20 text-[#11100f] md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            dark={false}
            eyebrow="Ponto de partida"
            title="Dr. Felipe, este projeto não parte do zero."
            text="Sua formação, experiência clínica, produção científica, reputação e estrutura já formam uma base de autoridade que poucos profissionais possuem. O desafio está em transformar essa autoridade em uma presença digital proporcional ao seu valor profissional."
          />

          <div className="mb-10 flex flex-col gap-6 rounded-[28px] border border-[#b28453]/38 bg-[#efe3d4] p-7 md:flex-row md:items-center md:p-9">
            <IconMedallion>
              <Target size={28} />
            </IconMedallion>
            <p className="max-w-4xl font-display text-2xl font-bold leading-snug text-[#11100f] md:text-3xl">
              O problema atual não é a falta de conteúdo. É a falta de um sistema capaz de organizar autoridade, capturar demanda e conduzir o paciente até o contato.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {startCards.map((card) => {
              const Icon = card.icon;
              return (
                <DarkCard key={card.title} className="min-h-[220px]">
                  <IconMedallion>
                    <Icon size={24} />
                  </IconMedallion>
                  <h3 className="font-display text-2xl font-bold text-[#f8f8f8]">{card.title}</h3>
                  <div className="my-4 h-[2px] w-12 bg-[#b28453]" />
                  <p className="max-w-md text-base leading-[1.65] text-[#f8f8f8]/68">{card.text}</p>
                </DarkCard>
              );
            })}
          </div>

          <div className="mt-10 flex items-start gap-5 border-t border-[#b28453]/35 pt-8">
            <CheckCircle2 className="mt-1 shrink-0 text-[#b28453]" size={28} />
            <p className="max-w-4xl text-lg leading-[1.7] text-[#11100f]/76">
              A proposta da AUDITSEO é assumir essa transformação de ponta a ponta, com foco no resultado percebido nos dados - e não na exposição de uma lista mensal de tarefas.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#11100f] py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,#e0d3c3_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            eyebrow="Como o crescimento será gerado"
            title="A estratégia não será medida por tarefas. Será percebida em visibilidade, tráfego e demanda."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {growthCards.map((card) => {
              const Icon = card.icon;
              return (
                <DarkCard key={card.title} className="min-h-[250px] p-8">
                  <IconMedallion>
                    <Icon size={28} />
                  </IconMedallion>
                  <h3 className="font-display text-2xl font-bold leading-tight text-[#f8f8f8]">{card.title}</h3>
                  <div className="my-5 h-[2px] w-12 bg-[#b28453]" />
                  <p className="text-base leading-[1.7] text-[#f8f8f8]/70">{card.text}</p>
                </DarkCard>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-6 rounded-[28px] border border-[#b28453]/32 bg-[#171614] p-7 md:flex-row md:items-center md:p-9">
            <IconMedallion>
              <LineChart size={28} />
            </IconMedallion>
            <p className="max-w-4xl text-xl leading-[1.55] text-[#e0d3c3] md:text-2xl">
              Mais do que SEO tradicional, a proposta cria um <strong className="text-[#b28453]">sistema contínuo de aquisição, autoridade e conversão</strong> para a nova era da busca.
            </p>
          </div>
        </div>
      </section>

      <section id="modelo" className="bg-[#e0d3c3] py-20 text-[#11100f] md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            dark={false}
            eyebrow="Metodologia proprietária"
            title="Método S.I.G.N.A.L"
            text="Clareza estratégica para transformar autoridade médica em crescimento mensurável. A metodologia organiza diagnóstico, intenção, presença generativa, autoridade e evolução contínua."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {signalCards.map(([letter, title, text, Icon]) => (
              <DarkCard key={String(letter)} className="min-h-[280px]">
                <IconMedallion>
                  <Icon size={25} />
                </IconMedallion>
                <h3 className="font-display text-xl font-bold text-[#f8f8f8]">
                  {letter} - {title}
                </h3>
                <div className="my-4 h-[2px] w-12 bg-[#b28453]" />
                <p className="text-sm leading-[1.75] text-[#f8f8f8]/68">{text}</p>
              </DarkCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#11100f] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            eyebrow="Indicadores de acompanhamento"
            title="Sem checklist. Sem reunião mensal. Com evolução visível nos dados."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {metricCards.map((card) => {
              const Icon = card.icon;
              return (
                <DarkCard key={card.title} className="p-8">
                  <IconMedallion>
                    <Icon size={27} />
                  </IconMedallion>
                  <h3 className="font-display text-2xl font-bold text-[#f8f8f8]">{card.title}</h3>
                  <div className="my-5 h-[2px] w-12 bg-[#b28453]" />
                  <ul className="space-y-4">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-3 text-base text-[#f8f8f8]/70">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b28453]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </DarkCard>
              );
            })}
          </div>

          <div className="my-12 grid gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
            {flowItems.map(([label, Icon], index) => (
              <div key={String(label)} className="contents">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#171614] text-[#b28453] shadow-[0_0_42px_rgba(178,132,83,0.2)]">
                    <Icon size={34} />
                  </div>
                  <span className="mt-4 font-display text-xl font-bold text-[#b28453]">{label}</span>
                </div>
                {index < flowItems.length - 1 && <span className="hidden text-center text-3xl text-[#b28453]/75 md:block">→</span>}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 rounded-[28px] border border-[#b28453]/32 bg-[#171614] p-7 md:flex-row md:items-center md:p-9">
            <IconMedallion>
              <Sparkles size={28} />
            </IconMedallion>
            <p className="max-w-4xl text-xl leading-[1.55] text-[#e0d3c3] md:text-2xl">
              No início, o crescimento tende a aparecer primeiro em <strong className="text-[#b28453]">impressões e cobertura temática</strong>. Com a maturidade do projeto, esse avanço migra para <strong className="text-[#b28453]">cliques, tráfego qualificado e contatos</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e0d3c3] py-20 text-[#11100f] md:py-28">
        <div className="absolute right-[8%] top-[9%] hidden h-64 w-64 opacity-45 lg:block">
          <HeroConstellation />
        </div>
        <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            dark={false}
            eyebrow="Modelo de parceria"
            title="O cliente não precisa acompanhar tarefas. Precisa acompanhar evolução."
          />

          <div className="grid gap-7 lg:grid-cols-2">
            <DarkCard className="p-8 md:p-10">
              <IconMedallion>
                <Target size={27} />
              </IconMedallion>
              <h3 className="font-display text-3xl font-bold text-[#b28453]">Como a operação funciona</h3>
              <div className="mt-8 space-y-6">
                {operationItems.map(([label, Icon]) => (
                  <div key={String(label)} className="flex items-center gap-5 border-b border-[#b28453]/18 pb-5 last:border-b-0 last:pb-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#b28453]/34 text-[#b28453]">
                      <Icon size={22} />
                    </div>
                    <span className="text-lg leading-snug text-[#f8f8f8]/82">{label}</span>
                  </div>
                ))}
              </div>
            </DarkCard>

            <DarkCard className="p-8 md:p-10">
              <IconMedallion>
                <CircleDollarSign size={27} />
              </IconMedallion>
              <h3 className="font-display text-3xl font-bold text-[#b28453]">Investimento e estrutura</h3>
              <div className="mt-8 space-y-0">
                {investmentItems.map(([label, value]) => (
                  <div key={label} className="grid gap-2 border-b border-[#b28453]/18 py-5 first:pt-0 last:border-b-0">
                    <span className="text-sm uppercase tracking-[0.12em] text-[#f8f8f8]/55">{label}</span>
                    <strong className="text-xl text-[#e0d3c3]">{value}</strong>
                  </div>
                ))}
              </div>
            </DarkCard>
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-6 rounded-[28px] border border-[#b28453]/35 bg-[#efe3d4] p-7 md:flex-row md:items-center md:p-8">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#11100f] text-[#b28453]">
              <Target size={34} />
            </div>
            <p className="text-xl leading-[1.55] text-[#11100f]/78">
              O objetivo desta proposta não é vender uma lista de entregas. <strong className="text-[#11100f]">É construir um ativo digital capaz de ampliar a presença do Dr. Felipe e transformar visibilidade em demanda qualificada.</strong>
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
            <a
              href={`https://wa.me/5511996384376?text=${contactMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-[#11100f]"
            >
              Avançar com a proposta
              <ArrowRight size={18} />
            </a>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#11100f]/50">
              AUDITSEO · Search Intelligence Partner
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
