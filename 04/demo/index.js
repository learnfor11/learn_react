import React from 'react'
import ReactDOM from 'react-dom'
import { $ } from '@ppzp/utils.rc'

function App() {
  return $.div('haha!')
}

const app_root = ReactDOM.createRoot(document.getElementById('app-root'))
app_root.render($(App))