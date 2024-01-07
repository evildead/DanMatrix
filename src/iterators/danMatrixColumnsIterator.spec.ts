import { DanMatrixColumnsIterator } from '.';
import { DanMatrix } from '..';

describe('DanMatrixColumnsIterator', () => {
  it('check the constructor with correct parameters', async () => {
    expect(() => {
      const myMatrix01 = new DanMatrix<number>();
      const danMatrixColumnsIterator01 = new DanMatrixColumnsIterator<number>(myMatrix01);
      expect(danMatrixColumnsIterator01.current()).toBeUndefined();

      const myMatrix02 = new DanMatrix<number>({
        rows: 2,
        columns: 3,
        val: 7
      });
      const danMatrixColumnsIterator02 = new DanMatrixColumnsIterator<number>(myMatrix02);
      expect(danMatrixColumnsIterator02.current()).toBeUndefined();

      const myMatrix03 = new DanMatrix<number>([
        [763, 23, 87, 123],
        [244, 68563, 1, 557]
      ]);
      const danMatrixColumnsIterator03 = new DanMatrixColumnsIterator<number>(myMatrix03);
      expect(danMatrixColumnsIterator03.current()).toBeUndefined();
    }).not.toThrow();
  });

  it('check the constructor with wrong parameters - should throw exceptions', async () => {
    expect(() => {
      const danMatrixColumnsIterator = new DanMatrixColumnsIterator<number>(undefined as any);
    }).toThrow();

    expect(() => {
      const danMatrixColumnsIterator = new DanMatrixColumnsIterator<number>(null as any);
    }).toThrow();

    expect(() => {
      const danMatrixColumnsIterator = new DanMatrixColumnsIterator<number>(0 as any);
    }).toThrow();

    expect(() => {
      const danMatrixColumnsIterator = new DanMatrixColumnsIterator<number>('matrix' as any);
    }).toThrow();

    expect(() => {
      const danMatrixColumnsIterator = new DanMatrixColumnsIterator<number>([] as any);
    }).toThrow();

    expect(() => {
      const danMatrixColumnsIterator = new DanMatrixColumnsIterator<number>(new Object() as any);
    }).toThrow();
  });

  it('check it iterates through all the columns', async () => {
    expect(() => {
      const myMatrix01 = new DanMatrix<number>([
        [763, 23, 87, 123],
        [244, 68563, 1, 557]
      ]);
      const danMatrixColumnsIterator01 = new DanMatrixColumnsIterator<number>(myMatrix01);
      let visitedColumns = 0;
      while (danMatrixColumnsIterator01.hasNext()) {
        const column = danMatrixColumnsIterator01.next();
        const currColumn = danMatrixColumnsIterator01.current();
        expect(column).toEqual(myMatrix01.getColumnAt(visitedColumns));
        expect(currColumn).toEqual(column);
        if (column !== undefined) {
          visitedColumns++;
        }
      }
      expect(visitedColumns).toEqual(myMatrix01.colsNum());
      expect(danMatrixColumnsIterator01.next()).toBeUndefined();
      danMatrixColumnsIterator01.rewind();
      visitedColumns = 0;
      for (const column of danMatrixColumnsIterator01) {
        expect(column).toEqual(myMatrix01.getColumnAt(visitedColumns));
        visitedColumns++;
      }
      expect(visitedColumns).toEqual(myMatrix01.colsNum());
    }).not.toThrow();
  });
});
