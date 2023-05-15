<script setup lang="ts">
import { ref } from 'vue'

const listRef = ref<HTMLInputElement | null>(null)
const items = ref<HTMLInputElement[]>([]);

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
      <el-button size="small" @click="handleScrollTop(4)">scrollTop [4]</el-button>
      <el-button size="small" @click="handleScrollTo(3)">scrollTo [3]</el-button>
      <el-button size="small" @click="handleScrollTo(2, 'auto')">scrollTo(auto) [2]</el-button>
      <el-button size="small" @click="handleScrollTo(1, 'smooth')">scrollTo(smooth) [1]</el-button>
      <el-button size="small" @click="handleScrollIntoView(0)">scrollIntoView [0]</el-button>
    </div>
    <ul ref="listRef">
      <li ref="items" v-for="val in  Array.from({ length: 5 }, (v, index) => index)" :key="val">
        {{ val }}
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.box {
  height: 200px;
  display: flex;
  column-gap: 8px;
  .left {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    .el-button+.el-button {
      margin: 0;
    }
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
    &:nth-of-type(2n+1) {
      background-color: #fffebb;
    }
    &:nth-of-type(2n) {
      background-color: #CCC;
    }
  }
}
</style>
