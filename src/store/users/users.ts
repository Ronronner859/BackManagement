import { defineStore } from 'pinia'
import { getUsers, getUserById } from '@/service/users/users'
export const useUsersStore = defineStore('users', {
  state: () => ({
    users: []
  }),
  actions: {
    async getUsers(query: any) {
      const res = await getUsers(query)
      this.users = res.data
    },
    async getUserById(id: number) {
      const res = await getUserById(id)
      this.user = res.data
    }
  }
})
