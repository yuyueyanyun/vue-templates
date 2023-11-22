<script setup lang="ts">
import {ref, computed } from 'vue';

const num = ref(3.6);

const linearGradient = computed(() => {
  const p = Math.trunc((num.value / 5) * 100);
  return `-webkit-linear-gradient(0deg, #bc2f08 0% ${p}%, #ccc ${p}% 100%)`
})
</script>
<template>
  <div class="box">
    <div class="star" :style="{
      backgroundImage: linearGradient
    }">
      &#9733&#9733&#9733&#9733&#9733
    </div>
    <p>{{ `${num}/5` }}</p>
  </div>
</template>
<style scoped>
.star {
  position: relative;
  width: min-content;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
</style>
