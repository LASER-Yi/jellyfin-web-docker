(self.webpackChunk=self.webpackChunk||[]).push([[61353],{4608:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(32081),n(27471);var a=n(57366),r=n(30325),s=n(60934),i=n(58517),o=n(28540),l=n(61570),d=n(72365),c=n(98301),u=n(71487),m=n(67345),f=n(94994),p=(n(82427),n(21694),n(38228),n(60635));function y(){var e=d.ZP.getWindowSize().innerWidth;return e>=1920?9:e>=1200?12:e>=1e3?10:8}function h(){return!r.Z.desktop}function g(){return h()?"overflowSquare":"square"}function v(){return[{name:f.ZP.translate("Albums")},{name:f.ZP.translate("Suggestions")},{name:f.ZP.translate("HeaderAlbumArtists")},{name:f.ZP.translate("Artists")},{name:f.ZP.translate("Playlists")},{name:f.ZP.translate("Songs")},{name:f.ZP.translate("Genres")}]}function I(e,t){var d=this;function I(t){var n,a;n=e,a=parseInt(t.detail.selectedTabIndex),P(n,a,(function(e){-1==L.indexOf(a)&&e.preRender&&e.preRender()}))}function b(t){var n,a;n=e,a=parseInt(t.detail.selectedTabIndex),w=a,P(n,a,(function(e){-1==L.indexOf(a)&&(L.push(a),e.renderTab())}))}function T(){return e.querySelectorAll(".pageTabContent")}var P=function(a,r,s){var i;switch(r){case 0:i="musicalbums";break;case 1:i="musicrecommended";break;case 2:case 3:i="musicartists";break;case 4:i="musicplaylists";break;case 5:i="songs";break;case 6:i="musicgenres"}n(97181)("./".concat(i)).then((function(n){var a,i=n.default;1==r&&(a=e.querySelector(".pageTabContent[data-index='"+r+"']"),d.tabContent=a);var o=A[r];o||(a=e.querySelector(".pageTabContent[data-index='"+r+"']"),o=1===r?d:new i(e,t,a),2==r?o.mode="albumartists":3==r&&(o.mode="artists"),A[r]=o,o.initTab&&o.initTab()),s(o)}))};function C(e){"search"===e.detail.command&&(e.preventDefault(),p.ZP.navigate("search.html?collectionType=music&parentId="+t.topParentId))}var w=parseInt(t.tab||function(e){switch(s.get("landing-"+e)){case"suggestions":return 1;case"albumartists":return 2;case"artists":return 3;case"playlists":return 4;case"songs":return 5;case"genres":return 6;default:return 0}}(t.topParentId));this.initTab=function(){for(var t,n=e.querySelector(".pageTabContent[data-index='1']").querySelectorAll(".itemsContainer"),s=0,i=n.length;s<i;s++)t=n[s],a.Z.mobile?(t.classList.add("hiddenScrollX"),r.Z.tv&&t.classList.add("smoothScrollX"),t.classList.add("scrollX"),t.classList.remove("vertical-wrap")):(t.classList.remove("hiddenScrollX"),t.classList.remove("smoothScrollX"),t.classList.remove("scrollX"),t.classList.add("vertical-wrap"))},this.renderTab=function(){var a,r;o.ZP.show(),a=e.querySelector(".pageTabContent[data-index='1']"),r=t.topParentId,console.debug("loadSuggestionsTab"),function(e,t){o.ZP.show();var a=ApiClient.getCurrentUserId(),r={IncludeItemTypes:"Audio",Limit:h()?3*y():2*y(),Fields:"PrimaryImageAspectRatio,BasicSyncInfo",ParentId:t,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getJSON(ApiClient.getUrl("Users/"+a+"/Items/Latest",r)).then((function(t){var a=e.querySelector("#recentlyAddedSongs");a.innerHTML=l.default.getCardsHtml({items:t,showUnplayedIndicator:!1,showLatestItemsPopup:!1,shape:g(),showTitle:!0,showParentTitle:!0,lazy:!0,centerText:!0,overlayPlayButton:!0,allowBottomPadding:!h(),cardLayout:!1,coverImage:!0}),c.default.lazyChildren(a),o.ZP.hide(),Promise.resolve().then(n.bind(n,87680)).then((function(t){t.default.autoFocus(e)}))}))}(a,r),function(e,t){var n={SortBy:"DatePlayed",SortOrder:"Descending",IncludeItemTypes:"Audio",Limit:y(),Recursive:!0,Fields:"PrimaryImageAspectRatio,AudioInfo",Filters:"IsPlayed",ParentId:t,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getItems(ApiClient.getCurrentUserId(),n).then((function(t){var n=e.querySelector("#recentlyPlayed");t.Items.length?n.classList.remove("hide"):n.classList.add("hide");var a=n.querySelector(".itemsContainer");a.innerHTML=l.default.getCardsHtml({items:t.Items,showUnplayedIndicator:!1,shape:g(),showTitle:!0,showParentTitle:!0,action:"instantmix",lazy:!0,centerText:!0,overlayMoreButton:!0,allowBottomPadding:!h(),cardLayout:!1,coverImage:!0}),c.default.lazyChildren(a)}))}(a,r),function(e,t){var n={SortBy:"PlayCount",SortOrder:"Descending",IncludeItemTypes:"Audio",Limit:y(),Recursive:!0,Fields:"PrimaryImageAspectRatio,AudioInfo",Filters:"IsPlayed",ParentId:t,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getItems(ApiClient.getCurrentUserId(),n).then((function(t){var n=e.querySelector("#topPlayed");t.Items.length?n.classList.remove("hide"):n.classList.add("hide");var a=n.querySelector(".itemsContainer");a.innerHTML=l.default.getCardsHtml({items:t.Items,showUnplayedIndicator:!1,shape:g(),showTitle:!0,showParentTitle:!0,action:"instantmix",lazy:!0,centerText:!0,overlayMoreButton:!0,allowBottomPadding:!h(),cardLayout:!1,coverImage:!0}),c.default.lazyChildren(a)}))}(a,r),n.e(76709).then(n.bind(n,76709)).then((function(e){e.default.render(a,ApiClient.getCurrentUserId(),r,["favoriteArtists","favoriteAlbums","favoriteSongs"])}))};var A=[],L=[];e.addEventListener("viewshow",(function(){if(m.setTabs(e,w,v,T,I,b),!e.getAttribute("data-title")){var n=t.topParentId;n?ApiClient.getItem(ApiClient.getCurrentUserId(),n).then((function(t){e.setAttribute("data-title",t.Name),u.Z.setTitle(t.Name)})):(e.setAttribute("data-title",f.ZP.translate("TabMusic")),u.Z.setTitle(f.ZP.translate("TabMusic")))}i.default.on(window,C)})),e.addEventListener("viewbeforehide",(function(){i.default.off(window,C)})),e.addEventListener("viewdestroy",(function(){A.forEach((function(e){e.destroy&&e.destroy()}))}))}},97181:function(e,t,n){var a={"./music.html":[91693,9107],"./musicalbums":[8718,92970],"./musicalbums.js":[8718,92970],"./musicartists":[23504,2642],"./musicartists.js":[23504,2642],"./musicgenres":[43416,55523],"./musicgenres.js":[43416,55523],"./musicplaylists":[43208,39997],"./musicplaylists.js":[43208,39997],"./musicrecommended":[4608],"./musicrecommended.js":[4608],"./songs":[25054,75311],"./songs.js":[25054,75311]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=97181,e.exports=r}}]);