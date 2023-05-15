---
title: day.js
lang: zh-CN
---

# day.js
day.js 中文文档：https://dayjs.gitee.io/zh-CN/
<br>
day.js 英文文档：https://day.js.org/
> 是一个轻量的处理时间和日期的 JavaScript 库，和 Moment.js 的 API 设计保持完全一样。**Moment.js 的 2kB 轻量化方案**

## 安装
* 浏览器环境：
```html
<script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script>
<script>
  dayjs().format()
</script>
```
* npm
```
npm install dayjs
```
```javascript
const dayjs = require('dayjs') // cjs
import dayjs from 'dayjs' // mjs
dayjs().format()
```
## 当前时间
```javascript
var now = dayjs()
or 
dayjs(new Date())
```
## 格式化。
```javascript
// 默认返回的是 ISO8601 格式字符串 '2020-04-02T08:02:17-05:00'
dayjs().format() 
// '25/01/2019'
dayjs('2019-01-25').format('DD/MM/YYYY')
```

| 占位符 | 详情 |
| -------| ---------|
| YY | 两位数的年份 |
| YYYY | 四位数的年份 |
| M | 1-12，月份，从 1 开始 |
| MM | 01-12， 月份，两位数 |
| D | 1-31， 月份里的一天 |
| DD | 01-31， 月份里的一天，两位数 |
| d | 0-6，一周中的一天，星期天是 0 |
| H | 0-23，小时|
| HH | 00-23，小时|
| m | 0-59，分钟|
| mm | 00-59，分钟|
| s | 0-59，秒|
| ss | 0-59，秒|

## 操作
支持单位`year``month``week``date``day``hour``minute``second`,
* add
> 返回增加一定时间的复制的 Day.js 对象。
```javascript
dayjs().add(7, 'day')
```
* subtract
> 返回减去一定时间的复制的 Day.js 对象。
```javascript
dayjs().subtract(7, 'year')
```
* startOf
> 返回复制的 Day.js 对象，并设置到一个时间的开始
```javascript
dayjs().startOf('day')
```
* endOf
> 返回复制的 Day.js 对象，并设置到一个时间的末尾。
```javascript
dayjs().endOf('day')
```
## 时间比较
支持单位`year``month``week``date``day``hour``minute``second`,
不传默认毫秒。

* isBefore
> 是否在另一个提供的日期时间之前。
```javascript
dayjs().isBefore(dayjs('2011-01-01'))
dayjs().isBefore(dayjs('2011-01-01'), 'year')
```
* isSame
> 是否和另一个提供的日期时间相同。使用同`isBefore`

* isAfter
> 是否在另一个提供的日期时间之后。使用同`isBefore`

* isSameOrBefore
> 是否和另一个提供的日期时间相同或在其之前。
```javascript
dayjs().isSameOrBefore(dayjs('2011-01-01'))
dayjs().isSameOrBefore(dayjs('2011-01-01'), 'year')
```
* isSameOrAfter
> 是否和另一个提供的日期时间相同或在其之前。使用同`isSameOrBefore`

* isSameOrBefore
> 是否在其他两个的日期时间之间。
```javascript
dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25')) 
dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25'), 'year') 
```

