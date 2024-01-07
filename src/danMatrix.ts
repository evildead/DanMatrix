/* eslint-disable security/detect-object-injection */
import _ from 'lodash';

import { DanMatrixConstructorType, DanMatrixRowsIterator, DanMatrixColumnsIterator } from '.';

export class DanMatrix<T> {
  private _2dvector: Array<Array<T>>;

  constructor(props?: DanMatrixConstructorType<T>) {
    this.setupMatrix(props);
  }

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

  public clone(): DanMatrix<T> {
    const clonedMatrix: DanMatrix<T> = new DanMatrix<T>(this._2dvector);
    return clonedMatrix;
  }

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

  public rowsNum(): number {
    return this._2dvector.length;
  }

  public colsNum(): number {
    if (this._2dvector.length < 1) {
      return 0;
    }
    return this._2dvector[0].length;
  }

  public get(x: number, y: number): T | undefined {
    return this._2dvector[x]?.[y];
  }

  public set(x: number, y: number, val: T): T | undefined {
    if (x >= this._2dvector.length || y >= this._2dvector[x].length) {
      return undefined;
    }
    this._2dvector[x][y] = val;
    return val;
  }

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

  public addRow(row: Array<T>): boolean {
    if (!Array.isArray(row) || row.length < 1) {
      throw new Error('Wrong input');
    }
    if (this._2dvector.length > 0 && row.length !== this._2dvector[0].length) {
      return false;
    }
    this._2dvector.push(_.cloneDeep(row));
    return true;
  }

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

  public getRowAt(rowIndex: number): Array<T> | undefined {
    if (!_.isInteger(rowIndex) || rowIndex < 0) {
      throw new Error('Wrong input');
    }
    if (rowIndex >= this._2dvector.length) {
      return undefined;
    }
    return _.cloneDeep(this._2dvector[rowIndex]);
  }

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
    if (row.length !== this._2dvector[0].length) {
      return false;
    }
    this._2dvector.splice(rowIndex, 0, _.cloneDeep(row));
    return true;
  }

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

  public insertColumnAt(columnIndex: number, column: Array<T>): boolean {
    if (!_.isInteger(columnIndex) || columnIndex < 0 || !Array.isArray(column) || column.length < 1) {
      throw new Error('Wrong input');
    }
    if (this._2dvector.length > 0) {
      if (column.length !== this._2dvector.length) {
        return false;
      }
      if (columnIndex > this._2dvector[0].length) {
        return false;
      } else if (columnIndex === this._2dvector[0].length) {
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
    if (this._2dvector.length < 1 || columnIndex >= this._2dvector[0].length) {
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
