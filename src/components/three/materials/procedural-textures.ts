import * as THREE from "three";

/**
 * Procedural Canvas Texture Generator
 * Generates tactile, realistic PBR bump and roughness maps without external image assets.
 */

// Procedural Sandstone / Limestone Texture
export function createStoneTexture(
  type: "limestone" | "sandstone",
  size = 512
): THREE.Texture {
  if (typeof document === "undefined") {
    return new THREE.Texture();
  }

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Base stone tone
  ctx.fillStyle = type === "limestone" ? "#E5DED0" : "#C6AD8C";
  ctx.fillRect(0, 0, size, size);

  // Subtle sedimentary strata (horizontal micro-layers)
  const imgData = ctx.getImageData(0, 0, size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    const wave = Math.sin(y * 0.08) * 4 + Math.sin(y * 0.02) * 8;
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const noise = (Math.random() - 0.5) * 18;
      const grain = (Math.random() - 0.5) * 8;
      const stratum = Math.sin((y + wave) * 0.05) * 6;

      const delta = noise + grain + stratum;
      data[idx] = Math.min(255, Math.max(0, data[idx] + delta));
      data[idx + 1] = Math.min(255, Math.max(0, data[idx + 1] + delta * 0.95));
      data[idx + 2] = Math.min(255, Math.max(0, data[idx + 2] + delta * 0.85));
    }
  }

  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  return texture;
}

// Procedural Dark Walnut Grain Texture
export function createWalnutTexture(size = 512): THREE.Texture {
  if (typeof document === "undefined") {
    return new THREE.Texture();
  }

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Base dark walnut tone (#493025)
  ctx.fillStyle = "#493025";
  ctx.fillRect(0, 0, size, size);

  const imgData = ctx.getImageData(0, 0, size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      // Vertical wood fibers with subtle lateral wobble
      const fiber = Math.sin(x * 0.2 + Math.sin(y * 0.02) * 12) * 14;
      const ring = Math.sin(x * 0.04 + Math.sin(y * 0.01) * 6) * 10;
      const microNoise = (Math.random() - 0.5) * 10;

      const delta = fiber + ring + microNoise;
      data[idx] = Math.min(255, Math.max(0, data[idx] + delta * 1.1));
      data[idx + 1] = Math.min(255, Math.max(0, data[idx + 1] + delta * 0.7));
      data[idx + 2] = Math.min(255, Math.max(0, data[idx + 2] + delta * 0.5));
    }
  }

  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 4);
  return texture;
}

// Procedural Polished Basalt Tile Texture
export function createBasaltTexture(size = 512): THREE.Texture {
  if (typeof document === "undefined") {
    return new THREE.Texture();
  }

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Deep basalt dark charcoal (#242322)
  ctx.fillStyle = "#242322";
  ctx.fillRect(0, 0, size, size);

  // Subtle slate / crystalline flecks
  for (let i = 0; i < 4000; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const brightness = 15 + Math.random() * 25;
    ctx.fillStyle = `rgba(${brightness + 20}, ${brightness + 20}, ${brightness + 22}, 0.25)`;
    ctx.fillRect(x, y, 1.5, 1.5);
  }

  // Polished large slab joint lines (fine hairline architectural joints)
  ctx.strokeStyle = "rgba(180, 160, 140, 0.25)";
  ctx.lineWidth = 1;
  ctx.strokeRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(6, 6);
  return texture;
}
