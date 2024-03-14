import request from '@/utils/request'

const apiMap = {
  // asset table fetching
  table: {
    get: getTable,
  }
}

export default apiMap

function getTable(params, form) {
  const queryParams = new URLSearchParams();
  queryParams.append('pageSize', params.params.pageSize)
  queryParams.append('current', params.params.current)

  return request({
    url: 'service-content/content/assets?' + queryParams.toString(),
    method: 'post',
    data: form
  })
}