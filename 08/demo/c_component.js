import { $ } from '@ppzp/utils.rc'

export default
function CComponent() {
  return $.div(
    { // 属性（props）写在第一个参数
      className: 'c_component',
      onClick() {
        alert('this is c_component, click me')
      }
    },

    $.span('this is c_component')
  )
}