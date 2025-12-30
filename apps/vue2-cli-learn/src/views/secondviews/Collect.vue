<template>
  <div id="collect">
    <MyTag style="font-size:20px;font-weight: bold;" :value="`${title} - ${count}`" @input="handleTitle"></MyTag>
<!--    <h1>{{ title }}</h1>-->
<!--    <input type="text" :value="count" @input="handleCount($event.target.value)">-->
    <input type="text" :value="count" @input="setCount(+$event.target.value)">
    <SonOne></SonOne>
    <hr>
    <SonTwo></SonTwo>
  </div>
</template>

<script>
import SonOne from "@/components/collect/SonOne.vue";
import SonTwo from "@/components/collect/SonTwo.vue";
import {mapState, mapMutations} from 'vuex';
import MyTag from "@/components/customtable/MyTag.vue";

export default {
  name: 'CollectPage',
  components: {MyTag, SonOne, SonTwo},
  methods: {
    handleTitle(title) {
      // this.$store.commit('changeTitle',{
      //   title: title.split('-')[0].trim()
      // })
      // this.handleCount(title.split('-')[1].trim())
      this.changeTitle({
        title: title.split('-')[0].trim()
      })
      this.setCount(+title.split('-')[1].trim())
    },
    // handleCount(count) {
    //   this.$store.commit('setCount',+count)
    // },
    ...mapMutations(['changeTitle','setCount'])
  },
  computed: {
    ...mapState(['title','count'])
  },
  created() {
    // console.log(this.$store)
  }
}
</script>

<style scoped>
#collect {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
