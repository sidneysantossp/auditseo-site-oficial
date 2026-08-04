import { useState, useEffect } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Sparkles, Star, TrendingUp, AlertTriangle, ShieldCheck, FileText, Compass, Award, Users } from "lucide-react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeConversionSections from "./components/HomeConversionSections";
import SignalMethod from "./components/SignalMethod";
import SolutionsSection from "./components/SolutionsSection";
import DiagnosticSection from "./components/DiagnosticSection";
import FAQSection from "./components/FAQSection";
import ParceriaPage from "./components/ParceriaPage";
import MetodoSignalPage from "./components/MetodoSignalPage";
import SolucoesPage from "./components/SolucoesPage";
import GeoIaPage from "./components/GeoIaPage";
import DiagnosticoPage from "./components/DiagnosticoPage";
import SiteFooter from "./components/SiteFooter";
import ContentPage from "./components/ContentPage";
import BlogPage from "./components/BlogPage";
import SidneySantosPage from "./components/SidneySantosPage";
import PropostaDrFelipeBaraoPage from "./components/PropostaDrFelipeBaraoPage";
import ConsultoriaPage from "./components/ConsultoriaPage";

const routeMetadata: Record<string, { title: string; description: string; activeSection?: string; robots?: string }> = {
  "/": {
    title: "AUDITSEO | Consultoria de Inteligência de Busca e Autoridade",
    description:
      "Identificamos o que limita a presença da sua empresa e coordenamos a estratégia para fortalecer autoridade, visibilidade e reconhecimento no Google e nas plataformas de inteligência artificial.",
    activeSection: "inicio",
  },
  "/seo-para-agencias": {
    title: "AUDITSEO | Search Intelligence Partner para Agências",
    description:
      "Consultoria estratégica de SEO, GEO e inteligência de busca para agências que querem ampliar valor, retenção e evolução orgânica na carteira.",
    activeSection: "inicio",
    robots: "noindex,nofollow",
  },
  "/parceria": {
    title: "Parceria White-Label para Agências | AUDITSEO",
    description:
      "Parceria white-label de SEO, GEO, IA e Search Intelligence para agências ampliarem portfólio, retenção e evolução orgânica sem montar time interno.",
    activeSection: "parceria",
    robots: "noindex,nofollow",
  },
  "/para-agencias": {
    title: "Parceria Estratégica para Agências | AUDITSEO",
    description:
      "Parceria estratégica para agências incorporarem SEO, GEO e Search Intelligence white-label sem ampliar a operação interna.",
    activeSection: "parceria",
    robots: "noindex,nofollow",
  },
  "/metodo-signal": {
    title: "Método S.I.G.N.A.L. | Inteligência de Busca e Autoridade",
    description:
      "Conheça o método da AUDITSEO para diagnosticar, planejar, coordenar e acompanhar a construção de autoridade da sua empresa no Google e nas plataformas de inteligência artificial.",
    activeSection: "signal",
  },

  "/solucoes": {
    title: "Soluções de Inteligência de Busca e Autoridade | AUDITSEO",
    description:
      "Conheça as soluções da AUDITSEO para lançar, recuperar e fortalecer a presença da sua empresa no Google e nas plataformas de inteligência artificial.",
    activeSection: "solucoes",
  },
  "/white-label": {
    title: "SEO White-Label para Agências | AUDITSEO",
    description:
      "Parceria white-label de SEO, GEO e Search Intelligence para agências manterem marca, relacionamento e protagonismo diante do cliente.",
    activeSection: "parceria",
    robots: "noindex,nofollow",
  },
  "/geo-ia": {
    title: "GEO e Presença em Plataformas de IA | AUDITSEO",
    description:
      "Como preparar sua empresa para AI Search: autoridade de entidade, dados estruturados, consistência de sinais e presença responsável nas plataformas generativas.",
    activeSection: "geo-ia",
  },
  "/diagnostico": {
    title: "Avaliação Estratégica de Presença Digital | AUDITSEO",
    description:
      "Avaliação estratégica interativa para identificar o que limita a visibilidade, a compreensão e a autoridade da sua empresa no Google e nas plataformas de IA.",
    activeSection: "diagnostico",
  },
  "/politica-de-privacidade": {
    title: "Política de Privacidade | AUDITSEO",
    description:
      "Política de Privacidade da AUDITSEO sobre uso do site, formulários, canais de contato e informações compartilhadas por empresas interessadas na consultoria.",
  },
  "/termos-de-uso": {
    title: "Termos de Uso | AUDITSEO",
    description: "Termos de Uso do site AUDITSEO, seus conteúdos, formulários, materiais informativos e canais de contato.",
  },
  "/obrigado": {
    title: "Obrigado | AUDITSEO",
    description: "Solicitação recebida pela AUDITSEO.",
  },
  "/blog": {
    title: "Blog AUDITSEO | Inteligência de Busca, GEO e Autoridade",
    description:
      "Guias, análises e conteúdos práticos sobre inteligência de busca, GEO, IA, autoridade de entidade e presença digital de empresas.",
    activeSection: "conteudo",
  },
  "/autor/sidney-santos": {
    title: "Sidney Santos — Especialista em SEO e Search Intelligence | AUDITSEO",
    description:
      "Sidney Santos atua com busca desde 2009 e é fundador da AUDITSEO, consultoria de Inteligência de Busca e Autoridade de Entidade.",
    activeSection: "conteudo",
  },
  "/sidney-santos": {
    title: "Sidney Santos — Especialista em SEO e Search Intelligence | AUDITSEO",
    description:
      "Sidney Santos atua com busca desde 2009 e é fundador da AUDITSEO, consultoria de Inteligência de Busca e Autoridade de Entidade.",
    activeSection: "conteudo",
  },
  "/propostas/dr-felipe-barao": {
    title: "Proposta de Crescimento Orgânico para Dr. Felipe Barão | AUDITSEO",
    description:
      "Proposta confidencial da AUDITSEO para crescimento orgânico, autoridade digital e Search Intelligence do Dr. Felipe Barão.",
    robots: "noindex,nofollow",
  },
  "/proposta/dr-felipe-barao": {
    title: "Proposta de Crescimento Orgânico para Dr. Felipe Barão | AUDITSEO",
    description:
      "Proposta confidencial da AUDITSEO para crescimento orgânico, autoridade digital e Search Intelligence do Dr. Felipe Barão.",
    robots: "noindex,nofollow",
  },
  "/guias": {
    title: "Guias Técnicos AUDITSEO | GEO, Busca e Autoridade",
    description:
      "Guias técnicos e estratégicos sobre GEO, narrativa semântica, autoridade de entidade e inteligência de busca.",
  },
  "/estudos-busca-ia": {
    title: "Estudos de Busca com IA | AUDITSEO",
    description:
      "Estudos e análises sobre como IA, AI Search, GEO e mecanismos de resposta estão mudando descoberta, autoridade e decisão digital.",
  },
  "/guias/geo-readiness": {
    title: "GEO Readiness | Como preparar marcas para a nova busca | AUDITSEO",
    description:
      "Guia GEO Readiness da AUDITSEO: como preparar marcas para AI Search, respostas generativas, autoridade de entidade e nova busca.",
  },
  "/guias/narrativa-semantica": {
    title: "Narrativa Semântica e Autoridade de Entidade | AUDITSEO",
    description:
      "Entenda como narrativa semântica, entidade, contexto e autoridade ajudam marcas a serem melhor compreendidas por buscadores e IA.",
  },
  "/guias/search-intelligence": {
    title: "Inteligência de Busca | AUDITSEO",
    description:
      "Inteligência de busca é a camada que conecta dados, intenção, autoridade, conteúdo e decisão em uma estratégia coordenada de presença digital.",
  },
  "/consultoria": {
    title: "AUDITSEO | Consultoria de Inteligência de Busca e Autoridade",
    description:
      "Identificamos o que limita a presença da sua empresa e coordenamos a estratégia para fortalecer autoridade, visibilidade e reconhecimento no Google e nas plataformas de inteligência artificial.",
    activeSection: "inicio",
  },
};
const contentRoutes = new Set([
  "/politica-de-privacidade",
  "/termos-de-uso",
  "/obrigado",
  "/guias",
  "/estudos-busca-ia",
  "/guias/geo-readiness",
  "/guias/narrativa-semantica",
  "/guias/search-intelligence",
]);
export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const navigateRaw = useNavigate();
  const navigate = (opts: { to: string; replace?: boolean }) =>
    navigateRaw({ to: opts.to, replace: opts.replace } as never);
  const routerPath = useRouterState({ select: (s) => s.location.pathname });
  const [currentPath, setCurrentPath] = useState(routerPath);

  useEffect(() => {
    setCurrentPath(routerPath);
  }, [routerPath]);

  useEffect(() => {
    if (currentPath === "/para-agencias" || currentPath === "/white-label") {
      navigate({ to: "/parceria", replace: true });
      setCurrentPath("/parceria");
    }
    if (currentPath === "/sidney-santos") {
      navigate({ to: "/autor/sidney-santos", replace: true });
      setCurrentPath("/autor/sidney-santos");
    }
  }, [currentPath]);

  useEffect(() => {
    const setMeta = (selector: string, attributes: Record<string, string>) => {
      const meta = document.querySelector(selector) || document.createElement("meta");
      Object.entries(attributes).forEach(([key, value]) => meta.setAttribute(key, value));
      if (!meta.parentElement) document.head.appendChild(meta);
    };

    const routeMeta = routeMetadata[currentPath] || routeMetadata["/"];

    document.title = routeMeta.title;
    setMeta('meta[name="description"]', { name: "description", content: routeMeta.description });
    setMeta('meta[property="og:title"]', { property: "og:title", content: routeMeta.title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: routeMeta.description });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: routeMeta.title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: routeMeta.description });
    setMeta('meta[name="robots"]', { name: "robots", content: routeMeta.robots || "index,follow" });
    setMeta('meta[property="og:url"]', { property: "og:url", content: `https://www.auditseo.com.br${currentPath === "/" ? "/" : currentPath}` });

    const canonicalHref = `https://www.auditseo.com.br${currentPath === "/" ? "/" : currentPath}`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;

    setActiveSection(routeMeta.activeSection || "");

  }, [currentPath]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return;

    const anchorId = decodeURIComponent(window.location.hash.slice(1));
    const timer = window.setTimeout(() => {
      const anchorElement = document.getElementById(anchorId);
      if (anchorElement) {
        window.scrollTo({
          top: anchorElement.offsetTop - 92,
          behavior: "smooth",
        });
      }
    }, 120);

    return () => window.clearTimeout(timer);
  }, [currentPath]);

  // Scroll handler to track and highlight active navigation tab
  useEffect(() => {
    const handleScroll = () => {
      if (currentPath !== "/") return;

      const scrollPosition = window.scrollY + 200;
      const sections = [
        "inicio",
        "agencias",
        "signal",
        "solucoes",
        "white-label",
        "geo-ia",
        "diagnostico",
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId === "agencias" || sectionId === "white-label" ? "parceria" : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPath]);

  // Soft scroll trigger
  const handleScrollToSection = (sectionId: string) => {
    const scrollToHomeSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 82, // height alignment offset matching the floating navbar
          behavior: "smooth",
        });
        setActiveSection(sectionId);
      }
    };

    if (sectionId === "conteudo") {
      if (currentPath !== "/blog") {
        navigate({ to: "/blog" });
        setCurrentPath("/blog");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("conteudo");
      return;
    }

    if (sectionId === "parceria" || sectionId === "agencias" || sectionId === "white-label") {
      const anchor = sectionId === "white-label" ? "#modelo-white-label" : "";
      if (currentPath !== "/parceria" || window.location.hash !== anchor) {
        navigate({ to: `/parceria${anchor}` });
        setCurrentPath("/parceria");
      }
      window.setTimeout(() => {
        if (anchor) {
          const target = document.getElementById(anchor.slice(1));
          if (target) {
            window.scrollTo({ top: target.offsetTop - 82, behavior: "smooth" });
            return;
          }
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
      setActiveSection("parceria");
      return;
    }

    if (sectionId === "signal") {
      if (currentPath !== "/metodo-signal") {
        navigate({ to: "/metodo-signal" });
        setCurrentPath("/metodo-signal");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("signal");
      return;
    }

    if (sectionId === "solucoes") {
      if (currentPath !== "/solucoes") {
        navigate({ to: "/solucoes" });
        setCurrentPath("/solucoes");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("solucoes");
      return;
    }

    if (sectionId === "geo-ia") {
      if (currentPath !== "/geo-ia") {
        navigate({ to: "/geo-ia" });
        setCurrentPath("/geo-ia");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("geo-ia");
      return;
    }

    if (sectionId === "diagnostico") {
      if (currentPath !== "/diagnostico") {
        navigate({ to: "/diagnostico" });
        setCurrentPath("/diagnostico");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("diagnostico");
      return;
    }

    if (sectionId === "como-funciona" && currentPath === "/parceria") {
      const internalElement = document.getElementById(sectionId);
      if (internalElement) {
        window.scrollTo({
          top: internalElement.offsetTop - 82,
          behavior: "smooth",
        });
      }
      return;
    }

    if (sectionId === "camadas-signal" && currentPath === "/metodo-signal") {
      const internalElement = document.getElementById(sectionId);
      if (internalElement) {
        window.scrollTo({
          top: internalElement.offsetTop - 82,
          behavior: "smooth",
        });
      }
      return;
    }

    if (currentPath !== "/") {
      navigate({ to: "/" });
      setCurrentPath("/");
      window.setTimeout(scrollToHomeSection, 50);
      return;
    }

    scrollToHomeSection();
  };

  if (currentPath === "/para-agencias") {
    return (
      <div className="bg-[#11100f] text-[#f8f8f8] font-sans antialiased selection:bg-[#b28453] selection:text-[#ffffff]">
        <Header onNavClick={handleScrollToSection} activeSection="parceria" />
        <ParceriaPage onNavigate={handleScrollToSection} />
      </div>
    );
  }

  if (currentPath === "/parceria") {
    return (
      <div className="bg-[#11100f] text-[#f8f8f8] font-sans antialiased selection:bg-[#b28453] selection:text-[#ffffff]">
        <Header onNavClick={handleScrollToSection} activeSection="parceria" />
        <ParceriaPage onNavigate={handleScrollToSection} />
      </div>
    );
  }

  if (currentPath === "/metodo-signal") {
    return (
      <div className="bg-[#11100f] text-[#f8f8f8] font-sans antialiased selection:bg-[#b28453] selection:text-[#ffffff]">
        <Header onNavClick={handleScrollToSection} activeSection="signal" />
        <MetodoSignalPage onNavigate={handleScrollToSection} />
      </div>
    );
  }

  if (currentPath === "/solucoes") {
    return (
      <div className="bg-[#11100f] text-[#f8f8f8] font-sans antialiased selection:bg-[#b28453] selection:text-[#ffffff]">
        <Header onNavClick={handleScrollToSection} activeSection="solucoes" />
        <SolucoesPage onNavigate={handleScrollToSection} />
      </div>
    );
  }

  if (currentPath === "/white-label") {
    return (
      <div className="bg-[#11100f] text-[#f8f8f8] font-sans antialiased selection:bg-[#b28453] selection:text-[#ffffff]">
        <Header onNavClick={handleScrollToSection} activeSection="parceria" />
        <ParceriaPage onNavigate={handleScrollToSection} />
      </div>
    );
  }

  if (currentPath === "/geo-ia") {
    return (
      <div className="bg-[#11100f] text-[#f8f8f8] font-sans antialiased selection:bg-[#b28453] selection:text-[#ffffff]">
        <Header onNavClick={handleScrollToSection} activeSection="geo-ia" />
        <GeoIaPage onNavigate={handleScrollToSection} />
      </div>
    );
  }

  if (currentPath === "/diagnostico") {
    return (
      <div className="bg-[#11100f] text-[#f8f8f8] font-sans antialiased selection:bg-[#b28453] selection:text-[#ffffff]">
        <Header onNavClick={handleScrollToSection} activeSection="diagnostico" />
        <DiagnosticoPage onNavigate={handleScrollToSection} />
      </div>
    );
  }

  if (currentPath === "/blog") {
    return (
      <div className="bg-[#11100f] text-[#f8f8f8] font-sans antialiased selection:bg-[#b28453] selection:text-[#ffffff]">
        <Header onNavClick={handleScrollToSection} activeSection="conteudo" />
        <BlogPage onNavigate={handleScrollToSection} />
      </div>
    );
  }

  if (currentPath === "/autor/sidney-santos" || currentPath === "/sidney-santos") {
    return (
      <div className="bg-[#11100f] text-[#f8f8f8] font-sans antialiased selection:bg-[#b28453] selection:text-[#ffffff]">
        <Header onNavClick={handleScrollToSection} activeSection="conteudo" />
        <SidneySantosPage onNavigate={handleScrollToSection} />
      </div>
    );
  }

  if (currentPath === "/" || currentPath === "/consultoria") {
    const consultoriaHeaderNav = (sectionId: string) => {
      if (sectionId === "diagnostico") {
        const el = document.getElementById("form-contato");
        if (el) window.scrollTo({ top: el.offsetTop - 82, behavior: "smooth" });
        return;
      }
      handleScrollToSection(sectionId);
    };
    return (
      <div className="bg-[#11100f] text-[#f8f8f8] font-sans antialiased selection:bg-[#b28453] selection:text-[#ffffff]">
        <Header onNavClick={consultoriaHeaderNav} activeSection="" />
        <ConsultoriaPage onNavigate={consultoriaHeaderNav} />
      </div>
    );
  }

  if (currentPath === "/propostas/dr-felipe-barao" || currentPath === "/proposta/dr-felipe-barao") {
    return (
      <div className="bg-[#11100f] text-[#f8f8f8] font-sans antialiased selection:bg-[#b28453] selection:text-[#ffffff]">
        <PropostaDrFelipeBaraoPage onNavigate={handleScrollToSection} />
      </div>
    );
  }

  if (contentRoutes.has(currentPath)) {
    return (
      <div className="bg-[#11100f] text-[#f8f8f8] font-sans antialiased selection:bg-[#b28453] selection:text-[#ffffff]">
        <Header onNavClick={handleScrollToSection} activeSection="" />
        <ContentPage path={currentPath} onNavigate={handleScrollToSection} />
      </div>
    );
  }

  return (
    <div className="bg-[#11100f] text-[#f8f8f8] font-sans antialiased selection:bg-[#b28453] selection:text-[#ffffff]">
      
      {/* 1. HEADER (STILL ON TOP) */}
      <Header onNavClick={handleScrollToSection} activeSection={activeSection} />

      {/* 2. HERO SECTION */}
      <Hero onCtaClick={handleScrollToSection} />

      <HomeConversionSections onNavigate={handleScrollToSection} />

      {/* 3. FAIXA DE RESPIRO */}
      <section
        id="respiro-strip"
        className="bg-[#11100f] text-[#f8f8f8] py-16 md:py-24 flex items-center justify-center"
      >
        <div className="container mx-auto px-6 max-w-[1320px] text-center select-none">
          <p className="font-display font-medium text-lg sm:text-2xl md:text-3xl leading-relaxed tracking-tight max-w-4xl mx-auto text-[#e0d3c3]">
            “A nova busca digital exige uma nova camada de profundidade estratégica dentro das agências de marketing.”
          </p>
        </div>
      </section>

      {/* 4. SEÇÃO — AMBIENTES DA NOVA BUSCA */}
      <section
        id="geo-ia"
        className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          {/* Header */}
          <div className="text-left flex flex-col items-start mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              A BUSCA SE FRAGMENTOU
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl">
              Hoje a decisão do cliente final passa por muito mais do que uma busca simples no Google
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
            <p className="text-[#c9c9c9] text-base md:text-lg lg:text-md font-normal leading-relaxed max-w-3xl">
              O cliente final pesquisa no Google, compara mapas, lê avaliações, consome conteúdo e faz perguntas para assistentes de IA antes de decidir. A busca deixou de ser um canal único e passou a ser um ecossistema de sinais.
            </p>
            <a href="/blog" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#b28453] transition-colors hover:text-[#e0d3c3]">
              Leia o artigo completo →
            </a>
          </div>

          {/* Grid of 4 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[36px] mb-16">
            {[
              {
                num: "01",
                title: "Google e Busca Orgânica",
                desc: "Onde o ranqueamento tradicional e a relevância sistêmica continuam decisivos para descoberta, consideração e validação da marca.",
                svg: (
                  <svg className="luxury-vector absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] stroke-[#b28453] stroke-[1.4] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="11" y1="8" x2="11" y2="14" strokeLinecap="round" />
                    <line x1="8" y1="11" x2="14" y2="11" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                num: "02",
                title: "SEO Local e Mapas",
                desc: "Pilar essencial para empresas dependentes de relevância regional, intenção comercial imediata e decisões próximas da conversão física.",
                svg: (
                  <svg className="luxury-vector absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] stroke-[#b28453] stroke-[1.4] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                )
              },
              {
                num: "03",
                title: "Autoridade Temática",
                desc: "O ecossistema que auxilia a marca do cliente a ser encontrada com as devidas respostas estruturadas, gerando credibilidade tática comparativa e confiança contextual.",
                svg: (
                  <svg className="luxury-vector absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] stroke-[#b28453] stroke-[1.4] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="2 17 12 22 22 17" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="2 12 12 17 22 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                num: "04",
                title: "Ambientes Generativos",
                desc: "Contextos como Google AI Overviews, ChatGPT Search, Gemini, Copilot, Perplexity e outras respostas por IA, onde clareza técnica e estruturas semânticas pautam recomendações de marca.",
                svg: (
                  <svg className="luxury-vector absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] stroke-[#b28453] stroke-[1.4] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              }
            ].map((box) => (
              <div
                id={`ambiente-box-${box.num}`}
                key={box.num}
                className="luxury-card group"
              >
                {/* Conteúdo do Card */}
                <h3 
                  className="font-bold text-[#f8f8f8]"
                  style={{
                    fontFamily: "'Space Grotesk', 'Manrope', 'Inter', sans-serif",
                    fontSize: "24px",
                    lineHeight: "1.18",
                    letterSpacing: "-0.025em",
                    marginTop: "0",
                    marginBottom: "0"
                  }}
                >
                  {box.title}
                </h3>

                {/* Linha dourada curta */}
                <div 
                  style={{
                    width: "54px",
                    height: "2px",
                    background: "linear-gradient(90deg, #b28453, rgba(178,132,83,0))",
                    marginTop: "22px",
                    marginBottom: "22px"
                  }} 
                />

                <p 
                  className="font-normal"
                  style={{
                    fontSize: "16.5px",
                    lineHeight: "1.65",
                    color: "rgba(248,248,248,0.72)",
                    maxWidth: "92%"
                  }}
                >
                  {box.desc}
                </p>

                {/* Detalhe Visual Abstrato */}
                {box.svg}
              </div>
            ))}
          </div>



        </div>
      </section>
      {/* 5. SEÇÃO — PROPOSTA DE VALOR CENTRAL */}
      <section
        id="agencias"
        className="relative overflow-hidden bg-[#11100f] text-[#f8f8f8] pt-[110px] pb-[120px]"
      >
        <style dangerouslySetInnerHTML={{__html: `
          .luxury-card {
            min-height: 300px;
            padding: 42px;
            border-radius: 22px;
            position: relative;
            overflow: hidden;
            background: linear-gradient(145deg, rgba(31,30,28,0.98) 0%, rgba(17,16,15,0.98) 58%, rgba(11,11,10,1) 100%);
            border: 1px solid rgba(178,132,83,0.34);
            box-shadow: 0 28px 70px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(178,132,83,0.08);
            transition: all 350ms ease;
          }
          .luxury-card::before {
            content: "";
            position: absolute;
            top: -90px;
            right: -90px;
            width: 220px;
            height: 220px;
            background: radial-gradient(circle, rgba(178,132,83,0.18) 0%, rgba(178,132,83,0.07) 36%, transparent 68%);
            pointer-events: none;
            transition: all 350ms ease;
          }
          .luxury-card::after {
            content: "";
            position: absolute;
            bottom: -40px;
            right: -40px;
            width: 180px;
            height: 180px;
            opacity: 0.14;
            background-image: radial-gradient(circle, rgba(178,132,83,0.7) 1px, transparent 1px);
            background-size: 14px 14px;
            mask-image: radial-gradient(circle, black 0%, transparent 72%);
            -webkit-mask-image: radial-gradient(circle, black 0%, transparent 72%);
            pointer-events: none;
            transition: all 350ms ease;
          }
          .luxury-card:hover {
            transform: translateY(-8px);
            border-color: rgba(178,132,83,0.68);
            box-shadow: 0 34px 90px rgba(0,0,0,0.48), 0 0 42px rgba(178,132,83,0.13), inset 0 1px 0 rgba(255,255,255,0.07);
          }
          .luxury-card:hover .luxury-medal {
            border-color: rgba(178,132,83,0.85);
            box-shadow: 0 0 0 6px rgba(178,132,83,0.08), 0 0 36px rgba(178,132,83,0.34), inset 0 0 16px rgba(224,211,195,0.1);
          }
          .luxury-card:hover .luxury-vector {
            opacity: 0.85;
          }
        `}} />

        {/* Radial glow background sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#b28453]/4 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-[48px] max-w-[1320px] relative z-10">
          {/* Header */}
          <div className="text-left flex flex-col items-start mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              ALAVANCAGEM COMERCIAL
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#ffffff] leading-[1.1] tracking-tight max-w-4xl">
              A AUDITSEO fortalece a entrega da sua agência sem aumentar a complexidade da sua operação
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
            <p className="text-[#c9c9c9] text-base md:text-lg leading-relaxed max-w-3xl">
              Donos e sócios de agências experientes já perceberam que SEO, GEO e inteligência de mapas deixaram de ser itens operacionais secundários de baixo valor percebido. Eles determinam diretamente o valor do contrato comercial, retenção a longo prazo, escopo estruturado, autoridade de marca e novas fontes lucrativas de receita.
            </p>
          </div>

          {/* Grid 3 colunas x 2 linhas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[36px]">
            {[
              {
                num: "I",
                title: "Venda com mais confiança",
                desc: "Diagnósticos profundos, dados e roteiros estratégicos para sua agência apresentar propostas mais sólidas e aumentar a percepção de valor.",
                svg: (
                  <svg className="luxury-vector absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] stroke-[#b28453] stroke-[1.4] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none">
                    <line x1="18" y1="20" x2="18" y2="10" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="12" y1="20" x2="12" y2="4" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="6" y1="20" x2="6" y2="14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                num: "II",
                title: "Aumente a retenção",
                desc: "Mostre direção estratégica, novas oportunidades e próximos passos claros, em vez de relatórios repetitivos que o cliente não entende.",
                svg: (
                  <svg className="luxury-vector absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] stroke-[#b28453] stroke-[1.4] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" strokeDasharray="2 2" />
                    <circle cx="12" cy="12" r="1.5" fill="#b28453" />
                    <path d="M 12 1 L 12 3" />
                    <path d="M 12 21 L 12 23" />
                    <path d="M 1 12 L 3 12" />
                    <path d="M 21 12 L 23 12" />
                    <path d="M 21.5 2 v 6 h -6 M 21.34 8 a 10 10 0 1 0 -.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                num: "III",
                title: "Abra uma nova frente de receita",
                desc: "Ofereça Search Intelligence, SEO e GEO com alto valor percebido, sem montar uma operação interna especializada.",
                svg: (
                  <svg className="luxury-vector absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] stroke-[#b28453] stroke-[1.4] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                )
              },
              {
                num: "IV",
                title: "Substitua achismo por método",
                desc: "Troque decisões improvisadas por diagnósticos, auditorias semânticas e roadmaps práticos que sua agência consegue defender com clareza.",
                svg: (
                  <svg className="luxury-vector absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] stroke-[#b28453] stroke-[1.4] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                num: "V",
                title: "Consolide sua autoridade",
                desc: "Posicione sua agência como parceira mais estratégica para clientes que precisam se adaptar à nova era da busca e da inteligência artificial.",
                svg: (
                  <svg className="luxury-vector absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] stroke-[#b28453] stroke-[1.4] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none">
                    <path d="M 12 22 s 8 -4 8 -10 V 5 l -8 -3 -8 3 v 7 c 0 6 8 10 8 10 Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                num: "VI",
                title: "Proteja sua carteira",
                desc: "Evite que concorrentes usem SEO, GEO ou IA como argumento para tomar espaço dentro das contas que sua agência já atende.",
                svg: (
                  <svg className="luxury-vector absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] stroke-[#b28453] stroke-[1.4] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M 7 11 V 7 a 5 5 0 0 1 10 0 v 4" />
                  </svg>
                )
              }
            ].map((prop) => (
              <div
                id={`proposta-card-${prop.num}`}
                key={prop.num}
                className="luxury-card group"
              >
                {/* Conteúdo do Card */}
                <h3 
                  className="font-bold text-[#f8f8f8]"
                  style={{
                    fontFamily: "'Space Grotesk', 'Manrope', 'Inter', sans-serif",
                    fontSize: "24px",
                    lineHeight: "1.18",
                    letterSpacing: "-0.025em",
                    marginTop: "0",
                    marginBottom: "0"
                  }}
                >
                  {prop.title}
                </h3>

                {/* Linha dourada curta */}
                <div 
                  style={{
                    width: "54px",
                    height: "2px",
                    background: "linear-gradient(90deg, #b28453, rgba(178,132,83,0))",
                    marginTop: "22px",
                    marginBottom: "22px"
                  }} 
                />

                <p 
                  className="font-normal"
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.65",
                    color: "rgba(248,248,248,0.72)",
                    maxWidth: "92%"
                  }}
                >
                  {prop.desc}
                </p>

                {/* Detalhe Visual Abstrato */}
                {prop.svg}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. NOVA REALIDADE DA BUSCA */}
      <section
        id="nova-realidade"
        className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          {/* Header Layout standard */}
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              A EVOLUÇÃO DO COMPORTAMENTO DIGITAL
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#11100f] leading-[1.1] tracking-tight">
              A busca mudou. E isso muda totalmente o que o cliente espera da sua agência.
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Coluna esquerda */}
            <div className="lg:col-span-6 text-left">
              <p className="text-[#11100f] text-base md:text-lg leading-[1.7] mb-6">
                Durante anos, muitas agências cresceram apoiadas em mídia paga, social e conteúdo operacional. Esse modelo continua importante, mas já não responde sozinho à complexidade da nova busca.
              </p>
              <p className="text-[#11100f] text-base md:text-lg leading-[1.7] mb-8">
                SEO passou a conectar técnica, conteúdo, autoridade, reputação, dados estruturados e IA. O cliente espera direção, não apenas execução isolada.
              </p>
              <a href="/guias/search-intelligence" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#6d5132] transition-colors hover:text-[#11100f]">
                Leia o guia completo →
              </a>

              {/* Item destacado */}
              <div className="border-l-4 border-[#b28453] pl-6 pr-6 py-3 bg-[#f4eee5] rounded-r-lg shadow-sm">
                <span className="font-mono text-xs text-[#b28453] font-bold tracking-widest block mb-1 uppercase">
                  EQUILÍBRIO DE POSICIONAMENTO
                </span>
                <p className="font-display text-base sm:text-[17px] md:text-lg font-bold text-[#11100f] italic leading-relaxed">
                  “SEO deixou de ser um trabalho periférico e virou uma camada estratégica insubstituível para crescer marcas de alto padrão.”
                </p>
              </div>
            </div>

            {/* Coluna direita list timeline vertical */}
            <div className="lg:col-span-6 relative text-left">
              <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-[#b28453]/40" />
              
              <div className="space-y-6">
                {[
                  "Pesquisa ativa de credibilidade no Google",
                  "Compara propostas em diretórios corporativos",
                  "Analisa as estrelas e avaliações legítimas locais",
                  "Consulta trajetos e proximidades de mapas locais",
                  "Busca provas factuais e menções de relevância de marca",
                  "Consulta recomendações diretas com ferramentas de IA generativa"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-6 relative pl-3">
                    <div className="w-6 h-6 rounded-full bg-[#11100f] border border-[#b28453] flex items-center justify-center text-[#e0d3c3] font-mono text-[10px] z-10 font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <span className="text-base sm:text-lg font-semibold text-[#11100f]">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Faixa preta final de fechamento da secao */}
          <div className="bg-[#11100f] text-[#f8f8f8] py-8 px-8 sm:px-12 rounded-2xl text-center shadow-lg mt-16 select-none md:mt-24 border border-white/5">
            <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide">
              Agências preparadas que tratam a inteligência de busca como infraestrutura essencial fecham contratos robustos e duradouros.
            </p>
          </div>

        </div>
      </section>

      {/* Camada de entidade e autoridade */}
      <section
        id="entity-authority-layer"
        className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32 relative overflow-hidden"
      >
        {/* Glow sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b28453]/3 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Coluna Esquerda: Texto Editorial/Consultivo */}
            <div className="lg:col-span-6 text-left">
              <span className="text-[#b28453] text-[13px] tracking-[0.15em] font-mono font-bold uppercase mb-4 block">
                CAMADA DE ENTIDADE E AUTORIDADE
              </span>
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-bold text-[#f8f8f8] leading-[1.15] tracking-tight mb-6">
                Autoridade de entidade: a base invisível da nova busca
              </h2>
              <h3 className="font-sans text-[#e0d3c3] text-lg sm:text-xl font-medium leading-relaxed mb-6">
                Google, IAs e usuários precisam entender quem é a marca, o que ela faz, onde atua, por que é confiável e quais sinais sustentam sua autoridade.
              </h3>
              <div className="w-[124px] h-[2px] bg-[#b28453]/60 mb-6" />
              <p className="text-[#c9c9c9] text-base leading-relaxed mb-6">
                Na nova busca, não basta publicar páginas, repetir palavras-chave ou criar conteúdos genéricos. Marcas precisam ser compreendidas como entidades consistentes: com posicionamento claro, serviços bem estruturados, reputação, provas, dados organizados e sinais externos de confiança.
              </p>
              <p className="text-[#c9c9c9] text-base leading-relaxed mb-8">
                A AUDITSEO ajuda sua agência a transformar essa complexidade em uma entrega estruturada para seus clientes, conectando SEO semântico, dados estruturados, conteúdo estratégico, reputação digital e presença em ambientes de busca e IA.
              </p>
              <div className="bg-[#181716] border border-[#b28453]/15 p-6 rounded-xl">
                <p className="text-[#e2d3c1] text-sm md:text-[14.5px] leading-relaxed italic">
                  Não se trata de prometer aparição automática em IA. Trata-se de organizar os sinais que aumentam a clareza, a confiança e a capacidade da marca ser corretamente interpretada em diferentes ambientes de descoberta.
                </p>
              </div>
            </div>

            {/* Coluna Direita: Card Premium 'Sinais que organizamos' */}
            <div className="lg:col-span-6 w-full">
              <div 
                className="relative overflow-hidden p-8 md:p-10 rounded-[22px] text-left"
                style={{
                  background: 'linear-gradient(145deg, rgba(31,30,28,0.98), rgba(17,16,15,0.98))',
                  border: '1px solid rgba(178,132,83,0.34)',
                  boxShadow: '0 28px 70px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.05)'
                }}
              >
                {/* Glow decorativo interno do card */}
                <div 
                  className="absolute -top-[90px] -right-[90px] w-[220px] h-[220px] pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(178,132,83,0.15) 0%, rgba(178,132,83,0.05) 36%, transparent 68%)'
                  }}
                />

                <h3 className="font-display font-bold text-[#e0d3c3] text-xl md:text-2xl mb-8 tracking-wide">
                  Sinais que organizamos
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      num: "01",
                      title: "Clareza de entidade",
                      desc: "Quem é a marca, o que oferece, para quem atende e onde atua."
                    },
                    {
                      num: "02",
                      title: "Arquitetura semântica",
                      desc: "Páginas, serviços e conteúdos conectados por intenção, contexto e relevância."
                    },
                    {
                      num: "03",
                      title: "Dados estruturados",
                      desc: "Schema Markup coerente com o conteúdo visível e com a entidade do negócio."
                    },
                    {
                      num: "04",
                      title: "Provas e reputação",
                      desc: "Avaliações, cases, menções, especialistas, diferenciais e sinais de confiança."
                    },
                    {
                      num: "05",
                      title: "Presença externa",
                      desc: "Citações, backlinks, diretórios, perfis e consistência entre canais."
                    },
                    {
                      num: "06",
                      title: "Leitura em IA",
                      desc: "Análise de como a marca pode ser interpretada em ambientes generativos e mecanismos de resposta."
                    }
                  ].map((item) => (
                    <div 
                      key={item.num} 
                      className="flex items-start gap-4 pb-5 last:pb-0 last:border-0 border-b border-[#b28453]/16"
                    >
                      <span className="font-mono text-sm font-bold text-[#b28453] select-none mt-0.5">
                        {item.num}
                      </span>
                      <div>
                        <h4 className="text-white text-base font-bold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[#c9c9c9]/80 text-xs sm:text-[13px] leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. DOR DA AGÊNCIA */}
      <section
        className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          {/* Header Layout */}
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              A DOR SEMENTE DA INDÚSTRIA
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl">
              O desafio não é apenas vender SEO. É sustentar essa entrega complexa com clareza, segurança e consistência.
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-4" />
            <p className="text-[#b28453] font-display text-lg sm:text-xl font-medium tracking-wide select-none">
              É exatamente aqui que a grande maioria das agências travam na hora de escalar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Coluna 1: O que vivem */}
            <div className="bg-[#181716] border border-[#b28453]/20 p-8 sm:p-12 rounded-2xl text-left shadow-lg">
              <span className="text-[#b28453] text-[10px] font-mono font-bold tracking-widest block mb-2 uppercase">
                VIVÊNCIAS REAIS
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-8 border-b border-[#b28453]/15 pb-4">
                O que a agência vive
              </h3>
              <ul className="space-y-4">
                {[
                  "Quer ampliar o ticket cobrado além do tráfego pago tradicional",
                  "Vê clientes de peso questionando sobre Google, mapas, artigos e IA constantemente",
                  "Sente ampla margem para apresentar ofertas, porém receia prometer prazos sem sustentação técnica",
                  "Recusa-se a inchar a folha interna com sêniores CLT caros antes de consolidar demanda real",
                  "Necessita defender o valor cobrado com propostas técnicas robustas para reter contas importantes"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-[#c9c9c9] text-sm md:text-base leading-[1.6]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b28453] shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 2: O que começa a acontecer */}
            <div className="bg-[#181716] border border-[#b28453]/20 p-8 sm:p-12 rounded-2xl text-left shadow-lg">
              <span className="text-[#b28453] text-[10px] font-mono font-bold tracking-widest block mb-2 uppercase">
                CONSEQUÊNCIAS OPERACIONAIS
              </span>
              <h3 className="font-display text-2xl font-bold text-[#b28453] mb-8 border-b border-[#b28453]/15 pb-4">
                O que começa a acontecer
              </h3>
              <ul className="space-y-4">
                {[
                  "SEO e GEO tornam-se promessas operacionais frustrantes de justificar",
                  "Artigos e redações de blog são escritos mecanicamente sem alinhamento comercial",
                  "Relatórios mensais ficam desconectados de intenções reais de retenção ou faturamento",
                  "O cliente final perde o entendimento da evolução tática devido à poluição de dados",
                  "O fantasma do Churn imediato cresce diante da escassez de liderança consultiva na conta"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-[#c9c9c9] text-sm md:text-base leading-[1.6]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b28453] shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-16 text-center select-none">
            <p className="inline-block border border-[#b28453]/45 bg-[#b28453]/5 px-8 py-4 rounded-full text-sm sm:text-base text-[#e0d3c3] font-medium max-w-3xl">
              “Sem suporte de inteligência orgânica constante nos bastidores, a agência não perde somente tráfego orgânico. Ela perde espaço, e enfraquece a defesa de valor da conta.”
            </p>
          </div>

        </div>
      </section>

      {/* 8. COMO A AUDITSEO ENTRA */}
      <section
        className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          {/* Header */}
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              PARCERIA E INTEGRAÇÃO DE SQUADS
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight">
              A AUDITSEO entra como braço estratégico da sua agência
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-4" />
            <p className="text-[#b28453] font-display text-lg sm:text-xl font-bold select-none uppercase tracking-wide">
              Não para disputar o seu cliente final. Mas para blindar sua entrega.
            </p>
          </div>

          {/* Grid with 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-16">
            {[
              {
                num: "I",
                title: "Diagnóstico Estratégico",
                desc: "Análise profunda técnica estrutural, gargalos semânticos, visibilidade em buscadores tradicionais, otimização de mapas e posture preliminar de GEO para ChatGPT, Gemini, Copilot e Perplexity.",
                svg: (
                  <svg className="absolute bottom-6 right-6 w-14 h-14 stroke-[0.75] text-[#b28453] opacity-15 group-hover:opacity-35 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                )
              },
              {
                num: "II",
                title: "Priorização & Roadmaps",
                desc: "Transformamos o excesso de dados em direção cirúrgica de 90 dias: o que pautar de imediato para gerar resultados que o gerente de contas consiga demonstrar.",
                svg: (
                  <svg className="absolute bottom-6 right-6 w-14 h-14 stroke-[0.75] text-[#b28453] opacity-15 group-hover:opacity-35 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M 2 18 Q 6 12, 10 15 T 18 9 T 22 13" />
                  </svg>
                )
              },
              {
                num: "III",
                title: "Parceria White-Label",
                desc: "Todo o acompanhamento tático e geração de relatórios premium emitidos com sua própria marca. Mantemos sigilo e total neutralidade operacional.",
                svg: (
                  <svg className="absolute bottom-6 right-6 w-14 h-14 stroke-[0.75] text-[#b28453] opacity-15 group-hover:opacity-35 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <path d="M 12 2 V 11" strokeDasharray="2 1" />
                  </svg>
                )
              },
              {
                num: "IV",
                title: "Apoio Recorrente",
                desc: "Estruturamos squads ágeis ou suporte consultivo para revisar propostas complexas, blindar contratos sensíveis, calibrar metas e validar conformidade técnica.",
                svg: (
                  <svg className="absolute bottom-6 right-6 w-14 h-14 stroke-[0.75] text-[#b28453] opacity-15 group-hover:opacity-35 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M 12 22 C 12 22, 20 18, 20 12 L 20 5 L 12 2 L 4 5 L 4 12 C 4 18, 12 22, 12 22 Z" />
                  </svg>
                )
              }
            ].map((card) => (
              <div
                id={`como-entra-${card.num}`}
                key={card.num}
                className="group relative overflow-hidden min-h-[320px] p-[38px] rounded-[24px] flex flex-col justify-between items-start text-left transition-all duration-[400ms] cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-[6px]"
                style={{
                  background: 'linear-gradient(145deg, rgba(32, 31, 29, 0.96), rgba(15, 15, 14, 0.98))',
                  border: '1px solid rgba(178, 132, 83, 0.32)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* Glow dourado de canto interno ao passar o mouse */}
                <div 
                  className="absolute top-0 right-0 w-[160px] h-[160px] bg-[#b28453]/4 blur-[60px] rounded-full pointer-events-none opacity-40 group-hover:opacity-100 group-hover:bg-[#b28453]/8 transition-all duration-[400ms]" 
                />
                
                {/* Micro textura sutil */}
                <div 
                  className="absolute inset-0 bg-repeat bg-[radial-gradient(circle_at_center,rgba(178,132,83,0.02)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" 
                />

                {/* Conteúdo do Card */}
                <div className="relative z-10 w-full">
                  <span className="text-[11px] font-mono tracking-widest text-[#b28453] font-bold block mb-2 opacity-80">
                    MODELO_0{card.num}
                  </span>
                  
                  <h3 className="font-display text-[20px] md:text-[22px] font-bold text-[#f8f8f8] leading-[1.2] tracking-[-0.01em]">
                    {card.title}
                  </h3>

                  {/* Linha dourada curta */}
                  <div className="w-[45px] h-[2px] bg-[#b28453] opacity-[0.85] my-[18px]" />

                  <p className="text-[#f8f8f8]/72 text-[14px] md:text-[15px] font-normal leading-[1.6]">
                    {card.desc}
                  </p>
                </div>

                {/* Ambient background SVGs */}
                {card.svg}
              </div>
            ))}
          </div>

          <div className="text-center font-display font-bold text-lg text-[#e0d3c3] select-none">
            “Sua agência mantém o relacionamento de conta. A AUDITSEO sustenta a inteligência orgânica por trás da entrega.”
          </div>

        </div>
      </section>

      {/* 9. MÉTODO S.I.G.N.A.L (Timeline Component) */}
      <SignalMethod onCtaClick={handleScrollToSection} />

      {/* 10. SOLUÇÕES ESTRATÉGICAS (Bento Grid Component) */}
      <SolutionsSection onCtaClick={handleScrollToSection} />

      {/* 11. MODELOS DE PARCERIA */}
      <section
        id="white-label"
        className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] relative z-10">
          
          {/* Header Layout standard */}
          <div className="text-left flex flex-col items-start mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              FLEXIBILIDADE DE RETAGUARDA
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#11100f] leading-[1.1] tracking-tight max-w-4xl">
              Um modelo de parceria para cada estágio da sua agência
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
            <p className="text-[#2a2927] text-base md:text-lg leading-relaxed max-w-3xl">
              Donos e sócios de grandes agências sabem que cada conta de cliente possui uma realidade própria de orçamento e maturidade. Ajustamos o modelo de apoio técnico para blindar pontualmente uma conta valiosa ou para estruturar um novo portfólio de receitas recorrentes robustas para sua agência de marketing.
            </p>
          </div>

          {/* Grid 2x2 with standardized card design like the Signal session */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "Diagnóstico Avulso",
                subtitle: "Para tomadas de decisão cirúrgicas e auditorias de urgência.",
                desc: "Recomendado para momentos decisivos nos quais sua agência precisa de uma leitura estratégica antes de formatar propostas, renovar contas com risco de cancelamento ou baixa percepção de valor, ou contornar crises. Entregamos documentação mapeando problemas táticos, oportunidades e planos executivos de 90 dias estruturados com rigor.",
                icon: <FileText size={20} className="text-[#b28453]" />
              },
              {
                num: "02",
                title: "Consultoria Estratégica",
                subtitle: "Direção técnica e suporte sob medida para sua equipe.",
                desc: "Moldado para agências que contam com redatores internos operáveis e especialistas de dados, porém carecem de sênior experiente de inteligência de busca para liderar. Realizamos ritos de priorização, roadmaps de entrega técnica, revisões técnicas finas de código e validações semânticas de sitemap.",
                icon: <Compass size={20} className="text-[#b28453]" />
              },
              {
                num: "03",
                title: "Parceria White-Label",
                subtitle: "Nossos relatórios e laudos sob a marca da sua agência.",
                desc: "Ideal para agências de marketing digital que almejam robustecer o catálogo comercial sob a própria marca corporativa imediata de modo a lucrar com ampla margem. Produzimos relatórios, laudos analíticos técnicos detalhados e diagnósticos consultivos com a identidade visual personalizada da sua instituição.",
                icon: <Award size={20} className="text-[#b28453]" />
              },
              {
                num: "04",
                title: "Squad Externo SEO/GEO",
                subtitle: "Retaguarda estratégica dedicada e alinhamento recorrente.",
                desc: "Integração recorrente sob demanda com retaguarda técnica dedicada. O time estratégico de busca da AUDITSEO entra para operar planejamentos minuciosos, rotinas e relatórios constantes baseando-se no método S.I.G.N.A.L, operando de mãos dadas com gerentes e tomadores de decisão da agência de marketing.",
                icon: <Users size={20} className="text-[#b28453]" />
              }
            ].map((mod) => (
              <div
                id={`modelo-parceria-${mod.num}`}
                key={mod.num}
                className="bg-[#f4eee5] rounded-xl p-6 lg:p-8 shadow-[0_14px_36px_rgba(17,16,15,0.05)] border border-[#b28453]/10 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(17,16,15,0.08)]"
              >
                <div className="flex items-center space-x-2 justify-between mb-4">
                  <span className="p-2 bg-[#b28453]/15 rounded-lg border border-[#b28453]/20">
                    {mod.icon}
                  </span>
                  <span className="font-mono text-xs text-[#b28453] font-bold uppercase tracking-widest">
                    MODELO_{mod.num}
                  </span>
                </div>
                <h4 className="text-[18px] sm:text-[22px] font-bold text-[#11100f] mb-1 font-display">
                  {mod.title}
                </h4>
                <p className="text-[#b28453] text-[13px] font-semibold italic mb-3">
                  {mod.subtitle}
                </p>
                <p className="text-[#2a2927] text-[14px] leading-[1.6]">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. ANTES E DEPOIS RESISTENTE */}
      <section
        className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          {/* Header */}
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              MÉTRICA E COMPREENSÃO DE VALOR
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#11100f] leading-[1.1] tracking-tight max-w-4xl">
              O que muda quando sua agência tem um parceiro de Search Intelligence
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* ANTES (Grafite escuro) */}
            <div className="bg-[#2a2927] text-[#f8f8f8] p-8 sm:p-12 rounded-2xl shadow-xl border border-white/5 text-left">
              <span className="text-[#c9c9c9] text-[10px] font-mono font-bold tracking-widest block mb-2 uppercase opacity-85">
                CENÁRIO TRADICIONAL
              </span>
              <h3 className="font-display text-2xl font-bold text-[#e0d3c3] mb-8 border-b border-white/10 pb-4">
                Antes
              </h3>
              <ul className="space-y-4">
                {[
                  "SEO é tratado como tarefa mecânica periférica isolada",
                  "Redação produz posts genéricos que não geram autoridade semântica",
                  "Relatórios mensais cheios de dados e gráficos soltos sem clareza",
                  "Cliente final frustrado sem entender os próximos passos práticos",
                  "Agência de marketing insegura para comercializar projetos orgânicos mais estratégicos",
                  "Operação interna sobrecarregada, apagando incêndios constantemente",
                  "Decisões de metas orientadas meramente por achismos de palavras"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-[#c9c9c9]">
                    <AlertTriangle size={16} className="text-[#b28453] mt-1 shrink-0" />
                    <span className="text-sm md:text-base leading-[1.5]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DEPOIS (Champagne) */}
            <div className="bg-[#11100f] text-[#f8f8f8] p-8 sm:p-12 rounded-2xl shadow-2xl border-2 border-[#b28453] text-left">
              <span className="text-[#b28453] text-[10px] font-mono font-bold tracking-widest block mb-1 uppercase">
                INTEGRAÇÃO PARCEIRA AUDITSEO
              </span>
              <h3 className="font-display text-2xl font-bold text-[#b28453] mb-8 border-b border-[#b28453]/25 pb-4">
                Depois
              </h3>
              <ul className="space-y-4">
                {[
                  "SEO e GEO vistos como frentes cruciais estruturadas de crescimento",
                  "Conteúdo técnico conectado com intenções reais e tópicos de autoridade",
                  "Painéis focados no que o cliente e o tomador de decisão realmente compreendem",
                  "Demonstração nítida de evolução e planos de ação futuros consistentes",
                  "Comercial de vendas embasado em ricas auditorias consultivas de mapas e IA",
                  "Segurança operacional sem inchaço com suporte especializado sênior constante",
                  "Operação fundamentada em Search Intelligence e priorização do método S.I.G.N.A.L"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-[#f8f8f8]">
                    <CheckCircle2 size={16} className="text-[#b28453] mt-1 shrink-0" />
                    <span className="text-sm md:text-base leading-[1.5] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-16 text-center select-none font-display font-semibold text-lg text-[#11100f]">
            “A grande diferença tática não reside em cumprir um volume infinito de tarefas isoladas. Consiste em focar cirurgicamente nas ações de busca que realmente movem a carteira orgânica.”
          </div>

        </div>
      </section>

      {/* 13. PROVA E AUTORIDADE */}
      <section
        className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          
          {/* Header */}
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              INTELIGÊNCIA SINALIZADA E VISÍVEL
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl">
              Estratégia orgânica precisa ser visível, explicável e defensável
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
            <p className="text-[#c9c9c9] text-base md:text-lg lg:text-xl font-normal max-w-3xl leading-[1.6]">
              A AUDITSEO instrumentaliza a linha diretiva da agência parceira de modo a transformar cruzamento de dados de SEO complexos em propostas lógicas simples de vender, explicar e auditar na frente dos clientes.
            </p>
          </div>

          {/* 5 blocks row */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {[
              {
                num: "01",
                label: "DIAGNOSTIC",
                title: "Diagnósticos Executivos",
                desc: "Demonstrações lógicas estruturadas mostrando a exatidão de onde a marca do cliente está posicionada, metas atingíveis e ações prioritárias.",
                svg: (
                  <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                )
              },
              {
                num: "02",
                label: "MAPPING",
                title: "Mapas de Oportunidade",
                desc: "Análise investigativa descortinando tráfego geográfico comercial real, marcas competidoras e tópicos com real tração de crescimento.",
                svg: (
                  <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M 2 18 Q 6 12, 10 15 T 18 9 T 22 13" />
                  </svg>
                )
              },
              {
                num: "03",
                label: "COMPETITIVE",
                title: "Análise Competitiva",
                desc: "Esclarecimento de quem dita as primeiras menções do Google e AI search orgânico no nicho, as razões por trás e planos táticos de enfrentamento.",
                svg: (
                  <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <path d="M 12 2 V 11" strokeDasharray="2 1" />
                  </svg>
                )
              },
              {
                num: "04",
                label: "AI_SEARCH",
                title: "Visibilidade em IA (GEO)",
                desc: "Relatórios de posturas de marca nos modelos generativos coletando referências citadas, relevância de menção e lacunas de confiança.",
                svg: (
                  <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M 12 22 C 12 22, 20 18, 20 12 L 20 5 L 12 2 L 4 5 L 4 12 C 4 18, 12 22, 12 22 Z" />
                  </svg>
                )
              },
              {
                num: "05",
                label: "ROADMAP",
                title: "Roadmaps Práticos",
                desc: "Linhas cronológicas que resolvem o gargalo de 'o que' escrever ou alterar, gerando cronogramas limpos de acompanhamento.",
                svg: (
                  <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                )
              }
            ].map((block) => (
              <div
                id={`prova-block-${block.num}`}
                key={block.num}
                className="group relative overflow-hidden min-h-[320px] p-6 rounded-[24px] flex flex-col justify-between items-start text-left transition-all duration-[400ms] cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-[6px]"
                style={{
                  background: 'linear-gradient(145deg, rgba(32, 31, 29, 0.96), rgba(15, 15, 14, 0.98))',
                  border: '1px solid rgba(178, 132, 83, 0.32)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* Glow dourado de canto interno ao passar o mouse */}
                <div 
                  className="absolute top-0 right-0 w-[140px] h-[140px] bg-[#b28453]/4 blur-[50px] rounded-full pointer-events-none opacity-40 group-hover:opacity-100 group-hover:bg-[#b28453]/8 transition-all duration-[400ms]" 
                />
                
                {/* Micro textura sutil */}
                <div 
                  className="absolute inset-0 bg-repeat bg-[radial-gradient(circle_at_center,rgba(178,132,83,0.02)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" 
                />

                {/* Medalhão Numérico Circular Premium */}
                <div 
                  className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-[400ms]"
                  style={{
                    background: 'radial-gradient(circle at 35% 30%, rgba(224, 211, 195, 0.18), rgba(178, 132, 83, 0.10), rgba(17, 16, 15, 0.95))',
                    border: '1px solid rgba(178, 132, 83, 0.55)',
                    boxShadow: '0 0 20px rgba(178, 132, 83, 0.15), inset 0 0 10px rgba(224, 211, 195, 0.05)',
                  }}
                >
                  <span className="font-sans select-none text-[13px] font-bold text-[#e0d3c3] tracking-wide transition-colors duration-300 group-hover:text-white">
                    {block.num}
                  </span>
                </div>

                {/* Conteúdo do Card */}
                <div className="relative z-10 w-full mt-5">
                  <span className="text-[10px] font-mono tracking-widest text-[#b28453] font-bold block mb-2 opacity-80">
                    BLOCO_{block.num}
                  </span>
                  
                  <h3 className="font-display text-[18px] md:text-[20px] font-bold text-[#f8f8f8] leading-[1.2] tracking-[-0.01em]">
                    {block.title}
                  </h3>

                  {/* Linha dourada curta */}
                  <div className="w-[35px] h-[2px] bg-[#b28453] opacity-[0.85] my-[14px]" />

                  <p className="text-[#f8f8f8]/72 text-[13px] font-normal leading-[1.6]">
                    {block.desc}
                  </p>
                </div>

                {/* Ambient background SVGs */}
                {block.svg}
              </div>
            ))}
          </div>

          {/* Bloco de destaque discreto */}
          <div className="max-w-3xl mx-auto mt-12 mb-12 p-6 sm:p-8 rounded-2xl bg-[#181716]/80 border border-[#b28453]/30 text-center select-none shadow-md">
            <p className="text-[#e0d3c3] text-sm md:text-base leading-relaxed font-sans font-medium">
              Autoridade não é um elemento isolado. É o resultado da consistência entre o que a marca diz, o que o site estrutura, o que o mercado valida e o que buscadores e IAs conseguem interpretar.
            </p>
          </div>

          <div className="text-center font-display italic text-base text-[#e0d3c3] select-none italic max-w-2xl mx-auto leading-relaxed">
            “O cliente final nunca de fato valoriza aquilo que não consegue compreender com nitidez. Nossa principal função no bastidor é converter técnicas de busca em clareza comercial.”
          </div>

        </div>
      </section>

      {/* 14. DIAGNÓSTICO PARA AGÊNCIAS (Form / Simulators Module) */}
      <DiagnosticSection />

      {/* 15. FAQ ACCORDION SECTION */}
      <FAQSection />

      {/* 16. CTA FINAL */}
      <section
        id="cta-final"
        className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32 relative overflow-hidden text-center"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] relative z-10 flex flex-col items-center">
          
          <span className="text-[#b28453] text-[13px] tracking-[0.15em] font-mono font-bold uppercase mb-4">
            LIDERE A TRANSIÇÃO DA BUSCA
          </span>
          
          <h2 className="font-display text-[38px] sm:text-[46px] md:text-[58px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl mb-8">
            Sua agência cuida do relacionamento comercial. A AUDITSEO cuida da inteligência orgânica.
          </h2>

          <p className="text-[#b28453] font-display text-lg sm:text-xl font-normal max-w-2xl mb-4 leading-relaxed">
            Vamos construir uma parceria sólida para sua agência entregar SEO tradicional, GEO e Search Intelligence com profunda precisão e valor.
          </p>

          <p className="text-[#c9c9c9] text-sm md:text-base max-w-2xl mb-12 opacity-85 leading-relaxed">
            Você não precisa montar, testar ou manter uma estrutura operacional complexa de profissionais caros internos para dispor aos clientes uma excelente entrega orgânica. Necessita simplesmente de um método confiável, visão de mercado, diagnósticos de IA e um parceiro consolidado de bastidores.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              id="cta-final-partner"
              onClick={() => handleScrollToSection("diagnostico")}
              className="bg-[#b28453] text-white px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-300 hover:bg-[#e0d3c3] hover:text-[#11100f] cursor-pointer"
            >
              Avaliar parceria comercial com a AUDITSEO
            </button>
            <button
              id="cta-final-diag"
              onClick={() => handleScrollToSection("diagnostico")}
              className="border border-[#b28453] text-white px-8 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-250 hover:bg-[#b28453]"
            >
              Solicitar diagnóstico para minha agência
            </button>
          </div>

          <span className="text-[#b28453] font-mono text-xs tracking-wider uppercase mt-12 block select-none">
            A próxima fase da busca orgânica já começou. Sua agência pode liderar essa liderança para os clientes parceiros certos.
          </span>

        </div>
      </section>

      {/* 17. FOOTER */}
      <SiteFooter onNavigate={handleScrollToSection} />

    </div>
  );
}
