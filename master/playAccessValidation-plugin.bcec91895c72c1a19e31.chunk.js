"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31844],{99489:function(e,t,r){r.r(t),r(63238),r(61418),r(61370),r(19068),r(87211),r(25901),r(92189),r(95163),r(99785),r(91047),r(5769),r(17460),r(14078);var n=r(94994),i=r(18613),o=r(37099);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key,"string"),"symbol"===a(i)?i:String(i)),n)}var i}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="Playback validation",this.type="preplayintercept",this.id="playaccessvalidation",this.order=-2}var t,r;return t=e,(r=[{key:"intercept",value:function(e){var t=e.item;if(!t)return Promise.resolve();var r=t.ServerId;return r?i.Z.getApiClient(r).getCurrentUser().then((function(t){return t.Policy.EnableMediaPlayback?Promise.resolve():e.fullscreen?(0,o.Z)(n.ZP.translate("MessagePlayAccessRestricted")).finally(Promise.reject):Promise.reject()})):Promise.resolve()}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=c}}]);