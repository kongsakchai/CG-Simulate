import * as THREE from "three";
import * as ADDONS from "three/examples/jsm/controls/OrbitControls";

const createScene = (canvas: HTMLCanvasElement) => {
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(canvas.width, canvas.height);
  // canvas.appendChild(renderer.domElement);

  // const camera = new THREE.PerspectiveCamera(60, canvas.width / canvas.height, 0.1, 1000);
  const camera = new THREE.OrthographicCamera();
  camera.position.set(15, 15, 15);
  camera.up = new THREE.Vector3(0, 0, 1);
  camera.lookAt(0, 0, 0);

  const control = new ADDONS.OrbitControls(camera, renderer.domElement);
  // control.maxPolarAngle = (90 / 180) * Math.PI;

  const scene = new THREE.Scene();
  const axes = new THREE.AxesHelper(30);
  const grid = new THREE.GridHelper(30, 30);
  // const light = new THREE.AmbientLight(0xffffff, 0.2);
  // const dirLight = new THREE.DirectionalLight(0xffffff);
  // const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.2);

  // dirLight.position.set(3, 10, 10);
  // dirLight.castShadow = true;
  // dirLight2.position.set(-3, 10, -10);
  grid.rotateX((90 / 180) * Math.PI);
  grid.position.set(0, 0, -0.1);

  scene.add(axes);
  scene.add(grid);
  // scene.add(light);
  // scene.add(dirLight);
  // scene.add(dirLight2);

  function animate() {
    requestAnimationFrame(animate);
    control.update();
    renderer.render(scene, camera);
  }
  animate();

  return { scene };
};

export { createScene };
