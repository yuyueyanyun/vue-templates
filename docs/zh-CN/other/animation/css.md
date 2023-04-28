---
title: CSS
lang: zh-CN
---

# CSS

## transform 变形
2D 或 3D 转换。
```code
transform: none|transform-functions;
```
:::demo

other/animation/css/transform

:::
## outline 轮廓线 
通常是矩形，但也可以是非矩形的。和 border 很类似。
```code
outline: outline-width outline-style outline-color;
```
区别：不占据空间，绘制于元素内容周围。
:::demo

other/animation/css/outline

:::

## 自定义属性 property
:::demo 许进行属性类型检查、设定默认值以及定义该自定义属性是否可以被继承。

other/animation/css/property

:::

| 值    | 描述                |
| ------- | --------------------------- |
| syntax | 类型string。定义自定义属性的类型。<br>` length \| number \| percentage \| length-percentage \| color \| image \| url \| integer \| angle \| time \| resolution \| transform-list \| transform-function \| custom-ident (a custom identifier string) `|
| inherits | 类型boolean。定义自定义属性是否允许继承 |
| initial-value | 类型符合syntax定义的类型，定义初始值 |

## 滤镜属性 filter
将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。

```code
filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();
```

:::demo 

other/animation/css/filter

:::


| 函数    | 描述                |
| ------- | --------------------------- |
| none | 默认值。规定无效果。 |
| blur(px) | 对图像应用模糊效果。 |
| brightness(%) | 调整图像的亮度。 |
| drop-shadow(h-shadow v-shadow blur spread color) | h-shadow：必需，指定水平阴影的像素值。 v-shadow：必需，指定垂直阴影的像素值。 blur：可选，单位必须用像素。为阴影添加模糊效果。不允许负值。 spread：可选，单位必须用像素。正值将导致阴影扩展并增大。 color：可选，为阴影添加颜色。如果未规定，则颜色取决于浏览器（通常为黑色）。|
| grayscale(%) | 将图像转换为灰阶。0% (0) 是默认值，原始图像|
| hue-rotate(deg) | 在图像上应用色相旋转。默认值为 0deg 最大值是 360deg。|
| invert(%) | 反转图像中的样本。 是默认值0% (0)，代表原始图像。|
| opacity(%) | 透明度级别。 |
| saturate(%) | 饱和度。 |
| sepia(%) | 转换为棕褐色。|
| url() | 函数接受规定 SVG 滤镜的 XML 文件的位置 |
## transition 过渡
可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。比如在不同的伪元素之间切换，像是 `:hover`，`:active` 或者通过 JavaScript 实现的状态变化。
```code
transition: property duration timing-function delay;
```

| 属性    | 描述                |
| ------- | --------------------------- |
| property | 过渡效果的 CSS 属性的名称。 |
| duration | 规定完成过渡效果需要多少秒。 |
| timing-function | 规定速度效果的速度曲线。`linear\|ease\|ease-in\|ease-out\|ease-in-out\|cubic-bezier(n,n,n,n);` |
| delay | 定义过渡效果何时开始。 |


## animation 动画
指定一组或多组动画，每组之间用逗号相隔。
```code
animation: name duration timing-function delay iteration-count direction;
```
| 属性    | 描述                |
| ------- | --------------------------- |
| name | 绑定到选择器的 keyframe 名称。 |
| duration | 规定完成过渡效果需要多少秒。 |
| timing-function | 规定动画的速度曲线。 |
| delay | 规定动画效果何时开始。 |
| iteration-count | 规定动画应该播放的次数。 |
| direction | 是否应该轮流反向播放动画。`normal\|alternate` |
