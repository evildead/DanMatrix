[**danmatrix**](../README.md)

***

[danmatrix](../README.md) / DanMatrix

# Class: DanMatrix\<T\>

Defined in: [src/danMatrix.ts:10](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L10)

DanMatrix is a class to handle two-dimension vectors, or matrices

## Type Parameters

### T

`T`

is the type of element storable in the matrix

## Constructors

### Constructor

> **new DanMatrix**\<`T`\>(`props?`): `DanMatrix`\<`T`\>

Defined in: [src/danMatrix.ts:24](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L24)

The public constructor of DanMatrix

#### Parameters

##### props?

[`DanMatrixConstructorType`](../type-aliases/DanMatrixConstructorType.md)\<`T`\>

the optional input of type DanMatrixConstructorType

#### Returns

`DanMatrix`\<`T`\>

## Methods

### addColumn()

> **addColumn**(`column`): `boolean`

Defined in: [src/danMatrix.ts:167](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L167)

Add a column to the matrix

#### Parameters

##### column

`T`[]

the column to be added

#### Returns

`boolean`

true if the new column was correctly added, otherwise it returns false

#### Throws

Error if a wrong input is passed

***

### addRow()

> **addRow**(`row`): `boolean`

Defined in: [src/danMatrix.ts:150](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L150)

Add a row to the matrix

#### Parameters

##### row

`T`[]

the row to be added

#### Returns

`boolean`

true if the new row was correctly added, otherwise it returns false

#### Throws

Error if a wrong input is passed

***

### clone()

> **clone**(): `DanMatrix`\<`T`\>

Defined in: [src/danMatrix.ts:61](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L61)

Clone the current DanMatrix instance

#### Returns

`DanMatrix`\<`T`\>

a new DanMatrix instance equal to the current one

***

### colsNum()

> **colsNum**(): `number`

Defined in: [src/danMatrix.ts:106](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L106)

Get the number of columns of the matrix

#### Returns

`number`

the number of columns of the matrix

***

### get()

> **get**(`coord`): `T` \| `undefined`

Defined in: [src/danMatrix.ts:118](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L118)

Get the matrix value at (x, y)

#### Parameters

##### coord

[`Coordinates`](Coordinates.md)

the Coordinates instance (x,y) for rows and columns

#### Returns

`T` \| `undefined`

the value at (x, y) or undefined if the coordinates are wrong

***

### getColumnAt()

> **getColumnAt**(`columnIndex`): `T`[] \| `undefined`

Defined in: [src/danMatrix.ts:252](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L252)

Get matrix column at `columnIndex`

#### Parameters

##### columnIndex

`number`

the column index

#### Returns

`T`[] \| `undefined`

the requested column as array of values

#### Throws

Error if a wrong input is passed

***

### getColumnsIterator()

> **getColumnsIterator**(): [`DanMatrixColumnsIterator`](DanMatrixColumnsIterator.md)\<`T`\>

Defined in: [src/danMatrix.ts:403](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L403)

Get matrix columns iterator

#### Returns

[`DanMatrixColumnsIterator`](DanMatrixColumnsIterator.md)\<`T`\>

the matrix columns iterator

***

### getMatrixString()

> **getMatrixString**(`fixedSpacing`): `string`

Defined in: [src/danMatrix.ts:71](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L71)

Get a string representation of the current DanMatrix instance

#### Parameters

##### fixedSpacing

`number` = `15`

an optional numeric value for the cell spacing (default is 15)

#### Returns

`string`

a string representation of the current DanMatrix instance

***

### getRowAt()

> **getRowAt**(`rowIndex`): `T`[] \| `undefined`

Defined in: [src/danMatrix.ts:212](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L212)

Get matrix row at `rowIndex`

#### Parameters

##### rowIndex

`number`

the row index

#### Returns

`T`[] \| `undefined`

the requested row as array of values

#### Throws

Error if a wrong input is passed

***

### getRowsIterator()

> **getRowsIterator**(): [`DanMatrixRowsIterator`](DanMatrixRowsIterator.md)\<`T`\>

Defined in: [src/danMatrix.ts:395](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L395)

Get matrix rows iterator

#### Returns

[`DanMatrixRowsIterator`](DanMatrixRowsIterator.md)\<`T`\>

the matrix rows iterator

***

### insertColumnAt()

> **insertColumnAt**(`columnIndex`, `column`): `boolean`

Defined in: [src/danMatrix.ts:273](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L273)

Insert a column at the specific `columnIndex` index

#### Parameters

##### columnIndex

`number`

