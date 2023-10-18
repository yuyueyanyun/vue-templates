<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';

interface DataItem {
  width: number;
  height: number;
  src: string
}
const ctx = import.meta.glob(['/public/images/visual_design/layout/*.png', '/public/images/visual_design/layout/*.jpg'],
  { eager: true, import: 'default' });

const loadingFile = (img: HTMLImageElement):Promise<DataItem> => new Promise((resolve) => {
  img.onload = () => {
    resolve({
      width: img.width,
      height: img.height,
      src: img.src,
    }) 
  }
})
const getData = Promise.all(Object.keys(ctx).map(async(list) => {
  const img = new Image();
  img.src = list;
  return loadingFile(img)
})) 

interface Row extends DataItem {
  top: number;
  left: number;
}
// console.log(ctx)
const img_width = 200;
const rowGap = 8;
let colGap: number;
let height_list = ref<number[]>([]);

const boxRef = ref<Element>()
const waterfall_list = ref<Row[]>([]);

const getColNum = () => {
  let num: number = 1;
  if(boxRef.value) {
    num = Math.floor(boxRef.value.scrollWidth / img_width) || 1;
    colGap = (boxRef.value.scrollWidth - num * img_width) / (num - 1);
  }
  height_list.value = Array.from({length: num}, () => 0);
}
const runLayout = async() => {
  const data = await getData;
  console.log(data)
  waterfall_list.value = data.map((item) => {
    const minIndex = height_list.value.findIndex((val) => val === Math.min(...height_list.value));
    const config = {
      ...item,
      width: img_width,
      height: Math.floor((img_width / item.width) * item.height),
      top: height_list.value[minIndex],
      left: minIndex * (rowGap + img_width),
    }
    height_list.value[minIndex] += config.height + colGap;
    return config
  });
}
onMounted(() => {
  getColNum();
  runLayout();
})
</script>
<template>
  <div class="box" ref="boxRef" :style="{height: Math.max(...height_list)+'px'}">
    <div 
      v-for="(img,index) in waterfall_list" class="item" 
      :style="{top:img.top+'px',left:img.left+'px',width:img.width+'px',height:img.height}"
      :key="index"
    >
        <img :src="img.src"/>
      </div>
  </div>
</template>
<style scoped>
.box {
  position: relative;
}
.item {
  position: absolute;
}
img {
  border: 1px solid #CCC;
}
</style>
