<script setup>
/* ref和reactive用法
1. setup中的普通数据不具备响应式特性，只有被reactive或者ref函数包裹的数据才具有响应式；
2. reactive只能创建对象类型的响应式数据，无论在script还是模版中都可以直接使用reactive创建的响应式变量；
3. ref可以创建对象和简单类型的响应式数据，在script需要通过.value才能访问获取数据，在模版中会自动调用.value也就是在模版中可以直接使用ref创建的变量；
4. 最佳实践：项目中通过ref创建响应式数据，尽量不使用reactive
 */
import {reactive, ref} from "vue";

const count = ref(5)
const obj = ref({
  name: 'xiaohei',
  age: 18
})

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

const reactiveData = reactive({
  title: 'this is title',
  address: 'china'
})
</script>

<template>
  <span @click="decrement">-</span>{{ count }}<span @click="increment">+</span> <br>
  {{ obj }} <br>
  {{ reactiveData }}

</template>

<style scoped>

</style>