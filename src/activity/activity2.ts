import * as Matrix from "./Math/Matrix";
import { Vector3 } from "./Math/Vector";

const axisVecter = new Vector3(7, 8, 9).sub(2, 2, 2);
const transition = new Matrix.Transition3D(-2, -2, -2);

const unitYZ = axisVecter.norm.setX(0);

const radinsX = Math.acos(unitYZ.z / unitYZ.magnitude);
const radinsY = Math.acos(unitYZ.magnitude);

const rotateX = new Matrix.Rotation3D(radinsX, Matrix.Axis3D.X);
const rotateY = new Matrix.Rotation3D(-radinsY, Matrix.Axis3D.Y);
const rotate = new Matrix.Rotation3D((60 / 180) * Math.PI, Matrix.Axis3D.Z);

let secretMatrix = Matrix.Multiple(rotateX, transition);
secretMatrix = Matrix.Multiple(rotateY, secretMatrix);
secretMatrix = Matrix.Multiple(rotate, secretMatrix);
secretMatrix = Matrix.Multiple(rotateY.invert(), secretMatrix);
secretMatrix = Matrix.Multiple(rotateX.invert(), secretMatrix);
secretMatrix = Matrix.Multiple(transition.invert(), secretMatrix);

let point: Matrix.Matrix | null = new Matrix.Point3D(5, 10, 15);
let points: Vector3[] = [];

for (let i = 0; i < 7; i++) {
  if (!point) break;
  points.push(Vector3.fromMatrix(point));
  point = Matrix.Multiple(secretMatrix, point);
}

console.table(points);

export { points, secretMatrix };
