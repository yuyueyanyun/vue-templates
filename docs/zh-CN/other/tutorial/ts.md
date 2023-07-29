---
title: ts
lang: zh-CN
outline: deep
---

# ts
## 配置
1、下载  `ts-loader` `typescript`
```
yarn add ts-loader --dev
or
npm install ts-loader --save-dev
```
```
yarn add typescript --dev
or
npm install typescript --save-dev
```
2、添加tsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "experimentalDecorators": true,
    "strict": true,
    "allowJs": true, // 允许在项目中导入JavaScript文件
    "sourceMap": true, // 编译附带 Map 文件
    "checkJs": true, // 对.js文件进行类型检查和错误提示
    "moduleResolution": "node",
    "paths": {
      "@/*": ["src/*"]
    },
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
  ],
}
```
3、vue.config.js
```javascript
module.export = {
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
      },
    }]
  }
}
```
4、根目录添加.eslintignore 忽略声明文件
```
/**/*.d.ts
```

## 类型
### any number string boolean 

``` ts
const a: any = 1 || '234'; //  any 的变量可以赋予任意类型的值。
const num: number = 1; // number string boolean
```
### array
```ts
// 类型(推荐)
const arr: number[] = [1, 2];
// 泛型
let arr: Array<number> = [1, 2];
// 元组
const x:[string, number] = ['sa', 1];
```

### enum 枚举
> 定义数据集合，使用枚举可以定义一些带名字的常量，有普通枚举、字符串枚举和常量枚举等类型。
```ts
enum Color {
  Red = 'red',
  Blue = 'blue',
}
console.log(Color.Red) // red
```

### never
> never 是一组**空值**。never类型**永不**能有任何值，包括 any 类型的值。

1、泛型和函数中不允许（传入）的参数。<br>
2、不兼容的类型的交集。<br>
3、空联合（无的联合类型）。

```ts
type A = {
  a: string;
  b?: never;
};

type B = {
  b: number;
  a?: never;
};
declare function fn(arg: A | B): void;

const input = { a: 'foo', b: 123 };
fn(input); // 报错
```
### type(类型别名)、 interface(接口)

> type 是类型别名，用于给各种类型定义别名<br>
interface 是接口，对对象的形状进行描述。
**有时候两者都能实现同样的功能，才会经常被混淆**

* 相同点
  
都可以定义一个对象或函数
```ts
// 一旦定义了索引签名,那么确定属性和可选属性的类型都必须是它的类型的子集
type Item = {
  id: number,
  name: string,
  [key: string]?: number | string, // 联合声明
}
or
interface Item {
  id: number,
  name: string,
  [key: string]?: number | string,
}
```

```ts
const AddType = (num1:number,num2:number) => number;
'or'
interface AddType {
  (num1:number,num2:number):number
}
// 使用
const add:addType = (num1, num2) => {
  return num1 + num2
}
```
都允许继承 ***interface 继承 type 使用 extends/implements 实现， type 继承 interface 使用交叉类型实现***

```ts
interface Family { 
  address: string 
}
// interface 继承 interface
interface Son extends Family { 
  name: string,
}
type Family = { 
  address: string 
}
// type 继承 type
type Son = Family & { name: string  } // 用交叉类型
const n:Son = {
  address: 'xxx-xx',
  name: 'li'
}
```
implements：实现，一个新的类，从父类或者接口实现所有的属性和方法，同时可以重写属性和方法，包含一些新的功能<br>extends：继承，一个新的接口或者类，从父类或者接口继承所有的属性和方法，不可以重写属性，但可以重写方法

* 区别
> type 声明基本类型、联合类型、交叉类型、元组<br>
interface 合并声明

***合并重复声明***
```ts
interface Person {
  name: string
}

interface Person {
  age: number
}

const person: Person = {
  name: 'li',
  age: 22,
}
```

### 泛型
> 使用一个类型变量来表示一种类型，类型值通常是在使用的时候才会设置。

* 定义函数
```ts
function identity<T>(arg: T): T {
  return arg;
}
// or
const identity = <T>(arg: T): T => arg;
let output1 = identity("myString");  // let output1: string
let output2 = identity(1); // let output2: number
```
* 泛型约束
***在函数里使用泛型参数的属性或者方法时，就需要对泛型进行约束***
1、 基本类型
```ts
const identity = <T>(arg: T[]): number => arg.length;
```
2、引用数据类型
```ts
const getKey = <T extends {
  [key: string]: any
}>(value: T): (keyof T)[] => Object.keys(value);
```
**调用getKey传入数组也可以。由于数组是一种特殊的对象类型，会返回数组[ '0', '1' ]**
仅适用于普通对象改造
```ts
const getKey = <T extends {
  [key: string]: any
  length?: never;
}>(value: T): (keyof T)[] => Object.keys(value);

