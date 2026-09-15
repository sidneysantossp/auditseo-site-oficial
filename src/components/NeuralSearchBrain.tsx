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
  }, []);

  return (
    <>
      <CinematicUniverseHero />
      <style>{`
        #inicio { background:#010101 !important; }
        #inicio > div.relative.z-10 { max-width:1520px !important; }
        #inicio h1 {
          max-width:690px !important;
          font-size:clamp(46px,3.7vw,62px) !important;
          line-height:.96 !important;
          letter-spacing:-.045em !important;
          text-wrap:balance;
        }
        #inicio p { max-width:680px !important; }
        #inicio .lg\\:col-span-7 { position:relative; z-index:12; }
        #inicio > .relative.z-10 .mt-9.flex.flex-wrap { display:none !important; }
        @media (min-width:1024px){
          #navbar > div {
            max-width:1672px !important;
            padding-left:80px !important;
            padding-right:80px !important;
          }
          #navbar img { height:58px !important; }
          #inicio {
            min-height:900px !important;
            height:min(100svh,941px) !important;
            padding-top:118px !important;
            padding-bottom:90px !important;
          }
          #inicio .lg\\:col-span-7 { grid-column:span 6 / span 6 !important; }
        }
      `}</style>
    </>
  );
}
