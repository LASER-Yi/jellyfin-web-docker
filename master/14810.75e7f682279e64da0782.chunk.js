"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14810],{14810:function(e,t,n){n.r(t),n(99785);var r=n(72365),a=n(81643);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return e.changedTouches||e.targetTouches||e.touches}var s=function(){function e(t,n){var i,s,u,o,c,v;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var h=this,p=(n=n||{}).swipeXThreshold||50,f=n.swipeYThreshold||50,d=n.ignoreTagNames||[],g=function(e){var t=l(e)[0];if(i=null,s=0,u=0,o=null,c=null,v=!1,t){var n=t.target;if(r.ZP.parentWithTag(n,d))return;i=n,s=t.clientX,u=t.clientY}},b=function(e){var t="touchmove"===e.type;if(i){var r,d,g,b,w=l(e)[0];w?(g=w.clientX||0,b=w.clientY||0,r=g-(s||0),d=b-(u||0)):(r=0,d=0);var Z=null==o?r:r-o,m=null==c?d:d-c;o=r,c=d,r>p&&Math.abs(d)<30?a.Z.trigger(h,"swiperight",[i]):r<0-p&&Math.abs(d)<30?a.Z.trigger(h,"swipeleft",[i]):(d<0-f||v)&&Math.abs(r)<30?(v=!0,a.Z.trigger(h,"swipeup",[i,{deltaY:d,deltaX:r,clientX:g,clientY:b,currentDeltaX:Z,currentDeltaY:m}])):(d>f||v)&&Math.abs(r)<30&&(v=!0,a.Z.trigger(h,"swipedown",[i,{deltaY:d,deltaX:r,clientX:g,clientY:b,currentDeltaX:Z,currentDeltaY:m}])),t&&n.preventDefaultOnMove&&e.preventDefault()}t||(i=null,s=0,u=0,o=null,c=null,v=!1)};this.touchStart=g,this.touchEnd=b,r.ZP.addEventListener(t,"touchstart",g,{passive:!0}),n.triggerOnMove&&r.ZP.addEventListener(t,"touchmove",b,{passive:!n.preventDefaultOnMove}),r.ZP.addEventListener(t,"touchend",b,{passive:!0}),r.ZP.addEventListener(t,"touchcancel",b,{passive:!0})}var t,n;return t=e,(n=[{key:"destroy",value:function(){var e=this.elem;if(e){var t=this.touchStart,n=this.touchEnd;r.ZP.removeEventListener(e,"touchstart",t,{passive:!0}),r.ZP.removeEventListener(e,"touchmove",n,{passive:!0}),r.ZP.removeEventListener(e,"touchend",n,{passive:!0}),r.ZP.removeEventListener(e,"touchcancel",n,{passive:!0})}this.touchStart=null,this.touchEnd=null,this.elem=null}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=s}}]);