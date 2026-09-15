import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { BarChart3, Box, Target } from "lucide-react";

const GOLD = new THREE.Color("#d59a54");
const GOLD_HOT = new THREE.Color("#ffc777");
const PALE = new THREE.Color("#fff1d6");

function seeded(index: number, salt = 0) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function makeRadialTexture(size = 128) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(.10, "rgba(255,236,207,.98)");
  g.addColorStop(.32, "rgba(229,160,82,.42)");
  g.addColorStop(1, "rgba(201,112,35,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function addStarfield(scene: THREE.Scene, texture: THREE.Texture) {
  const count = 3000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (seeded(i, 1) - 0.5) * 25;
    positions[i * 3 + 1] = (seeded(i, 2) - 0.5) * 13;
    positions[i * 3 + 2] = -2 - seeded(i, 3) * 14;
    const w = seeded(i, 4);
    colors[i * 3] = 0.62 + w * 0.38;
    colors[i * 3 + 1] = 0.48 + w * 0.38;
    colors[i * 3 + 2] = 0.31 + w * 0.39;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size: 0.028,
    map: texture,
    transparent: true,
    opacity: 0.76,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const stars = new THREE.Points(geometry, material);
  scene.add(stars);
  return stars;
}

function addGalaxy(scene: THREE.Scene, texture: THREE.Texture) {
  const group = new THREE.Group();
  group.position.set(-0.32, 3.30, -4.45);
  group.rotation.set(0.74, 0.06, -0.20);
  const count = 5200;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const arm = i % 5;
    const radius = 0.04 + seeded(i, 10) * 2.1;
    const theta = radius * 5.9 + arm * (Math.PI * 2 / 5) + (seeded(i, 11) - 0.5) * 0.34;
    const spread = (seeded(i, 12) - 0.5) * (0.07 + radius * 0.14);
    positions[i * 3] = Math.cos(theta) * radius * 1.28;
    positions[i * 3 + 1] = Math.sin(theta) * radius * 0.84 + spread;
    positions[i * 3 + 2] = (seeded(i, 13) - 0.5) * (0.09 + radius * 0.18);
    const hot = 1 - Math.min(1, radius / 2.1);
    colors[i * 3] = 0.66 + hot * 0.34;
    colors[i * 3 + 1] = 0.48 + hot * 0.44;
    colors[i * 3 + 2] = 0.30 + hot * 0.54;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  group.add(new THREE.Points(
    geometry,
    new THREE.PointsMaterial({ size: 0.034, map: texture, transparent: true, opacity: 0.82, vertexColors: true, depthWrite: false, blending: THREE.AdditiveBlending })
  ));
  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: 0xffedc7, transparent: true, opacity: 0.72, depthWrite: false, blending: THREE.AdditiveBlending }));
  core.scale.set(0.34, 0.34, 0.34);
  group.add(core);
  scene.add(group);
  return group;
}

function brainPoint(i: number, side: number, total: number) {
  const u = (i + 0.5) / total;
  const phi = Math.acos(1 - 2 * u);
  const theta = seeded(i, 30 + side) * Math.PI * 2;
  const x0 = Math.sin(phi) * Math.cos(theta);
  const y0 = Math.cos(phi);
  const z0 = Math.sin(phi) * Math.sin(theta);
  const wrinkle = 1 + 0.12 * Math.sin(theta * 4 + phi * 5) + 0.065 * Math.sin(theta * 8 - phi * 3);
  return new THREE.Vector3(
    side * (0.34 + Math.abs(x0) * 1.08 * wrinkle),
    y0 * 1.26 * wrinkle,
    z0 * 0.86 * wrinkle
  );
}

function addBrainShell(group: THREE.Group) {
  const shellMaterial = new THREE.MeshBasicMaterial({
    color: 0xe2a45c,
    wireframe: true,
    transparent: true,
    opacity: 0.085,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  [-1, 1].forEach((side) => {
    const lobe = new THREE.Mesh(new THREE.SphereGeometry(1.08, 26, 20), shellMaterial.clone());
    lobe.position.x = side * 0.46;
    lobe.scale.set(0.94, 1.18, 0.72);
    group.add(lobe);
  });
  const stem = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 1.25, 8, 14), shellMaterial.clone());
  stem.position.set(0.02, -1.72, 0);
  stem.scale.set(0.72, 1.0, 0.65);
  group.add(stem);
}

