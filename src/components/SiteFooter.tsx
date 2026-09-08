import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

interface SiteFooterProps {
  onNavigate: (targetId: string) => void;
}

const navigationLinks = [
  ["Início", "/"],
  ["Método S.I.G.N.A.L", "/metodo-signal"],
  ["Soluções", "/solucoes"],
  ["Biblioteca", "/blog"],
  ["GEO & IA", "/geo-ia"],
];

const solutionLinks = [
  ["Search Foundation", "/solucoes/projetos-comecando-do-zero"],
  ["Organic Activation", "/solucoes/site-sem-tracao"],
  ["Search Recovery", "/solucoes/recuperacao-organica"],
  ["Entity Authority", "/solucoes/autoridade-de-entidade"],
  ["Intent Content Architecture", "/solucoes/conteudo-por-intencao"],
  ["Generative Search Readiness", "/solucoes/geo-ia-readiness"],
  ["SEO Migration & Risk Control", "/solucoes/migracao-risco-seo"],
  ["Organic Evolution Cycle", "/solucoes/evolucao-organica"],
];

const consultingLinks = [
  ["Como atuamos", "/"],
  ["Método S.I.G.N.A.L", "/metodo-signal"],
  ["Search Intelligence", "/blog/o-que-e-search-intelligence"],
  ["Autoridade de entidade", "/solucoes/autoridade-de-entidade"],
  ["Generative Search Readiness", "/solucoes/geo-ia-readiness"],
  ["Avaliação estratégica", "/diagnostico"],
];

const contentLinks = [
  ["Biblioteca AUDITSEO", "/blog"],
  ["Case Study #001", "/case-study/auditseo-search-intelligence"],
  ["O que é Search Intelligence", "/blog/o-que-e-search-intelligence"],
  ["Autoridade de entidade", "/blog/autoridade-de-entidade-o-que-e"],
  ["GEO sem hype", "/blog/geo-o-que-e-o-que-nao-garante"],
  ["Como IAs encontram fontes", "/blog/como-ias-encontram-e-citam-fontes"],
  ["Programa de pesquisa", "/estudos-busca-ia"],
  ["Sidney Santos", "/autor/sidney-santos"],
];

const footerLinkClass = "block text-[#f8f8f8]/72 transition-colors hover:text-[#b28453]";
const whatsappHref = "https://wa.me/5511995250742";

type NewsletterStatus = "idle" | "submitting" | "success" | "error";

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h5 className="mb-4 border-b border-[#b28453]/15 pb-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
        {title}
      </h5>
      <ul className="space-y-2.5 text-xs leading-relaxed">
        {links.map(([label, href]) => (
          <li key={`${title}-${label}-${href}`}>
            <a className={footerLinkClass} href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function newsletterAttribution() {
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};

  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "lead_id", "campaign_id"]) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }

  return {
    sourcePath: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer || undefined,
    utm: Object.keys(utm).length ? utm : undefined,
  };
}

