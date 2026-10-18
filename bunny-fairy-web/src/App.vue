<template>
  <el-button type="primary">Default</el-button>
  <router-view />

  <div class="test">
    test auto import scss
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.test {
  color: $priceColor;
}
</style>
