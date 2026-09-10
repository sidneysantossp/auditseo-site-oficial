import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import Header from "./Header";
import SiteFooter from "./SiteFooter";

type Scenario = {
  id: string;
  title: string;
  description: string;
  solution: string;
  solutionPath: string;
  diagnosis: string;
  priorities: string[];
};

const scenarios: Scenario[] = [
  {
    id: "foundation",
    title: "Projeto começando do zero",
    description: "Site novo, marca nova ou uma operação que ainda não construiu presença orgânica relevante.",
    solution: "Search Foundation",
    solutionPath: "/solucoes/projetos-comecando-do-zero",
    diagnosis: "O principal risco é estruturar tecnologia, conteúdo e marca sem uma fundação de busca coerente desde o início.",
    priorities: ["arquitetura e indexabilidade", "mapa de intenção", "entidade e dados estruturados", "base editorial e mensuração"],
  },
  {
    id: "activation",
    title: "Site no ar, mas sem tração",
    description: "O projeto existe, porém impressões, tráfego e oportunidades orgânicas continuam abaixo do potencial.",
    solution: "Organic Activation",
    solutionPath: "/solucoes/site-sem-tracao",
    diagnosis: "Precisamos descobrir se o bloqueio está em indexação, arquitetura, demanda, conteúdo, autoridade ou combinação desses sinais.",
    priorities: ["diagnóstico de cobertura", "gaps técnicos e semânticos", "intenção comercial", "priorização por impacto"],
  },
  {
    id: "recovery",
    title: "Perda de tráfego ou posições",
    description: "A empresa já teve visibilidade e registrou queda relevante ou dificuldade de recuperação.",
    solution: "Search Recovery",
    solutionPath: "/solucoes/recuperacao-organica",
    diagnosis: "Antes de executar novas ações, é necessário separar causas técnicas, algorítmicas, competitivas, editoriais e de mudança de intenção.",
    priorities: ["linha do tempo da perda", "URLs e consultas afetadas", "mudanças técnicas", "concorrentes e intenção"],
  },
  {
    id: "authority",
    title: "Autoridade pouco reconhecida",
    description: "A empresa possui experiência real, mas ainda não é percebida como referência no ecossistema de busca.",
    solution: "Entity Authority",
    solutionPath: "/solucoes/autoridade-de-entidade",
    diagnosis: "O desafio deixa de ser apenas ranking: precisamos tornar a entidade mais clara, consistente, verificável e sustentada por evidências.",
    priorities: ["narrativa da entidade", "provas e especialistas", "consistência pública", "fontes e menções externas"],
  },
  {
    id: "content",
    title: "Conteúdo sem direção",
    description: "Existe produção de conteúdo, mas falta conexão com demanda, jornada de decisão e objetivos comerciais.",
    solution: "Intent Content Architecture",
    solutionPath: "/solucoes/conteudo-por-intencao",
    diagnosis: "Volume de publicação não substitui uma arquitetura que conecte intenção, entidades, serviços e decisão.",
    priorities: ["mapa de intenções", "clusters temáticos", "páginas de serviço", "links internos e atualização"],
  },
  {
    id: "geo",
    title: "Preparação para busca com IA",
    description: "A empresa quer entender sua presença em ChatGPT, Gemini, AI Overviews e outros ambientes generativos.",
    solution: "Generative Search Readiness",
    solutionPath: "/solucoes/geo-ia-readiness",
    diagnosis: "Não existe atalho para garantir menções em IA. O trabalho começa pela clareza, recuperação, autoridade e verificabilidade dos sinais da empresa.",
    priorities: ["entidades e semântica", "conteúdo recuperável", "fontes e evidências", "baseline de menções/citações"],
  },
  {
    id: "migration",
    title: "Migração ou reformulação",
    description: "O site passará por redesign, troca de plataforma, arquitetura ou domínio.",
    solution: "SEO Migration & Risk Control",
    solutionPath: "/solucoes/migracao-risco-seo",
    diagnosis: "Uma migração pode apagar sinais construídos por anos se URLs, conteúdo, links, indexação e equivalências não forem controlados.",
    priorities: ["inventário de URLs", "mapa de redirects", "paridade de conteúdo", "validação pré e pós-release"],
  },
  {
    id: "evolution",
    title: "Crescimento orgânico estagnado",
    description: "A empresa já possui base e histórico, mas os ciclos atuais não estão criando novas frentes de crescimento.",
    solution: "Organic Evolution Cycle",
    solutionPath: "/solucoes/evolucao-organica",
    diagnosis: "O próximo salto exige transformar dados, concorrência, novas intenções e aprendizados em um ciclo contínuo de decisão.",
    priorities: ["baseline e oportunidades", "novas consultas e jornadas", "concorrência", "learning loop e roadmap"],
  },
];

