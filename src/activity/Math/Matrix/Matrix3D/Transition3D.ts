import { Matrix } from "../Matrix";

export class Transition3D extends Matrix {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    super([1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1], 4, 4);
    this.x = x;
    this.y = y;
    this.z = z;
  }

  invert() {
    return new Transition3D(-this.x, -this.y, -this.z);
  }
}
