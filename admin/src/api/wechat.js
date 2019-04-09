import request from '@/utils/request'

export function getScheduleList() {
  return request({
    url: '/api/getScheduleList',
    method: 'get'
  })
}
