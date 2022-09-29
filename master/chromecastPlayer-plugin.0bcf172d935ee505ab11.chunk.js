"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9601],{99689:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}}),a(63238),a(61418),a(61013),a(48410),a(99785),a(69217),a(27471),a(32081),a(98010);var s=a(59858),n=a(60934),i=a(48957),r=a(94994),o=a(47005);function l(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var u,c,d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,(a=[{key:"load",value:function(){if("cordova"===window.appMode||"android"===window.appMode)return window.chrome=window.chrome||{},Promise.resolve();var e=!1;return e?Promise.resolve():new Promise((function(t){var a=document.createElement("script");a.setAttribute("type","text/javascript"),a.onload=function(){e=!0,t()},a.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"),document.querySelector("head").appendChild(a)}))}}])&&l(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),y=a(18613),m=a(37099);function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function p(e,t,a){return t&&h(e.prototype,t),a&&h(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}var g="Google Cast";function f(e){var t=u,a=c;u=null,c=null,e?t&&t():a?a():i.O.removeActivePlayer(g)}var P="IDLE",S="urn:x-cast:com.connectsdk",k=function(){function e(){v(this,e),this.deviceState=0,this.currentMediaSession=null,this.session=null,this.castPlayerState=P,this.hasReceivers=!1,this.errorHandler=this.onError.bind(this),this.mediaStatusUpdateHandler=this.onMediaStatusUpdate.bind(this),this.initializeCastPlayer()}return p(e,[{key:"initializeCastPlayer",value:function(){var e=window.chrome;if(e)if(e.cast&&e.cast.isAvailable){var t="F007D354";"unstable"===n.chromecastVersion()&&(t="6F511C87");var a=new e.cast.SessionRequest(t),s=new e.cast.ApiConfig(a,this.sessionListener.bind(this),this.receiverListener.bind(this));console.debug("chromecast.initialize"),e.cast.initialize(s,this.onInitSuccess.bind(this),this.errorHandler)}else setTimeout(this.initializeCastPlayer.bind(this),1e3)}},{key:"onInitSuccess",value:function(){this.isInitialized=!0,console.debug("chromecast init success")}},{key:"onError",value:function(){console.debug("chromecast error")}},{key:"sessionListener",value:function(e){this.session=e,this.session&&(this.session.media[0]&&this.onMediaDiscovered("activeSession",this.session.media[0]),this.onSessionConnected(e))}},{key:"messageListener",value:function(e,t){if("string"==typeof t&&(t=JSON.parse(t)),"playbackerror"===t.type){var a=t.data;setTimeout((function(){I(r.ZP.translate("MessagePlaybackError"+a),r.ZP.translate("HeaderPlaybackError"))}),300)}else"connectionerror"===t.type?setTimeout((function(){I(r.ZP.translate("MessageChromecastConnectionError"),r.ZP.translate("HeaderError"))}),300):t.type&&o.Events.trigger(this,t.type,[t.data])}},{key:"receiverListener",value:function(e){"available"===e?(console.debug("chromecast receiver found"),this.hasReceivers=!0):(console.debug("chromecast receiver list empty"),this.hasReceivers=!1)}},{key:"sessionUpdateListener",value:function(e){e?console.debug("sessionUpdateListener: already alive"):(this.session=null,this.deviceState=0,this.castPlayerState=P,document.removeEventListener("volumeupbutton",b,!1),document.removeEventListener("volumedownbutton",M,!1),console.debug("sessionUpdateListener: setting currentMediaSession to null"),this.currentMediaSession=null,f(!1))}},{key:"launchApp",value:function(){console.debug("chromecast launching app..."),chrome.cast.requestSession(this.onRequestSessionSuccess.bind(this),this.onLaunchError.bind(this))}},{key:"onRequestSessionSuccess",value:function(e){console.debug("chromecast session success: "+e.sessionId),this.onSessionConnected(e)}},{key:"onSessionConnected",value:function(e){this.session=e,this.deviceState=1,this.session.addMessageListener(S,this.messageListener.bind(this)),this.session.addMediaListener(this.sessionMediaListener.bind(this)),this.session.addUpdateListener(this.sessionUpdateListener.bind(this)),document.addEventListener("volumeupbutton",b,!1),document.addEventListener("volumedownbutton",M,!1),o.Events.trigger(this,"connect"),this.sendMessage({options:{},command:"Identify"})}},{key:"sessionMediaListener",value:function(e){this.currentMediaSession=e,this.currentMediaSession.addUpdateListener(this.mediaStatusUpdateHandler)}},{key:"onLaunchError",value:function(){console.debug("chromecast launch error"),this.deviceState=3,f(!1)}},{key:"stopApp",value:function(){this.session&&this.session.stop(this.onStopAppSuccess.bind(this,"Session stopped"),this.errorHandler)}},{key:"onStopAppSuccess",value:function(e){console.debug(e),this.deviceState=0,this.castPlayerState=P,document.removeEventListener("volumeupbutton",b,!1),document.removeEventListener("volumedownbutton",M,!1),this.currentMediaSession=null}},{key:"loadMedia",value:function(e,t){return this.session?(e.items=e.items.map((function(e){return{Id:e.Id,ServerId:e.ServerId,Name:e.Name,Type:e.Type,MediaType:e.MediaType,IsFolder:e.IsFolder}})),this.sendMessage({options:e,command:t})):(console.debug("no session"),Promise.reject())}},{key:"sendMessage",value:function(e){var t,a=null,i=this.session;i&&i.receiver&&i.receiver.friendlyName&&(a=i.receiver.friendlyName),t=e.options&&e.options.ServerId?y.Z.getApiClient(e.options.ServerId):e.options&&e.options.items&&e.options.items.length?y.Z.getApiClient(e.options.items[0].ServerId):y.Z.currentApiClient(),e=Object.assign(e,{userId:t.getCurrentUserId(),deviceId:t.deviceId(),accessToken:t.accessToken(),serverAddress:t.serverAddress(),serverId:t.serverId(),serverVersion:t.serverVersion(),receiverName:a});var r=s.Z.maxChromecastBitrate();return r&&(e.maxBitrate=r),e.options&&e.options.items&&(e.subtitleAppearance=n.getSubtitleAppearanceSettings(),e.subtitleBurnIn=s.Z.get("subtitleburnin")||""),this.sendMessageInternal(e)}},{key:"sendMessageInternal",value:function(e){return e=JSON.stringify(e),this.session.sendMessage(S,e,this.onPlayCommandSuccess.bind(this),this.errorHandler),Promise.resolve()}},{key:"onPlayCommandSuccess",value:function(){console.debug("Message was sent to receiver ok.")}},{key:"onMediaDiscovered",value:function(e,t){console.debug("chromecast new media session ID:"+t.mediaSessionId+" ("+e+")"),this.currentMediaSession=t,"loadMedia"===e&&(this.castPlayerState="PLAYING"),"activeSession"===e&&(this.castPlayerState=t.playerState),this.currentMediaSession.addUpdateListener(this.mediaStatusUpdateHandler)}},{key:"onMediaStatusUpdate",value:function(e){console.debug("chromecast updating media: "+e),!1===e&&(this.castPlayerState=P)}},{key:"setReceiverVolume",value:function(e,t){this.currentMediaSession?e?this.session.setReceiverMuted(!0,this.mediaCommandSuccessCallback.bind(this),this.errorHandler):this.session.setReceiverVolumeLevel(t||1,this.mediaCommandSuccessCallback.bind(this),this.errorHandler):console.debug("this.currentMediaSession is null")}},{key:"mute",value:function(){this.setReceiverVolume(!0)}},{key:"mediaCommandSuccessCallback",value:function(e){console.debug(e)}}]),e}();function I(e,t){(0,m.Z)({text:e,title:t})}function b(){i.O.volumeUp()}function M(){i.O.volumeDown()}function C(e,t){o.Events.on(e._castPlayer,t,(function(a,s){console.debug("cc: "+t);var n=e.getPlayerStateInternal(s);o.Events.trigger(e,t,[n])}))}function T(){var e=this;e._castPlayer=new k,document.dispatchEvent(new CustomEvent("chromecastloaded",{detail:{player:e}})),o.Events.on(e._castPlayer,"connect",(function(){u?f(!0):i.O.setActivePlayer(g,e.getCurrentTargetInfo()),console.debug("cc: connect"),e.lastPlayerData=null})),o.Events.on(e._castPlayer,"playbackstart",(function(t,a){console.debug("cc: playbackstart"),e._castPlayer.initializeCastPlayer();var s=e.getPlayerStateInternal(a);o.Events.trigger(e,"playbackstart",[s])})),o.Events.on(e._castPlayer,"playbackstop",(function(t,a){console.debug("cc: playbackstop");var s=e.getPlayerStateInternal(a);o.Events.trigger(e,"playbackstop",[s]);var n=(s=e.lastPlayerData.PlayState||{}).VolumeLevel||.5,i=s.IsMuted||!1;e.lastPlayerData={},e.lastPlayerData.PlayState={},e.lastPlayerData.PlayState.VolumeLevel=n,e.lastPlayerData.PlayState.IsMuted=i})),o.Events.on(e._castPlayer,"playbackprogress",(function(t,a){console.debug("cc: positionchange");var s=e.getPlayerStateInternal(a);o.Events.trigger(e,"timeupdate",[s])})),C(e,"timeupdate"),C(e,"pause"),C(e,"unpause"),C(e,"volumechange"),C(e,"repeatmodechange"),C(e,"shufflequeuemodechange"),o.Events.on(e._castPlayer,"playstatechange",(function(t,a){console.debug("cc: playstatechange");var s=e.getPlayerStateInternal(a);o.Events.trigger(e,"pause",[s])}))}var w=function(){function e(){v(this,e),this.name=g,this.type="mediaplayer",this.id="chromecast",this.isLocalPlayer=!1,this.lastPlayerData={},(new d).load().then(T.bind(this))}return p(e,[{key:"tryPair",value:function(){var e=this._castPlayer;return 1!==e.deviceState&&e.isInitialized?new Promise((function(t,a){u=t,c=a,e.launchApp()})):(u=null,c=null,Promise.reject())}},{key:"getTargets",value:function(){var e=[];return this._castPlayer&&this._castPlayer.hasReceivers&&e.push(this.getCurrentTargetInfo()),Promise.resolve(e)}},{key:"getCurrentTargetInfo",value:function(){var e=null,t=this._castPlayer;return t.session&&t.session.receiver&&t.session.receiver.friendlyName&&(e=t.session.receiver.friendlyName),{name:g,id:g,playerName:g,playableMediaTypes:["Audio","Video"],isLocalPlayer:!1,appName:g,deviceName:e,supportedCommands:["VolumeUp","VolumeDown","Mute","Unmute","ToggleMute","SetVolume","SetAudioStreamIndex","SetSubtitleStreamIndex","DisplayContent","SetRepeatMode","SetShuffleQueue","EndSession","PlayMediaSource","PlayTrailers"]}}},{key:"getPlayerStateInternal",value:function(e){var t=!1;return e&&!this.lastPlayerData&&(t=!0),e=e||this.lastPlayerData,this.lastPlayerData=e,function(e){if(e&&e.NowPlayingItem){var t=e.NowPlayingItem;t.ImageTags&&t.ImageTags.Primary||t.PrimaryImageTag&&(t.ImageTags=t.ImageTags||{},t.ImageTags.Primary=t.PrimaryImageTag),t.BackdropImageTag&&t.BackdropItemId===t.Id&&(t.BackdropImageTags=[t.BackdropImageTag]),t.BackdropImageTag&&t.BackdropItemId!==t.Id&&(t.ParentBackdropImageTags=[t.BackdropImageTag],t.ParentBackdropItemId=t.BackdropItemId)}}(e),console.debug(JSON.stringify(e)),t&&o.Events.trigger(this,"statechange",[e]),e}},{key:"playWithCommand",value:function(e,t){if(!e.items){var a=y.Z.getApiClient(e.serverId),s=this;return a.getItem(a.getCurrentUserId(),e.ids[0]).then((function(a){return e.items=[a],s.playWithCommand(e,t)}))}return e.items.length>1&&e&&e.ids&&e.items.sort((function(t,a){return e.ids.indexOf(t.Id)-e.ids.indexOf(a.Id)})),this._castPlayer.loadMedia(e,t)}},{key:"seek",value:function(e){e=parseInt(e),e/=1e7,this._castPlayer.sendMessage({options:{position:e},command:"Seek"})}},{key:"setAudioStreamIndex",value:function(e){this._castPlayer.sendMessage({options:{index:e},command:"SetAudioStreamIndex"})}},{key:"setSubtitleStreamIndex",value:function(e){this._castPlayer.sendMessage({options:{index:e},command:"SetSubtitleStreamIndex"})}},{key:"setMaxStreamingBitrate",value:function(e){this._castPlayer.sendMessage({options:e,command:"SetMaxStreamingBitrate"})}},{key:"isFullscreen",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).IsFullscreen}},{key:"nextTrack",value:function(){this._castPlayer.sendMessage({options:{},command:"NextTrack"})}},{key:"previousTrack",value:function(){this._castPlayer.sendMessage({options:{},command:"PreviousTrack"})}},{key:"volumeDown",value:function(){var e=this._castPlayer.session.receiver.volume.level;null==e&&(e=.5),e-=.05,e=Math.max(e,0),this._castPlayer.session.setReceiverVolumeLevel(e)}},{key:"endSession",value:function(){var e=this;this.stop().then((function(){setTimeout((function(){e._castPlayer.stopApp()}),1e3)}))}},{key:"volumeUp",value:function(){var e=this._castPlayer.session.receiver.volume.level;null==e&&(e=.5),e+=.05,e=Math.min(e,1),this._castPlayer.session.setReceiverVolumeLevel(e)}},{key:"setVolume",value:function(e){e=Math.min(e,100),e=Math.max(e,0),e/=100,this._castPlayer.session.setReceiverVolumeLevel(e)}},{key:"unpause",value:function(){this._castPlayer.sendMessage({options:{},command:"Unpause"})}},{key:"playPause",value:function(){this._castPlayer.sendMessage({options:{},command:"PlayPause"})}},{key:"pause",value:function(){this._castPlayer.sendMessage({options:{},command:"Pause"})}},{key:"stop",value:function(){return this._castPlayer.sendMessage({options:{},command:"Stop"})}},{key:"displayContent",value:function(e){this._castPlayer.sendMessage({options:e,command:"DisplayContent"})}},{key:"setMute",value:function(e){var t=this._castPlayer;e?t.sendMessage({options:{},command:"Mute"}):t.sendMessage({options:{},command:"Unmute"})}},{key:"getRepeatMode",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).RepeatMode}},{key:"getQueueShuffleMode",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).ShuffleMode}},{key:"playTrailers",value:function(e){this._castPlayer.sendMessage({options:{ItemId:e.Id,ServerId:e.ServerId},command:"PlayTrailers"})}},{key:"setRepeatMode",value:function(e){this._castPlayer.sendMessage({options:{RepeatMode:e},command:"SetRepeatMode"})}},{key:"setQueueShuffleMode",value:function(e){this._castPlayer.sendMessage({options:{ShuffleMode:e},command:"SetShuffleQueue"})}},{key:"toggleMute",value:function(){this._castPlayer.sendMessage({options:{},command:"ToggleMute"})}},{key:"audioTracks",value:function(){var e=this.lastPlayerData||{};return((e=e.NowPlayingItem||{}).MediaStreams||[]).filter((function(e){return"Audio"===e.Type}))}},{key:"getAudioStreamIndex",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).AudioStreamIndex}},{key:"subtitleTracks",value:function(){var e=this.lastPlayerData||{};return((e=e.NowPlayingItem||{}).MediaStreams||[]).filter((function(e){return"Subtitle"===e.Type}))}},{key:"getSubtitleStreamIndex",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).SubtitleStreamIndex}},{key:"getMaxStreamingBitrate",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).MaxStreamingBitrate}},{key:"getVolume",value:function(){var e=this.lastPlayerData||{};return null==(e=e.PlayState||{}).VolumeLevel?100:e.VolumeLevel}},{key:"isPlaying",value:function(e){var t=this.lastPlayerData||{};return null!=t.NowPlayingItem&&(t.NowPlayingItem.MediaType===e||!e)}},{key:"isPlayingVideo",value:function(){var e=this.lastPlayerData||{};return"Video"===(e=e.NowPlayingItem||{}).MediaType}},{key:"isPlayingAudio",value:function(){var e=this.lastPlayerData||{};return"Audio"===(e=e.NowPlayingItem||{}).MediaType}},{key:"currentTime",value:function(e){if(null!=e)return this.seek(1e4*e);var t=this.lastPlayerData||{};return(t=t.PlayState||{}).PositionTicks/1e4}},{key:"duration",value:function(){var e=this.lastPlayerData||{};return(e=e.NowPlayingItem||{}).RunTimeTicks}},{key:"getBufferedRanges",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).BufferedRanges||[]}},{key:"paused",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).IsPaused}},{key:"isMuted",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).IsMuted}},{key:"shuffle",value:function(e){var t=y.Z.getApiClient(e.ServerId),a=t.getCurrentUserId(),s=this;t.getItem(a,e.Id).then((function(e){s.playWithCommand({items:[e]},"Shuffle")}))}},{key:"instantMix",value:function(e){var t=y.Z.getApiClient(e.ServerId),a=t.getCurrentUserId(),s=this;t.getItem(a,e.Id).then((function(e){s.playWithCommand({items:[e]},"InstantMix")}))}},{key:"canPlayMediaType",value:function(e){return"audio"===(e=(e||"").toLowerCase())||"video"===e}},{key:"canQueueMediaType",value:function(e){return this.canPlayMediaType(e)}},{key:"queue",value:function(e){this.playWithCommand(e,"PlayLast")}},{key:"queueNext",value:function(e){this.playWithCommand(e,"PlayNext")}},{key:"play",value:function(e){if(e.items)return this.playWithCommand(e,"PlayNow");if(!e.serverId)throw new Error("serverId required!");var t,a,s,n=this;return(t=y.Z.getApiClient(e.serverId),a={Ids:e.ids.join(",")},s=t.getCurrentUserId(),a.Ids&&1===a.Ids.split(",").length?t.getItem(s,a.Ids.split(",")).then((function(e){return{Items:[e],TotalRecordCount:1}})):(a.Limit=a.Limit||100,a.ExcludeLocationTypes="Virtual",a.EnableTotalRecordCount=!1,t.getItems(s,a))).then((function(t){return e.items=t.Items,n.playWithCommand(e,"PlayNow")}))}},{key:"toggleFullscreen",value:function(){}},{key:"beginPlayerUpdates",value:function(){}},{key:"endPlayerUpdates",value:function(){}},{key:"getPlaylist",value:function(){return Promise.resolve([])}},{key:"getCurrentPlaylistItemId",value:function(){}},{key:"setCurrentPlaylistItem",value:function(){return Promise.resolve()}},{key:"removeFromPlaylist",value:function(){return Promise.resolve()}},{key:"getPlayerState",value:function(){return this.getPlayerStateInternal()||{}}}]),e}()}}]);