import { useState, type FormEvent, type ReactNode } from "react";
import {
  AlertTriangle, Award, BarChart3, Bot, CheckCircle2, Compass,
  FileText, Gauge, Globe, Layers3, Search, Send, ShieldCheck,
  Sparkles, Target, TrendingUp, Users
} from "lucide-react";
import SiteFooter from "./SiteFooter";
import NeuralSearchBrain from "./NeuralSearchBrain";
import SignalMethod from "./SignalMethod";

interface ConsultoriaPageProps {
  onNavigate: (targetId: string) => void;
}

const signalSteps = [
  {
    letter: "S",
    title: "Search Diagnosis",
    subtitle: "Leitura completa da presença atual.",
    description: "Analisamos presença, concorrência, oportunidades, riscos e gaps em mecanismos de busca, busca local e ambientes generativos.",
  },
  {
    letter: "I",
    title: "Intent Mapping",
    subtitle: "A decisão começa antes da palavra-chave.",
    description: "Mapeamos jornadas, dúvidas, necessidades e intenções que antecedem uma decisão de compra ou contratação.",
  },
  {
    letter: "G",
    title: "Generative Search Readiness",
    subtitle: "Preparo para ambientes generativos.",
    description: "Estruturamos os sinais que ajudam plataformas de inteligência artificial a compreender e considerar a empresa em suas respostas.",
  },
  {
    letter: "N",
    title: "Narrative & Entity Authority",
    subtitle: "Consistência entre marca, provas e presença pública.",
    description: "Construímos uma narrativa consistente sobre a empresa, seus especialistas, serviços, atributos e evidências de autoridade.",
  },
  {
    letter: "A",
    title: "Action Roadmap",
    subtitle: "Menos achismo. Mais direção.",
    description: "Transformamos os achados em um plano priorizado, com responsáveis, dependências, prazos e objetivos de negócio.",
  },
  {
    letter: "L",
    title: "Learning Loop",
    subtitle: "Um plano vivo, não um relatório final.",
    description: "Monitoramento contínuo, validação das implementações, análise dos resultados e atualização da estratégia a cada ciclo.",
  },
];

const faqItems = [
  { id: "ec-1", question: "A AUDITSEO é uma agência de SEO?", answer: "Não. Somos uma consultoria de Inteligência de Busca e Autoridade de Entidade. SEO faz parte da estratégia, mas nossa atuação conecta também reputação, conteúdo, dados estruturados, busca local, presença externa, plataformas generativas e conversão." },
  { id: "ec-2", question: "A AUDITSEO substitui minha equipe de marketing?", answer: "Não. Atuamos em parceria com sua equipe, fornecedores e especialistas, oferecendo direção estratégica, priorização, coordenação e validação das entregas." },
  { id: "ec-3", question: "Minha empresa precisa ter uma equipe interna?", answer: "Não necessariamente. O modelo de atuação é adaptado à estrutura disponível. Podemos orientar equipes existentes, coordenar fornecedores ou assumir frentes específicas de implementação." },
  { id: "ec-4", question: "A AUDITSEO garante que minha empresa será recomendada pelo ChatGPT ou pelo Google?", answer: "Nenhuma consultoria controla integralmente as respostas ou posições de plataformas terceiras. Nosso trabalho consiste em identificar e fortalecer os sinais que ampliam a capacidade da empresa de ser encontrada, compreendida, considerada, citada e recomendada." },
  { id: "ec-5", question: "Como o projeto é acompanhado?", answer: "O projeto é acompanhado por meio de reuniões, relatórios e um painel colaborativo próprio, no qual são organizados roadmap, prioridades, responsáveis, entregas, evidências, pendências e evolução dos indicadores." },
  { id: "ec-6", question: "Vocês utilizam inteligência artificial?", answer: "Sim. Utilizamos inteligência artificial e tecnologia proprietária para ampliar nossa capacidade de análise, monitoramento e organização. A estratégia, os critérios e a responsabilidade continuam sendo conduzidos pela AUDITSEO." },
  { id: "ec-7", question: "Quanto tempo leva para observar resultados?", answer: "O prazo depende do cenário inicial, da concorrência, da autoridade atual, da velocidade das implementações e dos objetivos do projeto. O diagnóstico inicial permite definir prioridades, dependências e expectativas mais realistas." },
  { id: "ec-8", question: "A AUDITSEO também executa as recomendações?", answer: "Depende do modelo contratado. Podemos atuar apenas na direção estratégica, colaborar com as equipes existentes ou assumir a implementação gerenciada de frentes específicas." },
];

