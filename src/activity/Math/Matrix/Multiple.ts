import { Matrix } from "./Matrix";

export const Multiple = (a: Matrix | null, b: Matrix | null): Matrix | null => {
  if (!a || !b || a.column != b.row) return null;
  const matrix = new Matrix([], a.row, b.column);

  for (let r = 0; r < a.row; r++) {
    for (let c = 0; c < b.column; c++) {
      for (let i = 0; i < a.column; i++) {
        const mul = Math.round(a.get(r, i) * b.get(i, c) * 10000);
        matrix.addTo(r, c, mul / 10000);
        // matrix.addTo(r, c, a.get(r, i) * b.get(i, c));
      }
    }
  }

  return matrix;
};

export const MultipleScalar = (a: Matrix, scalar: number): Matrix => {
  const matrix = a.clone();
  matrix.mulScalar(scalar);
  return matrix;
};
