import React from "react";

type Node = {
  x: number;
  y: number;
  r: number;
  tier: "core" | "primary" | "secondary";
};

type FlowPath = {
  d: string;
  duration: string;
  begin: string;
  radius: number;
  color: string;
  opacity: number;
};

const NODES: Node[] = [
  { x: 410, y: 255, r: 5.2, tier: "core" },
  { x: 350, y: 226, r: 3.2, tier: "primary" },
  { x: 468, y: 224, r: 3.2, tier: "primary" },
  { x: 382, y: 314, r: 3.0, tier: "primary" },
  { x: 482, y: 314, r: 3.0, tier: "primary" },
  { x: 315, y: 282, r: 2.7, tier: "primary" },
  { x: 525, y: 276, r: 2.7, tier: "primary" },
  { x: 334, y: 168, r: 2.5, tier: "primary" },
  { x: 455, y: 162, r: 2.5, tier: "primary" },
  { x: 560, y: 204, r: 2.5, tier: "primary" },
  { x: 246, y: 230, r: 2.3, tier: "primary" },
  { x: 604, y: 336, r: 2.3, tier: "primary" },
  { x: 300, y: 368, r: 2.3, tier: "primary" },
  { x: 464, y: 392, r: 2.3, tier: "primary" },
  { x: 214, y: 312, r: 2.2, tier: "secondary" },
  { x: 540, y: 140, r: 2.2, tier: "secondary" },
  { x: 652, y: 240, r: 2.1, tier: "secondary" },
  { x: 612, y: 420, r: 2.1, tier: "secondary" },
  { x: 365, y: 422, r: 2.1, tier: "secondary" },
  { x: 180, y: 186, r: 2.0, tier: "secondary" },
  { x: 705, y: 320, r: 2.0, tier: "secondary" },
  { x: 250, y: 110, r: 2.0, tier: "secondary" },
  { x: 520, y: 95, r: 2.0, tier: "secondary" },
  { x: 690, y: 150, r: 2.0, tier: "secondary" },
  { x: 145, y: 360, r: 2.0, tier: "secondary" },
  { x: 570, y: 455, r: 2.0, tier: "secondary" },
  { x: 370, y: 260, r: 1.5, tier: "secondary" },
  { x: 438, y: 275, r: 1.5, tier: "secondary" },
  { x: 398, y: 210, r: 1.5, tier: "secondary" },
  { x: 430, y: 205, r: 1.5, tier: "secondary" },
  { x: 330, y: 320, r: 1.4, tier: "secondary" },
  { x: 500, y: 345, r: 1.4, tier: "secondary" },
  { x: 285, y: 260, r: 1.4, tier: "secondary" },
  { x: 550, y: 260, r: 1.4, tier: "secondary" },
];

const CONNECTIONS: Array<[number, number]> = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 26], [0, 27], [0, 28], [0, 29],
  [1, 5], [1, 7], [1, 9], [1, 26], [1, 28],
  [2, 6], [2, 8], [2, 9], [2, 27], [2, 29],
  [3, 5], [3, 11], [3, 12], [3, 30],
  [4, 6], [4, 11], [4, 13], [4, 31],
  [5, 9], [5, 14], [5, 32],
  [6, 10], [6, 11], [6, 33],
  [7, 21], [7, 8],
  [8, 15], [8, 22],
  [9, 10], [9, 19],
  [10, 15], [10, 16], [10, 23],
  [11, 17], [11, 20],
  [12, 18], [12, 24],
  [13, 17], [13, 25],
  [14, 24], [15, 22], [16, 20], [17, 25], [18, 25], [21, 22], [23, 16],
];

const PARTICLES = Array.from({ length: 72 }, (_, index) => {
  const angle = index * 2.399963229728653;
  const radius = 38 + index * 4.15;
  return {
    x: 410 + Math.cos(angle) * radius,
    y: 255 + Math.sin(angle) * radius * 0.7,
    r: 0.42 + (index % 3) * 0.25,
    opacity: 0.07 + (index % 5) * 0.035,
    duration: 5.5 + (index % 7) * 1.3,
    delay: (index % 19) * -0.47,
  };
});

