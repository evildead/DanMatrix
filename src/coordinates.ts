import { isString } from 'lodash';

export class Coordinates {
  protected _x: number;
  protected _y: number;

  private resetInternalCoordinates() {
    this._x = 0;
    this._y = 0;
  }

  private constructor(x: number, y: number) {
    this.resetInternalCoordinates();
    this.setX(x);
    this.setY(y);
  }

  private static checkNonNegativeInteger(val: string | number): number | false {
    if (
      val === null ||
      val === undefined ||
      (val as unknown) === true ||
      (val as unknown) === false ||
      Array.isArray(val)
    ) {
      return false;
    }
    const num = Number(val);
    if (Number.isInteger(num) && num >= 0) {
      return num;
    }
    return false;
  }

  public static stringCoordsToArrCoords(strCoords: string, separator: string = '-'): false | [number, number] {
    if (!isString(strCoords)) {
      return false;
    }
    const coords = strCoords.split(separator ?? '-').map((elem: string) => Number(elem.trim()));
    if (coords.length < 2) {
      return false;
    }
    if (!Number.isInteger(coords[0]) || coords[0] < 0 || !Number.isInteger(coords[1]) || coords[1] < 0) {
      return false;
    }
    return [coords[0], coords[1]];
  }

  public static arrayCoordsToStringCoords(coordsArr: Array<string | number>, separator: string = '-'): false | string {
    if (!Array.isArray(coordsArr) || coordsArr.length < 2) {
      return false;
    }
    const numX = Coordinates.checkNonNegativeInteger(coordsArr[0]);
    const numY = Coordinates.checkNonNegativeInteger(coordsArr[1]);
    if (numX === false || numY === false) {
      return false;
    }
    return `${numX}${separator ?? '-'}${numY}`;
  }

  public static fromStringCoords(strCoords: string, separator: string = '-'): false | Coordinates {
    const coordsArr = Coordinates.stringCoordsToArrCoords(strCoords, separator);
    if (coordsArr === false) {
      return false;
    }
    const coordinatesObj = new Coordinates(coordsArr[0], coordsArr[1]);
    return coordinatesObj;
  }

  public static fromArrayCoords(coordsArr: Array<string | number>): false | Coordinates {
    if (!Array.isArray(coordsArr) || coordsArr.length < 2) {
      return false;
    }
    const numX = Coordinates.checkNonNegativeInteger(coordsArr[0]);
    const numY = Coordinates.checkNonNegativeInteger(coordsArr[1]);
    if (numX === false || numY === false) {
      return false;
    }
    const coordinatesObj = new Coordinates(numX, numY);
    return coordinatesObj;
  }

  public getX() {
    return this._x;
  }

  public setX(x: string | number): boolean {
    const numX = Coordinates.checkNonNegativeInteger(x);
    if (numX === false) {
      return false;
    }
    this._x = numX;
    return true;
  }

  public getY() {
    return this._y;
  }

  public setY(y: string | number): boolean {
    const numY = Coordinates.checkNonNegativeInteger(y);
    if (numY === false) {
      return false;
    }
    this._y = numY;
    return true;
  }

  public toString(separator = '-') {
    return `${this._x}${separator ?? '-'}${this._y}`;
  }

  public toArr() {
    return [this._x, this._y];
  }
}
