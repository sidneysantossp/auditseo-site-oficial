import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Compass,
  FileText,
  Layers3,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  XCircle,
} from "lucide-react";
import SiteFooter from "./SiteFooter";

interface ParaAgenciasPageProps {
  onNavigate: (targetId: string) => void;
}

const painPoints = [
  {
    title: "A agência já tem relacionamento com o cliente",
    text: "Mas nem sempre tem tempo, senioridade ou equipe especializada para estruturar uma entrega orgânica avançada.",
  },
  {
    title: "O cliente quer inovação",
    text: "Mas inovação não pode ser apenas discurso sobre IA. Precisa virar diagnóstico, plano, execução orientada e mensuração.",
  },
  {
    title: "A operação precisa escalar",
    text: "Mas contratar especialistas, validar ferramentas e montar time interno nem sempre faz sentido no momento da agência.",
  },
  {
    title: "A entrega precisa ser defendida",
    text: "Relatórios soltos não bastam. O cliente precisa enxergar direção, evolução e próximos passos.",
  },
];

const howWeEnter = [
  ["Diagnóstico white-label", "Analisamos site, conteúdo, concorrentes, SEO técnico, dados estruturados, autoridade e sinais de presença em IA."],
  ["Estratégia e priorização", "Organizamos o que fazer primeiro, o que tem maior impacto e quais ações sustentam crescimento e percepção de valor."],
  ["Roadmap de entrega", "Transformamos análise em plano prático, com etapas, prioridades, responsáveis e próximos movimentos."],
  ["Materiais para apresentação", "Sua agência pode usar relatórios, diagnósticos e apresentações com sua própria marca."],
  ["Apoio em bastidores", "Apoiamos sua agência com validação técnica, revisão estratégica e direcionamento para reuniões importantes."],
  ["Evolução e mensuração", "Acompanhamos sinais, aprendizados, oportunidades e evolução para fortalecer retenção e próximos ciclos."],
];

const deliverables = [
  ["Diagnóstico de Visibilidade Orgânica", "Onde a marca aparece, onde não aparece e quais oportunidades estão sendo perdidas."],
  ["Análise de Autoridade de Entidade", "Como a marca é compreendida por buscadores, IAs e usuários a partir de seus sinais públicos."],
  ["SEO Técnico e On-page Estratégico", "Correções, estrutura, conteúdo, headings, indexação, arquitetura e páginas prioritárias."],
  ["Dados Estruturados e Schema Markup", "Organização técnica dos sinais para ajudar buscadores a interpretar serviços, organização, FAQ, páginas e entidades."],
  ["GEO e AI Search Readiness", "Leitura de como a marca pode ser melhor compreendida em ambientes generativos e mecanismos de resposta."],
  ["Roadmap Orgânico 90 dias", "Plano claro de execução com prioridades, impacto esperado e próximos passos."],
];

const entityLayer = [
  ["Clareza de entidade", "Quem é a marca, o que oferece, onde atua e para quem é relevante."],
  ["Contexto semântico", "Como páginas, conteúdos e serviços se conectam com intenção de busca e jornada de decisão."],
  ["Sinais de confiança", "Provas, avaliações, especialistas, diferenciais, cases, menções e reputação."],
  ["Dados estruturados", "Schema Markup coerente com o conteúdo visível e com a realidade da marca."],
  ["Presença pública", "Consistência entre site, Google Business Profile, redes, diretórios e menções externas."],
  ["Interpretação por IA", "Como a marca pode ser lida, entendida e considerada em ambientes generativos."],
];

const partnershipModels = [
  ["Diagnóstico Avulso White-Label", "Para agências que precisam avaliar uma oportunidade, defender renovação ou abrir conversa com um cliente específico."],
  ["Consultoria Estratégica Recorrente", "Para agências que já têm equipe, mas precisam de direção, validação e priorização especializada."],
  ["Squad SEO/GEO White-Label", "Para agências que querem ampliar carteira e entregar mais sem contratar novos times."],
  ["Projeto Estratégico 90 dias", "Para clientes da agência que precisam de um plano intensivo de busca, autoridade, conteúdo e mensuração."],
];

const fitList = [
  "você já atende clientes que perguntam sobre Google, SEO, conteúdo ou IA;",
  "você quer oferecer uma entrega orgânica mais estratégica sem contratar especialistas agora;",
  "você precisa fortalecer retenção com diagnósticos e próximos passos mais claros;",
  "você quer transformar SEO/GEO em uma nova frente de valor;",
  "você prefere manter o relacionamento com o cliente e ter uma retaguarda especializada nos bastidores;",
  "você quer entregar inovação real sem depender de discurso genérico sobre IA.",
];

