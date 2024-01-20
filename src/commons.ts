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

/**
 * The interface RowsColsFilledWithValType
 *
 * It represents the type of input to use in order to build the
 * matrix with _rows_ number of rows, _columns_ number of columns,
 * and filled with values _val_
 * @typeParam T the type of the values which will be stored in the matrix
 */
export interface RowsColsFilledWithValType<T> {
  rows: number;
  columns: number;
  val: T;
}

/**
 * DanMatrixConstructorType
 *
 * It is the DanMatrix constructor type.
 * It can be:
 * - an object of type `RowsColsFilledWithValType`
 * - an Array of Array of values of type T
 * @typeParam T the type of the values which will be stored in the matrix
 */
export type DanMatrixConstructorType<T> = RowsColsFilledWithValType<T> | Array<Array<T>>;
