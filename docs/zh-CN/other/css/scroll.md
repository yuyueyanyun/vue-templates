---
title: scroll
lang: zh-CN
---

# scroll
## scroll-behavior
> 当用户手动导航或者 CSSOM scrolling API 触发滚动操作时，为一个滚动框指定滚动行为。

在滚动容器上设置了如下的 CSS，实现平滑滚动。
```css
scroll-behavior: smooth;
```
**引用** https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
<iframe height="400" width="100%" src="https://interactive-examples.mdn.mozilla.net/pages/css/scroll-behavior.html"></iframe>

## scroll-snap-align、scroll-snap-type
> scroll-snap-align 属性将盒子的吸附位置指定为其吸附区域，结合scroll-snap-type使用
> scroll-snap-type 设置了在有滚动容器的情形下吸附至吸附点的严格程度。

:::demo

other/css/scroll/scrollSA

:::
