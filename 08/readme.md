# 组件的状态
目标：认识 React 的状态

上一章，我们写的那个组件（GuaButton），有一个属性  
**属性的值**是在用到 GuaButton 的组件，也就是 App 组件里，设置的：
``` js
function App() { // App 组件里用到了三次 GuaButton 组件
  return $.div(
    $(GuaButton, { text: '呱呱呱' }), // 设置第一个 GuaButton 元素的 text 属性为 '呱呱呱'
    $(GuaButton, { text: '呱呱' }), // 设置第二个 GuaButton 元素的 text 属性为 '呱呱'
    $(GuaButton, { text: '呱' }) // 设置第三个 GuaButton 元素的 text 属性为 '呱'
  )
}
```

除了从“外面”传入一些值（比如对于 GuaButton 组件，我们在 App 组件里，传入一个 text）  
我们也可以在组件内部，定义一些值，这些值，就叫**组件的状态**  
像这样：
``` js
function GuaButton({ text }) {
  const [count, setCount] = React.useState(0) // 定义一个状态，名字叫 count，初始值为 0
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
```

把完整代码跑起来看看吧！