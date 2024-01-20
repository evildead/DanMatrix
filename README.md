# DanMatrix

DanMatrix is a data structure able to handle and manipulate 2D-vectors

## How to use it

```ts
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

## Code Documentation

- [Code Documentation (Markdown)](./docs/code-documentation-md/modules.md)
- [Code Documentation (Html)](./docs/code-documentation-html/modules.html)
