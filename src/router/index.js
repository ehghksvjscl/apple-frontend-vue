import { createRouter, createWebHistory } from 'vue-router'
import PostDetail from '@/components/blog/PostDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: import('@/views/Home.vue')
  },
  {
    path: '/blog/',
    name: 'Blog',
    component: import('@/views/Blog.vue') 
    
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: PostDetail,
    
  },
  {
    path: "/:anything(.*)",
    component: import('@/components/common/NotFound.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
