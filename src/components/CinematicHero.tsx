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

const twinkleStars = [
  [75, 107], [124, 343], [179, 71], [357, 73], [405, 50], [491, 165], [552, 22], [606, 107],
  [676, 42], [724, 75], [822, 31], [863, 86], [940, 59], [1004, 112], [1078, 74], [1145, 123],
  [1210, 61], [1294, 94], [1351, 132], [1417, 74], [1495, 111], [1578, 59], [1625, 170], [1540, 250],
  [1468, 207], [1394, 283], [1323, 198], [1251, 164], [1164, 181], [1066, 154], [973, 207], [888, 174],
  [808, 228], [731, 191], [664, 242], [591, 216], [514, 271], [443, 230], [369, 290], [283, 259],
  [194, 322], [109, 291], [45, 415], [236, 470], [345, 426], [474, 511], [589, 452], [707, 532],
  [813, 479], [934, 548], [1041, 500], [1140, 584], [1237, 524], [1346, 585], [1432, 516], [1555, 574],
  [1637, 489], [1586, 667], [1487, 625], [1389, 701], [1294, 649], [1190, 721], [1084, 666], [979, 739],
  [864, 681], [758, 754], [642, 699], [526, 775], [411, 718], [302, 803], [196, 735], [94, 816],
] as const;

const orbitNodes = [
  { rx: 238, ry: 92, speed: 0.055, phase: 0.2, size: 2.2 },
  { rx: 292, ry: 134, speed: -0.042, phase: 1.8, size: 2.8 },
  { rx: 351, ry: 177, speed: 0.031, phase: 3.7, size: 2.0 },
  { rx: 414, ry: 222, speed: -0.025, phase: 5.0, size: 3.0 },
  { rx: 184, ry: 198, speed: 0.044, phase: 2.7, size: 1.8 },
] as const;

function decodeBase64ToBlob(base64: string, type: string) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return new Blob([bytes], { type });
}

function ApprovedHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: false, desynchronized: true });
    if (!context) return;

    let cancelled = false;
    let frame = 0;
    let artwork: CanvasImageSource | null = null;
    let bitmap: ImageBitmap | null = null;
    let objectUrl = "";
    let cssWidth = SOURCE_WIDTH;
    let cssHeight = SOURCE_HEIGHT;
    let dpr = 1;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      cssWidth = Math.max(1, rect.width);
      cssHeight = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 1.55);
      const nextWidth = Math.round(cssWidth * dpr);
      const nextHeight = Math.round(cssHeight * dpr);
      if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
        canvas.width = nextWidth;
        canvas.height = nextHeight;
      }
    };

    const glow = (x: number, y: number, radius: number, opacity: number) => {
      const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `rgba(255,249,236,${opacity})`);
      gradient.addColorStop(0.13, `rgba(255,210,142,${opacity * 0.88})`);
      gradient.addColorStop(0.42, `rgba(202,132,56,${opacity * 0.34})`);
      gradient.addColorStop(1, "rgba(181,115,42,0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    };

    const render = (milliseconds: number) => {
      if (cancelled) return;
      resize();

      const time = milliseconds * 0.001;
      const scaleX = cssWidth / SOURCE_WIDTH;
      const scaleY = cssHeight / SOURCE_HEIGHT;
      const scale = Math.min(scaleX, scaleY);

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.globalCompositeOperation = "source-over";
      context.globalAlpha = 1;
      context.fillStyle = "#030201";
      context.fillRect(0, 0, cssWidth, cssHeight);

      if (artwork) {
        context.drawImage(artwork, 0, 0, SOURCE_WIDTH, SOURCE_HEIGHT, 0, 0, cssWidth, cssHeight);
      }

      if (!reduceMotion && artwork) {
        context.save();
        context.globalCompositeOperation = "screen";

        // The approved composition stays perfectly still. Only its light, dust and neural energy move.
        const brainX = 1232 * scaleX;
        const brainY = 386 * scaleY;
        const pulse = 0.5 + 0.5 * Math.sin(time * 1.18);
        glow(brainX, brainY, (31 + pulse * 13) * scale, 0.055 + pulse * 0.035);
        glow(brainX, brainY, (8 + pulse * 4) * scale, 0.2 + pulse * 0.09);

        const galaxyX = 754 * scaleX;
        const galaxyY = 123 * scaleY;
        const galaxyPulse = 0.5 + 0.5 * Math.sin(time * 0.37 + 1.3);
        glow(galaxyX, galaxyY, (54 + galaxyPulse * 18) * scale, 0.02 + galaxyPulse * 0.018);

        for (let index = 0; index < twinkleStars.length; index += 1) {
          const [sourceX, sourceY] = twinkleStars[index];
          const wave = Math.max(0, Math.sin(time * (0.42 + (index % 7) * 0.055) + index * 0.71));
          if (wave < 0.56) continue;
          const x = sourceX * scaleX;
          const y = sourceY * scaleY;
          const radius = (0.55 + (index % 4) * 0.22) * scale;
          context.fillStyle = `rgba(255,225,177,${0.05 + wave * 0.11})`;
          context.beginPath();
          context.arc(x, y, radius, 0, Math.PI * 2);
          context.fill();
        }

        for (let index = 0; index < orbitNodes.length; index += 1) {
          const orbit = orbitNodes[index];
          const angle = time * orbit.speed * Math.PI * 2 + orbit.phase;
          const x = brainX + Math.cos(angle) * orbit.rx * scaleX;
          const y = brainY + Math.sin(angle) * orbit.ry * scaleY;
          glow(x, y, (9 + orbit.size * 3.5) * scale, 0.038 + (index % 2) * 0.015);
          context.fillStyle = index % 2 === 0 ? "rgba(255,238,207,.56)" : "rgba(223,157,80,.5)";
          context.beginPath();
          context.arc(x, y, orbit.size * scale, 0, Math.PI * 2);
          context.fill();
        }

        // Tiny packets of light travel through the brain area without altering the approved geometry.
        for (let index = 0; index < 7; index += 1) {
          const phase = (time * (0.055 + index * 0.006) + index * 0.139) % 1;
          const angle = phase * Math.PI * 2 + index * 0.8;
          const radiusX = (100 + index * 28) * scaleX;
          const radiusY = (76 + (index % 4) * 22) * scaleY;
          const x = brainX + Math.cos(angle) * radiusX;
          const y = brainY + Math.sin(angle * 1.17) * radiusY;
          glow(x, y, (6 + (index % 3) * 2) * scale, 0.035);
        }

        context.restore();
      }

      if (!reduceMotion) frame = requestAnimationFrame(render);
    };

    const load = async () => {
      try {
        const blob = decodeBase64ToBlob(heroBase64, "image/avif");
        try {
          bitmap = await createImageBitmap(blob);
          artwork = bitmap;
        } catch {
          objectUrl = URL.createObjectURL(blob);
          const image = new Image();
          image.decoding = "async";
          image.src = objectUrl;
          await image.decode();
          artwork = image;
        }
      } catch (error) {
        console.error("[AUDITSEO hero] unable to decode approved cinematic artwork", error);
      }

      if (cancelled) return;
      render(performance.now());
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    void load();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      if (bitmap) bitmap.close();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

const hotspot = "absolute z-30 block rounded-md bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-[#e3ae66] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export default function CinematicHero() {
  return (
    <section
      id="inicio"
      className="cinematic-approved-hero relative isolate w-full overflow-hidden bg-[#030201]"
      style={{ aspectRatio: `${SOURCE_WIDTH} / ${SOURCE_HEIGHT}` }}
      aria-label="AUDITSEO Search Intelligence"
    >
      <ApprovedHeroCanvas />

      <h1 className="sr-only">Antes de investir em mais SEO, conteúdo ou IA, descubra onde sua presença realmente quebra.</h1>
      <p className="sr-only">A AUDITSEO investiga em qual etapa sua empresa perde capacidade de ser descoberta, compreendida, validada, citada ou escolhida. Depois transforma a evidência em um roadmap coordenado, com prioridades, responsáveis e critérios de validação.</p>
      <p className="sr-only">SEO técnico, conteúdo, autoridade de entidade, reputação e Search AI entram apenas quando o diagnóstico mostra que são parte da causa ou da solução.</p>

      <a href="/" aria-label="AUDITSEO — início" className={`${hotspot} left-[4.2%] top-[2.2%] h-[6.8%] w-[18%]`} />
      <a href="/solucoes" aria-label="Soluções" className={`${hotspot} left-[55.1%] top-[2.5%] h-[5.8%] w-[5.7%]`} />
      <a href="/blog/framework-crawl-index-retrieve-understand-trust-cite" aria-label="Framework" className={`${hotspot} left-[61.35%] top-[2.5%] h-[5.8%] w-[7.1%]`} />
      <a href="/blog" aria-label="Conteúdos" className={`${hotspot} left-[68.8%] top-[2.5%] h-[5.8%] w-[6.6%]`} />
      <a href="/autor/sidney-santos" aria-label="Sobre" className={`${hotspot} left-[75.6%] top-[2.5%] h-[5.8%] w-[4.7%]`} />
      <a href="/diagnostico" aria-label="Falar com um especialista" className={`${hotspot} left-[80.4%] top-[1.9%] h-[6.6%] w-[14.2%]`} />
      <a href="/diagnostico" aria-label="Diagnosticar minha empresa" className={`${hotspot} left-[4.7%] top-[72.0%] h-[7.2%] w-[17.8%]`} />
      <a href="/blog/framework-crawl-index-retrieve-understand-trust-cite" aria-label="Ver o framework de diagnóstico" className={`${hotspot} left-[23.3%] top-[72.0%] h-[7.2%] w-[18.8%]`} />

      <div className="sr-only" aria-label="Benefícios do diagnóstico">
        Diagnóstico baseado em evidências. Visão integrada do seu ecossistema. Roadmap prático e prioritário.
      </div>

      <style>{`
        .cinematic-approved-hero canvas {
          display: block;
          width: 100%;
          height: 100%;
        }
        @media (max-width: 820px) {
          .cinematic-approved-hero {
            min-height: 760px;
            aspect-ratio: auto !important;
          }
          .cinematic-approved-hero canvas {
            object-fit: cover;
          }
        }
      `}</style>
    </section>
  );
}
