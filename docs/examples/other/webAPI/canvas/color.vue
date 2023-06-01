<script setup lang="ts">
import { ref, onMounted } from 'vue';
const canvasEl = ref<HTMLCanvasElement | null>(null);
onMounted(() => {
  if(!canvasEl.value) return
  const ctx = canvasEl.value.getContext('2d');
  if(!ctx) return
  ctx.fillStyle = 'rgb(0, 240, 0)';
  ctx.fillRect(0, 20, 40, 40);

  ctx.fillStyle = 'rgba(0, 240, 0, 0.4)';
  ctx.fillRect(60, 20, 40, 40);

  ctx.fillStyle = 'rgb(0, 240, 0)';
  ctx.globalAlpha = 0.4;
  ctx.fillRect(120, 20, 40, 40);

  ctx.strokeStyle = 'rgb(240, 0, 0)';
  ctx.rect(180, 20, 40, 40);
  ctx.lineWidth=6
  ctx.fill();
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
