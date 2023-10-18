---
title: 代码注释
lang: zh-CN
outline: deep
---

# 注释

## 注释格式
```js
/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
```
### 注释符
* file
> 描述文件相关信息
```js
/**
 * @file 这是用于...的文件。
 */
```
* author
> 描述当前文件或者代码的作者的相关信息；
```js
/**
 * @author Lei <xxxx@qq.com>
 */
```
* copyright
> 描述当前文件的版权相关信息
```js
/**
 * @copyright Lei 2022
 */
```
* license
> 描述当前文件许可证相关信息
```js
/**
 * @license MIT
 */
```
* version
> 描述当前项目的版本号
```js
/**
 * @version 1.1.1
 */
```
* since
> 描述某个功能是从哪个版本开始引入的
```js
/**
 * @since 1.1.2
 */
```
* see
> 引导至其他位置，也可以使用 @link 引导至某一网络地址；
```js
/**
 * @see handleClick
 */

/**
 * @see {@link https://www.bing.com}
 */
```
* todo
> 描述接下来准备做的事情
```js
/**
 * @todo 修复...bug
 */
```
* function
> 和`@method`含义相同，描述一个函数
```js
/**
 * @function 
 */
```
* type
> 描述一个变量的类型
```js
/**
 * @type {?number}
 */
let num1;
/**
 * @type {object, <number>}
 */
let obj = {a: 1};
```
* param
> 描述一个函数的参数信息
```js
/**
 * @param {number} id - 这是用户id
 * @param {string} name - 用户名
 */
function fn(id, name){}

/**
 * @param {object} option- 传入参数对象
 * @param {string} option.id - 用户id
 */
function fn1(option){}
```
* returns
> 描述函数的返回值的信息
```js
/**
 * @returns {number} 返回值描述
 */
```
* deprecated
> 废弃
```js
/**
 * @deprecated 
 */
function old() {}
```
## 特殊注释
```js
// TODO: 需要实现的功能
// FIXME: 需要修复的问题和缺陷
// BUG: 已知错误
// XXX: 需要警惕或关注的代码块
// HACK: 临时修复或不优雅的解决方案
```
## 文档工具
> [JSDoc](https://jsdoc.app/index.html) 文档生成器。在源代码中添加指定格式的注释，JSDoc 工具便会自动扫描你的代码并生成一个 API 文档网站（在指定目录下生成相关的网页文件）。