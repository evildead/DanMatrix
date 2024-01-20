[danmatrix](../README.md) / [Exports](../modules.md) / DanMatrix

# Class: DanMatrix\<T\>

DanMatrix is a class to handle two-dimension vectors, or matrices

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | is the type of element storable in the matrix |

## Table of contents

### Constructors

- [constructor](DanMatrix.md#constructor)

### Properties

- [\_2dvector](DanMatrix.md#_2dvector)

### Methods

- [addColumn](DanMatrix.md#addcolumn)
- [addRow](DanMatrix.md#addrow)
- [clone](DanMatrix.md#clone)
- [colsNum](DanMatrix.md#colsnum)
- [get](DanMatrix.md#get)
- [getColumnAt](DanMatrix.md#getcolumnat)
- [getColumnsIterator](DanMatrix.md#getcolumnsiterator)
- [getCoord](DanMatrix.md#getcoord)
- [getMatrixString](DanMatrix.md#getmatrixstring)
- [getRowAt](DanMatrix.md#getrowat)
- [getRowsIterator](DanMatrix.md#getrowsiterator)
- [insertColumnAt](DanMatrix.md#insertcolumnat)
- [insertRowAt](DanMatrix.md#insertrowat)
- [lookForValue](DanMatrix.md#lookforvalue)
- [removeColumnAt](DanMatrix.md#removecolumnat)
- [removeRowAt](DanMatrix.md#removerowat)
- [replaceColumnAt](DanMatrix.md#replacecolumnat)
- [replaceRowAt](DanMatrix.md#replacerowat)
- [rowsNum](DanMatrix.md#rowsnum)
- [set](DanMatrix.md#set)
- [setCoord](DanMatrix.md#setcoord)
- [setupMatrix](DanMatrix.md#setupmatrix)

## Constructors

### constructor

• **new DanMatrix**\<`T`\>(`props?`): [`DanMatrix`](DanMatrix.md)\<`T`\>

The public constructor of DanMatrix

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props?` | [`DanMatrixConstructorType`](../modules.md#danmatrixconstructortype)\<`T`\> | the optional input of type DanMatrixConstructorType |

#### Returns

[`DanMatrix`](DanMatrix.md)\<`T`\>

#### Defined in

[src/danMatrix.ts:24](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L24)

## Properties

### \_2dvector

• `Private` **\_2dvector**: `T`[][]

The data structure containing the real data.

It's defined as an Array of Array of T

**`Type Param`**

is the type of element storable in the matrix

#### Defined in

[src/danMatrix.ts:17](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L17)

## Methods

### addColumn

▸ **addColumn**(`column`): `boolean`

Add a column to the matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `column` | `T`[] | the column to be added |

#### Returns

`boolean`

true if the new column was correctly added, otherwise it returns false

**`Throws`**

Error if a wrong input is passed

#### Defined in

[src/danMatrix.ts:196](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L196)

___

### addRow

▸ **addRow**(`row`): `boolean`

Add a row to the matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `T`[] | the row to be added |

#### Returns

`boolean`

true if the new row was correctly added, otherwise it returns false

**`Throws`**

Error if a wrong input is passed

#### Defined in

[src/danMatrix.ts:179](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L179)

___

### clone

▸ **clone**(): [`DanMatrix`](DanMatrix.md)\<`T`\>

Clone the current DanMatrix instance

#### Returns

[`DanMatrix`](DanMatrix.md)\<`T`\>

a new DanMatrix instance equal to the current one

#### Defined in

[src/danMatrix.ts:61](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L61)

___

### colsNum

▸ **colsNum**(): `number`

Get the number of columns of the matrix

#### Returns

`number`

the number of columns of the matrix

#### Defined in

[src/danMatrix.ts:106](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L106)

___

### get

▸ **get**(`x`, `y`): `undefined` \| `T`

Get the matrix value at (x, y)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | the x coordinate (index of the rows) |
| `y` | `number` | the y coordinate (index of the columns) |

#### Returns

`undefined` \| `T`

the value at (x, y) or undefined if the coordinates are wrong

#### Defined in

[src/danMatrix.ts:119](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L119)

___

### getColumnAt

▸ **getColumnAt**(`columnIndex`): `undefined` \| `T`[]

Get matrix column at `columnIndex`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | the column index |

#### Returns

`undefined` \| `T`[]

the requested column as array of values

**`Throws`**

Error if a wrong input is passed

#### Defined in

[src/danMatrix.ts:281](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L281)

___

### getColumnsIterator

▸ **getColumnsIterator**(): [`DanMatrixColumnsIterator`](DanMatrixColumnsIterator.md)\<`T`\>

Get matrix columns iterator

#### Returns

[`DanMatrixColumnsIterator`](DanMatrixColumnsIterator.md)\<`T`\>

the matrix columns iterator

#### Defined in

[src/danMatrix.ts:432](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L432)

___

### getCoord

▸ **getCoord**(`coord`): `undefined` \| `T`

Get the matrix value at `coord`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coord` | `string` | a string representation of the coordinates using the dash '-' as separator. Example: "1-4" represents x:1 and y:4 |

#### Returns

`undefined` \| `T`

the value at `coord` or undefined if the string coordinates are wrong

#### Defined in

[src/danMatrix.ts:144](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L144)

___

### getMatrixString

▸ **getMatrixString**(`fixedSpacing?`): `string`

Get a string representation of the current DanMatrix instance

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fixedSpacing` | `number` | `15` | an optional numeric value for the cell spacing (default is 15) |

#### Returns

`string`

a string representation of the current DanMatrix instance

#### Defined in

[src/danMatrix.ts:71](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L71)

___

### getRowAt

▸ **getRowAt**(`rowIndex`): `undefined` \| `T`[]

Get matrix row at `rowIndex`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIndex` | `number` | the row index |

#### Returns

`undefined` \| `T`[]

the requested row as array of values

**`Throws`**

Error if a wrong input is passed

#### Defined in

[src/danMatrix.ts:241](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L241)

___

### getRowsIterator

▸ **getRowsIterator**(): [`DanMatrixRowsIterator`](DanMatrixRowsIterator.md)\<`T`\>

Get matrix rows iterator

#### Returns

[`DanMatrixRowsIterator`](DanMatrixRowsIterator.md)\<`T`\>

the matrix rows iterator

#### Defined in

[src/danMatrix.ts:424](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L424)

___

### insertColumnAt

▸ **insertColumnAt**(`columnIndex`, `column`): `boolean`

Insert a column at the specific `columnIndex` index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | the column index |
| `column` | `T`[] | the column to insert as an array of values |

#### Returns

`boolean`

true if the new column was correctly inserted, otherwise it returns false

**`Throws`**

Error if a wrong input is passed

#### Defined in

[src/danMatrix.ts:302](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L302)

___

### insertRowAt

▸ **insertRowAt**(`rowIndex`, `row`): `boolean`

Insert a row at the specific `rowIndex` index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIndex` | `number` | the row index |
| `row` | `T`[] | the row to insert as an array of values |

#### Returns

`boolean`

true if the new row was correctly inserted, otherwise it returns false

**`Throws`**

Error if a wrong input is passed

#### Defined in

[src/danMatrix.ts:258](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L258)

___

### lookForValue

▸ **lookForValue**(`val`): `string`[]

Look for a specific value inside the matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `T` | the value you're looking for |

#### Returns

`string`[]

- an array of string coordinates where the value was found

#### Defined in

[src/danMatrix.ts:221](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L221)

___

### removeColumnAt

▸ **removeColumnAt**(`columnIndex`): `boolean`

Remove matrix column at index 'columnIndex'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | the index of the column to be removed. If it's not an integer number or if it's less than zero, an exception "Error('Wrong input')" is thrown |

#### Returns

`boolean`

true if the column removal was successful, otherwise it returns false

**`Throws`**

exception "Error('Wrong input')" when any parameter in input is wrong

#### Defined in

[src/danMatrix.ts:355](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L355)

___

### removeRowAt

▸ **removeRowAt**(`rowIndex`): `boolean`

Remove matrix row at index 'rowIndex'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIndex` | `number` | the index of the row to be removed. If it's not an integer number or if it's less than zero, an exception "Error('Wrong input')" is thrown |

#### Returns

`boolean`

true if the row removal was successful, otherwise it returns false

**`Throws`**

exception "Error('Wrong input')" when any parameter in input is wrong

#### Defined in

[src/danMatrix.ts:337](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L337)

___

### replaceColumnAt

▸ **replaceColumnAt**(`columnIndex`, `column`): `boolean`

Replace matrix column at index 'columnIndex'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | the index of the column to be replaced. If it's not an integer number or if it's less than zero, an exception "Error('Wrong input')" is thrown |
| `column` | `T`[] | the array of values which must replace the existing column. If it's not an array or if the array is empty, an exception "Error('Wrong input')" is thrown |

#### Returns

`boolean`

true if the column replacement was successful, otherwise it returns false

**`Throws`**

exception "Error('Wrong input')" when any parameter in input is wrong

#### Defined in

[src/danMatrix.ts:404](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L404)

___

### replaceRowAt

▸ **replaceRowAt**(`rowIndex`, `row`): `boolean`

Replace matrix row at index 'rowIndex'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIndex` | `number` | the index of the row to be replaced. If it's not an integer number or if it's less than zero, an exception "Error('Wrong input')" is thrown |
| `row` | `T`[] | the array of values which must replace the existing row. If it's not an array or if the array is empty, an exception "Error('Wrong input')" is thrown |

#### Returns

`boolean`

true if the row replacement was successful, otherwise it returns false

**`Throws`**

exception "Error('Wrong input')" when any parameter in input is wrong

#### Defined in

[src/danMatrix.ts:378](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L378)

___

### rowsNum

▸ **rowsNum**(): `number`

Get the number of rows of the matrix

#### Returns

`number`

the number of rows of the matrix

#### Defined in

[src/danMatrix.ts:98](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L98)

___

### set

▸ **set**(`x`, `y`, `val`): `undefined` \| `T`

Set a value at (x, y)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | the x coordinate (index of the rows) |
| `y` | `number` | the y coordinate (index of the columns) |
| `val` | `T` | the value to set |

#### Returns

`undefined` \| `T`

the new value set at (x, y) or undefined if the coordinates are wrong

#### Defined in

[src/danMatrix.ts:130](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L130)

___

### setCoord

▸ **setCoord**(`coord`, `val`): `undefined` \| `T`

Set a value at `coord`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coord` | `string` | a string representation of the coordinates using the dash '-' as separator. Example: "1-4" represents x:1 and y:4 |
| `val` | `T` | the value to set |

#### Returns

`undefined` \| `T`

the value at `coord` or undefined if the string coordinates are wrong

#### Defined in

[src/danMatrix.ts:162](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L162)

___

### setupMatrix

▸ **setupMatrix**(`props?`): `void`

The public method to setup the matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props?` | [`DanMatrixConstructorType`](../modules.md#danmatrixconstructortype)\<`T`\> | the optional input of type DanMatrixConstructorType |

#### Returns

`void`

**`Throws`**

Error if a wrong input is passed

#### Defined in

[src/danMatrix.ts:34](https://github.com/evildead/DanMatrix/blob/12c0c58/src/danMatrix.ts#L34)
