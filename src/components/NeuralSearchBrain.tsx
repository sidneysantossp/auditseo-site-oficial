import React from "react";
import { ArrowRight, BarChart3, Box, Target } from "lucide-react";

const WIDTH = 1672;
const HEIGHT = 941;

const STAR_FIELD = Array.from({ length: 190 }, (_, index) => {
  const x = (index * 83 + 37) % WIDTH;
  const y = (index * 137 + 29) % 820;
  const r = 0.45 + (index % 5) * 0.28;
  const opacity = 0.16 + (index % 6) * 0.09;
  return { x, y, r, opacity, delay: `${-((index * 0.41) % 8)}s`, duration: `${4.8 + (index % 8) * 0.7}s` };
});

const DUST = Array.from({ length: 84 }, (_, index) => {
  const angle = index * 2.399963229728653;
  const radius = 90 + (index % 23) * 17;
  return {
    x: 1210 + Math.cos(angle) * radius * 1.18,
    y: 405 + Math.sin(angle) * radius * 0.63,
    r: 0.65 + (index % 4) * 0.45,
    opacity: 0.14 + (index % 5) * 0.07,
  };
});

const BRAIN_NODES = [
  [1032, 355], [1077, 296], [1138, 252], [1205, 235], [1276, 248], [1335, 286], [1386, 341],
  [1413, 404], [1397, 469], [1354, 528], [1296, 566], [1231, 584], [1164, 571], [1104, 535],
  [1062, 480], [1042, 416], [1110, 378], [1165, 333], [1228, 306], [1294, 326], [1342, 375], [1352, 438],
  [1312, 487], [1252, 520], [1193, 506], [1140, 468], [1126, 415], [1171, 390], [1221, 374], [1275, 393],
  [1290, 444], [1250, 466], [1199, 452], [1176, 421], [1228, 422],
] as const;

const BRAIN_LINKS: Array<[number, number]> = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,0],
  [0,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,26],[26,16],
  [17,27],[27,28],[28,29],[29,30],[30,31],[31,32],[32,33],[33,27],[28,34],[34,30],[32,34],[18,28],[19,29],[22,30],[23,31],[24,32],
  [1,17],[2,18],[3,19],[4,20],[5,21],[9,22],[10,23],[11,24],[12,25],[13,26],
];

const ORBITERS = [
  { rx: 286, ry: 92, tilt: -10, speed: 19, phase: -4, size: 8 },
  { rx: 347, ry: 127, tilt: 8, speed: 27, phase: -14, size: 6 },
  { rx: 398, ry: 164, tilt: -17, speed: 32, phase: -9, size: 10 },
  { rx: 454, ry: 197, tilt: 13, speed: 38, phase: -21, size: 5 },
] as const;

const FEATURE_ITEMS = [
  { icon: BarChart3, title: "DIAGNÓSTICO", subtitle: "BASEADO EM EVIDÊNCIAS" },
  { icon: Box, title: "VISÃO INTEGRADA", subtitle: "DO SEU ECOSSISTEMA" },
  { icon: Target, title: "ROADMAP PRÁTICO", subtitle: "E PRIORITÁRIO" },
];

