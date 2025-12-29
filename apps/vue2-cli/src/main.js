import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import CommonButton from "@/components/CommonButton.vue";
import {focus} from "@/directives";
import router from "@/router";

console.log(123333)
Vue.config.productionTip = false

//全局注册组件
Vue.component('CommonButton',CommonButton)
//全局注册自定义指令
Vue.directive('focus',focus)

/* Vue2路由使用步骤：
1. pnpm add vue-router@3
2. 创建路由
  2.1. import VueRouter from 'vue-router'
  2.2. 安装注册 Vue.use(VueRouter)
  2.3. 创建VueRouter实例
      const router = new VueRouter({
        routes: [
          {
          path: '/',
          component: Home
        }
        ]
      })
3. 将路由对象注入到Vue实例中
    new Vue({
      router,
      render: h => h(App)
    })
*/

//创建Vue实例并绑定容器
new Vue({
  // el: '#app',
  router,
  render: h => h(App),

}).$mount('#app')
