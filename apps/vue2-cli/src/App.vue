<template>
  <div class="App">
    <HmHeader></HmHeader>
    <HmMain></HmMain>
    <HmFooter></HmFooter>
    <MyTable :data="list1">
      <template>
        <button>查看</button>
      </template>
    </MyTable>
    <MyTable :data="list2">
      <template #default="obj">
        <button @click="delItem(obj.id)">删除</button>
      </template>
    </MyTable>
    <CustomTable :goods = "goods">
      <template #head>
        <th>编号</th>
        <th>名称</th>
        <th>图片</th>
        <th width="100px">标签</th>
      </template>
      <template #body="obj">
        <td>{{ obj.index + 1}}</td>
        <td>{{ obj.item.name }}</td>
        <td>
          <img :src="obj.item.picture" />
        </td>
        <td>
          <MyTag v-model="obj.item.tag"/>
        </td>
      </template>
    </CustomTable>
  </div>
</template>

<script>

import HmHeader from "@/components/HmHeader.vue";
import HmMain from "@/components/HmMain.vue";
import HmFooter from "@/components/HmFooter.vue";
import MyTable from "@/components/MyTable.vue";
import CustomTable from "@/components/customtable/CustomTable.vue";
import MyTag from "@/components/customtable/MyTag.vue";

export default {
  name: 'App',
  components: {
    MyTag,
    CustomTable,
    MyTable,
    //HmHeader:HmHeader
    HmHeader,
    HmMain,
    HmFooter,
  },
  beforeCreate() {
    console.log('beforeCreate in App component')
  },
  data() {
    return {
      list1: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ],
      goods: [
        {
          id: 101,
          picture:
              'https://yanxuan-item.nosdn.127.net/f8c37ffa41ab1eb84bff499e1f6acfc7.jpg',
          name: '梨皮朱泥三绝清代小品壶经典款紫砂壶',
          tag: '茶具',
        },
        {
          id: 102,
          picture:
              'https://yanxuan-item.nosdn.127.net/221317c85274a188174352474b859d7b.jpg',
          name: '全防水HABU旋钮牛皮户外徒步鞋山宁泰抗菌',
          tag: '男鞋',
        },
        {
          id: 103,
          picture:
              'https://yanxuan-item.nosdn.127.net/cd4b840751ef4f7505c85004f0bebcb5.png',
          name: '毛茸茸小熊出没，儿童羊羔绒背心73-90cm',
          tag: '儿童服饰',
        },
        {
          id: 104,
          picture:
              'https://yanxuan-item.nosdn.127.net/56eb25a38d7a630e76a608a9360eec6b.jpg',
          name: '基础百搭，儿童套头针织毛衣1-9岁',
          tag: '儿童服饰',
        },
      ],
    }
  },
  methods: {
    delItem(id) {
      this.list2 = this.list2.filter(item => item.id !== id)
    }
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
