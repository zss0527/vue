<script setup>

import PropsEmitsRefExpose2 from "@/components/propsemitsrefexpose2.vue";
import {ref} from "vue";

const money = ref(500)
const earnMoney = () => {
  money.value += 100
}
const decreaseMoney = (value) => {
  money.value -= value
}

let sonMoney = ref(null)

const getSonMoney = () => {
  console.log('getSonMoney')
  console.log(sonRef.value.ownMoney)
  sonMoney.value = sonRef.value.ownMoney
}

const sonRef = ref(null)

</script>
<template>
<div class="father">
  <div ref="sonRef" style="display: flex;align-items: center;">
    <h4 style="margin-left: 20px;">父组件 {{ money }}</h4>
    <button style="margin: 0 20px;" @click="earnMoney">挣钱</button>
    <button style="margin: 0 20px;" @click="getSonMoney">getSonOriginMoney</button>
    {{sonMoney}}
  </div>
  <PropsEmitsRefExpose2 :money="money" @lendMoney="decreaseMoney($event)" ref="sonRef"></PropsEmitsRefExpose2>
</div>
</template>

<style scoped>
.father {
  border: 3px solid black;
  margin: 20px;
}
</style>