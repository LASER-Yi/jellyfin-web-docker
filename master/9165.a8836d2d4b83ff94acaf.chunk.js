"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9165],{69165:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}}),i(5769),i(61013),i(27471),i(63238),i(61418),i(17460),i(14078),i(52077),i(72482),i(48410),i(99785);var a=i(83094),s=i(27515),l=i(90914),n=i(12392),c=i(78695),r=i(44614),o=i(28978),d=(i(45368),i(83225),i(78066),i(21865),i(20716),i(85427),i(6626),i(15359),i(53913));function b(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e){return e.preventDefault(),!1}function p(e,t,i){var a=i.checked;a=a||null,o.setFilter(t,a)}function h(e,t){for(var i=a.ZP.parentWithClass(e,"checkboxList-verticalwrap"),l=s.Z.getFocusableElements(i),n=-1,c=0,r=l.length;c<r;c++)if(l[c]===e){n=c;break}n+=t,n=Math.min(l.length-1,n);var o=l[n=Math.max(0,n)];o&&s.Z.focus(o)}function v(e,t,a){Promise.resolve().then(i.bind(i,74227)).then((function(i){var s=a?"on":"off";i.centerFocus[s](e,t)}))}function f(e){switch(e.detail.command){case"left":h(e.target,-1),e.preventDefault();break;case"right":h(e.target,1),e.preventDefault()}}function m(e,t){for(var i=e.querySelectorAll(".checkboxList-verticalwrap"),a=0,s=i.length;a<s;a++)t?n.default.on(i[a],f):n.default.off(i[a],f)}var g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i;return t=e,(i=[{key:"show",value:function(e){return new Promise((function(t){var i={removeOnClose:!0,scrollY:!1};c.Z.tv?i.size="fullscreen":i.size="small";var a=l.default.createDialog(i);a.classList.add("formDialog"),a.innerHTML=r.ZP.translateHtml('<div class="formDialogHeader"><button is="paper-icon-button-light" class="btnCancel hide-mouse-idle-tv" tabindex="-1"><span class="material-icons arrow_back"></span></button><h3 class="formDialogHeaderTitle">${Filters}</h3></div><div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered"> <form style="margin:auto"> <div class="verticalSection verticalSection-extrabottompadding basicFilterSection focuscontainer-x" style="margin-top:2em"> <div class="checkboxList checkboxList-verticalwrap"> <label class="viewSetting simpleFilter" data-settingname="IsUnplayed"> <input type="checkbox" is="emby-checkbox"/> <span>${Unplayed}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsPlayed"> <input type="checkbox" is="emby-checkbox"/> <span>${Played}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsFavorite"> <input type="checkbox" is="emby-checkbox"/> <span>${Favorite}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsResumable"> <input type="checkbox" is="emby-checkbox"/> <span>${ContinueWatching}</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding viewSetting focuscontainer-x" data-settingname="SeriesStatus"> <h2 class="checkboxListLabel">${HeaderSeriesStatus}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label> <input type="checkbox" is="emby-checkbox" class="chkSeriesStatus" data-filter="Continuing"/> <span>${Continuing}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkSeriesStatus" data-filter="Ended"/> <span>${Ended}</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding hide genreFilters focuscontainer-x"> <h2 class="checkboxListLabel">${Genres}</h2> <div class="checkboxList checkboxList-verticalwrap filterOptions"> </div> </div> <div class="verticalSection verticalSection-extrabottompadding viewSetting focuscontainer-x" data-settingname="VideoType"> <h2 class="checkboxListLabel">${HeaderVideoType}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter" data-settingname="IsHD"/> <span>HD</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter" data-settingname="Is4K"/> <span>4K</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter" data-settingname="IsSD"/> <span>SD</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter" data-settingname="Is3D"/> <span>3D</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkVideoTypeFilter" data-filter="Bluray"/> <span>Blu-ray</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkVideoTypeFilter" data-filter="Dvd"/> <span>DVD</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding featureSection hide focuscontainer-x"> <h2 class="checkboxListLabel">${Features}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label class="viewSetting simpleFilter" data-settingname="HasSubtitles"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter"/> <span>${Subtitles}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasTrailer"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter"/> <span>${Trailers}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasSpecialFeature"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter"/> <span>${Extras}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasThemeSong"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter"/> <span>${ThemeSongs}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasThemeVideo"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter"/> <span>${ThemeVideos}</span> </label> </div> </div> </form> </div> </div> ',"core");for(var s,n=a.querySelectorAll(".viewSetting"),b=0,h=n.length;b<h;b++)-1===e.visibleSettings.indexOf(n[b].getAttribute("data-settingname"))?n[b].classList.add("hide"):n[b].classList.remove("hide");!function(e,t){e.querySelector("form").addEventListener("submit",u);var i,a,s=e.querySelectorAll(".simpleFilter");for(i=0,a=s.length;i<a;i++)"INPUT"===s[i].tagName?s[i].checked=t[s[i].getAttribute("data-settingname")]||!1:s[i].querySelector("input").checked=t[s[i].getAttribute("data-settingname")]||!1;var l=t.VideoTypes?t.VideoTypes.split(","):[];for(i=0,a=(s=e.querySelectorAll(".chkVideoTypeFilter")).length;i<a;i++)s[i].checked=-1!==l.indexOf(s[i].getAttribute("data-filter"));var n=t.SeriesStatus?t.SeriesStatus.split(","):[];for(i=0,a=(s=e.querySelectorAll(".chkSeriesStatus")).length;i<a;i++)s[i].checked=-1!==n.indexOf(s[i].getAttribute("data-filter"));e.querySelector(".basicFilterSection .viewSetting:not(.hide)")?e.querySelector(".basicFilterSection").classList.remove("hide"):e.querySelector(".basicFilterSection").classList.add("hide"),e.querySelector(".featureSection .viewSetting:not(.hide)")?e.querySelector(".featureSection").classList.remove("hide"):e.querySelector(".featureSection").classList.add("hide")}(a,e.settings),function(e,t){var i=d.Z.getApiClient(t.serverId),a=Object.assign(t.filterMenuOptions,{UserId:i.getCurrentUserId(),ParentId:t.parentId,IncludeItemTypes:t.itemTypes.join(",")});i.getFilters(a).then((function(i){!function(e,t,i){!function(e,t,a,s,l){var n=e.querySelector(".genreFilters");s.length?n.classList.remove("hide"):n.classList.add("hide");var c="";c+=s.map((function(e){var t="";return t+="<label>",t+='<input is="emby-checkbox" type="checkbox"'+(function(e){var t=-1===(i.settings.GenreIds||"").indexOf("|")?",":"|";return-1!==(t+(i.settings.GenreIds||"")+t).indexOf(t+e.Id+t)}(e)?" checked":"")+' data-filter="'+e.Id+'" class="chkGenreFilter"/>',(t+="<span>"+e.Name+"</span>")+"</label>"})).join(""),n.querySelector(".filterOptions").innerHTML=c}(e,0,0,t.Genres)}(e,i,t)}))}(a,e),m(a,!0),a.querySelector(".btnCancel").addEventListener("click",(function(){l.default.close(a)})),c.Z.tv&&v(a.querySelector(".formDialogContent"),!1,!0),a.querySelector("form").addEventListener("change",(function(){s=!0}),!0),l.default.open(a).then((function(){return m(a,!1),c.Z.tv&&v(a.querySelector(".formDialogContent"),!1,!1),s?(function(e,t,i){for(var a=e.querySelectorAll(".simpleFilter"),s=0,l=a.length;s<l;s++)"INPUT"===a[s].tagName?p(0,i+"-filter-"+a[s].getAttribute("data-settingname"),a[s]):p(0,i+"-filter-"+a[s].getAttribute("data-settingname"),a[s].querySelector("input"));for(var n=[],c=0,r=(a=e.querySelectorAll(".chkVideoTypeFilter")).length;c<r;c++)a[c].checked&&n.push(a[c].getAttribute("data-filter"));o.setFilter(i+"-filter-VideoTypes",n.join(","));for(var d=[],b=0,u=(a=e.querySelectorAll(".chkSeriesStatus")).length;b<u;b++)a[b].checked&&d.push(a[b].getAttribute("data-filter"));for(var h=[],v=0,f=(a=e.querySelectorAll(".chkGenreFilter")).length;v<f;v++)a[v].checked&&h.push(a[v].getAttribute("data-filter"));o.setFilter(i+"-filter-GenreIds",h.join(","))}(a,e.settings,e.settingsKey),t()):t()}))}))}}])&&b(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);