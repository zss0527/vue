<script>

import {ref} from "vue";

export default {
/* setup用法
  1. setup本质上是一个vue的生命周期函数，在beforeCreate之前，在此期间vue实例还没有创建所以没有setup函数里没有this；
  2. setup里的响应式数据最终会被加载到vue实例和template中，所以如果同一个组件中有options写法则在options中可以通过this读写setup中的数据和方法；
  3. 非语法糖的setup()函数里面的数据需要return出去才能被本组件实例或者别的组件访问；
*/
  setup () {
    const msg = ref('Hello World!')
    // const notReturnedData = 123
    const updateMsg = () => {
      msg.value = 'dfsdfsfdsf'
    }
    return {
      msg,
      updateMsg
    }
  },
  beforeCreate () {
    // console.log('beforeCreate')
  },
  data () {
    return {
      optionData: this.msg,
    }
  },
  methods: {
    updateOptionData () {
      this.optionData = 'updated msg'
      this.updateMsg()
    }
  }
}

</script>

<template>
  <button @click="updateOptionData">Update</button>
  <div>msg: {{ msg }}</div>
  <div>optionData: {{ optionData }}</div>
<!--  <div>notReturnedData: {{ notReturnedData }}</div>-->
</template>

<style scoped>

</style>