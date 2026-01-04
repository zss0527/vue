<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter()
const goList = () => {
  router.push("/list")
}
const checked1 = ref(false)
const checked2 = ref(true)
</script>

<template>
  <div>
    i am app
    <el-button @click="$router.push('/home')">home</el-button>
    <el-button @click="goList">list</el-button>
    <el-checkbox v-model="checked1" disabled>Disabled</el-checkbox>
    <el-checkbox v-model="checked2">Not disabled</el-checkbox>
  </div>
</template>

<style scoped>

</style>
