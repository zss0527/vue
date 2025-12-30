<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: "SonTwo",
  computed: {
    ...mapState('vuexLearn',['count','title']),
  },
  methods: {
    ...mapMutations('vuexLearn',['increment'])
  }
}
</script>

<template>
  <div class="box">
    <h2>Son2 子组件: {{title}}</h2>
    从vuex中获取到的值：{{ count }}<label></label>
    <br>
<!--    <button @click="$store.commit('increment',-1)">值 - 1</button>-->
    <button @click="increment(-1)">值 - 1</button>
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