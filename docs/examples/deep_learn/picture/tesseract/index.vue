<script setup lang="ts">
import {ref} from 'vue'
import { createWorker } from 'tesseract.js';

const imgEl = ref<HTMLImageElement | null>(null)
let worker:Tesseract.Worker|null = null;

(async() => {
  worker = await createWorker({
    logger: m => console.log(m)
  });
  console.log(worker)
})();


const setText = async(url:string) => {
  console.log(worker)
  if(!worker) return
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(url);
  console.log(text);
  await worker.terminate();
}
const handleChangeFile = (e:Event) => {
  const file =(<HTMLInputElement>e.target).files?.[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    if(imgEl.value && e.target) {
      imgEl.value.src = e.target.result as string;
      setText(imgEl.value.src)
    }
  };
  file && reader.readAsDataURL(file);
}
</script>
<template>
  <div class="box">
    <label>点击上传  
      <input 
        type="file" accept="image/png, image/jpeg, image/jpg" 
        @change="handleChangeFile"
      />
    </label>
    <div class="view"><img ref="imgEl" src="" alt=""></div>
    <div></div>
  </div>
</template>
<style scoped>
input[type=file] {
  display: none;
}
</style>
