"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70899],{45677:function(t,e,r){function n(t,e){var r=function(t){return Boolean(t.Filters||t.IsFavorite||t.VideoTypes||t.SeriesStatus||t.Is4K||void 0!==t.IsHD&&null!==t.IsHD||t.IsSD||t.Is3D||t.HasSubtitles||t.HasTrailer||t.HasSpecialFeature||t.HasThemeSong||t.HasThemeVideo||t.IsMissing||t.ParentIndexNumber||t.Genres||t.Tags||t.Years||t.OfficialRatings||t.IsUnaired)}(e),n=t.querySelector(".btnFilter-wrapper");if(n){var a=n.querySelector(".filterIndicator");!a&&r&&(n.insertAdjacentHTML("afterbegin",'<div class="filterIndicator">!</div>'),n.classList.add("btnFilterWithIndicator"),a=n.querySelector(".filterIndicator")),a&&a.classList.toggle("hide",!r)}}r.d(e,{j:function(){return n}})},47614:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}}),r(44962),r(78557),r(90076),r(83994),r(82367);var n=r(94592),a=r(76542),i=r(6940),o=r(8566),l=r(21069),s=r(82885),u=r(5898),d=r(89100),c=r(44797),y=r(45677);function m(t,e,m){function b(){var t=h(),r=v[t];return r||(r=v[t]={query:{SortBy:"Album,SortName",SortOrder:"Ascending",IncludeItemTypes:"Audio",Recursive:!0,Fields:"ParentId",StartIndex:0,ImageTypeLimit:1,EnableImageTypes:"Primary"}},s.libraryPageSize()>0&&(r.query.Limit=s.libraryPageSize()),r.query.ParentId=e.topParentId,s.loadQuerySettings(t,r.query)),r}function f(){return b().query}function h(){return"".concat(e.topParentId,"-songs")}function g(t){o.Ay.show(),A=!0;var e=f();(0,y.j)(m,e),ApiClient.getItems(d.default.getCurrentUserId(),e).then((function(l){function u(){A||(s.libraryPageSize()>0&&(e.StartIndex+=e.Limit),g(m))}function d(){A||(s.libraryPageSize()>0&&(e.StartIndex=Math.max(0,e.StartIndex-e.Limit)),g(m))}window.scrollTo(0,0);for(var c=n.Ay.getQueryPagingHtml({startIndex:e.StartIndex,limit:e.Limit,totalRecordCount:l.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),y=i.A.getListViewHtml({items:l.Items,action:"playallfromhere",smallIcon:!0,artist:!0,addToListButton:!0}),b=m.querySelectorAll(".paging"),f=0,S=b.length;f<S;f++)b[f].innerHTML=c;for(var p=0,v=(b=m.querySelectorAll(".btnNextPage")).length;p<v;p++)b[p].addEventListener("click",u);for(var I=0,w=(b=m.querySelectorAll(".btnPreviousPage")).length;I<w;I++)b[I].addEventListener("click",d);var L=m.querySelector(".itemsContainer");L.innerHTML=y,a.default.lazyChildren(L),s.saveQuerySettings(h(),e),m.querySelector(".btnShuffle").classList.toggle("hide",l.TotalRecordCount<1),o.Ay.hide(),A=!1,Promise.resolve().then(r.bind(r,84069)).then((function(e){e.default.autoFocus(t)}))}))}var S,p=this,v={},A=!1;p.showFilterMenu=function(){Promise.all([r.e(44599),r.e(33244)]).then(r.bind(r,44599)).then((function(t){var e=new(0,t.default)({query:f(),mode:"songs",serverId:ApiClient.serverId()});c.A.on(e,"filterchange",(function(){f().StartIndex=0,g()})),e.show()}))},p.getCurrentViewStyle=function(){return b().view},(S=m).querySelector(".btnFilter").addEventListener("click",(function(){p.showFilterMenu()})),S.querySelector(".btnSort").addEventListener("click",(function(t){n.Ay.showSortMenu({items:[{name:u.Ay.translate("OptionTrackName"),id:"Name"},{name:u.Ay.translate("Album"),id:"Album,SortName"},{name:u.Ay.translate("AlbumArtist"),id:"AlbumArtist,Album,SortName"},{name:u.Ay.translate("Artist"),id:"Artist,Album,SortName"},{name:u.Ay.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:u.Ay.translate("OptionDatePlayed"),id:"DatePlayed,SortName"},{name:u.Ay.translate("OptionPlayCount"),id:"PlayCount,SortName"},{name:u.Ay.translate("OptionReleaseDate"),id:"PremiereDate,AlbumArtist,Album,SortName"},{name:u.Ay.translate("Runtime"),id:"Runtime,AlbumArtist,Album,SortName"},{name:u.Ay.translate("OptionRandom"),id:"Random,SortName"}],callback:function(){f().StartIndex=0,g()},query:f(),button:t.target})})),S.querySelector(".btnShuffle").addEventListener("click",(function(){ApiClient.getItem(ApiClient.getCurrentUserId(),e.topParentId).then((function(t){l.f.shuffle(t)}))})),p.renderTab=function(){g(m)}}r(1177)},94592:function(t,e,r){r(29305),r(32733),r(84701),r(69892),r(44962),r(86584),r(89336),r(78557),r(90076),r(95021),r(73687),r(83994),r(93062),r(82367);var n=r(5898);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var i={showLayoutMenu:function(t,e,a){var i=!0;a||(i=!1,a=(a=t.getAttribute("data-layouts"))?a.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=a.map((function(t){return{name:n.Ay.translate(t),id:t,selected:e==t}}));r.e(62882).then(r.bind(r,62882)).then((function(e){e.default.show({items:o,positionTo:t,callback:function(e){t.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:e},bubbles:!0,cancelable:!1})),!i&&window.$&&$(t).trigger("layoutchange",[e])}})}))},getQueryPagingHtml:function(t){var e=t.startIndex,r=t.limit,a=t.totalRecordCount,i="",o=a?e+1:0,l=r?Math.min(e+r,a):a,s=r>0&&r<a;return i+='<div class="listPaging">',i+='<span style="vertical-align:middle;">',i+=n.Ay.translate("ListPaging",o,l,a),i+="</span>",(s||t.viewButton||t.filterButton||t.sortButton||t.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(e?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(e+r>=a?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),t.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.Ay.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(t.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(t.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),t.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.Ay.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),t.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.Ay.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(t){Promise.all([Promise.resolve().then(r.bind(r,79754)),r.e(81613).then(r.bind(r,81613))]).then((function(e){var r,i,o=(r=e,i=1,function(t){if(Array.isArray(t))return t}(r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,i,o,l=[],s=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);s=!0);}catch(t){u=!0,a=t}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return l}}(r,i)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(r,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].default;function l(){var e=this.value;if(this.checked){var r=t.query.SortBy!=e;t.query.SortBy=e.replace("_",","),t.query.StartIndex=0,t.callback&&r&&t.callback()}}function s(){var e=this.value;if(this.checked){var r=t.query.SortOrder!=e;t.query.SortOrder=e,t.query.StartIndex=0,t.callback&&r&&t.callback()}}var u=o.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});u.classList.add("ui-body-a"),u.classList.add("background-theme-a"),u.classList.add("formDialog");var d,c,y,m="";for(m+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',m+='<h2 style="margin:0 0 .5em;">',m+=n.Ay.translate("HeaderSortBy"),m+="</h2>",m+="<div>",d=0,c=t.items.length;d<c;d++){var b=t.items[d],f=b.id.replace(",","_");y=(t.query.SortBy||"").replace(",","_")==f?" checked":"",m+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+b.id+'" value="'+f+'" class="menuSortBy" '+y+" /><span>"+b.name+"</span></label>"}m+="</div>",m+='<h2 style="margin: 1em 0 .5em;">',m+=n.Ay.translate("HeaderSortOrder"),m+="</h2>",m+="<div>",m+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(y="Ascending"==t.query.SortOrder?" checked":"")+" /><span>"+n.Ay.translate("Ascending")+"</span></label>",m+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(y="Descending"==t.query.SortOrder?" checked":"")+" /><span>"+n.Ay.translate("Descending")+"</span></label>",m+="</div>",m+="</div>",u.innerHTML=m,o.open(u);var h=u.querySelectorAll(".menuSortBy");for(d=0,c=h.length;d<c;d++)h[d].addEventListener("change",l);var g=u.querySelectorAll(".menuSortOrder");for(d=0,c=g.length;d<c;d++)g[d].addEventListener("change",s)}))}};window.LibraryBrowser=i,e.Ay=i}}]);