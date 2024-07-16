---
title: storage
lang: zh-CN
outline: deep
---

# 存储
## localStorage sessionStorage
> 键值对总是以字符串的形式存储。 (需要注意，和 js 对象相比，键值对总是以字符串的形式存储意味着数值类型会自动转化为字符串类型)。存储大小为5MB，都保存在客户端，不与服务器进行交互通信，有相同的Web API

```javascript
localStorage.setItem('myCat', 'Tom');
let cat = localStorage.getItem('myCat');
localStorage.removeItem('myCat');
localStorage.clear();

sessionStorage.setItem('key', 'value');
let data = sessionStorage.getItem('key');
sessionStorage.removeItem('key');
sessionStorage.clear();
```
| api | 定义 |
| ------- | -------------------- |
| localStorage | 可以长期保存在浏览器会话中；浏览器窗口和选项卡间共享。 |
| sessionStorage | 1、页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。<br>2、页面被关闭时，存储在的数据会被清除。<br>3、独立于其他选项卡和窗口。<br>4、**在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文。** 类似于深拷贝，之后 sessionStorage 的变更不会同步。 |

## indexedDB
> 用于在客户端存储大量的结构化数据。执行的操作是异步执行。

:::demo
other/webAPI/storage/indexedDB
:::

### 打开数据库
* 如果数据库不存在，open 操作会创建该数据库，然后 onupgradeneeded 事件被触发，你需要在该事件的处理函数中创建数据库模式。
* 如果数据库已经存在，但指定了一个更高的数据库版本，会直接触发 onupgradeneeded 事件，允许你在处理函数中更新数据库模式。

```javascript
let db;
var request = window.indexedDB.open("MyData", version);
request.onerror = function(event) {
  alert("Database error: " + event.target.errorCode);
};
request.onsuccess = function(event) {
  // IDBDatabase 的实例
  db = event.target.result;
};
request.onupgradeneeded = function(event) {
  var db = event.target.result;
  // 判断是否存在，如果不存在为该数据库创建一个对象仓库
  if(db.objectStoreNames.contains('tableName')) {
    var objectStore = db.createObjectStore("tableName", { keyPath: "myKey", autoIncrement: false });
    // 创建索引； unique为 true，不允许重复的值(默认false)
    objectStore.createIndex('name', 'name', { unique: true });
  }
};
```
keyPath：主键；autoIncrement：是否自增，可以让 IndexedDB 自动生成主键。

### 事务
> 任何对于数据库数据的读取和修改操作只能在事务中进行。
```javascript
const transaction = db.transaction("tableName", ['readonly' | 'readwrite' | 'versionchange' ]);
// 通过事务对象去获取对象仓库
const objectStore = transaction.objectStore("tableName");
// 为 abort 添加监听
transaction.addEventListener("abort", () => {
  console.log("Transaction was aborted");
});
// 终止事务，显式的abort()调用。
transaction.abort();
```
设置事务的模式：`readonly`只读、`readwrite`读写、
`versionchange`修改数据库模式或结构时使用（包括新建或删除对象仓库或索引）。

### 添加数据
 
**数据是一个对象，且必须包含索引键值对**
```javascript
const request = objectStore.add({myKey: 'key', name: 'nameV'});
request.onsuccess = () => {
};
request.onerror = () => {
};
```
### 修改

**如果数据库中没有该条数据，则会默认增加该条数据，否则更新。**
```javascript
const request = objectStore.put({myKey: 'key', name: 'nameV1'});
request.onsuccess = () => {
};
request.onerror = () => {
};
```
### 查询
```javascript
// 通过主键获取数据
const request = objectStore.get('key');
// 通过索引查询数据
// const request = objectStore.index('name').get('nameV1');
request.onsuccess = (request) => {
  console.log("查询结果: ", request.result);
};
request.onerror = () => {
};
/* 游标
const requestCursor = objectStore.openCursor();
requestCursor.onsuccess = (e) => {
  const cursor = e.target.result;
  if (cursor){
    if(cursor.value.name === name) {
      // 查询数据
      cursor.value.data
      // 游标修改
      cursor.update(updateData);
      // 游标删除
      deleteRequest = cursor.delete();
    }
    cursor.continue();
  }
};
*/

```
### 删除数据
```javascript
// 通过主键删除数据
const request = objectStore.delete('key');
// 通过索引删除数据
// const request = objectStore.deleteIndex('createIndex').get('nameV1');
request.onsuccess = () => {
};
request.onerror = () => {
};
```
### 删除对象仓库
```javascript
const request = objectStore.clear();
request.onsuccess = () => {
};
request.onerror = () => {
};
```
7、关闭数据库
```javascript
db.close();
```
