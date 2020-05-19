import service from './fetch'
// import qs from 'qs'

const get = function(url, params = '') {
  //
  return service.get(url, { params })
}

const post = function(url, data) {
  return service.post(url, data)
}

const put = function(url, data) {
  return service.put(url, data)
}

const patch = function(url, data) {
  return service.patch(url, data)
}

const del = function(url, params = '') {
  return service.delete(url, { params })
}

const del2 = function(url, data) {
  return service.delete(url, { data })
}

export default {
  get,
  post,
  put,
  patch,
  del,
  del2
}
