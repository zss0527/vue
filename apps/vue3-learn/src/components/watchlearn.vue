<script setup>
/* watch使用
1. watch(data, (newVal, oldVal) => {})
2. watch([data1,data2], (newVal, oldVal) => {})
3. watch(() => obj.field, (newVal, oldVal) => {})
4. watch(data, (newVal, oldVal) => {}, {deep: true, immediate: true}})
 */
import {ref, watch} from "vue";

let flag = true
const count = ref(0)
let person = ref({
  name: 'zhangsan',
  age: 18
})

watch(count, (newCount, oldCount) => {
  console.log(`count发生了变化，老值为${oldCount}，新值为${newCount}`)
})

watch(person, (newVal, oldVal) => {
  console.log(`person发生了变化，老值为${oldVal}，新值为${newVal}`)
})

watch(() => person.value.name, (newVal, oldVal) => {
  console.log(`person.name发生了变化，老值为${oldVal}，新值为${newVal}`)
})

watch(person, (newVal, oldVal) => {
  console.log(`person内的值发生了变化，老值为${oldVal}，新值为${newVal}`)
},{
  deep: true,
})

watch([count,person], (newVal, oldVal) => {
  console.log(`count或者person发生了变化with deep:true，老值为${oldVal}，新值为${newVal}`)
})

const updateCount = () => { count.value++ }
const updateName = () => {
  flag = !flag
  flag ? person.value.name = 'lisi' : person.value.name = 'zhangsan'
}
const updateAge = () => { person.value.age++ }
const updatePerson = () => {
  person.value = {
    name: 'ddddd',
    age: 22
  }
  //这种方式不会触发watch
  // person = ref({
  //   name: 'ddddd',
  //   age: 22
  // })
}
</script>

<template>
  <div>
    {{ count }}  {{ person }} <br>
    <button @click="updateCount">update count</button>
    <button @click="updateName">update name</button>
    <button @click="updateAge">update age</button>
    <button @click="updatePerson">update person</button>
  </div>
</template>

<style scoped>

</style>