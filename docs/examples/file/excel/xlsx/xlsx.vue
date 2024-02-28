<script setup>
import { ref } from 'vue'
import { read, utils } from 'xlsx';

const file_to_wb = (file) => {
  return new Promise((resolve) => {
    var reader = new FileReader();
    reader.onload = (e) => {
      resolve(read(e.target.result));
    };
    reader.readAsArrayBuffer(file);
  })
}

const excelRef = ref(null)
const html = ref()
let wb;
const handleUploadChange = async(even) => {
  const files = even?.target?.files || [];
  if (!files) return;
  wb = await file_to_wb(files[0])
  html.value = utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]]);
}

</script>
<template>
  <div class="box">
   <input type="file" accept=".xlsx, .xls, .xlsm" @change="handleUploadChange"/>
   <div ref="excelRef" v-html="html"></div>
  </div>
</template>
<style scoped>
</style>
