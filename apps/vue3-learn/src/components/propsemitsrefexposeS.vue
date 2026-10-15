<script setup>
/* 父子组件传值：
1.因为setup结构，无法直接配置props选项，vue3提供了编译器宏defineProps来接收父组件传过来的值；
  const props = defineProps({k1:Type})
  const myData = props.k1
2.通过defineEmits函数声明事件列表
  const emit = defineEmits(['eventName1','eventName2'...])
  emit('eventName1',payload)
3.子组件可以通过defineExpose({})向父组件暴露数据和方法，父组件通过ref='refName'拿到，并通过refName.value.xxx拿到暴露的数据或者方法
  defineExpose({data1,method1})
  <SonCom ref="myRef"/>
  myRef.value.method1() //vue2默认全部暴露，父组件通过this.$refs.myRef.xxx调用
 */
import {inject, onMounted, ref} from "vue";

const props = defineProps({
  money: Number,
})
const ownMoney = ref(20)
const earnMoney = () => {
  ownMoney.value += 15
}

const emit1= defineEmits(['lendMoney'])
const borrowMoney = () => {
  emit1('lendMoney',30)
}
const inputRef = ref(null)
onMounted(() => {
  inputRef.value.focus()
})

defineExpose({
  ownMoney,
})

const appData = inject("appData")
</script>

<template>
<div class="son">
  <div style="display: flex;align-items: center;">
    <h4 style="margin-left: 20px;">子组件  {{ ownMoney + props.money }}</h4>
    <button @click="earnMoney" style="margin: 0 20px;">挣钱</button>
    <button @click="borrowMoney" style="margin: 0 20px;">花钱</button>
    <input ref="inputRef" placeholder="please input value"/>
  </div>
  <div style="margin-left: 20px;">{{ appData }}</div>
</div>
</template>

<style scoped>
.son {
  border: 3px solid black;
  margin: 30px;
}
</style>