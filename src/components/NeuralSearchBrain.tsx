import React from "react";
import * as THREE from "three";
import { BarChart3, Box, Target } from "lucide-react";

const GOLD = 0xd5a15f;
const PALE = 0xffead0;

function makeGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.14, "rgba(255,232,195,.95)");
  gradient.addColorStop(0.38, "rgba(214,158,88,.46)");
  gradient.addColorStop(1, "rgba(214,158,88,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function seeded(index: number, salt = 0) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function makeStars(scene: THREE.Scene, glow: THREE.Texture) {
  const count = 1500;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const spread = i < 950 ? 19 : 12;
    positions[i * 3] = (seeded(i, 1) - 0.5) * spread;
    positions[i * 3 + 1] = (seeded(i, 2) - 0.5) * 10;
    positions[i * 3 + 2] = -2 - seeded(i, 3) * 10;
    const warm = seeded(i, 4);
    colors[i * 3] = 0.62 + warm * 0.38;
    colors[i * 3 + 1] = 0.49 + warm * 0.36;
    colors[i * 3 + 2] = 0.34 + warm * 0.3;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size: 0.045,
    map: glow,
    transparent: true,
    opacity: 0.82,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geometry, material);
  points.name = "stars";
  scene.add(points);
  return points;
}

function makeGalaxy(scene: THREE.Scene, glow: THREE.Texture) {
  const group = new THREE.Group();
  group.position.set(-0.55, 3.35, -4.2);
  group.rotation.set(0.86, 0.1, -0.18);
  const count = 1200;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const arm = i % 4;
    const radius = 0.15 + seeded(i, 7) * 2.1;
    const theta = radius * 4.8 + arm * Math.PI * 0.5 + (seeded(i, 8) - 0.5) * 0.42;
    positions[i * 3] = Math.cos(theta) * radius;
    positions[i * 3 + 1] = Math.sin(theta) * radius;
    positions[i * 3 + 2] = (seeded(i, 9) - 0.5) * (0.1 + radius * 0.16);
    const hot = 1 - Math.min(1, radius / 2.2);
    colors[i * 3] = 0.72 + hot * 0.28;
    colors[i * 3 + 1] = 0.48 + hot * 0.42;
    colors[i * 3 + 2] = 0.24 + hot * 0.5;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({ size: 0.075, map: glow, transparent: true, opacity: 0.7, vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false });
  group.add(new THREE.Points(geometry, material));
  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: PALE, transparent: true, opacity: 0.78, blending: THREE.AdditiveBlending, depthWrite: false }));
  core.scale.set(1.1, 1.1, 1.1);
  group.add(core);
  scene.add(group);
  return group;
}

