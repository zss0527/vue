import {defineStore} from "pinia";
import {computed, ref} from "vue";

/*
pinia中只有state，getters和actions，这里的actions相当于vuex中的actions和mutation，在actions中可以通过this直接修改state，也可以编写异步代码；
pinia中每个store自动开启namespace，
组合式写法里，defineStore('storeName',() => {})，函数里定义的响应式变量就是state，定义的function就是action，定义的compute就是getter；
 */
export const useCounterStore = defineStore('counter', () => {
    const count = ref(100)
    const msg = ref('msg')

    function increment() {
        count.value++
    }

    function decrement() {
        count.value--
    }

    const doubleCount = computed(() => count.value * 2)

    return {
        count,
        msg,
        increment,
        decrement,
        doubleCount
    }
})