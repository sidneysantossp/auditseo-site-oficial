import { useEffect, useMemo, useRef } from "react";
import { ArrowRight } from "lucide-react";

interface StellarSignalHeroProps {
  onCtaClick: (targetId: string) => void;
}

type Particle = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  phase: number;
  speed: number;
  warmth: number;
};

function seeded(index: number, salt = 0) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function makeBackgroundStars(count = 720): Particle[] {
  return Array.from({ length: count }, (_, index) => ({
    x: seeded(index, 1),
    y: seeded(index, 2),
    size: 0.35 + seeded(index, 3) * 1.45,
    alpha: 0.16 + seeded(index, 4) * 0.7,
    phase: seeded(index, 5) * Math.PI * 2,
    speed: 0.24 + seeded(index, 6) * 0.7,
    warmth: seeded(index, 7),
  }));
}

function buildSpiralParticles(count = 2400): Particle[] {
  return Array.from({ length: count }, (_, index) => {
    const t = index / Math.max(1, count - 1);
    const arm = index % 3;
    const local = (index + arm * 0.37) / count;
    const theta = -0.68 * Math.PI + local * Math.PI * 4.28 + arm * 0.038;
    const radius = 0.055 + Math.pow(local, 0.72) * 0.435;
    const jitter = (seeded(index, 20) - 0.5) * (0.014 + radius * 0.13);
    const squash = 0.88;
    const x = 0.5 + Math.cos(theta) * (radius + jitter);
    const y = 0.51 + Math.sin(theta) * (radius + jitter) * squash;
    return {
      x,
      y,
      size: 0.55 + seeded(index, 21) * 1.85 + (1 - t) * 0.25,
      alpha: 0.28 + seeded(index, 22) * 0.72,
      phase: seeded(index, 23) * Math.PI * 2,
      speed: 0.35 + seeded(index, 24) * 0.9,
      warmth: seeded(index, 25),
    };
  });
}

function buildTailParticles(count = 620): Particle[] {
  return Array.from({ length: count }, (_, index) => {
    const t = index / Math.max(1, count - 1);
    const curve = Math.sin(t * Math.PI) * 0.055;
    return {
      x: 0.355 + t * 0.31,
      y: 0.19 - curve + (seeded(index, 31) - 0.5) * 0.035,
      size: 0.45 + seeded(index, 32) * 1.6,
      alpha: 0.25 + seeded(index, 33) * 0.72,
      phase: seeded(index, 34) * Math.PI * 2,
      speed: 0.3 + seeded(index, 35) * 0.75,
      warmth: seeded(index, 36),
    };
  });
}

