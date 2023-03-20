import { Axis3D } from "../Axis";
import { Matrix } from "../Matrix";

export class Rotation3D extends Matrix {
  radians: number;
  axis: Axis3D;

  constructor(radians: number, axis: Axis3D) {
    let sin = Math.sin(radians);
    let cos = Math.cos(radians);

    switch (axis) {
      case Axis3D.X:
        super([1, 0, 0, 0, 0, cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1], 4, 4);
        break;
      case Axis3D.Y:
        super([cos, 0, sin, 0, 0, 1, 0, 0, -sin, 0, cos, 0, 0, 0, 0, 1], 4, 4);
        break;
      default:
        super([cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], 4, 4);
        break;
    }
    this.radians = radians;
    this.axis = axis;
  }

  invert() {
    return new Rotation3D(-this.radians, this.axis);
  }
}
