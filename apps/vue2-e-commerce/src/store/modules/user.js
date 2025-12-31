import { getUserInfo, setUserInfo } from '@/utils/storage'

export default {
  namespaced: true,
  state () {
    return {
      userAuthInfo: getUserInfo()
    }
  },
  mutations: {
    setUserAuthInfo (state, userInfo) {
      state.userAuthInfo = userInfo
      setUserInfo(userInfo)
    }
  },
  actions: {
    async updateUser (context, userInfo) {
      context.commit('setUserAuthInfo', userInfo)
    }
  },
  getters: {
    getUserAuthInfo (state) {
      return state.userAuthInfo
    }
  }
}
