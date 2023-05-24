---
title: svg
lang: zh-CN
outline: deep
---

# svg
* SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
* SVG 用来定义用于网络的基于矢量的图形
* SVG 使用 XML 格式定义图形
* SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失
* SVG 是万维网联盟的标准
* SVG 与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体
>SVG 文件推荐使用 .svg（全部小写）作为此类文件的扩展名。

## 元素
### rect: 矩形

:::mirror

other/html/svg/rect

:::
| 专有属性 | 说明 |
| --- | ----------- |
|  x  | 定义矩形的左侧位置 `x="0"` |
|  y | 定义矩形的顶端位置 `y="0"` |
|  width | 矩形的宽度 `width="100px"` |
|  height | 矩形的高度 `height="100px"` |
|  rx | 水平轴向的圆角半径尺寸 `rx="25"` |
|  ry | 垂直轴向的圆角半径尺寸 `rx="25"` |
### circle: 圆形

:::mirror

other/html/svg/circle

:::
| 专有属性 | 说明 |
| --- | ----------- |
|  cx  | 中心点的 x 轴坐标 `cx="0"` |
|  cy | 中心点的 y 轴坐标 `cy="0"` |
|  r | 圆的半径 `r="100"` |
### ellipse: 椭圆

:::mirror

other/html/svg/ellipse

:::
| 专有属性 | 说明 |
| --- | ----------- |
|  cx  | 中心点的 x 轴坐标 `cx="0"` |
|  cy | 中心点的 y 轴坐标 `cy="0"` |
|  rx | 水平轴向的圆角半径尺寸 `rx="25"` |
|  ry | 垂直轴向的圆角半径尺寸 `rx="25"` |
### line: 直线
:::mirror

other/html/svg/line

:::
| 专有属性 | 说明 |
| --- | ----------- |
|  x1, y1 | 线条的开始 x，y轴 |
|  x2, y2 | 线条的结束 x，y轴 |
### polygon: 多边形
> 首尾相连的直线线段构成的闭合多边形形状。

:::mirror

other/html/svg/polygon

:::
[fill-rule](#fill-rule)
| 专有属性 | 说明 |
| --- | ----------- |
|  points | 定义多边形每个角的 x 和 y 坐标 |
### polyline: 折线
> 创建一系列直线连接多个点，最后一点不与第一点相连。

:::mirror

other/html/svg/polyline

:::
| 专有属性 | 说明 |
| --- | ----------- |
|  points | 定义多边形每个角的 x 和 y 坐标 |
### path: 路径
> 可以用它创建线条，曲线，弧形等等。

:::mirror

other/html/svg/path

:::
上述路径：移动到起点(10,10)，以控制点(108,52)、终点(150,150)绘制二次方贝塞尔曲线，然后向上移动到10，然后再回到起点。<br>
**大写字母采用绝对定位，小写字母采用相对定位**
|  命令   | 描述                |
| ------- | --------------------------- |
| M 、m | “Move to” 需要移动到的那个点的 x 和 y 轴坐标。 |
| L 、l | L 命令将会在当前位置(x, y)和新位置（L 前面画笔所在的点）之间画一条线段。 |
| H 、h | 绘制水平线 |
| V、v | 绘制垂直线 |
| C、c | 三次贝塞尔曲线 |
| S、s | 创建与前面`C`/`S`一样的贝塞尔曲线, 如果 `S` 命令单独使用，前面没有 `C` 或 `S` 命令，那当前点将作为第一个控制点。 |
| Q、q | 二次贝塞尔曲线 |
| T、t | 同`S`命令，延长二次贝塞尔曲线。如果 `T`单独使用，那么控制点就会被认为和终点是同一个点，所以画出来的将是一条直线。 |
| A、a | [弧形](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths) |
| Z、z | 闭合路径命令，不用区分大小写。 |
### text: 文本

:::mirror

other/html/svg/text

:::
| 专有属性 | 说明 |
| --- | ----------- |
|  x  | 定义矩形的左侧位置 `x="0"` |
|  y | 定义矩形的顶端位置 `y="0"` |
### animate: 动画-属性
> 定义一个元素的某个属性如何踩着时点改变。在指定持续时间里，属性从开始值变成结束值。
:::mirror

other/html/svg/animate

:::
| 属性 | 说明 |
| --- | ----------- |
| additive | 设置为`sum`从前一个动画结束的地方开始的动画。默认`replace`|
|  accumulate  | 设置为`sum`每个重复迭代都建立在前一次迭代的最后一个值之上。默认`none` |
### animateMotion: 动画路径
> 定义了一个元素如何沿着运动路径进行移动。
:::mirror

other/html/svg/animateMotion

:::

| 专有属性 | 说明 |
| ---- | ----------------- |
| calcMode | 指定动画的插值模式。默认的模式是线性的 |
| path | 路径信息 |
| keyPoints | 指定动画的持续时间 |
| rotate | 旋转 |

## 属性
### viewBox
> viewBox 属性允许指定一个给定的一组图形伸展以适应特定的容器元素。\<marker\>, \<pattern\>, \<svg\>, \<symbol\>, 和 \<view\> 等五个 svg 元素可以有这个属性。
```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
```
[示例](#polygon-多边形)
### fill-rule
> 外观属性。它可以被应用于任何元素，但只会在这八个元素中有效：\<altGlyph\>、\<path\>、\<polygon\>、\<polyline\>、\<text\>、\<textPath\>、\<tref\> 和 \<tspan\>。

```css
// 默认nonzero
fill-rule: 'nonzero' | 'evenodd';
```
[示例](#polygon-多边形)