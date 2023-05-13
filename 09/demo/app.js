import { $ } from '@ppzp/utils.rc'
import { useState } from 'react'
import Dialog from './dialog.js'

export default function App() {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  return $.div(
    $.button(
      {
        onClick() {
          setShow1(true)
        }
      },
      'show 1'
    ),
    $.button(
      {
        onClick() {
          setShow2(true)
        }
      },
      'show 2'
    ),

    $(Dialog, {
      show: show1,
      setShow: setShow1,
      title: 'dialog 1',
      content: 'dialog 1 content'
    }),

    $(Dialog, {
      show: show2,
      setShow: setShow2,
      title: 'dialog 2',
      content: $.div(
        $.p('肥肥'),
        $.img({ src: './feifei.jpg' }),
        $.button(
          {
            onClick() {
              setShow2(false)
            }
          },
          '关闭'
        )
      )
    })
  )
}
