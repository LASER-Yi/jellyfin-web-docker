"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59444,25516,61951],{46140:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function a(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function c(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e);if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===r(e)?e:String(e)}n.r(e),n(19068),n(87211),n(25901),n(92189),n(63238),n(95163),n(99785),n(50987),n(12274),n(3214),n(91047),n(5769),n(17460),n(14078);var l,f,y,s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(l,t);var e,n,r,c=(n=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=u(n);if(r){var o=u(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return a(this,t)});function l(){return o(this,l),c.apply(this,arguments)}return e=l,Object.defineProperty(e,"prototype",{writable:!1}),e}(n(7786).default);l=s,y="htmlaudioplayer",(f=c(f="type"))in l?Object.defineProperty(l,f,{value:y,enumerable:!0,configurable:!0,writable:!0}):l[f]=y,e.default=s},7786:function(t,e,n){n.r(e),n(19068),n(87211),n(25901),n(92189),n(63238),n(95163),n(99785),n(50987),n(12274),n(3214),n(83011),n(20252),n(91047),n(5769),n(17460),n(14078);var r=n(33678),o=n(81643);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=c(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},u.apply(this,arguments)}function c(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function f(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function s(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===i(e)?e:String(e)}var p,b,h,d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(s,t);var e,n,r,i,c=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(i){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return f(this,t)});function s(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(n=c.call(this,t,e)).isPlayerActive=!1,n.savedPlaybackRate=1,n.minBufferingThresholdMillis=3e3,t.currentTimeAsync&&(n.currentTimeAsync=function(){return n.player.currentTimeAsync()}),n}return e=s,(n=[{key:"localBindToPlayer",value:function(){u(y(s.prototype),"localBindToPlayer",this).call(this);var t=this;this._onPlaybackStart=function(e,n){t.isPlayerActive=!0,t.onPlaybackStart(e,n)},this._onPlaybackStop=function(e){t.isPlayerActive=!1,t.onPlaybackStop(e)},this._onUnpause=function(){t.onUnpause()},this._onPause=function(){t.onPause()},this._onTimeUpdate=function(e){var n=new Date,r=t.player.currentTime();t.onTimeUpdate(e,{currentTime:n,currentPosition:r})},this._onPlaying=function(){clearTimeout(t.notifyBuffering),t.onReady()},this._onWaiting=function(){clearTimeout(t.notifyBuffering),t.notifyBuffering=setTimeout((function(){t.onBuffering()}),t.minBufferingThresholdMillis)},o.Z.on(this.player,"playbackstart",this._onPlaybackStart),o.Z.on(this.player,"playbackstop",this._onPlaybackStop),o.Z.on(this.player,"unpause",this._onUnpause),o.Z.on(this.player,"pause",this._onPause),o.Z.on(this.player,"timeupdate",this._onTimeUpdate),o.Z.on(this.player,"playing",this._onPlaying),o.Z.on(this.player,"waiting",this._onWaiting),this.savedPlaybackRate=this.player.getPlaybackRate()}},{key:"localUnbindFromPlayer",value:function(){u(y(s.prototype),"localUnbindFromPlayer",this).call(this),o.Z.off(this.player,"playbackstart",this._onPlaybackStart),o.Z.off(this.player,"playbackstop",this._onPlaybackStop),o.Z.off(this.player,"unpause",this._onPlayerUnpause),o.Z.off(this.player,"pause",this._onPlayerPause),o.Z.off(this.player,"timeupdate",this._onTimeUpdate),o.Z.off(this.player,"playing",this._onPlaying),o.Z.off(this.player,"waiting",this._onWaiting),this.player.setPlaybackRate(this.savedPlaybackRate)}},{key:"onQueueUpdate",value:function(){o.Z.trigger(this.player,"playlistitemadd")}},{key:"isPlaybackActive",value:function(){return this.isPlayerActive}},{key:"isPlaying",value:function(){return!this.player.paused()}},{key:"currentTime",value:function(){return this.player.currentTime()}},{key:"hasPlaybackRate",value:function(){return!0}},{key:"setPlaybackRate",value:function(t){this.player.setPlaybackRate(t)}},{key:"getPlaybackRate",value:function(){return this.player.getPlaybackRate()}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),s}(r.default);p=d,h="htmlvideoplayer",(b=s(b="type"))in p?Object.defineProperty(p,b,{value:h,enumerable:!0,configurable:!0,writable:!0}):p[b]=h,e.default=d},94655:function(t,e,n){n.r(e);var r=n(48957),o=n(18613),i=n(81643),a=n(17031),u=n(33678),c=n(7786),l=n(46140),f=function(){function t(){this.name="SyncPlay Plugin",this.id="syncplay",this.type="syncplay",this.priority=1,this.init()}return t.prototype.init=function(){a.default.PlayerFactory.setDefaultWrapper(u.default),a.default.PlayerFactory.registerWrapper(c.default),a.default.PlayerFactory.registerWrapper(l.default),i.Z.on(r.O,"playerchange",(function(t,e){a.default.Manager.onPlayerChange(e)}));var t=o.Z.currentApiClient();t&&a.default.Manager.init(t),i.Z.on(o.Z,"apiclientcreated",(function(t,e){return a.default.Manager.init(e)})),i.Z.on(o.Z,"localusersignedin",(function(){return a.default.Manager.updateApiClient(o.Z.currentApiClient())})),i.Z.on(o.Z,"localusersignedout",(function(){return a.default.Manager.updateApiClient(o.Z.currentApiClient())}))},t}();e.default=f}}]);