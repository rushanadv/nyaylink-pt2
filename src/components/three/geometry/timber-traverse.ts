import * as THREE from "three";
import { ArchitecturalMaterials } from "../materials/architectural-materials";

/**
 * Builds the Timber Traverse (NYAYLINK_TIMBER_TRAVERSE)
 * 36 independently addressable dark walnut vertical fins with individual pivot groups,
 * bevelled architectural geometry, and realistic PBR materials, ready for GSAP scroll animations.
 */
export function buildTimberTraverse(materials: ArchitecturalMaterials): THREE.Group {
  const traverseGroup = new THREE.Group();
  traverseGroup.name = "NYAYLINK_TIMBER_TRAVERSE";

  const NUM_FINS = 36;
  const FIN_HEIGHT = 4.8;
  const FIN_WIDTH = 0.26;
  const FIN_DEPTH = 0.075;
  const BEVEL = 0.008;

  // 2D Bevelled Shape for realistic architectural timber edges
  const shape = new THREE.Shape();
  const hw = FIN_WIDTH / 2;
  const hd = FIN_DEPTH / 2;

  shape.moveTo(-hw + BEVEL, -hd);
  shape.lineTo(hw - BEVEL, -hd);
  shape.quadraticCurveTo(hw, -hd, hw, -hd + BEVEL);
  shape.lineTo(hw, hd - BEVEL);
  shape.quadraticCurveTo(hw, hd, hw - BEVEL, hd);
  shape.lineTo(-hw + BEVEL, hd);
  shape.quadraticCurveTo(-hw, hd, -hw, hd - BEVEL);
  shape.lineTo(-hw, -hd + BEVEL);
  shape.quadraticCurveTo(-hw, -hd, -hw + BEVEL, -hd);

  const extrudeSettings: THREE.ExtrudeGeometryOptions = {
    depth: FIN_HEIGHT,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.005,
    bevelThickness: 0.005,
  };

  const finGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  finGeometry.rotateX(-Math.PI / 2);
  finGeometry.computeVertexNormals();

  // Brass pivot hardware pin
  const pinGeo = new THREE.CylinderGeometry(0.014, 0.014, 0.1, 12);
  const pinMat = materials.agedBrass;

  // Position fins along an architectural arc framing the right foreground
  // from x: 0.6, z: 7.2 curving to x: 7.5, z: 1.8
  for (let i = 0; i < NUM_FINS; i++) {
    const t = i / (NUM_FINS - 1);
    const indexStr = String(i).padStart(2, "0");

    // Independent pivot group for GSAP animation
    const pivot = new THREE.Group();
    pivot.name = `fin_pivot_${indexStr}`;

    const p0 = new THREE.Vector3(0.6, 0, 7.2);
    const p1 = new THREE.Vector3(4.2, 0, 5.8);
    const p2 = new THREE.Vector3(7.8, 0, 1.8);

    const x = Math.pow(1 - t, 2) * p0.x + 2 * (1 - t) * t * p1.x + Math.pow(t, 2) * p2.x;
    const z = Math.pow(1 - t, 2) * p0.z + 2 * (1 - t) * t * p1.z + Math.pow(t, 2) * p2.z;

    pivot.position.set(x, 0, z);

    // Initial progressive louver angle (acoustic brise-soleil wave)
    const baseTangent = Math.atan2(
      2 * (1 - t) * (p1.z - p0.z) + 2 * t * (p2.z - p1.z),
      2 * (1 - t) * (p1.x - p0.x) + 2 * t * (p2.x - p1.x)
    );
    const waveAngle = Math.sin(t * Math.PI * 1.6) * 0.28;
    pivot.rotation.y = baseTangent + waveAngle + 0.35;

    // Create the individual fin mesh inside the pivot
    const finMesh = new THREE.Mesh(finGeometry, materials.darkWalnut);
    finMesh.name = `fin_${indexStr}`;
    finMesh.castShadow = true;
    finMesh.receiveShadow = true;
    finMesh.position.y = 0;

    pivot.add(finMesh);

    // Brass pins top and bottom
    const bottomPin = new THREE.Mesh(pinGeo, pinMat);
    bottomPin.position.y = 0.04;
    pivot.add(bottomPin);

    const topPin = new THREE.Mesh(pinGeo, pinMat);
    topPin.position.y = FIN_HEIGHT - 0.04;
    pivot.add(topPin);

    traverseGroup.add(pivot);
  }

  // Header Rail linking the fins
  const railCurvePoints: THREE.Vector3[] = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    const p0 = new THREE.Vector3(0.6, FIN_HEIGHT + 0.06, 7.2);
    const p1 = new THREE.Vector3(4.2, FIN_HEIGHT + 0.06, 5.8);
    const p2 = new THREE.Vector3(7.8, FIN_HEIGHT + 0.06, 1.8);

    const rx = Math.pow(1 - t, 2) * p0.x + 2 * (1 - t) * t * p1.x + Math.pow(t, 2) * p2.x;
    const rz = Math.pow(1 - t, 2) * p0.z + 2 * (1 - t) * t * p1.z + Math.pow(t, 2) * p2.z;
    railCurvePoints.push(new THREE.Vector3(rx, p0.y, rz));
  }
  const railCurve = new THREE.CatmullRomCurve3(railCurvePoints);
  const railGeo = new THREE.TubeGeometry(railCurve, 32, 0.05, 8, false);
  const railMesh = new THREE.Mesh(railGeo, materials.darkWalnut);
  railMesh.name = "traverse_header_rail";
  railMesh.castShadow = true;
  traverseGroup.add(railMesh);

  return traverseGroup;
}
