import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import CommonButton from "@/components/CommonButton.vue";
import {focus} from "@/directives";

console.log(123333)
Vue.config.productionTip = false

//全局注册组件
Vue.component('CommonButton',CommonButton)
//全局注册自定义指令
Vue.directive('focus',focus)
new Vue({
  // el: '#app',
  render: h => h(App),
}).$mount('#app')
