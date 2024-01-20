[danmatrix](../README.md) / [Exports](../modules.md) / DanMatrixRowsIterator

# Class: DanMatrixRowsIterator\<T\>

The class DanMatrixRowsIterator implements MatrixIterator interface and Iterable interface

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`MatrixIterator`](../interfaces/MatrixIterator.md)\<`T`[]\>
- [`Iterable`](../interfaces/internal_.Iterable.md)\<`T`[]\>

## Table of contents

### Constructors

- [constructor](DanMatrixRowsIterator.md#constructor)

### Properties

- [\_matrix](DanMatrixRowsIterator.md#_matrix)
- [\_rowIndex](DanMatrixRowsIterator.md#_rowindex)

### Methods

- [[iterator]](DanMatrixRowsIterator.md#[iterator])
- [\_initFields](DanMatrixRowsIterator.md#_initfields)
- [current](DanMatrixRowsIterator.md#current)
- [hasNext](DanMatrixRowsIterator.md#hasnext)
- [next](DanMatrixRowsIterator.md#next)
- [rewind](DanMatrixRowsIterator.md#rewind)

## Constructors

### constructor

• **new DanMatrixRowsIterator**\<`T`\>(`matrix`): [`DanMatrixRowsIterator`](DanMatrixRowsIterator.md)\<`T`\>

The public class constructor

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`DanMatrix`](DanMatrix.md)\<`T`\> | the DanMatrix object |

#### Returns

[`DanMatrixRowsIterator`](DanMatrixRowsIterator.md)\<`T`\>

#### Defined in

[src/iterators/danMatrixRowsIterator.ts:16](https://github.com/evildead/DanMatrix/blob/12c0c58/src/iterators/danMatrixRowsIterator.ts#L16)

## Properties

### \_matrix

• `Private` **\_matrix**: [`DanMatrix`](DanMatrix.md)\<`T`\>

#### Defined in

[src/iterators/danMatrixRowsIterator.ts:8](https://github.com/evildead/DanMatrix/blob/12c0c58/src/iterators/danMatrixRowsIterator.ts#L8)

___

### \_rowIndex

• `Private` **\_rowIndex**: `number`

#### Defined in

[src/iterators/danMatrixRowsIterator.ts:10](https://github.com/evildead/DanMatrix/blob/12c0c58/src/iterators/danMatrixRowsIterator.ts#L10)

## Methods

### [iterator]

▸ **[iterator]**(): [`Iterator`](../interfaces/internal_.Iterator.md)\<`T`[], `any`, `undefined`\>

A zero-argument function that returns an object, conforming to the [Iterator Protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol).
In Javascript/Typescript in order to be iterable, an object must implement the "@@iterator" method

#### Returns

[`Iterator`](../interfaces/internal_.Iterator.md)\<`T`[], `any`, `undefined`\>

an iterator object.

#### Implementation of

[Iterable](../interfaces/internal_.Iterable.md).[[iterator]](../interfaces/internal_.Iterable.md#[iterator])

#### Defined in

[src/iterators/danMatrixRowsIterator.ts:75](https://github.com/evildead/DanMatrix/blob/12c0c58/src/iterators/danMatrixRowsIterator.ts#L75)

___

### \_initFields

▸ **_initFields**(): `void`

Init the class fields

#### Returns

`void`

#### Defined in

[src/iterators/danMatrixRowsIterator.ts:27](https://github.com/evildead/DanMatrix/blob/12c0c58/src/iterators/danMatrixRowsIterator.ts#L27)

___

### current

▸ **current**(): `undefined` \| `T`[]

Get the current row, or return undefined if the iterator was not yet started

#### Returns

`undefined` \| `T`[]

#### Implementation of

[MatrixIterator](../interfaces/MatrixIterator.md).[current](../interfaces/MatrixIterator.md#current)

#### Defined in

[src/iterators/danMatrixRowsIterator.ts:35](https://github.com/evildead/DanMatrix/blob/12c0c58/src/iterators/danMatrixRowsIterator.ts#L35)

___

### hasNext

▸ **hasNext**(): `boolean`

Check if the iterator can return more rows

#### Returns

`boolean`

true if the iterator can return more rows, false if there are no rows left

#### Implementation of

[MatrixIterator](../interfaces/MatrixIterator.md).[hasNext](../interfaces/MatrixIterator.md#hasnext)

#### Defined in

[src/iterators/danMatrixRowsIterator.ts:59](https://github.com/evildead/DanMatrix/blob/12c0c58/src/iterators/danMatrixRowsIterator.ts#L59)

___

### next

▸ **next**(): `undefined` \| `T`[]

Get the next row, or return undefined if the iterator's end was reached

#### Returns

`undefined` \| `T`[]

#### Implementation of

[MatrixIterator](../interfaces/MatrixIterator.md).[next](../interfaces/MatrixIterator.md#next)

#### Defined in

[src/iterators/danMatrixRowsIterator.ts:47](https://github.com/evildead/DanMatrix/blob/12c0c58/src/iterators/danMatrixRowsIterator.ts#L47)

___

### rewind

▸ **rewind**(): `void`

Restart the iterator

#### Returns

`void`

#### Implementation of

[MatrixIterator](../interfaces/MatrixIterator.md).[rewind](../interfaces/MatrixIterator.md#rewind)

#### Defined in

[src/iterators/danMatrixRowsIterator.ts:66](https://github.com/evildead/DanMatrix/blob/12c0c58/src/iterators/danMatrixRowsIterator.ts#L66)
