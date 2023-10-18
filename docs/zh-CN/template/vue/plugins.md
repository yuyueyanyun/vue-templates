---
title: plugin
lang: zh-CN
outline: deep
---

# 插件

## vite-plugin-svg-icons
**在vue3 + vite 中使用svg图标。[github](https://github.com/vbenjs/vite-plugin-svg-icons)**
>预加载 在项目运行时就生成所有图标,只需操作一次 dom<br>高性能 内置缓存,仅当文件被修改时才会重新生成

### 安装 
```
yarn add vite-plugin-svg-icons -D
# or
npm i vite-plugin-svg-icons -D
# or
pnpm install vite-plugin-svg-icons -D
```
### 配置
#### vite.config.ts
```ts
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default () => {
  return {
    plugins: [
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',

        /**
         * custom insert position
         * @default: body-last
         */
        inject?: 'body-last' | 'body-first'

        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: '__svg__icons__dom__',
      }),
    ],
  }
}
```
#### src/main.ts
```ts
import 'virtual:svg-icons-register'
```
#### SvgIcon.vue
```vue
<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  },
})
</script>
```
#### svg文件
文件目录src/icons

- icon1.svg
- icon2.svg
- icon3.svg
- dir/icon1.svg

#### 页面使用

```vue
<template>
  <svg-icon  :name="icon" />
</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from './components/SvgIcon';

const icon = ref('icon1')

</script>
```
**获取所有 SymbolId**
```ts
import ids from 'virtual:svg-icons-names'
// => ['icon-icon1','icon-icon2','icon-icon3']
```