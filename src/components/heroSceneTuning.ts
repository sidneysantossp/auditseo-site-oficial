export const HERO_TUNING = {
  galaxy: {
    position: [-0.28, 4.02, -4.45] as const,
    scale: 1.08,
    pointSize: 0.038,
    rotationX: 0.74,
    rotationZ: -0.2,
  },
  brain: {
    position: [3.48, 0.38, -0.12] as const,
    scale: 1.17,
    nodeSize: 0.065,
    lineOpacity: 0.2,
    shellOpacity: 0.035,
    coreScale: 0.38,
  },
  world: {
    position: [0.95, -8.0, -2.7] as const,
    radius: 8.6,
    atmosphereY: -2.28,
  },
  observer: {
    position: [1.42, -2.55, 2.25] as const,
    scale: 1.68,
  },
  renderer: {
    exposure: 0.86,
    bloomStrength: 0.74,
    bloomRadius: 0.32,
    bloomThreshold: 0.46,
    fogDensity: 0.028,
  },
  horizon: {
    y: -2.22,
    width: 7.4,
    curvature: 0.021,
    lightCount: 820,
  },
} as const;