const FLOW_PATHS: FlowPath[] = [
  { d: "M 145 360 L 214 312 L 315 282 L 350 226 L 410 255", duration: "10.5s", begin: "-1.8s", radius: 2.3, color: "#f8f8f8", opacity: 0.9 },
  { d: "M 250 110 L 334 168 L 350 226 L 410 255", duration: "12s", begin: "-7.2s", radius: 1.8, color: "#b28453", opacity: 0.92 },
  { d: "M 520 95 L 455 162 L 468 224 L 410 255", duration: "11.2s", begin: "-3.7s", radius: 2.1, color: "#e0d3c3", opacity: 0.86 },
  { d: "M 690 150 L 652 240 L 525 276 L 410 255", duration: "13.5s", begin: "-10s", radius: 2.15, color: "#ffffff", opacity: 0.88 },
  { d: "M 705 320 L 604 336 L 482 314 L 410 255", duration: "14.4s", begin: "-5.4s", radius: 1.85, color: "#b28453", opacity: 0.9 },
  { d: "M 570 455 L 464 392 L 382 314 L 410 255", duration: "12.8s", begin: "-8.9s", radius: 2.2, color: "#f8f8f8", opacity: 0.86 },
];

const AXES = [
  ["Descoberta", "Crawl · Index · Retrieve"],
  ["Compreensão", "Entidades · Intenção · Semântica"],
  ["Confiança", "Evidências · Reputação · Fontes"],
  ["Evolução", "Medição · Prioridade · Learning Loop"],
];

