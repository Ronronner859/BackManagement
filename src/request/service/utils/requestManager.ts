import type { AxiosRequestConfig } from 'axios'

const pending = new Map<string, AbortController>()

/**
 * 生成请求键
 * @param config 请求配置
 * @returns 请求键
 */
const generateRequestKey = (config: AxiosRequestConfig): string => {
  return [
    config.method,
    config.url,
    JSON.stringify(config.params || {}),
    JSON.stringify(config.data || {})
  ].join('&')
}

/**
 * 添加请求
 * @param config 请求配置
 */
export const addPending = (config: AxiosRequestConfig) => {
  const requestKey = generateRequestKey(config)
  if (!pending.has(requestKey)) {
    const controller = new AbortController()
    config.signal = controller.signal
    pending.set(requestKey, controller)
    console.log(`Added pending request: ${requestKey}`)
  }
}

/**
 * 移除请求
 * @param config 请求配置
 */
export const removePending = (config: AxiosRequestConfig) => {
  const requestKey = generateRequestKey(config)
  if (pending.has(requestKey)) {
    const controller = pending.get(requestKey)
    // 没有在合适的时候移除，所以注释掉 需优化
    // controller?.abort()
    pending.delete(requestKey)
    console.log(`Removed pending request: ${requestKey}`)
  }
}
