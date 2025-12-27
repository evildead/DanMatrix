import { Coordinates } from '.';

describe('Coordinates', () => {
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
    });

    it('returns a correct instance of the Coordinates class', async () => {
      const coordinates01 = Coordinates.fromStringCoords('0, 0', ',');
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
});