function makeBrain(scene: THREE.Scene, glow: THREE.Texture) {
  const group = new THREE.Group();
  group.position.set(2.25, 0.65, 0.1);
  group.scale.setScalar(1.34);

  const nodes: THREE.Vector3[] = [];
  const perLobe = 90;
  for (let side = -1; side <= 1; side += 2) {
    for (let i = 0; i < perLobe; i += 1) {
      const u = (i + 0.5) / perLobe;
      const v = seeded(i, side * 17 + 40);
      const phi = Math.acos(1 - 2 * u);
      const theta = v * Math.PI * 2;
      const bulge = 1 + 0.12 * Math.sin(theta * 3 + phi * 5) + 0.07 * Math.sin(theta * 7 - phi * 2);
      const x = side * (0.36 + Math.abs(Math.sin(phi) * Math.cos(theta)) * 1.08 * bulge);
      const y = Math.cos(phi) * 1.28 * bulge;
      const z = Math.sin(phi) * Math.sin(theta) * 0.86 * bulge;
      nodes.push(new THREE.Vector3(x, y, z));
    }
  }

  for (let i = 0; i < 18; i += 1) {
    const t = i / 17;
    nodes.push(new THREE.Vector3((seeded(i, 33) - 0.5) * 0.22, -1.22 - t * 1.18, (seeded(i, 34) - 0.5) * 0.16));
  }

  const positions = new Float32Array(nodes.length * 3);
  nodes.forEach((node, i) => node.toArray(positions, i * 3));
  const nodeGeometry = new THREE.BufferGeometry();
  nodeGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const nodeMaterial = new THREE.PointsMaterial({ size: 0.12, map: glow, color: GOLD, transparent: true, opacity: 0.96, depthWrite: false, blending: THREE.AdditiveBlending });
  group.add(new THREE.Points(nodeGeometry, nodeMaterial));

  const segments: number[] = [];
  for (let i = 0; i < nodes.length; i += 1) {
    const distances: { index: number; distance: number }[] = [];
    for (let j = 0; j < nodes.length; j += 1) {
      if (i === j) continue;
      const distance = nodes[i].distanceToSquared(nodes[j]);
      if (distance < 0.5) distances.push({ index: j, distance });
    }
    distances.sort((a, b) => a.distance - b.distance).slice(0, 3).forEach(({ index }) => {
      segments.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[index].x, nodes[index].y, nodes[index].z);
    });
  }
  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(segments, 3));
  group.add(new THREE.LineSegments(lineGeometry, new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending })));

  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: 0xfff6e9, transparent: true, opacity: 1, depthWrite: false, blending: THREE.AdditiveBlending }));
  core.position.set(0.04, 0.08, 0.48);
  core.scale.set(0.82, 0.82, 0.82);
  core.name = "brainCore";
  group.add(core);

  for (let i = 0; i < 7; i += 1) {
    const radiusX = 1.8 + i * 0.27;
    const radiusY = 0.72 + i * 0.11;
    const curve = new THREE.EllipseCurve(0, 0, radiusX, radiusY, 0, Math.PI * 2, false, i * 0.3);
    const points = curve.getPoints(130).map((point) => new THREE.Vector3(point.x, point.y, (i - 3) * 0.11));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const loop = new THREE.LineLoop(geometry, new THREE.LineBasicMaterial({ color: i % 2 ? 0xd89a50 : 0xf4c98a, transparent: true, opacity: 0.28 - i * 0.015, blending: THREE.AdditiveBlending }));
    loop.rotation.set(0.18 + i * 0.05, 0.34 - i * 0.04, -0.22 + i * 0.09);
    loop.name = `orbit-${i}`;
    group.add(loop);
  }

  const orbiters: THREE.Sprite[] = [];
  for (let i = 0; i < 8; i += 1) {
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: i % 3 === 0 ? PALE : GOLD, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
    sprite.scale.setScalar(i % 3 === 0 ? 0.34 : 0.22);
    sprite.userData = { radiusX: 1.95 + (i % 4) * 0.38, radiusY: 0.74 + (i % 4) * 0.16, speed: 0.08 + i * 0.009, phase: i * 0.83 };
    orbiters.push(sprite);
    group.add(sprite);
  }
  group.userData.orbiters = orbiters;
  scene.add(group);
  return group;
}

function makePlanet(scene: THREE.Scene, radius: number, position: [number, number, number], color: number) {
  const geometry = new THREE.SphereGeometry(radius, 48, 32);
  const material = new THREE.MeshStandardMaterial({ color, roughness: 0.96, metalness: 0.05, emissive: new THREE.Color(color).multiplyScalar(0.08) });
  const planet = new THREE.Mesh(geometry, material);
  planet.position.set(...position);
  scene.add(planet);
  return planet;
}

function makeHorizon(scene: THREE.Scene, glow: THREE.Texture) {
  const globe = new THREE.Mesh(new THREE.SphereGeometry(8.2, 96, 48), new THREE.MeshStandardMaterial({ color: 0x23160e, roughness: 1, metalness: 0, emissive: 0x170d07, emissiveIntensity: 0.38 }));
  globe.position.set(1.05, -8.62, -2.4);
  scene.add(globe);

  const rim = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: 0xf2b968, transparent: true, opacity: 0.58, blending: THREE.AdditiveBlending, depthWrite: false }));
  rim.position.set(1.1, -2.45, -1.3);
  rim.scale.set(12.8, 1.0, 1);
  scene.add(rim);

  for (let i = 0; i < 85; i += 1) {
    const city = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: i % 3 === 0 ? PALE : GOLD, transparent: true, opacity: 0.45 + seeded(i, 90) * 0.35, blending: THREE.AdditiveBlending, depthWrite: false }));
    const angle = Math.PI * (0.16 + seeded(i, 91) * 0.68);
    const x = 1.0 + Math.cos(angle) * (5.3 + seeded(i, 92) * 1.7);
    const y = -3.02 + Math.sin(angle) * 0.44 + seeded(i, 93) * 0.25;
    city.position.set(x, y, -0.5 - seeded(i, 94));
    const scale = 0.06 + seeded(i, 95) * 0.12;
    city.scale.set(scale, scale, scale);
    scene.add(city);
  }
  return globe;
}

