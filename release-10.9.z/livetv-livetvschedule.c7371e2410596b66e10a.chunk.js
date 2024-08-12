/*! For license information please see livetv-livetvschedule.c7371e2410596b66e10a.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[96603,95947,21152],{21152:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}}),r(77575);var i=r(24468),n=r(58782),a=r(46782),s=r(56869),o=r(80633),l=r(89100);function d(){return!a.A.desktop}function c(e,t,r){var c,h,u=this;r.querySelector("#upcomingRecordings .recordingItems").addEventListener("timercancelled",(function(){u.preRender(),u.renderTab()})),u.preRender=function(){c=ApiClient.getLiveTvRecordings({UserId:l.default.getCurrentUserId(),IsInProgress:!0,Fields:"CanDelete,PrimaryImageAspectRatio",EnableTotalRecordCount:!1,EnableImageTypes:"Primary,Thumb,Backdrop"}),h=ApiClient.getLiveTvTimers({IsActive:!1,IsScheduled:!0})},u.renderTab=function(){var e;s.Ay.show(),e=r,c.then((function(t){!function(e,t,r){t.length?e.classList.remove("hide"):e.classList.add("hide");var s=e.querySelector(".recordingItems");d()?(s.classList.add("scrollX"),a.A.tv&&s.classList.add("smoothScrollX"),s.classList.add("hiddenScrollX"),s.classList.remove("vertical-wrap")):(s.classList.remove("scrollX"),s.classList.remove("smoothScrollX"),s.classList.remove("hiddenScrollX"),s.classList.add("vertical-wrap")),s.innerHTML=i.default.getCardsHtml(Object.assign({items:t,shape:d()?"autooverflow":"auto",showTitle:!0,showParentTitle:!0,coverImage:!0,cardLayout:!1,centerText:!0,allowBottomPadding:!d(),preferThumb:"auto"},r||{})),n.default.lazyChildren(s)}(e.querySelector("#activeRecordings"),t.Items,{shape:d()?"autooverflow":"auto",defaultShape:(0,o.UI)(d()),showParentTitle:!1,showParentTitleOrTitle:!0,showTitle:!0,showAirTime:!0,showAirEndTime:!0,showChannelName:!0,coverImage:!0,overlayText:!1,overlayMoreButton:!0})})),function(e,t){t.then((function(t){!function(e,t,r){LiveTvHelpers.getTimersHtml(t,void 0).then((function(t){var r=e;t?r.classList.remove("hide"):r.classList.add("hide"),r.querySelector(".recordingItems").innerHTML=t,n.default.lazyChildren(r)}))}(e.querySelector("#upcomingRecordings"),t.Items),s.Ay.hide()}))}(r,h)}}r(10353),r(1177),r(22777)},1177:function(e,t,r){"use strict";r(44962),r(84734),r(78557),r(96054),r(90076),r(83994),r(82367);var i=r(22832),n=r(38490),a=r(80669),s=r(58782),o=r(46782),l=r(34789),d=r(47629),c=r(56869),h=r(83775),u=r(10736),f=r(62014),m=(r(69177),r(86191)),v=r(65210),p=Object.create(HTMLDivElement.prototype);function y(e){var t=this,r=t.multiSelect;!1!==(null==r?void 0:r.onContainerClick.call(t,e))&&i.Ay.onClick.call(t,e)}function g(e){return e.preventDefault(),e.stopPropagation(),!1}function b(e){var t=e.target,r=d.Ay.parentWithAttribute(t,"data-id");if(null!=r&&r.getAttribute("data-serverid"))return n.default.handleCommand("menu",{sourceElement:r}),e.preventDefault(),e.stopPropagation(),!1}function T(e,t,i){var n=this;Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onUserDataChanged(i,n)}));var a=A(n);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||n.notifyRefreshNeeded()}function A(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function I(e,t,i){var n=this;if(-1===A(n).indexOf("timers")){var a=i.ProgramId,s=i.Id;Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onTimerCreated(a,s,n)}))}else n.notifyRefreshNeeded()}function C(){-1!==A(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function w(e,t,i){var n=this;-1===A(n).indexOf("timers")?Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onTimerCancelled(i.Id,n)})):n.notifyRefreshNeeded()}function S(e,t,i){var n=this;-1===A(n).indexOf("seriestimers")?Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onSeriesTimerCancelled(i.Id,n)})):n.notifyRefreshNeeded()}function L(e,t,r){var i=this,n=A(i);if(-1===n.indexOf("seriestimers")&&-1===n.indexOf("timers")){var a=r.ItemsAdded||[],s=r.ItemsRemoved||[];if(a.length||s.length){var o=i.getAttribute("data-parentid");if(o){var l=r.FoldersAddedTo||[],d=r.FoldersRemovedFrom||[],c=r.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===d.indexOf(o)&&-1===c.indexOf(o))return}i.notifyRefreshNeeded()}}}function x(e,t){var r,i=this,n=t.state,a=A(i);if(n.NowPlayingItem&&"Video"===n.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void i.notifyRefreshNeeded(!0)}else if("Audio"===(null===(r=n.NowPlayingItem)||void 0===r?void 0:r.MediaType)&&-1!==a.indexOf("audioplayback"))return void i.notifyRefreshNeeded(!0)}function R(e,t,r,i){var n=r.bind(e);i=i||u.default,f.A.on(i,t,n),e["event_"+t]=n}function P(e,t,r){var i=e["event_"+t];i&&(r=r||u.default,f.A.off(r,t,i),e["event_"+t]=null)}function k(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function O(e,t){k(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function D(e){var t=e.Items||e,r=this.parentContainer;r&&(t.length?r.classList.remove("hide"):r.classList.add("hide"));var i,n,a=document.activeElement;this.contains(a)&&(n=!0,i=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),n&&function(e,t){if(t){var r=e.querySelector('[data-id="'+t+'"]');if(r)try{return void h.A.focus(r)}catch(e){console.error(e)}}h.A.autoFocus(e)}(this,i),O(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var i=this;r.e(35308).then(r.bind(r,35308)).then((function(e){var t=e.default;i.multiSelect=new t({container:i,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var r=this;r.sortable=new v.Ay(r,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var r=e.item,i=e.newIndex,n=r.getAttribute("data-playlistitemid"),a=r.getAttribute("data-playlistid");if(a){var s=r.getAttribute("data-serverid"),o=m.A.getApiClient(s);c.Ay.show(),o.ajax({url:o.getUrl("Playlists/"+a+"/Items/"+n+"/Move/"+i),type:"POST"}).then((function(){c.Ay.hide()}),(function(){c.Ay.hide(),t.refreshItems()}))}else{var l=e.oldIndex;r.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:i,playlistItemId:n},bubbles:!0,cancelable:!1}))}}(e,r)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",y),l.A.touch?this.addEventListener("contextmenu",g):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",b),(o.A.desktop||o.A.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.A.tv&&this.classList.add("itemsContainer-tv"),i.Ay.on(this,{click:!1}),R(this,"UserDataChanged",T),R(this,"TimerCreated",I),R(this,"SeriesTimerCreated",C),R(this,"TimerCancelled",w),R(this,"SeriesTimerCancelled",S),R(this,"LibraryChanged",L),R(this,"playbackstop",x,a.f),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){k(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",y),this.removeEventListener("contextmenu",b),this.removeEventListener("contextmenu",g),i.Ay.off(this,{click:!1}),P(this,"UserDataChanged"),P(this,"TimerCreated"),P(this,"SeriesTimerCreated"),P(this,"TimerCancelled"),P(this,"SeriesTimerCancelled"),P(this,"LibraryChanged"),P(this,"playbackstop",a.f),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){k(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var r=t-(new Date).getTime();r>0&&!this.needsRefresh?O(this,r):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(D.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})},22777:function(e,t,r){"use strict";r(29305),r(32733),r(84701),r(69892),r(44962),r(86584),r(89336),r(78557),r(90076),r(95021),r(73687),r(83994),r(82367);var i=r(24468),n=r(46782),a=r(80633),s=r(98320);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function l(){return!n.A.desktop}window.LiveTvHelpers={getTimersHtml:function(e,t){t=t||{};var r,d=[],c="",h=[],u=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw a}}}}(e.map((function(e){return e.Type="Timer",e})));try{for(u.s();!(r=u.n()).done;){var f=r.value,m="";if(!1!==t.indexByDate&&f.StartDate)try{var v=s.Ay.parseISO8601Date(f.StartDate,!0);m=s.Ay.toLocaleDateString(v,{weekday:"long",month:"short",day:"numeric"})}catch(e){console.error("error parsing premiereDate:"+f.StartDate+"; error: "+e)}m!=c?(h.length&&d.push({name:c,items:h}),c=m,h=[f]):h.push(f)}}catch(e){u.e(e)}finally{u.f()}h.length&&d.push({name:c,items:h});for(var p="",y=0,g=d;y<g.length;y++){var b=g[y];if(b.name&&(p+='<div class="verticalSection">',p+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+b.name+"</h2>"),l()){var T="scrollX hiddenScrollX";n.A.tv&&(T+=" smoothScrollX"),p+='<div is="emby-itemscontainer" class="itemsContainer '+T+' padded-left padded-right">'}else p+='<div is="emby-itemscontainer" class="itemsContainer vertical-wrap padded-left padded-right">';p+=i.default.getCardsHtml({items:b.items,shape:(0,a.UI)(l()),showTitle:!0,showParentTitleOrTitle:!0,showAirTime:!0,showAirEndTime:!0,showChannelName:!1,cardLayout:!0,centerText:!1,action:"edit",cardFooterAside:"none",preferThumb:!0,defaultShape:null,coverImage:!0,allowBottomPadding:!1,overlayText:!1,showChannelLogo:!0}),p+="</div>",b.name&&(p+="</div>")}return Promise.resolve(p)}}},4452:function(e,t){var r;!function(){"use strict";var i={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,a(r)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)i.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}}]);