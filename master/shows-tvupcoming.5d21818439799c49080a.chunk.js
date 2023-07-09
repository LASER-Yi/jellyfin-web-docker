"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98541,83264,34968],{34968:function(e,t,i){i.r(t),i.d(t,{default:function(){return h}});var n=i(30325),r=i(28540),s=i(61693),a=i(61570),l=i(98301),d=i(94994);function o(){return!n.Z.desktop}function h(e,t,i){var h;this.preRender=function(){h=function(e,t){r.ZP.show();var i={Limit:48,Fields:"AirTime",UserId:ApiClient.getCurrentUserId(),ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};return i.ParentId=t.topParentId,ApiClient.getJSON(ApiClient.getUrl("Shows/Upcoming",i))}(0,t)},this.renderTab=function(){var e;e=i,h.then((function(t){var i=t.Items;i.length?e.querySelector(".noItemsMessage").style.display="none":e.querySelector(".noItemsMessage").style.display="block",function(e,t){for(var i=[],r="",h=[],f=0,c=t.length;f<c;f++){var u=t[f],m="";if(u.PremiereDate)try{var v=s.ZP.parseISO8601Date(u.PremiereDate,!0);m=s.ZP.isRelativeDay(v,-1)?d.ZP.translate("Yesterday"):s.ZP.toLocaleDateString(v,{weekday:"long",month:"short",day:"numeric"})}catch(e){console.error("error parsing timestamp for upcoming tv shows")}m!=r?(h.length&&i.push({name:r,items:h}),r=m,h=[u]):h.push(u)}for(var p="",g=0,b=i.length;g<b;g++){var y=i[g];p+='<div class="verticalSection">',p+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+y.name+"</h2>";var I=!0;if(o()){I=!1;var C="scrollX hiddenScrollX";n.Z.tv&&(C+=" smoothScrollX"),p+='<div is="emby-itemscontainer" class="itemsContainer '+C+' padded-left padded-right">'}else p+='<div is="emby-itemscontainer" class="itemsContainer vertical-wrap padded-left padded-right">';p+=a.default.getCardsHtml({items:y.items,showLocationTypeIndicator:!1,shape:o()?"overflowBackdrop":"backdrop",showTitle:!0,preferThumb:!0,lazy:!0,showDetailsMenu:!0,centerText:!0,showParentTitle:!0,overlayText:!1,allowBottomPadding:I,cardLayout:!1,overlayMoreButton:!0,missingIndicator:!1}),p+="</div>",p+="</div>"}e.innerHTML=p,l.default.lazyChildren(e)}(e.querySelector("#upcomingItems"),i),r.ZP.hide()}))}}i(82427)},82427:function(e,t,i){i(5769),i(63238),i(61418),i(17460),i(14078),i(27471),i(32081);var n=i(61008),r=i(58517),s=i(48957),a=i(98301),l=i(30325),d=i(57366),o=i(72365),h=i(28540),f=i(34643),c=i(44038),u=i(81643),m=(i(67752),i(18613)),v=i(28172),p=Object.create(HTMLDivElement.prototype);function g(e){var t=this,i=t.multiSelect;!1!==(null==i?void 0:i.onContainerClick.call(t,e))&&n.ZP.onClick.call(t,e)}function b(e){return e.preventDefault(),e.stopPropagation(),!1}function y(e){var t=e.target,i=o.ZP.parentWithAttribute(t,"data-id");if(null!=i&&i.getAttribute("data-serverid"))return r.default.handleCommand("menu",{sourceElement:i}),e.preventDefault(),e.stopPropagation(),!1}function I(e,t,n){var r=this;Promise.all([i.e(61570),i.e(83264)]).then(i.bind(i,61570)).then((function(e){e.onUserDataChanged(n,r)}));var s=C(r);-1===s.indexOf("markfavorite")&&-1===s.indexOf("markplayed")||r.notifyRefreshNeeded()}function C(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function T(e,t,n){var r=this;if(-1===C(r).indexOf("timers")){var s=n.ProgramId,a=n.Id;Promise.all([i.e(61570),i.e(83264)]).then(i.bind(i,61570)).then((function(e){e.onTimerCreated(s,a,r)}))}else r.notifyRefreshNeeded()}function P(){-1!==C(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function k(e,t,n){var r=this;-1===C(r).indexOf("timers")?Promise.all([i.e(61570),i.e(83264)]).then(i.bind(i,61570)).then((function(e){e.onTimerCancelled(n.Id,r)})):r.notifyRefreshNeeded()}function x(e,t,n){var r=this;-1===C(r).indexOf("seriestimers")?Promise.all([i.e(61570),i.e(83264)]).then(i.bind(i,61570)).then((function(e){e.onSeriesTimerCancelled(n.Id,r)})):r.notifyRefreshNeeded()}function R(e,t,i){var n=this,r=C(n);if(-1===r.indexOf("seriestimers")&&-1===r.indexOf("timers")){var s=i.ItemsAdded||[],a=i.ItemsRemoved||[];if(s.length||a.length){var l=n.getAttribute("data-parentid");if(l){var d=i.FoldersAddedTo||[],o=i.FoldersRemovedFrom||[],h=i.CollectionFolders||[];if(-1===d.indexOf(l)&&-1===o.indexOf(l)&&-1===h.indexOf(l))return}n.notifyRefreshNeeded()}}}function w(e,t){var i,n=this,r=t.state,s=C(n);if(r.NowPlayingItem&&"Video"===r.NowPlayingItem.MediaType){if(-1!==s.indexOf("videoplayback"))return void n.notifyRefreshNeeded(!0)}else if("Audio"===(null===(i=r.NowPlayingItem)||void 0===i?void 0:i.MediaType)&&-1!==s.indexOf("audioplayback"))return void n.notifyRefreshNeeded(!0)}function Z(e,t,i,n){var r=i.bind(e);n=n||c.default,u.Z.on(n,t,r),e["event_"+t]=r}function S(e,t,i){var n=e["event_"+t];n&&(i=i||c.default,u.Z.off(i,t,n),e["event_"+t]=null)}function D(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function A(e,t){D(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function L(e){var t=e.Items||e,i=this.parentContainer;i&&(t.length?i.classList.remove("hide"):i.classList.add("hide"));var n,r,s=document.activeElement;this.contains(s)&&(r=!0,n=s.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),a.default.lazyChildren(this),r&&function(e,t){if(t){var i=e.querySelector('[data-id="'+t+'"]');if(i)try{return void f.Z.focus(i)}catch(e){console.error(e)}}f.Z.autoFocus(e)}(this,n),A(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var n=this;Promise.all([i.e(52943),i.e(9245)]).then(i.bind(i,52943)).then((function(e){var t=e.default;n.multiSelect=new t({container:n,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var i=this;i.sortable=new v.ZP(i,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var i=e.item,n=e.newIndex,r=i.getAttribute("data-playlistitemid"),s=i.getAttribute("data-playlistid");if(s){var a=i.getAttribute("data-serverid"),l=m.Z.getApiClient(a);h.ZP.show(),l.ajax({url:l.getUrl("Playlists/"+s+"/Items/"+r+"/Move/"+n),type:"POST"}).then((function(){h.ZP.hide()}),(function(){h.ZP.hide(),t.refreshItems()}))}else{var d=e.oldIndex;i.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:d,newIndex:n,playlistItemId:r},bubbles:!0,cancelable:!1}))}}(e,i)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",g),d.Z.touch?this.addEventListener("contextmenu",b):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",y),(l.Z.desktop||l.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),l.Z.tv&&this.classList.add("itemsContainer-tv"),n.ZP.on(this,{click:!1}),Z(this,"UserDataChanged",I),Z(this,"TimerCreated",T),Z(this,"SeriesTimerCreated",P),Z(this,"TimerCancelled",k),Z(this,"SeriesTimerCancelled",x),Z(this,"LibraryChanged",R),Z(this,"playbackstop",w,s.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){D(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",g),this.removeEventListener("contextmenu",y),this.removeEventListener("contextmenu",b),n.ZP.off(this,{click:!1}),S(this,"UserDataChanged"),S(this,"TimerCreated"),S(this,"SeriesTimerCreated"),S(this,"TimerCancelled"),S(this,"SeriesTimerCancelled"),S(this,"LibraryChanged"),S(this,"playbackstop",s.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){D(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var i=t-(new Date).getTime();i>0&&!this.needsRefresh?A(this,i):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(L.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})}}]);