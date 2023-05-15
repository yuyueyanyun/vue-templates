---
title: filter
lang: zh-CN
---

# 滤镜
> 将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。

```css

filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();

```
:::demo

other/css/filter/demo

:::

| 函数    | 描述                | 默认值 |
| ------- | --------------------------- | ---- |
| none | 默认值。规定无效果。 | - |
| blur(px) | 对图像应用模糊效果。 | `0` |
| brightness(%) | 调整图像的亮度。 | `1` |
| contrast(%) | 函数可调整输入图像的对比度 | `1` |
| drop-shadow(offset-x offset-y blur spread color) | offset-x：必需，指定水平阴影的像素值。 <br>offset-y：必需，指定垂直阴影的像素值。<br> blur：可选，单位必须用像素。为阴影添加模糊效果。不允许负值。<br> spread：可选，单位必须用像素。正值将导致阴影扩展并增大。<br> color：可选，为阴影添加颜色。如果未规定，则颜色取决于浏览器（通常为黑色）。| blur-`0px` |
| grayscale(%) | 将图像转换为灰阶。0%-100%| `0` |
| hue-rotate(deg) | 在图像上应用色相旋转。0deg-360deg。| `0deg` |
| invert(%) | 反转图像中的样本。 0%-100% | `0` |
| opacity(%) | 透明度级别。 | `1` |
| saturate(%) | 饱和度。 | `1` |
| sepia(%) | 转换为棕褐色。 0%-100%| `0` |
| url() | 函数接受规定 SVG 滤镜的 XML 文件的位置 | - |