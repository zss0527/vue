<script setup>
// import {useRouter} from "vue-router";
// import {ref} from "vue";
// import {useUserStore, useCounterStore } from './stores'
//
// const router = useRouter()
// const goList = () => {
//   router.push("/list")
// }
// const checked1 = ref(false)
// const checked2 = ref(true)
//
// const userStore = useUserStore()
// const counterStore = useCounterStore()

</script>

<template>
  <div>
<!--    i am app-->
<!--    <el-button @click="$router.push('/home')">home</el-button>-->
<!--    <el-button @click="goList">list</el-button>-->
<!--    <el-checkbox v-model="checked1" disabled>Disabled</el-checkbox>-->
<!--    <el-checkbox v-model="checked2">Not disabled</el-checkbox>-->
<!--    <div>-->
<!--      <p>{{userStore.token}}</p>-->
<!--      <el-button type="primary" @click="userStore.setToken('dfsdfdfdfdf')">login</el-button>-->
<!--      <el-button type="success" @click="userStore.removeToken">logout</el-button>-->
<!--    </div>-->
<!--    <div>-->
<!--      {{counterStore.count}}-->
<!--      <el-button @click="counterStore.increment">+</el-button>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<style scoped>

</style>
