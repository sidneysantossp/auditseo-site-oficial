import { useEffect } from "react";
import { ArrowRight, BookOpen, CheckCircle2, ExternalLink, FileText, Mic2, Search, Sparkles } from "lucide-react";
import SiteFooter from "./SiteFooter";
import { SIDNEY_AUTHOR_BIO } from "./AuthorBio";

interface SidneySantosPageProps {
  onNavigate: (targetId: string) => void;
}

const expertise = [
  "SEO técnico",
  "Arquitetura de conteúdo",
  "Dados estruturados",
  "Autoridade digital",
  "Ambientes generativos de busca",
  "Search Intelligence para agências",
];

const methodology = [
  "Separar documentação oficial, evidência, teste e opinião.",
  "Conectar SEO técnico, conteúdo, dados e autoridade antes de recomendar ações.",
  "Traduzir mudanças na busca em decisões compreensíveis para empresas e agências.",
  "Evitar promessas absolutas sobre ranking, tráfego ou aparição em IA.",
];

const studyAreas = [
  "AI Overviews e experiências generativas do Google",
  "GEO como expressão de mercado e sua relação com SEO",
  "Autoridade de entidade e narrativa semântica",
  "Dados estruturados aplicados à clareza de marca",
  "Efeitos de performance, rastreamento e experiência em projetos orgânicos",
];

const writtenTopics = [
  ["GEO Readiness", "/guias/geo-readiness"],
  ["Narrativa semântica", "/guias/narrativa-semantica"],
  ["Search Intelligence", "/guias/search-intelligence"],
  ["Estudos de busca com IA", "/estudos-busca-ia"],
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-4xl">
      <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{eyebrow}</span>
      <h2 className="mt-4 font-display text-4xl font-bold leading-[1.06] tracking-[-0.03em] text-[#f8f8f8] md:text-5xl">{title}</h2>
      {text ? <p className="mt-6 text-lg leading-[1.75] text-[#f8f8f8]/72">{text}</p> : null}
    </div>
  );
}

