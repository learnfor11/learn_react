import { $ } from '@ppzp/utils.rc'

export default
function Dialog({ show, setShow, title, content }) {
  if(show)
    return $.div({ className: 'dialog_root' },
      $.div({ className: 'dialog_body' },
        $.div({ className: 'dialog_header' },
          $.h5(title),
          $.button(
            {
              onClick() {
                setShow(false)
              }
            },
            'x'
          )
        ),
        content
      )
    )
  // 没有 return，相当于 return undefined
}