function makeObserver(scene: THREE.Scene) {
  const group = new THREE.Group();
  group.position.set(1.17, -2.8, 1.7);
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.72, 8, 16), new THREE.MeshStandardMaterial({ color: 0x050403, roughness: 1 }));
  body.position.y = 0.38;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 24, 16), new THREE.MeshStandardMaterial({ color: 0x070504, roughness: 1 }));
  head.position.y = 1.02;
  const legs = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.8, 10), new THREE.MeshStandardMaterial({ color: 0x030302, roughness: 1 }));
  legs.position.y = -0.35;
  group.add(body, head, legs);
  scene.add(group);
  return group;
}

function makeAsteroids(scene: THREE.Scene) {
  const asteroids: THREE.Mesh[] = [];
  const positions: Array<[number, number, number, number]> = [
    [-4.8, -3.0, 0.4, 0.55], [-3.3, -3.7, 1.2, 0.7], [-1.8, -2.7, -0.4, 0.25], [3.8, -3.1, 0.5, 0.58], [4.7, -2.5, -0.8, 0.34], [5.2, 2.9, -3, 0.45], [-4.7, 1.7, -4, 0.35], [-2.9, 3.4, -5, 0.23], [4.9, 0.9, -5, 0.28]
  ];
  positions.forEach(([x, y, z, size], i) => {
    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(size, 1), new THREE.MeshStandardMaterial({ color: 0x2a1b12, roughness: 0.92, metalness: 0.08 }));
    mesh.position.set(x, y, z);
    mesh.scale.set(1.2, 0.85 + seeded(i, 101) * 0.5, 1);
    mesh.rotation.set(seeded(i, 102) * 2, seeded(i, 103) * 2, seeded(i, 104) * 2);
    asteroids.push(mesh);
    scene.add(mesh);
  });
  return asteroids;
}

const LABELS = [
  ["CONTEÚDO", "55%", "22%"], ["AUTORIDADE", "79%", "19%"], ["SEO TÉCNICO", "85%", "35%"],
  ["SEARCH AI", "86%", "51%"], ["RESULTADOS", "81%", "69%"], ["ESTRATÉGIA", "56%", "64%"], ["REPUTAÇÃO", "54%", "54%"],
] as const;

