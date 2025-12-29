import Vue from 'vue'
import Router from 'vue-router'
import ViewFirst from "@/views/ViewFirst";
import View3 from "@/views/ViewThird.vue";
import View2 from "@/views/ViewSecond.vue";

Vue.use(Router) // Vue 2 中必须通过 Vue.use 注册插件

export default new Router({
    routes: [
        {
            path: '/',
            name: 'ViewFirst',
            component: ViewFirst
        },
        {
            path: '/view1',
            name: 'ViewFirst',
            component: ViewFirst
        },
        {
            path: '/view2',
            name: 'View2',
            component: View2
        },
        {
            path: '/view3',
            name: 'View3',
            component: View3
        }
    ]
})