export default function NeuralSearchBrain() {
  const [mouseOffset, setMouseOffset] = React.useState({ x: 0, y: 0 });
  const [isCoreHovered, setIsCoreHovered] = React.useState(false);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(query.matches);
    sync();
    query.addEventListener?.("change", sync);
    return () => query.removeEventListener?.("change", sync);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseOffset({ x: x * 12, y: y * 12 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setMouseOffset({ x: 0, y: 0 });
        setIsCoreHovered(false);
      }}
      className="group/constellation relative mx-auto flex aspect-[760/520] w-full max-w-[760px] select-none items-center justify-center overflow-visible p-1"
      aria-label="Visualização conceitual animada do ecossistema de Search Intelligence da AUDITSEO"
    >
      <div
        className="auditseo-nebula pointer-events-none absolute rounded-full"
        style={{
          width: "720px",
          height: "460px",
          right: "10px",
          top: "50%",
          transform: `translateY(-50%) translate(${mouseOffset.x * 0.35}px, ${mouseOffset.y * 0.35}px)`,
          transition: "transform 600ms cubic-bezier(0.15,0.85,0.3,1)",
          background: "radial-gradient(circle at 52% 48%, rgba(178,132,83,0.24) 0%, rgba(178,132,83,0.115) 24%, rgba(140,97,60,0.055) 46%, transparent 74%)",
          filter: "blur(30px)",
        }}
      />

      <svg className="relative z-10 h-full w-full overflow-visible" viewBox="0 0 760 520" fill="none" aria-hidden="true">
        <defs>
          <style>{`
            @keyframes auditseoFloat {
              0%, 100% { transform: translateY(-2px) rotate(-0.22deg); }
              50% { transform: translateY(4px) rotate(0.26deg); }
            }
            @keyframes auditseoTwinkle {
              0%, 100% { opacity: var(--base-opacity); }
              45% { opacity: calc(var(--base-opacity) * 3.2); }
              70% { opacity: calc(var(--base-opacity) * 1.35); }
            }
            @keyframes auditseoLinePulse {
              0%, 100% { stroke-opacity: var(--line-opacity); }
              50% { stroke-opacity: calc(var(--line-opacity) * 2.1); }
            }
            @keyframes auditseoNodePulse {
              0%, 100% { opacity: var(--node-opacity); }
              50% { opacity: 1; }
            }
            @keyframes auditseoCorePulse {
              0%, 100% { opacity: .72; transform: scale(.96); }
              50% { opacity: 1; transform: scale(1.07); }
            }
            @keyframes auditseoOrbitDash {
              to { stroke-dashoffset: -76; }
            }
            .auditseo-float {
              transform-box: fill-box;
              transform-origin: center;
              animation: auditseoFloat 10s ease-in-out infinite;
            }
            .auditseo-particle {
              animation: auditseoTwinkle var(--twinkle-duration) ease-in-out var(--twinkle-delay) infinite;
            }
            .auditseo-line {
              animation: auditseoLinePulse var(--line-duration) ease-in-out var(--line-delay) infinite;
            }
            .auditseo-node {
              animation: auditseoNodePulse var(--node-duration) ease-in-out var(--node-delay) infinite;
            }
            .auditseo-core-pulse {
              transform-box: fill-box;
              transform-origin: center;
              animation: auditseoCorePulse 3.6s ease-in-out infinite;
            }
            .auditseo-orbit {
              animation: auditseoOrbitDash 15s linear infinite;
            }
            .auditseo-orbit-slow {
              animation-duration: 25s;
              animation-direction: reverse;
            }
            @media (prefers-reduced-motion: reduce) {
              .auditseo-float,
              .auditseo-particle,
              .auditseo-line,
              .auditseo-node,
              .auditseo-core-pulse,
              .auditseo-orbit {
                animation: none !important;
              }
            }
          `}</style>
          <radialGradient id="auditseo-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="28%" stopColor="#e0d3c3" stopOpacity="0.95" />
            <stop offset="62%" stopColor="#b28453" stopOpacity="0.52" />
            <stop offset="100%" stopColor="#b28453" stopOpacity="0" />
          </radialGradient>
          <filter id="auditseo-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="auditseo-flow-glow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="2.2" result="flowBlur" />
            <feMerge>
              <feMergeNode in="flowBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g
          style={{
            transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
            transformOrigin: "410px 255px",
            transition: "transform 600ms cubic-bezier(0.15,0.85,0.3,1)",
          }}
        >
          <g className="auditseo-float">
            <ellipse className="auditseo-orbit" cx="410" cy="255" rx="205" ry="84" stroke="rgba(178,132,83,.16)" strokeWidth="0.9" strokeDasharray="3 16" transform="rotate(-13 410 255)" />
            <ellipse className="auditseo-orbit auditseo-orbit-slow" cx="410" cy="255" rx="270" ry="126" stroke="rgba(224,211,195,.08)" strokeWidth="0.8" strokeDasharray="2 24" transform="rotate(18 410 255)" />

            {PARTICLES.map((particle, index) => (
              <circle
                key={`particle-${index}`}
                className="auditseo-particle"
                cx={particle.x}
                cy={particle.y}
                r={particle.r}
                fill={index % 9 === 0 ? "#b28453" : "#e0d3c3"}
                opacity={particle.opacity}
                style={{
                  ["--base-opacity" as string]: particle.opacity,
                  ["--twinkle-duration" as string]: `${particle.duration}s`,
                  ["--twinkle-delay" as string]: `${particle.delay}s`,
                }}
              />
            ))}

            <g opacity="0.62">
              {CONNECTIONS.map(([from, to], index) => {
                const a = NODES[from];
                const b = NODES[to];
                if (!a || !b) return null;
                const baseOpacity = index % 4 === 0 ? 0.34 : 0.18;
                return (
                  <line
                    key={`connection-${index}`}
                    className="auditseo-line"
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke={index % 4 === 0 ? "#b28453" : "#e0d3c3"}
                    strokeOpacity={baseOpacity}
                    strokeWidth={index % 5 === 0 ? 1.1 : 0.75}
                    style={{
                      ["--line-opacity" as string]: baseOpacity,
                      ["--line-duration" as string]: `${4.8 + (index % 6) * 0.85}s`,
                      ["--line-delay" as string]: `${(index % 13) * -0.43}s`,
                    }}
                  />
                );
              })}
            </g>

            {NODES.map((node, index) => {
              const nodeOpacity = node.tier === "secondary" ? 0.56 : 0.9;
              return (
                <circle
                  key={`node-${index}`}
                  className="auditseo-node"
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  fill={node.tier === "core" ? "#ffffff" : index % 3 === 0 ? "#b28453" : "#e0d3c3"}
                  opacity={nodeOpacity}
                  filter={node.tier === "core" || (node.tier === "primary" && index % 4 === 0) ? "url(#auditseo-glow)" : undefined}
                  style={{
                    ["--node-opacity" as string]: nodeOpacity,
                    ["--node-duration" as string]: `${3.6 + (index % 5) * 0.9}s`,
                    ["--node-delay" as string]: `${(index % 11) * -0.37}s`,
                  }}
                />
              );
            })}

            {!reduceMotion && FLOW_PATHS.map((flow, index) => (
              <circle
                key={`flow-${index}`}
                r={flow.radius}
                fill={flow.color}
                opacity={flow.opacity}
                filter="url(#auditseo-flow-glow)"
              >
                <animateMotion path={flow.d} dur={flow.duration} begin={flow.begin} repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.32 0 0.15 1" />
              </circle>
            ))}

            <g
              onMouseEnter={() => setIsCoreHovered(true)}
              onMouseLeave={() => setIsCoreHovered(false)}
              className="cursor-pointer"
            >
              <g className="auditseo-core-pulse">
                <circle cx="410" cy="255" r="82" fill="url(#auditseo-core)" opacity="0.5" />
                <circle cx="410" cy="255" r="45" fill="url(#auditseo-core)" opacity="0.72" />
              </g>
              <circle cx="410" cy="255" r="14" fill="#f8f8f8" filter="url(#auditseo-glow)" />
              <circle cx="410" cy="255" r="70" fill="transparent" />
            </g>
          </g>
        </g>
      </svg>

      <div
        className={`pointer-events-none absolute z-20 w-[330px] transition-all duration-500 ${isCoreHovered ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-95 opacity-0"}`}
        style={{ left: "54%", top: "43%", transformOrigin: "bottom center" }}
      >
        <div className="-translate-x-1/2 -translate-y-full rounded-lg border border-[#b28453]/50 bg-[#11100f]/95 p-5 text-left shadow-[0_20px_48px_rgba(178,132,83,0.22)] backdrop-blur-md">
          <div className="mb-3 flex items-center justify-between border-b border-[#b28453]/20 pb-2">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
              VISUALIZAÇÃO CONCEITUAL
            </span>
            <span className="font-mono text-[8px] uppercase tracking-widest text-[#e0d3c3]/60">
              S.I.G.N.A.L.
            </span>
          </div>

          <h4 className="mb-1.5 text-sm font-semibold tracking-wide text-[#f8f8f8]">
            SEARCH INTELLIGENCE ECOSYSTEM
          </h4>
          <p className="mb-4 text-[11px] font-normal leading-[1.55] text-[#e0d3c3]/85">
            Representação visual de como sinais técnicos, intenção, entidades, conteúdo, reputação e evidências se conectam em uma estratégia integrada de busca. Não representa telemetria ou métricas em tempo real.
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[#b28453]/15 pt-3">
            {AXES.map(([label, value]) => (
              <div key={label}>
                <div className="font-mono text-[8px] uppercase tracking-wider text-[#e0d3c3]/50">{label}</div>
                <div className="mt-0.5 font-mono text-[10px] font-semibold leading-[1.35] text-[#b28453]">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes auditseoNebulaDrift {
          0%, 100% { opacity: .82; filter: blur(30px); }
          50% { opacity: 1; filter: blur(36px); }
        }
        .auditseo-nebula {
          animation: auditseoNebulaDrift 9s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .auditseo-nebula { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
