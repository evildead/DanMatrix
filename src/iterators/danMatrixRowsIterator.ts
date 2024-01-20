import { MatrixIterator, DanMatrix } from '..';

/**
 * The class DanMatrixRowsIterator implements MatrixIterator interface and Iterable interface
 */
export class DanMatrixRowsIterator<T> implements MatrixIterator<Array<T>>, Iterable<Array<T>> {
  // the matrix
  private _matrix: DanMatrix<T>;
  // index of the current row, or -1 if the iterator was not yet started
  private _rowIndex: number;

  /**
   * The public class constructor
   * @param {DanMatrix<T>} matrix the DanMatrix object
   */
  public constructor(matrix: DanMatrix<T>) {
    if (!(matrix instanceof DanMatrix)) {
      throw new Error('Wrong input');
    }
    this._matrix = matrix;
    this._initFields();
  }

  /**
   * Init the class fields
   */
  private _initFields(): void {
    this._rowIndex = -1;
  }

  /**
   * Get the current row, or return undefined if the iterator was not yet started
   * @returns {Array<T>|undefined}
   */
  current(): Array<T> | undefined {
    // the iterator was not yet started
    if (this._rowIndex < 0) {
      return undefined;
    }
    return this._matrix.getRowAt(this._rowIndex);
  }

  /**
   * Get the next row, or return undefined if the iterator's end was reached
   * @returns {Array<T>|undefined}
   */
  next(): Array<T> | undefined {
    // return undefined if there are no rows left
    if (!this.hasNext()) {
      return undefined;
    }
    return this._matrix.getRowAt(++this._rowIndex);
  }

  /**
   * Check if the iterator can return more rows
   * @returns {boolean} true if the iterator can return more rows, false if there are no rows left
   */
  hasNext(): boolean {
    return this._rowIndex < this._matrix.rowsNum() - 1;
  }

  /**
   * Restart the iterator
   */
  rewind(): void {
    this._initFields();
  }

  /**
   * A zero-argument function that returns an object, conforming to the [Iterator Protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol).
   * In Javascript/Typescript in order to be iterable, an object must implement the "@@iterator" method
   * @returns {Iterator<Array<T>>} an iterator object.
   */
  [Symbol.iterator](): Iterator<Array<T>> {
    const iteratorInstance: DanMatrixRowsIterator<T> = this;

    return {
      next() {
        const nextElement = iteratorInstance.next();
        if (nextElement === undefined) {
          return {
            value: undefined,
            done: true
          };
        } else {
          return {
            value: nextElement,
            done: false
          };
        }
      }
    };
  }
}
