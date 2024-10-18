import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '@/views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Blog',
    component: BlogView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
