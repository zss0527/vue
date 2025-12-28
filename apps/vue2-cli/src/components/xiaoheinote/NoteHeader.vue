<script>
import Bus from "@/utils/EventBus";

export default {
  name: "NoteHeader",
  data() {
    return {
      title: '小黑记事本',
      todoList: [
        { id: 1, name: 'run 1 miles' },
        { id: 2, name: 'eat breakfast' },
        { id: 3, name: 'learn vue' }
      ],
      todoItem: '',
    }
  },
  methods: {
    addTodoItem() {
      if(this.todoItem.trim() === '') {
        alert('Please input todo item!')
      } else {
        this.$emit('addTodoItem',{id:+new Date,name: this.todoItem})
        this.todoItem = ''
      }
    },

  },
  created() {
    Bus.$on('eventBusMsg',(msg) => {
      this.title=msg
    })
  }
}
</script>

<template>
  <header class="header">
    <h1>{{title}}</h1>
    <input placeholder="请输入任务" class="new-todo" v-model.trim="todoItem" @keyup.enter="addTodoItem"/>
    <button class="add button" @click="addTodoItem">添加任务</button>
  </header>
</template>

<style scoped>

</style>