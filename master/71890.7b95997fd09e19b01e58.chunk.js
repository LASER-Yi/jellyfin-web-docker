"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71890],{71890:function(e,t,r){r(5769),r(63238),r(61418),r(17460),r(14078),r(27471);var a=r(65009),s=r.n(a),i=r(61570),o=r(30325),n=r(98301),l=r(94994),c=r(52050),d=r(51869),u=(r(61414),r(82427),r(24432),r(38228),r(60635)),m=r(18613);function v(e){switch(e){case 0:return"smalllibrarytiles";case 1:return"resume";case 2:return"resumeaudio";case 3:return"resumebook";case 4:return"livetv";case 5:return"nextup";case 6:return"latestmedia";case 7:return"none";default:return""}}function h(e,t){for(var r=e.querySelectorAll(".itemsContainer"),a=[],s=0,i=r.length;s<i;s++)a.push(r[s].resume(t));return Promise.all(a)}function p(e,t,r,a,u,v,h){var p=v[h],b=e.querySelector(".section"+h);if("latestmedia"===p)!function(e,t,r,a){e.classList.remove("verticalSection");for(var s=["playlists","livetv","boxsets","channels"],i=0,o=a.length;i<o;i++){var n=a[i];if(-1===r.Configuration.LatestItemsExcludes.indexOf(n.Id)&&-1===s.indexOf(n.CollectionType||[])){var l=document.createElement("div");l.classList.add("verticalSection"),l.classList.add("hide"),e.appendChild(l),f(l,t,0,n)}}}(b,t,r,u);else if("librarytiles"===p||"smalllibrarytiles"===p||"smalllibrarytiles-automobile"===p||"librarytiles-automobile"===p)g(b,0,0,0,0,u);else if("librarybuttons"===p)!function(e,t,r,a,i){e.classList.remove("verticalSection");var o=function(e){var t="";t+='<div class="verticalSection verticalSection-extrabottompadding">',t+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+l.ZP.translate("HeaderMyMedia")+"</h2>",t+='<div is="emby-itemscontainer" class="itemsContainer padded-left padded-right vertical-wrap focuscontainer-x" data-multiselect="false">';for(var r=0,a=e.length;r<a;r++){var i=e[r],o=d.ZP.getLibraryIcon(i.CollectionType);t+='<a is="emby-linkbutton" href="'+c.appRouter.getRouteUrl(i)+'" class="raised homeLibraryButton"><span class="material-icons homeLibraryIcon '+o+'" aria-hidden="true"></span><span class="homeLibraryText">'+s()(i.Name)+"</span></a>"}return(t+="</div>")+"</div>"}(i);e.innerHTML=o,n.default.lazyChildren(e)}(b,0,0,0,u);else{if("resume"===p)return y(b,t,"HeaderContinueWatching","Video",a);if("resumeaudio"===p)return y(b,t,"HeaderContinueListening","Audio",a);if("activerecordings"===p)!function(e,t,r){var a="";a+='<div class="sectionTitleContainer sectionTitleContainer-cards">',a+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+l.ZP.translate("HeaderActiveRecordings")+"</h2>",a+="</div>",a+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',a+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">',a+="</div>",a+="</div>",e.classList.add("hide"),e.innerHTML=a;var s,o=e.querySelector(".itemsContainer");o.fetchData=(s=r.serverId(),function(){var e=m.Z.getApiClient(s);return e.getLiveTvRecordings({userId:e.getCurrentUserId(),Limit:12,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",EnableTotalRecordCount:!1,IsLibraryItem:null,IsInProgress:!0})}),o.getItemsHtml=function(e){return function(t){return i.default.getCardsHtml({items:t,shape:"autooverflow",showTitle:!0,showParentTitle:!0,coverImage:!0,lazy:!0,showDetailsMenu:!0,centerText:!0,overlayText:!1,showYear:!0,lines:2,overlayPlayButton:!1,allowBottomPadding:!1,preferThumb:!0,cardLayout:!1,overlayMoreButton:e,action:"none",centerPlayButton:e})}}(t),o.parentContainer=e}(b,!0,t);else{if("nextup"!==p)return"onnow"===p||"livetv"===p?function(e,t,r){return r.Policy.EnableLiveTvAccess?t.getLiveTvRecommendedPrograms({userId:t.getCurrentUserId(),IsAiring:!0,limit:1,ImageTypeLimit:1,EnableImageTypes:"Primary,Thumb,Backdrop",EnableTotalRecordCount:!1,Fields:"ChannelInfo,PrimaryImageAspectRatio"}).then((function(r){var a,s="";if(r.Items.length){e.classList.remove("padded-left"),e.classList.remove("padded-right"),e.classList.remove("padded-bottom"),e.classList.remove("verticalSection"),s+='<div class="verticalSection">',s+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',s+='<h2 class="sectionTitle sectionTitle-cards">'+l.ZP.translate("LiveTV")+"</h2>",s+="</div>",s+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true" data-scrollbuttons="false">',s+='<div class="padded-top padded-bottom scrollSlider focuscontainer-x">',s+='<a is="emby-linkbutton" href="'+c.appRouter.getRouteUrl("livetv",{serverId:t.serverId(),section:"programs"})+'" class="raised"><span>'+l.ZP.translate("Programs")+"</span></a>",s+='<a is="emby-linkbutton" href="'+c.appRouter.getRouteUrl("livetv",{serverId:t.serverId(),section:"guide"})+'" class="raised"><span>'+l.ZP.translate("Guide")+"</span></a>",s+='<a is="emby-linkbutton" href="'+c.appRouter.getRouteUrl("livetv",{serverId:t.serverId(),section:"channels"})+'" class="raised"><span>'+l.ZP.translate("Channels")+"</span></a>",s+='<a is="emby-linkbutton" href="'+c.appRouter.getRouteUrl("recordedtv",{serverId:t.serverId()})+'" class="raised"><span>'+l.ZP.translate("Recordings")+"</span></a>",s+='<a is="emby-linkbutton" href="'+c.appRouter.getRouteUrl("livetv",{serverId:t.serverId(),section:"dvrschedule"})+'" class="raised"><span>'+l.ZP.translate("Schedule")+"</span></a>",s+='<a is="emby-linkbutton" href="'+c.appRouter.getRouteUrl("livetv",{serverId:t.serverId(),section:"seriesrecording"})+'" class="raised"><span>'+l.ZP.translate("Series")+"</span></a>",s+="</div>",s+="</div>",s+="</div>",s+="</div>",s+='<div class="verticalSection">',s+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',o.Z.tv?s+='<h2 class="sectionTitle sectionTitle-cards">'+l.ZP.translate("HeaderOnNow")+"</h2>":(s+='<a is="emby-linkbutton" href="'+c.appRouter.getRouteUrl("livetv",{serverId:t.serverId(),section:"onnow"})+'" class="more button-flat button-flat-mini sectionTitleTextButton">',s+='<h2 class="sectionTitle sectionTitle-cards">',s+=l.ZP.translate("HeaderOnNow"),s+="</h2>",s+='<span class="material-icons chevron_right" aria-hidden="true"></span>',s+="</a>"),s+="</div>",s+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',s+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">',s+="</div>",s+="</div>",s+="</div>",e.innerHTML=s;var i=e.querySelector(".itemsContainer");i.parentContainer=e,i.fetchData=(a=t.serverId(),function(){var e=m.Z.getApiClient(a);return e.getLiveTvRecommendedPrograms({userId:e.getCurrentUserId(),IsAiring:!0,limit:24,ImageTypeLimit:1,EnableImageTypes:"Primary,Thumb,Backdrop",EnableTotalRecordCount:!1,Fields:"ChannelInfo,PrimaryImageAspectRatio"})}),i.getItemsHtml=T}})):Promise.resolve()}(b,t,r):"resumebook"===p?y(b,t,"HeaderContinueReading","Book",a):(b.innerHTML="",Promise.resolve());!function(e,t,r){var a="";a+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',o.Z.tv?(a+='<h2 class="sectionTitle sectionTitle-cards">',a+=l.ZP.translate("NextUp"),a+="</h2>"):(a+='<a is="emby-linkbutton" href="'+c.appRouter.getRouteUrl("nextup",{serverId:t.serverId()})+'" class="button-flat button-flat-mini sectionTitleTextButton">',a+='<h2 class="sectionTitle sectionTitle-cards">',a+=l.ZP.translate("NextUp"),a+="</h2>",a+='<span class="material-icons chevron_right" aria-hidden="true"></span>',a+="</a>"),a+="</div>",a+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',a+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x" data-monitor="videoplayback,markplayed">',a+="</div>",a+="</div>",e.classList.add("hide"),e.innerHTML=a;var s,n=e.querySelector(".itemsContainer");n.fetchData=function(e,t){return function(){var r=m.Z.getApiClient(e),a=new Date;return a.setDate(a.getDate()-t.maxDaysForNextUp()),r.getNextUpEpisodes({Limit:24,Fields:"PrimaryImageAspectRatio,DateCreated,BasicSyncInfo,Path,MediaSourceCount",UserId:r.getCurrentUserId(),ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1,DisableFirstEpisode:!1,NextUpDateCutoff:a.toISOString(),EnableRewatching:t.enableRewatchingInNextUp()})}}(t.serverId(),r),n.getItemsHtml=(s=r.useEpisodeImagesInNextUpAndResume(),function(e){return i.default.getCardsHtml({items:e,preferThumb:!0,inheritThumb:!s,shape:"overflowBackdrop",overlayText:!1,showTitle:!0,showParentTitle:!0,lazy:!0,overlayPlayButton:!0,context:"home",centerText:!0,allowBottomPadding:!1,cardLayout:false})}),n.parentContainer=e}(b,t,a)}}return Promise.resolve()}function f(e,t,r,a){var n="";n+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',o.Z.tv?n+='<h2 class="sectionTitle sectionTitle-cards">'+l.ZP.translate("LatestFromLibrary",s()(a.Name))+"</h2>":(n+='<a is="emby-linkbutton" href="'+c.appRouter.getRouteUrl(a,{section:"latest"})+'" class="more button-flat button-flat-mini sectionTitleTextButton">',n+='<h2 class="sectionTitle sectionTitle-cards">',n+=l.ZP.translate("LatestFromLibrary",s()(a.Name)),n+="</h2>",n+='<span class="material-icons chevron_right" aria-hidden="true"></span>',n+="</a>"),n+="</div>",n+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',n+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">',n+="</div>",n+="</div>",e.innerHTML=n;var d,u,v,h,p,f=e.querySelector(".itemsContainer");f.fetchData=(d=t.serverId(),u=a.Id,v=a.CollectionType,function(){var e=m.Z.getApiClient(d),t=16;"music"===v&&(t=30);var r={Limit:t,Fields:"PrimaryImageAspectRatio,BasicSyncInfo,Path",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",ParentId:u};return e.getLatestItems(r)}),f.getItemsHtml=(h=a.Type,p=a.CollectionType,function(e){var t;return t="Channel"===h||"movies"===p||"books"===p||"tvshows"===p?"overflowPortrait":"music"===p||"homevideos"===p?"overflowSquare":"overflowBackdrop",i.default.getCardsHtml({items:e,shape:t,preferThumb:"movies"!==p&&"tvshows"!==p&&"Channel"!==h&&"music"!==p?"auto":null,showUnplayedIndicator:!1,showChildCountIndicator:!0,context:"home",overlayText:!1,centerText:!0,overlayPlayButton:"photos"!==p,allowBottomPadding:!1,cardLayout:false,showTitle:"photos"!==p,showYear:"movies"===p||"tvshows"===p||!p,showParentTitle:"music"===p||"tvshows"===p||!p||false,lines:2})}),f.parentContainer=e}function g(e,t,r,a,s,o){var c="";o.length&&(c+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+l.ZP.translate("HeaderMyMedia")+"</h2>",c+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',c+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">',c+=i.default.getCardsHtml({items:o,shape:"overflowBackdrop",showTitle:!0,centerText:!0,overlayText:!1,lazy:!0,transition:!1,allowBottomPadding:!1}),c+="</div>",c+="</div>"),e.innerHTML=c,n.default.lazyChildren(e)}var b={Audio:"audioplayback,markplayed",Video:"videoplayback,markplayed"};function y(e,t,r,a,s){var o="",n=b[a]||"markplayed";o+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+l.ZP.translate(r)+"</h2>",o+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',o+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x" data-monitor="'.concat(n,'">'),o+="</div>",o+="</div>",e.classList.add("hide"),e.innerHTML=o;var c=e.querySelector(".itemsContainer");c.fetchData=function(e,t){return function(){var r=m.Z.getApiClient(t),a={Limit:12,Recursive:!0,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",EnableTotalRecordCount:!1,MediaTypes:e};return r.getResumableItems(r.getCurrentUserId(),a)}}(a,t.serverId()),c.getItemsHtml=function(e,t){return function(r){return i.default.getCardsHtml({items:r,preferThumb:!0,inheritThumb:!e,shape:"Book"===t?"overflowPortrait":"overflowBackdrop",overlayText:!1,showTitle:!0,showParentTitle:!0,lazy:!0,showDetailsMenu:!0,overlayPlayButton:!0,context:"home",centerText:!0,allowBottomPadding:!1,cardLayout:false,showYear:!0,lines:2})}}(s.useEpisodeImagesInNextUpAndResume(),a),c.parentContainer=e}function T(e){return i.default.getCardsHtml({items:e,preferThumb:"auto",inheritThumb:!1,shape:"autooverflow",showParentTitleOrTitle:!0,showTitle:!0,centerText:!0,coverImage:!0,overlayText:!1,allowBottomPadding:!1,showAirTime:!0,showChannelName:!1,showAirDateTime:!1,showAirEndTime:!0,defaultShape:"overflowBackdrop",lines:3,overlayPlayButton:!0})}t.ZP={loadLibraryTiles:g,getDefaultSection:v,loadSections:function(e,t,r,a){return function(e,t){return e.getUserViews({},t||e.getCurrentUserId()).then((function(e){return e.Items}))}(t,r.Id).then((function(s){var i,o="";if(s.length){for(var n=0;n<7;n++)o+='<div class="verticalSection section'+n+'"></div>';e.innerHTML=o,e.classList.add("homeSectionsContainer");for(var c=[],d=function(e,t){for(var r=[],a=0;a<7;a++){var s=e.get("homesection"+a)||v(a);"folders"===s&&(s=v(0)),r.push(s)}return r}(a),m=0;m<d.length;m++)c.push(p(e,t,r,a,s,d,m));return Promise.all(c).then((function(){return h(e,{refresh:!0})}))}i=r.Policy&&r.Policy.IsAdministrator?l.ZP.translate("NoCreatedLibraries",'<br><a id="button-createLibrary" class="button-link">',"</a>"):l.ZP.translate("AskAdminToCreateLibrary"),o+='<div class="centerMessage padded-left padded-right">',o+="<h2>"+l.ZP.translate("MessageNothingHere")+"</h2>",o+="<p>"+i+"</p>",o+="</div>",e.innerHTML=o;var f=e.querySelector("#button-createLibrary");f&&f.addEventListener("click",(function(){u.ZP.navigate("library.html")}))}))},destroySections:function(e){for(var t=e.querySelectorAll(".itemsContainer"),r=0;r<t.length;r++)t[r].fetchData=null,t[r].parentContainer=null,t[r].getItemsHtml=null;e.innerHTML=""},pause:function(e){for(var t=e.querySelectorAll(".itemsContainer"),r=0;r<t.length;r++)t[r].pause()},resume:h}},24432:function(e,t,r){r(5769),r(63238),r(61418),r(17460),r(14078);var a=r(15723),s=r(72365),i=r(30325),o=r(58517),n=r(34643),l=r(57366),c=(r(67752),Object.create(HTMLDivElement.prototype));function d(e){var t=e.detail.command;"end"===t?(n.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(n.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(n.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&s.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&s.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&o.default.on(this,d);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,u,m=i.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),v={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:m||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:m||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!m,allowNativeScroll:!m,forceHideScrollbars:m,requireAnimation:m&&l.Z.edge};this.scroller=new a.Z(this,v),this.scroller.init(),this.scroller.reload(),i.Z.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,s.ZP.addEventListener(this,"focus",(function(e){var t=n.Z.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),m&&(u=this,r.e(39346).then(r.bind(r,39346)).then((function(){u.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&o.default.off(this,d);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})}}]);