export default function NeuralSearchBrain() {
  const hostRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const host = hostRef.current;
    if (!host || host.getBoundingClientRect().width < 20) return;
    const hero = host.closest("#inicio") as HTMLElement | null;
    if (!hero || hero.dataset.universeMounted === "true") return;
    hero.dataset.universeMounted = "true";

    const heading = hero.querySelector("h1") as HTMLElement | null;
    if (heading && !heading.dataset.goldTail) {
      heading.innerHTML = 'Antes de investir em mais SEO, conteúdo ou IA, descubra onde sua presença <span style="color:#d7a15f">realmente quebra.</span>';
      heading.dataset.goldTail = "true";
    }
    Array.from(hero.querySelectorAll("div")).forEach((element) => {
      if (element.textContent?.replace(/\s/g, "").includes("CrawlIndexRetrieveUnderstandTrustCiteConvert")) (element as HTMLElement).style.display = "none";
    });

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030201, 0.058);
    const camera = new THREE.PerspectiveCamera(44, 1, 0.1, 100);
    camera.position.set(0.55, 0.25, 10.7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";
    host.appendChild(renderer.domElement);

    const glow = makeGlowTexture();
    const stars = makeStars(scene, glow);
    const galaxy = makeGalaxy(scene, glow);
    const brain = makeBrain(scene, glow);
    const earth = makeHorizon(scene, glow);
    const observer = makeObserver(scene);
    const asteroids = makeAsteroids(scene);
    const farPlanet = makePlanet(scene, 1.05, [5.4, 3.0, -5.0], 0x4c2d1a);
    const smallPlanet = makePlanet(scene, 0.42, [-2.4, 3.3, -3.9], 0x6b4022);

    scene.add(new THREE.AmbientLight(0x6e4a31, 0.48));
    const key = new THREE.PointLight(0xffc77d, 25, 18, 2);
    key.position.set(2.2, 0.7, 2.7);
    scene.add(key);
    const rimLight = new THREE.PointLight(0xffa94a, 12, 24, 2);
    rimLight.position.set(-2.0, 3.3, -0.2);
    scene.add(rimLight);

    let pointerX = 0;
    let pointerY = 0;
    const handlePointer = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    hero.addEventListener("pointermove", handlePointer);

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
      camera.aspect = rect.width / Math.max(1, rect.height);
      camera.updateProjectionMatrix();
    };
    const observerResize = new ResizeObserver(resize);
    observerResize.observe(hero);
    resize();

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clock = new THREE.Clock();
    let raf = 0;
    const animate = () => {
      const time = clock.getElapsedTime();
      const drift = prefersReduced ? 0 : Math.sin(time * 0.45) * 0.055;
      stars.rotation.y = time * 0.008;
      galaxy.rotation.z = time * 0.035;
      brain.rotation.y += ((pointerX * 0.11) - brain.rotation.y) * 0.035;
      brain.rotation.x += ((-pointerY * 0.055) - brain.rotation.x) * 0.035;
      brain.position.y = 0.65 + drift;
      const core = brain.getObjectByName("brainCore") as THREE.Sprite | undefined;
      if (core) {
        const pulse = 0.78 + Math.sin(time * 2.2) * 0.16;
        core.scale.setScalar(pulse);
      }
      (brain.userData.orbiters as THREE.Sprite[]).forEach((sprite, index) => {
        const data = sprite.userData as { radiusX: number; radiusY: number; speed: number; phase: number };
        const angle = time * data.speed * Math.PI * 2 + data.phase;
        sprite.position.set(Math.cos(angle) * data.radiusX, Math.sin(angle) * data.radiusY, Math.sin(angle * 0.7 + index) * 0.34);
      });
      brain.children.forEach((child) => {
        if (child.name.startsWith("orbit-")) child.rotation.z += 0.0007 * (Number(child.name.split("-")[1]) % 2 ? 1 : -1);
      });
      asteroids.forEach((asteroid, index) => {
        asteroid.rotation.x += 0.0006 + index * 0.00003;
        asteroid.rotation.y += 0.0008 + index * 0.00002;
      });
      earth.rotation.y = time * 0.002;
      observer.rotation.y = pointerX * -0.035;
      farPlanet.rotation.y = time * 0.015;
      smallPlanet.rotation.y = -time * 0.02;
      camera.position.x += ((0.55 + pointerX * 0.12) - camera.position.x) * 0.025;
      camera.position.y += ((0.25 - pointerY * 0.08) - camera.position.y) * 0.025;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      observerResize.disconnect();
      hero.removeEventListener("pointermove", handlePointer);
      delete hero.dataset.universeMounted;
      renderer.dispose();
      glow.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={hostRef} className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[radial-gradient(circle_at_73%_42%,rgba(136,76,29,.19),transparent_24%),linear-gradient(110deg,#040302_0%,#080503_54%,#020101_100%)]" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_18%,rgba(214,150,73,.08),transparent_23%),radial-gradient(circle_at_80%_72%,rgba(169,90,32,.11),transparent_32%)]" />
      <div className="hidden lg:block">
        {LABELS.map(([label, left, top]) => <span key={label} className="absolute z-20 font-mono text-[11px] font-semibold tracking-[0.28em] text-[#ead6b8]/90" style={{ left, top }}>{label}</span>)}
        <div className="absolute bottom-[3.7%] left-[4.8%] z-20 flex items-center gap-8 text-[#f7ead8]">
          <div className="flex items-center gap-3 border-r border-[#d8b27d]/35 pr-8"><BarChart3 size={24} className="text-[#dfaa62]"/><span className="font-mono text-[10px] font-semibold uppercase leading-[1.45] tracking-[0.16em]">Diagnóstico<br/>baseado em evidências</span></div>
          <div className="flex items-center gap-3 border-r border-[#d8b27d]/35 pr-8"><Box size={24} className="text-[#dfaa62]"/><span className="font-mono text-[10px] font-semibold uppercase leading-[1.45] tracking-[0.16em]">Visão integrada<br/>do seu ecossistema</span></div>
          <div className="flex items-center gap-3"><Target size={24} className="text-[#dfaa62]"/><span className="font-mono text-[10px] font-semibold uppercase leading-[1.45] tracking-[0.16em]">Roadmap prático<br/>e prioritário</span></div>
        </div>
        <div className="absolute bottom-[4.3%] right-[5.1%] z-20 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#d4a05d]/85">Dados · Estratégia · Resultados reais</div>
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