export default function NeuralSearchBrain() {
  const [pointer, setPointer] = React.useState({ x: 0, y: 0 });
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(motion.matches);
    sync();
    motion.addEventListener?.("change", sync);

    const onPointerMove = (event: PointerEvent) => {
      const x = event.clientX / Math.max(1, window.innerWidth) - 0.5;
      const y = event.clientY / Math.max(1, window.innerHeight) - 0.5;
      setPointer({ x, y });
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      motion.removeEventListener?.("change", sync);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  const farX = reduceMotion ? 0 : pointer.x * 8;
  const farY = reduceMotion ? 0 : pointer.y * 5;
  const midX = reduceMotion ? 0 : pointer.x * 18;
  const midY = reduceMotion ? 0 : pointer.y * 11;
  const nearX = reduceMotion ? 0 : pointer.x * 30;
  const nearY = reduceMotion ? 0 : pointer.y * 18;

  return (
    <div className="auditseo-universe-root pointer-events-none absolute left-1/2 top-1/2 z-0 h-[calc(100%+250px)] w-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-[#050302]" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_44%,rgba(191,125,50,.17),transparent_27%),radial-gradient(circle_at_45%_13%,rgba(150,91,39,.12),transparent_22%),linear-gradient(115deg,#040302_0%,#090604_45%,#050302_100%)]" />

      <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <radialGradient id="goldCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffdf7" />
            <stop offset="10%" stopColor="#fff0ca" />
            <stop offset="32%" stopColor="#f2b75c" stopOpacity=".92" />
            <stop offset="68%" stopColor="#bd6e22" stopOpacity=".28" />
            <stop offset="100%" stopColor="#8a4d1e" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="planetGold" cx="32%" cy="26%" r="72%">
            <stop offset="0%" stopColor="#c98d4f" />
            <stop offset="16%" stopColor="#7f4b2b" />
            <stop offset="58%" stopColor="#24140d" />
            <stop offset="100%" stopColor="#050302" />
          </radialGradient>
          <radialGradient id="planetDark" cx="28%" cy="24%" r="74%">
            <stop offset="0%" stopColor="#765238" />
            <stop offset="28%" stopColor="#2b1d15" />
            <stop offset="100%" stopColor="#060403" />
          </radialGradient>
          <linearGradient id="brainLine" x1="1010" y1="230" x2="1430" y2="590">
            <stop stopColor="#ffe5b4" />
            <stop offset=".44" stopColor="#eaa353" />
            <stop offset="1" stopColor="#9d5729" />
          </linearGradient>
          <linearGradient id="horizon" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#bd7c3c" stopOpacity=".62" />
            <stop offset=".18" stopColor="#7d431e" stopOpacity=".28" />
            <stop offset="1" stopColor="#090503" stopOpacity="0" />
          </linearGradient>
          <filter id="softGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="bigGlow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="galaxyBlur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.2" />
          </filter>
        </defs>

        <g style={{ transform: `translate(${farX}px, ${farY}px)`, transition: "transform 900ms cubic-bezier(.2,.8,.2,1)" }}>
          {STAR_FIELD.map((star, index) => (
            <circle key={index} className="universe-star" cx={star.x} cy={star.y} r={star.r} fill="#f5d7a4" opacity={star.opacity} style={{ animationDelay: star.delay, animationDuration: star.duration }} />
          ))}
        </g>

        <g className="galaxy-spin" style={{ transformOrigin: "725px 132px" }}>
          <ellipse cx="725" cy="132" rx="146" ry="55" stroke="#c9833e" strokeOpacity=".08" strokeWidth="18" transform="rotate(-12 725 132)" filter="url(#galaxyBlur)" />
          <path d="M600 142 C646 61 744 47 815 95 C862 127 844 179 797 192 C741 207 682 172 697 134 C710 101 758 96 781 120 C803 143 778 164 753 158" stroke="#e0a35c" strokeOpacity=".27" strokeWidth="13" strokeLinecap="round" filter="url(#galaxyBlur)" />
          <path d="M579 112 C648 23 790 23 867 94" stroke="#f3c078" strokeOpacity=".16" strokeWidth="5" strokeLinecap="round" />
          <path d="M614 180 C682 223 807 218 866 149" stroke="#b66a2c" strokeOpacity=".15" strokeWidth="6" strokeLinecap="round" />
          <circle cx="748" cy="125" r="7" fill="#fff5da" opacity=".84" filter="url(#softGlow)" />
        </g>

        <g style={{ transform: `translate(${midX * .38}px, ${midY * .38}px)`, transition: "transform 700ms cubic-bezier(.2,.8,.2,1)" }}>
          <g className="planet-float-a">
            <circle cx="527" cy="125" r="35" fill="url(#planetGold)" />
            <ellipse cx="527" cy="128" rx="51" ry="12" stroke="#d39752" strokeOpacity=".22" strokeWidth="2" transform="rotate(-17 527 128)" />
            <path d="M508 104c18 5 28 22 35 43M498 123c24-2 42 5 56 18" stroke="#e6b170" strokeOpacity=".18" strokeWidth="2" />
          </g>
          <g className="planet-float-b">
            <circle cx="1620" cy="166" r="104" fill="url(#planetDark)" />
            <path d="M1542 128c54-18 106-16 157 12M1531 169c64-10 124-5 177 17" stroke="#bd7b3c" strokeOpacity=".18" strokeWidth="4" />
          </g>
          <circle cx="420" cy="52" r="13" fill="url(#planetDark)" />
          <circle cx="791" cy="278" r="9" fill="url(#planetDark)" opacity=".8" />
        </g>

        <g className="brain-orbits" style={{ transform: `translate(${midX}px, ${midY}px)`, transition: "transform 650ms cubic-bezier(.2,.8,.2,1)" }}>
          <ellipse cx="1228" cy="405" rx="324" ry="111" stroke="#d58c3f" strokeOpacity=".4" strokeWidth="1.2" transform="rotate(-12 1228 405)" />
          <ellipse cx="1228" cy="405" rx="390" ry="151" stroke="#c37932" strokeOpacity=".27" strokeWidth="1" transform="rotate(10 1228 405)" />
          <ellipse cx="1228" cy="405" rx="454" ry="201" stroke="#bd6e2a" strokeOpacity=".18" strokeWidth="1" transform="rotate(-21 1228 405)" />
          {ORBITERS.map((orbit, index) => (
            <g key={index} className="orbiter" style={{ transformOrigin: "1228px 405px", animationDuration: `${orbit.speed}s`, animationDelay: `${orbit.phase}s`, transform: `rotate(${orbit.tilt}deg)` }}>
              <circle cx={1228 + orbit.rx} cy="405" r={orbit.size} fill="#d99a55" opacity=".72" filter="url(#softGlow)" />
            </g>
          ))}
        </g>

        <g className="brain-float" style={{ transform: `translate(${nearX}px, ${nearY}px)`, transition: "transform 520ms cubic-bezier(.2,.8,.2,1)" }}>
          <ellipse cx="1228" cy="407" rx="260" ry="220" fill="#b66b2a" opacity=".045" filter="url(#bigGlow)" />
          <path d="M1025 392 C988 342 1017 281 1070 278 C1081 227 1141 204 1185 234 C1223 201 1284 210 1306 252 C1354 237 1404 268 1401 318 C1444 340 1456 394 1428 430 C1451 476 1418 529 1373 531 C1356 578 1297 602 1252 574 C1212 604 1148 590 1128 546 C1077 549 1039 508 1048 461 C1017 446 1008 418 1025 392Z" stroke="url(#brainLine)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity=".92" filter="url(#softGlow)" />
          <path d="M1189 236 C1163 273 1167 310 1192 336 C1164 358 1159 395 1178 425 C1157 456 1168 497 1196 518 M1259 230 C1284 263 1282 302 1260 330 C1290 351 1298 386 1282 418 C1308 448 1301 490 1272 519 M1098 283 C1125 297 1138 324 1127 351 C1152 363 1161 390 1151 415 C1171 437 1167 463 1152 482 M1354 273 C1327 292 1317 320 1330 347 C1307 360 1301 389 1313 414 C1294 435 1298 463 1316 480" stroke="#f0c585" strokeOpacity=".5" strokeWidth="1.8" strokeLinecap="round" />

          {BRAIN_LINKS.map(([from, to], index) => {
            const a = BRAIN_NODES[from];
            const b = BRAIN_NODES[to];
            return <line key={index} className="brain-link" x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#e1a45c" strokeOpacity={0.28 + (index % 5) * 0.06} strokeWidth={index % 7 === 0 ? 1.6 : 1} style={{ animationDelay: `${-(index % 9) * .5}s` }} />;
          })}

          {BRAIN_NODES.map(([x, y], index) => (
            <g key={index} className="brain-node" style={{ animationDelay: `${-(index % 11) * .37}s`, transformOrigin: `${x}px ${y}px` }}>
              <circle cx={x} cy={y} r={index % 6 === 0 ? 6.5 : index % 3 === 0 ? 4.4 : 3} fill={index % 5 === 0 ? "#ffe7b8" : "#cb8542"} opacity={index % 4 === 0 ? .95 : .72} filter={index % 6 === 0 ? "url(#softGlow)" : undefined} />
              {index % 6 === 0 ? <circle cx={x} cy={y} r="13" stroke="#d58e49" strokeOpacity=".28" /> : null}
            </g>
          ))}

          {DUST.map((dust, index) => <circle key={`dust-${index}`} className="brain-dust" cx={dust.x} cy={dust.y} r={dust.r} fill="#e0a05a" opacity={dust.opacity} style={{ animationDelay: `${-(index % 13) * .45}s` }} />)}

          <circle className="brain-core" cx="1228" cy="405" r="66" fill="url(#goldCore)" opacity=".34" filter="url(#bigGlow)" />
          <circle className="brain-core" cx="1228" cy="405" r="22" fill="#fffaf0" opacity=".98" filter="url(#softGlow)" />
          <circle className="brain-core-ring" cx="1228" cy="405" r="44" stroke="#f0b96f" strokeOpacity=".35" strokeWidth="1.2" />

          <circle r="3.6" fill="#fff6dc" filter="url(#softGlow)"><animateMotion path="M1032 355 C1100 330 1155 360 1228 405" dur="7.5s" repeatCount="indefinite" /></circle>
          <circle r="3.2" fill="#ffc879" filter="url(#softGlow)"><animateMotion path="M1397 469 C1340 485 1287 460 1228 405" dur="8.7s" begin="-3s" repeatCount="indefinite" /></circle>
          <circle r="2.8" fill="#ffe8bd" filter="url(#softGlow)"><animateMotion path="M1138 252 C1170 308 1189 350 1228 405" dur="9.6s" begin="-6s" repeatCount="indefinite" /></circle>
        </g>

        <g className="scene-labels" fill="#f0d2a7" fontSize="12" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontWeight="700" letterSpacing="3.2" opacity=".88">
          <text x="914" y="244">CONTEÚDO</text>
          <text x="1370" y="204">AUTORIDADE</text>
          <text x="1470" y="343">SEO TÉCNICO</text>
          <text x="1490" y="478">SEARCH AI</text>
          <text x="920" y="525">REPUTAÇÃO</text>
          <text x="941" y="612">ESTRATÉGIA</text>
          <text x="1381" y="657">RESULTADOS</text>
        </g>

        <g style={{ transform: `translate(${farX * .4}px, ${farY * .4}px)`, transition: "transform 900ms cubic-bezier(.2,.8,.2,1)" }}>
          <ellipse cx="860" cy="955" rx="815" ry="205" fill="#090503" stroke="#d18b43" strokeOpacity=".26" strokeWidth="2" />
          <ellipse cx="860" cy="925" rx="760" ry="142" fill="url(#horizon)" opacity=".62" />
          <path d="M83 914 C337 850 555 845 777 884 C987 921 1199 889 1590 825" stroke="#db9650" strokeOpacity=".22" strokeWidth="1.4" />
          <path d="M129 929 C410 867 627 870 841 910 C1072 951 1284 907 1588 853" stroke="#f0b96f" strokeOpacity=".09" strokeWidth="1" />
          {Array.from({ length: 34 }, (_, index) => (
            <circle key={`city-${index}`} cx={190 + ((index * 83) % 1270)} cy={858 + ((index * 37) % 58)} r={index % 5 === 0 ? 2.2 : 1.2} fill="#e7a85d" opacity={0.25 + (index % 4) * .1} filter={index % 5 === 0 ? "url(#softGlow)" : undefined} />
          ))}
        </g>

        <g className="asteroid-a" style={{ transform: `translate(${nearX * .55}px, ${nearY * .55}px)`, transition: "transform 560ms cubic-bezier(.2,.8,.2,1)" }}>
          <path d="M768 794l18-29 33-8 22 20-5 34-27 20-34-8Z" fill="#1c100a" stroke="#a25e29" strokeOpacity=".35" />
          <path d="M1522 724l14-19 25-7 22 13 4 25-17 20-27-1-20-14Z" fill="#1c100a" stroke="#a25e29" strokeOpacity=".28" />
          <path d="M86 697l19-28 36-6 24 22-4 33-31 18-34-11Z" fill="#160d08" stroke="#a25e29" strokeOpacity=".24" />
        </g>

        <g className="observer" transform="translate(1128 727)">
          <ellipse cx="0" cy="-25" rx="18" ry="22" fill="#060403" stroke="#6f4022" strokeOpacity=".5" />
          <path d="M-27 10 C-25-6 -13-14 0-14 C15-14 26-4 28 12 L31 89 C22 113 12 124 0 125 C-13 125-23 113-31 89Z" fill="#050302" stroke="#694020" strokeOpacity=".45" />
          <path d="M-17 40 L-34 93 M18 40 L35 94" stroke="#050302" strokeWidth="13" strokeLinecap="round" />
          <path d="M-10 119 L-15 175 M11 119 L17 175" stroke="#050302" strokeWidth="15" strokeLinecap="round" />
        </g>
      </svg>

      <div className="hero-visual-copy pointer-events-auto absolute left-[4.7vw] top-[17.2%] z-20 hidden w-[44vw] max-w-[710px] lg:block" aria-hidden="true">
        <div className="mb-8 font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-[#d29a57]">SEARCH INTELLIGENCE PARA EMPRESAS</div>
        <div className="font-display text-[clamp(50px,4.15vw,70px)] font-bold leading-[.99] tracking-[-.05em] text-[#f7f4f0]">
          <span className="block">Antes de investir em</span>
          <span className="block">mais SEO, conteúdo</span>
          <span className="block">ou IA, descubra onde</span>
          <span className="block">sua presença</span>
          <span className="block text-[#d3a062]">realmente quebra.</span>
        </div>
        <p className="mt-7 max-w-[650px] text-[clamp(15px,1.05vw,18px)] leading-[1.62] text-[#f2ece5]/90">
          A AUDITSEO investiga em qual etapa sua empresa perde capacidade de ser descoberta, compreendida, validada, citada ou escolhida. Depois transforma a evidência em um roadmap coordenado, com prioridades, responsáveis e critérios de validação.
        </p>
        <p className="mt-4 max-w-[650px] text-[13px] leading-[1.65] text-[#ded2c5]/66">
          SEO técnico, conteúdo, autoridade de entidade, reputação e Search AI entram apenas quando o diagnóstico mostra que são parte da causa ou da solução.
        </p>
        <div className="mt-7 flex gap-4">
          <a href="/diagnostico" className="group inline-flex min-h-[56px] items-center justify-center gap-5 rounded-full bg-[linear-gradient(100deg,#d6a15f,#c98d48)] px-8 text-[14px] font-bold text-white shadow-[0_14px_50px_rgba(181,119,52,.24)] transition hover:-translate-y-0.5 hover:brightness-110">
            Diagnosticar minha empresa <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="/blog/framework-crawl-index-retrieve-understand-trust-cite" className="group inline-flex min-h-[56px] items-center justify-center gap-5 rounded-full border border-[#c99656]/70 bg-black/20 px-8 text-[14px] font-semibold text-[#f4eee7] backdrop-blur-sm transition hover:border-[#dfae6c] hover:bg-[#c99656]/10">
            Ver o framework de diagnóstico <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div className="hero-features pointer-events-none absolute bottom-[5.2%] left-[4.7vw] z-20 hidden items-center lg:flex">
        {FEATURE_ITEMS.map((item, index) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={item.title}>
              {index > 0 ? <span className="mx-7 h-11 w-px bg-white/20" /> : null}
              <div className="flex items-center gap-4 text-[#edc98e]">
                <Icon size={28} strokeWidth={1.5} />
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[.17em] text-[#f2ece5]">{item.title}</div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-[.14em] text-[#f2ece5]/66">{item.subtitle}</div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="absolute bottom-[3.7%] right-[5.2vw] z-20 hidden font-mono text-[9px] font-semibold uppercase tracking-[.26em] text-[#c99051]/75 xl:block">DADOS · ESTRATÉGIA · RESULTADOS REAIS</div>

      <style>{`
        @keyframes starTwinkle { 0%,100% { opacity:.16; transform:scale(.75) } 48% { opacity:.95; transform:scale(1.65) } 72% { opacity:.38; transform:scale(1) } }
        @keyframes galaxyRotate { to { transform:rotate(360deg) } }
        @keyframes brainFloat { 0%,100% { transform:translateY(-3px) rotate(-.18deg) } 50% { transform:translateY(7px) rotate(.22deg) } }
        @keyframes brainPulse { 0%,100% { opacity:.66; transform:scale(.96) } 50% { opacity:1; transform:scale(1.07) } }
        @keyframes linkPulse { 0%,100% { opacity:.22 } 50% { opacity:.72 } }
        @keyframes dustTwinkle { 0%,100% { opacity:.08 } 50% { opacity:.48 } }
        @keyframes orbitSpin { to { transform:rotate(360deg) } }
        @keyframes planetFloatA { 0%,100% { transform:translateY(0) rotate(0deg) } 50% { transform:translateY(-10px) rotate(2deg) } }
        @keyframes planetFloatB { 0%,100% { transform:translate(0,0) } 50% { transform:translate(-9px,6px) } }
        @keyframes asteroidDrift { 0%,100% { transform:translate(0,0) rotate(0deg) } 50% { transform:translate(9px,-7px) rotate(5deg) } }
        @keyframes observerBreath { 0%,100% { transform:translate(1128px,727px) translateY(0) } 50% { transform:translate(1128px,727px) translateY(-3px) } }
        .universe-star { transform-box:fill-box; transform-origin:center; animation:starTwinkle ease-in-out infinite; }
        .galaxy-spin { animation:galaxyRotate 95s linear infinite; transform-box:fill-box; }
        .brain-float > path:first-of-type { filter:url(#softGlow); }
        .brain-link { animation:linkPulse 5.4s ease-in-out infinite; }
        .brain-node { animation:brainPulse 4.2s ease-in-out infinite; transform-box:fill-box; }
        .brain-core { transform-box:fill-box; transform-origin:1228px 405px; animation:brainPulse 3.4s ease-in-out infinite; }
        .brain-core-ring { transform-box:fill-box; transform-origin:1228px 405px; animation:brainPulse 4.6s ease-in-out infinite reverse; }
        .brain-dust { animation:dustTwinkle 6.2s ease-in-out infinite; }
        .orbiter { animation:orbitSpin linear infinite; transform-box:view-box; }
        .planet-float-a { transform-box:fill-box; transform-origin:center; animation:planetFloatA 13s ease-in-out infinite; }
        .planet-float-b { transform-box:fill-box; transform-origin:center; animation:planetFloatB 17s ease-in-out infinite; }
        .asteroid-a { animation:asteroidDrift 15s ease-in-out infinite; transform-box:fill-box; }
        .observer { animation:observerBreath 7s ease-in-out infinite; }

        @media (min-width:1024px) {
          #inicio > .relative.z-10 > div:first-child { opacity:0 !important; pointer-events:none !important; }
          #inicio > .relative.z-10 { max-width:1320px; }
        }
        @media (max-width:1023px) {
          .auditseo-universe-root { opacity:.82; }
          .auditseo-universe-root svg { transform:translateX(18%) scale(1.28); transform-origin:center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .universe-star,.galaxy-spin,.brain-link,.brain-node,.brain-core,.brain-core-ring,.brain-dust,.orbiter,.planet-float-a,.planet-float-b,.asteroid-a,.observer { animation:none !important; }
        }
      `}</style>
    </div>
  );
}
