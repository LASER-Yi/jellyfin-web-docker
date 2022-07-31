"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2125],{6577:function(e,t,r){r.r(t),r(99785),r(5769),r(63238),r(61418),r(17460),r(14078),r(68581),r(52077),r(72482),r(27471);var n=r(47005),u=r(47518),i=r(6383),o=r(56705),a=r(55959);function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l={2:"YoutubeBadRequest",5:"YoutubePlaybackError",100:"YoutubeNotFound",101:"YoutubeDenied",150:"YoutubeDenied"};function c(){var e=this.currentYoutubePlayer,t=this.videoDialog;e&&t&&e.setSize(t.offsetWidth,t.offsetHeight)}function d(e){e.timeUpdateInterval&&clearInterval(e.timeUpdateInterval),e.timeUpdateInterval=null}function v(e){d(e);var t=e.resizeListener;t&&(window.removeEventListener("resize",t),window.removeEventListener("orientationChange",t),e.resizeListener=null);var r={src:e._currentSrc};n.Events.trigger(e,"stopped",[r]),e._currentSrc=null,e.currentYoutubePlayer&&e.currentYoutubePlayer.destroy(),e.currentYoutubePlayer=null}function f(e){e.target.playVideo()}function y(){n.Events.trigger(this,"timeupdate")}function h(e,t,r){e.started||(e.started=!0,r(),d(e),e.timeUpdateInterval=setInterval(y.bind(e),500),t.fullscreen?i.appRouter.showVideoOsd().then((function(){e.videoDialog.classList.remove("onTop")})):((0,a.G2)(a.q3.Backdrop),e.videoDialog.classList.remove("onTop")),o.ZP.hide())}var m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="Youtube Player",this.type="mediaplayer",this.id="youtubeplayer",this.priority=1}var t,i;return t=e,(i=[{key:"play",value:function(e){this.started=!1;var t=this;return function(e,t){return new Promise((function(n){var i=document.querySelector(".youtubePlayerContainer");i?(t.fullscreen&&document.body.classList.add("hide-scroll"),n(i.querySelector("#player"))):r.e(2911).then(r.bind(r,34641)).then((function(){o.ZP.show();var r=document.createElement("div");r.classList.add("youtubePlayerContainer"),t.fullscreen&&r.classList.add("onTop"),r.innerHTML='<div id="player"></div>';var i,a,s=r.querySelector("#player");document.body.insertBefore(r,document.body.firstChild),e.videoDialog=r,t.fullscreen&&document.body.classList.add("hide-scroll"),t.fullscreen&&r.animate&&!u.Z.slow?(i=r,1,a={duration:240,iterations:1},i.animate([{transform:"scale3d(.2, .2, .2)  ",opacity:".6",offset:0},{transform:"none",opacity:"1",offset:1}],a)).onfinish=function(){n(s)}:n(s)}))}))}(this,e).then((function(r){return function(e,t,r){return new Promise((function(t,u){e._currentSrc=r.url;var i=new URLSearchParams(r.url.split("?")[1]);if(window.onYouTubeIframeAPIReady=function(){e.currentYoutubePlayer=new YT.Player("player",{height:e.videoDialog.offsetHeight,width:e.videoDialog.offsetWidth,videoId:i.get("v"),events:{onReady:f,onStateChange:function(u){u.data===YT.PlayerState.PLAYING?h(e,r,t):u.data===YT.PlayerState.ENDED?v(e):u.data===YT.PlayerState.PAUSED&&n.Events.trigger(e,"pause")},onError:function(e){return u(l[e.data]||"ErrorDefault")}},playerVars:{controls:0,enablejsapi:1,modestbranding:1,rel:0,showinfo:0,fs:0,playsinline:1}});var o=e.resizeListener;o?(window.removeEventListener("resize",o),window.addEventListener("resize",o)):(o=e.resizeListener=c.bind(e),window.addEventListener("resize",o)),window.removeEventListener("orientationChange",o),window.addEventListener("orientationChange",o)},window.YT)window.onYouTubeIframeAPIReady();else{var o=document.createElement("script");o.src="https://www.youtube.com/iframe_api";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)}}))}(t,0,e)}))}},{key:"stop",value:function(e){return this._currentSrc&&(this.currentYoutubePlayer&&this.currentYoutubePlayer.stopVideo(),v(this),e&&this.destroy()),Promise.resolve()}},{key:"destroy",value:function(){(0,a.G2)(a.q3.None),document.body.classList.remove("hide-scroll");var e=this.videoDialog;e&&(this.videoDialog=null,e.parentNode.removeChild(e))}},{key:"canPlayMediaType",value:function(e){return"audio"===(e=(e||"").toLowerCase())||"video"===e}},{key:"canPlayItem",value:function(){return!1}},{key:"canPlayUrl",value:function(e){return-1!==e.toLowerCase().indexOf("youtube.com")}},{key:"getDeviceProfile",value:function(){return Promise.resolve({})}},{key:"currentSrc",value:function(){return this._currentSrc}},{key:"setSubtitleStreamIndex",value:function(){}},{key:"canSetAudioStreamIndex",value:function(){return!1}},{key:"setAudioStreamIndex",value:function(){}},{key:"currentTime",value:function(e){var t=this.currentYoutubePlayer;if(t)return null!=e?void t.seekTo(e/1e3,!0):1e3*t.getCurrentTime()}},{key:"duration",value:function(){var e=this.currentYoutubePlayer;return e?1e3*e.getDuration():null}},{key:"pause",value:function(){var e=this.currentYoutubePlayer;if(e){e.pauseVideo();var t=this;setTimeout((function(){n.Events.trigger(t,"pause")}),200)}}},{key:"unpause",value:function(){var e=this.currentYoutubePlayer;if(e){e.playVideo();var t=this;setTimeout((function(){n.Events.trigger(t,"unpause")}),200)}}},{key:"paused",value:function(){var e=this.currentYoutubePlayer;return!!e&&2===e.getPlayerState()}},{key:"volume",value:function(e){return null!=e?this.setVolume(e):this.getVolume()}},{key:"setVolume",value:function(e){var t=this.currentYoutubePlayer;t&&null!=e&&t.setVolume(e)}},{key:"getVolume",value:function(){var e=this.currentYoutubePlayer;if(e)return e.getVolume()}},{key:"setMute",value:function(e){var t=this.currentYoutubePlayer;e?t&&t.mute():t&&t.unMute()}},{key:"isMuted",value:function(){var e=this.currentYoutubePlayer;if(e)return e.isMuted()}}])&&s(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=m}}]);