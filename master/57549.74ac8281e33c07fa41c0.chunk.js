"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57549,2217,47027],{85420:function(e,r,a){a.r(r),a(86584),a(83810),a(78557),a(90076);var s=a(89166),t=a(82885),n=a(73233),i=a(89100),o={};(0,i.pageClassOn)("pageshow","page",(function(){var e,r,a,i=this;i.classList.contains("selfBackdropPage")||(i.classList.contains("backdropPage")?t.enableBackdrops()?(e=i.getAttribute("data-backdroptype"),r=i.classList.contains("globalBackdropPage")?"":n.default.getTopParentId(),(a=window.ApiClient)&&function(e,r,a,s){var t="backdrops2_".concat(r+(a||"")+(s||"")),n=o[t];if(n)return console.debug("Found backdrop id list in cache. Key: ".concat(t)),n=JSON.parse(n),Promise.resolve(n);var i={SortBy:"IsFavoriteOrLiked,Random",Limit:20,Recursive:!0,IncludeItemTypes:a,ImageTypes:"Backdrop",ParentId:s,EnableTotalRecordCount:!1,MaxOfficialRating:s?"":"PG-13"};return e.getItems(e.getCurrentUserId(),i).then((function(e){var r=e.Items.map((function(e){return{Id:e.Id,tag:e.BackdropImageTags[0],ServerId:e.ServerId}}));return o[t]=JSON.stringify(r),r}))}(a,a.getCurrentUserId(),e,r).then((function(e){e.length?(0,s.C9)(e.map((function(e){return e.BackdropImageTags=[e.tag],e}))):(0,s.gJ)()}))):(i.classList.remove("backdropPage"),(0,s.gJ)()):(0,s.gJ)())}))},32203:function(e,r,a){a.d(r,{Bq:function(){return o},Jd:function(){return i}});var s=a(65369),t=a(11444),n="assets/img/devices/";function i(e){switch(e){case s.X.Movies:return"movie";case s.X.Music:return"music_note";case s.X.Homevideos:case s.X.Photos:return"photo";case s.X.Livetv:return"live_tv";case s.X.Tvshows:return"tv";case s.X.Trailers:return"theaters";case s.X.Musicvideos:return"music_video";case s.X.Books:return"book";case s.X.Boxsets:return"video_library";case s.X.Playlists:return"queue";case"channels":return"videocam";case void 0:return"quiz";default:return"folder"}}function o(e,r){switch(e){case t.D.MusicAlbum:return"album";case t.D.MusicArtist:case t.D.Person:return"person";case t.D.Audio:return"audiotrack";case t.D.Movie:return"movie";case t.D.Episode:case t.D.Series:return"tv";case t.D.Program:return"live_tv";case t.D.Book:return"book";case t.D.Folder:return"folder";case t.D.BoxSet:return"video_library";case t.D.Playlist:return"queue";case t.D.Photo:return"photo";case t.D.PhotoAlbum:return"photo_album";default:return r}}r.Ay={getDeviceIcon:function(e){var r;switch(e.AppName||e.Client){case"Samsung Smart TV":return n+"samsung.svg";case"Xbox One":return n+"xbox.svg";case"Sony PS4":return n+"playstation.svg";case"Kodi":case"Kodi JellyCon":return n+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return n+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return n+"apple.svg";case"Home Assistant":return n+"home-assistant.svg";case"Jellyfin Roku":return n+"roku.svg";case"Finamp":return n+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return n+"opera.svg";case"Chrome":case"Chrome Android":return n+"chrome.svg";case"Firefox":case"Firefox Android":return n+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return n+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return n+"edgechromium.svg";case"Edge":return n+"edge.svg";case"Internet Explorer":return n+"msie.svg";default:return n+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(r=e.Capabilities)||void 0===r?void 0:r.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(r){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,r)}return n+"other.svg"}},getLibraryIcon:i,getItemTypeIcon:o}}}]);