"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15098,49213,42831,83264,10183],{69011:function(e,t,n){n(61013),t.Z={getNowPlayingNames:function(e,t){var n=e,i=null,r=e.Name;e.AlbumId&&"Audio"===e.MediaType&&(n={Id:e.AlbumId,Name:e.Album,Type:"MusicAlbum",IsFolder:!0}),"Video"===e.MediaType&&(null!=e.IndexNumber&&(r=e.IndexNumber+" - "+r),null!=e.ParentIndexNumber&&(r=e.ParentIndexNumber+"."+r));var a="";e.ArtistItems&&e.ArtistItems.length?(i={Id:e.ArtistItems[0].Id,Name:e.ArtistItems[0].Name,Type:"MusicArtist",IsFolder:!0},a=e.ArtistItems.map((function(e){return e.Name})).join(", ")):e.Artists&&e.Artists.length?a=e.Artists.join(", "):e.SeriesName||e.Album?(a=r,r=e.SeriesName||e.Album,i=n,n=e.SeriesId?{Id:e.SeriesId,Name:e.SeriesName,Type:"Series",IsFolder:!0}:null):e.ProductionYear&&!1!==t&&(a=e.ProductionYear);var l=[];return l.push({text:r,item:n}),a&&l.push({text:a,item:i}),l}}},62010:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}}),n(15610),n(25901),n(92189),n(91047),n(5769),n(61013),n(63238),n(61418),n(17460),n(14078),n(32081),n(52077),n(911),n(23938),n(72410),n(48410),n(27471),n(95623),n(61514),n(98010),n(43512);var i=n(65009),r=n.n(i),a=n(61693),l=n(57084),s=n(63873),o=n(98301),u=n(48957),c=n(69011),d=n(81643),m=n(84881),f=n(94994),y=n(30325),g=n(60934),v=n(61570),h=n(9337),p=(n(82427),n(27636),n(18613)),S=n(56663),b=n(66560);function I(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw a}}}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var T=!0,L=!0;function q(e,t){t?e.classList.remove("hide"):e.classList.add("hide")}function A(){function e(e,n,a){K=a;var s=a.NowPlayingItem,o=u.O.getPlayerInfo().supportedCommands;Y=o;var d=a.PlayState||{},m=o.includes("DisplayMessage")||o.includes("SendString")||o.includes("Select");if(q(n.querySelector(".btnToggleFullscreen"),s&&"Video"==s.MediaType&&o.includes("ToggleFullscreen")),function(e,t){var n=Y;q(t.querySelector(".btnAudioTracks"),u.O.audioTracks(e).length>1&&-1!=n.indexOf("SetAudioStreamIndex"))}(e,n),function(e,t){var n=Y;q(t.querySelector(".btnSubtitles"),u.O.subtitleTracks(e).length&&-1!=n.indexOf("SetSubtitleStreamIndex"))}(e,n),o.includes("DisplayMessage")&&!z.isLocalPlayer?n.querySelector(".sendMessageSection").classList.remove("hide"):n.querySelector(".sendMessageSection").classList.add("hide"),o.includes("SendString")&&!z.isLocalPlayer?n.querySelector(".sendTextSection").classList.remove("hide"):n.querySelector(".sendTextSection").classList.add("hide"),o.includes("Select")&&!z.isLocalPlayer?n.querySelector(".navigationSection").classList.remove("hide"):n.querySelector(".navigationSection").classList.add("hide"),m&&!z.isLocalPlayer?n.querySelector(".remoteControlSection").classList.remove("hide"):n.querySelector(".remoteControlSection").classList.add("hide"),q(n.querySelector(".btnStop"),null!=s),q(n.querySelector(".btnNextTrack"),null!=s),q(n.querySelector(".btnPreviousTrack"),null!=s),y.Z.mobile){var f=u.O.isPlayingVideo()&&null!==s,S=!u.O.isPlayingVideo()&&null!==s,b=S&&"AudioBook"==s.Type;q(n.querySelector(".btnRepeat"),S&&!b),q(n.querySelector(".btnShuffleQueue"),S&&!b),q(n.querySelector(".btnRewind"),f||b),q(n.querySelector(".btnFastForward"),f||b),q(n.querySelector(".nowPlayingSecondaryButtons .btnShuffleQueue"),f),q(n.querySelector(".nowPlayingSecondaryButtons .btnRepeat"),f)}else q(n.querySelector(".btnRewind"),null!=s),q(n.querySelector(".btnFastForward"),null!=s);var T=n.querySelector(".nowPlayingPositionSlider");if(T&&s&&s.RunTimeTicks&&T.setKeyboardSteps(1e6*g.skipBackLength()/s.RunTimeTicks,1e6*g.skipForwardLength()/s.RunTimeTicks),T&&!T.dragging){T.disabled=!d.CanSeek;var L=a.MediaSource&&null==a.MediaSource.RunTimeTicks;T.setIsClear(L)}P(d.IsPaused,null!=s),A(d.PositionTicks,s?s.RunTimeTicks:null),i(n,d.IsMuted,d.VolumeLevel),s&&"Video"==s.MediaType?n.classList.remove("hideVideoButtons"):n.classList.add("hideVideoButtons"),t(u.O.getRepeatMode()),O(!1),function(e,t,n){var i,a=t.NowPlayingItem,s=a?(i=a,c.Z.getNowPlayingNames(i,void 0).map((function(e){return r()(e.text)})).join("<br/>")).replace("<br/>"," - "):"";if(a){var o=a.ServerId||n;if("AudioBook"==a.Type||"Audio"==a.Type||"Audio"==a.MediaStreams[0].Type){var u="",d="";if(null!=a.Artists)if(null!=a.ArtistItems){var m,f=I(a.ArtistItems);try{for(f.s();!(m=f.n()).done;){var y=m.value;u+='<a class="button-link emby-button" is="emby-linkbutton" href="#/details?id='.concat(y.Id,"&serverId=").concat(o,'">').concat(r()(y.Name),"</a>"),y!==a.ArtistItems.slice(-1)[0]&&(u+=", ")}}catch(e){f.e(e)}finally{f.f()}}else if(a.Artists){var g,S=I(a.Artists);try{for(S.s();!(g=S.n()).done;){var b=g.value;u+="<a>".concat(r()(b),"</a>"),b!==a.Artists.slice(-1)[0]&&(u+=", ")}}catch(e){S.e(e)}finally{S.f()}}null!=a.Album&&(d='<a class="button-link emby-button" is="emby-linkbutton" href="#/details?id='+a.AlbumId+"&serverId=".concat(o,'">')+r()(a.Album)+"</a>"),e.querySelector(".nowPlayingAlbum").innerHTML=d,e.querySelector(".nowPlayingArtist").innerHTML=u,e.querySelector(".nowPlayingSongName").innerText=a.Name}else if("Episode"==a.Type){if(null!=a.SeasonName){var P=a.SeasonName;e.querySelector(".nowPlayingSeason").innerHTML='<a class="button-link emby-button" is="emby-linkbutton" href="#/details?id='+a.SeasonId+"&serverId=".concat(o,'">').concat(r()(P),"</a>")}if(null!=a.SeriesName){var T=a.SeriesName;null!=a.SeriesId?e.querySelector(".nowPlayingSerie").innerHTML='<a class="button-link emby-button" is="emby-linkbutton" href="#/details?id='+a.SeriesId+"&serverId=".concat(o,'">').concat(r()(T),"</a>"):e.querySelector(".nowPlayingSerie").innerText=T}e.querySelector(".nowPlayingEpisode").innerText=a.Name}else e.querySelector(".nowPlayingPageTitle").innerHTML=s;s.length>0&&"Audio"!=a.Type&&"Episode"!=a.Type?e.querySelector(".nowPlayingPageTitle").classList.remove("hide"):e.querySelector(".nowPlayingPageTitle").classList.add("hide");var L=function(e,t){if("Episode"!==e.Type)return null;if((t=t||{}).type=t.type||"Primary","Primary"===t.type&&e.SeriesPrimaryImageTag)return t.tag=e.SeriesPrimaryImageTag,p.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if("Thumb"===t.type){if(e.SeriesThumbImageTag)return t.tag=e.SeriesThumbImageTag,p.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if(e.ParentThumbImageTag)return t.tag=e.ParentThumbImageTag,p.Z.getApiClient(e.ServerId).getScaledImageUrl(e.ParentThumbItemId,t)}return null}(a,{maxHeight:300})||function(e,t){return(t=t||{}).type=t.type||"Primary",e.ImageTags&&e.ImageTags[t.type]?(t.tag=e.ImageTags[t.type],p.Z.getApiClient(e.ServerId).getScaledImageUrl(e.PrimaryImageItemId||e.Id,t)):e.AlbumId&&e.AlbumPrimaryImageTag?(t.tag=e.AlbumPrimaryImageTag,p.Z.getApiClient(e.ServerId).getScaledImageUrl(e.AlbumId,t)):null}(a,{maxHeight:300}),q=e.querySelector(".btnToggleContextMenu"),A=document.activeElement===q,k=q.cloneNode(!0);q.parentNode.replaceChild(k,q),q=e.querySelector(".btnToggleContextMenu"),A&&q.focus();var w={play:!1,queue:!1,stopPlayback:!0,clearQueue:!0,openAlbum:!1,positionTo:q},x=p.Z.getApiClient(a.ServerId);x.getItem(x.getCurrentUserId(),a.Id).then((function(e){x.getCurrentUser().then((function(t){q.addEventListener("click",(function(){h.default.show(Object.assign({item:e,user:t},w))}))}))})),function(e,t,n){var i=t.NowPlayingItem,r=e.querySelector(".nowPlayingPageImageContainer");n?(r.innerHTML='<img class="nowPlayingPageImage" src="'+n+'" />',e.querySelector(".nowPlayingPageImage").classList.toggle("nowPlayingPageImageAudio","Audio"===i.Type),e.querySelector(".nowPlayingPageImage").classList.toggle("nowPlayingPageImagePoster","Audio"!==i.Type)):r.innerHTML='<div class="nowPlayingPageImageContainerNoAlbum"><button data-action="link" class="cardImageContainer coveredImage '+v.default.getDefaultBackgroundClass(i.Name)+' cardContent cardContent-shadow itemAction"><span class="cardImageIcon material-icons album" aria-hidden="true"></span></button></div>'}(e,t,L),(0,l.pZ)([a]),x.getItem(x.getCurrentUserId(),a.Id).then((function(t){var n=t.UserData||{},i=null==n.Likes?"":n.Likes;e.querySelector(".nowPlayingPageUserDataButtonsTitle").innerHTML='<button is="emby-ratingbutton" type="button" class="listItemButton paper-icon-button-light" data-id="'+t.Id+'" data-serverid="'+t.ServerId+'" data-itemtype="'+t.Type+'" data-likes="'+i+'" data-isfavorite="'+n.IsFavorite+'"><span class="material-icons favorite" aria-hidden="true"></span></button>',e.querySelector(".nowPlayingPageUserDataButtons").innerHTML='<button is="emby-ratingbutton" type="button" class="listItemButton paper-icon-button-light" data-id="'+t.Id+'" data-serverid="'+t.ServerId+'" data-itemtype="'+t.Type+'" data-likes="'+i+'" data-isfavorite="'+n.IsFavorite+'"><span class="material-icons favorite" aria-hidden="true"></span></button>'}))}else(0,l.rs)(),e.querySelector(".nowPlayingPageUserDataButtons").innerHTML=""}(n,a)}function t(e){var t=Q.querySelectorAll(".repeatToggleButton"),n='<span class="material-icons repeat" aria-hidden="true"></span>',i=!0;switch(e){case"RepeatAll":break;case"RepeatOne":n='<span class="material-icons repeat_one" aria-hidden="true"></span>';break;default:i=!1}var r,a=I(t);try{for(a.s();!(r=a.n()).done;){var l=r.value;l.classList.toggle("buttonActive",i),l.innerHTML=n}}catch(e){a.e(e)}finally{a.f()}}function i(e,t,n){var i=e,r=Y;-1===r.indexOf("Mute")&&(T=!1),-1===r.indexOf("SetVolume")&&(L=!1),z.isLocalPlayer&&m.M.supports("physicalvolumecontrol")&&(T=!1,L=!1);var a=i.querySelector(".buttonMute"),l=a.querySelector(".material-icons");if(l.classList.remove("volume_off","volume_up"),t?(a.setAttribute("title",f.ZP.translate("Unmute")),l.classList.add("volume_off")):(a.setAttribute("title",f.ZP.translate("Mute")),l.classList.add("volume_up")),T||L){a.classList.toggle("hide",!T);var s=e.querySelector(".nowPlayingVolumeSlider"),o=e.querySelector(".nowPlayingVolumeSliderContainer");s&&(o.classList.toggle("hide",!L),s.dragging||(s.value=n||0))}else e.querySelector(".volumecontrol").classList.add("hide")}function P(e,t){var n=Q.querySelector(".btnPlayPause"),i=n.querySelector(".material-icons");i.classList.remove("play_circle_filled","pause_circle_filled"),i.classList.add(e?"play_circle_filled":"pause_circle_filled"),q(n,t)}function A(e,t){var n=Q,i=n.querySelector(".nowPlayingPositionSlider");if(i&&!i.dragging)if(t){var r=e/t;r*=100,i.value=r}else i.value=0;n.querySelector(".positionTime").innerHTML=null==e?"--:--":a.ZP.getDisplayRunningTime(e),n.querySelector(".runtime").innerHTML=null!=t?a.ZP.getDisplayRunningTime(t):"--:--"}function k(e){return u.O.getPlaylist(e)}function w(e,t){console.debug("remotecontrol event: "+e.type),R.call(this,e,t)}function x(){t(u.O.getRepeatMode())}function O(){var e,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=u.O.getQueueShuffleMode(this),i="buttonActive",r=I(Q.querySelectorAll(".btnShuffleQueue"));try{for(r.s();!(e=r.n()).done;){var a=e.value;"Shuffle"===n?a.classList.add(i):a.classList.remove(i)}}catch(e){r.e(e)}finally{r.f()}t&&C()}function C(){var e,t;e=Q,k(t=this).then((function(n){var i="",r=!0;y.Z.mobile&&(n.length>0?e.querySelector(".btnTogglePlaylist").classList.remove("hide"):e.querySelector(".btnTogglePlaylist").classList.add("hide"),r=!1),i+=s.Z.getListViewHtml({items:n,smallIcon:!0,action:"setplaylistindex",enableUserDataButtons:r,rightButtons:[{icon:"remove_circle_outline",title:f.ZP.translate("ButtonRemove"),id:"remove"}],dragHandle:!0});var a=e.querySelector(".playlist"),l=a.querySelector("button:focus");if(a.innerHTML=i,null!==l){l=l.getAttribute("data-playlistitemid");var c=a.querySelector('button[data-playlistitemid="'.concat(l,'"]'));null!==c&&c.focus()}var d=u.O.getCurrentPlaylistItemId(t);if(d){var m=a.querySelector('.listItem[data-playlistItemId="'.concat(d,'"] .listItemImage'));m&&(m.classList.remove("lazy"),m.classList.add("playlistIndexIndicatorImage"))}o.default.lazyChildren(a)}))}function Z(e,t){var n=Q;if(void 0!==t)for(var i=t.playlistItemIds,r=0,a=i.length;r<a;r++){var l=n.querySelector('.listItem[data-playlistItemId="'+i[r]+'"]');l&&l.parentNode.removeChild(l)}else C()}function M(t,n){console.debug("remotecontrol event: "+t.type),n.NextMediaType||(e(this,Q,{}),b.appRouter.back())}function N(){P(this.paused(),!0)}function R(t,n){e(this,Q,n),C()}function E(){var e=(new Date).getTime();e-W>=700&&(W=e,$=u.O.duration(this),A(1e4*u.O.currentTime(this),$))}function D(){i(Q,this.isMuted(),this.getVolume())}function B(){var e=z;e&&(d.Z.off(e,"playbackstart",w),d.Z.off(e,"statechange",R),d.Z.off(e,"repeatmodechange",x),d.Z.off(e,"shufflequeuemodechange",O),d.Z.off(e,"playlistitemremove",Z),d.Z.off(e,"playlistitemmove",C),d.Z.off(e,"playlistitemadd",C),d.Z.off(e,"playbackstop",M),d.Z.off(e,"volumechange",D),d.Z.off(e,"pause",N),d.Z.off(e,"unpause",N),d.Z.off(e,"timeupdate",E),z=null)}function F(e,t){if(B(),z=t,t){var n=u.O.getPlayerState(t);R.call(t,{type:"init"},n),d.Z.on(t,"playbackstart",w),d.Z.on(t,"statechange",R),d.Z.on(t,"repeatmodechange",x),d.Z.on(t,"shufflequeuemodechange",O),d.Z.on(t,"playlistitemremove",Z),d.Z.on(t,"playlistitemmove",C),d.Z.on(t,"playlistitemadd",C),d.Z.on(t,"playbackstop",M),d.Z.on(t,"volumechange",D),d.Z.on(t,"pause",N),d.Z.on(t,"unpause",N),d.Z.on(t,"timeupdate",E);var i=u.O.getPlayerInfo().supportedCommands;Y=i,function(e,t){for(var n=e.querySelectorAll(".btnCommand"),i=0,r=n.length;i<r;i++){var a=-1!==t.indexOf(n[i].getAttribute("data-command"));n[i].disabled=!a}}(e,i)}}function H(){z&&(this.classList.contains("repeatToggleButton")?function(){switch(u.O.getRepeatMode()){case"RepeatAll":u.O.setRepeatMode("RepeatOne");break;case"RepeatOne":u.O.setRepeatMode("RepeatNone");break;case"RepeatNone":u.O.setRepeatMode("RepeatAll")}}():u.O.sendCommand({Name:this.getAttribute("data-command")},z))}function V(){n.e(10586).then(n.bind(n,43126)).then((function(e){var t=e.default;k(z).then((function(e){return e.filter((function(e){return e.Id&&e.ServerId}))})).then((function(e){var n=e.length?e[0].ServerId:ApiClient.serverId();new t({items:e.map((function(e){return e.Id})),serverId:n,enableAddToPlayQueue:!1,defaultValue:"new"})}))}))}function _(){F(Q,u.O.getCurrentPlayer())}function U(e){var t=e.target;return u.O.sendCommand({Name:"DisplayMessage",Arguments:{Header:t.querySelector("#txtMessageTitle").value,Text:t.querySelector("#txtMessageText",t).value}},z),t.querySelector("input").value="",(0,S.Z)(f.ZP.translate("MessageSent")),e.preventDefault(),e.stopPropagation(),!1}function j(e){var t=e.target;return u.O.sendCommand({Name:"SendString",Arguments:{String:t.querySelector("#txtTypeText",t).value}},z),t.querySelector("input").value="",(0,S.Z)(f.ZP.translate("TextSent")),e.preventDefault(),e.stopPropagation(),!1}var Q,z,K,Y=[],W=0,$=0,G=this;G.init=function(e,t){!function(e,t){var i='<div class="volumecontrol flex align-items-center flex-wrap-wrap justify-content-center">';i+='<button is="paper-icon-button-light" class="buttonMute autoSize" title='.concat(f.ZP.translate("Mute"),'><span class="xlargePaperIconButton material-icons volume_up" aria-hidden="true"></span></button>'),i+='<div class="sliderContainer nowPlayingVolumeSliderContainer"><input is="emby-slider" type="range" step="1" min="0" max="100" value="0" class="nowPlayingVolumeSlider"/></div>',i+="</div>";var r=t.querySelector(".playlistSectionButton");if(y.Z.mobile?(r.querySelector(".btnTogglePlaylist").insertAdjacentHTML("afterend",i),r.classList.add("playlistSectionButtonTransparent"),t.querySelector(".btnTogglePlaylist").classList.remove("hide"),t.querySelector(".playlistSectionButton").classList.remove("justify-content-center"),t.querySelector(".playlistSectionButton").classList.add("justify-content-space-between")):(t.querySelector(".nowPlayingSecondaryButtons").insertAdjacentHTML("beforeend",i),r.classList.remove("align-items-center","justify-content-center"),r.classList.add("align-items-right","justify-content-flex-end"),t.querySelector(".playlist").classList.remove("hide"),t.querySelector(".btnSavePlaylist").classList.remove("hide"),t.classList.add("padded-bottom")),function(e){for(var t=e.querySelectorAll(".btnCommand"),i=e.querySelector(".nowPlayingPositionSlider"),r=0,l=t.length;r<l;r++)t[r].addEventListener("click",H);e.querySelector(".btnToggleFullscreen").addEventListener("click",(function(){z&&u.O.toggleFullscreen(z)})),e.querySelector(".btnAudioTracks").addEventListener("click",(function(e){var t,i,r,a;z&&K&&K.NowPlayingItem&&(t=z,i=e.target,r=u.O.getAudioStreamIndex(t),a=u.O.audioTracks(t).map((function(e){var t={name:e.DisplayTitle,id:e.Index};return e.Index==r&&(t.selected=!0),t})),Promise.resolve().then(n.bind(n,12801)).then((function(e){e.show({items:a,positionTo:i,callback:function(e){u.O.setAudioStreamIndex(parseInt(e,10),t)}})})))})),e.querySelector(".btnSubtitles").addEventListener("click",(function(e){var t,i,r,a;z&&K&&K.NowPlayingItem&&(t=z,i=e.target,r=u.O.getSubtitleStreamIndex(t),(a=u.O.subtitleTracks(t).map((function(e){var t={name:e.DisplayTitle,id:e.Index};return e.Index==r&&(t.selected=!0),t}))).unshift({id:-1,name:f.ZP.translate("Off"),selected:null==r}),Promise.resolve().then(n.bind(n,12801)).then((function(e){e.show({items:a,positionTo:i,callback:function(e){u.O.setSubtitleStreamIndex(parseInt(e,10),t)}})})))})),e.querySelector(".btnStop").addEventListener("click",(function(){z&&u.O.stop(z)})),e.querySelector(".btnPlayPause").addEventListener("click",(function(){z&&u.O.playPause(z)})),e.querySelector(".btnNextTrack").addEventListener("click",(function(){z&&u.O.nextTrack(z)})),e.querySelector(".btnRewind").addEventListener("click",(function(){z&&u.O.rewind(z)})),e.querySelector(".btnFastForward").addEventListener("click",(function(){z&&u.O.fastForward(z)}));var s,o=I(e.querySelectorAll(".btnShuffleQueue"));try{for(o.s();!(s=o.n()).done;)s.value.addEventListener("click",(function(){z&&u.O.toggleQueueShuffleMode(z)}))}catch(e){o.e(e)}finally{o.f()}e.querySelector(".btnPreviousTrack").addEventListener("click",(function(e){if(z){if("Audio"===K.NowPlayingItem.MediaType){if(e.detail>1)return;if(z._currentTime>=5||u.O.getCurrentPlaylistIndex(z)<=1)return u.O.seekPercent(0,z),void(i.value=0)}u.O.previousTrack(z)}})),e.querySelector(".btnPreviousTrack").addEventListener("dblclick",(function(){z&&u.O.previousTrack(z)})),i.addEventListener("change",(function(){var e=this.value;if(z){var t=parseFloat(e);u.O.seekPercent(t,z)}})),i.getBubbleText=function(e){if(!K||!K.NowPlayingItem||!$)return"--:--";var t=$;return t/=100,t*=e,a.ZP.getDisplayRunningTime(t)},e.querySelector(".nowPlayingVolumeSlider").addEventListener("input",(function(e){u.O.setVolume(e.target.value,z)})),e.querySelector(".buttonMute").addEventListener("click",(function(){u.O.toggleMute(z)}));var c=e.querySelector(".playlist");c.addEventListener("action-remove",(function(e){u.O.removeFromPlaylist([e.detail.playlistItemId],z)})),c.addEventListener("itemdrop",(function(e){var t=e.detail.newIndex,n=e.detail.playlistItemId;u.O.movePlaylistItem(n,t,z)})),e.querySelector(".btnSavePlaylist").addEventListener("click",V),e.querySelector(".btnTogglePlaylist").addEventListener("click",(function(){e.querySelector(".playlist").classList.contains("hide")?(e.querySelector(".playlist").classList.remove("hide"),e.querySelector(".btnSavePlaylist").classList.remove("hide"),e.querySelector(".volumecontrol").classList.add("hide"),y.Z.mobile&&e.querySelector(".playlistSectionButton").classList.remove("playlistSectionButtonTransparent")):(e.querySelector(".playlist").classList.add("hide"),e.querySelector(".btnSavePlaylist").classList.add("hide"),(T||L)&&e.querySelector(".volumecontrol").classList.remove("hide"),y.Z.mobile&&e.querySelector(".playlistSectionButton").classList.add("playlistSectionButtonTransparent"))}))}(t),t.querySelector(".sendMessageForm").addEventListener("submit",U),t.querySelector(".typeTextForm").addEventListener("submit",j),d.Z.on(u.O,"playerchange",_),y.Z.tv){var l=t.querySelector(".nowPlayingPositionSlider");l.classList.add("focusable"),l.enableKeyboardDragging()}}(0,Q=t)},G.onShow=function(){F(Q,u.O.getCurrentPlayer())},G.destroy=function(){B(),d.Z.off(u.O,"playerchange",_),K=null}}var k=n(71487);function w(e){var t=new A;t.init(e,e.querySelector(".remoteControlContent")),e.addEventListener("viewshow",(function(){k.default.setTransparentMenu(!0),t&&t.onShow()})),e.addEventListener("viewbeforehide",(function(){k.default.setTransparentMenu(!1),t&&t.destroy()}))}n(38228)},82427:function(e,t,n){n(5769),n(63238),n(61418),n(17460),n(14078),n(27471),n(32081);var i=n(61008),r=n(58517),a=n(48957),l=n(98301),s=n(30325),o=n(57366),u=n(72365),c=n(28540),d=n(34643),m=n(44038),f=n(81643),y=(n(67752),n(18613)),g=n(28172),v=Object.create(HTMLDivElement.prototype);function h(e){var t=this,n=t.multiSelect;!1!==(null==n?void 0:n.onContainerClick.call(t,e))&&i.ZP.onClick.call(t,e)}function p(e){return e.preventDefault(),e.stopPropagation(),!1}function S(e){var t=e.target,n=u.ZP.parentWithAttribute(t,"data-id");if(n&&n.getAttribute("data-serverid"))return r.default.handleCommand("menu",{sourceElement:n}),e.preventDefault(),e.stopPropagation(),!1}function b(e,t,i){var r=this;Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onUserDataChanged(i,r)}));var a=I(r);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||r.notifyRefreshNeeded()}function I(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function P(e,t,i){var r=this;if(-1===I(r).indexOf("timers")){var a=i.ProgramId,l=i.Id;Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onTimerCreated(a,l,r)}))}else r.notifyRefreshNeeded()}function T(){-1!==I(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function L(e,t,i){var r=this;-1===I(r).indexOf("timers")?Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onTimerCancelled(i.Id,r)})):r.notifyRefreshNeeded()}function q(e,t,i){var r=this;-1===I(r).indexOf("seriestimers")?Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onSeriesTimerCancelled(i.Id,r)})):r.notifyRefreshNeeded()}function A(e,t,n){var i=this,r=I(i);if(-1===r.indexOf("seriestimers")&&-1===r.indexOf("timers")){var a=n.ItemsAdded||[],l=n.ItemsRemoved||[];if(a.length||l.length){var s=i.getAttribute("data-parentid");if(s){var o=n.FoldersAddedTo||[],u=n.FoldersRemovedFrom||[],c=n.CollectionFolders||[];if(-1===o.indexOf(s)&&-1===u.indexOf(s)&&-1===c.indexOf(s))return}i.notifyRefreshNeeded()}}}function k(e,t){var n,i=this,r=t.state,a=I(i);if(r.NowPlayingItem&&"Video"===r.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void i.notifyRefreshNeeded(!0)}else if("Audio"===(null===(n=r.NowPlayingItem)||void 0===n?void 0:n.MediaType)&&-1!==a.indexOf("audioplayback"))return void i.notifyRefreshNeeded(!0)}function w(e,t,n,i){var r=n.bind(e);i=i||m.default,f.Z.on(i,t,r),e["event_"+t]=r}function x(e,t,n){var i=e["event_"+t];i&&(n=n||m.default,f.Z.off(n,t,i),e["event_"+t]=null)}function O(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function C(e,t){O(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function Z(e){var t=e.Items||e,n=this.parentContainer;n&&(t.length?n.classList.remove("hide"):n.classList.add("hide"));var i,r,a=document.activeElement;this.contains(a)&&(r=!0,i=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),l.default.lazyChildren(this),r&&function(e,t){if(t){var n=e.querySelector('[data-id="'+t+'"]');if(n)try{return void d.Z.focus(n)}catch(e){console.error(e)}}d.Z.autoFocus(e)}(this,i),C(this),this.afterRefresh&&this.afterRefresh(e)}v.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var i=this;Promise.all([n.e(52943),n.e(9245)]).then(n.bind(n,52943)).then((function(e){var t=e.default;i.multiSelect=new t({container:i,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},v.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var n=this;n.sortable=new g.ZP(n,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var n=e.item,i=e.newIndex,r=n.getAttribute("data-playlistitemid"),a=n.getAttribute("data-playlistid");if(a){var l=n.getAttribute("data-serverid"),s=y.Z.getApiClient(l);c.ZP.show(),s.ajax({url:s.getUrl("Playlists/"+a+"/Items/"+r+"/Move/"+i),type:"POST"}).then((function(){c.ZP.hide()}),(function(){c.ZP.hide(),t.refreshItems()}))}else{var o=e.oldIndex;n.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:o,newIndex:i,playlistItemId:r},bubbles:!0,cancelable:!1}))}}(e,n)}})}}else t&&(t.destroy(),this.sortable=null)},v.createdCallback=function(){this.classList.add("itemsContainer")},v.attachedCallback=function(){this.addEventListener("click",h),o.Z.touch?this.addEventListener("contextmenu",p):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",S),(s.Z.desktop||s.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),s.Z.tv&&this.classList.add("itemsContainer-tv"),i.ZP.on(this,{click:!1}),w(this,"UserDataChanged",b),w(this,"TimerCreated",P),w(this,"SeriesTimerCreated",T),w(this,"TimerCancelled",L),w(this,"SeriesTimerCancelled",q),w(this,"LibraryChanged",A),w(this,"playbackstop",k,a.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},v.detachedCallback=function(){O(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",h),this.removeEventListener("contextmenu",S),this.removeEventListener("contextmenu",p),i.ZP.off(this,{click:!1}),x(this,"UserDataChanged"),x(this,"TimerCreated"),x(this,"SeriesTimerCreated"),x(this,"TimerCancelled"),x(this,"SeriesTimerCancelled"),x(this,"LibraryChanged"),x(this,"playbackstop",a.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},v.pause=function(){O(this,!0),this.paused=!0},v.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var n=t-(new Date).getTime();n>0&&!this.needsRefresh?C(this,n):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||e&&e.refresh?this.refreshItems():Promise.resolve()},v.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(Z.bind(this))):Promise.resolve()},v.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:v,extends:"div"})}}]);