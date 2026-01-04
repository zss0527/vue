<script setup>
import {useCounterStore} from "@/store/counter.js";

const counterStore = useCounterStore();
</script>

<template>
  <div>
    piniason2 - {{ counterStore.count }}  {{counterStore.doubleCount}}<button @click="counterStore.decrement">-</button>
  </div>

</template>

<style scoped>

</style>