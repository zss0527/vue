<script setup>
/* lifecycle用法：
1. setup, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted，
   之前beforeCreate和created在setup阶段了,beforeDestroy和destroyed改名为onBeforeUnmount和onUnmounted
2. 虽然后面的这些阶段在setup之后，但在setup内部可以通过这些函数来定义这些生命周期阶段的逻辑；
 */
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

console.log('setup')
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
const count = ref(0)
const updateCount = () => { count.value++ }
</script>

<template>
  {{ count }}
  <button @click="updateCount"> update count </button>
</template>

<style scoped>

</style>