---
title: print
lang: zh-CN
---

# print 打印
> 打开打印对话框打印当前文档

```js
window.print()
```
:::demo
other/webAPI/print/demo
:::
## onbeforeprint
>页面即将打印时触发 (在打印窗口出现前)。


## onafterprint
>在页面打印后执行

## 样式控制
```css
@media print {
  @page {
    margin-bottom: 0;
    // 默认landscape
    size: auto | portrait | landscape | [length] | [page-size];
  }
  /* 所有偶数的页面 */
  @page :left {
    margin-top: 4cm;
  }
  /* 所有奇数的页面 */
  @page :right {
    size: 1cm;
  }
}
```
| 名 | 描述 |
| ----- | ------------ |
| auto | 用户代理决定页面的大小。 |
| portrait | 横向模式 |
| portrait | 纵向模式 |
| [length] | 宽高。如果只提供一个值，则宽=高。size: 4in 6in;|
| [page-size] | `A5` `A4` `A3`...。 size: A4 portrait; |

