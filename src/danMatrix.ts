/* eslint-disable security/detect-object-injection */
import _ from 'lodash';

import { DanMatrixConstructorType, DanMatrixRowsIterator, DanMatrixColumnsIterator } from '.';

/**
 * DanMatrix is a class to handle two-dimension vectors, or matrices
 * @typeParam T is the type of element storable in the matrix
 */
export class DanMatrix<T> {
  /**
   * The data structure containing the real data.
   *
   * It's defined as an Array of Array of T
   * @typeParam T is the type of element storable in the matrix
   */
  private _2dvector: Array<Array<T>>;

  /**
   * The public constructor of DanMatrix
   *
   * @param props the optional input of type DanMatrixConstructorType
   */
  constructor(props?: DanMatrixConstructorType<T>) {
    this.setupMatrix(props);
  }

  /**
   * The public method to setup the matrix
   *
   * @param props the optional input of type DanMatrixConstructorType
   * @throws Error if a wrong input is passed
   */
  public setupMatrix(props?: DanMatrixConstructorType<T>) {
    this._2dvector = [];
    if (props) {
      if (Array.isArray(props)) {
        let prevRowLength: number | undefined;
        for (const row of props) {
          if (!Array.isArray(row) || row.length < 1 || (prevRowLength !== undefined && prevRowLength !== row.length)) {
            throw new Error('Wrong input');
          }
          this._2dvector.push(_.cloneDeep(row));
          prevRowLength = row.length;
        }
      } else {
        if (!_.isInteger(props.rows) || !_.isInteger(props.columns) || props.rows <= 0 || props.columns <= 0) {
          throw new Error('Wrong input');
        }
        for (let i = 0; i < props.rows; i++) {
          this._2dvector.push(Array.from({ length: props.columns }, () => props.val));
        }
      }
    }
  }

  /**
   * Clone the current DanMatrix instance
   * @returns a new DanMatrix instance equal to the current one
   */
  public clone(): DanMatrix<T> {
    const clonedMatrix: DanMatrix<T> = new DanMatrix<T>(this._2dvector);
    return clonedMatrix;
  }

  /**
   * Get a string representation of the current DanMatrix instance
   * @param fixedSpacing an optional numeric value for the cell spacing (default is 15)
   * @returns a string representation of the current DanMatrix instance
   */
  public getMatrixString(fixedSpacing: number = 15): string {
    let outStr = '';
    for (let rowIndex = 0; rowIndex < this._2dvector.length; rowIndex++) {
      const row = this._2dvector[rowIndex];
      let rowStr = '┃';
      for (const value of row) {
        let valStr = ` ${value}`;
        if (_.isString(value) || _.isNumber(value)) {
          const missingSpaces = fixedSpacing - valStr.length;
          if (missingSpaces > 0) {
            valStr += `${' '.repeat(missingSpaces)}`;
          }
        }
        rowStr += `${valStr} ┃`;
      }
      if (rowIndex === 0) {
        outStr += `┏${'-'.repeat(rowStr.length - 2)}┓\n`;
      }
      outStr += `${rowStr}\n┣${'-'.repeat(rowStr.length - 2)}┫\n`;
    }
    return outStr;
  }

  /**
   * Get the number of rows of the matrix
   * @returns the number of rows of the matrix
   */
  public rowsNum(): number {
    return this._2dvector.length;
  }

  /**
   * Get the number of columns of the matrix
   * @returns the number of columns of the matrix
   */
  public colsNum(): number {
    if (this._2dvector.length < 1) {
      return 0;
    }
    return this._2dvector[0].length;
  }

  /**
   * Get the matrix value at (x, y)
   * @param x - the x coordinate (index of the rows)
   * @param y - the y coordinate (index of the columns)
   * @returns the value at (x, y) or undefined if the coordinates are wrong
   */
  public get(x: number, y: number): T | undefined {
    return this._2dvector[x]?.[y];
  }

  /**
   * Set a value at (x, y)
   * @param x - the x coordinate (index of the rows)
   * @param y - the y coordinate (index of the columns)
   * @param val - the value to set
   * @returns the new value set at (x, y) or undefined if the coordinates are wrong
   */
  public set(x: number, y: number, val: T): T | undefined {
    if (x >= this._2dvector.length || y >= this._2dvector[x].length) {
      return undefined;
    }
    this._2dvector[x][y] = val;
    return this._2dvector[x][y];
  }

  /**
   * Get the matrix value at `coord`
   * @param coord a string representation of the coordinates using the dash '-' as separator.
   * Example: "1-4" represents x:1 and y:4
   * @returns the value at `coord` or undefined if the string coordinates are wrong
   */
  public getCoord(coord: string): T | undefined {
    if (!_.isString(coord)) {
      return undefined;
    }
    const coords = coord.split('-').map((elem: string) => Number(elem.trim()));
    if (coords.length < 2) {
      return undefined;
    }
    return this.get(coords[0], coords[1]);
  }

