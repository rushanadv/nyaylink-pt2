import * as THREE from "three";
import {
  createStoneTexture,
  createWalnutTexture,
  createBasaltTexture,
} from "./procedural-textures";

export interface ArchitecturalMaterials {
  ivoryLimestone: THREE.MeshStandardMaterial;
  warmSandstone: THREE.MeshStandardMaterial;
  darkWalnut: THREE.MeshStandardMaterial;
  polishedBasalt: THREE.MeshStandardMaterial;
  agedBrass: THREE.MeshStandardMaterial;
  sunbeamVolume: THREE.MeshBasicMaterial;
  recessedInterior: THREE.MeshStandardMaterial;
}

export function createArchitecturalMaterials(): ArchitecturalMaterials {
  const limestoneTexture = createStoneTexture("limestone");
  const sandstoneTexture = createStoneTexture("sandstone");
  const walnutTexture = createWalnutTexture();
  const basaltTexture = createBasaltTexture();

  // 1. Ivory Limestone (#E5DED0 -> refined #E8E2D6)
  const ivoryLimestone = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#E8E2D6"),
    roughness: 0.58,
    metalness: 0.02,
    bumpMap: limestoneTexture,
    bumpScale: 0.012,
  });

  // 2. Warm Sandstone (#C6AD8C -> refined #CDB596)
  const warmSandstone = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#CDB596"),
    roughness: 0.68,
    metalness: 0.03,
    bumpMap: sandstoneTexture,
    bumpScale: 0.016,
  });

  // 3. Dark Walnut (#493025 -> refined #422A1E)
  const darkWalnut = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#422A1E"),
    roughness: 0.32,
    metalness: 0.05,
    bumpMap: walnutTexture,
    bumpScale: 0.01,
  });

  // 4. Polished Basalt (#242322 -> refined #1F1E1D)
  const polishedBasalt = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#1F1E1D"),
    roughness: 0.12,
    metalness: 0.25,
    bumpMap: basaltTexture,
    bumpScale: 0.004,
  });

  // 5. Aged Brass (#92744D -> refined #9B7C4F)
  const agedBrass = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#9B7C4F"),
    roughness: 0.30,
    metalness: 0.88,
  });

  // 6. Volumetric Sunlight through Oculus
  const sunbeamVolume = new THREE.MeshBasicMaterial({
    color: new THREE.Color("#FFF5E4"),
    transparent: true,
    opacity: 0.16,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  // 7. Recessed Interior Shade
  const recessedInterior = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#171513"),
    roughness: 0.88,
    metalness: 0.0,
  });

  return {
    ivoryLimestone,
    warmSandstone,
    darkWalnut,
    polishedBasalt,
    agedBrass,
    sunbeamVolume,
    recessedInterior,
  };
}
