<script setup lang="ts">
import { ref } from 'vue'

const htmlTxt = ref(`<svg
  xmlns="http://www.w3.org/2000/svg"
  version="0.1"
  viewBox="0, 0, 160, 160"
>
  <path id="path1" d="M 10 10 Q 108 52 150 150"   />
  <text x="70">
    <textPath xlink:href="#path1">hello world</textPath>
  </text>
</svg>`)
const cssTxt = `svg {
  height: 100px;
  border: 1px solid;
}
path {
  fill: transparent;
  stroke: blue;
  stroke-width: 1
}
text {
  fill: red;
}`

</script>
<template>
  <Suspense>
    <LqCodepen
      :height="150"
      :html="htmlTxt"
      :css="cssTxt"
   />
  </Suspense>
</template>
<style scoped lang="scss">
</style>
  