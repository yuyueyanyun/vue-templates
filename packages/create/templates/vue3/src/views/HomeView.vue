<script setup>
import { demoHttp } from '@/http/index'
demoHttp.post('/demo', {a: 1}, {
  params: {b: 1},
  requestType: 'form', // 默认json
})
</script>

<template>
  <main>
    main
  </main>
</template>
