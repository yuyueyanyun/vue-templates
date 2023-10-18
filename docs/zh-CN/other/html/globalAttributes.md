---
title: globalAttributes
lang: zh-CN
outline: deep
---

# 全局属性
> 所有 HTML 元素共有的属性；可以用于所有元素，即使属性可能对某些元素不起作用。

## contenteditable 
> 是否可被用户编辑，启用了的会触发 input 事件。

* true 或空字符串，表示元素是可编辑的。
* false 表示元素不是可编辑的。
```html
<div contenteditable='true'></div> 
<!-- 没有设置该属性的值，被视为空字符串 -->
<div 
  contenteditable
  oninput="handleInput()"
></div> 
<script>
const handleInput = () => {
  console.log(event.target.innerText);
}
</script>
```
## data-*
> 自定义数据属性的属性，在所有 HTML 元素上嵌入自定义数据属性，并可以通过脚本在 HTML 与 DOM 表现之间进行专有数据的交换。

```html
<style>
  div[data-id]{
    position: relative;
    width: 100px;
  }
  /* or */
  div[data-id='999']{
    position: relative;
    width: 100px;
  }
  div::after {
    content: attr(data-id);
    position: absolute;
    top: -22px;
    left: 10px;
    background: black;
    color: white;
    padding: 2px;
    border: 1px solid #eee;
  }
</style>
<div id='div' data-id='999'></div>
<script>
  const div = document.getElementById("div");
  //获取自定义的值
  const myId = div.getAttribute("data-id"); // 999
  const data = div.dataset.id; // 999
  //设置自定义的值
  div.setAttribute("data-val","Hello")
</script>
```