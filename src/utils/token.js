import Cookies from 'js-cookie'
import config from '@/config/settings'
const { clientId } = config

const TOKEN_KEY = clientId + 'token'

// 获取存储在本地的 user 信息
export function getUser () {
  const user = localStorage.getItem('USER')
  if (user && user !== 'undefined') {
    return JSON.parse(user)
  } else {
    return null
  }
}

// 将 user 信息存储到本地
export function setUser (user) {
  localStorage.setItem('USER', JSON.stringify(user))
}

// 移除本地存储的 user 信息
export function removeUser () {
  localStorage.removeItem('USER')
}

// 获取本地 cookie 中的 token 信息
export function getToken () {
  const token = Cookies.get(TOKEN_KEY)
  if (token !== '' || token !== undefined || token !== null) {
    return token
  } else {
    return null
  }
}

// 将 token 设置到本地
export function setToken (token) {
  return Cookies.set(TOKEN_KEY, token, {
    expires: 1 // 失效时间 1 天
  })
}

// 将本地 cookie 中的 token 中移除
export function removeToken () {
  return Cookies.remove(TOKEN_KEY)
}
