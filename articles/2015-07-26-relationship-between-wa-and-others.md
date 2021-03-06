# “Web Animations”与其他动画规范的关系

>此文的内容翻译之[Web Animations 1.0](http://www.w3.org/TR/web-animations)的第1.2节，阐述该规范了与其他动画规范的关系。

## 1.2 与其他规范的关系

CSS Transitions [[CSS3-TRANSITIONS]]()，CSS Animations [[CSS3-ANIMATIONS]]()，和SVG [[SVG11]
]()，都提供了在网页上生成动画的机制。虽然这3种规范提供类似的特性，但他们是不同方面的描述。而"web-animations"规范提议了一个抽象的动画模型，这模型包含了前述的3种规范的公共部分。而且，它向后兼容了前述那些规范的行为，所以那些规范可以不被察觉地使用该模型来定义。

SVG 1.1的动画特性是由SMIL Animation [[SMIL-ANIMATION]]()来定义的。如果你希望用Web Animations模型，则SVG与SMIL之间的依赖关系可以移除。

如[“Timing control for script-based animations”](http://www.w3.org/TR/animation-timing/)（一般是指requestAnimationFrame）一样，此规范的编程接口组件允许在代码中创建动画。用此规范提供的借口创建（代码创建）的动画，一旦创建后，便与由html创建的动画使用一样的性能特性。这样，就可以用更简洁、更有表现力的代码书写来创建动画了。

在编程接口中使用的时间值，与在“Timing control for script-based animations”接口中使用的一致，所以这两个接口可以同时使用而不会有冲突。

另外，该规范的编程接口组件添加了一些额外内容到HTML5中。
