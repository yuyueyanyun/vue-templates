---
title: vue3
lang: zh-CN
outline: deep
---

# vue3-ts

## ref reactive
```ts
// 组件
const componentsRef = ref<InstanceType<typeof Components>>();
const searchData = reactive<SearchType>({
  time: string[],
});
```
## props
```ts
const props = withDefaults(
  defineProps<{
    name: string,
  }>(),
  {
    name: '',
  },
);
```
## emits
```ts
const emits = defineEmits<{
  (e: 'onChange', value: string): void
}>();
```
## [更多](../../other/tutorial/ts.md)