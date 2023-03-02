"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23064,7293,22976],{39873:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}}),r(5769),r(63238),r(61418),r(17460),r(14078);var i=r(28540),n=r(92609),a=r(98301),s=r(63873),o=r(61570),l=r(60934),d=r(94994),u=r(60635),c=r(81643);function h(e,t,h){function f(e){var r=v(e),i=S[r];return i||(i=S[r]={query:{SortBy:"SeriesSortName,SortName",SortOrder:"Ascending",IncludeItemTypes:"Episode",Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount",IsMissing:!1,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",StartIndex:0},view:n.ZP.getSavedView(r)||"Poster"},l.libraryPageSize()>0&&(i.query.Limit=l.libraryPageSize()),i.query.ParentId=t.topParentId,n.ZP.loadSavedQueryValues(r,i.query)),i}function m(e){return f(e).query}function v(e){return e.savedQueryKey||(e.savedQueryKey=n.ZP.getSavedQueryKey("episodes")),e.savedQueryKey}function y(){var e=g.getCurrentViewStyle(),t=h.querySelector(".itemsContainer");"List"==e?(t.classList.add("vertical-list"),t.classList.remove("vertical-wrap")):(t.classList.remove("vertical-list"),t.classList.add("vertical-wrap")),t.innerHTML=""}function b(e){i.ZP.show(),p=!0;var t=m(e);ApiClient.getItems(u.default.getCurrentUserId(),t).then((function(d){function u(){p||(l.libraryPageSize()>0&&(t.StartIndex+=t.Limit),b(h))}function c(){p||(l.libraryPageSize()>0&&(t.StartIndex=Math.max(0,t.StartIndex-t.Limit)),b(h))}var f;window.scrollTo(0,0);var m,y=n.ZP.getQueryPagingHtml({startIndex:t.StartIndex,limit:t.Limit,totalRecordCount:d.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),S=g.getCurrentViewStyle(),P=h.querySelector(".itemsContainer");f="List"==S?s.Z.getListViewHtml({items:d.Items,sortBy:t.SortBy,showParentTitle:!0}):"PosterCard"==S?o.default.getCardsHtml({items:d.Items,shape:"backdrop",showTitle:!0,showParentTitle:!0,scalable:!0,cardLayout:!0}):o.default.getCardsHtml({items:d.Items,shape:"backdrop",showTitle:!0,showParentTitle:!0,overlayText:!1,centerText:!0,scalable:!0,overlayPlayButton:!0});for(var w=0,I=(m=h.querySelectorAll(".paging")).length;w<I;w++)m[w].innerHTML=y;for(var C=0,L=(m=h.querySelectorAll(".btnNextPage")).length;C<L;C++)m[C].addEventListener("click",u);for(var T=0,k=(m=h.querySelectorAll(".btnPreviousPage")).length;T<k;T++)m[T].addEventListener("click",c);P.innerHTML=f,a.default.lazyChildren(P),n.ZP.saveQueryValues(v(e),t),i.ZP.hide(),p=!1,Promise.resolve().then(r.bind(r,87680)).then((function(t){t.default.autoFocus(e)}))}))}var g=this,S={},p=!1;g.showFilterMenu=function(){r.e(3751).then(r.bind(r,3751)).then((function(e){var t=new(0,e.default)({query:m(h),mode:"episodes",serverId:ApiClient.serverId()});c.Z.on(t,"filterchange",(function(){b(h)})),t.show()}))},g.getCurrentViewStyle=function(){return f(h).view},function(e){e.querySelector(".btnFilter").addEventListener("click",(function(){g.showFilterMenu()})),e.querySelector(".btnSort").addEventListener("click",(function(t){n.ZP.showSortMenu({items:[{name:d.ZP.translate("Name"),id:"SeriesSortName,SortName"},{name:d.ZP.translate("OptionTvdbRating"),id:"CommunityRating,SeriesSortName,SortName"},{name:d.ZP.translate("OptionDateAdded"),id:"DateCreated,SeriesSortName,SortName"},{name:d.ZP.translate("OptionPremiereDate"),id:"PremiereDate,SeriesSortName,SortName"},{name:d.ZP.translate("OptionDatePlayed"),id:"DatePlayed,SeriesSortName,SortName"},{name:d.ZP.translate("OptionParentalRating"),id:"OfficialRating,SeriesSortName,SortName"},{name:d.ZP.translate("OptionPlayCount"),id:"PlayCount,SeriesSortName,SortName"},{name:d.ZP.translate("Runtime"),id:"Runtime,SeriesSortName,SortName"}],callback:function(){b(e)},query:m(e),button:t.target})}));var t=e.querySelector(".btnSelectView");t.addEventListener("click",(function(e){n.ZP.showLayoutMenu(e.target,g.getCurrentViewStyle(),"List,Poster,PosterCard".split(","))})),t.addEventListener("layoutchange",(function(t){var r=t.detail.viewStyle;f(e).view=r,n.ZP.saveViewSetting(v(e),r),y(),b(e)}))}(h),y(),g.renderTab=function(){b(h)}}r(82427)},82427:function(e,t,r){r(5769),r(63238),r(61418),r(17460),r(14078),r(27471),r(32081);var i=r(61008),n=r(58517),a=r(48957),s=r(98301),o=r(30325),l=r(57366),d=r(72365),u=r(28540),c=r(34643),h=r(44038),f=r(81643),m=(r(67752),r(18613)),v=r(28172),y=Object.create(HTMLDivElement.prototype);function b(e){var t=this,r=t.multiSelect;!1!==(null==r?void 0:r.onContainerClick.call(t,e))&&i.ZP.onClick.call(t,e)}function g(e){return e.preventDefault(),e.stopPropagation(),!1}function S(e){var t=e.target,r=d.ZP.parentWithAttribute(t,"data-id");if(r&&r.getAttribute("data-serverid"))return n.default.handleCommand("menu",{sourceElement:r}),e.preventDefault(),e.stopPropagation(),!1}function p(e,t,i){var n=this;Promise.all([r.e(61570),r.e(7293)]).then(r.bind(r,61570)).then((function(e){e.onUserDataChanged(i,n)}));var a=P(n);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||n.notifyRefreshNeeded()}function P(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function w(e,t,i){var n=this;if(-1===P(n).indexOf("timers")){var a=i.ProgramId,s=i.Id;Promise.all([r.e(61570),r.e(7293)]).then(r.bind(r,61570)).then((function(e){e.onTimerCreated(a,s,n)}))}else n.notifyRefreshNeeded()}function I(){-1!==P(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function C(e,t,i){var n=this;-1===P(n).indexOf("timers")?Promise.all([r.e(61570),r.e(7293)]).then(r.bind(r,61570)).then((function(e){e.onTimerCancelled(i.Id,n)})):n.notifyRefreshNeeded()}function L(e,t,i){var n=this;-1===P(n).indexOf("seriestimers")?Promise.all([r.e(61570),r.e(7293)]).then(r.bind(r,61570)).then((function(e){e.onSeriesTimerCancelled(i.Id,n)})):n.notifyRefreshNeeded()}function T(e,t,r){var i=this,n=P(i);if(-1===n.indexOf("seriestimers")&&-1===n.indexOf("timers")){var a=r.ItemsAdded||[],s=r.ItemsRemoved||[];if(a.length||s.length){var o=i.getAttribute("data-parentid");if(o){var l=r.FoldersAddedTo||[],d=r.FoldersRemovedFrom||[],u=r.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===d.indexOf(o)&&-1===u.indexOf(o))return}i.notifyRefreshNeeded()}}}function k(e,t){var r,i=this,n=t.state,a=P(i);if(n.NowPlayingItem&&"Video"===n.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void i.notifyRefreshNeeded(!0)}else if("Audio"===(null===(r=n.NowPlayingItem)||void 0===r?void 0:r.MediaType)&&-1!==a.indexOf("audioplayback"))return void i.notifyRefreshNeeded(!0)}function O(e,t,r,i){var n=r.bind(e);i=i||h.default,f.Z.on(i,t,n),e["event_"+t]=n}function Z(e,t,r){var i=e["event_"+t];i&&(r=r||h.default,f.Z.off(r,t,i),e["event_"+t]=null)}function x(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function A(e,t){x(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0")),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function N(e){var t=e.Items||e,r=this.parentContainer;r&&(t.length?r.classList.remove("hide"):r.classList.add("hide"));var i,n,a=document.activeElement;this.contains(a)&&(n=!0,i=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),n&&function(e,t){if(t){var r=e.querySelector('[data-id="'+t+'"]');if(r)try{return void c.Z.focus(r)}catch(e){console.error(e)}}c.Z.autoFocus(e)}(this,i),A(this),this.afterRefresh&&this.afterRefresh(e)}y.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var i=this;r.e(52943).then(r.bind(r,52943)).then((function(e){var t=e.default;i.multiSelect=new t({container:i,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},y.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var r=this;r.sortable=new v.ZP(r,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var r=e.item,i=e.newIndex,n=r.getAttribute("data-playlistitemid"),a=r.getAttribute("data-playlistid");if(a){var s=r.getAttribute("data-serverid"),o=m.Z.getApiClient(s);u.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+a+"/Items/"+n+"/Move/"+i),type:"POST"}).then((function(){u.ZP.hide()}),(function(){u.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;r.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:i,playlistItemId:n},bubbles:!0,cancelable:!1}))}}(e,r)}})}}else t&&(t.destroy(),this.sortable=null)},y.createdCallback=function(){this.classList.add("itemsContainer")},y.attachedCallback=function(){this.addEventListener("click",b),l.Z.touch?this.addEventListener("contextmenu",g):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",S),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),i.ZP.on(this,{click:!1}),O(this,"UserDataChanged",p),O(this,"TimerCreated",w),O(this,"SeriesTimerCreated",I),O(this,"TimerCancelled",C),O(this,"SeriesTimerCancelled",L),O(this,"LibraryChanged",T),O(this,"playbackstop",k,a.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},y.detachedCallback=function(){x(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",b),this.removeEventListener("contextmenu",S),this.removeEventListener("contextmenu",g),i.ZP.off(this,{click:!1}),Z(this,"UserDataChanged"),Z(this,"TimerCreated"),Z(this,"SeriesTimerCreated"),Z(this,"TimerCancelled"),Z(this,"SeriesTimerCancelled"),Z(this,"LibraryChanged"),Z(this,"playbackstop",a.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},y.pause=function(){x(this,!0),this.paused=!0},y.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var r=t-(new Date).getTime();r>0&&!this.needsRefresh?A(this,r):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||e&&e.refresh?this.refreshItems():Promise.resolve()},y.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(N.bind(this))):Promise.resolve()},y.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:y,extends:"div"})},92609:function(e,t,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(48410),r(61013),r(63238),r(61418),r(17460),r(14078),r(52077),r(911);var i=r(60934),n=r(94994);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var s={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var r=i.get(e);return r?(r=JSON.parse(r),Object.assign(t,r)):t},saveQueryValues:function(e,t){var r={};t.SortBy&&(r.SortBy=t.SortBy),t.SortOrder&&(r.SortOrder=t.SortOrder),i.set(e,JSON.stringify(r))},saveViewSetting:function(e,t){i.set(e+"-_view",t)},getSavedView:function(e){return i.get(e+"-_view")},showLayoutMenu:function(e,t,i){var a=!0;i||(a=!1,i=(i=e.getAttribute("data-layouts"))?i.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var s=i.map((function(e){return{name:n.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(r.bind(r,12801)).then((function(t){t.default.show({items:s,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),!a&&window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,i=e.totalRecordCount,a="",s=i?t+1:0,o=r?Math.min(t+r,i):i,l=r>0&&r<i;return a+='<div class="listPaging">',a+='<span style="vertical-align:middle;">',a+=n.ZP.translate("ListPaging",s,o,i),a+="</span>",(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(a+='<div style="display:inline-block;">',l&&(a+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',a+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=i?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(a+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(a+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(a+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),a+="</div>"),a+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,93355)),r.e(92144).then(r.bind(r,92144))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i,n,a,s,o=[],l=!0,d=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(i=a.call(r)).done)&&(o.push(i.value),o.length!==t);l=!0);}catch(e){d=!0,n=e}finally{try{if(!l&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw n}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function i(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function s(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var o=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});o.classList.add("ui-body-a"),o.classList.add("background-theme-a"),o.classList.add("formDialog");var l,d,u,c="";for(c+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',c+='<h2 style="margin:0 0 .5em;">',c+=n.ZP.translate("HeaderSortBy"),c+="</h2>",c+="<div>",l=0,d=e.items.length;l<d;l++){var h=e.items[l],f=h.id.replace(",","_");u=(e.query.SortBy||"").replace(",","_")==f?" checked":"",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+h.id+'" value="'+f+'" class="menuSortBy" '+u+" /><span>"+h.name+"</span></label>"}c+="</div>",c+='<h2 style="margin: 1em 0 .5em;">',c+=n.ZP.translate("HeaderSortOrder"),c+="</h2>",c+="<div>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(u="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(u="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",c+="</div>",c+="</div>",o.innerHTML=c,r.open(o);var m=o.querySelectorAll(".menuSortBy");for(l=0,d=m.length;l<d;l++)m[l].addEventListener("change",i);var v=o.querySelectorAll(".menuSortOrder");for(l=0,d=v.length;l<d;l++)v[l].addEventListener("change",s)}))}};window.LibraryBrowser=s,t.ZP=s}}]);