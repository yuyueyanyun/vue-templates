---
title: Function
lang: zh-CN
---

# 函数
> 在 JavaScript 中，每个函数实际上都是一个 Function 对象。
## Methods 方法
```js
fn.bind(thisArg, arg1, arg2) 
//等效 const bFn = (...args) => fn.call(thisArg, arg1, arg2, ...args)
call(thisArg, arg1, arg2)
apply(thisArg, argsArray)
```
### bind
> 调用该新函数时，它会调用原始函数并将其 this 关键字设置为给定的值，`同时，还可以传入一系列指定的参数，这些参数会插入到调用新函数时传入的参数的前面。`
```js
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// output: 42
```
### call apply
> `call()` 几乎与 `apply()` 相同，只是函数的参数以列表的形式逐个传递给 call()，而在 apply() 中它们被组合在一个对象中，通常是一个数组。
```js
function Product(name) {
  this.name = name;
}

function Food(name) {
  Product.call(this, name);
  this.category = 'food';
}
// or
function Food(...arg) {
  Product.apply(this, arg);
  this.category = 'food';
}
console.log(new Food('cheese').name);
```