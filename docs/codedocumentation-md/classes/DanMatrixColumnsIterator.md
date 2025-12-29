[**danmatrix**](../README.md)

***

[danmatrix](../README.md) / DanMatrixColumnsIterator

# Class: DanMatrixColumnsIterator\<T\>

Defined in: [src/iterators/danMatrixColumnsIterator.ts:6](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/iterators/danMatrixColumnsIterator.ts#L6)

The class DanMatrixColumnsIterator implements MatrixIterator interface and Iterable interface

## Type Parameters

### T

`T`

## Implements

- [`MatrixIterator`](../interfaces/MatrixIterator.md)\<`T`[]\>
- [`Iterable`](../-internal-/interfaces/Iterable.md)\<`T`[]\>

## Constructors

### Constructor

> **new DanMatrixColumnsIterator**\<`T`\>(`matrix`): `DanMatrixColumnsIterator`\<`T`\>

Defined in: [src/iterators/danMatrixColumnsIterator.ts:16](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/iterators/danMatrixColumnsIterator.ts#L16)

The public class constructor

#### Parameters

##### matrix

[`DanMatrix`](DanMatrix.md)\<`T`\>

the DanMatrix object

#### Returns

`DanMatrixColumnsIterator`\<`T`\>

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](../-internal-/interfaces/Iterator.md)\<`T`[]\>

Defined in: [src/iterators/danMatrixColumnsIterator.ts:75](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/iterators/danMatrixColumnsIterator.ts#L75)

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

Defined in: [src/iterators/danMatrixColumnsIterator.ts:35](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/iterators/danMatrixColumnsIterator.ts#L35)

Get the current column, or return undefined if the iterator was not yet started

#### Returns

`T`[] \| `undefined`

#### Implementation of

[`MatrixIterator`](../interfaces/MatrixIterator.md).[`current`](../interfaces/MatrixIterator.md#current)

***

### hasNext()

> **hasNext**(): `boolean`

Defined in: [src/iterators/danMatrixColumnsIterator.ts:59](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/iterators/danMatrixColumnsIterator.ts#L59)

Check if the iterator can return more columns

#### Returns

`boolean`

true if the iterator can return more columns, false if there are no columns left

#### Implementation of

[`MatrixIterator`](../interfaces/MatrixIterator.md).[`hasNext`](../interfaces/MatrixIterator.md#hasnext)

***

### next()

> **next**(): `T`[] \| `undefined`

Defined in: [src/iterators/danMatrixColumnsIterator.ts:47](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/iterators/danMatrixColumnsIterator.ts#L47)

Get the next column, or return undefined if the iterator's end was reached

#### Returns

`T`[] \| `undefined`

#### Implementation of

[`MatrixIterator`](../interfaces/MatrixIterator.md).[`next`](../interfaces/MatrixIterator.md#next)

***

### rewind()

> **rewind**(): `void`

Defined in: [src/iterators/danMatrixColumnsIterator.ts:66](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/iterators/danMatrixColumnsIterator.ts#L66)

Restart the iterator

#### Returns

`void`

#### Implementation of

[`MatrixIterator`](../interfaces/MatrixIterator.md).[`rewind`](../interfaces/MatrixIterator.md#rewind)
