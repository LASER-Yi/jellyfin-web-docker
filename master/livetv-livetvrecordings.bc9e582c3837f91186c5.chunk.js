"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2494,83264,62844],{62844:function(e,t,i){i.r(t),i.d(t,{default:function(){return d}}),i(48410);var r=i(28540),n=i(61570),a=i(98301),s=(i(41392),i(82427),i(60635));function o(e,t,i,r){if(e){t.length?e.classList.remove("hide"):e.classList.add("hide");var s=e.querySelector(".recordingItems");r?(s.classList.add("scrollX"),s.classList.add("hiddenScrollX"),s.classList.remove("vertical-wrap")):(s.classList.remove("scrollX"),s.classList.remove("hiddenScrollX"),s.classList.add("vertical-wrap")),s.innerHTML=n.default.getCardsHtml(Object.assign({items:t,shape:r?"autooverflow":"auto",defaultShape:r?"overflowBackdrop":"backdrop",showTitle:!0,showParentTitle:!0,coverImage:!0,cardLayout:!1,centerText:!0,allowBottomPadding:!r,preferThumb:"auto",overlayText:!1},i||{})),a.default.lazyChildren(s)}}function l(){"latest"===this.getAttribute("data-type")&&s.default.navigate("list.html?type=Recordings&serverId="+ApiClient.serverId())}function d(e,t,i){function n(){return(new Date).getTime()-h>3e5}for(var a,d,h=0,c=i.querySelectorAll(".more"),f=0,u=c.length;f<u;f++)c[f].addEventListener("click",l);this.preRender=function(){n()&&(d=ApiClient.getLiveTvRecordings({UserId:s.default.getCurrentUserId(),Limit:12,Fields:"CanDelete,PrimaryImageAspectRatio,BasicSyncInfo",EnableTotalRecordCount:!1,EnableImageTypes:"Primary,Thumb,Backdrop"}),a=ApiClient.getRecordingFolders(s.default.getCurrentUserId()))},this.renderTab=function(){var e;n()&&(r.ZP.show(),e=i,d.then((function(t){o(e.querySelector("#latestRecordings"),t.Items,{showYear:!0,lines:2},!1),r.ZP.hide()})),function(e,t){t.then((function(t){o(e.querySelector("#recordingFolders"),t.Items,{showYear:!1,showParentTitle:!1},!1)}))}(i,a),h=(new Date).getTime())}}},82427:function(e,t,i){i(5769),i(63238),i(61418),i(17460),i(14078),i(27471),i(32081);var r=i(61008),n=i(58517),a=i(48957),s=i(98301),o=i(30325),l=i(57366),d=i(72365),h=i(28540),c=i(34643),f=i(44038),u=i(81643),m=(i(67752),i(18613)),v=i(28172),p=Object.create(HTMLDivElement.prototype);function g(e){var t=this,i=t.multiSelect;!1!==(null==i?void 0:i.onContainerClick.call(t,e))&&r.ZP.onClick.call(t,e)}function y(e){return e.preventDefault(),e.stopPropagation(),!1}function b(e){var t=e.target,i=d.ZP.parentWithAttribute(t,"data-id");if(null!=i&&i.getAttribute("data-serverid"))return n.default.handleCommand("menu",{sourceElement:i}),e.preventDefault(),e.stopPropagation(),!1}function T(e,t,r){var n=this;Promise.all([i.e(61570),i.e(83264)]).then(i.bind(i,61570)).then((function(e){e.onUserDataChanged(r,n)}));var a=I(n);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||n.notifyRefreshNeeded()}function I(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function C(e,t,r){var n=this;if(-1===I(n).indexOf("timers")){var a=r.ProgramId,s=r.Id;Promise.all([i.e(61570),i.e(83264)]).then(i.bind(i,61570)).then((function(e){e.onTimerCreated(a,s,n)}))}else n.notifyRefreshNeeded()}function w(){-1!==I(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function P(e,t,r){var n=this;-1===I(n).indexOf("timers")?Promise.all([i.e(61570),i.e(83264)]).then(i.bind(i,61570)).then((function(e){e.onTimerCancelled(r.Id,n)})):n.notifyRefreshNeeded()}function S(e,t,r){var n=this;-1===I(n).indexOf("seriestimers")?Promise.all([i.e(61570),i.e(83264)]).then(i.bind(i,61570)).then((function(e){e.onSeriesTimerCancelled(r.Id,n)})):n.notifyRefreshNeeded()}function A(e,t,i){var r=this,n=I(r);if(-1===n.indexOf("seriestimers")&&-1===n.indexOf("timers")){var a=i.ItemsAdded||[],s=i.ItemsRemoved||[];if(a.length||s.length){var o=r.getAttribute("data-parentid");if(o){var l=i.FoldersAddedTo||[],d=i.FoldersRemovedFrom||[],h=i.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===d.indexOf(o)&&-1===h.indexOf(o))return}r.notifyRefreshNeeded()}}}function L(e,t){var i,r=this,n=t.state,a=I(r);if(n.NowPlayingItem&&"Video"===n.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void r.notifyRefreshNeeded(!0)}else if("Audio"===(null===(i=n.NowPlayingItem)||void 0===i?void 0:i.MediaType)&&-1!==a.indexOf("audioplayback"))return void r.notifyRefreshNeeded(!0)}function x(e,t,i,r){var n=i.bind(e);r=r||f.default,u.Z.on(r,t,n),e["event_"+t]=n}function R(e,t,i){var r=e["event_"+t];r&&(i=i||f.default,u.Z.off(i,t,r),e["event_"+t]=null)}function k(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function D(e,t){k(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function O(e){var t=e.Items||e,i=this.parentContainer;i&&(t.length?i.classList.remove("hide"):i.classList.add("hide"));var r,n,a=document.activeElement;this.contains(a)&&(n=!0,r=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),n&&function(e,t){if(t){var i=e.querySelector('[data-id="'+t+'"]');if(i)try{return void c.Z.focus(i)}catch(e){console.error(e)}}c.Z.autoFocus(e)}(this,r),D(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var r=this;Promise.all([i.e(52943),i.e(9245)]).then(i.bind(i,52943)).then((function(e){var t=e.default;r.multiSelect=new t({container:r,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var i=this;i.sortable=new v.ZP(i,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var i=e.item,r=e.newIndex,n=i.getAttribute("data-playlistitemid"),a=i.getAttribute("data-playlistid");if(a){var s=i.getAttribute("data-serverid"),o=m.Z.getApiClient(s);h.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+a+"/Items/"+n+"/Move/"+r),type:"POST"}).then((function(){h.ZP.hide()}),(function(){h.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;i.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:r,playlistItemId:n},bubbles:!0,cancelable:!1}))}}(e,i)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",g),l.Z.touch?this.addEventListener("contextmenu",y):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",b),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),r.ZP.on(this,{click:!1}),x(this,"UserDataChanged",T),x(this,"TimerCreated",C),x(this,"SeriesTimerCreated",w),x(this,"TimerCancelled",P),x(this,"SeriesTimerCancelled",S),x(this,"LibraryChanged",A),x(this,"playbackstop",L,a.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){k(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",g),this.removeEventListener("contextmenu",b),this.removeEventListener("contextmenu",y),r.ZP.off(this,{click:!1}),R(this,"UserDataChanged"),R(this,"TimerCreated"),R(this,"SeriesTimerCreated"),R(this,"TimerCancelled"),R(this,"SeriesTimerCancelled"),R(this,"LibraryChanged"),R(this,"playbackstop",a.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){k(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var i=t-(new Date).getTime();i>0&&!this.needsRefresh?D(this,i):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(O.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})},41392:function(e,t,i){i(61013),i(63238),i(61418),i(72410),i(15610),i(17460),i(52077),i(25901),i(92189),i(91047),i(5769),i(14078);var r=i(30325),n=i(61693),a=i(61570);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function o(){return!r.Z.desktop}window.LiveTvHelpers={getTimersHtml:function(e,t){t=t||{};var i,l=[],d="",h=[],c=function(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return s(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return o=e.done,e},e:function(e){l=!0,a=e},f:function(){try{o||null==i.return||i.return()}finally{if(l)throw a}}}}(e.map((function(e){return e.Type="Timer",e})));try{for(c.s();!(i=c.n()).done;){var f=i.value,u="";if(!1!==t.indexByDate&&f.StartDate)try{var m=n.ZP.parseISO8601Date(f.StartDate,!0);u=n.ZP.toLocaleDateString(m,{weekday:"long",month:"short",day:"numeric"})}catch(e){console.error("error parsing premiereDate:"+f.StartDate+"; error: "+e)}u!=d?(h.length&&l.push({name:d,items:h}),d=u,h=[f]):h.push(f)}}catch(e){c.e(e)}finally{c.f()}h.length&&l.push({name:d,items:h});for(var v="",p=0,g=l;p<g.length;p++){var y=g[p];if(y.name&&(v+='<div class="verticalSection">',v+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+y.name+"</h2>"),o()){var b="scrollX hiddenScrollX";r.Z.tv&&(b+=" smoothScrollX"),v+='<div is="emby-itemscontainer" class="itemsContainer '+b+' padded-left padded-right">'}else v+='<div is="emby-itemscontainer" class="itemsContainer vertical-wrap padded-left padded-right">';v+=a.default.getCardsHtml({items:y.items,shape:o()?"overflowBackdrop":"backdrop",showTitle:!0,showParentTitleOrTitle:!0,showAirTime:!0,showAirEndTime:!0,showChannelName:!1,cardLayout:!0,centerText:!1,action:"edit",cardFooterAside:"none",preferThumb:!0,defaultShape:null,coverImage:!0,allowBottomPadding:!1,overlayText:!1,showChannelLogo:!0}),v+="</div>",y.name&&(v+="</div>")}return Promise.resolve(v)}}}}]);