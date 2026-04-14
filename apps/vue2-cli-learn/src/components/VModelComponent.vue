<script>
export default {
  /*
    v-model原理是绑定value属性和dom的默认事件例如input的@input和select的@change事件,同时要求：props用value接收，emit事件名为dom默认事件名
    .sync语法可以自定义接收的props的变量名和emit出的事件名'update:prop-name'
  */
  name: "VModelComponent",
  props: {
    // value: String,
    myValue: String
  },
  methods: {
    handleChange(event) {
      // this.$emit('input', event.target.value);
      this.$emit('update:myValue', event.target.value);
    }
  }
}
</script>

<template>
<div>
<!--  <select :value="value" @change="handleChange">-->
<!--    <option value="1">北京</option>-->
<!--    <option value="2">上海</option>-->
<!--    <option value="3">深圳</option>-->
<!--    <option value="4">广州</option>-->
<!--    <option value="5">武汉</option>-->
<!--  </select>-->
  <select :value="myValue" @change="handleChange">
    <option value="1">北京</option>
    <option value="2">上海</option>
    <option value="3">深圳</option>
    <option value="4">广州</option>
    <option value="5">武汉</option>
  </select>
</div>
</template>

<style scoped>

</style>