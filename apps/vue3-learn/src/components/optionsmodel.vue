<script setup>
/*
1. defineOptions可以用来定义任意的options选贤（除了props，emits，expose，slots，这些有单独的宏函数）
2. vue3中双向绑定的属性和事件分别是:modelValue和@update:modelValue(父组件可以通过v-model:xxx中的xxx代替modelValue这部份的默认值);
    defineModel简化了defineProps和defineEmits这两步
 */
import MyInput from '@/components/myinput.vue'
import {ref} from "vue";

defineOptions({
  name: 'OptionsModel',
})
//traditional default modelValue
let defaultModelValue = ref('')
//traditional v-model:customName
let data = ref('')
//defineModel('customName')
let title = ref("")
</script>

<template>
<div>
  <MyInput v-model="defaultModelValue" v-model:mydata="data"  v-model:title="title"></MyInput>
  <div style="display: flex; align-items: center; justify-content: space-evenly; margin: 0 20px">
    <div style="border: 2px black solid; margin: 0 5px">{{defaultModelValue}}</div>
    <div style="border: 2px black solid; margin: 0 5px">{{data}}</div>
    <div style="border: 2px black solid; margin: 0 5px">{{title}}</div>
  </div>
</div>
</template>

<style scoped>

</style>