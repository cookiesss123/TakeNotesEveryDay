import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: 'home', // 一開始進到的頁面
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          name: 'homePage',
          path: 'home',
          component: () => import('../views/front/HomeView.vue')
        },
        {
          path: 'todolist',
          component: () => import('../views/front/TodoList.vue')
        },
        {
          path: 'schedule',
          component: () => import('../views/front/ScheduleView.vue')
        },
        {
          path: 'accounting',
          component: () => import('../views/front/AccountingView.vue')
        },
        {
          path: 'loginSignup',
          component: () => import('../views/front/LoginSignup.vue')
        }
      ]
    }
  ]
})

export default router
