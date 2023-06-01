---
title: canvas
lang: zh-CN
outline: deep
---

# canvas
> 可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。

## canvas_API
> Canvas API 主要聚焦于 2D 图形。

**如果绘制出来的图像是扭曲的，尝试用 width 和 height 属性为\<canvas\>明确规定宽高，而不是使用 CSS。**

### 绘制图形

#### 矩形

:::demo

other/webAPI/canvas/rect

:::

| 方法 | 描述 |
| ---- | ----------- |
| fillRect(x, y, width, height) | 绘制一个填充的矩形 |
| clearRect(x, y, width, height) | 清除指定矩形区域，让清除部分完全透明 |
| strokeRect(x, y, width, height) | 绘制一个矩形的边框 |
| rect(x, y, width, height) | 绘制一个矩形 |

#### 路径

1. 创建路径起始点。
2. 使用画图命令去画出路径。
3. 通过描边或填充路径区域来渲染图形。

:::demo

other/webAPI/canvas/path

:::

| 方法 | 描述 |
| ---- | ----------- |
| beginPath() | 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。 |
| moveTo(x, y) | 将笔触移动到指定的坐标 x 以及 y 上。通常设置起点和绘制一些不连续的路径。 |
| lineTo(x, y) | 绘制一条从当前位置到指定 x 以及 y 位置的直线。 |
| arc(x, y, radius, startAngle, endAngle, anticlockwise) | 以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向（默认为顺时针）来生成。 |
| quadraticCurveTo(cp1x, cp1y, x, y) | 绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点。 |
| closePath() | 闭合路径之后图形绘制命令又重新指向到上下文中。 |
| stroke() | 通过线条来绘制图形轮廓。 |
| fill() | 通过填充路径的内容区域生成实心的图形。**所有没有闭合的形状都会自动闭合** |


#### Path2D对象
>返回一个新初始化的 Path2D 对象（可能将某一个路径作为变量——创建一个它的副本，或者将一个包含 SVG path 数据的字符串作为变量）

```js
new Path2D();     // 空的 Path 对象
new Path2D(path); // 克隆 Path 对象
new Path2D(d);    // 从 SVG 建立 Path 对象
```

:::demo

other/webAPI/canvas/path2D

:::

| 方法 | 描述 |
| ---- | ----------- |
| addPath(path [, transform]) | 添加一条新路径到对当前路径。`transform`可选 |
| closePath() | 使笔点返回到当前子路径的起始点。 |
| moveTo(),lineTo(),quadraticCurveTo(),arc(),rect() | 同canvas |


### 样式及颜色
#### 颜色
> 一旦您设置了 strokeStyle 或者 fillStyle 的值，那么这个新值就会成为新绘制的图形的默认值。如果你要给每个图形上不同的颜色，你需要重新设置 fillStyle 或 strokeStyle 的值。
:::demo

other/webAPI/canvas/color

:::
#### 线型

:::demo
other/webAPI/canvas/line
:::

| 属性 | 描述 | 默认值 |
| ----- |  ------------ | ----- |
| lineWidth | 设置线段宽度的数字。0、负数、 Infinity 和 NaN 会被忽略。  | - |
| lineCap | 绘制每一条线段末端的属性。`butt`方形结束、`round`以圆形结束、`square`以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。 | `butt` |
| lineJoin  | 设定线条与线条间接合处的样式。`round`圆角、`bevel`三角形为底的区域、`miter`延伸相连部分的外边缘，使其相交于一点 | `miter` |
| miterLimit | 交接处内角顶点到外角顶点的长度。**当`lineJoin="miter"`时有效** | - |
| getLineDash()  | 返回一个包含当前虚线样式，长度为非负偶数的数组。 | - |
| setLineDash(segments) | 设置当前虚线样式。`segments`数组描述交替绘制线段和间距（坐标空间单位）长度的数字。 | - |
| lineDashOffset  | 设置虚线样式的起始偏移量。 | 0.0 |

#### 渐变

| 方法 | 描述 |
| ---- | ----------- |
| createLinearGradient(x1, y1, x2, y2) | 表示渐变的起点 (x1,y1) 与终点 (x2,y2)。 |
| createRadialGradient(x1, y1, r1, x2, y2, r2) | 以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。 |
| gradient.addColorStop(position, color) | `position`0.0 ~ 1.0 之间的数值。 |

#### 阴影


| 属性 | 描述 | 默认值 |
| ---- | ----------- | --- |
| shadowOffsetX | 阴影在X轴的延伸距离 | 0 |
| shadowOffsetY | 阴影在y轴的延伸距离 | 0 |
| shadowBlur | 阴影的模糊程度 | 0 |
| shadowColor | 阴影颜色效果，默认是全透明的黑色。| - |

#### 填充规则
>根据某处在路径的外面或者里面来决定该处是否被填充，这对于自己与自己路径相交或者路径被嵌套的时候是有用的。`nonzero`默认值。
```js
ctx.fill("evenodd");
```
### 绘制文本

:::demo

other/webAPI/canvas/text

:::
> measureText()：返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。

| 属性 | 描述 | 默认值 |
| ----- |  ------------ | ----- |
| font | 绘制文本的样式。这个字符串使用和 CSS font 属性相同的语法。  | `10px sans-serif` |
| textAlign | 对齐选项。可选的值包括：`start`、`end`、`left`、 `right`、`center`。  | `start` |
| textBaseline | 基线对齐选项。可选的值包括：`top`、`hanging`、`middle`、`alphabetic`、`ideographic`、`bottom`   | `alphabetic` |
| direction | 文本方向。可能的值包括：`ltr`、`rtl`、`inherit` | `inherit` |

## webGL_API
> 绘制硬件加速的 2D 和 3D 图形。