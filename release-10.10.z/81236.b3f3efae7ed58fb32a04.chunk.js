"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81236],{45677:function(e,t,r){function a(e,t){var r=function(e){return Boolean(e.Filters||e.IsFavorite||e.VideoTypes||e.SeriesStatus||e.Is4K||void 0!==e.IsHD&&null!==e.IsHD||e.IsSD||e.Is3D||e.HasSubtitles||e.HasTrailer||e.HasSpecialFeature||e.HasThemeSong||e.HasThemeVideo||e.IsMissing||e.ParentIndexNumber||e.Genres||e.Tags||e.Years||e.OfficialRatings||e.IsUnaired)}(t),a=e.querySelector(".btnFilter-wrapper");if(a){var n=a.querySelector(".filterIndicator");!n&&r&&(a.insertAdjacentHTML("afterbegin",'<div class="filterIndicator">!</div>'),a.classList.add("btnFilterWithIndicator"),n=a.querySelector(".filterIndicator")),n&&n.classList.toggle("hide",!r)}}r.d(t,{j:function(){return a}})},96747:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}}),r(44962),r(78557),r(90076),r(83994),r(82367);var a=r(8566),n=r(94592),i=r(76542),o=r(6940),l=r(24468),s=r(82885),u=r(5898),d=r(89100),c=r(44797),y=r(45677);function m(e,t,m){function S(){var e=v(),r=p[e];return r||(r=p[e]={query:{SortBy:"SeriesSortName,SortName",SortOrder:"Ascending",IncludeItemTypes:"Episode",Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount",IsMissing:!1,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",StartIndex:0},view:s.getSavedView(e)||"Poster"},s.libraryPageSize()>0&&(r.query.Limit=s.libraryPageSize()),r.query.ParentId=t.topParentId,s.loadQuerySettings(e,r.query)),r}function b(){return S().query}function v(){return"".concat(t.topParentId,"-episodes")}function f(){var e=h.getCurrentViewStyle(),t=m.querySelector(".itemsContainer");"List"==e?(t.classList.add("vertical-list"),t.classList.remove("vertical-wrap")):(t.classList.remove("vertical-list"),t.classList.add("vertical-wrap")),t.innerHTML=""}function g(e){a.Ay.show(),w=!0;var t=b();(0,y.j)(e,t),ApiClient.getItems(d.default.getCurrentUserId(),t).then((function(u){function d(){w||(s.libraryPageSize()>0&&(t.StartIndex+=t.Limit),g(m))}function c(){w||(s.libraryPageSize()>0&&(t.StartIndex=Math.max(0,t.StartIndex-t.Limit)),g(m))}var y;window.scrollTo(0,0);var S,b=n.Ay.getQueryPagingHtml({startIndex:t.StartIndex,limit:t.Limit,totalRecordCount:u.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),f=h.getCurrentViewStyle(),p=m.querySelector(".itemsContainer");y="List"==f?o.A.getListViewHtml({items:u.Items,sortBy:t.SortBy,showParentTitle:!0}):"PosterCard"==f?l.default.getCardsHtml({items:u.Items,shape:"backdrop",showTitle:!0,showParentTitle:!0,scalable:!0,cardLayout:!0}):l.default.getCardsHtml({items:u.Items,shape:"backdrop",showTitle:!0,showParentTitle:!0,overlayText:!1,centerText:!0,scalable:!0,overlayPlayButton:!0});for(var A=0,L=(S=m.querySelectorAll(".paging")).length;A<L;A++)S[A].innerHTML=b;for(var P=0,I=(S=m.querySelectorAll(".btnNextPage")).length;P<I;P++)S[P].addEventListener("click",d);for(var k=0,C=(S=m.querySelectorAll(".btnPreviousPage")).length;k<C;k++)S[k].addEventListener("click",c);p.innerHTML=y,i.default.lazyChildren(p),s.saveQuerySettings(v(),t),a.Ay.hide(),w=!1,Promise.resolve().then(r.bind(r,84069)).then((function(t){t.default.autoFocus(e)}))}))}var h=this,p={},w=!1;h.showFilterMenu=function(){Promise.all([r.e(55931),r.e(44599),r.e(33244)]).then(r.bind(r,44599)).then((function(e){var t=new(0,e.default)({query:b(),mode:"episodes",serverId:ApiClient.serverId()});c.A.on(t,"filterchange",(function(){g(m)})),t.show()}))},h.getCurrentViewStyle=function(){return S().view},function(e){e.querySelector(".btnFilter").addEventListener("click",(function(){h.showFilterMenu()})),e.querySelector(".btnSort").addEventListener("click",(function(t){n.Ay.showSortMenu({items:[{name:u.Ay.translate("Name"),id:"SeriesSortName,SortName"},{name:u.Ay.translate("OptionTvdbRating"),id:"CommunityRating,SeriesSortName,SortName"},{name:u.Ay.translate("OptionDateAdded"),id:"DateCreated,SeriesSortName,SortName"},{name:u.Ay.translate("OptionPremiereDate"),id:"PremiereDate,SeriesSortName,SortName"},{name:u.Ay.translate("OptionDatePlayed"),id:"DatePlayed,SeriesSortName,SortName"},{name:u.Ay.translate("OptionParentalRating"),id:"OfficialRating,SeriesSortName,SortName"},{name:u.Ay.translate("OptionPlayCount"),id:"PlayCount,SeriesSortName,SortName"},{name:u.Ay.translate("Runtime"),id:"Runtime,SeriesSortName,SortName"}],callback:function(){g(e)},query:b(),button:t.target})}));var t=e.querySelector(".btnSelectView");t.addEventListener("click",(function(e){n.Ay.showLayoutMenu(e.target,h.getCurrentViewStyle(),"List,Poster,PosterCard".split(","))})),t.addEventListener("layoutchange",(function(t){var r=t.detail.viewStyle;S().view=r,s.saveViewSetting(v(),r),f(),g(e)}))}(m),f(),h.renderTab=function(){g(m)}}r(1177)},94592:function(e,t,r){r(29305),r(32733),r(84701),r(69892),r(44962),r(86584),r(89336),r(78557),r(90076),r(95021),r(73687),r(83994),r(93062),r(82367);var a=r(5898);function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=Array(t);r<t;r++)a[r]=e[r];return a}var i={showLayoutMenu:function(e,t,n){var i=!0;n||(i=!1,n=(n=e.getAttribute("data-layouts"))?n.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=n.map((function(e){return{name:a.Ay.translate(e),id:e,selected:t==e}}));r.e(62882).then(r.bind(r,62882)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),!i&&window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,n=e.totalRecordCount,i="",o=n?t+1:0,l=r?Math.min(t+r,n):n,s=r>0&&r<n;return i+='<div class="listPaging">',i+='<span style="vertical-align:middle;">',i+=a.Ay.translate("ListPaging",o,l,n),i+="</span>",(s||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=n?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+a.Ay.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+a.Ay.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+a.Ay.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,79754)),r.e(81613).then(r.bind(r,81613))]).then((function(t){var r,i,o=(r=t,i=1,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,i,o,l=[],s=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(a=i.call(r)).done)&&(l.push(a.value),l.length!==t);s=!0);}catch(e){u=!0,n=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw n}}return l}}(r,i)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(r,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].default;function l(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function s(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var u=o.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});u.classList.add("ui-body-a"),u.classList.add("background-theme-a"),u.classList.add("formDialog");var d,c,y,m="";for(m+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',m+='<h2 style="margin:0 0 .5em;">',m+=a.Ay.translate("HeaderSortBy"),m+="</h2>",m+="<div>",d=0,c=e.items.length;d<c;d++){var S=e.items[d],b=S.id.replace(",","_");y=(e.query.SortBy||"").replace(",","_")==b?" checked":"",m+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+S.id+'" value="'+b+'" class="menuSortBy" '+y+" /><span>"+S.name+"</span></label>"}m+="</div>",m+='<h2 style="margin: 1em 0 .5em;">',m+=a.Ay.translate("HeaderSortOrder"),m+="</h2>",m+="<div>",m+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(y="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+a.Ay.translate("Ascending")+"</span></label>",m+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(y="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+a.Ay.translate("Descending")+"</span></label>",m+="</div>",m+="</div>",u.innerHTML=m,o.open(u);var v=u.querySelectorAll(".menuSortBy");for(d=0,c=v.length;d<c;d++)v[d].addEventListener("change",l);var f=u.querySelectorAll(".menuSortOrder");for(d=0,c=f.length;d<c;d++)f[d].addEventListener("change",s)}))}};window.LibraryBrowser=i,t.Ay=i}}]);