const routeByNav: Record<string, string> = {
  inicio: "/",
  signal: "/metodo-signal",
  solucoes: "/solucoes",
  conteudo: "/blog",
  diagnostico: "/diagnostico",
  parceria: "/parceria",
  "geo-ia": "/geo-ia",
};

function navigateTo(sectionId: string) {
  if (typeof window === "undefined") return;
  window.location.assign(routeByNav[sectionId] || "/");
}

function scenarioIdFromUrl() {
  if (typeof window === "undefined") return null;
  const requested = new URLSearchParams(window.location.search).get("cenario");
  return requested && scenarios.some((scenario) => scenario.id === requested) ? requested : null;
}

function updateScenarioInUrl(id: string) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  url.searchParams.set("cenario", id);
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

export default function CompanyDiagnosticPage() {
  const [selectedId, setSelectedId] = useState<string>("foundation");
  const selected = scenarios.find((scenario) => scenario.id === selectedId) || scenarios[0];
  const [contact, setContact] = useState({
    name: "",
    company: "",
    whatsapp: "",
    email: "",
    site: "",
    projectUrl: "",
    context: "",
  });

  useEffect(() => {
    const requested = scenarioIdFromUrl();
    if (requested) setSelectedId(requested);
  }, []);

  const selectScenario = (id: string) => {
    setSelectedId(id);
    updateScenarioInUrl(id);
  };

  return (
    <div className="min-h-screen bg-[#11100f] text-[#f8f8f8]">
      <Header onNavClick={navigateTo} activeSection="diagnostico" />
      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-[132px] md:pb-28 md:pt-[158px] xl:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(178,132,83,0.17),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">DIAGNÓSTICO ESTRATÉGICO</span>
              <h1 className="mt-6 max-w-4xl font-display text-[48px] font-bold leading-[1.02] tracking-[-0.045em] text-[#f8f8f8] sm:text-[62px] md:text-[76px]">
                Descubra qual cenário está limitando sua presença na busca.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-[#f8f8f8]/72 md:text-xl">
                Selecione o momento atual da sua empresa. A leitura abaixo não substitui uma auditoria completa; ela organiza a hipótese inicial, os sinais que precisam ser investigados e o próximo caminho estratégico.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#e0d3c3]/64">
                <span className="rounded-full border border-[#b28453]/22 px-4 py-2">Sem promessa de ranking</span>
                <span className="rounded-full border border-[#b28453]/22 px-4 py-2">Leitura por cenário</span>
                <span className="rounded-full border border-[#b28453]/22 px-4 py-2">Próximo passo priorizado</span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-[28px] border border-[#b28453]/28 bg-[linear-gradient(145deg,rgba(31,30,28,0.97),rgba(13,13,12,0.99))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b28453]/42 bg-[#b28453]/10 text-[#b28453]">
                  <Compass size={22} />
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold leading-[1.12]">Primeiro entendemos o cenário.</h2>
                <p className="mt-5 text-sm leading-[1.75] text-[#f8f8f8]/66">
                  Um site novo, uma queda de tráfego e uma marca com autoridade pouco reconhecida não devem receber a mesma lista de tarefas. O diagnóstico começa pela diferença entre esses contextos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="organic-opportunity-scan" className="bg-[#e0d3c3] px-6 py-20 text-[#11100f] md:py-28 xl:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="max-w-4xl">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#8c613c]">ETAPA 01 — CENÁRIO</span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">Qual situação representa melhor sua empresa hoje?</h2>
              <p className="mt-5 max-w-3xl text-base leading-[1.75] text-[#2a2927]/76 md:text-lg">Escolha o ponto de partida mais próximo da realidade atual. A seleção pode ser refinada em uma análise completa.</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {scenarios.map((scenario) => {
                const active = scenario.id === selectedId;
                return (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => selectScenario(scenario.id)}
                    className={`min-h-[210px] rounded-[22px] border p-6 text-left transition-all duration-300 ${active ? "border-[#b28453] bg-[#11100f] text-[#f8f8f8] shadow-[0_22px_55px_rgba(17,16,15,0.22)]" : "border-[#11100f]/12 bg-[#f4eee5] text-[#11100f] hover:-translate-y-1 hover:border-[#b28453]/55"}`}
                    aria-pressed={active}
                  >
                    <div className={`flex h-9 w-9 items-center justify-center rounded-full border ${active ? "border-[#b28453] bg-[#b28453] text-white" : "border-[#b28453]/45 text-[#b28453]"}`}>
                      {active ? <CheckCircle2 size={17} /> : <Target size={16} />}
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold leading-[1.18]">{scenario.title}</h3>
                    <p className={`mt-4 text-sm leading-[1.65] ${active ? "text-[#f8f8f8]/66" : "text-[#2a2927]/72"}`}>{scenario.description}</p>
                  </button>
                );
              })}
            </div>

            <div id="diagnostic-result" className="mt-12 overflow-hidden rounded-[30px] border border-[#11100f]/12 bg-[#11100f] text-[#f8f8f8] shadow-[0_30px_90px_rgba(17,16,15,0.24)]">
              <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
                <div className="p-7 md:p-10">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">LEITURA INICIAL</span>
                  <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-5xl">{selected.solution}</h2>
                  <p className="mt-6 text-base leading-[1.75] text-[#f8f8f8]/72">{selected.diagnosis}</p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {selected.priorities.map((priority, index) => (
                      <div key={priority} className="rounded-[18px] border border-[#b28453]/18 bg-white/[0.025] p-5">
                        <div className="flex items-start gap-3">
                          {index === 0 ? <Search size={17} className="mt-0.5 shrink-0 text-[#b28453]" /> : index === 1 ? <ShieldCheck size={17} className="mt-0.5 shrink-0 text-[#b28453]" /> : index === 2 ? <Sparkles size={17} className="mt-0.5 shrink-0 text-[#b28453]" /> : <RefreshCw size={17} className="mt-0.5 shrink-0 text-[#b28453]" />}
                          <span className="text-sm font-semibold leading-[1.5] text-[#e0d3c3]">{priority}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a href={selected.solutionPath} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#b28453] transition-colors hover:text-[#e0d3c3]">
                    Entender esta solução <ArrowRight size={15} />
                  </a>
                </div>

                <div className="border-t border-[#b28453]/16 bg-[#0e0e0d] p-7 md:p-10 lg:border-l lg:border-t-0">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">ETAPA 02 — CONTEXTO</span>
                  <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12]">Quer aprofundar esse cenário com a AUDITSEO?</h2>
                  <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/64">Envie os dados essenciais. A solicitação só será confirmada quando o site conseguir entregar o contato ao nosso canal operacional.</p>

                  <form className="mt-8 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <TextInput label="Seu nome" value={contact.name} onChange={(value) => setContact((current) => ({ ...current, name: value }))} required />
                      <TextInput label="Empresa" value={contact.company} onChange={(value) => setContact((current) => ({ ...current, company: value }))} required />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <TextInput label="WhatsApp" value={contact.whatsapp} onChange={(value) => setContact((current) => ({ ...current, whatsapp: value }))} required />
                      <TextInput label="E-mail corporativo" type="email" value={contact.email} onChange={(value) => setContact((current) => ({ ...current, email: value }))} required />
                    </div>
                    <TextInput label="Site da empresa" type="url" value={contact.site} onChange={(value) => setContact((current) => ({ ...current, site: value }))} required />
                    <TextInput label="URL específica do projeto, opcional" type="url" value={contact.projectUrl} onChange={(value) => setContact((current) => ({ ...current, projectUrl: value }))} />
                    <label className="grid gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">Contexto adicional, opcional</span>
                      <textarea
                        value={contact.context}
                        onChange={(event) => setContact((current) => ({ ...current, context: event.target.value }))}
                        rows={4}
                        placeholder="Ex.: perdemos tráfego após uma migração; queremos entender nossa presença no Google e nas plataformas de IA..."
                        className="w-full rounded-[18px] border border-[#b28453]/24 bg-[#171614] px-5 py-4 text-sm text-[#f8f8f8] outline-none placeholder:text-[#f8f8f8]/28 focus:border-[#b28453]/65"
                      />
                    </label>
                    <button type="submit" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]">
                      Solicitar avaliação estratégica <Send size={15} />
                    </button>
                    <p className="text-center text-[11px] leading-[1.6] text-[#f8f8f8]/44">Sem garantia de posição ou menção em plataformas terceiras. A avaliação existe para definir prioridades com base no cenário real.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] px-6 py-20 md:py-24 xl:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["Hipótese, não veredito", "A leitura desta página organiza o ponto de partida. Uma auditoria real exige dados, histórico e validação."],
                ["Sem promessas artificiais", "Nenhuma consultoria controla integralmente rankings ou respostas de plataformas de IA."],
                ["Próximo passo claro", "O objetivo é identificar o cenário e decidir qual investigação ou solução faz sentido antes de executar."],
              ].map(([title, text], index) => (
                <article key={title} className="rounded-[22px] border border-[#b28453]/20 bg-[#171614] p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b28453]/38 bg-[#b28453]/10 text-[#b28453]">
                    {index === 0 ? <AlertTriangle size={17} /> : index === 1 ? <ShieldCheck size={17} /> : <Building2 size={17} />}
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold">{title}</h2>
                  <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/64">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter onNavigate={navigateTo} />
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">
        {label}{required ? <span className="ml-1">*</span> : null}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="w-full rounded-full border border-[#b28453]/24 bg-[#171614] px-5 py-4 text-sm text-[#f8f8f8] outline-none placeholder:text-[#f8f8f8]/28 focus:border-[#b28453]/65"
      />
    </label>
  );
}
