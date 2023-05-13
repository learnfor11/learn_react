import { $ } from '@ppzp/utils.rc' // 一般而言，依赖的引入不讲究顺序，但这里是个例外，@ppzp/utils.rc 要先于 ReactDom 引入
import ReactDOM from 'react-dom'

// React 应用的所有东西（内容、逻辑）一般都在这一个 App 组件里
function App() {
  return $.div('这是一个简单的 React 应用')
}

// 我们的“组件”是写在 js 代码里的，我们需要一种方式，把 js 里的内容，“放”到 html 里去（三步走）：

// 第一步  我们找到一个“挂载点”：我们的 index.html 里是有一个 id 为 app-root 的 div 的
const mount_root = document.getElementById('app-root')

// 第二步  告诉 React：“我们的挂载点是 mount_root”；React 会给我们一个对象（react_app），马上会用到
const react_app = ReactDOM.createRoot(mount_root)

// 第三步  告诉 react_app 对象，我们要“渲染”App 组件（到 index.html 里 id 为 app-root 的 div 里）
react_app.render($(App))

// 什么是“渲染”呢？现在不用管这个概念，以后你会慢慢明白的
