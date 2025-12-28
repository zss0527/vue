import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import CommonButton from "@/components/CommonButton.vue";

console.log(123333)
Vue.config.productionTip = false

Vue.component('CommonButton',CommonButton)
new Vue({
  // el: '#app',
  render: h => h(App),
}).$mount('#app')
