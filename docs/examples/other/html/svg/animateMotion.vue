<script setup lang="ts">
import { ref } from 'vue'
import imgHref from '/images/air.png'

const htmlTxt = ref(`<svg viewBox="0, 0, 300, 200">
  <path id="path1" d="M 10 180 Q 102 72 290 20" fill="none" stroke="blue" stroke-width="1"  />
  <image 
    xlink:href="${imgHref}" 
    x="0" y="0" 
    height="24" 
    width="24"
  >
    <animateMotion 
      id="airid"
      calcMode="linear"
      dur="10s"
      keyPoints="0;0.3;0.8;1"
      keyTimes="0;0.4;0.6;1"
      repeatCount="indefinite"
      rotate="auto" 
    >
      <mpath xlink:href="#path1"/>
    </animateMotion>
  </image>
  <circle 
    cx="60" cy="60"
    r="0"
  >
    <animate
      attributeName="r"
      dur="10s"
      values="10; 20; 10"
      begin="airid.begin"
      repeatCount="indefinite"
    />
  </circle>
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
  