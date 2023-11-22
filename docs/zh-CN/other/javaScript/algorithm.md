---
title: algorithm
lang: zh-CN
outline: deep
---

# 算法

## 去重 
### filter、indexOf
```js
var deduped = [ 1, 1, 'a', 'a' ]
  .filter((el, i, arr) => arr.indexOf(el) === i);

console.log(deduped); // [ 1, 'a' ]
```
### Set
```js
var deduped = Array.from(new Set([ 1, 1, 'a', 'a', NaN, NaN ]) );

console.log(deduped); // [ 1, 'a', NaN ]
```
### 哈希表
> 当元素为对象(Object)

**哈希表在Javascript里是一个简单的Object，它的key永远是String类型。使用的JSON.stringify, 使key唯一**
```js
function dedup(arr) {
	var hashTable = {};

	return arr.filter(function (el) {
		var key = JSON.stringify(el);
		var match = Boolean(hashTable[key]);

		return (match ? false : hashTable[key] = true);
	});
}

var deduped = dedup([
	{ a: 1 },
	{ a: 1 },
	[ 1, 2 ],
	[ 1, 2 ]
]);

console.log(deduped); // [ {a: 1}, [1, 2] ]
```

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

```js
// n > 3
function A(n, [a, b]) {
  if (n === 3) {
    return a + b;
  }
  return A(n - 1, [b, a + b]);
}

A(n, [BigInt(1), BigInt(1)]).toString();
/* or
function addTwoNumbers(aStr, bStr) {
  const aArr = aStr.split('').reverse();
  const bArr = bStr.split('').reverse();
  const data = (aArr.length > bArr.length? aArr: bArr).reduce((prev, curr, index) => {
    const Arr = [...prev];
    const num = (aArr[index] ?? 0)*1 + (bArr[index] ?? 0)*1 + (Arr[index] ?? 0)*1;
    Arr[index] = num % 10;
    if(Math.floor(num / 10)) {
      Arr.push(Math.floor(num / 10));
    }
    return Arr;
  }, []);
  return data.reverse().join('');
}
// n > 3
function A(n, [a, b]) {
  if (n === 3) {
    return addTwoNumbers(a, b);
  }
  return A(n - 1, [b, addTwoNumbers(a, b)]);
}

A(n, ['1', '1']);
*/
```

## 函数缓存
> 将函数运算过的结果进行缓存，本质上就是用空间（缓存存储）换时间（计算过程）

如：如数据字典中的数据，第一次请求的时候全部拿过来保存在js对象中，以后需要的时候就不用每次都去请求服务器。

## 节流、防抖
### 节流
> 单位时间内事件只能触发一次，如果被频繁触发，那么节流函数会按照一定的频率来执行函数。
```js
/**
 * 节流
 * @param fn 需要进行处理的函数
 * @param interval 间隔时间
 * @param immediate 是否立即执行
 * @param trailing 最后一次是否执行
 */
function throttle(fn, interval, immediate = true, trailing = false) {
  // 记录上一次函数的执行时间
  let lastTime = 0;
  // 内部的控制是否立即执行的变量
  let isImmediate = true;
  // time 保存定时器的id
  let time = null;

  const _throttle = function (...args) {
    const nowTime = new Date().getTime();
    // 第一次不需要立即执行
    if (!immediate && isImmediate) {
      // 这样就不会导致第一次时remainTime大于interval
      lastTime = nowTime;
      // 不会对后续的lastTime产生影响。
      isImmediate = false;
    }

    // 间隔时间
    const remainTime = nowTime - lastTime;
    // 如果间隔时间大于指定间隔时间，执行函数
    if (remainTime - interval >= 0) {
      fn.apply(this, args);
      // 将上一次函数执行的时间设置为nowTime，这样下次才能重新进入cd
      lastTime = nowTime;
    }

    if (remainTime < interval) {
      // 判断是否存在定时器，如果存在则取消掉
      if (time) clearTimeout(time);

      // 设置定时器
      time = setTimeout(() => {
        // 判断是否最后一次需要执行
        if (trailing) {
          // 最后一次需要执行
          fn.apply(this, args);
        }
        // 由于该定时器，会在没有事件触发的interval时间间隔后才会执行，也就是说一轮事件
        // 执行已经结束，使用需要将isImmediate复原，这样下一轮事件的第一次事件就不会立即执行了。
        isImmediate = true;
      }, interval);
    }
  };
  // 返回_throttle函数
  return _throttle;
}
```


### 防抖
> 函数的执行延迟一定时间，如果在该时间内重新触发事件，那么延迟的时间会重置，只有真正达到延迟时间，才会执行回调函数。***实现防抖函数的核心是使用setTimeout***
``` js
/**
 * 防抖
 * @param fn 需要进行防抖处理的函数
 * @param delay 延迟时间
 * @param immediate 是否立即执行
 * @param cb 回调函数，将结果以参数传递出去
 */
function debounce(fn, delay = 1000, immediate = false, cb) {
  // 保存setTimeout返回的Id
  let time = null
  // 记录是否立即执行
  let isImmediateInvoke = false

  function _debounce(...args) {
    // 存在定时器，则清除定时器
    if (time !== null) {
      clearTimeout(time)
    }

    // 第一次触发，且需要触发第一次事件
    if (!isImmediateInvoke && immediate) {
      // 将函数的返回值保存到result中
      const result = fn.apply(this, args)
      if (typeof cb === 'function') {
        // 结果以参数传递出去。
        cb(result)
      }
      isImmediateInvoke = true;
    }
    time = setTimeout(() => {
      fn.apply(this, args)
      // 设置为false，下次的第一次触发事件能被立即执行
      isImmediateInvoke = false
    }, delay)
  }
  // 返回真正被调用的函数
  return _debounce
}
```

**应用场景：**
* 输入框频繁输入内容，搜索或者提交信息。
* 频繁点击按钮，触发某个事件。
* 监听浏览器滚动事件。
* 监听用户缩放浏览器resize事件。