<script setup lang="ts">
import { ref } from 'vue'

const htmlTxt = ref(`<svg
  xmlns="http://www.w3.org/2000/svg" version="0.1"
  viewBox="0, 0, 160, 160"
>
  <polyline points="20,60 140,60 40,140 80,10 120,140" />
</svg>`)
const cssTxt = `svg {
  height: 120px;
  border: 1px solid;
}
polyline {
  fill: none;
  stroke: black;
  stroke-width: 5;
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
  