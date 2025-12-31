// 用于存放所有登录相关的接口请求

import request from '@/utils/request'

export const getPicCode = () => {
  return request.get('/captcha/image')
}
