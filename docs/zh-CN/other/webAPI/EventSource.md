---
title: EventSource
lang: zh-CN
outline: deep
---

# EventSource
> 一个 EventSource 实例会对 HTTP 服务器开启一个持久化的连接，以 text/event-stream 格式发送事件，此连接会一直保持开启直到通过调用 EventSource.close() 关闭。


```js
const evtSource = new EventSource("sse.php");

evtSource.onmessage = (e) => {
  console.log(`message: ${e.data}`)
};
evtSource.onerror = (e) => {
  console.error('Error occurred', e);
};
// 关闭连接
evtSource.close();
```

## 注意
* 单向，即只能从服务器到客户端。如果需要双向通信，可以考虑使用 WebSockets。
* EventSource只支持GET请求。可通过重写Fetch来发起POST请求的。参考或使用[fetch-event-source](https://github.com/Azure/fetch-event-source)。

