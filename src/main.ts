import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import './assets/css/reset.css'
import App from './App.vue'
import router from './router'
import pinia from './store'
import './service/modules/home'
import './assets/tailwind/output.css' // 引入tailwindcss
import { createI18n } from 'vue-i18n'
// 1、创建中文语言包对象
const zh = {
  account: '账号登录',
  phone: '手机登录'
}
// 2、创建英文语言包对象
const en = {
  account: 'Account',
  phone: 'Phone'
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
createApp(App).use(router).use(pinia).use(i18n).mount('#app')
