/*! For license information please see 72963.9c718a5c986409419166.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72963],{72963:function(t,e,r){r.r(e),r(61013),r(63238),r(61418),r(72410),r(19068),r(87211),r(25901),r(92189),r(95163),r(99785),r(91047),r(5769),r(17460),r(14078),r(98521),r(6798),r(82923),r(21897),r(12274),r(55849),r(50987),r(60190);var a=r(94994),n=r(56663),o=r(7125);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",u=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function y(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),l=new Q(n||[]);return a(i,"_invoke",{value:I(t,r,l)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=y;var p={};function f(){}function d(){}function g(){}var v={};c(v,o,(function(){return this}));var m=Object.getPrototypeOf,P=m&&m(m(x([])));P&&P!==e&&r.call(P,o)&&(v=P);var b=g.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(a,o,l,u){var s=h(t[a],t,o);if("throw"!==s.type){var c=s.arg,y=c.value;return y&&"object"==i(y)&&r.call(y,"__await")?e.resolve(y.__await).then((function(t){n("next",t,l,u)}),(function(t){n("throw",t,l,u)})):e.resolve(y).then((function(t){c.value=t,l(c)}),(function(t){return n("throw",t,l,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,a){n(t,r,e,a)}))}return o=o?o.then(a,a):a()}})}function I(t,e,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return{value:void 0,done:!0}}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var l=S(i,r);if(l){if(l===p)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var u=h(t,e,r);if("normal"===u.type){if(a=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a="completed",r.method="throw",r.arg=u.arg)}}}function S(t,e){var r=e.method,a=t.iterator[r];if(void 0===a)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var n=h(a,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function U(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(U,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,n=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=g,a(b,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:d,configurable:!0}),d.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(k.prototype),c(k.prototype,u,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new k(y(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),c(b,s,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var a in e)r.push(a);return r.reverse(),function t(){for(;r.length;){var a=r.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=x,Q.prototype={constructor:Q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return i.type="throw",i.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(l&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;L(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function u(t,e,r,a,n,o,i){try{var l=t[o](i),u=l.value}catch(t){return void r(t)}l.done?e(u):Promise.resolve(u).then(a,n)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var o=t.apply(e,r);function i(t){u(o,a,n,i,l,"next",t)}function l(t){u(o,a,n,i,l,"throw",t)}i(void 0)}))}}function c(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,(void 0,n=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e);if("object"!==i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(a.key,"string"),"symbol"===i(n)?n:String(n)),a)}var n}var y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.manager=null,this.lastPlayQueueUpdate=null,this.playlist=[]}var e,r;return e=t,(r=[{key:"init",value:function(t){this.manager=t}},{key:"updatePlayQueue",value:function(t,e){var r=this;if(e.LastUpdate=new Date(e.LastUpdate),e.LastUpdate.getTime()<=this.getLastUpdateTime())console.debug("SyncPlay updatePlayQueue: ignoring old update",e);else{console.debug("SyncPlay updatePlayQueue:",e);var a=t.serverInfo().Id;this.onPlayQueueUpdate(t,e,a).then((function(a){if(e.LastUpdate.getTime()<r.getLastUpdateTime())throw console.warn("SyncPlay updatePlayQueue: trying to apply old update.",e),new Error("Trying to apply old update");if(r.manager.isRemote())console.warn("SyncPlay updatePlayQueue: remote player has own SyncPlay manager.");else{var n=r.manager.getPlayerWrapper();switch(e.Reason){case"NewPlaylist":r.manager.isFollowingGroupPlayback()?r.startPlayback(t):r.manager.followGroupPlayback(t).then((function(){r.startPlayback(t)}));break;case"SetCurrentItem":case"NextItem":case"PreviousItem":n.onQueueUpdate();var o=r.getCurrentPlaylistItemId();r.setCurrentPlaylistItem(t,o);break;case"RemoveItems":n.onQueueUpdate();var i=a.playQueueUpdate.PlayingItemIndex,l=-1===i?null:a.playlist[i].PlaylistItemId,u=r.getCurrentPlaylistItemId();l!==u&&r.setCurrentPlaylistItem(t,u);break;case"MoveItem":case"Queue":case"QueueNext":n.onQueueUpdate();break;case"RepeatMode":n.localSetRepeatMode(r.getRepeatMode());break;case"ShuffleMode":n.localSetQueueShuffleMode(r.getShuffleMode());break;default:console.error("SyncPlay updatePlayQueue: unknown reason for update:",e.Reason)}}})).catch((function(t){console.warn("SyncPlay updatePlayQueue:",t)}))}}},{key:"onPlayQueueUpdate",value:function(t,e,r){var a=this,n=this.lastPlayQueueUpdate,i=this.playlist,l=e.Playlist.map((function(t){return t.ItemId}));return l.length?o.getItemsForPlayback(t,{Ids:l.join(",")}).then((function(u){return o.translateItemsForPlayback(t,u.Items,{ids:l,serverId:r}).then((function(t){if(a.lastPlayQueueUpdate&&e.LastUpdate.getTime()<=a.getLastUpdateTime())throw new Error("Trying to apply old update");for(var r=0;r<t.length;r++)t[r].PlaylistItemId=e.Playlist[r].PlaylistItemId;return a.lastPlayQueueUpdate=e,a.playlist=t,{playQueueUpdate:n,playlist:i}}))})):this.lastPlayQueueUpdate&&e.LastUpdate.getTime()<=this.getLastUpdateTime()?Promise.reject("Trying to apply old update"):(this.lastPlayQueueUpdate=e,this.playlist=[],Promise.resolve({playQueueUpdate:n,playlist:i}))}},{key:"scheduleReadyRequestOnPlaybackStart",value:function(t,e){var r=this;o.waitForEventOnce(this.manager,"playbackstart",o.WaitForEventDefaultTimeout,["playbackerror"]).then(s(l().mark((function e(){var a,n,i,u,s,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.debug("SyncPlay scheduleReadyRequestOnPlaybackStart: local pause and notify server."),(a=r.manager.getPlayerWrapper()).localPause(),n=new Date,i=r.manager.timeSyncCore.localDateToRemote(n),!a.currentTimeAsync){e.next=11;break}return e.next=8,a.currentTimeAsync();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.currentTime();case 12:u=e.t0,s=Math.round(u*o.TicksPerMillisecond),c=a.isPlaying(),t.requestSyncPlayReady({When:i.toISOString(),PositionTicks:s,IsPlaying:c,PlaylistItemId:r.getCurrentPlaylistItemId()});case 16:case"end":return e.stop()}}),e)})))).catch((function(o){console.error("Error while waiting for `playbackstart` event!",e,o),r.manager.isSyncPlayEnabled()||(0,n.Z)(a.ZP.translate("MessageSyncPlayErrorMedia")),r.manager.haltGroupPlayback(t)}))}},{key:"startPlayback",value:function(t){var e=this;if(!this.manager.isFollowingGroupPlayback())return console.debug("SyncPlay startPlayback: ignoring, not following playback."),Promise.reject();if(this.isPlaylistEmpty())console.debug("SyncPlay startPlayback: empty playlist.");else{var r=this.manager.getLastPlaybackCommand(),o=0;if(r&&r.EmittedAt.getTime()>=this.getLastUpdateTime())o=this.manager.getPlaybackCore().estimateCurrentTicks(r.PositionTicks,r.When);else{var i=this.getStartPositionTicks(),l=this.getLastUpdate();o=this.manager.getPlaybackCore().estimateCurrentTicks(i,l)}var u=t.serverInfo().Id;this.manager.getPlayerWrapper().localPlay({ids:this.getPlaylistAsItemIds(),startPositionTicks:o,startIndex:this.getCurrentPlaylistIndex(),serverId:u}).then((function(){e.scheduleReadyRequestOnPlaybackStart(t,"startPlayback")})).catch((function(t){console.error(t),(0,n.Z)(a.ZP.translate("MessageSyncPlayErrorMedia"))}))}}},{key:"setCurrentPlaylistItem",value:function(t,e){this.manager.isFollowingGroupPlayback()?(this.scheduleReadyRequestOnPlaybackStart(t,"setCurrentPlaylistItem"),this.manager.getPlayerWrapper().localSetCurrentPlaylistItem(e)):console.debug("SyncPlay setCurrentPlaylistItem: ignoring, not following playback.")}},{key:"getCurrentPlaylistIndex",value:function(){return this.lastPlayQueueUpdate?this.lastPlayQueueUpdate.PlayingItemIndex:-1}},{key:"getCurrentPlaylistItemId",value:function(){if(this.lastPlayQueueUpdate){var t=this.lastPlayQueueUpdate.PlayingItemIndex;return-1===t?null:this.playlist[t].PlaylistItemId}return null}},{key:"getPlaylist",value:function(){return this.playlist.slice(0)}},{key:"isPlaylistEmpty",value:function(){return 0===this.playlist.length}},{key:"getLastUpdate",value:function(){return this.lastPlayQueueUpdate?this.lastPlayQueueUpdate.LastUpdate:null}},{key:"getLastUpdateTime",value:function(){return this.lastPlayQueueUpdate?this.lastPlayQueueUpdate.LastUpdate.getTime():0}},{key:"getStartPositionTicks",value:function(){return this.lastPlayQueueUpdate?this.lastPlayQueueUpdate.StartPositionTicks:0}},{key:"getPlaylistAsItemIds",value:function(){return this.lastPlayQueueUpdate?this.lastPlayQueueUpdate.Playlist.map((function(t){return t.ItemId})):[]}},{key:"getRepeatMode",value:function(){return this.lastPlayQueueUpdate?this.lastPlayQueueUpdate.RepeatMode:"Sorted"}},{key:"getShuffleMode",value:function(){return this.lastPlayQueueUpdate?this.lastPlayQueueUpdate.ShuffleMode:"RepeatNone"}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.default=y}}]);