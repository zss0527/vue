import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import './styles/element/index.scss'
import './styles/common.scss'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'
import { getCategory } from "@/apis/testAPI.js";

getCategory().then(res => {
    console.log(res)
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
