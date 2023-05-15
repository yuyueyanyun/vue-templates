<script setup lang="ts">
import { ref } from 'vue'

const htmlTxt = ref(`<svg
  xmlns="http://www.w3.org/2000/svg"
  version="0.1"
  viewBox="0, 0, 160, 160"
>
  <rect x="50" y="20"
    rx="20" ry="20"
    width="80" height="80"
  />
</svg>`)
const cssTxt = `svg {
  height: 100px;
  border: 1px solid;
}
rect {
  fill: red;
  stroke: black;
  stroke-width: 5;
  opacity: 0.1;
}`

</script>
<template>
  <Suspense>
    <lq-codepen
      :height="150"
      :html="htmlTxt"
      :css="cssTxt"
   />
  </Suspense>
</template>
<style scoped lang="scss">
</style>
  