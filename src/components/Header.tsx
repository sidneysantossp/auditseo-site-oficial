import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { label: string; id?: string; href?: string }[] = [
    { label: "Método S.I.G.N.A.L", id: "signal" },
    { label: "Soluções", id: "solucoes" },
    { label: "Conteúdo", id: "conteudo" },
    { label: "Contato", id: "diagnostico" },
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#11100f]/95 backdrop-blur-md border-b border-[#b28453]/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] h-[82px] md:h-[82px]"
            : "bg-[#11100f] border-b border-transparent h-[82px] md:h-[82px]"
        } h-[68px] md:h-[82px] flex items-center justify-between`}
      >
        <div className="container mx-auto px-[24px] md:px-[48px] max-w-[1320px] w-full flex items-center justify-between h-full">
          {/* LOGO */}
          <div
            onClick={() => handleItemClick("inicio")}
            className="cursor-pointer flex items-center select-none"
          >
            <img
              src="/auditseo-logo.png"
              alt="AUDITSEO - Search Intelligence Partner"
              className="h-[38px] w-auto object-contain md:h-[46px]"
            />
          </div>

          {/* DESKTOP NAV MENU */}
          <nav className="hidden lg:flex items-center justify-between w-[560px] shrink-0">
            {navItems.map((item) =>
              "href" in item ? (
                <a
                  key={item.label}
                  href={item.href!}
                  className="text-[14px] font-medium tracking-wide transition-colors duration-250 text-[#c9c9c9] hover:text-[#b28453]"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  id={`nav-btn-${item.id!}`}
                  key={item.id}
                  onClick={() => handleItemClick(item.id!)}
                  className={`text-[14px] font-medium tracking-wide transition-colors cursor-pointer duration-250 ${
                    activeSection === item.id
                      ? "text-[#b28453]"
                      : "text-[#c9c9c9] hover:text-[#b28453]"
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* RIGHT CTA BUTTON */}
          <div className="hidden lg:block">
            <a
              id="header-cta"
              href="https://wa.me/5511996384376"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#b28453] text-[#ffffff] px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#e0d3c3] hover:text-[#11100f] hover:-translate-y-0.5"
            >
              Agendar uma Reunião
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#f8f8f8] hover:text-[#b28453] transition-colors p-2"
              aria-label="Alternar Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV DRAWER (FULL SCREEN) */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-40 bg-[#11100f] pt-[90px] px-6 transition-all duration-500 ease-in-out md:px-12 select-none flex flex-col justify-between ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-5 text-left mt-4">
          {navItems.map((item, idx) =>
            "href" in item ? (
              <a
                key={item.label}
                href={item.href!}
                className="text-[#f8f8f8] text-2xl font-semibold hover:text-[#b28453] text-left transition-all duration-300 border-b border-[#b28453]/10 pb-3 block"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <div className="flex justify-between items-center">
                  <span>{item.label}</span>
                  <ArrowRight size={18} className="text-[#b28453]" />
                </div>
              </a>
            ) : (
              <button
                id={`mobile-nav-${item.id!}`}
                key={item.id}
                onClick={() => handleItemClick(item.id!)}
                className="text-[#f8f8f8] text-2xl font-semibold hover:text-[#b28453] text-left transition-all duration-300 border-b border-[#b28453]/10 pb-3 block"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <div className="flex justify-between items-center">
                  <span>{item.label}</span>
                  <ArrowRight size={18} className="text-[#b28453]" />
                </div>
              </button>
            )
          )}
        </div>

        <div className="pb-12 space-y-4">
          <a
            id="mobile-drawer-cta"
            href="https://wa.me/5511996384376"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#b28453] text-[#ffffff] py-4 rounded-full text-base font-bold text-center block"
          >
            Agendar uma Reunião
          </a>
          <div className="text-center text-[#c9c9c9] text-xs font-mono">
            Consultoria de Inteligência de Busca e Autoridade
          </div>
        </div>
      </div>
    </>
  );
}
