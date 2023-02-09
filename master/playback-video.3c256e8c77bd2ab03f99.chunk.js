"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92016],{70350:function(e,t,n){n(23938),n(61013),n(76056),n(98010),n(63238);var i=n(65009),a=n.n(i),r=n(61693),s=n(94994),o=n(52050),c=n(21776),l=n(24102),u=(n(38228),n(60934));function d(e){var t,n,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d="",v=[],h="MusicAlbum"===e.Type||"MusicArtist"===e.MediaType||"Playlist"===e.Type||"Playlist"===e.MediaType||"MusicGenre"===e.MediaType;if(h?((i=e.SongCount||e.ChildCount)&&v.push(s.ZP.translate("TrackCount",i)),e.RunTimeTicks&&v.push(r.ZP.getDisplayDuration(e.RunTimeTicks))):"PhotoAlbum"!==e.Type&&"BoxSet"!==e.Type||(i=e.ChildCount)&&v.push(s.ZP.translate("ItemCount",i)),("Episode"===e.Type||"Photo"===e.MediaType)&&!1!==o.originalAirDate&&e.PremiereDate)try{n=r.ZP.parseISO8601Date(e.PremiereDate,"Episode"!==e.Type),t=r.ZP.toLocaleDateString(n),v.push(t)}catch(t){console.error("error parsing date:",e.PremiereDate)}if("SeriesTimer"===e.Type&&(e.RecordAnyTime?v.push(s.ZP.translate("Anytime")):v.push(r.ZP.getDisplayTime(e.StartDate)),e.RecordAnyChannel?v.push(s.ZP.translate("AllChannels")):v.push(e.ChannelName||s.ZP.translate("OneChannel"))),e.StartDate&&"Program"!==e.Type&&"SeriesTimer"!==e.Type&&"Timer"!==e.Type)try{n=r.ZP.parseISO8601Date(e.StartDate),t=r.ZP.toLocaleDateString(n),v.push(t),"Recording"!==e.Type&&(t=r.ZP.getDisplayTime(n),v.push(t))}catch(t){console.error("error parsing date:",e.StartDate)}if(!1!==o.year&&e.ProductionYear&&"Series"===e.Type)if("Continuing"===e.Status)v.push(s.ZP.translate("SeriesYearToPresent",r.ZP.toLocaleString(e.ProductionYear,{useGrouping:!1})));else if(e.ProductionYear){if(t=r.ZP.toLocaleString(e.ProductionYear,{useGrouping:!1}),e.EndDate)try{var y=r.ZP.toLocaleString(r.ZP.parseISO8601Date(e.EndDate).getFullYear(),{useGrouping:!1});y!==e.ProductionYear&&(t+="-".concat(y))}catch(t){console.error("error parsing date:",e.EndDate)}v.push(t)}if("Program"===e.Type||"Timer"===e.Type){var g=e;if("Timer"===e.Type&&(g=e.ProgramInfo),!1!==o.programIndicator&&(g.IsLive&&"true"===u.get("guide-indicator-live")?v.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem liveTvProgram">'.concat(s.ZP.translate("Live"),"</div>")}):g.IsPremiere&&"true"===u.get("guide-indicator-premiere")?v.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem premiereTvProgram">'.concat(s.ZP.translate("Premiere"),"</div>")}):g.IsSeries&&!g.IsRepeat&&"true"===u.get("guide-indicator-new")?v.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem newTvProgram">'.concat(s.ZP.translate("New"),"</div>")}):g.IsSeries&&g.IsRepeat&&"true"===u.get("guide-indicator-repeat")&&v.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem repeatTvProgram">'.concat(s.ZP.translate("Repeat"),"</div>")})),(g.IsSeries||g.EpisodeTitle)&&!1!==o.episodeTitle)(t=c.ZP.getDisplayName(g,{includeIndexNumber:o.episodeTitleIndexNumber}))&&v.push(a()(t));else if(g.IsMovie&&g.ProductionYear&&!1!==o.originalAirDate)v.push(g.ProductionYear);else if(g.PremiereDate&&!1!==o.originalAirDate)try{n=r.ZP.parseISO8601Date(g.PremiereDate),t=s.ZP.translate("OriginalAirDateValue",r.ZP.toLocaleDateString(n)),v.push(t)}catch(e){console.error("error parsing date:",g.PremiereDate)}else g.ProductionYear&&!1!==o.year&&v.push(g.ProductionYear)}if(!1!==o.year&&"Series"!==e.Type&&"Episode"!==e.Type&&"Person"!==e.Type&&"Photo"!==e.MediaType&&"Program"!==e.Type&&"Season"!==e.Type)if(e.ProductionYear)v.push(e.ProductionYear);else if(e.PremiereDate)try{t=r.ZP.toLocaleString(r.ZP.parseISO8601Date(e.PremiereDate).getFullYear(),{useGrouping:!1}),v.push(t)}catch(t){console.error("error parsing date:",e.PremiereDate)}if(e.RunTimeTicks&&"Series"!==e.Type&&"Program"!==e.Type&&"Timer"!==e.Type&&"Book"!==e.Type&&!h&&!1!==o.runtime&&("Audio"===e.Type?v.push(r.ZP.getDisplayRunningTime(e.RunTimeTicks)):v.push(r.ZP.getDisplayDuration(e.RunTimeTicks))),!1!==o.officialRating&&e.OfficialRating&&"Season"!==e.Type&&"Episode"!==e.Type&&v.push({text:e.OfficialRating,cssClass:"mediaInfoOfficialRating"}),e.Video3DFormat&&v.push("3D"),"Photo"===e.MediaType&&e.Width&&e.Height&&v.push("".concat(e.Width,"x").concat(e.Height)),!1!==o.container&&"Audio"===e.Type&&e.Container&&v.push(e.Container),d+=v.map((function(e){return p(e)})).join(""),!1!==o.starRating&&(d+=m(e)),e.HasSubtitles&&!1!==o.subtitles&&(d+='<div class="mediaInfoItem mediaInfoText closedCaptionMediaInfoText">CC</div>'),e.CriticRating&&!1!==o.criticRating&&(e.CriticRating>=60?d+='<div class="mediaInfoItem mediaInfoCriticRating mediaInfoCriticRatingFresh">'.concat(e.CriticRating,"</div>"):d+='<div class="mediaInfoItem mediaInfoCriticRating mediaInfoCriticRatingRotten">'.concat(e.CriticRating,"</div>")),!1!==o.endsAt){var b=f(e);b&&(d+=p(b,"endsAt"))}return d+l.ZP.getMissingIndicator(e)}function f(e){if("Video"===e.MediaType&&e.RunTimeTicks&&!e.StartDate){var t=(new Date).getTime()+e.RunTimeTicks/1e4;t=new Date(t);var n=r.ZP.getDisplayTime(t);return s.ZP.translate("EndsAtValue",n)}return null}function p(e,t){t=t?"".concat(t," mediaInfoItem"):"mediaInfoItem";var n=e;if("string"!=typeof e&&"number"!=typeof e){if(e.html)return e.html;n=e.text,t+=" ".concat(e.cssClass)}return'<div class="'.concat(t,'">').concat(n,"</div>")}function m(e){var t="";return e.CommunityRating&&(t+='<div class="starRatingContainer mediaInfoItem">',t+='<span class="material-icons starIcon star" aria-hidden="true"></span>',t+=e.CommunityRating.toFixed(1),t+="</div>"),t}function v(e,t,n){if(!1!==n.endsAt){var i=e.querySelector(".endsAt");i&&function(e,t){var n=setInterval((function(){document.body.contains(e)?e.innerHTML=f(t):clearInterval(n)}),6e4)}(i,t)}var a=e.querySelector(".lnkChannel");a&&a.addEventListener("click",h)}function h(e){var t=this.getAttribute("data-id"),n=this.getAttribute("data-serverid");return o.appRouter.showItem(t,n),e.preventDefault(),!1}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return void 0===t.interactive&&(t.interactive=!1),d(e,t)}function g(e,t){return null==(t=t||{}).interactive&&(t.interactive=!1),"Program"===e.Type?function(e,t){var n,i,s=[];if(e.StartDate&&!1!==t.programTime)try{n="",i=r.ZP.parseISO8601Date(e.StartDate),!1!==t.startDate&&(n+=r.ZP.toLocaleDateString(i,{weekday:"short",month:"short",day:"numeric"})),n+=" ".concat(r.ZP.getDisplayTime(i)),e.EndDate&&(i=r.ZP.parseISO8601Date(e.EndDate),n+=" - ".concat(r.ZP.getDisplayTime(i))),s.push(n)}catch(t){console.error("error parsing date:",e.StartDate)}if(e.ChannelNumber&&s.push("CH ".concat(e.ChannelNumber)),e.ChannelName&&(t.interactive&&e.ChannelId?s.push({html:'<a is="emby-linkbutton" class="button-flat mediaInfoItem" href="'.concat(o.appRouter.getRouteUrl({ServerId:e.ServerId,Type:"TvChannel",Name:e.ChannelName,Id:e.ChannelId}),'">').concat(a()(e.ChannelName),"</a>")}):s.push(a()(e.ChannelName))),!1!==t.timerIndicator){var c=function(e){var t;if("SeriesTimer"===e.Type)return'<span class="material-icons mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon fiber_smart_record" aria-hidden="true"></span>';if(e.TimerId||e.SeriesTimerId)t=e.Status||"Cancelled";else{if("Timer"!==e.Type)return"";t=e.Status}return e.SeriesTimerId?"Cancelled"!==t?'<span class="material-icons mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon fiber_smart_record" aria-hidden="true"></span>':'<span class="material-icons mediaInfoItem mediaInfoIconItem fiber_smart_record" aria-hidden="true"></span>':'<span class="material-icons mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon fiber_manual_record" aria-hidden="true"></span>'}(e);c&&s.push({html:c})}return""+s.map((function(e){return p(e)})).join("")}(e,t):""}function b(e){var t=e.Width,n=e.Height;if(t&&n){if(t>=3800||n>=2e3)return"4K";if(t>=2500||n>=1400)return e.IsInterlaced?"1440i":"1440p";if(t>=1800||n>=1e3)return e.IsInterlaced?"1080i":"1080p";if(t>=1200||n>=700)return e.IsInterlaced?"720i":"720p";if(t>=700||n>=400)return e.IsInterlaced?"480i":"480p"}return null}t.ZP={getMediaInfoHtml:y,getEndsAt:f,getEndsAtFromPosition:function(e,t,n,i){var a=(new Date).getTime()+1/n*((e-(t||0))/1e4);a=new Date(a);var o=r.ZP.getDisplayTime(a);return!1===i?o:s.ZP.translate("EndsAtValue",o)},getPrimaryMediaInfoHtml:y,getSecondaryMediaInfoHtml:g,fillPrimaryMediaInfo:function(e,t,n){var i=y(t,n);e.innerHTML=i,v(e,t,n)},fillSecondaryMediaInfo:function(e,t,n){var i=g(t,n);e.innerHTML=i,v(e,t,n)},getMediaInfoStats:function(e){var t=[],n=(((e.MediaSources||[])[0]||{}).MediaStreams||[]).filter((function(e){return"Video"===e.Type}))[0]||{},i=function(e){if(!e.MediaSources)return null;var t=e.MediaSources[0];return t?(t.MediaStreams||[]).filter((function(e){return"Audio"===e.Type&&(e.Index===t.DefaultAudioStreamIndex||null==t.DefaultAudioStreamIndex)}))[0]:null}(e)||{};"Dvd"===e.VideoType&&t.push({type:"mediainfo",text:"Dvd"}),"BluRay"===e.VideoType&&t.push({type:"mediainfo",text:"BluRay"});var a=b(n);a&&t.push({type:"mediainfo",text:a}),n.Codec&&t.push({type:"mediainfo",text:n.Codec});var o,l=i.Channels;8===l?o="7.1":7===l?o="6.1":6===l?o="5.1":2===l&&(o="2.0"),o&&t.push({type:"mediainfo",text:o});var u=(i.Codec||"").toLowerCase();if("dca"!==u&&"dts"!==u||!i.Profile?i.Codec&&t.push({type:"mediainfo",text:i.Codec}):t.push({type:"mediainfo",text:i.Profile}),e.DateCreated&&c.ZP.enableDateAddedDisplay(e)){var d=r.ZP.parseISO8601Date(e.DateCreated);t.push({type:"added",text:s.ZP.translate("AddedOnValue","".concat(r.ZP.toLocaleDateString(d)," ").concat(r.ZP.getDisplayTime(d)))})}return t},getResolutionText:b}},78042:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(20266),n(52077),n(911),n(23938),n(27471),n(61370),n(61013),n(32081),n(43512),n(55849);var i,a,r,s,o,c=n(65009),l=n.n(c),u=n(48957),d=n(17031),f=n(57366),p=n(72365),m=n(58517),v=n(21844),h=n(61693),y=n(21776),g=n(70350),b=n(34643),P=n(81643),T=n(94994),S=n(84881),I=n(30325),L=n(60934),k=n(84280),O=(n(42855),n(61414),n(18613)),Z=n(92581);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function C(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,a=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t);if("object"!==w(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key,"string"),"symbol"===w(a)?a:String(a)),i)}var a}function D(e){var t=document.createElement("div");document.body.appendChild(t),t.innerHTML='<div class="subtitleSync"> <div class="subtitleSyncContainer"> <button type="button" is="paper-icon-button-light" class="subtitleSync-closeButton"><span class="material-icons close" aria-hidden="true"></span></button> <div class="subtitleSyncTextField" contenteditable="true" spellcheck="false">0s</div> <div class="sliderContainer subtitleSyncSliderContainer"> <input is="emby-slider" type="range" step=".1" min="0" max="100" value="50" class="subtitleSyncSlider" data-slider-keep-progress="true"/> </div> </div> </div> ',a=t.querySelector(".subtitleSyncSlider"),r=t.querySelector(".subtitleSyncTextField"),s=t.querySelector(".subtitleSync-closeButton"),o=t.querySelector(".subtitleSyncContainer"),I.Z.tv&&(a.classList.add("focusable"),setTimeout((function(){a.enableKeyboardDragging()}),0)),o.classList.add("hide"),r.updateOffset=function(e){this.textContent=e+"s"},r.addEventListener("click",(function(){this.hasFocus=!0})),r.addEventListener("keydown",(function(e){if("Enter"===e.key){var t=/[-+]?\d+\.?\d*/g.exec(this.textContent);t?(t=t[0],t=parseFloat(t),t=Math.min(30,Math.max(-30,t)),this.textContent=t+"s",u.O.setSubtitleOffset(t,i),a.updateOffset((n=t/30,n*=50,n+=50,Math.min(100,Math.max(0,n.toFixed(1)))))):this.textContent=(u.O.getPlayerSubtitleOffset(i)||0)+"s",this.hasFocus=!1,e.preventDefault()}else this.hasFocus=!0,null===e.key.match(/[+-\d.s]/)&&e.preventDefault();var n;e.stopPropagation()})),r.blur=function(){!this.hasFocus&&this.prototype&&this.prototype.blur()},a.updateOffset=function(e){this.value=void 0===e?50:e},a.addEventListener("change",(function(){u.O.setSubtitleOffset(E(this.value),i),r.updateOffset(E(this.value))})),a.getBubbleHtml=function(e){var t=E(e);return'<h1 class="sliderBubbleText">'+(t>0?"+":"")+parseFloat(t)+"s</h1>"},s.addEventListener("click",(function(){u.O.disableShowingSubtitleOffset(i),x.prototype.toggle("forceToHide")})),e.element=t}function E(e){var t=(e-50)/50;return(t*=30).toFixed(1)}n(1203),n(76056),n(95623),n(19068),n(87211),n(25901),n(92189),n(95163),n(99785),n(91047);var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=t,D(this)}var t,n;return t=e,(n=[{key:"destroy",value:function(){e.prototype.toggle("forceToHide"),i&&(u.O.disableShowingSubtitleOffset(i),u.O.setSubtitleOffset(0,i));var t=this.element;t&&(t.parentNode.removeChild(t),this.element=null)}},{key:"toggle",value:function(e){if(!e||["hide","forceToHide"].includes(e)){if(i&&u.O.supportSubtitleOffset(i)){if(e){if("hide"===e&&r.hasFocus)return}else if(u.O.isShowingSubtitleOffsetEnabled(i)&&u.O.canHandleOffsetOnCurrentSubtitle(i))return u.O.getPlayerSubtitleOffset(i)||r.hasFocus||(a.value="50",r.textContent="0s",u.O.setSubtitleOffset(0,i)),void o.classList.remove("hide");o.classList.add("hide")}}else console.warn("SubtitleSync.toggle called with invalid action",e)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),R=x,q=n(52050),M=n(71487),A=n(57084);function F(){return document.querySelector(".dialogContainer .dialog.opened")}function H(e){function t(t){if(!t||"Program"!==t.Type)return x&&(x.destroy(),x=null),void e.querySelector(".btnRecord").classList.add("hide");O.Z.getApiClient(t.ServerId).getCurrentUser().then((function(i){i.Policy.EnableLiveTvManagement&&n.e(3679).then(n.bind(n,3679)).then((function(n){var i=n.default;x?x.refreshItem(t):(x=new i({item:t,button:e.querySelector(".btnRecord")}),e.querySelector(".btnRecord").classList.remove("hide"))}))}))}function i(n){var i=n.originalItem;E=i;var a=n.displayItem||i;t(a);var s=a.SeriesName||a.Album;(a.EpisodeTitle||a.IsSeries)&&(s=a.Name),function(e,t){var n=y.ZP.getDisplayName(e,{includeParentInfo:"Program"!==e.Type,includeIndexNumber:"Program"!==e.Type});n&&t&&(n="".concat(t," - ").concat(n)),n||(n=t||"");var i=n;if(e.PremiereDate)try{var a=h.ZP.toLocaleString(h.ZP.parseISO8601Date(e.PremiereDate).getFullYear(),{useGrouping:!1});i+=" (".concat(a,")")}catch(e){console.error(e)}M.Z.setTitle(i);var r=t||(e?e.Name:null);r&&(document.title=r)}(a,s);var o=e.querySelector(".osdSecondaryMediaInfo"),c=g.ZP.getSecondaryMediaInfoHtml(a,{startDate:!1,programTime:!1});o.innerHTML=c,c?o.classList.remove("hide"):o.classList.add("hide"),H?(r(Ye,a.StartDate),r(Ke,a.EndDate),Ye.classList.remove("hide"),Ke.classList.remove("hide"),Me=a.StartDate?h.ZP.parseISO8601Date(a.StartDate).getTime():0,Ae=a.EndDate?h.ZP.parseISO8601Date(a.EndDate).getTime():0):(Ye.classList.add("hide"),Ke.classList.add("hide"),Ye.innerHTML="",Ke.innerHTML="",Me=0,Ae=0)}function a(e,t){return t?h.ZP.toLocaleTimeString(e,{hour:"numeric",minute:"2-digit",second:"2-digit"}).toLowerCase().replace("am","").replace("pm","").trim():h.ZP.getDisplayTime(e).toLowerCase().replace("am","").replace("pm","").trim()}function r(e,t){var n;t&&(n=a(t=h.ZP.parseISO8601Date(t))),e.innerHTML=n||""}var s,o,c,w,C,D,E,x,H,N,B,V,_,Y=!1;function K(){Xe.classList.remove("osdHeader-hidden"),function(){if(!N){var e=ze;N="osd",W(e),e.classList.remove("hide"),e.classList.remove("videoOsdBottom-hidden"),I.Z.mobile||setTimeout((function(){b.Z.focus(e.querySelector(".btnPause"))}),50),Te()}}(),X()}function U(){Xe.classList.add("osdHeader-hidden"),function(){if("osd"===N){var e=ze;W(e),e.classList.add("videoOsdBottom-hidden"),p.ZP.addEventListener(e,je,j,{once:!0}),N=null,Te("hide"),document.activeElement&&document.activeElement.blur()}}(),v.ZP.hideCursor()}function G(){V&&(clearTimeout(V),V=null)}function W(e){p.ZP.removeEventListener(e,je,j,{once:!0})}function j(e){var t=e.target;t==ze&&(t.classList.add("hide"),p.ZP.removeEventListener(t,je,j,{once:!0}))}function X(){!N||Y||F()?G():(G(),V=setTimeout(U,3e3))}function z(e){if("mouse"===(e.pointerType||(I.Z.mobile?"touch":"mouse"))){var t=e.screenX||e.clientX||0,n=e.screenY||e.clientY||0,i=_;if(!i)return void(_={x:t,y:n});if(Math.abs(t-i.x)<10&&Math.abs(n-i.y)<10)return;i.x=t,i.y=n,K()}}function J(t){var n,i=c;switch(t.detail.command){case"left":"osd"===N?K():N||(t.preventDefault(),u.O.rewind(i));break;case"right":"osd"===N?K():N||(t.preventDefault(),u.O.fastForward(i));break;case"pageup":u.O.nextChapter(i);break;case"pagedown":u.O.previousChapter(i);break;case"up":case"down":case"select":case"menu":case"info":case"play":case"playpause":case"pause":case"fastforward":case"rewind":case"next":case"previous":K();break;case"record":(n=e.querySelector(".btnRecord")).classList.contains("hide")||n.click(),K();break;case"togglestats":be();break;case"back":"osd"!==N||F()||(U(),t.preventDefault())}}function Q(){var t,n;!c.forcedFullscreen||u.O.isFullscreen(c)?((n=(t=e.querySelector(".btnFullscreen")).querySelector(".material-icons")).classList.remove("fullscreen_exit","fullscreen"),u.O.isFullscreen(c)?(t.setAttribute("title",T.ZP.translate("ExitFullscreen")+" (f)"),n.classList.add("fullscreen_exit")):(t.setAttribute("title",T.ZP.translate("Fullscreen")+" (f)"),n.classList.add("fullscreen"))):q.appRouter.back()}function $(){le(u.O.getCurrentPlayer())}function ee(n,a){var r,s;a.NowPlayingItem&&(D=!0,function(n,a,r){var s=r.PlayState||{};pe(s.IsPaused);var o=u.O.getSupportedCommands(a);xe=o,he(a,s.IsMuted,s.VolumeLevel),Be&&!Be.dragging&&(Be.disabled=!s.CanSeek),We.disabled=!s.CanSeek,Ge.disabled=!s.CanSeek;var c=r.NowPlayingItem||{};Fe=s.PlaybackStartTimeTicks,ve(s.PositionTicks,c.RunTimeTicks,s.PlaybackStartTimeTicks,s.PlaybackRate,s.BufferedRanges||[]),function(n,a){var r,s=a.NowPlayingItem;if(E=s,!s)return t(null),M.Z.setTitle(""),He.disabled=!0,Be.disabled=!0,We.disabled=!0,Ge.disabled=!0,e.querySelector(".btnSubtitles").classList.add("hide"),e.querySelector(".btnAudio").classList.add("hide"),e.querySelector(".osdTitle").innerHTML="",void(e.querySelector(".osdMediaInfo").innerHTML="");H=function(e){return!("TvChannel"!==e.Type||!e.CurrentProgram)}(s),function(e){if("TvChannel"===e.Type){var t=O.Z.getApiClient(e.ServerId);return t.getItem(t.getCurrentUserId(),e.Id).then((function(e){return{originalItem:e,displayItem:e.CurrentProgram}}))}return Promise.resolve({originalItem:e})}(s).then(i),He.disabled=!1,Be.disabled=!1,We.disabled=!1,Ge.disabled=!1,u.O.subtitleTracks(n).length?(e.querySelector(".btnSubtitles").classList.remove("hide"),Te()):(e.querySelector(".btnSubtitles").classList.add("hide"),Te("forceToHide")),u.O.audioTracks(n).length>1?e.querySelector(".btnAudio").classList.remove("hide"):e.querySelector(".btnAudio").classList.add("hide"),(null===(r=E.Chapters)||void 0===r?void 0:r.length)>1?(e.querySelector(".btnPreviousChapter").classList.remove("hide"),e.querySelector(".btnNextChapter").classList.remove("hide")):(e.querySelector(".btnPreviousChapter").classList.add("hide"),e.querySelector(".btnNextChapter").classList.add("hide"))}(a,r);var l=r.MediaSource&&null==r.MediaSource.RunTimeTicks;Be.setIsClear(l),c.RunTimeTicks&&Be.setKeyboardSteps(1e6*L.skipBackLength()/c.RunTimeTicks,1e6*L.skipForwardLength()/c.RunTimeTicks),-1===o.indexOf("ToggleFullscreen")||a.isLocalPlayer&&I.Z.tv&&u.O.isFullscreen(a)?e.querySelector(".btnFullscreen").classList.add("hide"):e.querySelector(".btnFullscreen").classList.remove("hide"),-1===o.indexOf("PictureInPicture")?e.querySelector(".btnPip").classList.add("hide"):e.querySelector(".btnPip").classList.remove("hide"),-1===o.indexOf("AirPlay")?e.querySelector(".btnAirPlay").classList.add("hide"):e.querySelector(".btnAirPlay").classList.remove("hide"),Q()}(0,this,a),r=e.querySelector(".btnPreviousTrack"),s=e.querySelector(".btnNextTrack"),r.classList.remove("hide"),s.classList.remove("hide"),s.disabled=!1,r.disabled=!1,!0,e.removeEventListener("viewbeforehide",Ce),u.O.isPlayingVideo(c)&&e.addEventListener("viewbeforehide",Ce),function(e){var t=sessionStorage.getItem("playbackRateSpeed");null!==t&&e.setPlaybackRate(t)}(this))}function te(){D&&pe(this.paused())}function ne(){if(D){var e=this;he(e,e.isMuted(),e.getVolume())}}function ie(e,t){console.debug("nowplaying event: "+e.type),ee.call(this,e,t),ae()}function ae(){w=!1,C&&(C.destroy(),C=null)}function re(t,n){Re=null,ae(),console.debug("nowplaying event: "+t.type),"Video"!==n.NextMediaType&&(e.removeEventListener("viewbeforehide",Ce),q.appRouter.back())}function se(){var e=u.O.getPlayerState(this);ee.call(this,{type:"init"},e)}function oe(){document.querySelector(".osdMediaStatus").classList.remove("hide")}function ce(){document.querySelector(".osdMediaStatus").classList.add("hide")}function le(e){if(e===c||(ue(),c=e,e)){var t=u.O.getPlayerState(e);ee.call(e,{type:"init"},t),P.Z.on(e,"playbackstart",ie),P.Z.on(e,"playbackstop",re),P.Z.on(e,"volumechange",ne),P.Z.on(e,"pause",te),P.Z.on(e,"unpause",te),P.Z.on(e,"timeupdate",de),P.Z.on(e,"fullscreenchange",Q),P.Z.on(e,"mediastreamschange",se),P.Z.on(e,"beginFetch",oe),P.Z.on(e,"endFetch",ce),ae(),e.isFetching&&oe()}}function ue(){Pe(),Se(),ae();var e=c;e&&(P.Z.off(e,"playbackstart",ie),P.Z.off(e,"playbackstop",re),P.Z.off(e,"volumechange",ne),P.Z.off(e,"pause",te),P.Z.off(e,"unpause",te),P.Z.off(e,"timeupdate",de),P.Z.off(e,"fullscreenchange",Q),P.Z.off(e,"mediastreamschange",se),c=null)}function de(){if(D&&E){var t=(new Date).getTime();if(t-qe>=700){qe=t;var i=this;Re=u.O.duration(i);var a=1e4*u.O.currentTime(i);ve(a,Re,u.O.playbackStartTime(i),u.O.getPlaybackRate(i),u.O.getBufferedRanges(i));var r=E;!function(e,t){if("TvChannel"===t.Type){var n=t.CurrentProgram;if(n&&n.EndDate)try{var i=h.ZP.parseISO8601Date(n.EndDate);if((new Date).getTime()>=i.getTime()){console.debug("program info needs to be refreshed");var a=u.O.getPlayerState(e);ee.call(e,{type:"init"},a)}}catch(e){console.error("error parsing date: "+n.EndDate)}}}(i,r),function(t,i,a,r){if(r&&a&&!w&&!N&&"Episode"===i.Type&&L.enableNextVideoInfoOverlay()){var s=30;r>=3e10?s=40:r>=24e9&&(s=35),a>=r-1e7*s&&r>=6e9&&r-a>=2e8&&function(t){n.e(36542).then(n.bind(n,36542)).then((function(n){var i=n.default;N||C||(N="upnext",w=!0,u.O.nextItem(t).then((function(n){C=new i({parent:e.querySelector(".upNextContainer"),player:t,nextItem:n}),P.Z.on(C,"hide",fe)}),fe))}))}(t)}}(i,r,a,Re)}}}function fe(){"upnext"===N&&(N=null)}function pe(t){var n,i,a=e.querySelector(".btnPause"),r=a.querySelector(".material-icons");r.classList.remove("play_arrow","pause"),t?(n="play_arrow",i=T.ZP.translate("Play")):(n="pause",i=T.ZP.translate("ButtonPause")),r.classList.add(n),p.ZP.setElementTitle(a,i+" (k)",i)}function me(e,t,n){return(n-e)/t*100}function ve(e,t,n,i,a){if(H){if(Be&&!Be.dragging)if(Me&&Ae){var r=(n+(e||0))/1e4,s=Ae-Me;if(Be.value=me(Me,s,r),a.length){var o=me(Me,s,(n+(a[0].start||0))/1e4),c=me(Me,s,(n+(a[0].end||0))/1e4);Be.setBufferedRanges([{start:o,end:c}])}else Be.setBufferedRanges([])}else Be.value=0,Be.setBufferedRanges([]);Ve.innerHTML="",_e.innerHTML=""}else{if(Be&&!Be.dragging){if(t){var l=e/t;l*=100,Be.value=l}else Be.value=0;t&&null!=e&&Re&&!H&&E.RunTimeTicks&&"Recording"!==E.Type&&null!==i?Ue.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"+g.ZP.getEndsAtFromPosition(t,e,i,!0):Ue.innerHTML=""}if(Be&&Be.setBufferedRanges(a,t,e),e>=0?(ye(Ve,e),Ve.classList.remove("hide")):Ve.classList.add("hide"),L.enableVideoRemainingTime()){var u=t-e;u>=0?(ye(_e,u),_e.innerHTML="-"+_e.innerHTML,_e.classList.remove("hide")):Ve.classList.add("hide")}else ye(_e,t),_e.classList.remove("hide")}}function he(t,n,i){var a=xe,r=!0,s=!0;-1===a.indexOf("Mute")&&(r=!1),-1===a.indexOf("SetVolume")&&(s=!1),t.isLocalPlayer&&S.M.supports("physicalvolumecontrol")&&(r=!1,s=!1);var o=e.querySelector(".buttonMute"),c=o.querySelector(".material-icons");c.classList.remove("volume_off","volume_up"),n?(o.setAttribute("title",T.ZP.translate("Unmute")+" (m)"),c.classList.add("volume_off")):(o.setAttribute("title",T.ZP.translate("Mute")+" (m)"),c.classList.add("volume_up")),r?o.classList.remove("hide"):o.classList.add("hide"),He&&(s?Ne.classList.remove("hide"):Ne.classList.add("hide"),He.dragging||(He.value=i||0))}function ye(e,t,n){if(null!=t){var i=h.ZP.getDisplayRunningTime(t);n&&(i="&nbsp;/&nbsp;"+i),e.innerHTML=i}else e.innerHTML=""}function ge(e){if("stats"===e)be();else if("suboffset"===e){var t=c;t&&(u.O.enableShowingSubtitleOffset(t),Te())}}function be(){n.e(68074).then(n.bind(n,68074)).then((function(e){var t=e.default,n=c;n&&(B?B.toggle():B=new t({player:n}))}))}function Pe(){B&&(B.destroy(),B=null)}function Te(e){var t=c;De?De.toggle(e):t&&(De=new R(t))}function Se(){De&&(De.destroy(),De=null)}function Ie(e){if(!e.target.contains(s))return e.preventDefault(),e.stopPropagation(),!1}function Le(e){s=e.target;var t=k.ZP.getKeyName(e),n=e.ctrlKey||e.altKey||e.metaKey;if(32===e.keyCode)return"BUTTON"===e.target.tagName&&I.Z.tv||(u.O.playPause(c),e.preventDefault(),e.stopPropagation(),s=null),void K();if(I.Z.tv&&k.ZP.isNavigationKey(t))K();else switch(t){case"Enter":K();break;case"Escape":case"Back":"osd"!==N||F()||(U(),e.stopPropagation());break;case"k":u.O.playPause(c),K();break;case"ArrowUp":case"Up":u.O.volumeUp(c);break;case"ArrowDown":case"Down":u.O.volumeDown(c);break;case"l":case"ArrowRight":case"Right":u.O.fastForward(c),K();break;case"j":case"ArrowLeft":case"Left":u.O.rewind(c),K();break;case"f":e.ctrlKey||e.metaKey||(u.O.toggleFullscreen(c),K());break;case"m":u.O.toggleMute(c),K();break;case"p":case"P":e.shiftKey&&u.O.previousTrack(c);break;case"n":case"N":e.shiftKey&&u.O.nextTrack(c);break;case"NavigationLeft":case"GamepadDPadLeft":case"GamepadLeftThumbstickLeft":document.hasFocus()&&(u.O.rewind(c),K());break;case"NavigationRight":case"GamepadDPadRight":case"GamepadLeftThumbstickRight":document.hasFocus()&&(u.O.fastForward(c),K());break;case"Home":u.O.seekPercent(0,c);break;case"End":u.O.seekPercent(100,c);break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":if(!n){var i=10*parseInt(t,10);u.O.seekPercent(i,c)}break;case">":u.O.increasePlaybackRate(c);break;case"<":u.O.decreasePlaybackRate(c);break;case"PageUp":u.O.nextChapter(c);break;case"PageDown":u.O.previousChapter(c)}}function ke(){X()}function Oe(e){s=e.target,Y=!0,X()}function Ze(){Y=!1,X()}function we(){Y=!1,X()}function Ce(){if(u.O.isPlayingVideo()){Z.Z.disableFullscreen(),clearTimeout(o);var t=c;e.removeEventListener("viewbeforehide",Ce),ue(),u.O.stop(t)}}Z.Z.enableFullscreen();var De,Ee=this,xe=[],Re=0,qe=0,Me=0,Ae=0,Fe=0,He=e.querySelector(".osdVolumeSlider"),Ne=e.querySelector(".osdVolumeSliderContainer"),Be=e.querySelector(".osdPositionSlider"),Ve=e.querySelector(".osdPositionText"),_e=e.querySelector(".osdDurationText"),Ye=e.querySelector(".startTimeText"),Ke=e.querySelector(".endTimeText"),Ue=e.querySelector(".endsAtText"),Ge=e.querySelector(".btnRewind"),We=e.querySelector(".btnFastForward"),je=p.ZP.whichTransitionEvent(),Xe=document.querySelector(".skinHeader"),ze=document.querySelector(".videoOsdBottom-maincontrols");Be.enableKeyboardDragging(),He.enableKeyboardDragging(),I.Z.tv&&Be.classList.add("focusable"),_e.addEventListener("click",(function(){L.enableVideoRemainingTime(!L.enableVideoRemainingTime());var e=u.O.getPlayerState(c),t=e.PlayState,n=e.NowPlayingItem;ve(t.PositionTicks,n.RunTimeTicks,t.PlaybackStartTimeTicks,t.PlaybackRate,t.BufferedRanges||[])})),e.addEventListener("viewbeforeshow",(function(){Xe.classList.add("osdHeader"),(0,A.G2)(A.q3.Full)})),e.addEventListener("viewshow",(function(){try{P.Z.on(u.O,"playerchange",$),le(u.O.getCurrentPlayer()),p.ZP.addEventListener(document,window.PointerEvent?"pointermove":"mousemove",z,{passive:!0}),K(),m.default.on(window,J),document.addEventListener("keydown",Le),p.ZP.addEventListener(document,"keydown",ke,{capture:!0,passive:!0}),p.ZP.addEventListener(window,window.PointerEvent?"pointerdown":"mousedown",Oe,{capture:!0,passive:!0}),p.ZP.addEventListener(window,window.PointerEvent?"pointerup":"mouseup",Ze,{capture:!0,passive:!0}),p.ZP.addEventListener(window,"touchstart",Oe,{capture:!0,passive:!0}),["touchend","touchcancel"].forEach((function(e){p.ZP.addEventListener(window,e,Ze,{capture:!0,passive:!0})})),p.ZP.addEventListener(window,"dragend",we,{capture:!0,passive:!0}),(f.Z.firefox||f.Z.edge)&&p.ZP.addEventListener(document,"click",Ie,{capture:!0})}catch(e){q.appRouter.goHome()}})),e.addEventListener("viewbeforehide",(function(){B&&B.enabled(!1),document.removeEventListener("keydown",Le),p.ZP.removeEventListener(document,"keydown",ke,{capture:!0,passive:!0}),p.ZP.removeEventListener(window,window.PointerEvent?"pointerdown":"mousedown",Oe,{capture:!0,passive:!0}),p.ZP.removeEventListener(window,window.PointerEvent?"pointerup":"mouseup",Ze,{capture:!0,passive:!0}),p.ZP.removeEventListener(window,"touchstart",Oe,{capture:!0,passive:!0}),["touchend","touchcancel"].forEach((function(e){p.ZP.removeEventListener(window,e,Ze,{capture:!0,passive:!0})})),p.ZP.removeEventListener(window,"dragend",we,{capture:!0,passive:!0}),(f.Z.firefox||f.Z.edge)&&p.ZP.removeEventListener(document,"click",Ie,{capture:!0}),G(),Xe.classList.remove("osdHeader"),Xe.classList.remove("osdHeader-hidden"),p.ZP.removeEventListener(document,window.PointerEvent?"pointermove":"mousemove",z,{passive:!0}),m.default.off(window,J),P.Z.off(u.O,"playerchange",$),ue()})),e.querySelector(".btnFullscreen").addEventListener("click",(function(){u.O.toggleFullscreen(c)})),e.querySelector(".btnPip").addEventListener("click",(function(){u.O.togglePictureInPicture(c)})),e.querySelector(".btnAirPlay").addEventListener("click",(function(){u.O.toggleAirPlay(c)})),e.querySelector(".btnVideoOsdSettings").addEventListener("click",(function(){var e=this;n.e(29078).then(n.bind(n,29078)).then((function(t){var n=c;if(n){var i,a=u.O.getPlayerState(n),r=u.O.supportSubtitleOffset(n)&&u.O.canHandleOffsetOnCurrentSubtitle(n);t.show({mediaType:"Video",player:n,positionTo:e,quality:null===(i=a.MediaSource)||void 0===i?void 0:i.SupportsTranscoding,stats:!0,suboffset:r,onOption:ge}).finally((function(){X()})),setTimeout(X,0)}}))})),e.addEventListener("viewhide",(function(){Xe.classList.remove("hide")})),e.addEventListener("viewdestroy",(function(){Ee.touchHelper&&(Ee.touchHelper.destroy(),Ee.touchHelper=null),x&&(x.destroy(),x=null),Pe(),Se()}));var Je=0;p.ZP.addEventListener(e,window.PointerEvent?"pointerdown":"click",(function(e){if(p.ZP.parentWithClass(e.target,["videoOsdBottom","upNextContainer"]))K();else{var t=e.pointerType||(I.Z.mobile?"touch":"mouse"),n=(new Date).getTime();switch(t){case"touch":n-Je>300&&(Je=n,"osd"===N?U():N||K());break;case"mouse":e.button||(o?(clearTimeout(o),o=0):o=setTimeout((function(){u.O.playPause(c),K(),o=0}),300));break;default:u.O.playPause(c),K()}}}),{passive:!0}),p.ZP.addEventListener(e,"dblclick",(function(t){t.target===e&&u.O.toggleFullscreen(c)})),e.querySelector(".buttonMute").addEventListener("click",(function(){u.O.toggleMute(c)})),He.addEventListener("input",(function(e){u.O.setVolume(e.target.value,c)})),Be.addEventListener("change",(function(){var e=c;if(e){var t=parseFloat(this.value);if(H){var n=t/100*(Ae-Me)*1e4;n+=1e4*Me,n-=Fe,u.O.seek(n,e)}else u.O.seekPercent(t,e)}})),Be.getBubbleHtml=function(e){if(K(),H){if(Me&&Ae){var t=Ae-Me;return t/=100,t*=e,t+=Me,'<h1 class="sliderBubbleText">'+a(new Date(parseInt(t)),!0)+"</h1>"}return"--:--"}if(!Re)return"--:--";var n=Re;n/=100,n*=e;var i=E;if(i&&i.Chapters&&i.Chapters.length&&i.Chapters[0].ImageTag){var r=function(e,t,n,i){for(var a,r=-1,s=0,o=n.length;s<o;s++){var c=n[s];i>=c.StartPositionTicks&&(a=c,r=s)}if(!a)return null;var u=function(e,t,n,i,a){return t.ImageTag?a.getScaledImageUrl(e.Id,{maxWidth:400,tag:t.ImageTag,type:"Chapter",index:n}):null}(t,a,r,0,e);if(u){var d='<div class="chapterThumbContainer">';return d+='<img class="chapterThumb" src="'+u+'" />',d+='<div class="chapterThumbTextContainer">',d+='<div class="chapterThumbText chapterThumbText-dim">',d+=l()(a.Name),d+="</div>",d+='<h2 class="chapterThumbText">',d+=h.ZP.getDisplayRunningTime(i),d+="</h2>",(d+="</div>")+"</div>"}return null}(O.Z.getApiClient(i.ServerId),i,i.Chapters,n);if(r)return r}return'<h1 class="sliderBubbleText">'+h.ZP.getDisplayRunningTime(n)+"</h1>"},Be.getMarkerInfo=function(){var e,t=[],n=E;return null!=n&&null!==(e=n.Chapters)&&void 0!==e&&e.length&&n.Chapters.forEach((function(e){t.push({className:"chapterMarker",name:e.Name,progress:e.StartPositionTicks/n.RunTimeTicks})})),t},e.querySelector(".btnPreviousTrack").addEventListener("click",(function(){u.O.previousTrack(c)})),e.querySelector(".btnPreviousChapter").addEventListener("click",(function(){u.O.previousChapter(c)})),e.querySelector(".btnPause").addEventListener("click",(function(){u.O.playPause(c)})),e.querySelector(".btnNextChapter").addEventListener("click",(function(){u.O.nextChapter(c)})),e.querySelector(".btnNextTrack").addEventListener("click",(function(){u.O.nextTrack(c)})),Ge.addEventListener("click",(function(){u.O.rewind(c)})),We.addEventListener("click",(function(){u.O.fastForward(c)})),e.querySelector(".btnAudio").addEventListener("click",(function(){var e=c,t=u.O.audioTracks(e),i=u.O.getAudioStreamIndex(e),a=t.map((function(e){var t={name:e.DisplayTitle,id:e.Index};return e.Index===i&&(t.selected=!0),t})),r=this;Promise.resolve().then(n.bind(n,12801)).then((function(t){t.default.show({items:a,title:T.ZP.translate("Audio"),positionTo:r}).then((function(t){var n=parseInt(t);n!==i&&u.O.setAudioStreamIndex(n,e)})).finally((function(){X()})),setTimeout(X,0)}))})),e.querySelector(".btnSubtitles").addEventListener("click",(function(){var e=c,t=u.O.subtitleTracks(e),i=u.O.getSubtitleStreamIndex(e);null==i&&(i=-1),t.unshift({Index:-1,DisplayTitle:T.ZP.translate("Off")});var a=t.map((function(e){var t={name:e.DisplayTitle,id:e.Index};return e.Index===i&&(t.selected=!0),t})),r=this;Promise.resolve().then(n.bind(n,12801)).then((function(t){t.default.show({title:T.ZP.translate("Subtitles"),items:a,positionTo:r}).then((function(t){var n=parseInt(t);n!==i&&u.O.setSubtitleStreamIndex(n,e),Te()})).finally((function(){X()})),setTimeout(X,0)}))}));var Qe=function(t){var n="",i="",a="oneShotPulse",r=1500,s=e.querySelector("#syncPlayIcon");switch(t){case"schedule-play":n="sync spin",i="play_arrow centered",a="infinitePulse",r=-1,U();break;case"unpause":n="play_circle_outline";break;case"pause":n="pause_circle_outline",K();break;case"seek":n="update",a="infinitePulse",r=-1;break;case"buffering":n="schedule",a="infinitePulse",r=-1;break;case"wait-pause":n="schedule",i="pause shifted",a="infinitePulse",r=-1;break;case"wait-unpause":n="schedule",i="play_arrow shifted",a="infinitePulse",r=-1;break;default:return void(s.style.visibility="hidden")}s.setAttribute("class","syncPlayIconCircle "+a),s.querySelector(".primary-icon").setAttribute("class","primary-icon material-icons "+n),s.querySelector(".secondary-icon").setAttribute("class","secondary-icon material-icons "+i);var o=s.cloneNode(!0);o.style.visibility="visible",s.parentNode.replaceChild(o,s),r<0||setTimeout((function(){o.style.visibility="hidden"}),r)};P.Z.on(d.default.Manager,"enabled",(function(t,n){n||(e.querySelector("#syncPlayIcon").style.visibility="hidden")})),P.Z.on(d.default.Manager,"notify-osd",(function(e,t){Qe(t)})),P.Z.on(d.default.Manager,"group-state-update",(function(e,t,n){"Playing"===t&&"Unpause"===n||"Playing"===t&&"Ready"===n?Qe("schedule-play"):"Paused"===t&&"Pause"===n?Qe("pause"):"Paused"===t&&"Ready"===n?Qe("clear"):"Waiting"===t&&"Seek"===n?Qe("seek"):"Waiting"===t&&"Buffer"===n?Qe("buffering"):"Waiting"===t&&"Pause"===n?Qe("wait-pause"):"Waiting"===t&&"Unpause"===n&&Qe("wait-unpause")}))}}}]);