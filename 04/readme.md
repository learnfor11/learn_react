# 认识 React
目标：认识 React

React 很流行，那么 React 能帮我们做什么呢？  

以我浅薄的理解就是：  
**React 提供一种“方式”，我们用这种“方式”来写“组件”**

这句话里有两点需要解释一下：方式？组件？  
其中“方式”就是我们下面所有章节所要讲的东西，一两句话肯定解释不清楚了  
我们先讨论一下“组件”吧  

### 组件
在 React 中，**组件，是一个返回元素的函数**  
这句话要记清楚！  
但是，，，**元素**又是什么呢  
元素，有一点点像 html 里的标签，比如：
``` html
<div>这是一个 html 标签，具体说，是一个 div 标签</div>
<img src="xxxx"> <!-- 这是一个 img 标签 -->
<input> <!-- 这是一个 input 标签 -->
```
当然，只是“有一点点像”  
看看 React 官方推荐的、写元素的方式：  
``` jsx
<div>这是一个 React 元素</div>
<img src="xxxx" /> { /* 这是一个 img 元素 */ }
<input /> { /* 这是一个 input 元素 */ }
```
几乎一样！  
虽然写法上，只有略微的差异，但内部，可完全不是一回事  
说是披着羊皮的狼也不过分  

然后，我们就可以看看 React 的组件了

##### 带点儿内容的组件
``` jsx
function MyComponent() { // 这是一个 React 组件
  return <div>这是一个 React 元素</div>
}
```
上面是一个名叫 `MyComponent` 的组件  
它显然**是一个函数**，并且，**返回一个元素**  

> 注意！！！组件的名字，必须以大写字母开头！！！

我们的 React 项目，往往是由各种各样的组件组成的，比如：
``` jsx
function App() {
  return <div>
    <Header />
    <Main />
    <Footer />
  </div>
}
function Header() {
  return <div>...</div>
}
function Main() {
  return <div>...</div>
}
function Footer() {
  return <div>...</div>
}
```
你可以把一堆 div、img、input 封装在某个组件里  
这样，在你想用那堆元素时，不用复制粘贴，只要用那个组件就行了  

这，是我们用 React 写“网页内容”的方式  
还记得吗，我们的网页包含：
+ 网页内容 html（有什么）
+ 网页样式 css（长什么样）
+ 网页逻辑 js（有什么功能）

而一个 React 组件是可以包含这三者的  

##### 带点儿功能的组件
我们给组件加点“功能”：
``` jsx
function Button() {
  return <button onClick={handleClick}>按钮</button>
}
function handleClick() { // handleClick 函数，既没返回元素，名字首字母也不是大写，所以只是一个普通的 js 函数
  alert('你点击了按钮')
}
```
就是这样！

##### 带点儿样式的组件？
React 可以，但我不推荐你把样式也写在 React 里面！

##### jsx
上面那种，把 html 和 js 混在一起的写法，叫做 `jsx`  
尽管我觉得 `jsx` 不好看，但这不构成“不使用 `jsx` 的理由”  
更贴合实际的理由是：`jsx` 不能直接在浏览器里运行  
你要使用某种工具（如 babel、swc 等），先把 `jsx` “翻译”成 js 代码  
而这个教程里，我们是不使用“开发工具”的  

所以这里使用另一种方案，比如上面的 Button 组件可以写成：
``` js
// 注意！！下面的“$”只是一个普通的变量的名字，不是什么特殊的语法
function Button() {
  return $.div({ onClick: handleClick }, '按钮')
  // 上面这行代码：调用 $ 对象的 div 方法；并传入俩参数：一个对象 { onClick: handleClick }，一个字符串 '按钮'
}
```
上面的写元素的方式，并不是什么稀奇东西，实际只是 [React.createElement()](https://react.dev/reference/react/createElement) 函数的简写（带了一点点优化）

> 本章节没有 demo
