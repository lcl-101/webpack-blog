import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

export function setEvent(method, params) {
  return request({
    url: 'api/Admin/Config/event',
    method: method,
    params
  })
}

export function setPageName(method, params) {
  return request({
    url: 'api/Admin/Config/pageName',
    method: method,
    params
  })
}

export function getResLogs(params) {
  return request({
    url: 'api/getReslog',
    method: 'get',
    params
  })
}
