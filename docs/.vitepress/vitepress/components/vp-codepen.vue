<script setup lang="ts">
import { ref } from 'vue'
// import  {Repl,ReplStore} from '@vue/repl'
import '@vue/repl/style.css'
import Worker from '../codepenWorker'

const { Repl, ReplStore } = await import('@vue/repl');

const sfcOptions = {
  script: {
    inlineTemplate: true,
    isProd: true,
    reactivityTransform: true
  },
  style: {
    isProd: true
  },
  template: {
    isProd: true
  }
}
const store = ref<any>(null);
const myWorker = Worker();

myWorker.port.postMessage({
  type: 'get',
})
myWorker.port.onmessage = (e) => {
  let data = e.data;
  if(data) {
    sessionStorage.setItem('key', data);
  } else {
    data = sessionStorage.getItem('key');
  }
  store.value = new ReplStore({
    serializedState: data,
  });
}


</script>

<template>
  <ClientOnly>
    <div v-if="store" class="vue-codepen">
      <Repl
        @keydown.ctrl.s.prevent
        @keydown.meta.s.prevent
        :ssr="false"
        :store="store"
        :showCompileOutput="true"
        :autoResize="true"
        :sfcOptions="sfcOptions"
        :clearConsole="false"
      />
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
</style>
<style lang="scss">
.Layout:has(.vue-codepen) {
  height: 100vh;
  overflow: hidden;
  .VPContent {
    flex: 1;
    overflow: hidden;
  }
  .VPDoc {
    overflow: hidden;
    padding-bottom: 48px;
    height: 100%;
  }
  :is(div, main):has(.vue-codepen),
  .vue-codepen, .vue-repl {
    overflow: hidden;
    height: 100%;
  }
}
.VPDoc:not(.has-sidebar) {
  padding-bottom: 48px;
  .container {
    width: 100%;
    max-width: unset !important;
    .content {
      width: 100%;
      padding: 0;
      max-width: unset !important;
    }
    footer {
      display: none;
    }
  }
}
</style>
