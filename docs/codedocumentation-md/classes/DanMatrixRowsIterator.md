[**danmatrix**](../README.md)

***

[danmatrix](../README.md) / DanMatrixRowsIterator

# Class: DanMatrixRowsIterator\<T\>

Defined in: [src/iterators/danMatrixRowsIterator.ts:6](https://github.com/evildead/DanMatrix/blob/d98b5f17f680ab519e3ba1176e8af3f5a112d1fb/src/iterators/danMatrixRowsIterator.ts#L6)

The class DanMatrixRowsIterator implements MatrixIterator interface and Iterable interface

## Type Parameters

### T

`T`

## Implements

- [`MatrixIterator`](../interfaces/MatrixIterator.md)\<`T`[]\>
- [`Iterable`](../-internal-/interfaces/Iterable.md)\<`T`[]\>

## Constructors

### Constructor

> **new DanMatrixRowsIterator**\<`T`\>(`matrix`): `DanMatrixRowsIterator`\<`T`\>

Defined in: [src/iterators/danMatrixRowsIterator.ts:16](https://github.com/evildead/DanMatrix/blob/d98b5f17f680ab519e3ba1176e8af3f5a112d1fb/src/iterators/danMatrixRowsIterator.ts#L16)

The public class constructor

#### Parameters

##### matrix

[`DanMatrix`](DanMatrix.md)\<`T`\>

the DanMatrix object

#### Returns

`DanMatrixRowsIterator`\<`T`\>

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](../-internal-/interfaces/Iterator.md)\<`T`[]\>

Defined in: [src/iterators/danMatrixRowsIterator.ts:75](https://github.com/evildead/DanMatrix/blob/d98b5f17f680ab519e3ba1176e8af3f5a112d1fb/src/iterators/danMatrixRowsIterator.ts#L75)

A zero-argument function that returns an object, conforming to the [Iterator Protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol).
In Javascript/Typescript in order to be iterable, an object must implement the "@@iterator" method

#### Returns

[`Iterator`](../-internal-/interfaces/Iterator.md)\<`T`[]\>

an iterator object.

#### Implementation of

[`Iterable`](../-internal-/interfaces/Iterable.md).[`[iterator]`](../-internal-/interfaces/Iterable.md#iterator)

***

### current()

> **current**(): `T`[] \| `undefined`

Defined in: [src/iterators/danMatrixRowsIterator.ts:35](https://github.com/evildead/DanMatrix/blob/d98b5f17f680ab519e3ba1176e8af3f5a112d1fb/src/iterators/danMatrixRowsIterator.ts#L35)

Get the current row, or return undefined if the iterator was not yet started

#### Returns

`T`[] \| `undefined`

#### Implementation of

[`MatrixIterator`](../interfaces/MatrixIterator.md).[`current`](../interfaces/MatrixIterator.md#current)

***

### hasNext()

> **hasNext**(): `boolean`

Defined in: [src/iterators/danMatrixRowsIterator.ts:59](https://github.com/evildead/DanMatrix/blob/d98b5f17f680ab519e3ba1176e8af3f5a112d1fb/src/iterators/danMatrixRowsIterator.ts#L59)

Check if the iterator can return more rows

#### Returns

`boolean`

true if the iterator can return more rows, false if there are no rows left

#### Implementation of

[`MatrixIterator`](../interfaces/MatrixIterator.md).[`hasNext`](../interfaces/MatrixIterator.md#hasnext)

***

### next()

> **next**(): `T`[] \| `undefined`

Defined in: [src/iterators/danMatrixRowsIterator.ts:47](https://github.com/evildead/DanMatrix/blob/d98b5f17f680ab519e3ba1176e8af3f5a112d1fb/src/iterators/danMatrixRowsIterator.ts#L47)

Get the next row, or return undefined if the iterator's end was reached

#### Returns

`T`[] \| `undefined`

#### Implementation of

[`MatrixIterator`](../interfaces/MatrixIterator.md).[`next`](../interfaces/MatrixIterator.md#next)

***

### rewind()

> **rewind**(): `void`

Defined in: [src/iterators/danMatrixRowsIterator.ts:66](https://github.com/evildead/DanMatrix/blob/d98b5f17f680ab519e3ba1176e8af3f5a112d1fb/src/iterators/danMatrixRowsIterator.ts#L66)

Restart the iterator

#### Returns

`void`

#### Implementation of

[`MatrixIterator`](../interfaces/MatrixIterator.md).[`rewind`](../interfaces/MatrixIterator.md#rewind)
