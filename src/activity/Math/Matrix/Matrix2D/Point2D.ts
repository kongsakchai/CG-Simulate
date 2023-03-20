import { Matrix } from "../Matrix";

export class Point2D extends Matrix {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    super([x, y, 1], 3, 1);
    this.x = x;
    this.y = y;
  }

  invert() {
    return new Point2D(-this.x, -this.y);
  }
}
