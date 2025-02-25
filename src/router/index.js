import { createRouter, createWebHistory } from 'vue-router'
import SalaryCalculator from '@/views/SalaryCalculator.vue'
import NotFound from '@/components/common/NotFound.vue'

// routers 내부에서 component import를 사용해서 하면 build 과정에 읽지 못하는 현상이 있음.. 왜 그런거지?
const routes = [
  {
    path: '/',
    name: 'SalaryCalculator',
    component: SalaryCalculator
  },
  {
    path: "/:anything(.*)",
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
