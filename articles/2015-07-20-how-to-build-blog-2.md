---
title: Polymer1.0制作博客（2）：article-list
---

>这一章我们会制作该项目里的第一个自定义元素`<article-list>`，该元素呈现一个文章列表。不过，我们先讨论一下项目的目录结构。

## 目录结构

```
./app
├── elements
│   ├── elements.html
│   ├── my-greeting
│   ├── my-list
│   └── routing.html
├── favicon.ico
├── images
│   └── touch
├── index.html
├── manifest.json
├── precache.json
├── robots.txt
├── scripts
│   └── app.js
├── styles
│   ├── app-theme.html
│   └── main.css
├── sw-import.js
└── test
    ├── index.html
    ├── my-greeting-basic.html
    └── my-list-basic.html
```

页面需要用到的内容，都放在app目录下：包括html、css、js、自定义元素等等，但不包含bower_components。
* `index.html`是项目的入口页
* `elements`目录存放所有的自定义元素
* `styles`、`scripts`存放额外的样式、代码相关的内容
* `test`存放测试代码

## 制作`<article-list>`

### 使用`yo polymer:el`创建

`yo polymer:el`是generator-polymer提供的一个创建自定义元素的命令。

```
yo polymer:el article-list

# 他会询问你是否自动添加到elements.html内，选yes
? Would you like to include an import in your elements.html file? (y/N)

# 成功的输出
create app/elements/article-list/article-list.html
```

如输出所说，新的元素放置在`app/elements`下。对于不使用yeoman的同学，可以直接在相应目录下新建一个html文件。

### 修改html

打开"article-list.html"：

```
<link rel="import" href="../../bower_components/polymer/polymer.html">

<dom-module id="article-list">
  <style>
    :host {
      display: block;
    }
  </style>
  <template>
    <div>Hello from <span>{{foo}}</span></div>
  </template>
</dom-module>
<script>
(function() {
  Polymer({
    is: 'article-list',

    properties: {
      foo: {
        type: String,
        value: 'bar',
        notify: true
      }
    }
  });
})();
</script>
```

上面这段代码创建一个自定义元素`<article-list>`。关于创建自定义元素更详尽的说明，可查看官网的["Quick tour of Polymer"](https://www.polymer-project.org/1.0/docs/start/quick-tour.html)，这里就不多赘述了。

现在我们添加自己的类容。首先找到下面这段html内容：

```
    <div>Hello from <span>{{foo}}</span></div>
```

换成：

```
    <div>
      <template is="dom-repeat" items="{{articles}}">
        <paper-item>
          <a href="#">
            <span class="title">{{item.title}}</span>
            <span class="create-date">{{item.createDate}}</span>
          </a>
        </paper-item>
      </template>
    </div>
```

`dom-repeat`是一个数据绑定的帮助类元素：它能遍历items属性（通常是数组），对每一项生成一次template内的html内容。对`dom-repeat`更详尽的描述，可参照官网的["Data binding helper elements"](https://www.polymer-project.org/1.0/docs/devguide/templates.html#handling-events)。

[`paper-item`](https://elements.polymer-project.org/elements/paper-item)是一个MD风格的item元素，它默认是“horizontal flexbox”布局；在这里我们只需要简单地把内容填充到元素内。注意这里数据绑定的`item`对象是`dom-repeat`中遍历的`items`的每一项。

### 修改javascript
修改`script`里的代码，换成：

```html
<script>
  (function () {
    Polymer({
      is: 'article-list',

      properties: {
        articles: {
          type: Array,
          value: null,
          notify: true
        }
      },

      ready: function() {
        this.articles = [
          {"title":"Article 1","createDate":"2015-05-29"},
          {"title":"文章 2","createDate":"2015-05-20"}
        ];
      }
    });
  })();
</script>
```

公共API、数据绑定等的属性都可定义在`properties`里。这里我们定义`articles`属性来存放我们所有的文章；他是一个数组、默认为`null`；`notify`设置为true使得其成为一个双向绑定。

关于`properties`的更多内容，可参考文章[Declared properties](https://www.polymer-project.org/1.0/docs/devguide/properties.html)。

`ready`方法会在元素创建成功后执行。在这里我们仅简单地向`articles`添加一些内容（以后会改成用json数据）。注意，这里`this.articles`可以直接获得`this.properties.articles`的内容。

### 修改index.html
首先，打开`app/elements/elements.html`文件，确保已包含下面这段代码：

```html
<link rel="import" href="article-list/article-list.html">
```

`elements.html`文件可统一导入应用需要用到的自定义元素和自定义样式。在此导入`article-list`后，index.html就可以直接使用该自定义元素了。

现在打开`app/index.html`文件，找到上一章里编写的helloworld：

```
<h1>Hello World!</h1>
```

换成

```html
<article-list></article-list>
```

修改都完成后，使用`gulp serve`命令打开项目页面，如无意外，你会看到一个包行两行的列表。虽然很简陋，但刚刚我们完成了此项目的第一个自定义元素:)