export default function SiteFooter({ onNavigate }: SiteFooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<NewsletterStatus>("idle");

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = newsletterEmail.trim();
    if (!email || newsletterStatus === "submitting") return;

    setNewsletterStatus("submitting");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "newsletter",
          email,
          ...newsletterAttribution(),
        }),
      });

      const result = (await response.json().catch(() => null)) as { success?: boolean } | null;

      if (!response.ok || !result?.success) {
        setNewsletterStatus("error");
        return;
      }

      setNewsletterStatus("success");
      setNewsletterEmail("");
    } catch (error) {
      console.error("Newsletter subscription failed", error);
      setNewsletterStatus("error");
    }
  };

  return (
    <footer className="border-t border-[#b28453]/10 bg-[#11100f] text-[#f8f8f8]">
      <div className="bg-[#b28453] py-12 text-white">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="min-w-0 max-w-2xl">
              <h4 className="mb-2 max-w-[760px] font-display text-lg font-bold leading-snug sm:text-xl">
                Receba análises sobre Search Intelligence, SEO e a nova busca
              </h4>
              <p className="max-w-[760px] text-xs font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-sm">
                Novos artigos, estudos e aprendizados da AUDITSEO diretamente no seu e-mail
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:w-auto">
              {newsletterStatus === "success" ? (
                <div className="whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white" role="status">
                  Inscrição confirmada. Seus insights foram registrados.
                </div>
              ) : (
                <div className="w-full sm:w-auto">
                  <form onSubmit={handleNewsletterSubmit} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(event) => {
                        setNewsletterEmail(event.target.value);
                        if (newsletterStatus === "error") setNewsletterStatus("idle");
                      }}
                      placeholder="Seu e-mail profissional"
                      className="w-full rounded-full bg-white px-6 py-3 text-sm font-medium text-[#11100f] outline-none placeholder:text-gray-500 sm:w-[390px] lg:w-[430px]"
                      required
                      disabled={newsletterStatus === "submitting"}
                      aria-describedby={newsletterStatus === "error" ? "newsletter-error" : undefined}
                    />
                    <button
                      type="submit"
                      disabled={newsletterStatus === "submitting"}
                      className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#11100f] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f] disabled:cursor-not-allowed disabled:opacity-65"
                    >
                      <span>{newsletterStatus === "submitting" ? "Enviando..." : "Inscrever-se"}</span>
                      <Send size={12} />
                    </button>
                  </form>
                  {newsletterStatus === "error" ? (
                    <p id="newsletter-error" className="mt-2 text-xs font-semibold text-white" role="alert">
                      Não foi possível confirmar sua inscrição agora. Tente novamente em instantes.
                    </p>
                  ) : null}
                </div>
              )}

              <div className="hidden items-center border-l border-white/20 pl-4 xl:flex">
                <button
                  onClick={() => onNavigate("diagnostico")}
                  className="whitespace-nowrap rounded-full border border-white/10 bg-white/20 px-4 py-2.5 text-xs font-bold leading-none text-white transition-colors hover:bg-white hover:text-black"
                >
                  Diagnóstico
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1320px] px-6 py-20 xl:px-12">
        <div className="grid gap-10 text-left sm:grid-cols-2 lg:grid-cols-[1.35fr_0.95fr_1.18fr_1.12fr_1.08fr_1fr]">
          <div className="flex flex-col justify-start sm:col-span-2 lg:col-span-1">
            <a href="/" className="mb-4 inline-flex w-fit">
              <img
                src="/auditseo-logo.png"
                alt="AUDITSEO - Search Intelligence"
                className="h-auto w-[240px] max-w-full object-contain"
              />
            </a>
            <p className="max-w-sm text-xs leading-[1.7] text-[#f8f8f8]/64">
              Consultoria de Search Intelligence e Autoridade de Entidade. Identificamos os sinais que limitam descoberta, compreensão, confiança e consideração da sua empresa — e coordenamos o plano para evoluir sua presença no Google e nas plataformas de IA.
            </p>
          </div>

          <FooterColumn title="NAVEGAÇÃO" links={navigationLinks} />
          <FooterColumn title="SOLUÇÕES" links={solutionLinks} />
          <FooterColumn title="CONSULTORIA" links={consultingLinks} />
          <FooterColumn title="CONTEÚDOS" links={contentLinks} />

          <div>
            <h5 className="mb-4 border-b border-[#b28453]/15 pb-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
              FALE CONOSCO
            </h5>
            <span className="mb-3 block font-mono text-[10px] text-[#f8f8f8]/60">Inicie um projeto</span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#b28453] transition-colors hover:text-[#e0d3c3] hover:underline"
                >
                  WhatsApp Comercial
                </a>
              </li>
              <li>
                <a href="mailto:contato@auditseo.com.br" className="font-mono text-[#f8f8f8]/82 transition-colors hover:text-[#b28453]">
                  contato@auditseo.com.br
                </a>
              </li>
              <li className="pt-2 text-[10px] leading-relaxed text-[#f8f8f8]/60">
                Atendimento executivo nacional de segunda a sexta.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#b28453]/14 pt-8 text-xs text-[#f8f8f8]/60 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <span>© 2026 AUDITSEO. Todos os direitos reservados.</span>
            <span className="mt-1 block text-[10px] text-[#f8f8f8]/42">
              Search Intelligence · SEO · Autoridade de Entidade · AI Search
            </span>
          </div>

          <div className="flex gap-6">
            <a href="/politica-de-privacidade" className="transition-colors hover:text-[#b28453] hover:underline">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="transition-colors hover:text-[#b28453] hover:underline">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
