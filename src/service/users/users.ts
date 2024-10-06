import hyRequest from '@/service'
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
/**
 * 获取用户列表
 * @returns
 */
export function getUsers(query: any) {
  return hyRequest.post({
    url: '/user/users',
    data: query
    // headers: {
    //   Authorization: localCache.getCache(LOGIN_TOKEN)
    // }
  })
}
/**
 * 获取用户详情
 * @param id
 * @returns
 */
export function getUserById(id: number) {
  return hyRequest.post({
    url: `/user/users/${id}`,
    headers: {
      Authorization: localCache.getCache(LOGIN_TOKEN)
    }
  })
}
/**
 * 创建用户
 * @param data
 * @returns
 */
export function createUser(data: any) {
  return hyRequest.post({
    url: '/user/users',
    data
  })
}
/**
 * 更新用户
 * @param id
 * @param data
 * @returns
 */
export function updateUser(id: number, data: any) {
  return hyRequest.post({
    url: `/user/users/${id}`,
    data
  })
}
/**
 * 删除用户
 * @param id
 * @returns
 */
export function deleteUser(id: number) {
  return hyRequest.post({
    url: `/user/users/delete/${id}`
  })
}
