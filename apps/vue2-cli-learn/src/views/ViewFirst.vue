<script>
import HmMain from "@/components/HmMain.vue";
import HmHeader from "@/components/HmHeader.vue";
import HmFooter from "@/components/HmFooter.vue";

export default {
  name: "ViewFirst",
  components: {HmFooter, HmHeader, HmMain},
  created() {
     console.log(this.$route.query)
  }
}
</script>

<template>
  <div class="App">
    <HmHeader></HmHeader>
    <HmMain></HmMain>
    <HmFooter></HmFooter>
  </div>

</template>

<style scoped>
.App {
  width: 600px;
  height: 900px;
  background-color: #87ceeb;
  margin: 0 auto;
  padding: 20px;
}
</style>