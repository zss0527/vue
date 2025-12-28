<script>
export default {
  name: "BaseCount",
  //props: ['count'],
  props: {
    count: {
      type: Number,
      required: false,
      default: 100,
      validator(value) {
        // console.log('value: ',value)
        return value >= 0 && value < 1000
      }
    }
  },
  data() {
    return {
      baseCount: this.count,
    }
  },
  methods: {
    add(step) {
      if(!step) {
        this.baseCount++
        if(this.baseCount >= 103) {
          this.$emit('updateMsg',this.baseCount)
        }
      } else {
        this.baseCount += step
      }
    }
  }
}
</script>

<template>
<div class="base-count">
  <button @click="baseCount--">-</button>
  <span> {{ baseCount }}</span>
  <button @click="add">+</button>
</div>
</template>

<style scoped>

</style>