const a = getKey([1, 2]); // 报错
```
3、接口使用
```ts
interface IdentityFn {
  <T>(arg: T): T;
}
const identity = <IdentityFn>(arg:number) => arg;

// 把泛型参数当作整个接口的一个参数
interface IdentityFn<T> {
  (arg: T): T;
}
const identity: IdentityFn<number> = (arg) => arg;

```

## 关键字
<!-- https://juejin.cn/post/6985296521495314445#heading-15 -->
### 类型约束(extends)
> 判断 T 是否可以赋值给 U，可以的话返回 T，否则返回 never
```ts
type Exclude<T, U> = T extends U ? T : never;
```
### 类型映射(in)
> 遍历指定接口的 key 或者是遍历联合类型
```ts
interface Color {
  Red: 'red'
  Blue: 'blue'
}
type ReadOnlyType<T> = {
  readonly [P in keyof T]: T
}
type ReadOnlyColor = ReadOnlyType<Color>
// {
//   readonly Red: Color;
//   readonly Blue: Color;
// }
```

### 索引类型查询操作符(keyof)
```ts
type Color = {
  red: string
  blue: string
}

type ColorProps = keyof Color; // "red" | "blue"
```
## 映射类型
### 实例类型(InstanceType)
> 获取class构造函数的返回类型
```ts
class Car {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
}
type CarType = InstanceType<typeof Car>;

// vue中使用
type dialog = InstanceType<typeof ElDialog>;

```

## 声明、引入

### 声明
```ts
declare let name:string;

declare function run(name: string):void;

interface ImportMetaEnv {
  readonly [key:string]: string
}
```
### 命名空间
> 命名空间可以看做是一个微型模块, 在程序内部使用的代码, 可以使用命名空间封装和防止全局污染；在程序内部外部使用的代码, 可以使用模块封装和防止全局污染 ***模块也能实现相同的功能, 所以大部分情况下用模块***

* 定义
```ts
namespace SomeNameSpaceName { 
   export interface ISomeInterfaceName {      }  
   export class SomeClassName {      }  
}
// 如果需要在外部可以调用 SomeNameSpaceName 中的类和接口，则需要在类和接口添加 export 关键字。
```
* 引入
```ts
SomeNameSpaceName.SomeClassName;
```
>如果命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它
```ts
/// <reference path = "SomeFileName.ts" />
SomeNameSpaceName.SomeClassName;
```
## 常见操作技巧

### 枚举
```ts
enum Color {
  Red = 'red',
  Blue = 'blue',
}
/* 获取枚举的 key 类型 */
type key = keyof typeof Color // 'Red' | 'Blue'
/* 获取枚举的 value 类型 */
type Val = `${Color}`; // 'red' | blue

/* 合并 */
enum Black {
  Black = 'black',
}
const all = { ...Color, ...Black };
type All = typeof all;
// { Black: Black.Black;Red: Color.Red; Blue: Color.Blue; }

/* 剔除枚举中的值 */
type ExcludeColor = Exclude<Color, Color.Blue>;
// type ExcludeColor = Color.Red
type OmitAll = Omit<All, 'Black'>
// { Red: Color.Red; Blue: Color.Blue; }

```
```ts
const cols = [{
  prop: 'index',
}, {
  prop: 'name',
}] as const;

type PropType = (typeof cols)[number]['prop'];
// 'index' | 'name'
type RowType =  {
  [key in PropType]?: any
}
// { index?: any;  name?: any; }
```

### 对象转数组
* 接受一个泛型对象 obj，并将其转换为包含 label 和 value 属性的对象数组。
```ts
const formatKeyValueArray = <T extends Record<string, any>>(obj: T):{
  label: any
  value: keyof T
}[] => Object.entries(obj)
    .map(([key, label]) => ({
      label: label,
      value: key,
    }));
```