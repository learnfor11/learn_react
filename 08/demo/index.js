import { $ } from '@ppzp/utils.rc'
import ReactDOM from 'react-dom'
import App from './app/index.js'

const mount_root = document.getElementById('app-root')
const react_app = ReactDOM.createRoot(mount_root)
react_app.render($(App))
