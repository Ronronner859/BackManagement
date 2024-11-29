import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosRequestConfig
} from 'axios'
import { Session, Local } from '@/utils'
import { addPending, removePending } from '../utils/requestManager'
import axios from 'axios'
import type { HttpGlobalResponse } from '@/types'
import { ElNotification } from 'element-plus'
import { showStatus } from '../utils/status'

// 创建 axios 实例
const createAxiosInstance = (config: AxiosRequestConfig): AxiosInstance => {
  // 使用传入的配置创建一个新的 axios 实例
  const instance = axios.create(config)

  // 添加请求拦截器
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = Session.get('token')
      console.log('请求拦截器11111111111', config)
      if (token) {
        config.headers = config.headers || {}
        config.headers.Authorization = `${token}`
      }
      removePending(config)
      addPending(config)
      return config
    },
    (error) => Promise.reject(error)
  )

  return instance
}

// 创建请求函数
const createRequest = (instance: AxiosInstance) => {
  return async <T = any>(
    config: AxiosRequestConfig
  ): Promise<HttpGlobalResponse<T>> => {
    try {
      // 获取用户信息
      const languages = Local.get('config')?.language
      const userinfo = Local.get('userinfo')
      const jwttoken = Local.get('jwttoken')
      const timeid: any = Local.get('timeid')
      // 添加请求头
      // 其中'Content-Type': 'application/json;charset=UTF-8', 有可能需要根据实际情况进行修改
      const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'X-cur_lang_client': languages || 'en',
        'X-jwt_token': jwttoken,
        'X-time_zone_client': timeid,
        'X-owner_type': userinfo?.current_login_user_app?.owner_type,
        'X-owner_id': userinfo?.current_login_user_app?.owner_id
      }
      // 将请求头添加到请求配置中
      config.headers = { ...headers, ...config.headers }
      // 发送请求
      const response = await instance.request<HttpGlobalResponse<T>>(config)
      return response.data
    } catch (error: any) {
      const { response = error } = error
      // 显示错误信息
      ElNotification.error({
        title: showStatus(response?.status),
        message: response?.data?.message,
        duration: 500
      })
      throw response.data
    }
  }
}
export { createAxiosInstance, createRequest }
