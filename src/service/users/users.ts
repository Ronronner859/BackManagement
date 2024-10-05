import hyRequest from '@/service'
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
export function getUsers() {
  return hyRequest.get({
    url: '/user/users'
    // headers: {
    //   Authorization: localCache.getCache(LOGIN_TOKEN)
    // }
  })
}

export function getUserById(id: number) {
  return hyRequest.get({
    url: `/user/users/${id}`,
    headers: {
      Authorization: localCache.getCache(LOGIN_TOKEN)
    }
  })
}
export function createUser(data: any) {
  return hyRequest.post({
    url: '/user/users',
    data
  })
}

export function updateUser(id: number, data: any) {
  return hyRequest.patch({
    url: `/user/users/${id}`,
    data
  })
}

export function deleteUser(id: number) {
  return hyRequest.delete({
    url: `/user/users/${id}`
  })
}
