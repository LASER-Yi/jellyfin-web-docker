"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63463,53152],{82427:function(e,t,n){n(5769),n(63238),n(61418),n(17460),n(14078),n(27471),n(32081);var i=n(61008),a=n(58517),r=n(48957),s=n(98301),o=n(30325),l=n(57366),d=n(72365),c=n(28540),u=n(34643),h=n(44038),f=n(81643),m=(n(67752),n(18613)),v=n(28172),p=Object.create(HTMLDivElement.prototype);function b(e){var t=this,n=t.multiSelect;!1!==(null==n?void 0:n.onContainerClick.call(t,e))&&i.ZP.onClick.call(t,e)}function I(e){return e.preventDefault(),e.stopPropagation(),!1}function g(e){var t=e.target,n=d.ZP.parentWithAttribute(t,"data-id");if(n&&n.getAttribute("data-serverid"))return a.default.handleCommand("menu",{sourceElement:n}),e.preventDefault(),e.stopPropagation(),!1}function y(e,t,i){var a=this;Promise.all([n.e(61570),n.e(53152)]).then(n.bind(n,61570)).then((function(e){e.onUserDataChanged(i,a)}));var r=C(a);-1===r.indexOf("markfavorite")&&-1===r.indexOf("markplayed")||a.notifyRefreshNeeded()}function C(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function T(e,t,i){var a=this;if(-1===C(a).indexOf("timers")){var r=i.ProgramId,s=i.Id;Promise.all([n.e(61570),n.e(53152)]).then(n.bind(n,61570)).then((function(e){e.onTimerCreated(r,s,a)}))}else a.notifyRefreshNeeded()}function x(){-1!==C(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function P(e,t,i){var a=this;-1===C(a).indexOf("timers")?Promise.all([n.e(61570),n.e(53152)]).then(n.bind(n,61570)).then((function(e){e.onTimerCancelled(i.Id,a)})):a.notifyRefreshNeeded()}function w(e,t,i){var a=this;-1===C(a).indexOf("seriestimers")?Promise.all([n.e(61570),n.e(53152)]).then(n.bind(n,61570)).then((function(e){e.onSeriesTimerCancelled(i.Id,a)})):a.notifyRefreshNeeded()}function N(e,t,n){var i=this,a=C(i);if(-1===a.indexOf("seriestimers")&&-1===a.indexOf("timers")){var r=n.ItemsAdded||[],s=n.ItemsRemoved||[];if(r.length||s.length){var o=i.getAttribute("data-parentid");if(o){var l=n.FoldersAddedTo||[],d=n.FoldersRemovedFrom||[],c=n.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===d.indexOf(o)&&-1===c.indexOf(o))return}i.notifyRefreshNeeded()}}}function R(e,t){var n,i=this,a=t.state,r=C(i);if(a.NowPlayingItem&&"Video"===a.NowPlayingItem.MediaType){if(-1!==r.indexOf("videoplayback"))return void i.notifyRefreshNeeded(!0)}else if("Audio"===(null===(n=a.NowPlayingItem)||void 0===n?void 0:n.MediaType)&&-1!==r.indexOf("audioplayback"))return void i.notifyRefreshNeeded(!0)}function S(e,t,n,i){var a=n.bind(e);i=i||h.default,f.Z.on(i,t,a),e["event_"+t]=a}function k(e,t,n){var i=e["event_"+t];i&&(n=n||h.default,f.Z.off(n,t,i),e["event_"+t]=null)}function Z(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function A(e,t){Z(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function M(e){var t=e.Items||e,n=this.parentContainer;n&&(t.length?n.classList.remove("hide"):n.classList.add("hide"));var i,a,r=document.activeElement;this.contains(r)&&(a=!0,i=r.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),a&&function(e,t){if(t){var n=e.querySelector('[data-id="'+t+'"]');if(n)try{return void u.Z.focus(n)}catch(e){console.error(e)}}u.Z.autoFocus(e)}(this,i),A(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var i=this;n.e(52943).then(n.bind(n,52943)).then((function(e){var t=e.default;i.multiSelect=new t({container:i,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var n=this;n.sortable=new v.ZP(n,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var n=e.item,i=e.newIndex,a=n.getAttribute("data-playlistitemid"),r=n.getAttribute("data-playlistid");if(r){var s=n.getAttribute("data-serverid"),o=m.Z.getApiClient(s);c.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+r+"/Items/"+a+"/Move/"+i),type:"POST"}).then((function(){c.ZP.hide()}),(function(){c.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;n.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:i,playlistItemId:a},bubbles:!0,cancelable:!1}))}}(e,n)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",b),l.Z.touch?this.addEventListener("contextmenu",I):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",g),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),i.ZP.on(this,{click:!1}),S(this,"UserDataChanged",y),S(this,"TimerCreated",T),S(this,"SeriesTimerCreated",x),S(this,"TimerCancelled",P),S(this,"SeriesTimerCancelled",w),S(this,"LibraryChanged",N),S(this,"playbackstop",R,r.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){Z(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",b),this.removeEventListener("contextmenu",g),this.removeEventListener("contextmenu",I),i.ZP.off(this,{click:!1}),k(this,"UserDataChanged"),k(this,"TimerCreated"),k(this,"SeriesTimerCreated"),k(this,"TimerCancelled"),k(this,"SeriesTimerCancelled"),k(this,"LibraryChanged"),k(this,"playbackstop",r.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){Z(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var n=t-(new Date).getTime();n>0&&!this.needsRefresh?A(this,n):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(M.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})},96398:function(e,t,n){var i=n(24246),a=function(e){var t=e.className,n=e.dataId;return{__html:'<div\n        is="emby-itemscontainer"\n        class="'.concat(t,'"\n        ').concat(n,"\n    >\n    </div>")}};t.Z=function(e){var t=e.className,n=e.dataId;return(0,i.jsx)("div",{dangerouslySetInnerHTML:a({className:t,dataId:n?'data-id="'.concat(n,'"'):""})})}},66079:function(e,t,n){var i=n(24246),a=function(e){var t=e.scrollerclassName,n=e.dataHorizontal,i=e.dataMousewheel,a=e.dataCenterfocus,r=e.dataId,s=e.className;return{__html:'<div is="emby-scroller"\n    class="'.concat(t,'"\n    ').concat(n,"\n    ").concat(i,"\n    ").concat(a,'\n    >\n        <div\n            is="emby-itemscontainer"\n            class="').concat(s,'"\n            ').concat(r,"\n        >\n        </div>\n    </div>")}};t.Z=function(e){var t=e.scrollerclassName,n=e.dataHorizontal,r=e.dataMousewheel,s=e.dataCenterfocus,o=e.dataId,l=e.className;return(0,i.jsx)("div",{dangerouslySetInnerHTML:a({scrollerclassName:t,dataHorizontal:n?'data-horizontal="'.concat(n,'"'):"",dataMousewheel:r?'data-mousewheel="'.concat(r,'"'):"",dataCenterfocus:s?'data-centerfocus="'.concat(s,'"'):"",dataId:o?'data-id="'.concat(o,'"'):"",className:l})})}},3615:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var i=n(24246),a=n(27378),r=n(28540),s=(n(38228),n(82427),n(65009)),o=n.n(s),l=n(52050),d=n(61570),c=n(30325),u=n(31338),h=n(94994),f=n(66079),m=n(96398),v=function(){return v=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},v.apply(this,arguments)},p=function(e){var t=e.className,n=e.title,i=e.href;return{__html:'<a\n        is="emby-linkbutton"\n        class="'.concat(t,'"\n        href="').concat(i,"\"\n        >\n            <h2 class='sectionTitle sectionTitle-cards'>\n                ").concat(n,"\n            </h2>\n            <span class='material-icons chevron_right' aria-hidden='true'></span>\n    </a>")}},b=function(e){var t=e.topParentId,n=e.itemsResult,r=void 0===n?{}:n,s=(0,a.useRef)(null),b=(0,a.useCallback)((function(){return!c.Z.desktop}),[]),I=(0,a.useCallback)((function(){return b()?"overflowPortrait":"portrait"}),[b]),g=(0,a.useCallback)((function(e){var n=e.target,i={SortBy:"Random",SortOrder:"Ascending",IncludeItemTypes:"Movie",Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary",Limit:12,GenreIds:n.getAttribute("data-id"),EnableTotalRecordCount:!1,ParentId:t};window.ApiClient.getItems(window.ApiClient.getCurrentUserId(),i).then((function(e){d.default.buildCards(e.Items||[],{itemsContainer:n,shape:I(),scalable:!0,overlayMoreButton:!0,allowBottomPadding:!0,showTitle:!0,centerText:!0,showYear:!0})}))}),[I,t]);(0,a.useEffect)((function(){var e=s.current;u.ZP.lazyChildren(e,g)}),[r.Items,g]);var y=r.Items||[];return(0,i.jsx)("div",v({ref:s},{children:y.length?y.map((function(e){return(0,i.jsxs)("div",v({className:"verticalSection"},{children:[(0,i.jsx)("div",{className:"sectionTitleContainer sectionTitleContainer-cards padded-left",dangerouslySetInnerHTML:p({className:"more button-flat button-flat-mini sectionTitleTextButton btnMoreFromGenre",title:o()(e.Name),href:l.appRouter.getRouteUrl(e,{context:"movies",parentId:t})})}),b()?(0,i.jsx)(f.Z,{scrollerclassName:"padded-top-focusscale padded-bottom-focusscale",dataMousewheel:"false",dataCenterfocus:"true",className:"itemsContainer scrollSlider focuscontainer-x lazy",dataId:e.Id}):(0,i.jsx)(m.Z,{className:"itemsContainer vertical-wrap lazy padded-left padded-right",dataId:e.Id})]}),e.Id)})):(0,i.jsxs)("div",v({className:"noItemsMessage centerMessage"},{children:[(0,i.jsx)("h1",{children:h.ZP.translate("MessageNothingHere")}),(0,i.jsx)("p",{children:h.ZP.translate("MessageNoGenresAvailable")})]}))}))},I=function(e){var t=e.topParentId,n=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,a,r=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(e){a={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return s}((0,a.useState)({}),2),s=n[0],o=n[1],l=(0,a.useCallback)((function(){r.ZP.show(),window.ApiClient.getGenres(window.ApiClient.getCurrentUserId(),{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Movie",Recursive:!0,EnableTotalRecordCount:!1,ParentId:t}).then((function(e){o(e),r.ZP.hide()}))}),[t]);return(0,a.useEffect)((function(){l()}),[l]),(0,i.jsx)(b,{topParentId:t,itemsResult:s})}}}]);