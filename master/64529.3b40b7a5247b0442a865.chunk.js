"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64529],{64529:function(t,e,n){n.r(e),n(48410),n(19068),n(87211),n(25901),n(92189),n(63238),n(95163),n(99785),n(91047),n(5769),n(17460),n(14078);var i=n(57366),o=n(72365),s=n(94994);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,h(i.key),i)}}function c(t,e,n){return(e=h(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e);if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===a(e)?e:String(e)}function u(t){return t.changedTouches||t.targetTouches||t.touches}function d(t){t.preventDefault(),t.stopPropagation()}var l=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"mask",void 0),c(this,"newPos",0),c(this,"currentPos",0),c(this,"startPoint",0),c(this,"countStart",0),c(this,"velocity",0),c(this,"dragMode",0),c(this,"menuTouchStartX",void 0),c(this,"menuTouchStartY",void 0),c(this,"menuTouchStartTime",void 0),c(this,"edgeContainer",document.querySelector(".mainDrawerHandle")),c(this,"isPeeking",!1),c(this,"backgroundTouchStartX",void 0),c(this,"backgroundTouchStartTime",void 0),c(this,"_edgeSwipeEnabled",void 0),c(this,"onMenuTouchStart",(function(t){n.options.target.classList.remove("transition");var e=u(t)[0]||{};n.menuTouchStartX=e.clientX,n.menuTouchStartY=e.clientY,n.menuTouchStartTime=(new Date).getTime()})),c(this,"onMenuTouchMove",(function(t){var e=n.scrollContainer,i=n.visible,o=u(t)[0]||{},a=o.clientX||0,r=o.clientY||0,c=a-(n.menuTouchStartX||0);s.ZP.getIsRTL()&&(c*=-1);var h=r-(n.menuTouchStartY||0);n.setVelocity(c),i&&1!==n.dragMode&&c>0&&(n.dragMode=2),0===n.dragMode&&(!i||Math.abs(c)>=10)&&Math.abs(h)<5?(n.dragMode=1,e.addEventListener("scroll",d),n.showMask()):0===n.dragMode&&Math.abs(h)>=5&&(n.dragMode=2),1===n.dragMode&&(n.newPos=n.currentPos+c,n.changeMenuPos())})),c(this,"onMenuTouchEnd",(function(t){var e=n.options,i=n.scrollContainer;e.target.classList.add("transition"),i.removeEventListener("scroll",d),n.dragMode=0;var o=u(t)[0]||{},a=o.clientX||0,r=o.clientY||0,c=a-(n.menuTouchStartX||0);s.ZP.getIsRTL()&&(c*=-1);var h=r-(n.menuTouchStartY||0);n.currentPos=c,n.checkMenuState(c,h)})),c(this,"onEdgeTouchMove",(function(t){t.preventDefault(),t.stopPropagation(),n.onEdgeTouchStart(t)})),c(this,"onEdgeTouchStart",(function(t){var e=n.options;n.isPeeking?n.onMenuTouchMove(t):((u(t)[0]||{}).clientX||0)<=e.handleSize&&(n.isPeeking=!0,"touchstart"===t.type&&(o.ZP.removeEventListener(n.edgeContainer,"touchmove",n.onEdgeTouchMove,{}),o.ZP.addEventListener(n.edgeContainer,"touchmove",n.onEdgeTouchMove,{})),n.onMenuTouchStart(t))})),c(this,"onEdgeTouchEnd",(function(t){n.isPeeking&&(n.isPeeking=!1,o.ZP.removeEventListener(n.edgeContainer,"touchmove",n.onEdgeTouchMove,{}),n.onMenuTouchEnd(t))})),c(this,"onBackgroundTouchStart",(function(t){var e=u(t)[0]||{};n.backgroundTouchStartX=e.clientX,n.backgroundTouchStartTime=(new Date).getTime()})),c(this,"onBackgroundTouchMove",(function(t){var e=n.options,i=(u(t)[0]||{}).clientX||0;if(i<=e.width&&n.isVisible){n.countStart++;var o=i-(n.backgroundTouchStartX||0);if(s.ZP.getIsRTL()&&(o*=-1),1==n.countStart&&(n.startPoint=o),o<0&&2!==n.dragMode){n.dragMode=1,n.newPos=o-n.startPoint+e.width,n.changeMenuPos();var a=(new Date).getTime()-(n.backgroundTouchStartTime||0);n.velocity=Math.abs(o)/a}}t.preventDefault(),t.stopPropagation()})),c(this,"onBackgroundTouchEnd",(function(t){var e=((u(t)[0]||{}).clientX||0)-(n.backgroundTouchStartX||0);s.ZP.getIsRTL()&&(e*=-1),n.checkMenuState(e),n.countStart=0})),this.options=e,this.defaults={width:260,handleSize:10,disableMask:!1,maxMaskOpacity:.5},e.target.classList.add("transition"),this.scrollContainer=e.target.querySelector(".mainDrawer-scrollContainer"),this.scrollContainer.classList.add("scrollY"),this.isVisible=!1,this.initialize()}var e,n;return e=t,(n=[{key:"setVelocity",value:function(t){var e=(new Date).getTime()-(this.menuTouchStartTime||0);this.velocity=Math.abs(t)/e}},{key:"initElements",value:function(){var t=this.options;t.target.classList.add("touch-menu-la"),t.target.style.width=t.width+"px",s.ZP.getIsRTL()?t.target.style.right=-t.width+"px":t.target.style.left=-t.width+"px",t.disableMask||(this.mask=document.createElement("div"),this.mask.className="tmla-mask hide",document.body.appendChild(this.mask))}},{key:"animateToPosition",value:function(t){var e=this.options,n=s.ZP.getIsRTL()?-t:t;requestAnimationFrame((function(){e.target.style.transform=t?"translateX("+n+"px)":"none"}))}},{key:"changeMenuPos",value:function(){var t=this.options;this.newPos<=t.width&&this.animateToPosition(this.newPos)}},{key:"clickMaskClose",value:function(){var t=this;this.mask.addEventListener("click",(function(){t.close()}))}},{key:"checkMenuState",value:function(t,e){this.velocity>=.4?t>=0||Math.abs(e||0)>=70?this.open():this.close():this.newPos>=100?this.open():this.newPos&&this.close()}},{key:"open",value:function(){var t=this.options;this.animateToPosition(t.width),this.currentPos=t.width,this.isVisible=!0,t.target.classList.add("drawer-open"),this.showMask(),this.invoke(t.onChange)}},{key:"close",value:function(){var t=this.options;this.animateToPosition(0),this.currentPos=0,this.isVisible=!1,t.target.classList.remove("drawer-open"),this.hideMask(),this.invoke(t.onChange)}},{key:"toggle",value:function(){this.isVisible?this.close():this.open()}},{key:"showMask",value:function(){this.mask.classList.remove("hide"),this.mask.classList.add("backdrop")}},{key:"hideMask",value:function(){this.mask.classList.add("hide"),this.mask.classList.remove("backdrop")}},{key:"invoke",value:function(t){t&&t.apply(this)}},{key:"setEdgeSwipeEnabled",value:function(t){!this.options.disableEdgeSwipe&&i.Z.touch&&(t?this._edgeSwipeEnabled||(this._edgeSwipeEnabled=!0,o.ZP.addEventListener(this.edgeContainer,"touchstart",this.onEdgeTouchStart,{passive:!0}),o.ZP.addEventListener(this.edgeContainer,"touchend",this.onEdgeTouchEnd,{passive:!0}),o.ZP.addEventListener(this.edgeContainer,"touchcancel",this.onEdgeTouchEnd,{passive:!0})):this._edgeSwipeEnabled&&(this._edgeSwipeEnabled=!1,o.ZP.removeEventListener(this.edgeContainer,"touchstart",this.onEdgeTouchStart,{passive:!0}),o.ZP.removeEventListener(this.edgeContainer,"touchend",this.onEdgeTouchEnd,{passive:!0}),o.ZP.removeEventListener(this.edgeContainer,"touchcancel",this.onEdgeTouchEnd,{passive:!0})))}},{key:"initialize",value:function(){var t=Object.assign({},this.defaults,this.options||{});this.options=t,i.Z.edge&&(t.disableEdgeSwipe=!0),this.initElements(),i.Z.touch&&(o.ZP.addEventListener(t.target,"touchstart",this.onMenuTouchStart,{passive:!0}),o.ZP.addEventListener(t.target,"touchmove",this.onMenuTouchMove,{passive:!0}),o.ZP.addEventListener(t.target,"touchend",this.onMenuTouchEnd,{passive:!0}),o.ZP.addEventListener(t.target,"touchcancel",this.onMenuTouchEnd,{passive:!0}),o.ZP.addEventListener(this.mask,"touchstart",this.onBackgroundTouchStart,{passive:!0}),o.ZP.addEventListener(this.mask,"touchmove",this.onBackgroundTouchMove,{}),o.ZP.addEventListener(this.mask,"touchend",this.onBackgroundTouchEnd,{passive:!0}),o.ZP.addEventListener(this.mask,"touchcancel",this.onBackgroundTouchEnd,{passive:!0})),this.clickMaskClose()}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.default=l}}]);