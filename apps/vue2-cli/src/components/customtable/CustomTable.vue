<template>
  <div class="table-case">
    <table class="my-table">
      <thead>
      <tr>
        <slot name="head"></slot>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in goods" :key="index">
          <slot name="body" :item="item" :index="index"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'CustomTable',
  props: {
    goods: Array,
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="less" scoped>
.table-case {
  width: 1000px;
  margin: 50px auto;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }

  .my-table {
    width: 100%;
    border-spacing: 0;
    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      vertical-align: middle;
    }
    th {
      background: #f5f5f5;
      border-bottom: 2px solid #069;
    }
    td {
      border-bottom: 1px dashed #ccc;
    }
    td,
    th {
      text-align: center;
      padding: 10px;
      transition: all 0.5s;
      &.red {
        color: red;
      }
    }
    .none {
      height: 100px;
      line-height: 100px;
      color: #999;
    }
  }
}
</style>