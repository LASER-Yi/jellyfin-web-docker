/*! For license information please see 36542.e38d4146c4dc3dedb33f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36542],{36542:function(t,e,r){r.r(e),r(63238),r(61418),r(19068),r(87211),r(25901),r(92189),r(95163),r(99785),r(91047),r(5769),r(17460),r(14078),r(98521),r(6798),r(82923),r(21897),r(12274),r(55849),r(50987),r(60190),r(72410);var n=r(72365),o=r(48957),i=r(81643),a=r(70350),u=r(30325),c=r(34643),s=r(94994),l=r(21776);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(){h=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),u=new P(o||[]);return n(a,"_invoke",{value:N(t,r,u)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p={};function d(){}function v(){}function y(){}var m={};c(m,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(k([])));b&&b!==e&&r.call(b,i)&&(m=b);var w=y.prototype=d.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function o(n,i,a,u){var c=l(t[n],t,i);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"==f(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function N(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=E(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:v,configurable:!0}),v.displayName=c(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(L.prototype),c(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),c(w,u,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key,"string"),"symbol"===f(o)?o:String(o)),n)}var o}function d(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function v(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){d(i,n,o,a,u,"next",t)}function u(t){d(i,n,o,a,u,"throw",t)}a(void 0)}))}}r(38228);var y=n.ZP.whichTransitionEvent();function m(){var t=this,e=t.options.parent,r=Math.max(Math.round(P(t)/1e3),0);console.debug("up next seconds remaining: "+r);var n='<span class="upNextDialog-countdownText">'+s.ZP.translate("HeaderSecondsValue",r)+"</span>",o="Episode"===t.itemType?s.ZP.translate("HeaderNextEpisodePlayingInValue",n):s.ZP.translate("HeaderNextVideoPlayingInValue",n);e.querySelector(".upNextDialog-nextVideoText").innerHTML=o}function g(t){var e=this,r=e.options.parent;r.querySelector(".upNextDialog-mediainfo").innerHTML=a.ZP.getPrimaryMediaInfoHtml(t,{criticRating:!1,originalAirDate:!1,starRating:!1,subtitles:!1});var n=l.ZP.getDisplayName(t);t.SeriesName&&(n=t.SeriesName+" - "+n),r.querySelector(".upNextDialog-title").innerText=n||"",e.itemType=t.Type,e.show()}function b(t){t._countdownTextTimeout&&(clearInterval(t._countdownTextTimeout),t._countdownTextTimeout=null)}function w(){return x.apply(this,arguments)}function x(){return(x=v(h().mark((function t(){var e,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.options)){t.next=6;break}return r=e.player,t.next=5,this.hide();case 5:o.O.nextTrack(r);case 6:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function L(t,e){var r;e.parent.innerHTML=(r="",r+='<div class="flex flex-direction-column flex-grow">',r+='<h2 class="upNextDialog-nextVideoText" style="margin:.25em 0;">&nbsp;</h2>',r+='<h3 class="upNextDialog-title" style="margin:.25em 0 .5em;"></h3>',r+='<div class="flex flex-direction-row upNextDialog-mediainfo">',r+="</div>",r+='<div class="flex flex-direction-row upNextDialog-buttons" style="margin-top:1em;">',r+='<button type="button" is="emby-button" class="raised raised-mini btnStartNow upNextDialog-button">',r+=s.ZP.translate("HeaderStartNow"),r+="</button>",r+='<button type="button" is="emby-button" class="raised raised-mini btnHide upNextDialog-button">',r+=s.ZP.translate("Hide"),r+="</button>",(r+="</div>")+"</div>"),e.parent.classList.add("hide"),e.parent.classList.add("upNextDialog"),e.parent.classList.add("upNextDialog-hidden"),g.call(t,e.nextItem),e.parent.querySelector(".btnHide").addEventListener("click",t.hide.bind(t)),e.parent.querySelector(".btnStartNow").addEventListener("click",w.bind(t))}function N(t,e){var r=t._onHideAnimationComplete;r&&n.ZP.removeEventListener(e,y,r,{once:!0})}function E(t){var e=t.target;e.classList.add("hide"),N(this,e),i.Z.trigger(this,"hide")}function T(){return S.apply(this,arguments)}function S(){return(S=v(h().mark((function t(){var e,r,o,i;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this,b(this),e.options){t.next=4;break}return t.abrupt("return");case 4:if(r=e.options.parent){t.next=7;break}return t.abrupt("return");case 7:if(N(this,r),!r.classList.contains("upNextDialog-hidden")){t.next=10;break}return t.abrupt("return");case 10:return o=E.bind(e),e._onHideAnimationComplete=o,t.next=14,new Promise((function(t){n.ZP.addEventListener(r,y,t,{once:!0}),r.offsetWidth,r.classList.add("upNextDialog-hidden")}));case 14:i=t.sent,e._onHideAnimationComplete(i);case 16:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function P(t){var e=t.options;if(e){var r=o.O.duration(e.player);if(r){var n=r-1e4*o.O.currentTime(e.player);return Math.round(n/1e4)}}return 0}var k=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e,L(this,e)}var e,r,n;return e=t,r=[{key:"show",value:function(){var t,e=this.options.parent;N(this,e),e.classList.remove("hide"),e.offsetWidth,e.classList.remove("upNextDialog-hidden"),u.Z.tv&&setTimeout((function(){c.Z.focus(e.querySelector(".btnStartNow"))}),50),P(t=this)<=0||(m.call(t),b(t),t._countdownTextTimeout=setInterval(m.bind(t),400))}},{key:"hide",value:(n=v(h().mark((function t(){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.bind(this)();case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"destroy",value:function(){T.call(this),this.options=null,this.itemType=null}}],r&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.default=k}}]);