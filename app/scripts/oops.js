// 检查浏览器版本，低版本上显示提示
- function(window) {
  'use strict';

  var bowser = window.bowser;
  if (bowser.msie && bowser.version <= 9) {
    var oops =document.getElementById("oops");
    oops.className = '';
  }
} (window);
