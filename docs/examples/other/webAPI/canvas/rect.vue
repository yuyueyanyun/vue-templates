<script setup lang="ts">
import { ref, onMounted } from 'vue';
const canvasEl = ref<HTMLCanvasElement | null>(null);
onMounted(() => {
  if(!canvasEl.value) return
  const ctx = canvasEl.value.getContext('2d');
  if(ctx) {
    ctx.fillRect(0, 0, 100, 100);
    ctx.clearRect(20, 20, 60, 60);
    ctx.strokeRect(25, 25, 50, 50);

    const rect = new Path2D();
    rect.rect(200, 10, 80, 80);
    ctx.stroke(rect);
  }
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
