"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62629,12801,31473,27636],{12801:function(e,t,n){n.r(t),n.d(t,{show:function(){return m}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(27471),n(72410),n(15610),n(52077),n(25901),n(92189),n(91047);var i=n(65009),a=n.n(i),r=n(93355),s=n(30325),o=n(94994),l=n(72365);function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw r}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function d(e,t,i){Promise.resolve().then(n.bind(n,54517)).then((function(n){var a=i?"on":"off";n.centerFocus[a](e,t)}))}function m(e){var t,n={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};s.Z.tv?(n.size="fullscreen",t=!0,n.autoFocus=!0):(n.modal=!1,n.entryAnimation=e.entryAnimation,n.exitAnimation=e.exitAnimation,n.entryAnimationDuration=e.entryAnimationDuration||140,n.exitAnimationDuration=e.exitAnimationDuration||100,n.autoFocus=!1);var i=r.default.createDialog(n);t?i.classList.add("actionsheet-fullscreen"):i.classList.add("actionsheet-not-fullscreen"),i.classList.add("actionSheet"),e.dialogClass&&i.classList.add(e.dialogClass);var c="",m=s.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",h="";e.items.length>20&&(h+="min-width:"+(l.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var f,v,g=!1,p=[],b=u(e.items);try{for(b.s();!(v=b.n()).done;){var y=v.value;(f=y.icon||(y.selected?"check":null))&&(g=!0),p.push(f||"")}}catch(e){b.e(e)}finally{b.f()}s.Z.tv&&(c+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(o.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var w=e.title&&!g;w||s.Z.tv?c+='<div class="actionSheetContent actionSheetContent-centered">':c+='<div class="actionSheetContent">',e.title&&(c+='<h1 class="actionSheetTitle">'+a()(e.title)+"</h1>"),e.text&&(c+='<p class="actionSheetText">'+a()(e.text)+"</p>");var S="actionSheetScroller";s.Z.tv&&(S+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),c+='<div class="'+S+" "+m+'" style="'+h+'">';var k="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(k+=" listItem-border"),e.menuItemClass&&(k+=" "+e.menuItemClass),s.Z.tv&&(k+=" listItem-focusscale"),s.Z.mobile&&(k+=" actionsheet-xlargeFont");for(var I=0;I<e.items.length;I++){var P=e.items[I];P.divider?c+='<div class="actionsheetDivider"></div>':(c+="<button"+(P.selected&&s.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+k+'" data-id="'+(null==P.id||""===P.id?P.value:P.id)+'">',(f=p[I])?c+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(f,'" aria-hidden="true"></span>'):g&&!w&&(c+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),c+='<div class="listItemBody actionsheetListItemBody">',c+='<div class="listItemBodyText actionSheetItemText">',c+=a()(P.name||P.textContent||P.innerText),c+="</div>",P.secondaryText&&(c+='<div class="listItemBodyText secondary">'.concat(a()(P.secondaryText),"</div>")),c+="</div>",P.asideText&&(c+='<div class="listItemAside actionSheetItemAsideText">'.concat(a()(P.asideText),"</div>")),c+="</button>")}e.showCancel&&(c+='<div class="buttons">',c+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(o.ZP.translate("ButtonCancel"),"</button>"),c+="</div>"),c+="</div>",i.innerHTML=c,s.Z.tv&&d(i.querySelector(".actionSheetScroller"),!1,!0);var L,T,A=i.querySelector(".btnCloseActionSheet");return A&&A.addEventListener("click",(function(){r.default.close(i)})),e.timeout&&(T=setTimeout((function(){r.default.close(i)}),e.timeout)),new Promise((function(t,a){var o;i.addEventListener("click",(function(n){var a=l.ZP.parentWithClass(n.target,"actionSheetMenuItem");a&&(L=a.getAttribute("data-id"),e.resolveOnClick&&(e.resolveOnClick.indexOf?-1!==e.resolveOnClick.indexOf(L)&&(t(L),o=!0):(t(L),o=!0)),r.default.close(i))})),i.addEventListener("close",(function(){s.Z.tv&&d(i.querySelector(".actionSheetScroller"),!1,!1),T&&(clearTimeout(T),T=null),o||(null!=L?(e.callback&&e.callback(L),t(L)):a("ActionSheet closed without resolving"))})),r.default.open(i);var c=e.positionTo&&"fullscreen"!==n.size?function(e,t){var n=l.ZP.getWindowSize(),i=n.innerHeight,a=n.innerWidth,r=function(e){var t=[];if(!document)return t;var n,i=u(e);try{for(i.s();!(n=i.n()).done;){var a=n.value.getBoundingClientRect();t.push({top:a.top,left:a.left,width:a.width,height:a.height})}}catch(e){i.e(e)}finally{i.f()}return t}([e.positionTo])[0];"top"!==e.positionY&&(r.top+=(r.height||0)/2),r.left+=(r.width||0)/2;var s=t.offsetHeight||300,o=t.offsetWidth||160;r.top-=s/2,r.left-=o/2;var c=r.left+o-a,d=r.top+s-i;return c>0&&(r.left-=c+20),d>0&&(r.top-=d+20),r.top+=e.offsetTop||0,r.left+=e.offsetLeft||0,r.top=Math.max(r.top,10),r.left=Math.max(r.left,10),r}(e,i):null;c&&(i.style.position="fixed",i.style.margin=0,i.style.left=c.left+"px",i.style.top=c.top+"px")}))}n(38228),t.default={show:m}},56229:function(e,t,n){n.r(t),n(63238),n(55849),n(43512),n(27471),n(48410);var i=n(61693),a=n(81643),r=n(57366),s=n(98301),o=n(30325),l=n(48957),u=n(69011),c=n(84881),d=n(72365),m=n(9337),h=(n(61414),n(27636),n(18613));function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,a=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==f(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===f(a)?a:String(a)),i)}var a}n(19068),n(87211),n(25901),n(92189),n(95163),n(99785),n(91047),n(5769),n(17460),n(14078);var g,p,b,y,w,S,k,I,P,L,T,A,x,B,C,Z,E=new(function(){function e(){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=((t=document.createElement("div")).classList.add("appfooter"),document.body.appendChild(t),t),this.add=function(e){this.element.appendChild(e)},this.insert=function(e){"string"==typeof e?this.element.insertAdjacentHTML("afterbegin",e):this.element.insertBefore(e,this.element.firstChild)}}var t,n;return t=e,(n=[{key:"destroy",value:function(){this.element=null}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()),M=n(61008),O=(n(42855),n(66560)),q=[],R=0,N={},D=0,F=!0;function j(){this.classList.add("hide")}function U(){l.O.playPause(g)}function H(){if(Z)return Z;var e,t,n=E.element;return(Z=n.querySelector(".nowPlayingBar"))||(n.insertAdjacentHTML("afterbegin",(e="",e+='<div class="nowPlayingBar hide nowPlayingBar-hidden">',e+='<div class="nowPlayingBarTop">',e+='<div class="nowPlayingBarPositionContainer sliderContainer" dir="ltr">',e+='<input type="range" is="emby-slider" pin step=".01" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarPositionSlider" data-slider-keep-progress="true"/>',e+="</div>",e+='<div class="nowPlayingBarInfoContainer">',e+='<div class="nowPlayingImage"></div>',e+='<div class="nowPlayingBarText"></div>',e+="</div>",e+='<div class="nowPlayingBarCenter" dir="ltr">',e+='<button is="paper-icon-button-light" class="previousTrackButton mediaButton"><span class="material-icons skip_previous" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton"><span class="material-icons pause" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="stopButton mediaButton"><span class="material-icons stop" aria-hidden="true"></span></button>',o.Z.mobile||(e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton"><span class="material-icons skip_next" aria-hidden="true"></span></button>'),e+='<div class="nowPlayingBarCurrentTime"></div>',e+="</div>",e+='<div class="nowPlayingBarRight">',e+='<button is="paper-icon-button-light" class="muteButton mediaButton"><span class="material-icons volume_up" aria-hidden="true"></span></button>',e+='<div class="sliderContainer nowPlayingBarVolumeSliderContainer hide" style="width:9em;vertical-align:middle;display:inline-flex;">',e+='<input type="range" is="emby-slider" pin step="1" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarVolumeSlider"/>',e+="</div>",e+='<button is="paper-icon-button-light" class="btnAirPlay mediaButton"><span class="material-icons airplay" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="toggleRepeatButton mediaButton"><span class="material-icons repeat" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="btnShuffleQueue mediaButton"><span class="material-icons shuffle" aria-hidden="true"></span></button>',e+='<div class="nowPlayingBarUserDataButtons">',e+="</div>",e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton"><span class="material-icons pause" aria-hidden="true"></span></button>',o.Z.mobile?e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton"><span class="material-icons skip_next" aria-hidden="true"></span></button>':e+='<button is="paper-icon-button-light" class="btnToggleContextMenu mediaButton"><span class="material-icons more_vert" aria-hidden="true"></span></button>',e+="</div>",(e+="</div>")+"</div>")),window.CustomElements.upgradeSubtree(n),Z=n.querySelector(".nowPlayingBar"),o.Z.mobile&&(_(Z.querySelector(".btnShuffleQueue")),_(Z.querySelector(".nowPlayingBarCenter"))),r.Z.safari&&r.Z.slow&&Z.classList.add("noMediaProgress"),M.ZP.on(Z),p=(t=Z).querySelector(".nowPlayingBarCurrentTime"),b=t.querySelector(".nowPlayingImage"),w=t.querySelector(".nowPlayingBarText"),S=t.querySelector(".nowPlayingBarUserDataButtons"),T=t.querySelector(".nowPlayingBarPositionSlider"),k=t.querySelector(".muteButton"),L=t.querySelectorAll(".playPauseButton"),x=t.querySelector(".toggleRepeatButton"),I=t.querySelector(".nowPlayingBarVolumeSlider"),P=t.querySelector(".nowPlayingBarVolumeSliderContainer"),k.addEventListener("click",(function(){g&&l.O.toggleMute(g)})),t.querySelector(".stopButton").addEventListener("click",(function(){g&&l.O.stop(g)})),L.forEach((function(e){e.addEventListener("click",U)})),t.querySelector(".nextTrackButton").addEventListener("click",(function(){g&&l.O.nextTrack(g)})),t.querySelector(".previousTrackButton").addEventListener("click",(function(e){if(g){if("Audio"===N.NowPlayingItem.MediaType){if(e.detail>1)return;if(g._currentTime>=5||l.O.getCurrentPlaylistIndex(g)<=1)return l.O.seekPercent(0,g),void(T.value=0)}l.O.previousTrack(g)}})),t.querySelector(".previousTrackButton").addEventListener("dblclick",(function(){g&&l.O.previousTrack(g)})),(A=t.querySelector(".btnAirPlay")).addEventListener("click",(function(){g&&l.O.toggleAirPlay(g)})),t.querySelector(".btnShuffleQueue").addEventListener("click",(function(){g&&l.O.toggleQueueShuffleMode()})),(x=t.querySelector(".toggleRepeatButton")).addEventListener("click",(function(){switch(l.O.getRepeatMode()){case"RepeatAll":l.O.setRepeatMode("RepeatOne");break;case"RepeatOne":l.O.setRepeatMode("RepeatNone");break;case"RepeatNone":l.O.setRepeatMode("RepeatAll")}})),B=x.querySelector(".material-icons"),P.classList.toggle("hide",c.M.supports("physicalvolumecontrol")),I.addEventListener("input",(function(e){g&&g.setVolume(e.target.value)})),T.addEventListener("change",(function(){if(g){var e=parseFloat(this.value);l.O.seekPercent(e,g)}})),T.getBubbleText=function(e){if(null==N||!N.NowPlayingItem||!D)return"--:--";var t=D;return t/=100,t*=e,i.ZP.getDisplayRunningTime(t)},t.addEventListener("click",(function(e){d.ZP.parentWithTag(e.target,["BUTTON","INPUT"])||O.appRouter.showNowPlaying()}))),Z}function _(e){e.classList.add("hide")}function V(e){L&&L.forEach((function(t){var n=t.querySelector(".material-icons");n.classList.remove("play_arrow","pause"),n.classList.add(e?"play_arrow":"pause")}))}function W(e){B.classList.remove("repeat","repeat_one");var t="buttonActive";switch(e){case"RepeatAll":B.classList.add("repeat"),x.classList.add(t);break;case"RepeatOne":B.classList.add("repeat_one"),x.classList.add(t);break;default:B.classList.add("repeat"),x.classList.remove(t)}}function Y(e,t,n){if(T&&!T.dragging)if(t){var a=e/t;a*=100,T.value=a}else T.value=0;if(T&&T.setBufferedRanges(n,t,e),p){var r=null==e?"--:--":i.ZP.getDisplayRunningTime(e);t&&(r+=" / "+i.ZP.getDisplayRunningTime(t)),p.innerHTML=r}}function Q(e,t){var n=q,i=!0,a=!0;-1===n.indexOf("ToggleMute")&&(i=!1);var r=k.querySelector(".material-icons");r.classList.remove("volume_off","volume_up"),r.classList.add(e?"volume_off":"volume_up"),-1===n.indexOf("SetVolume")&&(a=!1),g.isLocalPlayer&&c.M.supports("physicalvolumecontrol")&&(i=!1,a=!1),i?k.classList.remove("hide"):_(k),I&&(P.classList.toggle("hide",!a),I.dragging||(I.value=t||0))}function z(e,t){console.debug("nowplaying event: "+e.type),ee.call(this,e,t)}function K(){C&&W(l.O.getRepeatMode())}function X(){if(C){var e=l.O.getQueueShuffleMode(),t="buttonActive",n=Z.querySelector(".btnShuffleQueue");"Shuffle"===e?n.classList.add(t):n.classList.remove(t)}}function $(){C=!1;var e=document.getElementsByClassName("nowPlayingBar")[0];e&&function(e){e.offsetWidth,e.classList.add("nowPlayingBar-hidden"),d.ZP.addEventListener(e,d.ZP.whichTransitionEvent(),j,{once:!0})}(e)}function G(e,t){console.debug("nowplaying event: "+e.type),this.isLocalPlayer?"Audio"!==t.NextMediaType&&$():t.NextMediaType||$()}function J(){C&&V(this.paused())}function ee(e,t){if("init"!==e.type){console.debug("nowplaying event: "+e.type);t.NowPlayingItem&&!o.Z.tv&&!1!==t.IsFullscreen?this.isLocalPlayer&&t.NowPlayingItem&&"Video"===t.NowPlayingItem.MediaType?$():(C=!0,Z||H(),function(e,t,n){var i;F?(i=H(),d.ZP.removeEventListener(i,d.ZP.whichTransitionEvent(),j,{once:!0}),i.classList.remove("hide"),i.offsetWidth,i.classList.remove("nowPlayingBar-hidden")):$(),N=t;var a=l.O.getPlayerInfo(),r=t.PlayState||{};V(r.IsPaused);var c=a.supportedCommands;q=c,-1===c.indexOf("SetRepeatMode")?x.classList.add("hide"):x.classList.remove("hide");var f=-1===c.indexOf("AirPlay");if(A.classList.toggle("hide",f),W(l.O.getRepeatMode()),X(),Q(r.IsMuted,r.VolumeLevel),T&&!T.dragging){T.disabled=!r.CanSeek;var v=t.MediaSource&&null==t.MediaSource.RunTimeTicks;T.setIsClear(v)}var g=t.NowPlayingItem||{};Y(r.PositionTicks,g.RunTimeTicks,l.O.getBufferedRanges(n)),function(e){var t=e.NowPlayingItem,n=t?u.Z.getNowPlayingNames(t):[];if(w.innerHTML="",n){var i=document.createElement("div"),a=document.createElement("div");if(a.classList.add("nowPlayingBarSecondaryText"),n.length>1&&(n[1].secondary=!0,n[1].text)){var r=document.createElement("a");r.innerText=n[1].text,a.appendChild(r)}if(n[0].text){var l=document.createElement("a");l.innerText=n[0].text,i.appendChild(l)}w.appendChild(i),w.appendChild(a)}var c=t?function(e,t){if(!e)throw new Error("item cannot be null!");if("Episode"!==e.Type)return null;if((t=t||{}).type=t.type||"Primary","Primary"===t.type&&e.SeriesPrimaryImageTag)return t.tag=e.SeriesPrimaryImageTag,h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if("Thumb"===t.type){if(e.SeriesThumbImageTag)return t.tag=e.SeriesThumbImageTag,h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if(e.ParentThumbImageTag)return t.tag=e.ParentThumbImageTag,h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.ParentThumbItemId,t)}return null}(t,{height:70})||function(e,t){var n;if(!e)throw new Error("item cannot be null!");return(t=t||{}).type=t.type||"Primary",null!==(n=e.ImageTags)&&void 0!==n&&n[t.type]?(t.tag=e.ImageTags[t.type],h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.PrimaryImageItemId||e.Id,t)):e.AlbumId&&e.AlbumPrimaryImageTag?(t.tag=e.AlbumPrimaryImageTag,h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.AlbumId,t)):null}(t,{height:70}):null;if(c!==y&&(c?(y=c,s.default.lazyImage(b,y),b.style.display=null,w.style.marginLeft=null):(y=null,b.style.backgroundImage="",b.style.display="none",w.style.marginLeft="1em")),t.Id){var d=h.Z.getApiClient(t.ServerId);d.getItem(d.getCurrentUserId(),t.Id).then((function(e){var t=e.UserData||{},n=null==t.Likes?"":t.Likes;if(!o.Z.mobile){var i=Z.querySelector(".btnToggleContextMenu"),a=i.cloneNode(!0);i.parentNode.replaceChild(a,i);var r={play:!1,queue:!1,stopPlayback:!0,clearQueue:!0,positionTo:i=Z.querySelector(".btnToggleContextMenu")};d.getCurrentUser().then((function(t){i.addEventListener("click",(function(){m.default.show(Object.assign({item:e,user:t},r))}))}))}S.innerHTML='<button is="emby-ratingbutton" type="button" class="listItemButton mediaButton paper-icon-button-light" data-id="'+e.Id+'" data-serverid="'+e.ServerId+'" data-itemtype="'+e.Type+'" data-likes="'+n+'" data-isfavorite="'+t.IsFavorite+'"><span class="material-icons favorite" aria-hidden="true"></span></button>'}))}else S.innerHTML=""}(t)}(0,t,this)):$()}}function te(){if(C){var e=(new Date).getTime();if(!(e-R<700)){R=e;var t=this;D=l.O.duration(t),Y(1e4*l.O.currentTime(t),D,l.O.getBufferedRanges(t))}}}function ne(){C&&Q(this.isMuted(),this.getVolume())}function ie(e,t){var n=l.O.getPlayerState(e);ee.call(e,{type:t},n)}function ae(e){e!==g&&(function(){var e=g;e&&(a.Z.off(e,"playbackstart",z),a.Z.off(e,"statechange",z),a.Z.off(e,"repeatmodechange",K),a.Z.off(e,"shufflequeuemodechange",X),a.Z.off(e,"playbackstop",G),a.Z.off(e,"volumechange",ne),a.Z.off(e,"pause",J),a.Z.off(e,"unpause",J),a.Z.off(e,"timeupdate",te),g=null,$())}(),g=e,e&&(ie(e,"init"),a.Z.on(e,"playbackstart",z),a.Z.on(e,"statechange",z),a.Z.on(e,"repeatmodechange",K),a.Z.on(e,"shufflequeuemodechange",X),a.Z.on(e,"playbackstop",G),a.Z.on(e,"volumechange",ne),a.Z.on(e,"pause",J),a.Z.on(e,"unpause",J),a.Z.on(e,"timeupdate",te)))}a.Z.on(l.O,"playerchange",(function(){ae(l.O.getCurrentPlayer())})),ae(l.O.getCurrentPlayer()),document.addEventListener("viewbeforeshow",(function(e){e.detail.options.enableMediaControl?F||(F=!0,g?ie(g,"refresh"):$()):F&&(F=!1,$())}))},69011:function(e,t,n){n(61013),t.Z={getNowPlayingNames:function(e,t){var n,i,a=e,r=null,s=e.Name;e.AlbumId&&"Audio"===e.MediaType&&(a={Id:e.AlbumId,Name:e.Album,Type:"MusicAlbum",IsFolder:!0}),"Video"===e.MediaType&&(null!=e.IndexNumber&&(s=e.IndexNumber+" - "+s),null!=e.ParentIndexNumber&&(s=e.ParentIndexNumber+"."+s));var o="";null!==(n=e.ArtistItems)&&void 0!==n&&n.length?(r={Id:e.ArtistItems[0].Id,Name:e.ArtistItems[0].Name,Type:"MusicArtist",IsFolder:!0},o=e.ArtistItems.map((function(e){return e.Name})).join(", ")):null!==(i=e.Artists)&&void 0!==i&&i.length?o=e.Artists.join(", "):e.SeriesName||e.Album?(o=s,s=e.SeriesName||e.Album,r=a,a=e.SeriesId?{Id:e.SeriesId,Name:e.SeriesName,Type:"Series",IsFolder:!0}:null):e.ProductionYear&&!1!==t&&(o=e.ProductionYear);var l=[];return l.push({text:s,item:a}),o&&l.push({text:o,item:r}),l}}},27636:function(e,t,n){n.r(t);var i=n(44038),a=n(94994),r=n(81643),s=n(38228),o=n(18613);function l(){var e=this,t=e.getAttribute("data-id"),n=e.getAttribute("data-serverid"),i=o.Z.getApiClient(n),a=this.getAttribute("data-likes");a="true"===a||"false"!==a&&null,function(e,t,n,i,a){return t.updateFavoriteStatus(t.getCurrentUserId(),n,!a)}(0,i,t,0,"true"===this.getAttribute("data-isfavorite")).then((function(t){c(e,t.Likes,t.IsFavorite)}))}function u(e,t,n){n.ItemId===this.getAttribute("data-id")&&c(this,n.Likes,n.IsFavorite)}function c(e,t,n,i){var a=e.querySelector(".material-icons");n?(a&&(a.classList.add("favorite"),a.classList.add("ratingbutton-icon-withrating")),e.classList.add("ratingbutton-withrating")):(a&&(a.classList.add("favorite"),a.classList.remove("ratingbutton-icon-withrating")),e.classList.remove("ratingbutton-withrating")),!1!==i&&(e.setAttribute("data-isfavorite",n),e.setAttribute("data-likes",null===t?"":t)),d(e,n)}function d(e,t){e.title=t?a.ZP.translate("Favorite"):a.ZP.translate("AddToFavorites");var n=e.querySelector(".button-text");n&&(n.innerText=e.title)}function m(e){var t,n,a;e.removeEventListener("click",l),(a=(t=e)[n="UserDataChanged"])&&(r.Z.off(i.default,n,a),t[n]=null)}function h(e){var t,n,a;m(e),e.addEventListener("click",l),t=e,n="UserDataChanged",a=u.bind(t),r.Z.on(i.default,n,a),t[n]=a}var f=Object.create(s.Z);f.createdCallback=function(){s.Z.createdCallback&&s.Z.createdCallback.call(this)},f.attachedCallback=function(){s.Z.attachedCallback&&s.Z.attachedCallback.call(this);var e=this.getAttribute("data-id"),t=this.getAttribute("data-serverid");if(e&&t){var n=this.getAttribute("data-likes");c(this,n="true"===n||"false"!==n&&null,"true"===this.getAttribute("data-isfavorite"),!1),h(this)}else d(this)},f.detachedCallback=function(){s.Z.detachedCallback&&s.Z.detachedCallback.call(this),m(this)},f.setItem=function(e){if(e){this.setAttribute("data-id",e.Id),this.setAttribute("data-serverid",e.ServerId);var t=e.UserData||{};c(this,t.Likes,t.IsFavorite),h(this)}else this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-likes"),this.removeAttribute("data-isfavorite"),m(this)},document.registerElement("emby-ratingbutton",{prototype:f,extends:"button"})},42855:function(e,t,n){n(20252),n(99785),n(43512),n(23938),n(52077),n(911),n(63238),n(55849),n(61013),n(72410),n(15610),n(17460),n(25901),n(92189),n(91047),n(5769),n(14078);var i=n(57366),a=n(72365),r=n(30325),s=n(84280),o=(n(67752),n(62033),n(94994));function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var u=Object.create(HTMLInputElement.prototype),c=!1;if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var d=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");null!=d&&d.configurable&&(c=!0)}function m(e,t){var n=e.sliderBubbleTrack.getBoundingClientRect(),i=(t-n.left)/n.width;o.ZP.getIsElementRTL(e)&&(i=(n.right-t)/n.width);var a=e.max-e.min;if("any"!==e.step&&0!==a){var r=(e.step||1)/a;i=Math.round(i/r)*r}return Math.min(Math.max(i,0),1)}function h(e,t){var n=(e.max-e.min)*t;if("any"!==e.step){var i=e.step||1;n=Math.round(n/i)*i}return n+=parseFloat(e.min),Math.min(Math.max(n,e.min),e.max)}function f(e){if(!e||!this.keyboardDragging&&!this.touched){var t=this,n=t.value;cancelAnimationFrame(t.updateValuesFrame),t.updateValuesFrame=requestAnimationFrame((function(){var e=t.backgroundLower;if(e){var i=(n-t.min)/(t.max-t.min);i*=100,e.style.width=i+"%"}t.markerContainerElement&&(t.triedAddingMarkers||function(e){e.markerInfo=[],e.getMarkerInfo&&(e.markerInfo=e.getMarkerInfo()),e.markerInfo.forEach((function(t){var n,i;e.markerContainerElement.insertAdjacentHTML("beforeend",(i="","chapterMarker"===(n=t).className&&(i=n.className,"string"==typeof n.name&&n.name.length&&(i="".concat(n.className," marker-").concat(n.name.substring(0,100).toLowerCase().replace(" ","-")))),'<span class="material-icons sliderMarker '.concat(i,'" aria-hidden="true"></span>')))})),e.markerElements=e.markerContainerElement.querySelectorAll(".sliderMarker"),e.triedAddingMarkers=!0}(t),function(e,t){var n,i;if(null!==(n=e.markerInfo)&&void 0!==n&&n.length&&null!==(i=e.markerElements)&&void 0!==i&&i.length)for(var a=0,r=e.markerElements.length;a<r;a++)e.markerInfo.length>a&&g(e,h(e,e.markerInfo[a].progress),e.markerElements[a],t)}(t,n))}))}}function v(e,t,n){requestAnimationFrame((function(){var i=e.sliderBubbleTrack.getBoundingClientRect(),a=n.getBoundingClientRect(),r=i.width*t/100;o.ZP.getIsElementRTL(e)&&(r=i.width-r),r=Math.min(Math.max(r,a.width/2),i.width-a.width/2),n.style.left=r+"px",t=e.getBubbleHtml?e.getBubbleHtml(t):'<h1 class="sliderBubbleText">'+(t=e.getBubbleText?e.getBubbleText(t):h(e,t/100).toLocaleString())+"</h1>",n.innerHTML=t}))}function g(e,t,n,i){requestAnimationFrame((function(){var a=e.sliderBubbleTrack.getBoundingClientRect(),r=n.getBoundingClientRect();if(a.width&&r.width){var s=a.width*t/100-r.width/2;s=Math.min(Math.max(s,-r.width/2),a.width-r.width/2),n.style.left=s+"px",i>=t?(n.classList.remove("unwatched"),n.classList.add("watched")):(n.classList.add("unwatched"),n.classList.remove("watched"))}}))}u.attachedCallback=function(){if("true"!==this.getAttribute("data-embyslider")){this.setAttribute("data-embyslider","true"),this.classList.add("mdl-slider"),this.classList.add("mdl-js-slider"),i.Z.edge&&this.classList.add("slider-browser-edge"),r.Z.mobile||this.classList.add("mdl-slider-hoverthumb"),r.Z.tv&&this.classList.add("show-focus");var e=a.ZP.parentWithClass(this,"sliderContainer-settings");if(e&&this.getAttribute("label")){var t=this.ownerDocument.createElement("label");t.innerText=this.getAttribute("label"),t.classList.add("sliderLabel"),t.htmlFor=this.id,e.insertBefore(t,e.firstChild)}var n=this.parentNode;n.classList.add("mdl-slider-container"),n.insertAdjacentHTML("beforeend",'<div class="mdl-slider-background-flex-container"><div class="mdl-slider-background-flex"><div class="mdl-slider-background-flex-inner"><div class="mdl-slider-background-upper"></div><div class="mdl-slider-background-lower"></div></div></div></div><div class="sliderBubbleTrack"><div class="sliderBubble hide"></div></div>'),this.sliderBubbleTrack=n.querySelector(".sliderBubbleTrack"),this.backgroundLower=n.querySelector(".mdl-slider-background-lower"),this.backgroundUpper=n.querySelector(".mdl-slider-background-upper");var s=n.querySelector(".sliderBubble"),o=s.classList.contains("hide");this.markerContainerElement=n.querySelector(".sliderMarkerContainer"),a.ZP.addEventListener(this,"input",(function(){var e,t,n,i;this.dragging=!0,"true"!==this.dataset.sliderKeepProgress&&f.call(this),v(this,100*(e=this,t=this.value,i=0!==(n=e.max-e.min)?(t-e.min)/n:0,Math.min(Math.max(i,0),1)),s),o&&(s.classList.remove("hide"),o=!1)}),{passive:!0}),a.ZP.addEventListener(this,"change",(function(){this.dragging=!1,"true"===this.dataset.sliderKeepProgress&&f.call(this),s.classList.add("hide"),o=!0}),{passive:!0}),a.ZP.addEventListener(this,window.PointerEvent?"pointermove":"mousemove",(function(e){this.dragging||(v(this,100*m(this,e.clientX),s),o&&(s.classList.remove("hide"),o=!1))}),{passive:!0}),a.ZP.addEventListener(this,window.PointerEvent?"pointerleave":"mouseleave",(function(){s.classList.add("hide"),o=!0}),{passive:!0}),i.Z.iOS&&(a.ZP.addEventListener(this,"touchstart",(function(e){if(1===e.targetTouches.length){this.touched=!0;var t=m(this,e.targetTouches[0].clientX);this.value=h(this,t),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!1})),e.preventDefault()}}),{capture:!0}),a.ZP.addEventListener(this,"touchmove",(function(e){if(this.touched&&1===e.targetTouches.length){var t=m(this,e.targetTouches[0].clientX);this.value=h(this,t),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!1}))}}),{passive:!0}),a.ZP.addEventListener(this,"touchend",(function(){var e=this;setTimeout((function(){e.touched=!1,e.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}),0)}),{passive:!0})),c?this.addEventListener("valueset",f.bind(this,!0)):((u=(l=this).interval)&&clearInterval(u),l.interval=setInterval(f.bind(l,!0),100)),f.call(this)}var l,u};var p,b=1e3;function y(e,t){(function(e){e.keyboardDragging=!0,clearTimeout(p),p=setTimeout((function(){!function(e){clearTimeout(p),p=void 0,e.keyboardDragging=!1;var t=new Event("change",{bubbles:!0,cancelable:!1});e.dispatchEvent(t)}(e)}),b)})(e),e.value=Math.max(e.min,Math.min(e.max,parseFloat(e.value)+t));var n=new Event("input",{bubbles:!0,cancelable:!1});e.dispatchEvent(n)}function w(e){switch(s.ZP.getKeyName(e)){case"ArrowLeft":case"Left":y(this,-this.keyboardStepDown||-1),e.preventDefault(),e.stopPropagation();break;case"ArrowRight":case"Right":y(this,this.keyboardStepUp||1),e.preventDefault(),e.stopPropagation()}}function S(e,t,n){var i=e.style;o.ZP.getIsRTL()?i.right=Math.max(t,0)+"%":i.left=Math.max(t,0)+"%";var a=n-t;i.width=Math.max(Math.min(a,100),0)+"%"}u.enableKeyboardDragging=function(){this.keyboardDraggingEnabled||(this.addEventListener("keydown",w),this.keyboardDraggingEnabled=!0)},u.setKeyboardSteps=function(e,t){this.keyboardStepDown=e||t||1,this.keyboardStepUp=t||e||1},u.setBufferedRanges=function(e,t,n){var i=this.backgroundUpper;if(i){null!=t&&(e=function(e,t){return t?e.map((function(e){return{start:e.start/t*100,end:e.end/t*100}})):[]}(e,t),n=n/t*100);var a,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw r}}}}(e);try{for(r.s();!(a=r.n()).done;){var s=a.value;if(!(null!=n&&n>=s.end))return void S(i,s.start,s.end)}}catch(e){r.e(e)}finally{r.f()}S(i,0,0)}},u.setIsClear=function(e){var t=this.backgroundLower;t&&(e?t.classList.add("mdl-slider-background-lower-clear"):t.classList.remove("mdl-slider-background-lower-clear"))},u.detachedCallback=function(){var e=this.interval;e&&clearInterval(e),this.interval=null,this.backgroundUpper=null,this.backgroundLower=null},document.registerElement("emby-slider",{prototype:u,extends:"input"})}}]);