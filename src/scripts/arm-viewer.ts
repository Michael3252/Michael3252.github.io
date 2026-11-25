import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export async function showModel(root: HTMLElement) {
  const stage = root.querySelector<HTMLElement>(".model-stage")!;
  const canvas = stage.querySelector("canvas")!;
  const gltf = await new GLTFLoader().loadAsync("/models/so101.glb");
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const scene = new THREE.Scene();
  const model = gltf.scene;
  const bounds = new THREE.Box3().setFromObject(model);
  const center = bounds.getCenter(new THREE.Vector3());
  const size = bounds.getSize(new THREE.Vector3()).length();
  model.position.sub(center);
  scene.add(model, new THREE.HemisphereLight(0xffffff, 0xa4b9d1, 2.8));
  const key = new THREE.DirectionalLight(0xffffff, 2.4);
  key.position.set(3, 5, 4);
  scene.add(key);
  const camera = new THREE.PerspectiveCamera(35, 1, size / 100, size * 20);
  camera.position.set(size * .98, size * .45, size * 1.05);
  const controls = new OrbitControls(camera, canvas);
  controls.enablePan = false;
  controls.minDistance = size * .6;
  controls.maxDistance = size * 4;
  controls.update();
  controls.saveState();
  const render = () => renderer.render(scene, camera);
  controls.addEventListener("change", render);
  const fit = () => {
    camera.aspect = stage.clientWidth / stage.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(stage.clientWidth, stage.clientHeight, false);
    render();
  };
  new ResizeObserver(fit).observe(stage);
  const rotate = (angle: number) => {
    camera.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);
    controls.update();
  };
  root.querySelector("[data-left]")!.addEventListener("click", () => rotate(-Math.PI / 9));
  root.querySelector("[data-right]")!.addEventListener("click", () => rotate(Math.PI / 9));
  root.querySelector("[data-reset]")!.addEventListener("click", () => controls.reset());
  fit();
  canvas.hidden = false;
  stage.querySelector("img")!.hidden = true;
  root.querySelector<HTMLElement>(".model-controls")!.hidden = false;
}
