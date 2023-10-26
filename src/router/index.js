import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/uxquiz',
    name: 'uxquiz',
    component: () => import('../views/UXQuizView.vue')
  },
  {
    path: '/funquiz',
    name: 'funquiz',
    component: () => import('../views/FunQuizView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
