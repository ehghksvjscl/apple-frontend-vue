import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Calculator',
    component: import('@/views/Calculator.vue')
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
