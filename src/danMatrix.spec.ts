import { DanMatrix } from '.';

describe('Matrix', () => {
  it('check the constructor with correct parameters', async () => {
    const myMatrix01 = new DanMatrix<number>();
    expect(myMatrix01.rowsNum()).toBe(0);
    expect(myMatrix01.colsNum()).toBe(0);

    const myMatrix02 = new DanMatrix<number>({
      rows: 2,
      columns: 3,
      val: 7
    });
    expect(myMatrix02.rowsNum()).toBe(2);
    expect(myMatrix02.colsNum()).toBe(3);

    const myMatrix03 = new DanMatrix<number>([
      [763, 23, 87, 123],
      [244, 68563, 1, 557]
    ]);
    expect(myMatrix03.rowsNum()).toBe(2);
    expect(myMatrix03.colsNum()).toBe(4);
  });

  it('check the constructor with wrong parameters - should throw exceptions', async () => {
    expect(() => {
      const myMatrix = new DanMatrix<number>({
        columns: 4,
        rows: -2,
        val: 15
      });
    }).toThrow();

    expect(() => {
      const myMatrix = new DanMatrix<number>({
        columns: -4,
        rows: 45,
        val: -5
      });
    }).toThrow();

    expect(() => {
      const myMatrix = new DanMatrix<number>({
        columns: 65.9,
        rows: 87,
        val: 0
      });
    }).toThrow();

    expect(() => {
      const myMatrix = new DanMatrix<number>([
        [45, 232, 87567, 3434],
        [2424, 685643, 1555, 5857],
        [45, 232, 87567, 3434, 3624],
        [242, 6853, 155, 587]
      ]);
    }).toThrow();

    expect(() => {
      const myMatrix = new DanMatrix<number>([[244, 68563, 1, 557], 4, 7, 'ddfg'] as any);
    }).toThrow();
  });

  it('should throw exceptions if wrong parameters are passed to setupMatrix', async () => {
    expect(() => {
      const myMatrix = new DanMatrix<number>();
      myMatrix.setupMatrix({
        columns: -1,
        rows: 9,
        val: 0
      });
    }).toThrow();

    expect(() => {
      const myMatrix = new DanMatrix<number>();
      myMatrix.setupMatrix({
        columns: 0,
        rows: 9,
        val: 0
      });
    }).toThrow();

    expect(() => {
      const myMatrix = new DanMatrix<number>();
      myMatrix.setupMatrix({
        columns: 12,
        rows: 9.5,
        val: 3476
      });
    }).toThrow();

    expect(() => {
      const myMatrix = new DanMatrix<number>();
      myMatrix.setupMatrix([
        [763, 23, 87],
        [244, 68563, 1, 557]
      ]);
    }).toThrow();

    expect(() => {
      const myMatrix = new DanMatrix<number>();
      myMatrix.setupMatrix(['a', [244, 68563, 1, 557]] as any);
    }).toThrow();
  });

  it('check the getters and setters', async () => {
    const myMatrix01 = new DanMatrix<string>({
      rows: 2,
      columns: 3,
      val: '@'
    });
    expect(myMatrix01.rowsNum()).toBe(2);
    expect(myMatrix01.colsNum()).toBe(3);
    expect(myMatrix01.get(1, 2)).toBe('@');
    expect(myMatrix01.getCoord('0-1')).toBe('@');
    expect(myMatrix01.get(2, 2)).toBeUndefined();

    const myMatrix02 = new DanMatrix<number>([
      [763, 23, 87, 123],
      [244, 68563, 1, 557]
    ]);
    expect(myMatrix02.rowsNum()).toBe(2);
    expect(myMatrix02.colsNum()).toBe(4);
    expect(myMatrix02.get(1, 2)).toBe(1);
    expect(myMatrix02.getCoord('0-1')).toBe(23);
    expect(myMatrix02.get(5, 9)).toBeUndefined();

    const myMatrix03 = new DanMatrix<string>([
      ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'],
      ['b', 'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb'],
      ['c', 'cc', 'ccc', 'cccc', 'ccccc', 'cccccc']
    ]);
    expect(myMatrix03.rowsNum()).toBe(3);
    expect(myMatrix03.colsNum()).toBe(6);
    expect(myMatrix03.get(1, 2)).toBe('bbb');
    expect(myMatrix03.getCoord('0-1')).toBe('aa');
    expect(myMatrix03.get(5, 9)).toBeUndefined();
    expect(myMatrix03.set(4, 4, 'eeeee')).toBeUndefined();
    expect(myMatrix03.getCoord('2-5')).toBe('cccccc');
    expect(myMatrix03.setCoord('2-5', 'CCCCCC')).toBe('CCCCCC');
    expect(myMatrix03.get(2, 5)).toBe('CCCCCC');
  });

  it('check addRow', async () => {
    const myMatrix01 = new DanMatrix<string>({
      rows: 2,
      columns: 3,
      val: '@'
    });
    expect(myMatrix01.rowsNum()).toBe(2);
    expect(myMatrix01.colsNum()).toBe(3);
    myMatrix01.addRow(['1', '2', '3']);
    expect(myMatrix01.rowsNum()).toBe(3);
    expect(myMatrix01.colsNum()).toBe(3);
    expect(myMatrix01.get(1, 2)).toBe('@');
    expect(myMatrix01.getCoord('0-1')).toBe('@');
    expect(myMatrix01.get(2, 2)).toBe('3');

    const myMatrix02 = new DanMatrix<number>([
      [763, 23, 87, 123],
      [244, 68563, 1, 557]
    ]);
    expect(myMatrix02.rowsNum()).toBe(2);
    expect(myMatrix02.colsNum()).toBe(4);
    myMatrix02.addRow([1, 2, 3, 4]);
    expect(myMatrix02.rowsNum()).toBe(3);
    expect(myMatrix02.colsNum()).toBe(4);
    expect(myMatrix02.get(1, 2)).toBe(1);
    expect(myMatrix02.getCoord('0-1')).toBe(23);
    expect(myMatrix02.get(2, 3)).toBe(4);
    console.log(myMatrix02.getMatrixString(8));

    const myMatrix03 = new DanMatrix<string>([
      ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'],
      ['b', 'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb'],
      ['c', 'cc', 'ccc', 'cccc', 'ccccc', 'cccccc']
    ]);
    expect(myMatrix03.rowsNum()).toBe(3);
    expect(myMatrix03.colsNum()).toBe(6);
    expect(myMatrix03.set(3, 4, 'DDDDD')).toBeUndefined();
    myMatrix03.addRow(['d', 'dd', 'ddd', 'dddd', 'ddddd', 'dddddd']);
    expect(myMatrix03.rowsNum()).toBe(4);
    expect(myMatrix03.colsNum()).toBe(6);
    expect(myMatrix03.get(1, 2)).toBe('bbb');
    expect(myMatrix03.getCoord('0-1')).toBe('aa');
    expect(myMatrix03.get(5, 9)).toBeUndefined();
    expect(myMatrix03.set(4, 4, 'eeeee')).toBeUndefined();
    expect(myMatrix03.getCoord('2-5')).toBe('cccccc');
    expect(myMatrix03.setCoord('2-5', 'CCCCCC')).toBe('CCCCCC');
    expect(myMatrix03.get(2, 5)).toBe('CCCCCC');
    expect(myMatrix03.set(3, 4, 'DDDDD')).toBe('DDDDD');
    console.log(myMatrix03.getMatrixString());

    expect(() => {
      const myMatrix = new DanMatrix<number>();
      myMatrix.setupMatrix([
        [763, 23, 87],
        [244, 68563, 1]
      ]);
      myMatrix.addRow([344, 65, 87, 98, 12]);
    }).toThrow();
  });

  it('check addColumn', async () => {
    const myMatrix01 = new DanMatrix<string>({
      rows: 2,
      columns: 3,
      val: '@'
    });
    expect(myMatrix01.rowsNum()).toBe(2);
    expect(myMatrix01.colsNum()).toBe(3);
    myMatrix01.addColumn(['1', '2']);
    expect(myMatrix01.rowsNum()).toBe(2);
    expect(myMatrix01.colsNum()).toBe(4);
    console.log(myMatrix01.getMatrixString(4));
    expect(myMatrix01.get(1, 3)).toBe('2');
    expect(myMatrix01.getCoord('0-3')).toBe('1');
    expect(myMatrix01.get(2, 2)).toBeUndefined();

    const myMatrix02 = new DanMatrix<number>([
      [763, 23, 87, 123],
      [244, 68563, 1, 557]
    ]);
    expect(myMatrix02.rowsNum()).toBe(2);
    expect(myMatrix02.colsNum()).toBe(4);
    myMatrix02.addColumn([1111, 2222]);
    expect(myMatrix02.rowsNum()).toBe(2);
    expect(myMatrix02.colsNum()).toBe(5);
    console.log(myMatrix02.getMatrixString(8));
    expect(myMatrix02.get(1, 4)).toBe(2222);
    expect(myMatrix02.getCoord('0-4')).toBe(1111);
    expect(myMatrix02.get(2, 3)).toBeUndefined();

    const myMatrix03 = new DanMatrix<string>([
      ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'],
      ['b', 'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb'],
      ['c', 'cc', 'ccc', 'cccc', 'ccccc', 'cccccc']
    ]);
    expect(myMatrix03.rowsNum()).toBe(3);
    expect(myMatrix03.colsNum()).toBe(6);
    myMatrix03.addColumn(['aaaaaaa', 'bbbbbbb', 'ccccccc']);
    expect(myMatrix03.rowsNum()).toBe(3);
    expect(myMatrix03.colsNum()).toBe(7);
    expect(myMatrix03.get(1, 6)).toBe('bbbbbbb');
    expect(myMatrix03.getCoord('2-6')).toBe('ccccccc');
    console.log(myMatrix03.getMatrixString());

    expect(() => {
      const myMatrix = new DanMatrix<number>();
      myMatrix.setupMatrix([
        [763, 23, 87],
        [244, 68563, 1]
      ]);
      myMatrix.addColumn([344]);
    }).toThrow();
  });

  it('check lookForValue', async () => {
    const myMatrix01 = new DanMatrix<string>({
      rows: 2,
      columns: 3,
      val: '@'
    });
    const coordsArray0101 = myMatrix01.lookForValue('@');
    expect(coordsArray0101.length).toBe(6);
    const coordsArray0102 = myMatrix01.lookForValue('#');
    expect(coordsArray0102.length).toBe(0);

    const myMatrix02 = new DanMatrix<number>([
      [763, 23, 87, 123],
      [244, 68563, 1, 557]
    ]);
    const coordsArray0201 = myMatrix02.lookForValue(557);
    expect(coordsArray0201.length).toBe(1);
    const coordsArray0202 = myMatrix02.lookForValue(1557);
    expect(coordsArray0202.length).toBe(0);

    const myMatrix03 = new DanMatrix<string>([
      ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'],
      ['b', 'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb'],
      ['c', 'cc', 'ccc', 'cccc', 'ccccc', 'cccccc']
    ]);
    const coordsArray0301 = myMatrix03.lookForValue('eee');
    expect(coordsArray0301.length).toBe(0);
    const coordsArray0302 = myMatrix03.lookForValue('cccc');
    expect(coordsArray0302.length).toBe(1);
  });

  it('check insertRowAt and getRowAt', async () => {
    const myMatrix01 = new DanMatrix<string>({
      rows: 2,
      columns: 3,
      val: '@'
    });
    expect(myMatrix01.rowsNum()).toBe(2);
    expect(myMatrix01.colsNum()).toBe(3);
    const rowToInsert01 = ['1', '2', '3'];
    myMatrix01.insertRowAt(0, rowToInsert01);
    expect(myMatrix01.rowsNum()).toBe(3);
    expect(myMatrix01.colsNum()).toBe(3);
    expect(myMatrix01.getRowAt(0)).toEqual(rowToInsert01);
    expect(myMatrix01.get(1, 2)).toBe('@');
    expect(myMatrix01.getCoord('0-1')).toBe('2');
    expect(myMatrix01.get(2, 2)).toBe('@');

    const myMatrix02 = new DanMatrix<number>([
      [763, 23, 87, 123],
      [244, 68563, 1, 557]
    ]);
    expect(myMatrix02.rowsNum()).toBe(2);
    expect(myMatrix02.colsNum()).toBe(4);
    const rowToInsert02 = [1, 2, 3, 4];
    myMatrix02.insertRowAt(1, rowToInsert02);
    expect(myMatrix02.rowsNum()).toBe(3);
    expect(myMatrix02.colsNum()).toBe(4);
    expect(myMatrix02.getRowAt(1)).toEqual(rowToInsert02);
    expect(myMatrix02.get(1, 2)).toBe(3);
    expect(myMatrix02.getCoord('0-1')).toBe(23);
    expect(myMatrix02.get(2, 3)).toBe(557);
    console.log(myMatrix02.getMatrixString(8));

    const myMatrix03 = new DanMatrix<string>([
      ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'],
      ['b', 'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb'],
      ['c', 'cc', 'ccc', 'cccc', 'ccccc', 'cccccc']
    ]);
    expect(myMatrix03.rowsNum()).toBe(3);
    expect(myMatrix03.colsNum()).toBe(6);
    const rowToInsert03 = ['d', 'dd', 'ddd', 'dddd', 'ddddd', 'dddddd'];
    myMatrix03.insertRowAt(2, rowToInsert03);
    expect(myMatrix03.rowsNum()).toBe(4);
    expect(myMatrix03.colsNum()).toBe(6);
    expect(myMatrix03.getRowAt(2)).toEqual(rowToInsert03);
    expect(myMatrix03.get(1, 2)).toBe('bbb');
    expect(myMatrix03.getCoord('2-4')).toBe('ddddd');
    expect(myMatrix03.get(5, 9)).toBeUndefined();
    console.log(myMatrix03.getMatrixString());

    expect(() => {
      const myMatrix = new DanMatrix<number>();
      myMatrix.setupMatrix([
        [763, 23, 87],
        [244, 68563, 1]
      ]);
      myMatrix.insertRowAt(1, [344, 65, 87, 98, 12]);
    }).toThrow();

    expect(() => {
      const myMatrix = new DanMatrix<number>();
      myMatrix.setupMatrix([
        [76, 3, 7],
        [24, 6863, 11],
        [2, 63, 411]
      ]);
      myMatrix.getRowAt(1.5);
    }).toThrow();
  });

  it('check insertColumnAt and getColumnAt', async () => {
    const myMatrix01 = new DanMatrix<string>({
      rows: 2,
      columns: 3,
      val: '@'
    });
    expect(myMatrix01.rowsNum()).toBe(2);
    expect(myMatrix01.colsNum()).toBe(3);
    const columnToInsert01 = ['1', '2'];
    myMatrix01.insertColumnAt(0, columnToInsert01);
    expect(myMatrix01.rowsNum()).toBe(2);
    expect(myMatrix01.colsNum()).toBe(4);
    expect(myMatrix01.getColumnAt(0)).toEqual(columnToInsert01);
    expect(myMatrix01.get(1, 0)).toBe('2');
    expect(myMatrix01.getCoord('0-0')).toBe('1');
    expect(myMatrix01.get(2, 2)).toBeUndefined();
    console.log(myMatrix01.getMatrixString(4));

    const myMatrix02 = new DanMatrix<number>([
      [763, 23, 87, 123],
      [244, 68563, 928, 557]
    ]);
    expect(myMatrix02.rowsNum()).toBe(2);
    expect(myMatrix02.colsNum()).toBe(4);
    const columnToInsert02 = [1, 2];
    myMatrix02.insertColumnAt(1, columnToInsert02);
    expect(myMatrix02.rowsNum()).toBe(2);
    expect(myMatrix02.colsNum()).toBe(5);
    expect(myMatrix02.getColumnAt(1)).toEqual(columnToInsert02);
    expect(myMatrix02.get(1, 1)).toBe(2);
    expect(myMatrix02.getCoord('0-1')).toBe(1);
    expect(myMatrix02.get(2, 3)).toBeUndefined();
    console.log(myMatrix02.getMatrixString(8));

    const myMatrix03 = new DanMatrix<string>([
      ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'],
      ['b', 'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb'],
      ['c', 'cc', 'ccc', 'cccc', 'ccccc', 'cccccc']
    ]);
    expect(myMatrix03.rowsNum()).toBe(3);
    expect(myMatrix03.colsNum()).toBe(6);
    const columnToInsert03 = ['AAAAAAA', 'BBBBBBB', 'CCCCCCC'];
    myMatrix03.insertColumnAt(6, columnToInsert03);
    expect(myMatrix03.rowsNum()).toBe(3);
    expect(myMatrix03.colsNum()).toBe(7);
    expect(myMatrix03.getColumnAt(6)).toEqual(columnToInsert03);
    expect(myMatrix03.get(1, 6)).toBe('BBBBBBB');
    expect(myMatrix03.getCoord('2-6')).toBe('CCCCCCC');
    expect(myMatrix03.get(5, 9)).toBeUndefined();
    console.log(myMatrix03.getMatrixString());

    expect(() => {
      const myMatrix = new DanMatrix<number>();
      myMatrix.setupMatrix([
        [763, 23, 87],
        [244, 68563, 1]
      ]);
      myMatrix.insertColumnAt(1, [344, 65, 87, 98, 12]);
    }).toThrow();

    expect(() => {
      const myMatrix = new DanMatrix<number>();
      myMatrix.setupMatrix([
        [76, 3, 7],
        [24, 6863, 11],
        [2, 63, 411]
      ]);
      myMatrix.getColumnAt(-3);
    }).toThrow();
  });

  it('check removeRowAt and removeColumnAt', async () => {
    const myMatrix01 = new DanMatrix<string>([
      ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'],
      ['b', 'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb'],
      ['c', 'cc', 'ccc', 'cccc', 'ccccc', 'cccccc'],
      ['d', 'dd', 'ddd', 'dddd', 'ddddd', 'dddddd'],
      ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'],
      ['f', 'ff', 'fff', 'ffff', 'fffff', 'ffffff']
    ]);
    expect(myMatrix01.rowsNum()).toBe(6);
    expect(myMatrix01.colsNum()).toBe(6);
    myMatrix01.removeColumnAt(2);
    expect(myMatrix01.rowsNum()).toBe(6);
    expect(myMatrix01.colsNum()).toBe(5);
    myMatrix01.removeRowAt(3);
    expect(myMatrix01.rowsNum()).toBe(5);
    expect(myMatrix01.colsNum()).toBe(5);
    console.log(myMatrix01.getMatrixString());
    myMatrix01.removeRowAt(4);
    myMatrix01.removeColumnAt(4);
    expect(myMatrix01.rowsNum()).toBe(4);
    expect(myMatrix01.colsNum()).toBe(4);
    console.log(myMatrix01.getMatrixString());
    myMatrix01.removeColumnAt(1);
    myMatrix01.removeRowAt(1);
    expect(myMatrix01.rowsNum()).toBe(3);
    expect(myMatrix01.colsNum()).toBe(3);
    myMatrix01.removeColumnAt(0);
    myMatrix01.removeRowAt(0);
    expect(myMatrix01.rowsNum()).toBe(2);
    expect(myMatrix01.colsNum()).toBe(2);
    console.log(myMatrix01.getMatrixString());

    expect(() => {
      const myMatrix = new DanMatrix<number>();
      myMatrix.setupMatrix([
        [76, 3, 7],
        [24, 6863, 11],
        [2, 63, 411]
      ]);
      myMatrix.removeColumnAt(5);
    }).toThrow();

    expect(() => {
      const myMatrix = new DanMatrix<number>();
      myMatrix.setupMatrix([
        [763, 23, 87],
        [244, 68563, 1]
      ]);
      myMatrix.removeRowAt(4);
    }).toThrow();
  });

  it('check clone', async () => {
    const myMatrix01 = new DanMatrix<string>([
      ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'],
      ['b', 'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb'],
      ['c', 'cc', 'ccc', 'cccc', 'ccccc', 'cccccc'],
      ['d', 'dd', 'ddd', 'dddd', 'ddddd', 'dddddd'],
      ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'],
      ['f', 'ff', 'fff', 'ffff', 'fffff', 'ffffff']
    ]);

    const myMatrix02 = myMatrix01.clone();
    expect(myMatrix01.rowsNum()).toBe(myMatrix02.rowsNum());
    expect(myMatrix01.colsNum()).toBe(myMatrix02.colsNum());
    for (let rowIndex = 0; rowIndex < myMatrix01.rowsNum(); rowIndex++) {
      expect(myMatrix01.getRowAt(rowIndex)).toEqual(myMatrix02.getRowAt(rowIndex));
    }
    myMatrix01.set(0, 0, 'A');
    expect(myMatrix01.get(0, 0)).toBe('A');
    expect(myMatrix02.get(0, 0)).toBe('a');

    myMatrix02.set(4, 2, 'EEE');
    expect(myMatrix01.get(4, 2)).toBe('eee');
    expect(myMatrix02.get(4, 2)).toBe('EEE');

    myMatrix01.set(2, 5, 'CCCCCC');
    expect(myMatrix01.get(2, 5)).toBe('CCCCCC');
    expect(myMatrix02.get(2, 5)).toBe('cccccc');
    console.log(myMatrix01.getMatrixString());
    console.log(myMatrix02.getMatrixString());
  });

  it('check rows and columns iterators', async () => {
    const myMatrix01 = new DanMatrix<string>([
      ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'],
      ['b', 'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb'],
      ['c', 'cc', 'ccc', 'cccc', 'ccccc', 'cccccc'],
      ['d', 'dd', 'ddd', 'dddd', 'ddddd', 'dddddd'],
      ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'],
      ['f', 'ff', 'fff', 'ffff', 'fffff', 'ffffff']
    ]);

    let forLoopRowsIterations = 0;
    for (const row of myMatrix01.getRowsIterator()) {
      ++forLoopRowsIterations;
      expect(row.length).toEqual(myMatrix01.colsNum());
    }
    expect(forLoopRowsIterations).toEqual(myMatrix01.rowsNum());

    let forLoopColumnsIterations = 0;
    for (const column of myMatrix01.getColumnsIterator()) {
      ++forLoopColumnsIterations;
      expect(column.length).toEqual(myMatrix01.rowsNum());
    }
    expect(forLoopColumnsIterations).toEqual(myMatrix01.colsNum());
  });
});
