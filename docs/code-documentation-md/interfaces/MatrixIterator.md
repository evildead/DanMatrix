[danmatrix](../README.md) / [Exports](../modules.md) / MatrixIterator

# Interface: MatrixIterator\<T\>

The MatrixIterator interface

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`DanMatrixColumnsIterator`](../classes/DanMatrixColumnsIterator.md)
- [`DanMatrixRowsIterator`](../classes/DanMatrixRowsIterator.md)

## Table of contents

### Methods

- [current](MatrixIterator.md#current)
- [hasNext](MatrixIterator.md#hasnext)
- [next](MatrixIterator.md#next)
- [rewind](MatrixIterator.md#rewind)

## Methods

### current

▸ **current**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/commons.ts:6](https://github.com/evildead/DanMatrix/blob/12c0c58/src/commons.ts#L6)

___

### hasNext

▸ **hasNext**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/commons.ts:12](https://github.com/evildead/DanMatrix/blob/12c0c58/src/commons.ts#L12)

___

### next

▸ **next**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/commons.ts:9](https://github.com/evildead/DanMatrix/blob/12c0c58/src/commons.ts#L9)

___

### rewind

▸ **rewind**(): `void`

#### Returns

`void`

#### Defined in

[src/commons.ts:15](https://github.com/evildead/DanMatrix/blob/12c0c58/src/commons.ts#L15)
