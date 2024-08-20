import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import './assets/css/reset.css'
import App from './App.vue'
import router from './router'
import pinia from './store'

createApp(App).use(router).use(pinia).mount('#app')
