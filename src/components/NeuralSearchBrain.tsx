import React from "react";

// =================================================================
// SEARCH CONSTELLATION VISUAL (NeuralSearchBrain.tsx)
// Elite Abstract Search Intelligence Network Component for AUDITSEO
// =================================================================

const NODES: Record<string, { x: number; y: number }> = {
  // Main nodes (A-Z)
  A: { x: 410, y: 255 },
  B: { x: 350, y: 230 },
  C: { x: 465, y: 225 },
  D: { x: 390, y: 305 },
  E: { x: 475, y: 310 },
  F: { x: 315, y: 280 },
  G: { x: 520, y: 275 },
  H: { x: 335, y: 170 },
  I: { x: 455, y: 165 },
  J: { x: 560, y: 205 },
  K: { x: 245, y: 230 },
  L: { x: 600, y: 335 },
  M: { x: 300, y: 365 },
  N: { x: 460, y: 390 },
  O: { x: 215, y: 310 },
  P: { x: 540, y: 140 },
  Q: { x: 650, y: 240 },
  R: { x: 610, y: 420 },
  S: { x: 365, y: 420 },
  T: { x: 180, y: 185 },
  U: { x: 705, y: 320 },
  V: { x: 250, y: 110 },
  W: { x: 520, y: 95 },
  X: { x: 690, y: 150 },
  Y: { x: 145, y: 360 },
  Z: { x: 570, y: 455 },

  // Secondary nodes (n1-n20)
  n1: { x: 370, y: 260 },
  n2: { x: 438, y: 275 },
  n3: { x: 398, y: 210 },
  n4: { x: 430, y: 205 },
  n5: { x: 330, y: 320 },
  n6: { x: 500, y: 345 },
  n7: { x: 285, y: 260 },
  n8: { x: 550, y: 260 },
  n9: { x: 470, y: 175 },
  n10: { x: 305, y: 190 },
  n11: { x: 590, y: 285 },
  n12: { x: 240, y: 350 },
  n13: { x: 375, y: 355 },
  n14: { x: 520, y: 380 },
  n15: { x: 625, y: 215 },
  n16: { x: 690, y: 270 },
  n17: { x: 210, y: 250 },
  n18: { x: 165, y: 300 },
  n19: { x: 340, y: 120 },
  n20: { x: 480, y: 115 }
};

const CONNECTIONS = [
  ["A", "B"], ["A", "C"], ["A", "D"], ["A", "E"],
  ["A", "n1"], ["A", "n2"], ["A", "n3"], ["A", "n4"],
  ["B", "H"], ["B", "K"], ["B", "F"], ["B", "n10"], ["B", "n3"],
  ["C", "I"], ["C", "G"], ["C", "J"], ["C", "n9"], ["C", "n4"],
  ["D", "M"], ["D", "F"], ["D", "n5"], ["D", "n13"],
  ["E", "G"], ["E", "N"], ["E", "n6"], ["E", "n14"],
  ["F", "K"], ["F", "O"], ["F", "n7"], ["F", "M"],
  ["G", "J"], ["G", "L"], ["G", "n8"], ["G", "n11"],
  ["H", "V"], ["H", "I"], ["H", "n19"], ["H", "n10"],
  ["I", "P"], ["I", "W"], ["I", "n20"], ["I", "n9"],
  ["J", "P"], ["J", "Q"], ["J", "X"], ["J", "n15"],
  ["K", "T"], ["K", "O"], ["K", "n17"],
  ["L", "R"], ["L", "U"], ["L", "n16"], ["L", "n11"],
  ["M", "Y"], ["M", "S"], ["M", "n12"], ["M", "n13"],
  ["N", "Z"], ["N", "R"], ["N", "n14"], ["N", "n6"],
  ["O", "Y"], ["O", "n18"], ["O", "n17"],
  ["P", "W"], ["P", "X"],
  ["Q", "X"], ["Q", "U"],
  ["R", "Z"],
  ["S", "Z"],
  ["n1", "n2"],
  ["n2", "n6"],
  ["n3", "n4"],
  ["n5", "n13"],
  ["n7", "n17"],
  ["n8", "n11"],
  ["n9", "n20"],
  ["n12", "n18"],
  ["n15", "n16"]
];

