<template>
    <codemirror
      v-model="code"
      placeholder="Code goes here..."
      :style="{ height: '400px' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      @ready="handleReady"
      @change="log('change', $event)"
      @focus="log('focus', $event)"
      @blur="log('blur', $event)"
    />
    <p>1232</p>
  </template>
  <script setup>
  import { ref } from 'vue'
  import { Codemirror } from 'vue-codemirror'
  // import { javascript } from '@codemirror/lang-javascript'
  // import { oneDark } from '@codemirror/theme-one-dark'
  const code = ref('');
  const extensions = [];
  const handleReady = (payload) => {
    view.value = payload.view;
  }
  </script>
    