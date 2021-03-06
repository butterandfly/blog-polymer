# Polymer1.0制作博客（3）：使用iron-ajax

> 上一章我们制作了一个很简洁的文章列表，但里面的文章列表数据是直接写在javascript里的。这一章我们使用iron-ajax，从服务端拉取列表数据。

## 制作假冒伪劣数据
首先我们需要制作一个文章列表的json文件。在app目录下新建一个data目录，再在data目录内新建一个文件articleList.json，把下面的内容复制进去：

```json
[
  {"title":"论防火长城对便秘的治疗功效","fileName":"how-does-the-gfw-let-you-take-a-shit","createDate":"2015-07-23"},
  {"title":"中国互联网的开房程度不容外人诋毁","fileName":"the-internet-of-china-is-so-fucking","createDate":"2015-07-22"}
]

```

## 使用iron-ajax

打开我们之前编写的article-list.html。首先，把手写的数据内容去掉：

```javascript
// 删去
      ready: function() {
        this.articles = [
          {"title":"Article 1","createDate":"2015-05-29"},
          {"title":"文章 2","createDate":"2015-05-20"}
        ];
      }
```

然后，我们添加iron-ajax的内容。

### iron-ajax
[iron-ajax](https://elements.polymer-project.org/elements/iron-ajax)元素提供发送请求等功能。除了基本的发送请求外，它还能帮我们处理参数、转换响应结果等。在使用前，我们应先在article-list.html文件内导入：

```html
<link rel="import" href="../../bower_components/polymer/polymer.html">

<!-- 新添加 -->
<link rel="import" href="../../bower_components/iron-ajax/iron-ajax.html"/>
```

然后，在`dom-repeat`前添加`iron-ajax`：

```html
<!-- 新增 -->
<iron-ajax auto url="../../data/articleList.json" last-response="{{articles}}"></iron-ajax>

<template is="dom-repeat" items="{{articles}}">
...
```

* `url`是请求的地址。
* `auto`设置为true，使每次`url`或`params`改变后都能自动发送请求。
* `last-response="{{articles}}"`使得每次得到响应时都把响应结果写进当前元素（现在是article-list）的`articles`属性里。
* `handleAs`默认为json。所以在不设置的情况下，响应结果会转换成js中的object或array。


使用`gulp serve`打开页面，你应能看到页面成功地读取到json的内容。

------

以上就是本章的内容。下一章，我们会再制作一个元素`an-article`，其中还会讲解怎么使用路由。
