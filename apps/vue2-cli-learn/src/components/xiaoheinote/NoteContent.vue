<script>
export default {
  name: "NoteContent",
  props: {
    todoList: {
      type: Array,
    }
  },
  data() {
    return {

    }
  },
  methods: {
    delTodoItem(id) {
      this.$emit('deleteTodoItem',id)
    },
  }
}
</script>

<template>
  <section class="main">
    <ul class="todo-list">
      <li class="todo" v-for="(item,index) in todoList" :key="item.id" >
        <div class="view">
          <span class="index">{{index + 1}}.</span> <label>{{item.name}}</label>
          <button class="destroy" @click="delTodoItem(item.id)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
</style>