<template>
  <div class="App">
    <HmHeader></HmHeader>
    <HmMain></HmMain>
    <HmFooter></HmFooter>
    <MyTable :data="list1">
      <template>
        <button>查看</button>
      </template>
    </MyTable>
    <MyTable :data="list2">
      <template #default="obj">
        <button @click="delItem(obj.id)">删除</button>
      </template>
    </MyTable>/
  </div>
</template>

<script>

import HmHeader from "@/components/HmHeader.vue";
import HmMain from "@/components/HmMain.vue";
import HmFooter from "@/components/HmFooter.vue";
import MyTable from "@/components/MyTable.vue";

export default {
  name: 'App',
  components: {
    MyTable,
    //HmHeader:HmHeader
    HmHeader,
    HmMain,
    HmFooter,
  },
  beforeCreate() {
    console.log('beforeCreate in App component')
  },
  data() {
    return {
      list1: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ]
    }
  },
  methods: {
    delItem(id) {
      this.list2 = this.list2.filter(item => item.id !== id)
    }
  }
}
</script>

<style scoped>
.App {
  width: 600px;
  height: 900px;
  background-color: #87ceeb;
  margin: 0 auto;
  padding: 20px;
}
</style>
