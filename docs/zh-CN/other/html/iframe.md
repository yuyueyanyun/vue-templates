---
title: 内联框架元素
lang: zh-CN
---

# 内联框架元素 iframe
它能够将另一个 HTML 页面嵌入到当前页面中。<br>
>如果浏览器不支持`<iframe>`，就会显示内部的子元素。

## sandbox 沙箱
嵌入的网页默认具有正常权限，比如执行脚本、提交表单、弹出窗口等。
```code
<iframe src="https://cn.bing.com" sandbox></iframe>
```
**sandbox**可以当作布尔属性使用，表示打开所有限制。

|  属性   | 描述              |
| ------- | ---------------------------|
| allow | 指定其[特征策略](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Permissions_Policy)。`allow="<directive> <allowlist>"` |
| ~~allowfullscreen~~ | `true` 可以调用 requestFullscreen() 方法激活全屏模式。<br>*已经被重新定义为 `allow="fullscreen"`* |
| ~~allowpaymentrequest~~ | `true` 可以调用支付请求接口`Payment Request API`。<br>*已经被重新定义为 `allow="payment"`。* |
| height | 显示区域的高度。 |
| width | 显示区域的宽度。|
| importance | `src` 属性指定的资源的加载优先级, `auto \| high \| low` |
| name | 定位嵌入的浏览上下文的名称。`<a>`、`<form>`的`target`,`<input>`、`<button>`的`formtarget`属性值; window.open() 方法的 windowName 参数值。 |
| referrerpolicy | 表示在获取 iframe 资源时如何发送`referrer`首部。同`<a>` |
| sandbox | 新的迭代对象。 |
