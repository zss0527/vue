<template>
  <div class="App">
    <HmHeader></HmHeader>
    <HmMain></HmMain>
    <HmFooter></HmFooter>
  </div>
</template>

<script>

import HmHeader from "@/components/HmHeader.vue";
import HmMain from "@/components/HmMain.vue";
import HmFooter from "@/components/HmFooter.vue";

export default {
  name: 'App',
  components: {
    //HmHeader:HmHeader
    HmHeader,
    HmMain,
    HmFooter,
  },
  beforeCreate() {
    console.log('beforeCreate in App component')
  }
}
</script>

<style scoped>
.App {
  width: 600px;
  height: 900px;
  background-color: #87ceeb;
  margin: 0 auto;
  padding: 20px;
}
</style>
