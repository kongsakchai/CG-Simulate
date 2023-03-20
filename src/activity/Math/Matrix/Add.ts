import type { Matrix } from "./Matrix";

export const Add = (a: Matrix, b: Matrix): Matrix | null => {
  if (a.row != b.row || a.column != b.column) return null;
  const matrix = a.clone();
  a.add(b);

  return matrix;
};

export const Sub = (a: Matrix, b: Matrix): Matrix | null => {
  if (a.row != b.row || a.column != b.column) return null;
  const matrix = a.clone();
  a.sub(b);

  return matrix;
};
