# index.html
目标：熟悉网页

### 一个最基本的网页
网页三部分：
+ html：网页里都有啥
+ css：网页里的东西长啥样（多大、多小、什么颜色、在什么位置）
+ js：网页里的功能（点那个按钮会怎么样）

> 关于 html、css、js 的用法，这里不做介绍

``` html
<!doctype html>
<html lang="en">
  <head>
    <title>网页标题</title>
    <style>
      html {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>这是 html</h1>

    <script>
      console.log('这是 js')
    </script>
  </body>
</html>
```

### 一个前端“项目”
很难定义什么才算一个前端“项目”，简单得讲，有一个 `.html` 文件就应算一个前端“项目”  
但为了“严谨”一些，应建个新文件夹，然后把 `.html` 文件放进去  
于是，一个“像样子的前端项目”就完成了  

比如，在你电脑上喜欢的位置：
``` bash
mkdir front-end-project # 创建一个名为“front-end-project”的文件夹
code ./front-end-project # 用 vscode 把这个文件夹打开
```
然后你可以用 vscode 创建一个 index.html，并把上面的代码复制进去

### 跑起来
项目写好了，现在要让项目跑起来（也就是“部署项目”）  
我们采用最简单的方法，首先需要安装一个叫 http-server 的工具
``` bash
npm install -g http-server # 可能需要 sudo
```

安装好之后，在 ```front-end-project``` 目录下，执行：
``` bash
http-server
```
然后就可以在浏览器里打开 http://127.0.0.1:8080

> 以后的所有“章节”都用这种方式来跑项目

> 使用 ctrl + c 来停止 http-server

> http-server 的作用就是，在你的电脑上启动一个 web 服务器

> 那么 web 服务器有什么用呢？设想你家有俩电脑，你在 A 电脑上写了一个“前端项目”（也就是一个网站），那么在 B 电脑上是不是应该可以“访问”到这个网站？http-server 就是提供这么一个功能：让别的电脑可以访问你的网站。
