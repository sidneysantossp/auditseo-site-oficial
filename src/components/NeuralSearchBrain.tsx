import React from "react";
import { BarChart3, Box, Target } from "lucide-react";

const GOLD = "#d6a05d";
const PALE = "#ffe3b8";

function seeded(index: number, salt = 0) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

const STARS = Array.from({ length: 560 }, (_, index) => ({
  x: seeded(index, 1),
  y: seeded(index, 2),
  r: 0.35 + seeded(index, 3) * 1.2,
  a: 0.18 + seeded(index, 4) * 0.72,
  phase: seeded(index, 5) * Math.PI * 2,
}));

const GALAXY = Array.from({ length: 820 }, (_, index) => {
  const arm = index % 4;
  const radius = 0.035 + seeded(index, 10) * 1.0;
  const theta = radius * 8.4 + arm * Math.PI * 0.5 + (seeded(index, 11) - 0.5) * 0.52;
  return { radius, theta, spread: (seeded(index, 12) - 0.5) * (0.05 + radius * 0.13), heat: 1 - radius };
});

const BRAIN_NODES = Array.from({ length: 126 }, (_, index) => {
  const side = index % 2 === 0 ? -1 : 1;
  const i = Math.floor(index / 2);
  const u = (i + 0.5) / 63;
  const phi = Math.acos(1 - 2 * u);
  const theta = seeded(index, 21) * Math.PI * 2;
  const bulge = 1 + Math.sin(theta * 3 + phi * 4) * 0.11 + Math.sin(theta * 7 - phi * 2) * 0.055;
  return {
    x: side * (0.18 + Math.abs(Math.sin(phi) * Math.cos(theta)) * 0.82 * bulge),
    y: Math.cos(phi) * 0.84 * bulge,
    z: Math.sin(phi) * Math.sin(theta) * 0.55 * bulge,
    phase: seeded(index, 22) * Math.PI * 2,
  };
});

const STEM_NODES = Array.from({ length: 14 }, (_, index) => ({
  x: (seeded(index, 30) - 0.5) * 0.10,
  y: 0.70 + index * 0.075,
  z: (seeded(index, 31) - 0.5) * 0.10,
  phase: seeded(index, 32) * Math.PI * 2,
}));

const ALL_NODES = [...BRAIN_NODES, ...STEM_NODES];
const BRAIN_LINKS: Array<[number, number]> = [];
for (let i = 0; i < ALL_NODES.length; i += 1) {
  const nearest: Array<{ j: number; d: number }> = [];
  for (let j = 0; j < ALL_NODES.length; j += 1) {
    if (i === j) continue;
    const dx = ALL_NODES[i].x - ALL_NODES[j].x;
    const dy = ALL_NODES[i].y - ALL_NODES[j].y;
    const dz = ALL_NODES[i].z - ALL_NODES[j].z;
    const d = dx * dx + dy * dy + dz * dz;
    if (d < 0.22) nearest.push({ j, d });
  }
  nearest.sort((a, b) => a.d - b.d).slice(0, 2).forEach(({ j }) => {
    if (i < j) BRAIN_LINKS.push([i, j]);
  });
}

const LABELS = [
  ["CONTEÚDO", "54%", "21%"], ["AUTORIDADE", "80%", "18%"], ["SEO TÉCNICO", "86%", "34%"],
  ["SEARCH AI", "87%", "50%"], ["RESULTADOS", "81%", "69%"], ["ESTRATÉGIA", "56%", "64%"], ["REPUTAÇÃO", "54%", "54%"],
] as const;

function ellipse(ctx: CanvasRenderingContext2D, cx: number, cy: number, rx: number, ry: number, rotation: number) {
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, rotation, 0, Math.PI * 2);
}

