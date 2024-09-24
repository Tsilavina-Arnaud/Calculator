import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import EquationSecondDeg from '@/components/EquationSecondDeg.vue'
import ConvertNumber from '@/components/ConvertNumber.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/equation-second-degre',
      name: 'equation',
      component: EquationSecondDeg
    },
    {
      path: '/convertir',
      name: 'convert',
      component: ConvertNumber
    }
  ]
})

export default router
