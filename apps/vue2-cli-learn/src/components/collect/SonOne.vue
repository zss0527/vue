<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: "SonOne",
  computed: {
    ...mapState(['count','title'])
  },
  methods: {
    // handleAdd(step) {
    //   // this.$store.state.count++
    //   this.$store.commit('increment',step)
    // }
    ...mapMutations(['increment'])
  },
  created() {
    // console.log(this.$store.state.count)
  }
}
</script>

<template>
<div class="box">
  <h2>Son1 子组件</h2>
  从vuex中获取到的值：{{count}}<label></label>
  <br>
  <div style="display: flex; justify-content: space-evenly;">
<!--    <button @click="handleAdd(1)">值 + 1</button>-->
<!--    <button @click="handleAdd(5)">值 + 5</button>-->
    <button @click="increment(1)">值 + 1</button>
    <button @click="increment(5)">值 + 5</button>
  </div>
</div>
</template>

<style scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}

h2 {
  margin-top: 10px;
}
</style>