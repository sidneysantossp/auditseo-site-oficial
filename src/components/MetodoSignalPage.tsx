import { useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CircleDot,
  ClipboardList,
  Compass,
  FileText,
  Layers3,
  LineChart,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";
import SiteFooter from "./SiteFooter";

interface MetodoSignalPageProps {
  onNavigate: (targetId: string) => void;
}

const signalLayers = [
  {
    letter: "S",
    name: "Search Diagnosis",
    pt: "Diagnóstico de Inteligência de Busca",
    short: "Leitura completa de como a empresa é encontrada, compreendida e representada hoje.",
    question: "Como sua empresa está sendo encontrada, compreendida e representada atualmente?",
    explanation:
      "Analisamos o cenário completo da presença digital da empresa para identificar limitações técnicas, semânticas, editoriais, reputacionais e competitivas. A avaliação não se restringe ao site. Ela considera também especialistas, unidades, conteúdos, avaliações, fontes externas, concorrentes e presença em plataformas generativas.",
    analysis: [
      "estrutura técnica",
      "visibilidade orgânica",
      "presença local",
      "autoridade temática",
      "consistência das informações",
      "concorrência",
      "reputação",
      "fontes externas",
      "respostas generativas",
      "conversão",
    ],
    result: "Uma visão clara do cenário atual e dos principais pontos que limitam a evolução.",
  },
  {
    letter: "I",
    name: "Intent Mapping",
    pt: "Mapeamento de Intenções",
    short: "Compreensão das dúvidas, comparações e intenções que antecedem a decisão.",
    question: "O que as pessoas realmente procuram antes de escolher uma empresa como a sua?",
    explanation:
      "Mapeamos dúvidas, necessidades, objeções, comparações e intenções que surgem ao longo da jornada de decisão. O objetivo não é apenas encontrar palavras-chave, mas compreender como diferentes públicos pesquisam, avaliam e escolhem.",
    analysis: [
      "jornadas de busca",
      "dúvidas frequentes",
      "necessidades comerciais",
      "intenção informativa",
      "intenção comparativa",
      "intenção local",
      "intenção transacional",
      "temas de autoridade",
      "oportunidades de conteúdo",
    ],
    result: "Um mapa de jornadas e oportunidades conectado aos objetivos do negócio.",
  },
  {
    letter: "G",
    name: "Generative Search Readiness",
    pt: "Preparação para a Busca Generativa",
    short: "Preparação dos sinais que permitem à empresa ser compreendida por plataformas de IA.",
    question:
      "Sua empresa oferece informações e sinais suficientes para ser compreendida pelas plataformas de inteligência artificial?",
    explanation:
      "Avaliamos como a empresa está representada em ambientes de busca generativa e quais fatores podem estar limitando sua consideração. O trabalho conecta clareza institucional, consistência, conteúdo, fontes, estrutura e autoridade.",
    analysis: [
      "clareza sobre a empresa",
      "serviços e especialidades",
      "presença de especialistas",
      "consistência das informações",
      "fontes citáveis",
      "dados estruturados",
      "cobertura temática",
      "reputação",
      "menções",
      "presença nas respostas analisadas",
    ],
    result:
      "Um plano para fortalecer a compreensão e a confiabilidade da empresa nos novos ambientes de busca.",
  },
  {
    letter: "N",
    name: "Narrative & Entity Authority",
    pt: "Narrativa e Autoridade de Entidade",
    short: "Organização da narrativa e dos sinais que sustentam contexto, coerência e confiança.",
    question:
      "A presença digital comunica de forma consistente quem é a empresa e por que ela deve ser reconhecida?",
    explanation:
      "Organizamos a narrativa da entidade para que site, especialistas, conteúdos, perfis, avaliações e fontes externas apresentem informações claras e coerentes. A autoridade não depende apenas do domínio. Ela depende da interpretação completa que pessoas e mecanismos constroem sobre a organização.",
    analysis: [
      "posicionamento",
      "informações institucionais",
      "especialistas",
      "serviços",
      "localidades",
      "provas",
      "cases",
      "avaliações",
      "menções externas",
      "relações entre entidades",
    ],
    result: "Uma representação digital mais clara, consistente e confiável.",
  },
  {
    letter: "A",
    name: "Action Roadmap",
    pt: "Plano Estratégico de Ação",
    short: "Transformação do diagnóstico em prioridades, responsáveis e sequência de implementação.",
    question: "O que precisa ser feito primeiro para produzir avanço real?",
    explanation:
      "Transformamos o diagnóstico em um plano estratégico priorizado. Cada ação é organizada de acordo com impacto, urgência, esforço, dependências, responsáveis e objetivos do negócio.",
    analysis: [
      "prioridades",
      "sequência de implementação",
      "responsáveis",
      "prazos",
      "dependências",
      "critérios de validação",
      "objetivos",
      "riscos",
      "indicadores",
      "próximos ciclos",
    ],
    result:
      "Uma direção clara para que a empresa deixe de executar ações isoladas e passe a trabalhar com prioridades coordenadas.",
  },
  {
    letter: "L",
    name: "Learning Loop",
    pt: "Ciclo Contínuo de Aprendizado",
    short: "Acompanhamento contínuo da implementação, dos resultados e das mudanças do cenário.",
    question: "Como garantir que a estratégia continue evoluindo?",
    explanation:
      "A busca, os concorrentes, o mercado e as plataformas mudam continuamente. Por isso, o método não termina quando o plano é entregue. Acompanhamos implementações, resultados, novas oportunidades e mudanças no cenário para atualizar as prioridades e orientar os próximos ciclos.",
    analysis: [
      "implementação do roadmap",
      "qualidade das entregas",
      "evolução da visibilidade",
      "novos pontos críticos",
      "movimentação dos concorrentes",
      "mudanças nas plataformas",
      "indicadores comerciais",
      "pendências",
      "bloqueios",
      "próximos passos",
    ],
    result: "Uma estratégia viva, documentada e atualizada com base em evidências.",
  },
];

const centralIntelligenceCards = [
  ["Estratégia fragmentada", "Conteúdo, tecnologia, reputação e mídia operam sem uma direção comum."],
  ["Prioridades concorrentes", "As equipes trabalham por urgência, sem clareza sobre o que produz maior impacto."],
  ["Informações dispersas", "Relatórios, documentos, tarefas e decisões ficam espalhados em diferentes ambientes."],
  ["Pouca rastreabilidade", "A direção tem dificuldade para compreender o que foi feito e o que está evoluindo."],
  ["Visão limitada", "Cada fornecedor analisa apenas a parte pela qual é responsável."],
  ["Falta de continuidade", "O projeto perde direção quando pessoas, prioridades ou fornecedores mudam."],
];

const strategyProcess = [
  ["1", "Compreendemos o cenário", "Analisamos a empresa, o mercado, os concorrentes, os objetivos e a estrutura disponível."],
  ["2", "Identificamos o que limita os resultados", "Localizamos os pontos técnicos, semânticos, reputacionais e estratégicos que precisam ser fortalecidos."],
  ["3", "Definimos prioridades", "Organizamos as ações de acordo com impacto, urgência e dependências."],
  ["4", "Distribuímos responsabilidades", "Cada ação é direcionada à equipe, fornecedor, especialista ou profissional mais adequado."],
  ["5", "Acompanhamos a implementação", "O andamento é registrado e acompanhado por meio de reuniões e de um painel colaborativo próprio."],
  ["6", "Validamos e atualizamos a estratégia", "As entregas são verificadas, os resultados são analisados e o plano evolui continuamente."],
];

const continuityBlocks = [
  ["Direção estratégica", "As decisões são tomadas com base no cenário completo, não em ações isoladas."],
  ["Prioridades claras", "A empresa concentra recursos nas ações com maior potencial de impacto."],
  ["Responsabilidades definidas", "Cada equipe compreende o que precisa fazer e como sua entrega será validada."],
  ["Aprendizado contínuo", "O plano evolui conforme os resultados, o mercado e as plataformas mudam."],
];

const valueScenarios = [
  "empresas com ações de marketing, mas sem estratégia integrada",
  "investimento anterior em SEO sem resultados compreendidos",
  "equipes e fornecedores que precisam de direção",
  "perda de visibilidade orgânica",
  "reconstrução ou migração de site",
  "fortalecimento de especialistas e autoridade",
  "ampliação da presença local",
  "compreensão da presença nas buscas generativas",
  "redução da dependência de mídia paga",
  "crescimento orgânico estagnado",
];

const noPromises = [
  "primeira posição garantida",
  "recomendação garantida por plataformas de IA",
  "resultados imediatos",
  "autoridade construída por uma única ação",
  "crescimento sem implementação",
  "fórmulas universais",
  "substituição automática da equipe",
];

const realDeliveries = [
  "diagnóstico fundamentado",
  "prioridades claras",
  "plano estratégico",
  "coordenação",
  "acompanhamento",
  "validação",
  "transparência",
  "aprendizado contínuo",
  "evolução mensurável",
];


function SectionHeader({
  eyebrow,
  title,
  text,
  dark = true,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto items-center text-center" : "items-start"} flex max-w-4xl flex-col`}>
      {eyebrow && (
        <span className={`mb-4 font-mono text-[12px] font-bold uppercase tracking-[0.16em] ${dark ? "text-[#b28453]" : "text-[#6d5132]"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-[34px] sm:text-[44px] md:text-[56px] font-bold leading-[1.08] ${dark ? "text-[#f8f8f8]" : "text-[#11100f]"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-6 text-base md:text-lg leading-[1.7] ${dark ? "text-[#f8f8f8]/70" : "text-[#11100f]/72"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function PrimaryButton({ children, onClick, dark = true }: { children: string; onClick: () => void; dark?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
        dark
          ? "bg-[#b28453] text-white hover:bg-[#e0d3c3] hover:text-[#11100f]"
          : "bg-[#11100f] text-white hover:bg-[#b28453]"
      }`}
    >
      {children}
      <ArrowRight size={16} />
    </button>
  );
}

function ConstellationVisual() {
  const orbitNodes = [
    { letter: "S", label: "Search Diagnosis", start: 330, pulseDelay: "0s" },
    { letter: "I", label: "Intent Mapping", start: 30, pulseDelay: "1.4s" },
    { letter: "G", label: "GEO & AI Readiness", start: 90, pulseDelay: "2.8s" },
    { letter: "N", label: "Narrative & Entity Authority", start: 150, pulseDelay: "4.2s" },
    { letter: "A", label: "Action Roadmap", start: 210, pulseDelay: "5.6s" },
    { letter: "L", label: "Learning Loop", start: 270, pulseDelay: "7s" },
  ];
  const orbitDuration = 720;
  const orbitSize = 470;

  return (
    <div className="group/method-cosmos relative mx-auto aspect-[1.08/1] w-full max-w-[620px] select-none overflow-visible">
      <style>
        {`
          @keyframes methodOrbit {
            from { transform: translate(-50%, -50%) rotate(var(--start-angle)); }
            to { transform: translate(-50%, -50%) rotate(calc(var(--start-angle) + 360deg)); }
          }
          @keyframes methodCounter {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes methodCorePulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.86; }
            50% { transform: translate(-50%, -50%) scale(1.045); opacity: 1; }
          }
          @keyframes methodCoreFloat {
            0%, 100% { transform: translate(-50%, -50%) translate3d(0, -3px, 0) scale(1); }
            50% { transform: translate(-50%, -50%) translate3d(0, 4px, 0) scale(1.015); }
          }
          @keyframes methodCoreTextFloat {
            0%, 100% { transform: translate(-50%, -50%) translate3d(0, -3px, 0); }
            50% { transform: translate(-50%, -50%) translate3d(0, 4px, 0); }
          }
          @keyframes methodRingBreath {
            0%, 100% { opacity: 0.34; }
            50% { opacity: 0.54; }
          }
          @keyframes methodRingFlowClockwise {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: -100; }
          }
          @keyframes methodRingFlowCounter {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: 100; }
          }
          @keyframes methodParticleDrift {
            0%, 100% { transform: translate3d(0, 0, 0); opacity: var(--particle-opacity); }
            50% { transform: translate3d(var(--drift-x), var(--drift-y), 0); opacity: calc(var(--particle-opacity) + 0.18); }
          }
          @keyframes methodLineBreath {
            0%, 100% { opacity: 0.11; }
            50% { opacity: 0.24; }
          }
          @keyframes methodBadgeBreathe {
            0%, 100% { box-shadow: 0 0 22px rgba(178,132,83,0.15), inset 0 1px 0 rgba(255,255,255,0.08); border-color: rgba(178,132,83,0.46); }
            50% { box-shadow: 0 0 36px rgba(178,132,83,0.30), inset 0 1px 0 rgba(255,255,255,0.14); border-color: rgba(224,211,195,0.68); }
          }
        `}
      </style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(178,132,83,0.10),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(248,248,248,0.055),transparent_18%),radial-gradient(circle_at_74%_72%,rgba(178,132,83,0.10),transparent_22%)] opacity-80" />

      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 620 574" fill="none" aria-hidden="true">
        <path d="M132 302 C196 210 272 184 358 222 C430 254 476 316 512 414" stroke="#b28453" strokeWidth="1" strokeOpacity="0.16" style={{ animation: "methodLineBreath 8s ease-in-out infinite" }} />
        <path d="M122 398 C214 334 290 310 382 344 C438 365 484 360 548 314" stroke="#e0d3c3" strokeWidth="1" strokeOpacity="0.10" style={{ animation: "methodLineBreath 9.5s ease-in-out infinite 1.2s" }} />
        <path d="M194 142 C260 220 328 268 430 222" stroke="#b28453" strokeWidth="1" strokeOpacity="0.12" style={{ animation: "methodLineBreath 10s ease-in-out infinite 0.8s" }} />
      </svg>

      {[...Array(58)].map((_, index) => (
        <span
          key={index}
          className="absolute rounded-full"
          style={{
            top: `${8 + ((index * 19) % 84)}%`,
            left: `${6 + ((index * 31) % 88)}%`,
            width: `${1 + (index % 3) * 0.7}px`,
            height: `${1 + (index % 3) * 0.7}px`,
            background: index % 4 === 0 ? "#b28453" : "#e0d3c3",
            opacity: 0.14 + (index % 6) * 0.055,
            ["--particle-opacity" as string]: `${0.14 + (index % 6) * 0.055}`,
            ["--drift-x" as string]: `${((index % 5) - 2) * 5}px`,
            ["--drift-y" as string]: `${(((index * 2) % 5) - 2) * 5}px`,
            animation: `methodParticleDrift ${7 + (index % 8)}s ease-in-out ${(index % 9) * 0.32}s infinite`,
            boxShadow: index % 5 === 0 ? "0 0 10px rgba(224,211,195,0.42)" : "0 0 7px rgba(178,132,83,0.28)",
          }}
        />
      ))}

      <div className="absolute left-1/2 top-1/2 z-20 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(248,248,248,0.22)_0%,rgba(224,211,195,0.24)_20%,rgba(178,132,83,0.18)_46%,transparent_74%)] opacity-80 blur-[10px]" style={{ animation: "methodCorePulse 8s ease-in-out infinite" }} />
      <div className="absolute left-1/2 top-1/2 z-[25] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_42%_34%,rgba(248,248,248,0.96)_0%,rgba(224,211,195,0.82)_22%,rgba(178,132,83,0.58)_54%,rgba(178,132,83,0.18)_78%,transparent_100%)] shadow-[0_0_34px_rgba(178,132,83,0.42),0_0_80px_rgba(178,132,83,0.18)]" />
      <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible" viewBox="0 0 620 574" fill="none" aria-hidden="true">
        <defs>
          <filter id="methodRingGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <ellipse cx="310" cy="287" rx="150" ry="43" stroke="#e0d3c3" strokeWidth="1.35" strokeOpacity="0.20" filter="url(#methodRingGlow)" />
        <ellipse cx="310" cy="287" rx="54" ry="148" stroke="#e0d3c3" strokeWidth="1.35" strokeOpacity="0.18" filter="url(#methodRingGlow)" />
        <ellipse cx="310" cy="287" rx="150" ry="43" pathLength="100" stroke="#f1e6d6" strokeWidth="1.65" strokeOpacity="0.34" strokeLinecap="round" strokeDasharray="16 84" filter="url(#methodRingGlow)" style={{ animation: "methodRingFlowClockwise 13.6s linear infinite" }} />
        <ellipse cx="310" cy="287" rx="54" ry="148" pathLength="100" stroke="#f1e6d6" strokeWidth="1.55" strokeOpacity="0.30" strokeLinecap="round" strokeDasharray="14 86" filter="url(#methodRingGlow)" style={{ animation: "methodRingFlowCounter 15.2s linear infinite 0.9s" }} />
      </svg>
      <svg className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible" viewBox="0 0 620 574" fill="none" aria-hidden="true">
        <defs>
          <filter id="methodRingFrontGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path d="M160 287 A150 43 0 0 0 460 287" stroke="#f1e6d6" strokeWidth="1.45" strokeOpacity="0.46" strokeLinecap="round" filter="url(#methodRingFrontGlow)" />
        <path d="M310 139 A54 148 0 0 0 310 435" stroke="#f1e6d6" strokeWidth="1.45" strokeOpacity="0.42" strokeLinecap="round" filter="url(#methodRingFrontGlow)" />
        <path d="M160 287 A150 43 0 0 0 460 287" pathLength="100" stroke="#fff4e5" strokeWidth="1.85" strokeOpacity="0.58" strokeLinecap="round" strokeDasharray="18 82" filter="url(#methodRingFrontGlow)" style={{ animation: "methodRingFlowClockwise 13.6s linear infinite" }} />
        <path d="M310 139 A54 148 0 0 0 310 435" pathLength="100" stroke="#fff4e5" strokeWidth="1.75" strokeOpacity="0.52" strokeLinecap="round" strokeDasharray="16 84" filter="url(#methodRingFrontGlow)" style={{ animation: "methodRingFlowCounter 15.2s linear infinite 0.9s" }} />
      </svg>

      {orbitNodes.map((node) => (
        <div
          key={node.letter}
          className="absolute left-1/2 top-1/2"
          style={{
            width: `${orbitSize}px`,
            height: `${Math.round(orbitSize * 0.74)}px`,
            ["--start-angle" as string]: `${node.start}deg`,
            animation: `methodOrbit ${orbitDuration}s linear infinite`,
          }}
        >
          <div className="absolute left-1/2 top-0" style={{ transform: `translate(-50%, -50%) rotate(${-node.start}deg)` }}>
            <div style={{ animation: `methodCounter ${orbitDuration}s linear infinite` }}>
              <div
                title={node.label}
                className="group/badge relative flex h-12 w-12 items-center justify-center rounded-full border border-[#b28453]/50 bg-[radial-gradient(circle_at_32%_24%,rgba(224,211,195,0.16),rgba(178,132,83,0.10)_34%,rgba(17,16,15,0.88)_72%)] shadow-[0_0_22px_rgba(178,132,83,0.18),inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-10px_18px_rgba(0,0,0,0.32)] backdrop-blur-md transition-all duration-300 before:absolute before:inset-[7px] before:rounded-full before:border before:border-white/[0.04] after:absolute after:left-[28%] after:top-[20%] after:h-2 after:w-2 after:rounded-full after:bg-[#f8f8f8]/28 after:blur-[1px] hover:scale-110 hover:border-[#e0d3c3]/80 hover:shadow-[0_0_38px_rgba(178,132,83,0.38),inset_0_1px_0_rgba(255,255,255,0.16)] md:h-14 md:w-14"
                style={{ animation: `methodBadgeBreathe 9s ease-in-out ${node.pulseDelay} infinite` }}
              >
                <span className="relative z-10 font-display text-xl font-bold text-[#e0d3c3] drop-shadow-[0_0_8px_rgba(224,211,195,0.28)]">{node.letter}</span>
                <span className="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-[#b28453]/35 bg-[#11100f]/90 px-3 py-1.5 text-[10px] font-semibold text-[#e0d3c3] opacity-0 shadow-xl shadow-black/30 transition-opacity group-hover/badge:block group-hover/badge:opacity-100">
                  {node.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MetodoSignalPage({ onNavigate }: MetodoSignalPageProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageSchema = "metodo-signal";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: "Método S.I.G.N.A.L | Inteligência de Busca e Autoridade",
          url: `https://www.auditseo.com.br/metodo-signal`,
          description:
            "Conheça o método da AUDITSEO para diagnosticar, planejar, coordenar e acompanhar a construção de autoridade da sua empresa no Google e nas plataformas de inteligência artificial.",
        },
        {
          "@type": "Service",
          name: "Método S.I.G.N.A.L — Consultoria de Inteligência de Busca e Autoridade",
          provider: { "@type": "ProfessionalService", name: "AUDITSEO", url: "https://www.auditseo.com.br" },
          serviceType: "Consultoria de Inteligência de Busca e Autoridade de Entidade",
          areaServed: "BR",
        },

        {
          "@type": "ItemList",
          name: "Camadas do Método S.I.G.N.A.L",
          itemListElement: signalLayers.map((layer, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: `${layer.letter} — ${layer.name}`,
            description: layer.short,
          })),
        },
      ],
    });
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-[112px] md:pt-[128px] pb-16 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(178,132,83,0.18),transparent_34%),linear-gradient(135deg,rgba(224,211,195,0.045),transparent_44%)]" />
        <div className="container relative z-10 mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-12 xl:gap-16">
            <div className="lg:col-span-6">
              <span className="mb-5 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
                METODOLOGIA PROPRIETÁRIA
              </span>
              <h1 className="font-display text-[52px] sm:text-[70px] lg:text-[92px] font-bold leading-[0.98] tracking-[-0.045em] text-[#f8f8f8]">
                Método S.I.G.N.A.L.
              </h1>
              <p className="mt-8 max-w-3xl text-xl md:text-2xl leading-[1.45] text-[#f8f8f8]/78">
                Uma metodologia para diagnosticar, organizar e acompanhar a construção de autoridade da sua empresa no Google e nas plataformas de inteligência artificial.
              </p>
              <p className="mt-6 max-w-2xl text-base md:text-lg leading-[1.7] text-[#f8f8f8]/62">
                O S.I.G.N.A.L. conecta inteligência de busca, autoridade de entidade, conteúdo, reputação, tecnologia e execução em um único plano estratégico.
              </p>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton onClick={() => onNavigate("form-contato")}>Solicitar avaliação estratégica</PrimaryButton>
                <button
                  onClick={() => onNavigate("camadas-signal")}
                  className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                >
                  Entender como atuamos
                </button>
              </div>
              <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.08em] text-[#8c8275]">
                Diagnóstico · Prioridades · Coordenação · Acompanhamento
              </p>
            </div>
            <div className="lg:col-span-6">
              <ConstellationVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1080px] px-6 text-center xl:px-12">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">A NOVA BUSCA</span>
          <h2 className="mt-8 font-display text-[30px] sm:text-[40px] md:text-[52px] font-bold leading-[1.14] text-[#f8f8f8]">
            A <span className="text-[#b28453]">nova busca</span> não começa no clique.
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-[1.7] text-[#f8f8f8]/70">
            As pessoas pesquisam no Google, exploram mapas, analisam avaliações, consultam especialistas, assistem a vídeos e fazem perguntas diretamente às plataformas de inteligência artificial. Antes de escolher uma empresa, elas percorrem diferentes ambientes, fontes e formatos.
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-[1.7] text-[#f8f8f8]/70">
            Por isso, não basta aparecer em uma página de resultados. A empresa precisa ser compreendida como uma entidade clara, consistente, confiável e relevante em todo o ecossistema digital.
          </p>
          <p className="mx-auto mt-10 max-w-3xl font-display text-2xl md:text-3xl font-bold leading-[1.35] text-[#e0d3c3]">
            A decisão não depende apenas de posição. Depende de compreensão, confiança e reconhecimento.
          </p>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 md:py-32 text-[#11100f]">
        <div className="container mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-12 xl:px-12">
          <div className="lg:col-span-6">
            <SectionHeader
              dark={false}
              eyebrow="Origem do método"
              title="Por que o S.I.G.N.A.L. existe"
              text="Porque esforço disperso não constrói autoridade. Direção, prioridade e coordenação constroem."
            />
            <div className="mt-8 space-y-5 text-base leading-[1.75] text-[#11100f]/76">
              <p>Muitas empresas realizam ações de SEO, conteúdo, mídia, reputação e tecnologia, mas continuam sem uma visão clara sobre o que realmente limita seus resultados.</p>
              <p>O problema normalmente não está em uma única página, palavra-chave ou campanha. Ele está na falta de coordenação entre diferentes sinais, ativos, equipes e decisões.</p>
              <p className="font-semibold text-[#11100f]">O S.I.G.N.A.L. foi criado para transformar informações dispersas em uma estratégia integrada, priorizada e acompanhável.</p>
            </div>
            <div className="mt-9 border-l-4 border-[#b28453] bg-[#11100f] p-6 text-[#f8f8f8]">
              <p className="font-display text-2xl font-bold leading-[1.3]">
                Mais do que apontar problemas, o método organiza o que deve ser feito, por quem, em qual ordem e como cada avanço será validado.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[8px] border border-[#b28453]/45 bg-[#11100f] p-7 md:p-9 text-[#f8f8f8] shadow-xl shadow-[#11100f]/20">
              <h3 className="font-display text-2xl font-bold">Da ação isolada à estratégia coordenada</h3>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <ComparisonList title="Antes" items={["ações desconectadas", "relatórios sem direção", "conteúdo sem prioridade", "tecnologia desconectada da estratégia", "pouca clareza de impacto"]} muted />
                <ComparisonList title="Depois" items={["diagnóstico integrado", "intenção conectada à jornada", "autoridade de entidade organizada", "preparação para a busca generativa", "plano priorizado", "evolução acompanhada"]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="camadas-signal" className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Visão geral"
            title="As seis camadas da inteligência de busca"
            text="Cada etapa responde a uma pergunta essencial para transformar presença digital em uma estratégia coordenada."
          />
          <SignalMethodMap />
        </div>
      </section>

      <section className="bg-[#11100f] pb-24 md:pb-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Camadas estratégicas"
            title="Dentro do S.I.G.N.A.L."
            text="Cada camada responde a uma pergunta central sobre como sua empresa é encontrada, compreendida, considerada e escolhida."
          />
          <div className="relative mt-16 space-y-10 md:space-y-12">
            <div className="pointer-events-none absolute bottom-12 left-8 top-12 hidden w-px bg-[#b28453]/28 lg:block" />
            {signalLayers.map((layer, index) => (
              <div key={layer.letter}>
                <LayerDeepDive layer={layer} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 md:py-32 text-[#11100f]">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            dark={false}
            center
            eyebrow="Aplicação prática"
            title="Como o S.I.G.N.A.L. entra na estratégia da sua empresa"
            text="A AUDITSEO não precisa substituir sua equipe. O método organiza a colaboração entre marketing, tecnologia, conteúdo, comunicação, especialistas, fornecedores e direção. Cada parte do projeto passa a ter uma função clara dentro de um único plano."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {strategyProcess.map(([step, title, text]) => (
              <div key={step} className="rounded-[8px] border border-[#11100f]/12 bg-[#f8f8f8]/45 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#11100f] font-display text-lg font-bold text-[#e0d3c3]">
                  {step}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#11100f]/70">{text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-[1.7] text-[#11100f]/72">
            O projeto é acompanhado em um painel colaborativo próprio, no qual são organizados prioridades, responsáveis, entregas, documentos, pendências, evidências, decisões e próximos passos.
          </p>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Inteligência central"
            title="Por que sua empresa precisa de uma inteligência central de busca"
            text="Uma empresa pode possuir bons profissionais, bons fornecedores e diferentes iniciativas em andamento e, ainda assim, não conseguir construir autoridade. Isso acontece quando cada frente trabalha de forma isolada. A AUDITSEO oferece a direção estratégica que conecta as diferentes áreas e mantém todas as ações orientadas pelo mesmo objetivo."
          />
          <div className="mx-auto mt-10 max-w-4xl rounded-[8px] border border-[#b28453]/25 bg-[linear-gradient(145deg,#1d1b18,#0f0f0e)] px-7 py-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.28)] md:px-10">
            <p className="font-display text-2xl md:text-3xl font-bold leading-[1.35] text-[#e0d3c3]">
              Ações isoladas podem gerar movimento. Autoridade exige direção, consistência e coordenação.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {centralIntelligenceCards.map(([title, text], index) => (
              <div key={title} className="group rounded-[8px] border border-[#b28453]/20 bg-[linear-gradient(145deg,#1d1b18,#0f0f0e)] p-6 transition-all hover:-translate-y-1 hover:border-[#b28453]/60 hover:shadow-[0_18px_50px_rgba(178,132,83,0.08)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b28453]/30 bg-[#b28453]/10 font-mono text-[11px] font-bold text-[#b28453] group-hover:border-[#e0d3c3]/50 group-hover:text-[#e0d3c3]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/66">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 md:py-32 text-[#11100f]">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            dark={false}
            center
            eyebrow="Impacto interno"
            title="O que muda para a sua empresa"
            text="A empresa passa a enxergar prioridades, responsáveis e evolução dentro de um único plano estratégico."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <ComparisonCard title="Antes" items={["ações desconectadas", "prioridades pouco claras", "relatórios sem direção", "equipes trabalhando separadamente", "cobranças manuais", "decisões baseadas em urgência", "dificuldade para identificar limitações", "pouca visibilidade sobre a execução"]} />
            <ComparisonCard title="Com o S.I.G.N.A.L." items={["diagnóstico integrado", "prioridades definidas", "plano estratégico documentado", "responsabilidades organizadas", "execução coordenada", "acompanhamento centralizado", "evolução registrada", "decisões orientadas por dados", "próximos passos claros"]} highlighted />
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center font-display text-2xl font-bold leading-[1.35]">
            O método reduz a dispersão e transforma diferentes iniciativas em uma estratégia única de autoridade e crescimento.
          </p>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Continuidade"
                title="O método não termina no diagnóstico. Ele orienta a evolução."
                text="Um relatório isolado não transforma a presença de uma empresa. O valor do método está em conectar diagnóstico, decisão, implementação, validação e aprendizado."
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:col-span-7">
              {continuityBlocks.map(([title, text]) => (
                <div key={title} className="rounded-[8px] border border-[#b28453]/20 bg-[#171614] p-7">
                  <LineChart className="h-5 w-5 text-[#b28453]" />
                  <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/68">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 md:py-32 text-[#11100f]">
        <div className="container mx-auto max-w-[1120px] px-6 text-center xl:px-12">
          <SectionHeader
            dark={false}
            center
            eyebrow="Cenários indicados"
            title="Onde o S.I.G.N.A.L. gera mais valor"
            text="O método é especialmente indicado quando a empresa possui diferentes iniciativas em andamento, mas precisa de clareza, prioridade e coordenação para transformar esforço em evolução consistente."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {valueScenarios.map((segment) => (
              <span key={segment} className="rounded-full border border-[#11100f]/18 bg-[#f8f8f8]/45 px-5 py-3 text-sm font-semibold text-[#11100f]/82">
                {segment}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-lg leading-[1.7] text-[#11100f]/72">
            Quanto maior a necessidade de confiança antes da decisão, maior a importância de organizar sinais de autoridade, contexto e presença digital.
          </p>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Rigor estratégico"
            title="O que o S.I.G.N.A.L. não promete"
            text="Uma metodologia séria também precisa deixar claro o que não pode ser garantido."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <PromisePanel title="Não prometemos" items={noPromises} icon="x" />
            <PromisePanel title="O que entregamos" items={realDeliveries} icon="check" />
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-center text-lg leading-[1.7] text-[#e0d3c3]">
            Nenhuma consultoria controla integralmente os mecanismos de busca ou as respostas de plataformas terceiras. Nosso trabalho é construir e fortalecer as condições necessárias para ampliar compreensão, autoridade, visibilidade e consideração.
          </p>
        </div>
      </section>

      <section className="bg-[#11100f] px-6 pb-24 md:pb-32 xl:px-12">
        <div className="mx-auto max-w-[1080px] rounded-[8px] border border-[#b28453]/35 bg-[#171614] px-7 py-14 text-center md:px-14 md:py-18 shadow-2xl shadow-black/35">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">PRÓXIMO PASSO</span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[34px] sm:text-[44px] md:text-[58px] font-bold leading-[1.08]">
            Transforme busca, conteúdo e autoridade em uma estratégia coordenada
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-[1.7] text-[#f8f8f8]/70">
            A AUDITSEO aplica o Método S.I.G.N.A.L. para identificar o que limita a presença da sua empresa, organizar prioridades e coordenar a construção de autoridade no Google e nas plataformas de inteligência artificial.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryButton onClick={() => onNavigate("form-contato")}>Solicitar avaliação estratégica</PrimaryButton>
            <button
              onClick={() => onNavigate("form-contato")}
              className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
            >
              Falar com um consultor
            </button>
          </div>
          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.1em] text-[#8c8275]">
            A primeira conversa é para entender o cenário atual da sua empresa e os próximos passos possíveis.
          </p>
        </div>
      </section>


      <SiteFooter onNavigate={onNavigate} />
    </main>
  );
}

function ComparisonList({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <div className={muted ? "border-r border-[#b28453]/20 pr-0 md:pr-8" : ""}>
      <h4 className={`font-mono text-[11px] font-bold uppercase tracking-[0.14em] ${muted ? "text-[#8c8275]" : "text-[#b28453]"}`}>
        {title}
      </h4>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-[1.6] text-[#f8f8f8]/72">
            <CircleDot className="mt-1 h-3.5 w-3.5 shrink-0 text-[#b28453]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SignalMethodMap() {
  return (
    <div className="relative mt-14 overflow-hidden rounded-[28px] border border-[#b28453]/[0.28] bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(17,16,15,0.98))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(178,132,83,0.16),transparent_30%),radial-gradient(circle_at_18%_18%,rgba(224,211,195,0.07),transparent_18%)]" />
      {[...Array(28)].map((_, index) => (
        <span
          key={index}
          className="pointer-events-none absolute h-[2px] w-[2px] rounded-full bg-[#e0d3c3]/30"
          style={{
            top: `${10 + ((index * 19) % 80)}%`,
            left: `${8 + ((index * 31) % 84)}%`,
            opacity: 0.12 + (index % 5) * 0.06,
          }}
        />
      ))}

      <div className="relative z-10 mb-12 flex justify-center">
        <div className="rounded-full border border-[#b28453]/45 bg-[#11100f]/90 px-8 py-4 shadow-[0_0_44px_rgba(178,132,83,0.18)]">
          <span className="font-display text-xl font-bold tracking-[0.2em] text-[#e0d3c3]">S.I.G.N.A.L</span>
        </div>
      </div>

      <div className="relative z-10">
        <div className="absolute left-[7%] right-[7%] top-9 hidden h-px bg-[#b28453]/30 lg:block" />
        <div className="grid gap-8 lg:grid-cols-6">
          {signalLayers.map((layer) => (
            <div key={layer.letter} className="group relative flex gap-5 lg:block lg:text-center">
              <div className="absolute bottom-0 left-9 top-[72px] w-px bg-[#b28453]/24 lg:hidden" />
              <div className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border border-[#b28453]/[0.58] bg-[radial-gradient(circle_at_35%_25%,rgba(224,211,195,0.18),rgba(178,132,83,0.12),rgba(17,16,15,0.95))] shadow-[0_0_32px_rgba(178,132,83,0.18)] transition-all group-hover:border-[#e0d3c3]/80 group-hover:shadow-[0_0_44px_rgba(178,132,83,0.30)] lg:mx-auto">
                <span className="font-serif text-[28px] font-bold text-[#e0d3c3]">{layer.letter}</span>
              </div>
              <div className="pt-1 lg:pt-7">
                <h3 className="font-display text-lg font-bold text-[#f8f8f8]">{layer.name}</h3>
                <p className="mt-3 text-sm leading-[1.55] text-[#f8f8f8]/62">{layer.short}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LayerDeepDive({ layer, index }: { layer: (typeof signalLayers)[number]; index: number }) {
  return (
    <article className="relative overflow-hidden rounded-[28px] border border-[#b28453]/[0.26] bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_28px_80px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-14">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(178,132,83,0.20),transparent_68%)]" />
      <div className="absolute left-8 top-14 hidden h-4 w-4 rounded-full border border-[#b28453]/60 bg-[#11100f] shadow-[0_0_22px_rgba(178,132,83,0.32)] lg:block" />
      <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14">
        <div className="relative border-l border-[#b28453]/35 pl-6 lg:border-l-0 lg:pl-0">
          <span className="font-display text-[88px] font-bold leading-none tracking-[-0.06em] text-[#b28453] opacity-90 md:text-[116px]">
            {layer.letter}
          </span>
          <div className="mt-5 h-px w-24 bg-[#b28453]/55" />
          <h3 className="mt-7 font-display text-3xl font-bold text-[#f8f8f8] md:text-4xl">{layer.name}</h3>
          <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#b28453]">{layer.pt}</p>
          <p className="mt-5 font-display text-xl leading-[1.42] text-[#e0d3c3] md:text-2xl">{layer.question}</p>
        </div>

        <div>
          <p className="max-w-3xl text-base leading-[1.75] text-[#f8f8f8]/70 md:text-lg">{layer.explanation}</p>

          <div className="mt-8 rounded-[18px] border border-[#b28453]/[0.18] bg-white/[0.025] p-6">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#b28453]">
              {layer.letter === "A" ? "O que o roadmap apresenta" : layer.letter === "L" ? "O que acompanhamos" : "O que analisamos"}
            </h4>
            <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {layer.analysis.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-[1.55] text-[#f8f8f8]/68">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b28453]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-[18px] border border-[#b28453]/[0.28] bg-[#b28453]/10 p-[22px]">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#e0d3c3]">Resultado</h4>
            <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/76">{layer.result}</p>
          </div>
        </div>

      </div>
    </article>
  );
}
function ComparisonCard({ title, items, highlighted = false }: { title: string; items: string[]; highlighted?: boolean }) {
  return (
    <div className={`rounded-[8px] border p-7 md:p-9 ${highlighted ? "border-[#b28453]/55 bg-[#11100f] text-[#f8f8f8]" : "border-[#11100f]/14 bg-[#f8f8f8]/45 text-[#11100f]"}`}>
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className={`flex gap-3 text-sm leading-[1.65] ${highlighted ? "text-[#f8f8f8]/72" : "text-[#11100f]/72"}`}>
            {highlighted ? <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#b28453]" /> : <CircleDot className="mt-1 h-4 w-4 shrink-0 text-[#6d5132]" />}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PromisePanel({ title, items, icon }: { title: string; items: string[]; icon: "x" | "check" }) {
  return (
    <div className="rounded-[8px] border border-[#b28453]/20 bg-[#171614] p-7 md:p-9">
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <ul className="mt-7 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-[1.65] text-[#f8f8f8]/70">
            {icon === "check" ? <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#b28453]" /> : <XCircle className="mt-1 h-4 w-4 shrink-0 text-[#8c8275]" />}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
