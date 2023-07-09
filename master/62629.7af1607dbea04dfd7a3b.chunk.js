"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62629,12801,31473,27636],{12801:function(e,t,n){n.r(t),n.d(t,{show:function(){return m}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(27471),n(72410),n(15610),n(52077),n(25901),n(92189),n(91047);var a=n(65009),i=n.n(a),r=n(93355),s=n(30325),o=n(94994),l=n(72365);function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw r}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t,a){Promise.resolve().then(n.bind(n,54517)).then((function(n){var i=a?"on":"off";n.centerFocus[i](e,t)}))}function m(e){var t,n={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};s.Z.tv?(n.size="fullscreen",t=!0,n.autoFocus=!0):(n.modal=!1,n.entryAnimation=e.entryAnimation,n.exitAnimation=e.exitAnimation,n.entryAnimationDuration=e.entryAnimationDuration||140,n.exitAnimationDuration=e.exitAnimationDuration||100,n.autoFocus=!1);var a=r.default.createDialog(n);t?a.classList.add("actionsheet-fullscreen"):a.classList.add("actionsheet-not-fullscreen"),a.classList.add("actionSheet"),e.dialogClass&&a.classList.add(e.dialogClass);var c="",m=s.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",h="";e.items.length>20&&(h+="min-width:"+(l.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var f,v,g=!1,p=[],b=u(e.items);try{for(b.s();!(v=b.n()).done;){var y=v.value;(f=y.icon||(y.selected?"check":null))&&(g=!0),p.push(f||"")}}catch(e){b.e(e)}finally{b.f()}s.Z.tv&&(c+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(o.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var w=e.title&&!g;w||s.Z.tv?c+='<div class="actionSheetContent actionSheetContent-centered">':c+='<div class="actionSheetContent">',e.title&&(c+='<h1 class="actionSheetTitle">'+i()(e.title)+"</h1>"),e.text&&(c+='<p class="actionSheetText">'+i()(e.text)+"</p>");var I="actionSheetScroller";s.Z.tv&&(I+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),c+='<div class="'+I+" "+m+'" style="'+h+'">';var S="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(S+=" listItem-border"),e.menuItemClass&&(S+=" "+e.menuItemClass),s.Z.tv&&(S+=" listItem-focusscale"),s.Z.mobile&&(S+=" actionsheet-xlargeFont");for(var k=0;k<e.items.length;k++){var T=e.items[k];T.divider?c+='<div class="actionsheetDivider"></div>':(c+="<button"+(T.selected&&s.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+S+'" data-id="'+(null==T.id||""===T.id?T.value:T.id)+'">',(f=p[k])?c+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(f,'" aria-hidden="true"></span>'):g&&!w&&(c+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),c+='<div class="listItemBody actionsheetListItemBody">',c+='<div class="listItemBodyText actionSheetItemText">',c+=i()(T.name||T.textContent||T.innerText),c+="</div>",T.secondaryText&&(c+='<div class="listItemBodyText secondary">'.concat(i()(T.secondaryText),"</div>")),c+="</div>",T.asideText&&(c+='<div class="listItemAside actionSheetItemAsideText">'.concat(i()(T.asideText),"</div>")),c+="</button>")}e.showCancel&&(c+='<div class="buttons">',c+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(o.ZP.translate("ButtonCancel"),"</button>"),c+="</div>"),c+="</div>",a.innerHTML=c,s.Z.tv&&d(a.querySelector(".actionSheetScroller"),!1,!0);var L,P,A=a.querySelector(".btnCloseActionSheet");return A&&A.addEventListener("click",(function(){r.default.close(a)})),e.timeout&&(P=setTimeout((function(){r.default.close(a)}),e.timeout)),new Promise((function(t,i){var o;a.addEventListener("click",(function(n){var i=l.ZP.parentWithClass(n.target,"actionSheetMenuItem");i&&(L=i.getAttribute("data-id"),e.resolveOnClick&&(e.resolveOnClick.indexOf?-1!==e.resolveOnClick.indexOf(L)&&(t(L),o=!0):(t(L),o=!0)),r.default.close(a))})),a.addEventListener("close",(function(){s.Z.tv&&d(a.querySelector(".actionSheetScroller"),!1,!1),P&&(clearTimeout(P),P=null),o||(null!=L?(e.callback&&e.callback(L),t(L)):i("ActionSheet closed without resolving"))})),r.default.open(a);var c=e.positionTo&&"fullscreen"!==n.size?function(e,t){var n=l.ZP.getWindowSize(),a=n.innerHeight,i=n.innerWidth,r=function(e){var t=[];if(!document)return t;var n,a=u(e);try{for(a.s();!(n=a.n()).done;){var i=n.value.getBoundingClientRect();t.push({top:i.top,left:i.left,width:i.width,height:i.height})}}catch(e){a.e(e)}finally{a.f()}return t}([e.positionTo])[0];"top"!==e.positionY&&(r.top+=(r.height||0)/2),r.left+=(r.width||0)/2;var s=t.offsetHeight||300,o=t.offsetWidth||160;r.top-=s/2,r.left-=o/2;var c=r.left+o-i,d=r.top+s-a;return c>0&&(r.left-=c+20),d>0&&(r.top-=d+20),r.top+=e.offsetTop||0,r.left+=e.offsetLeft||0,r.top=Math.max(r.top,10),r.left=Math.max(r.left,10),r}(e,a):null;c&&(a.style.position="fixed",a.style.margin=0,a.style.left=c.left+"px",a.style.top=c.top+"px")}))}n(38228),t.default={show:m}},56229:function(e,t,n){n.r(t),n(63238),n(55849),n(43512),n(27471),n(48410);var a=n(61693),i=n(81643),r=n(57366),s=n(98301),o=n(30325),l=n(48957),u=n(69011),c=n(84881),d=n(72365),m=n(9337),h=(n(61414),n(27636),n(18613));function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!==f(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a.key),"symbol"===f(i)?i:String(i)),a)}var i}n(19068),n(87211),n(25901),n(92189),n(95163),n(99785),n(91047),n(5769),n(17460),n(14078);var g,p,b,y,w,I,S,k,T,L,P,A,x,C,B,Z=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t,n=this;n.element=((t=document.createElement("div")).classList.add("appfooter"),document.body.appendChild(t),t),n.add=function(e){n.element.appendChild(e)},n.insert=function(e){"string"==typeof e?n.element.insertAdjacentHTML("afterbegin",e):n.element.insertBefore(e,n.element.firstChild)}}var t,n;return t=e,(n=[{key:"destroy",value:function(){this.element=null}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()),E=n(61008),M=(n(42855),n(66560)),O=[],q=0,R={},N=0,D=!0;function F(){this.classList.add("hide")}function j(){l.O.playPause(g)}function U(){if(B)return B;var e,t,n=Z.element;return(B=n.querySelector(".nowPlayingBar"))||(n.insertAdjacentHTML("afterbegin",(e="",e+='<div class="nowPlayingBar hide nowPlayingBar-hidden">',e+='<div class="nowPlayingBarTop">',e+='<div class="nowPlayingBarPositionContainer sliderContainer" dir="ltr">',e+='<input type="range" is="emby-slider" pin step=".01" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarPositionSlider" data-slider-keep-progress="true"/>',e+="</div>",e+='<div class="nowPlayingBarInfoContainer">',e+='<div class="nowPlayingImage"></div>',e+='<div class="nowPlayingBarText"></div>',e+="</div>",e+='<div class="nowPlayingBarCenter" dir="ltr">',e+='<button is="paper-icon-button-light" class="previousTrackButton mediaButton"><span class="material-icons skip_previous" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton"><span class="material-icons pause" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="stopButton mediaButton"><span class="material-icons stop" aria-hidden="true"></span></button>',o.Z.mobile||(e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton"><span class="material-icons skip_next" aria-hidden="true"></span></button>'),e+='<div class="nowPlayingBarCurrentTime"></div>',e+="</div>",e+='<div class="nowPlayingBarRight">',e+='<button is="paper-icon-button-light" class="muteButton mediaButton"><span class="material-icons volume_up" aria-hidden="true"></span></button>',e+='<div class="sliderContainer nowPlayingBarVolumeSliderContainer hide" style="width:9em;vertical-align:middle;display:inline-flex;">',e+='<input type="range" is="emby-slider" pin step="1" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarVolumeSlider"/>',e+="</div>",e+='<button is="paper-icon-button-light" class="toggleRepeatButton mediaButton"><span class="material-icons repeat" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="btnShuffleQueue mediaButton"><span class="material-icons shuffle" aria-hidden="true"></span></button>',e+='<div class="nowPlayingBarUserDataButtons">',e+="</div>",e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton"><span class="material-icons pause" aria-hidden="true"></span></button>',o.Z.mobile?e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton"><span class="material-icons skip_next" aria-hidden="true"></span></button>':e+='<button is="paper-icon-button-light" class="btnToggleContextMenu mediaButton"><span class="material-icons more_vert" aria-hidden="true"></span></button>',e+="</div>",(e+="</div>")+"</div>")),window.CustomElements.upgradeSubtree(n),B=n.querySelector(".nowPlayingBar"),o.Z.mobile&&(H(B.querySelector(".btnShuffleQueue")),H(B.querySelector(".nowPlayingBarCenter"))),r.Z.safari&&r.Z.slow&&B.classList.add("noMediaProgress"),E.ZP.on(B),p=(t=B).querySelector(".nowPlayingBarCurrentTime"),b=t.querySelector(".nowPlayingImage"),w=t.querySelector(".nowPlayingBarText"),I=t.querySelector(".nowPlayingBarUserDataButtons"),P=t.querySelector(".nowPlayingBarPositionSlider"),S=t.querySelector(".muteButton"),L=t.querySelectorAll(".playPauseButton"),A=t.querySelector(".toggleRepeatButton"),k=t.querySelector(".nowPlayingBarVolumeSlider"),T=t.querySelector(".nowPlayingBarVolumeSliderContainer"),S.addEventListener("click",(function(){g&&l.O.toggleMute(g)})),t.querySelector(".stopButton").addEventListener("click",(function(){g&&l.O.stop(g)})),L.forEach((function(e){e.addEventListener("click",j)})),t.querySelector(".nextTrackButton").addEventListener("click",(function(){g&&l.O.nextTrack(g)})),t.querySelector(".previousTrackButton").addEventListener("click",(function(e){if(g){if("Audio"===R.NowPlayingItem.MediaType){if(e.detail>1)return;if(g._currentTime>=5||l.O.getCurrentPlaylistIndex(g)<=1)return l.O.seekPercent(0,g),void(P.value=0)}l.O.previousTrack(g)}})),t.querySelector(".previousTrackButton").addEventListener("dblclick",(function(){g&&l.O.previousTrack(g)})),t.querySelector(".btnShuffleQueue").addEventListener("click",(function(){g&&l.O.toggleQueueShuffleMode()})),(A=t.querySelector(".toggleRepeatButton")).addEventListener("click",(function(){switch(l.O.getRepeatMode()){case"RepeatAll":l.O.setRepeatMode("RepeatOne");break;case"RepeatOne":l.O.setRepeatMode("RepeatNone");break;case"RepeatNone":l.O.setRepeatMode("RepeatAll")}})),x=A.querySelector(".material-icons"),T.classList.toggle("hide",c.M.supports("physicalvolumecontrol")),k.addEventListener("input",(function(e){g&&g.setVolume(e.target.value)})),P.addEventListener("change",(function(){if(g){var e=parseFloat(this.value);l.O.seekPercent(e,g)}})),P.getBubbleText=function(e){if(null==R||!R.NowPlayingItem||!N)return"--:--";var t=N;return t/=100,t*=e,a.ZP.getDisplayRunningTime(t)},t.addEventListener("click",(function(e){d.ZP.parentWithTag(e.target,["BUTTON","INPUT"])||M.appRouter.showNowPlaying()}))),B}function H(e){e.classList.add("hide")}function _(e){L&&L.forEach((function(t){var n=t.querySelector(".material-icons");n.classList.remove("play_arrow","pause"),n.classList.add(e?"play_arrow":"pause")}))}function V(e){x.classList.remove("repeat","repeat_one");var t="buttonActive";switch(e){case"RepeatAll":x.classList.add("repeat"),A.classList.add(t);break;case"RepeatOne":x.classList.add("repeat_one"),A.classList.add(t);break;default:x.classList.add("repeat"),A.classList.remove(t)}}function W(e,t,n){if(P&&!P.dragging)if(t){var i=e/t;i*=100,P.value=i}else P.value=0;if(P&&P.setBufferedRanges(n,t,e),p){var r=null==e?"--:--":a.ZP.getDisplayRunningTime(e);t&&(r+=" / "+a.ZP.getDisplayRunningTime(t)),p.innerHTML=r}}function Y(e,t){var n=O,a=!0,i=!0;-1===n.indexOf("ToggleMute")&&(a=!1);var r=S.querySelector(".material-icons");r.classList.remove("volume_off","volume_up"),r.classList.add(e?"volume_off":"volume_up"),-1===n.indexOf("SetVolume")&&(i=!1),g.isLocalPlayer&&c.M.supports("physicalvolumecontrol")&&(a=!1,i=!1),a?S.classList.remove("hide"):H(S),k&&(T.classList.toggle("hide",!i),k.dragging||(k.value=t||0))}function Q(e,t){console.debug("nowplaying event: "+e.type),J.call(this,e,t)}function z(){C&&V(l.O.getRepeatMode())}function K(){if(C){var e=l.O.getQueueShuffleMode(),t="buttonActive",n=B.querySelector(".btnShuffleQueue");"Shuffle"===e?n.classList.add(t):n.classList.remove(t)}}function X(){C=!1;var e=document.getElementsByClassName("nowPlayingBar")[0];e&&function(e){e.offsetWidth,e.classList.add("nowPlayingBar-hidden"),d.ZP.addEventListener(e,d.ZP.whichTransitionEvent(),F,{once:!0})}(e)}function $(e,t){console.debug("nowplaying event: "+e.type),this.isLocalPlayer?"Audio"!==t.NextMediaType&&X():t.NextMediaType||X()}function G(){C&&_(this.paused())}function J(e,t){if("init"!==e.type){console.debug("nowplaying event: "+e.type);t.NowPlayingItem&&!o.Z.tv&&!1!==t.IsFullscreen?this.isLocalPlayer&&t.NowPlayingItem&&"Video"===t.NowPlayingItem.MediaType?X():(C=!0,B||U(),function(e,t,n){var a;D?(a=U(),d.ZP.removeEventListener(a,d.ZP.whichTransitionEvent(),F,{once:!0}),a.classList.remove("hide"),a.offsetWidth,a.classList.remove("nowPlayingBar-hidden")):X(),R=t;var i=l.O.getPlayerInfo(),r=t.PlayState||{};_(r.IsPaused);var c=i.supportedCommands;if(O=c,-1===c.indexOf("SetRepeatMode")?A.classList.add("hide"):A.classList.remove("hide"),V(l.O.getRepeatMode()),K(),Y(r.IsMuted,r.VolumeLevel),P&&!P.dragging){P.disabled=!r.CanSeek;var f=t.MediaSource&&null==t.MediaSource.RunTimeTicks;P.setIsClear(f)}var v=t.NowPlayingItem||{};W(r.PositionTicks,v.RunTimeTicks,l.O.getBufferedRanges(n)),function(e){var t=e.NowPlayingItem,n=t?u.Z.getNowPlayingNames(t):[];if(w.innerHTML="",n){var a=document.createElement("div"),i=document.createElement("div");if(i.classList.add("nowPlayingBarSecondaryText"),n.length>1&&(n[1].secondary=!0,n[1].text)){var r=document.createElement("a");r.innerText=n[1].text,i.appendChild(r)}if(n[0].text){var l=document.createElement("a");l.innerText=n[0].text,a.appendChild(l)}w.appendChild(a),w.appendChild(i)}var c=t?function(e,t){if(!e)throw new Error("item cannot be null!");if("Episode"!==e.Type)return null;if((t=t||{}).type=t.type||"Primary","Primary"===t.type&&e.SeriesPrimaryImageTag)return t.tag=e.SeriesPrimaryImageTag,h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if("Thumb"===t.type){if(e.SeriesThumbImageTag)return t.tag=e.SeriesThumbImageTag,h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if(e.ParentThumbImageTag)return t.tag=e.ParentThumbImageTag,h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.ParentThumbItemId,t)}return null}(t,{height:70})||function(e,t){var n;if(!e)throw new Error("item cannot be null!");return(t=t||{}).type=t.type||"Primary",null!==(n=e.ImageTags)&&void 0!==n&&n[t.type]?(t.tag=e.ImageTags[t.type],h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.PrimaryImageItemId||e.Id,t)):e.AlbumId&&e.AlbumPrimaryImageTag?(t.tag=e.AlbumPrimaryImageTag,h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.AlbumId,t)):null}(t,{height:70}):null;if(c!==y&&(c?(y=c,s.default.lazyImage(b,y),b.style.display=null,w.style.marginLeft=null):(y=null,b.style.backgroundImage="",b.style.display="none",w.style.marginLeft="1em")),t.Id){var d=h.Z.getApiClient(t.ServerId);d.getItem(d.getCurrentUserId(),t.Id).then((function(e){var t=e.UserData||{},n=null==t.Likes?"":t.Likes;if(!o.Z.mobile){var a=B.querySelector(".btnToggleContextMenu"),i=a.cloneNode(!0);a.parentNode.replaceChild(i,a);var r={play:!1,queue:!1,stopPlayback:!0,clearQueue:!0,positionTo:a=B.querySelector(".btnToggleContextMenu")};d.getCurrentUser().then((function(t){a.addEventListener("click",(function(){m.default.show(Object.assign({item:e,user:t},r))}))}))}I.innerHTML='<button is="emby-ratingbutton" type="button" class="listItemButton mediaButton paper-icon-button-light" data-id="'+e.Id+'" data-serverid="'+e.ServerId+'" data-itemtype="'+e.Type+'" data-likes="'+n+'" data-isfavorite="'+t.IsFavorite+'"><span class="material-icons favorite" aria-hidden="true"></span></button>'}))}else I.innerHTML=""}(t)}(0,t,this)):X()}}function ee(){if(C){var e=(new Date).getTime();if(!(e-q<700)){q=e;var t=this;N=l.O.duration(t),W(1e4*l.O.currentTime(t),N,l.O.getBufferedRanges(t))}}}function te(){C&&Y(this.isMuted(),this.getVolume())}function ne(e,t){var n=l.O.getPlayerState(e);J.call(e,{type:t},n)}function ae(e){e!==g&&(function(){var e=g;e&&(i.Z.off(e,"playbackstart",Q),i.Z.off(e,"statechange",Q),i.Z.off(e,"repeatmodechange",z),i.Z.off(e,"shufflequeuemodechange",K),i.Z.off(e,"playbackstop",$),i.Z.off(e,"volumechange",te),i.Z.off(e,"pause",G),i.Z.off(e,"unpause",G),i.Z.off(e,"timeupdate",ee),g=null,X())}(),g=e,e&&(ne(e,"init"),i.Z.on(e,"playbackstart",Q),i.Z.on(e,"statechange",Q),i.Z.on(e,"repeatmodechange",z),i.Z.on(e,"shufflequeuemodechange",K),i.Z.on(e,"playbackstop",$),i.Z.on(e,"volumechange",te),i.Z.on(e,"pause",G),i.Z.on(e,"unpause",G),i.Z.on(e,"timeupdate",ee)))}i.Z.on(l.O,"playerchange",(function(){ae(l.O.getCurrentPlayer())})),ae(l.O.getCurrentPlayer()),document.addEventListener("viewbeforeshow",(function(e){e.detail.options.enableMediaControl?D||(D=!0,g?ne(g,"refresh"):X()):D&&(D=!1,X())}))},69011:function(e,t,n){n(61013),t.Z={getNowPlayingNames:function(e,t){var n,a,i=e,r=null,s=e.Name;e.AlbumId&&"Audio"===e.MediaType&&(i={Id:e.AlbumId,Name:e.Album,Type:"MusicAlbum",IsFolder:!0}),"Video"===e.MediaType&&(null!=e.IndexNumber&&(s=e.IndexNumber+" - "+s),null!=e.ParentIndexNumber&&(s=e.ParentIndexNumber+"."+s));var o="";null!==(n=e.ArtistItems)&&void 0!==n&&n.length?(r={Id:e.ArtistItems[0].Id,Name:e.ArtistItems[0].Name,Type:"MusicArtist",IsFolder:!0},o=e.ArtistItems.map((function(e){return e.Name})).join(", ")):null!==(a=e.Artists)&&void 0!==a&&a.length?o=e.Artists.join(", "):e.SeriesName||e.Album?(o=s,s=e.SeriesName||e.Album,r=i,i=e.SeriesId?{Id:e.SeriesId,Name:e.SeriesName,Type:"Series",IsFolder:!0}:null):e.ProductionYear&&!1!==t&&(o=e.ProductionYear);var l=[];return l.push({text:s,item:i}),o&&l.push({text:o,item:r}),l}}},27636:function(e,t,n){n.r(t);var a=n(44038),i=n(94994),r=n(81643),s=n(38228),o=n(18613);function l(){var e=this,t=e.getAttribute("data-id"),n=e.getAttribute("data-serverid"),a=o.Z.getApiClient(n),i=this.getAttribute("data-likes");i="true"===i||"false"!==i&&null,function(e,t,n,a,i){return t.updateFavoriteStatus(t.getCurrentUserId(),n,!i)}(0,a,t,0,"true"===this.getAttribute("data-isfavorite")).then((function(t){c(e,t.Likes,t.IsFavorite)}))}function u(e,t,n){n.ItemId===this.getAttribute("data-id")&&c(this,n.Likes,n.IsFavorite)}function c(e,t,n,a){var i=e.querySelector(".material-icons");n?(i&&(i.classList.add("favorite"),i.classList.add("ratingbutton-icon-withrating")),e.classList.add("ratingbutton-withrating")):(i&&(i.classList.add("favorite"),i.classList.remove("ratingbutton-icon-withrating")),e.classList.remove("ratingbutton-withrating")),!1!==a&&(e.setAttribute("data-isfavorite",n),e.setAttribute("data-likes",null===t?"":t)),d(e,n)}function d(e,t){e.title=t?i.ZP.translate("Favorite"):i.ZP.translate("AddToFavorites");var n=e.querySelector(".button-text");n&&(n.innerText=e.title)}function m(e){var t,n,i;e.removeEventListener("click",l),(i=(t=e)[n="UserDataChanged"])&&(r.Z.off(a.default,n,i),t[n]=null)}function h(e){var t,n,i;m(e),e.addEventListener("click",l),t=e,n="UserDataChanged",i=u.bind(t),r.Z.on(a.default,n,i),t[n]=i}var f=Object.create(s.Z);f.createdCallback=function(){s.Z.createdCallback&&s.Z.createdCallback.call(this)},f.attachedCallback=function(){s.Z.attachedCallback&&s.Z.attachedCallback.call(this);var e=this.getAttribute("data-id"),t=this.getAttribute("data-serverid");if(e&&t){var n=this.getAttribute("data-likes");c(this,n="true"===n||"false"!==n&&null,"true"===this.getAttribute("data-isfavorite"),!1),h(this)}else d(this)},f.detachedCallback=function(){s.Z.detachedCallback&&s.Z.detachedCallback.call(this),m(this)},f.setItem=function(e){if(e){this.setAttribute("data-id",e.Id),this.setAttribute("data-serverid",e.ServerId);var t=e.UserData||{};c(this,t.Likes,t.IsFavorite),h(this)}else this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-likes"),this.removeAttribute("data-isfavorite"),m(this)},document.registerElement("emby-ratingbutton",{prototype:f,extends:"button"})},42855:function(e,t,n){n(20252),n(99785),n(43512),n(23938),n(52077),n(911),n(63238),n(55849),n(61013),n(72410),n(15610),n(17460),n(25901),n(92189),n(91047),n(5769),n(14078);var a=n(57366),i=n(72365),r=n(30325),s=n(84280),o=(n(67752),n(62033),n(94994));function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var u=Object.create(HTMLInputElement.prototype),c=!1;if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var d=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");null!=d&&d.configurable&&(c=!0)}function m(e,t){var n=e.sliderBubbleTrack.getBoundingClientRect(),a=(t-n.left)/n.width;o.ZP.getIsElementRTL(e)&&(a=(n.right-t)/n.width);var i=e.max-e.min;if("any"!==e.step&&0!==i){var r=(e.step||1)/i;a=Math.round(a/r)*r}return Math.min(Math.max(a,0),1)}function h(e,t){var n=(e.max-e.min)*t;if("any"!==e.step){var a=e.step||1;n=Math.round(n/a)*a}return n+=parseFloat(e.min),Math.min(Math.max(n,e.min),e.max)}function f(e){if(!e||!this.keyboardDragging&&!this.touched){var t=this,n=t.value;cancelAnimationFrame(t.updateValuesFrame),t.updateValuesFrame=requestAnimationFrame((function(){var e=t.backgroundLower;if(e){var a=(n-t.min)/(t.max-t.min);a*=100,e.style.width=a+"%"}t.markerContainerElement&&(t.triedAddingMarkers||function(e){e.markerInfo=[],e.getMarkerInfo&&(e.markerInfo=e.getMarkerInfo()),e.markerInfo.forEach((function(t){var n,a;e.markerContainerElement.insertAdjacentHTML("beforeend",(a="","chapterMarker"===(n=t).className&&(a=n.className,"string"==typeof n.name&&n.name.length&&(a="".concat(n.className," marker-").concat(n.name.substring(0,100).toLowerCase().replace(" ","-")))),'<span class="material-icons sliderMarker '.concat(a,'" aria-hidden="true"></span>')))})),e.markerElements=e.markerContainerElement.querySelectorAll(".sliderMarker"),e.triedAddingMarkers=!0}(t),function(e,t){var n,a;if(null!==(n=e.markerInfo)&&void 0!==n&&n.length&&null!==(a=e.markerElements)&&void 0!==a&&a.length)for(var i=0,r=e.markerElements.length;i<r;i++)e.markerInfo.length>i&&g(e,h(e,e.markerInfo[i].progress),e.markerElements[i],t)}(t,n))}))}}function v(e,t,n){requestAnimationFrame((function(){var a=e.sliderBubbleTrack.getBoundingClientRect(),i=n.getBoundingClientRect(),r=a.width*t/100;o.ZP.getIsElementRTL(e)&&(r=a.width-r),r=Math.min(Math.max(r,i.width/2),a.width-i.width/2),n.style.left=r+"px",t=e.getBubbleHtml?e.getBubbleHtml(t):'<h1 class="sliderBubbleText">'+(t=e.getBubbleText?e.getBubbleText(t):h(e,t/100).toLocaleString())+"</h1>",n.innerHTML=t}))}function g(e,t,n,a){requestAnimationFrame((function(){var i=e.sliderBubbleTrack.getBoundingClientRect(),r=n.getBoundingClientRect();if(i.width&&r.width){var s=i.width*t/100-r.width/2;s=Math.min(Math.max(s,-r.width/2),i.width-r.width/2),n.style.left=s+"px",a>=t?(n.classList.remove("unwatched"),n.classList.add("watched")):(n.classList.add("unwatched"),n.classList.remove("watched"))}}))}u.attachedCallback=function(){if("true"!==this.getAttribute("data-embyslider")){this.setAttribute("data-embyslider","true"),this.classList.add("mdl-slider"),this.classList.add("mdl-js-slider"),a.Z.edge&&this.classList.add("slider-browser-edge"),r.Z.mobile||this.classList.add("mdl-slider-hoverthumb"),r.Z.tv&&this.classList.add("show-focus");var e=i.ZP.parentWithClass(this,"sliderContainer-settings");if(e&&this.getAttribute("label")){var t=this.ownerDocument.createElement("label");t.innerText=this.getAttribute("label"),t.classList.add("sliderLabel"),t.htmlFor=this.id,e.insertBefore(t,e.firstChild)}var n=this.parentNode;n.classList.add("mdl-slider-container"),n.insertAdjacentHTML("beforeend",'<div class="mdl-slider-background-flex-container"><div class="mdl-slider-background-flex"><div class="mdl-slider-background-flex-inner"><div class="mdl-slider-background-upper"></div><div class="mdl-slider-background-lower"></div></div></div></div><div class="sliderBubbleTrack"><div class="sliderBubble hide"></div></div>'),this.sliderBubbleTrack=n.querySelector(".sliderBubbleTrack"),this.backgroundLower=n.querySelector(".mdl-slider-background-lower"),this.backgroundUpper=n.querySelector(".mdl-slider-background-upper");var s=n.querySelector(".sliderBubble"),o=s.classList.contains("hide");this.markerContainerElement=n.querySelector(".sliderMarkerContainer"),i.ZP.addEventListener(this,"input",(function(){var e,t,n,a;this.dragging=!0,"true"!==this.dataset.sliderKeepProgress&&f.call(this),v(this,100*(e=this,t=this.value,a=0!==(n=e.max-e.min)?(t-e.min)/n:0,Math.min(Math.max(a,0),1)),s),o&&(s.classList.remove("hide"),o=!1)}),{passive:!0}),i.ZP.addEventListener(this,"change",(function(){this.dragging=!1,"true"===this.dataset.sliderKeepProgress&&f.call(this),s.classList.add("hide"),o=!0}),{passive:!0}),i.ZP.addEventListener(this,window.PointerEvent?"pointermove":"mousemove",(function(e){this.dragging||(v(this,100*m(this,e.clientX),s),o&&(s.classList.remove("hide"),o=!1))}),{passive:!0}),i.ZP.addEventListener(this,window.PointerEvent?"pointerleave":"mouseleave",(function(){s.classList.add("hide"),o=!0}),{passive:!0}),a.Z.iOS&&(i.ZP.addEventListener(this,"touchstart",(function(e){if(1===e.targetTouches.length){this.touched=!0;var t=m(this,e.targetTouches[0].clientX);this.value=h(this,t),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!1})),e.preventDefault()}}),{capture:!0}),i.ZP.addEventListener(this,"touchmove",(function(e){if(this.touched&&1===e.targetTouches.length){var t=m(this,e.targetTouches[0].clientX);this.value=h(this,t),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!1}))}}),{passive:!0}),i.ZP.addEventListener(this,"touchend",(function(){var e=this;setTimeout((function(){e.touched=!1,e.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}),0)}),{passive:!0})),c?this.addEventListener("valueset",f.bind(this,!0)):((u=(l=this).interval)&&clearInterval(u),l.interval=setInterval(f.bind(l,!0),100)),f.call(this)}var l,u};var p,b=1e3;function y(e,t){(function(e){e.keyboardDragging=!0,clearTimeout(p),p=setTimeout((function(){!function(e){clearTimeout(p),p=void 0,e.keyboardDragging=!1;var t=new Event("change",{bubbles:!0,cancelable:!1});e.dispatchEvent(t)}(e)}),b)})(e),e.value=Math.max(e.min,Math.min(e.max,parseFloat(e.value)+t));var n=new Event("input",{bubbles:!0,cancelable:!1});e.dispatchEvent(n)}function w(e){switch(s.ZP.getKeyName(e)){case"ArrowLeft":case"Left":y(this,-this.keyboardStepDown||-1),e.preventDefault(),e.stopPropagation();break;case"ArrowRight":case"Right":y(this,this.keyboardStepUp||1),e.preventDefault(),e.stopPropagation()}}function I(e,t,n){var a=e.style;o.ZP.getIsRTL()?a.right=Math.max(t,0)+"%":a.left=Math.max(t,0)+"%";var i=n-t;a.width=Math.max(Math.min(i,100),0)+"%"}u.enableKeyboardDragging=function(){this.keyboardDraggingEnabled||(this.addEventListener("keydown",w),this.keyboardDraggingEnabled=!0)},u.setKeyboardSteps=function(e,t){this.keyboardStepDown=e||t||1,this.keyboardStepUp=t||e||1},u.setBufferedRanges=function(e,t,n){var a=this.backgroundUpper;if(a){null!=t&&(e=function(e,t){return t?e.map((function(e){return{start:e.start/t*100,end:e.end/t*100}})):[]}(e,t),n=n/t*100);var i,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw r}}}}(e);try{for(r.s();!(i=r.n()).done;){var s=i.value;if(!(null!=n&&n>=s.end))return void I(a,s.start,s.end)}}catch(e){r.e(e)}finally{r.f()}I(a,0,0)}},u.setIsClear=function(e){var t=this.backgroundLower;t&&(e?t.classList.add("mdl-slider-background-lower-clear"):t.classList.remove("mdl-slider-background-lower-clear"))},u.detachedCallback=function(){var e=this.interval;e&&clearInterval(e),this.interval=null,this.backgroundUpper=null,this.backgroundLower=null},document.registerElement("emby-slider",{prototype:u,extends:"input"})}}]);