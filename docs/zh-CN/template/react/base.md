---
title: react
lang: zh-CN
outline: deep
---

# react
> 把 App 组件作为 root 或者第一个组件来渲染我们的 React App。

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
);

```
## UI
### jsx
* 只能返回一个根元素 
* 标签必须闭合
* 使用驼峰式命名法 **不能包含 `-` 符号或者像 `class` 这样的保留字。**
```jsx
export default function TodoList() {
  return (
  <>
    <h1>待办事项</h1>
    <ul>
      <li>发明一种新式交通信号灯</li>
      <li>排练一个电影场景</li>
      <li>改进频谱技术</li>
    </ul>
  </>
  );
}

```

### props
> 父组件都可以提供 props 给它的子组件，从而将一些信息传递给它。

```tsx
import React, { useState, ReactNode } from 'react';
// 定义 Props 类型
interface ChildComponentProps {
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  title: string;
  children: ReactNode;
}

// 子组件
const Child:React.FC<ChildComponentProps> = ({ setHeight, title, children }) => {
  setHeight(60);

  return (<div>
    <h3>{ title }</h3>
    { children }
  </div>);
};
// 父组件
const Parent = () => {
  const [height, setHeight] = useState(0);
  return (<Child setHeight={setHeight} title='头'>
    <p style={{ height: height + 'xp' }}>传递组件{ height }</p>
  </Child>);
};

```

### 条件渲染
> 可以通过使用 JavaScript 的 if 语句、&& 和 ? : 运算符来选择性地渲染 JSX。
```jsx
import React, { useState, ReactNode } from 'react';

const Item = ({isPacked, name}) => {
  return (<li className="item">
      {isPacked ? (
        <del>
          {name}
        </del>
      ) : (
        name
      )}
    </li>);
};
```
**如果不想有任何东西进行渲染。比如，你不想显示已经打包好的物品。但一个组件必须返回一些东西。这种情况下，可以直接返回 null。**

### 渲染列表
```jsx
const people = ['xxx', 'ccc'];
const List = () => {
  const listItems = people.map((person, index) =>
    <li  key={index}>{person}</li>
  );
  return <ul>{listItems}</ul>;
};

// or
const List1 = () => <ul>{
  people.map((person, index) =>
    <li key={index}>{person}</li>
  )
}</ul>;
```

### \<Suspense\>
> 允许在子组件完成加载前展示一个 fallback。
```jsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```
## 交互
### 事件
> React 合成事件（SyntheticEvent）是 React 模拟原生 DOM 事件所有能力的一个事件对象，即浏览器原生事件的跨浏览器包装器。它根据 W3C 规范 来定义合成事件，兼容所有浏览器，拥有与浏览器原生事件相同的接口。

比如 click事件合成为onClick事件。blur , change , input , keydown , keyup等 , 合成为onChange。但可以通过 e.nativeEvent 属性获取 DOM 事件。

```jsx
const handleClick = () => {}
// XXX: 原生事件
<button onclick="handleClick">点击</button>

// XXX: 合成事件 
<button onClick={handleClick}>点击</button>

// or
<button onClick={() => alert('...')}>点击</button>
```

### 事件传播
```jsx
// 阻止冒泡
<button onClick={e => e.stopPropagation()}></button>

// 捕获 在事件名称末尾添加 Capture 来实现
<div onClickCapture={() => { /* 这会首先执行 */ }}>
  <button onClick={e => e.stopPropagation()} />
</div>

// 阻止默认行为
<form onSubmit={e => {
  e.preventDefault();
  alert('提交表单！');
}}>
  <input />
  <button>发送</button>
</form>
```
### state
> State 变量 用于保存渲染间的数据。<br />State `setter` 函数 更新变量并触发 React 再次渲染组件。**state 中可以保存任意类型的 JavaScript 值**
```jsx
import { useState } from 'react';

