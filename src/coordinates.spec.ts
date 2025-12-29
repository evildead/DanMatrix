import { Coordinates } from '.';

class SubCoordinates extends Coordinates {
  constructor(x: number, y: number) {
    super(x, y);
  }
}

describe('Coordinates', () => {
  describe('protected constructor', () => {
    it('returns class instance with coordinates 0,0 because the input value is wrong', async () => {
      const subCoordinatesInstance01 = new SubCoordinates(-5, 8);
      expect(subCoordinatesInstance01.getX()).toEqual(0);
      expect(subCoordinatesInstance01.getY()).toEqual(0);

      const subCoordinatesInstance02 = new SubCoordinates(5, -8);
      expect(subCoordinatesInstance02.getX()).toEqual(0);
      expect(subCoordinatesInstance02.getY()).toEqual(0);

      const subCoordinatesInstance03 = new SubCoordinates(true as any, [] as any);
      expect(subCoordinatesInstance03.getX()).toEqual(0);
      expect(subCoordinatesInstance03.getY()).toEqual(0);

      const subCoordinatesInstance04 = new SubCoordinates(9.54, {} as any);
      expect(subCoordinatesInstance04.getX()).toEqual(0);
      expect(subCoordinatesInstance04.getY()).toEqual(0);
    });
  });
  describe('fromArrayCoords', () => {
    it('returns false with wrong parameters', async () => {
      const coordinates01 = Coordinates.fromArrayCoords(null as any);
      expect(coordinates01).toBe(false);

      const coordinates02 = Coordinates.fromArrayCoords(undefined as any);
      expect(coordinates02).toBe(false);

      const coordinates03 = Coordinates.fromArrayCoords([] as any);
      expect(coordinates03).toBe(false);

      const coordinates04 = Coordinates.fromArrayCoords(true as any);
      expect(coordinates04).toBe(false);

      const coordinates05 = Coordinates.fromArrayCoords(false as any);
      expect(coordinates05).toBe(false);

      const coordinates06 = Coordinates.fromArrayCoords({} as any);
      expect(coordinates06).toBe(false);

      const coordinates07 = Coordinates.fromArrayCoords([-3, 6]);
      expect(coordinates07).toBe(false);

      const coordinates08 = Coordinates.fromArrayCoords([34, -2]);
      expect(coordinates08).toBe(false);

      const coordinates09 = Coordinates.fromArrayCoords([34.2, 4]);
      expect(coordinates09).toBe(false);

      const coordinates10 = Coordinates.fromArrayCoords([11, 7.8]);
      expect(coordinates10).toBe(false);

      const coordinates11 = Coordinates.fromArrayCoords([14]);
      expect(coordinates11).toBe(false);
    });

    it('returns a correct instance of the Coordinates class', async () => {
      const coordinates01 = Coordinates.fromArrayCoords([0, 0]);
      expect(coordinates01 instanceof Coordinates).toBe(true);

      const coordinates02 = Coordinates.fromArrayCoords([3, 8]);
      expect(coordinates02 instanceof Coordinates).toBe(true);
      if (coordinates02 === false) {
        return;
      }
      expect(coordinates02.getX()).toBe(3);
      expect(coordinates02.getY()).toBe(8);
      expect(coordinates02.toArr()).toEqual([3, 8]);
      expect(coordinates02.toString(',')).toEqual('3,8');
    });
  });

  describe('fromStringCoords', () => {
    it('returns false with wrong parameters', async () => {
      const coordinates01 = Coordinates.fromStringCoords(null as any);
      expect(coordinates01).toBe(false);

      const coordinates02 = Coordinates.fromStringCoords(undefined as any);
      expect(coordinates02).toBe(false);

      const coordinates03 = Coordinates.fromStringCoords([] as any);
      expect(coordinates03).toBe(false);

      const coordinates04 = Coordinates.fromStringCoords(true as any);
      expect(coordinates04).toBe(false);

      const coordinates05 = Coordinates.fromStringCoords(false as any);
      expect(coordinates05).toBe(false);

      const coordinates06 = Coordinates.fromStringCoords({} as any);
      expect(coordinates06).toBe(false);

      const coordinates07 = Coordinates.fromStringCoords('-3,6', ',');
      expect(coordinates07).toBe(false);

      const coordinates08 = Coordinates.fromStringCoords('34,-2');
      expect(coordinates08).toBe(false);

      const coordinates09 = Coordinates.fromStringCoords('34.2, 4', ',');
      expect(coordinates09).toBe(false);

      const coordinates10 = Coordinates.fromStringCoords('11 - 7.8');
      expect(coordinates10).toBe(false);

      const coordinates11 = Coordinates.fromStringCoords('11');
      expect(coordinates11).toBe(false);

      const coordinates12 = Coordinates.fromStringCoords('10-32', [] as any);
      expect(coordinates12).toBe(false);
    });

    it('returns a correct instance of the Coordinates class', async () => {
      const coordinates01 = Coordinates.fromStringCoords('0-0');
      expect(coordinates01 instanceof Coordinates).toBe(true);

      const coordinates02 = Coordinates.fromStringCoords('3, 8', ',');
      expect(coordinates02 instanceof Coordinates).toBe(true);
      if (coordinates02 === false) {
        return;
      }
      expect(coordinates02.getX()).toBe(3);
      expect(coordinates02.getY()).toBe(8);

      const coordinates03 = Coordinates.fromStringCoords('9 - 15', null as any);
      expect(coordinates03 instanceof Coordinates).toBe(true);
      if (coordinates03 === false) {
        return;
      }
      expect(coordinates03.getX()).toBe(9);
      expect(coordinates03.getY()).toBe(15);
      expect(coordinates03.toArr()).toEqual([9, 15]);
      expect(coordinates03.toString(',')).toEqual('9,15');
    });
  });

  describe('Getters and Setters', () => {
    it('set wrong values', async () => {
      const coordinates01 = Coordinates.fromStringCoords('9 - 19', '-');
      expect(coordinates01 instanceof Coordinates).toBe(true);
      if (coordinates01 === false) {
        return;
      }
      expect(coordinates01.getX()).toBe(9);
      expect(coordinates01.getY()).toBe(19);
      const setOutput01 = coordinates01.setX(14.67);
      expect(setOutput01).toBe(false);
      expect(coordinates01.getX()).toBe(9);
      const setOutput02 = coordinates01.setY(-24);
      expect(setOutput02).toBe(false);
      const setOutput03 = coordinates01.setY(null as any);
      expect(setOutput03).toBe(false);
      const setOutput04 = coordinates01.setY(undefined as any);
      expect(setOutput04).toBe(false);
      const setOutput05 = coordinates01.setY(true as any);
      expect(setOutput05).toBe(false);
      const setOutput06 = coordinates01.setY(false as any);
      expect(setOutput06).toBe(false);
      const setOutput07 = coordinates01.setY([] as any);
      expect(setOutput07).toBe(false);
      const setOutput08 = coordinates01.setY({} as any);
      expect(setOutput08).toBe(false);
      expect(coordinates01.getY()).toBe(19);
      expect(coordinates01.toString()).toEqual('9-19');
    });

    it('set correct values', async () => {
      const coordinates01 = Coordinates.fromStringCoords('15 - 6', '-');
      expect(coordinates01 instanceof Coordinates).toBe(true);
      if (coordinates01 === false) {
        return;
      }
      expect(coordinates01.getX()).toBe(15);
      expect(coordinates01.getY()).toBe(6);
      const setOutput01 = coordinates01.setX('12');
      expect(setOutput01).toBe(true);
      expect(coordinates01.getX()).toBe(12);
      const setOutput02 = coordinates01.setY(24);
      expect(setOutput02).toBe(true);
      expect(coordinates01.getY()).toBe(24);
      expect(coordinates01.toString(null as any)).toEqual('12-24');
    });
  });

  describe('Utility method: arrayCoordsToStringCoords', () => {
    it('invoke with wrong values', async () => {
      const coordinates01 = Coordinates.arrayCoordsToStringCoords(null as any);
      expect(coordinates01).toBe(false);

      const coordinates02 = Coordinates.arrayCoordsToStringCoords(undefined as any);
      expect(coordinates02).toBe(false);

      const coordinates03 = Coordinates.arrayCoordsToStringCoords([] as any);
      expect(coordinates03).toBe(false);

      const coordinates04 = Coordinates.arrayCoordsToStringCoords(true as any);
      expect(coordinates04).toBe(false);

      const coordinates05 = Coordinates.arrayCoordsToStringCoords(false as any);
      expect(coordinates05).toBe(false);

      const coordinates06 = Coordinates.arrayCoordsToStringCoords({} as any);
      expect(coordinates06).toBe(false);

      const coordinates07 = Coordinates.arrayCoordsToStringCoords([-32, 16]);
      expect(coordinates07).toBe(false);

      const coordinates08 = Coordinates.arrayCoordsToStringCoords([43, -21]);
      expect(coordinates08).toBe(false);

      const coordinates09 = Coordinates.arrayCoordsToStringCoords([44.21, 5]);
      expect(coordinates09).toBe(false);

      const coordinates10 = Coordinates.arrayCoordsToStringCoords([1, 9.1]);
      expect(coordinates10).toBe(false);

      const coordinates11 = Coordinates.arrayCoordsToStringCoords([13]);
      expect(coordinates11).toBe(false);

      const coordinates12 = Coordinates.arrayCoordsToStringCoords([2, 3], [] as any);
      expect(coordinates12).toBe(false);
    });

    it('invoke with correct values', async () => {
      const coordinatesStr01 = Coordinates.arrayCoordsToStringCoords([0, 0]);
      expect(coordinatesStr01).toEqual('0-0');

      const coordinatesStr02 = Coordinates.arrayCoordsToStringCoords([3, 8]);
      expect(coordinatesStr02).toEqual('3-8');

      const coordinatesStr03 = Coordinates.arrayCoordsToStringCoords([14, 9], '|');
      expect(coordinatesStr03).toEqual('14|9');

      const coordinatesStr04 = Coordinates.arrayCoordsToStringCoords([4, 5], null as any);
      expect(coordinatesStr04).toEqual('4-5');
    });
  });

  describe('Utility method: stringCoordsToArrCoords', () => {
    it('invoke with wrong values', async () => {
      const coordinates01 = Coordinates.stringCoordsToArrCoords(null as any);
      expect(coordinates01).toBe(false);

      const coordinates02 = Coordinates.stringCoordsToArrCoords(undefined as any);
      expect(coordinates02).toBe(false);

      const coordinates03 = Coordinates.stringCoordsToArrCoords([] as any);
      expect(coordinates03).toBe(false);

      const coordinates04 = Coordinates.stringCoordsToArrCoords(true as any);
      expect(coordinates04).toBe(false);

      const coordinates05 = Coordinates.stringCoordsToArrCoords(false as any);
      expect(coordinates05).toBe(false);

      const coordinates06 = Coordinates.stringCoordsToArrCoords({} as any);
      expect(coordinates06).toBe(false);

      const coordinates07 = Coordinates.stringCoordsToArrCoords('-3,6', ',');
      expect(coordinates07).toBe(false);

      const coordinates08 = Coordinates.stringCoordsToArrCoords('34,-2');
      expect(coordinates08).toBe(false);

      const coordinates09 = Coordinates.stringCoordsToArrCoords('34.2, 4', ',');
      expect(coordinates09).toBe(false);

      const coordinates10 = Coordinates.stringCoordsToArrCoords('11 - 7.8');
      expect(coordinates10).toBe(false);

      const coordinates11 = Coordinates.stringCoordsToArrCoords('11');
      expect(coordinates11).toBe(false);

      const coordinates12 = Coordinates.stringCoordsToArrCoords('10-32', [] as any);
      expect(coordinates12).toBe(false);
    });

    it('invoke with correct values', async () => {
      const coordinatesArr01 = Coordinates.stringCoordsToArrCoords('0-0');
      expect(coordinatesArr01).toEqual([0, 0]);

      const coordinatesArr02 = Coordinates.stringCoordsToArrCoords('3-8');
      expect(coordinatesArr02).toEqual([3, 8]);

      const coordinatesArr03 = Coordinates.stringCoordsToArrCoords('14|9', '|');
      expect(coordinatesArr03).toEqual([14, 9]);

      const coordinatesArr04 = Coordinates.stringCoordsToArrCoords('4, 5', ',');
      expect(coordinatesArr04).toEqual([4, 5]);
    });
  });
});
