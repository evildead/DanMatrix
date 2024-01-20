[danmatrix](../README.md) / [Exports](../modules.md) / DanMatrixColumnsIterator

# Class: DanMatrixColumnsIterator\<T\>

The class DanMatrixColumnsIterator implements MatrixIterator interface and Iterable interface

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`MatrixIterator`](../interfaces/MatrixIterator.md)\<`T`[]\>
- [`Iterable`](../interfaces/internal_.Iterable.md)\<`T`[]\>

## Table of contents

### Constructors

- [constructor](DanMatrixColumnsIterator.md#constructor)

### Properties

- [\_columnIndex](DanMatrixColumnsIterator.md#_columnindex)
- [\_matrix](DanMatrixColumnsIterator.md#_matrix)

### Methods

- [[iterator]](DanMatrixColumnsIterator.md#[iterator])
- [\_initFields](DanMatrixColumnsIterator.md#_initfields)
- [current](DanMatrixColumnsIterator.md#current)
- [hasNext](DanMatrixColumnsIterator.md#hasnext)
- [next](DanMatrixColumnsIterator.md#next)
- [rewind](DanMatrixColumnsIterator.md#rewind)

## Constructors

### constructor

• **new DanMatrixColumnsIterator**\<`T`\>(`matrix`): [`DanMatrixColumnsIterator`](DanMatrixColumnsIterator.md)\<`T`\>

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

[`DanMatrixColumnsIterator`](DanMatrixColumnsIterator.md)\<`T`\>

#### Defined in

[src/iterators/danMatrixColumnsIterator.ts:16](https://github.com/evildead/DanMatrix/blob/f0a3730/src/iterators/danMatrixColumnsIterator.ts#L16)

## Properties

### \_columnIndex

• `Private` **\_columnIndex**: `number`

#### Defined in

[src/iterators/danMatrixColumnsIterator.ts:10](https://github.com/evildead/DanMatrix/blob/f0a3730/src/iterators/danMatrixColumnsIterator.ts#L10)

___

### \_matrix

• `Private` **\_matrix**: [`DanMatrix`](DanMatrix.md)\<`T`\>

#### Defined in

[src/iterators/danMatrixColumnsIterator.ts:8](https://github.com/evildead/DanMatrix/blob/f0a3730/src/iterators/danMatrixColumnsIterator.ts#L8)

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

[src/iterators/danMatrixColumnsIterator.ts:75](https://github.com/evildead/DanMatrix/blob/f0a3730/src/iterators/danMatrixColumnsIterator.ts#L75)

___

### \_initFields

▸ **_initFields**(): `void`

Init the class fields

#### Returns

`void`

#### Defined in

[src/iterators/danMatrixColumnsIterator.ts:27](https://github.com/evildead/DanMatrix/blob/f0a3730/src/iterators/danMatrixColumnsIterator.ts#L27)

___

### current

▸ **current**(): `undefined` \| `T`[]

Get the current column, or return undefined if the iterator was not yet started

#### Returns

`undefined` \| `T`[]

#### Implementation of

[MatrixIterator](../interfaces/MatrixIterator.md).[current](../interfaces/MatrixIterator.md#current)

#### Defined in

[src/iterators/danMatrixColumnsIterator.ts:35](https://github.com/evildead/DanMatrix/blob/f0a3730/src/iterators/danMatrixColumnsIterator.ts#L35)

___

### hasNext

▸ **hasNext**(): `boolean`

Check if the iterator can return more columns

#### Returns

`boolean`

true if the iterator can return more columns, false if there are no columns left

#### Implementation of

[MatrixIterator](../interfaces/MatrixIterator.md).[hasNext](../interfaces/MatrixIterator.md#hasnext)

#### Defined in

[src/iterators/danMatrixColumnsIterator.ts:59](https://github.com/evildead/DanMatrix/blob/f0a3730/src/iterators/danMatrixColumnsIterator.ts#L59)

___

### next

▸ **next**(): `undefined` \| `T`[]

Get the next column, or return undefined if the iterator's end was reached

#### Returns

`undefined` \| `T`[]

#### Implementation of

[MatrixIterator](../interfaces/MatrixIterator.md).[next](../interfaces/MatrixIterator.md#next)

#### Defined in

[src/iterators/danMatrixColumnsIterator.ts:47](https://github.com/evildead/DanMatrix/blob/f0a3730/src/iterators/danMatrixColumnsIterator.ts#L47)

___

### rewind

▸ **rewind**(): `void`

Restart the iterator

#### Returns

`void`

#### Implementation of

[MatrixIterator](../interfaces/MatrixIterator.md).[rewind](../interfaces/MatrixIterator.md#rewind)

#### Defined in

[src/iterators/danMatrixColumnsIterator.ts:66](https://github.com/evildead/DanMatrix/blob/f0a3730/src/iterators/danMatrixColumnsIterator.ts#L66)
