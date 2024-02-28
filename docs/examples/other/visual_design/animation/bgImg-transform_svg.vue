<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue';
import imgSrc from '/images/visual_design/animation/bgImg.jpg'

const img = new Image();
img.src = imgSrc;

const box = reactive({
  width: 0,
  height: 0,
  scale: 1,
});

const imgPosition = reactive({
  x: 0,
  y: 0,
  height: 0,
  width: 0,
});

const ellipseProps = computed(() => {
  const cx = (box.width >> 1) - 10;
  const cy = (box.height >> 1) - 20;
  return {
    cx,
    cy,
    rx: 1800 * box.scale,
    ry: 100 * box.scale,
  }
})
const setCanvas = () => {
  if(!img.width || !img.height) return;
  const { clientWidth = 0, clientHeight = 0 } = svgRef.value || {};
  box.width = clientWidth;
  box.height = clientHeight;
  box.scale = Math.max(clientWidth / img.width, clientHeight / img.height);
  imgPosition.x = (clientWidth - img.width * box.scale) >> 1;
  imgPosition.y = (clientHeight - img.height * box.scale) >> 1;
  imgPosition.width = img.width * box.scale;
  imgPosition.height = img.height * box.scale;
  
};

let observer;
const svgRef = ref(null);

onMounted(() => {
  img.onload = () => {
    setCanvas();
  }
  observer = new ResizeObserver(setCanvas);
  if (svgRef.value) {
    observer.observe(svgRef.value);
  }
});
onBeforeUnmount(() => {
  if (observer && svgRef.value) {
    observer.unobserve(svgRef.value);
  }
});
</script>
<template>
<div class="box">
  <svg
    class="svg"
    ref="svgRef"
    xmlns="http://www.w3.org/2000/svg"
    version="0.1"
    :viewBox="`0, 0, ${box.width}, ${box.height}`"
  >
    <defs>
      <linearGradient
        id="Gradient1"
        x1="0"
        x2="0"
        y1="0"
        y2="1"
      >
        <stop stop-color="rgba(255, 0, 0, 0)" offset="0%" />
        <stop stop-color="rgba(255, 0, 0, 0.16)" offset="20%" />
        <stop stop-color="rgba(255, 0, 0, 1)" offset="100%" />
      </linearGradient>
    </defs>
    <image
      :xlink:href="img.src"
      v-bind="imgPosition"
    />
    <g :transform="`rotate(-20 ${ellipseProps.cx} ${ellipseProps.cy})`">
      <path
        id="ellipsePath"
        :d="`M${ellipseProps.cx + ellipseProps.rx} ${ellipseProps.cy}
       a${ellipseProps.rx} ${ellipseProps.ry} 0 1 0 ${ -2 * ellipseProps.rx } 0
       a${ellipseProps.rx} ${ellipseProps.ry} 0 1 0 ${ 2 * ellipseProps.rx } 0`"
        fill="none"
        stroke="url(#Gradient1)"
        width="20"
        stroke-width="2"
        stroke-linejoin="miter"
      />
      <circle
        cx="0"
        cy="0"
        :r="60 * box.scale"
        fill="rgba(0, 255, 0, 0)"
      >
        <animate
          attributeType="CSS"
          attributeName="fill"
          keyTimes="0; 0.15; 0.35; 0.5; 1"
          values="rgba(0, 255, 0, 1);
            rgba(0, 255, 0, 0);
            rgba(0, 255, 0, 0);
            rgba(0, 255, 0, 1);
            rgba(0, 255, 0, 1);"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateMotion
          calcMode="linear"
          dur="10s"
          repeatCount="indefinite"
        >
          <mpath xlink:href="#ellipsePath" />
        </animateMotion>
      </circle>
    </g>
  </svg>
</div>
</template>
<style scoped>
.box {
  height: 300px;
}
.svg {
  width: 100%;
  height: 100%;
}
</style>
