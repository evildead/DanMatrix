[danmatrix](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Iterator

# Interface: Iterator\<T, TReturn, TNext\>

[\<internal\>](../modules/internal_.md).Iterator

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |
| `TNext` | `undefined` |

## Table of contents

### Methods

- [next](internal_.Iterator.md#next)
- [return](internal_.Iterator.md#return)
- [throw](internal_.Iterator.md#throw)

## Methods

### next

▸ **next**(`...args`): [`IteratorResult`](../modules/internal_.md#iteratorresult)\<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`TNext`] |

#### Returns

[`IteratorResult`](../modules/internal_.md#iteratorresult)\<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:43

___

### return

▸ **return**(`value?`): [`IteratorResult`](../modules/internal_.md#iteratorresult)\<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `TReturn` |

#### Returns

[`IteratorResult`](../modules/internal_.md#iteratorresult)\<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:44

___

### throw

▸ **throw**(`e?`): [`IteratorResult`](../modules/internal_.md#iteratorresult)\<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

[`IteratorResult`](../modules/internal_.md#iteratorresult)\<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:45
