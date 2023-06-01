<script setup lang="ts">
import { ref, onMounted } from 'vue';
const canvasEl = ref<HTMLCanvasElement | null>(null);
onMounted(() => {
  var ctx = canvasEl.value?.getContext('2d');
  if(!ctx) return
  ctx.fillStyle = 'green';
  ctx.fillRect(5, 5, 40, 40);
})

</script>
<template>
  <canvas ref="canvasEl" height="50">
    抱歉，您的浏览器不支持 canvas 元素
  </canvas>
</template>