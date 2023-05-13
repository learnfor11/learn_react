import { $ } from '@ppzp/utils.rc'
import { useState } from 'react'

export default
function GuaButton({ text }) {
  const [count, setCount] = useState(0) // 定义一个状态，名字叫 count，初始值为 0
  return $.button(
    {
      className: 'gua_button',
      onClick() {
        setCount(count + 1) // 每次点击，count 的值加 1
      }
    },
    text,
    count // 在按钮上显示 count 的值
  )
}
