---
title: 加载远程vue文件
lang: zh-CN
---

# 加载远程 vue 文件

## vue3-sfc-loader

[git 地址](https://github.com/FranckFreiburger/vue3-sfc-loader)

## 安装

```
npm i vue3-sfc-loader
or
yarn add vue3-sfc-loader
```

## 引入

- vue

  ```javascript
  import { loadModule } from 'vue3-sfc-loader';
  ```

  - html

  ```javascript
  <script src="https://unpkg.com/vue@latest"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue3-sfc-loader/dist/vue3-sfc-loader.js"></script>

  const { loadModule } = window['vue3-sfc-loader'];
  ```

## 使用

```ts
<script setup lang="ts">
import * as Vue from 'vue';
import { defineAsyncComponent } from 'vue';
import { loadModule } from 'vue3-sfc-loader';
import dayjs from 'dayjs';

const moduleCache = {
  vue: Vue,
  dayjs: dayjs,
};

const options = {
  moduleCache,
  async getFile(url: string) {
    const res = await fetch(url);
    if (!res.ok) throw Object.assign(new Error(res.statusText + ' ' + url), { res });

    return {
      getContentData: (asBinary: any) => (asBinary ? res.arrayBuffer() : res.text()),
    };
  },
  addStyle(textContent: string) {
    const style = document.createElement('style');
    style.textContent = textContent;
    document.head.appendChild(style);
  },
};

const DynamicComponent = defineAsyncComponent(() => loadModule('/demo/index.vue', options));
</script>

<template>
  <div><DynamicComponent /></div>
</template>
<style lang="css"></style>

```

## 示例

:::demo

other/tutorial/sfc-loader/demo

:::
