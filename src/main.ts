import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import './assets/css/reset.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
