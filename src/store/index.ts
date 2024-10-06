import { createPinia } from 'pinia'
import { App } from 'vue'
import useLoginStore from './login/login'

const pinia = createPinia()

function setupStore(app: App) {
  app.use(pinia)
  const loginStore = useLoginStore()
  loginStore.loadLocationCache()
}
export default setupStore
