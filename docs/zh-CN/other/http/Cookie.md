---
title: Cookies
lang: zh-CN
outline: deep
---

# Cookie

> 浏览器会存储 cookie 并在下次向同一服务器再发起请求时携带并发送到服务器上。

**_Document.cookie 获取并设置与当前文档相关联的 cookie。可以把它当成一个 getter and setter。_**

## Domain 属性

> 指定了哪些主机可以接受 Cookie。如果不指定，该属性默认为同一 host 设置 cookie，不包含子域名。如果指定了 Domain，则一般包含子域名。因此，指定 Domain 比省略它的限制要少。但是，当子域需要共享有关用户的信息时，会有所帮助。

```js
// https://mozilla.org
document.cookie = "data=test; domain=mozilla.org";

// https://developer.mozilla.org
const cookies = document.cookie
  .split(";")
  .map((cookie) => cookie.trim().split("="));
const data = cookies.find((cookie) => cookie[0] === "data");
console.log(data);
```
