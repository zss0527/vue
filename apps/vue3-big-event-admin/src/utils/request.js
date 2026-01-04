import axios from 'axios'
import {useUserStore} from "@/stores/index.js";
import {ElMessage} from 'element-plus'
import router from "@/router/index.js";

const baseURL = 'http://big-event-vue-api-t.itheima.net'
const instance = axios.create({
  baseURL,
  timeout: 10000,
})

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
  // { synchronous: true, runWhen: () => /* This function returns true */}
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data.code === 0) {
      return response
    }
    ElMessage.error(response.data.message || '服务异常！')
    return Promise.reject(response.data);
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response.status === 401) {
      router.push('/login')
    }
    ElMessage.error(error.response.data.message)
    return Promise.reject(error);
  });

export default instance
export {baseURL}
