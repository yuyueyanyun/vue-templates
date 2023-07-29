---
title: 使用键的集合对象
lang: zh-CN
---

# 使用键的集合对象
## Map
键值对的集合，Map中的一个键**只能出现一次**, 任何值（对象或者基本类型）都可以作为一个键或一个值。
```javascript
const map = new Map();
map.set('a', 1);
// const map = new Map([['a', '1']]);
map.delete('a');
```
```javascript
const map1 = new Map([['a', 1], ['b', 2]]);
map1.forEach((value, key) => {
  console.log(`${key}：${value}`);
});
// a：1  
// b：2
console.log(Array.from(map1, ([key, value]) => ({
  key,
  value,
})));
// [{key: 'a', value: 1}, {key: 'b', value: 2}]
```
合并 **如果有重复的键值，则后面的会覆盖前面**
```javascript
const first = new Map();
const second = new Map();
const merged = new Map([...first, ...second]);
```

|  实例   | 描述              |
| ------- | ---------------------------|
| Map.prototype.size | 键值对数量 |
| Map.prototype.clear() | 移除所有的键值对。 |
| Map.prototype.delete(`key`) | 移除 Map 对象中指定的键值对。返回Boolean |
| Map.prototype.get(`key`) | 返回指定键关联的值。若不存在返回`undefined` |
| Map.prototype.has(`key`) | 返回一个布尔值，表明是否存在。|
| Map.prototype.set(`key`, `value`) | 设置与指定的键 key 关联的值，并返回 Map 对象。|
| Map.prototype.keys() | 新的迭代对象，包含Map对象中所有的键 |
| Map.prototype.values() | 新的迭代对象，包含Map对象中所有的值 |
| Map.prototype.entries() | 新的迭代对象，键值对的 [key, value] 数组。 |
| Map.prototype.forEach() | 已插入顺序对键值分别调用一次。 |

## Set
允许存储任何类型的唯一值。（NaN 和 undefined 都可以被存储在 Set 中，NaN 之间被视为相同的值）

```javascript
const set = new Set();
set.add(1);
set.add(2);
// const set = new Set([1, 2]);
set.delete(1);
set.clear();
```
去重
```javascript
const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
console.log([...new Set(numbers)]);
// [2, 3, 4, 5, 6, 7, 32];
```
string
```javascript
let mySet = new Set('India');  // Set {'I', 'n', 'd', 'i', 'a'}
mySet.size;  // 5
```

|  实例   | 描述              |
| ------- | ---------------------------|
| Set.prototype.size | 值的个数 |
| Set.prototype.add(`value`) | 尾部添加一个元素，返还 Set 对象。 |
| Set.prototype.clear() | 移除所有元素。 |
| Set.prototype.delete(`key`) | 移除值为 `value` 的元素。返回Boolean |
| Set.prototype.has(`key`) | 返回一个布尔值，表明是否存在。|
| Set.prototype.keys() | 新的迭代对象。 |
| Set.prototype.values() | 新的迭代对象。与**keys()** 方法相同。 |
| Set.prototype.entries() | 新的迭代对象。 |
| Set.prototype.forEach() | 已插入顺序对键值分别调用一次。 |


## WeakMap WeakSet

```javascript
let mySet = new WeakMap();
```
* 键必须是对象： WeakMap() 会创建一个 WeakMap 对象，该对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。

* 弱引用：WeakMap保持了对键名所引用对象的弱引用，即垃圾回收机制不将该引用考虑在内。只要所引用的对象的其它引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap里面的键名对象和所对应的键值对会自动消失，不需要手动删除引用。

* 不可遍历：正因为WeakMap对键名引用的对象是弱引用关系 ，因此WeakMap内部成员是会取决于垃圾回收机制有没有执行，运行前后成员个数很可能是不一样的，而垃圾回收机制的执行又是不可预测的，因此不可遍历。

