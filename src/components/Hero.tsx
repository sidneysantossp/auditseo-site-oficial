import React from "react";
import NeuralSearchBrain from "./NeuralSearchBrain";

interface HeroProps {
  onCtaClick: (targetId: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {

  return (
    <section
      id="inicio"
      className="relative min-h-[820px] lg:min-h-[880px] bg-[#11100f] text-[#f8f8f8] flex items-center pt-[100px] md:pt-[110px] pb-16 md:pb-24 overflow-hidden"
    >
      {/* Absolute background animation only on mobile */}
      <div className="absolute inset-x-0 bottom-0 top-[80px] lg:hidden pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center">
        <div className="w-full max-w-[550px] aspect-[760/520] transform scale-[1.35] opacity-[0.35] translate-y-[-80px]">
          <NeuralSearchBrain />
        </div>
      </div>

      <div className="container mx-auto px-[24px] md:px-[48px] max-w-[1320px] z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: Strategic Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* EYEBROW */}
            <span className="text-[#a69580] text-[11px] font-mono font-semibold tracking-[0.16em] uppercase mb-4 inline-block select-none opacity-90">
              SEARCH INTELLIGENCE PARTNER
            </span>

            {/* HEADLINE PRINCIPAL */}
            <h1 
              className="font-display font-bold text-[#f8f8f8] mb-8"
              style={{
                fontSize: "clamp(48px, 4.8vw, 72px)",
                lineHeight: "1.04",
                letterSpacing: "-0.045em",
                maxWidth: "680px"
              }}
            >
              Search Intelligence Partner para Agências
            </h1>

            <p 
              className="text-[#e0d3c3] text-lg md:text-xl font-semibold py-0 mb-8"
              style={{
                textAlign: "left",
                letterSpacing: "-0.01em",
                wordSpacing: "normal",
                lineHeight: "1.55",
                maxWidth: "690px"
              }}
            >
              A infraestrutura White Label perfeita para sua agência vender, reter e escalar serviços de SEO, GEO e IA de forma enxuta e previsível.
            </p>

            {/* ACTION BUTTONS (Matching design style and border radius) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-1">
              <button
                id="hero-cta-partner-new"
                onClick={() => onCtaClick("diagnostico")}
                className="bg-[#b28453] text-[#ffffff] px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-300 hover:bg-[#e0d3c3] hover:text-[#11100f] cursor-pointer"
              >
                Diagnosticar minha carteira gratuitamente →
              </button>
              <button
                id="hero-cta-method-new"
                onClick={() => onCtaClick("signal")}
                className="border border-[#b28453]/45 text-[#f8f8f8] px-8 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-250 hover:bg-[#b28453]/10"
              >
                Conhecer a metodologia S.I.G.N.A.L
              </button>
            </div>

            {/* LOWER BADGES BAR */}
            <div 
              className="flex items-center justify-center lg:justify-start font-mono mt-8 select-none text-[#8c8275] gap-x-2 w-full text-center"
              style={{
                opacity: 0.62,
                fontSize: "11px",
                letterSpacing: "0.02em",
                wordSpacing: "normal"
              }}
            >
              <span>SEO</span>
              <span className="text-[#b28453]/30 font-bold">·</span>
              <span>GEO</span>
              <span className="text-[#b28453]/30 font-bold">·</span>
              <span>IA</span>
              <span className="text-[#b28453]/30 font-bold">·</span>
              <span>Autoridade de entidade</span>
              <span className="text-[#b28453]/30 font-bold">·</span>
              <span>Search Intelligence</span>
            </div>

          </div>

          {/* RIGHT COLUMN: Neural Intelligence Brain Visual Component - Hidden on mobile, shown on lg screens */}
          <div className="hidden lg:flex lg:col-span-5 w-full relative items-center justify-center scale-[1.04] lg:scale-[1.06] lg:-translate-x-[16px] -translate-x-[8px] overflow-visible">
            <NeuralSearchBrain />
          </div>

        </div>
      </div>
    </section>
  );
}
