import { $ } from '@ppzp/utils.rc'
import GuaButton from './button.js'

export default
function App() {
  return $.div(
    $(GuaButton, { text: '呱呱呱' }),
    $(GuaButton, { text: '呱呱' }),
    $(GuaButton, { text: '呱' })
  )
}
