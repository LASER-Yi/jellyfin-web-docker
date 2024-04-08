/*! For license information please see bookPlayer-plugin.8028c9bf61cb15f2c5b5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64633,10905,68672],{14447:function(e,t,n){n.r(t),n.d(t,{BookPlayer:function(){return L}}),n(29305),n(32733),n(51770),n(84701),n(2623),n(87324),n(89336),n(10849),n(70389),n(36947),n(26437),n(52697),n(23630),n(44962),n(81678),n(84734),n(4754),n(94),n(78557),n(90076),n(50987),n(83994),n(82367);var o=n(56869),r=n(74550),i=n(79754),a=n(86191),s=n(35222),l=n(80245),c=n(47629),u=n(9482),h=n(82885),d=n(66176),f=n(62014),y=(n(15453),n(68104));function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function v(){v=function(){return t};var e,t={},n=Object.prototype,o=n.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,o){var i=t&&t.prototype instanceof k?t:k,a=Object.create(i.prototype),s=new O(o||[]);return r(a,"_invoke",{value:z(e,n,s)}),a}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",y="executing",m="completed",b={};function k(){}function g(){}function E(){}var S={};c(S,a,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(I([])));L&&L!==n&&o.call(L,a)&&(S=L);var x=E.prototype=k.prototype=Object.create(S);function B(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(r,i,a,s){var l=h(e[r],e,i);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==p(u)&&o.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(u).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(l.arg)}var i;r(this,"_invoke",{value:function(e,o){function r(){return new t((function(t,r){n(e,o,t,r)}))}return i=i?i.then(r,r):r()}})}function z(t,n,o){var r=d;return function(i,a){if(r===y)throw Error("Generator is already running");if(r===m){if("throw"===i)throw a;return{value:e,done:!0}}for(o.method=i,o.arg=a;;){var s=o.delegate;if(s){var l=C(s,o);if(l){if(l===b)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(r===d)throw r=m,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r=y;var c=h(t,n,o);if("normal"===c.type){if(r=o.done?m:f,c.arg===b)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(r=m,o.method="throw",o.arg=c.arg)}}}function C(t,n){var o=n.method,r=t.iterator[o];if(r===e)return n.delegate=null,"throw"===o&&t.iterator.return&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),b;var i=h(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,b;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function I(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(p(t)+" is not iterable")}return g.prototype=E,r(x,"constructor",{value:E,configurable:!0}),r(E,"constructor",{value:g,configurable:!0}),g.displayName=c(E,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,c(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},B(T.prototype),c(T.prototype,s,(function(){return this})),t.AsyncIterator=T,t.async=function(e,n,o,r,i){void 0===i&&(i=Promise);var a=new T(u(e,n,o,r),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},B(x),c(x,l,"Generator"),c(x,a,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var o in t)n.push(o);return n.reverse(),function e(){for(;n.length;){var o=n.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},t.values=I,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(o,r){return s.type="throw",s.arg=t,n.next=o,r&&(n.method="next",n.arg=e),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;F(n)}return r}}throw Error("illegal catch attempt")},delegateYield:function(t,n,o){return this.delegate={iterator:I(t),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=e),b}},t}function m(e,t,n,o,r,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(o,r)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){m(i,o,r,a,s,"next",e)}function s(e){m(i,o,r,a,s,"throw",e)}a(void 0)}))}}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,g(o.key),o)}}function g(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=p(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}var E={dark:{body:{color:"#d8dadc",background:"#000","font-size":"medium"}},sepia:{body:{color:"#d8a262",background:"#000","font-size":"medium"}},light:{body:{color:"#000",background:"#fff","font-size":"medium"}}},S=["dark","sepia","light"],w=["x-small","small","medium","large","x-large"],L=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="Book Player",this.type=d.Q.MediaPlayer,this.id="bookplayer",this.priority=1,h.theme()&&"dark"!==h.theme()?this.theme="light":this.theme="dark",this.fontSize="medium",this.onDialogClosed=this.onDialogClosed.bind(this),this.openTableOfContents=this.openTableOfContents.bind(this),this.rotateTheme=this.rotateTheme.bind(this),this.increaseFontSize=this.increaseFontSize.bind(this),this.decreaseFontSize=this.decreaseFontSize.bind(this),this.previous=this.previous.bind(this),this.next=this.next.bind(this),this.onWindowKeyUp=this.onWindowKeyUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this)},(t=[{key:"play",value:function(e){this.progress=0,this.cancellationToken=!1,this.loaded=!1,o.Ay.show();var t=this.createMediaElement();return this.setCurrentSrc(t,e)}},{key:"stop",value:function(){this.unbindEvents();var e={src:this.item};f.A.trigger(this,"stopped",[e]);var t=this.mediaElement,n=this.tocElement,r=this.rendition;t&&(i.default.close(t),this.mediaElement=null),n&&(n.destroy(),this.tocElement=null),r&&r.destroy(),o.Ay.hide(),this.cancellationToken=!0}},{key:"destroy",value:function(){}},{key:"currentItem",value:function(){return this.item}},{key:"currentTime",value:function(){return 1e3*this.progress}},{key:"duration",value:function(){return 1e3}},{key:"getBufferedRanges",value:function(){return[{start:0,end:1e7}]}},{key:"volume",value:function(){return 100}},{key:"isMuted",value:function(){return!1}},{key:"paused",value:function(){return!1}},{key:"seekable",value:function(){return!0}},{key:"onWindowKeyUp",value:function(e){var t=r.Ay.getKeyName(e);if(this.loaded)switch(t){case"l":case"ArrowRight":case"Right":this.next();break;case"j":case"ArrowLeft":case"Left":this.previous();break;case"Escape":this.tocElement?this.tocElement.destroy():this.stop()}}},{key:"onTouchStart",value:function(e){this.loaded&&e.touches&&0!==e.touches.length&&(e.touches[0].clientX%c.Ay.getWindowSize().innerWidth<c.Ay.getWindowSize().innerWidth/2?this.previous():this.next())}},{key:"onDialogClosed",value:function(){this.stop()}},{key:"bindMediaElementEvents",value:function(){var e,t,n=this.mediaElement;n.addEventListener("close",this.onDialogClosed,{once:!0}),n.querySelector("#btnBookplayerExit").addEventListener("click",this.onDialogClosed,{once:!0}),n.querySelector("#btnBookplayerToc").addEventListener("click",this.openTableOfContents),n.querySelector("#btnBookplayerFullscreen").addEventListener("click",this.toggleFullscreen),n.querySelector("#btnBookplayerRotateTheme").addEventListener("click",this.rotateTheme),n.querySelector("#btnBookplayerIncreaseFontSize").addEventListener("click",this.increaseFontSize),n.querySelector("#btnBookplayerDecreaseFontSize").addEventListener("click",this.decreaseFontSize),null===(e=n.querySelector("#btnBookplayerPrev"))||void 0===e||e.addEventListener("click",this.previous),null===(t=n.querySelector("#btnBookplayerNext"))||void 0===t||t.addEventListener("click",this.next)}},{key:"bindEvents",value:function(){this.bindMediaElementEvents(),document.addEventListener("keyup",this.onWindowKeyUp),this.rendition.on("touchstart",this.onTouchStart),this.rendition.on("keyup",this.onWindowKeyUp)}},{key:"unbindMediaElementEvents",value:function(){var e,t,n=this.mediaElement;n.removeEventListener("close",this.onDialogClosed),n.querySelector("#btnBookplayerExit").removeEventListener("click",this.onDialogClosed),n.querySelector("#btnBookplayerToc").removeEventListener("click",this.openTableOfContents),n.querySelector("#btnBookplayerFullscreen").removeEventListener("click",this.toggleFullscreen),n.querySelector("#btnBookplayerRotateTheme").removeEventListener("click",this.rotateTheme),n.querySelector("#btnBookplayerIncreaseFontSize").removeEventListener("click",this.increaseFontSize),n.querySelector("#btnBookplayerDecreaseFontSize").removeEventListener("click",this.decreaseFontSize),null===(e=n.querySelector("#btnBookplayerPrev"))||void 0===e||e.removeEventListener("click",this.previous),null===(t=n.querySelector("#btnBookplayerNext"))||void 0===t||t.removeEventListener("click",this.next)}},{key:"unbindEvents",value:function(){var e,t;this.mediaElement&&this.unbindMediaElementEvents(),document.removeEventListener("keyup",this.onWindowKeyUp),null===(e=this.rendition)||void 0===e||e.off("touchstart",this.onTouchStart),null===(t=this.rendition)||void 0===t||t.off("keyup",this.onWindowKeyUp)}},{key:"openTableOfContents",value:function(){this.loaded&&(this.tocElement=new l.default(this))}},{key:"toggleFullscreen",value:function(){if(s.A.isEnabled){var e=document.querySelector("#btnBookplayerFullscreen .material-icons");e.classList.remove(s.A.isFullscreen?"fullscreen_exit":"fullscreen"),e.classList.add(s.A.isFullscreen?"fullscreen":"fullscreen_exit"),s.A.toggle()}}},{key:"rotateTheme",value:function(){if(this.loaded){var e=S[(S.indexOf(this.theme)+1)%S.length];this.rendition.themes.register("default",E[e]),this.rendition.themes.update("default"),this.theme=e}}},{key:"increaseFontSize",value:function(){if(this.loaded&&this.fontSize!==w[w.length-1]){var e=w[w.indexOf(this.fontSize)+1];this.rendition.themes.fontSize(e),this.fontSize=e}}},{key:"decreaseFontSize",value:function(){if(this.loaded&&this.fontSize!==w[0]){var e=w[w.indexOf(this.fontSize)-1];this.rendition.themes.fontSize(e),this.fontSize=e}}},{key:"previous",value:function(e){null==e||e.preventDefault(),this.rendition&&("rtl"===this.rendition.book.package.metadata.direction?this.rendition.next():this.rendition.prev())}},{key:"next",value:function(e){null==e||e.preventDefault(),this.rendition&&("rtl"===this.rendition.book.package.metadata.direction?this.rendition.prev():this.rendition.next())}},{key:"createMediaElement",value:function(){var e=this.mediaElement;return e||((e=document.getElementById("bookPlayer"))||((e=i.default.createDialog({exitAnimationDuration:400,size:"fullscreen",autoFocus:!1,scrollY:!1,exitAnimation:"fadeout",removeOnClose:!0})).id="bookPlayer",e.innerHTML=(0,u.c1)(y.default),i.default.open(e)),this.mediaElement=e,e)}},{key:"setCurrentSrc",value:function(e,t){var r=this,i=t.items[0];this.item=i,this.streamInfo={started:!0,ended:!1,item:this.item,mediaSource:{Id:i.Id}};var l=i.ServerId,c=a.A.getApiClient(l);return s.A.isEnabled||(document.getElementById("btnBookplayerFullscreen").display="none"),new Promise((function(e,a){Promise.all([n.e(52590),n.e(55441),n.e(99372),n.e(50857),n.e(98610)]).then(n.bind(n,68352)).then((function(n){var s=n.default,l=c.getItemDownloadUrl(i.Id),u=s(l,{openAs:"epub"}),h=document.body.clientHeight,d=h-.0425*h,y=u.renderTo("bookPlayerContainer",{width:"100%",height:d,flow:"paginated",allowScriptedContent:!0});return r.currentSrc=l,r.rendition=y,y.themes.register("default",E[r.theme]),y.themes.select("default"),y.display().then((function(){var n=document.querySelector(".epub-container");return n.style.opacity="0",r.bindEvents(),r.rendition.book.locations.generate(1024).then(b(v().mark((function i(){var s,l;return v().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(r.cancellationToken&&a(),0==(s=t.startPositionTicks/1e7)){i.next=6;break}return l=u.locations.cfiFromPercentage(s),i.next=6,y.display(l);case 6:return r.loaded=!0,n.style.opacity="",y.on("relocated",(function(e){r.progress=u.locations.percentageFromCfi(e.start.cfi),f.A.trigger(r,"pause")})),o.Ay.hide(),i.abrupt("return",e());case 11:case"end":return i.stop()}}),i)}))))}),(function(){return console.error("failed to display epub"),a()}))}))}))}},{key:"canPlayMediaType",value:function(e){return"book"===(e||"").toLowerCase()}},{key:"canPlayItem",value:function(e){var t;return null===(t=e.Path)||void 0===t?void 0:t.endsWith("epub")}}])&&k(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();t.default=L},80245:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}}),n(29305),n(32733),n(84701),n(81678),n(24776),n(44962),n(86584),n(89336),n(4754),n(94),n(36947),n(78557),n(83994),n(64062),n(23630),n(82367);var o=n(22696),r=n.n(o),i=n(79754);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,l(o.key),o)}}function l(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:t+""}var c=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bookPlayer=t,this.rendition=t.rendition,this.onDialogClosed=this.onDialogClosed.bind(this),this.createMediaElement()},(t=[{key:"destroy",value:function(){var e=this.elem;e&&(this.unbindEvents(),i.default.close(e)),this.bookPlayer.tocElement=null}},{key:"bindEvents",value:function(){var e=this.elem;e.addEventListener("close",this.onDialogClosed,{once:!0}),e.querySelector(".btnBookplayerTocClose").addEventListener("click",this.onDialogClosed,{once:!0})}},{key:"unbindEvents",value:function(){var e=this.elem;e.removeEventListener("close",this.onDialogClosed),e.querySelector(".btnBookplayerTocClose").removeEventListener("click",this.onDialogClosed)}},{key:"onDialogClosed",value:function(){this.destroy()}},{key:"replaceLinks",value:function(e,t){e.querySelectorAll("a[href]").forEach((function(e){var n=e.getAttribute("href");e.onclick=function(){return t(n),!1}}))}},{key:"chapterTocItem",value:function(e,t){var n,o=this,i="<li>",a=t.href.startsWith("../")?t.href.slice(3):t.href;if(i+='<a href="'.concat(r()(e.path.directory+a),'">').concat(r()(t.label),"</a>"),null!==(n=t.subitems)&&void 0!==n&&n.length){var s=t.subitems.map((function(t){return o.chapterTocItem(e,t)})).join("");i+="<ul>".concat(s,"</ul>")}return i+"</li>"}},{key:"createMediaElement",value:function(){var e=this,t=this.rendition,n=i.default.createDialog({size:"small",autoFocus:!1,removeOnClose:!0});n.id="dialogToc";var o='<div class="topRightActionButtons">';o+='<button is="paper-icon-button-light" class="autoSize bookplayerButton btnBookplayerTocClose hide-mouse-idle-tv" tabindex="-1"><span class="material-icons bookplayerButtonIcon close" aria-hidden="true"></span></button>',o+="</div>",o+='<ul class="toc">',t.book.navigation.forEach((function(n){o+=e.chapterTocItem(t.book,n)})),o+="</ul>",n.innerHTML=o,this.replaceLinks(n,(function(n){var o=t.book.path.relative(n);t.display(o),e.destroy()})),this.elem=n,this.bindEvents(),i.default.open(n)}}])&&s(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}()},68104:function(e,t,n){n.r(t),t.default='<div class="topButtons"> <button is="paper-icon-button-light" id="btnBookplayerToc" class="autoSize bookplayerButton hide-mouse-idle-tv" tabindex="-1"> <span class="material-icons bookplayerButtonIcon toc" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" id="btnBookplayerExit" class="autoSize bookplayerButton hide-mouse-idle-tv" tabindex="-1"> <span class="material-icons bookplayerButtonIcon close" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" id="btnBookplayerRotateTheme" class="autoSize bookplayerButton hide-mouse-idle-tv" tabindex="-1"> <span class="material-icons bookplayerButtonIcon remove_red_eye" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" id="btnBookplayerDecreaseFontSize" class="autoSize bookplayerButton hide-mouse-idle-tv" tabindex="-1"> <span class="material-icons bookplayerButtonIcon text_decrease" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" id="btnBookplayerIncreaseFontSize" class="autoSize bookplayerButton hide-mouse-idle-tv" tabindex="-1"> <span class="material-icons bookplayerButtonIcon text_increase" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" id="btnBookplayerFullscreen" class="autoSize bookplayerButton hide-mouse-idle-tv" tabindex="-1"> <span class="material-icons bookplayerButtonIcon fullscreen" aria-hidden="true"></span> </button> </div> <div id="bookPlayerContainer" class="bookPlayerContainer"></div> '}}]);