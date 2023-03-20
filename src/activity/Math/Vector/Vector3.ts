import { Matrix, Point3D } from "../Matrix";

export class Vector3 {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  get() {
    return { x: this.x, y: this.y, z: this.z };
  }

  set(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  setX(x: number) {
    this.x = x;
    return this;
  }

  setY(y: number) {
    this.y = y;
    return this;
  }

  setZ(z: number) {
    this.z = z;
    return this;
  }

  add(x: number, y: number, z: number) {
    this.x += x;
    this.y += y;
    this.z += z;
    return this;
  }

  sub(x: number, y: number, z: number) {
    this.x -= x;
    this.y -= y;
    this.z -= z;
    return this;
  }

  addVector(add: Vector3) {
    this.x += add.x;
    this.y += add.y;
    this.z += add.z;
    return this;
  }

  subVector(sub: Vector3) {
    this.x -= sub.x;
    this.y -= sub.y;
    this.z -= sub.z;
    return this;
  }

  mulScalar(value: number) {
    this.x *= value;
    this.y *= value;
    this.z *= value;
    return this;
  }

  dot(b: Vector3) {
    return this.x * b.x + this.y * b.y + this.z * b.z;
  }

  getAngle(b: Vector3) {
    const scalar = this.dot(b);
    const cosValue = scalar / (this.magnitude * b.magnitude);
    return Math.acos(cosValue);
  }

  get norm() {
    const normVector = this.clone();
    const mag = this.magnitude;
    normVector.mulScalar(1 / mag);
    return normVector;
  }

  get magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  invert() {
    return new Vector3(-this.x, -this.y, -this.z);
  }

  toArray(): number[] {
    return [this.x, this.y, this.z];
  }

  toMatrix(): Matrix {
    return new Point3D(this.x, this.y, this.z);
  }

  static fromMatrix(matrix: Matrix): Vector3 {
    return new Vector3(matrix.data[0] ?? 0, matrix.data[1] ?? 0, matrix.data[2] ?? 0);
  }

  static get unitX() {
    return new Vector3(1, 0, 0);
  }

  static get unitY() {
    return new Vector3(0, 1, 0);
  }

  static get unitZ() {
    return new Vector3(0, 0, 1);
  }
}
