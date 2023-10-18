---
title: vue3
lang: zh-CN
outline: deep
---

# vue
* vue2通过Object.defineProperty的get，set来进行数据劫持，修改。所以只能捕获到属性读取和修改操作，当 新增、删除属性时，捕获不到，导致界面也不会更新。
* vue3中的响应式，我们用到的[Proxy](../../other/javaScript//reflection.md)

## 校验

[eslint-plugin-vue](https://eslint.vuejs.org/)

## 通用
### 应用实例
```js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 注册一个选项对象
app.component('my-component', {
  /* ... */
})
app.directive('color', (el, binding) => {
  // 这会在 `mounted` 和 `updated` 时都调用
  el.style.color = binding.value
})
```
| 属性 | 描述 | 参数 |
| --- | ----------- | ---- |
| app.mount('#app') | 将应用实例挂载在一个容器元素中。| DOM 元素或一个 CSS 选择器 |
| app.component(name, Component?) | 同时传递一个组件名字符串及其定义，则注册一个全局组件；<br>如果只传递一个名字，则会返回用该名字注册的组件 (如果存在的话)。 | string, Component  |
| app.directive(name, Directive?) | 同时传递一个名字和一个指令定义，则注册一个全局指令；<br>如果只传递一个名字，则会返回用该名字注册的指令 (如果存在的话)。 | string, Directive |

### 自定义指令
> **当应用到一个多根组件时，指令将会被忽略且抛出一个警告。**
* 非语法糖
```js
export default {
  setup() {
    /*...*/
  },
  directives: {
    // 在模板中启用 v-focus
    focus: {
      /* ... */
    }
  }
}
```
* 语法糖 ***任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令。***
```vue
<script setup>
const vFocus = {
  mounted: (el) => el.focus()
}
</script>
<template>
  <input v-focus />
</template>
```

#### 指令钩子
```js
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {},
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}
```

### nextTick
> 等待下一次 DOM 更新刷新的工具方法。

利用 Promise 或 queueMicrotask 创建一个微任务，在[微任务](../../other/javaScript//task.md#微任务)队列中执行回调函数。这样可以确保回调函数在 DOM 更新循环结束后执行，以避免访问更新后的 DOM。
```ts
const resolvedPromise = /*#__PURE__*/ Promise.resolve() as Promise<any>
let currentFlushPromise: Promise<void> | null = null

export function nextTick<T = void>(
  this: T,
  fn?: (this: T) => void
): Promise<void> {
  const p = currentFlushPromise || resolvedPromise
  return fn ? p.then(this ? fn.bind(this) : fn) : p
}

```
***推荐使用 queueMicrotask 替代 nextTick。***
使用 promise 创建微任务时，由回调抛出的异常被报告为 rejected promises 而不是标准异常。同时，创建和销毁 promise 带来了事件和内存方面的额外开销。
## 组合式API
### setup
> setup函数是 Composition API（组合API）的入口
在setup函数中定义的变量和方法最后都是需要 **return** 出去 不然无法在模板中使用


```js
<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      count
    }
  },
  mounted() {
    console.log(this.count) // 0
  }
}
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```
***唯一可以使用 async setup() 的情况是，该组件是 `Suspense` 组件的后裔。***

### 响应式
#### ref、reactive
* `ref`  对象是可更改的，可以为 .value 赋予新的值。将一个对象赋值给 `ref`，那么这个对象将通过 `reactive` 转为具有深层次响应式的对象。
* `reactive`一个对象的深层响应式代理。
```js
const count = ref(0)
console.log(count.value)

const obj = reactive({ count: 0 })
obj.count++
```

#### shallowRef、shallowReactive
> `shallowRef`是`ref` 的浅层作用形式，不会被深层递归地转为响应式，只有对 .value 的访问是响应式的。
`shallowReactive`是`reactive`的浅层作用形式。
```js
const state = shallowRef({ count: 1 })
// 不会触发更改
state.value.count = 2
// 会触发更改
state.value = { count: 2 }

const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})
// 更改状态自身的属性是响应式的
state.foo++
// 不是响应式的，下层嵌套对象不会被转为响应式
state.nested.bar++
```
#### computed、watch、watchEffect
* computed
```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

```
* watch

```
watch(source, callback, options)
```
```js
watch(a,(new, old)=>{
  // ...
})
watch([a, b],([newA, newB], [oldA, oldB])=>{
  // ...
})
```
**当使用 getter 函数作为源时，回调只在此函数的返回值变化时才会触发。使用`{ deep: true }` 强制侦听器进入深层级模式。**
```js
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)
watch(
  () => state,
  (newValue, oldValue) => {
    // newValue === oldValue
  },
  { deep: true }
)
// 当直接侦听一个响应式对象时，侦听器会自动启用深层模式：
watch(state, () => {
  /* 深层级变更状态所触发的回调 */
})
```

|参数 | 描述 |
| ----- | ------------ |
| source | 侦听器的源：1、一个函数，返回一个值 <br>2、一个 ref<br>3、一个响应式对象<br> 4、由以上类型的值组成的数组 |
| callback | 发生变化时要调用的回调函数。（new, old, onCleanup）新值、旧值，以及一个用于注册副作用清理的回调函数。 |
| options | 选项对象: `immediate`立即触发，`deep`强制深度遍历， `flush: 'post'`刷新时机，能访问更新之后的 DOM，`onTrack，onTrigger` 调试侦听器的依赖。|

* watchEffect
> 自动默认开启了`immediate:true`，watchEffect有点像computed，里面的值发生了改变就调用一次，computed要写返回值,而watchEffect不用写返回值。
```
watchEffect((onCleanup) => {}, options)
```
```js
const count = ref(0)
watchEffect(() => console.log(count.value))
```
|参数 | 描述 |
| ----- | ------------ |
| effect | 运行的副作用函数, 副作用函数的参数也是一个函数，用来注册清理回调。清理回调会在该副作用下一次执行前被调用 |
| options | 选项对象: `flush`,`onTrack`，`onTrigger` 同watch|

#### triggerRef
> 强制触发依赖于一个浅层 ref 的副作用，这通常在对浅引用的内部值进行深度变更后使用。
```js
const shallow = shallowRef({
  greet: 'Hello, world'
})

// 触发该副作用第一次应该会打印 "Hello, world"
watchEffect(() => {
  console.log(shallow.value.greet)
})

shallow.value.greet = 'Hello, universe' // 这次变更不应触发副作用，因为这个 ref 是浅层的

triggerRef(shallow) // 打印 "Hello, universe"
```
#### unref, toRaw

* unref: 如果参数是 ref，则返回内部值，否则返回参数本身。`val = isRef(val) ? val.value : val`
```ts
function useFoo(x: number | Ref<number>) {
  const unwrapped = unref(x)
  // unwrapped 现在保证为 number 类型
}
```
* toRaw: 根据一个 Vue 创建的代理返回其原始对象。

可以返回由 reactive()、readonly()、shallowReactive() 或者 shallowReadonly() 创建的代理对应的原始对象。
```js
const foo = {}
const reactiveFoo = reactive(foo)

console.log(toRaw(reactiveFoo) === foo) // true
```

### props() 和 emits()
#### 组合式
```js
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  name: {
    // 自定义类型校验函数
    validator(value) {
      return typeof value === 'string'
    }
  }
})

const emits = defineEmits({
  'update:modelValue': null,
  // 具有验证函数
  'change': (val)=> typeof val === 'string'
})
const emit = defineEmits(['update:modelValue', 'change'])
```
#### 选项式
```js
export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    name: {
      // 自定义类型校验函数
      validator(value) {
        return typeof value === 'string'
      }
    }
  },
  emits: {
    // 没有验证函数
    'update:modelValue': null,
    // 具有验证函数
    'change': (val) => {
      return typeof value === 'string'
    },
  }
}
```

### defineExpose
> 使用 setup 的组件是默认关闭，通过 defineExpose 编译器宏来显式指定组件中要暴露出去的属性：
```vue
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
</script>
```

### defineOptions
> 可以在一个宏函数中设置 name, props, emits, render。
```
npm i -D unplugin-vue-define-options @vue-macros/volar
```
```vue
<script setup>
defineOptions({
  name: 'Foo',
  inheritAttrs: false,
})
</script>
```
### 生命周期钩子
| 钩子 | 描述 |
| --- | -------- |
| onBeforeMount | 组件被挂载之前被调用。 **服务器端渲染期间不会被调用**|
| onMounted | 组件挂载完成后执行 **服务器端渲染期间不会被调用** |
| onBeforeUpdate | 即将因为响应式状态变更而更新其 DOM 树之前调用。 **服务器端渲染期间不会被调用**|
| onUpdated | 组件因为响应式状态变更而更新其 DOM 树之后调用 **服务器端渲染期间不会被调用** |
| onBeforeUnmount | 在组件实例被卸载之前调用。**服务器端渲染期间不会被调用** |
| onUnmounted | 在组件实例被卸载之后调用。**服务器端渲染期间不会被调用** |
| onActivated | 组件实例是 \<KeepAlive\> 缓存树的一部分,当组件被插入到 DOM 中时调用。**服务器端渲染期间不会被调用** |
| onDeactivated | 组件实例是 \<KeepAlive\> 缓存树的一部分，当组件从 DOM 中被移除时调用。**服务器端渲染期间不会被调用** |
| onServerPrefetch | 在组件实例在服务器上被渲染之前调用。|