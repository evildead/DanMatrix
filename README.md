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

- [Code Documentation (Markdown)](./docs/codedocumentation-md/modules.md)
- [Code Documentation (Html)](https://evildead.github.io/DanMatrix/codedocumentation-html/modules.html)
- [Test coverage](https://evildead.github.io/DanMatrix/test-coverage/index.html)
- [Jest-Junit Report](https://evildead.github.io/DanMatrix/test-reports/junit.xml)

## Scripts

### Build project

`npm run build`

### Build documentation

`npm run build:doc`

### Run tests

`npm run test`
