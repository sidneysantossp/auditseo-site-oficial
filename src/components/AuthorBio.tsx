import { ArrowRight } from "lucide-react";

export const SIDNEY_AUTHOR_NAME = "Sidney Santos";

export const SIDNEY_AUTHOR_BIO = [
  "Sidney Santos atua com SEO desde 2009 e é fundador da AUDITSEO, consultoria de Search Intelligence especializada no apoio estratégico a agências.",
  "Seu trabalho conecta SEO técnico, conteúdo, dados, autoridade digital e ambientes de busca com inteligência artificial. Pesquisa e traduz mudanças na busca com base em documentos oficiais, fontes internacionais, estudos e testes práticos.",
];

interface AuthorBioProps {
  compact?: boolean;
  dark?: boolean;
}

export default function AuthorBio({ compact = false, dark = false }: AuthorBioProps) {
  return (
    <section className={`${dark ? "bg-[#11100f] text-[#f8f8f8]" : "bg-[#e0d3c3] text-[#11100f]"} px-6 py-16 xl:px-12`}>
      <div
        className={`mx-auto grid max-w-[1120px] gap-7 rounded-[26px] border p-7 shadow-[0_24px_80px_rgba(17,16,15,0.14)] md:grid-cols-[0.72fr_1.28fr] md:p-9 ${
          dark
            ? "border-[#b28453]/24 bg-[#171614]"
            : "border-[#11100f]/10 bg-[#f8f8f8]/48"
        }`}
      >
        <div>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#b28453]">Autor</span>
          <h2 className={`mt-3 font-display text-3xl font-bold leading-[1.08] ${dark ? "text-[#f8f8f8]" : "text-[#11100f]"}`}>
            {SIDNEY_AUTHOR_NAME}
          </h2>
          <a
            href="/autor/sidney-santos"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#b28453] transition-colors hover:text-[#e0d3c3]"
          >
            Ver página do autor
            <ArrowRight size={14} />
          </a>
        </div>

        <div className={`space-y-4 text-sm leading-[1.75] md:text-base ${dark ? "text-[#f8f8f8]/72" : "text-[#11100f]/72"}`}>
          {(compact ? SIDNEY_AUTHOR_BIO.slice(0, 1) : SIDNEY_AUTHOR_BIO).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
