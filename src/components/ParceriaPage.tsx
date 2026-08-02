import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, XCircle } from "lucide-react";
import SiteFooter from "./SiteFooter";

interface ParceriaPageProps {
  onNavigate: (targetId: string) => void;
}

const partnershipModels = [
  {
    title: "Diagnóstico pontual",
    price: "A partir de R$ 2.500",
    text: "Para abrir proposta, avaliar uma conta crítica ou defender uma conversa estratégica com dados e direção.",
  },
  {
    title: "Projeto estratégico 90 dias",
    price: "A partir de R$ 4.500",
    text: "Para transformar diagnóstico em roadmap, prioridades e evolução inicial com acompanhamento white-label.",
  },
  {
    title: "Retaguarda recorrente",
    price: "Sob consulta",
    text: "Para apoiar contas contínuas com leitura, priorização, GEO, autoridade e próximos ciclos de evolução.",
  },
];

const controlItems = [
  "Relacionamento com o cliente",
  "Apresentação da entrega",
  "Narrativa comercial",
  "Proposta e precificação",
  "Decisão sobre exposição da AUDITSEO",
];

const auditseoItems = [
  "Diagnóstico estratégico",
  "SEO, GEO e IA",
  "Autoridade de entidade",
  "Dados estruturados",
  "Roadmaps e recomendações",
];

const comparison = [
  {
    title: "Parceiro avulso de SEO",
    items: [
      ["Metodologia proprietária", false],
      ["Entrega white-label", false],
      ["SEO + GEO + IA", false],
      ["Apoio estratégico recorrente", false],
    ],
  },
  {
    title: "Ferramenta de IA genérica",
    items: [
      ["Metodologia proprietária", false],
      ["Entrega white-label", false],
      ["SEO + GEO + IA", false],
      ["Apoio estratégico recorrente", false],
    ],
  },
  {
    title: "AUDITSEO",
    highlighted: true,
    items: [
      ["Metodologia proprietária", true],
      ["Entrega white-label", true],
      ["SEO + GEO + IA", true],
      ["Apoio estratégico recorrente", true],
    ],
  },
];

function SectionHeader({
  eyebrow,
  title,
  text,
  beige = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  beige?: boolean;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <span className="mb-4 block font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-[#b28453]">
        {eyebrow}
      </span>
      <h2 className={`font-display text-[34px] font-bold leading-[1.08] tracking-[-0.035em] md:text-[54px] ${beige ? "text-[#11100f]" : "text-[#f8f8f8]"}`}>
        {title}
      </h2>
      {text ? <p className={`mx-auto mt-6 max-w-3xl text-base leading-[1.7] md:text-lg ${beige ? "text-[#11100f]/72" : "text-[#f8f8f8]/72"}`}>{text}</p> : null}
    </div>
  );
}

