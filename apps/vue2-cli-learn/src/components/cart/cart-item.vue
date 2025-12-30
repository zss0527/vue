<template>
  <div class="goods-container">
    <!-- 左侧图片区域 -->
    <div class="left">
      <img :src="cartItem.thumb" class="avatar" alt="">
    </div>
    <!-- 右侧商品区域 -->
    <div class="right">
      <!-- 标题 -->
      <div class="title">{{ cartItem.name }}</div>
      <div class="info">
        <!-- 单价 -->
        <span class="price">{{ cartItem.price }}</span>
        <div class="btns">
          <!-- 按钮区域 -->
          <button class="btn btn-light" @click="handleUpdateCount(-1)">-</button>
          <span class="count">{{ cartItem.count }}</span>
          <button class="btn btn-light" @click="handleUpdateCount(1)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartItem',
  props: {
    cartItem: Object,
  },
  methods: {
    ...mapActions('cart',['updateCountAction']),
    handleUpdateCount(step) {
      //注意这是不用通知父组件去更改数据，因为数据是共享的而不是父组件的
      // this.$emit('updateCartItemCount',{
      //   id:this.cartItem.step,
      //   count: +this.cartItem.count+step
      // })
      const id = this.cartItem.id
      const newCount = this.cartItem.count+step
      if(newCount < 1) return

      this.updateCountAction({
        id,
        newCount
      })
    },


  },
  created() {
    // console.log('cartItem: ',this.cartItem)
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  display: flex;
  padding-top: 5px;
  .left {
    .avatar {
      width: 100px;
      height: 100px;
    }
    margin-right: 10px;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-weight: bold;
    }
    .info {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      margin-right: 50px;
      .price {
        color: red;
        font-weight: bold;
      }
      .btns {
        margin: 0 10px;
        .count {
          display: inline-block;
          width: 30px;
          text-align: center;
        }
      }
    }
  }
}

.custom-control-label::before,
.custom-control-label::after {
  top: 3.6rem;
}
</style>
