"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2970],{8718:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}}),r(5769),r(63238),r(61418),r(17460),r(14078),r(72410),r(15610),r(52077),r(25901),r(92189),r(91047);var n=r(48957),a=r(51161),i=r(47005),o=r(92609),l=r(38737),s=r(79448),u=r(63873),c=r(61570),d=r(60934),y=r(94994);function m(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw i}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t,v){var f=this;function h(){ApiClient.getItem(ApiClient.getCurrentUserId(),t.topParentId).then((function(e){n.O.play({items:[e]})}))}function p(){ApiClient.getItem(ApiClient.getCurrentUserId(),t.topParentId).then((function(e){g(),n.O.shuffle(e)}))}function S(){var e=b();return w||(w={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"MusicAlbum",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0},view:o.ZP.getSavedView(e)||"Poster"},d.libraryPageSize()>0&&(w.query.Limit=d.libraryPageSize()),w.query.ParentId=t.topParentId,o.ZP.loadSavedQueryValues(e,w.query)),w}function g(){return S().query}function b(){return P||(P=o.ZP.getSavedQueryKey("musicalbums")),P}var P,w,L=function(){var e=f.getCurrentViewStyle(),t=v.querySelector(".itemsContainer");"List"==e?(t.classList.add("vertical-list"),t.classList.remove("vertical-wrap")):(t.classList.remove("vertical-list"),t.classList.add("vertical-wrap")),t.innerHTML=""},C=function e(){a.ZP.show(),I=!0;var t=g();ApiClient.getItems(ApiClient.getCurrentUserId(),t).then((function(n){var i,s;function y(){I||(d.libraryPageSize()>0&&(t.StartIndex+=t.Limit),e())}function h(){I||(d.libraryPageSize()>0&&(t.StartIndex=Math.max(0,t.StartIndex-t.Limit)),e())}window.scrollTo(0,0),null===(i=f.alphaPicker)||void 0===i||i.updateControls(t);var p=o.ZP.getQueryPagingHtml({startIndex:t.StartIndex,limit:t.Limit,totalRecordCount:n.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),S=f.getCurrentViewStyle();s="List"==S?u.Z.getListViewHtml({items:n.Items,context:"music",sortBy:t.SortBy,addToListButton:!0}):"PosterCard"==S?c.default.getCardsHtml({items:n.Items,shape:"square",context:"music",showTitle:!0,coverImage:!0,showParentTitle:!0,lazy:!0,cardLayout:!0}):c.default.getCardsHtml({items:n.Items,shape:"square",context:"music",showTitle:!0,showParentTitle:!0,lazy:!0,centerText:!0,overlayPlayButton:!0});var g,P=v.querySelectorAll(".paging"),w=m(P);try{for(w.s();!(g=w.n()).done;)g.value.innerHTML=p}catch(e){w.e(e)}finally{w.f()}var L,C=m(P=v.querySelectorAll(".btnNextPage"));try{for(C.s();!(L=C.n()).done;)L.value.addEventListener("click",y)}catch(e){C.e(e)}finally{C.f()}var A,k=m(P=v.querySelectorAll(".btnPreviousPage"));try{for(k.s();!(A=k.n()).done;)A.value.addEventListener("click",h)}catch(e){k.e(e)}finally{k.f()}var q=v.querySelector(".itemsContainer");q.innerHTML=s,l.default.lazyChildren(q),o.ZP.saveQueryValues(b(),t),a.ZP.hide(),I=!1,Promise.resolve().then(r.bind(r,87680)).then((function(e){e.default.autoFocus(v)}))}))},I=!1;this.showFilterMenu=function(){r.e(2493).then(r.bind(r,23816)).then((function(e){var t=new(0,e.default)({query:g(),mode:"albums",serverId:ApiClient.serverId()});i.Events.on(t,"filterchange",(function(){g().StartIndex=0,C()})),t.show()}))},this.getCurrentViewStyle=function(){return S().view},function(e){var t=e.querySelector(".alphaPicker"),r=e.querySelector(".itemsContainer");t.addEventListener("alphavaluechanged",(function(e){var t=e.detail.value,r=g();"#"===t?(r.NameLessThan="A",delete r.NameStartsWith):(r.NameStartsWith=t,delete r.NameLessThan),r.StartIndex=0,C()})),f.alphaPicker=new s.Z({element:t,valueChangeEvent:"click"}),e.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),t.classList.add("alphaPicker-fixed-right"),r.classList.add("padded-right-withalphapicker"),e.querySelector(".btnFilter").addEventListener("click",(function(){f.showFilterMenu()})),e.querySelector(".btnSort").addEventListener("click",(function(e){o.ZP.showSortMenu({items:[{name:y.ZP.translate("Name"),id:"SortName"},{name:y.ZP.translate("AlbumArtist"),id:"AlbumArtist,SortName"},{name:y.ZP.translate("OptionCommunityRating"),id:"CommunityRating,SortName"},{name:y.ZP.translate("OptionCriticRating"),id:"CriticRating,SortName"},{name:y.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:y.ZP.translate("OptionReleaseDate"),id:"ProductionYear,PremiereDate,SortName"},{name:y.ZP.translate("OptionRandom"),id:"Random,SortName"}],callback:function(){g().StartIndex=0,C()},query:g(),button:e.target})}));var n=e.querySelector(".btnSelectView");n.addEventListener("click",(function(e){o.ZP.showLayoutMenu(e.target,f.getCurrentViewStyle(),"List,Poster,PosterCard".split(","))})),n.addEventListener("layoutchange",(function(e){var t=e.detail.viewStyle;S().view=t,o.ZP.saveViewSetting(b(),t),g().StartIndex=0,L(),C()})),e.querySelector(".btnPlayAll").addEventListener("click",h),e.querySelector(".btnShuffle").addEventListener("click",p)}(v),L(),this.renderTab=function(){var e;C(),null===(e=f.alphaPicker)||void 0===e||e.updateControls(g())}}r(82427)},92609:function(e,t,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(48410),r(61013),r(63238),r(61418),r(17460),r(14078),r(52077),r(911);var n=r(60934),a=r(94994);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var r=n.get(e);return r?(r=JSON.parse(r),Object.assign(t,r)):t},saveQueryValues:function(e,t){var r={};t.SortBy&&(r.SortBy=t.SortBy),t.SortOrder&&(r.SortOrder=t.SortOrder),n.set(e,JSON.stringify(r))},saveViewSetting:function(e,t){n.set(e+"-_view",t)},getSavedView:function(e){return n.get(e+"-_view")},showLayoutMenu:function(e,t,n){var i=!0;n||(i=!1,n=(n=e.getAttribute("data-layouts"))?n.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=n.map((function(e){return{name:a.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(r.bind(r,27074)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),i||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,n=e.totalRecordCount,i="",o=Math.min(t+r,n),l=r<n;return i+='<div class="listPaging">',l&&(i+='<span style="vertical-align:middle;">',i+=a.ZP.translate("ListPaging",n?t+1:0,o,n),i+="</span>"),(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',l&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=n?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+a.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+a.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+a.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,48102)),r.e(2697).then(r.bind(r,62697))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function n(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function o(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var l=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=a.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,u=e.items.length;s<u;s++){var y=e.items[s],m=y.id.replace(",","_");c=(e.query.SortBy||"").replace(",","_")==m?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+y.id+'" value="'+m+'" class="menuSortBy" '+c+" /><span>"+y.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=a.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+a.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+a.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,r.open(l);var v=l.querySelectorAll(".menuSortBy");for(s=0,u=v.length;s<u;s++)v[s].addEventListener("change",n);var f=l.querySelectorAll(".menuSortOrder");for(s=0,u=f.length;s<u;s++)f[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o}}]);