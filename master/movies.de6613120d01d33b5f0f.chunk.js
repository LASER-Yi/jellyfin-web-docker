"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9936,49748,76898,82800,18397,83264,10183,64539,23783,36443,88963,64866],{24432:function(e,t,a){a(5769),a(63238),a(61418),a(17460),a(14078);var r=a(15723),s=a(72365),n=a(30325),i=a(58517),o=a(34643),l=a(57366),c=(a(67752),Object.create(HTMLDivElement.prototype));function u(e){var t=e.detail.command;"end"===t?(o.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&s.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&s.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&i.default.on(this,u);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,d,v=n.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),h={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:v||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:v||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!v,allowNativeScroll:!v,forceHideScrollbars:v,requireAnimation:v&&l.Z.edge};this.scroller=new r.Z(this,h),this.scroller.init(),this.scroller.reload(),n.Z.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,s.ZP.addEventListener(this,"focus",(function(e){var t=o.Z.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),v&&(d=this,a.e(39346).then(a.bind(a,39346)).then((function(){d.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&i.default.off(this,u);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})},21694:function(e,t,a){a(32081),a(67752);var r=a(72365),s=a(15723),n=a(57366),i=a(34643),o=a(30325),l=Object.create(HTMLDivElement.prototype),c="emby-tab-button",u=c+"-active";function d(e){e.classList.add(u)}function v(e,t,a){var r;e.dispatchEvent(new CustomEvent("beforetabchange",{detail:{selectedTabIndex:t,previousIndex:a}})),null!=a&&a!==t&&(r=null)&&r.classList.remove("is-active")}function h(e){var t=this,a=t.querySelector("."+u),s=r.ZP.parentWithClass(e.target,c);if(s&&s!==a){a&&a.classList.remove(u);var n=a?parseInt(a.getAttribute("data-index"),10):null;d(s);var i=parseInt(s.getAttribute("data-index"),10);v(t,i,n),setTimeout((function(){t.selectedTabIndex=i,t.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:i,previousIndex:n}}))}),120),t.scroller&&t.scroller.toCenter(s,!1)}}function p(e){var t=r.ZP.parentWithClass(e.target,c);t&&this.scroller&&this.scroller.toCenter(t,!1)}function m(e){var t=e.target.parentNode.querySelector(".lastFocused");t&&t.classList.remove("lastFocused"),e.target.classList.add("lastFocused")}function f(e){return e.querySelector("."+u)}function b(e,t){for(var a=e[t];a;){if(a.classList.contains(c)&&!a.classList.contains("hide"))return a;a=a[t]}return null}l.createdCallback=function(){this.classList.contains("emby-tabs")||(this.classList.add("emby-tabs"),this.classList.add("focusable"),r.ZP.addEventListener(this,"click",h,{passive:!0}),o.Z.tv&&r.ZP.addEventListener(this,"focusin",p,{passive:!0}),r.ZP.addEventListener(this,"focusout",m))},l.focus=function(){var e=this.querySelector("."+u),t=this.querySelector(".lastFocused");t?i.Z.focus(t):e?i.Z.focus(e):i.Z.autoFocus(this)},l.refresh=function(){this.scroller&&this.scroller.reload()},l.attachedCallback=function(){!function(e){if(!e.scroller){var t=e.querySelector(".emby-tabs-slider");t?(e.scroller=new s.Z(e,{horizontal:1,itemNav:0,mouseDragging:1,touchDragging:1,slidee:t,smart:!0,releaseSwing:!0,scrollBy:200,speed:120,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1,hiddenScroll:!0,requireAnimation:!n.Z.safari,allowNativeSmoothScroll:!0}),e.scroller.init()):(e.classList.add("scrollX"),e.classList.add("hiddenScrollX"),e.classList.add("smoothScrollX"))}}(this);var e=this.querySelector("."+u),t=e?parseInt(e.getAttribute("data-index"),10):parseInt(this.getAttribute("data-index")||"0",10);if(-1!==t){this.selectedTabIndex=t;var a=this.querySelectorAll("."+c)[t];a&&d(a)}this.readyFired||(this.readyFired=!0,this.dispatchEvent(new CustomEvent("ready",{})))},l.detachedCallback=function(){this.scroller&&(this.scroller.destroy(),this.scroller=null),r.ZP.removeEventListener(this,"click",h,{passive:!0}),o.Z.tv&&r.ZP.removeEventListener(this,"focusin",p,{passive:!0})},l.selectedIndex=function(e,t){var a=this;if(null==e)return a.selectedTabIndex||0;var r=a.selectedIndex();a.selectedTabIndex=e;var s=a.querySelectorAll("."+c);if(r===e||!1===t){v(a,e,r),a.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:e}}));var n=s[r];d(s[e]),r!==e&&n&&n.classList.remove(u)}else h.call(a,{target:s[e]})},l.selectNext=function(){var e=b(f(this),"nextSibling");e&&h.call(this,{target:e})},l.selectPrevious=function(){var e=b(f(this),"previousSibling");e&&h.call(this,{target:e})},l.triggerBeforeTabChange=function(){v(this,this.selectedIndex())},l.triggerTabChange=function(){this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:this.selectedIndex()}}))},l.setTabEnabled=function(e,t){var a=this.querySelector('.emby-tab-button[data-index="'+e+'"]');t?a.classList.remove("hide"):a.classList.remove("add")},document.registerElement("emby-tabs",{prototype:l,extends:"div"})},2375:function(e,t,a){a.d(t,{Yr:function(){return o},oV:function(){return i}});var r=a(94994),s=a(60934),n=a(40154),i=function(e){return l.some((function(t){return t.path===e}))},o=function(e,t){var a,r,n,i,o,c;if(!t)return 0;var u=null!==(r=null===(a=l.find((function(t){return t.path===e})))||void 0===a?void 0:a.tabs)&&void 0!==r?r:[],d=s.get("landing-"+t,!1);return null!==(c=null!==(i=null===(n=u.find((function(e){return e.value===d})))||void 0===n?void 0:n.index)&&void 0!==i?i:null===(o=u.find((function(e){return e.isDefault})))||void 0===o?void 0:o.index)&&void 0!==c?c:0},l=[{path:"/livetv.html",tabs:[{index:0,label:r.ZP.translate("Programs"),value:n.$.Programs,isDefault:!0},{index:1,label:r.ZP.translate("Guide"),value:n.$.Guide},{index:2,label:r.ZP.translate("Channels"),value:n.$.Channels},{index:3,label:r.ZP.translate("Recordings"),value:n.$.Recordings},{index:4,label:r.ZP.translate("Schedule"),value:n.$.Schedule},{index:5,label:r.ZP.translate("Series"),value:n.$.Series}]},{path:"/movies.html",tabs:[{index:0,label:r.ZP.translate("Movies"),value:n.$.Movies,isDefault:!0},{index:1,label:r.ZP.translate("Suggestions"),value:n.$.Suggestions},{index:2,label:r.ZP.translate("Trailers"),value:n.$.Trailers},{index:3,label:r.ZP.translate("Favorites"),value:n.$.Favorites},{index:4,label:r.ZP.translate("Collections"),value:n.$.Collections},{index:5,label:r.ZP.translate("Genres"),value:n.$.Genres}]},{path:"/music.html",tabs:[{index:0,label:r.ZP.translate("Albums"),value:n.$.Albums,isDefault:!0},{index:1,label:r.ZP.translate("Suggestions"),value:n.$.Suggestions},{index:2,label:r.ZP.translate("HeaderAlbumArtists"),value:n.$.AlbumArtists},{index:3,label:r.ZP.translate("Artists"),value:n.$.Artists},{index:4,label:r.ZP.translate("Playlists"),value:n.$.Playlists},{index:5,label:r.ZP.translate("Songs"),value:n.$.Songs},{index:6,label:r.ZP.translate("Genres"),value:n.$.Genres}]},{path:"/tv.html",tabs:[{index:0,label:r.ZP.translate("Shows"),value:n.$.Shows,isDefault:!0},{index:1,label:r.ZP.translate("Suggestions"),value:n.$.Suggestions},{index:2,label:r.ZP.translate("TabUpcoming"),value:n.$.Upcoming},{index:3,label:r.ZP.translate("Genres"),value:n.$.Genres},{index:4,label:r.ZP.translate("TabNetworks"),value:n.$.Networks},{index:5,label:r.ZP.translate("Episodes"),value:n.$.Episodes}]}];t.ZP=l},78886:function(e,t,a){a.r(t);var r=a(24246),s=a(27378),n=a(42562);t.default=function(e){var t=e.parentId,a=(0,s.useCallback)((function(){return"collections"}),[]),i=(0,s.useCallback)((function(){return["BoxSet"]}),[]),o=(0,s.useCallback)((function(){return"MessageNoCollectionsAvailable"}),[]);return(0,r.jsx)(n.Z,{topParentId:t,isBtnFilterEnabled:!1,isBtnNewCollectionEnabled:!0,isAlphaPickerEnabled:!1,getBasekey:a,getItemTypes:i,getNoItemsMessage:o})}},8271:function(e,t,a){a.r(t);var r=a(24246),s=a(27378),n=a(42562);t.default=function(e){var t=e.parentId,a=(0,s.useCallback)((function(){return"favorites"}),[]),i=(0,s.useCallback)((function(){return["Movie"]}),[]),o=(0,s.useCallback)((function(){return"MessageNoFavoritesAvailable"}),[]);return(0,r.jsx)(n.Z,{topParentId:t,getBasekey:a,getItemTypes:i,getNoItemsMessage:o})}},85197:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var r=a(24246),s=a(16918),n=a(70060),i=a(94994),o=a(87985),l=a(6884),c=a(86808),u=a(4877),d=a(74066),v=a(65009),h=a.n(v),p=a(66560),m=a(57317),f=function(e){var t,a=e.parentId,i=e.collectionType,v=e.itemType,f=e.genre,b=(0,n.mb)({sortBy:[u.X.Random],sortOrder:[d.A.Ascending],includeItemTypes:[v],recursive:!0,fields:[l.h.PrimaryImageAspectRatio,l.h.MediaSourceCount,l.h.BasicSyncInfo],imageTypeLimit:1,enableImageTypes:[c._.Primary],limit:25,genreIds:f.Id?[f.Id]:void 0,enableTotalRecordCount:!1,parentId:null!=a?a:void 0}),g=b.isLoading,y=b.data;return g?(0,r.jsx)(o.Z,{}):(0,r.jsx)(m.Z,{sectionTitle:h()(f.Name),items:(null==y?void 0:y.Items)||[],url:(t=f,p.appRouter.getRouteUrl(t,{context:i,parentId:a})),cardOptions:{scalable:!0,overlayPlayButton:!0,showTitle:!0,centerText:!0,cardLayout:!1,shape:v===s.k.MusicAlbum?"overflowSquare":"overflowPortrait",showParentTitle:v===s.k.MusicAlbum,showYear:v!==s.k.MusicAlbum}})},b=function(){return b=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},b.apply(this,arguments)},g=function(e){var t,a,s=e.parentId,l=e.collectionType,c=e.itemType,u=(0,n.FS)(c,s),d=u.isLoading,v=u.data;return d?(0,r.jsx)(o.Z,{}):(0,r.jsx)(r.Fragment,{children:(null===(t=null==v?void 0:v.Items)||void 0===t?void 0:t.length)?null===(a=null==v?void 0:v.Items)||void 0===a?void 0:a.map((function(e){return(0,r.jsx)(f,{collectionType:l,parentId:s,itemType:c,genre:e},e.Id)})):(0,r.jsxs)("div",b({className:"noItemsMessage centerMessage"},{children:[(0,r.jsx)("h1",{children:i.ZP.translate("MessageNothingHere")}),(0,r.jsx)("p",{children:i.ZP.translate("MessageNoGenresAvailable")})]}))})},y=a(42634),w=function(e){var t=e.parentId;return(0,r.jsx)(g,{parentId:t,collectionType:y.y.Movies,itemType:s.k.Movie})}},76965:function(e,t,a){a.r(t);var r=a(24246),s=a(27378),n=a(42562);t.default=function(e){var t=e.parentId,a=(0,s.useCallback)((function(){return"movies"}),[]),i=(0,s.useCallback)((function(){return["Movie"]}),[]),o=(0,s.useCallback)((function(){return"MessageNoItemsAvailable"}),[]);return(0,r.jsx)(n.Z,{topParentId:t,isBtnShuffleEnabled:!0,getBasekey:a,getItemTypes:i,getNoItemsMessage:o})}},20788:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var r=a(24246),s=a(70060),n=a(94994),i=a(87985),o=a(12704),l=a(65009),c=a.n(l),u=a(57317),d=function(e){var t=e.recommendation,a=void 0===t?{}:t,s="";switch(a.RecommendationType){case o.WNr.SimilarToRecentlyPlayed:s=n.ZP.translate("RecommendationBecauseYouWatched",a.BaselineItemName);break;case o.WNr.SimilarToLikedItem:s=n.ZP.translate("RecommendationBecauseYouLike",a.BaselineItemName);break;case o.WNr.HasDirectorFromRecentlyPlayed:case o.WNr.HasLikedDirector:s=n.ZP.translate("RecommendationDirectedBy",a.BaselineItemName);break;case o.WNr.HasActorFromRecentlyPlayed:case o.WNr.HasLikedActor:s=n.ZP.translate("RecommendationStarring",a.BaselineItemName)}return(0,r.jsx)(u.Z,{sectionTitle:c()(s),items:a.Items||[],cardOptions:{shape:"overflowPortrait",showYear:!0,scalable:!0,overlayPlayButton:!0,showTitle:!0,centerText:!0,cardLayout:!1}})},v=a(16918),h=a(4877),p=a(74066),m=a(60934),f=a(66560),b=function(){return b=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},b.apply(this,arguments)},g=function(e){var t=e.parentId,a=e.section,o=(0,s.rF)(a,t),l=o.isLoading,c=o.data;return l?(0,r.jsx)(i.Z,{}):(0,r.jsx)(u.Z,{sectionTitle:n.ZP.translate(a.name),items:c||[],url:f.appRouter.getRouteUrl("list",{serverId:window.ApiClient.serverId(),itemTypes:a.type,parentId:t}),cardOptions:b({},a.cardOptions)})},y=a(59140),w=function(){return[{name:"HeaderContinueWatching",viewType:y.M.ResumeItems,type:"Movie",view:y.X.ContinueWatchingMovies,parametersOptions:{includeItemTypes:[v.k.Movie]},cardOptions:{scalable:!0,overlayPlayButton:!0,showTitle:!0,centerText:!0,cardLayout:!1,preferThumb:!0,shape:"overflowBackdrop",showYear:!0}},{name:"HeaderLatestMovies",viewType:y.M.LatestMedia,type:"Movie",view:y.X.LatestMovies,parametersOptions:{includeItemTypes:[v.k.Movie]},cardOptions:{scalable:!0,overlayPlayButton:!0,showTitle:!0,centerText:!0,cardLayout:!1,shape:"overflowPortrait",showYear:!0}},{name:"HeaderContinueWatching",viewType:y.M.ResumeItems,type:"Episode",view:y.X.ContinueWatchingEpisode,parametersOptions:{includeItemTypes:[v.k.Episode]},cardOptions:{scalable:!0,overlayPlayButton:!0,showTitle:!0,centerText:!0,cardLayout:!1,shape:"overflowBackdrop",preferThumb:!0,inheritThumb:!m.useEpisodeImagesInNextUpAndResume(void 0),showYear:!0}},{name:"HeaderLatestEpisodes",viewType:y.M.LatestMedia,type:"Episode",view:y.X.LatestEpisode,parametersOptions:{includeItemTypes:[v.k.Episode]},cardOptions:{scalable:!0,overlayPlayButton:!0,showTitle:!0,centerText:!0,cardLayout:!1,shape:"overflowBackdrop",preferThumb:!0,showSeriesYear:!0,showParentTitle:!0,overlayText:!1,showUnplayedIndicator:!1,showChildCountIndicator:!0,lazy:!0,lines:2}},{name:"NextUp",viewType:y.M.NextUp,type:"nextup",view:y.X.NextUp,cardOptions:{scalable:!0,overlayPlayButton:!0,showTitle:!0,centerText:!0,cardLayout:!1,shape:"overflowBackdrop",preferThumb:!0,inheritThumb:!m.useEpisodeImagesInNextUpAndResume(void 0),showParentTitle:!0,overlayText:!1}},{name:"HeaderLatestMusic",viewType:y.M.LatestMedia,type:"Audio",view:y.X.LatestMusic,parametersOptions:{includeItemTypes:[v.k.Audio]},cardOptions:{showUnplayedIndicator:!1,shape:"overflowSquare",showTitle:!0,showParentTitle:!0,lazy:!0,centerText:!0,overlayPlayButton:!0,cardLayout:!1,coverImage:!0}},{name:"HeaderRecentlyPlayed",type:"Audio",view:y.X.RecentlyPlayedMusic,parametersOptions:{sortBy:[h.X.DatePlayed],sortOrder:[p.A.Descending],includeItemTypes:[v.k.Audio]},cardOptions:{showUnplayedIndicator:!1,shape:"overflowSquare",showTitle:!0,showParentTitle:!0,action:"instantmix",lazy:!0,centerText:!0,overlayMoreButton:!0,cardLayout:!1,coverImage:!0}},{name:"HeaderFrequentlyPlayed",type:"Audio",view:y.X.FrequentlyPlayedMusic,parametersOptions:{sortBy:[h.X.PlayCount],sortOrder:[p.A.Descending],includeItemTypes:[v.k.Audio]},cardOptions:{showUnplayedIndicator:!1,shape:"overflowSquare",showTitle:!0,showParentTitle:!0,action:"instantmix",lazy:!0,centerText:!0,overlayMoreButton:!0,cardLayout:!1,coverImage:!0}}]},x=function(e){var t=e.parentId,a=e.sectionsView,s=w();return(0,r.jsx)(r.Fragment,{children:s.filter((function(e){return a.includes(e.view)})).map((function(e){return(0,r.jsx)(g,{parentId:t,section:e},e.view)}))})},T=function(){return T=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},T.apply(this,arguments)},P=function(e){var t=e.parentId,a=(0,s.no)(t),o=a.isLoading,l=a.data;return o?(0,r.jsx)(i.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{parentId:t,sectionsView:[y.X.ContinueWatchingMovies,y.X.LatestMovies]}),(null==l?void 0:l.length)?l.map((function(e,t){return(0,r.jsx)(d,{recommendation:e},"".concat(e.CategoryId,"-").concat(t))})):(0,r.jsxs)("div",T({className:"noItemsMessage centerMessage"},{children:[(0,r.jsx)("h1",{children:n.ZP.translate("MessageNothingHere")}),(0,r.jsx)("p",{children:n.ZP.translate("MessageNoMovieSuggestionsAvailable")})]}))]})}},22526:function(e,t,a){a.r(t);var r=a(24246),s=a(27378),n=a(42562);t.default=function(e){var t=e.parentId,a=(0,s.useCallback)((function(){return"trailers"}),[]),i=(0,s.useCallback)((function(){return["Trailer"]}),[]),o=(0,s.useCallback)((function(){return"MessageNoTrailersFound"}),[]);return(0,r.jsx)(n.Z,{topParentId:t,getBasekey:a,getItemTypes:i,getNoItemsMessage:o})}},47298:function(e,t,a){a.r(t);var r=a(24246),s=(a(24432),a(82427),a(21694),a(38228),a(22910)),n=a(27851),i=a(6055),o=a(2375),l=a(78886),c=a(8271),u=a(85197),d=a(76965),v=a(20788),h=a(22526),p=function(){return p=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},p.apply(this,arguments)};t.default=function(){var e=(0,s.TH)(),t=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var r,s,n=a.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=n.next()).done;)i.push(r.value)}catch(e){s={error:e}}finally{try{r&&!r.done&&(a=n.return)&&a.call(n)}finally{if(s)throw s.error}}return i}((0,n.lr)(),1)[0],a=t.get("topParentId"),m=t.get("tab"),f=null!==m?parseInt(m,10):(0,o.Yr)(e.pathname,a);return(0,r.jsx)(i.Z,p({id:"moviesPage",className:"mainAnimatedPage libraryPage backdropPage collectionEditorPage pageWithAbsoluteTabs withTabs",backDropType:"movie"},{children:function(e){if(null==e)throw new Error("index cannot be null");var t;switch(e){case 1:t=(0,r.jsx)(v.default,{parentId:a});break;case 2:t=(0,r.jsx)(h.default,{parentId:a});break;case 3:t=(0,r.jsx)(c.default,{parentId:a});break;case 4:t=(0,r.jsx)(l.default,{parentId:a});break;case 5:t=(0,r.jsx)(u.default,{parentId:a});break;default:t=(0,r.jsx)(d.default,{parentId:a})}return t}(f)}))}},6055:function(e,t,a){var r=a(24246),s=a(27378),n=a(53424),i=function(){return i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},i.apply(this,arguments)};t.Z=function(e){var t=e.children,a=e.id,o=e.className,l=void 0===o?"":o,c=e.title,u=e.isBackButtonEnabled,d=void 0===u||u,v=e.isMenuButtonEnabled,h=void 0!==v&&v,p=e.isNowPlayingBarEnabled,m=void 0===p||p,f=e.isThemeMediaSupported,b=void 0!==f&&f,g=e.backDropType,y=(0,s.useRef)(null);return(0,s.useEffect)((function(){n.Z.hideView()}),[]),(0,s.useEffect)((function(){var e,t,a,r,s={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:m,supportsThemeMedia:b}}};null===(e=y.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",s)),null===(t=y.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",s)),null===(a=y.current)||void 0===a||a.dispatchEvent(new CustomEvent("viewshow",s)),null===(r=y.current)||void 0===r||r.dispatchEvent(new CustomEvent("pageshow",s))}),[y,m,b]),(0,r.jsx)("div",i({ref:y,id:a,"data-role":"page",className:"page ".concat(l),"data-title":c,"data-backbutton":d,"data-menubutton":h,"data-backdroptype":g},{children:t}))}},42634:function(e,t,a){var r;a.d(t,{y:function(){return r}}),function(e){e.Movies="movies",e.TvShows="tvshows",e.Music="music",e.MusicVideos="musicvideos",e.Trailers="trailers",e.HomeVideos="homevideos",e.BoxSets="boxsets",e.Books="books",e.Photos="photos",e.LiveTv="livetv",e.Playlists="playlists",e.Folders="folders"}(r||(r={}))},40154:function(e,t,a){var r;a.d(t,{$:function(){return r}}),function(e){e.Albums="albums",e.AlbumArtists="albumartists",e.Artists="artists",e.Channels="channels",e.Collections="collections",e.Episodes="episodes",e.Favorites="favorites",e.Genres="genres",e.Guide="guide",e.Movies="movies",e.Networks="networks",e.Playlists="playlists",e.Programs="programs",e.Recordings="recordings",e.Schedule="schedule",e.Series="series",e.Shows="shows",e.Songs="songs",e.Suggestions="suggestions",e.Trailers="trailers",e.Upcoming="upcoming"}(r||(r={}))}}]);