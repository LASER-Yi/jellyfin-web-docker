"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38244,96084,27962,32762,25091,40367],{25091:function(e,t,r){r.r(t),r.d(t,{getTabsElement:function(){return f},selectedTabIndex:function(){return h},setTabs:function(){return v}}),r(44962),r(78557),r(90076),r(83994),r(82367),r(86584);var s,n,a,i=r(47629),o=r(34789),l=r(62014),c=(r(79845),r(10353),document.querySelector(".skinHeader"));function u(){this.selectedIndex(this.readySelectedIndex),this.readySelectedIndex=null}function d(e){function t(e){if(i.Ay.parentWithTag(e,"input"))return!1;var t=e.classList;return!t||!t.contains("scrollX")&&!t.contains("animatedScrollX")}for(var r=e;null!=r;){if(!t(r))return!1;r=r.parentNode}return!0}function v(e,t,i,v,h,f,b){if(n||(n=c.querySelector(".headerTabs")),!e)return s&&(document.body.classList.remove("withSectionTabs"),n.innerHTML="",n.classList.add("hide"),s=null),{tabsContainer:n,replaced:!1};var m=n;if(s||m.classList.remove("hide"),s!==e){var g=0,p='<div is="emby-tabs"'+(null==t?"":' data-index="'+t+'"')+' class="tabs-viewmenubar"><div class="emby-tabs-slider" style="white-space:nowrap;">'+i().map((function(e){var t,r="emby-tab-button";return!1===e.enabled&&(r+=" hide"),e.cssClass&&(r+=" "+e.cssClass),t=e.href?'<a href="'+e.href+'" is="emby-linkbutton" class="'+r+'" data-index="'+g+'"><div class="emby-button-foreground">'+e.name+"</div></a>":'<button type="button" is="emby-button" class="'+r+'" data-index="'+g+'"><div class="emby-button-foreground">'+e.name+"</div></button>",g++,t})).join("")+"</div></div>";return m.innerHTML=p,window.CustomElements.upgradeSubtree(m),document.body.classList.add("withSectionTabs"),s=e,function(e,t){if(o.A.touch){var s=function(r,s){d(s)&&e.contains(s)&&t.selectNext()},n=function(r,s){d(s)&&e.contains(s)&&t.selectPrevious()};r.e(19842).then(r.bind(r,19842)).then((function(t){var r=new(0,t.default)(e.parentNode.parentNode);l.A.on(r,"swipeleft",s),l.A.on(r,"swiperight",n),e.addEventListener("viewdestroy",(function(){r.destroy()}))}))}}(e,a=m.querySelector('[is="emby-tabs"]')),v&&a.addEventListener("beforetabchange",(function(e){var t=v();if(null!=e.detail.previousIndex){var r=t[e.detail.previousIndex];r&&r.classList.remove("is-active")}var s=t[e.detail.selectedTabIndex];s&&s.classList.add("is-active")})),h&&a.addEventListener("beforetabchange",h),f&&a.addEventListener("tabchange",f),!1!==b&&(a.selectedIndex?a.selectedIndex(t):(a.readySelectedIndex=t,a.addEventListener("ready",u))),{tabsContainer:m,tabs:a,replaced:!0}}return a.selectedIndex(t),{tabsContainer:m,tabs:a,replaced:!1}}function h(e){null!=e?a.selectedIndex(e):a.triggerTabChange()}function f(){return document.querySelector(".tabs-viewmenubar")}},41765:function(e,t,r){r(44962),r(78557),r(90076),r(83994),r(82367);var s=r(56422),n=r(47629),a=r(46782),i=r(38490),o=r(83775),l=r(34789),c=(r(69177),Object.create(HTMLDivElement.prototype));function u(e){var t=e.detail.command;"end"===t?(o.A.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.A.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.A.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&n.Ay.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&n.Ay.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&i.default.on(this,u);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,d,v=a.A.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),h={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:v||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:v||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!v,allowNativeScroll:!v,forceHideScrollbars:v,requireAnimation:v&&l.A.edge};this.scroller=new s.A(this,h),this.scroller.init(),this.scroller.reload(),a.A.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,n.Ay.addEventListener(this,"focus",(function(e){var t=o.A.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),v&&(d=this,r.e(49275).then(r.bind(r,49275)).then((function(){d.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&i.default.off(this,u);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})},79845:function(e,t,r){r(96054),r(69177);var s=r(47629),n=r(56422),a=r(34789),i=r(83775),o=r(46782),l=Object.create(HTMLDivElement.prototype),c="emby-tab-button",u=c+"-active";function d(e){e.classList.add(u)}function v(e,t,r){var s;e.dispatchEvent(new CustomEvent("beforetabchange",{detail:{selectedTabIndex:t,previousIndex:r}})),null!=r&&r!==t&&(s=null)&&s.classList.remove("is-active")}function h(e){var t=this,r=t.querySelector("."+u),n=s.Ay.parentWithClass(e.target,c);if(n&&n!==r){r&&r.classList.remove(u);var a=r?parseInt(r.getAttribute("data-index"),10):null;d(n);var i=parseInt(n.getAttribute("data-index"),10);v(t,i,a),setTimeout((function(){t.selectedTabIndex=i,t.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:i,previousIndex:a}}))}),120),t.scroller&&t.scroller.toCenter(n,!1)}}function f(e){var t=s.Ay.parentWithClass(e.target,c);t&&this.scroller&&this.scroller.toCenter(t,!1)}function b(e){var t=e.target.parentNode.querySelector(".lastFocused");t&&t.classList.remove("lastFocused"),e.target.classList.add("lastFocused")}function m(e){return e.querySelector("."+u)}function g(e,t){for(var r=e[t];r;){if(r.classList.contains(c)&&!r.classList.contains("hide"))return r;r=r[t]}return null}l.createdCallback=function(){this.classList.contains("emby-tabs")||(this.classList.add("emby-tabs"),this.classList.add("focusable"),s.Ay.addEventListener(this,"click",h,{passive:!0}),o.A.tv&&s.Ay.addEventListener(this,"focusin",f,{passive:!0}),s.Ay.addEventListener(this,"focusout",b))},l.focus=function(){var e=this.querySelector("."+u),t=this.querySelector(".lastFocused");t?i.A.focus(t):e?i.A.focus(e):i.A.autoFocus(this)},l.refresh=function(){this.scroller&&this.scroller.reload()},l.attachedCallback=function(){!function(e){if(!e.scroller){var t=e.querySelector(".emby-tabs-slider");t?(e.scroller=new n.A(e,{horizontal:1,itemNav:0,mouseDragging:1,touchDragging:1,slidee:t,smart:!0,releaseSwing:!0,scrollBy:200,speed:120,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1,hiddenScroll:!0,requireAnimation:!a.A.safari,allowNativeSmoothScroll:!0}),e.scroller.init()):(e.classList.add("scrollX"),e.classList.add("hiddenScrollX"),e.classList.add("smoothScrollX"))}}(this);var e=this.querySelector("."+u),t=e?parseInt(e.getAttribute("data-index"),10):parseInt(this.getAttribute("data-index")||"0",10);if(-1!==t){this.selectedTabIndex=t;var r=this.querySelectorAll("."+c)[t];r&&d(r)}this.readyFired||(this.readyFired=!0,this.dispatchEvent(new CustomEvent("ready",{})))},l.detachedCallback=function(){this.scroller&&(this.scroller.destroy(),this.scroller=null),s.Ay.removeEventListener(this,"click",h,{passive:!0}),o.A.tv&&s.Ay.removeEventListener(this,"focusin",f,{passive:!0})},l.selectedIndex=function(e,t){var r=this;if(null==e)return r.selectedTabIndex||0;var s=r.selectedIndex();r.selectedTabIndex=e;var n=r.querySelectorAll("."+c);if(s===e||!1===t){v(r,e,s),r.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:e}}));var a=n[s];d(n[e]),s!==e&&a&&a.classList.remove(u)}else h.call(r,{target:n[e]})},l.selectNext=function(){var e=g(m(this),"nextSibling");e&&h.call(this,{target:e})},l.selectPrevious=function(){var e=g(m(this),"previousSibling");e&&h.call(this,{target:e})},l.triggerBeforeTabChange=function(){v(this,this.selectedIndex())},l.triggerTabChange=function(){this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:this.selectedIndex()}}))},l.setTabEnabled=function(e,t){var r=this.querySelector('.emby-tab-button[data-index="'+e+'"]');t?r.classList.remove("hide"):r.classList.remove("add")},document.registerElement("emby-tabs",{prototype:l,extends:"div"})},42667:function(e,t,r){r.r(t);var s=r(62540),n=r(63696),a=r(9055),i=r(9482),o=r(73233),l=r(89166),c=r(46782),u=r(25091),d=(r(79845),r(10353),r(41765),r(7397));t.default=function(){var e,t=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var s,n,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(s=a.next()).done;)i.push(s.value)}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return i}((0,a.ok)(),1)[0],v=parseInt(null!==(e=t.get("tab"))&&void 0!==e?e:"0",10),h=(0,n.useRef)(),f=(0,n.useMemo)((function(){return[]}),[]),b=(0,n.useRef)(null),m=function(){return[{name:i.Ay.translate("Home")},{name:i.Ay.translate("Favorites")}]},g=function(){var e;return null===(e=b.current)||void 0===e?void 0:e.querySelectorAll(".tabContent")},p=(0,n.useCallback)((function(e){if(null==e)throw new Error("index cannot be null");var t="";switch(e){case 0:t="hometab";break;case 1:t="favorites"}return r(7062)("./".concat(t)).then((function(t){var r,s=t.default,n=f[e];return n||(n=new s(null===(r=b.current)||void 0===r?void 0:r.querySelector(".tabContent[data-index='"+e+"']"),null),f[e]=n),n}))}),[f]),y=(0,n.useCallback)((function(){f&&f.forEach((function(e){e.destroy&&e.destroy()})),h.current=null}),[f]),S=(0,n.useCallback)((function(e,t){p(e).then((function(e){var r=!e.refreshed;e.onResume({autoFocus:null==t&&c.A.tv,refresh:r}),e.refreshed=!0,h.current=e})).catch((function(e){console.error("[Home] failed to get tab controller",e)}))}),[p]),A=(0,n.useCallback)((function(e){var t=parseInt(e.detail.selectedTabIndex,10),r=e.detail.previousIndex,s=null==r?null:f[r];(null==s?void 0:s.onPause)&&s.onPause(),S(t,r)}),[S,f]),x=(0,n.useCallback)((function(){o.default.setTitle(null),(0,l.gJ)();var e=h.current;e?(null==e?void 0:e.onResume)&&e.onResume({}):u.selectedTabIndex(v),document.querySelector(".skinHeader").classList.add("noHomeButtonHeader")}),[v]),E=(0,n.useCallback)((function(){var e=h.current;(null==e?void 0:e.onPause)&&e.onPause(),document.querySelector(".skinHeader").classList.remove("noHomeButtonHeader")}),[]);return(0,n.useEffect)((function(){return u.setTabs(b.current,v,m,g,null,A,!1),x(),function(){E()}}),[v,E,x,A,y]),(0,s.jsx)("div",{ref:b,children:(0,s.jsxs)(d.A,{id:"indexPage",className:"mainAnimatedPage homePage libraryPage allLibraryPage backdropPage pageWithAbsoluteTabs withTabs",isBackButtonEnabled:!1,backDropType:"movie,series,book",children:[(0,s.jsx)("div",{className:"tabContent pageTabContent",id:"homeTab","data-index":"0",children:(0,s.jsx)("div",{className:"sections"})}),(0,s.jsx)("div",{className:"tabContent pageTabContent",id:"favoritesTab","data-index":"1",children:(0,s.jsx)("div",{className:"sections"})})]})})}},7397:function(e,t,r){var s=r(62540),n=r(63696),a=r(62156);t.A=function(e){var t=e.children,r=e.id,i=e.className,o=void 0===i?"":i,l=e.title,c=e.isBackButtonEnabled,u=void 0===c||c,d=e.isMenuButtonEnabled,v=void 0!==d&&d,h=e.isNowPlayingBarEnabled,f=void 0===h||h,b=e.isThemeMediaSupported,m=void 0!==b&&b,g=e.backDropType,p=(0,n.useRef)(null);return(0,n.useEffect)((function(){a.A.hideView()}),[]),(0,n.useEffect)((function(){var e,t,r,s,n={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:f,supportsThemeMedia:m}}};null===(e=p.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",n)),null===(t=p.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",n)),null===(r=p.current)||void 0===r||r.dispatchEvent(new CustomEvent("viewshow",n)),null===(s=p.current)||void 0===s||s.dispatchEvent(new CustomEvent("pageshow",n))}),[p,f,m]),(0,s.jsx)("div",{ref:p,id:r,"data-role":"page",className:"page ".concat(o),"data-title":l,"data-backbutton":u,"data-menubutton":v,"data-backdroptype":g,children:t})}},40782:function(e,t,r){var s=r(11444),n="assets/img/devices/";t.Ay={getDeviceIcon:function(e){var t;switch(e.AppName||e.Client){case"Samsung Smart TV":return n+"samsung.svg";case"Xbox One":return n+"xbox.svg";case"Sony PS4":return n+"playstation.svg";case"Kodi":case"Kodi JellyCon":return n+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return n+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return n+"apple.svg";case"Home Assistant":return n+"home-assistant.svg";case"Jellyfin Roku":return n+"roku.svg";case"Finamp":return n+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return n+"opera.svg";case"Chrome":case"Chrome Android":return n+"chrome.svg";case"Firefox":case"Firefox Android":return n+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return n+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return n+"edgechromium.svg";case"Edge":return n+"edge.svg";case"Internet Explorer":return n+"msie.svg";default:return n+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(t=e.Capabilities)||void 0===t?void 0:t.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(t){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,t)}return n+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}},getItemTypeIcon:function(e){switch(e){case s.D.MusicAlbum:return"album";case s.D.MusicArtist:case s.D.Person:return"person";case s.D.Audio:return"audiotrack";case s.D.Movie:return"movie";case s.D.Episode:case s.D.Series:return"tv";case s.D.Program:return"live_tv";case s.D.Book:return"book";case s.D.Folder:return"folder";case s.D.BoxSet:return"collections";case s.D.Playlist:return"view_list";case s.D.Photo:return"photo";case s.D.PhotoAlbum:return"photo_album";default:return"folder"}}}}}]);