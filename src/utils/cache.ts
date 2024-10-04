enum CacheType {
  Local,
  Session
}
class Cache {
  type: Storage
  constructor(type: CacheType) {
    this.type = type === CacheType.Local ? localStorage : sessionStorage
  }
  // 存储
  setCache(key: string, value: any) {
    if (value) {
      this.type.setItem(key, JSON.stringify(value))
    }
  }
  // 获取
  getCache(key: string) {
    const value = this.type.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  // 删除
  removeCache(key: string) {
    this.type.removeItem(key)
  }
  // 清空
  clearCache() {
    this.type.clear()
  }
}
const localCache = new Cache(CacheType.Local)
const sessionCache = new Cache(CacheType.Session)
export { localCache, sessionCache }
