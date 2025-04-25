import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'

console.log('Router initialized')

const routes = [
  {
    path: '/',
    component: App,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
