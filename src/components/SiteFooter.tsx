import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

interface SiteFooterProps {
  onNavigate: (targetId: string) => void;
}

const navigationLinks = [
  ["Início", "/"],
  ["Método S.I.G.N.A.L", "/metodo-signal"],
  ["Soluções", "/solucoes"],
    ["Conteúdo", "/blog"],
  ["GEO & IA", "/geo-ia"],
];

const solutionLinks = [
  ["Projetos começando do zero", "/solucoes#search-foundation"],
  ["Sites no ar sem tração", "/solucoes#organic-activation"],
  ["Recuperação orgânica", "/solucoes#search-recovery"],
  ["Autoridade de entidade", "/solucoes#entity-authority"],
  ["Conteúdo por intenção", "/solucoes#intent-content-architecture"],
  ["GEO & IA Readiness", "/solucoes#geo-ai-readiness"],
  ["Migração e risco SEO", "/solucoes#seo-migration-risk-control"],
  ["Evolução orgânica", "/solucoes#organic-evolution-cycle"],
];

const consultingLinks = [
  ["Como atuamos", "/#atuacao"],
  ["Método S.I.G.N.A.L", "/metodo-signal"],
  ["Autoridade de entidade", "/solucoes#entity-authority"],
  ["GEO & IA Readiness", "/geo-ia"],
  ["Avaliação estratégica", "/diagnostico"],
  ["Diagnóstico interativo", "/diagnostico"],
];

const contentLinks = [
  ["Blog Oficial", "/blog"],
  ["Sidney Santos", "/autor/sidney-santos"],
  ["Guias técnicos", "/guias"],
  ["Estudos de busca com IA", "/estudos-busca-ia"],
  ["GEO Readiness", "/guias/geo-readiness"],
  ["Narrativa semântica", "/guias/narrativa-semantica"],
  ["Search Intelligence", "/guias/search-intelligence"],
];

const footerLinkClass = "block text-[#f8f8f8]/72 transition-colors hover:text-[#b28453]";
const whatsappHref = "https://wa.me/5511996384376";

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

export default function SiteFooter({ onNavigate }: SiteFooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newsletterEmail) return;

    setNewsletterSuccess(true);
    window.setTimeout(() => {
      setNewsletterEmail("");
      setNewsletterSuccess(false);
    }, 5000);
  };

  return (
    <footer className="border-t border-[#b28453]/10 bg-[#11100f] text-[#f8f8f8]">
      <div className="bg-[#b28453] py-12 text-white">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="min-w-0 max-w-2xl">
              <h4 className="mb-2 max-w-[760px] font-display text-lg font-bold leading-snug sm:text-xl">
                Receba insights sobre inteligência de busca, GEO e autoridade de entidade
              </h4>
              <p className="max-w-[760px] text-xs font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-sm">
                Tendências analíticas e bastidores do mercado orgânico diretamente no seu e-mail
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:w-auto">
              {newsletterSuccess ? (
                <div className="whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white">
                  Obrigado por assinar. Seus insights foram registrados.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                    placeholder="Seu e-mail profissional"
                    className="w-full rounded-full bg-white px-6 py-3 text-sm font-medium text-[#11100f] outline-none placeholder:text-gray-500 sm:w-[390px] lg:w-[430px]"
                    required
                  />
                  <button
                    type="submit"
                    className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#11100f] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]"
                  >
                    <span>Inscrever-se</span>
                    <Send size={12} />
                  </button>
                </form>
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
                alt="AUDITSEO - Search Intelligence Partner"
                className="h-auto w-[240px] max-w-full object-contain"
              />
            </a>
            <p className="max-w-sm text-xs leading-[1.7] text-[#f8f8f8]/64">
              Consultoria de Inteligência de Busca e Autoridade de Entidade. Identificamos o que limita a presença da sua empresa e coordenamos a estratégia para fortalecer autoridade, visibilidade e reconhecimento no Google e nas plataformas de inteligência artificial.
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
            <span className="mb-3 block font-mono text-[10px] text-[#f8f8f8]/60">Converse sobre parceria</span>
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
                <a href="mailto:parceria@auditseo.com.br" className="font-mono text-[#f8f8f8]/82 transition-colors hover:text-[#b28453]">
                  parceria@auditseo.com.br
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
              Consultoria de Inteligência de Busca e Autoridade de Entidade.
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
