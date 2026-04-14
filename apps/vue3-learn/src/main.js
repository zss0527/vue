import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
createApp(App).use(pinia.use(piniaPluginPersistedstate)).mount('#app')
