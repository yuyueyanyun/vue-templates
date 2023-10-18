<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, VueElement } from 'vue';
const Tabs = {
  'hello': 'hello world',
  'html': 'html',
  'css': 'css',
};
const index = ref(0);

const x = ref(0);
const resizeRef = ref<VueElement | null>(null);
const tabsRefs = ref<VueElement[]>([]);
const setTrans = () => {
  const target = tabsRefs.value[index.value];
  const { clientWidth = 0, offsetLeft = 0 } = target || {};
  x.value = (clientWidth - 24) / 2 + offsetLeft;
};

let observer:ResizeObserver;
onMounted(() => {
  setTrans();
  observer = new ResizeObserver(setTrans);
  if (resizeRef.value) {
    observer.observe(resizeRef.value);
  }
});
onBeforeUnmount(() => {
  if (observer && resizeRef.value) {
    observer.unobserve(resizeRef.value);
  }
});
const handleChange = (i: number) => {
  index.value = i;
  setTrans();
}
</script>
<template>
  <div class="box">
    <div class="tabs" ref="resizeRef">
      <div
        class="tab"
        ref="tabsRefs" 
        v-for="(val, key, i) in Tabs" 
        :key="key"
        @click="handleChange(i)"
      >
        {{ val }}
      </div>
      <div class="active-tab_top" :style="`transform: translateX(${x}px);`" />
    </div>
  </div>
</template>
<style scoped>
.tabs {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 220px));
  column-gap: 16px;
  width: 100%;
  padding: 0 24px 24px;
  border-bottom: solid 2px #ccc;
}
.tab {
  text-align: center;
  background: #F6F7F9;
  border-radius: 8px;
  cursor: pointer;
  border: solid 1px #84adff;
}
.active-tab_top {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-bottom: 12px solid #c0c0c0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  transition: transform .3s linear;
}
</style>
