"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49275],{49275:function(t,e,l){l.r(e),l(24776),l(96054),l(95021),l(93062),l(69177),l(15453);var r=l(5898),o=l(23064),i=Object.create(HTMLDivElement.prototype);function n(t){var e="",l="left"===t?"chevron_left":"chevron_right",o="left"===t?r.Ay.translate("Previous"):r.Ay.translate("Next");return e+='<button type="button" is="paper-icon-button-light" data-ripple="false" data-direction="'.concat(t,'" title="').concat(o,'" class="emby-scrollbuttons-button">'),(e+='<span class="material-icons '+l+'" aria-hidden="true"></span>')+"</button>"}function s(t){return t.getScrollPosition?t.getScrollPosition():0}function c(){var t,e=this.scroller;!function(t,e,l,o){var i=l;r.Ay.getIsElementRTL(t)&&(i*=-1),o<=e+20?(t.scrollButtonsLeft.classList.add("hide"),t.scrollButtonsRight.classList.add("hide")):(t.scrollButtonsLeft.classList.remove("hide"),t.scrollButtonsRight.classList.remove("hide")),t.scrollButtonsLeft.disabled=!(i>0);var n=i+e;t.scrollButtonsRight.disabled=o>0&&n>=o}(this,function(t){var e=t.offsetWidth,l=window.getComputedStyle(t,null),r=a(l,"padding-left");r&&(e-=r);var o=a(l,"padding-right");o&&(e-=o);var i=t.getScrollSlider();return(r=a(l=window.getComputedStyle(i,null),"padding-left"))&&(e-=r),(o=a(l,"padding-right"))&&(e-=o),e}(e),s(e),(t=e).getScrollSize?t.getScrollSize():0)}function a(t,e){var l=t.getPropertyValue(e);return l&&(l=l.replace("px",""))?(l=parseInt(l,10),isNaN(l)?0:l):0}function d(){var t=this.getAttribute("data-direction"),e=this.parentNode.nextSibling,l=s(e);(0,o.s)({direction:t,scroller:e,scrollState:{scrollPos:l}})}i.createdCallback=function(){},i.attachedCallback=function(){var t=this.nextSibling;this.scroller=t,this.parentNode.classList.add("emby-scroller-container"),this.innerHTML=n("left")+n("right");var e=this.querySelectorAll(".emby-scrollbuttons-button");e[0].addEventListener("click",d),e[1].addEventListener("click",d),this.scrollButtonsLeft=e[0],this.scrollButtonsRight=e[1];var l=c.bind(this);this.scrollHandler=l,t.addScrollEventListener(l,{capture:!1,passive:!0})},i.detachedCallback=function(){var t=this.scroller;this.scroller=null;var e=this.scrollHandler;t&&e&&t.removeScrollEventListener(e,{capture:!1,passive:!0}),this.scrollHandler=null,this.scrollButtonsLeft=null,this.scrollButtonsRight=null},document.registerElement("emby-scrollbuttons",{prototype:i,extends:"div"})},23064:function(t,e,l){l.d(e,{D:function(){return r},s:function(){return s}});var r,o=l(5898),i=function(t,e){var l="function"==typeof Symbol&&t[Symbol.iterator];if(!l)return t;var r,o,i=l.call(t),n=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)n.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(l=i.return)&&l.call(i)}finally{if(o)throw o.error}}return n},n=function(t,e,l){if(l||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))};function s(t){var e=t.direction,l=t.scroller,s=t.scrollState;if(l){var c=l.getScrollSlider();!function(t){var e,l,n,s=t.scroller,c=t.items,a=t.scrollState,d=t.direction,u=void 0===d?r.RIGHT:d,f=o.Ay.getIsRTL()?-1:1,h=null!==(l=null===(e=s.getScrollFrame)||void 0===e?void 0:e.call(s))&&void 0!==l?l:s,v=i(function(t,e,l){var r=l.scrollPos*(o.Ay.getIsRTL()?-1:1),i=t.offsetWidth,n=e[0].offsetWidth;return[Math.max(Math.floor(r/n)-1,0),Math.floor((r+i)/n)]}(h,c,a),2),p=v[0],g=v[1];if(u===r.RIGHT)n=g*c[g].offsetWidth*f;else{var b=c[p];n=(p*b.offsetWidth-(Math.floor(h.offsetWidth/b.offsetWidth)-1)*b.offsetWidth)*f}s.slideTo?s.slideTo(n,!1,void 0):s.scrollToPosition(n)}({scroller:l,items:n([],i(c.children),!1),scrollState:s,direction:e})}}!function(t){t.RIGHT="right",t.LEFT="left"}(r||(r={}))}}]);