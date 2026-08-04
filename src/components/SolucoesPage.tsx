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
  Users,
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
    text: "Sua empresa está criando um novo site, serviço, unidade ou presença digital e precisa começar com uma base correta.",
    id: "search-foundation"
  },
  {
    title: "Site no ar, mas sem tração",
    text: "O site existe, mas não conquista visibilidade, tráfego qualificado ou oportunidades comerciais.",
    id: "organic-activation"
  },
  {
    title: "Perda de tráfego e posições",
    text: "A empresa registrou queda de acessos, perda de rankings ou redução da demanda orgânica.",
    id: "search-recovery"
  },
  {
    title: "Autoridade pouco reconhecida",
    text: "A empresa possui experiência, mas ainda não é compreendida ou reconhecida como referência.",
    id: "entity-authority"
  },
  {
    title: "Conteúdo sem direção",
    text: "Artigos e páginas são produzidos, mas não formam uma arquitetura conectada às jornadas de decisão.",
    id: "intent-content-architecture"
  },
  {
    title: "Pouca presença nas buscas com IA",
    text: "A empresa não sabe como está sendo interpretada, citada ou considerada em plataformas generativas.",
    id: "geo-ai-readiness"
  },
  {
    title: "Migração ou reformulação de site",
    text: "Uma mudança de domínio, plataforma, estrutura ou design pode colocar ativos orgânicos em risco.",
    id: "seo-migration-risk-control"
  },
  {
    title: "Crescimento orgânico estagnado",
    text: "A empresa já possui uma base, mas precisa de acompanhamento, novos ciclos e evolução contínua.",
    id: "organic-evolution-cycle"
  },
];

const scenarioSolutions = [
  {
    name: "Projetos começando do zero",
    secondaryName: "Search Foundation",
    scenario: "Para novos sites, serviços, unidades, marcas ou projetos digitais.",
    objective: "Construir a fundação técnica, semântica e estratégica antes que o projeto acumule limitações.",
    cta: "Conhecer esta solução",
    route: "/solucoes/projetos-comecando-do-zero",
    id: "search-foundation"
  },
  {
    name: "Sites no ar sem tração",
    secondaryName: "Organic Activation",
    scenario: "Para sites que existem, mas não geram visibilidade, tráfego qualificado ou oportunidades.",
    objective: "Identificar o que impede o crescimento e estruturar um plano de ativação orgânica.",
    cta: "Conhecer esta solução",
    route: "/solucoes/site-sem-tracao",
    id: "organic-activation"
  },
  {
    name: "Recuperação orgânica",
    secondaryName: "Search Recovery",
    scenario: "Para empresas que perderam tráfego, posições, páginas estratégicas ou demanda orgânica.",
    objective: "Diagnosticar as causas da queda e coordenar a reconstrução dos sinais afetados.",
    cta: "Conhecer esta solução",
    route: "/solucoes/recuperacao-organica",
    id: "search-recovery"
  },
  {
    name: "Autoridade de entidade",
    secondaryName: "Entity Authority",
    scenario: "Para empresas e especialistas que possuem experiência, mas ainda não são reconhecidos como referência.",
    objective: "Organizar e fortalecer os sinais que ajudam buscadores, plataformas de IA e potenciais clientes a compreender e confiar na empresa.",
    cta: "Conhecer esta solução",
    route: "/solucoes/autoridade-de-entidade",
    id: "entity-authority"
  },
  {
    name: "Conteúdo por intenção",
    secondaryName: "Intent Content Architecture",
    scenario: "Para empresas que produzem conteúdo sem uma estrutura conectada às jornadas e decisões do público.",
    objective: "Transformar conteúdos isolados em uma arquitetura temática orientada por intenção, autoridade e conversão.",
    cta: "Conhecer esta solução",
    route: "/solucoes/conteudo-por-intencao",
    id: "intent-content-architecture"
  },
  {
    name: "Preparação para GEO e IA",
    secondaryName: "Generative Search Readiness",
    scenario: "Para empresas que desejam compreender e fortalecer sua presença nos novos ambientes de busca generativa.",
    objective: "Avaliar os sinais que influenciam a compreensão, a confiabilidade e a consideração da empresa em plataformas de inteligência artificial.",
    cta: "Conhecer esta solução",
    route: "/solucoes/geo-ia-readiness",
    id: "geo-ia-readiness"
  },
  {
    name: "Migração e risco SEO",
    secondaryName: "SEO Migration & Risk Control",
    scenario: "Para empresas que passarão por redesign, migração de plataforma, alteração de domínio ou reorganização estrutural.",
    objective: "Proteger ativos orgânicos e reduzir riscos durante mudanças críticas no site.",
    cta: "Conhecer esta solução",
    route: "/solucoes/migracao-risco-seo",
    id: "seo-migration-risk-control"
  },
  {
    name: "Evolução orgânica",
    secondaryName: "Organic Evolution Cycle",
    scenario: "Para empresas que já possuem uma base orgânica e precisam manter a estratégia atualizada e evoluindo.",
    objective: "Conduzir ciclos contínuos de análise, priorização, implementação, validação e aprendizado.",
    cta: "Conhecer esta solução",
    route: "/solucoes/evolucao-organica",
    id: "organic-evolution-cycle"
  },
];

