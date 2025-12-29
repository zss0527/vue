import Vue from 'vue'
import Router from 'vue-router'
import ViewFirst from "@/views/ViewFirst";
import View3 from "@/views/ViewThird.vue";
import View2 from "@/views/ViewSecond.vue";

Vue.use(Router) // Vue 2 中必须通过 Vue.use 注册插件

export default new Router({
    mode:"hash",
    routes: [
        {
            path: '/',
            redirect: '/view1'
        },
        {
            path: '/view1',
            component: ViewFirst
        },
        {
            path: '/view2',
            component: View2
        },
        {
            path: '/view3/:id?',
            component: View3
        },
        {
            path: '*',
            component: View2
        }
    ],
    linkActiveClass: 'link-active',
    linkExactiveClass: 'link-exact-active',
})