import { MatrixIterator, DanMatrix, DanMatrixElement, Coordinates } from '..';

/**
 * The class DanMatrixElementsIterator implements MatrixIterator interface and Iterable interface
 */
export class DanMatrixElementsIterator<T>
  implements MatrixIterator<DanMatrixElement<T>>, Iterable<DanMatrixElement<T>>
{
  // the matrix
  private _matrix: DanMatrix<T>;
  // index of the current row, or -1 if the iterator was not yet started
  private _rowIndex: number;
  // index of the current column, or -1 if the iterator was not yet started
  private _columnIndex: number;

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
    this._columnIndex = -1;
  }

  /**
   * Get the current row, or return undefined if the iterator was not yet started
   * @returns {DanMatrixElement<T>|undefined}
   */
  current(): DanMatrixElement<T> | undefined {
    // the iterator was not yet started
    if (this._rowIndex < 0) {
      return undefined;
    }
    const currCoordinates = Coordinates.fromArrayCoords([this._rowIndex, this._columnIndex]);
    const currVal = this._matrix.get(currCoordinates);
    if (currVal === undefined) {
      return undefined;
    }
    const element: DanMatrixElement<T> = {
      coordinates: currCoordinates,
      danMatrix: this._matrix,
      val: currVal
    };
    return element;
  }

  /**
   * Get the next element, or return undefined if the iterator's end was reached
   * @returns {DanMatrixElement<T>|undefined}
   */
  next(): DanMatrixElement<T> | undefined {
    // return undefined if there are no elements left
    if (!this.hasNext()) {
      return undefined;
    }
    if (this._rowIndex < 0) {
      this._rowIndex = 0;
      this._columnIndex = 0;
    } else if (this._columnIndex < this._matrix.colsNum() - 1) {
      ++this._columnIndex;
    } else {
      ++this._rowIndex;
      this._columnIndex = 0;
    }
    return this.current();
  }

  /**
   * Check if the iterator can return more elements
   * @returns {boolean} true if the iterator can return more elements, false if there are no elements left
   */
  hasNext(): boolean {
    return this._rowIndex < this._matrix.rowsNum() - 1 || this._columnIndex < this._matrix.colsNum() - 1;
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
   * @returns {Iterator<DanMatrixElement<T>>} an iterator object.
   */
  [Symbol.iterator](): Iterator<DanMatrixElement<T>> {
    const iteratorInstance: DanMatrixElementsIterator<T> = this;

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
