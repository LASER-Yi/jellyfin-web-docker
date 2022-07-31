"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5815],{62216:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}}),r(5769),r(63238),r(61418),r(17460),r(14078),r(52077),r(72482),r(72410),r(15610),r(25901),r(92189),r(91047);var a=r(56705),n=r(47005),i=r(2587),o=r(21361),l=r(66056),s=r(61097),u=r(13594),c=r(28978),d=r(33942);function y(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw i}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function h(e,t,m){var h=this;function v(e){var r=p(e),a=g[r];return a||(a=g[r]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Series",Recursive:!0,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0},view:i.ZP.getSavedView(r)||"Poster"},c.libraryPageSize()>0&&(a.query.Limit=c.libraryPageSize()),a.query.ParentId=t.topParentId,i.ZP.loadSavedQueryValues(r,a.query)),a}function f(e){return v(e).query}function p(e){return e.savedQueryKey||(e.savedQueryKey=i.ZP.getSavedQueryKey("series")),e.savedQueryKey}var b=function(){var e=h.getCurrentViewStyle(),t=m.querySelector(".itemsContainer");"List"==e?(t.classList.add("vertical-list"),t.classList.remove("vertical-wrap")):(t.classList.remove("vertical-list"),t.classList.add("vertical-wrap")),t.innerHTML=""},S=function e(t){a.ZP.show(),w=!0;var n=f(t);ApiClient.getItems(ApiClient.getCurrentUserId(),n).then((function(u){var d,v;function f(){w||(c.libraryPageSize()>0&&(n.StartIndex+=n.Limit),e(m))}function b(){w||(c.libraryPageSize()>0&&(n.StartIndex=Math.max(0,n.StartIndex-n.Limit)),e(m))}window.scrollTo(0,0),null===(d=h.alphaPicker)||void 0===d||d.updateControls(n);var S=i.ZP.getQueryPagingHtml({startIndex:n.StartIndex,limit:n.Limit,totalRecordCount:u.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),g=h.getCurrentViewStyle();v="Thumb"==g?s.default.getCardsHtml({items:u.Items,shape:"backdrop",preferThumb:!0,context:"tvshows",overlayMoreButton:!0,showTitle:!0,centerText:!0}):"ThumbCard"==g?s.default.getCardsHtml({items:u.Items,shape:"backdrop",preferThumb:!0,context:"tvshows",cardLayout:!0,showTitle:!0,showYear:!0,centerText:!0}):"Banner"==g?s.default.getCardsHtml({items:u.Items,shape:"banner",preferBanner:!0,context:"tvshows"}):"List"==g?l.Z.getListViewHtml({items:u.Items,context:"tvshows",sortBy:n.SortBy}):"PosterCard"==g?s.default.getCardsHtml({items:u.Items,shape:"portrait",context:"tvshows",showTitle:!0,showYear:!0,centerText:!0,cardLayout:!0}):s.default.getCardsHtml({items:u.Items,shape:"portrait",context:"tvshows",centerText:!0,lazy:!0,overlayMoreButton:!0,showTitle:!0,showYear:!0});var P,L=m.querySelectorAll(".paging"),k=y(L);try{for(k.s();!(P=k.n()).done;)P.value.innerHTML=S}catch(e){k.e(e)}finally{k.f()}var C,I=y(L=m.querySelectorAll(".btnNextPage"));try{for(I.s();!(C=I.n()).done;)C.value.addEventListener("click",f)}catch(e){I.e(e)}finally{I.f()}var B,T=y(L=m.querySelectorAll(".btnPreviousPage"));try{for(T.s();!(B=T.n()).done;)B.value.addEventListener("click",b)}catch(e){T.e(e)}finally{T.f()}var x=m.querySelector(".itemsContainer");x.innerHTML=v,o.default.lazyChildren(x),i.ZP.saveQueryValues(p(t),n),a.ZP.hide(),w=!1,Promise.resolve().then(r.bind(r,6610)).then((function(e){e.default.autoFocus(t)}))}))},g={},w=!1;this.showFilterMenu=function(){r.e(8872).then(r.bind(r,78872)).then((function(e){var t=new(0,e.default)({query:f(m),mode:"series",serverId:ApiClient.serverId()});n.Events.on(t,"filterchange",(function(){f(m).StartIndex=0,S(m)})),t.show()}))},this.getCurrentViewStyle=function(){return v(m).view},function(e){var t=e.querySelector(".alphaPicker"),r=e.querySelector(".itemsContainer");t.addEventListener("alphavaluechanged",(function(t){var r=t.detail.value,a=f(e);"#"===r?(a.NameLessThan="A",delete a.NameStartsWith):(a.NameStartsWith=r,delete a.NameLessThan),a.StartIndex=0,S(e)})),h.alphaPicker=new u.Z({element:t,valueChangeEvent:"click"}),e.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),t.classList.add("alphaPicker-fixed-right"),r.classList.add("padded-right-withalphapicker"),e.querySelector(".btnFilter").addEventListener("click",(function(){h.showFilterMenu()})),e.querySelector(".btnSort").addEventListener("click",(function(t){i.ZP.showSortMenu({items:[{name:d.ZP.translate("Name"),id:"SortName"},{name:d.ZP.translate("OptionRandom"),id:"Random"},{name:d.ZP.translate("OptionImdbRating"),id:"CommunityRating,SortName"},{name:d.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:d.ZP.translate("OptionDatePlayed"),id:"SeriesDatePlayed,SortName"},{name:d.ZP.translate("OptionParentalRating"),id:"OfficialRating,SortName"},{name:d.ZP.translate("OptionReleaseDate"),id:"PremiereDate,SortName"}],callback:function(){f(e).StartIndex=0,S(e)},query:f(e),button:t.target})}));var a=e.querySelector(".btnSelectView");a.addEventListener("click",(function(e){i.ZP.showLayoutMenu(e.target,h.getCurrentViewStyle(),"Banner,List,Poster,PosterCard,Thumb,ThumbCard".split(","))})),a.addEventListener("layoutchange",(function(t){var r=t.detail.viewStyle;v(e).view=r,i.ZP.saveViewSetting(p(e),r),f(e).StartIndex=0,b(),S(e)}))}(m),b(),this.renderTab=function(){var e;S(m),null===(e=h.alphaPicker)||void 0===e||e.updateControls(f(m))}}r(32420)},2587:function(e,t,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(52077),r(72482),r(48410),r(61013),r(63238),r(61418),r(17460),r(14078),r(911);var a=r(28978),n=r(33942);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var r=a.get(e);return r?(r=JSON.parse(r),Object.assign(t,r)):t},saveQueryValues:function(e,t){var r={};t.SortBy&&(r.SortBy=t.SortBy),t.SortOrder&&(r.SortOrder=t.SortOrder),a.set(e,JSON.stringify(r))},saveViewSetting:function(e,t){a.set(e+"-_view",t)},getSavedView:function(e){return a.get(e+"-_view")},showLayoutMenu:function(e,t,a){var i=!0;a||(i=!1,a=(a=e.getAttribute("data-layouts"))?a.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=a.map((function(e){return{name:n.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(r.bind(r,78407)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),i||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,a=e.totalRecordCount,i="",o=Math.min(t+r,a),l=r<a;return i+='<div class="listPaging">',l&&(i+='<span style="vertical-align:middle;">',i+=n.ZP.translate("ListPaging",a?t+1:0,o,a),i+="</span>"),(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',l&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=a?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,90914)),r.e(2987).then(r.bind(r,82987))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function a(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function o(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var l=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=n.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,u=e.items.length;s<u;s++){var y=e.items[s],m=y.id.replace(",","_");c=(e.query.SortBy||"").replace(",","_")==m?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+y.id+'" value="'+m+'" class="menuSortBy" '+c+" /><span>"+y.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=n.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,r.open(l);var h=l.querySelectorAll(".menuSortBy");for(s=0,u=h.length;s<u;s++)h[s].addEventListener("change",a);var v=l.querySelectorAll(".menuSortOrder");for(s=0,u=v.length;s<u;s++)v[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o}}]);