---
title: property
lang: zh-CN
---

# 自定义属性
进行属性类型检查、设定默认值以及定义该自定义属性是否可以被继承。

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```
[示例](./transition.html#过渡)

| 值    | 描述                |
| ------- | --------------------------- |
| syntax | 类型string。定义自定义属性的类型。<br>` length \| number \| percentage \| length-percentage \| color \| image \| url \| integer \| angle \| time \| resolution \| transform-list \| transform-function \| custom-ident (a custom identifier string) `|
| inherits | 类型boolean。定义自定义属性是否允许继承 |
| initial-value | 类型符合syntax定义的类型，定义初始值 |

