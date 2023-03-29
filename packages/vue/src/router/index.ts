import { createRouter, createWebHistory } from 'vue-router'
import Demo from '../views/Demo.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'demo',
      component: Demo
    },
  ]
})

export default router
