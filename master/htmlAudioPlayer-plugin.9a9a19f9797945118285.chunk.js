/*! For license information please see htmlAudioPlayer-plugin.9a9a19f9797945118285.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64122],{13862:function(e,t,r){r.r(t),r(99785),r(25901),r(92189),r(91047),r(98521),r(6798),r(82923),r(21897),r(12274),r(55849),r(50987),r(60190),r(72410),r(5769),r(63238),r(61418),r(17460),r(14078),r(27471),r(40895);var n,i=r(57366),o=r(84881),a=r(3427),u=r(23240),c=r(58886),s=r(81643);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(){f=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof d?t:d,o=Object.create(i.prototype),a=new x(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return{value:void 0,done:!0}}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var u=_(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h={};function d(){}function v(){}function m(){}var p={};u(p,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(P([])));g&&g!==t&&r.call(g,i)&&(p=g);var w=m.prototype=d.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function n(i,o,a,u){var c=s(e[i],e,o);if("throw"!==c.type){var f=c.arg,h=f.value;return h&&"object"==l(h)&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,a,u)}),(function(e){n("throw",e,a,u)})):t.resolve(h).then((function(e){f.value=e,a(f)}),(function(e){return n("throw",e,a,u)}))}u(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function _(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function P(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=m,u(w,"constructor",m),u(m,"constructor",v),v.displayName=u(m,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,a,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},E(b.prototype),u(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new b(c(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(w),u(w,a,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function h(e,t,r,n,i,o,a){try{var u=e[o](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,i)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){h(o,n,i,a,u,"next",e)}function u(e){h(o,n,i,a,u,"throw",e)}a(void 0)}))}}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,r){e._isFadingOut=!0;var i=Math.max(0,r-.15);return console.debug("fading volume to "+i),t.volume=i,i<=0?(e._isFadingOut=!1,Promise.resolve()):new Promise((function(r,o){p(),n=setTimeout((function(){m(e,t,i).then(r,o)}),100)}))}function p(){n&&(clearTimeout(n),n=null)}var y,g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=this;function n(e){e.removeEventListener("timeupdate",u),e.removeEventListener("ended",o),e.removeEventListener("volumechange",l),e.removeEventListener("pause",y),e.removeEventListener("playing",h),e.removeEventListener("play",v),e.removeEventListener("waiting",g),e.removeEventListener("error",w)}function o(){a.mr(t,this,w)}function u(){var e=this.currentTime;t._isFadingOut||(t._currentTime=e,s.Z.trigger(t,"timeupdate"))}function l(){t._isFadingOut||(a.wk(this.volume),s.Z.trigger(t,"volumechange"))}function h(e){t._started||(t._started=!0,this.removeAttribute("controls"),a.AW(t,e.target,t._currentPlayOptions.playerStartPositionTicks)),s.Z.trigger(t,"playing")}function v(){s.Z.trigger(t,"unpause")}function y(){s.Z.trigger(t,"pause")}function g(){s.Z.trigger(t,"waiting")}function w(){var e,r=this.error&&this.error.code||0,n=this.error&&this.error.message||"";switch(console.error("media element error: "+r.toString()+" "+n),r){case 1:default:return;case 2:e="network";break;case 3:if(t._hlsPlayer)return void a.tq(t);e="mediadecodeerror";break;case 4:e="medianotsupported"}a.p_(t,e)}t.name="Html Audio Player",t.type="mediaplayer",t.id="htmlaudioplayer",t.priority=1,t.play=function(e){return t._started=!1,t._timeUpdated=!1,t._currentTime=null,function(e,i){n(e),function(e){e.addEventListener("timeupdate",u),e.addEventListener("ended",o),e.addEventListener("volumechange",l),e.addEventListener("pause",y),e.addEventListener("playing",h),e.addEventListener("play",v),e.addEventListener("waiting",g)}(e);var s=i.url;console.debug("playing url: "+s);var m=(i.playerStartPositionTicks||0)/1e7;m&&(s+="#t="+m),a.LE(t),t._currentPlayOptions=i;var p,E,b=a.cV(i.mediaSource);return b&&(e.crossOrigin=b),(p=s,i.item,E=i.mediaSource,"Audio",a.rR(E.RunTimeTicks,"Audio")?-1!==p.indexOf(".m3u8")?Promise.resolve():new Promise((function(e,t){r.e(13579).then(r.bind(r,13579)).then((function(r){r.ajax({url:p,type:"HEAD"}).then((function(r){var n=(r.headers.get("Content-Type")||"").toLowerCase();"application/vnd.apple.mpegurl"===n||"application/x-mpegurl"===n?e():t()}),t)}))})):Promise.reject()).then((function(){return new Promise((function(n,i){var o;o=d(f().mark((function r(){var o,u;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.X0)();case 2:o=r.sent,(u=new Hls({manifestLoadingTimeOut:2e4,xhrSetup:function(e){e.withCredentials=o}})).loadSource(s),u.attachMedia(e),a.eQ(t,u,e,w,n,i),t._hlsPlayer=u,t._currentSrc=s;case 9:case"end":return r.stop()}}),r)}))),r.e(9412).then(r.t.bind(r,14291,23)).then((function(e){var t=e.default;window.Hls=t,o()}))}))}),d(f().mark((function r(){return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.autoplay=!0,r.next=3,(0,c.X0)();case 3:return r.sent&&(e.crossOrigin="use-credentials"),r.abrupt("return",a.NB(e,s,i).then((function(){return t._currentSrc=s,a.WX(e,w)})));case 6:case"end":return r.stop()}}),r)}))))}((i=t._mediaElement)||((i=document.querySelector(".mediaPlayerAudio"))||((i=document.createElement("audio")).classList.add("mediaPlayerAudio"),i.classList.add("hide"),document.body.appendChild(i)),i.volume=a.jt(),t._mediaElement=i,i),e);var i},t.stop=function(e){p();var r=t._mediaElement,n=t._currentSrc;if(r&&n){if(!e||i.Z.tv)return r.pause(),a.mr(t,r,w),e&&t.destroy(),Promise.resolve();var o=r.volume;return m(t,r,r.volume).then((function(){r.pause(),r.volume=o,a.mr(t,r,w),e&&t.destroy()}))}return Promise.resolve()},t.destroy=function(){n(t._mediaElement),a.Zr(t._mediaElement)}}var t,n;return t=e,(n=[{key:"currentSrc",value:function(){return this._currentSrc}},{key:"canPlayMediaType",value:function(e){return"audio"===(e||"").toLowerCase()}},{key:"getDeviceProfile",value:function(e){return o.M.getDeviceProfile?o.M.getDeviceProfile(e):(0,u.Z)({})}},{key:"currentTime",value:function(e){var t=this._mediaElement;if(t){if(null!=e)return void(t.currentTime=e/1e3);var r=this._currentTime;return r?1e3*r:1e3*(t.currentTime||0)}}},{key:"duration",value:function(){var e=this._mediaElement;if(e){var t=e.duration;if(a.jO(t))return 1e3*t}return null}},{key:"seekable",value:function(){var e=this._mediaElement;if(e){var t=e.seekable;if(t&&t.length){var r=t.start(0),n=t.end(0);return a.jO(r)||(r=0),a.jO(n)||(n=0),n-r>0}return!1}}},{key:"getBufferedRanges",value:function(){var e=this._mediaElement;return e?a.wf(this,e):[]}},{key:"pause",value:function(){var e=this._mediaElement;e&&e.pause()}},{key:"resume",value:function(){this.unpause()}},{key:"unpause",value:function(){var e=this._mediaElement;e&&e.play()}},{key:"paused",value:function(){var e=this._mediaElement;return!!e&&e.paused}},{key:"setPlaybackRate",value:function(e){var t=this._mediaElement;t&&(t.playbackRate=e)}},{key:"getPlaybackRate",value:function(){var e=this._mediaElement;return e?e.playbackRate:null}},{key:"setVolume",value:function(e){var t=this._mediaElement;t&&(t.volume=Math.pow(e/100,3))}},{key:"getVolume",value:function(){var e=this._mediaElement;if(e)return Math.min(Math.round(100*Math.pow(e.volume,1/3)),100)}},{key:"volumeUp",value:function(){this.setVolume(Math.min(this.getVolume()+2,100))}},{key:"volumeDown",value:function(){this.setVolume(Math.max(this.getVolume()-2,0))}},{key:"setMute",value:function(e){var t=this._mediaElement;t&&(t.muted=e)}},{key:"isMuted",value:function(){var e=this._mediaElement;return!!e&&e.muted}},{key:"supports",value:function(e){return y||(t=[],"number"==typeof document.createElement("audio").playbackRate&&t.push("PlaybackRate"),y=t),-1!==y.indexOf(e);var t}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=g}}]);