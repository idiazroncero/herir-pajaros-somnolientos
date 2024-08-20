import { createRouter, createWebHistory } from 'vue-router'
import MonsterGame from '@/views/MonsterGame.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MonsterGame
    },
    {
      path: '/tab',
      name: 'tab',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TabPage.vue')
    }
  ]
})

export default router
