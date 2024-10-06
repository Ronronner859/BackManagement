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
      name: 'main',
      component: () => import('@/views/main/Main.vue'),
      children: []
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/not-found/NotFound.vue')
    }
  ]
})
// const loadLocalRoutes = [
//   {
//     path: '/main/analysis/technics',
//     component: () => import('@/views/main/analysis/technics/technics.vue')
//   },
//   {
//     path: '/main/system/users',
//     component: () => import('@/views/main/system/users/users.vue')
//   },
//   {
//     path: '/main/system/roles',
//     component: () => import('@/views/main/system/roles/roles.vue')
//   }
// ]
// // 动态添加路由
// router.addRoute('main', loadLocalRoutes[0])
// router.addRoute('main', loadLocalRoutes[1])
// 导航守卫
router.beforeEach((to, from, next) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path.startsWith('/main') && !token) next('/login')
  next()
})
export default router