const notFitList = [
  "você procura apenas execução barata de tarefas SEO;",
  "você quer prometer resultados garantidos sem diagnóstico;",
  "você não quer envolver estratégia, dados ou mensuração;",
  "você prefere entregar relatórios genéricos em vez de direção estratégica;",
  "você busca apenas volume de conteúdo sem análise de intenção, autoridade e contexto.",
];

const processSteps = [
  ["1", "Conversa de encaixe", "Entendemos sua agência, carteira, tipos de cliente, dores e oportunidades."],
  ["2", "Escolha do modelo", "Definimos se faz mais sentido diagnóstico avulso, consultoria, squad ou projeto estratégico."],
  ["3", "Diagnóstico inicial", "Analisamos os sinais orgânicos, técnicos, semânticos, competitivos e de autoridade do cliente."],
  ["4", "Estratégia e roadmap", "Organizamos prioridades e entregáveis em um plano claro."],
  ["5", "Entrega white-label", "Sua agência recebe materiais que podem ser apresentados com sua marca."],
  ["6", "Acompanhamento e evolução", "Apoiamos os próximos ciclos com mensuração, aprendizados e novas oportunidades."],
];

const backstageItems = [
  "diagnóstico executivo",
  "mapa de oportunidades",
  "análise de concorrentes",
  "análise de autoridade de entidade",
  "auditoria técnica e on-page",
  "análise de dados estruturados",
  "roadmap 90 dias",
  "apresentação white-label",
  "recomendações priorizadas",
  "acompanhamento estratégico",
];

const faqs = [
  ["A AUDITSEO aparece para meu cliente?", "Não. A parceria pode ser totalmente white-label."],
  ["Vocês disputam minha conta?", "Não. O relacionamento e a frente comercial seguem com sua agência."],
  ["Minha agência precisa ter equipe de SEO?", "Não necessariamente. Podemos atuar como retaguarda estratégica ou complementar sua equipe atual."],
  ["Posso começar com apenas um cliente?", "Sim. A parceria pode começar com um diagnóstico ou projeto pontual."],
  ["Vocês prometem aparecer em IA?", "Não prometemos aparição garantida. Estruturamos os sinais que aumentam clareza, autoridade e capacidade de interpretação da marca em buscadores e ambientes generativos."],
  ["Preciso vender isso como SEO?", "Não necessariamente. A entrega pode ser posicionada como Search Intelligence, estratégia orgânica, GEO, autoridade digital ou inovação em busca."],
];

function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center items-center" : "items-start"} flex max-w-4xl flex-col`}>
      {eyebrow && (
        <span className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453] font-mono">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-[34px] sm:text-[42px] md:text-[52px] font-bold leading-[1.08] text-[#f8f8f8]">
        {title}
      </h2>
      {text && <p className="mt-6 text-base md:text-lg leading-[1.7] text-[#c9c9c9]">{text}</p>}
    </div>
  );
}

function PrimaryButton({ children, onClick }: { children: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0d3c3] hover:text-[#11100f]"
    >
      {children}
      <ArrowRight size={16} />
    </button>
  );
}

