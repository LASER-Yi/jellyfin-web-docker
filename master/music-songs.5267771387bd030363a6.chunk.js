"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6368],{25054:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}}),r(5769),r(63238),r(61418),r(17460),r(14078);var n=r(47005),a=r(92609),i=r(38737),o=r(63873),l=r(51161),u=r(60934),s=r(94994),d=(r(82427),r(60635)),c=r(48957);function m(e,t,m){function y(e){var r=f(e),n=h[r];return n||(n=h[r]={query:{SortBy:"Album,SortName",SortOrder:"Ascending",IncludeItemTypes:"Audio",Recursive:!0,Fields:"AudioInfo,ParentId",StartIndex:0,ImageTypeLimit:1,EnableImageTypes:"Primary"}},u.libraryPageSize()>0&&(n.query.Limit=u.libraryPageSize()),n.query.ParentId=t.topParentId,a.ZP.loadSavedQueryValues(r,n.query)),n}function b(e){return y(e).query}function f(e){return e.savedQueryKey||(e.savedQueryKey=a.ZP.getSavedQueryKey("songs")),e.savedQueryKey}function S(e){l.ZP.show(),g=!0;var t=b(e);ApiClient.getItems(d.ZP.getCurrentUserId(),t).then((function(n){function s(){g||(u.libraryPageSize()>0&&(t.StartIndex+=t.Limit),S(m))}function d(){g||(u.libraryPageSize()>0&&(t.StartIndex=Math.max(0,t.StartIndex-t.Limit)),S(m))}window.scrollTo(0,0);for(var c=a.ZP.getQueryPagingHtml({startIndex:t.StartIndex,limit:t.Limit,totalRecordCount:n.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),y=o.Z.getListViewHtml({items:n.Items,action:"playallfromhere",smallIcon:!0,artist:!0,addToListButton:!0}),b=m.querySelectorAll(".paging"),v=0,h=b.length;v<h;v++)b[v].innerHTML=c;for(var p=0,P=(b=m.querySelectorAll(".btnNextPage")).length;p<P;p++)b[p].addEventListener("click",s);for(var w=0,A=(b=m.querySelectorAll(".btnPreviousPage")).length;w<A;w++)b[w].addEventListener("click",d);var L=m.querySelector(".itemsContainer");L.innerHTML=y,i.default.lazyChildren(L),a.ZP.saveQueryValues(f(e),t),m.querySelector(".btnShuffle").classList.toggle("hide",n.TotalRecordCount<1),l.ZP.hide(),g=!1,Promise.resolve().then(r.bind(r,87680)).then((function(t){t.default.autoFocus(e)}))}))}var v=this,h={},g=!1;function p(){ApiClient.getItem(ApiClient.getCurrentUserId(),t.topParentId).then((function(e){c.O.shuffle(e)}))}v.showFilterMenu=function(){r.e(2493).then(r.bind(r,23816)).then((function(e){var t=new(0,e.default)({query:b(m),mode:"songs",serverId:ApiClient.serverId()});n.Events.on(t,"filterchange",(function(){b(m).StartIndex=0,S(m)})),t.show()}))},v.getCurrentViewStyle=function(){return y(m).view},function(e){e.querySelector(".btnFilter").addEventListener("click",(function(){v.showFilterMenu()})),e.querySelector(".btnSort").addEventListener("click",(function(t){a.ZP.showSortMenu({items:[{name:s.ZP.translate("OptionTrackName"),id:"Name"},{name:s.ZP.translate("Album"),id:"Album,SortName"},{name:s.ZP.translate("AlbumArtist"),id:"AlbumArtist,Album,SortName"},{name:s.ZP.translate("Artist"),id:"Artist,Album,SortName"},{name:s.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:s.ZP.translate("OptionDatePlayed"),id:"DatePlayed,SortName"},{name:s.ZP.translate("OptionPlayCount"),id:"PlayCount,SortName"},{name:s.ZP.translate("OptionReleaseDate"),id:"PremiereDate,AlbumArtist,Album,SortName"},{name:s.ZP.translate("Runtime"),id:"Runtime,AlbumArtist,Album,SortName"},{name:s.ZP.translate("OptionRandom"),id:"Random,SortName"}],callback:function(){b(e).StartIndex=0,S(e)},query:b(e),button:t.target})})),e.querySelector(".btnShuffle").addEventListener("click",p)}(m),v.renderTab=function(){S(m)}}},92609:function(e,t,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(48410),r(61013),r(63238),r(61418),r(17460),r(14078),r(52077),r(911);var n=r(60934),a=r(94994);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var r=n.get(e);return r?(r=JSON.parse(r),Object.assign(t,r)):t},saveQueryValues:function(e,t){var r={};t.SortBy&&(r.SortBy=t.SortBy),t.SortOrder&&(r.SortOrder=t.SortOrder),n.set(e,JSON.stringify(r))},saveViewSetting:function(e,t){n.set(e+"-_view",t)},getSavedView:function(e){return n.get(e+"-_view")},showLayoutMenu:function(e,t,n){var i=!0;n||(i=!1,n=(n=e.getAttribute("data-layouts"))?n.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=n.map((function(e){return{name:a.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(r.bind(r,27074)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),i||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,n=e.totalRecordCount,i="",o=Math.min(t+r,n),l=r<n;return i+='<div class="listPaging">',l&&(i+='<span style="vertical-align:middle;">',i+=a.ZP.translate("ListPaging",n?t+1:0,o,n),i+="</span>"),(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',l&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=n?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+a.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+a.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+a.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,48102)),r.e(2697).then(r.bind(r,62697))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function n(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function o(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var l=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var u,s,d,c="";for(c+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',c+='<h2 style="margin:0 0 .5em;">',c+=a.ZP.translate("HeaderSortBy"),c+="</h2>",c+="<div>",u=0,s=e.items.length;u<s;u++){var m=e.items[u],y=m.id.replace(",","_");d=(e.query.SortBy||"").replace(",","_")==y?" checked":"",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+m.id+'" value="'+y+'" class="menuSortBy" '+d+" /><span>"+m.name+"</span></label>"}c+="</div>",c+='<h2 style="margin: 1em 0 .5em;">',c+=a.ZP.translate("HeaderSortOrder"),c+="</h2>",c+="<div>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(d="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+a.ZP.translate("Ascending")+"</span></label>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(d="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+a.ZP.translate("Descending")+"</span></label>",c+="</div>",c+="</div>",l.innerHTML=c,r.open(l);var b=l.querySelectorAll(".menuSortBy");for(u=0,s=b.length;u<s;u++)b[u].addEventListener("change",n);var f=l.querySelectorAll(".menuSortOrder");for(u=0,s=f.length;u<s;u++)f[u].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o}}]);