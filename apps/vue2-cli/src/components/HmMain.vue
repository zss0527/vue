<template>
  <div class="hm-main" id="app">
    <div class="msg">
      <span>{{ msg }}</span>
      <button @click="updateProvideData">update provide</button>
    </div>
    <div class="hm-fr">
      <BaseCount :count="24" class="base-count firstCount"></BaseCount>
      <BaseCount  :count="66" class="base-count secondCount"></BaseCount>
      <div class="thirdCount" style="display: flex;">
        <BaseCount ref="lastBaseCount" class="base-count" @updateMsg="modifyMsg($event)"></BaseCount>
        <button v-if="!needInputLastCountValue" @click="switchToInput" style="height: 40%; margin-top: 10px;">update count</button>
        <div v-else style="display: flex; height: 40%; margin-top: 10px;">
          <input v-model.trim.number="stepValue" ref="inputCount" style="width: 40%;margin-right: 5px"/>
          <button @click="updateDefaultCount">update</button>
        </div>
      </div>
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
      needInputLastCountValue: false,
      stepValue: null,
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
    },
    switchToInput() {
      this.needInputLastCountValue = true
      //此时直接获取$refs.inputCount得到的是undefined，因为dom是异步更新的，这个dom元素还没有渲染完毕
      // this.$refs.inputCount.focus()
      this.$nextTick(() => {
        this.$refs.inputCount.focus()
      })
      // setTimeout(() => {
      //   this.$refs.inputCount.focus()
      // },1000)
    },
    updateDefaultCount() {
      this.$refs.lastBaseCount.add(this.stepValue)
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
}
.firstCount, .secondCount {
  flex: 1;
}
.thirdCount {
  flex: 4;
}
.hm-main {
  height: 700px;
  background-color: #b3d4fc;
}

.base-count {
  height: 40px;
  margin: 10px 20px;
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