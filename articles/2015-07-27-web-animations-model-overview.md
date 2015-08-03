# “Web Animations”模型概述

> 此文翻译之[Web Animations草案](http://www.w3.org/TR/web-animations)的第2节，[“Web Animations model overview”](http://www.w3.org/TR/web-animations/#web-animations-model-overview)。

以下内容是未成为规范的。

总的来看，“Web Animations”模型由两个主要且独立的块组成，时间模型和动画模型。他们扮演的角色如下：

#### 时间模型
每隔一段时间执行，并把值转成动画中每一步所需要的均衡的时间距离，我们称其为*"time fractions"*（时间分片）。动画重复中所需要的*“iteration index”*（遍历目录）也会被产生。

#### 动画模型
取得*"time fractions"*，和由时间模型产生的*“iteration index”*，然后把其转成一系列的值并应用在目标的属性上。

该流程可以用下图来表示：
![Overview of the operation of the Web Animations model][1]

> 时间模型获得当前时间后生成*"time fractions"*和*“iteration index”*。而这两者又作为参数输入进动画模型中，从而产生可以应用的值。

举个例子，例如有这么一个动画：

* 3秒后开始
* 执行两次
* 每一次都耗时2秒，而且
* 将一个方型的宽由50px变成100px

前3点的内容都由时间模型来执行。在第六秒，它能计算出这是第二次动画的一半，也就是0.5。动画模型会用这信息来计算出此时方形的宽为75。

此规范由时间模型开始，然后由动画模型继续下去。

  [1]: images/timing-and-animation-models.svg
