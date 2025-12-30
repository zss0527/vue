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

<!--      <div class="item item4" @click="navigate">编程式导航</div>-->
      <router-link to="/mobile" class="item item4">移动端</router-link>
      <router-link to="/detail" class="item item5">detail</router-link>
    </div>
    <!--
      keep-alive三个参数：
        include：组件名数组(没有配置name的话以组件对应的文件名)，将被缓存的组件
        exclude：组件名数组，排除的组件
        max：最大缓存的组件的个数

      被include的组件会多出两个生命周期函数，且原有的created，mounted等不会触发，应该在一下两个新的生命周期里完成需要的逻辑：
        activated：组件被看到时触发
        deactivated：离开页面时触发
    -->
    <keep-alive :include="['MobileLayoutPage']" max="3">
      <router-view></router-view>
    </keep-alive>
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
      /*
      this.$router.push({
        path:'/view3/2456',
        query: {
          k1: 'v1',
          k2: 'v2'
        }
      })
      */
      this.$router.push({
        name:'view3',
        params: {
          id: '12345'
        },
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
