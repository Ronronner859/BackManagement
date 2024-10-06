import { defineStore } from 'pinia'
import { getUsers } from '@/service/users/users'
import type { IState } from './types'

export const useSystemStore = defineStore('system', {
  state: (): IState => ({
    users: [],
    total: 0
  }),
  actions: {
    async getUsers(offset: number, size: number) {
      const res = await getUsers(offset, size)
      this.users = res.data.data
      this.total = res.data.total
    }
  }
})
