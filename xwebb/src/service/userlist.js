import request from './request.js'

export function getHomeUserList() {
  return request({
    url: '/s/gu',
    method: 'get'
  })
}