import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight } from "lucide-react";

type Star = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  phase: number;
  speed: number;
  tone: number;
};

function seeded(index: number, salt = 0) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function backgroundStars(count = 760): Star[] {
  return Array.from({ length: count }, (_, index) => ({
    x: seeded(index, 1),
    y: seeded(index, 2),
    size: 0.35 + seeded(index, 3) * 1.4,
    alpha: 0.14 + seeded(index, 4) * 0.72,
    phase: seeded(index, 5) * Math.PI * 2,
    speed: 0.22 + seeded(index, 6) * 0.72,
    tone: seeded(index, 7),
  }));
}

function spiralStars(count = 3000): Star[] {
  return Array.from({ length: count }, (_, index) => {
    const t = index / Math.max(1, count - 1);
    const arm = index % 4;
    const theta = -0.55 * Math.PI + t * Math.PI * 4.15 + arm * 0.03;
    const radius = 0.032 + Math.pow(t, 0.75) * 0.445;
    const scatter = (seeded(index, 20) - 0.5) * (0.012 + radius * 0.13);
    return {
      x: 0.5 + Math.cos(theta) * (radius + scatter),
      y: 0.515 + Math.sin(theta) * (radius + scatter) * 0.87,
      size: 0.5 + seeded(index, 21) * 1.85,
      alpha: 0.28 + seeded(index, 22) * 0.72,
      phase: seeded(index, 23) * Math.PI * 2,
      speed: 0.3 + seeded(index, 24) * 0.95,
      tone: seeded(index, 25),
    };
  });
}

function tailStars(count = 760): Star[] {
  return Array.from({ length: count }, (_, index) => {
    const t = index / Math.max(1, count - 1);
    const arc = Math.sin(t * Math.PI) * 0.055;
    return {
      x: 0.345 + t * 0.32,
      y: 0.192 - arc + (seeded(index, 30) - 0.5) * 0.035,
      size: 0.45 + seeded(index, 31) * 1.6,
      alpha: 0.22 + seeded(index, 32) * 0.76,
      phase: seeded(index, 33) * Math.PI * 2,
      speed: 0.28 + seeded(index, 34) * 0.8,
      tone: seeded(index, 35),
    };
  });
}

