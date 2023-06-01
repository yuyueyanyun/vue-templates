---
title: 反射
lang: zh-CN
outline: deep
---

# 反射 Reflection
## Reflect 非构造函数
静态方法与 [proxy handler] 方法的命名相同。
## Proxy 创建一个对象的代理
实现基本操作的拦截和自定义。

```js
const p = new Proxy(target, handler);
```
* 创建一个可撤销的代理对象。返回值是一个对象：`{"proxy": proxy, "revoke": revoke}`;
```js
const revocable = Proxy.revocable(target, handler);
const proxy = revocable.proxy;
revocable.revoke();
```

### demo
```js
const handler = {
  get: (target, key) => {
    return Object.hasOwn(target, key) ? Reflect.get(target, key) : 3;
  },
  set: (target, key, val) => {
    return Object.hasOwn(target, key) ? Reflect.set(target, key, val): false;
  },
  deleteProperty: (target, key) => {
    Reflect.deleteProperty(target, key);
    console.log('delete: ' + key);
    return true;
  }
};

const p = new Proxy({
  a: 0,
}, handler);
p.a = 1;
p.b = 2;

console.log(p.a, p.b);      // 1, 3
console.log('c' in p, p.c); // false, 3
delete p.a;  // Reflect.deleteProperty(p, 'a')  ->delete: a
console.log(p.a); // 3
```

### 参数、方法
|  参数   | 描述              |
| ------- | ---------------------------|
| target | 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。 |
| handler | 容纳一批特定属性的占位符对象。它包含有 Proxy 的各个捕获器（trap）。所有的捕捉器是可选的。如果没有定义某个捕捉器，那么就会保留源对象的默认行为。|

* handler

|  对象   | 描述              |
| ------- | ---------------------------|
| handler.get(target, key, receiver) | 属性读取操作的捕捉器。如果target对象中指定了getter，receiver则为getter调用时的this值。 |
| handler.set(target, key, value, receiver) | 属性设置操作的捕捉器。 |
| handler.has(target, key) | in 操作符的捕捉器。 |
| handler.ownKeys(target) | 返回所有的属性key，包括不可枚举类型，不包括继承的属性。 Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器。 |
| handler.deleteProperty(target, key) | delete 操作符的捕捉器。 `key`待删除的属性名。|

