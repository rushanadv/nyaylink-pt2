import * as THREE from "three";
import { ArchitecturalMaterials } from "../materials/architectural-materials";

/**
 * Builds the Marble Colonnade & Repeating Arches (NYAYLINK_COLONNADE)
 * Modular columns with classical base, tapered fluted shaft, and Corinthian/bracket capital.
 * Repeating stone arches with deep reveals, supporting the dome drum and entablature.
 */
export function buildColonnade(materials: ArchitecturalMaterials): THREE.Group {
  const colonnadeGroup = new THREE.Group();
  colonnadeGroup.name = "NYAYLINK_COLONNADE";

  const COLUMN_HEIGHT = 4.6;
  const COLUMN_RADIUS_BOTTOM = 0.36;
  const COLUMN_RADIUS_TOP = 0.30;
  const DRUM_RADIUS = 5.2;

  // -------------------------------------------------------------
  // 1. REUSABLE COLUMN BUILDER
  // -------------------------------------------------------------
  function createColumn(): THREE.Group {
    const colGroup = new THREE.Group();

    // 1a. Square Sandstone Plinth
    const plinthGeo = new THREE.BoxGeometry(0.96, 0.24, 0.96);
    const plinth = new THREE.Mesh(plinthGeo, materials.warmSandstone);
    plinth.position.y = 0.12;
    plinth.castShadow = true;
    plinth.receiveShadow = true;
    colGroup.add(plinth);

    // 1b. Molded Torus & Scotia Base (LatheGeometry)
    const baseProfile: THREE.Vector2[] = [
      new THREE.Vector2(0.46, 0),
      new THREE.Vector2(0.46, 0.08),
      new THREE.Vector2(0.42, 0.14),
      new THREE.Vector2(0.44, 0.22),
      new THREE.Vector2(0.38, 0.28),
      new THREE.Vector2(COLUMN_RADIUS_BOTTOM, 0.34),
    ];
    const baseGeo = new THREE.LatheGeometry(baseProfile, 32);
    const baseMesh = new THREE.Mesh(baseGeo, materials.ivoryLimestone);
    baseMesh.position.y = 0.24;
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    colGroup.add(baseMesh);

    // 1c. Tapered & Fluted Shaft (24 fluted facets)
    const shaftGeo = new THREE.CylinderGeometry(
      COLUMN_RADIUS_TOP,
      COLUMN_RADIUS_BOTTOM,
      COLUMN_HEIGHT - 0.76,
      24,
      1,
      false
    );
    const shaft = new THREE.Mesh(shaftGeo, materials.ivoryLimestone);
    shaft.position.y = 0.24 + 0.34 + (COLUMN_HEIGHT - 0.76) * 0.5;
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    colGroup.add(shaft);

    // 1d. Classical Capital (Echinus & Astragal)
    const capProfile: THREE.Vector2[] = [
      new THREE.Vector2(COLUMN_RADIUS_TOP, 0),
      new THREE.Vector2(COLUMN_RADIUS_TOP + 0.04, 0.06),
      new THREE.Vector2(COLUMN_RADIUS_TOP + 0.12, 0.14),
      new THREE.Vector2(0.48, 0.22),
    ];
    const capGeo = new THREE.LatheGeometry(capProfile, 32);
    const capMesh = new THREE.Mesh(capGeo, materials.ivoryLimestone);
    capMesh.position.y = COLUMN_HEIGHT - 0.22;
    capMesh.castShadow = true;
    colGroup.add(capMesh);

    // Aged Brass Capital Collar
    const brassBandGeo = new THREE.TorusGeometry(COLUMN_RADIUS_TOP + 0.015, 0.018, 12, 32);
    brassBandGeo.rotateX(Math.PI / 2);
    const brassBand = new THREE.Mesh(brassBandGeo, materials.agedBrass);
    brassBand.position.y = COLUMN_HEIGHT - 0.22;
    colGroup.add(brassBand);

    // Square Abacus Block
    const abacusGeo = new THREE.BoxGeometry(0.98, 0.16, 0.98);
    const abacus = new THREE.Mesh(abacusGeo, materials.warmSandstone);
    abacus.position.y = COLUMN_HEIGHT - 0.08;
    abacus.castShadow = true;
    colGroup.add(abacus);

    return colGroup;
  }

  // -------------------------------------------------------------
  // 2. CIRCULAR PERISTYLE COLONNADE UNDER THE DOME DRUM
  // -------------------------------------------------------------
  // 12 columns arranged radially under the drum
  const NUM_DRUM_COLUMNS = 12;
  for (let i = 0; i < NUM_DRUM_COLUMNS; i++) {
    const angle = (i / NUM_DRUM_COLUMNS) * Math.PI * 2;
    const col = createColumn();
    col.name = `drum_column_${i}`;
    col.position.set(
      Math.sin(angle) * DRUM_RADIUS,
      0,
      Math.cos(angle) * DRUM_RADIUS
    );
    col.rotation.y = angle;
    colonnadeGroup.add(col);

    // Repeating Arches between each pair of peristyle columns
    const nextAngle = ((i + 1) / NUM_DRUM_COLUMNS) * Math.PI * 2;
    const midAngle = (angle + nextAngle) / 2;
    const chordDist = 2 * DRUM_RADIUS * Math.sin(Math.PI / NUM_DRUM_COLUMNS);

    // Extruded Indian Judicial Arch
    const shape = new THREE.Shape();
    const halfChord = chordDist / 2;
    const archH = 0.88;

    shape.moveTo(-halfChord, 0);
    shape.lineTo(-halfChord, archH + 0.28);
    shape.lineTo(halfChord, archH + 0.28);
    shape.lineTo(halfChord, 0);

    const steps = 16;
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const a = (1 - t) * Math.PI;
      const x = Math.cos(a) * (halfChord - 0.08);
      const y = Math.sin(a) * archH;
      shape.lineTo(x, y);
    }
    shape.closePath();

    const archGeo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.44,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.015,
      bevelThickness: 0.015,
    });
    archGeo.computeVertexNormals();

    const archMesh = new THREE.Mesh(archGeo, materials.warmSandstone);
    archMesh.name = `peristyle_arch_${i}`;
    archMesh.position.set(
      Math.sin(midAngle) * DRUM_RADIUS,
      COLUMN_HEIGHT,
      Math.cos(midAngle) * DRUM_RADIUS
    );
    archMesh.rotation.y = midAngle + Math.PI / 2;
    archMesh.castShadow = true;
    archMesh.receiveShadow = true;
    colonnadeGroup.add(archMesh);
  }

  // Circular Continuous Entablature Ring over the Peristyle Columns
  const entablatureRingGeo = new THREE.TorusGeometry(DRUM_RADIUS, 0.28, 16, 64);
  entablatureRingGeo.rotateX(Math.PI / 2);
  const entablatureRing = new THREE.Mesh(entablatureRingGeo, materials.warmSandstone);
  entablatureRing.name = "peristyle_entablature_ring";
  entablatureRing.position.y = COLUMN_HEIGHT + 1.16;
  entablatureRing.castShadow = true;
  colonnadeGroup.add(entablatureRing);

  // -------------------------------------------------------------
  // 3. REAR FRAMING GALLERY COLONNADE
  // -------------------------------------------------------------
  const NUM_GALLERY_COLS = 6;
  const GALLERY_SPAN = 2.8;
  const GALLERY_Z = -5.8;
  const GALLERY_START_X = -6.0;

  for (let g = 0; g < NUM_GALLERY_COLS; g++) {
    const col = createColumn();
    col.name = `gallery_column_${g}`;
    col.position.set(GALLERY_START_X + g * GALLERY_SPAN, 0, GALLERY_Z);
    colonnadeGroup.add(col);

    // Deep recessed judicial wall behind the gallery
    if (g < NUM_GALLERY_COLS - 1) {
      const wallGeo = new THREE.BoxGeometry(GALLERY_SPAN, 6.2, 0.35);
      const wall = new THREE.Mesh(wallGeo, materials.recessedInterior);
      wall.position.set(
        GALLERY_START_X + g * GALLERY_SPAN + GALLERY_SPAN * 0.5,
        3.1,
        GALLERY_Z - 1.2
      );
      colonnadeGroup.add(wall);
    }
  }

  return colonnadeGroup;
}
