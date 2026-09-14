const stars = Array.from({ length: 72 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 7) % 92}%`,
  size: 1 + (index % 3) * 0.7,
  delay: `${-((index * 0.37) % 6)}s`,
  duration: `${4.5 + (index % 7) * 0.8}s`,
  opacity: 0.22 + (index % 5) * 0.11,
}));

const nodes = [
  [220, 170], [270, 120], [328, 92], [382, 135], [430, 84], [492, 132], [545, 104],
  [587, 160], [615, 222], [575, 260], [618, 315], [560, 356], [500, 330], [458, 382],
  [395, 345], [335, 382], [290, 332], [235, 352], [205, 292], [248, 252], [198, 220],
  [305, 205], [360, 248], [420, 206], [478, 246], [530, 210], [400, 292], [322, 286],
];

const links = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],
  [13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,0],[0,21],[21,3],[21,22],[22,23],
  [23,24],[24,25],[25,7],[22,26],[26,12],[26,14],[22,27],[27,17],[27,20],[23,26],[24,26],[19,22],
  [1,21],[3,23],[5,24],[9,25],[11,26],[15,27]
];

function BrainMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-9 w-9 overflow-visible">
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23.5 9.5c-3.8-5-11.3-2.1-10.5 4.2-5.2.3-7.3 6.8-3.2 9.9-3.7 4.5-.3 10.8 5.3 9.9.5 5.5 7.7 7.3 10.3 2.5" />
        <path d="M24.5 9.5c3.8-5 11.3-2.1 10.5 4.2 5.2.3 7.3 6.8 3.2 9.9 3.7 4.5.3 10.8-5.3 9.9-.5 5.5-7.7 7.3-10.3 2.5" />
        <path d="M24 8v30M14 15c4.8-.3 7.1 2.4 7.2 6.4M34 15c-4.8-.3-7.1 2.4-7.2 6.4M13 29c4.7 0 7.1-2 8.1-5.5M35 29c-4.7 0-7.1-2-8.1-5.5" />
      </g>
    </svg>
  );
}

function NeuralBrain() {
  return (
    <svg className="cinematic-brain h-full w-full overflow-visible" viewBox="0 0 820 520" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="brainAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f7d7a4" stopOpacity=".36" />
          <stop offset="45%" stopColor="#b28453" stopOpacity=".15" />
          <stop offset="100%" stopColor="#b28453" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="brainStroke" x1="180" y1="90" x2="635" y2="390">
          <stop stopColor="#f4d9b0" />
          <stop offset=".5" stopColor="#b28453" />
          <stop offset="1" stopColor="#76502f" />
        </linearGradient>
        <filter id="brainGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <ellipse className="brain-aura" cx="410" cy="245" rx="335" ry="245" fill="url(#brainAura)" />
      <ellipse className="brain-orbit brain-orbit-a" cx="410" cy="242" rx="292" ry="116" stroke="#b28453" strokeOpacity=".17" strokeWidth="1" strokeDasharray="3 14" transform="rotate(-9 410 242)" />
      <ellipse className="brain-orbit brain-orbit-b" cx="410" cy="242" rx="344" ry="155" stroke="#e0d3c3" strokeOpacity=".08" strokeWidth="1" strokeDasharray="2 21" transform="rotate(14 410 242)" />

      <g className="brain-network">
        {links.map(([from, to], index) => {
          const a = nodes[from];
          const b = nodes[to];
          return <line key={`${from}-${to}`} className="brain-link" x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="url(#brainStroke)" strokeOpacity={0.2 + (index % 4) * 0.07} strokeWidth={index % 6 === 0 ? 1.35 : 0.82} />;
        })}

        <path className="brain-contour" d="M202 225c-28-42-8-91 39-95 4-48 58-72 93-42 31-39 91-25 103 20 42-17 89 12 83 57 47 4 66 59 35 93 31 42 1 96-47 91-18 48-75 60-110 25-37 32-94 19-108-25-49 5-78-44-55-85-17-9-28-23-33-39Z" stroke="url(#brainStroke)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" filter="url(#brainGlow)" />
        <path className="brain-contour brain-contour-delay" d="M403 112c-26 25-28 57-10 81-24 16-33 43-22 69-20 20-20 52 1 71m18-188c31 7 48 28 47 55 30 2 50 20 54 48 26 6 42 24 43 50M318 118c-2 30 15 53 44 63-17 23-14 51 7 69-12 29 0 59 25 74M258 187c26-5 48 5 62 27-18 20-21 44-8 68-19 19-20 44-7 65M489 145c-14 27-9 52 12 73-14 23-10 49 10 68-8 22-2 42 16 58" stroke="url(#brainStroke)" strokeWidth="1.55" strokeLinecap="round" strokeOpacity=".63" />

        {nodes.map(([x, y], index) => (
          <g key={`${x}-${y}`} className="brain-node" style={{ animationDelay: `${-(index % 8) * 0.42}s` }}>
            <circle cx={x} cy={y} r={index % 5 === 0 ? 5 : 3.2} fill={index % 4 === 0 ? "#f8ead5" : "#b28453"} opacity={index % 3 === 0 ? .95 : .72} filter={index % 5 === 0 ? "url(#brainGlow)" : undefined} />
            {index % 5 === 0 ? <circle cx={x} cy={y} r="11" stroke="#b28453" strokeOpacity=".25" /> : null}
          </g>
        ))}

        <circle className="brain-core" cx="401" cy="256" r="13" fill="#fff8ed" filter="url(#brainGlow)" />
        <circle className="brain-core-ring" cx="401" cy="256" r="31" stroke="#d4aa77" strokeOpacity=".45" />
      </g>

      <g className="signal-flow">
        <circle r="3.1" fill="#fff8ed" filter="url(#brainGlow)"><animateMotion path="M88 342 C180 330 225 280 305 268 S380 256 401 256" dur="8.5s" repeatCount="indefinite" /></circle>
        <circle r="2.5" fill="#b28453" filter="url(#brainGlow)"><animateMotion path="M710 124 C625 142 573 189 510 219 S444 246 401 256" dur="10.5s" begin="-4s" repeatCount="indefinite" /></circle>
        <circle r="2.7" fill="#ecd3b1" filter="url(#brainGlow)"><animateMotion path="M663 411 C582 370 541 341 500 317 S433 274 401 256" dur="11.7s" begin="-7s" repeatCount="indefinite" /></circle>
      </g>
    </svg>
  );
}

export default function CinematicHero() {
  return (
    <section id="inicio" className="cinematic-hero relative isolate min-h-[820px] overflow-hidden bg-[#070605] text-[#f8f8f8] lg:min-h-[900px]" aria-label="AUDITSEO Search Intelligence">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(178,132,83,0.16),transparent_28%),radial-gradient(circle_at_55%_66%,rgba(88,53,31,0.12),transparent_36%),linear-gradient(110deg,#070605_0%,#0d0a08_48%,#050403_100%)]" />
      <div className="cinematic-nebula absolute -right-[12%] top-[6%] h-[72%] w-[68%] rounded-full bg-[radial-gradient(circle,rgba(178,132,83,0.17),rgba(115,74,43,0.08)_34%,transparent_70%)] blur-[45px]" />
      <div className="cinematic-nebula cinematic-nebula-2 absolute -left-[18%] bottom-[-20%] h-[58%] w-[58%] rounded-full bg-[radial-gradient(circle,rgba(85,52,33,0.16),transparent_68%)] blur-[60px]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {stars.map((star, index) => (
          <span key={index} className="cinematic-star absolute rounded-full bg-[#f6e5cd]" style={{ left: star.left, top: star.top, width: star.size, height: star.size, opacity: star.opacity, animationDelay: star.delay, animationDuration: star.duration }} />
        ))}
      </div>

      <div className="planet-wrap pointer-events-none absolute bottom-[-255px] right-[-170px] h-[610px] w-[610px] opacity-80 md:bottom-[-290px] md:right-[-120px] md:h-[720px] md:w-[720px]">
        <div className="planet absolute inset-0 rounded-full border border-[#b28453]/20 bg-[radial-gradient(circle_at_32%_23%,rgba(221,188,145,.45),rgba(132,84,50,.23)_22%,rgba(35,23,17,.94)_55%,#050403_72%)] shadow-[0_-30px_130px_rgba(178,132,83,.2)]" />
        <div className="planet-ring absolute left-[-15%] top-[39%] h-[18%] w-[130%] rotate-[-12deg] rounded-[50%] border border-[#d9b98e]/20" />
      </div>

      <div className="pointer-events-none absolute inset-y-[13%] right-[-8%] w-[67%] opacity-55 sm:opacity-70 lg:right-[1%] lg:w-[58%] lg:opacity-100">
        <NeuralBrain />
      </div>

      <div className="observer pointer-events-none absolute bottom-[-8px] right-[16%] hidden h-[315px] w-[120px] opacity-70 xl:block">
        <div className="observer-head absolute left-[39px] top-0 h-[46px] w-[42px] rounded-full bg-[radial-gradient(circle_at_30%_25%,#6d5747,#1b1511_55%,#050403_100%)] shadow-[-5px_0_20px_rgba(178,132,83,.2)]" />
        <div className="observer-body absolute bottom-0 left-[12px] h-[272px] w-[96px] rounded-t-[48px] bg-[linear-gradient(100deg,rgba(178,132,83,.18),#17110d_18%,#050403_70%)] shadow-[-8px_0_28px_rgba(178,132,83,.12)]" />
      </div>

      <div className="relative z-20 mx-auto max-w-[1450px] px-6 sm:px-9 lg:px-12 xl:px-16">
        <header className="flex h-[94px] items-center justify-between border-b border-white/[0.055]">
          <a href="/" className="flex items-center gap-3 text-[#c69358]" aria-label="AUDITSEO — início">
            <BrainMark />
            <div className="leading-none">
              <div className="text-[22px] font-semibold tracking-[0.09em] text-[#f2eee8]">AUDIT<span className="text-[#b28453]">SEO</span></div>
              <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.28em] text-[#987757]">Search Intelligence</div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-[13px] font-medium tracking-[0.02em] text-white/70 lg:flex xl:gap-9">
            <a className="transition hover:text-[#d6ae7d]" href="/solucoes">Soluções</a>
            <a className="transition hover:text-[#d6ae7d]" href="/blog/framework-crawl-index-retrieve-understand-trust-cite">Framework</a>
            <a className="transition hover:text-[#d6ae7d]" href="/blog">Conteúdos</a>
            <a className="transition hover:text-[#d6ae7d]" href="/autor/sidney-santos">Sobre</a>
            <a className="rounded-full border border-[#b28453]/55 bg-[#b28453]/10 px-5 py-2.5 text-[#f4dbc0] transition hover:bg-[#b28453] hover:text-white" href="/diagnostico">Falar com um especialista</a>
          </nav>
          <a href="/diagnostico" className="rounded-full border border-[#b28453]/50 px-4 py-2 text-xs font-semibold text-[#e4c6a2] lg:hidden">Diagnóstico</a>
        </header>

        <div className="grid min-h-[700px] items-center pb-24 pt-12 lg:grid-cols-12 lg:pb-20 lg:pt-2">
          <div className="cinematic-copy relative z-30 max-w-[780px] lg:col-span-7">
            <div className="mb-7 flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c69762]">
              <span className="h-px w-11 bg-[#b28453]/70" /> Search Intelligence para empresas
            </div>
            <h1 className="max-w-[790px] font-display text-[clamp(48px,5.4vw,82px)] font-semibold leading-[0.98] tracking-[-0.047em] text-[#f4f0eb]">
              Antes de investir em mais SEO, conteúdo ou IA, <span className="text-[#c99862]">descubra onde sua presença realmente quebra.</span>
            </h1>
            <p className="mt-7 max-w-[700px] text-[17px] leading-[1.72] text-[#ddd3c7]/82 md:text-[19px]">
              A AUDITSEO investiga em qual etapa sua empresa perde capacidade de ser descoberta, compreendida, validada, citada ou escolhida. Depois transforma a evidência em um roadmap coordenado, com prioridades, responsáveis e critérios de validação.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="/diagnostico" className="inline-flex items-center justify-center rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white shadow-[0_14px_50px_rgba(178,132,83,.2)] transition hover:-translate-y-0.5 hover:bg-[#c69662]">Diagnosticar minha empresa</a>
              <a href="/blog/framework-crawl-index-retrieve-understand-trust-cite" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.025] px-7 py-4 text-sm font-semibold text-[#eee4d9] backdrop-blur-sm transition hover:border-[#b28453]/50 hover:bg-[#b28453]/10">Ver o framework de diagnóstico <span aria-hidden="true">→</span></a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35 sm:text-[10px]">
              {['Crawl','Index','Retrieve','Understand','Trust','Cite','Convert'].map((label, index) => <span key={label}>{index > 0 ? <span className="mr-2 text-[#b28453]/45">→</span> : null}{label}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-b from-transparent to-[#11100f]" />

      <style>{`
        @keyframes cinematicTwinkle { 0%,100% { transform:scale(.7); opacity:.18 } 45% { transform:scale(1.8); opacity:.9 } 70% { transform:scale(1); opacity:.45 } }
        @keyframes cinematicDrift { 0%,100% { transform:translate3d(0,0,0) scale(1) } 50% { transform:translate3d(-2.5%,2%,0) scale(1.08) } }
        @keyframes brainFloat { 0%,100% { transform:translateY(-4px) rotate(-.25deg) } 50% { transform:translateY(8px) rotate(.35deg) } }
        @keyframes brainPulse { 0%,100% { opacity:.58; transform:scale(.96) } 50% { opacity:1; transform:scale(1.09) } }
        @keyframes brainDash { to { stroke-dashoffset:-120 } }
        @keyframes orbitSpin { to { stroke-dashoffset:-150 } }
        @keyframes planetFloat { 0%,100% { transform:translateY(0) rotate(0deg) } 50% { transform:translateY(-10px) rotate(.6deg) } }
        @keyframes observerBreath { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-4px) } }
        @keyframes copyReveal { from { opacity:0; transform:translateY(18px) } to { opacity:1; transform:translateY(0) } }
        .cinematic-star { animation: cinematicTwinkle ease-in-out infinite; box-shadow:0 0 7px rgba(239,213,178,.55); }
        .cinematic-nebula { animation: cinematicDrift 16s ease-in-out infinite; }
        .cinematic-nebula-2 { animation-delay:-8s; animation-duration:21s; }
        .brain-network { transform-box:fill-box; transform-origin:center; animation:brainFloat 9s ease-in-out infinite; }
        .brain-contour { stroke-dasharray:18 8; animation:brainDash 18s linear infinite; }
        .brain-contour-delay { stroke-dasharray:8 7; animation-duration:24s; animation-direction:reverse; }
        .brain-node { transform-box:fill-box; transform-origin:center; animation:brainPulse 3.8s ease-in-out infinite; }
        .brain-core { transform-box:fill-box; transform-origin:center; animation:brainPulse 2.8s ease-in-out infinite; }
        .brain-core-ring { transform-box:fill-box; transform-origin:center; animation:brainPulse 3.5s ease-in-out infinite reverse; }
        .brain-orbit { animation:orbitSpin 18s linear infinite; }
        .brain-orbit-b { animation-duration:28s; animation-direction:reverse; }
        .brain-aura { animation:brainPulse 6s ease-in-out infinite; transform-box:fill-box; transform-origin:center; }
        .planet-wrap { animation:planetFloat 13s ease-in-out infinite; }
        .observer { animation:observerBreath 7s ease-in-out infinite; }
        .cinematic-copy { animation:copyReveal .9s cubic-bezier(.2,.75,.2,1) both; }
        @media (max-width:1023px) { .cinematic-brain { transform:scale(1.2); transform-origin:center; } }
        @media (prefers-reduced-motion: reduce) {
          .cinematic-star,.cinematic-nebula,.brain-network,.brain-contour,.brain-node,.brain-core,.brain-core-ring,.brain-orbit,.brain-aura,.planet-wrap,.observer,.cinematic-copy { animation:none !important; }
        }
      `}</style>
    </section>
  );
}
