"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15815,92970,2642,53152,73955,28742,52270],{82427:function(e,t,i){i(5769),i(63238),i(61418),i(17460),i(14078),i(27471),i(32081);var n=i(61008),r=i(58517),s=i(48957),a=i(98301),d=i(30325),l=i(57366),h=i(72365),o=i(28540),f=i(34643),u=i(44038),c=i(81643),m=(i(67752),i(18613)),v=i(28172),b=Object.create(HTMLDivElement.prototype);function g(e){var t=this,i=t.multiSelect;!1!==(null==i?void 0:i.onContainerClick.call(t,e))&&n.ZP.onClick.call(t,e)}function p(e){return e.preventDefault(),e.stopPropagation(),!1}function I(e){var t=e.target,i=h.ZP.parentWithAttribute(t,"data-id");if(i&&i.getAttribute("data-serverid"))return r.default.handleCommand("menu",{sourceElement:i}),e.preventDefault(),e.stopPropagation(),!1}function y(e,t,n){var r=this;Promise.all([i.e(61570),i.e(53152)]).then(i.bind(i,61570)).then((function(e){e.onUserDataChanged(n,r)}));var s=C(r);-1===s.indexOf("markfavorite")&&-1===s.indexOf("markplayed")||r.notifyRefreshNeeded()}function C(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function T(e,t,n){var r=this;if(-1===C(r).indexOf("timers")){var s=n.ProgramId,a=n.Id;Promise.all([i.e(61570),i.e(53152)]).then(i.bind(i,61570)).then((function(e){e.onTimerCreated(s,a,r)}))}else r.notifyRefreshNeeded()}function x(){-1!==C(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function P(e,t,n){var r=this;-1===C(r).indexOf("timers")?Promise.all([i.e(61570),i.e(53152)]).then(i.bind(i,61570)).then((function(e){e.onTimerCancelled(n.Id,r)})):r.notifyRefreshNeeded()}function R(e,t,n){var r=this;-1===C(r).indexOf("seriestimers")?Promise.all([i.e(61570),i.e(53152)]).then(i.bind(i,61570)).then((function(e){e.onSeriesTimerCancelled(n.Id,r)})):r.notifyRefreshNeeded()}function k(e,t,i){var n=this,r=C(n);if(-1===r.indexOf("seriestimers")&&-1===r.indexOf("timers")){var s=i.ItemsAdded||[],a=i.ItemsRemoved||[];if(s.length||a.length){var d=n.getAttribute("data-parentid");if(d){var l=i.FoldersAddedTo||[],h=i.FoldersRemovedFrom||[],o=i.CollectionFolders||[];if(-1===l.indexOf(d)&&-1===h.indexOf(d)&&-1===o.indexOf(d))return}n.notifyRefreshNeeded()}}}function O(e,t){var i,n=this,r=t.state,s=C(n);if(r.NowPlayingItem&&"Video"===r.NowPlayingItem.MediaType){if(-1!==s.indexOf("videoplayback"))return void n.notifyRefreshNeeded(!0)}else if("Audio"===(null===(i=r.NowPlayingItem)||void 0===i?void 0:i.MediaType)&&-1!==s.indexOf("audioplayback"))return void n.notifyRefreshNeeded(!0)}function E(e,t,i,n){var r=i.bind(e);n=n||u.default,c.Z.on(n,t,r),e["event_"+t]=r}function Z(e,t,i){var n=e["event_"+t];n&&(i=i||u.default,c.Z.off(i,t,n),e["event_"+t]=null)}function A(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function D(e,t){A(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function w(e){var t=e.Items||e,i=this.parentContainer;i&&(t.length?i.classList.remove("hide"):i.classList.add("hide"));var n,r,s=document.activeElement;this.contains(s)&&(r=!0,n=s.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),a.default.lazyChildren(this),r&&function(e,t){if(t){var i=e.querySelector('[data-id="'+t+'"]');if(i)try{return void f.Z.focus(i)}catch(e){console.error(e)}}f.Z.autoFocus(e)}(this,n),D(this),this.afterRefresh&&this.afterRefresh(e)}b.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var n=this;i.e(52943).then(i.bind(i,52943)).then((function(e){var t=e.default;n.multiSelect=new t({container:n,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},b.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var i=this;i.sortable=new v.ZP(i,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var i=e.item,n=e.newIndex,r=i.getAttribute("data-playlistitemid"),s=i.getAttribute("data-playlistid");if(s){var a=i.getAttribute("data-serverid"),d=m.Z.getApiClient(a);o.ZP.show(),d.ajax({url:d.getUrl("Playlists/"+s+"/Items/"+r+"/Move/"+n),type:"POST"}).then((function(){o.ZP.hide()}),(function(){o.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;i.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:n,playlistItemId:r},bubbles:!0,cancelable:!1}))}}(e,i)}})}}else t&&(t.destroy(),this.sortable=null)},b.createdCallback=function(){this.classList.add("itemsContainer")},b.attachedCallback=function(){this.addEventListener("click",g),l.Z.touch?this.addEventListener("contextmenu",p):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",I),(d.Z.desktop||d.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),d.Z.tv&&this.classList.add("itemsContainer-tv"),n.ZP.on(this,{click:!1}),E(this,"UserDataChanged",y),E(this,"TimerCreated",T),E(this,"SeriesTimerCreated",x),E(this,"TimerCancelled",P),E(this,"SeriesTimerCancelled",R),E(this,"LibraryChanged",k),E(this,"playbackstop",O,s.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},b.detachedCallback=function(){A(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",g),this.removeEventListener("contextmenu",I),this.removeEventListener("contextmenu",p),n.ZP.off(this,{click:!1}),Z(this,"UserDataChanged"),Z(this,"TimerCreated"),Z(this,"SeriesTimerCreated"),Z(this,"TimerCancelled"),Z(this,"SeriesTimerCancelled"),Z(this,"LibraryChanged"),Z(this,"playbackstop",s.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},b.pause=function(){A(this,!0),this.paused=!0},b.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var i=t-(new Date).getTime();i>0&&!this.needsRefresh?D(this,i):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||e&&e.refresh?this.refreshItems():Promise.resolve()},b.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(w.bind(this))):Promise.resolve()},b.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:b,extends:"div"})}}]);