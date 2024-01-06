/**
 * The MatrixIterator interface
 */
export interface MatrixIterator<T> {
  // Return the current element.
  current(): T | undefined;

  // Return the current element and move forward to next element.
  next(): T | undefined;

  // Checks if there are more elements.
  hasNext(): boolean;

  // Rewind the Iterator to the first element.
  rewind(): void;
}

export interface RowsColsFilledWithValType<T> {
  rows: number;
  columns: number;
  val: T;
}

export type DanMatrixConstructorType<T> = RowsColsFilledWithValType<T> | Array<Array<T>>;
