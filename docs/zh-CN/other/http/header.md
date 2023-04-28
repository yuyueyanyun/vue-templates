---
title: 请求头
lang: zh-CN
---

# header
## referer 
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

