<script>
export default {
  name: "VModelComponent",
  props: {
    value: String,
  },
  methods: {
    handleChange(event) {
      this.$emit('input', event.target.value);
    }
  }
}
</script>

<template>
<div>
  <select :value="value" @change="handleChange">
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