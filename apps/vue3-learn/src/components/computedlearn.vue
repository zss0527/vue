<script setup>
/* computed用法
1. const variable = computed(() => { return data})
2. const variable = computed({
      get: () => {}
      set: (val) => {}
   })
 */
import {computed, ref} from "vue";

const originList = ref([1,2,3,4,5,6,7,8,9])
const updateOriginList = () => {
  originList.value.push(10)
}

const computedList = computed(() => originList.value.filter(item => item > 5))
</script>

<template>
  <div>originList: {{ originList }}</div>
  <div>computedList: {{ computedList }}</div>
  <button @click="updateOriginList">更改originList</button>
</template>

<style scoped>

</style>