function addBrain(scene: THREE.Scene, texture: THREE.Texture) {
  const group = new THREE.Group();
  group.position.set(2.32, 0.40, -0.12);
  group.scale.setScalar(1.34);
  const nodes: THREE.Vector3[] = [];
  const perLobe = 210;
  [-1, 1].forEach((side) => {
    for (let i = 0; i < perLobe; i++) nodes.push(brainPoint(i, side, perLobe));
  });
  for (let i = 0; i < 34; i++) {
    const t = i / 33;
    nodes.push(new THREE.Vector3((seeded(i, 61) - 0.5) * 0.20, -1.24 - t * 1.34, (seeded(i, 62) - 0.5) * 0.16));
  }

  const pointPositions = new Float32Array(nodes.length * 3);
  nodes.forEach((n, i) => n.toArray(pointPositions, i * 3));
  const pointGeometry = new THREE.BufferGeometry();
  pointGeometry.setAttribute("position", new THREE.BufferAttribute(pointPositions, 3));
  group.add(new THREE.Points(pointGeometry, new THREE.PointsMaterial({
    size: 0.058,
    map: texture,
    color: GOLD,
    transparent: true,
    opacity: 0.92,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })));

  const linePositions: number[] = [];
  for (let i = 0; i < nodes.length; i++) {
    const nearest: Array<{ j: number; d: number }> = [];
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue;
      const d = nodes[i].distanceToSquared(nodes[j]);
      if (d < 0.20) nearest.push({ j, d });
    }
    nearest.sort((a, b) => a.d - b.d).slice(0, 4).forEach(({ j }) => {
      if (i < j) linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
    });
  }
  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
  group.add(new THREE.LineSegments(lineGeometry, new THREE.LineBasicMaterial({ color: 0xd99950, transparent: true, opacity: 0.23, blending: THREE.AdditiveBlending, depthWrite: false })));

  addBrainShell(group);

  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: PALE, transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending }));
  core.position.set(0.04, -0.02, 0.46);
  core.scale.set(0.44, 0.44, 0.44);
  core.name = "brain-core";
  group.add(core);

  const orbiters: THREE.Sprite[] = [];
  for (let i = 0; i < 11; i++) {
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: i % 3 === 0 ? PALE : GOLD_HOT, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending }));
    sprite.scale.setScalar(i % 3 === 0 ? 0.17 : 0.11);
    sprite.userData = { rx: 1.72 + (i % 5) * 0.28, ry: 0.68 + (i % 4) * 0.12, rz: 0.45 + (i % 3) * 0.12, speed: 0.10 + i * 0.008, phase: i * 0.66 };
    group.add(sprite);
    orbiters.push(sprite);
  }

  for (let i = 0; i < 7; i++) {
    const points: THREE.Vector3[] = [];
    const rx = 1.78 + i * 0.23;
    const ry = 0.68 + i * 0.09;
    for (let j = 0; j <= 180; j++) {
      const a = (j / 180) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(a) * rx, Math.sin(a) * ry, Math.sin(a * 2 + i) * 0.19));
    }
    const g = new THREE.BufferGeometry().setFromPoints(points);
    const loop = new THREE.Line(g, new THREE.LineBasicMaterial({ color: i % 2 ? 0xc98640 : 0xe8b66f, transparent: true, opacity: 0.14 + (i % 3) * 0.025, blending: THREE.AdditiveBlending, depthWrite: false }));
    loop.rotation.set(0.12 + i * 0.055, 0.22 - i * 0.027, -0.26 + i * 0.09);
    loop.name = `orbit-${i}`;
    group.add(loop);
  }

  group.userData.orbiters = orbiters;
  scene.add(group);
  return group;
}

function addPlanet(scene: THREE.Scene, radius: number, position: [number, number, number], base: number) {
  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 64, 40),
    new THREE.MeshStandardMaterial({ color: base, roughness: 0.98, metalness: 0.02, emissive: new THREE.Color(base).multiplyScalar(0.07) })
  );
  planet.position.set(...position);
  scene.add(planet);
  return planet;
}

