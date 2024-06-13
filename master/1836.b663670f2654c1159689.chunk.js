"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1836],{4838:function(e,a,t){a.A={getDisplayPlayMethod:function(e){var a,t;return e.NowPlayingItem?null!==(a=e.TranscodingInfo)&&void 0!==a&&a.IsVideoDirect&&e.TranscodingInfo.IsAudioDirect?"Remux":null!==(t=e.TranscodingInfo)&&void 0!==t&&t.IsVideoDirect?"DirectStream":"Transcode"===e.PlayState.PlayMethod?"Transcode":"DirectStream"===e.PlayState.PlayMethod||"DirectPlay"===e.PlayState.PlayMethod?"DirectPlay":void 0:null}}},1836:function(e,a,t){t.r(a),t(29305),t(32733),t(84701),t(81678),t(14382),t(44962),t(86584),t(4754),t(94),t(9698),t(36947),t(78557),t(67593),t(90076),t(83994),t(82367),t(15453);var n=t(9482),l=t(62014),r=t(46782),i=t(80669),s=t(4838),o=t(38829),u=t(66176),c=t(86191);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function y(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function p(e){var a=function(e,a){if("object"!=d(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(a)?a:a+""}function f(){this.enabled(!1)}function v(e){return n.Ay.translate(""+e)}function b(e,a,t){var l,r,i,s,o,u=[];return e.TranscodingInfo&&(l=e.TranscodingInfo.VideoCodec,r=e.TranscodingInfo.AudioCodec,i=e.TranscodingInfo.Bitrate,s=e.TranscodingInfo.AudioChannels),l&&u.push({label:n.Ay.translate("LabelVideoCodec"),value:e.TranscodingInfo.IsVideoDirect?l.toUpperCase()+" (direct)":l.toUpperCase()}),r&&u.push({label:n.Ay.translate("LabelAudioCodec"),value:e.TranscodingInfo.IsAudioDirect?r.toUpperCase()+" (direct)":r.toUpperCase()}),"Transcode"===t&&(s&&u.push({label:n.Ay.translate("LabelAudioChannels"),value:s}),i&&u.push({label:n.Ay.translate("LabelBitrate"),value:h(i)}),e.TranscodingInfo.CompletionPercentage&&u.push({label:n.Ay.translate("LabelTranscodingProgress"),value:e.TranscodingInfo.CompletionPercentage.toFixed(1)+"%"}),e.TranscodingInfo.Framerate&&u.push({label:n.Ay.translate("LabelTranscodingFramerate"),value:e.TranscodingInfo.Framerate+" fps"}),null!==(o=e.TranscodingInfo.TranscodeReasons)&&void 0!==o&&o.length&&u.push({label:n.Ay.translate("LabelReasonForTranscoding"),value:e.TranscodingInfo.TranscodeReasons.map(v).join("<br/>")}),e.TranscodingInfo.HardwareAccelerationType&&u.push({label:n.Ay.translate("LabelHardwareEncoding"),value:e.TranscodingInfo.HardwareAccelerationType})),u}function h(e){return e>1e6?(e/1e6).toFixed(1)+" Mbps":Math.floor(e/1e3)+" kbps"}function m(e,a){var t,l=[],r=i.f.currentMediaSource(a)||{},s=r.Bitrate,o=r.Size;r.Container&&l.push({label:n.Ay.translate("LabelProfileContainer"),value:r.Container}),o&&l.push({label:n.Ay.translate("LabelSize"),value:(t=o,t>=1073741824?parseFloat((t/1073741824).toFixed(1))+" GiB":t>=1048576?parseFloat((t/1048576).toFixed(1))+" MiB":Math.floor(t/1024)+" KiB")}),s&&l.push({label:n.Ay.translate("LabelBitrate"),value:h(s)});var u=(r.MediaStreams||[]).filter((function(e){return"Video"===e.Type}))[0]||{},c=u.Codec,d=i.f.getAudioStreamIndex(a),y=i.f.audioTracks(a).filter((function(e){return"Audio"===e.Type&&e.Index===d}))[0]||{},p=y.Codec,f=y.Channels,v=[];c&&v.push(c.toUpperCase()),u.Profile&&v.push(u.Profile),v.length&&l.push({label:n.Ay.translate("LabelVideoCodec"),value:v.join(" ")}),u.BitRate&&l.push({label:n.Ay.translate("LabelVideoBitrate"),value:h(u.BitRate)}),u.VideoRangeType&&l.push({label:n.Ay.translate("LabelVideoRangeType"),value:u.VideoDoViTitle||u.VideoRangeType});var b=[];return p&&b.push(p.toUpperCase()),y.Profile&&b.push(y.Profile),b.length&&l.push({label:n.Ay.translate("LabelAudioCodec"),value:b.join(" ")}),y.BitRate&&l.push({label:n.Ay.translate("LabelAudioBitrate"),value:h(y.BitRate)}),f&&l.push({label:n.Ay.translate("LabelAudioChannels"),value:f}),y.SampleRate&&l.push({label:n.Ay.translate("LabelAudioSampleRate"),value:y.SampleRate+" Hz"}),y.BitDepth&&l.push({label:n.Ay.translate("LabelAudioBitDepth"),value:y.BitDepth}),l}function g(e,a){var t=function(){!function(e,a){var t=(new Date).getTime();t-(e.lastRender||0)<700||(e.lastRender=t,function(e,a){var t=a.getStats?a.getStats():Promise.resolve({}),l=function(e,a){if((new Date).getTime()-(e.lastSessionTime||0)<1e4)return Promise.resolve(e.lastSession);var t=c.A.getApiClient(i.f.currentItem(a).ServerId);return t.getSessions({deviceId:t.deviceId()}).then((function(a){return e.lastSession=a[0]||{},e.lastSessionTime=(new Date).getTime(),Promise.resolve(e.lastSession)}),(function(){return Promise.resolve({})}))}(e,a);return Promise.all([t,l]).then((function(e){var t=e[0].categories||[],l=e[1],r=s.A.getDisplayPlayMethod(l),i=r;"DirectPlay"===r?i=n.Ay.translate("DirectPlaying"):"Remux"===r?i=n.Ay.translate("Remuxing"):"DirectStream"===r?i=n.Ay.translate("DirectStreaming"):"Transcode"===r&&(i=n.Ay.translate("Transcoding"));var c={stats:[],name:n.Ay.translate("LabelPlaybackInfo")};c.stats.unshift({label:n.Ay.translate("LabelPlayMethod"),value:i}),c.stats.unshift({label:n.Ay.translate("LabelPlayer"),value:a.name});var d=[];d.push(c);for(var y=0,p=t.length;y<p;y++){var f=t[y];"audio"===f.type?f.name=n.Ay.translate("LabelAudioInfo"):"video"===f.type&&(f.name=n.Ay.translate("LabelVideoInfo")),d.push(f)}var v=n.Ay.translate("LabelTranscodingInfo");"Remux"===r?v=n.Ay.translate("LabelRemuxingInfo"):"DirectStream"===r&&(v=n.Ay.translate("LabelDirectStreamingInfo")),l.TranscodingInfo&&d.push({stats:b(l,0,r),name:v}),d.push({stats:m(0,a),name:n.Ay.translate("LabelOriginalMediaInfo")});var h=function(){var e,a=null===(e=o.X.firstOfType(u.Q.SyncPlay))||void 0===e?void 0:e.instance;if(null==a||!a.Manager.isSyncPlayEnabled())return[];var t=[],l=a.Manager.getStats();return t.push({label:n.Ay.translate("LabelSyncPlayTimeSyncDevice"),value:l.TimeSyncDevice}),t.push({label:n.Ay.translate("LabelSyncPlayTimeSyncOffset"),value:l.TimeSyncOffset+" "+n.Ay.translate("MillisecondsUnit")}),t.push({label:n.Ay.translate("LabelSyncPlayPlaybackDiff"),value:l.PlaybackDiff+" "+n.Ay.translate("MillisecondsUnit")}),t.push({label:n.Ay.translate("LabelSyncPlaySyncMethod"),value:l.SyncMethod}),t}();return h.length>0&&d.push({stats:h,name:n.Ay.translate("LabelSyncPlayInfo")}),Promise.resolve(d)}))}(e,a).then((function(a){var t=e.element;t&&function(e,a){e.querySelector(".playerStats-stats").innerHTML=a.map((function(e){var a="",t=e.stats;t.length&&e.name&&(a+='<div class="playerStats-stat playerStats-stat-header">',a+='<div class="playerStats-stat-label">',a+=e.name,a+="</div>",a+='<div class="playerStats-stat-value">',a+=e.subText||"",a+="</div>",a+="</div>");for(var n=0,l=t.length;n<l;n++){a+='<div class="playerStats-stat">';var r=t[n];a+='<div class="playerStats-stat-label">',a+=r.label,a+="</div>",a+='<div class="playerStats-stat-value">',a+=r.value,a+="</div>",a+="</div>"}return a})).join("")}(t,a)})))}(e,a)};e.onTimeUpdate=t,l.A.on(a,"timeupdate",t)}function A(e,a){var t=e.onTimeUpdate;t&&l.A.off(a,"timeupdate",t)}var S=function(){return e=function e(a){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=a,function(e){var a,t=document.createElement("div");t.classList.add("playerStats"),r.A.tv&&t.classList.add("playerStats-tv"),t.classList.add("hide"),a=r.A.tv?"":'<button type="button" is="paper-icon-button-light" class="playerStats-closeButton"><span class="material-icons close" aria-hidden="true"></span></button>';var n=r.A.tv?"playerStats-content playerStats-content-tv":"playerStats-content";t.innerHTML='<div class="'+n+'">'+a+'<div class="playerStats-stats"></div></div>',(a=t.querySelector(".playerStats-closeButton"))&&a.addEventListener("click",f.bind(e)),document.body.appendChild(t),e.element=t}(this),this.enabled(!0)},(a=[{key:"enabled",value:function(e){if(null==e)return this._enabled;var a=this.options;a&&(this._enabled=e,e?(this.element.classList.remove("hide"),g(this,a.player)):(this.element.classList.add("hide"),A(this,a.player)))}},{key:"toggle",value:function(){this.enabled(!this.enabled())}},{key:"destroy",value:function(){var e=this.options;e&&(this.options=null,A(this,e.player));var a=this.element;a&&(a.parentNode.removeChild(a),this.element=null)}}])&&y(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,a}();a.default=S}}]);