export default function ParceriaPage({ onNavigate }: ParceriaPageProps) {
  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <section className="relative overflow-hidden pb-20 pt-[128px] md:pb-28 md:pt-[150px]">
        <div className="pointer-events-none absolute right-[-12%] top-10 h-[520px] w-[520px] rounded-full bg-[#b28453]/10 blur-[150px]" />
        <div className="container relative z-10 mx-auto max-w-[1240px] px-6 xl:px-12">
          <div className="max-w-4xl">
            <span className="mb-5 block font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
              PARCERIA WHITE-LABEL
            </span>
            <h1 className="font-display text-[44px] font-bold leading-[1.02] tracking-[-0.045em] text-[#f8f8f8] md:text-[74px]">
              Sua agência na frente. A AUDITSEO como retaguarda estratégica.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-[1.65] text-[#f8f8f8]/76 md:text-xl">
              Incorpore SEO, GEO, autoridade e inteligência de busca ao portfólio da agência sem montar um time interno especializado ou expor fornecedores ao cliente final.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => onNavigate("diagnostico")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]"
              >
                Diagnosticar minha carteira
                <ArrowRight size={17} />
              </button>
              <a
                href="#modelos-de-parceria"
                className="inline-flex items-center justify-center rounded-full border border-[#b28453]/45 px-8 py-4 text-base font-bold text-[#e0d3c3] transition-colors hover:bg-[#b28453]/10"
              >
                Ver modelos de parceria
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-28 bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            beige
            eyebrow="Como funciona"
            title="A relação comercial continua sua. A inteligência fica nos bastidores."
            text="A AUDITSEO estrutura diagnóstico, direção e materiais adaptáveis. Sua agência conduz proposta, reunião, relacionamento e percepção de valor."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {["Sua agência identifica a oportunidade", "A AUDITSEO estrutura a solução", "Sua equipe apresenta e conduz"].map((step, index) => (
              <article key={step} className="rounded-[22px] border border-[#11100f]/12 bg-[#f8f8f8]/46 p-7 shadow-[0_20px_70px_rgba(17,16,15,0.10)]">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#6d5132]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 font-display text-2xl font-bold leading-[1.12]">{step}</h3>
                <p className="mt-5 text-sm leading-[1.7] text-[#11100f]/70">
                  {index === 0
                    ? "A conta precisa de diagnóstico, recuperação, autoridade, GEO ou evolução orgânica."
                    : index === 1
                      ? "Transformamos sinais, gargalos e prioridades em inteligência white-label."
                      : "A agência mantém marca, relacionamento, negociação e protagonismo."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="modelos-de-parceria" className="scroll-mt-28 bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            eyebrow="Modelos de parceria"
            title="Escolha o nível de retaguarda certo para cada conta"
            text="A parceria pode começar com um cliente específico e evoluir para uma camada recorrente de Search Intelligence na operação da agência."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {partnershipModels.map((model) => (
              <article key={model.title} className="rounded-[24px] border border-[#b28453]/24 bg-[#171614] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
                <ShieldCheck className="mb-6 h-6 w-6 text-[#b28453]" />
                <h3 className="font-display text-2xl font-bold leading-[1.12] text-[#f8f8f8]">{model.title}</h3>
                <span className="mt-5 inline-flex rounded-full border border-[#b28453]/26 bg-[#b28453]/10 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#e0d3c3]">
                  {model.price}
                </span>
                <p className="mt-5 text-sm leading-[1.7] text-[#f8f8f8]/68">{model.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="modelo-white-label" className="scroll-mt-28 bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto grid max-w-[1240px] gap-10 px-6 lg:grid-cols-2 xl:px-12">
          <div>
            <span className="mb-4 block font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-[#b28453]">Modelo white-label</span>
            <h2 className="font-display text-[34px] font-bold leading-[1.08] tracking-[-0.035em] md:text-[52px]">
              Sua marca preservada. Seu cliente protegido.
            </h2>
            <p className="mt-6 text-base leading-[1.7] text-[#11100f]/72 md:text-lg">
              A AUDITSEO não disputa relacionamento, negociação ou protagonismo. Atuamos como camada especializada para sua agência entregar mais profundidade sem aparecer quando isso não fizer sentido.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[22px] border border-[#11100f]/12 bg-[#f8f8f8]/46 p-6">
              <h3 className="font-display text-2xl font-bold">Sua agência controla</h3>
              <ul className="mt-5 space-y-3 text-sm leading-[1.6] text-[#11100f]/72">
                {controlItems.map((item) => (
                  <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#b28453]" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[22px] border border-[#b28453]/24 bg-[#11100f] p-6 text-[#f8f8f8]">
              <h3 className="font-display text-2xl font-bold text-[#e0d3c3]">A AUDITSEO sustenta</h3>
              <ul className="mt-5 space-y-3 text-sm leading-[1.6] text-[#f8f8f8]/72">
                {auditseoItems.map((item) => (
                  <li key={item} className="flex gap-3"><Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#b28453]" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="auditseo-vs-alternativas" className="scroll-mt-28 bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            eyebrow="Diferenciação"
            title="AUDITSEO vs. alternativas"
            text="Uma comparação factual para posicionar a parceria sem difamar fornecedores, freelancers ou ferramentas."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {comparison.map((column) => (
              <article key={column.title} className={`rounded-[24px] border p-7 ${column.highlighted ? "border-[#b28453]/60 bg-[#1d1b18]" : "border-[#b28453]/18 bg-[#171614]"}`}>
                <h3 className="font-display text-2xl font-bold text-[#f8f8f8]">{column.title}</h3>
                <ul className="mt-7 space-y-4">
                  {column.items.map(([label, ok]) => (
                    <li key={label as string} className="flex items-center gap-3 text-sm text-[#f8f8f8]/72">
                      {ok ? <CheckCircle2 className="h-4 w-4 shrink-0 text-[#b28453]" /> : <XCircle className="h-4 w-4 shrink-0 text-[#f8f8f8]/32" />}
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 text-center md:py-32">
        <div className="container mx-auto max-w-[980px] px-6 xl:px-12">
          <span className="mb-4 block font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-[#b28453]">Próximo passo</span>
          <h2 className="font-display text-[36px] font-bold leading-[1.08] tracking-[-0.035em] md:text-[58px]">
            Vamos avaliar onde a AUDITSEO pode entrar na sua operação?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.7] text-[#f8f8f8]/72 md:text-lg">
            A primeira conversa é para entender a carteira, o nível de bastidor e o melhor modelo de parceria.
          </p>
          <button
            onClick={() => onNavigate("diagnostico")}
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]"
          >
            Diagnosticar minha carteira
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <SiteFooter onNavigate={onNavigate} />
    </main>
  );
}
