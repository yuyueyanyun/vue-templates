<script setup lang="ts">
import { ref, onMounted } from 'vue';
const canvasEl = ref<HTMLCanvasElement | null>(null);
onMounted(() => {
  if(!canvasEl.value) return
  const ctx = canvasEl.value.getContext('2d');
  if(!ctx) return
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.lineJoin = 'round';
  ctx.moveTo(10, 80);
  ctx.lineTo(40, 20);
  ctx.lineTo(70, 80);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'miter';
  ctx.moveTo(90, 80);
  ctx.lineTo(120, 20);
  ctx.lineTo(150, 80);
  ctx.miterLimit= 1
  ctx.stroke();

  ctx.beginPath();
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.lineDashOffset = 10;
  ctx.moveTo(170, 80);
  ctx.lineTo(200, 20);
  ctx.lineTo(230, 80);
  ctx.setLineDash([20, 5]);
  ctx.stroke();
})
</script>
<template>
  <div class="box">
    <canvas ref="canvasEl" width="400" height="100"></canvas>
  </div>
</template>
<style scoped>
canvas {
  border: 1px solid #ccc;
}
</style>
