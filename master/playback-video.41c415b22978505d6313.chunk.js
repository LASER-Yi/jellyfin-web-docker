"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2016],{661:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(20266),n(52077),n(911),n(23938),n(27471),n(61370),n(61013),n(32081),n(43512);var i=n(53218),a=n(8782),r=n(47518),s=n(83094),o=n(12392),l=n(5099),c=n(28469),d=n(71616),u=n(70294),f=n(27515),m=n(47005),p=n(44614),b=n(94389),v=n(78695),h=n(28978),g=n(74783),y=(n(87201),n(61022),n(21865),n(1892)),w=n.n(y),k=n(95760),S=n.n(k),P=n(38311),T=n.n(P),x=n(58192),L=n.n(x),O=n(38060),E=n.n(O),C=n(54865),Z=n.n(C),q=n(79993),I={};I.styleTagTransform=Z(),I.setAttributes=L(),I.insert=T().bind(null,"head"),I.domAPI=S(),I.insertStyleElement=E(),w()(q.Z,I),q.Z&&q.Z.locals&&q.Z.locals;var M,F,B,D,R,H=n(53913),A=n(29856),N=(n(1203),n(76056),n(99785),n(34988)),V={};function _(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function K(e){var t=document.createElement("div");document.body.appendChild(t),t.innerHTML='<div class="subtitleSync"> <div class="subtitleSyncContainer"> <button type="button" is="paper-icon-button-light" class="subtitleSync-closeButton"><span class="material-icons close"></span></button> <div class="subtitleSyncTextField" contenteditable="true" spellcheck="false">0s</div> <div class="sliderContainer subtitleSyncSliderContainer"> <input is="emby-slider" type="range" step=".1" min="0" max="100" value="50" class="subtitleSyncSlider" data-slider-keep-progress="true"/> </div> </div> </div> ',F=t.querySelector(".subtitleSyncSlider"),B=t.querySelector(".subtitleSyncTextField"),D=t.querySelector(".subtitleSync-closeButton"),R=t.querySelector(".subtitleSyncContainer"),v.Z.tv&&(F.classList.add("focusable"),setTimeout((function(){F.enableKeyboardDragging()}),0)),R.classList.add("hide"),B.updateOffset=function(e){this.textContent=e+"s"},B.addEventListener("click",(function(){this.hasFocus=!0})),B.addEventListener("keydown",(function(e){if("Enter"===e.key){var t=/[-+]?\d+\.?\d*/g.exec(this.textContent);t?(t=t[0],t=parseFloat(t),t=Math.min(30,Math.max(-30,t)),this.textContent=t+"s",i.O.setSubtitleOffset(t,M),F.updateOffset((n=t/30,n*=50,n+=50,Math.min(100,Math.max(0,n.toFixed(1)))))):this.textContent=(i.O.getPlayerSubtitleOffset(M)||0)+"s",this.hasFocus=!1,e.preventDefault()}else this.hasFocus=!0,null===e.key.match(/[+-\d.s]/)&&e.preventDefault();var n;e.stopPropagation()})),B.blur=function(){!this.hasFocus&&this.prototype&&this.prototype.blur()},F.updateOffset=function(e){this.value=void 0===e?50:e},F.addEventListener("change",(function(){i.O.setSubtitleOffset(z(this.value),M),B.updateOffset(z(this.value))})),F.getBubbleHtml=function(e){var t=z(e);return'<h1 class="sliderBubbleText">'+(t>0?"+":"")+parseFloat(t)+"s</h1>"},D.addEventListener("click",(function(){i.O.disableShowingSubtitleOffset(M),U.prototype.toggle("forceToHide")})),e.element=t}function z(e){var t=(e-50)/50;return(t*=30).toFixed(1)}V.styleTagTransform=Z(),V.setAttributes=L(),V.insert=T().bind(null,"head"),V.domAPI=S(),V.insertStyleElement=E(),w()(N.Z,V),N.Z&&N.Z.locals&&N.Z.locals;var U=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),M=t,K(this)}var t,n;return t=e,(n=[{key:"destroy",value:function(){e.prototype.toggle("forceToHide"),M&&(i.O.disableShowingSubtitleOffset(M),i.O.setSubtitleOffset(0,M));var t=this.element;t&&(t.parentNode.removeChild(t),this.element=null)}},{key:"toggle",value:function(e){if(M&&i.O.supportSubtitleOffset(M))switch(e){case void 0:if(i.O.isShowingSubtitleOffsetEnabled(M)&&i.O.canHandleOffsetOnCurrentSubtitle(M)){i.O.getPlayerSubtitleOffset(M)||B.hasFocus||(F.value="50",B.textContent="0s",i.O.setSubtitleOffset(0,M)),R.classList.remove("hide");break}case"hide":if(B.hasFocus)break;case"forceToHide":R.classList.add("hide")}}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j=U,W=n(86628);function G(){return document.querySelector(".dialogContainer .dialog.opened")}function X(e){function t(t){if(!t||"Program"!==t.Type)return C&&(C.destroy(),C=null),void e.querySelector(".btnRecord").classList.add("hide");H.Z.getApiClient(t.ServerId).getCurrentUser().then((function(i){i.Policy.EnableLiveTvManagement&&n.e(3989).then(n.bind(n,63989)).then((function(n){var i=n.default;C?C.refreshItem(t):(C=new i({item:t,button:e.querySelector(".btnRecord")}),e.querySelector(".btnRecord").classList.remove("hide"))}))}))}function y(n){var i=n.originalItem;E=i;var a=n.displayItem||i;t(a);var r=a.SeriesName||a.Album;(a.EpisodeTitle||a.IsSeries)&&(r=a.Name),function(e,t){var n=d.ZP.getDisplayName(e,{includeParentInfo:"Program"!==e.Type,includeIndexNumber:"Program"!==e.Type});n&&t&&(n="".concat(t," - ").concat(n)),n||(n=t||""),W.appRouter.setTitle(n);var i=t||(e?e.Name:null);i&&(document.title=i)}(a,r);var s=e.querySelector(".osdSecondaryMediaInfo"),o=u.ZP.getSecondaryMediaInfoHtml(a,{startDate:!1,programTime:!1});s.innerHTML=o,o?s.classList.remove("hide"):s.classList.add("hide"),Z?(k(_e,a.StartDate),k(Ke,a.EndDate),_e.classList.remove("hide"),Ke.classList.remove("hide"),Fe=a.StartDate?c.ZP.parseISO8601Date(a.StartDate).getTime():0,Be=a.EndDate?c.ZP.parseISO8601Date(a.EndDate).getTime():0):(_e.classList.add("hide"),Ke.classList.add("hide"),_e.innerHTML="",Ke.innerHTML="",Fe=0,Be=0)}function w(e,t){return t?c.ZP.toLocaleTimeString(e,{hour:"numeric",minute:"2-digit",second:"2-digit"}).toLowerCase().replace("am","").replace("pm","").trim():c.ZP.getDisplayTime(e).toLowerCase().replace("am","").replace("pm","").trim()}function k(e,t){var n;t&&(n=w(t=c.ZP.parseISO8601Date(t))),e.innerHTML=n||""}var S,P,T,x,L,O,E,C,Z,q,I,M,F,B=!1;function D(){Ge.classList.remove("osdHeader-hidden"),function(){if(!q){var e=Xe;q="osd",V(e),e.classList.remove("hide"),e.classList.remove("videoOsdBottom-hidden"),v.Z.mobile||setTimeout((function(){f.Z.focus(e.querySelector(".btnPause"))}),50),ge()}}(),K()}function R(){Ge.classList.add("osdHeader-hidden"),function(){if("osd"===q){var e=Xe;V(e),e.classList.add("videoOsdBottom-hidden"),s.ZP.addEventListener(e,We,_,{once:!0}),q=null,ge("hide"),document.activeElement&&document.activeElement.blur()}}(),l.ZP.hideCursor()}function N(){M&&(clearTimeout(M),M=null)}function V(e){s.ZP.removeEventListener(e,We,_,{once:!0})}function _(e){var t=e.target;t==Xe&&(t.classList.add("hide"),s.ZP.removeEventListener(t,We,_,{once:!0}))}function K(){!q||B||G()?N():(N(),M=setTimeout(R,3e3))}function z(e){if("mouse"===(e.pointerType||(v.Z.mobile?"touch":"mouse"))){var t=e.screenX||e.clientX||0,n=e.screenY||e.clientY||0,i=F;if(!i)return void(F={x:t,y:n});if(Math.abs(t-i.x)<10&&Math.abs(n-i.y)<10)return;i.x=t,i.y=n,D()}}function U(t){var n,a=T;switch(t.detail.command){case"left":"osd"===q?D():q||(t.preventDefault(),i.O.rewind(a));break;case"right":"osd"===q?D():q||(t.preventDefault(),i.O.fastForward(a));break;case"pageup":i.O.nextChapter(a);break;case"pagedown":i.O.previousChapter(a);break;case"up":case"down":case"select":case"menu":case"info":case"play":case"playpause":case"pause":case"fastforward":case"rewind":case"next":case"previous":D();break;case"record":(n=e.querySelector(".btnRecord")).classList.contains("hide")||n.click(),D();break;case"togglestats":ve();break;case"back":"osd"!==q||G()||(R(),t.preventDefault())}}function X(){var t,n;!T.forcedFullscreen||i.O.isFullscreen(T)?((n=(t=e.querySelector(".btnFullscreen")).querySelector(".material-icons")).classList.remove("fullscreen_exit","fullscreen"),i.O.isFullscreen(T)?(t.setAttribute("title",p.ZP.translate("ExitFullscreen")+" (f)"),n.classList.add("fullscreen_exit")):(t.setAttribute("title",p.ZP.translate("Fullscreen")+" (f)"),n.classList.add("fullscreen"))):W.appRouter.back()}function Y(){se(i.O.getCurrentPlayer())}function J(n,a){var r,s;a.NowPlayingItem&&(O=!0,function(n,a,r){var s=r.PlayState||{};de(s.IsPaused);var o=i.O.getSupportedCommands(a);qe=o,me(a,s.IsMuted,s.VolumeLevel),Ae&&!Ae.dragging&&(Ae.disabled=!s.CanSeek),je.disabled=!s.CanSeek,Ue.disabled=!s.CanSeek;var l=r.NowPlayingItem||{};De=s.PlaybackStartTimeTicks,fe(s.PositionTicks,l.RunTimeTicks,s.PlaybackStartTimeTicks,s.PlaybackRate,s.BufferedRanges||[]),function(n,a){var r,s=a.NowPlayingItem;if(E=s,!s)return t(null),W.appRouter.setTitle(""),Re.disabled=!0,Ae.disabled=!0,je.disabled=!0,Ue.disabled=!0,e.querySelector(".btnSubtitles").classList.add("hide"),e.querySelector(".btnAudio").classList.add("hide"),e.querySelector(".osdTitle").innerHTML="",void(e.querySelector(".osdMediaInfo").innerHTML="");Z=function(e){return!("TvChannel"!==e.Type||!e.CurrentProgram)}(s),function(e){if("TvChannel"===e.Type){var t=H.Z.getApiClient(e.ServerId);return t.getItem(t.getCurrentUserId(),e.Id).then((function(e){return{originalItem:e,displayItem:e.CurrentProgram}}))}return Promise.resolve({originalItem:e})}(s).then(y),Re.disabled=!1,Ae.disabled=!1,je.disabled=!1,Ue.disabled=!1,i.O.subtitleTracks(n).length?(e.querySelector(".btnSubtitles").classList.remove("hide"),ge()):(e.querySelector(".btnSubtitles").classList.add("hide"),ge("forceToHide")),i.O.audioTracks(n).length>1?e.querySelector(".btnAudio").classList.remove("hide"):e.querySelector(".btnAudio").classList.add("hide"),(null===(r=E.Chapters)||void 0===r?void 0:r.length)>1?(e.querySelector(".btnPreviousChapter").classList.remove("hide"),e.querySelector(".btnNextChapter").classList.remove("hide")):(e.querySelector(".btnPreviousChapter").classList.add("hide"),e.querySelector(".btnNextChapter").classList.add("hide"))}(a,r),r.MediaSource&&r.MediaSource.SupportsTranscoding&&-1!==o.indexOf("SetMaxStreamingBitrate")?e.querySelector(".btnVideoOsdSettings").classList.remove("hide"):e.querySelector(".btnVideoOsdSettings").classList.add("hide");var c=r.MediaSource&&null==r.MediaSource.RunTimeTicks;Ae.setIsClear(c),l.RunTimeTicks&&Ae.setKeyboardSteps(1e6*h.skipBackLength()/l.RunTimeTicks,1e6*h.skipForwardLength()/l.RunTimeTicks),-1===o.indexOf("ToggleFullscreen")||a.isLocalPlayer&&v.Z.tv&&i.O.isFullscreen(a)?e.querySelector(".btnFullscreen").classList.add("hide"):e.querySelector(".btnFullscreen").classList.remove("hide"),-1===o.indexOf("PictureInPicture")?e.querySelector(".btnPip").classList.add("hide"):e.querySelector(".btnPip").classList.remove("hide"),-1===o.indexOf("AirPlay")?e.querySelector(".btnAirPlay").classList.add("hide"):e.querySelector(".btnAirPlay").classList.remove("hide"),X()}(0,this,a),r=e.querySelector(".btnPreviousTrack"),s=e.querySelector(".btnNextTrack"),r.classList.remove("hide"),s.classList.remove("hide"),s.disabled=!1,r.disabled=!1,!0,e.removeEventListener("viewbeforehide",Ee),i.O.isPlayingVideo(T)&&e.addEventListener("viewbeforehide",Ee),function(e){var t=sessionStorage.getItem("playbackRateSpeed");null!==t&&e.setPlaybackRate(t)}(this))}function Q(){O&&de(this.paused())}function $(){if(O){var e=this;me(e,e.isMuted(),e.getVolume())}}function ee(e,t){console.debug("nowplaying event: "+e.type),J.call(this,e,t),te()}function te(){x=!1,L&&(L.destroy(),L=null)}function ne(t,n){Ie=null,te(),console.debug("nowplaying event: "+t.type),"Video"!==n.NextMediaType&&(e.removeEventListener("viewbeforehide",Ee),W.appRouter.back())}function ie(){var e=i.O.getPlayerState(this);J.call(this,{type:"init"},e)}function ae(){document.querySelector(".osdMediaStatus").classList.remove("hide")}function re(){document.querySelector(".osdMediaStatus").classList.add("hide")}function se(e){if(e===T||(oe(),T=e,e)){var t=i.O.getPlayerState(e);J.call(e,{type:"init"},t),m.Events.on(e,"playbackstart",ee),m.Events.on(e,"playbackstop",ne),m.Events.on(e,"volumechange",$),m.Events.on(e,"pause",Q),m.Events.on(e,"unpause",Q),m.Events.on(e,"timeupdate",le),m.Events.on(e,"fullscreenchange",X),m.Events.on(e,"mediastreamschange",ie),m.Events.on(e,"beginFetch",ae),m.Events.on(e,"endFetch",re),te(),e.isFetching&&ae()}}function oe(){he(),ye(),te();var e=T;e&&(m.Events.off(e,"playbackstart",ee),m.Events.off(e,"playbackstop",ne),m.Events.off(e,"volumechange",$),m.Events.off(e,"pause",Q),m.Events.off(e,"unpause",Q),m.Events.off(e,"timeupdate",le),m.Events.off(e,"fullscreenchange",X),m.Events.off(e,"mediastreamschange",ie),T=null)}function le(){if(O&&E){var t=(new Date).getTime();if(!(t-Me<700)){Me=t;var a=this;Ie=i.O.duration(a);var r=1e4*i.O.currentTime(a);fe(r,Ie,i.O.playbackStartTime(a),i.O.getPlaybackRate(a),i.O.getBufferedRanges(a));var s=E;!function(e,t){if("TvChannel"===t.Type){var n=t.CurrentProgram;if(n&&n.EndDate)try{var a=c.ZP.parseISO8601Date(n.EndDate);if((new Date).getTime()>=a.getTime()){console.debug("program info needs to be refreshed");var r=i.O.getPlayerState(e);J.call(e,{type:"init"},r)}}catch(e){console.error("error parsing date: "+n.EndDate)}}}(a,s),function(t,a,r,s){s&&r&&!x&&!q&&"Episode"===a.Type&&h.enableNextVideoInfoOverlay()&&r>=s-1e3*(s>=3e10?40:s>=24e9?35:30)*1e4&&s>=6e9&&s-r>=2e8&&function(t){n.e(3651).then(n.bind(n,13651)).then((function(n){var a=n.default;q||L||(q="upnext",x=!0,i.O.nextItem(t).then((function(n){L=new a({parent:e.querySelector(".upNextContainer"),player:t,nextItem:n}),m.Events.on(L,"hide",ce)}),ce))}))}(t)}(a,s,r,Ie)}}}function ce(){"upnext"===q&&(q=null)}function de(t){var n=e.querySelector(".btnPause"),i=n.querySelector(".material-icons");i.classList.remove("play_arrow","pause"),t?(i.classList.add("play_arrow"),n.setAttribute("title",p.ZP.translate("Play")+" (k)")):(i.classList.add("pause"),n.setAttribute("title",p.ZP.translate("ButtonPause")+" (k)"))}function ue(e,t,n){return(n-e)/t*100}function fe(e,t,n,i,a){if(Z){if(Ae&&!Ae.dragging)if(Fe&&Be){var r=(n+(e||0))/1e4,s=Be-Fe;if(Ae.value=ue(Fe,s,r),a.length){var o=ue(Fe,s,(n+(a[0].start||0))/1e4),l=ue(Fe,s,(n+(a[0].end||0))/1e4);Ae.setBufferedRanges([{start:o,end:l}])}else Ae.setBufferedRanges([])}else Ae.value=0,Ae.setBufferedRanges([]);Ne.innerHTML="",Ve.innerHTML=""}else{if(Ae&&!Ae.dragging){if(t){var c=e/t;c*=100,Ae.value=c}else Ae.value=0;t&&null!=e&&Ie&&!Z&&E.RunTimeTicks&&"Recording"!==E.Type&&null!==i?ze.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"+u.ZP.getEndsAtFromPosition(t,e,i,!0):ze.innerHTML=""}Ae&&Ae.setBufferedRanges(a,t,e),e>=0?(pe(Ne,e),Ne.classList.remove("hide")):Ne.classList.add("hide");var d=t-e;d>=0?(pe(Ve,d),Ve.classList.remove("hide")):Ne.classList.add("hide")}}function me(t,n,i){var a=qe,r=!0,s=!0;-1===a.indexOf("Mute")&&(r=!1),-1===a.indexOf("SetVolume")&&(s=!1),t.isLocalPlayer&&b.M.supports("physicalvolumecontrol")&&(r=!1,s=!1);var o=e.querySelector(".buttonMute"),l=o.querySelector(".material-icons");l.classList.remove("volume_off","volume_up"),n?(o.setAttribute("title",p.ZP.translate("Unmute")+" (m)"),l.classList.add("volume_off")):(o.setAttribute("title",p.ZP.translate("Mute")+" (m)"),l.classList.add("volume_up")),r?o.classList.remove("hide"):o.classList.add("hide"),Re&&(s?He.classList.remove("hide"):He.classList.add("hide"),Re.dragging||(Re.value=i||0))}function pe(e,t,n){if(null!=t){var i=c.ZP.getDisplayRunningTime(t);n&&(i="&nbsp;/&nbsp;"+i),e.innerHTML=i}else e.innerHTML=""}function be(e){if("stats"===e)ve();else if("suboffset"===e){var t=T;t&&(i.O.enableShowingSubtitleOffset(t),ge())}}function ve(){n.e(1392).then(n.bind(n,1392)).then((function(e){var t=e.default,n=T;n&&(I?I.toggle():I=new t({player:n}))}))}function he(){I&&(I.destroy(),I=null)}function ge(e){var t=T;Ce?Ce.toggle(e):t&&(Ce=new j(t))}function ye(){Ce&&(Ce.destroy(),Ce=null)}function we(e){if(!e.target.contains(S))return e.preventDefault(),e.stopPropagation(),!1}function ke(e){S=e.target;var t=g.ZP.getKeyName(e),n=e.ctrlKey||e.altKey||e.metaKey;if(32===e.keyCode)return"BUTTON"===e.target.tagName&&v.Z.tv||(i.O.playPause(T),e.preventDefault(),e.stopPropagation(),S=null),void D();if(v.Z.tv&&g.ZP.isNavigationKey(t))D();else switch(t){case"Enter":D();break;case"Escape":case"Back":"osd"!==q||G()||(R(),e.stopPropagation());break;case"k":i.O.playPause(T),D();break;case"ArrowUp":case"Up":i.O.volumeUp(T);break;case"ArrowDown":case"Down":i.O.volumeDown(T);break;case"l":case"ArrowRight":case"Right":i.O.fastForward(T),D();break;case"j":case"ArrowLeft":case"Left":i.O.rewind(T),D();break;case"f":e.ctrlKey||e.metaKey||(i.O.toggleFullscreen(T),D());break;case"m":i.O.toggleMute(T),D();break;case"p":case"P":e.shiftKey&&i.O.previousTrack(T);break;case"n":case"N":e.shiftKey&&i.O.nextTrack(T);break;case"NavigationLeft":case"GamepadDPadLeft":case"GamepadLeftThumbstickLeft":document.hasFocus()&&(i.O.rewind(T),D());break;case"NavigationRight":case"GamepadDPadRight":case"GamepadLeftThumbstickRight":document.hasFocus()&&(i.O.fastForward(T),D());break;case"Home":i.O.seekPercent(0,T);break;case"End":i.O.seekPercent(100,T);break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":if(!n){var a=10*parseInt(t,10);i.O.seekPercent(a,T)}break;case">":i.O.increasePlaybackRate(T);break;case"<":i.O.decreasePlaybackRate(T);break;case"PageUp":i.O.nextChapter(T);break;case"PageDown":i.O.previousChapter(T)}}function Se(){K()}function Pe(e){S=e.target,B=!0,K()}function Te(){B=!1,K()}function xe(e){S=e.target,B=!0,K()}function Le(){B=!1,K()}function Oe(){B=!1,K()}function Ee(){if(i.O.isPlayingVideo()){A.Z.disableFullscreen(),clearTimeout(P);var t=T;e.removeEventListener("viewbeforehide",Ee),oe(),i.O.stop(t)}}A.Z.enableFullscreen();var Ce,Ze=this,qe=[],Ie=0,Me=0,Fe=0,Be=0,De=0,Re=e.querySelector(".osdVolumeSlider"),He=e.querySelector(".osdVolumeSliderContainer"),Ae=e.querySelector(".osdPositionSlider"),Ne=e.querySelector(".osdPositionText"),Ve=e.querySelector(".osdDurationText"),_e=e.querySelector(".startTimeText"),Ke=e.querySelector(".endTimeText"),ze=e.querySelector(".endsAtText"),Ue=e.querySelector(".btnRewind"),je=e.querySelector(".btnFastForward"),We=s.ZP.whichTransitionEvent(),Ge=document.querySelector(".skinHeader"),Xe=document.querySelector(".videoOsdBottom-maincontrols");Ae.enableKeyboardDragging(),Re.enableKeyboardDragging(),v.Z.tv&&Ae.classList.add("focusable"),e.addEventListener("viewbeforeshow",(function(){Ge.classList.add("osdHeader"),W.appRouter.setTransparency("full")})),e.addEventListener("viewshow",(function(){try{m.Events.on(i.O,"playerchange",Y),se(i.O.getCurrentPlayer()),s.ZP.addEventListener(document,window.PointerEvent?"pointermove":"mousemove",z,{passive:!0}),D(),o.default.on(window,U),document.addEventListener("keydown",ke),s.ZP.addEventListener(document,"keydown",Se,{capture:!0,passive:!0}),s.ZP.addEventListener(window,window.PointerEvent?"pointerdown":"mousedown",Pe,{capture:!0,passive:!0}),s.ZP.addEventListener(window,window.PointerEvent?"pointerup":"mouseup",Te,{capture:!0,passive:!0}),s.ZP.addEventListener(window,"touchstart",xe,{capture:!0,passive:!0}),["touchend","touchcancel"].forEach((function(e){s.ZP.addEventListener(window,e,Le,{capture:!0,passive:!0})})),s.ZP.addEventListener(window,"dragend",Oe,{capture:!0,passive:!0}),(r.Z.firefox||r.Z.edge)&&s.ZP.addEventListener(document,"click",we,{capture:!0})}catch(e){W.appRouter.goHome()}})),e.addEventListener("viewbeforehide",(function(){I&&I.enabled(!1),document.removeEventListener("keydown",ke),s.ZP.removeEventListener(document,"keydown",Se,{capture:!0,passive:!0}),s.ZP.removeEventListener(window,window.PointerEvent?"pointerdown":"mousedown",Pe,{capture:!0,passive:!0}),s.ZP.removeEventListener(window,window.PointerEvent?"pointerup":"mouseup",Te,{capture:!0,passive:!0}),s.ZP.removeEventListener(window,"touchstart",xe,{capture:!0,passive:!0}),["touchend","touchcancel"].forEach((function(e){s.ZP.removeEventListener(window,e,Le,{capture:!0,passive:!0})})),s.ZP.removeEventListener(window,"dragend",Oe,{capture:!0,passive:!0}),(r.Z.firefox||r.Z.edge)&&s.ZP.removeEventListener(document,"click",we,{capture:!0}),N(),Ge.classList.remove("osdHeader"),Ge.classList.remove("osdHeader-hidden"),s.ZP.removeEventListener(document,window.PointerEvent?"pointermove":"mousemove",z,{passive:!0}),o.default.off(window,U),m.Events.off(i.O,"playerchange",Y),oe()})),e.querySelector(".btnFullscreen").addEventListener("click",(function(){i.O.toggleFullscreen(T)})),e.querySelector(".btnPip").addEventListener("click",(function(){i.O.togglePictureInPicture(T)})),e.querySelector(".btnAirPlay").addEventListener("click",(function(){i.O.toggleAirPlay(T)})),e.querySelector(".btnVideoOsdSettings").addEventListener("click",(function(){var e=this;n.e(4268).then(n.bind(n,84268)).then((function(t){var n=T;if(n){var a=i.O.supportSubtitleOffset(n)&&i.O.canHandleOffsetOnCurrentSubtitle(n);t.show({mediaType:"Video",player:n,positionTo:e,stats:!0,suboffset:a,onOption:be}).finally((function(){K()})),setTimeout(K,0)}}))})),e.addEventListener("viewhide",(function(){Ge.classList.remove("hide")})),e.addEventListener("viewdestroy",(function(){Ze.touchHelper&&(Ze.touchHelper.destroy(),Ze.touchHelper=null),C&&(C.destroy(),C=null),he(),ye()}));var Ye=0;s.ZP.addEventListener(e,window.PointerEvent?"pointerdown":"click",(function(e){if(s.ZP.parentWithClass(e.target,["videoOsdBottom","upNextContainer"]))D();else{var t=e.pointerType||(v.Z.mobile?"touch":"mouse"),n=(new Date).getTime();switch(t){case"touch":n-Ye>300&&(Ye=n,"osd"===q?R():q||D());break;case"mouse":e.button||(P?(clearTimeout(P),P=0):P=setTimeout((function(){i.O.playPause(T),D(),P=0}),300));break;default:i.O.playPause(T),D()}}}),{passive:!0}),s.ZP.addEventListener(e,"dblclick",(function(t){t.target===e&&i.O.toggleFullscreen(T)})),e.querySelector(".buttonMute").addEventListener("click",(function(){i.O.toggleMute(T)})),Re.addEventListener("input",(function(e){i.O.setVolume(e.target.value,T)})),Ae.addEventListener("change",(function(){var e=T;if(e){var t=parseFloat(this.value);if(Z){var n=t/100*(Be-Fe)*1e4;n+=1e4*Fe,n-=De,i.O.seek(n,e)}else i.O.seekPercent(t,e)}})),Ae.getBubbleHtml=function(e){if(D(),Z){if(Fe&&Be){var t=Be-Fe;return t/=100,t*=e,t+=Fe,'<h1 class="sliderBubbleText">'+w(new Date(parseInt(t)),!0)+"</h1>"}return"--:--"}if(!Ie)return"--:--";var n=Ie;n/=100,n*=e;var i=E;if(i&&i.Chapters&&i.Chapters.length&&i.Chapters[0].ImageTag){var a=function(e,t,n,i){for(var a,r=-1,s=0,o=n.length;s<o;s++){var l=n[s];i>=l.StartPositionTicks&&(a=l,r=s)}if(!a)return null;var d=function(e,t,n,i,a){return t.ImageTag?a.getScaledImageUrl(e.Id,{maxWidth:400,tag:t.ImageTag,type:"Chapter",index:n}):null}(t,a,r,0,e);if(d){var u='<div class="chapterThumbContainer">';return u+='<img class="chapterThumb" src="'+d+'" />',u+='<div class="chapterThumbTextContainer">',u+='<div class="chapterThumbText chapterThumbText-dim">',u+=a.Name,u+="</div>",u+='<h2 class="chapterThumbText">',u+=c.ZP.getDisplayRunningTime(i),u+="</h2>",(u+="</div>")+"</div>"}return null}(H.Z.getApiClient(i.ServerId),i,i.Chapters,n);if(a)return a}return'<h1 class="sliderBubbleText">'+c.ZP.getDisplayRunningTime(n)+"</h1>"},e.querySelector(".btnPreviousTrack").addEventListener("click",(function(){i.O.previousTrack(T)})),e.querySelector(".btnPreviousChapter").addEventListener("click",(function(){i.O.previousChapter(T)})),e.querySelector(".btnPause").addEventListener("click",(function(){i.O.playPause(T)})),e.querySelector(".btnNextChapter").addEventListener("click",(function(){i.O.nextChapter(T)})),e.querySelector(".btnNextTrack").addEventListener("click",(function(){i.O.nextTrack(T)})),Ue.addEventListener("click",(function(){i.O.rewind(T)})),je.addEventListener("click",(function(){i.O.fastForward(T)})),e.querySelector(".btnAudio").addEventListener("click",(function(){var e=T,t=i.O.audioTracks(e),a=i.O.getAudioStreamIndex(e),r=t.map((function(e){var t={name:e.DisplayTitle,id:e.Index};return e.Index===a&&(t.selected=!0),t})),s=this;Promise.resolve().then(n.bind(n,78407)).then((function(t){t.default.show({items:r,title:p.ZP.translate("Audio"),positionTo:s}).then((function(t){var n=parseInt(t);n!==a&&i.O.setAudioStreamIndex(n,e)})).finally((function(){K()})),setTimeout(K,0)}))})),e.querySelector(".btnSubtitles").addEventListener("click",(function(){var e=T,t=i.O.subtitleTracks(e),a=i.O.getSubtitleStreamIndex(e);null==a&&(a=-1),t.unshift({Index:-1,DisplayTitle:p.ZP.translate("Off")});var r=t.map((function(e){var t={name:e.DisplayTitle,id:e.Index};return e.Index===a&&(t.selected=!0),t})),s=this;Promise.resolve().then(n.bind(n,78407)).then((function(t){t.default.show({title:p.ZP.translate("Subtitles"),items:r,positionTo:s}).then((function(t){var n=parseInt(t);n!==a&&i.O.setSubtitleStreamIndex(n,e),ge()})).finally((function(){K()})),setTimeout(K,0)}))}));var Je=function(t){var n="",i="",a="oneShotPulse",r=1500,s=e.querySelector("#syncPlayIcon");switch(t){case"schedule-play":n="sync spin",i="play_arrow centered",a="infinitePulse",r=-1,R();break;case"unpause":n="play_circle_outline";break;case"pause":n="pause_circle_outline",D();break;case"seek":n="update",a="infinitePulse",r=-1;break;case"buffering":n="schedule",a="infinitePulse",r=-1;break;case"wait-pause":n="schedule",i="pause shifted",a="infinitePulse",r=-1;break;case"wait-unpause":n="schedule",i="play_arrow shifted",a="infinitePulse",r=-1;break;default:return void(s.style.visibility="hidden")}s.setAttribute("class","syncPlayIconCircle "+a),s.querySelector(".primary-icon").setAttribute("class","primary-icon material-icons "+n),s.querySelector(".secondary-icon").setAttribute("class","secondary-icon material-icons "+i);var o=s.cloneNode(!0);o.style.visibility="visible",s.parentNode.replaceChild(o,s),r<0||setTimeout((function(){o.style.visibility="hidden"}),r)};m.Events.on(a.Z.Manager,"enabled",(function(t,n){n||(e.querySelector("#syncPlayIcon").style.visibility="hidden")})),m.Events.on(a.Z.Manager,"notify-osd",(function(e,t){Je(t)})),m.Events.on(a.Z.Manager,"group-state-update",(function(e,t,n){"Playing"===t&&"Unpause"===n||"Playing"===t&&"Ready"===n?Je("schedule-play"):"Paused"===t&&"Pause"===n?Je("pause"):"Paused"===t&&"Ready"===n?Je("clear"):"Waiting"===t&&"Seek"===n?Je("seek"):"Waiting"===t&&"Buffer"===n?Je("buffering"):"Waiting"===t&&"Pause"===n?Je("wait-pause"):"Waiting"===t&&"Unpause"===n&&Je("wait-unpause")}))}},79993:function(e,t,n){var i=n(54933),a=n.n(i),r=n(93476),s=n.n(r)()(a());s.push([e.id,".chapterThumbTextContainer,.videoOsdBottom{user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.videoOsdBottom{-webkit-touch-callout:none;background:linear-gradient(0deg,hsla(0,0%,6%,.75),hsla(0,0%,6%,0));bottom:0;color:#fff;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:center;justify-content:center;left:0;padding-bottom:1.75em;padding-top:7.5em;pointer-events:none;position:fixed;right:0;transition:opacity .3s ease-out;-webkit-user-select:none;-ms-user-select:none;user-select:none;will-change:opacity}.skinHeader-withBackground.osdHeader{-webkit-backdrop-filter:none;backdrop-filter:none;background:linear-gradient(180deg,hsla(0,0%,6%,.75),hsla(0,0%,6%,0));color:#eee;height:7.5em;pointer-events:none;position:relative;transition:opacity .3s ease-out;z-index:1}.osdHeader-hidden{opacity:0}.osdHeader .headerTop{max-height:3.5em;pointer-events:all}.osdHeader .headerButton:not(.headerBackButton):not(.headerCastButton):not(.headerSyncButton){display:none}.chapterThumbContainer{box-shadow:0 0 1.9vh #000;-webkit-flex-grow:1;flex-grow:1;position:relative}.chapterThumb{background-position:50%;background-repeat:no-repeat;background-size:contain;border:0;height:20vh;min-width:20vh}@media (orientation:portrait){.chapterThumb{height:30vw;min-width:30vw}}@media (max-height:50em)and (orientation:landscape){.chapterThumb{height:30vh;min-width:30vh}}.chapterThumbTextContainer{background:rgba(0,0,0,.7);bottom:0;left:0;padding:.25em .5em;position:absolute;right:0;-webkit-user-select:none;-ms-user-select:none;user-select:none}.chapterThumbText{margin:0;opacity:1;padding:.25em 0}.chapterThumbText-dim{opacity:.6}.videoOsdBottom-hidden{opacity:0}.osdControls{-webkit-flex-grow:1;flex-grow:1;padding:0 .8em;pointer-events:all}.layout-desktop .osdControls{max-width:175vh}.videoOsdBottom .buttons{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:.25em 0 0}.osdVolumeSliderContainer{-webkit-flex-grow:1;flex-grow:1;width:9em}.osdMediaInfo,.volumeButtons{-webkit-box-align:center;display:flex}.osdMediaInfo,.volumeButtons{-webkit-align-items:center;align-items:center;display:-webkit-flex}.volumeButtons{display:flex;margin:0 1em 0 .29em}.osdTimeText{margin-left:1em;margin-right:auto;-webkit-user-select:none;-ms-user-select:none;user-select:none}.osdTitle,.osdTitleSmall{margin:0 1em 0 0}.osdMediaInfo{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}.osdSecondaryMediaInfo{padding-left:.6em!important}.osdTextContainer{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;margin-bottom:.7em;padding-left:.5em;-webkit-user-select:none;-ms-user-select:none;user-select:none}.osdMainTextContainer{-webkit-align-items:baseline;align-items:baseline}.osdMediaStatus{margin-left:auto}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.osdMediaStatus .animate{-webkit-animation:spin 4s linear infinite;animation:spin 4s linear infinite}@media (max-width:30em){.osdMediaInfo,.osdPoster{display:none!important}}@media (max-width:33.75em){.videoOsdBottom .paper-icon-button-light{margin:0}}@media (max-width:43em){.osdMediaStatus span,.videoOsdBottom .volumeButtons{display:none!important}}@media (max-width:50em){.videoOsdBottom .btnFastForward,.videoOsdBottom .btnRewind{display:none!important}}@media (max-width:75em){.videoOsdBottom .endsAtText{display:none!important}}.syncPlayContainer{-webkit-align-items:center;align-items:center;bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;pointer-events:none;position:absolute;right:0;top:0}.primary-icon{-webkit-align-self:center;align-self:center;font-size:64px;position:absolute}.primary-icon.spin{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;font-size:76px!important}.secondary-icon{font-size:24px;position:absolute}.secondary-icon.centered{-webkit-align-self:center;align-self:center;font-size:28px!important}.secondary-icon.shifted{bottom:0;font-size:52px;right:0}.syncPlayIconCircle{background:rgba(0,164,220,0);border-radius:50%;box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,0);display:-webkit-flex;display:flex;height:96px;-webkit-justify-content:center;justify-content:center;margin:60px;position:relative;-webkit-transform:scale(1);transform:scale(1);visibility:hidden;width:96px}.syncPlayIconCircle.oneShotPulse{-webkit-animation:pulse 1.5s 1;animation:pulse 1.5s 1}.syncPlayIconCircle.infinitePulse{-webkit-animation:infinite-pulse 1.5s infinite;animation:infinite-pulse 1.5s infinite}@-webkit-keyframes pulse{0%{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,.3);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}70%{background:rgba(0,164,220,0);box-shadow:0 0 0 60px rgba(0,164,220,0);color:rgba(0,164,220,0);-webkit-transform:scale(1);transform:scale(1)}to{background:rgba(0,164,220,0);box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,0);-webkit-transform:scale(.95);transform:scale(.95)}}@keyframes pulse{0%{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,.3);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}70%{background:rgba(0,164,220,0);box-shadow:0 0 0 60px rgba(0,164,220,0);color:rgba(0,164,220,0);-webkit-transform:scale(1);transform:scale(1)}to{background:rgba(0,164,220,0);box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,0);-webkit-transform:scale(.95);transform:scale(.95)}}@-webkit-keyframes infinite-pulse{0%{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,.3);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}70%{background:rgba(0,164,220,0);box-shadow:0 0 0 60px rgba(0,164,220,0);color:rgba(0,164,220,.6);-webkit-transform:scale(1);transform:scale(1)}to{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}}@keyframes infinite-pulse{0%{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,.3);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}70%{background:rgba(0,164,220,0);box-shadow:0 0 0 60px rgba(0,164,220,0);color:rgba(0,164,220,.6);-webkit-transform:scale(1);transform:scale(1)}to{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}}@keyframes spin{to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}",""]),t.Z=s},34988:function(e,t,n){var i=n(54933),a=n.n(i),r=n(93476),s=n.n(r)()(a());s.push([e.id,".subtitleSync{position:absolute;width:100%}.subtitleSyncContainer{background:rgba(28,28,28,.8);border-radius:.3em;color:#fff;height:4.2em;margin-left:auto;margin-right:auto;min-width:18em;position:relative;width:40%}.subtitleSync-closeButton{color:#ccc;position:absolute;right:0;top:0;z-index:2}.subtitleSyncTextField{color:#fff;font-size:20px;left:0;margin-left:30%;margin-right:30%;position:absolute;text-align:center;top:.1em;width:40%;z-index:2}#prompt{-webkit-flex-shrink:0;flex-shrink:0}.subtitleSyncSliderContainer{border-radius:.3em;-webkit-flex-grow:1;flex-grow:1;height:1.4em;margin-left:1%;margin-right:1%;top:2.5em;width:98%;z-index:1}",""]),t.Z=s}}]);