---
title: ResizeObserver
lang: zh-CN
outline: deep
---

# ResizeObserver
> 接口监视 Element 内容盒或边框盒或者 SVGElement 边界尺寸的变化。
## 基础使用
1、创建实例
```ts
const observer = new ResizeObserver(callback);
```
2、观察目标元素
```ts
const targetElement = document.getElementById('target');
observer.observe(targetElement);
// or  box: 'content-box'（默认）| 'border-box' | 'device-pixel-content-box'
observer.observe(targetElement, { box: "border-box" });
```
3、结束监听。
```ts
observer.unobserve(targetElement); // 结束对目标元素的监听
// or 
observer.disconnect(); // 取消所有监听。
```
4、回调函数
```ts
const callback:ResizeObserverCallback = (entries, observer) {
  for (const entry of entries) {
    console.log('width：', entry.contentRect.width);
    console.log('height：', entry.contentRect.height);
  }
}
```
| 参数 | 描述 |
| ---- | ---------- |
| entries | 一个 ResizeObserverEntry 对象数组，可以用于获取每个元素改变后的新尺寸。 |
| observer | 对 ResizeObserver 自身的引用 |

## 注意
> 当元素的尺寸发生变化时，ResizeObserver 会立即触发回调函数。为了避免频繁触发回调，可以使用[防抖或节流](../javaScript/algorithm.md#节流防抖)技术来控制回调的触发频率，以提高性能和优化用户体验。