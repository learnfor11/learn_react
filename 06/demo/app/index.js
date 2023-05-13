import { $ } from '@ppzp/utils.rc'
import GuaButton from './button.js'

export default
function App() {
  return $.div( // 对于 html 里原本就有的元素，用 $.div
    $(GuaButton), // 对于 html 里没有的元素（自定义组件），用 $(Component)
    $(GuaButton),
    $(GuaButton)
  )
}
