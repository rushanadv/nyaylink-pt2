import * as THREE from "three";
import { createArchitecturalMaterials, ArchitecturalMaterials } from "../materials/architectural-materials";
import { buildGrandDome } from "../geometry/dome-builder";
import { buildTimberTraverse } from "../geometry/timber-traverse";
import { buildColonnade } from "../geometry/colonnade-builder";
import { buildFloor } from "../geometry/floor-builder";
import { buildEnvironment } from "./lighting-builder";

export class SceneManager {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public materials: ArchitecturalMaterials;

  // Named architectural root groups
  public domeGroup!: THREE.Group;
  public timberGroup!: THREE.Group;
  public colonnadeGroup!: THREE.Group;
  public floorGroup!: THREE.Group;
  public environmentGroup!: THREE.Group;

  // Camera targets for dignified architectural perspective
  // Positioned so the basalt floor, colonnade, timber traverse, and grand dome fit in 16:9 frame
  private initialCamPos = new THREE.Vector3(-4.5, 3.6, 23.5);
  private initialLookAt = new THREE.Vector3(2.5, 4.8, -1.0);
  private currentLookAt = new THREE.Vector3(2.5, 4.8, -1.0);

  // Mouse offset target
  private mouseOffset = { x: 0, y: 0 };
  private smoothedMouse = { x: 0, y: 0 };

  constructor(aspectRatio: number) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#EEEAE1");

    // Camera setup: 34 deg FOV for authentic architectural editorial photography
    this.camera = new THREE.PerspectiveCamera(34, aspectRatio, 0.2, 100);
    this.camera.position.copy(this.initialCamPos);
    this.camera.lookAt(this.initialLookAt);

    // Initialize PBR Materials
    this.materials = createArchitecturalMaterials();

    // Assemble Procedural Architecture
    this.initWorld();
  }

  private initWorld(): void {
    const ROTUNDA_X = 3.0;
    const ROTUNDA_Z = -1.2;

    // 1. Environment & Lighting
    this.environmentGroup = buildEnvironment(this.scene);
    this.scene.add(this.environmentGroup);

    // 2. Grand Dome (positioned atop the peristyle rotunda at x: 3.0, z: -1.2)
    this.domeGroup = buildGrandDome(this.materials);
    this.domeGroup.position.set(ROTUNDA_X, 0.0, ROTUNDA_Z);
    this.scene.add(this.domeGroup);

    // 3. Colonnade & Repeating Arches (aligned under the dome drum)
    this.colonnadeGroup = buildColonnade(this.materials);
    this.colonnadeGroup.position.set(ROTUNDA_X, 0.0, ROTUNDA_Z);
    this.scene.add(this.colonnadeGroup);

    // 4. Timber Traverse (36 independently addressable dark walnut fins in the foreground)
    this.timberGroup = buildTimberTraverse(this.materials);
    this.timberGroup.position.set(0.0, 0.0, 0.0);
    this.scene.add(this.timberGroup);

    // 5. Polished Basalt Floor with Geometric Inlays
    this.floorGroup = buildFloor(this.materials);
    this.floorGroup.position.set(ROTUNDA_X, 0.0, ROTUNDA_Z);
    this.scene.add(this.floorGroup);
  }

  public setMouse(normalizedX: number, normalizedY: number): void {
    this.mouseOffset.x = normalizedX;
    this.mouseOffset.y = normalizedY;
  }

  public update(reducedMotion = false): void {
    if (reducedMotion) {
      this.camera.position.copy(this.initialCamPos);
      this.camera.lookAt(this.initialLookAt);
      return;
    }

    // Smooth spring interpolation for subtle camera parallax
    this.smoothedMouse.x += (this.mouseOffset.x - this.smoothedMouse.x) * 0.035;
    this.smoothedMouse.y += (this.mouseOffset.y - this.smoothedMouse.y) * 0.035;

    // Subtle parallax translation
    this.camera.position.x = this.initialCamPos.x + this.smoothedMouse.x * 0.6;
    this.camera.position.y = this.initialCamPos.y + this.smoothedMouse.y * 0.4;

    // Camera look-at follow
    this.currentLookAt.x = this.initialLookAt.x + this.smoothedMouse.x * 0.22;
    this.currentLookAt.y = this.initialLookAt.y + this.smoothedMouse.y * 0.16;
    this.camera.lookAt(this.currentLookAt);

    // Subtle natural ambient pulse on oculus volumetric sunbeam
    const oculusGroup = this.domeGroup.getObjectByName("dome_oculus");
    if (oculusGroup) {
      const beam = oculusGroup.children.find(
        (c) => c instanceof THREE.Mesh && c.geometry.type === "CylinderGeometry"
      );
      if (beam && beam instanceof THREE.Mesh) {
        const mat = beam.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.14 + Math.sin(Date.now() * 0.001) * 0.02;
      }
    }
  }

  public handleResize(width: number, height: number): void {
    if (height === 0) return;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  public dispose(): void {
    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        if (object.geometry) {
          object.geometry.dispose();
        }
      }
    });

    Object.values(this.materials).forEach((mat) => {
      if (mat.bumpMap) mat.bumpMap.dispose();
      if (mat.roughnessMap) mat.roughnessMap.dispose();
      mat.dispose();
    });
  }
}
