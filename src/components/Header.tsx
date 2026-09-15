import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed inset-x-0 top-0 z-50 flex h-[76px] items-center transition-all duration-500 md:h-[92px] ${
          scrolled
            ? "border-b border-[#b28453]/12 bg-[#080604]/90 shadow-[0_18px_50px_rgba(0,0,0,.34)] backdrop-blur-xl"
            : "border-b border-white/[0.045] bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-[1536px] items-center justify-between px-6 md:px-10 xl:px-16">
          <button onClick={() => go("inicio")} className="flex cursor-pointer items-center select-none" aria-label="Ir para o início">
            <img
              src="/auditseo-logo.png"
              alt="AUDITSEO — Search Intelligence Partner"
              className="h-[40px] w-auto object-contain md:h-[48px]"
              decoding="async"
            />
          </button>

          <nav className="hidden items-center gap-8 text-[14px] font-medium tracking-[0.01em] text-[#f4eee8]/82 lg:flex xl:gap-10">
            <button onClick={() => go("solucoes")} className="transition-colors hover:text-[#d7a45f]">Soluções</button>
            <a href="/blog/framework-crawl-index-retrieve-understand-trust-cite" className="transition-colors hover:text-[#d7a45f]">Framework</a>
            <button onClick={() => go("conteudo")} className="transition-colors hover:text-[#d7a45f]">Conteúdos</button>
            <a href="/autor/sidney-santos" className="transition-colors hover:text-[#d7a45f]">Sobre</a>
            <a
              href="/diagnostico"
              className="group ml-1 inline-flex items-center gap-3 rounded-full border border-[#c68b44]/78 bg-black/10 px-6 py-3 text-[13px] font-semibold text-[#f1cf9c] backdrop-blur-sm transition hover:border-[#e6b66f] hover:bg-[#c68b44]/12"
            >
              Falar com um especialista
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </nav>

          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-full border border-[#b28453]/25 p-2.5 text-[#f8f8f8] transition-colors hover:border-[#b28453]/55 hover:text-[#d7a45f] lg:hidden"
            aria-label="Alternar menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-40 flex select-none flex-col justify-between bg-[#070504]/98 px-6 pt-[100px] backdrop-blur-xl transition-all duration-500 md:px-10 ${
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <div className="mt-5 flex flex-col text-left">
          <button onClick={() => go("solucoes")} className="flex items-center justify-between border-b border-[#b28453]/12 py-5 text-left text-2xl font-semibold text-[#f8f8f8]">
            Soluções <ArrowRight size={18} className="text-[#b28453]" />
          </button>
          <a href="/blog/framework-crawl-index-retrieve-understand-trust-cite" className="flex items-center justify-between border-b border-[#b28453]/12 py-5 text-2xl font-semibold text-[#f8f8f8]">
            Framework <ArrowRight size={18} className="text-[#b28453]" />
          </a>
          <button onClick={() => go("conteudo")} className="flex items-center justify-between border-b border-[#b28453]/12 py-5 text-left text-2xl font-semibold text-[#f8f8f8]">
            Conteúdos <ArrowRight size={18} className="text-[#b28453]" />
          </button>
          <a href="/autor/sidney-santos" className="flex items-center justify-between border-b border-[#b28453]/12 py-5 text-2xl font-semibold text-[#f8f8f8]">
            Sobre <ArrowRight size={18} className="text-[#b28453]" />
          </a>
        </div>

        <div className="space-y-4 pb-12">
          <a href="/diagnostico" className="block w-full rounded-full bg-[#c9904e] py-4 text-center text-base font-bold text-white">
            Falar com um especialista
          </a>
          <div className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#b99a78]">Search Intelligence Partner</div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          #inicio > .relative.z-10 {
            position: static !important;
          }
          #inicio > .relative.z-10 > div:last-child {
            position: static !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}
