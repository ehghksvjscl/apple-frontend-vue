import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Instagram',
    component: import('@/views/Instagram.vue')
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
