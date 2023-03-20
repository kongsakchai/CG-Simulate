import { Matrix } from "../Matrix";

export class Rotation2D extends Matrix {
  radians: number;

  constructor(radians: number) {
    let sin = Math.sin(radians);
    let cos = Math.cos(radians);

    super([cos, -sin, 0, sin, cos, 0, 0, 0, 1], 3, 3);
    this.radians = radians;
  }

  invert() {
    return new Rotation2D(-this.radians);
  }
}
