import * as THREE from "three";
import { ArchitecturalMaterials } from "../materials/architectural-materials";

/**
 * Builds the Polished Basalt Floor (NYAYLINK_FLOOR)
 * Deep black polished basalt with radial brass & ivory stone inlays.
 */
export function buildFloor(materials: ArchitecturalMaterials): THREE.Group {
  const floorGroup = new THREE.Group();
  floorGroup.name = "NYAYLINK_FLOOR";

  const FLOOR_WIDTH = 48;
  const FLOOR_DEPTH = 48;

  // 1. Main Polished Basalt Floor Slab
  const floorGeo = new THREE.PlaneGeometry(FLOOR_WIDTH, FLOOR_DEPTH, 24, 24);
  floorGeo.rotateX(-Math.PI / 2);
  const floorMesh = new THREE.Mesh(floorGeo, materials.polishedBasalt);
  floorMesh.receiveShadow = true;
  floorMesh.position.y = 0;
  floorGroup.add(floorMesh);

  // 2. Brass Geometric Inlays (Concentric circles under the dome)
  // Radial concentric inlay ring 1 (radius 4.2m)
  const ring1Geo = new THREE.RingGeometry(4.16, 4.24, 64);
  ring1Geo.rotateX(-Math.PI / 2);
  const ring1 = new THREE.Mesh(ring1Geo, materials.agedBrass);
  ring1.position.set(0, 0.002, 0);
  ring1.receiveShadow = true;
  floorGroup.add(ring1);

  // Radial concentric inlay ring 2 (radius 6.8m)
  const ring2Geo = new THREE.RingGeometry(6.75, 6.83, 64);
  ring2Geo.rotateX(-Math.PI / 2);
  const ring2 = new THREE.Mesh(ring2Geo, materials.agedBrass);
  ring2.position.set(0, 0.002, 0);
  ring2.receiveShadow = true;
  floorGroup.add(ring2);

  // 3. Ivory Limestone Inlay Bands (Orthogonal judicial guidelines)
  const bandGeoX = new THREE.PlaneGeometry(32, 0.12);
  bandGeoX.rotateX(-Math.PI / 2);
  const bandX = new THREE.Mesh(bandGeoX, materials.ivoryLimestone);
  bandX.position.set(0, 0.003, 3.2);
  bandX.receiveShadow = true;
  floorGroup.add(bandX);

  const bandGeoZ = new THREE.PlaneGeometry(0.12, 32);
  bandGeoZ.rotateX(-Math.PI / 2);
  const bandZ = new THREE.Mesh(bandGeoZ, materials.ivoryLimestone);
  bandZ.position.set(2.8, 0.003, 0);
  bandZ.receiveShadow = true;
  floorGroup.add(bandZ);

  // 4. Low Sandstone Stylobate Step leading to the Colonnade
  const stepGeo = new THREE.BoxGeometry(22, 0.14, 2.6);
  const step = new THREE.Mesh(stepGeo, materials.warmSandstone);
  step.position.set(6.2, 0.07, -2.2);
  step.castShadow = true;
  step.receiveShadow = true;
  floorGroup.add(step);

  return floorGroup;
}
