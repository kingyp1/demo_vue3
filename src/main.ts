import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
// svg
import 'virtual:svg-icons-register';
import '@/styles/index.scss';
import pinia from './store'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