  /**
   * Set a value at `coord`
   * @param coord a string representation of the coordinates using the dash '-' as separator.
   * Example: "1-4" represents x:1 and y:4
   * @param val - the value to set
   * @returns the value at `coord` or undefined if the string coordinates are wrong
   */
  public setCoord(coord: string, val: T): T | undefined {
    if (!_.isString(coord)) {
      return undefined;
    }
    const coords = coord.split('-').map((elem: string) => Number(elem.trim()));
    if (coords.length < 2) {
      return undefined;
    }
    return this.set(coords[0], coords[1], val);
  }

  /**
   * Add a row to the matrix
   * @param row - the row to be added
   * @returns true if the new row was correctly added, otherwise it returns false
   * @throws Error if a wrong input is passed
   */
  public addRow(row: Array<T>): boolean {
    if (!Array.isArray(row) || row.length < 1) {
      throw new Error('Wrong input');
    }
    if (this._2dvector.length > 0 && row.length !== this.colsNum()) {
      return false;
    }
    this._2dvector.push(_.cloneDeep(row));
    return true;
  }

  /**
   * Add a column to the matrix
   * @param column - the column to be added
   * @returns true if the new column was correctly added, otherwise it returns false
   * @throws Error if a wrong input is passed
   */
  public addColumn(column: Array<T>): boolean {
    if (!Array.isArray(column) || column.length < 1) {
      throw new Error('Wrong input');
    }
    if (this._2dvector.length > 0) {
      if (column.length !== this._2dvector.length) {
        return false;
      }
      for (let rowIndex = 0; rowIndex < this._2dvector.length; rowIndex++) {
        const row = this._2dvector[rowIndex];
        row.push(column[rowIndex]);
      }
    } else {
      for (const columnElement of column) {
        this._2dvector.push([columnElement]);
      }
    }
    return true;
  }

