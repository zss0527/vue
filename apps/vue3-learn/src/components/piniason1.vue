<script setup>

import {useCounterStore} from "@/store/counter.js";

const counterStore = useCounterStore();
</script>

<template>
  <div>
    piniason1 - {{counterStore.count}} <button @click="counterStore.increment">+</button>
  </div>

</template>

<style scoped>

</style>