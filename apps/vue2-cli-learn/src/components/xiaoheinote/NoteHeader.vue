<script>
import Bus from "@/utils/EventBus";

export default {
  name: "NoteHeader",
  props: {
    isLoading: Boolean,
  },
  /*
  通过props或者inject接收到的变量，子组件可以通过this.变量名来使用
  优先级data>props>inject，优先级高的没有值会依次往下一优先级的找
   */
  inject: ['title','initTodoItem'],
  data() {
    return {
      title: this.title,
      todoItem: ''
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
  },
  mounted() {
    // this.$refs.inputTodoItem.focus()
  }
}
</script>

<template>
  <header class="header">
    <h1>{{title}}</h1>
    <input ref="inputTodoItem" :placeholder="this.initTodoItem.name" class="new-todo" v-model.trim="todoItem" @keyup.enter="addTodoItem"/>
    <button class="add button" @click="addTodoItem">添加任务</button>
  </header>
</template>

<style scoped>

</style>