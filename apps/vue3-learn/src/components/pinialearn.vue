<script setup>
import PiniaSon1 from '@/components/piniason1.vue'
import PiniaSon2 from '@/components/piniason2.vue'
import {useCounterStore} from "@/store/counter.js";
import {useChannelStore} from "@/store/channel.js";
import {storeToRefs} from "pinia";

// const count = ref(0)
const counterStore = useCounterStore()
const channelStore = useChannelStore()

// 直接解构store里面的数据会丢失响应式，通过storeToRefs处理后再结构不会丢失响应式,但是解析action不会丢失响应式
const { count, msg } = storeToRefs(counterStore)
</script>

<template>
<div>
  <div>
    <h4>piniafather - {{ count }} {{msg}}</h4>
    <button @click="channelStore.getList">获取channel</button>
    <ul>
      <li v-for="item in channelStore.channelList" :key="item.id">{{item.name}}</li>
    </ul>
  </div>

  <PiniaSon1></PiniaSon1>
  <PiniaSon2></PiniaSon2>
</div>
</template>

<style scoped>

</style>