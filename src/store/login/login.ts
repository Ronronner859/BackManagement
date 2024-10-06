import { defineStore } from 'pinia'
import { login } from '@/service/login/login'
import type { IForm } from '@/types'
import { localCache } from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'
import { LOGIN_TOKEN, USER_INFO, USER_MENU } from '@/global/constants'
import { getUserById, getRoleById } from '@/service/login/login'
import router from '@/router'

//字符串 ---  抽取常量
export const useLoginStore = defineStore('login', {
  // 如何制定state的类型
  state: (): any => ({
    token: '',
    userInfo: {},
    userMenu: []
  }),
  getters: {},
  actions: {
    async accountLogin(account: IForm) {
      const res = await login(account)
      this.token = res.data.token
      const id = res.data.id
      // 进行本地存储 localStorage sessionStorage
      localCache.setCache(LOGIN_TOKEN, res.data.token)
      // 跳转页面 获取登录后用户信息
      const userInfo = await getUserById(id)
      this.userInfo = userInfo.data
      console.log(this.userInfo)
      // 根据用户角色请求权限
      const roleMenu = await getRoleById(this.userInfo.roles.id)
      const menus = roleMenu.data.menus
      this.userMenu = menus
      // 进行本地存储
      localCache.setCache(USER_MENU, menus)
      localCache.setCache(USER_INFO, this.userInfo)
      // 动态添加路由
      const routes = mapMenusToRoutes(menus)
      // 动态添加路由
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      // 页面跳转
      router.push('/main')
    },
    loadLocationCache() {
      // 用户刷新的时候
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache(USER_INFO)
      const userMenu = localCache.getCache(USER_MENU)
      if (token && userInfo && userMenu) {
        this.token = token
        this.userInfo = userInfo
        this.userMenu = userMenu
        // 动态添加路由
        const routes = mapMenusToRoutes(this.userMenu)
        // 动态添加路由
        routes.forEach((route) => {
          router.addRoute('main', route)
        })
      }
    }
  }
})
export default useLoginStore
