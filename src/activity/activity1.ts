import * as Matrix from "./Math/Matrix";
import { Vector3 } from "./Math/Vector";

const rotateMatrix = new Matrix.Rotation3D((60 / 180) * Math.PI, Matrix.Axis3D.Y);
let point: Matrix.Matrix | null = new Matrix.Point3D(5, 5, 0);
const points: Vector3[] = [];

for (let i = 0; i < 7; i++) {
  if (!point) break;
  points.push(Vector3.fromMatrix(point));
  point = Matrix.Multiple(rotateMatrix, point);
}

console.log(points);

export { points, rotateMatrix };
