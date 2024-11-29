import type { AxiosRequestConfig } from 'axios'

// 接口配置
interface ApiConfig extends AxiosRequestConfig {
  name: string
  baseURL: string
  timeout: number
}

// 从环境变量中获取配置
const getApiConfig = (
  name: string,
  baseURL: string,
  timeout: number,
  withCredentials: boolean = false
): ApiConfig => ({
  name,
  baseURL,
  timeout,
  withCredentials
})

// 接口配置数组
const apiConfigs: ApiConfig[] = [
  getApiConfig(
    'api',
    import.meta.env.VITE_API_BASE_URL,
    Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
    true
  ),
  getApiConfig(
    'upload',
    import.meta.env.VITE_UPLOAD_API_URL,
    Number(import.meta.env.VITE_UPLOAD_TIMEOUT) || 5000
  )
]

export default apiConfigs
