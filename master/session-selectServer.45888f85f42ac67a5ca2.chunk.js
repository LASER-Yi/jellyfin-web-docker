"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55319,49213,53152],{98515:function(e,t,i){i.r(t),i.d(t,{default:function(){return P}}),i(61013),i(98010),i(63238);var r=i(65009),n=i.n(r),a=i(28540),s=i(52050),l=i(30325),o=i(71487),d=i(59858),c=i(34643),h=i(94994),u=i(12801),f=i(72365),v=i(57366),m=(i(24432),i(82427),i(38228),i(60635)),g=i(18613),b=i(37099),p=i(61570),S=i(25600),y=!v.Z.slow&&!v.Z.edge;function C(e){(0,b.Z)(e)}function P(e,t){function i(e){var t=[];t.push({name:h.ZP.translate("Connect"),id:"connect"}),t.push({name:h.ZP.translate("Delete"),id:"delete"}),u.default.show({items:t,title:e.Name}).then((function(t){switch(t){case"connect":!function(e){a.ZP.show(),g.Z.connectToServer(e,{enableAutoLogin:d.Z.enableAutoLogin()}).then((function(e){a.ZP.hide();var t=e.ApiClient;switch(e.State){case S.e.SignedIn:m.default.onServerChanged(t.getCurrentUserId(),t.accessToken(),t),m.default.navigate("home.html");break;case S.e.ServerSignIn:m.default.onServerChanged(null,null,t),m.default.navigate("login.html?serverid="+e.Servers[0].Id);break;case S.e.ServerUpdateNeeded:C({text:h.ZP.translate("core#ServerUpdateNeeded","https://github.com/jellyfin/jellyfin"),html:h.ZP.translate("core#ServerUpdateNeeded",'<a href="https://github.com/jellyfin/jellyfin">https://github.com/jellyfin/jellyfin</a>')});break;default:C({text:h.ZP.translate("MessageUnableToConnectToServer")})}}))}(e);break;case"delete":!function(e){a.ZP.show(),g.Z.deleteServer(e.Id).then((function(){a.ZP.hide(),v()}))}(e)}}))}function r(t){b=t,function(e,t){var i=t.map((function(e){return{name:e.Name,icon:"storage",cardType:"",id:e.Id,server:e}})),r=i.map((function(e){var t='<span class="cardImageIcon material-icons '+e.icon+'" aria-hidden="true"></span>',i="card overflowSquareCard loginSquareCard scalableCard overflowSquareCard-scalable";l.Z.tv&&(i+=" show-focus",y&&(i+=" show-animation"));var r="";return r+='<button raised class="'+i+'" style="display:inline-block;" data-id="'+e.id+'" data-url="'+(e.url||"")+'" data-cardtype="'+e.cardType+'">',r+='<div class="cardBox">',r+='<div class="cardScalable">',r+='<div class="cardPadder cardPadder-square">',r+="</div>",r+='<div class="cardContent">',r+='<div class="cardImageContainer coveredImage '.concat(p.default.getDefaultBackgroundClass(),'">'),r+=t,r+="</div>",r+="</div>",r+="</div>",r+='<div class="cardFooter">',(r+='<div class="cardText cardTextCentered">'+n()(e.name)+"</div>")+"</div></div></button>"})).join(""),s=e.querySelector(".servers");i.length||(r="<p>"+h.ZP.translate("MessageNoServersAvailable")+"</p>"),s.innerHTML=r,a.ZP.hide()}(e,t),l.Z.tv&&c.Z.autoFocus(e)}function v(){a.ZP.show(),g.Z.getAvailableServers().then(r)}var b;!function(e,t){"1"==t.showuser?(e.classList.add("libraryPage"),e.classList.remove("standalonePage"),e.classList.add("noSecondaryNavPage")):(e.classList.add("standalonePage"),e.classList.remove("libraryPage"),e.classList.remove("noSecondaryNavPage"))}(e,t),e.addEventListener("viewshow",(function(e){var t=e.detail.isRestored;o.default.setTitle(null),o.default.setTransparentMenu(!0),t||v()})),e.querySelector(".servers").addEventListener("click",(function(e){var t=f.ZP.parentWithClass(e.target,"card");if(t){var r=t.getAttribute("data-url");if(r)s.appRouter.show(r);else{var n=t.getAttribute("data-id");i(b.filter((function(e){return e.Id===n}))[0])}}}))}},82427:function(e,t,i){i(5769),i(63238),i(61418),i(17460),i(14078),i(27471),i(32081);var r=i(61008),n=i(58517),a=i(48957),s=i(98301),l=i(30325),o=i(57366),d=i(72365),c=i(28540),h=i(34643),u=i(44038),f=i(81643),v=(i(67752),i(18613)),m=i(28172),g=Object.create(HTMLDivElement.prototype);function b(e){var t=this,i=t.multiSelect;!1!==(null==i?void 0:i.onContainerClick.call(t,e))&&r.ZP.onClick.call(t,e)}function p(e){return e.preventDefault(),e.stopPropagation(),!1}function S(e){var t=e.target,i=d.ZP.parentWithAttribute(t,"data-id");if(i&&i.getAttribute("data-serverid"))return n.default.handleCommand("menu",{sourceElement:i}),e.preventDefault(),e.stopPropagation(),!1}function y(e,t,r){var n=this;Promise.all([i.e(61570),i.e(53152)]).then(i.bind(i,61570)).then((function(e){e.onUserDataChanged(r,n)}));var a=C(n);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||n.notifyRefreshNeeded()}function C(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function P(e,t,r){var n=this;if(-1===C(n).indexOf("timers")){var a=r.ProgramId,s=r.Id;Promise.all([i.e(61570),i.e(53152)]).then(i.bind(i,61570)).then((function(e){e.onTimerCreated(a,s,n)}))}else n.notifyRefreshNeeded()}function Z(){-1!==C(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function I(e,t,r){var n=this;-1===C(n).indexOf("timers")?Promise.all([i.e(61570),i.e(53152)]).then(i.bind(i,61570)).then((function(e){e.onTimerCancelled(r.Id,n)})):n.notifyRefreshNeeded()}function T(e,t,r){var n=this;-1===C(n).indexOf("seriestimers")?Promise.all([i.e(61570),i.e(53152)]).then(i.bind(i,61570)).then((function(e){e.onSeriesTimerCancelled(r.Id,n)})):n.notifyRefreshNeeded()}function w(e,t,i){var r=this,n=C(r);if(-1===n.indexOf("seriestimers")&&-1===n.indexOf("timers")){var a=i.ItemsAdded||[],s=i.ItemsRemoved||[];if(a.length||s.length){var l=r.getAttribute("data-parentid");if(l){var o=i.FoldersAddedTo||[],d=i.FoldersRemovedFrom||[],c=i.CollectionFolders||[];if(-1===o.indexOf(l)&&-1===d.indexOf(l)&&-1===c.indexOf(l))return}r.notifyRefreshNeeded()}}}function A(e,t){var i,r=this,n=t.state,a=C(r);if(n.NowPlayingItem&&"Video"===n.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void r.notifyRefreshNeeded(!0)}else if("Audio"===(null===(i=n.NowPlayingItem)||void 0===i?void 0:i.MediaType)&&-1!==a.indexOf("audioplayback"))return void r.notifyRefreshNeeded(!0)}function k(e,t,i,r){var n=i.bind(e);r=r||u.default,f.Z.on(r,t,n),e["event_"+t]=n}function L(e,t,i){var r=e["event_"+t];r&&(i=i||u.default,f.Z.off(i,t,r),e["event_"+t]=null)}function E(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function x(e,t){E(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function N(e){var t=e.Items||e,i=this.parentContainer;i&&(t.length?i.classList.remove("hide"):i.classList.add("hide"));var r,n,a=document.activeElement;this.contains(a)&&(n=!0,r=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),n&&function(e,t){if(t){var i=e.querySelector('[data-id="'+t+'"]');if(i)try{return void h.Z.focus(i)}catch(e){console.error(e)}}h.Z.autoFocus(e)}(this,r),x(this),this.afterRefresh&&this.afterRefresh(e)}g.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var r=this;i.e(52943).then(i.bind(i,52943)).then((function(e){var t=e.default;r.multiSelect=new t({container:r,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},g.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var i=this;i.sortable=new m.ZP(i,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var i=e.item,r=e.newIndex,n=i.getAttribute("data-playlistitemid"),a=i.getAttribute("data-playlistid");if(a){var s=i.getAttribute("data-serverid"),l=v.Z.getApiClient(s);c.ZP.show(),l.ajax({url:l.getUrl("Playlists/"+a+"/Items/"+n+"/Move/"+r),type:"POST"}).then((function(){c.ZP.hide()}),(function(){c.ZP.hide(),t.refreshItems()}))}else{var o=e.oldIndex;i.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:o,newIndex:r,playlistItemId:n},bubbles:!0,cancelable:!1}))}}(e,i)}})}}else t&&(t.destroy(),this.sortable=null)},g.createdCallback=function(){this.classList.add("itemsContainer")},g.attachedCallback=function(){this.addEventListener("click",b),o.Z.touch?this.addEventListener("contextmenu",p):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",S),(l.Z.desktop||l.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),l.Z.tv&&this.classList.add("itemsContainer-tv"),r.ZP.on(this,{click:!1}),k(this,"UserDataChanged",y),k(this,"TimerCreated",P),k(this,"SeriesTimerCreated",Z),k(this,"TimerCancelled",I),k(this,"SeriesTimerCancelled",T),k(this,"LibraryChanged",w),k(this,"playbackstop",A,a.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},g.detachedCallback=function(){E(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",b),this.removeEventListener("contextmenu",S),this.removeEventListener("contextmenu",p),r.ZP.off(this,{click:!1}),L(this,"UserDataChanged"),L(this,"TimerCreated"),L(this,"SeriesTimerCreated"),L(this,"TimerCancelled"),L(this,"SeriesTimerCancelled"),L(this,"LibraryChanged"),L(this,"playbackstop",a.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},g.pause=function(){E(this,!0),this.paused=!0},g.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var i=t-(new Date).getTime();i>0&&!this.needsRefresh?x(this,i):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||e&&e.refresh?this.refreshItems():Promise.resolve()},g.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(N.bind(this))):Promise.resolve()},g.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:g,extends:"div"})},24432:function(e,t,i){i(5769),i(63238),i(61418),i(17460),i(14078);var r=i(15723),n=i(72365),a=i(30325),s=i(58517),l=i(34643),o=i(57366),d=(i(67752),Object.create(HTMLDivElement.prototype));function c(e){var t=e.detail.command;"end"===t?(l.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(l.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(l.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}d.createdCallback=function(){this.classList.add("emby-scroller")},d.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},d.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},d.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},d.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},d.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},d.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},d.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},d.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},d.addScrollEventListener=function(e,t){this.scroller&&n.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},d.removeScrollEventListener=function(e,t){this.scroller&&n.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},d.attachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.on(this,c);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var d,h,u=a.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),f={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:u||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:u||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!u,allowNativeScroll:!u,forceHideScrollbars:u,requireAnimation:u&&o.Z.edge};this.scroller=new r.Z(this,f),this.scroller.init(),this.scroller.reload(),a.Z.tv&&this.getAttribute("data-centerfocus")&&(this,d=this.scroller,n.ZP.addEventListener(this,"focus",(function(e){var t=l.Z.focusableParent(e.target);t&&d.toCenter(t)}),{capture:!0,passive:!0})),u&&(h=this,i.e(39346).then(i.bind(i,39346)).then((function(){h.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},d.pause=function(){var e=this.headroom;e&&e.pause()},d.resume=function(){var e=this.headroom;e&&e.resume()},d.detachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.off(this,c);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:d,extends:"div"})}}]);