import { Axis2D } from "../Axis";
import { Matrix } from "../Matrix";

export class Mirror2D extends Matrix {
  axis: Axis2D;

  constructor(axis: Axis2D) {
    switch (axis) {
      case Axis2D.X:
        super([1, 0, 0, 0, -1, 0, 0, 0, 1], 3, 3);
        break;
      default:
        super([-1, 0, 0, 0, 1, 0, 0, 0, 1], 3, 3);
        break;
    }
    this.axis = axis;
  }

  invert() {
    return new Mirror2D(this.axis);
  }
}
