import { useEffect, useState } from "react";
import p00 from "./cinematicHeroData/part00";
import p01 from "./cinematicHeroData/part01";
import p02 from "./cinematicHeroData/part02";
import p03 from "./cinematicHeroData/part03";
import p0405 from "./cinematicHeroData/part04_05";
import p0607 from "./cinematicHeroData/part06_07";
import p0809 from "./cinematicHeroData/part08_09";
import p10 from "./cinematicHeroData/part10";
import p11 from "./cinematicHeroData/part11";
import p12 from "./cinematicHeroData/part12";
import p13 from "./cinematicHeroData/part13";
import p14 from "./cinematicHeroData/part14";
import p15 from "./cinematicHeroData/part15";
import p16 from "./cinematicHeroData/part16";
import p17 from "./cinematicHeroData/part17";
import p18 from "./cinematicHeroData/part18";

const heroBase64 = [p00,p01,p02,p03,p0405,p0607,p0809,p10,p11,p12,p13,p14,p15,p16,p17,p18].join("").replace(/\s+/g, "");

export default function CinematicHero() {
  const [src, setSrc] = useState<string>("");
  useEffect(() => setSrc(`data:image/avif;base64,${heroBase64}`), []);

  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-[#070605]" aria-label="AUDITSEO Search Intelligence">
      <div className="relative w-full" style={{ aspectRatio: "1672 / 941" }}>
        {src ? <img src={src} alt="Hero cinematográfico AUDITSEO com universo 3D e cérebro neural dourado" className="absolute inset-0 h-full w-full object-fill" decoding="async" fetchPriority="high" /> : null}

        <h1 className="sr-only">Antes de investir em mais SEO, conteúdo ou IA, descubra onde sua presença realmente quebra.</h1>
        <p className="sr-only">A AUDITSEO investiga em qual etapa sua empresa perde capacidade de ser descoberta, compreendida, validada, citada ou escolhida. Depois transforma a evidência em um roadmap coordenado, com prioridades, responsáveis e critérios de validação.</p>

        <a href="/" aria-label="AUDITSEO — início" className="absolute left-[4.2%] top-[2.5%] h-[6.5%] w-[16.5%] cursor-pointer" />
        <a href="/solucoes" aria-label="Soluções" className="absolute left-[55.2%] top-[2.6%] h-[5.8%] w-[5.8%] cursor-pointer" />
        <a href="/blog/framework-crawl-index-retrieve-understand-trust-cite" aria-label="Framework" className="absolute left-[61.4%] top-[2.6%] h-[5.8%] w-[7.3%] cursor-pointer" />
        <a href="/blog" aria-label="Conteúdos" className="absolute left-[69.0%] top-[2.6%] h-[5.8%] w-[6.8%] cursor-pointer" />
        <a href="/sobre" aria-label="Sobre" className="absolute left-[76.0%] top-[2.6%] h-[5.8%] w-[4.6%] cursor-pointer" />
        <a href="/diagnostico" aria-label="Falar com um especialista" className="absolute left-[80.6%] top-[2.0%] h-[6.7%] w-[14.8%] cursor-pointer" />
        <a href="/diagnostico" aria-label="Diagnosticar minha empresa" className="absolute left-[4.6%] top-[72.0%] h-[7.6%] w-[18.0%] cursor-pointer" />
        <a href="/blog/framework-crawl-index-retrieve-understand-trust-cite" aria-label="Ver o framework de diagnóstico" className="absolute left-[23.2%] top-[72.0%] h-[7.6%] w-[19.2%] cursor-pointer" />
      </div>
    </section>
  );
}
