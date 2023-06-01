<script setup lang="ts">
import { ref, onMounted } from 'vue';
const canvasEl = ref<HTMLCanvasElement | null>(null);

const pathRect = (x:number, y:number, w:number, h:number):Path2D => {
  let p = new Path2D();
  p.rect(x, y, w, h);
  return p
}
type RectType = [number, number, number, number];

onMounted(() => {
  if(!canvasEl.value) return
  const ctx = canvasEl.value.getContext('2d');
  if(ctx) {
    let p1 = pathRect(0, 0, 100, 50);

    const arr: RectType[] = [[150, 0, 20, 20], [120, 20, 20, 20]]
    arr.forEach((item) => {
      p1.addPath(pathRect(...item));
    })

    ctx.fill(p1);
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
