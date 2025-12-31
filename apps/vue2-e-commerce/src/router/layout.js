import User from '@/views/layout/user.vue'
import Cart from '@/views/layout/cart.vue'
import Category from '@/views/layout/category.vue'
import Home from '@/views/layout/home.vue'

export default [
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
