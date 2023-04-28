<template>
  <el-button type="primary" @click="handleExecute">执行</el-button>
  <vue-codemirror
    v-model="code"
    placeholder="Code goes here..."
    :autofocus="true"
    :indent-with-tab="true"
    :style="{ height: '300px' }"
    :tab-size="2"
    @ready="handleReady"
  />
  <div class="view">
    {{ result }}
  </div>
</template>
<script setup>
import { ref, shallowRef} from 'vue'
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
return arr.sort(sortDeep);`);
const result = ref('');

const view = shallowRef();
const handleReady = (payload) => {
  view.value = payload.view;
}
const handleExecute = () => {
  result.value = new Function(code.value)();
}
handleExecute();
</script>
<style scoped lang="scss">
.view {
  margin-top: 8px;
  height: 40px;
  border: 1px solid #ccc;
}
</style>