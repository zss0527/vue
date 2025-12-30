import Vue from "vue";
import Vuex from "vuex";

// install Vuex plugin
Vue.use(Vuex)

/* create store
state: 仓库中共享的数据，组件中访问state数据两种方式：
    1. 直接访问：this.$store.state.xxx
    2. 手动computed：
        computed: {
            count() {
                return this.$store.state.count
            }
        }
    3. 自动封装computed：mapState辅助函数会自动把store中的state数据映射到组件中的computed中
        import {mapState} from 'vuex'
        computed: {
            ...mapState(['count']), //在数组中通过展开运算符获取想要的状态变量
        }

mutations: 严格模式下mutations是唯一修改state数据的途径，组件中可通过两种方式调用mutation函数
    1. 在组件中通过this.$store.commit('mutation name', payload)
    2. 自动封装methods：mapMutations辅助函数会自动把store中的mutation函数映射到组件中的methods中
        import {mapMutations} from 'vuex'
        methods: {
            ...mapMutations(['mutation name'])
        }

actions:

getters:
*/
const store = new Vuex.Store({
    //开启严格单向数据流，state的数据只能通过mutations修改，直接$store.state.count = xxx会报错
    //生产环境需要关闭，花费资源
    strict: true,
    state: {
        count: 1,
        title: 'vuex学习',
    },
    mutations: {
        /* mutation函数最多有两个参数：
             第一个参数是当前store的state属性；
             第二个参数payload是传过来的参数值，如果想传多个值应该包装成对象来传；
        */
        increment(state, payload) {
            state.count += payload
        },

        changeTitle(state, payload) {
            state.title = payload.title
        },

        setCount(state, payload) {
            state.count = payload
        }
    },

    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    getters: {
        double(state) {
            return state.count * 2
        }
    },
})

// export to be used in main.js
export default store