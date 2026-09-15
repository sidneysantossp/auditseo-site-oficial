import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { BarChart3, Box, Target } from "lucide-react";

const GOLD = new THREE.Color("#d9a057");
const GOLD_HOT = new THREE.Color("#ffca78");
const PALE = new THREE.Color("#fff2d9");

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
  g.addColorStop(.12, "rgba(255,232,194,.96)");
  g.addColorStop(.38, "rgba(235,165,81,.44)");
  g.addColorStop(1, "rgba(208,118,40,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function addStarfield(scene: THREE.Scene, texture: THREE.Texture) {
  const count = 2600;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (seeded(i, 1) - 0.5) * 25;
    positions[i * 3 + 1] = (seeded(i, 2) - 0.5) * 13;
    positions[i * 3 + 2] = -2 - seeded(i, 3) * 14;
    const w = seeded(i, 4);
    colors[i * 3] = 0.72 + w * 0.28;
    colors[i * 3 + 1] = 0.54 + w * 0.36;
    colors[i * 3 + 2] = 0.32 + w * 0.42;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size: 0.042,
    map: texture,
    transparent: true,
    opacity: 0.92,
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
  group.position.set(-1.25, 3.25, -4.8);
  group.rotation.set(0.92, 0.08, -0.24);
  const count = 4200;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const arm = i % 5;
    const radius = 0.05 + seeded(i, 10) * 2.15;
    const theta = radius * 5.5 + arm * (Math.PI * 2 / 5) + (seeded(i, 11) - 0.5) * 0.38;
    const spread = (seeded(i, 12) - 0.5) * (0.12 + radius * 0.19);
    positions[i * 3] = Math.cos(theta) * radius * 1.25;
    positions[i * 3 + 1] = Math.sin(theta) * radius * 0.92 + spread;
    positions[i * 3 + 2] = (seeded(i, 13) - 0.5) * (0.12 + radius * 0.22);
    const hot = 1 - Math.min(1, radius / 2.15);
    colors[i * 3] = 0.72 + hot * 0.28;
    colors[i * 3 + 1] = 0.46 + hot * 0.46;
    colors[i * 3 + 2] = 0.22 + hot * 0.58;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const points = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({ size: 0.065, map: texture, transparent: true, opacity: 0.82, vertexColors: true, depthWrite: false, blending: THREE.AdditiveBlending })
  );
  group.add(points);
  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: 0xfff0ce, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending }));
  core.scale.set(1.45, 1.45, 1.45);
  group.add(core);
  scene.add(group);
  return group;
}

function brainPoint(i: number, side: number) {
  const u = (i + 0.5) / 140;
  const phi = Math.acos(1 - 2 * u);
  const theta = seeded(i, 30 + side) * Math.PI * 2;
  const x0 = Math.sin(phi) * Math.cos(theta);
  const y0 = Math.cos(phi);
  const z0 = Math.sin(phi) * Math.sin(theta);
  const wrinkle = 1 + 0.14 * Math.sin(theta * 4 + phi * 5) + 0.08 * Math.sin(theta * 8 - phi * 3);
  return new THREE.Vector3(
    side * (0.38 + Math.abs(x0) * 1.15 * wrinkle),
    y0 * 1.34 * wrinkle,
    z0 * 0.93 * wrinkle
  );
}

