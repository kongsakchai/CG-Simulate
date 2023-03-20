import { Matrix } from "../Matrix";

export class Scaling3D extends Matrix {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    super([x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1], 4, 4);
    this.x = x;
    this.y = y;
    this.z = z;
  }

  invert() {
    return new Scaling3D(1 / this.x, 1 / this.y, 1 / this.z);
  }
}
