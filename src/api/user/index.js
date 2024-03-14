// 导入axios实例
import request from '@/utils/request'
// 导入获取refreshToken的方法
import { getRefreshToken } from '@/utils/auth'
const apiMap = {
  // 登录
  login: {
    get: getCheckCode,
    login: userLogin,
    refresh: refreshToken
  },
  // 用户管理
  manage: {
    add: addUser,
    update: updateUser,
    del: delUser,
    query: listUser,
    queryById: getUserById,
    reset: updatePwd // 重置密码
  },
  // 用户中心
  center: {
    get: getUserInfo,
    update: updateUserInfo
  }
}
export default apiMap

// 获取图形验证码
function getCheckCode(uuid) {
  return request({
    url: '/service-content/user/checkCode?uuid=' + uuid,
    method: 'get'
  })
}
// 刷新过期token
function refreshToken() {
  return request({
    url: '/service-content/user/refreshToken',
    method: 'post',
    data: { refreshToken: getRefreshToken() }
  })
}
// 添加用户登录请求
function userLogin(form) {
  return request({
    url: '/service-content/user/login',
    method: 'post',
    data: form
  })
}
function listUser(params) {
  return request({
    url: '/service-content/user/list',
    method: 'get',
    params: params
  })
}

function addUser(form) {
  return request({
    url: '/service-content/user/addUser',
    method: 'post',
    data: form
  })
}

function updateUser(form) {
  return request({
    url: '/service-content/user/editUser/' + form.user_id,
    method: 'post',
    data: form
  })
}

function delUser(ids) {
  return request({
    url: '/service-content/user/delUser',
    method: 'post',
    data: ids
  })
}

function updatePwd(form) {
  return request({
    url: `/service-content/user/editPwd`,
    method: 'post',
    data: form
  })
}
// 根据id获取用户数据
function getUserById(user_id) {
  return request({
    url: `/service-content/user/queryUserInfo/${user_id}`,
    method: 'get'
  })
}

function getUserInfo() {
  return request({
    url: '/service-content/user/myInfo/userinfo',
    method: 'get'
  })
}
function updateUserInfo(userinfo) {
  return request({
    url: '/service-content/user/myInfo/updateUserinfo',
    method: 'post',
    data: userinfo
  })
}
