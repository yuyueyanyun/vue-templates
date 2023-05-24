<template>
    <div class="row">
      <svg>
        <path id="path1" :d="airLine" fill="none" stroke="blue" stroke-width="1"  />
        <image 
          xlink:href="/images/air.png" 
          x="0" y="0" 
          :height="airSize" 
          :width="airSize"
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
  <script setup lang="ts">
  import { ref } from "vue";
  const start = [10, 180];
  const end = [290, 20];
  const curveness = 0.3;
  
  const airSize = ref<number>(24);
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
  <style scoped>
  .row {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);
  }
  svg {
    height: 200px;
    border: 1px solid #010101;
  }
  image {
    background-color: #fff;
  }
  </style>