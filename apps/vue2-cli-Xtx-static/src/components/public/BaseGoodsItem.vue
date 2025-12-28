<script>
export default {
  name: "BaseGoodsItem"
}
</script>

<template>
  <li class="base-goods-item">
    <a href="#">
      <div class="pic"><img src="../../assets/images/goods4.png" alt="" /></div>
      <div class="txt">
        <h4>科技布布艺沙发</h4>
        <p>¥ <span>3759</span></p>
      </div>
    </a>
  </li>
</template>

<style scoped>
base-goods-item {
  width: 304px;
  height: 404px;
  background-color: #EEF9F4;
}
base-goods-item {
  display: block;
}
base-goods-item .pic {
  width: 304px;
  height: 304px;
}
base-goods-item .txt {
  text-align: center;
}
base-goods-item h4 {
  margin-top: 17px;
  margin-bottom: 8px;
  font-size: 20px;
}
base-goods-item p {
  font-size: 18px;
  color: #AA2113;
}
base-goods-item p span {
  font-size: 22px;
}
</style>