import hyRequest from '..'
import type { IForm } from '@/types'
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
export function login(data: IForm) {
  // 发起 POST 请求进行登录
  return hyRequest.post({
    url: '/auth/login',
    // 传递登录所需的数据
    data
  })
}
export function getUserById(id: number) {
  return hyRequest.post({
    url: `/user/users/${id}`,
    headers: {
      Authorization: localCache.getCache(LOGIN_TOKEN)
    }
  })
}
export function getRoleById(id: number) {
  return hyRequest.get({
    url: `/role/roles/${id}`
  })
}
