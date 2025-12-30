<script>
import NoteFooter from "@/components/xiaoheinote/NoteFooter.vue";
import NoteHeader from "@/components/xiaoheinote/NoteHeader.vue";
import NoteContent from "@/components/xiaoheinote/NoteContent.vue";
import {loading} from "@/directives";

export default {
  name: "XiaoHeiNote",
  components: {NoteContent, NoteHeader, NoteFooter},
  directives: {loading},
  data() {
    return {
      todoList: [
        // { id: 1, name: 'run 1 miles' }
      ],
      isLoading: true,
    }
  },
  methods: {
    addTodoItem(todoItem) {
      this.todoList.length >= 5 ? alert('Only can add 6 items!') : this.todoList.push(todoItem)
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
    if(localStorage.getItem('todoList')) {
      setTimeout(() => {
        this.isLoading = false
        this.todoList = JSON.parse(localStorage.getItem('todoList'))
      },2000)
    }
  }
}
</script>

<template>
  <section id="note" v-loading="isLoading">
    <NoteHeader :isLoading="isLoading" @addTodoItem="addTodoItem($event)"></NoteHeader>
    <NoteContent :todoList="todoList" @deleteTodoItem="deleteTodoItemById($event)"></NoteContent>
    <NoteFooter :todoList="todoList" @cleanTodoList="cleanTodoList"></NoteFooter>
  </section>
</template>

<style scoped>

</style>