<script>
import NoteFooter from "@/components/xiaoheinote/NoteFooter.vue";
import NoteHeader from "@/components/xiaoheinote/NoteHeader.vue";
import NoteContent from "@/components/xiaoheinote/NoteContent.vue";

export default {
  name: "XiaoHeiNote",
  components: {NoteContent, NoteHeader, NoteFooter},
  data() {
    return {
      todoList: [],
    }
  },
  methods: {
    addTodoItem(todoItem) {
      this.todoList.length >= 6 ? alert('Only can add 6 items!') : this.todoList.push(todoItem)
    },
    deleteTodoItemById(id) {
      this.todoList = this.todoList.filter(item => item.id !== id)
    },
    cleanTodoList() {
      this.todoList = []
    }
  },
  watch: {
    todoList: {
      deep: true,
      handler(newTodoList) {
        localStorage.setItem("todoList", JSON.stringify(newTodoList))
      }
    }
  },
  created() {
    this.todoList = JSON.parse(localStorage.getItem('todoList'))
  }
}
</script>

<template>
  <section id="note">
    <NoteHeader @addTodoItem="addTodoItem($event)"></NoteHeader>
    <NoteContent :todoList="todoList" @deleteTodoItem="deleteTodoItemById($event)"></NoteContent>
    <NoteFooter :todoList="todoList" @cleanTodoList="cleanTodoList"></NoteFooter>
  </section>
</template>

<style scoped>

</style>