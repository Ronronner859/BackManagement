import { defineStore } from 'pinia'
import { login } from '@/service/login/login'
import type { IForm } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'
import { getUserById, getRoleById } from '@/service/login/login'
//字符串 ---  抽取常量

export const useLoginStore = defineStore('login', {
  // 如何制定state的类型
  state: (): any => ({
    token: localCache.getCache(LOGIN_TOKEN) || '',
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
      console.log(roleMenu)
      this.userMenu = roleMenu.data.menus
      localCache.setCache('userMenu', this.userMenu)
      // 页面跳转
      router.push('/main')
    }
  }
})
export default useLoginStore
