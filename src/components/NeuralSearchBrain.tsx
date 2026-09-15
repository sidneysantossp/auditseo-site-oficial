import React from "react";
import CinematicUniverseHero from "./CinematicUniverseHero";

export default function NeuralSearchBrain() {
  React.useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;

    const heading = hero.querySelector("h1") as HTMLElement | null;
    if (heading && !heading.dataset.goldTail) {
      heading.innerHTML = 'Antes de investir em mais SEO, conteúdo ou IA, descubra onde sua presença <span style="color:#d7a15f">realmente quebra.</span>';
      heading.dataset.goldTail = "true";
    }

    Array.from(hero.querySelectorAll("div")).forEach((element) => {
      if (element.textContent?.replace(/\s/g, "").includes("CrawlIndexRetrieveUnderstandTrustCiteConvert")) {
        (element as HTMLElement).style.display = "none";
      }
    });
  }, []);

  return (
    <>
      <CinematicUniverseHero />
      <style>{`
        #inicio { background:#020201 !important; }
        #inicio > div.relative.z-10 { max-width:1520px !important; }
        #inicio h1 {
          max-width:690px !important;
          font-size:clamp(46px,4.4vw,72px) !important;
          line-height:.98 !important;
          text-wrap:balance;
        }
        #inicio p { max-width:680px !important; }
        #inicio .lg\\:col-span-7 { position:relative; z-index:12; }
        @media (min-width:1024px){
          #inicio {
            min-height:900px !important;
            height:min(100svh,980px) !important;
            padding-top:108px !important;
            padding-bottom:106px !important;
          }
          #inicio .lg\\:col-span-7 { grid-column:span 6 / span 6 !important; }
        }
      `}</style>
    </>
  );
}
