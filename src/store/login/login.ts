import { defineStore } from 'pinia'
import { login } from '@/service/login/login'
import type { IForm } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'
import { getUserById } from '@/service/users/users'
//字符串 ---  抽取常量

export const useLoginStore = defineStore('login', {
  state: () => ({
    token: localCache.getCache(LOGIN_TOKEN) || '',
    username: '',
    id: '',
    userInfo: {}
  }),
  getters: {},
  actions: {
    async accountLogin(account: IForm) {
      const res = await login(account)
      console.log(res)
      this.token = res.data.token
      this.username = res.data.username
      this.id = res.data.id
      // 进行本地存储 localStorage sessionStorage
      localCache.setCache(LOGIN_TOKEN, res.data.token)
      // 跳转页面 获取登录后用户信息
      const userInfo = await getUserById(this.id)
      this.userInfo = userInfo.data
      // 页面跳转
      router.push('/main')
    }
  }
})
export default useLoginStore