the column index

##### column

`T`[]

the column to insert as an array of values

#### Returns

`boolean`

true if the new column was correctly inserted, otherwise it returns false

#### Throws

Error if a wrong input is passed

***

### insertRowAt()

> **insertRowAt**(`rowIndex`, `row`): `boolean`

Defined in: [src/danMatrix.ts:229](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L229)

Insert a row at the specific `rowIndex` index

#### Parameters

##### rowIndex

`number`

the row index

##### row

`T`[]

the row to insert as an array of values

#### Returns

`boolean`

true if the new row was correctly inserted, otherwise it returns false

#### Throws

Error if a wrong input is passed

***

### lookForValue()

> **lookForValue**(`val`): `string`[]

Defined in: [src/danMatrix.ts:192](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L192)

Look for a specific value inside the matrix

#### Parameters

##### val

`T`

the value you're looking for

#### Returns

`string`[]

- an array of string coordinates where the value was found

***

### removeColumnAt()

> **removeColumnAt**(`columnIndex`): `boolean`

Defined in: [src/danMatrix.ts:326](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L326)

Remove matrix column at index 'columnIndex'

#### Parameters

##### columnIndex

`number`

the index of the column to be removed. If it's not an
integer number or if it's less than zero, an exception "Error('Wrong input')" is thrown

#### Returns

`boolean`

true if the column removal was successful, otherwise it returns false

#### Throws

exception "Error('Wrong input')" when any parameter in input is wrong

***

### removeRowAt()

> **removeRowAt**(`rowIndex`): `boolean`

Defined in: [src/danMatrix.ts:308](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L308)

Remove matrix row at index 'rowIndex'

#### Parameters

##### rowIndex

`number`

the index of the row to be removed. If it's not an
integer number or if it's less than zero, an exception "Error('Wrong input')" is thrown

#### Returns

`boolean`

true if the row removal was successful, otherwise it returns false

#### Throws

exception "Error('Wrong input')" when any parameter in input is wrong

***

### replaceColumnAt()

> **replaceColumnAt**(`columnIndex`, `column`): `boolean`

Defined in: [src/danMatrix.ts:375](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L375)

Replace matrix column at index 'columnIndex'

#### Parameters

##### columnIndex

`number`

the index of the column to be replaced. If it's not an
integer number or if it's less than zero, an exception "Error('Wrong input')" is thrown

##### column

`T`[]

the array of values which must replace the existing column.
If it's not an array or if the array is empty, an exception "Error('Wrong input')" is thrown

#### Returns

`boolean`

true if the column replacement was successful, otherwise it returns false

#### Throws

exception "Error('Wrong input')" when any parameter in input is wrong

***

### replaceRowAt()

> **replaceRowAt**(`rowIndex`, `row`): `boolean`

Defined in: [src/danMatrix.ts:349](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L349)

Replace matrix row at index 'rowIndex'

#### Parameters

##### rowIndex

`number`

the index of the row to be replaced. If it's not an
integer number or if it's less than zero, an exception "Error('Wrong input')" is thrown

##### row

`T`[]

the array of values which must replace the existing row.
If it's not an array or if the array is empty, an exception "Error('Wrong input')" is thrown

#### Returns

`boolean`

true if the row replacement was successful, otherwise it returns false

#### Throws

exception "Error('Wrong input')" when any parameter in input is wrong

***

### rowsNum()

> **rowsNum**(): `number`

Defined in: [src/danMatrix.ts:98](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L98)

Get the number of rows of the matrix

#### Returns

`number`

the number of rows of the matrix

***

### set()

> **set**(`coord`, `val`): `T` \| `undefined`

Defined in: [src/danMatrix.ts:131](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L131)

Set a value at (x, y)

#### Parameters

##### coord

[`Coordinates`](Coordinates.md)

the Coordinates instance (x,y) for rows and columns

##### val

`T`

the value to set

#### Returns

`T` \| `undefined`

the new value set at (x, y) or undefined if the coordinates are wrong

***

### setupMatrix()

> **setupMatrix**(`props?`): `void`

Defined in: [src/danMatrix.ts:34](https://github.com/evildead/DanMatrix/blob/6914a6e5cdc61f40ec4a7368792742fdc4fc3096/src/danMatrix.ts#L34)

The public method to setup the matrix

#### Parameters

##### props?

[`DanMatrixConstructorType`](../type-aliases/DanMatrixConstructorType.md)\<`T`\>

the optional input of type DanMatrixConstructorType

#### Returns

`void`

#### Throws

Error if a wrong input is passed
