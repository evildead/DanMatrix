import { DanMatrixRowsIterator } from '.';
import { DanMatrix } from '..';

describe('DanMatrixRowsIterator', () => {
  it('check the constructor with correct parameters', async () => {
    expect(() => {
      const myMatrix01 = new DanMatrix<number>();
      const danMatrixRowsIterator01 = new DanMatrixRowsIterator<number>(myMatrix01);
      expect(danMatrixRowsIterator01.current()).toBeUndefined();

      const myMatrix02 = new DanMatrix<number>({
        rows: 2,
        columns: 3,
        val: 7
      });
      const danMatrixRowsIterator02 = new DanMatrixRowsIterator<number>(myMatrix02);
      expect(danMatrixRowsIterator02.current()).toBeUndefined();

      const myMatrix03 = new DanMatrix<number>([
        [763, 23, 87, 123],
        [244, 68563, 1, 557]
      ]);
      const danMatrixRowsIterator03 = new DanMatrixRowsIterator<number>(myMatrix03);
      expect(danMatrixRowsIterator03.current()).toBeUndefined();
    }).not.toThrow();
  });

  it('check the constructor with wrong parameters - should throw exceptions', async () => {
    expect(() => {
      const danMatrixRowsIterator = new DanMatrixRowsIterator<number>(undefined as any);
    }).toThrow();

    expect(() => {
      const danMatrixRowsIterator = new DanMatrixRowsIterator<number>(null as any);
    }).toThrow();

    expect(() => {
      const danMatrixRowsIterator = new DanMatrixRowsIterator<number>(0 as any);
    }).toThrow();

    expect(() => {
      const danMatrixRowsIterator = new DanMatrixRowsIterator<number>('matrix' as any);
    }).toThrow();

    expect(() => {
      const danMatrixRowsIterator = new DanMatrixRowsIterator<number>([] as any);
    }).toThrow();

    expect(() => {
      const danMatrixRowsIterator = new DanMatrixRowsIterator<number>(new Object() as any);
    }).toThrow();
  });

  it('check it iterates through all the rows', async () => {
    expect(() => {
      const myMatrix01 = new DanMatrix<number>([
        [7253, 2223, 34587],
        [21144, 563, 51],
        [11243, 663, 31],
        [81144, 2263, 151],
        [41541, 178, 11],
        [23141, 1874, 751]
      ]);
      const danMatrixRowsIterator01 = new DanMatrixRowsIterator<number>(myMatrix01);
      let visitedRows = 0;
      while (danMatrixRowsIterator01.hasNext()) {
        const row = danMatrixRowsIterator01.next();
        const currRow = danMatrixRowsIterator01.current();
        expect(row).toEqual(myMatrix01.getRowAt(visitedRows));
        expect(currRow).toEqual(row);
        if (row !== undefined) {
          visitedRows++;
        }
      }
      expect(visitedRows).toEqual(myMatrix01.rowsNum());
      expect(danMatrixRowsIterator01.next()).toBeUndefined();
      danMatrixRowsIterator01.rewind();
      visitedRows = 0;
      for (const row of danMatrixRowsIterator01) {
        expect(row).toEqual(myMatrix01.getRowAt(visitedRows));
        visitedRows++;
      }
      expect(visitedRows).toEqual(myMatrix01.rowsNum());
    }).not.toThrow();
  });
});
