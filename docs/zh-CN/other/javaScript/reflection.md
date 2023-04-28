---
title: 反射
lang: zh-CN
---

# 反射 Reflection
## Reflect 非构造函数
静态方法与 [proxy handler] 方法的命名相同。
## Proxy 创建一个对象的代理
实现基本操作的拦截和自定义。
```code
const p = new Proxy(target, handler);
```
创建一个可撤销的代理对象。返回值是一个对象：`{"proxy": proxy, "revoke": revoke}`;
```code
const revocable = Proxy.revocable(target, handler);
const proxy = revocable.proxy;
revocable.revoke();
```

|  参数   | 描述              |
| ------- | ---------------------------|
| target | 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。 |
| handler | 通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为 |

|  方法   | 描述              |
| ------- | ---------------------------|
| target | 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。 |
| handler | 通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为 |