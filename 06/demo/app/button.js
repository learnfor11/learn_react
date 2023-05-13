import { $ } from '@ppzp/utils.rc'
import noty from '@ppzp/noty'

export default
function GuaGuaButton() {
  return $.button(
    { // 第一个参数是元素的属性（props）
      className: 'gua_button', // 这里相当于 html 里的 <button class="gua_button" ...
      onClick() {
        noty.info('呱！呱！呱！')
      }
    },
    '点我，我就呱' // 后面的所有参数，都是子元素
  )
}
