import * as THREE from "three";

/**
 * Builds the Architectural Lighting Environment (NYAYLINK_ENVIRONMENT)
 * Calibrated natural sunlight, rich architectural skylight, and ground radiosity.
 */
export function buildEnvironment(scene: THREE.Scene): THREE.Group {
  const envGroup = new THREE.Group();
  envGroup.name = "NYAYLINK_ENVIRONMENT";

  // 1. Natural Directional Sunlight (Warm golden afternoon beam)
  const sunlight = new THREE.DirectionalLight(0xfff2de, 2.7);
  sunlight.name = "primary_sunlight";
  sunlight.position.set(12.0, 20.0, 10.0);
  sunlight.castShadow = true;

  // Optimized Shadow Map Settings
  sunlight.shadow.mapSize.width = 2048;
  sunlight.shadow.mapSize.height = 2048;
  sunlight.shadow.camera.near = 1.0;
  sunlight.shadow.camera.far = 48.0;

  const d = 16;
  sunlight.shadow.camera.left = -d;
  sunlight.shadow.camera.right = d;
  sunlight.shadow.camera.top = d;
  sunlight.shadow.camera.bottom = -d;
  sunlight.shadow.bias = -0.0001;
  sunlight.shadow.normalBias = 0.025;

  envGroup.add(sunlight);
  envGroup.add(sunlight.target);
  sunlight.target.position.set(2.5, 4.5, -1.0);

  // 2. Hemispherical Architectural Light (Sky ivory + ground walnut radiosity)
  const hemiLight = new THREE.HemisphereLight(0xfff8ee, 0x2e241c, 0.95);
  hemiLight.name = "architectural_hemisphere";
  envGroup.add(hemiLight);

  // 3. Sandstone Bounce Light (Simulating indirect floor and wall radiosity)
  const bounceLight = new THREE.DirectionalLight(0xebd4bd, 0.75);
  bounceLight.name = "sandstone_bounce";
  bounceLight.position.set(-10.0, 3.5, 6.0);
  envGroup.add(bounceLight);

  // 4. Subtle Oculus Accent Spot (Enhancing the light shaft through the dome)
  const oculusSpot = new THREE.SpotLight(0xfffaed, 3.8, 26, Math.PI / 6, 0.4, 1.1);
  oculusSpot.name = "oculus_spotlight";
  oculusSpot.position.set(3.2, 14.5, -0.8);
  oculusSpot.target.position.set(3.2, 0.0, -1.0);
  envGroup.add(oculusSpot);
  envGroup.add(oculusSpot.target);

  // 5. Atmospheric Environment Fog (Soft ivory mist in the distance)
  scene.fog = new THREE.Fog(0xeeeae1, 24.0, 60.0);

  return envGroup;
}
