[**danmatrix**](../README.md)

***

[danmatrix](../README.md) / DanMatrixElementsIterator

# Class: DanMatrixElementsIterator\<T\>

Defined in: src/iterators/danMatrixElementsIterator.ts:6

The class DanMatrixElementsIterator implements MatrixIterator interface and Iterable interface

## Type Parameters

### T

`T`

## Implements

- [`MatrixIterator`](../interfaces/MatrixIterator.md)\<[`DanMatrixElement`](../interfaces/DanMatrixElement.md)\<`T`\>\>
- [`Iterable`](../-internal-/interfaces/Iterable.md)\<[`DanMatrixElement`](../interfaces/DanMatrixElement.md)\<`T`\>\>

## Constructors

### Constructor

> **new DanMatrixElementsIterator**\<`T`\>(`matrix`): `DanMatrixElementsIterator`\<`T`\>

Defined in: src/iterators/danMatrixElementsIterator.ts:20

The public class constructor

#### Parameters

##### matrix

[`DanMatrix`](DanMatrix.md)\<`T`\>

the DanMatrix object

#### Returns

`DanMatrixElementsIterator`\<`T`\>

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](../-internal-/interfaces/Iterator.md)\<[`DanMatrixElement`](../interfaces/DanMatrixElement.md)\<`T`\>\>

Defined in: src/iterators/danMatrixElementsIterator.ts:99

A zero-argument function that returns an object, conforming to the [Iterator Protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol).
In Javascript/Typescript in order to be iterable, an object must implement the "@@iterator" method

#### Returns

[`Iterator`](../-internal-/interfaces/Iterator.md)\<[`DanMatrixElement`](../interfaces/DanMatrixElement.md)\<`T`\>\>

an iterator object.

#### Implementation of

[`Iterable`](../-internal-/interfaces/Iterable.md).[`[iterator]`](../-internal-/interfaces/Iterable.md#iterator)

***

### current()

> **current**(): [`DanMatrixElement`](../interfaces/DanMatrixElement.md)\<`T`\> \| `undefined`

Defined in: src/iterators/danMatrixElementsIterator.ts:40

Get the current row, or return undefined if the iterator was not yet started

#### Returns

[`DanMatrixElement`](../interfaces/DanMatrixElement.md)\<`T`\> \| `undefined`

#### Implementation of

[`MatrixIterator`](../interfaces/MatrixIterator.md).[`current`](../interfaces/MatrixIterator.md#current)

***

### hasNext()

> **hasNext**(): `boolean`

Defined in: src/iterators/danMatrixElementsIterator.ts:83

Check if the iterator can return more elements

#### Returns

`boolean`

true if the iterator can return more elements, false if there are no elements left

#### Implementation of

[`MatrixIterator`](../interfaces/MatrixIterator.md).[`hasNext`](../interfaces/MatrixIterator.md#hasnext)

***

### next()

> **next**(): [`DanMatrixElement`](../interfaces/DanMatrixElement.md)\<`T`\> \| `undefined`

Defined in: src/iterators/danMatrixElementsIterator.ts:62

Get the next element, or return undefined if the iterator's end was reached

#### Returns

[`DanMatrixElement`](../interfaces/DanMatrixElement.md)\<`T`\> \| `undefined`

#### Implementation of

[`MatrixIterator`](../interfaces/MatrixIterator.md).[`next`](../interfaces/MatrixIterator.md#next)

***

### rewind()

> **rewind**(): `void`

Defined in: src/iterators/danMatrixElementsIterator.ts:90

Restart the iterator

#### Returns

`void`

#### Implementation of

[`MatrixIterator`](../interfaces/MatrixIterator.md).[`rewind`](../interfaces/MatrixIterator.md#rewind)
