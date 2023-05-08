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
const code = ref(`const arr = ['a2','b11', 'a1','b2', 'b1', '123', '01', '9'];
const sortDeep = (str1, str2) => {
  function handle(arr1 = [], arr2 = []) {
    if (arr1.length > 0 && arr2.length > 0) {
      const letter1 = arr1.shift();
      const letter2 = arr2.shift();
      if (letter1 === letter2) {
        return handle(arr1, arr2);
      }
      return letter1 < letter2 ? -1: 1;
    }
    return arr1.length === 0 ? -1: 1;
  }
  if (str1 && str2) {
    return handle(
      str1.toLowerCase().split(''),
      str2.toLowerCase().split(''),
    );
  }
  return str1 ? 1 : -1;
};
document.getElementById("demo").textContent = arr.sort(sortDeep) `)

</script>
<style scoped lang="scss">
.view {
  margin-top: 8px;
  height: 40px;
  border: 1px solid #ccc;
}
</style>