function drawGlow(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, strength = 1) {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
  gradient.addColorStop(0, `rgba(255,248,233,${0.98 * strength})`);
  gradient.addColorStop(0.11, `rgba(245,213,166,${0.88 * strength})`);
  gradient.addColorStop(0.38, `rgba(217,160,87,${0.36 * strength})`);
  gradient.addColorStop(1, "rgba(178,132,83,0)");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawFlare(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, alpha: number) {
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  ctx.globalAlpha = alpha;
  drawGlow(ctx, x, y, size * 2.2, 0.62);
  ctx.strokeStyle = "rgba(255,245,224,.88)";
  ctx.lineWidth = 0.75;
  ctx.beginPath();
  ctx.moveTo(x - size * 1.8, y);
  ctx.lineTo(x + size * 1.8, y);
  ctx.moveTo(x, y - size * 1.8);
  ctx.lineTo(x, y + size * 1.8);
  ctx.stroke();
  ctx.fillStyle = "#fff9ee";
  ctx.beginPath();
  ctx.arc(x, y, Math.max(1.3, size * 0.12), 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export default function StellarSignalHero({ onCtaClick }: StellarSignalHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const backgroundStars = useMemo(() => makeBackgroundStars(), []);
  const spiralParticles = useMemo(() => buildSpiralParticles(), []);
  const tailParticles = useMemo(() => buildTailParticles(), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.7);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX / Math.max(1, window.innerWidth) - 0.5;
      targetY = event.clientY / Math.max(1, window.innerHeight) - 0.5;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    resize();

    const start = performance.now();

    const frame = (now: number) => {
      const time = reduceMotion ? 0 : (now - start) / 1000;
      pointerX += (targetX - pointerX) * 0.035;
      pointerY += (targetY - pointerY) * 0.035;
      context.clearRect(0, 0, width, height);

      const background = context.createRadialGradient(width * 0.5, height * 0.48, 0, width * 0.5, height * 0.48, Math.max(width, height) * 0.76);
      background.addColorStop(0, "rgba(24,17,10,.20)");
      background.addColorStop(0.45, "rgba(8,7,6,.72)");
      background.addColorStop(1, "rgba(2,3,3,1)");
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);

      context.save();
      context.globalCompositeOperation = "lighter";
      for (let i = 0; i < backgroundStars.length; i += 1) {
        const star = backgroundStars[i];
        const flicker = 0.48 + 0.52 * Math.sin(time * star.speed + star.phase);
        const x = star.x * width + pointerX * (i % 3) * 4;
        const y = star.y * height + pointerY * (i % 2) * 3;
        context.globalAlpha = star.alpha * (0.38 + flicker * 0.62);
        context.fillStyle = star.warmth > 0.78 ? "#f4d3a5" : star.warmth > 0.44 ? "#d9a057" : "#fff8ec";
        context.beginPath();
        context.arc(x, y, star.size * (0.72 + flicker * 0.45), 0, Math.PI * 2);
        context.fill();
      }
      context.restore();

      const cx = width * 0.5 + pointerX * 15;
      const cy = height * 0.5 + pointerY * 10;
      const sceneScale = Math.min(width, height) * 0.86;
      const breathing = 1 + (reduceMotion ? 0 : Math.sin(time * 0.52) * 0.012);
      const rotation = reduceMotion ? 0 : Math.sin(time * 0.17) * 0.018;
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);

      const paintParticles = (particles: Particle[], depth = 1) => {
        context.save();
        context.globalCompositeOperation = "lighter";
        particles.forEach((particle, index) => {
          const lx = (particle.x - 0.5) * sceneScale * breathing;
          const ly = (particle.y - 0.5) * sceneScale * breathing;
          const rx = lx * cos - ly * sin;
          const ry = lx * sin + ly * cos;
          const flow = reduceMotion ? 0 : Math.sin(time * particle.speed + particle.phase) * (1.6 + depth * 0.8);
          const x = cx + rx + Math.cos(particle.phase + time * 0.14) * flow;
          const y = cy + ry + Math.sin(particle.phase + time * 0.12) * flow;
          const pulse = 0.55 + 0.45 * Math.sin(time * particle.speed + particle.phase);
          const alpha = particle.alpha * (0.5 + pulse * 0.5);
          const size = particle.size * (0.72 + pulse * 0.52);
          context.globalAlpha = alpha;
          context.fillStyle = particle.warmth > 0.83 ? "#fff8ea" : particle.warmth > 0.52 ? "#f0c98f" : particle.warmth > 0.22 ? "#d9a057" : "#b28453";
          context.beginPath();
          context.arc(x, y, size, 0, Math.PI * 2);
          context.fill();
          if (index % 97 === 0) drawGlow(context, x, y, size * 8, 0.16 + pulse * 0.08);
        });
        context.restore();
      };

      paintParticles(spiralParticles, 1);
      paintParticles(tailParticles, 0.7);

      const coreX = cx - sceneScale * 0.017;
      const coreY = cy + sceneScale * 0.078;
      const corePulse = 0.5 + 0.5 * Math.sin(time * 1.35);
      drawGlow(context, coreX, coreY, sceneScale * (0.065 + corePulse * 0.011), 0.72);
      drawGlow(context, coreX, coreY, sceneScale * 0.024, 1);

      const flares = [
        [0.407, 0.188, 8],
        [0.335, 0.493, 9],
        [0.608, 0.462, 7],
        [0.528, 0.414, 6],
      ] as const;
      flares.forEach(([nx, ny, size], index) => {
        const pulse = 0.68 + (reduceMotion ? 0.12 : 0.32 * Math.sin(time * (0.72 + index * 0.08) + index));
        drawFlare(context, width * nx + pointerX * 10, height * ny + pointerY * 7, size, pulse);
      });

      const vignette = context.createRadialGradient(width * 0.5, height * 0.5, Math.min(width, height) * 0.18, width * 0.5, height * 0.5, Math.max(width, height) * 0.7);
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(0.72, "rgba(0,0,0,.18)");
      vignette.addColorStop(1, "rgba(0,0,0,.62)");
      context.fillStyle = vignette;
      context.fillRect(0, 0, width, height);

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [backgroundStars, spiralParticles, tailParticles]);

  return (
    <section id="inicio" className="relative isolate min-h-[820px] overflow-hidden bg-[#020303] text-[#f7f4ee] md:min-h-[900px]">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,3,3,.78)_0%,rgba(2,3,3,.12)_28%,rgba(2,3,3,.04)_66%,rgba(2,3,3,.82)_100%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[820px] w-full max-w-[1536px] items-center px-6 pb-16 pt-[122px] md:min-h-[900px] md:px-10 xl:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.3fr_0.9fr] lg:gap-4">
          <div className="max-w-[430px] text-left lg:self-center">
            <div className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c99b63]">AUDITSEO · Search Intelligence</div>
            <h1 className="font-display text-[clamp(44px,4vw,68px)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#faf8f4]">
              Search Intelligence para empresas
            </h1>
          </div>

          <div className="min-h-[360px] lg:min-h-[590px]" aria-hidden="true" />

          <div className="max-w-[420px] lg:justify-self-end lg:self-center">
            <p className="font-display text-[clamp(25px,2.15vw,38px)] font-normal leading-[1.22] tracking-[-0.025em] text-[#f3efe9]">
              Descubra onde sua presença perde capacidade de ser <span className="text-[#d9a057]">encontrada, compreendida, citada e escolhida.</span>
            </p>
            <p className="mt-5 max-w-[390px] text-[15px] leading-7 text-[#bdb5aa]">
              Diagnóstico baseado em evidências para transformar sinais dispersos de SEO, conteúdo, autoridade e IA em uma direção coordenada.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button onClick={() => onCtaClick("diagnostico")} className="group inline-flex items-center gap-2 rounded-full bg-[#b28453] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#c8955d]">
                Diagnosticar minha empresa <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => onCtaClick("signal")} className="inline-flex items-center rounded-full border border-[#b28453]/45 bg-black/15 px-6 py-3.5 text-sm font-semibold text-[#f4eee7] backdrop-blur-sm transition hover:border-[#d9a057]/75 hover:bg-[#b28453]/10">
                Ver método S.I.G.N.A.L.
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#080706]" />
    </section>
  );
}