const offerMap = [
  ["Estamos começando um novo projeto", "Projetos começando do zero", "search-foundation"],
  ["O site existe, mas não cresce", "Sites no ar sem tração", "organic-activation"],
  ["Perdemos tráfego ou posições", "Recuperação orgânica", "search-recovery"],
  ["Temos experiência, mas não somos reconhecidos", "Autoridade de entidade", "entity-authority"],
  ["Produzimos conteúdo, mas ele não gera resultado", "Conteúdo por intenção", "intent-content-architecture"],
  ["Não sabemos como aparecemos nas buscas com IA", "Preparação para GEO e IA", "geo-ia-readiness"],
  ["Vamos migrar ou reformular o site", "Migração e risco SEO", "seo-migration-risk-control"],
  ["Precisamos continuar evoluindo", "Evolução orgânica", "organic-evolution-cycle"],
];

const valueCards = [
  {
    title: "Menos ações desconectadas",
    text: "Cada iniciativa passa a fazer parte de um plano comum."
  },
  {
    title: "Prioridades mais claras",
    text: "A empresa concentra recursos no que possui maior potencial de impacto."
  },
  {
    title: "Melhor uso das equipes",
    text: "Marketing, tecnologia, conteúdo e fornecedores trabalham com responsabilidades definidas."
  },
  {
    title: "Menos risco",
    text: "Decisões importantes são avaliadas antes de alterações que possam afetar ativos existentes."
  },
  {
    title: "Mais visibilidade sobre a execução",
    text: "A direção consegue acompanhar o que está sendo feito, o que depende da empresa e o que vem a seguir."
  },
  {
    title: "Evolução mensurável",
    text: "As decisões e os resultados são acompanhados ao longo dos ciclos."
  }
];

const partnershipSteps = [
  { title: "Diagnóstico do cenário", text: "Identificamos o que realmente está limitando os resultados." },
  { title: "Definição das prioridades", text: "Focamos no que gera mais impacto estratégico no momento." },
  { title: "Distribuição das responsabilidades", text: "Definimos quem executa cada parte da estratégia." },
  { title: "Orientação das equipes", text: "Marketing, tech e conteúdo trabalham com direção clara." },
  { title: "Validação das implementações", text: "Garantimos que cada ação foi executada corretamente." },
  { title: "Acompanhamento pelo painel", text: "Governança e transparência total sobre a evolução." },
  { title: "Atualização contínua", text: "O roadmap evolui conforme os ciclos e resultados." },
];

