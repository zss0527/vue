<script>
export default {
  name: "NoteFooter",
  props: {
    todoList: {
      type: Array
    }
  },
  methods: {
    cleanTodoList() {
      this.$emit('cleanTodoList')
    },
  }
}
</script>

<template>
  <footer class="footer" v-show="todoList.length > 0">
    <!-- 统计 -->
    <span class="todo-count">合 计:<strong> {{todoList.length}} </strong></span>
    <!-- 清空 -->
    <button class="clear-completed button" @click="cleanTodoList">
      清空任务
    </button>
  </footer>
</template>

<style scoped>

</style>