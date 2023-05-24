---
title: ts
lang: zh-CN
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
4、.eslintrc.js
> ts全局类型，但是无法通过eslint的no-undef规则校验
<ElRow>
  <img src="/images/tutorial/ts/eslint_conflict.jpg" style="height: 200px;"/>
</ElRow>

* 方式1

```js
module.exports = {
  overrides: [
    {
      files: [
        '*.ts', '*.tsx', '*.vue',
      ],
      rules: { 'no-undef': 'off' },
    },
  ],
}
```

* 方式2

```js
module.exports = {
  globals: {
    InstanceType: 'readonly',
  },
}
```

5、根目录添加.eslintignore 忽略声明文件
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

### type interface

> type 是类型别名，用于给各种类型定义别名<br>
interface 是接口，对对象的形状进行描述。
**有时候两者都能实现同样的功能，才会经常被混淆**

* 相同点
> 都可以定义一个对象或函数
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
> 都允许继承
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
/* interface 继承 type 使用 extends 实现， type 继承 interface 使用交叉类型实现  */
```
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

## 常见枚举类型的操作技巧

```ts
enum Color {
  Red = 'red',
  Blue = 'blue',
}
// 获取枚举的 key 类型
type key = keyof typeof Color // 'Red' | 'Blue'
// 获取枚举的 value 类型
type Val = `${Color}`; // 'red' | blue

// 合并
enum Black {
  Black = 'black',
}
const all = { ...Color, ...Black };
type All = typeof all;

// 剔除枚举中的值
type ExcludeColor = Exclude<Color, Color.Blue>;
```
