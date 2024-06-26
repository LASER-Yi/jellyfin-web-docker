"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7631,96084,49803,40367],{95626:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}}),r(24776),r(20518),r(78557),r(23630);var n,o,i,c=r(22696),a=r.n(c),s=r(84069),u=r(70267),l=r(46782),d=r(80669),f=r(86191),v=r(93599),y=r(9164),m=r(74550),h=r(9482),p=r(73233),S=r(62014),g=r(12868),A=!1,L=g.AutoScroll.Instant;function b(e,t,r){return l.A.tv?e+='<button class="lyricsLine dynamicLyric listItem show-focus" id="lyricPosition'.concat(r,'" data-lyrictime="').concat(t.Start,'">').concat(a()(t.Text),"</button>"):e+='<div class="lyricsLine dynamicLyric" id="lyricPosition'.concat(r,'" data-lyrictime="').concat(t.Start,'">').concat(a()(t.Text),"</div>"),e}function w(e,t,r){return l.A.tv?e+='<button class="lyricsLine listItem show-focus" id="lyricPosition'.concat(r,'">').concat(a()(t.Text),"</button>"):e+='<div class="lyricsLine" id="lyricPosition'.concat(r,'">').concat(a()(t.Text),"</div>"),e}function I(e,t){return t.findLastIndex((function(t){return t.Start<=e}))}function P(){var e=d.f.currentTime();return void 0===e&&(e=0),1e4*e}function E(e){function t(t){var r=e.querySelector("#lyricPosition".concat(t));r&&(r.classList.remove("pastLyric"),r.classList.add("futureLyric"))}function r(t){var r=e.querySelector("#lyricPosition".concat(t));r&&(r.classList.remove("pastLyric"),r.classList.remove("futureLyric"),L!==g.AutoScroll.NoScroll&&(v.Ay.scrollToElement(r,L===g.AutoScroll.Smooth),y.A.focus(r),L=g.AutoScroll.Smooth))}function c(n,o){for(var i=0;i<=o.length;i++)i<n?(c=i,a=void 0,(a=e.querySelector("#lyricPosition".concat(c)))&&(a.classList.remove("futureLyric"),a.classList.add("pastLyric"))):i===n?r(i):i>n&&t(i);var c,a}function a(){var t=e.querySelector(".dynamicLyricsContainer");if(t){var r="<h1> ".concat(h.Ay.translate("HeaderNoLyrics")," </h1>");t.innerHTML=r}s.default.autoFocus()}function l(t){i=t,(A=Object.prototype.hasOwnProperty.call(t[0],"Start"))?function(t){var r=e.querySelector(".dynamicLyricsContainer");if(r){var o=t.reduce(b,"");r.innerHTML=o}r.querySelectorAll(".lyricsLine").forEach((function(e){e.addEventListener("click",(function(){return t=e.getAttribute("data-lyrictime"),L=g.AutoScroll.Smooth,d.f.seek(t),void(d.f.paused()&&d.f.playPause(n));var t}))})),c(I(P(),t),i)}(i):function(t){var r=e.querySelector(".dynamicLyricsContainer");if(r){var n=t.reduce(w,"");r.innerHTML=n}}(i),s.default.autoFocus(e)}function E(e){e!==n&&(D(),n=e,e&&(S.A.on(e,"timeupdate",T),S.A.on(e,"playbackstart",k),S.A.on(e,"playbackstop",C)))}function D(){var e=n;e&&(S.A.off(e,"timeupdate",T),S.A.off(e,"playbackstart",k),S.A.off(e,"playbackstop",C),n=null)}function T(){A&&c(I(P(),i),i)}function k(e,t){o.Id!==t.NowPlayingItem.Id&&x()}function C(e,t){t.NextMediaType||u.appRouter.goHome()}function _(){E(d.f.getCurrentPlayer())}function x(){i=null,o=null,A=!1,p.default.setTitle(h.Ay.translate("Lyrics"));var e,t,r,n=d.f.getCurrentPlayer();if(n){E(n);var c=d.f.getPlayerState(n);o=c.NowPlayingItem,(e=c.NowPlayingItem.ServerId,t=c.NowPlayingItem.Id,r=f.A.getApiClient(e),r.ajax({url:r.getUrl("Audio/"+t+"/Lyrics"),type:"GET",dataType:"json"}).then((function(e){if(!e.Lyrics)throw new Error;return e.Lyrics}))).then(l).catch(a)}else u.appRouter.goHome()}function N(){L=g.AutoScroll.NoScroll}function O(e){var t=m.Ay.getKeyName(e);"ArrowUp"!==t&&"ArrowDown"!==t||(L=g.AutoScroll.NoScroll)}e.addEventListener("viewshow",(function(){S.A.on(d.f,"playerchange",_),L=g.AutoScroll.Instant,document.addEventListener("wheel",N),document.addEventListener("touchmove",N),document.addEventListener("keydown",O);try{x()}catch(e){u.appRouter.goHome()}})),e.addEventListener("viewbeforehide",(function(){S.A.off(d.f,"playerchange",_),document.removeEventListener("wheel",N),document.removeEventListener("touchmove",N),document.removeEventListener("keydown",O),D()}))}},12868:function(e,t,r){var n;r.r(t),r.d(t,{AutoScroll:function(){return n}}),function(e){e[e.NoScroll=0]="NoScroll",e[e.Smooth=1]="Smooth",e[e.Instant=2]="Instant"}(n||(n={}))},10947:function(e,t,r){var n;r.d(t,{B:function(){return n}}),function(e){e.SET_TABS="SET_TABS",e.SHOW_VIDEO_OSD="SHOW_VIDEO_OSD"}(n||(n={}))},40782:function(e,t,r){var n=r(11444),o="assets/img/devices/";t.Ay={getDeviceIcon:function(e){var t;switch(e.AppName||e.Client){case"Samsung Smart TV":return o+"samsung.svg";case"Xbox One":return o+"xbox.svg";case"Sony PS4":return o+"playstation.svg";case"Kodi":case"Kodi JellyCon":return o+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return o+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return o+"apple.svg";case"Home Assistant":return o+"home-assistant.svg";case"Jellyfin Roku":return o+"roku.svg";case"Finamp":return o+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return o+"opera.svg";case"Chrome":case"Chrome Android":return o+"chrome.svg";case"Firefox":case"Firefox Android":return o+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return o+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return o+"edgechromium.svg";case"Edge":return o+"edge.svg";case"Internet Explorer":return o+"msie.svg";default:return o+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(t=e.Capabilities)||void 0===t?void 0:t.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(t){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,t)}return o+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}},getItemTypeIcon:function(e){switch(e){case n.D.MusicAlbum:return"album";case n.D.MusicArtist:case n.D.Person:return"person";case n.D.Audio:return"audiotrack";case n.D.Movie:return"movie";case n.D.Episode:case n.D.Series:return"tv";case n.D.Program:return"live_tv";case n.D.Book:return"book";case n.D.Folder:return"folder";case n.D.BoxSet:return"collections";case n.D.Playlist:return"view_list";case n.D.Photo:return"photo";case n.D.PhotoAlbum:return"photo_album";default:return"folder"}}}}}]);