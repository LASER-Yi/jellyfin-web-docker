/*! For license information please see movies-movies.e700c027cd756a9d8025.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[9090,13399,96902,51418,17840,95947,79718,57337,24480,2099,90194],{1177:function(e,t,i){"use strict";i(44962),i(84734),i(78557),i(96054),i(90076),i(83994),i(82367);var n=i(22832),r=i(38490),s=i(80669),a=i(58782),l=i(46782),d=i(34789),o=i(47629),h=i(56869),f=i(83775),u=i(10736),c=i(62014),m=(i(69177),i(86191)),v=i(65210),p=Object.create(HTMLDivElement.prototype);function b(e){var t=this,i=t.multiSelect;!1!==(null==i?void 0:i.onContainerClick.call(t,e))&&n.Ay.onClick.call(t,e)}function y(e){return e.preventDefault(),e.stopPropagation(),!1}function g(e){var t=e.target,i=o.Ay.parentWithAttribute(t,"data-id");if(null!=i&&i.getAttribute("data-serverid"))return r.default.handleCommand("menu",{sourceElement:i}),e.preventDefault(),e.stopPropagation(),!1}function I(e,t,n){var r=this;Promise.all([i.e(45642),i.e(24468),i.e(95947)]).then(i.bind(i,24468)).then((function(e){e.onUserDataChanged(n,r)}));var s=A(r);-1===s.indexOf("markfavorite")&&-1===s.indexOf("markplayed")||r.notifyRefreshNeeded()}function A(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function C(e,t,n){var r=this;if(-1===A(r).indexOf("timers")){var s=n.ProgramId,a=n.Id;Promise.all([i.e(45642),i.e(24468),i.e(95947)]).then(i.bind(i,24468)).then((function(e){e.onTimerCreated(s,a,r)}))}else r.notifyRefreshNeeded()}function x(){-1!==A(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function T(e,t,n){var r=this;-1===A(r).indexOf("timers")?Promise.all([i.e(45642),i.e(24468),i.e(95947)]).then(i.bind(i,24468)).then((function(e){e.onTimerCancelled(n.Id,r)})):r.notifyRefreshNeeded()}function R(e,t,n){var r=this;-1===A(r).indexOf("seriestimers")?Promise.all([i.e(45642),i.e(24468),i.e(95947)]).then(i.bind(i,24468)).then((function(e){e.onSeriesTimerCancelled(n.Id,r)})):r.notifyRefreshNeeded()}function k(e,t,i){var n=this,r=A(n);if(-1===r.indexOf("seriestimers")&&-1===r.indexOf("timers")){var s=i.ItemsAdded||[],a=i.ItemsRemoved||[];if(s.length||a.length){var l=n.getAttribute("data-parentid");if(l){var d=i.FoldersAddedTo||[],o=i.FoldersRemovedFrom||[],h=i.CollectionFolders||[];if(-1===d.indexOf(l)&&-1===o.indexOf(l)&&-1===h.indexOf(l))return}n.notifyRefreshNeeded()}}}function S(e,t){var i,n=this,r=t.state,s=A(n);if(r.NowPlayingItem&&"Video"===r.NowPlayingItem.MediaType){if(-1!==s.indexOf("videoplayback"))return void n.notifyRefreshNeeded(!0)}else if("Audio"===(null===(i=r.NowPlayingItem)||void 0===i?void 0:i.MediaType)&&-1!==s.indexOf("audioplayback"))return void n.notifyRefreshNeeded(!0)}function O(e,t,i,n){var r=i.bind(e);n=n||u.default,c.A.on(n,t,r),e["event_"+t]=r}function E(e,t,i){var n=e["event_"+t];n&&(i=i||u.default,c.A.off(i,t,n),e["event_"+t]=null)}function P(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function w(e,t){P(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function D(e){var t=e.Items||e,i=this.parentContainer;i&&(t.length?i.classList.remove("hide"):i.classList.add("hide"));var n,r,s=document.activeElement;this.contains(s)&&(r=!0,n=s.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),a.default.lazyChildren(this),r&&function(e,t){if(t){var i=e.querySelector('[data-id="'+t+'"]');if(i)try{return void f.A.focus(i)}catch(e){console.error(e)}}f.A.autoFocus(e)}(this,n),w(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var n=this;i.e(35308).then(i.bind(i,35308)).then((function(e){var t=e.default;n.multiSelect=new t({container:n,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var i=this;i.sortable=new v.Ay(i,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var i=e.item,n=e.newIndex,r=i.getAttribute("data-playlistitemid"),s=i.getAttribute("data-playlistid");if(s){var a=i.getAttribute("data-serverid"),l=m.A.getApiClient(a);h.Ay.show(),l.ajax({url:l.getUrl("Playlists/"+s+"/Items/"+r+"/Move/"+n),type:"POST"}).then((function(){h.Ay.hide()}),(function(){h.Ay.hide(),t.refreshItems()}))}else{var d=e.oldIndex;i.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:d,newIndex:n,playlistItemId:r},bubbles:!0,cancelable:!1}))}}(e,i)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",b),d.A.touch?this.addEventListener("contextmenu",y):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",g),(l.A.desktop||l.A.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),l.A.tv&&this.classList.add("itemsContainer-tv"),n.Ay.on(this,{click:!1}),O(this,"UserDataChanged",I),O(this,"TimerCreated",C),O(this,"SeriesTimerCreated",x),O(this,"TimerCancelled",T),O(this,"SeriesTimerCancelled",R),O(this,"LibraryChanged",k),O(this,"playbackstop",S,s.f),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){P(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",b),this.removeEventListener("contextmenu",g),this.removeEventListener("contextmenu",y),n.Ay.off(this,{click:!1}),E(this,"UserDataChanged"),E(this,"TimerCreated"),E(this,"SeriesTimerCreated"),E(this,"TimerCancelled"),E(this,"SeriesTimerCancelled"),E(this,"LibraryChanged"),E(this,"playbackstop",s.f),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){P(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var i=t-(new Date).getTime();i>0&&!this.needsRefresh?w(this,i):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(D.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})},4452:function(e,t){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var i=arguments[t];i&&(e=a(e,s(i)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var i in e)n.call(e,i)&&e[i]&&(t=a(t,i));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()}}]);