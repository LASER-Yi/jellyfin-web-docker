/*! For license information please see 19907.c7c0340797e1006d2089.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19907],{19907:function(t,e,r){r.r(e),r(86584),r(78557),r(90076),r(89336),r(81678),r(4754),r(29305),r(32733),r(94),r(36947),r(84701),r(44962),r(83994),r(82367),r(51770),r(2623),r(10849),r(70389),r(26437),r(23630),r(52697),r(87324);var a=r(9482),n=r(50764),o=r(20919);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function l(){l=function(){return e};var t,e={},r=Object.prototype,a=r.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function y(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{y({},"")}catch(t){y=function(t,e,r){return t[e]=r}}function h(t,e,r,a){var o=e&&e.prototype instanceof P?e:P,i=Object.create(o.prototype),l=new O(a||[]);return n(i,"_invoke",{value:x(t,r,l)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var p="suspendedStart",d="suspendedYield",g="executing",m="completed",v={};function P(){}function b(){}function w(){}var k={};y(k,u,(function(){return this}));var I=Object.getPrototypeOf,S=I&&I(I(j([])));S&&S!==r&&a.call(S,u)&&(k=S);var U=w.prototype=P.prototype=Object.create(k);function L(t){["next","throw","return"].forEach((function(e){y(t,e,(function(t){return this._invoke(e,t)}))}))}function Q(t,e){function r(n,o,l,u){var s=f(t[n],t,o);if("throw"!==s.type){var c=s.arg,y=c.value;return y&&"object"==i(y)&&a.call(y,"__await")?e.resolve(y.__await).then((function(t){r("next",t,l,u)}),(function(t){r("throw",t,l,u)})):e.resolve(y).then((function(t){c.value=t,l(c)}),(function(t){return r("throw",t,l,u)}))}u(s.arg)}var o;n(this,"_invoke",{value:function(t,a){function n(){return new e((function(e,n){r(t,a,e,n)}))}return o=o?o.then(n,n):n()}})}function x(e,r,a){var n=p;return function(o,i){if(n===g)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw i;return{value:t,done:!0}}for(a.method=o,a.arg=i;;){var l=a.delegate;if(l){var u=T(l,a);if(u){if(u===v)continue;return u}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(n===p)throw n=m,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n=g;var s=f(e,r,a);if("normal"===s.type){if(n=a.done?m:d,s.arg===v)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(n=m,a.method="throw",a.arg=s.arg)}}}function T(e,r){var a=r.method,n=e.iterator[a];if(n===t)return r.delegate=null,"throw"===a&&e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)||"return"!==a&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+a+"' method")),v;var o=f(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(i(e)+" is not iterable")}return b.prototype=w,n(U,"constructor",{value:w,configurable:!0}),n(w,"constructor",{value:b,configurable:!0}),b.displayName=y(w,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,y(t,c,"GeneratorFunction")),t.prototype=Object.create(U),t},e.awrap=function(t){return{__await:t}},L(Q.prototype),y(Q.prototype,s,(function(){return this})),e.AsyncIterator=Q,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new Q(h(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(U),y(U,c,"Generator"),y(U,u,(function(){return this})),y(U,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var a in e)r.push(a);return r.reverse(),function t(){for(;r.length;){var a=r.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(a,n){return l.type="throw",l.arg=e,r.next=a,n&&(r.method="next",r.arg=t),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;C(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,a){return this.delegate={iterator:j(e),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=t),v}},e}function u(t,e,r,a,n,o,i){try{var l=t[o](i),u=l.value}catch(t){return void r(t)}l.done?e(u):Promise.resolve(u).then(a,n)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var o=t.apply(e,r);function i(t){u(o,a,n,i,l,"next",t)}function l(t){u(o,a,n,i,l,"throw",t)}i(void 0)}))}}function c(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,y(a.key),a)}}function y(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,"string");if("object"!=i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==i(e)?e:String(e)}var h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.manager=null,this.lastPlayQueueUpdate=null,this.playlist=[]}var e,r;return e=t,(r=[{key:"init",value:function(t){this.manager=t}},{key:"updatePlayQueue",value:function(t,e){var r=this;if(e.LastUpdate=new Date(e.LastUpdate),e.LastUpdate.getTime()<=this.getLastUpdateTime())console.debug("SyncPlay updatePlayQueue: ignoring old update",e);else{console.debug("SyncPlay updatePlayQueue:",e);var a=t.serverInfo().Id;this.onPlayQueueUpdate(t,e,a).then((function(a){if(e.LastUpdate.getTime()<r.getLastUpdateTime())throw console.warn("SyncPlay updatePlayQueue: trying to apply old update.",e),new Error("Trying to apply old update");if(r.manager.isRemote())console.warn("SyncPlay updatePlayQueue: remote player has own SyncPlay manager.");else{var n=r.manager.getPlayerWrapper();switch(e.Reason){case"NewPlaylist":r.manager.isFollowingGroupPlayback()?r.startPlayback(t):r.manager.followGroupPlayback(t).then((function(){r.startPlayback(t)}));break;case"SetCurrentItem":case"NextItem":case"PreviousItem":n.onQueueUpdate();var o=r.getCurrentPlaylistItemId();r.setCurrentPlaylistItem(t,o);break;case"RemoveItems":n.onQueueUpdate();var i=a.playQueueUpdate.PlayingItemIndex,l=-1===i?null:a.playlist[i].PlaylistItemId,u=r.getCurrentPlaylistItemId();l!==u&&r.setCurrentPlaylistItem(t,u);break;case"MoveItem":case"Queue":case"QueueNext":n.onQueueUpdate();break;case"RepeatMode":n.localSetRepeatMode(r.getRepeatMode());break;case"ShuffleMode":n.localSetQueueShuffleMode(r.getShuffleMode());break;default:console.error("SyncPlay updatePlayQueue: unknown reason for update:",e.Reason)}}})).catch((function(t){console.warn("SyncPlay updatePlayQueue:",t)}))}}},{key:"onPlayQueueUpdate",value:function(t,e,r){var a=this,n=this.lastPlayQueueUpdate,i=this.playlist,l=e.Playlist.map((function(t){return t.ItemId}));return l.length?o.getItemsForPlayback(t,{Ids:l.join(",")}).then((function(u){return o.translateItemsForPlayback(t,u.Items,{ids:l,serverId:r}).then((function(t){if(a.lastPlayQueueUpdate&&e.LastUpdate.getTime()<=a.getLastUpdateTime())throw new Error("Trying to apply old update");for(var r=0;r<t.length;r++)t[r].PlaylistItemId=e.Playlist[r].PlaylistItemId;return a.lastPlayQueueUpdate=e,a.playlist=t,{playQueueUpdate:n,playlist:i}}))})):this.lastPlayQueueUpdate&&e.LastUpdate.getTime()<=this.getLastUpdateTime()?Promise.reject("Trying to apply old update"):(this.lastPlayQueueUpdate=e,this.playlist=[],Promise.resolve({playQueueUpdate:n,playlist:i}))}},{key:"scheduleReadyRequestOnPlaybackStart",value:function(t,e){var r=this;o.waitForEventOnce(this.manager,"playbackstart",o.WaitForEventDefaultTimeout,["playbackerror"]).then(s(l().mark((function e(){var a,n,i,u,s,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.debug("SyncPlay scheduleReadyRequestOnPlaybackStart: local pause and notify server."),(a=r.manager.getPlayerWrapper()).localPause(),n=new Date,i=r.manager.timeSyncCore.localDateToRemote(n),!a.currentTimeAsync){e.next=11;break}return e.next=8,a.currentTimeAsync();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.currentTime();case 12:u=e.t0,s=Math.round(u*o.TicksPerMillisecond),c=a.isPlaying(),t.requestSyncPlayReady({When:i.toISOString(),PositionTicks:s,IsPlaying:c,PlaylistItemId:r.getCurrentPlaylistItemId()});case 16:case"end":return e.stop()}}),e)})))).catch((function(o){console.error("Error while waiting for `playbackstart` event!",e,o),r.manager.isSyncPlayEnabled()||(0,n.A)(a.Ay.translate("MessageSyncPlayErrorMedia")),r.manager.haltGroupPlayback(t)}))}},{key:"startPlayback",value:function(t){var e=this;if(!this.manager.isFollowingGroupPlayback())return console.debug("SyncPlay startPlayback: ignoring, not following playback."),Promise.reject();if(this.isPlaylistEmpty())console.debug("SyncPlay startPlayback: empty playlist.");else{var r=this.manager.getLastPlaybackCommand(),o=0;if(r&&r.EmittedAt.getTime()>=this.getLastUpdateTime())o=this.manager.getPlaybackCore().estimateCurrentTicks(r.PositionTicks,r.When);else{var i=this.getStartPositionTicks(),l=this.getLastUpdate();o=this.manager.getPlaybackCore().estimateCurrentTicks(i,l)}var u=t.serverInfo().Id;this.manager.getPlayerWrapper().localPlay({ids:this.getPlaylistAsItemIds(),startPositionTicks:o,startIndex:this.getCurrentPlaylistIndex(),serverId:u}).then((function(){e.scheduleReadyRequestOnPlaybackStart(t,"startPlayback")})).catch((function(t){console.error(t),(0,n.A)(a.Ay.translate("MessageSyncPlayErrorMedia"))}))}}},{key:"setCurrentPlaylistItem",value:function(t,e){this.manager.isFollowingGroupPlayback()?(this.scheduleReadyRequestOnPlaybackStart(t,"setCurrentPlaylistItem"),this.manager.getPlayerWrapper().localSetCurrentPlaylistItem(e)):console.debug("SyncPlay setCurrentPlaylistItem: ignoring, not following playback.")}},{key:"getCurrentPlaylistIndex",value:function(){return this.lastPlayQueueUpdate?this.lastPlayQueueUpdate.PlayingItemIndex:-1}},{key:"getCurrentPlaylistItemId",value:function(){if(this.lastPlayQueueUpdate){var t=this.lastPlayQueueUpdate.PlayingItemIndex;return-1===t?null:this.playlist[t].PlaylistItemId}return null}},{key:"getPlaylist",value:function(){return this.playlist.slice(0)}},{key:"isPlaylistEmpty",value:function(){return 0===this.playlist.length}},{key:"getLastUpdate",value:function(){return this.lastPlayQueueUpdate?this.lastPlayQueueUpdate.LastUpdate:null}},{key:"getLastUpdateTime",value:function(){return this.lastPlayQueueUpdate?this.lastPlayQueueUpdate.LastUpdate.getTime():0}},{key:"getStartPositionTicks",value:function(){return this.lastPlayQueueUpdate?this.lastPlayQueueUpdate.StartPositionTicks:0}},{key:"getPlaylistAsItemIds",value:function(){return this.lastPlayQueueUpdate?this.lastPlayQueueUpdate.Playlist.map((function(t){return t.ItemId})):[]}},{key:"getRepeatMode",value:function(){return this.lastPlayQueueUpdate?this.lastPlayQueueUpdate.RepeatMode:"Sorted"}},{key:"getShuffleMode",value:function(){return this.lastPlayQueueUpdate?this.lastPlayQueueUpdate.ShuffleMode:"RepeatNone"}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.default=h}}]);