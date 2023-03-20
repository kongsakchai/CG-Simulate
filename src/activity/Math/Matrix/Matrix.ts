export type SetValue = (prev: number) => number;

export interface Matrix {
  readonly data: number[];
  readonly row: number;
  readonly column: number;
  add(matrix: Matrix): this;
  sub(matrix: Matrix): this;
  mulScalar(value: number): this;
  addTo(row: number, col: number, value: number): this;
  subTo(row: number, col: number, value: number): this;
  mulTo(row: number, col: number, value: number): this;
  set(row: number, col: number, value: number | SetValue): this;
  get(row: number, col: number): number;
  getRow(row: number): number[];
  getCol(col: number): number[];
  toArray(start: number, end: number): number[];
  clone(): Matrix;
}

export class Matrix implements Matrix {
  #length: number;

  constructor(readonly data: number[], readonly row: number, readonly column: number) {
    this.#length = row * column;
    for (let i = data.length; i < this.#length; i++) {
      this.data.push(0);
    }
  }

  add(matrix: Matrix): this {
    if (this.row != matrix.row || this.column != matrix.column) return this;
    for (let i = 0; i < this.#length; i++) {
      this.data[i] += matrix.data[i];
    }
    return this;
  }

  sub(matrix: Matrix): this {
    if (this.row != matrix.row || this.column != matrix.column) return this;
    for (let i = 0; i < this.#length; i++) {
      this.data[i] -= matrix.data[i];
    }
    return this;
  }

  mulScalar(value: number): this {
    for (let i = 0; i < this.#length; i++) {
      this.data[i] *= value;
    }
    return this;
  }

  addTo(row: number, col: number, value: number): this {
    const index = row * this.column + col;
    if (index >= this.#length) return this;

    this.data[index] += value;
    return this;
  }

  subTo(row: number, col: number, value: number): this {
    const index = row * this.column + col;
    if (index >= this.#length) return this;

    this.data[index] -= value;
    return this;
  }

  mulTo(row: number, col: number, value: number): this {
    const index = row * this.column + col;
    if (index >= this.#length) return this;

    this.data[index] *= value;
    return this;
  }

  set(row: number, col: number, value: number | SetValue): this {
    const index = row * this.column + col;
    if (index >= this.#length) return this;

    if (typeof value === "number") {
      this.data[index] = value;
    } else {
      this.data[index] = value(this.data[index]);
    }
    return this;
  }

  get(row: number, col: number): number {
    const index = row * this.column + col;
    return this.data[index];
  }

  getRow(row: number): number[] {
    const index = row * this.column;
    return this.data.slice(index, index + this.column);
  }

  getCol(col: number): number[] {
    const result: number[] = [];
    for (let i = col; i < this.#length; i += this.column) {
      result.push(this.data[i]);
    }
    return result;
  }

  clone(): Matrix {
    return new Matrix(this.data, this.row, this.column);
  }

  toArray(start: number, end: number): number[] {
    return this.data.slice(start, end);
  }

  toArray2D() {
    let list: number[][] = [];
    for (let i = 0; i < this.row; i++) {
      let row = i * this.column;
      list.push(this.toArray(row, row + this.column));
    }
    return list;
  }
}
