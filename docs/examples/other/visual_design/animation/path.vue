<script setup lang="ts">
import { ref } from "vue";

const start = [10, 180];
const end = [290, 20];
const curveness = 0.3;
const airSize = 24;
const airUrl = 'https://raw.githubusercontent.com/yuyueyanyun/vue-templates/main/docs/public/images/air.png'

const airLine = ref<string>('');

const setAirLine = ():void => {
  const [x0, y0] = start;
  const [x1, y1] = end;
  const x = (x0 + x1) / 2 - (y0 - y1) * curveness;
  const y = (y0 + y1) / 2 - (x1 - x0) * curveness;

  airLine.value = `M ${x0} ${y0} Q ${x} ${y} ${x1} ${y1}`;
};
setAirLine();
</script>
<template>
  <div class="air_svg">
    <svg width="100%" height="100%" viewBox="0 0 300 200">
      <path id="path1" :d="airLine" fill="none" stroke="blue" stroke-width="1"  />
      <image 
        :xlink:href="airUrl" 
        x="0" y="0" 
        :height="airSize" 
        :style="`transform: rotate(90deg) translate(${-airSize/2}px, ${-airSize/2}px)`"
      >
        <animateMotion 
          calcMode="linear"
          dur="10s"
          repeatCount="indefinite"
          rotate="auto" 
        >
          <mpath xlink:href="#path1"/>
        </animateMotion>
      </image>
    </svg>
  </div>
</template>
<style scoped>
.air_svg {
  width: 300px;
  height: 200px;
  border: 1px solid #010101;
}
</style>