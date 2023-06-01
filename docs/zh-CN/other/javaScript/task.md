---
title: 宏任务和微任务
lang: zh-CN
---

# 任务和微任务
>task（任务） 和 microtask（微任务） 描述 JavaScript 引擎中不同任务队列的概念，用于控制和管理代码的执行顺序和优先级。

* 执行一个任务（栈中没有就从事件队列中获取）
* 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
* 任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
* 当前任务执行完毕，开始检查渲染，然后GUI线程接管渲染
* 渲染完毕后，JS线程继续接管，开始下一个任务（从事件队列中获取）

```js
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);

const p = Promise.resolve(4);
p.then((v) => {
  console.log(v);
});

setTimeout(() => {
  console.log(5);
  setTimeout(() => {
    console.log(6);
  }, 0);
  new Promise((resolve) => {
    console.log(7);
    resolve();
  }).then(() => {
    console.log(8);
  });
}, 0);

new Promise((resolve) => {
  console.log(9);
  resolve();
}).then(() => {
  console.log(10);
});
// 1 3 9 4 10 2 5 7 8 6
```
## 任务
由执行诸如从头执行一段程序、执行一个事件回调或一个 interval/timeout 被触发之类的标准机制而被调度的任意 JavaScript 代码。这些都在任务队列（task queue）上被调度。
* 一段新程序或子程序被直接执行时（比如从一个控制台，或在一个 `<script>` 元素中运行代码）。
* 触发了一个事件，将其回调函数添加到任务队列时。
* 执行到一个由 setTimeout() 或 setInterval() 创建的 timeout 或 interval，以致相应的回调函数被添加到任务队列时。

|  任务   | 浏览器   | node |
| ------- | ---------------------------| --- |
| script | true | true |
| setTimeout | true | true |
| setInterval | true | true |
| setImmediate | false | true |
| requestAnimationFrame | true | false |


## 微任务
可以理解是在当前 task 执行结束后立即执行的任务。也就是说，在当前task任务后，下一个task之前，在渲染之前。

|  任务   | 浏览器   | node |
| ------- | ---------------------------| --- |
| process.nextTick | false | true |
| MutationObserver | true | false |
| Promise.then catch finally | true | true |
