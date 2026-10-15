import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from "@/router/index.js";

/**
 * vue3中route的创建和使用：
 * 只需要在router/index.js中通过createRouter创建路由对象并export出来，然后在main.js挂载时通过use(router)绑定即可
 * export default createRouter({
 *     history: createWebHistory(),
 *     routes: [
 *         {
 *          path: '/',
 *          name: 'Home',
 *          component: Home
 *          },
 *     ]
 * })
 *
 * createApp(App).use(router).mount('#app')
 */

/**
 *vue3中pinia的创建和使用
 * vue3中没有所谓的根store，默认每个store都是单独的‘module’，所以store目录下不用index.js中创建并归纳modules，只需要在store中直接写各个store即可，
 * 在main.js中直接简单通过const pinia = createPinia()创建pinia，然后在main.js中挂载的时候通过use绑定即可
 *
 * const pinia = createPinia()
 * createApp(App)
 *     .use(pinia)
 *     .mount('#app')
 */

const pinia = createPinia()
createApp(App)
    .use(pinia.use(piniaPluginPersistedstate))
    .use(router)
    .mount('#app')
