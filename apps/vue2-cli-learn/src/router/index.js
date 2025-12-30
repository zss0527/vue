import Vue from 'vue'
import Router from 'vue-router'
import ViewFirst from "@/views/ViewFirst";
import View3 from "@/views/ViewThird.vue";
import View2 from "@/views/ViewSecond.vue";
import MobileLayout from "@/views/MobileLayout.vue";
import ArticleDetail from "@/views/ArticleDetail.vue";
// import Article from "@/views/Article.vue";
// import Collect from "@/views/Collect.vue";
// import Like from "@/views/Like.vue";
// import User from "@/views/Cart.vue";
import mobile from "@/router/mobile";

// install Router plugin
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
            name: 'view3',
            path: '/view3/:id?',
            component: View3
        },
        {
            path: '/mobile',
            component: MobileLayout,

            /* 二级路由:
                1.在Router中在对应的上一级路由配置处通过children配置子路由规则；
                2.在对应的上一级路由对应的组件中配置路由出口
                注意，子路由path值以/开头表示绝对路径，否则表示相对上一级路径
             */
            // children: [
            //     {
            //         path: '',
            //         redirect: 'article'
            //     },
            //     {
            //         path: 'article/:id?',
            //         component: Article
            //     },
            //     {
            //         path: 'collect',
            //         component: Collect
            //     },
            //     {
            //         path: 'like',
            //         component: Like
            //     },
            //     {
            //         path: 'user',
            //         component: User
            //     },
            // ]
            children: mobile
        },
        {
            path: '/detail/:id?',
            component: ArticleDetail
        },
        {
            path: '*',
            component: ViewFirst
        }
    ],
    linkActiveClass: 'link-active',
    linkExactiveClass: 'link-exact-active',
})