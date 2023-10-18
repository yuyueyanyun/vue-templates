---
title: Worker
lang: zh-CN
outline: deep
---

# 工作线程
> **线程**是HTML5 中提出的概念，分为`Worker`和`SharedWorker`。可以将一些耗时的数据处理操作从主线程中剥离，使主线程更加专注于页面渲染和交互。

`Worker`仅能被创建它的脚本所使用（一个线程对应一个主线程），而`SharedWorker`能够在不同的脚本中使用（一个共享线程对应多个主线程）。
* 不能直接操作 DOM 节点
* 和主线程间的数据传递通过`postMessage()`，这个过程中数据并不是被共享而是被复制。
* Worker 必须与其创建者同源
## Worker
```js
const myWorker = new Worker(url, options);
```
```js
const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
const url = URL.createObjectURL(blob);
```
- url：执行的脚本的`URL`或`Blob URL` 。
- options：
  - type：`classic` 或 `module`， 默认 `classic`。
  - credentials：指定凭证，可以是`omit`,`same-origin`,`include`。如果未指定，或者 type 是 classic，将使用默认值 omit。
  - name：主要用于调试目的。

### 完整示例
* work.js
```js
onmessage = function (event) {
  console.log(event.data)
  postMessage('Hello')
}
// or 
self.onmessage = (e) => {
  // ...
};
// or
self.addEventListener('message', function (e) {
  // ...
})

self.close() // 主动关闭worker连接，后续发送消息将静默失败 
```
* 主线程
```js
var worker = new Worker('/worker.js')
worker.postMessage('Hi')
worker.onmessage = function(event) {
  console.log(event.data)
}
worker.onerror = (error) => {
  console.log(`Worker error: ${error.message}`);
  throw error;
};
worker.terminate(); // 外部关闭连接，worker内的所有进行中的任务（如定时任务）都将直接销毁
```


## SharedWorker
> 生成一个新的共享 worker 与生成一个专用 worker 非常相似，只是构造器的名字不同
* 共享 worker 通信必须通过 port 对象
* 如`message`事件被 `addEventListener()` 方法使用。需要调用 start()。
```js
const myWorker = new SharedWorker(url, name);
// or
const myWorker = new SharedWorker(url, options);
```
参数同`Worker`。

### 完整示例
* work.js
```js
onconnect = (e) => {
  const port = e.ports[0];
  port.onmessage = (event) => {
    console.log(event.data)
    port.postMessage('Hello')
  }
  // or
  port.addEventListener('message', (e) => {
    // ...
  });
  port.start();

  port.close() // 仅关闭连接
}
```
* 主线程
```js
var worker = new SharedWorker('/worker.js')
worker.port.postMessage('Hi')
worker.port.onmessage = function(event) {
  console.log(event.data)
}
worker.onerror = (error) => {
  console.log(`Worker error: ${error.message}`);
  throw error;
};

// or
worker.port.addEventListener('message', (e) => {
  // ...
});
worker.port.start();

worker.port.close()    // 仅关闭连接
```

