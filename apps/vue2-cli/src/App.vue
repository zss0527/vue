<template>
    <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  beforeCreate() {
    console.log('beforeCreate in App component')
  },
}
</script>

<style scoped>

</style>
