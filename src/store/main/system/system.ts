import { defineStore } from 'pinia'
import { getUsers } from '@/service/users/users'
import type { IState } from './types'

export const useSystemStore = defineStore('system', {
  state: (): IState => ({
    users: [],
    total: 0
  }),
  actions: {
    async getUsers(query: any) {
      const res = await getUsers(query)
      this.users = res.data.data
      this.total = res.data.total
    }
  }
})
