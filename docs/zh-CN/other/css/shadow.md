---
title: shadow
lang: zh-CN
outline: deep
---

# 阴影

## box-shadow
> 元素的框架上添加阴影效果。可以在同一个元素上设置多个阴影效果，并用逗号将他们分隔开。该属性可设置的值包括阴影的 X 轴偏移量、Y 轴偏移量、模糊半径、扩散半径和颜色。
```css
/* x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* 任意数量的阴影，以逗号分隔 */
box-shadow:
  3px 3px red,
  -1px 0 0.4px blue;
```
- 如果只给出两个值，那么这两个值将会被当作 \<offset-x\>\<offset-y\> 来解释。
- 如果给出了第三个值，那么第三个值将会被当作\<blur-radius\>解释。
- 如果给出了第四个值，那么第四个值将会被当作\<spread-radius\>来解释。

[Box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)可视化工具可以生成一个元素的 CSS box-shadow 相关代码，添加 box shadow 效果到你的 CSS 对象上。
## text-shadow
> 为文字添加阴影。
```css
text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
```
使用同`box-shadow`，**前两个参数，以“文字中心”为原点的坐标轴，分别为 x 轴和 y 轴**
## drop-shadow
> 对图像使用投影效果 [示例](./filter.md)