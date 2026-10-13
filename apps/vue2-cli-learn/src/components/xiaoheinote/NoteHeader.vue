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
    addTodoItemInner() {
      if(this.todoItem.trim() === '') {
        alert('Please input todo item!')
      } else {
        //emit的第一个参数名为该组件将会新添的事件名，第二个参数为父组件调用这个事件收到的值一般通过$event接收（也可以说是子组件向父组件传递的值）
        //react中则是父组件定义好函数后直接通过一个props传给子组件，子组件在触发逻辑中直接调用这个props并传值
        //vue和react子传父形式上有差别但本质一样，都是父组件定义函数子组件触发，只不过react中是子组件直接调用这个函数，vue中通过this.$emit发射出去感觉像是父组件在监听这个事件，相当于比react多了一步是间接；本质一样一个间接一个直接；
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
    <input ref="inputTodoItem" :placeholder="this.initTodoItem.name" class="new-todo" v-model.trim="todoItem" @keyup.enter="addTodoItemInner"/>
    <button class="add button" @click="addTodoItemInner">添加任务</button>
  </header>
</template>

<style scoped>

</style>