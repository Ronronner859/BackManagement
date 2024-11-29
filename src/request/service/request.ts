import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { createAxiosInstance, createRequest } from './interceptors/request'
import apiConfigs from './config'
import type { HttpGlobalResponse } from '@/types'

/**
 * Http 类用于管理和发送 HTTP 请求。
 *
 * 该类包含两个主要映射：'instances' 和 'requests'。
 * 'instances' 映射存储每个 API 配置的 Axios 实例。
 * 'requests' 映射存储每个实例的请求函数。
 */
class Http {
  private instances: Map<string, AxiosInstance> = new Map()
  private requests: Map<string, ReturnType<typeof createRequest>> = new Map()

  /**
   * 构造函数，初始化每个 API 配置的实例。
   */
  constructor() {
    this.initInstances()
  }

  /**
   * 初始化每个 API 配置的实例。
   *
   * 此方法遍历 API 配置数组，为每个配置创建一个 Axios 实例。
   * 创建的实例存储在 'instances' 映射中，使用实例名称作为键。
   * 此外，它使用 'createRequest' 函数为每个实例创建一个请求函数，并将其存储在 'requests' 映射中。
   */
  private initInstances() {
    apiConfigs.forEach((config) => {
      const instance = createAxiosInstance(config)
      this.instances.set(config.name, instance)
      this.requests.set(config.name, createRequest(instance))
    })
  }
  /**
   * 发送 HTTP 请求。
   *
   * @param name - 接口实例的名称。
   * @param config - 请求的配置。
   * @returns 一个承诺，解析为来自服务器的响应。
   * @throws {Error} 如果未找到接口实例。
   */
  public request<T = any>(
    name: string,
    config: AxiosRequestConfig
  ): Promise<HttpGlobalResponse<T>> {
    // 获取接口请求
    const request = this.requests.get(name)
    if (!request) {
      throw new Error(`API instance "${name}" not found`)
    }
    return request<T>(config)
  }

  /**
   * 发送请求以获取令牌。
   *
   * @param name - 接口实例的名称。
   * @param config - 请求的配置。
   * @returns 一个承诺，解析为来自服务器的响应。
   */
  public requestToken<T = any>(
    name: string,
    config: AxiosRequestConfig
  ): Promise<HttpGlobalResponse<T>> {
    return this.request<T>(name, config)
  }
}

export default Http
