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

mutations: 严格模式下mutations是唯一直接同步修改state数据的途径，
    组件中可通过两种方式调用mutation函数
        1. 在组件中通过this.$store.commit('mutation name', payload)
        2. 自动封装methods：mapMutations辅助函数会自动把store中的mutation函数映射到组件中的methods中
            import {mapMutations} from 'vuex'
            methods: {
                ...mapMutations(['mutation name'])
            }
    actions可以通过context.commit调用mutation间接修改state数据

actions:一般来写复杂业务逻辑，或者异步修改state（例如发送请求获取数据后修改state）
    组件中可通过以下两种方式调用action：
        1. this.$store.dispatch('action name',payload)
        2. 自动封装methods：mapActions辅助函数会自动把store中的actions函数映射到组件中的methods中
            import {mapActions} from 'vuex'
            methods: {
                ...mapActions(['action name'])
            }

getters: 从state中派生出来一些数据,getter中不能调用actions或者mutations，所以getter只能读取state数据，不能修改state数据
    组件中可通过以下两种方式调用getters：
        1. this.$store.getters.getter，注意这里调用时无法传送payload参数
        2. 自动封装computed：mapGetters辅助函数会自动把getters中的getter函数映射到组件中的computed中
            import {mapGetters} from 'vuex'
            computed: {
                ...mapGetters(['getter name'])
            }
*/
const store = new Vuex.Store({
    //开启严格单向数据流，state的数据只能通过mutations修改，直接$store.state.count = xxx会报错
    //生产环境需要关闭，花费资源
    strict: true,
    state: {
        count: 1,
        title: 'vuex学习',
        list: Array.from({length:10},(_,i) => i+1)
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
        },

        setList(state, payload) {
            state.list = payload.split(',').filter(Boolean).map(Number)
        }

    },

    actions: {
        //第一个参数context在未分模块的情况下相当于当前store对象，第二个参数和mutation的第二个参数一样
        setAsyncCount(context,payload) {
            setTimeout(() => {
                context.commit('increment',payload)
            },1000)
        }
    },
    getters: {
        double(state) {
            return state.count * 2
        },
        filterList(state) {
            return state.list.filter(item => item > 5)
        }
    },
})

// export to be used in main.js
export default store