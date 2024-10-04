import { defineStore } from 'pinia'
import { login } from '@/service/login/login'
import type { IForm } from '@/types'
export const useLoginStore = defineStore('login', {
  state: () => ({
    token: '',
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
    }
  }
})
export default useLoginStore
