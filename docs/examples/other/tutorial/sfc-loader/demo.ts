export const text = `<script setup lang="ts">
import { ref } from 'vue';
import { Codemirror } from 'vue-codemirror';
const extensions = [];
const code = ref('');
</script>
<template>
    <p>这是引入的vue文件</p>
    <Codemirror
      v-model="code"
      placeholder="这是组件"
      :style="{ height: '60px' }"
      :autofocus="false"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
    />
</template>
<style scoped>
p {
  color: red;
}
</style>`;
