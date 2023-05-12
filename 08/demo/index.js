import { $ } from '@ppzp/utils.rc'
import ReactDOM from 'react-dom'

import AComponent from './a_component.js' // 注意，本地的 js 要加上 .js 后缀
import BComponent from './b_component.js'
import CComponent from './c_component.js'

function App() {
  // return $.div($(AComponent), $(BComponent), $(CComponent))
  // 下面的 return 语句是竖着写的，把空行去掉，是不是跟上面的 return 语句一样？
  return $.div( // 第一种 React 元素：html 里有对应的 div 标签
    $(AComponent), // 第二种 React 元素：html 里没有对应的 AComponent 或 a-component 或 a_component 标签
    $(BComponent),
    $(CComponent)
  )
}

const app_root = ReactDOM.createRoot(document.getElementById('app-root'))
app_root.render($(App))