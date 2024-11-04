"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9090,58809,19069,14980,68778],{1177:function(e,t,i){i(84734),i(44962),i(78557),i(96054),i(90076),i(83994),i(82367);var n=i(22832),r=i(38490),s=i(47750),a=i(76542),d=i(46782),l=i(34789),h=i(47629),o=i(8566),f=i(9164),u=i(10736),c=i(44797),m=(i(69177),i(86191)),v=i(65210),b=Object.create(HTMLDivElement.prototype);function g(e){var t=this,i=t.multiSelect;!1!==(null==i?void 0:i.onContainerClick.call(t,e))&&n.Ay.onClick.call(t,e)}function y(e){return e.preventDefault(),e.stopPropagation(),!1}function p(e){var t=e.target,i=h.Ay.parentWithAttribute(t,"data-id");if(null!=i&&i.getAttribute("data-serverid"))return r.default.handleCommand("menu",{sourceElement:i}),e.preventDefault(),e.stopPropagation(),!1}function I(e,t,n){var r=this;Promise.all([i.e(45642),i.e(24468),i.e(14980)]).then(i.bind(i,24468)).then((function(e){e.onUserDataChanged(n,r)}));var s=C(r);-1===s.indexOf("markfavorite")&&-1===s.indexOf("markplayed")||r.notifyRefreshNeeded()}function C(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function A(e,t,n){var r=this;if(-1===C(r).indexOf("timers")){var s=n.ProgramId,a=n.Id;Promise.all([i.e(45642),i.e(24468),i.e(14980)]).then(i.bind(i,24468)).then((function(e){e.onTimerCreated(s,a,r)}))}else r.notifyRefreshNeeded()}function T(){-1!==C(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function x(e,t,n){var r=this;-1===C(r).indexOf("timers")?Promise.all([i.e(45642),i.e(24468),i.e(14980)]).then(i.bind(i,24468)).then((function(e){e.onTimerCancelled(n.Id,r)})):r.notifyRefreshNeeded()}function R(e,t,n){var r=this;-1===C(r).indexOf("seriestimers")?Promise.all([i.e(45642),i.e(24468),i.e(14980)]).then(i.bind(i,24468)).then((function(e){e.onSeriesTimerCancelled(n.Id,r)})):r.notifyRefreshNeeded()}function k(e,t,i){var n=this,r=C(n);if(-1===r.indexOf("seriestimers")&&-1===r.indexOf("timers")){var s=i.ItemsAdded||[],a=i.ItemsRemoved||[];if(s.length||a.length){var d=n.getAttribute("data-parentid");if(d){var l=i.FoldersAddedTo||[],h=i.FoldersRemovedFrom||[],o=i.CollectionFolders||[];if(-1===l.indexOf(d)&&-1===h.indexOf(d)&&-1===o.indexOf(d))return}n.notifyRefreshNeeded()}}}function E(e,t){var i,n=this,r=t.state,s=C(n);if(r.NowPlayingItem&&"Video"===r.NowPlayingItem.MediaType){if(-1!==s.indexOf("videoplayback"))return void n.notifyRefreshNeeded(!0)}else if("Audio"===(null===(i=r.NowPlayingItem)||void 0===i?void 0:i.MediaType)&&-1!==s.indexOf("audioplayback"))return void n.notifyRefreshNeeded(!0)}function O(e,t,i,n){var r=i.bind(e);n=n||u.default,c.A.on(n,t,r),e["event_"+t]=r}function D(e,t,i){var n=e["event_"+t];n&&(i=i||u.default,c.A.off(i,t,n),e["event_"+t]=null)}function P(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function w(e,t){P(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function L(e){var t=e.Items||e,i=this.parentContainer;i&&(t.length?i.classList.remove("hide"):i.classList.add("hide"));var n,r,s=document.activeElement;this.contains(s)&&(r=!0,n=s.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),a.default.lazyChildren(this),r&&function(e,t){if(t){var i=e.querySelector('[data-id="'+t+'"]');if(i)try{return void f.A.focus(i)}catch(e){console.error(e)}}f.A.autoFocus(e)}(this,n),w(this),this.afterRefresh&&this.afterRefresh(e)}b.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var n=this;i.e(35308).then(i.bind(i,35308)).then((function(e){var t=e.default;n.multiSelect=new t({container:n,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},b.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var i=this;i.sortable=new v.Ay(i,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var i=e.item,n=e.newIndex,r=i.getAttribute("data-playlistitemid"),s=i.getAttribute("data-playlistid");if(s){var a=i.getAttribute("data-serverid"),d=m.A.getApiClient(a);o.Ay.show(),d.ajax({url:d.getUrl("Playlists/"+s+"/Items/"+r+"/Move/"+n),type:"POST"}).then((function(){o.Ay.hide()}),(function(){o.Ay.hide(),t.refreshItems()}))}else{var l=e.oldIndex;i.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:n,playlistItemId:r},bubbles:!0,cancelable:!1}))}}(e,i)}})}}else t&&(t.destroy(),this.sortable=null)},b.createdCallback=function(){this.classList.add("itemsContainer")},b.attachedCallback=function(){this.addEventListener("click",g),l.A.touch?this.addEventListener("contextmenu",y):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",p),(d.A.desktop||d.A.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),d.A.tv&&this.classList.add("itemsContainer-tv"),n.Ay.on(this,{click:!1}),O(this,"UserDataChanged",I),O(this,"TimerCreated",A),O(this,"SeriesTimerCreated",T),O(this,"TimerCancelled",x),O(this,"SeriesTimerCancelled",R),O(this,"LibraryChanged",k),O(this,"playbackstop",E,s.f),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},b.detachedCallback=function(){P(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",g),this.removeEventListener("contextmenu",p),this.removeEventListener("contextmenu",y),n.Ay.off(this,{click:!1}),D(this,"UserDataChanged"),D(this,"TimerCreated"),D(this,"SeriesTimerCreated"),D(this,"TimerCancelled"),D(this,"SeriesTimerCancelled"),D(this,"LibraryChanged"),D(this,"playbackstop",s.f),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},b.pause=function(){P(this,!0),this.paused=!0},b.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var i=t-(new Date).getTime();i>0&&!this.needsRefresh?w(this,i):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},b.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(L.bind(this))):Promise.resolve()},b.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:b,extends:"div"})}}]);