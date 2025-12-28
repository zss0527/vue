<template>
  <div class="hm-footer">
    {{ msg }}
    <CommonButton :disabled="true">common button</CommonButton>
  </div>
</template>

<script>
import Bus from "@/utils/EventBus";

export default {
  data() {
    return {
      msg: 'I am hm-footer'
    }
  },
  created() {
    Bus.$on('eventBusMsg',(msg) => {
      this.msg = msg
    })
  }
}
</script>

<style scoped>
.hm-footer {
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  background-color: #4f81bd;
  color: white;
}
</style>