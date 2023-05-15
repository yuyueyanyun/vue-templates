<script setup lang="ts">
import { ref } from 'vue'
enum Config  {
  BLUR = 'blur(5px)',
  BRIGHTNESS = 'brightness(200%)',
  CONTRAST = 'contrast(200%)',
  GRAYSCALE= 'grayscale(1)',
  HUE_ROTATE= 'hue-rotate(180deg)',
  INVERT= 'invert(1)',
  DRAP_SHADOW= 'drop-shadow(16px 16px 20px red) invert(75%)',
  SEPIA='sepia(100%)'
}
type key = keyof typeof  Config
let selectConfig = ref<key[]>([]);

const imgRef = ref<HTMLInputElement | null>(null)
const handleSetStyle = (val: key):void => {
  if(selectConfig.value.includes(val)) {
    selectConfig.value = selectConfig.value.filter((item) => item !== val )
  }else {
    selectConfig.value = (Object.keys(Config) as key[]).filter((item) => selectConfig.value.includes(item) || item === val)
  }
  const filterConfig = selectConfig.value.reduce((prev, curr) => {
    return `${prev} ${Config[curr]}`
  }, '') || 'none'
  imgRef.value?.style.setProperty('filter', filterConfig)
}
</script>
<template>
  <div class="box">
    <div class="left">
      <div
        v-for="(val, key) in Config" 
        :key="key"
        :class="{active: selectConfig.includes(key)}"
        @click="handleSetStyle(key)"
      >{{ val }}</div>
    </div>
    <div class="rigth">
      <img ref="imgRef" src="/public/icon/firefox-logo.svg" alt="火狐">
    </div>
  </div>
</template>
<style scoped lang="scss">
.box {
  height: 220px;
  display: flex;
  column-gap: 8px;
  .left {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    overflow: auto;
    div {
      cursor: pointer;
      padding: 0 4px;
      border: 1px solid #ccc;
      &.active {
        border-color: aqua;
      }
    }
  }
  .rigth {
    margin: 0 auto;
  }
  img {
    height: 100%;
  }
}
</style>
