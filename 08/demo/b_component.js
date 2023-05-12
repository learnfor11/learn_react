import { $ } from '@ppzp/utils.rc'

export default
function BComponent() {
  return $.div(
    $.h5('BComponent'),
    $.p('BComponent 有一个 p 标签')
  )
}