function addBrain(scene: THREE.Scene, texture: THREE.Texture) {
  const group = new THREE.Group();
  group.position.set(2.55, 0.55, -0.05);
  group.scale.setScalar(1.5);
  const nodes: THREE.Vector3[] = [];
  [-1, 1].forEach((side) => {
    for (let i = 0; i < 140; i++) nodes.push(brainPoint(i, side));
  });
  for (let i = 0; i < 26; i++) {
    const t = i / 25;
    nodes.push(new THREE.Vector3((seeded(i, 61) - 0.5) * 0.23, -1.26 - t * 1.35, (seeded(i, 62) - 0.5) * 0.18));
  }

  const pointPositions = new Float32Array(nodes.length * 3);
  nodes.forEach((n, i) => n.toArray(pointPositions, i * 3));
  const pointGeometry = new THREE.BufferGeometry();
  pointGeometry.setAttribute("position", new THREE.BufferAttribute(pointPositions, 3));
  const nodeCloud = new THREE.Points(pointGeometry, new THREE.PointsMaterial({
    size: 0.105,
    map: texture,
    color: GOLD,
    transparent: true,
    opacity: 0.98,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  group.add(nodeCloud);

  const linePositions: number[] = [];
  for (let i = 0; i < nodes.length; i++) {
    const nearest: Array<{ j: number; d: number }> = [];
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue;
      const d = nodes[i].distanceToSquared(nodes[j]);
      if (d < 0.32) nearest.push({ j, d });
    }
    nearest.sort((a, b) => a.d - b.d).slice(0, 3).forEach(({ j }) => {
      if (i < j) linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
    });
  }
  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
  group.add(new THREE.LineSegments(lineGeometry, new THREE.LineBasicMaterial({ color: 0xe0a55d, transparent: true, opacity: 0.31, blending: THREE.AdditiveBlending, depthWrite: false })));

  const membrane = new THREE.Mesh(
    new THREE.SphereGeometry(1.7, 64, 48),
    new THREE.MeshPhysicalMaterial({ color: 0x8a5126, transparent: true, opacity: 0.045, roughness: 0.5, transmission: 0.25, depthWrite: false, side: THREE.DoubleSide })
  );
  membrane.scale.set(1.08, 0.91, 0.7);
  group.add(membrane);

  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: PALE, transparent: true, opacity: 1, depthWrite: false, blending: THREE.AdditiveBlending }));
  core.position.set(0.04, -0.02, 0.42);
  core.scale.set(1.1, 1.1, 1.1);
  core.name = "brain-core";
  group.add(core);

  const orbiters: THREE.Sprite[] = [];
  for (let i = 0; i < 10; i++) {
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: i % 3 === 0 ? PALE : GOLD_HOT, transparent: true, opacity: 0.96, depthWrite: false, blending: THREE.AdditiveBlending }));
    sprite.scale.setScalar(i % 3 === 0 ? 0.3 : 0.18);
    sprite.userData = { rx: 2.0 + (i % 5) * 0.32, ry: 0.74 + (i % 4) * 0.14, rz: 0.55 + (i % 3) * 0.16, speed: 0.12 + i * 0.009, phase: i * 0.66 };
    group.add(sprite);
    orbiters.push(sprite);
  }

  for (let i = 0; i < 9; i++) {
    const points: THREE.Vector3[] = [];
    const rx = 2.02 + i * 0.25;
    const ry = 0.72 + i * 0.10;
    for (let j = 0; j <= 180; j++) {
      const a = (j / 180) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(a) * rx, Math.sin(a) * ry, Math.sin(a * 2 + i) * 0.22));
    }
    const g = new THREE.BufferGeometry().setFromPoints(points);
    const loop = new THREE.Line(g, new THREE.LineBasicMaterial({ color: i % 2 ? 0xd39146 : 0xf6c77e, transparent: true, opacity: 0.18 + (i % 3) * 0.035, blending: THREE.AdditiveBlending, depthWrite: false }));
    loop.rotation.set(0.12 + i * 0.055, 0.28 - i * 0.032, -0.32 + i * 0.082);
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
    new THREE.MeshStandardMaterial({ color: base, roughness: 0.98, metalness: 0.02, emissive: new THREE.Color(base).multiplyScalar(0.12) })
  );
  planet.position.set(...position);
  scene.add(planet);
  return planet;
}

function addWorld(scene: THREE.Scene, texture: THREE.Texture) {
  const world = new THREE.Mesh(new THREE.SphereGeometry(8.3, 96, 56), new THREE.MeshStandardMaterial({ color: 0x1a1009, roughness: 1, emissive: 0x120a05, emissiveIntensity: 0.52 }));
  world.position.set(1.0, -8.45, -2.4);
  scene.add(world);
  const atmosphere = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: 0xf0b666, transparent: true, opacity: 0.66, depthWrite: false, blending: THREE.AdditiveBlending }));
  atmosphere.position.set(1.0, -2.45, -1.35);
  atmosphere.scale.set(13.3, 1.25, 1);
  scene.add(atmosphere);
  return world;
}

function addObserver(scene: THREE.Scene) {
  const group = new THREE.Group();
  group.position.set(0.95, -2.63, 1.9);
  const dark = new THREE.MeshStandardMaterial({ color: 0x030302, roughness: 1 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.82, 8, 18), dark);
  body.position.y = 0.42;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 28, 18), dark);
  head.position.y = 1.08;
  const legs = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.11, 0.86, 10), dark);
  legs.position.y = -0.38;
  group.add(body, head, legs);
  scene.add(group);
  return group;
}

