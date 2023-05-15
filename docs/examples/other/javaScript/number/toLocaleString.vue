<template>
  <Suspense>
    <lq-codepen
      :html="htmlTxt"
      :javascript="code"
   />
  </Suspense>
</template>
<script setup>
import { ref } from 'vue'
import { javascript } from '@codemirror/lang-javascript'

const htmlTxt = ref(`<p id="demo"></p>`)
const code = ref(`const a = 1234560078.9;
const options = { 
  style:'currency',
  currency:'CNY'
}; 
// 使用主机的区域设置
const def = a.toLocaleString();
// 德国使用逗号作为小数分隔符，分位周期为千位
const de = a.toLocaleString('de-DE');
const cn = a.toLocaleString('zn-CN',options);
document.getElementById("demo").innerHTML = def+'<br>'+de+'<br>'+cn;`)

</script>
<style scoped lang="scss">
</style>
