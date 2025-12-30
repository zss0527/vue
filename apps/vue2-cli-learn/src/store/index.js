import Vue from "vue";
import Vuex from "vuex";
import vuexLearn from "@/store/modules/vuexLearn";
import cart from "@/store/modules/cart";

// install Vuex plugin
Vue.use(Vuex)


const store = new Vuex.Store({
    //开启严格单向数据流，state的数据只能通过mutations修改，直接$store.state.count = xxx会报错
    //生产环境需要关闭，花费资源
    strict: true,
    // devtools: true,
    modules: {
        vuexLearn,
        cart
    }
})

// export to be used in main.js
export default store