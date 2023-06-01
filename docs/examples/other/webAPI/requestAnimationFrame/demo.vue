<script setup lang="ts">
import { reactive } from 'vue'

const style = reactive({
  left: 0,
  top: 0,
});
const move = {
  x: 1,
  y: 1,
}

const onMove = () => { 
  if((style.left >= 360 && move.x > 0) || (style.left <=0 && move.x < 0) ) {
    move.x = -move.x;
  }
  if((style.top >= 160 && move.y > 0) || (style.top <= 0 && move.y < 0)) {
    move.y = -move.y;
  }
  style.left = style.left + move.x;
  style.top = style.top + move.y;
  requestAnimationFrame(onMove);
}

requestAnimationFrame(onMove);

</script>
<template>
  <div class="box">
    <div class="circle" :style="{
        top: `${style.top}px`,
        left: `${style.left}px`,
      }" 
    />
  </div>
</template>
<style scoped>
.box {
  position: relative;
  box-sizing: border-box;
  height: 200px;
  width: 400px;
  border: 1px solid #ccc;
}
.circle {
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #79bbff;
}
</style>
