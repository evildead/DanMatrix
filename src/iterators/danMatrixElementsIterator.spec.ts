import { DanMatrixElementsIterator } from '.';
import { DanMatrix } from '..';

describe('DanMatrixElementsIterator', () => {
  it('check the constructor with correct parameters', async () => {
    expect(() => {
      const myMatrix01 = new DanMatrix<number>();
      const danMatrixElementsIterator01 = new DanMatrixElementsIterator<number>(myMatrix01);
      expect(danMatrixElementsIterator01.current()).toBeUndefined();

      const myMatrix02 = new DanMatrix<number>({
        rows: 2,
        columns: 3,
        val: 7
      });
      const danMatrixElementsIterator02 = new DanMatrixElementsIterator<number>(myMatrix02);
      expect(danMatrixElementsIterator02.current()).toBeUndefined();

      const myMatrix03 = new DanMatrix<number>([
        [763, 23, 87, 123],
        [244, 68563, 1, 557]
      ]);
      const danMatrixElementsIterator03 = new DanMatrixElementsIterator<number>(myMatrix03);
      expect(danMatrixElementsIterator03.current()).toBeUndefined();
    }).not.toThrow();
  });

  it('check the constructor with wrong parameters - should throw exceptions', async () => {
    expect(() => {
      const danMatrixElementsIterator = new DanMatrixElementsIterator<number>(undefined as any);
    }).toThrow();

    expect(() => {
      const danMatrixElementsIterator = new DanMatrixElementsIterator<number>(null as any);
    }).toThrow();

    expect(() => {
      const danMatrixElementsIterator = new DanMatrixElementsIterator<number>(0 as any);
    }).toThrow();

    expect(() => {
      const danMatrixElementsIterator = new DanMatrixElementsIterator<number>('matrix' as any);
    }).toThrow();

    expect(() => {
      const danMatrixElementsIterator = new DanMatrixElementsIterator<number>([] as any);
    }).toThrow();

    expect(() => {
      const danMatrixElementsIterator = new DanMatrixElementsIterator<number>(new Object() as any);
    }).toThrow();
  });

  it('check it iterates through all the elements', async () => {
    expect(() => {
      const myMatrix01 = new DanMatrix<number>([
        [7253, 2223, 34587],
        [21144, 563, 51],
        [11243, 663, 31],
        [81144, 2263, 151],
        [41541, 178, 11],
        [23141, 1874, 751]
      ]);
      const danMatrixElementsIterator01 = new DanMatrixElementsIterator<number>(myMatrix01);
      let visitedElements = 0;
      while (danMatrixElementsIterator01.hasNext()) {
        const nextElement = danMatrixElementsIterator01.next();
        const currElement = danMatrixElementsIterator01.current();
        if (nextElement === undefined) {
          throw new Error('Element was supposed to be a number');
        }
        expect(nextElement.val).toEqual(myMatrix01.get(nextElement.coordinates));
        expect(nextElement).toEqual(currElement);
        if (nextElement !== undefined) {
          visitedElements++;
        }
      }
      expect(visitedElements).toEqual(myMatrix01.elementsNum());
      expect(danMatrixElementsIterator01.next()).toBeUndefined();
      danMatrixElementsIterator01.rewind();
      visitedElements = 0;
      for (const element of danMatrixElementsIterator01) {
        expect(element.val).toEqual(myMatrix01.get(element.coordinates));
        visitedElements++;
      }
      expect(visitedElements).toEqual(myMatrix01.elementsNum());
    }).not.toThrow();
  });
});
