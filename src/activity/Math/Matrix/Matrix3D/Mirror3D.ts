import { Axis2D } from "../Axis";
import { Matrix } from "../Matrix";

export class Mirror3D extends Matrix {
  axis: Axis2D;

  constructor(axis: Axis2D) {
    switch (axis) {
      case Axis2D.X:
        super([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1], 4, 4);
        break;
      case Axis2D.Y:
        super([-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1], 4, 4);
        break;
      default:
        super([-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], 4, 4);
        break;
    }
    this.axis = axis;
  }

  invert() {
    return new Mirror3D(this.axis);
  }
}
