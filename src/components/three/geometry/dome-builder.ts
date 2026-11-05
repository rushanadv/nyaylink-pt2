import * as THREE from "three";
import { ArchitecturalMaterials } from "../materials/architectural-materials";

/**
 * Builds the Grand Dome (NYAYLINK_DOME)
 * Monumental ivory sandstone dome with calculated radial ribs,
 * concentric architectural relief rings, cylindrical drum with niches,
 * and central brass oculus with volumetric sunlight.
 */
export function buildGrandDome(materials: ArchitecturalMaterials): THREE.Group {
  const domeGroup = new THREE.Group();
  domeGroup.name = "NYAYLINK_DOME";

  const DRUM_BOTTOM_Y = 5.4; // Sits directly atop the colonnade entablature
  const DRUM_HEIGHT = 2.2;
  const DRUM_RADIUS = 5.2;
  const DOME_RADIUS = 5.1;
  const OCULUS_RADIUS = 1.25;

  // -------------------------------------------------------------
  // 1. DRUM BASE WITH CLASSICAL MOLDINGS & RECESSED NICHES
  // -------------------------------------------------------------
  const baseGroup = new THREE.Group();
  baseGroup.name = "dome_base";

  // Stepped Drum Moldings (LatheGeometry for architectural cornice)
  const drumProfile: THREE.Vector2[] = [
    new THREE.Vector2(DRUM_RADIUS + 0.35, 0),
    new THREE.Vector2(DRUM_RADIUS + 0.35, 0.22),
    new THREE.Vector2(DRUM_RADIUS + 0.15, 0.22),
    new THREE.Vector2(DRUM_RADIUS + 0.15, 0.42),
    new THREE.Vector2(DRUM_RADIUS, 0.42),
    new THREE.Vector2(DRUM_RADIUS, DRUM_HEIGHT - 0.38),
    new THREE.Vector2(DRUM_RADIUS + 0.22, DRUM_HEIGHT - 0.38),
    new THREE.Vector2(DRUM_RADIUS + 0.28, DRUM_HEIGHT - 0.14),
    new THREE.Vector2(DRUM_RADIUS + 0.12, DRUM_HEIGHT),
  ];

  const drumGeo = new THREE.LatheGeometry(drumProfile, 64);
  const drumMesh = new THREE.Mesh(drumGeo, materials.warmSandstone);
  drumMesh.position.y = DRUM_BOTTOM_Y;
  drumMesh.castShadow = true;
  drumMesh.receiveShadow = true;
  baseGroup.add(drumMesh);

  // Recessed Arched Niches along the drum perimeter
  const NUM_NICHES = 16;
  const nicheGeo = new THREE.BoxGeometry(0.58, 1.25, 0.22);
  for (let i = 0; i < NUM_NICHES; i++) {
    const angle = (i / NUM_NICHES) * Math.PI * 2;
    const nicheMesh = new THREE.Mesh(nicheGeo, materials.recessedInterior);
    nicheMesh.position.set(
      Math.sin(angle) * (DRUM_RADIUS - 0.04),
      DRUM_BOTTOM_Y + DRUM_HEIGHT * 0.48,
      Math.cos(angle) * (DRUM_RADIUS - 0.04)
    );
    nicheMesh.rotation.y = angle;
    baseGroup.add(nicheMesh);
  }

  domeGroup.add(baseGroup);

  // -------------------------------------------------------------
  // 2. SOLID DOME SHELL (Hemisphere with open oculus)
  // -------------------------------------------------------------
  const shellGroup = new THREE.Group();
  shellGroup.name = "dome_shell";

  const DOME_CENTER_Y = DRUM_BOTTOM_Y + DRUM_HEIGHT;

  // Calculate theta for oculus opening
  const oculusAngle = Math.asin(OCULUS_RADIUS / DOME_RADIUS);
  const thetaStart = oculusAngle;
  const thetaLength = Math.PI / 2 - oculusAngle + 0.05;

  // Outer Sandstone Shell
  const outerShellGeo = new THREE.SphereGeometry(
    DOME_RADIUS,
    64,
    32,
    0,
    Math.PI * 2,
    thetaStart,
    thetaLength
  );
  const outerShell = new THREE.Mesh(outerShellGeo, materials.ivoryLimestone);
  outerShell.position.y = DOME_CENTER_Y;
  outerShell.castShadow = true;
  outerShell.receiveShadow = true;
  shellGroup.add(outerShell);

  // Inner Ceiling Coffers Shell
  const innerShellGeo = new THREE.SphereGeometry(
    DOME_RADIUS - 0.25,
    64,
    32,
    0,
    Math.PI * 2,
    thetaStart,
    thetaLength
  );
  const innerShell = new THREE.Mesh(innerShellGeo, materials.warmSandstone);
  innerShell.material.side = THREE.BackSide;
  innerShell.position.y = DOME_CENTER_Y;
  innerShell.receiveShadow = true;
  shellGroup.add(innerShell);

  domeGroup.add(shellGroup);

  // -------------------------------------------------------------
  // 3. CONCENTRIC ARCHITECTURAL RINGS
  // -------------------------------------------------------------
  const ringsGroup = new THREE.Group();
  ringsGroup.name = "dome_rings";

  // Ring 1: Equatorial Base Ring (Cornice)
  const baseRingGeo = new THREE.TorusGeometry(DOME_RADIUS + 0.14, 0.12, 16, 64);
  baseRingGeo.rotateX(Math.PI / 2);
  const baseRing = new THREE.Mesh(baseRingGeo, materials.warmSandstone);
  baseRing.position.y = DOME_CENTER_Y;
  baseRing.castShadow = true;
  ringsGroup.add(baseRing);

  // Ring 2: Lower-Mid Relief Ring
  const ring2Lat = Math.PI / 3; // 60 deg from zenith
  const ring2Radius = DOME_RADIUS * Math.sin(ring2Lat) + 0.08;
  const ring2Height = DOME_RADIUS * Math.cos(ring2Lat);
  const ring2Geo = new THREE.TorusGeometry(ring2Radius, 0.09, 16, 64);
  ring2Geo.rotateX(Math.PI / 2);
  const ring2 = new THREE.Mesh(ring2Geo, materials.warmSandstone);
  ring2.position.y = DOME_CENTER_Y + ring2Height;
  ring2.castShadow = true;
  ringsGroup.add(ring2);

  // Ring 3: Upper-Mid Relief Ring with Aged Brass Inlay
  const ring3Lat = Math.PI / 5; // 36 deg from zenith
  const ring3Radius = DOME_RADIUS * Math.sin(ring3Lat) + 0.08;
  const ring3Height = DOME_RADIUS * Math.cos(ring3Lat);
  const ring3Geo = new THREE.TorusGeometry(ring3Radius, 0.08, 16, 64);
  ring3Geo.rotateX(Math.PI / 2);
  const ring3 = new THREE.Mesh(ring3Geo, materials.warmSandstone);
  ring3.position.y = DOME_CENTER_Y + ring3Height;
  ring3.castShadow = true;
  ringsGroup.add(ring3);

  const ring3BrassGeo = new THREE.TorusGeometry(ring3Radius + 0.03, 0.025, 12, 64);
  ring3BrassGeo.rotateX(Math.PI / 2);
  const ring3Brass = new THREE.Mesh(ring3BrassGeo, materials.agedBrass);
  ring3Brass.position.y = DOME_CENTER_Y + ring3Height;
  ringsGroup.add(ring3Brass);

  domeGroup.add(ringsGroup);

  // -------------------------------------------------------------
  // 4. RADIAL DOME RIBS (Calculated 3D Curves)
  // -------------------------------------------------------------
  const ribsGroup = new THREE.Group();
  ribsGroup.name = "dome_ribs";

  const NUM_RIBS = 20;
  const oculusHeight = Math.sqrt(
    Math.max(0, DOME_RADIUS * DOME_RADIUS - OCULUS_RADIUS * OCULUS_RADIUS)
  );

  for (let i = 0; i < NUM_RIBS; i++) {
    const angle = (i / NUM_RIBS) * Math.PI * 2;
    const curvePoints: THREE.Vector3[] = [];
    const segments = 16;

    for (let s = 0; s <= segments; s++) {
      const t = s / segments;
      const lat = Math.PI / 2 - t * (Math.PI / 2 - thetaStart);
      const r = (DOME_RADIUS + 0.09) * Math.sin(lat);
      const y = (DOME_RADIUS + 0.09) * Math.cos(lat);

      curvePoints.push(
        new THREE.Vector3(
          Math.sin(angle) * r,
          DOME_CENTER_Y + y,
          Math.cos(angle) * r
        )
      );
    }

    const ribCurve = new THREE.CatmullRomCurve3(curvePoints);
    const ribGeo = new THREE.TubeGeometry(ribCurve, 20, 0.085, 8, false);
    const ribMesh = new THREE.Mesh(ribGeo, materials.warmSandstone);
    ribMesh.castShadow = true;
    ribMesh.receiveShadow = true;
    ribsGroup.add(ribMesh);
  }

  domeGroup.add(ribsGroup);

  // -------------------------------------------------------------
  // 5. CENTRAL OCULUS & VOLUMETRIC SUNLIGHT
  // -------------------------------------------------------------
  const oculusGroup = new THREE.Group();
  oculusGroup.name = "dome_oculus";

  const oculusY = DOME_CENTER_Y + oculusHeight;

  // Aged Brass Oculus Collar
  const oculusRingGeo = new THREE.TorusGeometry(OCULUS_RADIUS + 0.08, 0.16, 16, 64);
  oculusRingGeo.rotateX(Math.PI / 2);
  const oculusRingMesh = new THREE.Mesh(oculusRingGeo, materials.agedBrass);
  oculusRingMesh.position.y = oculusY;
  oculusRingMesh.castShadow = true;
  oculusGroup.add(oculusRingMesh);

  // Stepped Sandstone Bezel
  const oculusBezelGeo = new THREE.CylinderGeometry(
    OCULUS_RADIUS + 0.28,
    OCULUS_RADIUS + 0.28,
    0.32,
    48,
    1,
    true
  );
  const oculusBezel = new THREE.Mesh(oculusBezelGeo, materials.warmSandstone);
  oculusBezel.position.y = oculusY + 0.1;
  oculusGroup.add(oculusBezel);

  // Volumetric Sunbeam passing down through the Oculus into the Court
  const beamHeight = 14.0;
  const sunbeamGeo = new THREE.CylinderGeometry(
    OCULUS_RADIUS * 0.95,
    OCULUS_RADIUS * 3.4,
    beamHeight,
    32,
    1,
    true
  );
  const sunbeamMesh = new THREE.Mesh(sunbeamGeo, materials.sunbeamVolume);
  sunbeamMesh.position.set(0.5, oculusY - beamHeight * 0.5, 0.4);
  sunbeamMesh.rotation.z = -0.05;
  sunbeamMesh.rotation.x = 0.04;
  oculusGroup.add(sunbeamMesh);

  domeGroup.add(oculusGroup);

  return domeGroup;
}