const Comp = () => {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1); // 1
    setIndex(index + 1); // 1
  }

  return (
    <>
      <button onClick={handleClick}> + </button>
      <h2>
        index {index + 1}
      </h2>
    </>
  );
}; 
```
**一个 state 变量的值永远不会在一次渲染的内部发生变化， 即使其事件处理函数的代码是异步的。**
* 将 React 中所有的 state 都视为不可直接修改的。
* 当你在 state 中存放对象时，直接修改对象并不会触发重渲染，并会改变前一次渲染**快照**中 state 的值。
* 不要直接修改一个对象、数组，而要为它创建一个**新拷贝**，然后使用新的对象、数组来更新它的状态。

#### 更新加入队列
> 有时可能会希望在下次渲染加入队列之前对 state 的值执行多次操作。
```jsx
import { useState } from 'react';

const Comp = () => {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1); // 1
    setIndex(n => n + 1); // 2
  }

  return (
    <>
      <button onClick={handleClick}> + </button>
      <h2>
        index {index + 1}
      </h2>
    </>
  );
}; 
```
setIndex(n => n + 1)：n => n + 1 是一个函数。React 将它加入队列。
***更新函数会在渲染期间执行，因此 更新函数必须是 **纯函数** 并且只 **返回 结果**。不要尝试从它们内部设置 state 或者执行其他副作用。***

* 设置 state 不会更改现有渲染中的变量，但会请求一次新的渲染。
* React 会在事件处理函数执行完成之后处理 state 更新。这被称为批处理。
* 要在一个事件中多次更新某些 state，你可以使用 setNumber(n => n + 1) 更新函数。

#### 使用 Immer 编写简洁的更新逻辑 

> 如果 state 有多层的嵌套，或许应该考虑 将其扁平化。但是，如果不想改变 state 的数据结构，可能更喜欢用一种更便捷的方式来实现嵌套展开的效果。Immer 是一个非常流行的库，它可以让你使用简便但可以直接修改的语法编写代码，并会帮你处理好复制的过程。通过使用 Immer，你写出的代码看起来就像是你“打破了规则”而直接修改了对象：
```js
import { useImmer } from 'use-immer';
updatePerson(draft => {
  draft.artwork.city = 'Lagos';
});

const [myList, updateMyList] = useImmer(
  initialList
);
updateMyList(draft => {
  const artwork = draft.find(a => a.id === artworkId);
  artwork.seen = nextSeen;
});
```

## 状态管理
### reducer
> 将组件的所有状态更新逻辑整合到一个外部函数中。***当状态更新逻辑足够简单时，useState 的可读性还行。但是，一旦逻辑变得复杂起来，它们会使组件变得臃肿且难以阅读。在这种情况下，useReducer 允许你将状态更新逻辑与事件处理程序分离开来。***

```tsx
import { useReducer } from 'react';

interface List {id: number}

let id = 1;
const tasksReducer = (lists: List[], action: { type: string; id: number; }) => {
  switch (action.type) {
  case 'add': {
    return [
      ...lists,
      {
        id: action.id,
      },
    ];
  }
  case 'del': {
    return lists.filter((t) => t.id !== action.id);
  }
  default: {
    throw Error('未知 action：' + action.type);
  }
  }
};
const App = () => {
  const [lists, dispatch] = useReducer(tasksReducer, [{ id: id }]);
  const handleAdd = () => {
    dispatch({
      type: 'add',
      id: ++id,
    });
  };
  const handleDel = (item: List) => {
    dispatch({
      type: 'del',
      id: item.id,
    });
  };
  return (
    <>
      <button onClick={handleAdd}>新 增</button>
      <ul>
        {lists.map((item) => <li key={item.id}>{item.id}
          <button onClick={() => handleDel(item)}>删除</button>
        </li>)}
      </ul>
    </>
  );
};
```

#### 使用 Immer 简化 reducers 

> 让你可以通过 push 或 arr[i] = 来修改 state ：
```js
import { useImmerReducer } from 'use-immer';
```

### Context 深层传递
> 如果你须通过许多中间组件向下传递 props，或是在你应用中的许多组件需要相同的信息，传递 props 会变的十分冗长和不便。Context 允许父组件向其下层无论多深的任何组件提供信息。
```jsx
import {useContext, createContext } from 'react';

