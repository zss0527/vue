<script>
import MyTable from "@/components/MyTable.vue";

export default {
  name: "ViewSecond",
  components: {MyTable},
  data() {
    return {
      list: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ],
    }
  },
  methods: {
    delItem(id) {
      this.list = this.list.filter(item => item.id !== id)
    }
  }
}
</script>

<template>
  <MyTable :data="list">
    <template #default="obj">
      <button @click="delItem(obj.id)">删除</button>
    </template>
  </MyTable>
</template>

<style scoped>

</style>