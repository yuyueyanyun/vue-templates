<script setup lang="ts">
import { ref } from 'vue'

const listRef = ref<HTMLElement | null>(null)
const items = ref<HTMLElement[]>([]);

const handleScrollTop = (num: number):void  => {
  if(!listRef.value) return
  listRef.value.scrollTop = items.value?.[num]?.offsetTop
}
const handleScrollTo = (num: number, behavior?: ScrollBehavior):void  => {
  if(!listRef.value) return
  if(!behavior) {
    listRef.value.scrollTo( 0, items.value?.[num]?.offsetTop)
  } else {
    listRef.value.scrollTo({
      top: items.value?.[num]?.offsetTop,
      left: 0,
      behavior,
    })
  }
}
const handleScrollIntoView = (num: number):void => {
  items.value?.[num]?.scrollIntoView()
}
</script>
<template>
  <div class="box">
    <div class="left">
      <button type="button" @click="handleScrollTop(4)">scrollTop [4]</button>
      <button type="button" @click="handleScrollTo(3)">scrollTo [3]</button>
      <button type="button" @click="handleScrollTo(2, 'auto')">scrollTo(auto) [2]</button>
      <button type="button" @click="handleScrollTo(1, 'smooth')">scrollTo(smooth) [1]</button>
      <button type="button" @click="handleScrollIntoView(0)">scrollIntoView [0]</button>
    </div>
    <ul ref="listRef">
      <li ref="items" v-for="val in  Array.from({ length: 5 }, (v, index) => index)" :key="val">
        {{ val }}
      </li>
    </ul>
  </div>
</template>
<style scoped>
.box {
  --button-color: #409eff;
  height: 200px;
  display: flex;
  column-gap: 8px;
}
.left {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
button {
  white-space: nowrap;
  padding: 4px 8px;
  border: 1px solid var(--button-color);
}
button:hover {
  background-color: var(--button-color);
}
ul {
  position: relative;
  height: 100%;
  overflow: auto;
}
ul, li {
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  height: 90px;
}
li:nth-of-type(2n+1) {
  background-color: #fffebb;
}
li:nth-of-type(2n) {
  background-color: #CCC;
}

</style>
