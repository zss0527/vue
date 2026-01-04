import {createRouter, createWebHashHistory} from 'vue-router'
import LoginPage from "@/views/login/LoginPage.vue";
import LayoutContainer from "@/views/layout/LayoutContainer.vue";
import ArticleManage from "@/views/article/ArticleManage.vue";
import ArticleChannel from "@/views/article/ArticleChannel.vue";
import UserProfile from "@/views/user/UserProfile.vue";
import UserAvatar from "@/views/user/UserAvatar.vue";
import UserPassword from "@/views/user/UserPassword.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutContainer
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/article/manage',
      component: ArticleManage
    },
    {
      path: '/article/channel',
      component: ArticleChannel
    },
    {
      path: '/user/profile',
      component: UserProfile
    },
    {
      path: '/user/avatar',
      component: UserAvatar
    },
    {
      path: '/user/password',
      component: UserPassword
    },
    // {
    //   path: '*',
    //   redirect: '/login'
    // }
  ],
})

export default router
