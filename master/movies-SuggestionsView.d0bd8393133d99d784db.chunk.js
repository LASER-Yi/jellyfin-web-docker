"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4201,83264],{82427:function(e,t,n){n(5769),n(63238),n(61418),n(17460),n(14078),n(27471),n(32081);var i=n(61008),a=n(58517),r=n(48957),s=n(98301),o=n(30325),l=n(57366),c=n(72365),d=n(28540),u=n(34643),h=n(44038),f=n(81643),m=(n(67752),n(18613)),v=n(28172),p=Object.create(HTMLDivElement.prototype);function b(e){var t=this,n=t.multiSelect;!1!==(null==n?void 0:n.onContainerClick.call(t,e))&&i.ZP.onClick.call(t,e)}function y(e){return e.preventDefault(),e.stopPropagation(),!1}function g(e){var t=e.target,n=c.ZP.parentWithAttribute(t,"data-id");if(n&&n.getAttribute("data-serverid"))return a.default.handleCommand("menu",{sourceElement:n}),e.preventDefault(),e.stopPropagation(),!1}function I(e,t,i){var a=this;Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onUserDataChanged(i,a)}));var r=C(a);-1===r.indexOf("markfavorite")&&-1===r.indexOf("markplayed")||a.notifyRefreshNeeded()}function C(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function P(e,t,i){var a=this;if(-1===C(a).indexOf("timers")){var r=i.ProgramId,s=i.Id;Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onTimerCreated(r,s,a)}))}else a.notifyRefreshNeeded()}function T(){-1!==C(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function S(e,t,i){var a=this;-1===C(a).indexOf("timers")?Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onTimerCancelled(i.Id,a)})):a.notifyRefreshNeeded()}function x(e,t,i){var a=this;-1===C(a).indexOf("seriestimers")?Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onSeriesTimerCancelled(i.Id,a)})):a.notifyRefreshNeeded()}function w(e,t,n){var i=this,a=C(i);if(-1===a.indexOf("seriestimers")&&-1===a.indexOf("timers")){var r=n.ItemsAdded||[],s=n.ItemsRemoved||[];if(r.length||s.length){var o=i.getAttribute("data-parentid");if(o){var l=n.FoldersAddedTo||[],c=n.FoldersRemovedFrom||[],d=n.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===c.indexOf(o)&&-1===d.indexOf(o))return}i.notifyRefreshNeeded()}}}function k(e,t){var n,i=this,a=t.state,r=C(i);if(a.NowPlayingItem&&"Video"===a.NowPlayingItem.MediaType){if(-1!==r.indexOf("videoplayback"))return void i.notifyRefreshNeeded(!0)}else if("Audio"===(null===(n=a.NowPlayingItem)||void 0===n?void 0:n.MediaType)&&-1!==r.indexOf("audioplayback"))return void i.notifyRefreshNeeded(!0)}function R(e,t,n,i){var a=n.bind(e);i=i||h.default,f.Z.on(i,t,a),e["event_"+t]=a}function N(e,t,n){var i=e["event_"+t];i&&(n=n||h.default,f.Z.off(n,t,i),e["event_"+t]=null)}function Z(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function O(e,t){Z(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function L(e){var t=e.Items||e,n=this.parentContainer;n&&(t.length?n.classList.remove("hide"):n.classList.add("hide"));var i,a,r=document.activeElement;this.contains(r)&&(a=!0,i=r.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),a&&function(e,t){if(t){var n=e.querySelector('[data-id="'+t+'"]');if(n)try{return void u.Z.focus(n)}catch(e){console.error(e)}}u.Z.autoFocus(e)}(this,i),O(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var i=this;Promise.all([n.e(52943),n.e(9245)]).then(n.bind(n,52943)).then((function(e){var t=e.default;i.multiSelect=new t({container:i,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var n=this;n.sortable=new v.ZP(n,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var n=e.item,i=e.newIndex,a=n.getAttribute("data-playlistitemid"),r=n.getAttribute("data-playlistid");if(r){var s=n.getAttribute("data-serverid"),o=m.Z.getApiClient(s);d.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+r+"/Items/"+a+"/Move/"+i),type:"POST"}).then((function(){d.ZP.hide()}),(function(){d.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;n.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:i,playlistItemId:a},bubbles:!0,cancelable:!1}))}}(e,n)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",b),l.Z.touch?this.addEventListener("contextmenu",y):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",g),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),i.ZP.on(this,{click:!1}),R(this,"UserDataChanged",I),R(this,"TimerCreated",P),R(this,"SeriesTimerCreated",T),R(this,"TimerCancelled",S),R(this,"SeriesTimerCancelled",x),R(this,"LibraryChanged",w),R(this,"playbackstop",k,r.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){Z(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",b),this.removeEventListener("contextmenu",g),this.removeEventListener("contextmenu",y),i.ZP.off(this,{click:!1}),N(this,"UserDataChanged"),N(this,"TimerCreated"),N(this,"SeriesTimerCreated"),N(this,"TimerCancelled"),N(this,"SeriesTimerCancelled"),N(this,"LibraryChanged"),N(this,"playbackstop",r.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){Z(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var n=t-(new Date).getTime();n>0&&!this.needsRefresh?O(this,n):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(L.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})},41433:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var i=n(24246),a=n(27378),r=n(30325),s=n(28540),o=n(72365),l=n(94994),c=n(65009),d=n.n(c),u=(n(82427),n(61570)),h=n(96398),f=n(66079),m=function(){return m=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},m.apply(this,arguments)},v=function(e){var t=e.sectionTitle,n=e.enableScrollX,r=e.items,s=void 0===r?[]:r,o=e.cardOptions,l=void 0===o?{}:o,c=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e,t;u.default.buildCards(s,m({itemsContainer:null===(e=c.current)||void 0===e?void 0:e.querySelector(".itemsContainer"),parentContainer:null===(t=c.current)||void 0===t?void 0:t.querySelector(".verticalSection"),scalable:!0,overlayPlayButton:!0,showTitle:!0,centerText:!0,cardLayout:!1},l))}),[l,n,s]),(0,i.jsx)("div",m({ref:c},{children:(0,i.jsxs)("div",m({className:"verticalSection hide"},{children:[(0,i.jsx)("div",m({className:"sectionTitleContainer sectionTitleContainer-cards"},{children:(0,i.jsx)("h2",m({className:"sectionTitle sectionTitle-cards padded-left"},{children:t}))})),n()?(0,i.jsx)(f.Z,{scrollerclassName:"padded-top-focusscale padded-bottom-focusscale",dataMousewheel:"false",dataCenterfocus:"true",className:"itemsContainer scrollSlider focuscontainer-x"}):(0,i.jsx)(h.Z,{className:"itemsContainer focuscontainer-x padded-left padded-right vertical-wrap"})]}))}))},p=function(e){var t=e.getPortraitShape,n=e.enableScrollX,a=e.recommendation,r=void 0===a?{}:a,s="";switch(r.RecommendationType){case"SimilarToRecentlyPlayed":s=l.ZP.translate("RecommendationBecauseYouWatched",r.BaselineItemName);break;case"SimilarToLikedItem":s=l.ZP.translate("RecommendationBecauseYouLike",r.BaselineItemName);break;case"HasDirectorFromRecentlyPlayed":case"HasLikedDirector":s=l.ZP.translate("RecommendationDirectedBy",r.BaselineItemName);break;case"HasActorFromRecentlyPlayed":case"HasLikedActor":s=l.ZP.translate("RecommendationStarring",r.BaselineItemName)}return(0,i.jsx)(v,{sectionTitle:d()(s),enableScrollX:n,items:r.Items||[],cardOptions:{shape:t(),showYear:!0}})},b=function(){return b=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},b.apply(this,arguments)},y=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,a,r=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(e){a={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return s},g=function(e){var t=e.topParentId,c=y((0,a.useState)([]),2),d=c[0],u=c[1],h=y((0,a.useState)({}),2),f=h[0],m=h[1],g=y((0,a.useState)([]),2),I=g[0],C=g[1],P=(0,a.useRef)(null),T=(0,a.useCallback)((function(){return!r.Z.desktop}),[]),S=(0,a.useCallback)((function(){return T()?"overflowPortrait":"portrait"}),[T]),x=(0,a.useCallback)((function(){return T()?"overflowBackdrop":"backdrop"}),[T]),w=(0,a.useCallback)((function(e){Promise.resolve().then(n.bind(n,87680)).then((function(t){t.default.autoFocus(e)}))}),[]),k=(0,a.useCallback)((function(e,t,n){s.ZP.show();var i={SortBy:"DatePlayed",SortOrder:"Descending",IncludeItemTypes:"Movie",Filters:"IsResumable",Limit:o.ZP.getWindowSize().innerWidth>=1600?5:3,Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",CollapseBoxSetItems:!1,ParentId:n,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};window.ApiClient.getItems(t,i).then((function(t){m(t),s.ZP.hide(),w(e)}))}),[w]),R=(0,a.useCallback)((function(e,t,n){var i={IncludeItemTypes:"Movie",Limit:18,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",ParentId:n,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};window.ApiClient.getJSON(window.ApiClient.getUrl("Users/"+t+"/Items/Latest",i)).then((function(t){u(t),w(e)}))}),[w]),N=(0,a.useCallback)((function(e,t){var n=o.ZP.getWindowSize().innerWidth,i=5;n>=1600?i=8:n>=1200&&(i=6);var a=window.ApiClient.getUrl("Movies/Recommendations",{userId:t,categoryLimit:6,ItemLimit:i,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb"});window.ApiClient.getJSON(a).then((function(t){C(t),w(e)}))}),[w]),Z=(0,a.useCallback)((function(e){var n=t,i=window.ApiClient.getCurrentUserId();k(e,i,n),R(e,i,n),N(e,i)}),[R,k,N,t]);return(0,a.useEffect)((function(){var e=P.current;e?Z(e):console.error("Unexpected null reference")}),[Z]),(0,i.jsxs)("div",b({ref:P},{children:[(0,i.jsx)(v,{sectionTitle:l.ZP.translate("HeaderContinueWatching"),enableScrollX:T,items:f.Items||[],cardOptions:{preferThumb:!0,shape:x(),showYear:!0}}),(0,i.jsx)(v,{sectionTitle:l.ZP.translate("HeaderLatestMovies"),enableScrollX:T,items:d,cardOptions:{shape:S(),showYear:!0}}),I.length?I.map((function(e){return(0,i.jsx)(p,{getPortraitShape:S,enableScrollX:T,recommendation:e},e.CategoryId)})):(0,i.jsxs)("div",b({className:"noItemsMessage centerMessage"},{children:[(0,i.jsx)("h1",{children:l.ZP.translate("MessageNothingHere")}),(0,i.jsx)("p",{children:l.ZP.translate("MessageNoMovieSuggestionsAvailable")})]}))]}))}},96398:function(e,t,n){var i=n(24246),a=function(e){var t=e.className,n=e.dataId;return{__html:'<div\n        is="emby-itemscontainer"\n        class="'.concat(t,'"\n        ').concat(n,"\n    >\n    </div>")}};t.Z=function(e){var t=e.className,n=e.dataId;return(0,i.jsx)("div",{dangerouslySetInnerHTML:a({className:t,dataId:n?'data-id="'.concat(n,'"'):""})})}},66079:function(e,t,n){var i=n(24246),a=function(e){var t=e.scrollerclassName,n=e.dataHorizontal,i=e.dataMousewheel,a=e.dataCenterfocus,r=e.dataId,s=e.className;return{__html:'<div is="emby-scroller"\n    class="'.concat(t,'"\n    ').concat(n,"\n    ").concat(i,"\n    ").concat(a,'\n    >\n        <div\n            is="emby-itemscontainer"\n            class="').concat(s,'"\n            ').concat(r,"\n        >\n        </div>\n    </div>")}};t.Z=function(e){var t=e.scrollerclassName,n=e.dataHorizontal,r=e.dataMousewheel,s=e.dataCenterfocus,o=e.dataId,l=e.className;return(0,i.jsx)("div",{dangerouslySetInnerHTML:a({scrollerclassName:t,dataHorizontal:n?'data-horizontal="'.concat(n,'"'):"",dataMousewheel:r?'data-mousewheel="'.concat(r,'"'):"",dataCenterfocus:s?'data-centerfocus="'.concat(s,'"'):"",dataId:o?'data-id="'.concat(o,'"'):"",className:l})})}}}]);