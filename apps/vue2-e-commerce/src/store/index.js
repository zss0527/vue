import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
  },
  getters: {
    token (state) {
      return state.user.userAuthInfo.token
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  }
})
