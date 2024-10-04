import { createRouter, createWebHashHistory } from 'vue-router'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/register',
      component: () => import('@/views/register/Register.vue')
    },
    {
      path: '/main',
      component: () => import('@/views/main/Main.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/not-found/NotFound.vue')
    }
  ]
})

// 导航守卫
router.beforeEach((to, from, next) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path === '/main' && !token) next('/login')
  next()
})
export default router
