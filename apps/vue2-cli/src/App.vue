<template>
  <div>
    <div class="nav">
<!--      <a href="#/view1" class="item1">view-one</a>-->
<!--      <a href="#/view2" class="item2">view-two</a>-->
<!--      <a href="#/view3" class="item3">view-three</a>-->
      <!--
      1.查询参数传参：/path?key=value&key=value
      对应页面通过this.$route.query.key来获取传过来的参数值
      -->
      <router-link to="/view1?k1=v1&k2=v2" class="item item1">view-one</router-link>
      <router-link to="/view2" class="item item2">view-two</router-link>
      <!--
      2.动态路由传参：/path/value，在路由配置处通过/path/:id
      对应页面通过this.$route.params.id来获取传过来的参数值
      -->
      <router-link to="/view3/4573" class="item item3">view-three</router-link>

      <div class="item item4" @click="navigate">编程式导航</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    navigate() {
      /* 编程式导航：
        通过path：this.$router.push(path) 或者 this.$router.push({path:'path',query: {k:v})
        通过name：this.$router.push({name:'routerName',query:{k:v})
      */
      this.$router.push({
        path:'/view3/2456',
        query: {
          k1: 'v1',
          k2: 'v2'
        }
      })
    }
  },
  beforeCreate() {
    console.log('beforeCreate in App component')
  },
}
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.item {
  display: block;
  width: 100%;
  line-height: 30px;
  text-decoration: none;
  background-color: #333;
  text-align: center;
  color: white;
  border: 1px solid black;
}

.nav .link-active {
  background-color: purple;
}

.item:hover {
  background-color: #555;
}
</style>