// Generate exactly 85 deterministic coordinates using the elegant golden angle distribution
const BACKGROUND_PARTICLES = Array.from({ length: 85 }).map((_, i) => {
  const angle = (i * 137.5) * (Math.PI / 180);
  const radius = 22 + (i * 4.3); // distributed softly outwards from the nucleus
  const x = Number((410 + Math.cos(angle) * radius).toFixed(3));
  const y = Number((255 + Math.sin(angle) * radius).toFixed(3));
  
  const size = 0.4 + (i % 3) * 0.3; // radius 0.4px to 1.0px (diameter 0.8px to 2.0px)
  const opacity = 0.08 + (i % 5) * 0.05; // opacity 0.08 to 0.28
  const delay = `${(i * 0.15) % 8}s`;
  const duration = `${6 + (i % 7) * 2}s`;
  const twinkleType = i % 3 === 0 ? "twinkle1" : (i % 3 === 1 ? "twinkle2" : "twinkle3");

  return { x, y, size, opacity, delay, duration, twinkleType };
});

const FLOW_PATHS = [
  { id: 1, r: 2.2, fill: "#e0d3c3", dur: "10.0s", begin: "0", path: "M 245 230 L 350 230 L 410 255", hasGlow: true },
  { id: 2, r: 2.2, fill: "#f8f8f8", dur: "12.5s", begin: "2.5", path: "M 145 360 L 300 365 L 390 305 L 410 255", hasGlow: true },
  { id: 3, r: 2.0, fill: "#e0d3c3", dur: "10.8s", begin: "1.0", path: "M 520 95 L 455 165 L 465 225 L 410 255", hasGlow: true },
  { id: 4, r: 2.2, fill: "#f8f8f8", dur: "13.0s", begin: "4.0", path: "M 610 420 L 600 335 L 520 275 L 410 255", hasGlow: true },
  { id: 5, r: 1.8, fill: "#b28453", dur: "11.8s", begin: "3.0", path: "M 180 185 L 245 230 L 315 280 L 410 255", hasGlow: false },
  { id: 6, r: 2.2, fill: "#e0d3c3", dur: "12.0s", begin: "5.5", path: "M 650 240 L 560 205 L 465 225 L 410 255", hasGlow: true },
  { id: 7, r: 1.8, fill: "#ffffff", dur: "14.0s", begin: "3.5", path: "M 245 230 L 350 230 L 410 255", hasGlow: true, responsiveClass: "hidden sm:inline" },
  { id: 8, r: 2.0, fill: "#b28453", dur: "15.5s", begin: "1.5", path: "M 610 420 L 600 335 L 520 275 L 410 255", hasGlow: true, responsiveClass: "hidden sm:inline" }
];

