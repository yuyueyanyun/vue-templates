---
title: animation
lang: zh-CN
---

# 动画
> 指定一组或多组动画，每组之间用逗号相隔。

```css
animation: name duration timing-function delay iteration-count direction;
```

| 属性    | 描述                |
| ------- | --------------------------- |
| name | 绑定到选择器的 keyframe 名称。 |
| duration | 规定完成过渡效果需要多少秒。 |
| timing-function | 规定动画的速度曲线。`linear``ease``ease-in``ease-out``ase-in-out``cubic-bezier(n,n,n,n)` |
| delay | 规定动画效果何时开始。秒或毫秒 |
| iteration-count | 规定动画应该播放的次数。n/`infinite` |
| direction | 是否应该轮流反向播放动画。`normal\|alternate` |

