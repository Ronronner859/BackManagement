import { defineStore } from 'pinia'
import { getUsers, deleteUser } from '@/service/users/users'
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
    },
    async deleteUser(id: number) {
      await deleteUser(id)
      // 删除成功后，重新获取用户列表
      this.getUsers({ size: 10, offset: 0 })
    }
  }
})
