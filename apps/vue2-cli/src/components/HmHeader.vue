<template>
  <div class="hm-header">
    {{ msg }}
    <CommonButton :disabled="false" @Click="getParam($event)">common button</CommonButton>
  </div>

</template>

<script>
export default {
  data() {
    return {
      msg: 'I am hm-header'
    }
  },
  methods: {
    getParam(msg) {
      this.msg = msg
    }
  }
}
</script>

<style scoped>
.hm-header {
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  background-color: #8064a2;
  color: white;
}
</style>