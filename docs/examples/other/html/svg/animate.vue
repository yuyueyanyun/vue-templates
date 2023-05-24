<script setup lang="ts">
import { ref } from 'vue'

const htmlTxt = ref(`<svg viewBox="0, 0, 30, 30">
  <rect width="20" height="20">
    <animate 
      attributeName="rx"
      values="0;10;0;"
      dur="6s"
      repeatCount="indefinite"
    />
    <animate 
      attributeName="x"
      values="0;10;0"
      dur="6s"
      repeatCount="indefinite"
    />
  </rect>
</svg>`)
const cssTxt = `svg {
  height: 160px;
  border: 1px solid;
}
image {
  transform: rotate(90deg);
  translate: 12px -12px;
}
`
</script>
<template>
  <Suspense>
    <lq-codepen
      :height="200"
      :html="htmlTxt"
      :css="cssTxt"
   />
  </Suspense>
</template>
<style scoped lang="scss">
</style>
  