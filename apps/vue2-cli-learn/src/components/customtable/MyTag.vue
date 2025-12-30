<script>
export default {
  name: "MyTag",
  props: {
    value: String,
  },
  data() {
    return {
      isEdit: false,
    }
  },
  methods: {
    handleClick() {
      this.isEdit = true
    },
    handleEnter(event) {
      this.$emit('input', event.target.value)
      this.isEdit = false
    }
  }
}
</script>

<template>
  <div class="my-tag">
    <input :value="value" @keyup.enter="handleEnter($event)" v-focus @blur="isEdit = false" v-if="isEdit" ref="inp" class="input" type="text" placeholder="输入标签"/>
    <div @dblclick="handleClick" class="text" v-else>
      {{value}}
    </div>
  </div>
</template>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>