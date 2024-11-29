import type { AxiosResponse, AxiosInstance } from 'axios'
import router from '@/router'
import { Local, Session } from '@/utils'
import { removePending } from '../utils/requestManager'

export const responseInterceptor = (instance: AxiosInstance) => {
  // 响应拦截器
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // 移除可能存在的重复请求
      removePending(response.config)
      // 如果响应数据的状态码为500，则返回错误
      if (response.data.code === 500) {
        return Promise.reject(response)
      }
      return response
    },
    (error) => {
      // 如果响应数据的状态码为401，则返回错误
      const { config, response } = error
      if (response && response.status === 401) {
        // 清除本地和会话存储中的数据
        Local.clear()
        Session.clear()
        // 重定向到登录页面
        router.replace({ path: '/login' })
      }
      if (config) {
        // 移除可能存在的重复请求
        removePending(config)
      }
      return Promise.reject(error)
    }
  )
}