function addAsteroids(scene: THREE.Scene) {
  const asteroids: THREE.Mesh[] = [];
  const defs: Array<[number, number, number, number]> = [
    [-5.1, -3.2, 0.8, .62], [-3.1, -3.55, 1.2, .75], [-1.75, -2.58, -.5, .26], [3.7, -3.15, .7, .62], [4.9, -2.45, -.7, .38], [5.5, 3.1, -3.2, .42], [-5.25, 1.55, -4, .35], [-3.2, 3.55, -5, .22], [4.7, .92, -4.8, .24]
  ];
  defs.forEach(([x, y, z, size], i) => {
    const mesh = new THREE.Mesh(new THREE.DodecahedronGeometry(size, 1), new THREE.MeshStandardMaterial({ color: 0x24160f, roughness: 0.95 }));
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

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030201, 0.045);
    const camera = new THREE.PerspectiveCamera(41, 1, 0.1, 100);
    camera.position.set(0, 0.15, 9.7);

    const glow = makeRadialTexture();
    const stars = addStarfield(scene, glow);
    const galaxy = addGalaxy(scene, glow);
    const brain = addBrain(scene, glow);
    const world = addWorld(scene, glow);
    const observer = addObserver(scene);
    const asteroids = addAsteroids(scene);
    const planets = [
      addPlanet(scene, 0.58, [-3.7, 2.78, -2.2], 0x75421f),
      addPlanet(scene, 0.38, [4.95, 1.75, -2.8], 0x5c321b),
      addPlanet(scene, 0.30, [-4.65, 0.28, -1.8], 0x5a301a),
      addPlanet(scene, 1.15, [7.25, 2.25, -4.5], 0x57311d),
    ];

    const key = new THREE.PointLight(0xffb965, 16, 18, 2);
    key.position.set(2.9, 1.5, 2.3);
    scene.add(key);
    const rim = new THREE.PointLight(0xffd08a, 8, 22, 2);
    rim.position.set(-3.5, 4.0, 1.0);
    scene.add(rim);
    scene.add(new THREE.AmbientLight(0x5a3b28, 0.55));

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 1.35, 0.72, 0.08);
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
      camera.position.x = mouse.x * 0.18;
      camera.position.y = 0.15 + mouse.y * 0.11;
      camera.lookAt(0.42, -0.05, 0);
      if (!reduceMotion) {
        stars.rotation.z = t * 0.0018;
        galaxy.rotation.z = -0.24 + t * 0.024;
        brain.rotation.y = Math.sin(t * 0.19) * 0.055 + mouse.x * 0.055;
        brain.rotation.x = Math.sin(t * 0.15) * 0.018 - mouse.y * 0.026;
        const core = brain.getObjectByName("brain-core") as THREE.Sprite | undefined;
        if (core) {
          const pulse = 1 + Math.sin(t * 2.15) * 0.13;
          core.scale.setScalar(1.1 * pulse);
        }
        const orbiters = brain.userData.orbiters as THREE.Sprite[];
        orbiters?.forEach((sprite, i) => {
          const d = sprite.userData;
          const a = t * d.speed + d.phase;
          sprite.position.set(Math.cos(a) * d.rx, Math.sin(a) * d.ry, Math.sin(a * 1.7 + i) * d.rz);
        });
        brain.children.forEach((child, i) => {
          if (child.name.startsWith("orbit-")) child.rotation.z += (i % 2 ? 1 : -1) * 0.0007;
        });
        asteroids.forEach((asteroid, i) => {
          asteroid.rotation.x += 0.0008 + i * 0.00004;
          asteroid.rotation.y += 0.001 + i * 0.00003;
        });
        planets.forEach((planet, i) => (planet.rotation.y += 0.00045 + i * 0.00008));
        world.rotation.y += 0.00022;
        observer.position.y = -2.63 + Math.sin(t * 0.6) * 0.018;
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_41%,rgba(139,76,27,.20),transparent_30%),radial-gradient(circle_at_43%_12%,rgba(124,71,34,.12),transparent_21%),linear-gradient(112deg,#020201_0%,#060301_52%,#020101_100%)]" />
      <div ref={mountRef} className="absolute inset-0" />
      {failed ? <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_40%,rgba(213,151,74,.19),transparent_28%),radial-gradient(circle_at_43%_12%,rgba(209,142,67,.10),transparent_22%)]" /> : null}

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

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_45%,transparent_0%,transparent_32%,rgba(0,0,0,.12)_50%,rgba(0,0,0,.42)_100%)]" />
    </div>
  );
}
