<script setup>
defineProps({
  modelValue: String,
  mydata: String,
})

const emit = defineEmits(['update:modelValue','update:mydata'])
const myTitle = defineModel('title')
</script>

<template>
  <div style="display: flex; align-items: center; justify-content: space-evenly; margin: 0 20px">
    <input type="text" :value="modelValue" @input="e => emit('update:modelValue',e.target.value)"/>
    <input type="text" :value="mydata" @input="e => emit('update:mydata',e.target.value)"/>

    <input type="text" :value="myTitle" @input="e => myTitle=e.target.value"/>
  </div>

</template>

<style scoped>

</style>