import { useEffect, type ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Compass,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SiteFooter from "./SiteFooter";

interface GeoIaPageProps {
  onNavigate: (targetId: string) => void;
}

const heroSignals = [
  { label: "Entidade", x: 27, y: 18 },
  { label: "Contexto", x: 69, y: 16 },
  { label: "Autoridade", x: 86, y: 42 },
  { label: "Conteúdo", x: 78, y: 74 },
  { label: "Schema", x: 50, y: 86 },
  { label: "Reputação", x: 20, y: 72 },
  { label: "Intenção", x: 13, y: 42 },
];

const searchChanges = [
  {
    before: "posição",
    now: "interpretação",
    text: "Não basta estar indexado. A marca precisa ser compreendida com clareza pelos sistemas de busca e resposta.",
  },
  {
    before: "palavra-chave",
    now: "entidade e contexto",
    text: "O conteúdo precisa deixar claro quem é a marca, o que ela oferece, para quem é relevante e por que deve ser considerada.",
  },
  {
    before: "tráfego",
    now: "consideração",
    text: "Parte da decisão pode acontecer antes do clique, em respostas, resumos, comparações, avaliações e sinais externos.",
  },
  {
    before: "conteúdo isolado",
    now: "ecossistema de sinais",
    text: "Site, dados estruturados, reputação, menções, autoridade, páginas e conteúdo precisam contar a mesma história.",
  },
];

const geoSignals = [
  ["Clareza de entidade", "Quem é a marca, o que faz, onde atua, para quem serve e qual problema resolve."],
  ["Conteúdo explicativo", "Páginas e conteúdos que respondem perguntas reais com profundidade, contexto e consistência."],
  ["Dados estruturados", "Schema Markup coerente com o conteúdo visível e com a realidade da marca."],
  ["Autoridade temática", "Consistência entre páginas, conteúdos, serviços, especialistas, provas e reputação."],
  ["Presença pública", "Menções, avaliações, perfis, diretórios, backlinks e consistência entre canais."],
  ["Perguntas e respostas estratégicas", "Conteúdo que antecipa dúvidas, objeções e critérios de decisão do cliente."],
];

const agencyReasons = [
  ["Responder ao hype com método", "Sua agência ganha uma forma madura de falar sobre IA sem prometer milagres."],
  ["Transformar curiosidade em proposta", "Perguntas sobre ChatGPT, Gemini e AI Overviews viram abertura para uma conversa estratégica."],
  ["Reposicionar SEO", "SEO deixa de ser apenas tráfego e passa a ser inteligência de presença, autoridade e decisão."],
  ["Aumentar valor percebido", "O cliente enxerga uma entrega conectada ao futuro da busca, não apenas tarefas técnicas."],
];

const clientQuestions = [
  "Minha empresa aparece no ChatGPT?",
  "Como faço minha marca ser citada por IA?",
  "O Google ainda vai gerar tráfego?",
  "Conteúdo ainda funciona?",
  "O que é AI Overview?",
  "Meu concorrente está sendo recomendado?",
  "Meu site está preparado para a nova busca?",
  "O que preciso mudar para ser mais confiável?",
];

const interpretationLayers = [
  ["Entidade", "Quem é a marca e qual é seu contexto."],
  ["Oferta", "O que ela entrega, para quem e com quais diferenciais."],
  ["Autoridade", "Que sinais mostram que ela sabe do assunto."],
  ["Confiança", "Quais provas, avaliações, menções e reputação sustentam sua credibilidade."],
  ["Estrutura", "Como o site organiza conteúdo, dados, páginas e informações."],
  ["Consistência", "Se site, perfis, menções e conteúdos comunicam a mesma realidade."],
];

const backstageSteps = [
  ["Leitura da presença atual", "Avaliamos como a marca está estruturada hoje em site, conteúdo, autoridade, dados e reputação."],
  ["Mapeamento de entidades e contexto", "Organizamos quem é a marca, quais temas domina, quais serviços oferece e como deve ser compreendida."],
  ["Diagnóstico de clareza para AI Search", "Identificamos lacunas que dificultam a interpretação da marca em mecanismos de busca e resposta."],
  ["Plano de estruturação", "Priorizamos ações em conteúdo, dados estruturados, páginas, autoridade e consistência pública."],
  ["Evolução e monitoramento", "Acompanhamos mudanças, aprendizados e oportunidades para ajustar a estratégia ao longo do tempo."],
];

const geoScenarios = [
  ["Cliente perguntando sobre IA", "Quando a empresa quer entender como ChatGPT, Gemini ou AI Overviews podem impactar sua visibilidade."],
  ["Mercado high-ticket", "Quando a decisão depende de confiança, validação, autoridade e reputação antes da compra."],
  ["Marca com baixa clareza", "Quando o site não explica bem quem é a empresa, o que oferece, onde atua e por que é confiável."],
  ["Conteúdo sem autoridade", "Quando há volume de artigos, mas pouca profundidade, consistência e validação temática."],
  ["Concorrentes mais fortes", "Quando outras marcas dominam respostas, conteúdos, avaliações, menções e presença pública."],
  ["Empresa em reposicionamento", "Quando o negócio está mudando oferta, público, mercado ou narrativa e precisa reorganizar sinais."],
];

const agencyOffers = [
  ["Diagnóstico de presença na nova busca", "Avaliar como a marca está sendo compreendida em ambientes tradicionais e generativos."],
  ["Readiness para AI Search", "Preparar site, conteúdo, dados e autoridade para melhor interpretação por mecanismos de resposta."],
  ["Autoridade de entidade", "Organizar reputação, narrativa, provas, menções, estrutura e consistência pública."],
  ["Arquitetura de conteúdo para IA", "Criar conteúdos explicativos, páginas estratégicas e respostas que fortalecem clareza e contexto."],
  ["Roadmap GEO 90 dias", "Transformar o diagnóstico em plano de evolução com ações priorizadas."],
];

const governanceCards = [
  ["Sem promessas absolutas", "Não vendemos aparição garantida em ChatGPT, Gemini ou AI Overviews."],
  ["Com critério técnico", "Dados estruturados, conteúdo, autoridade e contexto precisam refletir a realidade da marca."],
  ["Com governança humana", "Tecnologia pode acelerar análise e organização, mas a estratégia passa por validação especializada."],
];

const notPromised = [
  "aparecer garantido no ChatGPT",
  "aparecer garantido no Gemini",
  "AI Overviews garantido",
  "ranking garantido",
  "tráfego imediato",
  "autoridade criada apenas com schema",
  "IA substituindo estratégia",
  "conteúdo automático sem critério",
];

const structuredSignals = [
  "clareza de entidade",
  "contexto semântico",
  "autoridade temática",
  "dados estruturados",
  "conteúdo explicativo",
  "reputação e sinais públicos",
  "roadmap de evolução",
  "diagnóstico white-label",
  "governança estratégica",
];

export default function GeoIaPage({ onNavigate }: GeoIaPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageSchema = "geo-ia";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: "GEO e IA para Agências | Search Intelligence na Nova Busca | AUDITSEO",
          url: `https://www.auditseo.com.br/geo-ia`,
          description:
            "GEO, IA e Search Intelligence para agências: prepare marcas para a nova busca com autoridade de entidade, dados estruturados, contexto, conteúdo e governança estratégica.",
        },
        {
          "@type": "Service",
          name: "GEO, IA e Search Intelligence white-label para agências",
          provider: { "@type": "Organization", name: "AUDITSEO" },
          serviceType: "Generative Engine Optimization, AI Search e autoridade de entidade",
        },
        {
          "@type": "ItemList",
          name: "Camadas de interpretação para GEO e IA",
          itemListElement: interpretationLayers.map(([name, description], index) => ({
            "@type": "ListItem",
            position: index + 1,
            name,
            description,
          })),
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const scrollToNewSearch = () => {
    const target = document.getElementById("nova-busca");
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - 82, behavior: "smooth" });
  };

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <style>{`
        @keyframes geoNodeFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -9px, 0); }
        }

        @keyframes geoCorePulse {
          0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 26px rgba(178,132,83,0.24)); }
          50% { opacity: 1; filter: drop-shadow(0 0 44px rgba(178,132,83,0.42)); }
        }

        @keyframes geoParticle {
          0%, 100% { opacity: 0.12; transform: translate3d(0, 0, 0); }
          50% { opacity: 0.42; transform: translate3d(7px, -10px, 0); }
        }

        @keyframes geoLine {
          from { stroke-dashoffset: 120; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      <section id="geo-ia" className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-[112px] md:pb-20 md:pt-[128px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_35%,rgba(178,132,83,0.17),transparent_35%),linear-gradient(135deg,rgba(224,211,195,0.045),transparent_44%)]" />
        <div className="container relative z-10 mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-12 xl:gap-16">
            <div className="lg:col-span-6">
              <span className="mb-5 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
                GEO & IA PARA AGÊNCIAS
              </span>
              <h1 className="max-w-[780px] font-display text-[clamp(54px,5.4vw,82px)] font-bold leading-[1.02] tracking-[-0.045em] text-[#f8f8f8]">
                GEO e IA sem hype para a nova busca
              </h1>
              <p className="mt-8 max-w-[720px] text-[clamp(18px,1.35vw,22px)] leading-[1.55] text-[rgba(248,248,248,0.76)]">
                A AUDITSEO ajuda sua agência a transformar AI Search, GEO, autoridade de entidade e inteligência de busca em uma entrega white-label, estratégica e responsável para seus clientes.
              </p>
              <p className="mt-[22px] max-w-[640px] text-[16px] leading-[1.5] text-[#e0d3c3]/[0.78]">
                Não prometemos “aparecer na IA”. Estruturamos os sinais que tornam marcas mais claras, confiáveis e interpretáveis em ambientes de busca e resposta.
              </p>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton onClick={() => onNavigate("diagnostico")}>Avaliar parceria estratégica</PrimaryButton>
                <button
                  onClick={scrollToNewSearch}
                  className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                >
                  Entender a nova busca
                </button>
              </div>
              <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.08em] text-[#8c8275]">
                AI Search · GEO · Autoridade de Entidade · Dados Estruturados · Search Intelligence
              </p>
            </div>
            <div className="lg:col-span-6">
              <GeoHeroVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6 text-center xl:px-12">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">VISÃO AUDITSEO</span>
          <h2 className="mx-auto mt-5 max-w-5xl font-display text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-[#f8f8f8] md:text-[54px]">
            A IA não eliminou a busca. Ela aumentou a exigência por{" "}
            <span className="text-[#b28453]">clareza</span>, <span className="text-[#b28453]">autoridade</span> e{" "}
            <span className="text-[#b28453]">contexto</span>.
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-7 text-lg leading-[1.75] text-[#f8f8f8]/70 md:text-xl">
            <p>
              Durante anos, muitas marcas trataram SEO como disputa por posições, palavras-chave e tráfego. Essa base continua importante, mas já não explica toda a jornada de descoberta e decisão.
            </p>
            <p>
              Na nova busca, marcas precisam ser compreendidas por sistemas que conectam{" "}
              <span className="text-[#b28453]">entidades</span>, <span className="text-[#b28453]">reputação</span>,{" "}
              <span className="text-[#b28453]">conteúdo</span>, <span className="text-[#b28453]">dados</span> e contexto antes de gerar uma resposta ou influenciar uma escolha.
            </p>
            <p className="font-display text-2xl font-bold leading-[1.4] text-[#e0d3c3]">
              GEO e IA não substituem estratégia. Elas exigem uma estratégia mais organizada.
            </p>
          </div>
        </div>
      </section>

      <section id="nova-busca" className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            dark
            eyebrow="Nova busca"
            title="O que mudou não foi apenas o canal. Foi a forma como a decisão é construída."
            text="A busca deixou de ser apenas uma página de resultados e passou a envolver respostas, resumos, recomendações, comparações e validações distribuídas."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {searchChanges.map((item, index) => (
              <article key={item.now} className="min-h-[285px] rounded-[24px] border border-[#11100f]/12 bg-[#f8f8f8]/42 p-7 shadow-[0_20px_70px_rgba(17,16,15,0.10)]">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#6d5132]">
                  0{index + 1}
                </span>
                <div className="mt-7 space-y-5">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#11100f]/45">Antes</p>
                    <h3 className="mt-1 font-display text-2xl font-bold leading-[1.12]">{item.before}</h3>
                  </div>
                  <div className="h-px bg-gradient-to-r from-[#b28453] to-transparent" />
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#6d5132]">Agora</p>
                    <h3 className="mt-1 font-display text-2xl font-bold leading-[1.12]">{item.now}</h3>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-[1.7] text-[#11100f]/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            eyebrow="GEO na prática"
            title="GEO não é “otimizar para robôs”. É organizar sinais para a marca ser melhor interpretada."
            text="Generative Engine Optimization deve ser tratada como uma camada estratégica de clareza, contexto, autoridade e estruturação de informação."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {geoSignals.map(([title, text], index) => (
              <div key={title}>
                <DarkCard index={index} title={title} text={text} icon={index % 3 === 0 ? <Search size={18} /> : index % 3 === 1 ? <Sparkles size={18} /> : <Layers3 size={18} />} />
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-4xl rounded-[22px] border border-[#b28453]/28 bg-[#171614] p-7 text-center font-display text-2xl font-bold leading-[1.35] text-[#e0d3c3]">
            GEO não começa na IA. Começa na organização dos sinais que a IA, os buscadores e os clientes precisam entender.
          </p>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            dark
            eyebrow="Oportunidade para agências"
            title="Seus clientes vão pedir IA. Mas eles precisam de estratégia de busca."
            text="O dono da empresa não sabe exatamente o que é GEO, AI Search ou autoridade de entidade. Mas ele sente que a forma de ser encontrado e escolhido está mudando."
          />
          <p className="mt-8 max-w-4xl text-lg leading-[1.75] text-[#11100f]/72">
            Essa mudança abre uma oportunidade para agências que querem sair do discurso genérico sobre IA e apresentar uma entrega real: diagnóstico, clareza, organização de sinais, autoridade, dados e evolução.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {agencyReasons.map(([title, text], index) => (
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

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Perguntas do mercado"
            title="As perguntas que vão chegar na mesa da sua agência"
            text="A AUDITSEO entende as dúvidas que os clientes finais já começam a levar para as agências."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {clientQuestions.map((question, index) => (
              <article key={question} className="rounded-[22px] border border-[#b28453]/20 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-display text-xl font-bold leading-[1.25] text-[#f8f8f8]">“{question}”</h3>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-4xl rounded-[22px] border border-[#b28453]/28 bg-[#171614] p-7 text-center font-display text-2xl font-bold leading-[1.35] text-[#e0d3c3]">
            A pior resposta é improvisar. A melhor resposta é transformar essas dúvidas em diagnóstico, método e plano de evolução.
          </p>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            dark
            eyebrow="Camadas de interpretação"
            title="A IA não avalia apenas uma página. Ela interpreta um ecossistema de sinais."
            text="Quanto mais clara, consistente e validada uma marca é, maiores as chances de ser corretamente compreendida em diferentes ambientes de descoberta."
          />
          <div className="mt-14 overflow-hidden rounded-[28px] border border-[#b28453]/32 bg-[#11100f] p-7 shadow-[0_28px_90px_rgba(17,16,15,0.24)] md:p-10">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h3 className="font-display text-3xl font-bold text-[#f8f8f8] md:text-4xl">Camadas de interpretação</h3>
              <p className="max-w-xl text-sm leading-[1.7] text-[#f8f8f8]/62">
                Uma leitura organizada do que precisa estar claro para buscadores, mecanismos de resposta e decisão humana.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {interpretationLayers.map(([title, text], index) => (
                <article key={title} className="relative rounded-[20px] border border-[#b28453]/18 bg-white/[0.025] p-6">
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#b28453]/10 font-mono text-xs font-bold text-[#e0d3c3]">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#f8f8f8]">{title}</h3>
                  <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/66">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Bastidores GEO & IA"
            title="Como a AUDITSEO transforma GEO e IA em entrega para sua agência"
            text="A AUDITSEO atua nos bastidores para estruturar diagnóstico, clareza, autoridade e roadmap — sem transformar IA em promessa vazia."
          />
          <div className="mt-14 space-y-5">
            {backstageSteps.map(([title, text], index) => (
              <article key={title} className="grid gap-5 rounded-[24px] border border-[#b28453]/20 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-6 md:grid-cols-[88px_0.8fr_1.4fr] md:items-center md:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#b28453]/10 font-mono text-sm font-bold text-[#e0d3c3]">
                  {index + 1}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#f8f8f8]">{title}</h3>
                <p className="text-sm leading-[1.7] text-[#f8f8f8]/66">{text}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-4xl rounded-[22px] border border-[#b28453]/28 bg-[#171614] p-7 text-center font-display text-2xl font-bold leading-[1.35] text-[#e0d3c3]">
            Sua agência apresenta a evolução. A AUDITSEO estrutura a inteligência nos bastidores.
          </p>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            dark
            center
            eyebrow="Cenários de aplicação"
            title="Quando GEO & IA entram como solução para o cliente"
            text="Nem todo projeto precisa da mesma intensidade. GEO e IA fazem mais sentido quando existe necessidade de clareza, autoridade, reputação ou adaptação à nova busca."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {geoScenarios.map(([title, text], index) => (
              <article key={title} className="rounded-[22px] border border-[#11100f]/12 bg-[#f8f8f8]/42 p-7 shadow-[0_20px_70px_rgba(17,16,15,0.10)]">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#6d5132]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-display text-2xl font-bold leading-[1.14]">{title}</h3>
                <p className="mt-5 text-sm leading-[1.7] text-[#11100f]/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            eyebrow="Oferta white-label"
            title="Como GEO & IA podem virar uma nova oferta no portfólio da agência"
            text="A AUDITSEO estrutura a inteligência. Sua agência transforma isso em proposta comercial para o cliente."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-5">
            {agencyOffers.map(([title, text], index) => (
              <article key={title} className="min-h-[260px] rounded-[22px] border border-[#b28453]/20 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-1 hover:border-[#b28453]/44">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#b28453]/10 font-mono text-xs font-bold text-[#e0d3c3]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold leading-[1.18] text-[#f8f8f8]">{title}</h3>
                <p className="mt-5 text-sm leading-[1.7] text-[#f8f8f8]/66">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-4xl text-sm leading-[1.8] text-[#f8f8f8]/62">
            A linguagem comercial deve ser responsável: preparar, organizar, estruturar, aumentar clareza e melhorar interpretação. Nunca garantir aparição.
          </p>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1180px] px-6 xl:px-12">
          <SectionHeader
            dark
            center
            eyebrow="Governança"
            title="IA com método. Não com improviso."
            text="A AUDITSEO trata IA como uma camada estratégica da busca, não como argumento de venda sem controle."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {governanceCards.map(([title, text], index) => (
              <article key={title} className="rounded-[22px] border border-[#11100f]/12 bg-[#f8f8f8]/42 p-7 shadow-[0_20px_70px_rgba(17,16,15,0.10)]">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/50 bg-[#11100f] text-[#b28453]">
                  {index === 0 ? <AlertTriangle size={18} /> : index === 1 ? <Compass size={18} /> : <ShieldCheck size={18} />}
                </div>
                <h3 className="font-display text-2xl font-bold leading-[1.14]">{title}</h3>
                <p className="mt-5 text-sm leading-[1.7] text-[#11100f]/70">{text}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-4xl rounded-[22px] border border-[#b28453]/32 bg-[#11100f] p-7 text-center font-display text-2xl font-bold leading-[1.35] text-[#e0d3c3]">
            Essa maturidade protege a agência de vender hype e ajuda o cliente a entender o que realmente precisa ser feito.
          </p>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1180px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Limites responsáveis"
            title="O que GEO & IA não devem prometer"
            text="A nova busca exige responsabilidade. Nem toda promessa sobre IA é séria."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <ListPanel title="Não prometemos" items={notPromised} tone="danger" />
            <ListPanel title="O que estruturamos" items={structuredSignals} tone="positive" />
          </div>
          <p className="mx-auto mt-12 max-w-4xl text-center font-display text-2xl font-bold leading-[1.35] text-[#e0d3c3]">
            GEO sério não é promessa de visibilidade artificial. É preparação estruturada para uma busca mais interpretativa.
          </p>
        </div>
      </section>

      <section className="bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1080px] rounded-[8px] border border-[#b28453]/35 bg-[#171614] px-7 py-14 text-center shadow-2xl shadow-black/35 md:px-14 md:py-18">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">GEO & IA PARA SUA AGÊNCIA</span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[34px] font-bold leading-[1.08] sm:text-[44px] md:text-[58px]">
            Quer transformar IA e nova busca em uma entrega real para seus clientes?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.7] text-[#f8f8f8]/70 md:text-lg">
            A AUDITSEO pode estruturar nos bastidores a camada de GEO, autoridade e Search Intelligence que sua agência precisa para responder ao novo momento da busca com método e segurança.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryButton onClick={() => onNavigate("diagnostico")}>Avaliar parceria estratégica</PrimaryButton>
            <button
              onClick={() => onNavigate("solucoes")}
              className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
            >
              Conhecer soluções
            </button>
          </div>
          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.1em] text-[#8c8275]">
            A primeira conversa é para entender como sua agência pode posicionar GEO & IA sem cair em hype ou promessa exagerada.
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

function GeoHeroVisual() {
  return (
    <div className="relative mx-auto flex h-[520px] max-w-[620px] items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(178,132,83,0.15),transparent_32%),radial-gradient(circle_at_30%_20%,rgba(224,211,195,0.08),transparent_22%)]" />
      {[...Array(48)].map((_, index) => (
        <span
          key={index}
          className="pointer-events-none absolute h-[2px] w-[2px] rounded-full bg-[#e0d3c3]/45"
          style={{
            top: `${7 + ((index * 23) % 84)}%`,
            left: `${5 + ((index * 37) % 90)}%`,
            opacity: 0.12 + (index % 5) * 0.07,
            animation: `geoParticle ${7 + (index % 6)}s ease-in-out infinite`,
            animationDelay: `${index * 0.18}s`,
          }}
        />
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 600 520" aria-hidden="true">
        <defs>
          <linearGradient id="geoLineGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(178,132,83,0.08)" />
            <stop offset="50%" stopColor="rgba(224,211,195,0.42)" />
            <stop offset="100%" stopColor="rgba(178,132,83,0.08)" />
          </linearGradient>
        </defs>
        {heroSignals.map((node) => (
          <line
            key={node.label}
            x1="300"
            y1="260"
            x2={(node.x / 100) * 600}
            y2={(node.y / 100) * 520}
            stroke="url(#geoLineGradient)"
            strokeWidth="1"
            strokeDasharray="6 10"
            style={{ animation: "geoLine 16s linear infinite" }}
          />
        ))}
      </svg>

      <div
        className="absolute left-1/2 top-1/2 z-20 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#b28453]/42 bg-[radial-gradient(circle_at_35%_30%,rgba(224,211,195,0.24),rgba(178,132,83,0.20),rgba(17,16,15,0.96)_68%)] shadow-[0_0_76px_rgba(178,132,83,0.30)]"
        style={{ animation: "geoCorePulse 6s ease-in-out infinite" }}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#11100f]/82 text-center">
          <span className="font-display text-base font-bold tracking-[0.13em] text-[#e0d3c3]">AI SEARCH</span>
        </div>
      </div>

      {heroSignals.map((node, index) => (
        <div
          key={node.label}
          className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%`, animation: `geoNodeFloat ${8 + index}s ease-in-out infinite`, animationDelay: `${index * 0.35}s` }}
        >
          <div className="rounded-full border border-[#b28453]/32 bg-[#11100f]/86 px-4 py-2 shadow-[0_16px_42px_rgba(0,0,0,0.34)] backdrop-blur-sm">
            <span className="font-display text-sm font-bold text-[#f8f8f8]">{node.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function DarkCard({ index, title, text, icon }: { index: number; title: string; text: string; icon: ReactNode }) {
  return (
    <article className="rounded-[22px] border border-[#b28453]/20 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-1 hover:border-[#b28453]/44">
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/45 bg-[#b28453]/10 text-[#b28453]">
        {icon}
      </div>
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-5 font-display text-2xl font-bold leading-[1.16] text-[#f8f8f8]">{title}</h3>
      <p className="mt-5 text-sm leading-[1.7] text-[#f8f8f8]/66">{text}</p>
    </article>
  );
}

function ListPanel({ title, items, tone }: { title: string; items: string[]; tone: "danger" | "positive" }) {
  return (
    <article className="rounded-[28px] border border-[#b28453]/24 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_28px_80px_rgba(0,0,0,0.34)] md:p-9">
      <h3 className="font-display text-3xl font-bold text-[#f8f8f8]">{title}</h3>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-[1.65] text-[#f8f8f8]/70">
            {tone === "positive" ? <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#b28453]" /> : <CircleDot className="mt-1 h-4 w-4 shrink-0 text-[#b28453]" />}
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
