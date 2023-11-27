<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
import Example from './demo/vp-example.vue'

const props = defineProps<{
  demos: object
  source: string
  path: string
  rawSource: string
  description?: string
}>()

const vm = getCurrentInstance()!

const formatPathDemos = computed(() => {
  const demos = {}
  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../../../examples/', '').replace('.vue', '')] =
      props.demos[key]
  })
  return demos
})
const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)
</script>

<template>
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p text="sm" v-html="decodedDescription" />

    <div class="example">
      <Example :file="path" :demo="formatPathDemos[path]" />
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.example {
  border: 1px solid var(--el-border-color);
  border-radius: var(--el-border-radius-base);

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .el-icon {
      &:hover {
        color: var(--el-text-color-primary);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--el-text-color-secondary);
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: var(--el-text-color-secondary);

        &:hover {
          color: var(--el-text-color-primary);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--el-border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--el-bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--el-color-primary);
    }
  }
}
.m-0 {
  margin: 0;
}
</style>
