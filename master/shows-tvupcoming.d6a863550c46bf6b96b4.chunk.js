"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17176,46548,98769],{98769:function(e,t,i){i.r(t),i.d(t,{default:function(){return f}});var n=i(24468),r=i(58782),s=i(46782),a=i(56869),l=i(98320),d=i(9482),o=i(80633);function h(){return!s.A.desktop}function f(e,t,i){var f;this.preRender=function(){f=function(e,t){a.Ay.show();var i={Limit:48,Fields:"AirTime",UserId:ApiClient.getCurrentUserId(),ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};return i.ParentId=t.topParentId,ApiClient.getJSON(ApiClient.getUrl("Shows/Upcoming",i))}(0,t)},this.renderTab=function(){var e;e=i,f.then((function(t){var i=t.Items;i.length?e.querySelector(".noItemsMessage").style.display="none":e.querySelector(".noItemsMessage").style.display="block",function(e,t){for(var i=[],a="",f=[],c=0,u=t.length;c<u;c++){var m=t[c],v="";if(m.PremiereDate)try{var y=l.Ay.parseISO8601Date(m.PremiereDate,!0);v=l.Ay.isRelativeDay(y,-1)?d.Ay.translate("Yesterday"):l.Ay.toLocaleDateString(y,{weekday:"long",month:"short",day:"numeric"})}catch(e){console.error("error parsing timestamp for upcoming tv shows")}v!=a?(f.length&&i.push({name:a,items:f}),a=v,f=[m]):f.push(m)}for(var p="",g=0,b=i.length;g<b;g++){var I=i[g];p+='<div class="verticalSection">',p+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+I.name+"</h2>";var A=!0;if(h()){A=!1;var C="scrollX hiddenScrollX";s.A.tv&&(C+=" smoothScrollX"),p+='<div is="emby-itemscontainer" class="itemsContainer '+C+' padded-left padded-right">'}else p+='<div is="emby-itemscontainer" class="itemsContainer vertical-wrap padded-left padded-right">';p+=n.default.getCardsHtml({items:I.items,showLocationTypeIndicator:!1,shape:(0,o.UI)(h()),showTitle:!0,preferThumb:!0,lazy:!0,showDetailsMenu:!0,centerText:!0,showParentTitle:!0,overlayText:!1,allowBottomPadding:A,cardLayout:!1,overlayMoreButton:!0,missingIndicator:!1}),p+="</div>",p+="</div>"}e.innerHTML=p,r.default.lazyChildren(e)}(e.querySelector("#upcomingItems"),i),a.Ay.hide()}))}}i(1177)},1177:function(e,t,i){i(44962),i(84734),i(78557),i(96054),i(90076),i(83994),i(82367);var n=i(22832),r=i(38490),s=i(80669),a=i(58782),l=i(46782),d=i(34789),o=i(47629),h=i(56869),f=i(9164),c=i(10736),u=i(62014),m=(i(69177),i(86191)),v=i(65210),y=Object.create(HTMLDivElement.prototype);function p(e){var t=this,i=t.multiSelect;!1!==(null==i?void 0:i.onContainerClick.call(t,e))&&n.Ay.onClick.call(t,e)}function g(e){return e.preventDefault(),e.stopPropagation(),!1}function b(e){var t=e.target,i=o.Ay.parentWithAttribute(t,"data-id");if(null!=i&&i.getAttribute("data-serverid"))return r.default.handleCommand("menu",{sourceElement:i}),e.preventDefault(),e.stopPropagation(),!1}function I(e,t,n){var r=this;Promise.all([i.e(45642),i.e(24468),i.e(46548)]).then(i.bind(i,24468)).then((function(e){e.onUserDataChanged(n,r)}));var s=A(r);-1===s.indexOf("markfavorite")&&-1===s.indexOf("markplayed")||r.notifyRefreshNeeded()}function A(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function C(e,t,n){var r=this;if(-1===A(r).indexOf("timers")){var s=n.ProgramId,a=n.Id;Promise.all([i.e(45642),i.e(24468),i.e(46548)]).then(i.bind(i,24468)).then((function(e){e.onTimerCreated(s,a,r)}))}else r.notifyRefreshNeeded()}function T(){-1!==A(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function x(e,t,n){var r=this;-1===A(r).indexOf("timers")?Promise.all([i.e(45642),i.e(24468),i.e(46548)]).then(i.bind(i,24468)).then((function(e){e.onTimerCancelled(n.Id,r)})):r.notifyRefreshNeeded()}function R(e,t,n){var r=this;-1===A(r).indexOf("seriestimers")?Promise.all([i.e(45642),i.e(24468),i.e(46548)]).then(i.bind(i,24468)).then((function(e){e.onSeriesTimerCancelled(n.Id,r)})):r.notifyRefreshNeeded()}function k(e,t,i){var n=this,r=A(n);if(-1===r.indexOf("seriestimers")&&-1===r.indexOf("timers")){var s=i.ItemsAdded||[],a=i.ItemsRemoved||[];if(s.length||a.length){var l=n.getAttribute("data-parentid");if(l){var d=i.FoldersAddedTo||[],o=i.FoldersRemovedFrom||[],h=i.CollectionFolders||[];if(-1===d.indexOf(l)&&-1===o.indexOf(l)&&-1===h.indexOf(l))return}n.notifyRefreshNeeded()}}}function w(e,t){var i,n=this,r=t.state,s=A(n);if(r.NowPlayingItem&&"Video"===r.NowPlayingItem.MediaType){if(-1!==s.indexOf("videoplayback"))return void n.notifyRefreshNeeded(!0)}else if("Audio"===(null===(i=r.NowPlayingItem)||void 0===i?void 0:i.MediaType)&&-1!==s.indexOf("audioplayback"))return void n.notifyRefreshNeeded(!0)}function S(e,t,i,n){var r=i.bind(e);n=n||c.default,u.A.on(n,t,r),e["event_"+t]=r}function P(e,t,i){var n=e["event_"+t];n&&(i=i||c.default,u.A.off(i,t,n),e["event_"+t]=null)}function D(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function L(e,t){D(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function E(e){var t=e.Items||e,i=this.parentContainer;i&&(t.length?i.classList.remove("hide"):i.classList.add("hide"));var n,r,s=document.activeElement;this.contains(s)&&(r=!0,n=s.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),a.default.lazyChildren(this),r&&function(e,t){if(t){var i=e.querySelector('[data-id="'+t+'"]');if(i)try{return void f.A.focus(i)}catch(e){console.error(e)}}f.A.autoFocus(e)}(this,n),L(this),this.afterRefresh&&this.afterRefresh(e)}y.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var n=this;i.e(35308).then(i.bind(i,35308)).then((function(e){var t=e.default;n.multiSelect=new t({container:n,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},y.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var i=this;i.sortable=new v.Ay(i,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var i=e.item,n=e.newIndex,r=i.getAttribute("data-playlistitemid"),s=i.getAttribute("data-playlistid");if(s){var a=i.getAttribute("data-serverid"),l=m.A.getApiClient(a);h.Ay.show(),l.ajax({url:l.getUrl("Playlists/"+s+"/Items/"+r+"/Move/"+n),type:"POST"}).then((function(){h.Ay.hide()}),(function(){h.Ay.hide(),t.refreshItems()}))}else{var d=e.oldIndex;i.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:d,newIndex:n,playlistItemId:r},bubbles:!0,cancelable:!1}))}}(e,i)}})}}else t&&(t.destroy(),this.sortable=null)},y.createdCallback=function(){this.classList.add("itemsContainer")},y.attachedCallback=function(){this.addEventListener("click",p),d.A.touch?this.addEventListener("contextmenu",g):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",b),(l.A.desktop||l.A.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),l.A.tv&&this.classList.add("itemsContainer-tv"),n.Ay.on(this,{click:!1}),S(this,"UserDataChanged",I),S(this,"TimerCreated",C),S(this,"SeriesTimerCreated",T),S(this,"TimerCancelled",x),S(this,"SeriesTimerCancelled",R),S(this,"LibraryChanged",k),S(this,"playbackstop",w,s.f),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},y.detachedCallback=function(){D(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",p),this.removeEventListener("contextmenu",b),this.removeEventListener("contextmenu",g),n.Ay.off(this,{click:!1}),P(this,"UserDataChanged"),P(this,"TimerCreated"),P(this,"SeriesTimerCreated"),P(this,"TimerCancelled"),P(this,"SeriesTimerCancelled"),P(this,"LibraryChanged"),P(this,"playbackstop",s.f),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},y.pause=function(){D(this,!0),this.paused=!0},y.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var i=t-(new Date).getTime();i>0&&!this.needsRefresh?L(this,i):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},y.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(E.bind(this))):Promise.resolve()},y.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:y,extends:"div"})}}]);