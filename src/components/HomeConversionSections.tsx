import { ArrowRight, CheckCircle2, Compass, FileText, Layers3, ShieldCheck, Sparkles } from "lucide-react";

interface HomeConversionSectionsProps {
  onNavigate: (targetId: string) => void;
}

const pains = [
  "Sem especialista sênior para validar estratégias de SEO, GEO e IA.",
  "Dificuldade para defender valor em reuniões com clientes exigentes.",
  "Cliente perguntando sobre IA sem uma resposta madura da agência.",
  "Projetos orgânicos difíceis de escalar sem aumentar custo interno.",
  "Relatórios que mostram dados, mas não criam direção comercial.",
];

const solutions = [
  {
    icon: FileText,
    title: "Diagnóstico white-label",
    text: "Leitura estratégica da conta para abrir proposta, defender renovação ou destravar uma conversa travada.",
  },
  {
    icon: Compass,
    title: "Roadmap 90 dias",
    text: "Prioridades claras para transformar análise em sequência de ação, argumento e evolução percebida.",
  },
  {
    icon: ShieldCheck,
    title: "Suporte estratégico",
    text: "Retaguarda especializada para SEO, GEO, autoridade, dados estruturados e decisões orgânicas.",
  },
];

const scenarios = [
  {
    href: "/solucoes#cenario-novo-projeto",
    title: "Projeto começando do zero",
    text: "Cliente novo, site novo ou presença orgânica ainda inexistente.",
  },
  {
    href: "/solucoes#cenario-sem-tracao",
    title: "Site no ar, mas sem tração",
    text: "O projeto existe, mas nunca gerou crescimento orgânico relevante.",
  },
  {
    href: "/solucoes#cenario-queda",
    title: "Tráfego caiu",
    text: "A conta perdeu visibilidade e precisa entender a causa antes de agir.",
  },
  {
    href: "/solucoes#cenario-autoridade",
    title: "Cliente high-ticket",
    text: "A decisão depende de confiança, reputação e autoridade percebida.",
  },
  {
    href: "/solucoes#cenario-conteudo",
    title: "Conteúdo sem retorno",
    text: "Existe produção, mas falta intenção, arquitetura e conexão com decisão.",
  },
  {
    href: "/solucoes#cenario-geo",
    title: "IA, GEO e nova busca",
    text: "O cliente quer inovação, mas precisa organizar sinais antes de prometer presença.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-4xl text-left">
      <span className="mb-4 block font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-[#b28453]">
        {eyebrow}
      </span>
      <h2 className={`font-display text-[34px] font-bold leading-[1.08] tracking-[-0.035em] md:text-[52px] ${dark ? "text-[#11100f]" : "text-[#f8f8f8]"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-6 max-w-3xl text-base leading-[1.7] md:text-lg ${dark ? "text-[#11100f]/72" : "text-[#f8f8f8]/72"}`}>{text}</p> : null}
    </div>
  );
}

export default function HomeConversionSections({ onNavigate }: HomeConversionSectionsProps) {
  return (
    <>
      <section className="bg-[#11100f] py-20 text-[#f8f8f8] md:py-28">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionTitle
              eyebrow="Dor real da agência"
              title="Sua agência quer vender SEO e GEO, mas não tem especialista sênior?"
              text="Antes de vender mais uma entrega orgânica, a agência precisa de critério para diagnosticar, explicar e defender valor sem inflar a operação."
            />
            <div className="rounded-[26px] border border-[#b28453]/26 bg-[#171614] p-7 shadow-[0_26px_80px_rgba(0,0,0,0.34)] md:p-9">
              <ul className="space-y-5">
                {pains.map((pain) => (
                  <li key={pain} className="flex gap-4 text-sm leading-[1.6] text-[#f8f8f8]/74 md:text-base">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#b28453]" />
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-20 text-[#11100f] md:py-28">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionTitle
            dark
            eyebrow="Solução"
            title="O que a AUDITSEO sustenta nos bastidores"
            text="Soluções comerciais e estratégicas para sua agência transformar SEO, GEO e IA em uma entrega mais clara, defensável e white-label."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <article key={solution.title} className="rounded-[22px] border border-[#11100f]/12 bg-[#f8f8f8]/44 p-7 shadow-[0_20px_70px_rgba(17,16,15,0.10)]">
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-[#b28453]/36 bg-[#11100f] text-[#b28453]">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-2xl font-bold leading-[1.12]">{solution.title}</h3>
                  <p className="mt-5 text-sm leading-[1.7] text-[#11100f]/72">{solution.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-20 text-[#f8f8f8] md:py-28">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionTitle
              eyebrow="Cenários da carteira"
              title="Qual o cenário do seu cliente?"
              text="Cada conta tem um estágio diferente. A AUDITSEO entra como braço estratégico para destravar, recuperar ou evoluir a entrega orgânica."
            />
            <button
              onClick={() => onNavigate("solucoes")}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#b28453]/45 px-6 py-3 text-sm font-bold text-[#e0d3c3] transition-colors hover:bg-[#b28453] hover:text-white"
            >
              Ver todos os cenários
              <ArrowRight size={15} />
            </button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {scenarios.map((scenario) => (
              <a key={scenario.href} href={scenario.href} className="group rounded-[22px] border border-[#b28453]/22 bg-[#171614] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b28453]/60 hover:bg-[#1d1b18]">
                <h3 className="font-display text-2xl font-bold leading-[1.12] text-[#f8f8f8]">{scenario.title}</h3>
                <p className="mt-5 text-sm leading-[1.7] text-[#f8f8f8]/68">{scenario.text}</p>
                <span className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#b28453]">
                  Abrir cenário
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-20 text-[#11100f] md:py-28">
        <div className="container mx-auto grid max-w-[1320px] gap-10 px-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-center xl:px-12">
          <SectionTitle
            dark
            eyebrow="Metodologia proprietária"
            title="S.I.G.N.A.L sem excesso de teoria"
            text="A metodologia proprietária S.I.G.N.A.L organiza diagnóstico, intenção, GEO, autoridade, roadmap e evolução. Na Home, o papel é simples: mostrar que existe critério por trás da entrega."
          />
          <div className="rounded-[26px] border border-[#11100f]/12 bg-[#11100f] p-8 text-[#f8f8f8] shadow-[0_24px_80px_rgba(17,16,15,0.22)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {["Diagnóstico de busca", "Mapeamento de intenção", "GEO e IA", "Autoridade narrativa"].map((item) => (
                <div key={item} className="rounded-[18px] border border-[#b28453]/20 bg-white/[0.03] p-5">
                  <Layers3 className="mb-4 h-5 w-5 text-[#b28453]" />
                  <p className="font-display text-lg font-bold">{item}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate("signal")}
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#b28453] transition-colors hover:text-[#e0d3c3]"
            >
              Conhecer a metodologia completa
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-18 text-[#f8f8f8] md:py-24">
        <div className="container mx-auto max-w-[1120px] px-6 text-center xl:px-12">
          <Sparkles className="mx-auto mb-6 h-7 w-7 text-[#b28453]" />
          <h2 className="font-display text-[34px] font-bold leading-[1.08] tracking-[-0.035em] md:text-[52px]">
            Vamos avaliar sua carteira?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.7] text-[#f8f8f8]/72 md:text-lg">
            Em poucos minutos, sua agência identifica onde existe oportunidade para vender, recuperar ou evoluir uma entrega orgânica com a AUDITSEO nos bastidores.
          </p>
          <button
            onClick={() => onNavigate("diagnostico")}
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]"
          >
            Diagnosticar minha carteira gratuitamente
            <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </>
  );
}
