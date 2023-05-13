import { $ } from '@ppzp/utils.rc'
import noty from '@ppzp/noty'

export default
function GuaButton({ text }) { // GuaButton 组件，有一个 text 属性（**组件的属性**）
  return $.button(
    {
      className: 'gua_button',
      onClick() {
        noty.info('呱！呱！呱！')
      }
    },
    text
  )
}
