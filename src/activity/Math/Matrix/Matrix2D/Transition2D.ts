import { Matrix } from "../Matrix";

export class Transition2D extends Matrix {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    super([1, 0, x, 0, 1, y, 0, 0, 1], 3, 3);
    this.x = x;
    this.y = y;
  }

  invert() {
    return new Transition2D(-this.x, -this.y);
  }
}