  /**
   * Look for a specific value inside the matrix
   * @param val - the value you're looking for
   * @returns - an array of string coordinates where the value was found
   */
  public lookForValue(val: T): Array<string> {
    const coordsArray: Array<string> = [];
    for (let rowIndex = 0; rowIndex < this._2dvector.length; rowIndex++) {
      const row = this._2dvector[rowIndex];
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        const element = row[colIndex];
        if (element === val) {
          coordsArray.push(`${rowIndex}-${colIndex}`);
        }
      }
    }
    return coordsArray;
  }

  /**
   * Get matrix row at `rowIndex`
   * @param rowIndex the row index
   * @returns the requested row as array of values
   * @throws Error if a wrong input is passed
   */
  public getRowAt(rowIndex: number): Array<T> | undefined {
    if (!_.isInteger(rowIndex) || rowIndex < 0) {
      throw new Error('Wrong input');
    }
    if (rowIndex >= this._2dvector.length) {
      return undefined;
    }
    return _.cloneDeep(this._2dvector[rowIndex]);
  }

  /**
   * Insert a row at the specific `rowIndex` index
   * @param rowIndex the row index
   * @param row the row to insert as an array of values
   * @returns true if the new row was correctly inserted, otherwise it returns false
   * @throws Error if a wrong input is passed
   */
  public insertRowAt(rowIndex: number, row: Array<T>): boolean {
    if (!_.isInteger(rowIndex) || rowIndex < 0 || !Array.isArray(row) || row.length < 1) {
      throw new Error('Wrong input');
    }
    if (rowIndex > this._2dvector.length) {
      return false;
    }
    if (rowIndex === this._2dvector.length) {
      return this.addRow(row);
    }
    if (row.length !== this.colsNum()) {
      return false;
    }
    this._2dvector.splice(rowIndex, 0, _.cloneDeep(row));
    return true;
  }

  /**
   * Get matrix column at `columnIndex`
   * @param columnIndex the column index
   * @returns the requested column as array of values
   * @throws Error if a wrong input is passed
   */
  public getColumnAt(columnIndex: number): Array<T> | undefined {
    if (!_.isInteger(columnIndex) || columnIndex < 0) {
      throw new Error('Wrong input');
    }
    if (columnIndex >= this.colsNum()) {
      return undefined;
    }
    const columnToReturn: Array<T> = [];
    for (let rowIndex = 0; rowIndex < this._2dvector.length; rowIndex++) {
      columnToReturn.push(this._2dvector[rowIndex][columnIndex]);
    }
    return columnToReturn;
  }

  /**
   * Insert a column at the specific `columnIndex` index
   * @param columnIndex the column index
   * @param column the column to insert as an array of values
   * @returns true if the new column was correctly inserted, otherwise it returns false
   * @throws Error if a wrong input is passed
   */
  public insertColumnAt(columnIndex: number, column: Array<T>): boolean {
    if (!_.isInteger(columnIndex) || columnIndex < 0 || !Array.isArray(column) || column.length < 1) {
      throw new Error('Wrong input');
    }
    if (this._2dvector.length > 0) {
      if (column.length !== this._2dvector.length) {
        return false;
      }
      if (columnIndex > this.colsNum()) {
        return false;
      } else if (columnIndex === this.colsNum()) {
        return this.addColumn(column);
      } else {
        for (let rowIndex = 0; rowIndex < this._2dvector.length; rowIndex++) {
          const row = this._2dvector[rowIndex];
          row.splice(columnIndex, 0, column[rowIndex]);
        }
      }
    } else {
      if (columnIndex === 0) {
        return this.addColumn(column);
      } else {
        return false;
      }
    }
    return true;
  }

  /**
   * Remove matrix row at index 'rowIndex'
   * @param {number} rowIndex the index of the row to be removed. If it's not an
   * integer number or if it's less than zero, an exception "Error('Wrong input')" is thrown
   * @returns true if the row removal was successful, otherwise it returns false
   * @throws exception "Error('Wrong input')" when any parameter in input is wrong
   */
  public removeRowAt(rowIndex: number): boolean {
    if (!_.isInteger(rowIndex) || rowIndex < 0) {
      throw new Error('Wrong input');
    }
    if (rowIndex >= this._2dvector.length) {
      return false;
    }
    this._2dvector.splice(rowIndex, 1);
    return true;
  }

  /**
   * Remove matrix column at index 'columnIndex'
   * @param {number} columnIndex the index of the column to be removed. If it's not an
   * integer number or if it's less than zero, an exception "Error('Wrong input')" is thrown
   * @returns true if the column removal was successful, otherwise it returns false
   * @throws exception "Error('Wrong input')" when any parameter in input is wrong
   */
  public removeColumnAt(columnIndex: number): boolean {
    if (!_.isInteger(columnIndex) || columnIndex < 0) {
      throw new Error('Wrong input');
    }
    if (this._2dvector.length < 1 || columnIndex >= this.colsNum()) {
      return false;
    }
    for (let rowIndex = 0; rowIndex < this._2dvector.length; rowIndex++) {
      const row = this._2dvector[rowIndex];
      row.splice(columnIndex, 1);
    }
    return true;
  }

  /**
   * Replace matrix row at index 'rowIndex'
   * @param {number} rowIndex the index of the row to be replaced. If it's not an
   * integer number or if it's less than zero, an exception "Error('Wrong input')" is thrown
   * @param {Array<T>} row the array of values which must replace the existing row.
   * If it's not an array or if the array is empty, an exception "Error('Wrong input')" is thrown
   * @returns true if the row replacement was successful, otherwise it returns false
   * @throws exception "Error('Wrong input')" when any parameter in input is wrong
   */
  public replaceRowAt(rowIndex: number, row: Array<T>): boolean {
    if (!_.isInteger(rowIndex) || rowIndex < 0 || !Array.isArray(row) || row.length < 1) {
      throw new Error('Wrong input');
    }
    if (rowIndex >= this._2dvector.length) {
      return false;
    }
    const currentRow = this._2dvector[rowIndex];
    if (row.length !== currentRow.length) {
      return false;
    }
    for (let index = 0; index < row.length; index++) {
      currentRow[index] = row[index];
    }
    return true;
  }

  /**
   * Replace matrix column at index 'columnIndex'
   * @param {number} columnIndex the index of the column to be replaced. If it's not an
   * integer number or if it's less than zero, an exception "Error('Wrong input')" is thrown
   * @param {Array<T>} column the array of values which must replace the existing column.
   * If it's not an array or if the array is empty, an exception "Error('Wrong input')" is thrown
   * @returns true if the column replacement was successful, otherwise it returns false
   * @throws exception "Error('Wrong input')" when any parameter in input is wrong
   */
  public replaceColumnAt(columnIndex: number, column: Array<T>): boolean {
    if (!_.isInteger(columnIndex) || columnIndex < 0 || !Array.isArray(column) || column.length < 1) {
      throw new Error('Wrong input');
    }
    if (columnIndex >= this.colsNum()) {
      return false;
    }
    if (column.length !== this._2dvector.length) {
      return false;
    }
    for (let rowIndex = 0; rowIndex < this._2dvector.length; rowIndex++) {
      this._2dvector[rowIndex][columnIndex] = column[rowIndex];
    }
    return true;
  }

  /**
   * Get matrix rows iterator
   * @returns {DanMatrixRowsIterator<T>} the matrix rows iterator
   */
  public getRowsIterator(): DanMatrixRowsIterator<T> {
    return new DanMatrixRowsIterator<T>(this);
  }

  /**
   * Get matrix columns iterator
   * @returns {DanMatrixColumnsIterator<T>} the matrix columns iterator
   */
  public getColumnsIterator(): DanMatrixColumnsIterator<T> {
    return new DanMatrixColumnsIterator<T>(this);
  }
}
