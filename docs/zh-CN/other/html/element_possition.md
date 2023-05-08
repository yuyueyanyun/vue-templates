---
title: 获取页面元素位置
lang: zh-CN
---
# element
<ElRow>
  <img src="/images/html/position/position.jpg" style="height: 400px;"/>
</ElRow>

## client
<ElRow>
  <img src="/images/html/position/client.jpg" style="height: 300px;"/>
</ElRow>

|  属性   | 描述              |
| ------- | ---------------------------|
| clientWidth | 元素的宽度+元素左右的padding |
| clientHeight | 元素的高度+元素上下的padding |
| clientTop | 元素上边框的宽度 |
| clientLeft | 元素左边框的宽度 |

## offset
<ElRow>
  <img src="/images/html/position/offset.jpg" style="height: 300px;"/>
</ElRow>

|  属性   | 描述              |
| ------- | ---------------------------|
| offsetWidth | 元素的宽度+元素左右的padding+元素左右的border |
| offsetHeight | 元素的高度+元素上下的padding+元素上下的border |
| offsetLeft | 元素距离父元素左侧的距离 |
| offsetTop | 元素距离父元素上侧的距离 |

## scroll
<ElRow>
  <img src="/images/html/position/scroll.jpg" style="height: 300px;"/>
</ElRow>

|  属性   | 描述              |
| ------- | ---------------------------|
| scrollWidth | 元素的宽度+滚动条滚动的距离 |
| scrollHeight | 元素的高度+滚动条滚动的距离 |
| scrollTop | 上下滚动条滚动的距离（可以设置） |
| scrollLeft | 左右滚动条滚动的距离（可以设置） |

## 应用

:::demo 拖拽

other/html/element_possition/drap

:::