export default function NeuralSearchBrain() {
  const [mouseOffset, setMouseOffset] = React.useState({ x: 0, y: 0 });
  const [isCoreHovered, setIsCoreHovered] = React.useState(false);
  const [isCoreOnly, setIsCoreOnly] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Smooth responsive factor limiting maximum displacement to ~16px
    const factorX = (x / (rect.width / 2)) * 16;
    const factorY = (y / (rect.height / 2)) * 16;
    setMouseOffset({ x: factorX, y: factorY });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[760/520] max-w-[760px] mx-auto select-none overflow-visible flex items-center justify-center p-1 z-10 group/constellation"
    >
      
      {/* 1. GLOW DE FUNDO (Premium luxurious background backdrop glow & Nebula clouds) */}
      <div 
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "720px",
          height: "460px",
          right: "10px",
          top: "50%",
          transform: `translateY(-50%) translate(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px)`,
          transition: "transform 0.6s cubic-bezier(0.15, 0.85, 0.3, 1)",
          background: "radial-gradient(circle at 52% 48%, rgba(178,132,83,0.22) 0%, rgba(178,132,83,0.12) 20%, rgba(140,97,60,0.06) 45%, transparent 75%)",
          filter: "blur(28px)",
          opacity: 0.95,
          zIndex: 0
        }}
      />

      {/* Primary SVG Constellation System */}
      <svg
        className="w-full h-full block overflow-visible z-10"
        viewBox="0 0 760 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            {`
              @keyframes fadeEntrance {
                0% { opacity: 0; transform: scale(0.98); }
                100% { opacity: 1; transform: scale(1); }
              }
              @keyframes floatGeneralGroup {
                0%, 100% { transform: scale(1.32) translateY(-4px) rotate(-0.5deg); }
                50% { transform: scale(1.32) translateY(4px) rotate(0.5deg); }
              }
              @keyframes nucleusPulse {
                0%, 100% { transform: scale(0.96); opacity: 0.85; }
                50% { transform: scale(1.04); opacity: 1.0; }
              }
              @keyframes linePulse {
                0%, 100% { opacity: 0.35; }
                50% { opacity: 0.95; }
              }
              @keyframes twinkle1 {
                0%, 100% { opacity: 0.12; }
                50% { opacity: 0.85; }
              }
              @keyframes twinkle2 {
                0%, 100% { opacity: 0.90; }
                50% { opacity: 0.20; }
              }
              @keyframes twinkle3 {
                0%, 100% { opacity: 0.30; }
                50% { opacity: 0.95; }
              }
              @keyframes nebulaSlowMotion1 {
                0%, 100% { transform: translate(0, 0) scale(1.0); opacity: 0.7; }
                50% { transform: translate(12px, -8px) scale(1.08); opacity: 0.95; }
              }
              @keyframes nebulaSlowMotion2 {
                0%, 100% { transform: translate(0, 0) scale(1.0); opacity: 0.6; }
                50% { transform: translate(-15px, 12px) scale(0.93); opacity: 0.85; }
              }
              @keyframes orbitSpinClockwise {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              @keyframes badgeOrbit1 {
                0% { transform: translate(0px, 0px); }
                25% { transform: translate(24px, -25px); }
                50% { transform: translate(0px, -52px); }
                75% { transform: translate(-24px, -25px); }
                100% { transform: translate(0px, 0px); }
              }
              @keyframes badgeOrbit2 {
                0% { transform: translate(0px, 0px); }
                25% { transform: translate(-20px, -22px); }
                50% { transform: translate(-35px, -46px); }
                75% { transform: translate(-20px, -22px); }
                100% { transform: translate(0px, 0px); }
              }
              @keyframes badgeOrbit3 {
                0% { transform: translate(0px, 0px); }
                25% { transform: translate(20px, -24px); }
                50% { transform: translate(35px, -48px); }
                75% { transform: translate(20px, -24px); }
                100% { transform: translate(0px, 0px); }
              }
              @keyframes badgeOrbit4 {
                0% { transform: translate(0px, 0px); }
                25% { transform: translate(-24px, -26px); }
                50% { transform: translate(0px, -55px); }
                75% { transform: translate(24px, -26px); }
                100% { transform: translate(0px, 0px); }
              }
              @keyframes badgeOrbit5 {
                0% { transform: translate(0px, 0px); }
                25% { transform: translate(20px, -25px); }
                50% { transform: translate(0px, -50px); }
                75% { transform: translate(-20px, -25px); }
                100% { transform: translate(0px, 0px); }
              }
              .constellation-entrance {
                animation: fadeEntrance 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              }
              .constellation-float-wrapper {
                animation: floatGeneralGroup 30s ease-in-out infinite;
                transform-origin: 410px 255px;
              }
              .constellation-spin-wrapper {
                animation: orbitSpinClockwise 360s linear infinite;
                transform-origin: 410px 255px;
              }
              .central-nucleus-group {
                animation: nucleusPulse 4.8s ease-in-out infinite;
                transform-origin: 410px 255px;
              }
              .line-animated {
                transition: stroke-opacity 0.6s ease;
              }
              .spark-pulse-glow {
                filter: drop-shadow(0 0 4px #faf6f0) drop-shadow(0 0 8px rgba(178, 132, 83, 0.7));
              }
              .nebula-gas-1 {
                animation: nebulaSlowMotion1 14s ease-in-out infinite;
                transform-origin: 360px 220px;
              }
              .nebula-gas-2 {
                animation: nebulaSlowMotion2 18s ease-in-out infinite;
                transform-origin: 480px 300px;
              }
              .badge-float-1 {
                animation: badgeOrbit1 7s ease-in-out infinite;
              }
              .badge-float-2 {
                animation: badgeOrbit2 8.5s ease-in-out infinite;
              }
              .badge-float-3 {
                animation: badgeOrbit3 6.8s ease-in-out infinite;
              }
              .badge-float-4 {
                animation: badgeOrbit4 7.6s ease-in-out infinite;
              }
              .badge-float-5 {
                animation: badgeOrbit5 9s ease-in-out infinite;
              }
            `}
          </style>

          {/* Nebula/Cosmic Gradients */}
          <radialGradient id="nebulaGold" cx="360" cy="220" r="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#b28453" stopOpacity="0.28" />
            <stop offset="50%" stopColor="#b28453" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#b28453" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="nebulaBronze" cx="480" cy="300" r="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8c613c" stopOpacity="0.22" />
            <stop offset="45%" stopColor="#b28453" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#11100f" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="nebulaBeige" cx="280" cy="310" r="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e0d3c3" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#8c613c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="goldTransparentNucleus" cx="410" cy="255" r="78" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#b28453" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#b28453" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#b28453" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="champagneMiddleNucleus" cx="410" cy="255" r="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e0d3c3" stopOpacity="0.60" />
            <stop offset="60%" stopColor="#b28453" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#11100f" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="innerWhiteWarmNucleus" cx="410" cy="255" r="13" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#f8f8f8" />
            <stop offset="100%" stopColor="#e0d3c3" />
          </radialGradient>

          {/* Filters for premium glow rendering */}
          <filter id="softSparkGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="highEndCoreGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Global Floating Animation Wrapper */}
        <g className="constellation-entrance constellation-float-wrapper">
          <g className="constellation-spin-wrapper">

          {/* Layer A - Deep Space Nebulae & Orbits (Lagging slightly with low density factor of 0.15) */}
          <g 
            style={{ 
              transform: `translate(${mouseOffset.x * 0.15}px, ${mouseOffset.y * 0.15}px)`, 
              transition: "transform 0.6s cubic-bezier(0.15, 0.85, 0.3, 1)",
              transformOrigin: "410px 255px" 
            }}
          >
            {/* ================================================================= */}
            {/* DEEP SPACE GASEOUS NEBULAE (Slow drifting stellar dust gas clouds) */}
            {/* ================================================================= */}
            <g pointerEvents="none">
              {/* Drifting Golden Nebulose Dust 1 */}
              <circle cx="360" cy="220" r="180" fill="url(#nebulaGold)" className="nebula-gas-1" />
              
              {/* Drifting Bronze Nebulose Dust 2 */}
              <circle cx="480" cy="300" r="220" fill="url(#nebulaBronze)" className="nebula-gas-2" />

              {/* Drifting Champagne Ethereal Dust 3 */}
              <circle cx="280" cy="310" r="140" fill="url(#nebulaBeige)" opacity="0.8" />
            </g>

            {/* ================================================================= */}
            {/* COSMIC ORBIT CHANNELS (Luxury orbiting dashboard intelligence paths) */}
            {/* ================================================================= */}
            <g pointerEvents="none" opacity="0.75">
              {/* Elegant Dash Inner Orbit */}
              <ellipse 
                cx="410" 
                cy="255" 
                rx="135" 
                ry="52" 
                stroke="url(#nebulaGold)" 
                strokeWidth="0.85" 
                strokeDasharray="5 15" 
                transform="rotate(-15, 410, 255)"
                style={{
                  animation: "orbitSpinClockwise 120s linear infinite",
                  transformOrigin: "410px 255px"
                }}
              />

              {/* Outer Elegant Dash Orbit */}
              <ellipse 
                cx="410" 
                cy="255" 
                rx="185" 
                ry="68" 
                stroke="rgba(224, 211, 195, 0.12)" 
                strokeWidth="0.7" 
                strokeDasharray="2 25" 
                transform="rotate(22, 410, 255)"
                style={{
                  animation: "orbitSpinCounter 180s linear infinite",
                  transformOrigin: "410px 255px"
                }}
              />
            </g>
          </g>

          {/* Layer B - Background stellar dust (Movement factor 0.35) */}
          <g 
            style={{ 
              transform: `translate(${mouseOffset.x * 0.35}px, ${mouseOffset.y * 0.35}px)`, 
              transition: "transform 0.6s cubic-bezier(0.15, 0.85, 0.3, 1)",
              transformOrigin: "410px 255px" 
            }}
          >
            {/* ================================================================= */}
            {/* 4. PARTÍCULAS PEQUENAS DE PROFUNDIDADE (Deterministic Background Stars) */}
            {/* ================================================================= */}
            <g>
              {BACKGROUND_PARTICLES.map((particle, idx) => {
                // Hide certain percentage of background particles on mobile screen to guarantee performance
                const isFarBackground = idx % 2 === 0;
                const responsiveClass = isFarBackground ? "hidden sm:inline" : "inline";

                return (
                  <circle
                    key={`bg-ptcl-${idx}`}
                    cx={particle.x}
                    cy={particle.y}
                    r={particle.size}
                    fill="#e0d3c3"
                    opacity={particle.opacity}
                    className={responsiveClass}
                    style={{
                      animation: `${particle.twinkleType} ${particle.duration} ease-in-out infinite`,
                      animationDelay: particle.delay,
                    }}
                  />
                );
              })}
            </g>
          </g>


          {/* Layer C - Primary Constellation Rig (Full movement factor of 1.0 for parallax contrast) */}
          <g 
            style={{ 
              transform: `translate(${mouseOffset.x * 1.0}px, ${mouseOffset.y * 1.0}px)`, 
              transition: "transform 0.6s cubic-bezier(0.15, 0.85, 0.3, 1)",
              transformOrigin: "410px 255px" 
            }}
          >
            {/* ================================================================= */}
            {/* 6. PULSOS DE FLUXO (Data packets traversing through connections towards Core with motion trails) */}
            {/* ================================================================= */}
            <g>
            {FLOW_PATHS.map((flow) => {
              const beginSec = parseFloat(flow.begin);
              const responsiveClass = flow.responsiveClass || "";

              // Elegant comet trail / motion trail steps (decreasing sizes and opacities lagging behind)
              const trailSteps = [
                { scale: 0.8, opacity: 0.65, delayDelta: 0.08 },
                { scale: 0.6, opacity: 0.40, delayDelta: 0.16 },
                { scale: 0.4, opacity: 0.20, delayDelta: 0.24 },
                { scale: 0.2, opacity: 0.08, delayDelta: 0.32 }
              ];

              return (
                <g key={`flow-path-${flow.id}`} className={responsiveClass}>
                  {/* Faint ambient line representing the search pipeline path itself */}
                  <path
                    d={flow.path}
                    stroke={flow.fill}
                    strokeWidth="1.0"
                    fill="none"
                    opacity="0.05"
                    className="pointer-events-none"
                  />

                  {/* Procedural trailing sparks */}
                  {trailSteps.map((step, sIdx) => {
                    const trailBegin = `${beginSec + step.delayDelta}s`;
                    return (
                      <circle
                        key={`flow-${flow.id}-trail-${sIdx}`}
                        r={flow.r * step.scale}
                        fill={flow.fill}
                        className={flow.hasGlow ? "spark-pulse-glow" : ""}
                        style={{ opacity: step.opacity }}
                        pointerEvents="none"
                      >
                        <animateMotion
                          dur={flow.dur}
                          begin={trailBegin}
                          repeatCount="indefinite"
                          path={flow.path}
                        />
                      </circle>
                    );
                  })}

                  {/* Main leading spark node */}
                  <circle
                    r={flow.r}
                    fill={flow.fill}
                    className={flow.hasGlow ? "spark-pulse-glow" : ""}
                    style={{ opacity: 0.95 }}
                    pointerEvents="none"
                  >
                    <animateMotion
                      dur={flow.dur}
                      begin={`${beginSec}s`}
                      repeatCount="indefinite"
                      path={flow.path}
                    />
                  </circle>
                </g>
              );
            })}
          </g>

          {/* ================================================================= */}
          {/* 3. CONSTELAÇÃO DE NÓS PRINCIPAIS E SECUNDÁRIOS                    */}
          {/* ================================================================= */}
          <g>
            {Object.entries(NODES).map(([id, { x, y }], index) => {
              const isSecondary = id.startsWith("n");
              
              // Skip rendering secondary nodes if filtering for core only
              if (isCoreOnly && isSecondary) return null;
              
              // Decide responsive visibility
              let responsiveClass = "inline";
              if (isSecondary) {
                // Hide portion of secondary nodes on mobile screens to simplify layout
                responsiveClass = index % 2 === 0 ? "hidden sm:inline" : "inline";
              } else {
                // Distant nodes hide on mobile to keep center visual prominence
                if (["U", "X", "Z", "Y", "W", "R"].includes(id)) {
                  responsiveClass = "hidden md:inline";
                }
              }

              // Determine exact radius
              let radius = 2.0;
              if (isSecondary) {
                radius = 1.0 + (index % 3) * 0.4; // 1.0px to 1.8px (diameter 2.0px to 3.6px)
              } else {
                radius = 2.0 + (index % 3) * 0.45; // 2.0px to 2.9px (diameter 4.0px to 5.8px)
              }

              // Determine aesthetic luxury colors
              const isWhiteWarm = !isSecondary && ["A", "B", "C", "D", "E", "H", "I", "J"].includes(id);
              const fill = isWhiteWarm ? "#f8f8f8" : (index % 2 === 0 ? "#b28453" : "#e0d3c3");

              // Glow for white hot nodes
              const filter = isWhiteWarm ? "url(#softSparkGlow)" : undefined;

              // Twinkle animations
              const twinkleType = index % 3 === 0 ? "twinkle1" : (index % 3 === 1 ? "twinkle2" : "twinkle3");
              const duration = `${5 + (index % 4) * 1.5}s`;
              const delay = `${(index * 0.25) % 6}s`;

              return (
                <circle
                  key={`const-node-${id}`}
                  cx={x}
                  cy={y}
                  r={radius}
                  fill={fill}
                  filter={filter}
                  className={responsiveClass}
                  style={{
                    animation: `${twinkleType} ${duration} ease-in-out infinite`,
                    animationDelay: delay,
                  }}
                />
              );
            })}
          </g>

          {/* ================================================================= */}
          {/* 2. NÚCLEO CENTRAL (Motor de Search Intelligence at 410,255)         */}
          {/* ================================================================= */}
          <g 
            className="central-nucleus-group cursor-pointer select-none" 
            pointerEvents="auto"
            onMouseEnter={() => setIsCoreHovered(true)}
            onMouseLeave={() => setIsCoreHovered(false)}
          >
            {/* Círculo externo r=78, fill com radial gradient dourado transparente */}
            <circle cx="410" cy="255" r="78" fill="url(#goldTransparentNucleus)" />

            {/* Círculo médio r=42, fill com radial gradient champagne */}
            <circle cx="410" cy="255" r="42" fill="url(#champagneMiddleNucleus)" />

            {/* Círculo interno r=13, branco quente/bege com filter glow */}
            <circle cx="410" cy="255" r="13" fill="url(#innerWhiteWarmNucleus)" filter="url(#highEndCoreGlow)" />

            {/* Sharp laser-focus core seed */}
            <circle cx="410" cy="255" r="3.2" fill="#ffffff" style={{ filter: "drop-shadow(0 0 3px rgba(255, 255, 255, 1.0))" }} />
          </g>

          </g>

          </g>

        </g>
      </svg>

      {/* ================================================================= */}
      {/* 7. LABELS (Discrete HUD capsules positioned in responsive HTML space) */}
      {/* ================================================================= */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 overflow-visible"
        style={{
          transform: `translate(${mouseOffset.x * 0.6}px, ${mouseOffset.y * 0.6}px)`,
          transition: "transform 0.6s cubic-bezier(0.15, 0.85, 0.3, 1)"
        }}
      >
        
        {/* Core Interactive Overlay Card (Detailed Search Intelligence Info on Core Nucleus hover) */}
        <div
          className={`absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none pointer-events-none ${
            isCoreHovered ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
          }`}
          style={{
            left: "54%", // Align near core A center
            top: "43%",  // Positioned beautifully above the central core
            transform: "translateX(-50%) translateY(-100%)",
            width: "320px",
            zIndex: 50,
          }}
        >
          <div className="bg-[#11100f]/95 backdrop-blur-md border border-[#b28453]/50 rounded-lg p-5 shadow-[0_20px_48px_rgba(178,132,83,0.22)] text-left font-sans">
            <div className="flex items-center justify-between border-b border-[#b28453]/20 pb-2 px-0.5 mb-3">
              <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[#b28453] uppercase">
                CORE STATUS: ACTIVE
              </span>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0d3c3] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0d3c3]"></span>
                </span>
                <span className="font-mono text-[8px] text-[#e0d3c3]/70 uppercase tracking-widest">
                  LIVE
                </span>
              </div>
            </div>

            <h4 className="text-sm font-semibold text-[#f8f8f8] tracking-wide mb-1.5">
              SEARCH INTELLIGENCE NETWORK
            </h4>

            <p className="text-[11px] leading-[1.5] text-[#e0d3c3]/85 mb-4 font-normal">
              Camada neural premium que mapeia co-ocorrências semânticas, grafos de conhecimento e inteligência de busca em tempo real para construção de autoridade de entidade em buscadores e plataformas de IA.
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[#b28453]/15 pt-3">
              <div>
                <div className="text-[8px] font-mono tracking-wider text-[#e0d3c3]/50 uppercase">Densidade de Sinal</div>
                <div className="text-[12px] font-mono font-semibold text-[#b28453]">94.2% (Ótimo)</div>
              </div>
              <div>
                <div className="text-[8px] font-mono tracking-wider text-[#e0d3c3]/50 uppercase">Pontos Conectados</div>
                <div className="text-[12px] font-mono font-semibold text-[#b28453]">46 Nós Ativos</div>
              </div>
              <div>
                <div className="text-[8px] font-mono tracking-wider text-[#e0d3c3]/50 uppercase">Latência Média</div>
                <div className="text-[12px] font-mono font-semibold text-[#e0d3c3]">&lt; 12ms</div>
              </div>
              <div>
                <div className="text-[8px] font-mono tracking-wider text-[#e0d3c3]/50 uppercase">Camada Estratégica</div>
                <div className="text-[12px] font-mono font-semibold text-[#e0d3c3]">Autoridade L1</div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