export default function ParaAgenciasPage({ onNavigate }: ParaAgenciasPageProps) {
  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <section className="relative overflow-hidden pt-[130px] md:pt-[160px] pb-20 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(178,132,83,0.16),transparent_34%),linear-gradient(135deg,rgba(224,211,195,0.05),transparent_42%)]" />
        <div className="container relative z-10 mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="mb-5 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
                PARCERIA WHITE-LABEL PARA AGÊNCIAS
              </span>
              <h1
                className="font-display font-bold text-[#f8f8f8]"
                style={{
                  fontSize: "clamp(48px, 5vw, 72px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.045em",
                  maxWidth: "760px",
                }}
              >
                SEO, GEO e IA white-label <br className="hidden md:inline" />
                para sua agência
              </h1>
              <p
                className="mt-10"
                style={{
                  color: "rgba(248,248,248,0.74)",
                  fontSize: "clamp(18px, 1.4vw, 22px)",
                  lineHeight: 1.55,
                  maxWidth: "680px",
                }}
              >
                A AUDITSEO atua nos bastidores para estruturar diagnósticos, roadmaps e entregas mensuráveis para os clientes da sua agência — sem ampliar sua estrutura interna.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton onClick={() => onNavigate("diagnostico")}>Avaliar parceria estratégica</PrimaryButton>
                <button
                  onClick={() => onNavigate("como-funciona")}
                  className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                >
                  Ver como funciona
                </button>
              </div>
              <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.08em] text-[#8c8275]">
                White-label · Diagnóstico estratégico · Roadmap · Mensuração
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-[8px] border border-[#b28453]/25 bg-[#181716]/90 p-6 shadow-2xl shadow-black/40">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#b28453]">Camada de parceria</p>
                    <h2 className="mt-2 font-display text-2xl font-bold">Sua agência mantém o relacionamento.</h2>
                  </div>
                  <ShieldCheck className="h-9 w-9 text-[#b28453]" />
                </div>
                <p className="text-lg leading-[1.6] text-[#e0d3c3]">
                  A AUDITSEO estrutura a inteligência orgânica por trás da entrega.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {["SEO técnico", "GEO & IA", "Camada de entidade", "Roadmap 90 dias"].map((item) => (
                    <div key={item} className="rounded-[8px] border border-white/10 bg-white/[0.03] p-4 text-sm font-semibold text-[#f8f8f8]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#b28453]/10 bg-[#181716] py-20 md:py-24">
        <div className="container mx-auto max-w-[1120px] px-6 text-center xl:px-12">
          <SectionHeader
            align="center"
            eyebrow="Mudança de mercado"
            title="O mercado mudou. A entrega orgânica também precisa mudar."
            text="Clientes já não avaliam presença digital apenas por posts, anúncios ou posições isoladas no Google. Eles pesquisam, comparam, consultam IAs, analisam autoridade, reputação e sinais de confiança antes de tomar uma decisão."
          />
          <p className="mx-auto mt-8 max-w-4xl text-base md:text-lg leading-[1.7] text-[#e0d3c3]">
            Para as agências, isso cria uma nova oportunidade: transformar SEO, GEO, dados estruturados, autoridade de entidade e inteligência de busca em uma entrega estratégica, recorrente e percebida como inovação.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            eyebrow="Dor operacional"
            title="O desafio não é apenas vender SEO. É sustentar uma entrega estratégica sem aumentar a estrutura."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {painPoints.map((item) => (
              <div key={item.title} className="rounded-[8px] border border-[#b28453]/20 bg-[#181716] p-7">
                <AlertIcon />
                <h3 className="mt-5 font-display text-xl font-bold text-[#f8f8f8]">{item.title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#c9c9c9]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apoio-em-reunioes" className="scroll-mt-28 bg-[#181716] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            eyebrow="Como atuamos"
            title="Entramos como a camada estratégica de Search Intelligence da sua agência"
            text="Sem disputar relacionamento, sem aparecer para o cliente final e sem exigir que sua agência monte uma operação interna complexa."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {howWeEnter.map(([title, text], index) => (
              <div key={title} className="rounded-[8px] border border-white/10 bg-[#11100f] p-7 transition-colors hover:border-[#b28453]/55">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#b28453]/12 text-[#b28453]">
                  {index % 3 === 0 ? <FileText size={22} /> : index % 3 === 1 ? <Compass size={22} /> : <Layers3 size={22} />}
                </div>
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#c9c9c9]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="diagnosticos-para-propostas" className="scroll-mt-28 py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            align="center"
            eyebrow="Oferta vendável"
            title="Uma nova entrega orgânica para sua agência apresentar aos clientes"
            text="Não é apenas SEO tradicional. É uma camada estruturada de busca, autoridade, dados e inteligência aplicada."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map(([title, text]) => (
              <div key={title} className="rounded-[8px] border border-[#b28453]/20 bg-[#181716] p-7">
                <CheckCircle2 className="h-6 w-6 text-[#b28453]" />
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#c9c9c9]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#b28453]/10 bg-[#181716] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Camada de entidade e autoridade"
                title="Autoridade de entidade: a camada invisível da nova busca"
                text="Na nova busca, não basta publicar mais conteúdos. Marcas precisam organizar os sinais que fazem com que sejam reconhecidas como entidades claras, associadas ao contexto certo e validadas como opções confiáveis antes da decisão do cliente."
              />
              <p className="mt-6 text-base leading-[1.7] text-[#e0d3c3]">
                A AUDITSEO ajuda sua agência a estruturar essa camada conectando SEO semântico, dados estruturados, reputação, conteúdo estratégico, presença externa e inteligência de busca.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:col-span-7">
              {entityLayer.map(([title, text]) => (
                <div key={title} className="rounded-[8px] border border-white/10 bg-[#11100f] p-6">
                  <Network className="h-5 w-5 text-[#b28453]" />
                  <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-[1.6] text-[#c9c9c9]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="modelos-de-parceria" className="scroll-mt-28 py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader align="center" eyebrow="Modelos" title="Escolha o modelo de parceria ideal para o estágio da sua agência" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {partnershipModels.map(([title, text]) => (
              <div key={title} className="flex rounded-[8px] border border-[#b28453]/20 bg-[#181716] p-7">
                <div className="flex flex-col">
                  <Target className="h-6 w-6 text-[#b28453]" />
                  <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-[1.7] text-[#c9c9c9]">{text}</p>
                  <button onClick={() => onNavigate("diagnostico")} className="mt-7 inline-flex items-center gap-2 text-left text-sm font-bold text-[#b28453] hover:text-[#e0d3c3]">
                    Quero avaliar este modelo <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#181716] py-24 md:py-32">
        <div className="container mx-auto grid max-w-[1320px] gap-8 px-6 md:grid-cols-2 xl:px-12">
          <FitPanel title="Essa parceria faz sentido para sua agência se..." items={fitList} icon="check" />
          <FitPanel title="Essa parceria talvez não seja para sua agência se..." items={notFitList} icon="x" />
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-28 py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader align="center" eyebrow="Operação" title="Como a parceria funciona na prática" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(([step, title, text]) => (
              <div key={step} className="rounded-[8px] border border-[#b28453]/20 bg-[#181716] p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b28453] font-display text-lg font-bold text-white">
                  {step}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#c9c9c9]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#b28453]/10 bg-[#181716] py-24 md:py-32">
        <div className="container mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-12 xl:px-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Bastidores"
              title="O que sua agência recebe nos bastidores"
              text="Entregáveis pensados para apoiar venda, renovação, retenção e direção estratégica sem expor a retaguarda da AUDITSEO para o cliente final."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-[8px] border border-[#b28453]/20 bg-[#11100f] p-6 md:p-8">
              <div className="mb-8 grid gap-4 md:grid-cols-3">
                {[
                  ["Score", "78/100"],
                  ["Prioridades", "12 ações"],
                  ["Roadmap", "90 dias"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[8px] border border-white/10 bg-white/[0.03] p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8c8275]">{label}</p>
                    <p className="mt-2 font-display text-2xl font-bold text-[#e0d3c3]">{value}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {backstageItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-[#181716] p-4 text-sm text-[#c9c9c9]">
                    <ClipboardCheck className="h-4 w-4 shrink-0 text-[#b28453]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6 xl:px-12">
          <SectionHeader align="center" eyebrow="Objeções" title="Dúvidas comuns antes de iniciar uma parceria" />
          <div className="mt-12 divide-y divide-white/10 rounded-[8px] border border-[#b28453]/20 bg-[#181716]">
            {faqs.map(([question, answer]) => (
              <div key={question} className="p-6 md:p-8">
                <h3 className="font-display text-lg font-bold text-[#f8f8f8]">{question}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-[#c9c9c9]">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#b28453] py-20 text-white md:py-24">
        <div className="container mx-auto max-w-[1080px] px-6 text-center xl:px-12">
          <h2 className="font-display text-[34px] sm:text-[44px] md:text-[56px] font-bold leading-[1.08]">
            Quer transformar busca, autoridade e IA em uma entrega real para os clientes da sua agência?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-[1.7] text-white/85">
            Vamos avaliar se a AUDITSEO pode atuar nos bastidores da sua operação como parceira white-label de SEO, GEO e inteligência de busca.
          </p>
          <div className="mt-9">
            <button
              onClick={() => onNavigate("diagnostico")}
              className="inline-flex items-center gap-2 rounded-full bg-[#11100f] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]"
            >
              Avaliar parceria estratégica
              <ArrowRight size={16} />
            </button>
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70">
            A primeira conversa é para entender sua agência, sua carteira e o melhor modelo de parceria.
          </p>
        </div>
      </section>

      <SiteFooter onNavigate={onNavigate} />
    </main>
  );
}

function FitPanel({ title, items, icon }: { title: string; items: string[]; icon: "check" | "x" }) {
  return (
    <div className="rounded-[8px] border border-[#b28453]/20 bg-[#11100f] p-7 md:p-9">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-[#f8f8f8]">{title}</h2>
      <ul className="mt-8 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-[1.7] text-[#c9c9c9]">
            {icon === "check" ? (
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#b28453]" />
            ) : (
              <XCircle className="mt-1 h-4 w-4 shrink-0 text-[#8c8275]" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AlertIcon() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#b28453]/12 text-[#b28453]">
      <BarChart3 size={22} />
    </div>
  );
}
