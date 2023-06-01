---
title: mask
lang: zh-CN
---

# mask：掩膜
允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域。

:::demo

other/css/mask/demo

:::
## mask-image

> 引入的图片资源可以是.jpg、.png、.svg等, **linear-gradient生成的渐变也是一种图片**
```css
mask-image: url(masks.svg);
mask-image: image(url(mask.png), skyblue);
mask-image: image(url(mask.png), skyblue), linear-gradient(rgba(0, 0, 0, 1), transparent);
```

## mask-repeat

> 重复遮罩，作用效果同背景属性background-repeat类似
1、 repeat：默认值，表示重复
2、 repeat-x：表示在水平方向上重复
3、 repeat-y：表示在垂直方向上重复
4、 no-repeat：表示不重复
5、 space：表示平铺
6、 round：表示尽量靠在一起

```css
mask-repeat: repeat;
```

## mask-position

> 用于控制遮罩的作用位置；**如果只有一个关键字，则默认缺省的关键字为center**

```css
mask-position: top right;
```
## mask-clip
>  和background-clip的表现类似
* content-box、padding-box、border-box
* fill-box、stroke-box、view-box
* no-clip

```css
mask-clip: content-box;
```
## mask-origin
> 设置遮罩的起始位置
* content-box、border-box
* margin-box、padding-box
* fill-box、stroke-box、view-box

```css
mask-origin: content;
```
## mask-size
> 控制图片的尺寸
* contain 使图片完全适应元素区域，保证最短边能够完全显示，剩余部分会自动重复以填充，会保持图片原有宽高比
* cover：使图片完全覆盖背景区域，保证最长边能够完全填充元素区域，会保持图片原有宽高比
* auto：自适应
* 数值：%、em、px、rem
```css
mask-size: 50% auto;
```

## 详情

https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask
