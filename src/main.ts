import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import './assets/css/reset.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind/output.css' // 引入tailwindcss
import { createI18n } from 'vue-i18n'
import icons from './global/register-icons'
import './assets/css/index.css'
import { useLoginStore } from './store/login/login'
// 针对ElMessage的样式
// import 'element-plus/theme-chalk/el-message.css'
console.log(import.meta.env)

// 1、创建中文语言包对象
const zh = {
  account: '账号登录',
  phone: '手机登录',
  username: '用户名',
  password: '密码',
  scan: '扫码登录',
  remember: '记住我',
  forget: '忘记密码',
  login: '登录',
  code: '验证码',
  BackendManagementSystem: '后台管理系统'
}
// 2、创建英文语言包对象
const en = {
  account: 'Account',
  phone: 'Phone',
  username: 'Username',
  password: 'Password',
  scan: 'Scan',
  remember: 'Remember me',
  forget: 'Forget password',
  login: 'Login',
  BackendManagementSystem: 'Backend Management System',
  code: 'Code'
}
// 3、组合语言包对象
const messages = {
  zh,
  en
}
const i18n = createI18n({
  locale: 'en',
  messages
})
const app = createApp(App)
app.use(i18n)
app.use(icons)
app.use(store)
app.use(router)
app.mount('#app')
