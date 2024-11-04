/*! For license information please see htmlAudioPlayer-plugin.e3ba49c7a30c1a410511.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87903],{27907:function(e,t,r){r.r(t),r(29305),r(32733),r(51770),r(84701),r(81678),r(2623),r(84734),r(44962),r(87324),r(89336),r(4754),r(10849),r(70389),r(94),r(36947),r(26437),r(52697),r(78557),r(90076),r(73687),r(83994),r(23630),r(82367);var n,i=r(34789),o=r(22622),a=r(58180),u=r(57634),c=r(51876),l=r(38783),s=r(44797),f=r(80262);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(){d=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof b?t:b,a=Object.create(o.prototype),u=new j(n||[]);return i(a,"_invoke",{value:O(e,r,u)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var v="suspendedStart",m="suspendedYield",y="executing",p="completed",g={};function b(){}function w(){}function E(){}var k={};l(k,a,(function(){return this}));var P=Object.getPrototypeOf,_=P&&P(P(G([])));_&&_!==r&&n.call(_,a)&&(k=_);var L=E.prototype=b.prototype=Object.create(k);function A(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(i,o,a,u){var c=f(e[i],e,o);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==h(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,u)}))}u(c.arg)}var o;i(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return o=o?o.then(i,i):i()}})}function O(t,r,n){var i=v;return function(o,a){if(i===y)throw Error("Generator is already running");if(i===p){if("throw"===o)throw a;return{value:e,done:!0}}for(n.method=o,n.arg=a;;){var u=n.delegate;if(u){var c=S(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===v)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=y;var l=f(t,r,n);if("normal"===l.type){if(i=n.done?p:m,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=p,n.method="throw",n.arg=l.arg)}}}function S(t,r){var n=r.method,i=t.iterator[n];if(i===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=f(i,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function G(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(h(t)+" is not iterable")}return w.prototype=E,i(L,"constructor",{value:E,configurable:!0}),i(E,"constructor",{value:w,configurable:!0}),w.displayName=l(E,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,l(e,c,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},A(x.prototype),l(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new x(s(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},A(L),l(L,c,"Generator"),l(L,a,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return u.type="throw",u.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;N(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function v(e,t,r,n,i,o,a){try{var u=e[o](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,i)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){v(o,n,i,a,u,"next",e)}function u(e){v(o,n,i,a,u,"throw",e)}a(void 0)}))}}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function p(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==h(t)?t:t+""}function g(e,t,r){e._isFadingOut=!0;var i=Math.max(0,r-.15);return console.debug("fading volume to "+i),t.volume=i,i<=0?(e._isFadingOut=!1,Promise.resolve()):new Promise((function(r,o){b(),n=setTimeout((function(){g(e,t,i).then(r,o)}),100)}))}function b(){n&&(clearTimeout(n),n=null)}var w,E=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=this;function n(e){e.removeEventListener("timeupdate",h),e.removeEventListener("ended",u),e.removeEventListener("volumechange",v),e.removeEventListener("pause",w),e.removeEventListener("playing",y),e.removeEventListener("play",p),e.removeEventListener("waiting",E),e.removeEventListener("error",k)}function u(){a.X9(t,this,k)}function h(){var e=this.currentTime;t._isFadingOut||(t._currentTime=e,s.A.trigger(t,"timeupdate"))}function v(){t._isFadingOut||(a.iP(this.volume),i.A.safari&&t.gainNode&&(t.gainNode.gain.value=this.volume*t.normalizationGain),s.A.trigger(t,"volumechange"))}function y(e){t._started||(t._started=!0,this.removeAttribute("controls"),a.HI(t,e.target,t._currentPlayOptions.playerStartPositionTicks)),s.A.trigger(t,"playing")}function p(){s.A.trigger(t,"unpause")}function w(){s.A.trigger(t,"pause")}function E(){s.A.trigger(t,"waiting")}function k(){var e,r=this.error&&this.error.code||0,n=this.error&&this.error.message||"";switch(console.error("media element error: "+r.toString()+" "+n),r){case 1:default:return;case 2:e=f.F.NETWORK_ERROR;break;case 3:if(t._hlsPlayer)return void a.bR(t);e=f.F.MEDIA_DECODE_ERROR;break;case 4:e=f.F.MEDIA_NOT_SUPPORTED}a.jK(t,e)}t.name="Html Audio Player",t.type=l.Q.MediaPlayer,t.id="htmlaudioplayer",t.priority=1,t.play=function(e){return t._started=!1,t._timeUpdated=!1,t._currentTime=null,function(e,o){n(e),function(e){e.addEventListener("timeupdate",h),e.addEventListener("ended",u),e.addEventListener("volumechange",v),e.addEventListener("pause",w),e.addEventListener("playing",y),e.addEventListener("play",p),e.addEventListener("waiting",E)}(e);var l=o.url;console.debug("playing url: "+l),Promise.resolve().then(r.bind(r,82885)).then((function(r){var n;if("TrackGain"==r.selectAudioNormalization()){var a;n=null!==(a=o.item.NormalizationGain)&&void 0!==a?a:o.mediaSource.albumNormalizationGain}else{if("AlbumGain"!=r.selectAudioNormalization())return void console.debug("normalization disabled");var u;n=null!==(u=o.mediaSource.albumNormalizationGain)&&void 0!==u?u:o.item.NormalizationGain}(t.gainNode||(function(e){try{var r=new(window.AudioContext||window.webkitAudioContext),n=r.createMediaElementSource(e),i=r.createGain();n.connect(i),i.connect(r.destination),t.gainNode=i}catch(e){console.error("Web Audio API is not supported in this browser",e)}}(e),t.gainNode))&&(n?(t.normalizationGain=Math.pow(10,n/20),t.gainNode.gain.value=t.normalizationGain):(t.gainNode.gain.value=1,t.normalizationGain=1),i.A.safari&&(t.gainNode.gain.value*=e.volume),console.debug("gain: "+t.normalizationGain))})).catch((function(e){console.error("Failed to add/change gainNode",e)}));var s=(o.playerStartPositionTicks||0)/1e7;s&&(l+="#t="+s),a.JN(t),t._currentPlayOptions=o;var f,g,b=a.qQ(o.mediaSource);return b&&(e.crossOrigin=b),(f=l,o.item,g=o.mediaSource,"Audio",a.JQ(g.RunTimeTicks,"Audio")?-1!==f.indexOf(".m3u8")?Promise.resolve():new Promise((function(e,t){r.e(56079).then(r.bind(r,78460)).then((function(r){r.ajax({url:f,type:"HEAD"}).then((function(r){var n=(r.headers.get("Content-Type")||"").toLowerCase();"application/vnd.apple.mpegurl"===n||"application/x-mpegurl"===n?e():t()}),t)}))})):Promise.reject()).then((function(){return new Promise((function(n,i){var o;o=m(d().mark((function r(){var o,u;return d().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.Io)();case 2:o=r.sent,(u=new Hls({manifestLoadingTimeOut:2e4,xhrSetup:function(e){e.withCredentials=o}})).loadSource(l),u.attachMedia(e),a.EK(t,u,e,k,n,i),t._hlsPlayer=u,t._currentSrc=l;case 9:case"end":return r.stop()}}),r)}))),Promise.all([r.e(62907),r.e(63755)]).then(r.t.bind(r,5725,23)).then((function(e){var t=e.default;t.DefaultConfig.lowLatencyMode=!1,t.DefaultConfig.backBufferLength=1/0,t.DefaultConfig.liveBackBufferLength=90,window.Hls=t,o()}))}))}),m(d().mark((function r(){return d().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.autoplay=!0,r.next=3,(0,c.Io)();case 3:return r.sent&&(e.crossOrigin="use-credentials"),r.abrupt("return",a.n8(e,l,o).then((function(){return t._currentSrc=l,a.Oy(e,k)})));case 6:case"end":return r.stop()}}),r)}))))}((l=t._mediaElement)||((l=document.querySelector(".mediaPlayerAudio"))||((l=document.createElement("audio")).classList.add("mediaPlayerAudio"),l.classList.add("hide"),document.body.appendChild(l)),o.g.supports("physicalvolumecontrol")||(l.volume=a.Y3()),t._mediaElement=l,l),e);var l},t.stop=function(e){b();var r=t._mediaElement,n=t._currentSrc;if(r&&n){if(!e||i.A.tv)return r.pause(),a.X9(t,r,k),e&&t.destroy(),Promise.resolve();var o=r.volume;return g(t,r,r.volume).then((function(){r.pause(),r.volume=o,a.X9(t,r,k),e&&t.destroy()}))}return Promise.resolve()},t.destroy=function(){n(t._mediaElement),a.si(t._mediaElement)}},(t=[{key:"currentSrc",value:function(){return this._currentSrc}},{key:"canPlayMediaType",value:function(e){return"audio"===(e||"").toLowerCase()}},{key:"getDeviceProfile",value:function(e){return o.g.getDeviceProfile?o.g.getDeviceProfile(e):(0,u.A)({})}},{key:"toggleAirPlay",value:function(){return this.setAirPlayEnabled(!this.isAirPlayEnabled())}},{key:"currentTime",value:function(e){var t=this._mediaElement;if(t){if(null!=e)return void(t.currentTime=e/1e3);var r=this._currentTime;return r?1e3*r:1e3*(t.currentTime||0)}}},{key:"duration",value:function(){var e=this._mediaElement;if(e){var t=e.duration;if(a.di(t))return 1e3*t}return null}},{key:"seekable",value:function(){var e=this._mediaElement;if(e){var t=e.seekable;if(null!=t&&t.length){var r=t.start(0),n=t.end(0);return a.di(r)||(r=0),a.di(n)||(n=0),n-r>0}return!1}}},{key:"getBufferedRanges",value:function(){var e=this._mediaElement;return e?a.qh(this,e):[]}},{key:"pause",value:function(){var e=this._mediaElement;e&&e.pause()}},{key:"resume",value:function(){this.unpause()}},{key:"unpause",value:function(){var e=this._mediaElement;e&&e.play()}},{key:"paused",value:function(){var e=this._mediaElement;return!!e&&e.paused}},{key:"setPlaybackRate",value:function(e){var t=this._mediaElement;t&&(t.playbackRate=e)}},{key:"getPlaybackRate",value:function(){var e=this._mediaElement;return e?e.playbackRate:null}},{key:"setVolume",value:function(e){var t=this._mediaElement;t&&(t.volume=Math.pow(e/100,3))}},{key:"getVolume",value:function(){var e=this._mediaElement;if(e)return Math.min(Math.round(100*Math.pow(e.volume,1/3)),100)}},{key:"volumeUp",value:function(){this.setVolume(Math.min(this.getVolume()+2,100))}},{key:"volumeDown",value:function(){this.setVolume(Math.max(this.getVolume()-2,0))}},{key:"setMute",value:function(e){var t=this._mediaElement;t&&(t.muted=e)}},{key:"isMuted",value:function(){var e=this._mediaElement;return!!e&&e.muted}},{key:"isAirPlayEnabled",value:function(){return!!document.AirPlayEnabled&&!!document.AirplayElement}},{key:"setAirPlayEnabled",value:function(e){var t=this._mediaElement;t&&(document.AirPlayEnabled?e?t.requestAirPlay().catch((function(e){console.error("Error requesting AirPlay",e)})):document.exitAirPLay().catch((function(e){console.error("Error exiting AirPlay",e)})):t.webkitShowPlaybackTargetPicker())}},{key:"supports",value:function(e){return w||(t=[],"number"==typeof document.createElement("audio").playbackRate&&t.push("PlaybackRate"),i.A.safari&&t.push("AirPlay"),w=t),-1!==w.indexOf(e);var t}}])&&y(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();t.default=E}}]);