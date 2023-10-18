---
title: CSS_layout
lang: zh-CN
outline: deep
---

# css布局

## normal(正常布局)
> 不对页面进行任何布局控制时，浏览器默认的 HTML 布局方式。
## float(浮动)
> 指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动（文档流）中移除。
```css
float: none;
```

| 值 | 描述 |
| ---- | ------------ |
| none | 不浮动 |
| left |  浮动在其所在的块容器左侧 |
| right | 浮动在其所在的块容器右侧 |
| inherit | 继承 |
| unset | 不浮动 |

### 高度坍塌。
1. 直接给父元素的设一个固定高度
> 一般布局不会写死高度
2. 需要清除浮动的父类添加overflow: hidden。
> 会隐藏子标签溢出部分的内容
3. 在需要清除浮动的下方添加一个空标签
> 增加额外无意义的标签，可读性和可维护性不好
```html
<div>
  <p>子元素<p>
  <div class='clear-fix' />
</div>
<style>
  .clear-fix {
    clear: both;
  }
</style>
```
4. 伪元素清除浮动
```html
<div class='clear-fix'>
  <p>子元素<p>
</div>
<style>
  .clear-fix::after {
    content: '';
    display: block;
    clear: both;
  }
</style>
```
5. 双伪元素清除浮动
```html
<div class='clear-fix'>
  <p>子元素<p>
</div>
<style>
  .clear-fix:before, .clear-fix:after {
    content: '';
    /* 防止边距塌缩，display: table;会创建一个新的块格式化上下文（Block Formatting Context, BFC）。 */
    display: table;
  }
  .clear-fix:after {
    clear: both;
  }
  .clear-fix {
    *zoom: 1
  }
</style>
```


## position(定位)
> 指定一个元素在文档中的定位方式。top，right，bottom 和 left 属性则决定了该元素的最终位置。

```css
position: static;
```

| 值 | 描述 |
| ---- | ------------ |
| static | 正常的布局行为 |
| relative | 不改变页面布局的前提下调整元素位置(未添加定位时所在位置留下空白) |
| absolute | 移出正常文档流，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。 |
| fixed | 移出正常文档流，相对于屏幕视口（viewport）的位置来指定元素位置。 |
| sticky | 正常文档流进行定位，然后相对它的最近滚动祖先。 |

## table(表格)

## flex(弹性盒子)
> 用于创建横向或是纵向的一维页面布局。
```css
display: flex;
```
### flex-direction
> 指定主轴的方向（弹性盒子子类放置的地方），默认值是 `row`。浏览器的默认语言方向排成一排，在英语/中文浏览器中是从左到右。
```css
flex-direction: row | row-reverse | column | column-reverse;
```
| 值 | 描述 |
| ---- | ------------ |
| row | 主轴被定义为与文本方向相同 |
| row-reverse |  和 row 相同，但是置换了主轴起点和主轴终点 |
| column | 主轴和块轴相同 |
| column-reverse | 和column相同，但是置换了主轴起点和主轴终点 |
 
### flex-wrap
> 元素单行显示还是多行显示。默认情况下，项目都排在一条线（又称”轴线”）上。
```css
flex-wrap: nowrap | wrap| wrap-reverse;
```

| 值 | 描述 |
| ---- | ------------ |
| nowrap | 一行展示，这可能导致 flex 容器溢出。**为该属性的默认值** |
| wrap |  被打断到多个行中。 |
| wrap-reverse | wrap 的行为一样，但是 cross-start 和 cross-end 互换。 |

### justify-content
> 项目在主轴上的对齐方式。
```css
justify-content: flex-start | flex-end | center | space-between | space-around;
```
| 值 | 描述 |
| ---- | ------------ |
| flex-start | 从行首起始位置开始排列 |
| flex-end |  从行尾位置开始排列 |
| center | 居中排列 |
| space-between | 均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点 |
| space-around | 均匀排列每个元素，每个元素周围分配相同的空间 |

### align-items
> 项目在交叉轴上如何对齐。初始值为`stretch`。
```css
align-items: flex-start | flex-end | center | baseline | stretch;
```
| 值 | 描述 |
| ---- | ------------ |
| stretch | 弹性项包含外边距的交叉轴尺寸被拉升至行高，占满整个容器的高度。 |
| flex-start | 交叉轴起点对齐 |
| flex-end |  交叉轴终点对齐 |
| center | 交叉轴的中点对齐 |
| baseline | 项目的第一行文字的基线对齐 |

### align-content
> 定义了多根轴线的对齐方式。**如果项目只有一根轴线，该属性不起作用**。
```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```
<ElRow>
  <img src="/images/css/flex_align_center.png" style="height: 400px;"/>
</ElRow>

### flex
> 简写属性设置了弹性项目如何增大或缩小以适应其弹性容器中可用的空间。
```css
flex: flex-grow flex-shrink flex-basis;
```
### flex-grow
>  flex 元素的收缩规则，值`<number>`默认为`0`。
### flex-shrink
> flex 项 主尺寸 的 flex 增长系数 ***（默认宽度之和大于容器的时候才会发生收缩）***，值`<number>`。
### flex-basis
> 主轴方向上的初始大小，默认为`auto`。

| 值 | 描述 |
| ---- | ----------- |
| <`width`> | 长度单位，可以是`相对于其父弹性盒容器主轴尺寸的百分数` |
| `content` | 基于 flex 的元素的内容自动调整大小。<br>`fill、content、 max-content、 min-content、 fit-content、inherit、initial、unset` |


## grid
```css
display: grid;
display: inline-grid;
```
### grid-template-columns、grid-template-rows
> 定义每一列的列宽，每一行的行高。
```css
display: grid;
grid-template-columns: 100px 100px 30%;
grid-template-rows: repeat(3, 1fr); /* 简化重复的值 */
```
#### auto-fill、auto-fit
> 单元格的大小是固定的，但是容器的大小不确定。
* auto-fill会用空格子填满剩余宽度
* auto-fit则会尽量扩大单元格的宽度

```css
grid-template-columns: repeat(auto-fill, 100px);
```
### gap
> `row-gap`和`column-gap`的缩写。行间距、列间距。
```css
gap: 20px  40px;
/* row-gap: 20px;
column-gap: 40px; */
```
### grid-template
> 简写属性： `grid-template-rows`、`grid-template-columns`、`grid-template-areas`
```css
grid-template: none;

grid-template: 100px 1fr / 50px 1fr;
/* 
grid-template-rows: 100px 1fr; 
grid-template-columns: 50px 1fr; 
*/

grid-template: "a a a" 20px
            "b c c" 30px
            "b c c" 40px / 1fr 1fr 1fr;
/*
grid-template-areas: "a a a" 
                    "b c c"
                    "b c c"; 
grid-template-rows: 20px 30px 40px;
grid-template-columns: repeat(3, 1fr);;
*/
```

### justify-items、align-items、place-items
> 值: start | end | center | stretch
```css
justify-items: start; /* 单元格内容的水平位置 */
align-items: center; /* 单元格内容的垂直位置 */
place-items: center start;  /* align-items 、justify-items简写 */
```
### justify-content、align-content、place-content
> 值: start | end | center | stretch | space-around | space-between | space-evenly;
```css
justify-content: start; /* 整个内容区域在容器里面的水平位置 */
align-content: center; /* 整个内容区域的垂直位置 */
place-content: center start;  /* align-content 、justify-content简写 */
```
### grid-auto-columns、grid-auto-rows
> 自动创建的多余网格的列宽和行高。它们的写法与grid-template-columns和grid-template-rows完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。
## multi-column(多列布局)

