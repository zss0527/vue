import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Pay from '@/views/pay/index.vue'
import Search from '@/views/search/index.vue'
import SearchList from '@/views/search/list.vue'
import ProductDetail from '@/views/productdetail/index.vue'
import MyOrder from '@/views/myorder/index.vue'
import User from '@/views/layout/user.vue'
import Cart from '@/views/layout/cart.vue'
import Category from '@/views/layout/category.vue'
import Home from '@/views/layout/home.vue'

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
    children: [
      {
        path: 'user',
        component: User
      },
      {
        path: 'cart',
        component: Cart
      },
      {
        path: 'category',
        component: Category
      },
      {
        path: 'home',
        component: Home
      }
    ]
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

export default router
