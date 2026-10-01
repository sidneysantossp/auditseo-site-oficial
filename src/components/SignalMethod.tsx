import type { ReactNode } from "react";
import { CornerDownRight, Compass, Network, Award, Milestone, Lightbulb } from "lucide-react";

interface SignalStep {
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  icon?: ReactNode;
}

interface SignalMethodProps {
  onCtaClick: (targetId: string) => void;
  ctaText?: string;
  subtitleText?: string;
  steps?: SignalStep[];
  footnote?: string;
}

export default function SignalMethod({ onCtaClick, ctaText, subtitleText, steps: stepsOverride, footnote }: SignalMethodProps) {
  const defaultIcons = [
    <CornerDownRight size={20} className="text-[#8c613c]" />,
    <Compass size={20} className="text-[#8c613c]" />,
    <Network size={20} className="text-[#8c613c]" />,
    <Award size={20} className="text-[#8c613c]" />,
    <Milestone size={20} className="text-[#8c613c]" />,
    <Lightbulb size={20} className="text-[#8c613c]" />,
  ];
  const defaultSteps: SignalStep[] = [

    {
      letter: "S",
      title: "Search Diagnosis",
      subtitle: "Antes de otimizar, entendemos onde está a oportunidade.",
      description: "Mapeamos o cenário real de visibilidade orgânica do cliente: saúde técnica do site, concorrentes diretos, lacunas temáticas, volume regional e auditoria de presença em buscadores tradicionais e modelos de IA.",
      icon: <CornerDownRight size={20} className="text-[#8c613c]" />
    },
    {
      letter: "I",
      title: "Intent Mapping",
      subtitle: "SEO não começa na palavra-chave. Começa na intenção do usuário.",
      description: "Identificamos as intenções de busca que realmente movem o ponteiro comercial de cada negócio: descoberta informativa, consideração/comparação neutra, decisão geográfica e etapas imediatas de conversão.",
      icon: <Compass size={20} className="text-[#8c613c]" />
    },
    {
      letter: "G",
      title: "GEO & AI Readiness",
      subtitle: "Seu cliente precisa ser encontrado e entendido pelas IAs.",
      description: "Preparamos a infraestrutura digital da marca para ser processável, citável e recomendável pelos principais mecanismos generativos do mercado (como AI Overviews do Google, ChatGPT, Gemini, Copilot e Perplexity).",
      icon: <Network size={20} className="text-[#8c613c]" />
    },
    {
      letter: "N",
      title: "Narrative & Entity Authority",
      subtitle: "Autoridade não nasce de um único schema. Ela nasce da consistência entre marca, conteúdo, reputação, dados e presença pública.",
      description: "Organizamos a narrativa, a estrutura semântica e os sinais de autoridade que ajudam buscadores, IAs e usuários a entenderem por que aquela marca deve ser considerada uma opção confiável.",
      icon: <Award size={20} className="text-[#8c613c]" />
    },
    {
      letter: "A",
      title: "Action Roadmap",
      subtitle: "Menos achismo. Mais direção.",
      description: "Transformamos o diagnóstico semântico em planos táticos de execução rápida de 90 dias: tarefas claras, grau de esforço, priorização de impacto e responsáveis pela codificação ou redação.",
      icon: <Milestone size={20} className="text-[#8c613c]" />
    },
    {
      letter: "L",
      title: "Learning Loop",
      subtitle: "SEO não é campanha estática. É um sistema constante de evolução.",
      description: "Acompanhamos indexações, tráfego ganho, flutuações e novas oportunidades, fornecendo inteligência para ajustar o roadmap mês após mês à luz das novidades estruturais de busca.",
      icon: <Lightbulb size={20} className="text-[#8c613c]" />
    }
  ];

  const steps: SignalStep[] = (stepsOverride && stepsOverride.length ? stepsOverride : defaultSteps).map((st, i) => ({
    ...st,
    icon: st.icon ?? defaultIcons[i % defaultIcons.length],
  }));



  return (
    <section
      id="signal"
      className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
        
        {/* HEADING STANDARD BLOCK */}
        <div className="text-center flex flex-col items-center mb-16 md:mb-24">
          <span className="text-[#7a522f] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
            A METODOLOGIA EXCLUSIVA AUDITSEO
          </span>
          <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#11100f] leading-[1.1] tracking-tight">
            Método S.I.G.N.A.L
          </h2>
          <div className="w-[140px] h-[4px] bg-[#b28453] mt-6 mb-8" />
          <p className="text-[#2a2927] text-base md:text-lg lg:text-xl font-normal max-w-3xl leading-[1.6]">
            {subtitleText || "Clareza estratégica para transmitir direção. Nosso papel não é acumular relatórios complexos impossíveis de ler. É simplificar a busca em decisões acionáveis e transparentes que a sua empresa consegue acompanhar e sustentar."}
          </p>
        </div>

        {/* TIMELINE WRAPPER (DESKTOP: ALTERNATING, MOBILE: SIMPLE LIST) */}
        <div className="relative max-w-5xl mx-auto pt-4 pb-12">
          
          {/* Central spine line for desktop */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-1 bg-[#b28453] transform -translate-x-1/2 hidden md:block" />

          {/* Simple vertical list track for ultra small displays */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#b28453] md:hidden" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((st, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={st.letter}
                  className="relative flex flex-col items-start md:flex-row md:items-center"
                >
                  <div className="absolute left-6 z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#b28453] bg-[#11100f] font-display text-lg font-bold text-[#e0d3c3] shadow-lg shadow-[#11100f]/20 md:flex lg:left-1/2">
                    {st.letter}
                  </div>

                  <div className="absolute left-6 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#b28453] bg-[#11100f] font-display text-xs font-bold text-[#e0d3c3] md:hidden">
                    {st.letter}
                  </div>

                  <div className="grid w-full grid-cols-1 pl-12 md:grid-cols-12 md:pl-0">
                    <div
                      className={`md:col-span-5 ${
                        isEven ? "md:col-start-1 lg:pr-12" : "md:col-start-8 lg:pl-12"
                      }`}
                    >
                      <div className="rounded-xl border border-[#b28453]/10 bg-[#f4eee5] p-5 text-left shadow-[0_14px_36px_rgba(17,16,15,0.05)] md:p-6 lg:p-8">
                        <div className="mb-4 flex items-center justify-between space-x-2">
                          <span className="rounded-lg border border-[#b28453]/20 bg-[#b28453]/15 p-2">
                            {st.icon}
                          </span>
                          <span className="hidden font-mono text-xs font-bold uppercase tracking-widest text-[#7a522f] lg:inline">
                            STEP_0{idx + 1}
                          </span>
                        </div>
                        <h3 className="mb-1 font-display text-[18px] font-bold text-[#11100f] sm:text-[22px]">
                          {st.letter} — {st.title}
                        </h3>
                        <p className="mb-3 text-[13px] font-semibold italic text-[#7a522f]">
                          {st.subtitle}
                        </p>
                        <p className="text-[14px] leading-[1.6] text-[#2a2927]">
                          {st.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
        {footnote ? (
          <div className="text-center max-w-3xl mx-auto">
            <p className="border-l-4 border-[#b28453] pl-6 py-3 bg-[#f4eee5] rounded-r-lg shadow-sm font-display text-base sm:text-[17px] md:text-lg font-bold text-[#11100f] italic leading-relaxed text-left">
              {footnote}
            </p>
          </div>
        ) : null}


        {/* BOTTOM REDIRECT CTA */}
        <div className="text-center mt-12">
          <button
            id="signal-bottom-cta"
            onClick={() => onCtaClick("diagnostico")}
            className="bg-[#11100f] text-[#ffffff] px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-300 hover:bg-[#b28453] hover:text-[#ffffff] cursor-pointer"
          >
            {ctaText || "Solicitar avaliação estratégica"}
          </button>
        </div>

      </div>
    </section>
  );
}
