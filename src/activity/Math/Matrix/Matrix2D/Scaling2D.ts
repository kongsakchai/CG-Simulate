import { Matrix } from "../Matrix";

export class Scaling2D extends Matrix {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    super([x, 0, 0, 0, y, 0, 0, 0, 1], 3, 3);
    this.x = x;
    this.y = y;
  }

  invert() {
    return new Scaling2D(1 / this.x, 1 / this.y);
  }
}
