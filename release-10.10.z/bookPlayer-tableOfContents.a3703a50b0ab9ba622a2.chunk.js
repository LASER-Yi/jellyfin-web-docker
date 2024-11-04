"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10905],{80245:function(e,t,o){o.r(t),o.d(t,{default:function(){return s}}),o(29305),o(32733),o(84701),o(81678),o(24776),o(44962),o(86584),o(89336),o(4754),o(94),o(36947),o(78557),o(83994),o(64062),o(23630),o(82367);var n=o(22696),i=o.n(n),r=o(79754);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function c(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}var s=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bookPlayer=t,this.rendition=t.rendition,this.onDialogClosed=this.onDialogClosed.bind(this),this.createMediaElement()},(t=[{key:"destroy",value:function(){var e=this.elem;e&&(this.unbindEvents(),r.default.close(e)),this.bookPlayer.tocElement=null}},{key:"bindEvents",value:function(){var e=this.elem;e.addEventListener("close",this.onDialogClosed,{once:!0}),e.querySelector(".btnBookplayerTocClose").addEventListener("click",this.onDialogClosed,{once:!0})}},{key:"unbindEvents",value:function(){var e=this.elem;e.removeEventListener("close",this.onDialogClosed),e.querySelector(".btnBookplayerTocClose").removeEventListener("click",this.onDialogClosed)}},{key:"onDialogClosed",value:function(){this.destroy()}},{key:"replaceLinks",value:function(e,t){e.querySelectorAll("a[href]").forEach((function(e){var o=e.getAttribute("href");e.onclick=function(){return t(o),!1}}))}},{key:"chapterTocItem",value:function(e,t){var o,n=this,r="<li>",l=t.href.startsWith("../")?t.href.slice(3):t.href;if(r+='<a href="'.concat(i()(e.path.directory+l),'">').concat(i()(t.label),"</a>"),null!==(o=t.subitems)&&void 0!==o&&o.length){var a=t.subitems.map((function(t){return n.chapterTocItem(e,t)})).join("");r+="<ul>".concat(a,"</ul>")}return r+"</li>"}},{key:"createMediaElement",value:function(){var e=this,t=this.rendition,o=r.default.createDialog({size:"small",autoFocus:!1,removeOnClose:!0});o.id="dialogToc";var n='<div class="topRightActionButtons">';n+='<button is="paper-icon-button-light" class="autoSize bookplayerButton btnBookplayerTocClose hide-mouse-idle-tv" tabindex="-1"><span class="material-icons bookplayerButtonIcon close" aria-hidden="true"></span></button>',n+="</div>",n+='<ul class="toc">',t.book.navigation.forEach((function(o){n+=e.chapterTocItem(t.book,o)})),n+="</ul>",o.innerHTML=n,this.replaceLinks(o,(function(o){var n=t.book.path.relative(o);t.display(n),e.destroy()})),this.elem=o,this.bindEvents(),r.default.open(o)}}])&&a(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}()}}]);