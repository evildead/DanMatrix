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

## Breaking Changes

### Version *2* from version *1*

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
