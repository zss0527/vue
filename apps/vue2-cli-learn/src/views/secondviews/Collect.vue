<template>
  <div id="collect">
    <div style="display: flex;justify-content: space-between">
      <MyTag style="font-size:20px;font-weight: bold;" :value="`${title} - ${count}`" @input="handleTitle"></MyTag>
      <MyTag style="font-size:20px;font-weight: bold;" :value="list" @input="setList"></MyTag>
    </div>

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
    ...mapMutations('vuexLearn',['changeTitle','setCount','setList'])
  },
  computed: {
    ...mapState('vuexLearn',['title','count','list'])
  },
  created() {
    // console.log('store.state: ',this.$store.state.vuexLearn.list)
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
