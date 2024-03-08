/*! For license information please see movies-moviecollections.957bf3fb5a8b36209f87.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[42831,26882,15439],{90330:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}}),r(13227),r(81414),r(37666),r(14011),r(11431),r(88646),r(54134),r(91270),r(59139),r(56187),r(38690),r(89228);var n=r(84597),i=r(92609),a=r(81038),s=r(63873),o=r(61570),l=r(60934),d=r(94994);function u(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t,c){var f=this;function h(){var e=v(),r=g[e];return r||(r=g[e]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"BoxSet",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0},view:l.getSavedView(e)||"Poster"},l.libraryPageSize()>0&&(r.query.Limit=l.libraryPageSize()),r.query.ParentId=t.topParentId,l.loadQuerySettings(e,r.query)),r}function m(){return h().query}function v(){return t.topParentId+"-moviecollections"}var y=function(){var e=f.getCurrentViewStyle(),t=c.querySelector(".itemsContainer");"List"==e?(t.classList.add("vertical-list"),t.classList.remove("vertical-wrap")):(t.classList.remove("vertical-list"),t.classList.add("vertical-wrap")),t.innerHTML=""},b=function e(t){n.ZP.show(),p=!0;var h=m();ApiClient.getItems(ApiClient.getCurrentUserId(),h).then((function(m){function y(){p||(l.libraryPageSize()>0&&(h.StartIndex+=h.Limit),e(c))}function b(){p||(l.libraryPageSize()>0&&(h.StartIndex=Math.max(0,h.StartIndex-h.Limit)),e(c))}var g;window.scrollTo(0,0);var S=i.ZP.getQueryPagingHtml({startIndex:h.StartIndex,limit:h.Limit,totalRecordCount:m.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),P=f.getCurrentViewStyle();g="Thumb"==P?o.default.getCardsHtml({items:m.Items,shape:"backdrop",preferThumb:!0,context:"movies",overlayPlayButton:!0,centerText:!0,showTitle:!0}):"ThumbCard"==P?o.default.getCardsHtml({items:m.Items,shape:"backdrop",preferThumb:!0,context:"movies",lazy:!0,cardLayout:!0,showTitle:!0}):"Banner"==P?o.default.getCardsHtml({items:m.Items,shape:"banner",preferBanner:!0,context:"movies",lazy:!0}):"List"==P?s.Z.getListViewHtml({items:m.Items,context:"movies",sortBy:h.SortBy}):"PosterCard"==P?o.default.getCardsHtml({items:m.Items,shape:"auto",context:"movies",showTitle:!0,centerText:!1,cardLayout:!0}):o.default.getCardsHtml({items:m.Items,shape:"auto",context:"movies",centerText:!0,overlayPlayButton:!0,showTitle:!0});var I,w=c.querySelectorAll(".paging"),C=u(w);try{for(C.s();!(I=C.n()).done;)I.value.innerHTML=S}catch(e){C.e(e)}finally{C.f()}var L,T=u(w=c.querySelectorAll(".btnNextPage"));try{for(T.s();!(L=T.n()).done;)L.value.addEventListener("click",y)}catch(e){T.e(e)}finally{T.f()}var x,A=u(w=c.querySelectorAll(".btnPreviousPage"));try{for(A.s();!(x=A.n()).done;)x.value.addEventListener("click",b)}catch(e){A.e(e)}finally{A.f()}m.Items.length||(g="",g+='<div class="noItemsMessage centerMessage">',g+="<h1>"+d.ZP.translate("MessageNothingHere")+"</h1>",g+="<p>"+d.ZP.translate("MessageNoCollectionsAvailable")+"</p>",g+="</div>");var k=c.querySelector(".itemsContainer");k.innerHTML=g,a.default.lazyChildren(k),l.saveQuerySettings(v(),h),n.ZP.hide(),p=!1,Promise.resolve().then(r.bind(r,87680)).then((function(e){e.default.autoFocus(t)}))}))},g={},p=!1;this.getCurrentViewStyle=function(){return h().view},function(e){e.querySelector(".btnSort").addEventListener("click",(function(t){i.ZP.showSortMenu({items:[{name:d.ZP.translate("Name"),id:"SortName"},{name:d.ZP.translate("OptionImdbRating"),id:"CommunityRating,SortName"},{name:d.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:d.ZP.translate("OptionParentalRating"),id:"OfficialRating,SortName"},{name:d.ZP.translate("OptionReleaseDate"),id:"PremiereDate,SortName"}],callback:function(){m().StartIndex=0,b(e)},query:m(),button:t.target})}));var t=e.querySelector(".btnSelectView");t.addEventListener("click",(function(e){i.ZP.showLayoutMenu(e.target,f.getCurrentViewStyle(),"List,Poster,PosterCard,Thumb,ThumbCard".split(","))})),t.addEventListener("layoutchange",(function(t){var r=t.detail.viewStyle;h().view=r,l.saveViewSetting(v(),r),m().StartIndex=0,y(),b(e)})),e.querySelector(".btnNewCollection").addEventListener("click",(function(){r.e(19449).then(r.bind(r,19449)).then((function(e){var t=e.default,r=ApiClient.serverInfo().Id;(new t).show({items:[],serverId:r})}))}))}(c),y(),this.renderTab=function(){b(c)}}r(82427)},82427:function(e,t,r){"use strict";r(13227),r(81414),r(37666),r(14011),r(11431),r(44901),r(54112);var n=r(61008),i=r(58517),a=r(48957),s=r(81038),o=r(30325),l=r(57366),d=r(72365),u=r(84597),c=r(34643),f=r(44038),h=r(67561),m=(r(67752),r(18613)),v=r(28172),y=Object.create(HTMLDivElement.prototype);function b(e){var t=this,r=t.multiSelect;!1!==(null==r?void 0:r.onContainerClick.call(t,e))&&n.ZP.onClick.call(t,e)}function g(e){return e.preventDefault(),e.stopPropagation(),!1}function p(e){var t=e.target,r=d.ZP.parentWithAttribute(t,"data-id");if(null!=r&&r.getAttribute("data-serverid"))return i.default.handleCommand("menu",{sourceElement:r}),e.preventDefault(),e.stopPropagation(),!1}function S(e,t,n){var i=this;Promise.all([r.e(28621),r.e(61570),r.e(26882)]).then(r.bind(r,61570)).then((function(e){e.onUserDataChanged(n,i)}));var a=P(i);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||i.notifyRefreshNeeded()}function P(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function I(e,t,n){var i=this;if(-1===P(i).indexOf("timers")){var a=n.ProgramId,s=n.Id;Promise.all([r.e(28621),r.e(61570),r.e(26882)]).then(r.bind(r,61570)).then((function(e){e.onTimerCreated(a,s,i)}))}else i.notifyRefreshNeeded()}function w(){-1!==P(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function C(e,t,n){var i=this;-1===P(i).indexOf("timers")?Promise.all([r.e(28621),r.e(61570),r.e(26882)]).then(r.bind(r,61570)).then((function(e){e.onTimerCancelled(n.Id,i)})):i.notifyRefreshNeeded()}function L(e,t,n){var i=this;-1===P(i).indexOf("seriestimers")?Promise.all([r.e(28621),r.e(61570),r.e(26882)]).then(r.bind(r,61570)).then((function(e){e.onSeriesTimerCancelled(n.Id,i)})):i.notifyRefreshNeeded()}function T(e,t,r){var n=this,i=P(n);if(-1===i.indexOf("seriestimers")&&-1===i.indexOf("timers")){var a=r.ItemsAdded||[],s=r.ItemsRemoved||[];if(a.length||s.length){var o=n.getAttribute("data-parentid");if(o){var l=r.FoldersAddedTo||[],d=r.FoldersRemovedFrom||[],u=r.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===d.indexOf(o)&&-1===u.indexOf(o))return}n.notifyRefreshNeeded()}}}function x(e,t){var r,n=this,i=t.state,a=P(n);if(i.NowPlayingItem&&"Video"===i.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void n.notifyRefreshNeeded(!0)}else if("Audio"===(null===(r=i.NowPlayingItem)||void 0===r?void 0:r.MediaType)&&-1!==a.indexOf("audioplayback"))return void n.notifyRefreshNeeded(!0)}function A(e,t,r,n){var i=r.bind(e);n=n||f.default,h.Z.on(n,t,i),e["event_"+t]=i}function k(e,t,r){var n=e["event_"+t];n&&(r=r||f.default,h.Z.off(r,t,n),e["event_"+t]=null)}function O(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function Z(e,t){O(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function R(e){var t=e.Items||e,r=this.parentContainer;r&&(t.length?r.classList.remove("hide"):r.classList.add("hide"));var n,i,a=document.activeElement;this.contains(a)&&(i=!0,n=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),i&&function(e,t){if(t){var r=e.querySelector('[data-id="'+t+'"]');if(r)try{return void c.Z.focus(r)}catch(e){console.error(e)}}c.Z.autoFocus(e)}(this,n),Z(this),this.afterRefresh&&this.afterRefresh(e)}y.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var n=this;r.e(52943).then(r.bind(r,8156)).then((function(e){var t=e.default;n.multiSelect=new t({container:n,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},y.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var r=this;r.sortable=new v.ZP(r,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var r=e.item,n=e.newIndex,i=r.getAttribute("data-playlistitemid"),a=r.getAttribute("data-playlistid");if(a){var s=r.getAttribute("data-serverid"),o=m.Z.getApiClient(s);u.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+a+"/Items/"+i+"/Move/"+n),type:"POST"}).then((function(){u.ZP.hide()}),(function(){u.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;r.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:n,playlistItemId:i},bubbles:!0,cancelable:!1}))}}(e,r)}})}}else t&&(t.destroy(),this.sortable=null)},y.createdCallback=function(){this.classList.add("itemsContainer")},y.attachedCallback=function(){this.addEventListener("click",b),l.Z.touch?this.addEventListener("contextmenu",g):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",p),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),n.ZP.on(this,{click:!1}),A(this,"UserDataChanged",S),A(this,"TimerCreated",I),A(this,"SeriesTimerCreated",w),A(this,"TimerCancelled",C),A(this,"SeriesTimerCancelled",L),A(this,"LibraryChanged",T),A(this,"playbackstop",x,a.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},y.detachedCallback=function(){O(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",b),this.removeEventListener("contextmenu",p),this.removeEventListener("contextmenu",g),n.ZP.off(this,{click:!1}),k(this,"UserDataChanged"),k(this,"TimerCreated"),k(this,"SeriesTimerCreated"),k(this,"TimerCancelled"),k(this,"SeriesTimerCancelled"),k(this,"LibraryChanged"),k(this,"playbackstop",a.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},y.pause=function(){O(this,!0),this.paused=!0},y.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var r=t-(new Date).getTime();r>0&&!this.needsRefresh?Z(this,r):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},y.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(R.bind(this))):Promise.resolve()},y.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:y,extends:"div"})},92609:function(e,t,r){"use strict";r(56187),r(38690),r(89228),r(88646),r(54134),r(91270),r(13227),r(96626),r(81414),r(37666),r(14011),r(11431),r(59139),r(86028);var n=r(94994);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a={showLayoutMenu:function(e,t,i){var a=!0;i||(a=!1,i=(i=e.getAttribute("data-layouts"))?i.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var s=i.map((function(e){return{name:n.ZP.translate(e),id:e,selected:t==e}}));r.e(80454).then(r.bind(r,80454)).then((function(t){t.default.show({items:s,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),!a&&window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,i=e.totalRecordCount,a="",s=i?t+1:0,o=r?Math.min(t+r,i):i,l=r>0&&r<i;return a+='<div class="listPaging">',a+='<span style="vertical-align:middle;">',a+=n.ZP.translate("ListPaging",s,o,i),a+="</span>",(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(a+='<div style="display:inline-block;">',l&&(a+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',a+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=i?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(a+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(a+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(a+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),a+="</div>"),a+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,93355)),r.e(92144).then(r.bind(r,92144))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a,s,o=[],l=!0,d=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(o.push(n.value),o.length!==t);l=!0);}catch(e){d=!0,i=e}finally{try{if(!l&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function a(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function s(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var o=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});o.classList.add("ui-body-a"),o.classList.add("background-theme-a"),o.classList.add("formDialog");var l,d,u,c="";for(c+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',c+='<h2 style="margin:0 0 .5em;">',c+=n.ZP.translate("HeaderSortBy"),c+="</h2>",c+="<div>",l=0,d=e.items.length;l<d;l++){var f=e.items[l],h=f.id.replace(",","_");u=(e.query.SortBy||"").replace(",","_")==h?" checked":"",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+f.id+'" value="'+h+'" class="menuSortBy" '+u+" /><span>"+f.name+"</span></label>"}c+="</div>",c+='<h2 style="margin: 1em 0 .5em;">',c+=n.ZP.translate("HeaderSortOrder"),c+="</h2>",c+="<div>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(u="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(u="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",c+="</div>",c+="</div>",o.innerHTML=c,r.open(o);var m=o.querySelectorAll(".menuSortBy");for(l=0,d=m.length;l<d;l++)m[l].addEventListener("change",a);var v=o.querySelectorAll(".menuSortOrder");for(l=0,d=v.length;l<d;l++)v[l].addEventListener("change",s)}))}};window.LibraryBrowser=a,t.ZP=a},90005:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,a(r)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()}}]);