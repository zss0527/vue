import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore('big-user', () => {
  const token = ref('')

  function setToken (newToken) {
    token.value = newToken;
  }

  function removeToken () {
    token.value = ''
  }

  return {
    token,
    setToken,
    removeToken,
  }
}, {
  persist: true
})