function glow(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, strength = 1) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
  g.addColorStop(0, `rgba(255,250,237,${0.95 * strength})`);
  g.addColorStop(0.12, `rgba(255,214,155,${0.75 * strength})`);
  g.addColorStop(0.42, `rgba(214,138,58,${0.23 * strength})`);
  g.addColorStop(1, "rgba(181,96,27,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawScene(ctx: CanvasRenderingContext2D, width: number, height: number, time: number, px: number, py: number) {
  ctx.clearRect(0, 0, width, height);
  const min = Math.min(width, height);

  const wash = ctx.createRadialGradient(width * 0.74, height * 0.42, 0, width * 0.74, height * 0.42, width * 0.48);
  wash.addColorStop(0, "rgba(118,64,26,.16)");
  wash.addColorStop(0.38, "rgba(74,35,13,.075)");
  wash.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = wash;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  for (let i = 0; i < STARS.length; i += 1) {
    const star = STARS[i];
    const flicker = 0.48 + 0.52 * Math.sin(time * (0.35 + (i % 7) * 0.06) + star.phase);
    const x = star.x * width + px * (2 + (i % 3));
    const y = star.y * height + py * (1 + (i % 2));
    ctx.globalAlpha = star.a * (0.35 + flicker * 0.65);
    ctx.fillStyle = i % 5 === 0 ? PALE : GOLD;
    ctx.beginPath();
    ctx.arc(x, y, star.r * (0.75 + flicker * 0.4), 0, Math.PI * 2);
    ctx.fill();
  }

  const gx = width * 0.445 + px * 8;
  const gy = height * 0.13 + py * 4;
  const gscale = min * 0.165;
  const grot = time * 0.035;
  for (let i = 0; i < GALAXY.length; i += 1) {
    const point = GALAXY[i];
    const theta = point.theta + grot;
    const r = point.radius * gscale;
    const x = gx + Math.cos(theta) * r * 1.35;
    const y = gy + Math.sin(theta) * r * 0.58 + point.spread * gscale;
    const alpha = 0.10 + point.heat * 0.62;
    ctx.globalAlpha = alpha;
    ctx.fillStyle = i % 9 === 0 ? "#fff5df" : i % 3 === 0 ? "#d8984d" : "#a56733";
    ctx.beginPath();
    ctx.arc(x, y, 0.45 + point.heat * 1.15, 0, Math.PI * 2);
    ctx.fill();
  }
  glow(ctx, gx, gy, min * 0.055, 0.55);

  ctx.globalAlpha = 0.33;
  const ray = ctx.createLinearGradient(0, height * 0.05, width * 0.48, height * 0.34);
  ray.addColorStop(0, "rgba(216,154,76,.75)");
  ray.addColorStop(1, "rgba(216,154,76,0)");
  ctx.strokeStyle = ray;
  ctx.lineWidth = 1.2;
  for (let i = 0; i < 4; i += 1) {
    ctx.beginPath();
    ctx.moveTo(-20, height * (0.07 + i * 0.035));
    ctx.lineTo(width * (0.49 + i * 0.015), height * (0.31 + i * 0.02));
    ctx.stroke();
  }

  const farX = width * 1.01 + px * 3;
  const farY = height * 0.18 + py * 2;
  const farR = min * 0.105;
  const planetGrad = ctx.createRadialGradient(farX - farR * 0.35, farY - farR * 0.35, farR * 0.05, farX, farY, farR);
  planetGrad.addColorStop(0, "rgba(169,109,61,.72)");
  planetGrad.addColorStop(0.38, "rgba(88,50,28,.76)");
  planetGrad.addColorStop(1, "rgba(8,5,3,.98)");
  ctx.globalAlpha = 0.88;
  ctx.fillStyle = planetGrad;
  ctx.beginPath();
  ctx.arc(farX, farY, farR, 0, Math.PI * 2);
  ctx.fill();

  const smallPlanets = [
    [0.31, 0.115, 0.040], [0.51, 0.45, 0.026], [0.90, 0.27, 0.022], [0.87, 0.58, 0.020], [0.49, 0.66, 0.018],
  ];
  smallPlanets.forEach(([nx, ny, nr], i) => {
    const x = width * nx + px * (4 + i);
    const y = height * ny + py * (2 + i * 0.6);
    const r = min * nr;
    const pg = ctx.createRadialGradient(x - r * 0.35, y - r * 0.35, r * 0.05, x, y, r);
    pg.addColorStop(0, "rgba(211,147,83,.9)");
    pg.addColorStop(0.4, "rgba(103,58,31,.8)");
    pg.addColorStop(1, "rgba(8,5,3,.98)");
    ctx.fillStyle = pg;
    ctx.globalAlpha = 0.82;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  });

  const cx = width * 0.735 + px * 9;
  const cy = height * 0.405 + py * 6;
  const brainScale = min * 0.22;
  const yaw = px * 0.006 + Math.sin(time * 0.23) * 0.018;
  const pitch = py * 0.004;
  const project = (node: { x: number; y: number; z: number }) => {
    const cosy = Math.cos(yaw), siny = Math.sin(yaw);
    const cosp = Math.cos(pitch), sinp = Math.sin(pitch);
    const x1 = node.x * cosy - node.z * siny;
    const z1 = node.x * siny + node.z * cosy;
    const y1 = node.y * cosp - z1 * sinp;
    const z2 = node.y * sinp + z1 * cosp;
    const perspective = 1 + z2 * 0.10;
    return { x: cx + x1 * brainScale * perspective, y: cy + y1 * brainScale * perspective, z: z2 };
  };

  const projected = ALL_NODES.map(project);
  ctx.globalAlpha = 1;
  const aura = ctx.createRadialGradient(cx, cy, 0, cx, cy, brainScale * 1.35);
  aura.addColorStop(0, "rgba(216,154,76,.15)");
  aura.addColorStop(0.55, "rgba(174,94,33,.07)");
  aura.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = aura;
  ctx.beginPath();
  ctx.arc(cx, cy, brainScale * 1.35, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(-0.10);
  for (let i = 0; i < 8; i += 1) {
    const rx = brainScale * (0.86 + i * 0.10);
    const ry = brainScale * (0.33 + i * 0.038);
    ctx.strokeStyle = `rgba(224,157,75,${0.21 - i * 0.014})`;
    ctx.lineWidth = i % 3 === 0 ? 1.25 : 0.8;
    ctx.setLineDash(i % 2 ? [7, 12] : []);
    ctx.lineDashOffset = time * (i % 2 ? 8 : -5);
    ellipse(ctx, 0, 0, rx, ry, i * 0.13);
    ctx.stroke();
  }
  ctx.setLineDash([]);
  ctx.restore();

  ctx.lineWidth = 0.75;
  for (const [a, b] of BRAIN_LINKS) {
    const pa = projected[a], pb = projected[b];
    const depth = Math.max(0.12, 0.32 + (pa.z + pb.z) * 0.08);
    ctx.strokeStyle = `rgba(221,156,78,${depth})`;
    ctx.beginPath();
    ctx.moveTo(pa.x, pa.y);
    ctx.lineTo(pb.x, pb.y);
    ctx.stroke();
  }

  for (let i = 0; i < projected.length; i += 1) {
    const p = projected[i];
    const pulse = 0.58 + 0.42 * Math.sin(time * (1.1 + (i % 5) * 0.07) + ALL_NODES[i].phase);
    const radius = (i % 17 === 0 ? 3.2 : 1.2 + (i % 4) * 0.32) * (0.8 + pulse * 0.35);
    if (i % 17 === 0) glow(ctx, p.x, p.y, radius * 8, 0.42);
    ctx.fillStyle = i % 8 === 0 ? "#fff0d0" : GOLD;
    ctx.globalAlpha = 0.52 + pulse * 0.48;
    ctx.beginPath();
    ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  const corePulse = 0.5 + 0.5 * Math.sin(time * 2.2);
  glow(ctx, cx + brainScale * 0.02, cy - brainScale * 0.02, brainScale * (0.18 + corePulse * 0.06), 0.92);
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#fffaf0";
  ctx.beginPath();
  ctx.arc(cx + brainScale * 0.02, cy - brainScale * 0.02, 4.5 + corePulse * 2, 0, Math.PI * 2);
  ctx.fill();

  for (let i = 0; i < 10; i += 1) {
    const angle = time * (0.18 + i * 0.013) + i * 0.71;
    const rx = brainScale * (0.94 + (i % 4) * 0.17);
    const ry = brainScale * (0.35 + (i % 4) * 0.06);
    const x = cx + Math.cos(angle) * rx;
    const y = cy + Math.sin(angle) * ry;
    glow(ctx, x, y, 10 + (i % 3) * 4, 0.18);
    ctx.globalAlpha = 0.78;
    ctx.fillStyle = i % 3 === 0 ? "#fff0d0" : GOLD;
    ctx.beginPath();
    ctx.arc(x, y, i % 3 === 0 ? 2.3 : 1.45, 0, Math.PI * 2);
    ctx.fill();
  }

  const horizonY = height * 0.84;
  const hg = ctx.createLinearGradient(0, horizonY - 20, 0, height);
  hg.addColorStop(0, "rgba(226,154,72,.06)");
  hg.addColorStop(0.22, "rgba(89,46,21,.52)");
  hg.addColorStop(1, "rgba(6,4,3,.98)");
  ctx.globalAlpha = 1;
  ctx.fillStyle = hg;
  ctx.beginPath();
  ctx.ellipse(width * 0.57, height * 1.08, width * 0.61, height * 0.28, 0, Math.PI, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(239,177,101,.55)";
  ctx.lineWidth = 1.1;
  ctx.beginPath();
  ctx.ellipse(width * 0.57, height * 1.08, width * 0.61, height * 0.28, 0, Math.PI * 1.12, Math.PI * 1.88);
  ctx.stroke();
  for (let i = 0; i < 92; i += 1) {
    const x = width * (0.18 + seeded(i, 70) * 0.70);
    const y = horizonY + seeded(i, 71) * height * 0.13;
    const rr = 0.45 + seeded(i, 72) * 1.6;
    ctx.globalAlpha = 0.22 + seeded(i, 73) * 0.46;
    ctx.fillStyle = i % 4 === 0 ? PALE : GOLD;
    ctx.beginPath();
    ctx.arc(x, y, rr, 0, Math.PI * 2);
    ctx.fill();
  }

  const ox = width * 0.675 + px * 3;
  const oy = height * 0.88;
  ctx.globalAlpha = 1;
  ctx.fillStyle = "rgba(2,2,2,.97)";
  ctx.beginPath();
  ctx.arc(ox, oy - min * 0.115, min * 0.015, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(ox - min * 0.025, oy - min * 0.088);
  ctx.quadraticCurveTo(ox, oy - min * 0.105, ox + min * 0.025, oy - min * 0.088);
  ctx.lineTo(ox + min * 0.033, oy);
  ctx.lineTo(ox + min * 0.010, oy);
  ctx.lineTo(ox, oy - min * 0.035);
  ctx.lineTo(ox - min * 0.010, oy);
  ctx.lineTo(ox - min * 0.033, oy);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "rgba(222,153,78,.18)";
  ctx.lineWidth = 1;
  ctx.stroke();

  const asteroids = [
    [0.45, 0.70, 0.034], [0.49, 0.86, 0.050], [0.92, 0.72, 0.036], [0.86, 0.91, 0.050], [0.61, 0.75, 0.020], [0.04, 0.75, 0.044],
  ];
  asteroids.forEach(([nx, ny, nr], i) => {
    const x = width * nx + px * (6 + i * 0.7);
    const y = height * ny + py * (3 + i * 0.35);
    const r = min * nr;
    ctx.fillStyle = i % 2 ? "#1d110b" : "#2b190f";
    ctx.globalAlpha = 0.90;
    ctx.beginPath();
    for (let k = 0; k < 8; k += 1) {
      const a = (k / 8) * Math.PI * 2;
      const jitter = 0.72 + seeded(i * 11 + k, 88) * 0.42;
      const xx = x + Math.cos(a) * r * jitter;
      const yy = y + Math.sin(a) * r * jitter;
      if (k === 0) ctx.moveTo(xx, yy); else ctx.lineTo(xx, yy);
    }
    ctx.closePath();
    ctx.fill();
  });

  ctx.restore();
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";
}

export default function NeuralSearchBrain() {
  const hostRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    const hero = host.closest("#inicio") as HTMLElement | null;
    if (!hero) return;

    const heading = hero.querySelector("h1") as HTMLElement | null;
    if (heading && !heading.dataset.goldTail) {
      heading.innerHTML = 'Antes de investir em mais SEO, conteúdo ou IA, descubra onde sua presença <span style="color:#d7a15f">realmente quebra.</span>';
      heading.dataset.goldTail = "true";
    }
    Array.from(hero.querySelectorAll("div")).forEach((element) => {
      if (element.textContent?.replace(/\s/g, "").includes("CrawlIndexRetrieveUnderstandTrustCiteConvert")) (element as HTMLElement).style.display = "none";
    });

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    let cssWidth = 1;
    let cssHeight = 1;
    let dpr = 1;
    let raf = 0;
    let pointerX = 0;
    let pointerY = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      cssWidth = Math.max(1, rect.width);
      cssHeight = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.round(cssWidth * dpr);
      const h = Math.round(cssHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    const handlePointer = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 2;
      pointerY = ((event.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 2;
    };

    const start = performance.now();
    const render = (now: number) => {
      resize();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const t = reduced ? 4.2 : (now - start) / 1000;
      drawScene(ctx, cssWidth, cssHeight, t, pointerX, pointerY);
      if (!reduced) raf = requestAnimationFrame(render);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(hero);
    hero.addEventListener("pointermove", handlePointer, { passive: true });
    resize();
    render(performance.now());

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      hero.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  return (
    <div ref={hostRef} className="pointer-events-none absolute inset-0 z-[1] overflow-hidden bg-[radial-gradient(circle_at_73%_42%,rgba(136,76,29,.12),transparent_25%),linear-gradient(110deg,#030201_0%,#070402_54%,#020101_100%)]" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_43%_13%,rgba(214,150,73,.06),transparent_18%),radial-gradient(circle_at_79%_43%,rgba(170,92,34,.07),transparent_28%)]" />
      <div className="hidden lg:block">
        {LABELS.map(([label, left, top]) => <span key={label} className="absolute z-[4] font-mono text-[10px] font-semibold tracking-[0.27em] text-[#ecd8ba]/90" style={{ left, top }}>{label}</span>)}
        <div className="absolute bottom-[3.7%] left-[4.8%] z-[4] flex items-center gap-8 text-[#f7ead8]">
          <div className="flex items-center gap-3 border-r border-[#d8b27d]/35 pr-8"><BarChart3 size={23} className="text-[#dfaa62]"/><span className="font-mono text-[9px] font-semibold uppercase leading-[1.45] tracking-[0.15em]">Diagnóstico<br/>baseado em evidências</span></div>
          <div className="flex items-center gap-3 border-r border-[#d8b27d]/35 pr-8"><Box size={23} className="text-[#dfaa62]"/><span className="font-mono text-[9px] font-semibold uppercase leading-[1.45] tracking-[0.15em]">Visão integrada<br/>do seu ecossistema</span></div>
          <div className="flex items-center gap-3"><Target size={23} className="text-[#dfaa62]"/><span className="font-mono text-[9px] font-semibold uppercase leading-[1.45] tracking-[0.15em]">Roadmap prático<br/>e prioritário</span></div>
        </div>
        <div className="absolute bottom-[4.3%] right-[5.1%] z-[4] font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#d4a05d]/85">Dados · Estratégia · Resultados reais</div>
      </div>
      <style>{`
        #inicio { background:#030201 !important; }
        #inicio > div.relative.z-10 { max-width:1520px !important; }
        #inicio h1 { max-width:690px !important; font-size:clamp(46px,4.4vw,72px) !important; line-height:.98 !important; }
        #inicio p { max-width:680px !important; }
        #inicio .lg\\:col-span-7 { position:relative; z-index:12; }
        @media (min-width:1024px){
          #inicio { min-height:900px !important; padding-top:112px !important; padding-bottom:110px !important; }
          #inicio .lg\\:col-span-7 { grid-column:span 6 / span 6 !important; }
        }
      `}</style>
    </div>
  );
}
