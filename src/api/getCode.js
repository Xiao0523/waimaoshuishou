import request from '@/http/api'

function getCode(codeId) {
  // debugger;
  return request.get(`api/code/${codeId}`)
}
function patchConsultation(data) {
  return request.post('api/consultation', data)
}
export {
  getCode,
  patchConsultation
}