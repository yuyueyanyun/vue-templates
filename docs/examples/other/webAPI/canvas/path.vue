<script setup lang="ts">
import { ref, onMounted } from 'vue';
const canvasEl = ref<HTMLCanvasElement | null>(null);


onMounted(() => {
  if(!canvasEl.value) return
  const ctx = canvasEl.value.getContext('2d');
  if(!ctx) return
  ctx.beginPath();
  ctx.moveTo(15, 50);
  ctx.lineTo(35, 75);
  ctx.lineTo(35, 25);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(65, 50);
  ctx.lineTo(45, 75);
  ctx.lineTo(45, 25);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(120, 50, 40, 0, Math.PI * 2, true);
  ctx.moveTo(145, 50);
  ctx.arc(120, 50, 25, 0, Math.PI, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(220, 50, 25, 0, Math.PI/2, true);
  ctx.moveTo(325, 50);
  ctx.arc(300, 50, 25, 0, Math.PI/2, false);
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
