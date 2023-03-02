"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71890],{71890:function(e,t,r){r(5769),r(63238),r(61418),r(17460),r(14078),r(27471);var i=r(65009),a=r.n(i),s=r(61570),n=r(30325),o=r(98301),l=r(94994),d=r(52050),c=r(51869),u=(r(61414),r(82427),r(24432),r(38228),r(60635)),h=r(18613);function m(e){switch(e){case 0:return"smalllibrarytiles";case 1:return"resume";case 2:return"resumeaudio";case 3:return"resumebook";case 4:return"livetv";case 5:return"nextup";case 6:return"latestmedia";case 7:return"none";default:return""}}function f(e,t){for(var r=e.querySelectorAll(".itemsContainer"),i=[],a=0,s=r.length;a<s;a++)i.push(r[a].resume(t));return Promise.all(i)}function v(e,t,r,i,u,m,f){var v=m[f],b=e.querySelector(".section"+f);if("latestmedia"===v)!function(e,t,r,i){e.classList.remove("verticalSection");for(var a=["playlists","livetv","boxsets","channels"],s=0,n=i.length;s<n;s++){var o=i[s];if(-1===r.Configuration.LatestItemsExcludes.indexOf(o.Id)&&-1===a.indexOf(o.CollectionType||[])){var l=document.createElement("div");l.classList.add("verticalSection"),l.classList.add("hide"),e.appendChild(l),p(l,t,0,o)}}}(b,t,r,u);else if("librarytiles"===v||"smalllibrarytiles"===v||"smalllibrarytiles-automobile"===v||"librarytiles-automobile"===v)g(b,0,0,0,0,u);else if("librarybuttons"===v)!function(e,t,r,i,s){e.classList.remove("verticalSection");var n=function(e){var t="";t+='<div class="verticalSection verticalSection-extrabottompadding">',t+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+l.ZP.translate("HeaderMyMedia")+"</h2>",t+='<div is="emby-itemscontainer" class="itemsContainer padded-left padded-right vertical-wrap focuscontainer-x" data-multiselect="false">';for(var r=0,i=e.length;r<i;r++){var s=e[r],n=c.ZP.getLibraryIcon(s.CollectionType);t+='<a is="emby-linkbutton" href="'+d.appRouter.getRouteUrl(s)+'" class="raised homeLibraryButton"><span class="material-icons homeLibraryIcon '+n+'" aria-hidden="true"></span><span class="homeLibraryText">'+a()(s.Name)+"</span></a>"}return(t+="</div>")+"</div>"}(s);e.innerHTML=n,o.default.lazyChildren(e)}(b,0,0,0,u);else{if("resume"===v)return y(b,t,"HeaderContinueWatching","Video",i);if("resumeaudio"===v)return y(b,t,"HeaderContinueListening","Audio",i);if("activerecordings"===v)!function(e,t,r){var i="";i+='<div class="sectionTitleContainer sectionTitleContainer-cards">',i+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+l.ZP.translate("HeaderActiveRecordings")+"</h2>",i+="</div>",i+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',i+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">',i+="</div>",i+="</div>",e.classList.add("hide"),e.innerHTML=i;var a,n=e.querySelector(".itemsContainer");n.fetchData=(a=r.serverId(),function(){var e=h.Z.getApiClient(a);return e.getLiveTvRecordings({userId:e.getCurrentUserId(),Limit:12,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",EnableTotalRecordCount:!1,IsLibraryItem:null,IsInProgress:!0})}),n.getItemsHtml=function(e){return function(t){return s.default.getCardsHtml({items:t,shape:"autooverflow",showTitle:!0,showParentTitle:!0,coverImage:!0,lazy:!0,showDetailsMenu:!0,centerText:!0,overlayText:!1,showYear:!0,lines:2,overlayPlayButton:!1,allowBottomPadding:!1,preferThumb:!0,cardLayout:!1,overlayMoreButton:e,action:"none",centerPlayButton:e})}}(t),n.parentContainer=e}(b,!0,t);else{if("nextup"!==v)return"onnow"===v||"livetv"===v?function(e,t,r){return r.Policy.EnableLiveTvAccess?t.getLiveTvRecommendedPrograms({userId:t.getCurrentUserId(),IsAiring:!0,limit:1,ImageTypeLimit:1,EnableImageTypes:"Primary,Thumb,Backdrop",EnableTotalRecordCount:!1,Fields:"ChannelInfo,PrimaryImageAspectRatio"}).then((function(r){var i,a="";if(r.Items.length){e.classList.remove("padded-left"),e.classList.remove("padded-right"),e.classList.remove("padded-bottom"),e.classList.remove("verticalSection"),a+='<div class="verticalSection">',a+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',a+='<h2 class="sectionTitle sectionTitle-cards">'+l.ZP.translate("LiveTV")+"</h2>",a+="</div>",a+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true" data-scrollbuttons="false">',a+='<div class="padded-top padded-bottom scrollSlider focuscontainer-x">',a+='<a is="emby-linkbutton" href="'+d.appRouter.getRouteUrl("livetv",{serverId:t.serverId(),section:"programs"})+'" class="raised"><span>'+l.ZP.translate("Programs")+"</span></a>",a+='<a is="emby-linkbutton" href="'+d.appRouter.getRouteUrl("livetv",{serverId:t.serverId(),section:"guide"})+'" class="raised"><span>'+l.ZP.translate("Guide")+"</span></a>",a+='<a is="emby-linkbutton" href="'+d.appRouter.getRouteUrl("livetv",{serverId:t.serverId(),section:"channels"})+'" class="raised"><span>'+l.ZP.translate("Channels")+"</span></a>",a+='<a is="emby-linkbutton" href="'+d.appRouter.getRouteUrl("recordedtv",{serverId:t.serverId()})+'" class="raised"><span>'+l.ZP.translate("Recordings")+"</span></a>",a+='<a is="emby-linkbutton" href="'+d.appRouter.getRouteUrl("livetv",{serverId:t.serverId(),section:"dvrschedule"})+'" class="raised"><span>'+l.ZP.translate("Schedule")+"</span></a>",a+='<a is="emby-linkbutton" href="'+d.appRouter.getRouteUrl("livetv",{serverId:t.serverId(),section:"seriesrecording"})+'" class="raised"><span>'+l.ZP.translate("Series")+"</span></a>",a+="</div>",a+="</div>",a+="</div>",a+="</div>",a+='<div class="verticalSection">',a+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',n.Z.tv?a+='<h2 class="sectionTitle sectionTitle-cards">'+l.ZP.translate("HeaderOnNow")+"</h2>":(a+='<a is="emby-linkbutton" href="'+d.appRouter.getRouteUrl("livetv",{serverId:t.serverId(),section:"onnow"})+'" class="more button-flat button-flat-mini sectionTitleTextButton">',a+='<h2 class="sectionTitle sectionTitle-cards">',a+=l.ZP.translate("HeaderOnNow"),a+="</h2>",a+='<span class="material-icons chevron_right" aria-hidden="true"></span>',a+="</a>"),a+="</div>",a+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',a+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">',a+="</div>",a+="</div>",a+="</div>",e.innerHTML=a;var s=e.querySelector(".itemsContainer");s.parentContainer=e,s.fetchData=(i=t.serverId(),function(){var e=h.Z.getApiClient(i);return e.getLiveTvRecommendedPrograms({userId:e.getCurrentUserId(),IsAiring:!0,limit:24,ImageTypeLimit:1,EnableImageTypes:"Primary,Thumb,Backdrop",EnableTotalRecordCount:!1,Fields:"ChannelInfo,PrimaryImageAspectRatio"})}),s.getItemsHtml=T}})):Promise.resolve()}(b,t,r):"resumebook"===v?y(b,t,"HeaderContinueReading","Book",i):(b.innerHTML="",Promise.resolve());!function(e,t,r){var i="";i+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',n.Z.tv?(i+='<h2 class="sectionTitle sectionTitle-cards">',i+=l.ZP.translate("NextUp"),i+="</h2>"):(i+='<a is="emby-linkbutton" href="'+d.appRouter.getRouteUrl("nextup",{serverId:t.serverId()})+'" class="button-flat button-flat-mini sectionTitleTextButton">',i+='<h2 class="sectionTitle sectionTitle-cards">',i+=l.ZP.translate("NextUp"),i+="</h2>",i+='<span class="material-icons chevron_right" aria-hidden="true"></span>',i+="</a>"),i+="</div>",i+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',i+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x" data-monitor="videoplayback,markplayed">',i+="</div>",i+="</div>",e.classList.add("hide"),e.innerHTML=i;var a,o=e.querySelector(".itemsContainer");o.fetchData=function(e,t){return function(){var r=h.Z.getApiClient(e),i=new Date;return i.setDate(i.getDate()-t.maxDaysForNextUp()),r.getNextUpEpisodes({Limit:24,Fields:"PrimaryImageAspectRatio,DateCreated,BasicSyncInfo,Path,MediaSourceCount",UserId:r.getCurrentUserId(),ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1,DisableFirstEpisode:!1,NextUpDateCutoff:i.toISOString(),EnableRewatching:t.enableRewatchingInNextUp()})}}(t.serverId(),r),o.getItemsHtml=(a=r.useEpisodeImagesInNextUpAndResume(),function(e){return s.default.getCardsHtml({items:e,preferThumb:!0,inheritThumb:!a,shape:"overflowBackdrop",overlayText:!1,showTitle:!0,showParentTitle:!0,lazy:!0,overlayPlayButton:!0,context:"home",centerText:!0,allowBottomPadding:!1,cardLayout:false})}),o.parentContainer=e}(b,t,i)}}return Promise.resolve()}function p(e,t,r,i){var o="";o+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',n.Z.tv?o+='<h2 class="sectionTitle sectionTitle-cards">'+l.ZP.translate("LatestFromLibrary",a()(i.Name))+"</h2>":(o+='<a is="emby-linkbutton" href="'+d.appRouter.getRouteUrl(i,{section:"latest"})+'" class="more button-flat button-flat-mini sectionTitleTextButton">',o+='<h2 class="sectionTitle sectionTitle-cards">',o+=l.ZP.translate("LatestFromLibrary",a()(i.Name)),o+="</h2>",o+='<span class="material-icons chevron_right" aria-hidden="true"></span>',o+="</a>"),o+="</div>",o+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',o+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">',o+="</div>",o+="</div>",e.innerHTML=o;var c,u,m,f,v,p=e.querySelector(".itemsContainer");p.fetchData=(c=t.serverId(),u=i.Id,m=i.CollectionType,function(){var e=h.Z.getApiClient(c),t=16;"music"===m&&(t=30);var r={Limit:t,Fields:"PrimaryImageAspectRatio,BasicSyncInfo,Path",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",ParentId:u};return e.getLatestItems(r)}),p.getItemsHtml=(f=i.Type,v=i.CollectionType,function(e){var t;return t="Channel"===f||"movies"===v||"books"===v||"tvshows"===v?"overflowPortrait":"music"===v||"homevideos"===v?"overflowSquare":"overflowBackdrop",s.default.getCardsHtml({items:e,shape:t,preferThumb:"movies"!==v&&"tvshows"!==v&&"Channel"!==f&&"music"!==v?"auto":null,showUnplayedIndicator:!1,showChildCountIndicator:!0,context:"home",overlayText:!1,centerText:!0,overlayPlayButton:"photos"!==v,allowBottomPadding:!1,cardLayout:false,showTitle:"photos"!==v,showYear:"movies"===v||"tvshows"===v||!v,showParentTitle:"music"===v||"tvshows"===v||!v||false,lines:2})}),p.parentContainer=e}function g(e,t,r,i,a,n){var d="";n.length&&(d+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+l.ZP.translate("HeaderMyMedia")+"</h2>",d+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',d+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">',d+=s.default.getCardsHtml({items:n,shape:"overflowBackdrop",showTitle:!0,centerText:!0,overlayText:!1,lazy:!0,transition:!1,allowBottomPadding:!1}),d+="</div>",d+="</div>"),e.innerHTML=d,o.default.lazyChildren(e)}var b={Audio:"audioplayback,markplayed",Video:"videoplayback,markplayed"};function y(e,t,r,i,a){var n="",o=b[i]||"markplayed";n+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+l.ZP.translate(r)+"</h2>",n+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',n+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x" data-monitor="'.concat(o,'">'),n+="</div>",n+="</div>",e.classList.add("hide"),e.innerHTML=n;var d=e.querySelector(".itemsContainer");d.fetchData=function(e,t){return function(){var r=h.Z.getApiClient(t),i={Limit:12,Recursive:!0,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",EnableTotalRecordCount:!1,MediaTypes:e};return r.getResumableItems(r.getCurrentUserId(),i)}}(i,t.serverId()),d.getItemsHtml=function(e,t){return function(r){return s.default.getCardsHtml({items:r,preferThumb:!0,inheritThumb:!e,shape:"Book"===t?"overflowPortrait":"overflowBackdrop",overlayText:!1,showTitle:!0,showParentTitle:!0,lazy:!0,showDetailsMenu:!0,overlayPlayButton:!0,context:"home",centerText:!0,allowBottomPadding:!1,cardLayout:false,showYear:!0,lines:2})}}(a.useEpisodeImagesInNextUpAndResume(),i),d.parentContainer=e}function T(e){return s.default.getCardsHtml({items:e,preferThumb:"auto",inheritThumb:!1,shape:"autooverflow",showParentTitleOrTitle:!0,showTitle:!0,centerText:!0,coverImage:!0,overlayText:!1,allowBottomPadding:!1,showAirTime:!0,showChannelName:!1,showAirDateTime:!1,showAirEndTime:!0,defaultShape:"overflowBackdrop",lines:3,overlayPlayButton:!0})}t.ZP={loadLibraryTiles:g,getDefaultSection:m,loadSections:function(e,t,r,i){return function(e,t){return e.getUserViews({},t||e.getCurrentUserId()).then((function(e){return e.Items}))}(t,r.Id).then((function(a){var s,n="";if(a.length){for(var o=0;o<7;o++)n+='<div class="verticalSection section'+o+'"></div>';e.innerHTML=n,e.classList.add("homeSectionsContainer");for(var d=[],c=function(e,t){for(var r=[],i=0;i<7;i++){var a=e.get("homesection"+i)||m(i);"folders"===a&&(a=m(0)),r.push(a)}return r}(i),h=0;h<c.length;h++)d.push(v(e,t,r,i,a,c,h));return Promise.all(d).then((function(){return f(e,{refresh:!0})}))}s=r.Policy&&r.Policy.IsAdministrator?l.ZP.translate("NoCreatedLibraries",'<br><a id="button-createLibrary" class="button-link">',"</a>"):l.ZP.translate("AskAdminToCreateLibrary"),n+='<div class="centerMessage padded-left padded-right">',n+="<h2>"+l.ZP.translate("MessageNothingHere")+"</h2>",n+="<p>"+s+"</p>",n+="</div>",e.innerHTML=n;var p=e.querySelector("#button-createLibrary");p&&p.addEventListener("click",(function(){u.default.navigate("library.html")}))}))},destroySections:function(e){for(var t=e.querySelectorAll(".itemsContainer"),r=0;r<t.length;r++)t[r].fetchData=null,t[r].parentContainer=null,t[r].getItemsHtml=null;e.innerHTML=""},pause:function(e){for(var t=e.querySelectorAll(".itemsContainer"),r=0;r<t.length;r++)t[r].pause()},resume:f}},82427:function(e,t,r){r(5769),r(63238),r(61418),r(17460),r(14078),r(27471),r(32081);var i=r(61008),a=r(58517),s=r(48957),n=r(98301),o=r(30325),l=r(57366),d=r(72365),c=r(28540),u=r(34643),h=r(44038),m=r(81643),f=(r(67752),r(18613)),v=r(28172),p=Object.create(HTMLDivElement.prototype);function g(e){var t=this,r=t.multiSelect;!1!==(null==r?void 0:r.onContainerClick.call(t,e))&&i.ZP.onClick.call(t,e)}function b(e){return e.preventDefault(),e.stopPropagation(),!1}function y(e){var t=e.target,r=d.ZP.parentWithAttribute(t,"data-id");if(r&&r.getAttribute("data-serverid"))return a.default.handleCommand("menu",{sourceElement:r}),e.preventDefault(),e.stopPropagation(),!1}function T(e,t,i){var a=this;Promise.all([r.e(61570),r.e(7293)]).then(r.bind(r,61570)).then((function(e){e.onUserDataChanged(i,a)}));var s=I(a);-1===s.indexOf("markfavorite")&&-1===s.indexOf("markplayed")||a.notifyRefreshNeeded()}function I(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function C(e,t,i){var a=this;if(-1===I(a).indexOf("timers")){var s=i.ProgramId,n=i.Id;Promise.all([r.e(61570),r.e(7293)]).then(r.bind(r,61570)).then((function(e){e.onTimerCreated(s,n,a)}))}else a.notifyRefreshNeeded()}function P(){-1!==I(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function S(e,t,i){var a=this;-1===I(a).indexOf("timers")?Promise.all([r.e(61570),r.e(7293)]).then(r.bind(r,61570)).then((function(e){e.onTimerCancelled(i.Id,a)})):a.notifyRefreshNeeded()}function L(e,t,i){var a=this;-1===I(a).indexOf("seriestimers")?Promise.all([r.e(61570),r.e(7293)]).then(r.bind(r,61570)).then((function(e){e.onSeriesTimerCancelled(i.Id,a)})):a.notifyRefreshNeeded()}function w(e,t,r){var i=this,a=I(i);if(-1===a.indexOf("seriestimers")&&-1===a.indexOf("timers")){var s=r.ItemsAdded||[],n=r.ItemsRemoved||[];if(s.length||n.length){var o=i.getAttribute("data-parentid");if(o){var l=r.FoldersAddedTo||[],d=r.FoldersRemovedFrom||[],c=r.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===d.indexOf(o)&&-1===c.indexOf(o))return}i.notifyRefreshNeeded()}}}function x(e,t){var r,i=this,a=t.state,s=I(i);if(a.NowPlayingItem&&"Video"===a.NowPlayingItem.MediaType){if(-1!==s.indexOf("videoplayback"))return void i.notifyRefreshNeeded(!0)}else if("Audio"===(null===(r=a.NowPlayingItem)||void 0===r?void 0:r.MediaType)&&-1!==s.indexOf("audioplayback"))return void i.notifyRefreshNeeded(!0)}function R(e,t,r,i){var a=r.bind(e);i=i||h.default,m.Z.on(i,t,a),e["event_"+t]=a}function k(e,t,r){var i=e["event_"+t];i&&(r=r||h.default,m.Z.off(r,t,i),e["event_"+t]=null)}function A(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function Z(e,t){A(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0")),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function E(e){var t=e.Items||e,r=this.parentContainer;r&&(t.length?r.classList.remove("hide"):r.classList.add("hide"));var i,a,s=document.activeElement;this.contains(s)&&(a=!0,i=s.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),n.default.lazyChildren(this),a&&function(e,t){if(t){var r=e.querySelector('[data-id="'+t+'"]');if(r)try{return void u.Z.focus(r)}catch(e){console.error(e)}}u.Z.autoFocus(e)}(this,i),Z(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var i=this;r.e(52943).then(r.bind(r,52943)).then((function(e){var t=e.default;i.multiSelect=new t({container:i,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var r=this;r.sortable=new v.ZP(r,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var r=e.item,i=e.newIndex,a=r.getAttribute("data-playlistitemid"),s=r.getAttribute("data-playlistid");if(s){var n=r.getAttribute("data-serverid"),o=f.Z.getApiClient(n);c.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+s+"/Items/"+a+"/Move/"+i),type:"POST"}).then((function(){c.ZP.hide()}),(function(){c.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;r.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:i,playlistItemId:a},bubbles:!0,cancelable:!1}))}}(e,r)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",g),l.Z.touch?this.addEventListener("contextmenu",b):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",y),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),i.ZP.on(this,{click:!1}),R(this,"UserDataChanged",T),R(this,"TimerCreated",C),R(this,"SeriesTimerCreated",P),R(this,"TimerCancelled",S),R(this,"SeriesTimerCancelled",L),R(this,"LibraryChanged",w),R(this,"playbackstop",x,s.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){A(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",g),this.removeEventListener("contextmenu",y),this.removeEventListener("contextmenu",b),i.ZP.off(this,{click:!1}),k(this,"UserDataChanged"),k(this,"TimerCreated"),k(this,"SeriesTimerCreated"),k(this,"TimerCancelled"),k(this,"SeriesTimerCancelled"),k(this,"LibraryChanged"),k(this,"playbackstop",s.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){A(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var r=t-(new Date).getTime();r>0&&!this.needsRefresh?Z(this,r):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(E.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})},24432:function(e,t,r){r(5769),r(63238),r(61418),r(17460),r(14078);var i=r(15723),a=r(72365),s=r(30325),n=r(58517),o=r(34643),l=r(57366),d=(r(67752),Object.create(HTMLDivElement.prototype));function c(e){var t=e.detail.command;"end"===t?(o.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}d.createdCallback=function(){this.classList.add("emby-scroller")},d.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},d.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},d.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},d.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},d.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},d.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},d.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},d.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},d.addScrollEventListener=function(e,t){this.scroller&&a.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},d.removeScrollEventListener=function(e,t){this.scroller&&a.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},d.attachedCallback=function(){this.getAttribute("data-navcommands")&&n.default.on(this,c);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var d,u,h=s.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),m={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:h||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:h||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!h,allowNativeScroll:!h,forceHideScrollbars:h,requireAnimation:h&&l.Z.edge};this.scroller=new i.Z(this,m),this.scroller.init(),this.scroller.reload(),s.Z.tv&&this.getAttribute("data-centerfocus")&&(this,d=this.scroller,a.ZP.addEventListener(this,"focus",(function(e){var t=o.Z.focusableParent(e.target);t&&d.toCenter(t)}),{capture:!0,passive:!0})),h&&(u=this,r.e(39346).then(r.bind(r,39346)).then((function(){u.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},d.pause=function(){var e=this.headroom;e&&e.pause()},d.resume=function(){var e=this.headroom;e&&e.resume()},d.detachedCallback=function(){this.getAttribute("data-navcommands")&&n.default.off(this,c);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:d,extends:"div"})}}]);