import StellarSignalHero from "./StellarSignalHero";

interface HeroProps {
  onCtaClick: (targetId: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return <StellarSignalHero onCtaClick={onCtaClick} />;
}
