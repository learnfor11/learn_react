# 01 使用轮子
目标：会使用别人发布到互联网上的轮子

随着互联网的不断膨胀，JS 也在慢慢变多、变乱  
[原始的 JS 引入方式](../02/readme.md)暴露出了各种各样的问题  
因此现在 JS 的引入，一般不采用那种“原始方式”  
这里采用一种“先进得有些过头”的方式：  

你需要先声明一下，你要用哪些轮子：
``` html
<script type="importmap">
  {
    "imports": {
      "@ppzp/noty": "https://unpkg.com/@ppzp/noty@0.0.7/index.js"
    }
  }
</script>
```
上面这段代码，声明了：“我要用到 @ppzp/noty 这个轮子，它的代码的下载链接是 https://unpkg.com/@ppzp/noty@0.0.7/index.js”

然后，在需要用到那个轮子的文件最开头，写上：
``` js
import noty from '@ppzp/noty'

// 下面就可以使用 noty 这个轮子了
```
