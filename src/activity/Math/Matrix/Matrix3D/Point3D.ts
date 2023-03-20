import { Matrix } from "../Matrix";

export class Point3D extends Matrix {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    super([x, y, z, 1], 4, 1);
    this.x = x;
    this.y = y;
    this.z = z;
  }

  invert() {
    return new Point3D(-this.x, -this.y, -this.z);
  }
}
