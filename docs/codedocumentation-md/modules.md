[danmatrix](README.md) / Exports

# danmatrix

## Table of contents

### Modules

- [\<internal\>](modules/internal_.md)

### Classes

- [DanMatrix](classes/DanMatrix.md)
- [DanMatrixColumnsIterator](classes/DanMatrixColumnsIterator.md)
- [DanMatrixRowsIterator](classes/DanMatrixRowsIterator.md)

### Interfaces

- [MatrixIterator](interfaces/MatrixIterator.md)
- [RowsColsFilledWithValType](interfaces/RowsColsFilledWithValType.md)

### Type Aliases

- [DanMatrixConstructorType](modules.md#danmatrixconstructortype)

## Type Aliases

### DanMatrixConstructorType

Ƭ **DanMatrixConstructorType**\<`T`\>: [`RowsColsFilledWithValType`](interfaces/RowsColsFilledWithValType.md)\<`T`\> \| `T`[][]

DanMatrixConstructorType

It is the DanMatrix constructor type.
It can be:
- an object of type `RowsColsFilledWithValType`
- an Array of Array of values of type T

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the type of the values which will be stored in the matrix |

#### Defined in

[src/commons.ts:41](https://github.com/evildead/DanMatrix/blob/62e2dbc/src/commons.ts#L41)
