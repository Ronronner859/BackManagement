import { defineStore } from 'pinia'
import { login } from '@/service/login/login'
import type { IForm } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'
//字符串 ---  抽取常量

export const useLoginStore = defineStore('login', {
  state: () => ({
    token: localCache.getCache(LOGIN_TOKEN) || '',
    username: '',
    id: ''
  }),
  getters: {},
  actions: {
    async accountLogin(account: IForm) {
      const res = await login(account)
      console.log(res)
      this.token = res.token
      this.username = res.data.username
      this.id = res.data.id
      // 进行本地存储 localStorage sessionStorage
      localCache.setCache(LOGIN_TOKEN, res.token)
      // 页面跳转
      router.push('/main')
    }
  }
})
export default useLoginStore
