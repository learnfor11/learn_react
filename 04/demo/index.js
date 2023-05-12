import { $ } from '@ppzp/utils.rc'
import ReactDOM from 'react-dom'

function App() {
  return $.div('haha!')
}

const app_root = ReactDOM.createRoot(document.getElementById('app-root'))
app_root.render($(App))