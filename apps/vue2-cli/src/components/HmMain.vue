<template>
  <div class="hm-main" id="app">
    <div class="msg">
      <span>{{ msg }}</span>
      <button @click="updateProvideData">update provide</button>
    </div>
    <div class="hm-fr">
      <BaseCount :count="24" class="base-count"></BaseCount>
      <BaseCount :count="66" class="base-count"></BaseCount>
      <BaseCount class="base-count" @updateMsg="modifyMsg($event)"></BaseCount>
    </div>
    <XiaoHeiNote></XiaoHeiNote>
    <div class="v-model">
      <!--  要想自定义组件使用v-model实现双向绑定，那么这个组件必须props接收value变量并且发送input事件
       如果想更改默认的这个value和input名可以选择使用.sync
       -->
      <!--  .sync用法
      <VModelComponent :cityId.sync="selectedCityId"></VModelComponent>
      在子组件中用props cityId接收，emit的事件名字可以是任意的eventName:cityId,例如this.$emit('updateCityId:cityId','4')
      -->
<!--      <VModelComponent :cityId="selectedCityId" @input="updateCityId($event)"></VModelComponent>-->
      <VModelComponent v-model="selectedCityId"></VModelComponent>
      <div style="margin: 0 20px;">{{ selectedCityId }}</div>
      <button @click="switchCity">切换城市</button>
    </div>

  </div>
</template>

<script>
import BaseCount from "@/components/BaseCount.vue";
import XiaoHeiNote from "@/components/xiaoheinote/XiaoHeiNote.vue";
import VModelComponent from "@/components/VModelComponent.vue";

export default {
  components: {
    VModelComponent,
    XiaoHeiNote,
    BaseCount
  },
  provide() {
    return {
      //简单类型传的是值，复杂类型是引用
      title: this.title,
      initTodoItem: this.initTodoItem
    }
  },
  data() {
    return {
      msg: 'Initial MSG',
      title: '小黑记事本',
      initTodoItem: { id: 1, name: '请输入任务' },
      selectedCityId: '2',
    }
  },
  methods: {
    modifyMsg(e) {
      this.msg = e
    },
    updateProvideData() {
      this.title = '小白记事本'
      this.initTodoItem.name = '请输入任务 请输入任务'
    },
    updateCityId(id) {
      this.selectedCityId = id
    },
    switchCity() {
      this.selectedCityId = String(Math.floor(Math.random() * 5) + 1)
    }
  },
}
</script>

<style scoped>
/**
scoped原理：
1.给当前组建模版的所有元素都会被添加上一个自定义属性data-v-hash值
2.css选择器后被自动添加属性选择器，例如div[data-v-5f6a9d56]
 */
.hm-fr {
  display: flex;
  justify-content: center;
}
.hm-main {
  height: 700px;
  background-color: #b3d4fc;
}

.base-count {
  height: 40px;
  margin: 10px 30px;
}

span {
  font-size: 20px;
  font-weight: bold;
}

.msg {
  text-align: center;
}
.msg button {
  margin-left: 20px;
}
.v-model {
  display: flex;
  justify-content: center;
}
</style>