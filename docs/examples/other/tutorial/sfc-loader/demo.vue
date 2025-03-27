<script setup lang="ts">
import * as Vue from 'vue';
import { defineAsyncComponent } from 'vue';
import { loadModule } from 'vue3-sfc-loader';
// import * as Codemirror from 'vue-codemirror';
import { text } from './demo';

const moduleCache = {
  vue: Vue,
  // 'vue-codemirror': Codemirror,
};

const options = {
  moduleCache,
  async getFile(url: string) {
    console.log(text);
    return text;
    // const res = await fetch(url);
    // if (!res.ok)
    //   throw Object.assign(new Error(res.statusText + ' ' + url), { res });

    // return {
    //   getContentData: (asBinary: any) =>
    //     asBinary ? res.arrayBuffer() : res.text(),
    // };
  },
  addStyle(textContent: string) {
    const style = document.createElement('style');
    style.textContent = textContent;
    document.head.appendChild(style);
  },
  //   isCustomElement(tagName: string) {
  //     console.log(tagName);
  //     return tagName === 'Codemirror';
  //   },
  //   log(type, ...args) {
  //     console[type](...args);
  //   },
};

const DynamicComponent = defineAsyncComponent(() =>
  loadModule('demo.vue', options)
);
</script>

<template>
  <div><DynamicComponent /></div>
</template>
<style lang="css"></style>