function addWorld(scene: THREE.Scene, texture: THREE.Texture) {
  const world = new THREE.Mesh(
    new THREE.SphereGeometry(8.6, 96, 56),
    new THREE.MeshStandardMaterial({ color: 0x27170f, roughness: 1, emissive: 0x150b06, emissiveIntensity: 0.34 })
  );
  world.position.set(0.9, -9.55, -2.7);
  scene.add(world);

  const cityCount = 760;
  const positions = new Float32Array(cityCount * 3);
  const colors = new Float32Array(cityCount * 3);
  for (let i = 0; i < cityCount; i++) {
    const phi = 0.12 + seeded(i, 120) * 0.95;
    const theta = 0.10 * Math.PI + seeded(i, 121) * 0.80 * Math.PI;
    const radius = 8.62;
    positions[i * 3] = Math.sin(phi) * Math.cos(theta) * radius;
    positions[i * 3 + 1] = Math.cos(phi) * radius;
    positions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * radius;
    const hot = seeded(i, 122);
    colors[i * 3] = 0.75 + hot * 0.25;
    colors[i * 3 + 1] = 0.45 + hot * 0.34;
    colors[i * 3 + 2] = 0.20 + hot * 0.25;
  }
  const cityGeometry = new THREE.BufferGeometry();
  cityGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  cityGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const cityLights = new THREE.Points(cityGeometry, new THREE.PointsMaterial({ size: 0.055, map: texture, transparent: true, opacity: 0.78, vertexColors: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  world.add(cityLights);

  const atmosphere = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: 0xe6aa5d, transparent: true, opacity: 0.42, depthWrite: false, blending: THREE.AdditiveBlending }));
  atmosphere.position.set(0.9, -2.64, -1.35);
  atmosphere.scale.set(13.6, 0.72, 1);
  scene.add(atmosphere);
  return world;
}

function addObserver(scene: THREE.Scene) {
  const group = new THREE.Group();
  group.position.set(1.02, -2.88, 2.25);
  group.scale.setScalar(1.62);
  const dark = new THREE.MeshStandardMaterial({ color: 0x020201, roughness: 1 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.19, 0.78, 8, 18), dark);
  body.position.y = 0.40;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.145, 28, 18), dark);
  head.position.y = 1.04;
  const legs = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.10, 0.82, 10), dark);
  legs.position.y = -0.36;
  group.add(body, head, legs);
  scene.add(group);
  return group;
}

function addAsteroids(scene: THREE.Scene) {
  const asteroids: THREE.Mesh[] = [];
  const defs: Array<[number, number, number, number]> = [
    [-5.1, -3.1, 0.9, .58], [-3.1, -3.45, 1.3, .72], [-1.75, -2.52, -.4, .25], [3.75, -3.0, .8, .58], [4.9, -2.35, -.6, .36], [5.55, 3.0, -3.0, .40], [-5.15, 1.55, -4, .32], [-3.15, 3.52, -5, .20], [4.7, .92, -4.6, .22]
  ];
  defs.forEach(([x, y, z, size], i) => {
    const mesh = new THREE.Mesh(
      new THREE.DodecahedronGeometry(size, 1),
      new THREE.MeshStandardMaterial({ color: 0x342016, roughness: 0.94, emissive: 0x100805, emissiveIntensity: 0.2 })
    );
    mesh.position.set(x, y, z);
    mesh.scale.set(1.25, 0.85 + seeded(i, 90) * 0.45, 1);
    mesh.rotation.set(seeded(i, 91) * 3, seeded(i, 92) * 3, seeded(i, 93) * 3);
    scene.add(mesh);
    asteroids.push(mesh);
  });
  return asteroids;
}

const labels = [
  ["CONTEÚDO", "55%", "21%"],
  ["AUTORIDADE", "80%", "18%"],
  ["SEO TÉCNICO", "86%", "34%"],
  ["SEARCH AI", "88%", "50%"],
  ["RESULTADOS", "81%", "69%"],
  ["ESTRATÉGIA", "56%", "64%"],
  ["REPUTAÇÃO", "54%", "54%"],
] as const;

