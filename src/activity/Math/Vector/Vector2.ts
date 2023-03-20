import { Matrix, Point2D } from "../Matrix";

export class Vector2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get() {
    return { x: this.x, y: this.y };
  }

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  toArray(): number[] {
    return [this.x, this.y];
  }

  toMatrix(): Matrix {
    return new Point2D(this.x, this.y);
  }

  static fromMatrix(matrix: Matrix): Vector2 {
    return new Vector2(matrix.data[0], matrix.data[1]);
  }
}
