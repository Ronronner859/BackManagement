import hyRequest from '..'
import type { IForm } from '@/types'
export function login(data: IForm) {
  // 发起 POST 请求进行登录
  return hyRequest.post({
    url: '/auth/login',
    // 传递登录所需的数据
    data
  })
}
