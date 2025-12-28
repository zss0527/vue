<template>
  <button :class="['common-button', { 'is-disabled': disabled }]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
import Bus from "@/utils/EventBus";

export default {
  name: 'CommonButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('Click', 'Data from CommonButton');
        Bus.$emit('eventBusMsg','猪哥记事本')
      }
    }
  }
}
</script>

<style scoped>
.common-button {
  padding: 10px 20px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #4f81bd;
  color: white;
}

.common-button.is-disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
