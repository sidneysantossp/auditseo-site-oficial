import React from "react";

type Node = {
  x: number;
  y: number;
  r: number;
  tier: "core" | "primary" | "secondary";
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

const PARTICLES = Array.from({ length: 58 }, (_, index) => {
  const angle = index * 2.399963229728653;
  const radius = 45 + index * 4.9;
  return {
    x: 410 + Math.cos(angle) * radius,
    y: 255 + Math.sin(angle) * radius * 0.7,
    r: 0.45 + (index % 3) * 0.25,
    opacity: 0.08 + (index % 5) * 0.035,
  };
});

const AXES = [
  ["Descoberta", "Crawl · Index · Retrieve"],
  ["Compreensão", "Entidades · Intenção · Semântica"],
  ["Confiança", "Evidências · Reputação · Fontes"],
  ["Evolução", "Medição · Prioridade · Learning Loop"],
];

export default function NeuralSearchBrain() {
  const [mouseOffset, setMouseOffset] = React.useState({ x: 0, y: 0 });
  const [isCoreHovered, setIsCoreHovered] = React.useState(false);

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
      aria-label="Visualização conceitual do ecossistema de Search Intelligence da AUDITSEO"
    >
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: "720px",
          height: "460px",
          right: "10px",
          top: "50%",
          transform: `translateY(-50%) translate(${mouseOffset.x * 0.35}px, ${mouseOffset.y * 0.35}px)`,
          transition: "transform 600ms cubic-bezier(0.15,0.85,0.3,1)",
          background: "radial-gradient(circle at 52% 48%, rgba(178,132,83,0.22) 0%, rgba(178,132,83,0.11) 24%, rgba(140,97,60,0.05) 46%, transparent 74%)",
          filter: "blur(30px)",
        }}
      />

      <svg className="relative z-10 h-full w-full overflow-visible" viewBox="0 0 760 520" fill="none" aria-hidden="true">
        <defs>
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
        </defs>

        <g
          style={{
            transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
            transformOrigin: "410px 255px",
            transition: "transform 600ms cubic-bezier(0.15,0.85,0.3,1)",
          }}
        >
          <ellipse cx="410" cy="255" rx="205" ry="84" stroke="rgba(178,132,83,.16)" strokeWidth="0.9" strokeDasharray="3 16" transform="rotate(-13 410 255)" />
          <ellipse cx="410" cy="255" rx="270" ry="126" stroke="rgba(224,211,195,.08)" strokeWidth="0.8" strokeDasharray="2 24" transform="rotate(18 410 255)" />

          {PARTICLES.map((particle, index) => (
            <circle key={`particle-${index}`} cx={particle.x} cy={particle.y} r={particle.r} fill="#e0d3c3" opacity={particle.opacity} />
          ))}

          <g opacity="0.58">
            {CONNECTIONS.map(([from, to], index) => {
              const a = NODES[from];
              const b = NODES[to];
              if (!a || !b) return null;
              return (
                <line
                  key={`connection-${index}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={index % 4 === 0 ? "#b28453" : "#e0d3c3"}
                  strokeOpacity={index % 4 === 0 ? 0.34 : 0.18}
                  strokeWidth={index % 5 === 0 ? 1.1 : 0.75}
                />
              );
            })}
          </g>

          {NODES.map((node, index) => (
            <circle
              key={`node-${index}`}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.tier === "core" ? "#ffffff" : index % 3 === 0 ? "#b28453" : "#e0d3c3"}
              opacity={node.tier === "secondary" ? 0.56 : 0.9}
              filter={node.tier === "core" || (node.tier === "primary" && index % 4 === 0) ? "url(#auditseo-glow)" : undefined}
            />
          ))}

          <g
            onMouseEnter={() => setIsCoreHovered(true)}
            onMouseLeave={() => setIsCoreHovered(false)}
            className="cursor-pointer"
          >
            <circle cx="410" cy="255" r="82" fill="url(#auditseo-core)" opacity="0.5" />
            <circle cx="410" cy="255" r="45" fill="url(#auditseo-core)" opacity="0.72" />
            <circle cx="410" cy="255" r="14" fill="#f8f8f8" filter="url(#auditseo-glow)" />
            <circle cx="410" cy="255" r="70" fill="transparent" />
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
    </div>
  );
}
