# DanMatrix

DanMatrix is a data structure able to handle and manipulate 2D-vectors

## How to use it

```ts
import { DanMatrix } from 'danmatrix';

const matrix = new DanMatrix<string>([
  ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'],
  ['b', 'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb'],
  ['c', 'cc', 'ccc', 'cccc', 'ccccc', 'cccccc'],
  ['d', 'dd', 'ddd', 'dddd', 'ddddd', 'dddddd'],
  ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'],
  ['f', 'ff', 'fff', 'ffff', 'fffff', 'ffffff']
]);

matrix.addRow(['g', 'gg', 'ggg', 'gggg', 'ggggg', 'gggggg']);

matrix.removeColumnAt(1);

console.log(matrix.getMatrixString());
```

## Documentation

- [Code Documentation (Markdown)](/docs/codedocumentation-md/README.md)
- [Code Documentation (Html)](https://evildead.github.io/DanMatrix/codedocumentation-html/index.html)
- [Test coverage](https://evildead.github.io/DanMatrix/test-coverage/index.html)
- [Jest-Junit Report](https://evildead.github.io/DanMatrix/test-reports/junit.xml)

## Scripts

### Build project

`npm run build`

### Build documentation

`npm run build:doc`

### Run tests

`npm run test`

## Version 2

### New Features

#### Coordinates class

```ts
import { Coordinates } from 'danmatrix';

const coord01 = Coordinates.fromArrayCoords([3, 4]);
const coord02 = Coordinates.fromStringCoords('2;9', ';');
console.log(`coord01: ${coord01.toString()}`);
console.log(`coord02: ${coord02.toString()}`);
```

#### DanMatrixElementsIterator

```ts
import { DanMatrix } from 'danmatrix';

const myMatrix01 = new DanMatrix<number>([
  [7253, 2223, 34587],
  [21144, 563, 51],
  [11243, 663, 31],
  [81144, 2263, 151],
  [41541, 178, 11],
  [23141, 1874, 751]
]);
for (const element of myMatrix01.getElementsIterator()) {
  console.log(`Element val: ${element.val}`);
  console.log(`Element coords: ${element.coordinates.toString()}`);
}
```

#### DanMatrix class - getAdjacentElements method

```ts
import { DanMatrix } from 'danmatrix';

const myMatrix01 = new DanMatrix<number>([
  [7253, 2223, 34587],
  [21144, 563, 51],
  [11243, 663, 31],
  [81144, 2263, 151],
  [41541, 178, 11],
  [23141, 1874, 751]
]);
for (const element of myMatrix01.getElementsIterator()) {
  const adjacents = element.danMatrix.getAdjacentElements(element.coordinates);
  if (adjacents === undefined) {
    throw new Error('adjacents was supposed to be a correct object');
  }
  console.log(`Element val: ${element.val}`);
  console.log(`Adjacent vals: ${JSON.stringify(adjacents.map((elem) => { return elem.val; }))}`);
}
```

### Breaking Changes

#### DanMatrix class - Modified *get* method

From:
```ts
public get(x: number, y: number): T | undefined
```

To:
```ts
public get(coord: Coordinates): T | undefined
```

#### DanMatrix class - Modified *set* method

From:
```ts
public set(x: number, y: number, val: T): T | undefined
```

To:
```ts
public set(coord: Coordinates, val: T): T | undefined
```

#### DanMatrix class - Removed *getCoord* method

#### DanMatrix class - Removed *setCoord* method

#### DanMatrix class - Modified *lookForValue* method

From:
```ts
public lookForValue(val: T): Array<string>
```

To:
```ts
public lookForValue(val: T): Array<Coordinates>
```