export default function SidneySantosPage({ onNavigate }: SidneySantosPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageSchema = "sidney-santos";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sidney Santos",
      url: `https://www.auditseo.com.br/autor/sidney-santos`,
      jobTitle: "Especialista em SEO e Search Intelligence",
      description:
        "Sidney Santos atua com SEO desde 2009 e é fundador da AUDITSEO, consultoria de Search Intelligence especializada no apoio estratégico a agências.",
      founder: {
        "@type": "Organization",
        name: "AUDITSEO",
        url: "https://www.auditseo.com.br",
      },
      knowsAbout: [
        "SEO técnico",
        "Search Intelligence",
        "GEO",
        "dados estruturados",
        "autoridade digital",
        "ambientes generativos de busca",
      ],
    });
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <section className="relative overflow-hidden px-6 pb-20 pt-[132px] md:pb-28 md:pt-[164px] xl:px-12">
        <div className="pointer-events-none absolute right-[-12%] top-10 h-[560px] w-[560px] rounded-full bg-[#b28453]/12 blur-[150px]" />
        <div className="relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div className="rounded-[28px] border border-[#b28453]/24 bg-[#171614] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
            <div className="flex aspect-[4/5] items-center justify-center rounded-[22px] border border-[#b28453]/22 bg-[radial-gradient(circle_at_50%_34%,rgba(178,132,83,0.24),rgba(17,16,15,0.96)_62%)]">
              <div className="text-center">
                <span className="font-display text-7xl font-bold text-[#e0d3c3]">SS</span>
                <p className="mx-auto mt-5 max-w-[210px] text-xs leading-[1.6] text-[#f8f8f8]/54">
                  Fotografia profissional oficial a ser vinculada quando o arquivo estiver disponível.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Autor AUDITSEO</span>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(48px,5.5vw,82px)] font-bold leading-[1.03] tracking-[-0.045em] text-[#f8f8f8]">
              Sidney Santos — Especialista em SEO e Search Intelligence
            </h1>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-[1.75] text-[#f8f8f8]/76">
              <p>
                Sidney Santos é especialista em SEO e Search Intelligence, com atuação no mercado de busca desde 2009.
              </p>
              <p>
                É fundador da AUDITSEO, consultoria que atua como parceira estratégica de agências em projetos de SEO, ambientes generativos e construção de autoridade digital.
              </p>
              <p>
                Seu trabalho é dedicado a investigar como marcas podem ser encontradas, compreendidas e reconhecidas por mecanismos de busca, pessoas e sistemas de inteligência artificial — sempre separando documentação oficial, evidência, teste e opinião.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="/blog" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]">
                Ver conteúdos
                <ArrowRight size={16} />
              </a>
              <button onClick={() => onNavigate("diagnostico")} className="inline-flex items-center justify-center rounded-full border border-[#b28453]/40 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:border-[#b28453] hover:text-[#b28453]">
                Avaliar parceria estratégica
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-32 xl:px-12">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Biografia editorial</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl">Bio única para conteúdos e perfis</h2>
          </div>
          <div className="space-y-5 text-lg leading-[1.75] text-[#11100f]/72">
            {SIDNEY_AUTHOR_BIO.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <SectionTitle
            eyebrow="Atuação"
            title="Áreas de conhecimento"
            text="A atuação conecta fundamentos técnicos de SEO com estratégia editorial, dados, autoridade e leitura da nova busca."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <article key={item} className="rounded-[22px] border border-[#b28453]/20 bg-[#171614] p-6">
                <Search className="h-5 w-5 text-[#b28453]" />
                <h3 className="mt-5 font-display text-xl font-bold">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#181716] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Método de trabalho" title="Documentação, evidência, teste e opinião não são a mesma coisa" />
            <div className="mt-10 space-y-4">
              {methodology.map((item) => (
                <div key={item} className="flex gap-4 rounded-[18px] border border-[#b28453]/16 bg-[#11100f] p-5 text-sm leading-[1.7] text-[#f8f8f8]/72">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#b28453]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Estudos e testes" title="Temas acompanhados" />
            <div className="mt-10 space-y-4">
              {studyAreas.map((item) => (
                <div key={item} className="flex gap-4 rounded-[18px] border border-[#b28453]/16 bg-[#11100f] p-5 text-sm leading-[1.7] text-[#f8f8f8]/72">
                  <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#b28453]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <SectionTitle
            eyebrow="Publicações"
            title="Artigos, guias e análises"
            text="Os conteúdos publicados pela AUDITSEO são organizados para separar orientação prática, análise de mercado e hipóteses em teste."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {writtenTopics.map(([title, href]) => (
              <a key={href} href={href} className="rounded-[22px] border border-[#b28453]/20 bg-[#171614] p-6 transition-all hover:-translate-y-1 hover:border-[#b28453]/52">
                <BookOpen className="h-5 w-5 text-[#b28453]" />
                <h3 className="mt-5 font-display text-xl font-bold leading-tight">{title}</h3>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#b28453]">
                  Ler conteúdo
                  <ArrowRight size={13} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-32 xl:px-12">
        <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Participações e canais</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em]">Referências públicas em organização</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:col-span-2">
            {[
              ["Participações, entrevistas e palestras", "Espaço reservado para registros públicos confirmados."],
              ["LinkedIn, Instagram e YouTube", "URLs oficiais devem ser vinculadas após confirmação dos perfis corretos."],
              ["Referências externas", "Apenas fontes verificáveis devem ser incluídas nesta seção."],
              ["Releases e perfis externos", "A mesma bio editorial deve ser usada para preservar consistência de entidade."],
            ].map(([title, text], index) => (
              <article key={title} className="rounded-[22px] border border-[#11100f]/10 bg-[#11100f] p-6 text-[#f8f8f8]">
                {index % 2 === 0 ? <Mic2 className="h-5 w-5 text-[#b28453]" /> : <ExternalLink className="h-5 w-5 text-[#b28453]" />}
                <h3 className="mt-5 font-display text-xl font-bold leading-tight">{title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/66">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center md:py-32 xl:px-12">
        <div className="mx-auto max-w-[960px] rounded-[28px] border border-[#b28453]/28 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.36)] md:p-12">
          <FileText className="mx-auto h-7 w-7 text-[#b28453]" />
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.025em] md:text-5xl">
            Quer aplicar essa leitura em projetos de clientes?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.7] text-[#f8f8f8]/68">
            A AUDITSEO atua como retaguarda estratégica para agências que precisam estruturar SEO, GEO, autoridade e inteligência de busca com mais critério.
          </p>
          <button
            onClick={() => onNavigate("diagnostico")}
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]"
          >
            Avaliar parceria estratégica
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <SiteFooter onNavigate={onNavigate} />
    </main>
  );
}
