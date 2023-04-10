<script setup lang="ts">
import { computed } from 'vue'
import { isClient } from '@vueuse/core'

const goHome = () => {
  if (!isClient) return
  window.location.href = `/`
}
</script>

<template>
  <el-result icon="error" title="title" sub-title="subTitle">
    <template #extra>
      <el-button @click="goHome">返回首页</el-button>
    </template>
  </el-result>
</template>

<style scoped>
.el-result {
  height: 100vh;
  width: 100vw;
}
</style>