export default function SolucoesPage({ onNavigate }: SolucoesPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    // Inject CollectionPage and ItemList Schema for /solucoes
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageSchema = "solucoes";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://www.auditseo.com.br/solucoes#webpage",
      "url": "https://www.auditseo.com.br/solucoes",
      "name": "Soluções de Inteligência de Busca e Autoridade | AUDITSEO",
      "description": "Conheça as soluções da AUDITSEO para lançar, recuperar e fortalecer a presença da sua empresa no Google e nas plataformas de inteligência artificial.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.auditseo.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Soluções",
            "item": "https://www.auditseo.com.br/solucoes"
          }
        ]
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Soluções AUDITSEO",
        "numberOfItems": scenarioSolutions.length,
        "itemListElement": scenarioSolutions.map((solution, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": `https://www.auditseo.com.br${solution.route}`,
          "name": solution.name,
          "description": solution.objective
        }))
      },
      "publisher": {
        "@type": "ProfessionalService",
        "@id": "https://www.auditseo.com.br/#organization"
      }
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
                SOLUÇÕES DE INTELIGÊNCIA DE BUSCA
              </span>
              <h1 className="max-w-[760px] font-display text-[clamp(42px,4.2vw,68px)] font-bold leading-[1.02] tracking-[-0.045em] text-[#f8f8f8]">
                Soluções para cada desafio de busca.
              </h1>
              <p className="mt-8 max-w-[720px] text-[clamp(18px,1.35vw,22px)] leading-[1.55] text-[rgba(248,248,248,0.76)]">
                A AUDITSEO identifica o que limita seus resultados e estrutura a estratégia adequada para lançar, recuperar ou fortalecer a presença da sua empresa no Google e nas plataformas de inteligência artificial.
              </p>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton onClick={scrollToScenarios}>Encontrar a solução ideal</PrimaryButton>
                <button
                  onClick={() => onNavigate("diagnostico")}
                  className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                >
                  Solicitar avaliação estratégica
                </button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <ScenarioConstellationVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6 xl:px-12">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">DIFERENTES CENÁRIOS EXIGEM ESTRATÉGIAS DIFERENTES</span>
          <h2 className="mt-5 max-w-4xl font-display text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-[#f8f8f8] md:text-[54px]">
            Não existe uma única estratégia para todos os momentos.
          </h2>
          <div className="mt-10 grid gap-7 text-lg leading-[1.75] text-[#f8f8f8]/70 md:text-xl">
            <p>
              Uma empresa que está lançando um novo site não enfrenta os mesmos desafios de uma organização que perdeu tráfego, possui conteúdo sem direção ou precisa fortalecer sua autoridade.
            </p>
            <p>Antes de indicar uma solução, a AUDITSEO analisa o cenário, os objetivos, os ativos existentes e os fatores que limitam a evolução.</p>
            <p className="font-display text-2xl font-bold leading-[1.4] text-[#e0d3c3]">
              A estratégia correta começa pela compreensão do problema real.
            </p>
          </div>
        </div>
      </section>

      <section id="mapa-cenarios" className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            dark
            center
            eyebrow="EM QUAL CENÁRIO SUA EMPRESA ESTÁ?"
            title="Em qual cenário sua empresa está?"
            text="Identifique o momento mais próximo da realidade da sua empresa e conheça a solução estratégica correspondente."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {scenarioCards.map((card, index) => (
              <button 
                key={card.title} 
                onClick={() => {
                  const target = document.getElementById(card.id);
                  if (target) window.scrollTo({ top: target.offsetTop - 82, behavior: "smooth" });
                }}
                className="group min-h-[210px] text-left scroll-mt-28 rounded-[22px] border border-[#11100f]/12 bg-[#f8f8f8]/42 p-7 shadow-[0_20px_70px_rgba(17,16,15,0.10)] transition-all hover:bg-white hover:border-[#b28453]/30"
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#6d5132]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold leading-[1.12]">{card.title}</h3>
                <p className="mt-5 text-sm leading-[1.7] text-[#11100f]/70">{card.text}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            eyebrow="SOLUÇÕES PARA CADA MOMENTO"
            title="Soluções criadas para cada momento da sua empresa."
            text="Cada solução parte de um cenário específico, mas todas seguem a mesma lógica: diagnóstico, prioridade, coordenação, validação e acompanhamento."
          />
          <div className="mt-16 space-y-8">
            {scenarioSolutions.map((solution, index) => (
              <div key={solution.id} id={solution.id} className="scroll-mt-28">
                <ScenarioSolutionCard solution={solution} index={index} onNavigate={onNavigate} />
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
            eyebrow="CORRESPONDÊNCIA ESTRATÉGICA"
            title="Do problema real à solução correta."
            text="O nome do serviço importa menos do que a capacidade de identificar corretamente o que está impedindo a evolução."
          />
          <div className="mt-14 space-y-5">
            {offerMap.map(([quote, offer, targetId], index) => (
              <button 
                key={quote} 
                onClick={() => {
                   const target = document.getElementById(targetId);
                   if (target) window.scrollTo({ top: target.offsetTop - 82, behavior: "smooth" });
                }}
                className="group w-full text-left grid gap-5 rounded-[22px] border border-[#11100f]/12 bg-[#f8f8f8]/42 p-6 shadow-[0_18px_60px_rgba(17,16,15,0.09)] md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-7 transition-all hover:bg-white hover:border-[#b28453]/30"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b28453]/50 bg-[#11100f] font-mono text-xs font-bold text-[#e0d3c3]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#6d5132]">Quando a empresa diz</p>
                    <p className="mt-2 font-display text-xl font-bold leading-[1.35]">“{quote}”</p>
                  </div>
                </div>
                <div className="rounded-[18px] border border-[#b28453]/30 bg-[#11100f] p-5 flex items-center justify-between group-hover:bg-[#11100f]/90">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">Solução indicada</p>
                    <p className="mt-2 font-display text-2xl font-bold text-[#e0d3c3]">{offer}</p>
                  </div>
                  <ArrowRight className="text-[#b28453] opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="PROCESSO AUDITSEO"
            title="A solução começa pelo diagnóstico correto."
            text="Nem sempre o problema percebido é a verdadeira causa da limitação. A AUDITSEO não indica uma solução antes de compreender o cenário completo."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-3 mb-8">
               <p className="text-center text-[#f8f8f8]/70 text-lg max-w-3xl mx-auto">
                 Uma queda de tráfego pode estar relacionada a problemas técnicos, perda de autoridade, mudança de intenção, concorrência, conteúdo desatualizado ou alterações no próprio negócio.
               </p>
            </div>
            {partnershipSteps.slice(0, 5).map((step, index) => (
              <article key={step.title} className="rounded-[22px] border border-[#b28453]/20 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#b28453]/10 text-[#b28453] font-mono font-bold">
                  {index + 1}
                </div>
                <h3 className="font-display text-2xl font-bold leading-[1.16] text-[#f8f8f8] mb-4">{step.title}</h3>
                <p className="text-[#f8f8f8]/60 text-sm leading-relaxed">{step.text}</p>
              </article>
            ))}
            <div className="lg:col-span-3 mt-12 text-center">
               <p className="font-display text-2xl font-bold leading-[1.4] text-[#e0d3c3]">
                 A AUDITSEO não começa vendendo uma lista de tarefas. <span className="text-[#b28453]">Começa identificando o problema que realmente precisa ser resolvido.</span>
               </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            dark
            center
            eyebrow="VALOR DA ESTRATÉGIA"
            title="O valor está em aplicar a estratégia correta para o momento da empresa."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {valueCards.map((card, index) => (
              <article key={card.title} className="rounded-[22px] border border-[#11100f]/12 bg-[#f8f8f8]/42 p-7 shadow-[0_20px_70px_rgba(17,16,15,0.10)]">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/50 bg-[#11100f] text-[#e0d3c3]">
                  {index === 0 ? <Search size={18} /> : index === 1 ? <Compass size={18} /> : index === 2 ? <Users size={18} /> : index === 3 ? <ShieldCheck size={18} /> : index === 4 ? <Layers3 size={18} /> : <CheckCircle2 size={18} />}
                </div>
                <h3 className="font-display text-2xl font-bold leading-[1.16] mb-4">{card.title}</h3>
                <p className="text-[#11100f]/70 text-sm leading-relaxed">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            eyebrow="PARCERIA ESTRATÉGICA"
            title="A AUDITSEO estrutura a estratégia e trabalha ao lado das suas equipes."
            text="Não é necessário substituir profissionais, fornecedores ou estruturas que já funcionam. A AUDITSEO atua como inteligência central."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-4 lg:grid-cols-7">
            {partnershipSteps.map((step, index) => (
              <article key={step.title} className="rounded-[22px] border border-[#b28453]/20 bg-[#171614] p-6 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/50 bg-[#11100f] font-mono text-xs font-bold text-[#e0d3c3] mx-auto mb-4">
                  {index + 1}
                </span>
                <h3 className="font-display text-sm font-bold leading-[1.2] text-[#f8f8f8]">{step.title}</h3>
              </article>
            ))}
          </div>
          <div className="mt-14 rounded-[22px] border border-[#b28453]/32 bg-[#11100f] p-7 text-center text-lg font-semibold leading-[1.55] text-[#e0d3c3] md:p-9 md:text-2xl">
            Você não recebe apenas uma recomendação. <span className="text-[#b28453]">Recebe direção, organização e acompanhamento para transformar a estratégia em evolução real.</span>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1080px] rounded-[8px] border border-[#b28453]/35 bg-[#171614] px-7 py-14 text-center shadow-2xl shadow-black/35 md:px-14 md:py-18">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">CTA FINAL</span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[34px] font-bold leading-[1.08] sm:text-[44px] md:text-[58px]">
            Qual desafio de busca sua empresa precisa resolver agora?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.7] text-[#f8f8f8]/70 md:text-lg">
            Uma avaliação estratégica permite compreender o cenário atual, identificar o que limita os resultados e definir a solução mais adequada para sua empresa.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryButton onClick={() => onNavigate("diagnostico")}>Solicitar avaliação estratégica</PrimaryButton>
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

function ScenarioSolutionCard({ 
  solution, 
  index,
  onNavigate 
}: { 
  solution: (typeof scenarioSolutions)[number]; 
  index: number;
  onNavigate: (id: string) => void;
}) {
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
          <p className="mt-5 text-lg font-semibold leading-[1.45] text-[#e0d3c3]">{solution.secondaryName}</p>
          
          <div className="mt-8 space-y-4">
            <div className="rounded-xl bg-[#b28453]/5 border border-[#b28453]/20 p-5">
               <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453] mb-2">Cenário indicado</h4>
               <p className="text-[#f8f8f8]/80 text-sm leading-relaxed">{solution.scenario}</p>
            </div>
            <div className="rounded-xl bg-[#b28453]/5 border border-[#b28453]/20 p-5">
               <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453] mb-2">Objetivo principal</h4>
               <p className="text-[#f8f8f8]/80 text-sm leading-relaxed">{solution.objective}</p>
            </div>
          </div>
          
          <div className="mt-10">
            <button 
              onClick={() => onNavigate(solution.id)}
              className="group inline-flex items-center gap-2 text-[#b28453] font-bold text-sm transition-colors hover:text-[#e0d3c3]"
            >
              <span>{solution.cta}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center opacity-20 pointer-events-none">
           <Layers3 size={240} className="text-[#b28453]" />
        </div>
      </div>
    </article>
  );
}
