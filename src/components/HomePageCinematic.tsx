import CinematicHero from "./CinematicHero";
import HomePageV2 from "./HomePageV2";

export default function HomePageCinematic() {
  return (
    <div className="cinematic-home bg-[#11100f]">
      <CinematicHero />
      <div className="legacy-home">
        <HomePageV2 />
      </div>
      <style>{`
        .cinematic-home .legacy-home #navbar,
        .cinematic-home .legacy-home #mobile-drawer,
        .cinematic-home .legacy-home #inicio {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
