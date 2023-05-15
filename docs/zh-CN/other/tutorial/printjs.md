---
title: printjs
lang: zh-CN
---

# printjs
[git地址](https://github.com/crabbly/print.js)
* 安装
```
npm install print-js --save
or
yarn add print-js
```
* 引入
```javascript
import printJS from 'print-js'
```

## 使用
```javascript
printJS({
  type: 'html',
  printable: 'elememtId',
  targetStyles: ['*'],
  scanStyles: false,
  style: printStyle,
})
```
| 属性 | 描述 | 默认 |
| ----- | ------------- | --- |
| type | 打印文档类型 `pdf` `html` `image` `json` | `pdf` |
| printable | 文档来源:pdf或图像url, html元素id或json数据对象。| null |
| targetStyles | 处理任意范围的样式。 `*`所有样式 | null |
| targetStyles | 是否应用打印的html的样式。在使用css参数时非常有用。 | null |
| style | 自定义样式的字符串，该字符串应该应用于正在打印的html | null |