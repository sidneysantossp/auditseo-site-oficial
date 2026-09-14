import { useEffect, useRef } from "react";
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

const heroBase64 = [p00, p01, p02, p03, p0405, p0607, p0809, p10, p11, p12, p13, p14, p15, p16, p17, p18]
  .join("")
  .replace(/\s+/g, "");

const SOURCE_WIDTH = 1672;
const SOURCE_HEIGHT = 941;
const SOURCE_CROP_X = 620;
const SOURCE_CROP_WIDTH = SOURCE_WIDTH - SOURCE_CROP_X;

const fieldStars = Array.from({ length: 86 }, (_, index) => ({
  x: ((index * 67 + 17) % 1000) / 1000,
  y: ((index * 43 + 29) % 1000) / 1000,
  radius: 0.35 + (index % 4) * 0.28,
  alpha: 0.1 + (index % 6) * 0.035,
  phase: index * 0.77,
}));

function base64ToBlob(base64: string, type: string) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type });
}

function BarsIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M5 27V17h5v10M14 27V10h5v17M23 27V4h4v23" />
      </g>
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
        <path d="m16 3 11 6.4v13L16 29 5 22.4v-13L16 3Z" />
        <path d="m5 9.4 11 6.5 11-6.5M16 15.9V29" />
      </g>
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="16" cy="16" r="12" />
        <circle cx="16" cy="16" r="7" />
        <circle cx="16" cy="16" r="2.5" />
      </g>
    </svg>
  );
}

function AnimatedApprovedScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    let cancelled = false;
    let frame = 0;
    let drawable: CanvasImageSource | null = null;
    let bitmap: ImageBitmap | null = null;
    let fallbackUrl = "";
    let cssWidth = 1;
    let cssHeight = 1;
    let dpr = 1;
    let pointerX = 0;
    let pointerY = 0;
    let smoothX = 0;
    let smoothY = 0;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      cssWidth = Math.max(1, rect.width);
      cssHeight = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 1.45);
      const nextWidth = Math.round(cssWidth * dpr);
      const nextHeight = Math.round(cssHeight * dpr);
      if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
        canvas.width = nextWidth;
        canvas.height = nextHeight;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX / Math.max(1, window.innerWidth) - 0.5;
      pointerY = event.clientY / Math.max(1, window.innerHeight) - 0.5;
    };

    const drawGlow = (x: number, y: number, radius: number, alpha: number) => {
      const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `rgba(255,245,224,${alpha})`);
      gradient.addColorStop(0.18, `rgba(231,174,92,${alpha * 0.75})`);
      gradient.addColorStop(1, "rgba(178,132,83,0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    };

    const render = (timeMs: number) => {
      if (cancelled) return;
      const time = timeMs * 0.001;
      resize();

      smoothX += (pointerX - smoothX) * 0.035;
      smoothY += (pointerY - smoothY) * 0.035;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.globalCompositeOperation = "source-over";
      context.globalAlpha = 1;
      context.fillStyle = "#040302";
      context.fillRect(0, 0, cssWidth, cssHeight);

      if (drawable) {
        const artLeft = cssWidth * 0.347;
        const parallaxX = reducedMotion ? 0 : smoothX * 9;
        const parallaxY = reducedMotion ? 0 : smoothY * 6;
        const breathe = reducedMotion ? 1 : 1 + Math.sin(time * 0.22) * 0.0035;
        const artWidth = cssWidth * 0.668 * breathe;
        const artHeight = cssHeight * breathe;
        const dx = artLeft + parallaxX - (artWidth - cssWidth * 0.668) * 0.5;
        const dy = parallaxY - (artHeight - cssHeight) * 0.5;

        context.save();
        context.globalAlpha = 0.995;
        context.drawImage(
          drawable,
          SOURCE_CROP_X,
          0,
          SOURCE_CROP_WIDTH,
          SOURCE_HEIGHT,
          dx,
          dy,
          artWidth,
          artHeight,
        );
        context.restore();

        const sourceToCanvas = (sourceX: number, sourceY: number) => ({
          x: dx + ((sourceX - SOURCE_CROP_X) / SOURCE_CROP_WIDTH) * artWidth,
          y: dy + (sourceY / SOURCE_HEIGHT) * artHeight,
        });

        if (!reducedMotion) {
          context.save();
          context.globalCompositeOperation = "screen";

          const core = sourceToCanvas(1230, 385);
          drawGlow(core.x, core.y, 44 + Math.sin(time * 1.35) * 6, 0.16 + Math.sin(time * 1.35) * 0.025);
          drawGlow(core.x, core.y, 13 + Math.sin(time * 1.7) * 2, 0.28);

          const orbitCenter = sourceToCanvas(1230, 390);
          const orbitRx = artWidth * 0.205;
          const orbitRy = artHeight * 0.17;
          for (let i = 0; i < 9; i += 1) {
            const angle = time * (0.055 + i * 0.003) + i * 0.78;
            const tilt = 0.56 + (i % 3) * 0.13;
            const x = orbitCenter.x + Math.cos(angle) * orbitRx * (0.54 + (i % 4) * 0.13);
            const y = orbitCenter.y + Math.sin(angle + i * 0.31) * orbitRy * tilt;
            const radius = 1.2 + (i % 3) * 0.6;
            drawGlow(x, y, 10 + radius * 4, 0.07 + (i % 2) * 0.025);
            context.fillStyle = i % 2 === 0 ? "rgba(255,235,199,.9)" : "rgba(210,151,82,.82)";
            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2);
            context.fill();
          }

          const galaxy = sourceToCanvas(790, 126);
          const galaxySweep = context.createRadialGradient(galaxy.x, galaxy.y, 0, galaxy.x, galaxy.y, 95);
          galaxySweep.addColorStop(0, `rgba(231,180,111,${0.035 + Math.sin(time * 0.38) * 0.01})`);
          galaxySweep.addColorStop(1, "rgba(178,132,83,0)");
          context.fillStyle = galaxySweep;
          context.beginPath();
          context.arc(galaxy.x, galaxy.y, 95, 0, Math.PI * 2);
          context.fill();

          context.restore();
        }
      }

      context.save();
      context.globalCompositeOperation = "screen";
      for (let i = 0; i < fieldStars.length; i += 1) {
        const star = fieldStars[i];
        const twinkle = reducedMotion ? 0.5 : 0.45 + Math.sin(time * (0.55 + (i % 5) * 0.09) + star.phase) * 0.45;
        const x = star.x * cssWidth;
        const y = star.y * cssHeight;
        context.fillStyle = `rgba(239,202,145,${star.alpha * Math.max(0.18, twinkle)})`;
        context.beginPath();
        context.arc(x, y, star.radius, 0, Math.PI * 2);
        context.fill();
      }
      context.restore();

      const topFade = context.createLinearGradient(0, 0, 0, Math.min(118, cssHeight * 0.16));
      topFade.addColorStop(0, "rgba(4,3,2,.98)");
      topFade.addColorStop(0.7, "rgba(4,3,2,.82)");
      topFade.addColorStop(1, "rgba(4,3,2,0)");
      context.fillStyle = topFade;
      context.fillRect(cssWidth * 0.43, 0, cssWidth * 0.57, Math.min(120, cssHeight * 0.17));

      const leftFade = context.createLinearGradient(cssWidth * 0.3, 0, cssWidth * 0.53, 0);
      leftFade.addColorStop(0, "rgba(4,3,2,1)");
      leftFade.addColorStop(0.38, "rgba(4,3,2,.96)");
      leftFade.addColorStop(0.72, "rgba(4,3,2,.34)");
      leftFade.addColorStop(1, "rgba(4,3,2,0)");
      context.fillStyle = leftFade;
      context.fillRect(cssWidth * 0.27, 0, cssWidth * 0.3, cssHeight);

      if (!reducedMotion) frame = requestAnimationFrame(render);
    };

    const loadArtwork = async () => {
      try {
        const blob = base64ToBlob(heroBase64, "image/avif");
        if ("createImageBitmap" in window) {
          bitmap = await createImageBitmap(blob);
          drawable = bitmap;
        } else {
          fallbackUrl = URL.createObjectURL(blob);
          const image = new Image();
          image.decoding = "async";
          image.src = fallbackUrl;
          await image.decode();
          drawable = image;
        }
      } catch (error) {
        console.error("[AUDITSEO hero] approved cinematic artwork failed to decode", error);
      }

      if (cancelled) return;
      if (reducedMotion) render(performance.now());
      else frame = requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    resize();
    void loadArtwork();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      if (bitmap) bitmap.close();
      if (fallbackUrl) URL.revokeObjectURL(fallbackUrl);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

export default function CinematicHero() {
  return (
    <section
      id="inicio"
      className="cinematic-approved-hero relative isolate min-h-[820px] overflow-hidden bg-[#040302] text-[#f8f8f8] lg:h-[min(941px,100svh)] lg:min-h-[820px]"
      aria-label="AUDITSEO Search Intelligence"
    >
      <AnimatedApprovedScene />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_42%,rgba(204,143,74,.06),transparent_30%),linear-gradient(90deg,rgba(4,3,2,.18),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[14%] bg-gradient-to-b from-transparent to-[#080604]/36" />

      <div className="relative z-20 mx-auto h-full max-w-[1672px] px-6 sm:px-9 lg:px-0">
        <header className="flex h-[96px] items-center justify-between lg:absolute lg:left-[4.75%] lg:right-[5.9%] lg:top-[1.8%] lg:h-[70px]">
          <a href="/" className="inline-flex items-center" aria-label="AUDITSEO — início">
            <img
              src="/auditseo-logo.png"
              alt="AUDITSEO — Search Intelligence Partner"
              className="h-auto w-[220px] object-contain sm:w-[245px] lg:w-[270px]"
              decoding="async"
            />
          </a>

          <nav className="hidden items-center gap-9 text-[14px] font-medium text-[#f5f1ec]/88 lg:flex xl:gap-11">
            <a className="transition-colors hover:text-[#d9a25e]" href="/solucoes">Soluções</a>
            <a className="transition-colors hover:text-[#d9a25e]" href="/blog/framework-crawl-index-retrieve-understand-trust-cite">Framework</a>
            <a className="transition-colors hover:text-[#d9a25e]" href="/blog">Conteúdos</a>
            <a className="transition-colors hover:text-[#d9a25e]" href="/autor/sidney-santos">Sobre</a>
            <a
              className="group inline-flex items-center gap-3 rounded-full border border-[#c68b44]/80 bg-black/10 px-6 py-3 text-[13px] font-semibold text-[#f1cf9c] backdrop-blur-sm transition hover:border-[#e6b66f] hover:bg-[#c68b44]/12"
              href="/diagnostico"
            >
              Falar com um especialista
              <span className="text-lg leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </nav>

          <a href="/diagnostico" className="rounded-full border border-[#c68b44]/60 px-4 py-2 text-xs font-semibold text-[#e8c28f] lg:hidden">Diagnóstico</a>
        </header>

        <div className="relative z-30 pb-36 pt-10 lg:absolute lg:left-[4.75%] lg:top-[15.2%] lg:w-[40.4%] lg:pb-0 lg:pt-0">
          <div className="mb-7 flex items-center gap-3 font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d19a58] sm:text-[10px]">
            <span className="h-px w-8 bg-[#c48b4d]/80" />
            Search Intelligence para empresas
          </div>

          <h1 className="font-display text-[clamp(44px,8.8vw,68px)] font-bold leading-[0.99] tracking-[-0.045em] text-[#f7f5f2] lg:text-[clamp(50px,3.8vw,65px)] xl:text-[64px]">
            <span className="block">Antes de investir em</span>
            <span className="block">mais SEO, conteúdo</span>
            <span className="block">ou IA, descubra onde</span>
            <span className="block">sua presença</span>
            <span className="block text-[#d3a062]">realmente quebra.</span>
          </h1>

          <p className="mt-7 max-w-[650px] text-[15px] leading-[1.72] text-[#f3eee7]/88 sm:text-[16px] lg:mt-6 lg:text-[16px] xl:text-[17px]">
            A AUDITSEO investiga em qual etapa sua empresa perde capacidade de ser descoberta, compreendida, validada, citada ou escolhida. Depois transforma a evidência em um roadmap coordenado, com prioridades, responsáveis e critérios de validação.
          </p>

          <p className="mt-4 max-w-[650px] text-[13px] leading-[1.7] text-[#e5ddd3]/68 sm:text-[14px]">
            SEO técnico, conteúdo, autoridade de entidade, reputação e Search AI entram apenas quando o diagnóstico mostra que são parte da causa ou da solução.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="/diagnostico"
              className="group inline-flex min-h-[58px] items-center justify-center gap-5 rounded-full bg-[linear-gradient(100deg,#d8a260,#c98d48)] px-8 text-[14px] font-bold text-white shadow-[0_12px_34px_rgba(181,119,52,.22)] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Diagnosticar minha empresa
              <span className="text-xl leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
            <a
              href="/blog/framework-crawl-index-retrieve-understand-trust-cite"
              className="group inline-flex min-h-[58px] items-center justify-center gap-5 rounded-full border border-[#c99656]/70 bg-black/20 px-8 text-[14px] font-semibold text-[#f4eee7] backdrop-blur-sm transition hover:border-[#dfae6c] hover:bg-[#c99656]/8"
            >
              Ver o framework de diagnóstico
              <span className="text-xl leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-[4.5%] left-[4.75%] z-30 hidden items-center text-[#f2d194] lg:flex">
          <div className="flex items-center gap-4 pr-7">
            <BarsIcon />
            <div>
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f3eee7]">Diagnóstico</div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.13em] text-[#f3eee7]/72">baseado em evidências</div>
            </div>
          </div>
          <span className="h-11 w-px bg-[#f2eee8]/25" />
          <div className="flex items-center gap-4 px-7">
            <CubeIcon />
            <div>
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f3eee7]">Visão integrada</div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.13em] text-[#f3eee7]/72">do seu ecossistema</div>
            </div>
          </div>
          <span className="h-11 w-px bg-[#f2eee8]/25" />
          <div className="flex items-center gap-4 pl-7">
            <TargetIcon />
            <div>
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f3eee7]">Roadmap prático</div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.13em] text-[#f3eee7]/72">e prioritário</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cinematic-approved-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 11;
          opacity: .055;
          mix-blend-mode: screen;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
        }
        @media (max-width: 1023px) {
          .cinematic-approved-hero { min-height: 900px; }
          .cinematic-approved-hero canvas { opacity: .44; }
          .cinematic-approved-hero::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 8;
            pointer-events: none;
            background: linear-gradient(90deg, rgba(4,3,2,.98) 0%, rgba(4,3,2,.88) 56%, rgba(4,3,2,.25) 100%);
          }
        }
        @media (max-width: 640px) {
          .cinematic-approved-hero { min-height: 940px; }
          .cinematic-approved-hero canvas { opacity: .32; transform: translateX(12%); }
        }
      `}</style>
    </section>
  );
}
