---
title: scroll
lang: zh-CN
---

# 滚动 scroll
* scrollTo：滚动到目标位置
* scrollBy：相对当前位置滚动
* scrollIntoView：让元素滚动到视野内
* scrollIntoViewIfNeeded：让元素滚动到视野内（如果不在视野内）**非标准，慎用**

:::demo
other/webAPI/scroll/demo
:::

::: warning scrollIntoView
表现是当内部的内容发生滚动时，主页面也发生了滚动。<br>
**解决方式：**
```javascript
scrollIntoView({
   behavior: 'smooth', block: 'nearest', inline: 'start' 
})
```
支持参数：<br>
element.scrollIntoView(alignToTop: boolean);<br>
1、true：元素的顶端将和其所在滚动区的可视区域的顶端对齐。相应的 scrollIntoViewOptions: {block: "start", inline: "nearest"}。这是这个参数的默认值。<br>
2、false：元素的底端将和其所在滚动区的可视区域的底端对齐。相应的 scrollIntoViewOptions: {block: "end", inline: "nearest"}。<br>
element.scrollIntoView(scrollIntoViewOptions: object);
| 属性 | 描述 | 是否必填 | 默认值 |
| ----- | ----------------- | ---- | ----- |
| behavior | 动画过渡效果 `auto``smooth` | false | 'auto' |
| block | 垂直方向的对齐 `start``center``end``nearest` | false | 'start' |
| inline | 水平方向的对齐 `start``center``end``nearest`<br>1、如果您当前位于其祖先的下方，则元素在其祖先的顶部对齐。2、如果您当前位于其祖先之上，则元素在其祖先的底部对齐。3、如果它已经在视图中，保持原样。 | false | 'nearest' |
:::
