import hyRequest from '@/service'

export function getUsers() {
  return hyRequest.get({
    url: '/user/users'
  })
}

export function getUserById(id: number) {
  return hyRequest.get({
    url: `/user/users/${id}`
  })
}