export default function CinematicUniverseHero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      setFailed(true);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.86;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020101, 0.030);
    const camera = new THREE.PerspectiveCamera(41, 1, 0.1, 100);
    camera.position.set(0, 0.12, 9.8);

    const glow = makeRadialTexture();
    const stars = addStarfield(scene, glow);
    const galaxy = addGalaxy(scene, glow);
    const brain = addBrain(scene, glow);
    const world = addWorld(scene, glow);
    const observer = addObserver(scene);
    const asteroids = addAsteroids(scene);
    const planets = [
      addPlanet(scene, 0.54, [-3.7, 2.78, -2.2], 0x69401f),
      addPlanet(scene, 0.34, [4.95, 1.75, -2.8], 0x56321d),
      addPlanet(scene, 0.27, [-4.65, 0.28, -1.8], 0x55301a),
      addPlanet(scene, 1.08, [7.20, 2.25, -4.5], 0x4b2b19),
    ];

    const key = new THREE.PointLight(0xffb965, 4.5, 17, 2);
    key.position.set(2.9, 1.45, 2.3);
    scene.add(key);
    const rim = new THREE.PointLight(0xffd08a, 2.8, 22, 2);
    rim.position.set(-3.0, 3.7, 1.0);
    scene.add(rim);
    scene.add(new THREE.AmbientLight(0x4a2d1f, 0.28));

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.78, 0.34, 0.44);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());

    const mouse = new THREE.Vector2();
    const target = new THREE.Vector2();
    const onMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = -(((event.clientY - rect.top) / rect.height - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
      composer.setSize(rect.width, rect.height);
    };
    const observerResize = new ResizeObserver(resize);
    observerResize.observe(mount);
    resize();

    const clock = new THREE.Clock();
    let raf = 0;
    const animate = () => {
      const t = clock.getElapsedTime();
      mouse.lerp(target, 0.035);
      camera.position.x = mouse.x * 0.16;
      camera.position.y = 0.12 + mouse.y * 0.09;
      camera.lookAt(0.42, -0.08, 0);
      if (!reduceMotion) {
        stars.rotation.z = t * 0.0014;
        galaxy.rotation.z = -0.20 + t * 0.018;
        brain.rotation.y = Math.sin(t * 0.19) * 0.045 + mouse.x * 0.045;
        brain.rotation.x = Math.sin(t * 0.15) * 0.015 - mouse.y * 0.022;
        const core = brain.getObjectByName("brain-core") as THREE.Sprite | undefined;
        if (core) {
          const pulse = 1 + Math.sin(t * 2.15) * 0.10;
          core.scale.setScalar(0.44 * pulse);
        }
        const orbiters = brain.userData.orbiters as THREE.Sprite[];
        orbiters?.forEach((sprite, i) => {
          const d = sprite.userData;
          const a = t * d.speed + d.phase;
          sprite.position.set(Math.cos(a) * d.rx, Math.sin(a) * d.ry, Math.sin(a * 1.7 + i) * d.rz);
        });
        brain.children.forEach((child, i) => {
          if (child.name.startsWith("orbit-")) child.rotation.z += (i % 2 ? 1 : -1) * 0.00045;
        });
        asteroids.forEach((asteroid, i) => {
          asteroid.rotation.x += 0.00055 + i * 0.00003;
          asteroid.rotation.y += 0.00075 + i * 0.000025;
        });
        planets.forEach((planet, i) => (planet.rotation.y += 0.00032 + i * 0.00006));
        world.rotation.y += 0.00010;
        observer.position.y = -2.88 + Math.sin(t * 0.6) * 0.012;
      }
      composer.render();
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      observerResize.disconnect();
      window.removeEventListener("pointermove", onMove);
      composer.dispose();
      renderer.dispose();
      glow.dispose();
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        mesh.geometry?.dispose?.();
        const material = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(material)) material.forEach((m) => m.dispose());
        else material?.dispose?.();
      });
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_71%_41%,rgba(129,69,27,.075),transparent_30%),radial-gradient(circle_at_44%_12%,rgba(128,77,39,.055),transparent_21%),linear-gradient(112deg,#010101_0%,#050302_54%,#010101_100%)]" />
      <div ref={mountRef} className="absolute inset-0" />
      {failed ? <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_40%,rgba(213,151,74,.10),transparent_28%),radial-gradient(circle_at_43%_12%,rgba(209,142,67,.06),transparent_22%)]" /> : null}

      <div className="hidden lg:block">
        {labels.map(([label, left, top]) => (
          <span key={label} className="absolute z-[4] font-mono text-[10px] font-semibold tracking-[0.27em] text-[#ecd8ba]/92" style={{ left, top }}>{label}</span>
        ))}

        <div className="absolute bottom-[4.5%] left-[4.8%] z-[4] flex items-center gap-7 text-[#f7ead8]">
          <div className="flex items-center gap-3 border-r border-[#d8b27d]/35 pr-7"><BarChart3 className="text-[#dfaa62]" size={23} /><span className="font-mono text-[9px] font-semibold uppercase leading-[1.45] tracking-[0.15em]">Diagnóstico<br />baseado em evidências</span></div>
          <div className="flex items-center gap-3 border-r border-[#d8b27d]/35 pr-7"><Box className="text-[#dfaa62]" size={23} /><span className="font-mono text-[9px] font-semibold uppercase leading-[1.45] tracking-[0.15em]">Visão integrada<br />do seu ecossistema</span></div>
          <div className="flex items-center gap-3"><Target className="text-[#dfaa62]" size={23} /><span className="font-mono text-[9px] font-semibold uppercase leading-[1.45] tracking-[0.15em]">Roadmap prático<br />e prioritário</span></div>
        </div>
        <div className="absolute bottom-[4.6%] right-[5.1%] z-[4] font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#d4a05d]/90">Dados · Estratégia · Resultados reais</div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_45%,transparent_0%,transparent_34%,rgba(0,0,0,.08)_54%,rgba(0,0,0,.30)_100%)]" />
    </div>
  );
}
