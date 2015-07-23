# Polymer1.0制作博客（1）：创建项目

>该系列文章将会讨论怎么用polymer1.0来制作一个github上的博客。大概会以每周一篇的速度更新；各种建议或不足，望大家指点。

>第一章里我们会讨论怎么用`yo polymer`创建polymer项目，并使用其自带的`gulp serve`来为网页提供一个服务器；最后会修改网页类容，添加上我们自己的"Hello World"。

## 使用`yo polymer`新建项目
[`generator-polymer`](https://github.com/yeoman/generator-polymer)是一个polymer项目的startup程序，能使大家更方便地构建、自定义polymer项目。其中还包含如`yo polymer:el`、`yo polymer:seed`等一些额外的有用的命令。而因为其是一个[yeoman](http://yeoman.io/)的generator，使用前应对yeoman有所了解。

```bash
# 请确保已安装node、npm与yeoman

# 安装generator-polymer
npm install -g generator-polymer

# 创建项目
mkdir my-blog && cd my-blog
yo polymer
```

建议翻墙安装。安装过程可能会出问题，按照提示可手动`npm install`及`bower install`，再不行的话就重新执行`yo polymer`。

在进行下一步之前，我们可以先看看当前项目在浏览器上的样子：

```bash
gulp serve
```

### `gulp serve`
由`generator-polymer`生成的项目使用[gulp](http://gulpjs.com/)作为项目构建工具。其中`gulp serve`（详细可查看gulpfile.js）将会用[browser-sync](http://www.browsersync.io/)把app目录作为根目录提供一个服务器（另外会包含项目目录下的"bower-components"）。托browser-sync的福，每当你对app下相关的内容做改动时，浏览器都能自动刷新。

命令运行后，浏览器会自动打开项目的主页；一切顺利的话，你会看到一个Material Design分格的页面。

## Hello World
现在我们开始编写自己的内容。为了使这一章内容结束得比较简单，我们只在首页编写一个简单的"Hello World"。

进入`app`目录，打开index.html文件（该文件就是我们的页面入口），找到`paper-drawer-panel`的内容：

```html
    <paper-drawer-panel id="paperDrawerPanel">
      <div drawer>

        <!-- Drawer Toolbar -->
        <paper-toolbar id="drawerToolbar">
          <span class="paper-font-title">Menu</span>
        </paper-toolbar>

...省略... 

          </iron-pages>
        </div>
      </paper-header-panel>
    </paper-drawer-panel>
```

删去。然后我们在id为"dom-bind"的template下添加：

```
  <template is="dom-bind" id="app">
    
    <!-- 添加的内容 -->
    <h1>Hello World!</h1>
```

如果刚才的`gulp serve`没有停掉的话，回到浏览器上的项目页面，页面会自动刷新：你能看到你编写的"Hello World"。

### 关于papaer-drawer-penel
你已经留意到我们刚刚删除了这个paper元素，这是一个抽屉面板。该元素可以说是md风格的响应式页面（app）的基础。不过因为我要做的博客页面非常简单，不需要抽屉内容，故在此删去。


>以上就是所有内容。下一章["article-list"](#!/article/2015-07-20-how-to-build-blog-2)，我们会制作我们的自定义元素`<article-list></article-list>`。
