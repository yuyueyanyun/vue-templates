<script setup lang="ts">
import { ref, onMounted } from 'vue';
const canvasEl = ref<HTMLCanvasElement | null>(null);
onMounted(() => {
  if(!canvasEl.value) return
  const ctx = canvasEl.value.getContext('2d');
  if(ctx) {
    ctx.beginPath();
    ctx.moveTo(0, 40);
    ctx.lineTo(400, 40);
    ctx.stroke();
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('Hello', 10, 40);
    
    ctx.font = 'bold 36px serif';
    ctx.textAlign="end";
    ctx.textBaseline="middle";

    const text = ctx.measureText('World');
    console.log(text.width); // 93

    ctx.strokeText('World', 400, 40);
    
  }
})
</script>
<template>
  <div class="box">
    <canvas ref="canvasEl" width="400" height="60"></canvas>
  </div>
</template>
<style scoped>
canvas {
  border: 1px solid #ccc;
}
</style>
