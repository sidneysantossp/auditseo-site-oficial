import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Método S.I.G.N.A.L", id: "signal" },
    { label: "Soluções", id: "solucoes" },
    { label: "Biblioteca", id: "conteudo" },
    { label: "Diagnóstico", id: "diagnostico" },
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed left-0 right-0 top-0 z-50 flex h-[68px] items-center justify-between transition-all duration-300 md:h-[82px] ${
          scrolled ? "border-b border-[#b28453]/10 bg-[#11100f]/95 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md" : "border-b border-transparent bg-[#11100f]"
        }`}
      >
        <div className="container mx-auto flex h-full w-full max-w-[1320px] items-center justify-between px-6 md:px-12">
          <button onClick={() => handleItemClick("inicio")} className="flex cursor-pointer items-center select-none" aria-label="Ir para início">
            <img src="/auditseo-logo.png" alt="AUDITSEO — Search Intelligence" className="h-[38px] w-auto object-contain md:h-[46px]" />
          </button>

          <nav className="hidden w-[570px] shrink-0 items-center justify-between lg:flex">
            {navItems.map((item) => (
              <button
                id={`nav-btn-${item.id}`}
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`cursor-pointer text-[14px] font-medium tracking-wide transition-colors duration-250 ${activeSection === item.id ? "text-[#b28453]" : "text-[#c9c9c9] hover:text-[#b28453]"}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a id="header-cta" href="/diagnostico" className="inline-block rounded-full bg-[#b28453] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0d3c3] hover:text-[#11100f]">
              Solicitar avaliação
            </a>
          </div>

          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#f8f8f8] transition-colors hover:text-[#b28453] lg:hidden"
            aria-label="Alternar menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-40 flex select-none flex-col justify-between bg-[#11100f] px-6 pt-[90px] transition-all duration-500 ease-in-out md:px-12 ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"}`}
      >
        <div className="mt-4 flex flex-col space-y-5 text-left">
          {navItems.map((item, index) => (
            <button
              id={`mobile-nav-${item.id}`}
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="block border-b border-[#b28453]/10 pb-3 text-left text-2xl font-semibold text-[#f8f8f8] transition-all duration-300 hover:text-[#b28453]"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <div className="flex items-center justify-between"><span>{item.label}</span><ArrowRight size={18} className="text-[#b28453]" /></div>
            </button>
          ))}
        </div>

        <div className="space-y-4 pb-12">
          <a href="/diagnostico" className="block w-full rounded-full bg-[#b28453] py-4 text-center text-base font-bold text-white">
            Solicitar avaliação estratégica
          </a>
          <div className="text-center font-mono text-xs text-[#c9c9c9]">Search Intelligence para empresas</div>
        </div>
      </div>
    </>
  );
}
