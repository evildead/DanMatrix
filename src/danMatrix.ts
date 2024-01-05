/* eslint-disable security/detect-object-injection */
import _ from 'lodash';

import { DanMatrixRowsIterator, DanMatrixColumnsIterator } from '.';

export interface RowsColsFilledWithValType<T> {
  rows: number;
  columns: number;
  val: T;
}

export type DanMatrixConstructorType<T> = RowsColsFilledWithValType<T> | Array<Array<T>>;

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
    const coords = coord.split('-').map((elem: string) => Number(elem.trim()));
    if (coords.length < 2) {
      return undefined;
    }
    return this.get(coords[0], coords[1]);
  }

  public setCoord(coord: string, val: T): T | undefined {
    const coords = coord.split('-').map((elem: string) => Number(elem.trim()));
    if (coords.length < 2) {
      return undefined;
    }
    return this.set(coords[0], coords[1], val);
  }

  public addRow(row: Array<T>): void {
    if (!Array.isArray(row) || row.length < 1) {
      throw new Error('Wrong input');
    }
    if (this._2dvector.length > 0 && row.length !== this._2dvector[0].length) {
      throw new Error(
        `Input row's length ${row.length} differs from matrix's num of columns ${this._2dvector[0].length}`
      );
    }
    this._2dvector.push(_.cloneDeep(row));
  }

  public addColumn(column: Array<T>): void {
    if (!Array.isArray(column) || column.length < 1) {
      throw new Error('Wrong input');
    }
    if (this._2dvector.length > 0) {
      if (column.length !== this._2dvector.length) {
        throw new Error(
          `Input column's length ${column.length} differs from matrix's num of rows ${this._2dvector.length}`
        );
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

  public insertRowAt(rowIndex: number, row: Array<T>): void {
    if (!_.isInteger(rowIndex) || rowIndex < 0 || !Array.isArray(row) || row.length < 1) {
      throw new Error('Wrong input');
    }
    if (rowIndex > this._2dvector.length) {
      throw new Error(`Cannot insert row at index ${rowIndex}`);
    }
    if (rowIndex === this._2dvector.length) {
      return this.addRow(row);
    }
    if (row.length !== this._2dvector[0].length) {
      throw new Error(
        `Input row's length ${row.length}, differs from matrix's num of columns ${this._2dvector[0].length}`
      );
    }
    this._2dvector.splice(rowIndex, 0, _.cloneDeep(row));
  }

  public getColumnAt(columnIndex: number): Array<T> | undefined {
    if (!_.isInteger(columnIndex) || columnIndex < 0) {
      throw new Error('Wrong input');
    }
    if (this._2dvector.length < 1) {
      return undefined;
    }
    if (columnIndex >= this._2dvector[0].length) {
      return undefined;
    }
    const columnToReturn: Array<T> = [];
    for (let rowIndex = 0; rowIndex < this._2dvector.length; rowIndex++) {
      columnToReturn.push(this._2dvector[rowIndex][columnIndex]);
    }
    return columnToReturn;
  }

  public insertColumnAt(columnIndex: number, column: Array<T>): void {
    if (!_.isInteger(columnIndex) || columnIndex < 0 || !Array.isArray(column) || column.length < 1) {
      throw new Error('Wrong input');
    }
    if (this._2dvector.length > 0) {
      if (column.length !== this._2dvector.length) {
        throw new Error(
          `Input column's length ${column.length}, differs from matrix's num of rows ${this._2dvector.length}`
        );
      }
      if (columnIndex > this._2dvector[0].length) {
        throw new Error(`Cannot insert column at index ${columnIndex}`);
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
        throw new Error(`Cannot insert column at index ${columnIndex}`);
      }
    }
  }

  public removeRowAt(rowIndex: number): void {
    if (!_.isInteger(rowIndex) || rowIndex < 0) {
      throw new Error('Wrong input');
    }
    if (rowIndex >= this._2dvector.length) {
      throw new Error(`Cannot remove row at index ${rowIndex}`);
    }
    this._2dvector.splice(rowIndex, 1);
  }

  public removeColumnAt(columnIndex: number): void {
    if (!_.isInteger(columnIndex) || columnIndex < 0) {
      throw new Error('Wrong input');
    }
    if (this._2dvector.length < 1 || columnIndex >= this._2dvector[0].length) {
      throw new Error(`Cannot remove column at index ${columnIndex}`);
    }
    for (let rowIndex = 0; rowIndex < this._2dvector.length; rowIndex++) {
      const row = this._2dvector[rowIndex];
      row.splice(columnIndex, 1);
    }
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
