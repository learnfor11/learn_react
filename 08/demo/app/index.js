import { $ } from '@ppzp/utils.rc'
import GuaButton from './button.js'

export default
function App() {
  return $.div(
    $.div('各组件的状态互不影响哦'),
    $(GuaButton, { text: '呱呱呱' }),
    $(GuaButton, { text: '呱呱' }),
    $(GuaButton, { text: '呱' })
  )
}
