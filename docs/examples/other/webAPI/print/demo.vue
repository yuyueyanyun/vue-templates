<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const iframePrint = ref<HTMLIFrameElement | null>(null)
const handlePrint = ():void => {
  iframePrint.value?.contentWindow?.print()
}
const onBeforeprint = () => {
  alert('beforeprint')
}
const onAfterprint = () => {
  alert('afterprint')
}
onMounted(() => {
  iframePrint.value?.contentWindow?.addEventListener("beforeprint", onBeforeprint)
  iframePrint.value?.contentWindow?.addEventListener("afterprint", onAfterprint)
})
onUnmounted(() => {
  iframePrint.value?.contentWindow?.removeEventListener("beforeprint", onBeforeprint)
  iframePrint.value?.contentWindow?.removeEventListener("afterprint", onAfterprint)
})
</script>
<template>
  <div class="box">
    <el-button size="small" type="primary"  @click="handlePrint">打印</el-button>    
    <iframe ref="iframePrint" src="./"></iframe>
  </div>
</template>
<style scoped lang="scss">
iframe {
  width: 100%;
  height: 300px;
}

</style>
