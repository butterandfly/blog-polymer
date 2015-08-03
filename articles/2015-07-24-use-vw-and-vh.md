# 使用vw和vh单位

> 最近在使用polymer时发现一个fullbleed的样式使用了vh单位。孤陋寡闻的我赶紧查了一下，原来是一种根据屏幕大小自适应的单位，于是在此做一些记录与分享。

> 此文主要参考了["Viewport Sized Typography"](https://css-tricks.com/viewport-sized-typography/)和["SIZING WITH CSS3'S VW AND VH UNITS"](http://snook.ca/archives/html_and_css/vm-vh-units)。

## 什么是vw和vh？

"v"指的是viewport，"w"和"h"分别是width和height；`vw`和`vh`是css3新提供的一种size单位。先看看一个使用例子：

```css
  body.fullbleed {
    margin: 0;
    height: 100vh;
  }
```

fullbleed样式使得body能够有100%的视窗高度。所以规则其实很简单：

* 1vw = 1%的视窗宽度
* 1vh = 1%的视窗高度

所以，如果视窗有40厘米宽，那么1vw就是0.4厘米。

## 为什么重要

* 针对不同大小的屏幕，字体、图片等能方便地做出最完美的适配
* 使得繁琐的尺寸设置变得更简单

## 浏览器支持

几乎所有现代浏览器（>ie9）都已支持该单位，但可能在一些旧版本上有点bug。
