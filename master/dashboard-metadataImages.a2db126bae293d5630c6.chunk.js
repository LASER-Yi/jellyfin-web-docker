/*! For license information please see dashboard-metadataImages.a2db126bae293d5630c6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81831,96084,40367],{49032:function(e,a,t){t.r(a),t(24776),t(44962),t(78557),t(90076),t(83994),t(23630),t(82367);var r=t(28850),n=(t(63855),t(56869)),o=t(73233),i=t(9482),u=t(89100);function s(e){return ApiClient.getCountries().then((function(a){var t="";t+="<option value=''></option>";for(var r=0,n=a.length;r<n;r++){var o=a[r];t+="<option value='"+o.TwoLetterISORegionName+"'>"+o.DisplayName+"</option>"}e.innerHTML=t}))}function c(){var e=this;return n.Ay.show(),ApiClient.getServerConfiguration().then((function(a){a.PreferredMetadataLanguage=e.querySelector("#selectLanguage").value,a.MetadataCountryCode=e.querySelector("#selectCountry").value,a.DummyChapterDuration=e.querySelector("#valDummyChapterDuration").value,a.ChapterImageResolution=e.querySelector("#txtChapterImageResolution").value,ApiClient.updateServerConfiguration(a).then(u.default.processServerConfigurationUpdateResult)})),!1}function l(){return[{href:"#/dashboard/libraries",name:i.Ay.translate("HeaderLibraries")},{href:"#/dashboard/libraries/display",name:i.Ay.translate("Display")},{href:"#/dashboard/libraries/metadata",name:i.Ay.translate("Metadata")},{href:"#/dashboard/libraries/nfo",name:i.Ay.translate("TabNfoSettings")}]}$(document).on("pageinit","#metadataImagesConfigurationPage",(function(){$(".metadataImagesConfigurationForm").off("submit",c).on("submit",c)})).on("pageshow","#metadataImagesConfigurationPage",(function(){var e,a,t;o.default.setTabs("metadata",2,l),n.Ay.show(),e=this,t=[ApiClient.getServerConfiguration(),(a=e.querySelector("#selectLanguage"),ApiClient.getCultures().then((function(e){var t="";t+="<option value=''></option>";for(var r=0,n=e.length;r<n;r++){var o=e[r];t+="<option value='"+o.TwoLetterISOLanguageName+"'>"+o.DisplayName+"</option>"}a.innerHTML=t}))),s(e.querySelector("#selectCountry"))],function(e){var a="";[{name:i.Ay.translate("ResolutionMatchSource"),value:r.m.MatchSource},{name:"2160p",value:r.m.P2160},{name:"1440p",value:r.m.P1440},{name:"1080p",value:r.m.P1080},{name:"720p",value:r.m.P720},{name:"480p",value:r.m.P480},{name:"360p",value:r.m.P360},{name:"240p",value:r.m.P240},{name:"144p",value:r.m.P144}].forEach((function(e){var t=e.value,r=e.name;a+='<option value="'.concat(t,'">').concat(r,"</option>")})),e.innerHTML=a}(e.querySelector("#txtChapterImageResolution")),Promise.all(t).then((function(a){var t=a[0];e.querySelector("#selectLanguage").value=t.PreferredMetadataLanguage||"",e.querySelector("#selectCountry").value=t.MetadataCountryCode||"",e.querySelector("#valDummyChapterDuration").value=t.DummyChapterDuration||"0",e.querySelector("#txtChapterImageResolution").value=t.ChapterImageResolution||"",n.Ay.hide()}))}))},40782:function(e,a,t){var r=t(11444),n="assets/img/devices/";a.Ay={getDeviceIcon:function(e){var a;switch(e.AppName||e.Client){case"Samsung Smart TV":return n+"samsung.svg";case"Xbox One":return n+"xbox.svg";case"Sony PS4":return n+"playstation.svg";case"Kodi":case"Kodi JellyCon":return n+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return n+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return n+"apple.svg";case"Home Assistant":return n+"home-assistant.svg";case"Jellyfin Roku":return n+"roku.svg";case"Finamp":return n+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return n+"opera.svg";case"Chrome":case"Chrome Android":return n+"chrome.svg";case"Firefox":case"Firefox Android":return n+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return n+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return n+"edgechromium.svg";case"Edge":return n+"edge.svg";case"Internet Explorer":return n+"msie.svg";default:return n+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(a=e.Capabilities)||void 0===a?void 0:a.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(a){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,a)}return n+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}},getItemTypeIcon:function(e){switch(e){case r.D.MusicAlbum:return"album";case r.D.MusicArtist:case r.D.Person:return"person";case r.D.Audio:return"audiotrack";case r.D.Movie:return"movie";case r.D.Episode:case r.D.Series:return"tv";case r.D.Program:return"live_tv";case r.D.Book:return"book";case r.D.Folder:return"folder";case r.D.BoxSet:return"collections";case r.D.Playlist:return"view_list";case r.D.Photo:return"photo";case r.D.PhotoAlbum:return"photo_album";default:return"folder"}}}},35840:function(e,a,t){function r(e){return e}t.d(a,{j:function(){return r}})},78779:function(e,a,t){var r=t(63696),n="function"==typeof Object.is?Object.is:function(e,a){return e===a&&(0!==e||1/e==1/a)||e!=e&&a!=a},o=r.useState,i=r.useEffect,u=r.useLayoutEffect,s=r.useDebugValue;function c(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!n(e,t)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,a){return a()}:function(e,a){var t=a(),r=o({inst:{value:t,getSnapshot:a}}),n=r[0].inst,l=r[1];return u((function(){n.value=t,n.getSnapshot=a,c(n)&&l({inst:n})}),[e,t,a]),i((function(){return c(n)&&l({inst:n}),e((function(){c(n)&&l({inst:n})}))}),[e]),s(t),t};a.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},43676:function(e,a,t){e.exports=t(78779)}}]);