<template>
  <div class="app-container">
    <!-- Header 区域 -->
    <cart-header></cart-header>

    <!-- 商品 Item 项组件 -->
    <cart-item v-for="item in cartList" :key="item.id" :cartItem="item"></cart-item>

    <!-- Foote 区域 -->
    <cart-footer :totalCount="totalCount" :totalPrice="totalPrice"></cart-footer>
  </div>
</template>

<script>
import CartHeader from "@/components/cart/cart-header.vue";
import CartItem from "@/components/cart/cart-item.vue";
import CartFooter from "@/components/cart/cart-footer.vue";
import {mapState,mapActions,mapGetters} from 'vuex'

export default {
  name: 'UserPage',
  components: {CartFooter, CartItem, CartHeader},
  computed: {
    ...mapState('cart',['cartList']),
    ...mapGetters('cart',['totalCount','totalPrice'])
  },
  methods: {
    ...mapActions('cart',['getCartList','updateCountAction'])
  },
  created() {
    this.getCartList()
  }
}
</script>
<style lang="less">
.app-container {
  margin: 0 auto;
  width: 50%;
  font-size: 14px;
}
</style>
