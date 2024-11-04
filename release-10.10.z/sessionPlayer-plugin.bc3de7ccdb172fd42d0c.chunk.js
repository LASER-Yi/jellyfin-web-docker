/*! For license information please see sessionPlayer-plugin.bc3de7ccdb172fd42d0c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64706],{9112:function(t,e,r){r.r(e),r(29305),r(32733),r(51770),r(84701),r(81678),r(2623),r(14382),r(44962),r(86584),r(87324),r(89336),r(4754),r(10849),r(70389),r(94),r(77575),r(36947),r(26437),r(52697),r(78557),r(90076),r(83994),r(23630),r(82367);var n=r(47750),a=r(10736),i=r(86191),o=r(38783),l=r(44797);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(){s=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function y(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{y({},"")}catch(t){y=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof I?e:I,o=Object.create(i.prototype),l=new E(n||[]);return a(o,"_invoke",{value:C(t,r,l)}),o}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",v="suspendedYield",p="executing",m="completed",g={};function I(){}function P(){}function k(){}var w={};y(w,o,(function(){return this}));var S=Object.getPrototypeOf,b=S&&S(S(j([])));b&&b!==r&&n.call(b,o)&&(w=b);var x=k.prototype=I.prototype=Object.create(w);function T(t){["next","throw","return"].forEach((function(e){y(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(a,i,o,l){var s=h(t[a],t,i);if("throw"!==s.type){var c=s.arg,y=c.value;return y&&"object"==u(y)&&n.call(y,"__await")?e.resolve(y.__await).then((function(t){r("next",t,o,l)}),(function(t){r("throw",t,o,l)})):e.resolve(y).then((function(t){c.value=t,o(c)}),(function(t){return r("throw",t,o,l)}))}l(s.arg)}var i;a(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,a){r(t,n,e,a)}))}return i=i?i.then(a,a):a()}})}function C(e,r,n){var a=d;return function(i,o){if(a===p)throw Error("Generator is already running");if(a===m){if("throw"===i)throw o;return{value:t,done:!0}}for(n.method=i,n.arg=o;;){var l=n.delegate;if(l){var u=N(l,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===d)throw a=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var s=h(e,r,n);if("normal"===s.type){if(a=n.done?m:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=m,n.method="throw",n.arg=s.arg)}}}function N(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(a,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function j(e){if(e||""===e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(u(e)+" is not iterable")}return P.prototype=k,a(x,"constructor",{value:k,configurable:!0}),a(k,"constructor",{value:P,configurable:!0}),P.displayName=y(k,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===P||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,y(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},T(L.prototype),y(L.prototype,l,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new L(f(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},T(x),y(x,c,"Generator"),y(x,o,(function(){return this})),y(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=j,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return l.type="throw",l.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],l=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;D(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,y(n.key),n)}}function y(t){var e=function(t,e){if("object"!=u(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:e+""}function f(t,e,r,n,a,i,o){try{var l=t[i](o),u=l.value}catch(t){return void r(t)}l.done?e(u):Promise.resolve(u).then(n,a)}function h(){var t=n.f.getPlayerInfo();return t?t.id:null}function d(t,e,r){var n=h(),a={ItemIds:(e.ids||e.items.map((function(t){return t.Id}))).join(","),PlayCommand:r};return e.startPositionTicks&&(a.StartPositionTicks=e.startPositionTicks),e.mediaSourceId&&(a.MediaSourceId=e.mediaSourceId),null!=e.audioStreamIndex&&(a.AudioStreamIndex=e.audioStreamIndex),null!=e.subtitleStreamIndex&&(a.SubtitleStreamIndex=e.subtitleStreamIndex),null!=e.startIndex&&(a.StartIndex=e.startIndex),t.sendPlayCommand(n,a)}function v(t,e,r){var n=h();t.sendPlayStateCommand(n,e,r)}function p(t){var e=t.currentServerId;return e?i.A.getApiClient(e):i.A.currentApiClient()}function m(t,e,r){var n={Name:e};r&&(n.Arguments=r),t.sendCommand(n)}function g(){var t;return t=s().mark((function t(e,r){var a,i,o,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={ids:r.map((function(t){return t.Id})),serverId:p(e).serverId()},t.next=3,n.f.getItemsForPlayback(a.serverId,{Ids:a.ids.join(",")});case 3:return i=t.sent,t.next=6,n.f.translateItemsForPlayback(i.Items,a);case 6:for(o=t.sent,l=0;l<o.length;l++)o[l].PlaylistItemId=r[l].PlaylistItemId;e.playlist=o;case 9:case"end":return t.stop()}}),t)})),g=function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){f(i,n,a,o,l,"next",t)}function l(t){f(i,n,a,o,l,"throw",t)}o(void 0)}))},g.apply(this,arguments)}function I(t,e,r){var a=r.serverId();e.forEach((function(t){t.NowPlayingItem&&(t.NowPlayingItem.ServerId=a)}));var i,o=h(),u=e.filter((function(t){return t.Id===o}))[0];if(u){!function(t,e){if(null!=t&&t.NowPlayingItem){var r=t.NowPlayingItem;(!r.ImageTags||!r.ImageTags.Primary&&r.PrimaryImageTag)&&(r.ImageTags=r.ImageTags||{},r.ImageTags.Primary=r.PrimaryImageTag),r.BackdropImageTag&&r.BackdropItemId===r.Id&&(r.BackdropImageTags=[r.BackdropImageTag]),r.BackdropImageTag&&r.BackdropItemId!==r.Id&&(r.ParentBackdropImageTags=[r.BackdropImageTag],r.ParentBackdropItemId=r.BackdropItemId),r.ServerId||(r.ServerId=e.serverId())}}(u,r);var s=(t.lastPlayerData,(i=[]).push("statechange"),i.push("timeupdate"),i.push("pause"),i);(function(t,e){var r=e.NowPlayingQueue;if(!t.isUpdatingPlaylist&&(!t.lastPlayerData||function(t,e){if(t.length!==e.length)return!0;for(var r=0;r<t.length;r++)if(t[r].Id!==e[r].Id||t[r].PlaylistItemId!==e[r].PlaylistItemId)return!0;return!1}(r,t.playlist))){t.isUpdatingPlaylist=!0;var n=function(){t.isUpdatingPlaylist=!1,t.isPlaylistRendered=!0};(function(t,e){return g.apply(this,arguments)})(t,r).then(n,n)}})(t,u),t.lastPlayerData=u,s.forEach((function(e){l.A.trigger(t,e,[u])}))}else t.lastPlayerData=u,n.f.setDefaultPlayerActive()}function P(){var t=this,e=p(t);e.isMessageChannelOpen()||e.getSessions().then((function(r){I(t,r,e)}))}function k(t){t.isUpdating=!0,p(t).sendMessage("SessionsStart","100,800"),t.pollInterval&&(clearInterval(t.pollInterval),t.pollInterval=null),t.pollInterval=setInterval(P.bind(t),5e3)}var w=function(){return t=function t(){var e,r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,n=void 0,(r=y(r="lastPlaylistItemId"))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;var i=this;this.name="Remote Control",this.type=o.Q.MediaPlayer,this.isLocalPlayer=!1,this.id="remoteplayer",this.playlist=[],this.isPlaylistRendered=!0,this.isUpdatingPlaylist=!1,l.A.on(a.default,"Sessions",(function(t,e,r){I(i,r,e)}))},(e=[{key:"beginPlayerUpdates",value:function(){this.playerListenerCount=this.playerListenerCount||0,this.playerListenerCount<=0&&(this.playerListenerCount=0,k(this)),this.playerListenerCount++}},{key:"endPlayerUpdates",value:function(){var t;this.playerListenerCount=this.playerListenerCount||0,this.playerListenerCount--,this.playerListenerCount<=0&&((t=this).isUpdating=!0,p(t).sendMessage("SessionsStop"),t.pollInterval&&(clearInterval(t.pollInterval),t.pollInterval=null),this.playerListenerCount=0)}},{key:"getPlayerState",value:function(){return this.lastPlayerData||{}}},{key:"getTargets",value:function(){var t=p(this),e={ControllableByUserId:t.getCurrentUserId()};if(t){var r=this.name;return t.getSessions(e).then((function(e){return e.filter((function(e){return e.DeviceId!==t.deviceId()})).map((function(t){return{name:t.DeviceName,deviceName:t.DeviceName,deviceType:t.DeviceType,id:t.Id,playerName:r,appName:t.Client,playableMediaTypes:t.PlayableMediaTypes,isLocalPlayer:!1,supportedCommands:t.Capabilities.SupportedCommands,user:t.UserId?{Id:t.UserId,Name:t.UserName,PrimaryImageTag:t.UserPrimaryImageTag}:null}}))}))}return Promise.resolve([])}},{key:"sendCommand",value:function(t){var e=h();p(this).sendCommand(e,t)}},{key:"play",value:function(t){return(t=Object.assign({},t)).items&&(t.ids=t.items.map((function(t){return t.Id})),t.items=null),d(p(this),t,"PlayNow")}},{key:"shuffle",value:function(t){d(p(this),{ids:[t.Id]},"PlayShuffle")}},{key:"instantMix",value:function(t){d(p(this),{ids:[t.Id]},"PlayInstantMix")}},{key:"queue",value:function(t){d(p(this),t,"PlayLast")}},{key:"queueNext",value:function(t){d(p(this),t,"PlayNext")}},{key:"canPlayMediaType",value:function(t){return"audio"===(t=(t||"").toLowerCase())||"video"===t}},{key:"canQueueMediaType",value:function(t){return this.canPlayMediaType(t)}},{key:"stop",value:function(){v(p(this),"stop")}},{key:"nextTrack",value:function(){v(p(this),"nextTrack")}},{key:"previousTrack",value:function(){v(p(this),"previousTrack")}},{key:"seek",value:function(t){v(p(this),"seek",{SeekPositionTicks:t})}},{key:"currentTime",value:function(t){if(null!=t)return this.seek(1e4*t);var e=this.lastPlayerData||{};return(e=e.PlayState||{}).PositionTicks/1e4}},{key:"duration",value:function(){var t=this.lastPlayerData||{};return(t=t.NowPlayingItem||{}).RunTimeTicks}},{key:"paused",value:function(){var t=this.lastPlayerData||{};return(t=t.PlayState||{}).IsPaused}},{key:"getVolume",value:function(){var t=this.lastPlayerData||{};return(t=t.PlayState||{}).VolumeLevel}},{key:"isMuted",value:function(){var t=this.lastPlayerData||{};return(t=t.PlayState||{}).IsMuted}},{key:"pause",value:function(){v(p(this),"Pause")}},{key:"unpause",value:function(){v(p(this),"Unpause")}},{key:"playPause",value:function(){v(p(this),"PlayPause")}},{key:"setMute",value:function(t){m(this,t?"Mute":"Unmute")}},{key:"toggleMute",value:function(){m(this,"ToggleMute")}},{key:"setVolume",value:function(t){m(this,"SetVolume",{Volume:t})}},{key:"volumeUp",value:function(){m(this,"VolumeUp")}},{key:"volumeDown",value:function(){m(this,"VolumeDown")}},{key:"toggleFullscreen",value:function(){m(this,"ToggleFullscreen")}},{key:"audioTracks",value:function(){var t=this.lastPlayerData||{};return((t=t.NowPlayingItem||{}).MediaStreams||[]).filter((function(t){return"Audio"===t.Type}))}},{key:"getAudioStreamIndex",value:function(){var t=this.lastPlayerData||{};return(t=t.PlayState||{}).AudioStreamIndex}},{key:"playTrailers",value:function(t){m(this,"PlayTrailers",{ItemId:t.Id})}},{key:"setAudioStreamIndex",value:function(t){m(this,"SetAudioStreamIndex",{Index:t})}},{key:"subtitleTracks",value:function(){var t=this.lastPlayerData||{};return((t=t.NowPlayingItem||{}).MediaStreams||[]).filter((function(t){return"Subtitle"===t.Type}))}},{key:"getSubtitleStreamIndex",value:function(){var t=this.lastPlayerData||{};return(t=t.PlayState||{}).SubtitleStreamIndex}},{key:"setSubtitleStreamIndex",value:function(t){m(this,"SetSubtitleStreamIndex",{Index:t})}},{key:"setRepeatMode",value:function(t){m(this,"SetRepeatMode",{RepeatMode:t})}},{key:"getRepeatMode",value:function(){}},{key:"setQueueShuffleMode",value:function(t){m(this,"SetShuffleQueue",{ShuffleMode:t})}},{key:"getQueueShuffleMode",value:function(){}},{key:"displayContent",value:function(t){m(this,"DisplayContent",t)}},{key:"isPlaying",value:function(t){var e=this.lastPlayerData||{};return null!=e.NowPlayingItem&&(e.NowPlayingItem.MediaType===t||!t)}},{key:"isPlayingVideo",value:function(){var t=this.lastPlayerData||{};return"Video"===(t=t.NowPlayingItem||{}).MediaType}},{key:"isPlayingAudio",value:function(){var t=this.lastPlayerData||{};return"Audio"===(t=t.NowPlayingItem||{}).MediaType}},{key:"getTrackIndex",value:function(t){for(var e=0;e<this.playlist.length;e++)if(this.playlist[e].PlaylistItemId===t)return e}},{key:"getPlaylist",value:function(){var t;return this.lastPlayerData&&(t=this.lastPlayerData.PlaylistItemId),this.playlist.length>0&&(this.isPlaylistRendered||t!==this.lastPlaylistItemId)?(this.isPlaylistRendered=!1,this.lastPlaylistItemId=t,Promise.resolve(this.playlist)):Promise.resolve([])}},{key:"movePlaylistItem",value:function(t,e){var r=this.getTrackIndex(t);if(r!==e){var n=this.getCurrentPlaylistItemId(),a=0;n===t&&(a=e);var i=e+1>=this.playlist.length;e>r&&e++;for(var o=[],l=this.playlist[r],u=0;u<this.playlist.length;u++)u!==r&&(u===e&&o.push(l.Id),this.playlist[u].PlaylistItemId===n&&(a=o.length),o.push(this.playlist[u].Id));i&&o.push(l.Id);var s={ids:o,startIndex:a};return d(p(this),s,"PlayNow")}}},{key:"getCurrentPlaylistItemId",value:function(){return this.lastPlayerData.PlaylistItemId}},{key:"setCurrentPlaylistItem",value:function(t){var e={ids:this.playlist.map((function(t){return t.Id})),startIndex:this.getTrackIndex(t)};return d(p(this),e,"PlayNow")}},{key:"removeFromPlaylist",value:function(){return Promise.resolve()}},{key:"tryPair",value:function(){return Promise.resolve()}}])&&c(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();e.default=w}}]);