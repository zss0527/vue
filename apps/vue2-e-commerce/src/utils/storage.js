// 约定一个通用的键名
const UER_INFO_KEY = 'vue2_e_commerce_user_auth_info'

export const getUserInfo = () => {
  const result = localStorage.getItem(UER_INFO_KEY)
  return result ? JSON.parse(result) : ''
}

export const setUserInfo = (userInfo) => {
  localStorage.setItem(UER_INFO_KEY, JSON.stringify(userInfo))
}

export const removeUserInfo = () => {
  localStorage.removeItem(UER_INFO_KEY)
}
