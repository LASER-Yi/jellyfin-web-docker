/*! For license information please see htmlVideoPlayer-plugin.7120758f80b824b30f02.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32169],{13802:function(e,t,r){r.r(t),r.d(t,{HtmlVideoPlayer:function(){return re}}),r(5769),r(63238),r(61418),r(95623),r(61514),r(17460),r(14078),r(98010),r(52077),r(911),r(23938),r(52327),r(15610),r(43512),r(55849),r(61013),r(32081),r(11755),r(19068),r(87211),r(25901),r(92189),r(95163),r(99785),r(91047),r(98521),r(6798),r(82923),r(21897),r(12274),r(50987),r(60190),r(72410);var n=r(57366),i=r(84881),a=r(28540),o=r(72365),u=r(48957),s=r(52050),l=r(3427),c=r(21776),d=r(10341),h=r(94994),f=r(18613),v=r(23240),p=r(58886),y=r(57084),m=r(81643);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a,o,u=[],s=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);s=!0);}catch(e){l=!0,i=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(l)throw i}}return u}}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=w(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){u=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(u)throw a}}}}function w(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(){S=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,i){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),u=new L(i||[]);return n(o,"_invoke",{value:P(e,r,u)}),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d={};function h(){}function f(){}function v(){}var p={};s(p,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(A([])));m&&m!==t&&r.call(m,a)&&(p=m);var b=v.prototype=h.prototype=Object.create(p);function k(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function i(n,a,o,u){var s=c(e[n],e,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==g(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){i("next",e,o,u)}),(function(e){i("throw",e,o,u)})):t.resolve(d).then((function(e){l.value=e,o(l)}),(function(e){return i("throw",e,o,u)}))}u(s.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){i(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function P(e,t,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return{value:void 0,done:!0}}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var u=E(o,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=c(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function E(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var i=c(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,d;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function A(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return f.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:f,configurable:!0}),f.displayName=s(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,u,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},k(w.prototype),s(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new w(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},k(b),s(b,u,"Generator"),s(b,a,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=A,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:A(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function E(e,t,r,n,i,a,o){try{var u=e[a](o),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,i)}function T(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){E(a,n,i,o,u,"next",e)}function u(e){E(a,n,i,o,u,"throw",e)}o(void 0)}))}}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,C(n.key),n)}}function L(e,t,r){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}function A(e,t,r){return(t=C(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===g(t)?t:String(t)}function M(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}(e,Z(e,t,"set"),r),r}function O(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,Z(e,t,"get"))}function Z(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function I(e){return new Promise((function(t){var r=new XMLHttpRequest;r.open("HEAD",e,!0),r.onload=function(){t(r.responseURL||e)},r.onerror=function(r){console.error(r),t(e)},r.send(null)}))}function V(e,t){var r=e.replace(/\\N/gi,"\n").replace(/\r/gi,"");return t?r.replace(/\n/gi,"<br>"):r}function F(e,t,r){if(c.ZP.isLocalItem(t)&&e.Path)return e.Path;var n=u.O.getSubtitleUrl(e,t.ServerId);return r&&(n=n.replace(".vtt",r)),n}var W=new WeakMap,_=new WeakMap,j=new WeakMap,U=new WeakMap,R=new WeakMap,N=new WeakMap,D=new WeakMap,H=new WeakMap,q=new WeakMap,B=new WeakMap,G=new WeakMap,Q=new WeakMap,z=new WeakMap,J=new WeakMap,X=new WeakMap,Y=new WeakMap,$=new WeakMap,K=new WeakMap,ee=new WeakMap,te=new WeakMap,re=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),A(this,"name",void 0),A(this,"type","mediaplayer"),A(this,"id","htmlvideoplayer"),A(this,"priority",1),A(this,"isFetching",!1),L(this,W,{writable:!0,value:void 0}),L(this,_,{writable:!0,value:void 0}),L(this,j,{writable:!0,value:void 0}),L(this,U,{writable:!0,value:void 0}),L(this,R,{writable:!0,value:void 0}),L(this,N,{writable:!0,value:void 0}),L(this,D,{writable:!0,value:void 0}),L(this,H,{writable:!0,value:void 0}),L(this,q,{writable:!0,value:void 0}),L(this,B,{writable:!0,value:void 0}),L(this,G,{writable:!0,value:void 0}),L(this,Q,{writable:!0,value:void 0}),L(this,z,{writable:!0,value:void 0}),L(this,J,{writable:!0,value:0}),L(this,X,{writable:!0,value:void 0}),L(this,Y,{writable:!0,value:void 0}),L(this,$,{writable:!0,value:void 0}),L(this,K,{writable:!0,value:void 0}),L(this,ee,{writable:!0,value:void 0}),A(this,"_hlsPlayer",void 0),A(this,"_castPlayer",void 0),A(this,"_currentPlayOptions",void 0),L(this,te,{writable:!0,value:void 0}),A(this,"onEnded",(function(e){var r=e.target;t.destroyCustomTrack(r),(0,l.mr)(t,r,t.onError)})),A(this,"onTimeUpdate",(function(e){var r=e.target,n=r.currentTime;n&&!O(t,$)&&(M(t,$,!0),t.ensureValidVideo(r)),M(t,K,n);var i=t._currentPlayOptions;if(i){var a=1e3*n;a+=(i.transcodingOffsetTicks||0)/1e4,t.updateSubtitleText(a)}m.Z.trigger(t,"timeupdate")})),A(this,"onVolumeChange",(function(e){var r=e.target;(0,l.wk)(r.volume),m.Z.trigger(t,"volumechange")})),A(this,"onNavigatedToOsd",(function(){var e=O(t,W);e&&(e.classList.remove("videoPlayerContainer-onTop"),t.onStartedAndNavigatedToOsd())})),A(this,"onPlaying",(function(e){var r=e.target;O(t,Y)||(M(t,Y,!0),r.removeAttribute("controls"),a.ZP.hide(),(0,l.AW)(t,e.target,t._currentPlayOptions.playerStartPositionTicks,(function(){O(t,R)&&(O(t,R).timeOffset=(t._currentPlayOptions.transcodingOffsetTicks||0)/1e7+O(t,q),O(t,R).resize(),O(t,R).resetRenderAheadCache(!1))})),t._currentPlayOptions.fullscreen?s.appRouter.showVideoOsd().then(t.onNavigatedToOsd):((0,y.G2)(y.q3.Backdrop),O(t,W).classList.remove("videoPlayerContainer-onTop"),t.onStartedAndNavigatedToOsd())),m.Z.trigger(t,"playing")})),A(this,"onPlay",(function(){m.Z.trigger(t,"unpause")})),A(this,"onClick",(function(){m.Z.trigger(t,"click")})),A(this,"onDblClick",(function(){m.Z.trigger(t,"dblclick")})),A(this,"onPause",(function(){m.Z.trigger(t,"pause")})),A(this,"onError",(function(e){var r,n=e.target,i=n.error&&n.error.code||0,a=n.error&&n.error.message||"";switch(console.error("media element error: ".concat(i," ").concat(a)),i){case 1:default:return;case 2:r="network";break;case 3:if(t._hlsPlayer)return void(0,l.tq)(t);r="mediadecodeerror";break;case 4:r="medianotsupported"}(0,l.p_)(t,r)})),n.Z.edgeUwp?this.name="Windows Video Player":this.name="Html Video Player"}var t,g,w,P,E;return t=e,g=[{key:"currentSrc",value:function(){return O(this,X)}},{key:"incrementFetchQueue",value:function(){var e;O(this,J)<=0&&(this.isFetching=!0,m.Z.trigger(this,"beginFetch")),M(this,J,(e=O(this,J),++e))}},{key:"decrementFetchQueue",value:function(){var e;M(this,J,(e=O(this,J),--e)),O(this,J)<=0&&(this.isFetching=!1,m.Z.trigger(this,"endFetch"))}},{key:"updateVideoUrl",value:function(e){var t=e.url.toLowerCase().includes(".m3u8"),r=e.mediaSource,i=e.item;if(r&&i&&!r.RunTimeTicks&&t&&"Transcode"===e.playMethod&&(n.Z.iOS||n.Z.osx)){var o=e.url.replace("master.m3u8","live.m3u8");return a.ZP.show(),console.debug("prefetching hls playlist: ".concat(o)),f.Z.getApiClient(i.ServerId).ajax({type:"GET",url:o}).then((function(){console.debug("completed prefetching hls playlist: ".concat(o)),a.ZP.hide(),e.url=o}),(function(){console.error("error prefetching hls playlist: ".concat(o)),a.ZP.hide()}))}return Promise.resolve()}},{key:"play",value:function(e){var t=this;return M(this,Y,!1),M(this,$,!1),M(this,K,null),this.resetSubtitleOffset(),this.createMediaElement(e).then((function(r){return t.updateVideoUrl(e).then((function(){return t.setCurrentSrc(r,e)}))}))}},{key:"setSrcWithFlvJs",value:function(e,t,n){var i=this;return Promise.all([r.e(65304),r.e(13979)]).then(r.t.bind(r,92488,23)).then((function(t){var r=t.default.createPlayer({type:"flv",url:n},{seekType:"range",lazyLoad:!1});return r.attachMediaElement(e),r.load(),M(i,ee,r),M(i,X,n),r.play()}))}},{key:"setSrcWithHlsJs",value:function(e,t,i){var a=this;return new Promise((function(t,o){var s;s=T(S().mark((function r(){var s,c,d;return S().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=30,(n.Z.chrome||n.Z.edgeChromium||n.Z.firefox)&&u.O.getMaxStreamingBitrate(a)>=25e6&&(s=6),r.next=4,(0,p.X0)();case 4:c=r.sent,(d=new Hls({manifestLoadingTimeOut:2e4,maxBufferLength:s,xhrSetup:function(e){e.withCredentials=c}})).loadSource(i),d.attachMedia(e),(0,l.eQ)(a,d,e,a.onError,t,o),a._hlsPlayer=d,M(a,X,i);case 11:case"end":return r.stop()}}),r)}))),r.e(9412).then(r.t.bind(r,14291,23)).then((function(e){var t=e.default;window.Hls=t,s()}))}))}},{key:"setCurrentSrc",value:(E=T(S().mark((function e(t,r){var n,i,a,o,u=this;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.removeEventListener("error",this.onError),n=r.url,console.debug("playing url: ".concat(n)),(i=(r.playerStartPositionTicks||0)/1e7)&&(n+="#t=".concat(i)),(0,l.LE)(this),(0,l.Xw)(this),(0,l.t_)(this),M(this,_,null==r.mediaSource.DefaultSubtitleStreamIndex?-1:r.mediaSource.DefaultSubtitleStreamIndex),null!=O(this,_)&&O(this,_)>=0&&((a=r.mediaSource.MediaStreams[O(this,_)])&&"Encode"!==a.DeliveryMethod||M(this,_,-1)),M(this,j,"Transcode"===r.playMethod?null:r.mediaSource.DefaultAudioStreamIndex),this._currentPlayOptions=r,(o=(0,l.cV)(r.mediaSource))&&(t.crossOrigin=o),!(0,l.rR)(r.mediaSource.RunTimeTicks,"Video")||!n.includes(".m3u8")){e.next=18;break}return e.abrupt("return",this.setSrcWithHlsJs(t,r,n));case 18:if("Transcode"===r.playMethod||"flv"!==r.mediaSource.Container){e.next=22;break}return e.abrupt("return",this.setSrcWithFlvJs(t,r,n));case 22:return t.autoplay=!0,e.next=25,(0,p.X0)();case 25:return e.sent&&(t.crossOrigin="use-credentials"),e.abrupt("return",(0,l.NB)(t,n,r).then((function(){return M(u,X,n),(0,l.WX)(t,u.onError)})));case 28:case"end":return e.stop()}}),e,this)}))),function(e,t){return E.apply(this,arguments)})},{key:"setSubtitleStreamIndex",value:function(e){this.setCurrentTrackElement(e)}},{key:"resetSubtitleOffset",value:function(){M(this,q,0),M(this,H,!1)}},{key:"enableShowingSubtitleOffset",value:function(){M(this,H,!0)}},{key:"disableShowingSubtitleOffset",value:function(){M(this,H,!1)}},{key:"isShowingSubtitleOffsetEnabled",value:function(){return O(this,H)}},{key:"getTextTrack",value:function(){var e=O(this,z);return e?Array.from(e.textTracks).find((function(e){return"showing"===e.mode})):null}},{key:"setSubtitleOffset",value:function(e){var t=parseFloat(e);if(O(this,R))this.updateCurrentTrackOffset(t),O(this,R).timeOffset=(this._currentPlayOptions.transcodingOffsetTicks||0)/1e7+t;else{var r=this.getTextTrack();r?this.setTextTrackSubtitleOffset(r,t):O(this,G)?this.setTrackEventsSubtitleOffset(O(this,G),t):console.debug("No available track, cannot apply offset: ",t)}}},{key:"updateCurrentTrackOffset",value:function(e){var t=e,r=e;return O(this,q)&&(t-=O(this,q)),M(this,q,r),t}},{key:"setTextTrackSubtitleOffset",value:function(e,t){e.cues&&(t=this.updateCurrentTrackOffset(t),Array.from(e.cues).forEach((function(e){e.startTime-=t,e.endTime-=t})))}},{key:"setTrackEventsSubtitleOffset",value:function(e,t){Array.isArray(e)&&(t=1e7*this.updateCurrentTrackOffset(t),e.forEach((function(e){e.StartPositionTicks-=t,e.EndPositionTicks-=t})))}},{key:"getSubtitleOffset",value:function(){return O(this,q)}},{key:"isAudioStreamSupported",value:function(e,t){var r=(e.Codec||"").toLowerCase();return!r||!t||(t.DirectPlayProfiles||[]).filter((function(e){return"Video"===e.Type&&(!e.AudioCodec||e.AudioCodec.toLowerCase().includes(r))})).length>0}},{key:"getSupportedAudioStreams",value:function(){var e,t=this,r=O(this,te);return(e=this._currentPlayOptions.mediaSource,e.MediaStreams.filter((function(e){return"Audio"===e.Type}))).filter((function(e){return t.isAudioStreamSupported(e,r)}))}},{key:"setAudioStreamIndex",value:function(e){var t=this.getSupportedAudioStreams();if(!(t.length<2)){var r,n=-1,i=k(t);try{for(i.s();!(r=i.n()).done;){var a=r.value;if(n++,a.Index===e)break}}catch(e){i.e(e)}finally{i.f()}if(-1!==n){var o=O(this,z);if(o){var u=o.audioTracks||[];console.debug("found ".concat(u.length," audio tracks"));var s,l=k(Array.from(u).entries());try{for(l.s();!(s=l.n()).done;){var c=b(s.value,2),d=c[0],h=c[1];n===d?(console.debug("setting audio track ".concat(d," to enabled")),h.enabled=!0):(console.debug("setting audio track ".concat(d," to disabled")),h.enabled=!1)}}catch(e){l.e(e)}finally{l.f()}}}}}},{key:"stop",value:function(e){var t=O(this,z),r=O(this,X);return t&&(r&&t.pause(),(0,l.mr)(this,t,this.onError)),this.destroyCustomTrack(t),e&&this.destroy(),Promise.resolve()}},{key:"destroy",value:function(){(0,l.LE)(this),(0,l.Xw)(this),(0,y.G2)(y.q3.None),document.body.classList.remove("hide-scroll");var e=O(this,z);e&&(M(this,z,null),this.destroyCustomTrack(e),e.removeEventListener("timeupdate",this.onTimeUpdate),e.removeEventListener("ended",this.onEnded),e.removeEventListener("volumechange",this.onVolumeChange),e.removeEventListener("pause",this.onPause),e.removeEventListener("playing",this.onPlaying),e.removeEventListener("play",this.onPlay),e.removeEventListener("click",this.onClick),e.removeEventListener("dblclick",this.onDblClick),e.removeEventListener("waiting",this.onWaiting),e.removeEventListener("error",this.onError),(0,l.Zr)(e),e.parentNode.removeChild(e));var t=O(this,W);t&&(M(this,W,null),t.parentNode.removeChild(t)),d.Z.isEnabled?d.Z.exit():document.webkitIsFullScreen&&document.webkitCancelFullscreen&&document.webkitCancelFullscreen()}},{key:"onStartedAndNavigatedToOsd",value:function(){this.setCurrentTrackElement(O(this,_)),null!=O(this,j)&&this.canSetAudioStreamIndex()&&this.setAudioStreamIndex(O(this,j))}},{key:"ensureValidVideo",value:function(e){if(e===O(this,z)&&0===e.videoWidth&&0===e.videoHeight){var t=(this._currentPlayOptions||{}).mediaSource;t&&!t.RunTimeTicks||(0,l.p_)(this,"mediadecodeerror")}}},{key:"onWaiting",value:function(){m.Z.trigger(this,"waiting")}},{key:"destroyCustomTrack",value:function(e){if(O(this,B)){var t=O(this,B).parentNode;t&&function(e){var t=e.parentNode;if(t)try{t.removeChild(e)}catch(e){console.error("error removing dialog element: ".concat(e))}}(t),M(this,B,null)}if(M(this,G,null),e){var r,n=k(e.textTracks||[]);try{for(n.s();!(r=n.n()).done;){var i=r.value;i.label.includes("manualTrack")&&(i.mode="disabled")}}catch(e){n.e(e)}finally{n.f()}}M(this,D,-1),M(this,U,null),this._currentAspectRatio=null;var a=O(this,R);a&&a.dispose(),M(this,R,null);var o=O(this,N);o&&o.setEnabled(!1),M(this,N,null)}},{key:"fetchSubtitlesUwp",value:function(e){return Windows.Storage.StorageFile.getFileFromPathAsync(e.Path).then((function(e){return Windows.Storage.FileIO.readTextAsync(e)})).then((function(e){return JSON.parse(e)}))}},{key:"fetchSubtitles",value:(P=T(S().mark((function e(t,r){var n;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.Windows||!c.ZP.isLocalItem(r)){e.next=2;break}return e.abrupt("return",this.fetchSubtitlesUwp(t,r));case 2:return this.incrementFetchQueue(),e.prev=3,e.next=6,fetch(F(t,r,".js"));case 6:if((n=e.sent).ok){e.next=9;break}throw new Error(n);case 9:return e.abrupt("return",n.json());case 10:return e.prev=10,this.decrementFetchQueue(),e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[3,,10,13]])}))),function(e,t){return P.apply(this,arguments)})},{key:"setTrackForDisplay",value:function(e,t){if(t){if(O(this,D)!==t.Index){this.resetSubtitleOffset();var r=this._currentPlayOptions.item;this.destroyCustomTrack(e),M(this,D,t.Index),this.renderTracksEvents(e,t,r)}}else this.destroyCustomTrack(e)}},{key:"renderSsaAss",value:function(e,t,n){var i=this,a=["application/vnd.ms-opentype","application/x-truetype-font","font/otf","font/ttf","font/woff","font/woff2"],o=[],u=this._currentPlayOptions.mediaSource.MediaAttachments||[],c=f.Z.getApiClient(n);u.forEach((function(e){a.includes(e.MimeType)&&o.push(c.getUrl(e.DeliveryUrl))}));var d=c.getUrl("/FallbackFont/Fonts",{api_key:c.accessToken()}),h=this,v={video:e,subUrl:F(t,n),fonts:o,workerUrl:"".concat(s.appRouter.baseUrl(),"/libraries/subtitles-octopus-worker.js"),legacyWorkerUrl:"".concat(s.appRouter.baseUrl(),"/libraries/subtitles-octopus-worker-legacy.js"),onError:function(){M(h,R,null),setTimeout((function(){(0,l.p_)(h,"mediadecodeerror")}),0)},timeOffset:(this._currentPlayOptions.transcodingOffsetTicks||0)/1e7,renderMode:"wasm-blend",dropAllAnimations:!1,libassMemoryLimit:40,libassGlyphLimit:40,targetFps:24,prescaleFactor:.8,prescaleHeightLimit:1080,maxRenderHeight:2160,resizeVariation:.2,renderAhead:90};r.e(20817).then(r.t.bind(r,35717,23)).then((function(e){var t=e.default;Promise.all([c.getNamedConfiguration("encoding"),I(v.workerUrl),I(v.legacyWorkerUrl)]).then((function(e){var r=b(e,3),n=r[0],a=r[1],u=r[2];v.workerUrl=a,v.legacyWorkerUrl=u,n.EnableFallbackFont?c.getJSON(d).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.forEach((function(e){var t=c.getUrl("/FallbackFont/Fonts/".concat(e.Name),{api_key:c.accessToken()});o.push(t)})),M(i,R,new t(v))})):M(i,R,new t(v))}))}))}},{key:"requiresCustomSubtitlesElement",value:function(){if(n.Z.ps4)return!0;if(n.Z.web0s)return!0;if(n.Z.edge)return!0;if(n.Z.iOS){var e=navigator.userAgent.toLowerCase();if((e.includes("os 9")||e.includes("os 8"))&&!e.includes("safari"))return!0}return!1}},{key:"renderSubtitlesWithCustomElement",value:function(e,t,r){var n=this;this.fetchSubtitles(t,r).then((function(t){if(!O(n,B)){var r=document.createElement("div");r.classList.add("videoSubtitles"),r.innerHTML='<div class="videoSubtitlesInner"></div>',M(n,B,r.querySelector(".videoSubtitlesInner")),n.setSubtitleAppearance(r,O(n,B)),e.parentNode.appendChild(r),M(n,G,t.TrackEvents)}}))}},{key:"setSubtitleAppearance",value:function(e,t){Promise.all([Promise.resolve().then(r.bind(r,60934)),r.e(10763).then(r.bind(r,10763))]).then((function(r){var n=b(r,2),i=n[0];n[1].applyStyles({text:t,window:e},i.getSubtitleAppearanceSettings())}))}},{key:"getCueCss",value:function(e,t){return"".concat(t,"::cue {\n                ").concat(e.text.map((function(e){return void 0!==e.value&&""!==e.value?"".concat(e.name,":").concat(e.value,"!important;"):""})).join(""),"\n            }")}},{key:"setCueAppearance",value:function(){var e=this;Promise.all([Promise.resolve().then(r.bind(r,60934)),r.e(10763).then(r.bind(r,10763))]).then((function(t){var r=b(t,2),n=r[0],i=r[1],a="".concat(e.id,"-cuestyle"),o=document.querySelector("#".concat(a));o||((o=document.createElement("style")).id=a,document.getElementsByTagName("head")[0].appendChild(o)),o.innerHTML=e.getCueCss(i.getStyles(n.getSubtitleAppearanceSettings()),".htmlvideoplayer")}))}},{key:"renderTracksEvents",value:function(e,t,n){if(!c.ZP.isLocalItem(n)||t.IsExternal){var i=(t.Codec||"").toLowerCase();if("ssa"===i||"ass"===i)return void this.renderSsaAss(e,t,n);if(this.requiresCustomSubtitlesElement())return void this.renderSubtitlesWithCustomElement(e,t,n)}var a=null;if(e.textTracks&&e.textTracks.length>0){a=e.textTracks[0];try{for(a.mode="showing";a.cues.length;)a.removeCue(a.cues[0])}catch(e){console.error("error removing cue from textTrack")}a.mode="disabled"}else a=e.addTextTrack("subtitles","manualTrack","und");this.fetchSubtitles(t,n).then((function(e){Promise.resolve().then(r.bind(r,60934)).then((function(t){console.debug("downloaded ".concat(e.TrackEvents.length," track events"));var r,n=t.getSubtitleAppearanceSettings(),i=parseInt(n.verticalPosition,10),o=k(e.TrackEvents);try{for(o.s();!(r=o.n()).done;){var u=r.value,s=new(window.VTTCue||window.TextTrackCue)(u.StartPositionTicks/1e7,u.EndPositionTicks/1e7,V(u.Text,!1));"auto"===s.line&&(s.line=i),a.addCue(s)}}catch(e){o.e(e)}finally{o.f()}a.mode="showing"}))}))}},{key:"updateSubtitleText",value:function(e){var t=O(this,U);if(t)try{t.seek(e/1e3)}catch(e){console.error("error in libjass: ".concat(e))}else{var r=O(this,G),n=O(this,B);if(r&&n){var i,a,o=1e4*e,u=k(r);try{for(u.s();!(a=u.n()).done;){var s=a.value;if(s.StartPositionTicks<=o&&s.EndPositionTicks>=o){i=s;break}}}catch(e){u.e(e)}finally{u.f()}i&&i.Text?(n.innerHTML=V(i.Text,!0),n.classList.remove("hide")):n.classList.add("hide")}}}},{key:"setCurrentTrackElement",value:function(e){console.debug("setting new text track index to: ".concat(e));var t=this._currentPlayOptions.mediaSource.MediaStreams.filter((function(e){return"Subtitle"===e.Type})),r=-1===e?null:t.filter((function(t){return t.Index===e}))[0];this.setTrackForDisplay(O(this,z),r),function(e,t){if("Embed"===(null==t?void 0:t.DeliveryMethod))return!0;if(n.Z.firefox&&(e||"").toLowerCase().includes(".m3u8"))return!1;if(n.Z.ps4)return!1;if(n.Z.web0s)return!1;if(n.Z.edge)return!1;if(n.Z.iOS&&(n.Z.iosVersion||10)<10)return!1;if(t){var r=(t.Codec||"").toLowerCase();if("ssa"===r||"ass"===r)return!1}return!0}(O(this,X),r)?-1!==e&&this.setCueAppearance():(e=-1,r=null)}},{key:"createMediaElement",value:function(e){var t=this,u=document.querySelector(".videoPlayerContainer");return u?(e.fullscreen&&(document.body.classList.add("hide-scroll"),!this.forcedFullscreen&&!window.NativeShell&&n.Z.web0s&&d.Z.isEnabled&&d.Z.request().then((function(){t.forcedFullscreen=!0}))),Promise.resolve(u.querySelector("video"))):r.e(39677).then(r.bind(r,68986)).then((function(){a.ZP.show();var r=document.createElement("div");r.setAttribute("dir","ltr"),r.classList.add("videoPlayerContainer"),e.fullscreen&&r.classList.add("videoPlayerContainer-onTop");var u="",s="htmlvideoplayer";i.M.supports("htmlvideoautoplay")?n.Z.web0s?u+='<video class="'+s+'" preload="auto" autoplay="autoplay" webkit-playsinline playsinline>':u+='<video class="'+s+'" preload="metadata" autoplay="autoplay" webkit-playsinline playsinline>':u+='<video class="'+s+'" preload="metadata" autoplay="autoplay" controls="controls" webkit-playsinline playsinline>',u+="</video>",r.innerHTML=u;var c,h=r.querySelector("video");if(h.volume=(0,l.jt)(),h.addEventListener("timeupdate",t.onTimeUpdate),h.addEventListener("ended",t.onEnded),h.addEventListener("volumechange",t.onVolumeChange),h.addEventListener("pause",t.onPause),h.addEventListener("playing",t.onPlaying),h.addEventListener("play",t.onPlay),h.addEventListener("click",t.onClick),h.addEventListener("dblclick",t.onDblClick),h.addEventListener("waiting",t.onWaiting),e.backdropUrl&&(h.poster=e.backdropUrl),document.body.insertBefore(r,document.body.firstChild),M(t,W,r),M(t,z,h),delete t.forcedFullscreen,e.fullscreen){if(document.body.classList.add("hide-scroll"),!window.NativeShell&&n.Z.web0s&&d.Z.isEnabled)return d.Z.request().then((function(){t.forcedFullscreen=!0})),h;if(!n.Z.slow&&n.Z.supportsCssAnimation())return(c=r,new Promise((function(e){c.style.animation="htmlvideoplayer-zoomin ".concat(240,"ms ease-in normal"),o.ZP.addEventListener(c,o.ZP.whichAnimationEvent(),e,{once:!0})}))).then((function(){return h}))}return h}))}},{key:"canPlayMediaType",value:function(e){return"video"===(e||"").toLowerCase()}},{key:"supportsPlayMethod",value:function(e,t){return!i.M.supportsPlayMethod||i.M.supportsPlayMethod(e,t)}},{key:"getDeviceProfile",value:function(t,r){var n=this;return e.getDeviceProfileInternal(t,r).then((function(e){return M(n,te,e),e}))}},{key:"supports",value:function(t){return O(this,Q)||M(this,Q,e.getSupportedFeatures()),O(this,Q).includes(t)}},{key:"currentTime",value:function(e){var t=O(this,z);if(t){if(null!=e)return void(t.currentTime=e/1e3);var r=O(this,K);return r?1e3*r:1e3*(t.currentTime||0)}}},{key:"duration",value:function(){var e=O(this,z);if(e){var t=e.duration;if((0,l.jO)(t))return 1e3*t}return null}},{key:"canSetAudioStreamIndex",value:function(){if(n.Z.tizen||n.Z.orsay)return!0;var e=O(this,z);return!(null==e||!e.audioTracks)}},{key:"setPictureInPictureEnabled",value:function(t){var r=O(this,z);document.pictureInPictureEnabled?r&&(t?r.requestPictureInPicture().catch(e.onPictureInPictureError):document.exitPictureInPicture().catch(e.onPictureInPictureError)):window.Windows?(this.isPip=t,t?Windows.UI.ViewManagement.ApplicationView.getForCurrentView().tryEnterViewModeAsync(Windows.UI.ViewManagement.ApplicationViewMode.compactOverlay):Windows.UI.ViewManagement.ApplicationView.getForCurrentView().tryEnterViewModeAsync(Windows.UI.ViewManagement.ApplicationViewMode.default)):r&&r.webkitSupportsPresentationMode&&"function"==typeof r.webkitSetPresentationMode&&r.webkitSetPresentationMode(t?"picture-in-picture":"inline")}},{key:"isPictureInPictureEnabled",value:function(){if(document.pictureInPictureEnabled)return!!document.pictureInPictureElement;if(window.Windows)return this.isPip||!1;var e=O(this,z);return!!e&&"picture-in-picture"===e.webkitPresentationMode}},{key:"isAirPlayEnabled",value:function(){return!!document.AirPlayEnabled&&!!document.AirplayElement}},{key:"setAirPlayEnabled",value:function(e){var t=O(this,z);document.AirPlayEnabled?t&&(e?t.requestAirPlay().catch((function(e){console.error("Error requesting AirPlay",e)})):document.exitAirPLay().catch((function(e){console.error("Error exiting AirPlay",e)}))):t.webkitShowPlaybackTargetPicker()}},{key:"setBrightness",value:function(e){var t=O(this,z);if(t){e=Math.max(0,e);var r=e=Math.min(100,e),n=(r=Math.max(20,r))>=100?"none":r/100;t.style["-webkit-filter"]="brightness(".concat(n,")"),t.style.filter="brightness(".concat(n,")"),t.brightnessValue=e,m.Z.trigger(this,"brightnesschange")}}},{key:"getBrightness",value:function(){var e=O(this,z);if(e){var t=e.brightnessValue;return null==t?100:t}}},{key:"seekable",value:function(){var e=O(this,z);if(e){var t=e.seekable;if(t&&t.length){var r=t.start(0),n=t.end(0);return(0,l.jO)(r)||(r=0),(0,l.jO)(n)||(n=0),n-r>0}return!1}}},{key:"pause",value:function(){var e=O(this,z);e&&e.pause()}},{key:"resume",value:function(){this.unpause()}},{key:"unpause",value:function(){var e=O(this,z);e&&e.play()}},{key:"paused",value:function(){var e=O(this,z);return!!e&&e.paused}},{key:"setPlaybackRate",value:function(e){var t=O(this,z);t&&(t.playbackRate=e)}},{key:"getPlaybackRate",value:function(){var e=O(this,z);return e?e.playbackRate:null}},{key:"getSupportedPlaybackRates",value:function(){return[{name:"0.5x",id:.5},{name:"0.75x",id:.75},{name:"1x",id:1},{name:"1.25x",id:1.25},{name:"1.5x",id:1.5},{name:"1.75x",id:1.75},{name:"2x",id:2}]}},{key:"setVolume",value:function(e){var t=O(this,z);t&&(t.volume=Math.pow(e/100,3))}},{key:"getVolume",value:function(){var e=O(this,z);if(e)return Math.min(Math.round(100*Math.pow(e.volume,1/3)),100)}},{key:"volumeUp",value:function(){this.setVolume(Math.min(this.getVolume()+2,100))}},{key:"volumeDown",value:function(){this.setVolume(Math.max(this.getVolume()-2,0))}},{key:"setMute",value:function(e){var t=O(this,z);t&&(t.muted=e)}},{key:"isMuted",value:function(){var e=O(this,z);return!!e&&e.muted}},{key:"setAspectRatio",value:function(e){var t=O(this,z);t&&("auto"===e?t.style.removeProperty("object-fit"):t.style["object-fit"]=e),this._currentAspectRatio=e}},{key:"getAspectRatio",value:function(){return this._currentAspectRatio||"auto"}},{key:"getSupportedAspectRatios",value:function(){return[{name:h.ZP.translate("Auto"),id:"auto"},{name:h.ZP.translate("AspectRatioCover"),id:"cover"},{name:h.ZP.translate("AspectRatioFill"),id:"fill"}]}},{key:"togglePictureInPicture",value:function(){return this.setPictureInPictureEnabled(!this.isPictureInPictureEnabled())}},{key:"toggleAirPlay",value:function(){return this.setAirPlayEnabled(!this.isAirPlayEnabled())}},{key:"getBufferedRanges",value:function(){var e=O(this,z);return e?(0,l.wf)(this,e):[]}},{key:"getStats",value:function(){var e=O(this,z),t=this._currentPlayOptions||[],r=[];if(!e)return Promise.resolve({categories:r});var i={stats:[],type:"media"};if(r.push(i),t.url){var a=document.createElement("a");a.setAttribute("href",t.url);var o=(a.protocol||"").replace(":","");o&&i.stats.push({label:h.ZP.translate("LabelProtocol"),value:o}),a=null}this._hlsPlayer?i.stats.push({label:h.ZP.translate("LabelStreamType"),value:"HLS"}):i.stats.push({label:h.ZP.translate("LabelStreamType"),value:"Video"});var u={stats:[],type:"video"};r.push(u);var s=window.devicePixelRatio||1,l=e.getBoundingClientRect?e.getBoundingClientRect():{},c=Math.round(l.height*s),d=Math.round(l.width*s);if(d&&c&&!n.Z.tv&&u.stats.push({label:h.ZP.translate("LabelPlayerDimensions"),value:"".concat(d,"x").concat(c)}),c=e.videoHeight,(d=e.videoWidth)&&c&&u.stats.push({label:h.ZP.translate("LabelVideoResolution"),value:"".concat(d,"x").concat(c)}),e.getVideoPlaybackQuality){var f=e.getVideoPlaybackQuality(),v=f.droppedVideoFrames||0;u.stats.push({label:h.ZP.translate("LabelDroppedFrames"),value:v});var p=f.corruptedVideoFrames||0;u.stats.push({label:h.ZP.translate("LabelCorruptedFrames"),value:p})}var y={stats:[],type:"audio"};r.push(y);var m=e.sinkId;return m&&y.stats.push({label:"Sink Id:",value:m}),Promise.resolve({categories:r})}}],w=[{key:"getDeviceProfileInternal",value:function(e,t){return i.M.getDeviceProfile?i.M.getDeviceProfile(e,t):(0,v.Z)({})}},{key:"getSupportedFeatures",value:function(){var e=[],t=document.createElement("video");return("function"==typeof t.webkitSupportsPresentationMode&&t.webkitSupportsPresentationMode("picture-in-picture")&&"function"==typeof t.webkitSetPresentationMode||window.Windows&&Windows.UI.ViewManagement.ApplicationView.getForCurrentView().isViewModeSupported(Windows.UI.ViewManagement.ApplicationViewMode.compactOverlay)||document.pictureInPictureEnabled)&&e.push("PictureInPicture"),(n.Z.safari||n.Z.iOS||n.Z.iPad)&&e.push("AirPlay"),"number"==typeof t.playbackRate&&e.push("PlaybackRate"),e.push("SetBrightness"),e.push("SetAspectRatio"),e}},{key:"onPictureInPictureError",value:function(e){console.error("Picture in picture error: ".concat(e))}}],g&&x(t.prototype,g),w&&x(t,w),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=re}}]);