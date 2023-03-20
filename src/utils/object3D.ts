import * as THREE from "three";
import { spring } from "svelte/motion";

export const createBall = (pos: THREE.Vector3, delay?: number) => {
  const size = spring(0);

  const geometry = new THREE.SphereGeometry(0.3, 16, 8);
  const material = new THREE.MeshBasicMaterial({ color: 0xff5555 });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(...pos.toArray());
  sphere.scale.set(0, 0, 0);

  const unsubscribe = size.subscribe(v => {
    sphere.scale.set(v / 100, v / 100, v / 100);
    if (v == 100) unsubscribe();
  });
  setTimeout(() => size.set(100), delay);

  return sphere;
};

export const createLine = (a: THREE.Vector3, b: THREE.Vector3, delay?: number) => {
  const size = spring(0);

  const next = a.clone();
  const points = [a, next];
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.LineBasicMaterial({ color: 0xff5555, linewidth: 3 });
  const line = new THREE.Line(geometry, material);

  b.sub(a);
  const unsubscribe = size.subscribe(v => {
    next.x = a.x + (b.x * v) / 100;
    next.y = a.y + (b.y * v) / 100;
    next.z = a.z + (b.z * v) / 100;

    geometry.setFromPoints(points);
    if (v == 10) unsubscribe();
  });
  setTimeout(() => size.set(100), delay);

  return line;
};
