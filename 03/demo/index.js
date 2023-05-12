import noty from '@ppzp/noty'

document.getElementById('info').onclick = function() {
  noty.info('普通通知')
}
document.getElementById('warn').onclick = function() {
  noty.warn('警告！')
}
document.getElementById('error').onclick = function() {
  noty.error('异常！！！')
}