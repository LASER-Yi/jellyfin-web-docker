(self.webpackChunk=self.webpackChunk||[]).push([[7578],{96606:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}}),n(72410),n(15610),n(52077),n(25901),n(92189),n(91047),n(5769),n(61013),n(63238),n(61418),n(17460),n(14078),n(32081),n(27471);var a=n(65009),r=n.n(a),i=n(47005),o=n(78695),s=n(12392),l=n(28978),c=n(3319),d=n(27282),u=n(61097),m=n(83094),f=n(21361),v=n(53218),y=n(33942),p=(n(69523),n(32420),n(87861),n(78066),n(93586));function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function b(){return!o.Z.desktop}function g(){return b()?"overflowPortrait":"portrait"}function I(e){var t="",n="";switch(e.RecommendationType){case"SimilarToRecentlyPlayed":n=y.ZP.translate("RecommendationBecauseYouWatched",e.BaselineItemName);break;case"SimilarToLikedItem":n=y.ZP.translate("RecommendationBecauseYouLike",e.BaselineItemName);break;case"HasDirectorFromRecentlyPlayed":case"HasLikedDirector":n=y.ZP.translate("RecommendationDirectedBy",e.BaselineItemName);break;case"HasActorFromRecentlyPlayed":case"HasLikedActor":n=y.ZP.translate("RecommendationStarring",e.BaselineItemName)}return t+='<div class="verticalSection">',t+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+r()(n)+"</h2>",b()?(t+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-mousewheel="false" data-centerfocus="true">',t+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">'):t+='<div is="emby-itemscontainer" class="itemsContainer focuscontainer-x padded-left padded-right vertical-wrap">',t+=u.default.getCardsHtml(e.Items,{shape:g(),scalable:!0,overlayPlayButton:!0,allowBottomPadding:!0,showTitle:!0,showYear:!0,centerText:!0}),b()&&(t+="</div>"),(t+="</div>")+"</div>"}function T(e){Promise.resolve().then(n.bind(n,6610)).then((function(t){t.default.autoFocus(e)}))}function S(){return[{name:y.ZP.translate("Movies")},{name:y.ZP.translate("Suggestions")},{name:y.ZP.translate("Trailers")},{name:y.ZP.translate("Favorites")},{name:y.ZP.translate("Collections")},{name:y.ZP.translate("Genres")}]}function P(e,t){var a=this;function r(t){var n,a;n=e,a=parseInt(t.detail.selectedTabIndex),C(n,a,(function(e){-1==R.indexOf(a)&&e.preRender&&e.preRender()}))}function P(t){var n,a=parseInt(t.detail.selectedTabIndex);B=n=a,C(e,n,(function(e){-1==R.indexOf(n)&&(R.push(n),e.renderTab())}))}function w(){return e.querySelectorAll(".pageTabContent")}var C=function(r,i,o){var s="";switch(i){case 0:case 3:s="movies";break;case 1:s="moviesrecommended.js";break;case 2:s="movietrailers";break;case 4:s="moviecollections";break;case 5:s="moviegenres"}n(69576)("./".concat(s)).then((function(n){var r,s=n.default;i===k&&(r=e.querySelector(".pageTabContent[data-index='"+i+"']"),a.tabContent=r);var l=Z[i];l||(r=e.querySelector(".pageTabContent[data-index='"+i+"']"),l=i===k?a:0==i||3==i?new s(e,t,r,{mode:i?"favorites":"movies"}):new s(e,t,r),Z[i]=l,l.initTab&&l.initTab()),o(l)}))};function L(e,t){t.NowPlayingItem&&"Video"==t.NowPlayingItem.MediaType&&(R=[],d.getTabsElement().triggerTabChange())}function A(e){"search"===e.detail.command&&(e.preventDefault(),p.ZP.navigate("search.html?collectionType=movies&parentId="+t.topParentId))}var B=parseInt(t.tab||function(e){switch(l.get("landing-"+e)){case"suggestions":return 1;case"favorites":return 3;case"collections":return 4;case"genres":return 5;default:return 0}}(t.topParentId)),k=1;this.initTab=function(){!function(e,t){var n,a,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}(t.querySelectorAll(".itemsContainer"));try{for(r.s();!(n=r.n()).done;)a=n.value,b()?(a.classList.add("hiddenScrollX"),o.Z.tv&&(a.classList.add("smoothScrollX"),a.classList.add("padded-top-focusscale"),a.classList.add("padded-bottom-focusscale")),a.classList.add("scrollX"),a.classList.remove("vertical-wrap")):(a.classList.remove("hiddenScrollX"),a.classList.remove("smoothScrollX"),a.classList.remove("scrollX"),a.classList.add("vertical-wrap"))}catch(e){r.e(e)}finally{r.f()}}(0,e.querySelector(".pageTabContent[data-index='"+k+"']"))},this.renderTab=function(){var n=e.querySelector(".pageTabContent[data-index='"+k+"']");!function(e,t,n){var a=t.topParentId,r=ApiClient.getCurrentUserId();!function(e,t,n){var a={SortBy:"DatePlayed",SortOrder:"Descending",IncludeItemTypes:"Movie",Filters:"IsResumable",Limit:m.ZP.getWindowSize().innerWidth>=1600?5:3,Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",CollapseBoxSetItems:!1,ParentId:n,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getItems(t,a).then((function(t){t.Items.length?e.querySelector("#resumableSection").classList.remove("hide"):e.querySelector("#resumableSection").classList.add("hide");var n=!b(),a=e.querySelector("#resumableItems");u.default.buildCards(t.Items,{itemsContainer:a,preferThumb:!0,shape:b()?"overflowBackdrop":"backdrop",scalable:!0,overlayPlayButton:!0,allowBottomPadding:n,cardLayout:!1,showTitle:!0,showYear:!0,centerText:!0}),T(e)}))}(n,r,a),function(e,t,n){var a={IncludeItemTypes:"Movie",Limit:18,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",ParentId:n,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getJSON(ApiClient.getUrl("Users/"+t+"/Items/Latest",a)).then((function(t){var n=!b(),a=e.querySelector("#recentlyAddedItems");u.default.buildCards(t,{itemsContainer:a,shape:g(),scalable:!0,overlayPlayButton:!0,allowBottomPadding:n,showTitle:!0,showYear:!0,centerText:!0}),T(e)}))}(n,r,a),function(e,t){var n=m.ZP.getWindowSize().innerWidth,a=5;n>=1600?a=8:n>=1200&&(a=6);var r=ApiClient.getUrl("Movies/Recommendations",{userId:t,categoryLimit:6,ItemLimit:a,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb"});ApiClient.getJSON(r).then((function(t){if(!t.length)return e.querySelector(".noItemsMessage").classList.remove("hide"),void(e.querySelector(".recommendations").innerHTML="");var n=t.map(I).join("");e.querySelector(".noItemsMessage").classList.add("hide");var a=e.querySelector(".recommendations");a.innerHTML=n,f.default.lazyChildren(a),T(e)}))}(n,r)}(0,t,n)};var Z=[],R=[];e.addEventListener("viewshow",(function(){if(d.setTabs(e,B,S,w,r,P),!e.getAttribute("data-title")){var n=t.topParentId;n?ApiClient.getItem(ApiClient.getCurrentUserId(),n).then((function(t){e.setAttribute("data-title",t.Name),c.Z.setTitle(t.Name)})):(e.setAttribute("data-title",y.ZP.translate("Movies")),c.Z.setTitle(y.ZP.translate("Movies")))}i.Events.on(v.O,"playbackstop",L),s.default.on(window,A)})),e.addEventListener("viewbeforehide",(function(){s.default.off(window,A)}));for(var x=0,M=Z;x<M.length;x++){var q=M[x];q.destroy&&q.destroy()}}},69576:function(e,t,n){var a={"./moviecollections":[48850,294,6056,2831],"./moviecollections.js":[48850,294,6056,2831],"./moviegenres":[40664,1575],"./moviegenres.js":[40664,1575],"./movies":[32109,294,6056,7488],"./movies.html":[72839,7988],"./movies.js":[32109,294,6056,7488],"./moviesrecommended":[96606],"./moviesrecommended.js":[96606],"./movietrailers":[21297,294,6056,3479],"./movietrailers.js":[21297,294,6056,3479]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=69576,e.exports=r}}]);