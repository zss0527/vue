import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Pay from '@/views/pay/index.vue'
import Search from '@/views/search/index.vue'
import SearchList from '@/views/search/list.vue'
import ProductDetail from '@/views/productdetail/index.vue'
import MyOrder from '@/views/myorder/index.vue'
import layout from '@/router/layout'
import { getUserInfo } from '@/utils/storage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: layout
  },
  {
    path: '/pay',
    component: Pay
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/search-list',
    component: SearchList
  },
  {
    path: '/product-detail/:id',
    component: ProductDetail
  },
  {
    path: '/my-order',
    component: MyOrder
  }
]

const router = new VueRouter({
  routes
})

/* 路由前置守卫，所有路由都要经过前置路由守卫
  to：  目标路由的完整信息(path，param...)
  from：从哪里来的完整路由信息
  next：拦截放行函数：
    next()      直接放行，放行到to要去的路径
    next(path)  进行拦截，拦截到next里面配置的路径
 */
const authPathList = ['/my-order', '/pay']
router.beforeEach((to, from, next) => {
  // console.log('to: ', to.path, 'from: ', from.path)
  if (authPathList.includes(to.path)) {
    if (getUserInfo().token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
