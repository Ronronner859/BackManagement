import hyRequest from '@/service'
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
//用户的网络请求
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
    url: '/user/create',
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
    url: `/user/users/update/${id}`,
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
// 角色的网络请求 针对页面的网络请求，crud
// 对后端的数据路径格式化处理 TODO: 后续需要优化
const formatPath = (path: string) => {
  return `/role/${path}/list`
}
/**
 * 获取角色列表
 * @returns
 */
export function getPageRoles(pageName: string, query: any) {
  return hyRequest.post({
    url: `/role/${pageName}/list`,
    data: query
  })
}
export function deletePageData(pageName: string, id: number) {
  return hyRequest.post({
    url: `/role/${pageName}/delete/${id}`
  })
}
export function createPageData(pageName: string, data: any) {
  return hyRequest.post({
    url: `/role/${pageName}/create`,
    data
  })
}
export function editPageData(pageName: string, id: number, data: any) {
  return hyRequest.post({
    url: `/role/${pageName}/update/${id}`,
    data
  })
}
