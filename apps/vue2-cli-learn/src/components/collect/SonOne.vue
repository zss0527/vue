<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

export default {
  name: "SonOne",
  data() {
    return {

    }
  },
  computed: {
    ...mapState('vuexLearn',['count','title','list']),
    ...mapGetters('vuexLearn',['filterList']),
  },
  methods: {
    // handleAdd(step) {
    //   // this.$store.state.count++
    //   this.$store.commit('increment',step)
    // }
    ...mapMutations('vuexLearn',['increment','setList']),
    // asyncHandleCount(step) {
    //   this.$store.dispatch('setAsyncCount',step)
    // }
    ...mapActions('vuexLearn',['setAsyncCount']),
  },
  updated() {
    // console.log(this.$store.state.vuexLearn.count)
    // console.log(this.list)
    // console.log('filterList: ',this.$store.getters['vuexLearn/filterList'])
    // this.$store.commit('vuexLearn/setCount',5)
    // this.$store.dispatch('vuexLearn/setAsyncCount',10)
  }
}
</script>

<template>
<div class="box">
  <div style="display: flex; justify-content: space-between;">
    <h2>Son1 子组件</h2>
    <h2>{{filterList}}</h2>
  </div>

  从vuex中获取到的值：{{count}}<label></label>
  <br>
  <div style="display: flex; justify-content: space-evenly;">
<!--    <button @click="handleAdd(1)">值 + 1</button>-->
<!--    <button @click="handleAdd(5)">值 + 5</button>-->
    <button @click="increment(1)">值 + 1</button>
    <button @click="increment(5)">值 + 5</button>
<!--    <button @click="asyncHandleCount(-5)">1秒后-5</button>-->
    <button @click="setAsyncCount(-5)">1秒后-5</button>
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

h2, span {
  margin-top: 10px;
}
</style>