---
title: base
lang: zh-CN
---

# 基础
## 选择器
[CSS 选择器参考手册](https://www.w3school.com.cn/cssref/css_selectors.asp)
| 选择器 | 例子 | 描述 |
| ----- | --------| ------------------------|
| :has() | h1:has(+ p) | 紧跟\<p\>元素的\<h1\>元素 |
| :is() | :is(section, article) h1| \<section\>或\<article\>下的\<h1\> |
> :not()、 :empty()等，[查看详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:empty)
## 函数

| 值 | 描述 |
| ----- | ------------------------|
| calc() | 数学表达式。结果会用作属性值。可使用如下运算符：+ - * / |
| max()、min() | 逗号分隔的值列表 - 在其中选择最大值/最小值。 |
| @property | [查看](./property.html#property) |
| var() | 使用自定义属性 |
