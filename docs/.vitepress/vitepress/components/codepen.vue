<script setup lang="ts">
import { ref, toRefs } from 'vue'
const { Codemirror } = await import('vue-codemirror')
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

const BASE = {
  autofocus: true,
  disabled: false,
  indentWithTab: true,
  tabSize: 2,
  placeholder: 'Code goes here...',
}
const props = withDefaults(defineProps<{
  html?: string,
  css?: string,
  javascript?: string,
}>(), {
})
const {
  html: initHtmlTxt,
  css: initCss,
  javascript: initJs,
} = toRefs(props);
const htmlTxt = ref(initHtmlTxt.value);
const cssTxt = ref(initCss.value);
const jsTxt = ref(initJs.value);

</script>

<template>
  <ClientOnly>
    <div>
      <div class="split-pane">
        <el-tabs type="border-card">
          <el-tab-pane label="html">
            <Codemirror
              v-model="htmlTxt"
              v-bind="BASE"
              :style="{ height: '300px' }"
              :extensions="[html(), oneDark]"
            />
          </el-tab-pane>
          <el-tab-pane label="css">
            <Codemirror
              v-model="cssTxt"
              v-bind="BASE"
              :style="{ height: '300px' }"
              :extensions="[css(), oneDark]"
            />
          </el-tab-pane>
          <el-tab-pane label="js">   
             <Codemirror
              v-model="jsTxt"
              v-bind="BASE"
              :style="{ height: '300px' }"
              :extensions="[javascript(), oneDark]"
            />
          </el-tab-pane>
        </el-tabs>
        <iframe 
          :srcdoc="`<!doctype html>
    <html>
      <head>
        <style>${ cssTxt }</style>
      </head>
      <body>
        ${ htmlTxt }
      </body>
      <script>
        ${ jsTxt }
      </script>
    </html>`" 
          sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-scripts allow-top-navigation-by-user-activation"
        ></iframe>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.split-pane {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 8px;
  align-items: stretch;
}
.el-tabs, iframe {
  overflow: hidden;
}
iframe {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
}
.el-icon {
  cursor: pointer;
  color: var(--el-text-color-secondary);
  &:hover {
    color: var(--el-text-color-primary);
  }
}
</style>