const LevelContext = createContext(1);

function Heading({ children }) {
  const level = useContext(LevelContext);
  // ...
}
function Section() {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        <Heading>子子标题</Heading>
      </LevelContext.Provider>
    </section>
  );
}
```

***由于 `context` 让你可以从上层的组件读取信息，每个 Section 都会从上层的 Section 读取 level，并自动向下层传递 level + 1。***

### Reducer 和 Context 结合使用

> 共同管理一个复杂页面的状态。避免通过 props 传递 state 和 dispatch

## 应急方案

### ref

> 组件需要存储一些值，但不影响渲染逻辑。

#### 引用值

```js
import { useRef } from 'react';

const Counter = () => {
  const countRef = useRef(0);
  function handleClick() {
    // 不会重新渲染组件！
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }
  return (
    <button onClick={handleClick}>
      {/* 不跟新，依然展示0 */}
        你点击了 {countRef.current} 次
    </button>
  );
};

```

#### DOM

> 当 React 为这个 `<div />` 创建一个 DOM 节点时，React 会把对该节点的引用放入 `XXX.current`。然后，你可以从 事件处理器 访问此 DOM 节点，并使用在其上定义的内置浏览器 API。

```js
import { useRef } from 'react';

function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        聚焦输入框
      </button>
    </>
  );
}
```
> 如果将 ref 放在 `自己的` 组件上，例如 `<MyInput />`，默认情况下你会得到 null。

**想要 暴露其 DOM 节点的组件使用`forwardRef`API。应该谨慎使用。手动操作 另一个 组件的 DOM 节点会使你的代码更加脆弱。**
```js
import { 
  forwardRef, useRef，
  useImperativeHandle, 
} from 'react';

// 暴露了原始的 DOM 元素 input。
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
// 限制暴露 只能使用focus()
const MyInput1 = forwardRef((props, ref) => {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));
  return <input {...props} ref={realInputRef} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        聚焦输入框
      </button>
    </>
  );
}
```
**避免通过`ref`更改由 React 管理的 DOM 节点**

### Effect 
> Effect 通常用于暂时“跳出” React 代码并与一些 外部 系统进行同步。这包括浏览器 API、第三方小部件，以及网络等等。

```js 
import { useEffect } from 'react';
function MyComponent() {
  useEffect(() => {
    // 会把这段代码放到屏幕更新渲染之后执行。
  });
  return <div />;
}
```
#### 指定 Effect 依赖
> Effect 会在 每次 渲染时执行。但更多时候，并不需要每次渲染的时候都执行 Effect。
```js 
import {useState, useEffect } from 'react';
function MyComponent() {
 const [flag, setFlag] = useState(false);
  useEffect(() => {
    if(flag) {
      ...
    }
  }, [flag]);
  return <div />;
}
```
* 指定 [flag] 会告诉 React，如果 flag 在上一次渲染时与当前相同，它应该跳过重新运行 Effect。
* 指定`空数组[]`，代码只会在组件挂载后执行
* 不指定，代码会在每次渲染后执行

#### 按需添加清理（cleanup）函数 
* 如果 Effect 订阅了某些事件，清理函数应该退订这些事件
```js
useEffect(() => {
  function handleScroll(e) {
    console.log(window.scrollX, window.scrollY);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```
### useEffectEvent 
> 实验性API，特殊的 Hook 从 Effect 中提取非响应式逻辑：

```js
function Page({ url }) {
  const { items } = useContext(ShoppingCartContext);
  const numberOfItems = items.length;

  // 非响应的
  const onVisit = useEffectEvent(visitedUrl => {
    logVisit(visitedUrl, numberOfItems);
  });

  useEffect(() => {
    onVisit(url);
  }, [url]); // 声明所有依赖项
  // ...
}
```