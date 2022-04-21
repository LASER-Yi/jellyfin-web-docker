"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2016],{661:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(20266),n(52077),n(911),n(23938),n(27471),n(61370),n(61013),n(32081),n(43512);var i=n(65009),a=n.n(i),r=n(53218),s=n(22155),o=n(47518),l=n(83094),c=n(12392),d=n(5099),u=n(28469),f=n(71616),m=n(70294),p=n(27515),b=n(47005),v=n(33942),h=n(94389),g=n(78695),y=n(28978),w=n(74783),k=(n(87201),n(61022),n(21865),n(1892)),S=n.n(k),P=n(95760),T=n.n(P),x=n(38311),L=n.n(x),O=n(58192),E=n.n(O),Z=n(38060),C=n.n(Z),q=n(54865),I=n.n(q),M=n(79993),F={};F.styleTagTransform=I(),F.setAttributes=E(),F.insert=L().bind(null,"head"),F.domAPI=T(),F.insertStyleElement=C(),S()(M.Z,F),M.Z&&M.Z.locals&&M.Z.locals;var B,D,H,R,A,N=n(53913),V=n(29856),_=(n(1203),n(76056),n(99785),n(34988)),K={};function z(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function U(e){var t=document.createElement("div");document.body.appendChild(t),t.innerHTML='<div class="subtitleSync"> <div class="subtitleSyncContainer"> <button type="button" is="paper-icon-button-light" class="subtitleSync-closeButton"><span class="material-icons close" aria-hidden="true"></span></button> <div class="subtitleSyncTextField" contenteditable="true" spellcheck="false">0s</div> <div class="sliderContainer subtitleSyncSliderContainer"> <input is="emby-slider" type="range" step=".1" min="0" max="100" value="50" class="subtitleSyncSlider" data-slider-keep-progress="true"/> </div> </div> </div> ',D=t.querySelector(".subtitleSyncSlider"),H=t.querySelector(".subtitleSyncTextField"),R=t.querySelector(".subtitleSync-closeButton"),A=t.querySelector(".subtitleSyncContainer"),g.Z.tv&&(D.classList.add("focusable"),setTimeout((function(){D.enableKeyboardDragging()}),0)),A.classList.add("hide"),H.updateOffset=function(e){this.textContent=e+"s"},H.addEventListener("click",(function(){this.hasFocus=!0})),H.addEventListener("keydown",(function(e){if("Enter"===e.key){var t=/[-+]?\d+\.?\d*/g.exec(this.textContent);t?(t=t[0],t=parseFloat(t),t=Math.min(30,Math.max(-30,t)),this.textContent=t+"s",r.O.setSubtitleOffset(t,B),D.updateOffset((n=t/30,n*=50,n+=50,Math.min(100,Math.max(0,n.toFixed(1)))))):this.textContent=(r.O.getPlayerSubtitleOffset(B)||0)+"s",this.hasFocus=!1,e.preventDefault()}else this.hasFocus=!0,null===e.key.match(/[+-\d.s]/)&&e.preventDefault();var n;e.stopPropagation()})),H.blur=function(){!this.hasFocus&&this.prototype&&this.prototype.blur()},D.updateOffset=function(e){this.value=void 0===e?50:e},D.addEventListener("change",(function(){r.O.setSubtitleOffset(j(this.value),B),H.updateOffset(j(this.value))})),D.getBubbleHtml=function(e){var t=j(e);return'<h1 class="sliderBubbleText">'+(t>0?"+":"")+parseFloat(t)+"s</h1>"},R.addEventListener("click",(function(){r.O.disableShowingSubtitleOffset(B),W.prototype.toggle("forceToHide")})),e.element=t}function j(e){var t=(e-50)/50;return(t*=30).toFixed(1)}K.styleTagTransform=I(),K.setAttributes=E(),K.insert=L().bind(null,"head"),K.domAPI=T(),K.insertStyleElement=C(),S()(_.Z,K),_.Z&&_.Z.locals&&_.Z.locals;var W=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),B=t,U(this)}var t,n;return t=e,(n=[{key:"destroy",value:function(){e.prototype.toggle("forceToHide"),B&&(r.O.disableShowingSubtitleOffset(B),r.O.setSubtitleOffset(0,B));var t=this.element;t&&(t.parentNode.removeChild(t),this.element=null)}},{key:"toggle",value:function(e){if(B&&r.O.supportSubtitleOffset(B))switch(e){case void 0:if(r.O.isShowingSubtitleOffsetEnabled(B)&&r.O.canHandleOffsetOnCurrentSubtitle(B)){r.O.getPlayerSubtitleOffset(B)||H.hasFocus||(D.value="50",H.textContent="0s",r.O.setSubtitleOffset(0,B)),A.classList.remove("hide");break}case"hide":if(H.hasFocus)break;case"forceToHide":A.classList.add("hide")}}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),G=W,X=n(86628),Y=n(3319),J=n(55959);function Q(){return document.querySelector(".dialogContainer .dialog.opened")}function $(e){function t(t){if(!t||"Program"!==t.Type)return C&&(C.destroy(),C=null),void e.querySelector(".btnRecord").classList.add("hide");N.Z.getApiClient(t.ServerId).getCurrentUser().then((function(i){i.Policy.EnableLiveTvManagement&&n.e(3989).then(n.bind(n,63989)).then((function(n){var i=n.default;C?C.refreshItem(t):(C=new i({item:t,button:e.querySelector(".btnRecord")}),e.querySelector(".btnRecord").classList.remove("hide"))}))}))}function i(n){var i=n.originalItem;Z=i;var a=n.displayItem||i;t(a);var r=a.SeriesName||a.Album;(a.EpisodeTitle||a.IsSeries)&&(r=a.Name),function(e,t){var n=f.ZP.getDisplayName(e,{includeParentInfo:"Program"!==e.Type,includeIndexNumber:"Program"!==e.Type});n&&t&&(n="".concat(t," - ").concat(n)),n||(n=t||""),Y.Z.setTitle(n);var i=t||(e?e.Name:null);i&&(document.title=i)}(a,r);var s=e.querySelector(".osdSecondaryMediaInfo"),o=m.ZP.getSecondaryMediaInfoHtml(a,{startDate:!1,programTime:!1});s.innerHTML=o,o?s.classList.remove("hide"):s.classList.add("hide"),q?(S(Ue,a.StartDate),S(je,a.EndDate),Ue.classList.remove("hide"),je.classList.remove("hide"),He=a.StartDate?u.ZP.parseISO8601Date(a.StartDate).getTime():0,Re=a.EndDate?u.ZP.parseISO8601Date(a.EndDate).getTime():0):(Ue.classList.add("hide"),je.classList.add("hide"),Ue.innerHTML="",je.innerHTML="",He=0,Re=0)}function k(e,t){return t?u.ZP.toLocaleTimeString(e,{hour:"numeric",minute:"2-digit",second:"2-digit"}).toLowerCase().replace("am","").replace("pm","").trim():u.ZP.getDisplayTime(e).toLowerCase().replace("am","").replace("pm","").trim()}function S(e,t){var n;t&&(n=k(t=u.ZP.parseISO8601Date(t))),e.innerHTML=n||""}var P,T,x,L,O,E,Z,C,q,I,M,F,B,D=!1;function H(){Je.classList.remove("osdHeader-hidden"),function(){if(!I){var e=Qe;I="osd",_(e),e.classList.remove("hide"),e.classList.remove("videoOsdBottom-hidden"),g.Z.mobile||setTimeout((function(){p.Z.focus(e.querySelector(".btnPause"))}),50),ke()}}(),z()}function R(){Je.classList.add("osdHeader-hidden"),function(){if("osd"===I){var e=Qe;_(e),e.classList.add("videoOsdBottom-hidden"),l.ZP.addEventListener(e,Ye,K,{once:!0}),I=null,ke("hide"),document.activeElement&&document.activeElement.blur()}}(),d.ZP.hideCursor()}function A(){F&&(clearTimeout(F),F=null)}function _(e){l.ZP.removeEventListener(e,Ye,K,{once:!0})}function K(e){var t=e.target;t==Qe&&(t.classList.add("hide"),l.ZP.removeEventListener(t,Ye,K,{once:!0}))}function z(){!I||D||Q()?A():(A(),F=setTimeout(R,3e3))}function U(e){if("mouse"===(e.pointerType||(g.Z.mobile?"touch":"mouse"))){var t=e.screenX||e.clientX||0,n=e.screenY||e.clientY||0,i=B;if(!i)return void(B={x:t,y:n});if(Math.abs(t-i.x)<10&&Math.abs(n-i.y)<10)return;i.x=t,i.y=n,H()}}function j(t){var n,i=x;switch(t.detail.command){case"left":"osd"===I?H():I||(t.preventDefault(),r.O.rewind(i));break;case"right":"osd"===I?H():I||(t.preventDefault(),r.O.fastForward(i));break;case"pageup":r.O.nextChapter(i);break;case"pagedown":r.O.previousChapter(i);break;case"up":case"down":case"select":case"menu":case"info":case"play":case"playpause":case"pause":case"fastforward":case"rewind":case"next":case"previous":H();break;case"record":(n=e.querySelector(".btnRecord")).classList.contains("hide")||n.click(),H();break;case"togglestats":ye();break;case"back":"osd"!==I||Q()||(R(),t.preventDefault())}}function W(){var t,n;!x.forcedFullscreen||r.O.isFullscreen(x)?((n=(t=e.querySelector(".btnFullscreen")).querySelector(".material-icons")).classList.remove("fullscreen_exit","fullscreen"),r.O.isFullscreen(x)?(t.setAttribute("title",v.ZP.translate("ExitFullscreen")+" (f)"),n.classList.add("fullscreen_exit")):(t.setAttribute("title",v.ZP.translate("Fullscreen")+" (f)"),n.classList.add("fullscreen"))):X.appRouter.back()}function $(){ce(r.O.getCurrentPlayer())}function ee(n,a){var s,o;a.NowPlayingItem&&(E=!0,function(n,a,s){var o=s.PlayState||{};me(o.IsPaused);var l=r.O.getSupportedCommands(a);Fe=l,ve(a,o.IsMuted,o.VolumeLevel),_e&&!_e.dragging&&(_e.disabled=!o.CanSeek),Xe.disabled=!o.CanSeek,Ge.disabled=!o.CanSeek;var c=s.NowPlayingItem||{};Ae=o.PlaybackStartTimeTicks,be(o.PositionTicks,c.RunTimeTicks,o.PlaybackStartTimeTicks,o.PlaybackRate,o.BufferedRanges||[]),function(n,a){var s,o=a.NowPlayingItem;if(Z=o,!o)return t(null),Y.Z.setTitle(""),Ne.disabled=!0,_e.disabled=!0,Xe.disabled=!0,Ge.disabled=!0,e.querySelector(".btnSubtitles").classList.add("hide"),e.querySelector(".btnAudio").classList.add("hide"),e.querySelector(".osdTitle").innerHTML="",void(e.querySelector(".osdMediaInfo").innerHTML="");q=function(e){return!("TvChannel"!==e.Type||!e.CurrentProgram)}(o),function(e){if("TvChannel"===e.Type){var t=N.Z.getApiClient(e.ServerId);return t.getItem(t.getCurrentUserId(),e.Id).then((function(e){return{originalItem:e,displayItem:e.CurrentProgram}}))}return Promise.resolve({originalItem:e})}(o).then(i),Ne.disabled=!1,_e.disabled=!1,Xe.disabled=!1,Ge.disabled=!1,r.O.subtitleTracks(n).length?(e.querySelector(".btnSubtitles").classList.remove("hide"),ke()):(e.querySelector(".btnSubtitles").classList.add("hide"),ke("forceToHide")),r.O.audioTracks(n).length>1?e.querySelector(".btnAudio").classList.remove("hide"):e.querySelector(".btnAudio").classList.add("hide"),(null===(s=Z.Chapters)||void 0===s?void 0:s.length)>1?(e.querySelector(".btnPreviousChapter").classList.remove("hide"),e.querySelector(".btnNextChapter").classList.remove("hide")):(e.querySelector(".btnPreviousChapter").classList.add("hide"),e.querySelector(".btnNextChapter").classList.add("hide"))}(a,s),s.MediaSource&&s.MediaSource.SupportsTranscoding&&-1!==l.indexOf("SetMaxStreamingBitrate")?e.querySelector(".btnVideoOsdSettings").classList.remove("hide"):e.querySelector(".btnVideoOsdSettings").classList.add("hide");var d=s.MediaSource&&null==s.MediaSource.RunTimeTicks;_e.setIsClear(d),c.RunTimeTicks&&_e.setKeyboardSteps(1e6*y.skipBackLength()/c.RunTimeTicks,1e6*y.skipForwardLength()/c.RunTimeTicks),-1===l.indexOf("ToggleFullscreen")||a.isLocalPlayer&&g.Z.tv&&r.O.isFullscreen(a)?e.querySelector(".btnFullscreen").classList.add("hide"):e.querySelector(".btnFullscreen").classList.remove("hide"),-1===l.indexOf("PictureInPicture")?e.querySelector(".btnPip").classList.add("hide"):e.querySelector(".btnPip").classList.remove("hide"),-1===l.indexOf("AirPlay")?e.querySelector(".btnAirPlay").classList.add("hide"):e.querySelector(".btnAirPlay").classList.remove("hide"),W()}(0,this,a),s=e.querySelector(".btnPreviousTrack"),o=e.querySelector(".btnNextTrack"),s.classList.remove("hide"),o.classList.remove("hide"),o.disabled=!1,s.disabled=!1,!0,e.removeEventListener("viewbeforehide",qe),r.O.isPlayingVideo(x)&&e.addEventListener("viewbeforehide",qe),function(e){var t=sessionStorage.getItem("playbackRateSpeed");null!==t&&e.setPlaybackRate(t)}(this))}function te(){E&&me(this.paused())}function ne(){if(E){var e=this;ve(e,e.isMuted(),e.getVolume())}}function ie(e,t){console.debug("nowplaying event: "+e.type),ee.call(this,e,t),ae()}function ae(){L=!1,O&&(O.destroy(),O=null)}function re(t,n){Be=null,ae(),console.debug("nowplaying event: "+t.type),"Video"!==n.NextMediaType&&(e.removeEventListener("viewbeforehide",qe),X.appRouter.back())}function se(){var e=r.O.getPlayerState(this);ee.call(this,{type:"init"},e)}function oe(){document.querySelector(".osdMediaStatus").classList.remove("hide")}function le(){document.querySelector(".osdMediaStatus").classList.add("hide")}function ce(e){if(e===x||(de(),x=e,e)){var t=r.O.getPlayerState(e);ee.call(e,{type:"init"},t),b.Events.on(e,"playbackstart",ie),b.Events.on(e,"playbackstop",re),b.Events.on(e,"volumechange",ne),b.Events.on(e,"pause",te),b.Events.on(e,"unpause",te),b.Events.on(e,"timeupdate",ue),b.Events.on(e,"fullscreenchange",W),b.Events.on(e,"mediastreamschange",se),b.Events.on(e,"beginFetch",oe),b.Events.on(e,"endFetch",le),ae(),e.isFetching&&oe()}}function de(){we(),Se(),ae();var e=x;e&&(b.Events.off(e,"playbackstart",ie),b.Events.off(e,"playbackstop",re),b.Events.off(e,"volumechange",ne),b.Events.off(e,"pause",te),b.Events.off(e,"unpause",te),b.Events.off(e,"timeupdate",ue),b.Events.off(e,"fullscreenchange",W),b.Events.off(e,"mediastreamschange",se),x=null)}function ue(){if(E&&Z){var t=(new Date).getTime();if(!(t-De<700)){De=t;var i=this;Be=r.O.duration(i);var a=1e4*r.O.currentTime(i);be(a,Be,r.O.playbackStartTime(i),r.O.getPlaybackRate(i),r.O.getBufferedRanges(i));var s=Z;!function(e,t){if("TvChannel"===t.Type){var n=t.CurrentProgram;if(n&&n.EndDate)try{var i=u.ZP.parseISO8601Date(n.EndDate);if((new Date).getTime()>=i.getTime()){console.debug("program info needs to be refreshed");var a=r.O.getPlayerState(e);ee.call(e,{type:"init"},a)}}catch(e){console.error("error parsing date: "+n.EndDate)}}}(i,s),function(t,i,a,s){s&&a&&!L&&!I&&"Episode"===i.Type&&y.enableNextVideoInfoOverlay()&&a>=s-1e3*(s>=3e10?40:s>=24e9?35:30)*1e4&&s>=6e9&&s-a>=2e8&&function(t){n.e(3651).then(n.bind(n,13651)).then((function(n){var i=n.default;I||O||(I="upnext",L=!0,r.O.nextItem(t).then((function(n){O=new i({parent:e.querySelector(".upNextContainer"),player:t,nextItem:n}),b.Events.on(O,"hide",fe)}),fe))}))}(t)}(i,s,a,Be)}}}function fe(){"upnext"===I&&(I=null)}function me(t){var n,i,a=e.querySelector(".btnPause"),r=a.querySelector(".material-icons");r.classList.remove("play_arrow","pause"),t?(n="play_arrow",i=v.ZP.translate("Play")):(n="pause",i=v.ZP.translate("ButtonPause")),r.classList.add(n),l.ZP.setElementTitle(a,i+" (k)",i)}function pe(e,t,n){return(n-e)/t*100}function be(e,t,n,i,a){if(q){if(_e&&!_e.dragging)if(He&&Re){var r=(n+(e||0))/1e4,s=Re-He;if(_e.value=pe(He,s,r),a.length){var o=pe(He,s,(n+(a[0].start||0))/1e4),l=pe(He,s,(n+(a[0].end||0))/1e4);_e.setBufferedRanges([{start:o,end:l}])}else _e.setBufferedRanges([])}else _e.value=0,_e.setBufferedRanges([]);Ke.innerHTML="",ze.innerHTML=""}else{if(_e&&!_e.dragging){if(t){var c=e/t;c*=100,_e.value=c}else _e.value=0;t&&null!=e&&Be&&!q&&Z.RunTimeTicks&&"Recording"!==Z.Type&&null!==i?We.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"+m.ZP.getEndsAtFromPosition(t,e,i,!0):We.innerHTML=""}_e&&_e.setBufferedRanges(a,t,e),e>=0?(he(Ke,e),Ke.classList.remove("hide")):Ke.classList.add("hide");var d=t-e;d>=0?(he(ze,d),ze.classList.remove("hide")):Ke.classList.add("hide")}}function ve(t,n,i){var a=Fe,r=!0,s=!0;-1===a.indexOf("Mute")&&(r=!1),-1===a.indexOf("SetVolume")&&(s=!1),t.isLocalPlayer&&h.M.supports("physicalvolumecontrol")&&(r=!1,s=!1);var o=e.querySelector(".buttonMute"),l=o.querySelector(".material-icons");l.classList.remove("volume_off","volume_up"),n?(o.setAttribute("title",v.ZP.translate("Unmute")+" (m)"),l.classList.add("volume_off")):(o.setAttribute("title",v.ZP.translate("Mute")+" (m)"),l.classList.add("volume_up")),r?o.classList.remove("hide"):o.classList.add("hide"),Ne&&(s?Ve.classList.remove("hide"):Ve.classList.add("hide"),Ne.dragging||(Ne.value=i||0))}function he(e,t,n){if(null!=t){var i=u.ZP.getDisplayRunningTime(t);n&&(i="&nbsp;/&nbsp;"+i),e.innerHTML=i}else e.innerHTML=""}function ge(e){if("stats"===e)ye();else if("suboffset"===e){var t=x;t&&(r.O.enableShowingSubtitleOffset(t),ke())}}function ye(){n.e(1392).then(n.bind(n,1392)).then((function(e){var t=e.default,n=x;n&&(M?M.toggle():M=new t({player:n}))}))}function we(){M&&(M.destroy(),M=null)}function ke(e){var t=x;Ie?Ie.toggle(e):t&&(Ie=new G(t))}function Se(){Ie&&(Ie.destroy(),Ie=null)}function Pe(e){if(!e.target.contains(P))return e.preventDefault(),e.stopPropagation(),!1}function Te(e){P=e.target;var t=w.ZP.getKeyName(e),n=e.ctrlKey||e.altKey||e.metaKey;if(32===e.keyCode)return"BUTTON"===e.target.tagName&&g.Z.tv||(r.O.playPause(x),e.preventDefault(),e.stopPropagation(),P=null),void H();if(g.Z.tv&&w.ZP.isNavigationKey(t))H();else switch(t){case"Enter":H();break;case"Escape":case"Back":"osd"!==I||Q()||(R(),e.stopPropagation());break;case"k":r.O.playPause(x),H();break;case"ArrowUp":case"Up":r.O.volumeUp(x);break;case"ArrowDown":case"Down":r.O.volumeDown(x);break;case"l":case"ArrowRight":case"Right":r.O.fastForward(x),H();break;case"j":case"ArrowLeft":case"Left":r.O.rewind(x),H();break;case"f":e.ctrlKey||e.metaKey||(r.O.toggleFullscreen(x),H());break;case"m":r.O.toggleMute(x),H();break;case"p":case"P":e.shiftKey&&r.O.previousTrack(x);break;case"n":case"N":e.shiftKey&&r.O.nextTrack(x);break;case"NavigationLeft":case"GamepadDPadLeft":case"GamepadLeftThumbstickLeft":document.hasFocus()&&(r.O.rewind(x),H());break;case"NavigationRight":case"GamepadDPadRight":case"GamepadLeftThumbstickRight":document.hasFocus()&&(r.O.fastForward(x),H());break;case"Home":r.O.seekPercent(0,x);break;case"End":r.O.seekPercent(100,x);break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":if(!n){var i=10*parseInt(t,10);r.O.seekPercent(i,x)}break;case">":r.O.increasePlaybackRate(x);break;case"<":r.O.decreasePlaybackRate(x);break;case"PageUp":r.O.nextChapter(x);break;case"PageDown":r.O.previousChapter(x)}}function xe(){z()}function Le(e){P=e.target,D=!0,z()}function Oe(){D=!1,z()}function Ee(e){P=e.target,D=!0,z()}function Ze(){D=!1,z()}function Ce(){D=!1,z()}function qe(){if(r.O.isPlayingVideo()){V.Z.disableFullscreen(),clearTimeout(T);var t=x;e.removeEventListener("viewbeforehide",qe),de(),r.O.stop(t)}}V.Z.enableFullscreen();var Ie,Me=this,Fe=[],Be=0,De=0,He=0,Re=0,Ae=0,Ne=e.querySelector(".osdVolumeSlider"),Ve=e.querySelector(".osdVolumeSliderContainer"),_e=e.querySelector(".osdPositionSlider"),Ke=e.querySelector(".osdPositionText"),ze=e.querySelector(".osdDurationText"),Ue=e.querySelector(".startTimeText"),je=e.querySelector(".endTimeText"),We=e.querySelector(".endsAtText"),Ge=e.querySelector(".btnRewind"),Xe=e.querySelector(".btnFastForward"),Ye=l.ZP.whichTransitionEvent(),Je=document.querySelector(".skinHeader"),Qe=document.querySelector(".videoOsdBottom-maincontrols");_e.enableKeyboardDragging(),Ne.enableKeyboardDragging(),g.Z.tv&&_e.classList.add("focusable"),e.addEventListener("viewbeforeshow",(function(){Je.classList.add("osdHeader"),(0,J.G2)(J.q3.Full)})),e.addEventListener("viewshow",(function(){try{b.Events.on(r.O,"playerchange",$),ce(r.O.getCurrentPlayer()),l.ZP.addEventListener(document,window.PointerEvent?"pointermove":"mousemove",U,{passive:!0}),H(),c.default.on(window,j),document.addEventListener("keydown",Te),l.ZP.addEventListener(document,"keydown",xe,{capture:!0,passive:!0}),l.ZP.addEventListener(window,window.PointerEvent?"pointerdown":"mousedown",Le,{capture:!0,passive:!0}),l.ZP.addEventListener(window,window.PointerEvent?"pointerup":"mouseup",Oe,{capture:!0,passive:!0}),l.ZP.addEventListener(window,"touchstart",Ee,{capture:!0,passive:!0}),["touchend","touchcancel"].forEach((function(e){l.ZP.addEventListener(window,e,Ze,{capture:!0,passive:!0})})),l.ZP.addEventListener(window,"dragend",Ce,{capture:!0,passive:!0}),(o.Z.firefox||o.Z.edge)&&l.ZP.addEventListener(document,"click",Pe,{capture:!0})}catch(e){X.appRouter.goHome()}})),e.addEventListener("viewbeforehide",(function(){M&&M.enabled(!1),document.removeEventListener("keydown",Te),l.ZP.removeEventListener(document,"keydown",xe,{capture:!0,passive:!0}),l.ZP.removeEventListener(window,window.PointerEvent?"pointerdown":"mousedown",Le,{capture:!0,passive:!0}),l.ZP.removeEventListener(window,window.PointerEvent?"pointerup":"mouseup",Oe,{capture:!0,passive:!0}),l.ZP.removeEventListener(window,"touchstart",Ee,{capture:!0,passive:!0}),["touchend","touchcancel"].forEach((function(e){l.ZP.removeEventListener(window,e,Ze,{capture:!0,passive:!0})})),l.ZP.removeEventListener(window,"dragend",Ce,{capture:!0,passive:!0}),(o.Z.firefox||o.Z.edge)&&l.ZP.removeEventListener(document,"click",Pe,{capture:!0}),A(),Je.classList.remove("osdHeader"),Je.classList.remove("osdHeader-hidden"),l.ZP.removeEventListener(document,window.PointerEvent?"pointermove":"mousemove",U,{passive:!0}),c.default.off(window,j),b.Events.off(r.O,"playerchange",$),de()})),e.querySelector(".btnFullscreen").addEventListener("click",(function(){r.O.toggleFullscreen(x)})),e.querySelector(".btnPip").addEventListener("click",(function(){r.O.togglePictureInPicture(x)})),e.querySelector(".btnAirPlay").addEventListener("click",(function(){r.O.toggleAirPlay(x)})),e.querySelector(".btnVideoOsdSettings").addEventListener("click",(function(){var e=this;n.e(4268).then(n.bind(n,84268)).then((function(t){var n=x;if(n){var i=r.O.supportSubtitleOffset(n)&&r.O.canHandleOffsetOnCurrentSubtitle(n);t.show({mediaType:"Video",player:n,positionTo:e,stats:!0,suboffset:i,onOption:ge}).finally((function(){z()})),setTimeout(z,0)}}))})),e.addEventListener("viewhide",(function(){Je.classList.remove("hide")})),e.addEventListener("viewdestroy",(function(){Me.touchHelper&&(Me.touchHelper.destroy(),Me.touchHelper=null),C&&(C.destroy(),C=null),we(),Se()}));var $e=0;l.ZP.addEventListener(e,window.PointerEvent?"pointerdown":"click",(function(e){if(l.ZP.parentWithClass(e.target,["videoOsdBottom","upNextContainer"]))H();else{var t=e.pointerType||(g.Z.mobile?"touch":"mouse"),n=(new Date).getTime();switch(t){case"touch":n-$e>300&&($e=n,"osd"===I?R():I||H());break;case"mouse":e.button||(T?(clearTimeout(T),T=0):T=setTimeout((function(){r.O.playPause(x),H(),T=0}),300));break;default:r.O.playPause(x),H()}}}),{passive:!0}),l.ZP.addEventListener(e,"dblclick",(function(t){t.target===e&&r.O.toggleFullscreen(x)})),e.querySelector(".buttonMute").addEventListener("click",(function(){r.O.toggleMute(x)})),Ne.addEventListener("input",(function(e){r.O.setVolume(e.target.value,x)})),_e.addEventListener("change",(function(){var e=x;if(e){var t=parseFloat(this.value);if(q){var n=t/100*(Re-He)*1e4;n+=1e4*He,n-=Ae,r.O.seek(n,e)}else r.O.seekPercent(t,e)}})),_e.getBubbleHtml=function(e){if(H(),q){if(He&&Re){var t=Re-He;return t/=100,t*=e,t+=He,'<h1 class="sliderBubbleText">'+k(new Date(parseInt(t)),!0)+"</h1>"}return"--:--"}if(!Be)return"--:--";var n=Be;n/=100,n*=e;var i=Z;if(i&&i.Chapters&&i.Chapters.length&&i.Chapters[0].ImageTag){var r=function(e,t,n,i){for(var r,s=-1,o=0,l=n.length;o<l;o++){var c=n[o];i>=c.StartPositionTicks&&(r=c,s=o)}if(!r)return null;var d=function(e,t,n,i,a){return t.ImageTag?a.getScaledImageUrl(e.Id,{maxWidth:400,tag:t.ImageTag,type:"Chapter",index:n}):null}(t,r,s,0,e);if(d){var f='<div class="chapterThumbContainer">';return f+='<img class="chapterThumb" src="'+d+'" />',f+='<div class="chapterThumbTextContainer">',f+='<div class="chapterThumbText chapterThumbText-dim">',f+=a()(r.Name),f+="</div>",f+='<h2 class="chapterThumbText">',f+=u.ZP.getDisplayRunningTime(i),f+="</h2>",(f+="</div>")+"</div>"}return null}(N.Z.getApiClient(i.ServerId),i,i.Chapters,n);if(r)return r}return'<h1 class="sliderBubbleText">'+u.ZP.getDisplayRunningTime(n)+"</h1>"},e.querySelector(".btnPreviousTrack").addEventListener("click",(function(){r.O.previousTrack(x)})),e.querySelector(".btnPreviousChapter").addEventListener("click",(function(){r.O.previousChapter(x)})),e.querySelector(".btnPause").addEventListener("click",(function(){r.O.playPause(x)})),e.querySelector(".btnNextChapter").addEventListener("click",(function(){r.O.nextChapter(x)})),e.querySelector(".btnNextTrack").addEventListener("click",(function(){r.O.nextTrack(x)})),Ge.addEventListener("click",(function(){r.O.rewind(x)})),Xe.addEventListener("click",(function(){r.O.fastForward(x)})),e.querySelector(".btnAudio").addEventListener("click",(function(){var e=x,t=r.O.audioTracks(e),i=r.O.getAudioStreamIndex(e),a=t.map((function(e){var t={name:e.DisplayTitle,id:e.Index};return e.Index===i&&(t.selected=!0),t})),s=this;Promise.resolve().then(n.bind(n,78407)).then((function(t){t.default.show({items:a,title:v.ZP.translate("Audio"),positionTo:s}).then((function(t){var n=parseInt(t);n!==i&&r.O.setAudioStreamIndex(n,e)})).finally((function(){z()})),setTimeout(z,0)}))})),e.querySelector(".btnSubtitles").addEventListener("click",(function(){var e=x,t=r.O.subtitleTracks(e),i=r.O.getSubtitleStreamIndex(e);null==i&&(i=-1),t.unshift({Index:-1,DisplayTitle:v.ZP.translate("Off")});var a=t.map((function(e){var t={name:e.DisplayTitle,id:e.Index};return e.Index===i&&(t.selected=!0),t})),s=this;Promise.resolve().then(n.bind(n,78407)).then((function(t){t.default.show({title:v.ZP.translate("Subtitles"),items:a,positionTo:s}).then((function(t){var n=parseInt(t);n!==i&&r.O.setSubtitleStreamIndex(n,e),ke()})).finally((function(){z()})),setTimeout(z,0)}))}));var et=function(t){var n="",i="",a="oneShotPulse",r=1500,s=e.querySelector("#syncPlayIcon");switch(t){case"schedule-play":n="sync spin",i="play_arrow centered",a="infinitePulse",r=-1,R();break;case"unpause":n="play_circle_outline";break;case"pause":n="pause_circle_outline",H();break;case"seek":n="update",a="infinitePulse",r=-1;break;case"buffering":n="schedule",a="infinitePulse",r=-1;break;case"wait-pause":n="schedule",i="pause shifted",a="infinitePulse",r=-1;break;case"wait-unpause":n="schedule",i="play_arrow shifted",a="infinitePulse",r=-1;break;default:return void(s.style.visibility="hidden")}s.setAttribute("class","syncPlayIconCircle "+a),s.querySelector(".primary-icon").setAttribute("class","primary-icon material-icons "+n),s.querySelector(".secondary-icon").setAttribute("class","secondary-icon material-icons "+i);var o=s.cloneNode(!0);o.style.visibility="visible",s.parentNode.replaceChild(o,s),r<0||setTimeout((function(){o.style.visibility="hidden"}),r)};b.Events.on(s.Z.Manager,"enabled",(function(t,n){n||(e.querySelector("#syncPlayIcon").style.visibility="hidden")})),b.Events.on(s.Z.Manager,"notify-osd",(function(e,t){et(t)})),b.Events.on(s.Z.Manager,"group-state-update",(function(e,t,n){"Playing"===t&&"Unpause"===n||"Playing"===t&&"Ready"===n?et("schedule-play"):"Paused"===t&&"Pause"===n?et("pause"):"Paused"===t&&"Ready"===n?et("clear"):"Waiting"===t&&"Seek"===n?et("seek"):"Waiting"===t&&"Buffer"===n?et("buffering"):"Waiting"===t&&"Pause"===n?et("wait-pause"):"Waiting"===t&&"Unpause"===n&&et("wait-unpause")}))}},79993:function(e,t,n){var i=n(54933),a=n.n(i),r=n(93476),s=n.n(r)()(a());s.push([e.id,".chapterThumbTextContainer,.videoOsdBottom{user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.videoOsdBottom{-webkit-touch-callout:none;background:linear-gradient(0deg,hsla(0,0%,6%,.75),hsla(0,0%,6%,0));bottom:0;color:#fff;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:center;justify-content:center;left:0;padding-bottom:1.75em;padding-top:7.5em;pointer-events:none;position:fixed;right:0;transition:opacity .3s ease-out;-webkit-user-select:none;-ms-user-select:none;user-select:none;will-change:opacity}.skinHeader-withBackground.osdHeader{-webkit-backdrop-filter:none;backdrop-filter:none;background:linear-gradient(180deg,hsla(0,0%,6%,.75),hsla(0,0%,6%,0));color:#eee;height:7.5em;pointer-events:none;position:relative;transition:opacity .3s ease-out;z-index:1}.osdHeader-hidden{opacity:0}.osdHeader .headerTop{max-height:3.5em;pointer-events:all}.osdHeader .headerButton:not(.headerBackButton):not(.headerCastButton):not(.headerSyncButton){display:none}.chapterThumbContainer{box-shadow:0 0 1.9vh #000;-webkit-flex-grow:1;flex-grow:1;position:relative}.chapterThumb{background-position:50%;background-repeat:no-repeat;background-size:contain;border:0;height:20vh;min-width:20vh}@media (orientation:portrait){.chapterThumb{height:30vw;min-width:30vw}}@media (max-height:50em)and (orientation:landscape){.chapterThumb{height:30vh;min-width:30vh}}.chapterThumbTextContainer{background:rgba(0,0,0,.7);bottom:0;left:0;padding:.25em .5em;position:absolute;right:0;-webkit-user-select:none;-ms-user-select:none;user-select:none}.chapterThumbText{margin:0;opacity:1;padding:.25em 0}.chapterThumbText-dim{opacity:.6}.videoOsdBottom-hidden{opacity:0}.osdControls{-webkit-flex-grow:1;flex-grow:1;padding:0 .8em;pointer-events:all}.layout-desktop .osdControls{max-width:175vh}.videoOsdBottom .buttons{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:.25em 0 0}.osdVolumeSliderContainer{-webkit-flex-grow:1;flex-grow:1;width:9em}.osdMediaInfo,.volumeButtons{-webkit-box-align:center;display:flex}.osdMediaInfo,.volumeButtons{-webkit-align-items:center;align-items:center;display:-webkit-flex}.volumeButtons{display:flex;margin:0 1em 0 .29em}.osdTimeText{margin-left:1em;margin-right:auto;-webkit-user-select:none;-ms-user-select:none;user-select:none}.osdTitle,.osdTitleSmall{margin:0 1em 0 0}.osdMediaInfo{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}.osdSecondaryMediaInfo{padding-left:.6em!important}.osdTextContainer{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;margin-bottom:.7em;padding-left:.5em;-webkit-user-select:none;-ms-user-select:none;user-select:none}.osdMainTextContainer{-webkit-align-items:baseline;align-items:baseline}.osdMediaStatus{margin-left:auto}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.osdMediaStatus .animate{-webkit-animation:spin 4s linear infinite;animation:spin 4s linear infinite}@media (max-width:30em){.osdMediaInfo,.osdPoster{display:none!important}}@media (max-width:33.75em){.videoOsdBottom .paper-icon-button-light{margin:0}}@media (max-width:43em){.osdMediaStatus span,.videoOsdBottom .volumeButtons{display:none!important}}@media (max-width:50em){.videoOsdBottom .btnFastForward,.videoOsdBottom .btnRewind{display:none!important}}@media (max-width:75em){.videoOsdBottom .endsAtText{display:none!important}}.syncPlayContainer{-webkit-align-items:center;align-items:center;bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;pointer-events:none;position:absolute;right:0;top:0}.primary-icon{-webkit-align-self:center;align-self:center;font-size:64px;position:absolute}.primary-icon.spin{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;font-size:76px!important}.secondary-icon{font-size:24px;position:absolute}.secondary-icon.centered{-webkit-align-self:center;align-self:center;font-size:28px!important}.secondary-icon.shifted{bottom:0;font-size:52px;right:0}.syncPlayIconCircle{background:rgba(0,164,220,0);border-radius:50%;box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,0);display:-webkit-flex;display:flex;height:96px;-webkit-justify-content:center;justify-content:center;margin:60px;position:relative;-webkit-transform:scale(1);transform:scale(1);visibility:hidden;width:96px}.syncPlayIconCircle.oneShotPulse{-webkit-animation:pulse 1.5s 1;animation:pulse 1.5s 1}.syncPlayIconCircle.infinitePulse{-webkit-animation:infinite-pulse 1.5s infinite;animation:infinite-pulse 1.5s infinite}@-webkit-keyframes pulse{0%{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,.3);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}70%{background:rgba(0,164,220,0);box-shadow:0 0 0 60px rgba(0,164,220,0);color:rgba(0,164,220,0);-webkit-transform:scale(1);transform:scale(1)}to{background:rgba(0,164,220,0);box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,0);-webkit-transform:scale(.95);transform:scale(.95)}}@keyframes pulse{0%{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,.3);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}70%{background:rgba(0,164,220,0);box-shadow:0 0 0 60px rgba(0,164,220,0);color:rgba(0,164,220,0);-webkit-transform:scale(1);transform:scale(1)}to{background:rgba(0,164,220,0);box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,0);-webkit-transform:scale(.95);transform:scale(.95)}}@-webkit-keyframes infinite-pulse{0%{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,.3);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}70%{background:rgba(0,164,220,0);box-shadow:0 0 0 60px rgba(0,164,220,0);color:rgba(0,164,220,.6);-webkit-transform:scale(1);transform:scale(1)}to{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}}@keyframes infinite-pulse{0%{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,.3);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}70%{background:rgba(0,164,220,0);box-shadow:0 0 0 60px rgba(0,164,220,0);color:rgba(0,164,220,.6);-webkit-transform:scale(1);transform:scale(1)}to{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}}@keyframes spin{to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}",""]),t.Z=s},34988:function(e,t,n){var i=n(54933),a=n.n(i),r=n(93476),s=n.n(r)()(a());s.push([e.id,".subtitleSync{position:absolute;width:100%}.subtitleSyncContainer{background:rgba(28,28,28,.8);border-radius:.3em;color:#fff;height:4.2em;margin-left:auto;margin-right:auto;min-width:18em;position:relative;width:40%}.subtitleSync-closeButton{color:#ccc;position:absolute;right:0;top:0;z-index:2}.subtitleSyncTextField{color:#fff;font-size:20px;left:0;margin-left:30%;margin-right:30%;position:absolute;text-align:center;top:.1em;width:40%;z-index:2}#prompt{-webkit-flex-shrink:0;flex-shrink:0}.subtitleSyncSliderContainer{border-radius:.3em;-webkit-flex-grow:1;flex-grow:1;height:1.4em;margin-left:1%;margin-right:1%;top:2.5em;width:98%;z-index:1}",""]),t.Z=s}}]);