function drawGlow(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, strength = 1) {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
  gradient.addColorStop(0, `rgba(255,250,241,${0.98 * strength})`);
  gradient.addColorStop(0.1, `rgba(247,221,181,${0.86 * strength})`);
  gradient.addColorStop(0.34, `rgba(217,160,87,${0.34 * strength})`);
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
  drawGlow(ctx, x, y, size * 2.5, 0.5);
  ctx.strokeStyle = "rgba(255,247,232,.95)";
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.moveTo(x - size * 1.8, y);
  ctx.lineTo(x + size * 1.8, y);
  ctx.moveTo(x, y - size * 1.8);
  ctx.lineTo(x, y + size * 1.8);
  ctx.stroke();
  ctx.fillStyle = "#fffaf0";
  ctx.beginPath();
  ctx.arc(x, y, 1.8, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function StellarScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const background = useMemo(() => backgroundStars(), []);
  const spiral = useMemo(() => spiralStars(), []);
  const tail = useMemo(() => tailStars(), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.7);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const onPointer = (event: PointerEvent) => {
      tx = event.clientX / Math.max(1, window.innerWidth) - 0.5;
      ty = event.clientY / Math.max(1, window.innerHeight) - 0.5;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("pointermove", onPointer, { passive: true });
    resize();

    const start = performance.now();
    const paintParticleSet = (particles: Star[], cx: number, cy: number, scale: number, time: number, rotation: number, drift: number) => {
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      particles.forEach((particle, index) => {
        const lx = (particle.x - 0.5) * scale;
        const ly = (particle.y - 0.5) * scale;
        const rx = lx * cos - ly * sin;
        const ry = lx * sin + ly * cos;
        const flow = reduceMotion ? 0 : Math.sin(time * particle.speed + particle.phase) * drift;
        const x = cx + rx + Math.cos(particle.phase + time * 0.12) * flow;
        const y = cy + ry + Math.sin(particle.phase + time * 0.1) * flow;
        const pulse = 0.54 + 0.46 * Math.sin(time * particle.speed + particle.phase);
        ctx.globalAlpha = particle.alpha * (0.48 + pulse * 0.52);
        ctx.fillStyle = particle.tone > 0.82 ? "#fff8ea" : particle.tone > 0.52 ? "#f0cf9d" : particle.tone > 0.23 ? "#d9a057" : "#b28453";
        ctx.beginPath();
        ctx.arc(x, y, particle.size * (0.72 + pulse * 0.5), 0, Math.PI * 2);
        ctx.fill();
        if (index % 113 === 0) drawGlow(ctx, x, y, particle.size * 8, 0.12 + pulse * 0.08);
      });
      ctx.restore();
    };

    const frame = (now: number) => {
      const time = reduceMotion ? 0 : (now - start) / 1000;
      px += (tx - px) * 0.032;
      py += (ty - py) * 0.032;
      ctx.clearRect(0, 0, width, height);

      const wash = ctx.createRadialGradient(width * 0.5, height * 0.48, 0, width * 0.5, height * 0.48, Math.max(width, height) * 0.78);
      wash.addColorStop(0, "rgba(32,21,11,.18)");
      wash.addColorStop(0.48, "rgba(7,7,6,.76)");
      wash.addColorStop(1, "rgba(1,2,2,1)");
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      background.forEach((star, index) => {
        const pulse = 0.5 + 0.5 * Math.sin(time * star.speed + star.phase);
        const x = star.x * width + px * (index % 3) * 3.5;
        const y = star.y * height + py * (index % 2) * 2.6;
        ctx.globalAlpha = star.alpha * (0.42 + pulse * 0.58);
        ctx.fillStyle = star.tone > 0.75 ? "#ecd0a7" : "#fdf8ef";
        ctx.beginPath();
        ctx.arc(x, y, star.size * (0.72 + pulse * 0.42), 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      const cx = width * 0.5 + px * 14;
      const cy = height * 0.51 + py * 9;
      const scale = Math.min(width, height) * 0.91 * (1 + (reduceMotion ? 0 : Math.sin(time * 0.48) * 0.01));
      const rotation = reduceMotion ? 0 : Math.sin(time * 0.16) * 0.018;
      paintParticleSet(spiral, cx, cy, scale, time, rotation, 2.2);
      paintParticleSet(tail, cx, cy, scale, time, rotation, 1.6);

      const coreX = cx - scale * 0.016;
      const coreY = cy + scale * 0.079;
      const corePulse = 0.5 + 0.5 * Math.sin(time * 1.4);
      drawGlow(ctx, coreX, coreY, scale * (0.062 + corePulse * 0.011), 0.74);
      drawGlow(ctx, coreX, coreY, scale * 0.021, 1);

      const flares = [
        [0.407, 0.186, 9],
        [0.335, 0.492, 9],
        [0.607, 0.462, 8],
        [0.526, 0.414, 6],
      ] as const;
      flares.forEach(([nx, ny, size], index) => {
        const pulse = 0.7 + (reduceMotion ? 0.12 : Math.sin(time * (0.68 + index * 0.07) + index) * 0.3);
        drawFlare(ctx, width * nx + px * 9, height * ny + py * 6, size, pulse);
      });

      const vignette = ctx.createRadialGradient(width * 0.5, height * 0.5, Math.min(width, height) * 0.15, width * 0.5, height * 0.5, Math.max(width, height) * 0.73);
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(0.72, "rgba(0,0,0,.14)");
      vignette.addColorStop(1, "rgba(0,0,0,.62)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointer);
    };
  }, [background, spiral, tail]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

function HeroOverlay() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 82, behavior: "smooth" });
  };

  return (
    <div className="stellar-reference-portal absolute inset-0 z-[8] overflow-hidden bg-[#020303] text-[#f8f5ef]">
      <StellarScene />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,3,3,.72)_0%,rgba(2,3,3,.12)_27%,rgba(2,3,3,.06)_72%,rgba(2,3,3,.70)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent" />

      <div className="relative z-10 mx-auto grid h-full w-full max-w-[1536px] grid-cols-1 items-center px-6 pb-16 pt-[122px] md:px-10 lg:grid-cols-[0.9fr_1.3fr_0.9fr] lg:gap-4 xl:px-16">
        <div className="max-w-[430px] text-left lg:self-center">
          <div className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c99b63]">AUDITSEO · SEARCH INTELLIGENCE</div>
          <h1 className="font-display text-[clamp(45px,4vw,68px)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#fbf8f3]">
            Search Intelligence para empresas
          </h1>
        </div>

        <div className="min-h-[340px] lg:min-h-[620px]" aria-hidden="true" />

        <div className="max-w-[430px] lg:justify-self-end lg:self-center">
          <p className="font-display text-[clamp(24px,2.08vw,37px)] font-normal leading-[1.22] tracking-[-0.025em] text-[#f3efe9]">
            Descubra onde sua presença perde capacidade de ser <span className="text-[#d9a057]">encontrada, compreendida, citada e escolhida.</span>
          </p>
          <p className="mt-5 max-w-[405px] text-[15px] leading-7 text-[#bdb5aa]">
            Diagnóstico baseado em evidências para transformar sinais dispersos de SEO, conteúdo, autoridade e IA em uma direção coordenada.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={() => scrollTo("form-contato")} className="group inline-flex items-center gap-2 rounded-full bg-[#b28453] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#c8955d]">
              Solicitar avaliação <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={() => scrollTo("metodologia")} className="inline-flex items-center rounded-full border border-[#b28453]/45 bg-black/15 px-6 py-3.5 text-sm font-semibold text-[#f4eee7] backdrop-blur-sm transition hover:border-[#d9a057]/75 hover:bg-[#b28453]/10">
              Método S.I.G.N.A.L.
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#080706]" />
    </div>
  );
}

export default function NeuralSearchBrain() {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [owner, setOwner] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const marker = "stellarReferenceOwner";
    if (!hero.dataset[marker]) {
      hero.dataset[marker] = "1";
      hero.classList.add("stellar-reference-mode");
      setTarget(hero);
      setOwner(true);
    }
    return () => {
      if (hero.dataset[marker] === "1") {
        delete hero.dataset[marker];
        hero.classList.remove("stellar-reference-mode");
      }
    };
  }, []);

  return (
    <>
      {owner && target ? createPortal(<HeroOverlay />, target) : null}
      <style>{`
        #inicio.stellar-reference-mode {
          position: relative !important;
          min-height: 900px !important;
          height: min(100svh, 941px) !important;
          padding: 0 !important;
          display: block !important;
          background: #020303 !important;
        }
        #inicio.stellar-reference-mode > div:not(.stellar-reference-portal) {
          display: none !important;
        }
        @media (max-width: 1023px) {
          #inicio.stellar-reference-mode {
            min-height: 940px !important;
            height: auto !important;
          }
          #inicio .stellar-reference-portal > .relative.z-10 {
            min-height: 940px;
            padding-top: 112px;
          }
        }
      `}</style>
    </>
  );
}
