import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './assets/fonts/iconfont.css'

createApp(App)
.use(router)
.use(createPinia())     
.mount('#app')