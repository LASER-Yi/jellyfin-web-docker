(self.webpackChunk=self.webpackChunk||[]).push([[35240,49213,53152,67345],{67345:function(e,t,n){"use strict";n.r(t),n.d(t,{getTabsElement:function(){return m},selectedTabIndex:function(){return f},setTabs:function(){return h}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(61013);var i,s,a,r=n(72365),o=n(57366),d=n(81643),l=(n(21694),n(38228),document.querySelector(".skinHeader"));function c(){this.selectedIndex(this.readySelectedIndex),this.readySelectedIndex=null}function u(e){function t(e){if(r.ZP.parentWithTag(e,"input"))return!1;var t=e.classList;return!t||!t.contains("scrollX")&&!t.contains("animatedScrollX")}for(var n=e;null!=n;){if(!t(n))return!1;n=n.parentNode}return!0}function h(e,t,r,h,f,m,v){if(s||(s=l.querySelector(".headerTabs")),!e)return i&&(document.body.classList.remove("withSectionTabs"),s.innerHTML="",s.classList.add("hide"),i=null),{tabsContainer:s,replaced:!1};var b=s;if(i||b.classList.remove("hide"),i!==e){var p=0,g='<div is="emby-tabs"'+(null==t?"":' data-index="'+t+'"')+' class="tabs-viewmenubar"><div class="emby-tabs-slider" style="white-space:nowrap;">'+r().map((function(e){var t,n="emby-tab-button";return!1===e.enabled&&(n+=" hide"),e.cssClass&&(n+=" "+e.cssClass),t=e.href?'<a href="'+e.href+'" is="emby-linkbutton" class="'+n+'" data-index="'+p+'"><div class="emby-button-foreground">'+e.name+"</div></a>":'<button type="button" is="emby-button" class="'+n+'" data-index="'+p+'"><div class="emby-button-foreground">'+e.name+"</div></button>",p++,t})).join("")+"</div></div>";return b.innerHTML=g,window.CustomElements.upgradeSubtree(b),document.body.classList.add("withSectionTabs"),i=e,function(e,t){if(o.Z.touch){var i=function(n,i){u(i)&&e.contains(i)&&t.selectNext()},s=function(n,i){u(i)&&e.contains(i)&&t.selectPrevious()};n.e(14810).then(n.bind(n,14810)).then((function(t){var n=new(0,t.default)(e.parentNode.parentNode);d.Z.on(n,"swipeleft",i),d.Z.on(n,"swiperight",s),e.addEventListener("viewdestroy",(function(){n.destroy()}))}))}}(e,a=b.querySelector('[is="emby-tabs"]')),h&&a.addEventListener("beforetabchange",(function(e){var t=h();if(null!=e.detail.previousIndex){var n=t[e.detail.previousIndex];n&&n.classList.remove("is-active")}var i=t[e.detail.selectedTabIndex];i&&i.classList.add("is-active")})),f&&a.addEventListener("beforetabchange",f),m&&a.addEventListener("tabchange",m),!1!==v&&(a.selectedIndex?a.selectedIndex(t):(a.readySelectedIndex=t,a.addEventListener("ready",c))),{tabsContainer:b,tabs:a,replaced:!0}}return a.selectedIndex(t),{tabsContainer:b,tabs:a,replaced:!1}}function f(e){null!=e?a.selectedIndex(e):a.triggerTabChange()}function m(){return document.querySelector(".tabs-viewmenubar")}},56612:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}}),n(5769),n(32081),n(63238),n(61418),n(17460),n(14078),n(27471);var i=n(58517),s=n(71487),a=n(30325),r=n(28540),o=n(72365),d=n(60934),l=n(61570),c=n(48957),u=n(67345),h=n(94994),f=(n(82427),n(38228),n(60635)),m=n(81643),v=n(87680);function b(){return[{name:h.ZP.translate("Shows")},{name:h.ZP.translate("Suggestions")},{name:h.ZP.translate("TabUpcoming")},{name:h.ZP.translate("Genres")},{name:h.ZP.translate("TabNetworks")},{name:h.ZP.translate("Episodes")}]}function p(){return!a.Z.desktop}function g(e,t){function g(e){var t;T(0,t=parseInt(e.detail.selectedTabIndex,10),(function(e){-1==E.indexOf(t)&&e.preRender&&e.preRender()}))}function y(e){var t,n=parseInt(e.detail.selectedTabIndex,10);w=t=n,T(0,t,(function(e){-1==E.indexOf(t)&&(E.push(t),e.renderTab())}))}function I(){return e.querySelectorAll(".pageTabContent")}function T(i,s,a){var r;switch(s){case 0:r="tvshows";break;case 1:r="tvrecommended";break;case 2:r="tvupcoming";break;case 3:r="tvgenres";break;case 4:r="tvstudios";break;case 5:r="episodes"}n(73210)("./".concat(r)).then((function(n){var i,r=n.default;1===s&&(i=e.querySelector(".pageTabContent[data-index='"+s+"']"),L.tabContent=i);var o=P[s];o||(i=e.querySelector(".pageTabContent[data-index='"+s+"']"),o=1===s?L:new r(e,t,i),P[s]=o,o.initTab&&o.initTab()),a(o)}))}function C(e,t){t.NowPlayingItem&&"Video"==t.NowPlayingItem.MediaType&&(E=[],u.getTabsElement().triggerTabChange())}function x(e,t){var n=t;"UserDataChanged"===n.MessageType&&n.Data.UserId==ApiClient.getCurrentUserId()&&(E=[])}function S(e){"search"===e.detail.command&&(e.preventDefault(),f.default.navigate("search.html?collectionType=tv&parentId="+t.topParentId))}var L=this,w=parseInt(t.tab||function(e){switch(d.get("landing-"+e)){case"suggestions":return 1;case"upcoming":return 2;case"genres":return 3;case"networks":return 4;case"episodes":return 5;default:return 0}}(t.topParentId),10);L.initTab=function(){!function(e,t){for(var n,i=t.querySelectorAll(".itemsContainer"),s=0,r=i.length;s<r;s++)n=i[s],p()?(n.classList.add("hiddenScrollX"),a.Z.tv&&n.classList.add("smoothScrollX"),n.classList.add("scrollX"),n.classList.remove("vertical-wrap")):(n.classList.remove("hiddenScrollX"),n.classList.remove("smoothScrollX"),n.classList.remove("scrollX"),n.classList.add("vertical-wrap"))}(0,e.querySelector(".pageTabContent[data-index='1']"))},L.renderTab=function(){var n=e.querySelector(".pageTabContent[data-index='1']");!function(e,t,n){var i=t.topParentId,a=ApiClient.getCurrentUserId();console.debug("loadSuggestionsTab"),function(e,t,n){var i={SortBy:"DatePlayed",SortOrder:"Descending",IncludeItemTypes:"Episode",Filters:"IsResumable",Limit:o.ZP.getWindowSize().innerWidth>=1600?5:3,Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",CollapseBoxSetItems:!1,ParentId:n,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getItems(t,i).then((function(t){t.Items.length?e.querySelector("#resumableSection").classList.remove("hide"):e.querySelector("#resumableSection").classList.add("hide");var n=!p(),i=e.querySelector("#resumableItems");l.default.buildCards(t.Items,{itemsContainer:i,preferThumb:!0,inheritThumb:!d.useEpisodeImagesInNextUpAndResume(),shape:p()?"overflowBackdrop":"backdrop",scalable:!0,overlayPlayButton:!0,allowBottomPadding:n,cardLayout:!1,showTitle:!0,showYear:!0,centerText:!0}),r.ZP.hide(),v.default.autoFocus(e)}))}(n,a,i),function(e,t,n){var i={userId:t,IncludeItemTypes:"Episode",Limit:30,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",ParentId:n,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb"};ApiClient.getLatestItems(i).then((function(t){var n=e.querySelector("#latestItemsSection"),i=!p(),s=n.querySelector("#latestEpisodesItems");l.default.buildCards(t,{parentContainer:n,itemsContainer:s,items:t,shape:"backdrop",preferThumb:!0,showTitle:!0,showSeriesYear:!0,showParentTitle:!0,overlayText:!1,cardLayout:!1,allowBottomPadding:i,showUnplayedIndicator:!1,showChildCountIndicator:!0,centerText:!0,lazy:!0,overlayPlayButton:!0,lines:2}),r.ZP.hide(),v.default.autoFocus(e)}))}(n,a,i),function(e,t,n){var i={userId:t,Limit:24,Fields:"PrimaryImageAspectRatio,DateCreated,BasicSyncInfo,MediaSourceCount",ParentId:n,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",EnableTotalRecordCount:!1};i.ParentId=s.default.getTopParentId(),ApiClient.getNextUpEpisodes(i).then((function(t){t.Items.length?e.querySelector(".noNextUpItems").classList.add("hide"):e.querySelector(".noNextUpItems").classList.remove("hide");var n=e.querySelector("#nextUpItemsSection"),i=n.querySelector("#nextUpItems");l.default.buildCards(t.Items,{parentContainer:n,itemsContainer:i,preferThumb:!0,inheritThumb:!d.useEpisodeImagesInNextUpAndResume(),shape:"backdrop",scalable:!0,showTitle:!0,showParentTitle:!0,overlayText:!1,centerText:!0,overlayPlayButton:!0,cardLayout:!1}),r.ZP.hide(),v.default.autoFocus(e)}))}(n,a,i)}(0,t,n)};var P=[],E=[];e.addEventListener("viewshow",(function(){if(u.setTabs(e,w,b,I,g,y),!e.getAttribute("data-title")){var n=t.topParentId;n?ApiClient.getItem(ApiClient.getCurrentUserId(),n).then((function(t){e.setAttribute("data-title",t.Name),s.default.setTitle(t.Name)})):(e.setAttribute("data-title",h.ZP.translate("Shows")),s.default.setTitle(h.ZP.translate("Shows")))}m.Z.on(c.O,"playbackstop",C),m.Z.on(ApiClient,"message",x),i.default.on(window,S)})),e.addEventListener("viewbeforehide",(function(){i.default.off(window,S),m.Z.off(c.O,"playbackstop",C),m.Z.off(ApiClient,"message",x)})),e.addEventListener("viewdestroy",(function(){P.forEach((function(e){e.destroy&&e.destroy()}))}))}},82427:function(e,t,n){"use strict";n(5769),n(63238),n(61418),n(17460),n(14078),n(27471),n(32081);var i=n(61008),s=n(58517),a=n(48957),r=n(98301),o=n(30325),d=n(57366),l=n(72365),c=n(28540),u=n(34643),h=n(44038),f=n(81643),m=(n(67752),n(18613)),v=n(28172),b=Object.create(HTMLDivElement.prototype);function p(e){var t=this,n=t.multiSelect;!1!==(null==n?void 0:n.onContainerClick.call(t,e))&&i.ZP.onClick.call(t,e)}function g(e){return e.preventDefault(),e.stopPropagation(),!1}function y(e){var t=e.target,n=l.ZP.parentWithAttribute(t,"data-id");if(n&&n.getAttribute("data-serverid"))return s.default.handleCommand("menu",{sourceElement:n}),e.preventDefault(),e.stopPropagation(),!1}function I(e,t,i){var s=this;Promise.all([n.e(61570),n.e(53152)]).then(n.bind(n,61570)).then((function(e){e.onUserDataChanged(i,s)}));var a=T(s);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||s.notifyRefreshNeeded()}function T(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function C(e,t,i){var s=this;if(-1===T(s).indexOf("timers")){var a=i.ProgramId,r=i.Id;Promise.all([n.e(61570),n.e(53152)]).then(n.bind(n,61570)).then((function(e){e.onTimerCreated(a,r,s)}))}else s.notifyRefreshNeeded()}function x(){-1!==T(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function S(e,t,i){var s=this;-1===T(s).indexOf("timers")?Promise.all([n.e(61570),n.e(53152)]).then(n.bind(n,61570)).then((function(e){e.onTimerCancelled(i.Id,s)})):s.notifyRefreshNeeded()}function L(e,t,i){var s=this;-1===T(s).indexOf("seriestimers")?Promise.all([n.e(61570),n.e(53152)]).then(n.bind(n,61570)).then((function(e){e.onSeriesTimerCancelled(i.Id,s)})):s.notifyRefreshNeeded()}function w(e,t,n){var i=this,s=T(i);if(-1===s.indexOf("seriestimers")&&-1===s.indexOf("timers")){var a=n.ItemsAdded||[],r=n.ItemsRemoved||[];if(a.length||r.length){var o=i.getAttribute("data-parentid");if(o){var d=n.FoldersAddedTo||[],l=n.FoldersRemovedFrom||[],c=n.CollectionFolders||[];if(-1===d.indexOf(o)&&-1===l.indexOf(o)&&-1===c.indexOf(o))return}i.notifyRefreshNeeded()}}}function P(e,t){var n,i=this,s=t.state,a=T(i);if(s.NowPlayingItem&&"Video"===s.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void i.notifyRefreshNeeded(!0)}else if("Audio"===(null===(n=s.NowPlayingItem)||void 0===n?void 0:n.MediaType)&&-1!==a.indexOf("audioplayback"))return void i.notifyRefreshNeeded(!0)}function E(e,t,n,i){var s=n.bind(e);i=i||h.default,f.Z.on(i,t,s),e["event_"+t]=s}function Z(e,t,n){var i=e["event_"+t];i&&(n=n||h.default,f.Z.off(n,t,i),e["event_"+t]=null)}function k(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function A(e,t){k(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function R(e){var t=e.Items||e,n=this.parentContainer;n&&(t.length?n.classList.remove("hide"):n.classList.add("hide"));var i,s,a=document.activeElement;this.contains(a)&&(s=!0,i=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),r.default.lazyChildren(this),s&&function(e,t){if(t){var n=e.querySelector('[data-id="'+t+'"]');if(n)try{return void u.Z.focus(n)}catch(e){console.error(e)}}u.Z.autoFocus(e)}(this,i),A(this),this.afterRefresh&&this.afterRefresh(e)}b.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var i=this;n.e(52943).then(n.bind(n,52943)).then((function(e){var t=e.default;i.multiSelect=new t({container:i,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},b.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var n=this;n.sortable=new v.ZP(n,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var n=e.item,i=e.newIndex,s=n.getAttribute("data-playlistitemid"),a=n.getAttribute("data-playlistid");if(a){var r=n.getAttribute("data-serverid"),o=m.Z.getApiClient(r);c.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+a+"/Items/"+s+"/Move/"+i),type:"POST"}).then((function(){c.ZP.hide()}),(function(){c.ZP.hide(),t.refreshItems()}))}else{var d=e.oldIndex;n.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:d,newIndex:i,playlistItemId:s},bubbles:!0,cancelable:!1}))}}(e,n)}})}}else t&&(t.destroy(),this.sortable=null)},b.createdCallback=function(){this.classList.add("itemsContainer")},b.attachedCallback=function(){this.addEventListener("click",p),d.Z.touch?this.addEventListener("contextmenu",g):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",y),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),i.ZP.on(this,{click:!1}),E(this,"UserDataChanged",I),E(this,"TimerCreated",C),E(this,"SeriesTimerCreated",x),E(this,"TimerCancelled",S),E(this,"SeriesTimerCancelled",L),E(this,"LibraryChanged",w),E(this,"playbackstop",P,a.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},b.detachedCallback=function(){k(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",p),this.removeEventListener("contextmenu",y),this.removeEventListener("contextmenu",g),i.ZP.off(this,{click:!1}),Z(this,"UserDataChanged"),Z(this,"TimerCreated"),Z(this,"SeriesTimerCreated"),Z(this,"TimerCancelled"),Z(this,"SeriesTimerCancelled"),Z(this,"LibraryChanged"),Z(this,"playbackstop",a.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},b.pause=function(){k(this,!0),this.paused=!0},b.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var n=t-(new Date).getTime();n>0&&!this.needsRefresh?A(this,n):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||e&&e.refresh?this.refreshItems():Promise.resolve()},b.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(R.bind(this))):Promise.resolve()},b.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:b,extends:"div"})},21694:function(e,t,n){"use strict";n(32081),n(67752);var i=n(72365),s=n(15723),a=n(57366),r=n(34643),o=n(30325),d=Object.create(HTMLDivElement.prototype),l="emby-tab-button",c=l+"-active";function u(e){e.classList.add(c)}function h(e,t,n){var i;e.dispatchEvent(new CustomEvent("beforetabchange",{detail:{selectedTabIndex:t,previousIndex:n}})),null!=n&&n!==t&&(i=null)&&i.classList.remove("is-active")}function f(e){var t=this,n=t.querySelector("."+c),s=i.ZP.parentWithClass(e.target,l);if(s&&s!==n){n&&n.classList.remove(c);var a=n?parseInt(n.getAttribute("data-index"),10):null;u(s);var r=parseInt(s.getAttribute("data-index"),10);h(t,r,a),setTimeout((function(){t.selectedTabIndex=r,t.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:r,previousIndex:a}}))}),120),t.scroller&&t.scroller.toCenter(s,!1)}}function m(e){var t=i.ZP.parentWithClass(e.target,l);t&&this.scroller&&this.scroller.toCenter(t,!1)}function v(e){var t=e.target.parentNode.querySelector(".lastFocused");t&&t.classList.remove("lastFocused"),e.target.classList.add("lastFocused")}function b(e){return e.querySelector("."+c)}function p(e,t){for(var n=e[t];n;){if(n.classList.contains(l)&&!n.classList.contains("hide"))return n;n=n[t]}return null}d.createdCallback=function(){this.classList.contains("emby-tabs")||(this.classList.add("emby-tabs"),this.classList.add("focusable"),i.ZP.addEventListener(this,"click",f,{passive:!0}),o.Z.tv&&i.ZP.addEventListener(this,"focusin",m,{passive:!0}),i.ZP.addEventListener(this,"focusout",v))},d.focus=function(){var e=this.querySelector("."+c),t=this.querySelector(".lastFocused");t?r.Z.focus(t):e?r.Z.focus(e):r.Z.autoFocus(this)},d.refresh=function(){this.scroller&&this.scroller.reload()},d.attachedCallback=function(){!function(e){if(!e.scroller){var t=e.querySelector(".emby-tabs-slider");t?(e.scroller=new s.Z(e,{horizontal:1,itemNav:0,mouseDragging:1,touchDragging:1,slidee:t,smart:!0,releaseSwing:!0,scrollBy:200,speed:120,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1,hiddenScroll:!0,requireAnimation:!a.Z.safari,allowNativeSmoothScroll:!0}),e.scroller.init()):(e.classList.add("scrollX"),e.classList.add("hiddenScrollX"),e.classList.add("smoothScrollX"))}}(this);var e=this.querySelector("."+c),t=e?parseInt(e.getAttribute("data-index"),10):parseInt(this.getAttribute("data-index")||"0",10);if(-1!==t){this.selectedTabIndex=t;var n=this.querySelectorAll("."+l)[t];n&&u(n)}this.readyFired||(this.readyFired=!0,this.dispatchEvent(new CustomEvent("ready",{})))},d.detachedCallback=function(){this.scroller&&(this.scroller.destroy(),this.scroller=null),i.ZP.removeEventListener(this,"click",f,{passive:!0}),o.Z.tv&&i.ZP.removeEventListener(this,"focusin",m,{passive:!0})},d.selectedIndex=function(e,t){var n=this;if(null==e)return n.selectedTabIndex||0;var i=n.selectedIndex();n.selectedTabIndex=e;var s=n.querySelectorAll("."+l);if(i===e||!1===t){h(n,e,i),n.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:e}}));var a=s[i];u(s[e]),i!==e&&a&&a.classList.remove(c)}else f.call(n,{target:s[e]})},d.selectNext=function(){var e=p(b(this),"nextSibling");e&&f.call(this,{target:e})},d.selectPrevious=function(){var e=p(b(this),"previousSibling");e&&f.call(this,{target:e})},d.triggerBeforeTabChange=function(){h(this,this.selectedIndex())},d.triggerTabChange=function(){this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:this.selectedIndex()}}))},d.setTabEnabled=function(e,t){var n=this.querySelector('.emby-tab-button[data-index="'+e+'"]');t?n.classList.remove("hide"):n.classList.remove("add")},document.registerElement("emby-tabs",{prototype:d,extends:"div"})},73210:function(e,t,n){var i={"./episodes":[39873,63873,93386],"./episodes.js":[39873,63873,93386],"./tvgenres":[19372,19372],"./tvgenres.js":[19372,19372],"./tvrecommended":[56612],"./tvrecommended.html":[26623,48601],"./tvrecommended.js":[56612],"./tvshows":[63648,63873,63648,73852],"./tvshows.js":[63648,63873,63648,73852],"./tvstudios":[9300,9300],"./tvstudios.js":[9300,9300],"./tvupcoming":[34968,34968],"./tvupcoming.js":[34968,34968]};function s(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(s)}))}s.keys=function(){return Object.keys(i)},s.id=73210,e.exports=s}}]);