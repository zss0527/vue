<script>

import {ref} from "vue";
/*
vue3中组件有三种写法：
1.选项式，写法和vue2几乎一样
<script>
export default {
  data() {
    return { msg: 'hello' }
  },
  mounted() {
    console.log(this.msg) // 有this
  }
}
<//script>

2.混合式：选项式里面单独写setup函数，然后在setup函数里面写组合式代码，外面写选项式代码
<script>
export default {
  setup() {
    const count = ref(0)
    return { count } // 返回的变量，模板里可以直接用
  },
  mounted() {
    console.log(this.count) // 这里mounted里面依然有this
  }
}
<//script>

3.（纯）组合式，语法糖，相当于只写混合式里setup函数内的内容，当然也可以通过组合式并将里面选项式的代码移除来实现
<script>
export default {
  setup() {
    const count = ref(0)
    return { count } // 返回的变量，模板里可以直接用
  },
  mounted() {
    console.log(this.count) // 这里mounted里面依然有this
  }
}
<//script>
 */

export default {
/* setup用法
  1. setup本质上是一个vue的入口函数，在beforeCreate之前，在此期间vue实例还没有创建所以没有setup函数里没有this；
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
    console.log('beforeCreate')
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