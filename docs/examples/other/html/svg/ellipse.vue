<script setup lang="ts">
import { ref } from 'vue'

const htmlTxt = ref(`<svg
  xmlns="http://www.w3.org/2000/svg"
  version="0.1"
  viewBox="0, 0, 160, 160"
>
  <ellipse 
    cx="80" cy="80"
    rx="40" ry="60"
  />
</svg>`)
const cssTxt = `svg {
  height: 100px;
  border: 1px solid;
}
ellipse {
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
  