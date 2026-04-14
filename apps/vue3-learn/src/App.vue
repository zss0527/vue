<script setup>
import SetupLearn from "@/components/setuplearn.vue";
import RefReactiveLearn from "@/components/refreactivelearn.vue";
import ComputedLearn from "@/components/computedlearn.vue";
import WatchLearn from "@/components/watchlearn.vue";
import LifeCycleLearn from "@/components/lifecyclelearn.vue"
import PropsEmitsRefExpose1 from '@/components/propsemitsrefexpose1.vue'
import OptionsModel from '@/components/optionsmodel.vue'
import PiniaLearn from '@/components/pinialearn.vue'
import {provide} from "vue";

provide('appData','grandFather Data')
</script>

<template>
  <h1>You did it!</h1>
  <div style="border: 1px black solid; margin: 2px;">
    <h3>setup()</h3>
    <SetupLearn></SetupLearn>
  </div>

  <div style="border: 1px black solid; margin: 2px;">
    <h3>ref() reactive()</h3>
    <RefReactiveLearn></RefReactiveLearn>
  </div>

  <div style="border: 1px black solid; margin: 2px;">
    <h3>computed(()=>{return data})</h3>
    <ComputedLearn></ComputedLearn>
  </div>

  <div style="border: 1px black solid; margin: 2px;">
    <h3>watch(data,(newVal,oldVal) => {})</h3>
    <WatchLearn></WatchLearn>
  </div>

  <div style="border: 1px black solid; margin: 2px;">
    <h3>lifecycle</h3>
    <LifeCycleLearn></LifeCycleLearn>
  </div>

  <div style="border: 1px black solid; margin: 2px;">
    <h3>defineProps({k:Type}) defineEmits(['even-name'] defineExpose({data1,data2}) provide('k1',v1) inject('k1')</h3>
    <PropsEmitsRefExpose1></PropsEmitsRefExpose1>
  </div>

  <div style="border: 1px black solid; margin: 2px;">
    <h3>defineOptions({}) defineModel('alias')</h3>
    <OptionsModel></OptionsModel>
  </div>

  <div style="border: 1px black solid; margin: 2px;">
    <h3>pinia</h3>
    <PiniaLearn></PiniaLearn>
  </div>
</template>

<style scoped></style>
