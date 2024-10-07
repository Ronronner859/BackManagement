import { defineStore } from 'pinia'
import {
  getUsers,
  deleteUser,
  createUser,
  updateUser,
  getPageRoles,
  createPageData,
  deletePageData,
  editPageData
} from '@/service/users/users'
import type { IState } from './types'

export const useSystemStore = defineStore('system', {
  state: (): IState => ({
    users: [],
    total: 0,
    pageList: [],
    pageTotal: 0
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
    },
    async createUserFrom(data: any) {
      await createUser(data)
      // 创建成功后，重新获取用户列表
      this.getUsers({ size: 10, offset: 0 })
    },
    async editUserFrom(id: number, data: any) {
      console.log(id, data)
      await updateUser(id, data)
      // 编辑成功后，重新获取用户列表
      this.getUsers({ size: 10, offset: 0 })
    },
    async getPageRoles(pageName: string, query: any) {
      const res = await getPageRoles(pageName, query)
      return res.data.data
    },
    async deletePageData(pageName: string, id: number) {
      await deletePageData(pageName, id)
    },
    async createPageData(pageName: string, data: any) {
      await createPageData(pageName, data)
    },
    async editPageData(pageName: string, id: number, data: any) {
      await editPageData(pageName, id, data)
    }
  }
})
