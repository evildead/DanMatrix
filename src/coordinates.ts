import { isString } from 'lodash';

/**
 * Coordinates is the class representing the 2-Dimension coordinates (x,y)
 */
export class Coordinates {
  /**
   * The x non-negative integer number
   */
  protected _x: number;

  /**
   * The y non-negative integer number
   */
  protected _y: number;

  /**
   * Reset the initial default values (0,0)
   */
  protected resetInternalCoordinates() {
    this._x = 0;
    this._y = 0;
  }

  /**
   * The protected constructor
   * @param x The x non-negative integer number
   * @param y The y non-negative integer number
   */
  protected constructor(x: number, y: number) {
    this.resetInternalCoordinates();
    if (!this.setX(x) || !this.setY(y)) {
      this.resetInternalCoordinates();
    }
  }

  /**
   * Utility static method to check that the 'val' in input in a non-negative
   * integer number, or a "stringified" non-negative integer which will be
   * transformed into a number
   * @param val the input which can be a string or a number
   * @returns - false if the input is not a non-negative ("stringified") integer
   * - otherwise the numeric value of the input
   */
  protected static checkNonNegativeInteger(val: string | number): number | false {
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

  /**
   * Utility function to transform a stringified coordinates 'x-y' into the array of coordinates [x,y]
   * @param strCoords the stringified coordinates. Ex: '4-7'
   * @param separator the separator of the stringified coordinates. Default '-'
   * @returns - false if there's any error in the strCoords parameter or the separator
   * - otherwise it returns the array of coordinates [x,y]. Ex: [4,7]
   */
  public static stringCoordsToArrCoords(strCoords: string, separator: string = '-'): false | [number, number] {
    if (!isString(strCoords)) {
      return false;
    }
    if (!isString(separator) && separator !== null && separator !== undefined) {
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

  /**
   * Utility function to transform an array of coordinates [x,y] into its "stringified" version 'x-y'
   * based on the value of the separator (which defaults to '-').
   * @param coordsArr the array of coordinates [x,y]. Ex: [2,7]
   * @param separator the separator of the stringified coordinates in output
   * @returns - false if there's any error in the coordsArr parameter or in the separator
   * - otherwise the stringified version of the coordinates. Ex: '2-7'
   */
  public static arrayCoordsToStringCoords(coordsArr: Array<string | number>, separator: string = '-'): false | string {
    if (!Array.isArray(coordsArr) || coordsArr.length < 2) {
      return false;
    }
    if (!isString(separator) && separator !== null && separator !== undefined) {
      return false;
    }
    const numX = Coordinates.checkNonNegativeInteger(coordsArr[0]);
    const numY = Coordinates.checkNonNegativeInteger(coordsArr[1]);
    if (numX === false || numY === false) {
      return false;
    }
    return `${numX}${separator ?? '-'}${numY}`;
  }

  /**
   * Build a Coordinates class instance from string coordinates 'x-y'
   * @param strCoords the stringified coordinates. Ex: '4-7'
   * @param separator the separator of the stringified coordinates. Default '-'
   * @returns - if there's any error in the strCoords parameter or the separator it returns a default Coordinate instance with (0,0)
   * - otherwise it returns an instance of the Coordinates class with (x,y)
   */
  public static fromStringCoords(strCoords: string, separator: string = '-'): Coordinates {
    const coordsArr = Coordinates.stringCoordsToArrCoords(strCoords, separator);
    if (coordsArr === false) {
      return new Coordinates(0, 0);
    }
    const coordinatesObj = new Coordinates(coordsArr[0], coordsArr[1]);
    return coordinatesObj;
  }

  /**
   * Build a Coordinates class instance from array coordinates [x,y]
   * @param coordsArr the array of coordinates [x,y]. Ex: [5,1]
   * @returns - if there's any error in the coordsArr parameter it returns a default Coordinate instance with (0,0)
   * - otherwise it returns an instance of the Coordinates class with (x,y)
   */
  public static fromArrayCoords(coordsArr: Array<string | number>): Coordinates {
    if (!Array.isArray(coordsArr) || coordsArr.length < 2) {
      return new Coordinates(0, 0);
    }
    const numX = Coordinates.checkNonNegativeInteger(coordsArr[0]);
    const numY = Coordinates.checkNonNegativeInteger(coordsArr[1]);
    if (numX === false || numY === false) {
      return new Coordinates(0, 0);
    }
    const coordinatesObj = new Coordinates(numX, numY);
    return coordinatesObj;
  }

  /**
   * The x getter
   * @returns The x non-negative integer number
   */
  public getX() {
    return this._x;
  }

  /**
   * The x setter
   * @param x The x non-negative integer ("stringified") number
   * @returns - false if the input is not a correct value for the coordinates
   * - otherwise true and the numeric value of the input is assigned to the `protected _x` class member
   */
  public setX(x: string | number): boolean {
    const numX = Coordinates.checkNonNegativeInteger(x);
    if (numX === false) {
      return false;
    }
    this._x = numX;
    return true;
  }

  /**
   * The y getter
   * @returns The y non-negative integer number
   */
  public getY() {
    return this._y;
  }

  /**
   * The y setter
   * @param y The y non-negative integer ("stringified") number
   * @returns - false if the input is not a correct value for the coordinates
   * - otherwise true and the numeric value of the input is assigned to the `protected _y` class member
   */
  public setY(y: string | number): boolean {
    const numY = Coordinates.checkNonNegativeInteger(y);
    if (numY === false) {
      return false;
    }
    this._y = numY;
    return true;
  }

  /**
   * Get the coordinates in string format separated by a separator
   * @param separator the separator of the stringified coordinates. Default '-'
   * @returns the stringified version of the coordinates. Ex: '2-7'
   */
  public toString(separator = '-') {
    return `${this._x}${separator ?? '-'}${this._y}`;
  }

  /**
   * Get the coordinates as array [x,y]
   * @returns the coordinates as array [x,y]. Ex: [3,4]
   */
  public toArr() {
    return [this._x, this._y];
  }
}
