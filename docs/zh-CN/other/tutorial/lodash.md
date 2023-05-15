---
title: lodash
lang: zh-CN
---

# lodash
Lodash 中文文档：https://www.lodashjs.com/
<br>
Lodash 英文文档：https://lodash.com/
> 是一个一致性、模块化、高性能的 JavaScript 实用工具库。通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。 Lodash 的模块化方法 非常适用于：
* 遍历 array、object 和 string
* 对值进行操作和检测
* 创建符合功能的函数

## 安装
* 浏览器环境：
```html
<script src="lodash.js"></script>
```
* npm
```
npm i -g npm
or
npm i --save lodash
```
## 函数(Function)

| 函数 |  说明 |
| ---- |  ----------------- |
| debounced | （防抖动）函数 |
| throttle |  节流函数 |

## 语言(Lang)

| 语言 |  说明 |
| ---- |  ----------------- |
| clone | 浅拷贝 |
| cloneDeep |  深拷贝 |
| cloneWith | 类似`clone`，除了它接受一个 customizer 定制返回的克隆值|
| cloneDeepWith | 类似`cloneWith`，递归克隆|
| isEqual | 深比较来确定两者的值是否相等 |