export default function ConsultoriaPage({ onNavigate }: ConsultoriaPageProps) {
  const [formSent, setFormSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "", site: "", faturamento: "" });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 82, behavior: "smooth" });
  };

  const handleNav = (id: string) => {
    if (["inicio", "form-contato", "metodologia"].includes(id)) {
      if (id === "inicio") window.scrollTo({ top: 0, behavior: "smooth" });
      else scrollTo(id);
      return;
    }
    onNavigate(id);
  };

  const submitForm = (e: FormEvent) => { e.preventDefault(); setFormSent(true); };

  return (
    <main>
      {/* ===== 1. HERO ===== */}
      <section id="inicio" className="relative min-h-[820px] lg:min-h-[880px] bg-[#11100f] text-[#f8f8f8] flex items-center pt-[100px] md:pt-[110px] pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 top-[80px] lg:hidden pointer-events-none z-0 flex items-center justify-center">
          <div className="w-full max-w-[550px] aspect-[760/520] scale-[1.35] opacity-[0.35] -translate-y-20">
            <NeuralSearchBrain />
          </div>
        </div>
        <div className="container mx-auto px-[24px] md:px-[48px] max-w-[1320px] z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="text-[#a69580] text-[11px] font-mono font-semibold tracking-[0.16em] uppercase mb-4 opacity-90">CONSULTORIA DE INTELIGÊNCIA DE BUSCA</span>
              <h1 className="font-display font-bold text-[#f8f8f8] mb-8" style={{ fontSize: "clamp(22px, 2.05vw, 30px)", lineHeight: "1.06", letterSpacing: "-0.045em", maxWidth: "860px", textWrap: "balance" }}>
                Nós Construimos a Autoridade que sua empresa precisa para crescer nos Buscadores e IAs Generativas.
              </h1>
              <p className="text-[#e0d3c3] text-lg md:text-xl font-semibold mb-8" style={{ maxWidth: "700px", lineHeight: "1.55", letterSpacing: "-0.01em" }}>
                Identificamos o que limita sua visibilidade e coordenamos a estratégia para fortalecer presença, confiança e reconhecimento nas novas jornadas de busca.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollTo("form-contato")} className="bg-[#b28453] text-white px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-300 hover:bg-[#e0d3c3] hover:text-[#11100f] cursor-pointer">
                  Solicitar avaliação estratégica
                </button>
                <button onClick={() => scrollTo("metodologia")} className="border border-[#b28453]/45 text-[#f8f8f8] px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-[#b28453]/10">
                  Conhecer o método S.I.G.N.A.L.
                </button>
              </div>
              <div className="flex flex-wrap items-center lg:justify-start font-mono mt-8 select-none text-[#8c8275] gap-x-2 gap-y-2" style={{ opacity: 0.62, fontSize: "11px" }}>
                <span>Diagnóstico estratégico</span><span className="text-[#b28453]/30 font-bold">·</span>
                <span>Roadmap priorizado</span><span className="text-[#b28453]/30 font-bold">·</span>
                <span>Acompanhamento contínuo</span><span className="text-[#b28453]/30 font-bold">·</span>
                <span>Integração com suas equipes</span>
              </div>
            </div>
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center scale-[1.04] lg:scale-[1.06] lg:-translate-x-4 overflow-visible">
              <NeuralSearchBrain />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. A BUSCA MUDOU ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-left flex flex-col items-start mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">A BUSCA MUDOU</span>
            <h2 className="font-display text-[34px] sm:text-[42px] md:text-[50px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl">
              Na era anterior da busca, empresas disputavam posições. Agora disputam compreensão, confiança e recomendação.
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
            <p className="text-[#c9c9c9] text-base md:text-lg leading-relaxed max-w-3xl mb-4">
              A decisão do cliente já não acontece somente em uma página de resultados. Pessoas pesquisam no Google, exploram mapas, comparam avaliações, consultam especialistas, assistem a vídeos e fazem perguntas diretamente a plataformas de inteligência artificial.
            </p>
            <p className="text-[#c9c9c9] text-base md:text-lg leading-relaxed max-w-3xl">
              Nesse novo cenário, não basta ter um site ou aparecer para algumas palavras-chave. A empresa precisa construir uma presença clara, consistente e validada em diferentes ambientes digitais.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[36px]">
            {[
              { num: "01", title: "Ser encontrada", desc: "Aparecer nas jornadas, temas, serviços e localidades relevantes para o negócio." },
              { num: "02", title: "Ser compreendida", desc: "Deixar claro quem é a empresa, o que faz, para quem é indicada e em quais temas possui experiência." },
              { num: "03", title: "Ser validada", desc: "Apresentar sinais, provas e fontes que sustentem sua legitimidade e autoridade." },
              { num: "04", title: "Ser considerada", desc: "Entrar no conjunto de opções avaliadas por potenciais clientes, buscadores e sistemas generativos." },
              { num: "05", title: "Ser recomendada", desc: "Construir as condições necessárias para ampliar a probabilidade de citação, consideração e recomendação." },
              { num: "06", title: "Converter", desc: "Transformar visibilidade e confiança em contatos, agendamentos, oportunidades e receita." },
            ].map((box) => (
              <div key={box.num} className="group relative overflow-hidden min-h-[260px] p-[42px] rounded-[22px] transition-all duration-350 hover:-translate-y-2" style={{ background: "linear-gradient(145deg, rgba(31,30,28,0.98) 0%, rgba(17,16,15,0.98) 58%, rgba(11,11,10,1) 100%)", border: "1px solid rgba(178,132,83,0.34)", boxShadow: "0 28px 70px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                <div className="absolute -top-[90px] -right-[90px] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(178,132,83,0.18)_0%,rgba(178,132,83,0.07)_36%,transparent_68%)] pointer-events-none" />
                <span className="text-[11px] font-mono tracking-widest text-[#b28453] font-bold block mb-2 opacity-80">ETAPA_{box.num}</span>
                <h3 className="font-bold text-[#f8f8f8]" style={{ fontFamily: "'Space Grotesk', 'Manrope', 'Inter', sans-serif", fontSize: "24px", lineHeight: "1.18", letterSpacing: "-0.025em" }}>{box.title}</h3>
                <div className="w-[54px] h-[2px] my-[22px]" style={{ background: "linear-gradient(90deg, #b28453, rgba(178,132,83,0))" }} />
                <p className="font-normal" style={{ fontSize: "16px", lineHeight: "1.65", color: "rgba(248,248,248,0.72)", maxWidth: "92%" }}>{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. O PROBLEMA INVISÍVEL ===== */}
      <section className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">O PROBLEMA INVISÍVEL</span>
            <h2 className="font-display text-[34px] sm:text-[42px] md:text-[50px] font-bold text-[#11100f] leading-[1.1] tracking-tight max-w-4xl">
              Sua empresa pode ser excelente e ainda assim não ser reconhecida como referência.
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
            <p className="text-[#2a2927] text-base md:text-lg max-w-3xl leading-[1.7]">
              Em muitos casos, o problema não está apenas no conteúdo, nas palavras-chave ou na posição de uma página. O problema está na forma fragmentada, incompleta ou contraditória como a empresa é representada no ecossistema digital.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "O Google e as plataformas de IA não compreendem claramente quem é a empresa.",
              "Concorrentes menos qualificados aparecem com mais frequência.",
              "Informações sobre a marca estão dispersas ou inconsistentes.",
              "O site não demonstra toda a experiência e especialização da organização.",
              "Marketing, tecnologia, conteúdo e comunicação trabalham sem um plano comum.",
              "Existem ações isoladas, mas não uma estratégia de autoridade.",
              "A empresa não possui fontes externas suficientes para validar suas afirmações.",
              "O conteúdo não cobre todas as jornadas e intenções relevantes.",
              "Especialistas importantes não possuem presença digital estruturada.",
              "A organização não sabe por que é citada em algumas buscas e ignorada em outras.",
              "Existem relatórios e métricas, mas falta uma direção estratégica clara.",
              "Ninguém coordena o ecossistema completo de busca, reputação, conteúdo e conversão.",
            ].map((item, idx) => (
              <div key={idx} className="bg-[#f4eee5] rounded-xl p-6 shadow-[0_14px_36px_rgba(17,16,15,0.05)] border border-[#b28453]/10 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(17,16,15,0.08)]">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-[#b28453] mt-0.5 shrink-0" />
                  <p className="text-[#2a2927] text-[15px] leading-[1.6]">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center select-none">
            <p className="inline-block border border-[#b28453]/45 bg-[#11100f] text-[#e0d3c3] px-8 py-5 rounded-2xl text-sm sm:text-base font-medium max-w-3xl leading-relaxed">
              A AUDITSEO identifica esses gaps e transforma um cenário fragmentado em um plano estratégico integrado, priorizado e mensurável.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 4. AUTORIDADE DE ENTIDADE ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b28453]/3 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-left">
              <span className="text-[#b28453] text-[13px] tracking-[0.15em] font-mono font-bold uppercase mb-4 block">AUTORIDADE DE ENTIDADE</span>
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-bold text-[#f8f8f8] leading-[1.15] tracking-tight mb-6">
                Autoridade não pertence apenas ao domínio. Ela pertence à entidade.
              </h2>
              <p className="text-[#c9c9c9] text-base leading-relaxed mb-4">
                O domínio é um dos ativos digitais da empresa. A entidade é a compreensão mais ampla que buscadores, plataformas de inteligência artificial e potenciais clientes constroem sobre a organização.
              </p>
              <p className="text-[#c9c9c9] text-base leading-relaxed mb-6">
                O site continua sendo o centro controlado dessa construção, mas a autoridade também depende de reputação, avaliações, perfis profissionais, conteúdos externos, dados estruturados, menções, fontes independentes, presença local e consistência de informações.
              </p>
              <div className="bg-[#181716] border border-[#b28453]/15 p-6 rounded-xl">
                <p className="text-[#e2d3c1] text-sm md:text-[14.5px] leading-relaxed italic">
                  A nova disputa da busca não acontece apenas pela posição de uma página. Ela acontece pela interpretação da empresa.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 w-full">
              <div className="relative overflow-hidden p-8 md:p-10 rounded-[22px] text-left" style={{ background: "linear-gradient(145deg, rgba(31,30,28,0.98), rgba(17,16,15,0.98))", border: "1px solid rgba(178,132,83,0.34)", boxShadow: "0 28px 70px rgba(0,0,0,0.38)" }}>
                <div className="absolute -top-[90px] -right-[90px] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(178,132,83,0.15)_0%,rgba(178,132,83,0.05)_36%,transparent_68%)] pointer-events-none" />
                <h3 className="font-display font-bold text-[#e0d3c3] text-xl md:text-2xl mb-8 tracking-wide">O que compõe a entidade</h3>
                <div className="space-y-5">
                  {[
                    { num: "01", title: "Identidade", desc: "Quem é a empresa, o que faz e onde atua." },
                    { num: "02", title: "Especialistas", desc: "Quem são os profissionais que sustentam a experiência da organização." },
                    { num: "03", title: "Serviços e temas", desc: "Quais serviços oferece e em quais temas possui autoridade." },
                    { num: "04", title: "Provas", desc: "Quais evidências confirmam essa experiência e legitimidade." },
                    { num: "05", title: "Fontes externas", desc: "Como outras fontes falam sobre a empresa fora do site." },
                    { num: "06", title: "Consistência", desc: "Se as informações encontradas em diferentes ambientes são coerentes." },
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-4 pb-5 border-b border-[#b28453]/16 last:border-0">
                      <span className="font-mono text-sm font-bold text-[#b28453] mt-0.5">{item.num}</span>
                      <div><h4 className="text-white text-base font-bold mb-1">{item.title}</h4><p className="text-[#c9c9c9]/80 text-xs sm:text-[13px] leading-relaxed">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. O QUE A AUDITSEO FAZ ===== */}
      <section className="relative overflow-hidden bg-[#11100f] text-[#f8f8f8] py-24 md:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#b28453]/4 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] relative z-10">
          <div className="text-left flex flex-col items-start mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">O QUE FAZEMOS</span>
            <h2 className="font-display text-[34px] sm:text-[42px] md:text-[50px] font-bold text-[#ffffff] leading-[1.1] tracking-tight max-w-4xl">
              Identificamos os gaps. Construímos o plano. Coordenamos a evolução.
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[36px]">
            {[
              { num: "I", title: "Diagnóstico de Inteligência de Busca", desc: "Analisamos como a empresa está sendo encontrada, compreendida, representada e validada em mecanismos de busca, plataformas generativas e demais ambientes digitais." },
              { num: "II", title: "Mapeamento dos gaps", desc: "Identificamos problemas técnicos, semânticos, reputacionais, editoriais, competitivos, estruturais e de autoridade." },
              { num: "III", title: "Plano estratégico de autoridade", desc: "Transformamos os achados em um roadmap priorizado, considerando impacto, esforço, dependências, responsáveis e objetivos de negócio." },
              { num: "IV", title: "Orquestração da implementação", desc: "Coordenamos a execução em parceria com equipes internas, fornecedores e especialistas da empresa." },
              { num: "V", title: "Validação das entregas", desc: "Acompanhamos as implementações, verificamos sua qualidade e registramos evidências da evolução." },
              { num: "VI", title: "Monitoramento e aprendizado", desc: "Reavaliamos prioridades, identificamos novas oportunidades e atualizamos o plano conforme o mercado, os concorrentes e os mecanismos de busca evoluem." },
            ].map((card) => (
              <div key={card.num} className="group relative overflow-hidden min-h-[280px] p-[42px] rounded-[22px] transition-all duration-350 hover:-translate-y-2" style={{ background: "linear-gradient(145deg, rgba(31,30,28,0.98) 0%, rgba(17,16,15,0.98) 58%, rgba(11,11,10,1) 100%)", border: "1px solid rgba(178,132,83,0.34)", boxShadow: "0 28px 70px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                <div className="absolute -top-[90px] -right-[90px] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(178,132,83,0.18)_0%,rgba(178,132,83,0.07)_36%,transparent_68%)] pointer-events-none" />
                <span className="text-[11px] font-mono tracking-widest text-[#b28453] font-bold block mb-2 opacity-80">ETAPA_{card.num}</span>
                <h3 className="font-bold text-[#f8f8f8]" style={{ fontFamily: "'Space Grotesk', 'Manrope', 'Inter', sans-serif", fontSize: "23px", lineHeight: "1.18", letterSpacing: "-0.025em" }}>{card.title}</h3>
                <div className="w-[54px] h-[2px] my-[22px]" style={{ background: "linear-gradient(90deg, #b28453, rgba(178,132,83,0))" }} />
                <p className="font-normal" style={{ fontSize: "16px", lineHeight: "1.65", color: "rgba(248,248,248,0.72)", maxWidth: "92%" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. ÁREAS DE ATUAÇÃO ===== */}
      <section className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-left flex flex-col items-start mb-16">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">FRENTES DE INTELIGÊNCIA</span>
            <h2 className="font-display text-[34px] sm:text-[42px] md:text-[50px] font-bold text-[#11100f] leading-[1.1] tracking-tight max-w-4xl">
              Uma estratégia integrada para todo o ecossistema de busca.
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Diagnóstico de Inteligência de Busca", desc: "Análise técnica, competitiva, semântica, reputacional e comercial da presença atual.", icon: <Search size={22} className="text-[#b28453]" /> },
              { num: "02", title: "Estratégia de Autoridade de Entidade", desc: "Estruturação dos sinais que ajudam mecanismos e pessoas a compreender quem é a empresa e por que ela é relevante.", icon: <Award size={22} className="text-[#b28453]" /> },
              { num: "03", title: "Arquitetura Técnica e Semântica", desc: "Organização do site, páginas, dados estruturados, entidades, tópicos e relações semânticas.", icon: <Layers3 size={22} className="text-[#b28453]" /> },
              { num: "04", title: "Conteúdo e Cobertura Temática", desc: "Planejamento de páginas e conteúdos baseados em intenção, jornadas, dúvidas, serviços e oportunidades.", icon: <FileText size={22} className="text-[#b28453]" /> },
              { num: "05", title: "Reputação, Provas e Presença Externa", desc: "Fortalecimento de avaliações, menções, fontes independentes, perfis, especialistas, cases e evidências de autoridade.", icon: <ShieldCheck size={22} className="text-[#b28453]" /> },
              { num: "06", title: "Visibilidade em Buscas Generativas", desc: "Análise da presença da empresa em respostas generativas e identificação dos sinais necessários para ampliar sua consideração.", icon: <Bot size={22} className="text-[#b28453]" /> },
              { num: "07", title: "SEO Local e Presença Geográfica", desc: "Fortalecimento da autoridade relacionada a cidades, regiões, unidades, profissionais e áreas de atendimento.", icon: <Globe size={22} className="text-[#b28453]" /> },
              { num: "08", title: "Conversão e Mensuração", desc: "Conexão entre visibilidade, comportamento, contatos, agendamentos, oportunidades e resultados comerciais.", icon: <Gauge size={22} className="text-[#b28453]" /> },
              { num: "09", title: "Orquestração da Implementação", desc: "Coordenação das ações entre a AUDITSEO, equipes internas, especialistas e fornecedores.", icon: <Compass size={22} className="text-[#b28453]" /> },
            ].map((card) => (
              <div key={card.num} className="group bg-[#f4eee5] rounded-xl p-6 lg:p-[22px] shadow-[0_14px_36px_rgba(17,16,15,0.05)] border border-[#b28453]/10 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(17,16,15,0.08)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-[#b28453]/15 rounded-lg border border-[#b28453]/20">{card.icon}</div>
                  <span className="font-mono text-[11px] text-[#b28453] font-bold uppercase tracking-widest">FRENTE_{card.num}</span>
                </div>
                <h3 className="font-display text-[18px] sm:text-[20px] font-bold text-[#11100f] mb-3 leading-[1.2]">{card.title}</h3>
                <p className="text-[#2a2927] text-[14px] leading-[1.6]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. METODOLOGIA S.I.G.N.A.L ===== */}
      <div id="metodologia">
        <SignalMethod
          onCtaClick={() => scrollTo("form-contato")}
          ctaText="Solicitar avaliação estratégica"
          subtitleText="Uma metodologia proprietária para diagnosticar, planejar, coordenar e acompanhar a construção de autoridade em todo o ecossistema de busca."
          steps={signalSteps}
          footnote="O diagnóstico não termina em um relatório. Ele se transforma em um sistema contínuo de decisão, execução e aprendizado."
        />
      </div>

      {/* ===== 8. PARCERIA COM AS EQUIPES ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-left flex flex-col items-start mb-16">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">PARCERIA COM AS EQUIPES</span>
            <h2 className="font-display text-[34px] sm:text-[42px] md:text-[50px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl">
              Uma parceria que organiza, em vez de sobrecarregar.
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
            <p className="text-[#c9c9c9] text-base md:text-lg leading-relaxed max-w-3xl mb-4">
              A AUDITSEO não precisa substituir sua equipe. Atuamos como a inteligência central que conecta marketing, tecnologia, conteúdo, comunicação, especialistas e fornecedores em torno de um único plano estratégico.
            </p>
            <p className="text-[#c9c9c9] text-base md:text-lg leading-relaxed max-w-3xl">
              Sabemos que o responsável pelo projeto normalmente já acompanha campanhas, redes sociais, desenvolvimento, fornecedores e diferentes demandas internas. Por isso, nossa consultoria foi estruturada para simplificar a gestão, dar visibilidade ao que está acontecendo e reduzir a necessidade de cobranças e acompanhamentos manuais.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {[
              { num: "1", title: "Identificamos os gaps e definimos as prioridades", items: ["Avaliamos como a empresa está sendo encontrada, compreendida e reconhecida.", "Transformamos os gaps em um plano priorizado, com objetivos e sequência de implementação."] },
              { num: "2", title: "Organizamos responsabilidades e próximos passos", items: ["Cada ação é direcionada ao responsável mais adequado: equipe interna, fornecedor atual, especialista da empresa ou equipe da AUDITSEO.", "Todos sabem o que precisa ser feito, por que importa, quem é o responsável, o prazo e como a entrega será validada."] },
              { num: "3", title: "Centralizamos o acompanhamento", items: ["Toda a evolução do projeto pode ser acompanhada em um painel colaborativo próprio da AUDITSEO.", "O responsável interno não precisa reunir informações espalhadas em mensagens, planilhas, documentos e fornecedores."] },
              { num: "4", title: "Transformamos evolução em informação para decisão", items: ["Revisões periódicas com avanços alcançados, gaps existentes e impacto das implementações.", "Prioridades do próximo ciclo, riscos, bloqueios e evolução da autoridade e da visibilidade."] },
            ].map((card) => (
              <div key={card.num} className="group relative overflow-hidden min-h-[320px] p-[38px] rounded-[24px] transition-all duration-[400ms] hover:-translate-y-[6px]" style={{ background: "linear-gradient(145deg, rgba(32,31,29,0.96), rgba(15,15,14,0.98))", border: "1px solid rgba(178,132,83,0.32)", boxShadow: "0 24px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)" }}>
                <div className="absolute top-0 right-0 w-[160px] h-[160px] bg-[#b28453]/4 blur-[60px] rounded-full pointer-events-none opacity-40 group-hover:opacity-100 group-hover:bg-[#b28453]/8 transition-all duration-[400ms]" />
                <div className="relative z-10 w-full">
                  <span className="text-[11px] font-mono tracking-widest text-[#b28453] font-bold block mb-2 opacity-80">ETAPA_0{card.num}</span>
                  <h3 className="font-display text-[20px] md:text-[22px] font-bold text-[#f8f8f8] leading-[1.2] tracking-[-0.01em]">{card.title}</h3>
                  <div className="w-[45px] h-[2px] bg-[#b28453] opacity-[0.85] my-[18px]" />
                  <ul className="space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#f8f8f8]/72 text-[14px] leading-[1.6]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#b28453] shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center select-none">
            <p className="inline-block border border-[#b28453]/45 bg-[#b28453]/5 px-8 py-4 rounded-full text-sm sm:text-base text-[#e0d3c3] font-medium">
              Você não recebe apenas recomendações. Recebe um plano organizado, responsáveis definidos e uma visão clara da evolução de cada frente.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 9. PAINEL COLABORATIVO ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b28453]/3 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-left">
              <span className="text-[#b28453] text-[13px] tracking-[0.15em] font-mono font-bold uppercase mb-4 block">GOVERNANÇA E TRANSPARÊNCIA</span>
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-bold text-[#f8f8f8] leading-[1.15] tracking-tight mb-6">
                Estratégia, responsáveis, entregas e evolução em um único ambiente
              </h2>
              <p className="text-[#c9c9c9] text-base md:text-lg leading-relaxed mb-6">
                O acompanhamento da consultoria acontece por meio de um painel próprio, desenvolvido para simplificar a gestão do projeto e conectar todos os envolvidos.
              </p>
              <ul className="space-y-4">
                {[
                  "O que foi identificado e o que está sendo feito agora",
                  "O que depende da empresa e o que já foi concluído",
                  "Quais frentes estão evoluindo e com quais evidências",
                  "Qual será o próximo ciclo de prioridades",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#e0d3c3] text-sm md:text-base"><CheckCircle2 size={18} className="text-[#b28453] mt-0.5 shrink-0" /><span>{item}</span></li>
                ))}
              </ul>
              <div className="mt-8 bg-[#181716] border border-[#b28453]/15 p-6 rounded-xl">
                <p className="text-[#e2d3c1] text-sm md:text-[14.5px] leading-relaxed italic">
                  A empresa não precisa contratar a AUDITSEO e depois descobrir como gerenciar mais um fornecedor. Nós já entramos com o processo, a organização e o ambiente de acompanhamento preparados.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 w-full">
              <div className="relative overflow-hidden p-8 md:p-10 rounded-[22px] text-left" style={{ background: "linear-gradient(145deg, rgba(31,30,28,0.98), rgba(17,16,15,0.98))", border: "1px solid rgba(178,132,83,0.34)", boxShadow: "0 28px 70px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                <div className="absolute -top-[90px] -right-[90px] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(178,132,83,0.15)_0%,rgba(178,132,83,0.05)_36%,transparent_68%)] pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="flex h-3 w-3 rounded-full bg-red-500/60" /><div className="flex h-3 w-3 rounded-full bg-yellow-500/60" /><div className="flex h-3 w-3 rounded-full bg-green-500/60" />
                    <span className="font-mono text-[10px] text-[#b28453]/60 ml-2 uppercase tracking-wider">Painel colaborativo · Visão do projeto</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Roadmap estratégico", "Prioridades", "Ações em andamento", "Responsáveis",
                      "Prazos", "Entregas concluídas", "Documentos e evidências", "Pendências",
                      "Aprovações", "Indicadores", "Histórico de decisões", "Próximos passos",
                    ].map((item) => (
                      <div key={item} className="rounded-[14px] border border-[#b28453]/20 bg-white/[0.03] px-4 py-3">
                        <p className="text-[#f8f8f8]/80 text-[13px] leading-[1.4] font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 10. MODELOS DE ATUAÇÃO ===== */}
      <section className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-left flex flex-col items-start mb-16">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">MODELOS DE ATUAÇÃO</span>
            <h2 className="font-display text-[34px] sm:text-[42px] md:text-[50px] font-bold text-[#11100f] leading-[1.1] tracking-tight max-w-4xl">
              A profundidade de atuação adequada à estrutura da sua empresa.
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Diagnóstico Estratégico", subtitle: "Para compreender a situação atual antes de decidir onde investir.", items: ["Diagnóstico", "Mapa de gaps", "Análise competitiva", "Avaliação de autoridade", "Mapa de oportunidades", "Plano priorizado", "Roadmap inicial"], icon: <FileText size={20} className="text-[#b28453]" /> },
              { num: "02", title: "Consultoria e Direção Estratégica", subtitle: "Para empresas que já possuem equipes ou fornecedores e precisam de uma inteligência central.", items: ["Direção estratégica", "Reuniões de acompanhamento", "Atualização do roadmap", "Revisão de implementações", "Orientação das equipes", "Validação técnica e semântica", "Monitoramento dos indicadores"], icon: <Compass size={20} className="text-[#b28453]" /> },
              { num: "03", title: "Implementação Gerenciada", subtitle: "Para quando a AUDITSEO também assume a coordenação ou execução de frentes específicas.", items: ["Gestão do plano", "Execução de módulos contratados", "Coordenação de fornecedores", "Validação das entregas", "Acompanhamento contínuo", "Relatórios executivos"], icon: <Users size={20} className="text-[#b28453]" /> },
            ].map((mod) => (
              <div key={mod.num} className="bg-[#f4eee5] rounded-xl p-6 lg:p-8 shadow-[0_14px_36px_rgba(17,16,15,0.05)] border border-[#b28453]/10 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(17,16,15,0.08)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 bg-[#b28453]/15 rounded-lg border border-[#b28453]/20">{mod.icon}</span>
                  <span className="font-mono text-xs text-[#b28453] font-bold uppercase tracking-widest">MODELO_{mod.num}</span>
                </div>
                <h3 className="text-[18px] sm:text-[22px] font-bold text-[#11100f] mb-1 font-display">{mod.title}</h3>
                <p className="text-[#b28453] text-[13px] font-semibold italic mb-4">{mod.subtitle}</p>
                <ul className="space-y-2.5">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#2a2927] text-[14px] leading-[1.6]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#b28453] shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 11. DIFERENCIAIS ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">DIFERENCIAIS</span>
            <h2 className="font-display text-[34px] sm:text-[42px] md:text-[50px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl">
              Mais do que SEO. Uma inteligência central para a nova era da busca.
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Visão da entidade, não apenas do domínio", desc: "Analisamos como a empresa é representada e compreendida em todo o ecossistema digital.", icon: <Target size={20} className="text-[#b28453]" /> },
              { title: "Estratégia integrada", desc: "Conectamos técnica, conteúdo, reputação, autoridade, busca local, presença externa, IA e conversão.", icon: <Layers3 size={20} className="text-[#b28453]" /> },
              { title: "Metodologia proprietária", desc: "A atuação segue um processo estruturado de diagnóstico, priorização, execução, validação e aprendizado.", icon: <Compass size={20} className="text-[#b28453]" /> },
              { title: "Tecnologia própria", desc: "Utilizamos sistemas próprios para ampliar nossa capacidade de análise, acompanhamento e organização.", icon: <Bot size={20} className="text-[#b28453]" /> },
              { title: "Parceria com as equipes", desc: "Atuamos ao lado da estrutura que a empresa já possui, sem criar competição ou duplicidade de funções.", icon: <Users size={20} className="text-[#b28453]" /> },
              { title: "Governança e rastreabilidade", desc: "Cada prioridade, responsabilidade, entrega, decisão e resultado permanece registrado.", icon: <ShieldCheck size={20} className="text-[#b28453]" /> },
              { title: "Inteligência humana aumentada por tecnologia", desc: "A tecnologia amplia a capacidade operacional, mas a direção, os critérios e a responsabilidade permanecem com a AUDITSEO.", icon: <Sparkles size={20} className="text-[#b28453]" /> },
              { title: "Foco no negócio", desc: "O trabalho não termina em rankings. A estratégia é conectada a demanda, oportunidades e resultados comerciais.", icon: <TrendingUp size={20} className="text-[#b28453]" /> },
            ].map((card) => (
              <div key={card.title} className="bg-[#181716] border border-[#b28453]/20 p-7 rounded-2xl text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#b28453]/45">
                <span className="inline-flex p-2.5 bg-[#b28453]/15 rounded-lg border border-[#b28453]/20 mb-5">{card.icon}</span>
                <h3 className="font-display text-[18px] font-bold text-[#f8f8f8] mb-3 leading-[1.25]">{card.title}</h3>
                <p className="text-[#c9c9c9] text-[14px] leading-[1.6]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 12. RESULTADOS MENSURÁVEIS ===== */}
      <section className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">RESULTADOS MENSURÁVEIS</span>
            <h2 className="font-display text-[34px] sm:text-[42px] md:text-[50px] font-bold text-[#11100f] leading-[1.1] tracking-tight max-w-4xl">
              Acompanhamos a construção dos sinais, a evolução da visibilidade e o impacto no negócio.
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Sinais construídos", items: ["Consistência das informações", "Cobertura temática", "Dados estruturados", "Presença de especialistas", "Fontes externas", "Avaliações e provas", "Menções", "Qualidade da arquitetura", "Correção de gaps"] },
              { num: "02", title: "Visibilidade conquistada", items: ["Rankings", "Presença em buscas", "Visibilidade local", "Citações e menções de marca", "Aparições em respostas generativas", "Crescimento de demanda pela marca", "Participação nos temas estratégicos"] },
              { num: "03", title: "Impacto comercial", items: ["Tráfego qualificado", "Contatos", "Agendamentos", "Oportunidades", "Conversões", "Receita assistida", "Redução da dependência de mídia paga", "Evolução do custo de aquisição orgânica"] },
            ].map((group) => (
              <div key={group.num} className="bg-[#f4eee5] rounded-xl p-8 shadow-[0_14px_36px_rgba(17,16,15,0.05)] border border-[#b28453]/10 text-left">
                <span className="font-mono text-xs text-[#b28453] font-bold uppercase tracking-widest block mb-3">NÍVEL_{group.num}</span>
                <h3 className="font-display text-[22px] font-bold text-[#11100f] mb-6 border-b border-[#b28453]/15 pb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#2a2927] text-[14px] leading-[1.6]">
                      <BarChart3 size={15} className="text-[#b28453] mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-[#2a2927]/80 text-sm max-w-3xl mx-auto leading-[1.7]">
            Indicadores são definidos no início do projeto e acompanhados em cada ciclo, sempre com contexto, período analisado e fonte de dados.
          </p>
        </div>
      </section>

      {/* ===== 13. TECNOLOGIA E INTELIGÊNCIA ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b28453]/3 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-left">
              <span className="text-[#b28453] text-[13px] tracking-[0.15em] font-mono font-bold uppercase mb-4 block">TECNOLOGIA E INTELIGÊNCIA</span>
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-bold text-[#f8f8f8] leading-[1.15] tracking-tight mb-6">
                Tecnologia para ampliar a análise. Estratégia para transformar informação em decisão.
              </h2>
              <p className="text-[#c9c9c9] text-base leading-relaxed mb-4">
                A AUDITSEO combina experiência estratégica, dados, tecnologia proprietária e inteligência artificial para analisar cenários complexos, identificar oportunidades e acompanhar a evolução dos projetos.
              </p>
              <p className="text-[#c9c9c9] text-base leading-relaxed mb-6">
                A tecnologia nos permite ampliar profundidade, velocidade e consistência. A estratégia, os critérios de qualidade e a responsabilidade pelas recomendações continuam sendo conduzidos pela AUDITSEO.
              </p>
              <div className="bg-[#181716] border border-[#b28453]/15 p-6 rounded-xl">
                <p className="text-[#e2d3c1] text-sm md:text-[14.5px] leading-relaxed italic">
                  A inteligência artificial amplia nossa capacidade de análise e acompanhamento. A estratégia, os critérios e a responsabilidade continuam sendo da AUDITSEO.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 w-full">
              <div className="relative overflow-hidden p-8 md:p-10 rounded-[22px] text-left" style={{ background: "linear-gradient(145deg, rgba(31,30,28,0.98), rgba(17,16,15,0.98))", border: "1px solid rgba(178,132,83,0.34)", boxShadow: "0 28px 70px rgba(0,0,0,0.38)" }}>
                <div className="absolute -top-[90px] -right-[90px] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(178,132,83,0.15)_0%,rgba(178,132,83,0.05)_36%,transparent_68%)] pointer-events-none" />
                <h3 className="font-display font-bold text-[#e0d3c3] text-xl md:text-2xl mb-8 tracking-wide">Como a tecnologia entra</h3>
                <div className="space-y-5">
                  {[
                    { num: "01", title: "Análises apoiadas por IA", desc: "Leitura de grandes volumes de dados de busca, conteúdo, concorrência e reputação." },
                    { num: "02", title: "Sistemas de monitoramento", desc: "Acompanhamento da evolução de sinais, visibilidade e presença em diferentes ambientes." },
                    { num: "03", title: "Infraestrutura própria de inteligência", desc: "Organização das informações do projeto, do roadmap e das evidências em um único ambiente." },
                    { num: "04", title: "Direção humana", desc: "Critérios, priorização, interpretação e responsabilidade permanecem com a consultoria." },
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-4 pb-5 border-b border-[#b28453]/16 last:border-0">
                      <span className="font-mono text-sm font-bold text-[#b28453] mt-0.5">{item.num}</span>
                      <div><h4 className="text-white text-base font-bold mb-1">{item.title}</h4><p className="text-[#c9c9c9]/80 text-xs sm:text-[13px] leading-relaxed">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 14. ACOMPANHAMENTO E GOVERNANÇA ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">ACOMPANHAMENTO E GOVERNANÇA</span>
            <h2 className="font-display text-[34px] sm:text-[42px] md:text-[50px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl">
              Um plano vivo, atualizado conforme o mercado e a busca evoluem.
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
            <p className="text-[#c9c9c9] text-base md:text-lg max-w-3xl leading-relaxed">
              Autoridade de entidade não é construída por uma ação isolada. Concorrentes mudam, plataformas evoluem, conteúdos envelhecem, novas oportunidades surgem e prioridades precisam ser revistas.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-[#181716] border border-[#b28453]/20 p-8 sm:p-12 rounded-2xl text-left shadow-lg">
              <span className="text-[#b28453] text-[10px] font-mono font-bold tracking-widest block mb-2 uppercase">O QUE ACOMPANHAMOS</span>
              <h3 className="font-display text-2xl font-bold text-white mb-8 border-b border-[#b28453]/15 pb-4">Ciclo contínuo</h3>
              <ul className="space-y-4">
                {[
                  "Execução do roadmap e qualidade das implementações",
                  "Mudanças no mercado e evolução dos concorrentes",
                  "Novos gaps e crescimento da autoridade",
                  "Visibilidade orgânica, presença local, menções e citações",
                  "Indicadores comerciais, riscos, bloqueios e próximos ciclos",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-[#c9c9c9] text-sm md:text-base leading-[1.6]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b28453] shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#181716] border border-[#b28453]/20 p-8 sm:p-12 rounded-2xl text-left shadow-lg">
              <span className="text-[#b28453] text-[10px] font-mono font-bold tracking-widest block mb-2 uppercase">GOVERNANÇA</span>
              <h3 className="font-display text-2xl font-bold text-[#b28453] mb-8 border-b border-[#b28453]/15 pb-4">Como conduzimos</h3>
              <ul className="space-y-4">
                {[
                  "Reuniões de direção e revisões periódicas",
                  "Atualização das prioridades e registro das decisões",
                  "Validação de entregas e acompanhamento dos responsáveis",
                  "Relatórios executivos e histórico completo do projeto",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-[#c9c9c9] text-sm md:text-base leading-[1.6]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b28453] shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 15. O QUE ENTREGAMOS EM CADA PROJETO ===== */}
      <section className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">EVIDÊNCIAS DO TRABALHO</span>
            <h2 className="font-display text-[34px] sm:text-[42px] md:text-[50px] font-bold text-[#11100f] leading-[1.1] tracking-tight max-w-4xl">
              O que entregamos em cada projeto
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Diagnóstico fundamentado", desc: "Leitura completa do cenário atual com contexto, método e fontes." },
              { title: "Mapa de gaps", desc: "O que impede a empresa de ser encontrada, compreendida e considerada." },
              { title: "Roadmap priorizado", desc: "Sequência de ações com impacto, esforço, dependências e prazos." },
              { title: "Responsáveis definidos", desc: "Cada ação direcionada à equipe, especialista ou fornecedor adequado." },
              { title: "Acompanhamento documentado", desc: "Registro contínuo de decisões, ajustes e andamento das frentes." },
              { title: "Evidências das implementações", desc: "Comprovação do que foi implementado e como foi validado." },
              { title: "Relatórios de evolução", desc: "Leitura executiva do que mudou no período analisado." },
              { title: "Decisões orientadas por dados", desc: "Próximos ciclos definidos a partir do que os dados indicam." },
            ].map((card) => (
              <div key={card.title} className="bg-[#f4eee5] rounded-xl p-6 shadow-[0_14px_36px_rgba(17,16,15,0.05)] border border-[#b28453]/10 text-left transition-all duration-300 hover:-translate-y-1">
                <CheckCircle2 size={18} className="text-[#b28453] mb-4" />
                <h3 className="font-display text-[18px] font-bold text-[#11100f] mb-2 leading-[1.25]">{card.title}</h3>
                <p className="text-[#2a2927] text-[14px] leading-[1.6]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 16. FAQ ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">DÚVIDAS FREQUENTES</span>
            <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#f8f8f8] leading-[1.15] tracking-tight max-w-3xl">Perguntas frequentes sobre a consultoria</h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6" />
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item) => {
              const isOpen = openFaq === item.id;
              return (
                <div key={item.id} className="bg-[#181716] rounded-xl border border-[#b28453]/15 overflow-hidden transition-all duration-300 hover:border-[#b28453]/40">
                  <button onClick={() => setOpenFaq(isOpen ? null : item.id)} className="w-full flex items-center justify-between p-6 cursor-pointer text-left transition-colors font-display">
                    <div className="flex items-center space-x-3 text-[#f8f8f8]">
                      <span className="text-[#b28453] shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" strokeLinecap="round" /><line x1="12" y1="17" x2="12.01" y2="17" strokeLinecap="round" /></svg></span>
                      <span className="text-[16px] sm:text-[18px] font-bold tracking-tight">{item.question}</span>
                    </div>
                    <span className="p-1 rounded-full bg-[#b28453]/10 text-[#b28453] transition-all">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {isOpen ? <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" /> : <><line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" /><line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" /></>}
                      </svg>
                    </span>
                  </button>
                  <div className={`transition-all duration-350 ease-in-out ${isOpen ? "max-h-[420px] opacity-100 border-t border-[#b28453]/10" : "max-h-0 opacity-0 pointer-events-none"}`}>
                    <div className="p-6 bg-[#1d1b18] text-[#c9c9c9] text-[15px] sm:text-[16px] leading-[1.65]">{item.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 17. CTA FINAL + FORM ===== */}
      <section id="form-contato" className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b28453]/3 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 xl:px-12 max-w-[800px] relative z-10">
          {formSent ? (
            <div className="text-center py-16">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#b28453]/20 border border-[#b28453]/40 mb-8"><CheckCircle2 size={40} className="text-[#b28453]" /></div>
              <h2 className="font-display text-[36px] sm:text-[44px] font-bold text-[#f8f8f8] leading-[1.1] mb-6">Solicitação recebida</h2>
              <p className="text-[#c9c9c9] text-lg max-w-2xl mx-auto leading-relaxed mb-4">Recebemos suas informações. Vamos analisar o cenário atual da sua empresa e entrar em contato para conduzir a avaliação estratégica.</p>
              <p className="text-[#b28453] font-medium">A primeira conversa é para entender o contexto do seu negócio e as prioridades possíveis.</p>
            </div>
          ) : (
            <>
              <div className="text-center flex flex-col items-center mb-12">
                <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">AVALIAÇÃO ESTRATÉGICA</span>
                <h2 className="font-display text-[34px] sm:text-[42px] md:text-[50px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-3xl">
                  Descubra o que impede sua empresa de ser encontrada, compreendida e considerada.
                </h2>
                <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-6" />
                <p className="text-[#c9c9c9] text-base md:text-lg max-w-2xl leading-relaxed mb-3">
                  Uma avaliação estratégica permite identificar os principais gaps de autoridade, presença, conteúdo, reputação e estrutura que estão limitando sua visibilidade no Google e nas novas jornadas de busca.
                </p>
                <p className="text-[#b28453] text-sm md:text-base max-w-2xl leading-relaxed">
                  Converse com a AUDITSEO para entender o cenário atual, as prioridades e o caminho mais adequado para sua empresa.
                </p>
              </div>
              <form onSubmit={submitForm} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Nome Completo" required><input type="text" value={form.nome} onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))} required className="w-full rounded-full border border-[#b28453]/22 bg-[#181716] px-5 py-4 text-sm text-[#f8f8f8] outline-none placeholder:text-[#f8f8f8]/30 focus:border-[#b28453]/60" placeholder="Seu nome completo" /></Field>
                  <Field label="E-mail Corporativo" required><input type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} required className="w-full rounded-full border border-[#b28453]/22 bg-[#181716] px-5 py-4 text-sm text-[#f8f8f8] outline-none placeholder:text-[#f8f8f8]/30 focus:border-[#b28453]/60" placeholder="seu@email.com" /></Field>
                  <Field label="WhatsApp com DDD" required><input type="tel" value={form.whatsapp} onChange={(e) => setForm((p) => ({ ...p, whatsapp: e.target.value }))} required className="w-full rounded-full border border-[#b28453]/22 bg-[#181716] px-5 py-4 text-sm text-[#f8f8f8] outline-none placeholder:text-[#f8f8f8]/30 focus:border-[#b28453]/60" placeholder="(11) 99999-9999" /></Field>
                  <Field label="Site da Empresa (URL)" required><input type="url" value={form.site} onChange={(e) => setForm((p) => ({ ...p, site: e.target.value }))} required className="w-full rounded-full border border-[#b28453]/22 bg-[#181716] px-5 py-4 text-sm text-[#f8f8f8] outline-none placeholder:text-[#f8f8f8]/30 focus:border-[#b28453]/60" placeholder="www.suaempresa.com.br" /></Field>
                </div>
                <Field label="Faturamento Médio Mensal da Empresa" required>
                  <select value={form.faturamento} onChange={(e) => setForm((p) => ({ ...p, faturamento: e.target.value }))} required className="w-full rounded-full border border-[#b28453]/22 bg-[#181716] px-5 py-4 text-sm text-[#f8f8f8] outline-none focus:border-[#b28453]/60 appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23b28453' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 20px center" }}>
                    <option value="" disabled>Selecione a faixa de faturamento</option>
                    <option value="Ate 50k">Até R$ 50 mil</option>
                    <option value="50k a 200k">R$ 50 mil a R$ 200 mil</option>
                    <option value="Acima de 200k">Acima de R$ 200 mil</option>
                  </select>
                </Field>
                <div className="pt-4">
                  <button type="submit" className="w-full bg-[#b28453] text-white px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-300 hover:bg-[#e0d3c3] hover:text-[#11100f] cursor-pointer inline-flex items-center justify-center gap-2">
                    Solicitar avaliação estratégica <Send size={16} />
                  </button>
                </div>
                <p className="text-center text-xs leading-[1.6] text-[#f8f8f8]/48">Seus dados estão protegidos. A primeira conversa é para entender o cenário do seu negócio, não para empurrar uma solução.</p>
              </form>
            </>
          )}
        </div>
      </section>

      <SiteFooter onNavigate={handleNav} />
    </main>
  );
}

function Field({ label, children, required }: { label: string; children: ReactNode; required?: boolean }) {
  return (
    <label className="grid gap-2">
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">{label}{required && <span className="text-[#b28453] ml-1">*</span>}</span>
      {children}
    </label>
  );
}
