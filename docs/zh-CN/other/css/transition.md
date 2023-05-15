---
title: transition
lang: zh-CN
---

# 过渡
可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。比如在不同的伪元素之间切换，像是 `:hover`，`:active` 或者通过 JavaScript 实现的状态变化。

```css
transition: property duration timing-function delay;
```
:::demo

other/css/transition/demo

:::

| 属性    | 描述                |
| ------- | --------------------------- |
| property | 过渡效果的 CSS 属性的名称。 |
| duration | 规定完成过渡效果需要多少秒。 |
| timing-function | 规定速度效果的速度曲线。`linear\|ease\|ease-in\|ease-out\|ease-in-out\|cubic-bezier(n,n,n,n);` |
| delay | 定义过渡效果何时开始。 |

