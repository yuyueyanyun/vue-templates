---
title: algorithm
lang: zh-CN
outline: deep
---

# 算法

## 递归
> 函数中存在着调用函数本身的情况，这种现象就叫递归。

* 效率低、占用内存。有栈溢出的风险
```js
const factorial = (n) => {
  if (n === 1) {
    return n;
  }
  return (n * factorial(n - 1));
};
console.log(factorial(5)); // 120

/*
factorial(5)
5 * factorial(4)
5 * (4 * factorial(3))
5 * (4 * (3 * factorial(2)))
5 * (4 * (3 * (2 * factorial(1))))
5 * (4 * (3 * (2 * 1)))
120
*/
```

### 尾递归
* 引擎优化。计算仅占用常量栈空间
```js
const factorial = (n, x=1) => {
  if (n === 1) {
    return x;
  }
  return factorial(n-1, x * n);
};
console.log(factorial(5)); // 120

/*
factorial(5)
factorial(4, 5)
factorial(3, 20)
factorial(2, 60)
factorial(1, 120)
120
*/
```

## 函数缓存
> 将函数运算过的结果进行缓存，本质上就是用空间（缓存存储）换时间（计算过程）

如：如数据字典中的数据，第一次请求的时候全部拿过来保存在js对象中，以后需要的时候就不用每次都去请求服务器。

