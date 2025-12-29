[**danmatrix**](../README.md)

***

[danmatrix](../README.md) / Coordinates

# Class: Coordinates

Defined in: [src/coordinates.ts:6](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L6)

Coordinates is the class representing the 2-Dimension coordinates (x,y)

## Constructors

### Constructor

> `protected` **new Coordinates**(`x`, `y`): `Coordinates`

Defined in: [src/coordinates.ts:30](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L30)

The protected constructor

#### Parameters

##### x

`number`

The x non-negative integer number

##### y

`number`

The y non-negative integer number

#### Returns

`Coordinates`

## Properties

### \_x

> `protected` **\_x**: `number`

Defined in: [src/coordinates.ts:10](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L10)

The x non-negative integer number

***

### \_y

> `protected` **\_y**: `number`

Defined in: [src/coordinates.ts:15](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L15)

The y non-negative integer number

## Methods

### getX()

> **getX**(): `number`

Defined in: [src/coordinates.ts:148](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L148)

The x getter

#### Returns

`number`

The x non-negative integer number

***

### getY()

> **getY**(): `number`

Defined in: [src/coordinates.ts:171](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L171)

The y getter

#### Returns

`number`

The y non-negative integer number

***

### resetInternalCoordinates()

> `protected` **resetInternalCoordinates**(): `void`

Defined in: [src/coordinates.ts:20](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L20)

Reset the initial default values (0,0)

#### Returns

`void`

***

### setX()

> **setX**(`x`): `boolean`

Defined in: [src/coordinates.ts:158](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L158)

The x setter

#### Parameters

##### x

The x non-negative integer ("stringified") number

`string` | `number`

#### Returns

`boolean`

- false if the input is not a correct value for the coordinates
- otherwise true and the numeric value of the input is assigned to the `protected _x` class member

***

### setY()

> **setY**(`y`): `boolean`

Defined in: [src/coordinates.ts:181](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L181)

The y setter

#### Parameters

##### y

The y non-negative integer ("stringified") number

`string` | `number`

#### Returns

`boolean`

- false if the input is not a correct value for the coordinates
- otherwise true and the numeric value of the input is assigned to the `protected _y` class member

***

### toArr()

> **toArr**(): `number`[]

Defined in: [src/coordinates.ts:203](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L203)

Get the coordinates as array [x,y]

#### Returns

`number`[]

the coordinates as array [x,y]. Ex: [3,4]

***

### toString()

> **toString**(`separator`): `string`

Defined in: [src/coordinates.ts:195](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L195)

Get the coordinates in string format separated by a separator

#### Parameters

##### separator

`string` = `'-'`

the separator of the stringified coordinates. Default '-'

#### Returns

`string`

the stringified version of the coordinates. Ex: '2-7'

***

### arrayCoordsToStringCoords()

> `static` **arrayCoordsToStringCoords**(`coordsArr`, `separator`): `string` \| `false`

Defined in: [src/coordinates.ts:94](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L94)

Utility function to transform an array of coordinates [x,y] into its "stringified" version 'x-y'
based on the value of the separator (which defaults to '-').

#### Parameters

##### coordsArr

(`string` \| `number`)[]

the array of coordinates [x,y]. Ex: [2,7]

##### separator

`string` = `'-'`

the separator of the stringified coordinates in output

#### Returns

`string` \| `false`

- false if there's any error in the coordsArr parameter or in the separator
- otherwise the stringified version of the coordinates. Ex: '2-7'

***

### checkNonNegativeInteger()

> `protected` `static` **checkNonNegativeInteger**(`val`): `number` \| `false`

Defined in: [src/coordinates.ts:45](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L45)

Utility static method to check that the 'val' in input in a non-negative
integer number, or a "stringified" non-negative integer which will be
transformed into a number

#### Parameters

##### val

the input which can be a string or a number

`string` | `number`

#### Returns

`number` \| `false`

- false if the input is not a non-negative ("stringified") integer
- otherwise the numeric value of the input

***

### fromArrayCoords()

> `static` **fromArrayCoords**(`coordsArr`): `false` \| `Coordinates`

Defined in: [src/coordinates.ts:131](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L131)

Build a Coordinates class instance from array coordinates [x,y]

#### Parameters

##### coordsArr

(`string` \| `number`)[]

the array of coordinates [x,y]. Ex: [5,1]

#### Returns

`false` \| `Coordinates`

- false if there's any error in the coordsArr parameter
- otherwise it returns an instance of the Coordinates class

***

### fromStringCoords()

> `static` **fromStringCoords**(`strCoords`, `separator`): `false` \| `Coordinates`

Defined in: [src/coordinates.ts:116](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L116)

Build a Coordinates class instance from string coordinates 'x-y'

#### Parameters

##### strCoords

`string`

the stringified coordinates. Ex: '4-7'

##### separator

`string` = `'-'`

the separator of the stringified coordinates. Default '-'

#### Returns

`false` \| `Coordinates`

- false if there's any error in the strCoords parameter or the separator
- otherwise it returns an instance of the Coordinates class

***

### stringCoordsToArrCoords()

> `static` **stringCoordsToArrCoords**(`strCoords`, `separator`): `false` \| \[`number`, `number`\]

Defined in: [src/coordinates.ts:69](https://github.com/evildead/DanMatrix/blob/e833fd9e6c016a85584dd018a0e8285b0563b0f7/src/coordinates.ts#L69)

Utility function to transform a stringified coordinates 'x-y' into the array of coordinates [x,y]

#### Parameters

##### strCoords

`string`

the stringified coordinates. Ex: '4-7'

##### separator

`string` = `'-'`

the separator of the stringified coordinates. Default '-'

#### Returns

`false` \| \[`number`, `number`\]

- false if there's any error in the strCoords parameter or the separator
- otherwise it returns the array of coordinates [x,y]. Ex: [4,7]
